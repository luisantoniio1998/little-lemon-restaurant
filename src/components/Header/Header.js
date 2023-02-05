import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";

function Header() {
  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header>
      <Link
        to="/"
        className="header-img"
        onClick={() => scrollTo("#callToAction")}
      >
        <img src={logo} alt="Little Lemon logo" />
      </Link>
    </header>
  );
}

export default Header;
