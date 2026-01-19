import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EpisodeDetail = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((res) => res.json())
      .then((data) => setEpisode(data));
  }, [id]);

  if (!episode) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      color: "white",
      padding: "2px",
      fontFamily: "monospace"
    }}>
      <h1>{episode.name}</h1>
      <p><b>Episode:</b> {episode.episode}</p>
      <p><b>Air Date:</b> {episode.air_date}</p>
      <p><b>Total Characters:</b> {episode.characters.length}</p>
    </div>
  );
};

export default EpisodeDetail;
