import React from "react";

function Reservation() {
  return (
    <div className="container">
      <div className="reservation">
        <div className="reservation-grid">
          <div className="reservation-left">
            <h1>Reserve a table</h1>
            <h4>Reserve your table at Little Lemon Today!</h4>
            <div className="reservation-card">
              <form>
                <label>Date*</label>
                <input />
                <label>Hour*</label>
                <input />
                <label>Persons</label>
                <input />
                <div className="reservation-terms">
                  <input
                    id="radio-button"
                    type="radio"
                    style={{ width: "12px" }}
                  />
                  <span>
                    I confirm that I have read and agree to the Little Lemon
                    Terms of Service and Privacy Policy.
                  </span>
                </div>
                <button>Confirm Reservation</button>
              </form>
            </div>
          </div>
          <div>a</div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
