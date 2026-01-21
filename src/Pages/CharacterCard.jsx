// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const CharacterCard = ({ char }) => {
//   const [firstEpisode, setFirstEpisode] = useState(null);

//   useEffect(() => {
//     if (char.episode.length > 0) {
//       fetch(char.episode[0])
//         .then(res => res.json())
//         .then(data => setFirstEpisode(data))
//         .catch(err => console.log(err));
//     }
//   }, [char]);

//   return (
//     <div className="rm-card">
//       <img src={char.image} alt={char.name} />

//       <div className="rm-info">
//         <h2>
//           <Link to={`/character/${char.id}`} className="rm-link">
//             {char.name}
//           </Link>
//         </h2>

//         <p className="status">
//           <span
//             className={
//               char.status === "Alive"
//                 ? "dot green"
//                 : char.status === "Dead"
//                 ? "dot red"
//                 : "dot gray"
//             }
//           ></span>
//           {char.status} - {char.species}
//         </p>

//         <p className="label">Last known location:</p>
//         <p>
//           {char.location.url ? (
//             <Link
//               to={`/location/${char.location.url.split("/").pop()}`}
//               className="rm-link"
//             >
//               {char.location.name}
//             </Link>
//           ) : (
//             char.location.name
//           )}
//         </p>

//         <p className="label">First seen in:</p>
//         <p>
//           {firstEpisode ? (
//             <Link to={`/episode/${firstEpisode.id}`} className="rm-link">
//               {firstEpisode.name}
//             </Link>
//           ) : (
//             "Loading episode..."
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CharacterCard;
import React, { useEffect, useState } from "react";

const CharacterCard = ({ char }) => {
  const [firstEpisode, setFirstEpisode] = useState(null);

  useEffect(() => {
    if (char.episode.length > 0) {
      fetch(char.episode[0])
        .then((res) => res.json())
        .then((data) => setFirstEpisode(data))
        .catch((err) => console.log(err));
    }
  }, [char]);

  return (
    <div className="rm-card">
      <img src={char.image} alt={char.name} />

      <div className="rm-info">
        <h2>
          <a
            href={`/character/${char.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rm-link"
          >
            {char.name}
          </a>
        </h2>

        <p className="status">
          <span
            className={
              char.status === "Alive"
                ? "dot green"
                : char.status === "Dead"
                ? "dot red"
                : "dot gray"
            }
          ></span>
          {char.status} - {char.species}
        </p>

        <p className="label">Last known location:</p>
        <p>
          {char.location.url ? (
            <a
              href={`/location/${char.location.url.split("/").pop()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rm-link"
            >
              {char.location.name}
            </a>
          ) : (
            char.location.name
          )}
        </p>

        <p className="label">First seen in:</p>
        <p>
          {firstEpisode ? (
            <a
              href={`/episode/${firstEpisode.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rm-link"
            >
              {firstEpisode.name}
            </a>
          ) : (
            "Loading episode..."
          )}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
