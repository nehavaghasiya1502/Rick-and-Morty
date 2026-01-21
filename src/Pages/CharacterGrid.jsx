// import React, { useEffect, useState } from "react";
// import "./CharacterGrid.css";
// import CharacterCard from "./CharacterCard";

// const CharacterGrid = () => {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const res1 = await fetch("https://rickandmortyapi.com/api/character?page=1");
//         const res2 = await fetch("https://rickandmortyapi.com/api/character?page=2");
//         const res3 = await fetch("https://rickandmortyapi.com/api/character?page=3");

//         const data1 = await res1.json();
//         const data2 = await res2.json();
//         const data3 = await res3.json();

//         const allCharacters = [
//           ...data1.results,
//           ...data2.results,
//           ...data3.results,
//         ];

//         const alive = allCharacters.filter(c => c.status === "Alive");
//         const dead = allCharacters.filter(c => c.status === "Dead");
//         const unknown = allCharacters.filter(c => c.status === "unknown");

//         const mixedFixed = [
//           alive[0],
//           dead[0],
//           unknown[0],
//           alive[1],
//           dead[1],
//           unknown[1],
//         ].filter(Boolean);

//         const updatedCharacters = await Promise.all(
//           mixedFixed.map(async (char) => {
//             const res = await fetch(char.episode[0]);
//             const epData = await res.json();
//             return { ...char, firstEpisodeName: epData.name };
//           })
//         );

//         setCharacters(updatedCharacters);
//         setLoading(false);

//       } catch (error) {
//         console.log("Fetch error:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>;
//   }

//   return (
//     <div className="rm-grid">
//       {characters.map((char) => (
//         <CharacterCard key={char.id} char={char} />
//       ))}
//     </div>
//   );
// };

// export default CharacterGrid;
import React, { useEffect, useState } from "react";
import "./CharacterGrid.css";
import CharacterCard from "./CharacterCard";

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const urls = [
          "https://rickandmortyapi.com/api/character?page=1",
          "https://rickandmortyapi.com/api/character?page=2",
          "https://rickandmortyapi.com/api/character?page=3",
        ];

        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const pages = await Promise.all(responses.map((res) => res.json()));

        const allCharacters = pages.flatMap((page) => page.results);

        const alive = allCharacters.filter((c) => c.status === "Alive");
        const dead = allCharacters.filter((c) => c.status === "Dead");
        const unknown = allCharacters.filter((c) => c.status === "unknown");

        const mixedFixed = [
          alive[0],
          dead[0],
          unknown[0],
          alive[1],
          dead[1],
          unknown[1],
        ].filter(Boolean);

        const updatedCharacters = await Promise.all(
          mixedFixed.map(async (char) => {
            if (!char.episode || char.episode.length === 0) return char;

            const res = await fetch(char.episode[0]);
            const epData = await res.json();
            return { ...char, firstEpisodeName: epData.name };
          })
        );

        setCharacters(updatedCharacters);
        setLoading(false);
      } catch (error) {
        console.log("Fetch error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="rm-grid">
      {characters.map((char) => (
        <CharacterCard key={char.id} char={char} />
      ))}
    </div>
  );
};

export default CharacterGrid;
