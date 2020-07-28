import React from "react";

import "./styles.css";
import logo from "../../assets/logo.png";
import ButtonLink from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="GeekFlix" />
      </a>
      
      <ButtonLink className="ButtonLink" href="/">
          Novo Video
      </ButtonLink>
    </nav>
  );
}

export default Menu;
