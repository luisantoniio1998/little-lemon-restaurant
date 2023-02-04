import React from "react";
import image from "../assets/lemon.jpg";

function Chicago() {
  return (
    <div className="specials-bg">
      <div className="container">
        <div className="specials">
          <h1>This weeks specials</h1>
          <div className="specials-grid">
            {/* card */}
            <div className="card">
              <img src={image} />
              <div className="card-content">
                <div className="card-title">
                  <p style={{ color: "black" }}>Lemon pie</p>
                  <p style={{ color: "#EE9872" }}>$ 5.99</p>
                </div>
                <p>
                  Our Lemon Pie is the perfect combination of tangy and sweet.
                  Made with fresh lemons, this pie has a light and creamy
                  filling that is nestled in a flaky, buttery crust.
                </p>
                <h4>Order a Delivery</h4>
              </div>
            </div>
            {/* card */}
            <div className="card">
              <img src={image} />
              <div className="card-content">
                <div className="card-title">
                  <p style={{ color: "black" }}>Lemon pie</p>
                  <p style={{ color: "#EE9872" }}>$ 5.99</p>
                </div>
                <p>
                  Our Lemon Pie is the perfect combination of tangy and sweet.
                  Made with fresh lemons, this pie has a light and creamy
                  filling that is nestled in a flaky, buttery crust.
                </p>
                <h4>Order a Delivery</h4>
              </div>
            </div>
            {/* card */}
            <div className="card">
              <img src={image} />
              <div className="card-content">
                <div className="card-title">
                  <p style={{ color: "black" }}>Lemon pie</p>
                  <p style={{ color: "#EE9872" }}>$ 5.99</p>
                </div>
                <p>
                  Our Lemon Pie is the perfect combination of tangy and sweet.
                  Made with fresh lemons, this pie has a light and creamy
                  filling that is nestled in a flaky, buttery crust.
                </p>
                <h4>Order a Delivery</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chicago;
