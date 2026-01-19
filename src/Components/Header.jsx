import React from "react";
import "./Header.css";
import LogoSVG from "../Pages/LogoSVG";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <LogoSVG />
      </div>

      <nav className="header-right">
        <ul className="menu">
          <li><a href="#docs">Docs</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        <button className="support-btn">SUPPORT US</button>
      </nav>
    </header>
  );
};

export default Header;
