import React from "react";
import { useLocation } from "react-router-dom";
import "./BookingConfirmation.css";

function BookingConfirmation() {
  const location = useLocation();
  return (
    <div className="confirm-bg">
      <div className="container">
        <div className="confirm-page">
          <h1>Booking has been confirmed</h1>
          <p>Date: {location.state.res_date}</p>
          <p>Time: {location.state.res_time}</p>
          <p>Number of Guests: {location.state.res_guests}</p>
          <p>Occasion: {location.state.res_occasion}</p>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
