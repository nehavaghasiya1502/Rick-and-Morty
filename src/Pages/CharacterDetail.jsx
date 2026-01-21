import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <h2 style={{ color: "white" }}>Loading...</h2>;

  const openNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      color: "white",
      padding: "20px",
      fontFamily: "monospace",
      whiteSpace: "pre-wrap"
    }}>
      {`{
  "id": ${character.id},
  "name": "${character.name}",
  "status": "${character.status}",
  "species": "${character.species}",
  "type": "${character.type}",
  "gender": "${character.gender}",
  "origin": {
    "name": "${character.origin?.name}",
    "url": "${character.origin?.url}"
  },
  "location": {
    "name": "${character.location?.name}",
    "url": "`}
      <span
        onClick={() => openNewTab(character.location.url.replace("https://rickandmortyapi.com/api", ""))}
        style={{ color: "white", cursor: "pointer", textDecoration: "underline" }}
      >
        {character.location?.url}
      </span>
      {`"
  },
  "image": "${character.image}",
  "episode": [`}
      {character.episode.map((ep, i) => {
        const route = ep.replace("https://rickandmortyapi.com/api", "");
        return (
          <div key={i} style={{ marginLeft: "20px" }}>
            "
            <span
              onClick={() => openNewTab(route)}
              style={{ color: "white", cursor: "pointer", textDecoration: "underline" }}
            >
              {ep}
            </span>
            "{i !== character.episode.length - 1 ? "," : ""}
          </div>
        );
      })}
      {`  ],
  "url": "${character.url}",
  "created": "${character.created}"
}`}
    </div>
  );
};

export default CharacterDetail;
