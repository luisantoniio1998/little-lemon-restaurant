import React from "react";
import SpecialCard from "./Card/SpecialCard";
import "./Specials.css";

function Specials() {
  return (
    <div className="specials-bg">
      <div className="container">
        <div className="specials">
          <h1>This weeks specials</h1>
          <div className="specials-grid">
            <SpecialCard />
            <SpecialCard />
            <SpecialCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;
