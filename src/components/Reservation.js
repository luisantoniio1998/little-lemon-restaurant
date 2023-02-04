import React, { useEffect, useReducer } from "react";
import image from "../assets/restauranfood.jpg";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../API";

const reducer = (state, action) => {
  switch (action.type) {
    case "update_times":
      return {
        ...state,
        availableTimes: updateTimes(action.selectedDate),
      };
    default:
      return state;
  }
};

export function updateTimes(selectedDate) {
  const date = new Date(selectedDate);
  return fetchAPI(date);
}

export function initializeTimes() {
  return {
    availableTimes: fetchAPI(new Date()),
  };
}

function Reservation() {
  const [state, dispatch] = useReducer(reducer, initializeTimes());

  return (
    <div className="container">
      <div className="reservation">
        <div className="reservation-grid">
          <div className="reservation-left">
            <h1>Reserve a table</h1>
            <h4>Reserve your table at Little Lemon Today!</h4>
            <div className="reservation-card">
              <BookingForm dispatch={dispatch} state={state} />
            </div>
          </div>
          <div className="reservation-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
              purus vitae neque commodo pulvinar. Nunc venenatis quis lorem ac
              varius. Curabitur justo est, pretium eget metus at, auctor rhoncus
              elit. Donec eget massa sem. Pellentesque pellentesque enim et
              neque scelerisque, eget scelerisque quam vulputate. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
