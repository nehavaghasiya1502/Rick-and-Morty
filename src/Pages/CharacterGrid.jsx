import React, { useEffect, useState } from "react";
import "./CharacterGrid.css";
import { Link } from "react-router-dom";


const CharacterGrid = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        console.log("API DATA:", data);

        if (data && data.results) {
          setCharacters(data.results.slice(0, 6));
        }
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
        <div className="rm-card" key={char.id}>
          <img src={char.image} alt={char.name} />

          <div className="rm-info">
            <h2>
              <Link to={`/character/${char.id}`} className="rm-link">
                {char.name}
              </Link>
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
            {char.location.url ? (
              <p>
                <Link
                  to={`/location/${char.location.url.split("/").pop()}`}
                  className="rm-link"
                >
                  {char.location.name}
                </Link>
              </p>
            ) : (
              <p>{char.location.name}</p>
            )}


            <p className="label">First seen in:</p>
            {char.episode.length > 0 ? (
              <p>
                <Link
                  to={`/episode/${char.episode[0].split("/").pop()}`}
                  className="rm-link"
                >
                  Open First Episode
                </Link>
              </p>
            ) : (
              <p>Unknown</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );


};

export default CharacterGrid;
