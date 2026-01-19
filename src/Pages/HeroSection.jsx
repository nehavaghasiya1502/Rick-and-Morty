import React from "react";
import "./HeroSection.css";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <section className="hero">

      {/* Background SVG */}
      <div className="hero-bg">
        <HeroImage />
      </div>

      {/* Front content */}
      <div className="hero-content">
        <h1>The Rick and Morty API</h1>
      </div>

    </section>
  );
};

export default HeroSection;
