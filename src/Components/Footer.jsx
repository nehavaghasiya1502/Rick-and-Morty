import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaGithub, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  const [counts, setCounts] = useState({
    characters: 0,
    locations: 0,
    episodes: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res1 = await fetch("https://rickandmortyapi.com/api/character");
        const res2 = await fetch("https://rickandmortyapi.com/api/location");
        const res3 = await fetch("https://rickandmortyapi.com/api/episode");

        const data1 = await res1.json();
        const data2 = await res2.json();
        const data3 = await res3.json();

        setCounts({
          characters: data1.info.count,
          locations: data2.info.count,
          episodes: data3.info.count,
        });
      } catch (error) {
        console.log("API error:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <footer className="rm-footer">
      <div className="rm-stats">
        <span>CHARACTERS: <b>{counts.characters}</b></span>
        <span>LOCATIONS: <b>{counts.locations}</b></span>
        <span>EPISODES: <b>{counts.episodes}</b></span>
      </div>

      <div className="rm-server">
        SERVER STATUS <span className="status-dot"></span>
      </div>
      
      <div className="rm-powered">
        <a href="https://www.netlify.com" target="_blank" rel="noreferrer">
          <div>
            <img
              src="https://www.netlify.com/v3/img/components/logomark.png"
              alt="netlify"
            />
            <span>Deploys by <b>Netlify</b></span>
          </div>
        </a>

        <a href="https://stellate.co" target="_blank" rel="noreferrer">
          <div>
            <span>Powered by <b>Stellate</b></span>
          </div>
        </a>
      </div>


      <div className="rm-social">
        <FaGithub />
        <FaTwitter />
        <FaHeart />
      </div>

      <div className="rm-copy">
        &lt;&gt; by <b>Axel Fuhrmann</b> 2026
      </div>
    </footer>
  );
};

export default Footer;
