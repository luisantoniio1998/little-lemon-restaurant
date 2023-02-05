import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";

import "./BurguerMenu.css";

function BurguerMenu() {
  function showSettings(event) {
    event.preventDefault();
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Menu isOpen={menuOpen} onStateChange={handleStateChange}>
      <Link
        to="/"
        onClick={() => {
          closeMenu();
          scrollTo("#callToAction");
        }}
        className="nav-item"
      >
        <FontAwesomeIcon icon={faLemon} size={"sm"} color={"#977e00"} />
        <span style={{ marginLeft: "20px" }}>Home</span>
      </Link>
      <Link
        to="/booking"
        onClick={() => {
          closeMenu();
          scrollTo("#booking");
        }}
        className="nav-item"
      >
        <FontAwesomeIcon icon={faLemon} size={"sm"} color={"#977e00"} />
        <span style={{ marginLeft: "20px" }}>Booking</span>
      </Link>
      <Link
        to="#"
        onClick={() => {
          closeMenu();
          scrollTo("#testimonials");
        }}
        className="nav-item"
      >
        <FontAwesomeIcon icon={faLemon} size={"sm"} color={"#977e00"} />
        <span style={{ marginLeft: "20px" }}>Testimonials</span>
      </Link>
      <Link
        to="#"
        onClick={() => {
          closeMenu();
          scrollTo("#about");
        }}
        className="nav-item"
      >
        <FontAwesomeIcon icon={faLemon} size={"sm"} color={"#977e00"} />
        <span style={{ marginLeft: "20px" }}>About</span>
      </Link>
    </Menu>
  );
}

export default BurguerMenu;
