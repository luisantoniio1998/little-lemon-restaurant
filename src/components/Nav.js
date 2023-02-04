import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Nav() {
  return (
    <div className="navbar">
      <div class="container">
        <Header />
        <nav>
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/booking" className="nav-item">
            Reservation
          </Link>
          <Link
            to="#"
            onClick={() => {
              const aboutElement = document.querySelector("#testimonials");
              aboutElement.scrollIntoView({ behavior: "smooth" });
            }}
            className="nav-item"
          >
            Testimonials
          </Link>
          <Link
            to="#"
            onClick={() => {
              const aboutElement = document.querySelector("#about");
              aboutElement.scrollIntoView({ behavior: "smooth" });
            }}
            className="nav-item"
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
