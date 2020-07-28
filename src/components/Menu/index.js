import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/logo.png";
import ButtonLink from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="GeekFlix" />
      </Link>

      <ButtonLink className="ButtonLink" href="/cadastro/video">
        Novo Video
      </ButtonLink>
    </nav>
  );
}

export default Menu;
