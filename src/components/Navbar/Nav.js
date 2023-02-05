import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import BurguerMenu from "./BurguerMenu/BurguerMenu";
import "./Nav.css";

function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="nav-bg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        display: "block",
        zIndex: 1,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    >
      <BurguerMenu />
      <div className="container">
        <nav>
          <Header />
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  scrollTo("#callToAction");
                }}
              >
                Home
              </Link>
            </li>
            <li
              onClick={() => {
                scrollTo("#booking");
              }}
            >
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  scrollTo("#testimonials");
                }}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  scrollTo("#about");
                }}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
