// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const CharacterDetail = () => {
//   const { id } = useParams();
//   const [character, setCharacter] = useState(null);

//   useEffect(() => {
//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//       .then((res) => res.json())
//       .then((data) => setCharacter(data));
//   }, [id]);

//   if (!character) return <h2 style={{ color: "white" }}>Loading...</h2>;

//   return (
//     <div style={{
//       background: "#000",
//       minHeight: "100vh",
//       color: "white",
//     //   padding: "px 100px",
//       fontFamily: "monospace",
//       fontSize: "14px",
//       whiteSpace: "pre-wrap"
//     }}>
//       {JSON.stringify(character, null, 2)}
//     </div>
//   );
// };

// export default CharacterDetail;
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <h2 style={{ color: "white" }}>Loading...</h2>;

  const locationId = character.location.url.split("/").pop();

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      color: "white",
      padding: "2px",
      fontFamily: "monospace"
    }}>

      {/* Raw JSON */}
      <pre style={{ fontSize: "13px", whiteSpace: "pre-wrap" }}>
        {JSON.stringify(character, null, 2)}
      </pre>
    </div>
  );
};

export default CharacterDetail;
