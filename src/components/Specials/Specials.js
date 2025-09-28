import React from "react";
import SpecialCard from "./Card/SpecialCard";
import "./Specials.css";

function Specials() {
  // Temporarily using static content to fix white page issue
  // API integration will be re-enabled after ensuring page loads
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
