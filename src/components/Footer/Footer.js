import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-square.png";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="footer-bg">
      <div className="container">
        <footer>
          <div className="footer-grid">
            <div>
              <img src={logo} />
            </div>
            <div>
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#callToAction");
                    }}
                  >
                    <p>Home</p>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    scrollTo("#booking");
                  }}
                >
                  <Link to="/booking">
                    <p>Booking</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#testimonials");
                    }}
                  >
                    <p>Testimonials</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#about");
                    }}
                  >
                    <p>About</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <p>Chicago, IL 60000-0000</p>
                </li>
                <li></li>
                <li>
                  <p>+351 222 222 222</p>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="insta-icon"
                  >
                    <FontAwesomeIcon
                      icon={faCamera}
                      size={"sm"}
                      color={"#f4ce14"}
                    />{" "}
                    <p style={{ paddingLeft: "5px" }}> Instagram</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
