import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/restauranfood.jpg";

function CallToAction() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/booking");
  };
  return (
    <div className="main-bg">
      <div className="container">
        <main>
          <div className="main-content">
            <div className="main-left-content">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent euismod condimentum ante finibus consequat. Donec
                Mauris accumsan tellus mi, vitae rutrum felis scelerisque at.{" "}
              </p>
              <button onClick={handleSubmit} aria-label="Reserve a table">
                Reserve a table
              </button>
            </div>
            <div className="main-right-content">
              <img src={image} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CallToAction;
