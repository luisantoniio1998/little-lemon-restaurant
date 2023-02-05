import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../../API";

function BookingForm({ dispatch, state }) {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("17:00");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      res_date: reservationDate,
      res_time: reservationTime,
      res_guests: numberOfGuests,
      res_occasion: occasion,
    };
    console.log(reservation);
    const submitResponse = submitAPI(reservation);
    if (submitResponse === true) {
      navigate("/booking/confirmed");
    }
  };

  function handleDateChange(e) {
    setReservationDate(e.target.value);
    dispatch({ type: "update_times", selectedDate: e.target.value });
  }

  {
    /* Validation for guests*/
  }
  const [guestsError, setGuestsError] = useState(false);

  const handleGuestsChange = (e) => {
    const value = e.target.value;
    setGuestsError(value > 10 || value < 1);
    setNumberOfGuests(value);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={reservationDate}
        onChange={handleDateChange}
        aria-label="Enter date mm/dd/yyyy"
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={reservationTime}
        onChange={(e) => {
          setReservationTime(e.target.value);
        }}
        aria-label="Select time HH:MM"
      >
        {state?.availableTimes?.map((time) => (
          <option key={time} value={time} aria-label={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={handleGuestsChange}
        className={guestsError ? "input-error" : ""}
        aria-label="Enter number of guests"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
        aria-label="Select an Occasion"
      >
        <option aria-label="Birthday">Birthday</option>
        <option aria-label="Anniversary">Anniversary</option>
      </select>
      <input
        type="submit"
        className="submit-button"
        style={
          !reservationDate
            ? { backgroundColor: "#d9d9d9" }
            : { backgroundColor: "#f4ce14" }
        }
        value="Make Your reservation"
        disabled={!reservationDate}
        aria-label="Submit your reservation"
      />
    </form>
  );
}

export default BookingForm;
