import React from "react";
import image from "../../../assets/lemon.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import "./SpecialCard.css";

function SpecialCard() {
  return (
    <div className="card">
      <img src={image} />
      <div className="card-content">
        <div className="card-title">
          <h4>Lemon pie</h4>
          <p className="price">$ 5.99</p>
        </div>
        <p>
          Our Lemon Pie is the perfect combination of tangy and sweet. Made with
          fresh lemons, this pie has a light and creamy filling that is nestled
          in a flaky, buttery crust.
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
