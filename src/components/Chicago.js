import React from "react";
import image from "../assets/map.png";

function Chicago() {
  return (
    <div id="about" className="container">
      <div className="chicago">
        <div className="chicago-grid">
          <div className="chicago-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              euismod condimentum ante finibus consequat. Donec vitae nisl
              mollis, vehicula sem ut, imperdiet tellus. Duis magna tellus,
              ultrices quis molestie nec, ullamcorper in urna. Mauris accumsan
              tellus mi, vitae rutrum felis scelerisque at.{" "}
            </p>
          </div>
          <div className="chicago-right">
            <img id="image1" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chicago;
