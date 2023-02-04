import React, { useState } from "react";

function BookingForm() {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("17:00");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reservationDate);
    console.log(reservationTime);
    console.log(numberOfGuests);
    console.log(occasion);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={reservationDate}
        onChange={(e) => {
          setReservationDate(e.target.value);
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        value={reservationTime}
        onChange={(e) => {
          setReservationTime(e.target.value);
        }}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
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
        onChange={(e) => {
          setNumberOfGuests(e.target.value);
        }}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
