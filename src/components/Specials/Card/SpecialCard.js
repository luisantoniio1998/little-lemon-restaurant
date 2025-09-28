import React from "react";
import image from "../../../assets/lemon.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import "./SpecialCard.css";

function SpecialCard({ item }) {
  // Default item for fallback when no API data is available
  const defaultItem = {
    name: "Lemon pie",
    price: "5.99",
    description: "Our Lemon Pie is the perfect combination of tangy and sweet. Made with fresh lemons, this pie has a light and creamy filling that is nestled in a flaky, buttery crust."
  };

  const menuItem = item || defaultItem;

  return (
    <div className="card">
      <img src={image} alt={menuItem.name} />
      <div className="card-content">
        <div className="card-title">
          <h4>{menuItem.name}</h4>
          <p className="price">$ {parseFloat(menuItem.price).toFixed(2)}</p>
        </div>
        <p>
          {menuItem.description}
        </p>
        <h4 style={{ marginTop: "1em" }}>
          Order a Delivery{" "}
          <FontAwesomeIcon
            icon={faTruck}
            size={"sm"}
            color="black"
            style={{ paddingLeft: "5px" }}
          />
        </h4>
      </div>
    </div>
  );
}

export default SpecialCard;
