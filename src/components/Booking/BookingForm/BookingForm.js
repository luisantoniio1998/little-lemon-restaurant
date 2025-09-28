import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bookingAPI } from "../../../API";
import "./BookingForm.css";

function BookingForm({ dispatch, state }) {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("17:00");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const reservation = {
      res_date: reservationDate,
      res_time: reservationTime,
      res_guests: numberOfGuests,
      res_occasion: occasion,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone,
    };

    try {
      const response = await bookingAPI.submitBooking(reservation);

      if (response.success) {
        navigate("/booking/confirmed", {
          state: {
            ...reservation,
            booking_id: response.data.id
          }
        });
      } else {
        setSubmitError(response.error || "Failed to submit booking. Please try again.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
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
      <label htmlFor="customer-name">Full Name</label>
      <input
        type="text"
        id="customer-name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        aria-label="Enter your full name"
        required
      />

      <label htmlFor="customer-email">Email</label>
      <input
        type="email"
        id="customer-email"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
        aria-label="Enter your email address"
        required
      />

      <label htmlFor="customer-phone">Phone Number</label>
      <input
        type="tel"
        id="customer-phone"
        value={customerPhone}
        onChange={(e) => setCustomerPhone(e.target.value)}
        aria-label="Enter your phone number"
        required
      />

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

      <label htmlFor="occasion">Occasion / Special Requests</label>
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
        <option aria-label="Business Dinner">Business Dinner</option>
        <option aria-label="Date Night">Date Night</option>
        <option aria-label="Other">Other</option>
      </select>

      {submitError && (
        <div className="error-message" style={{ color: 'red', marginBottom: '1em' }}>
          {submitError}
        </div>
      )}

      <input
        type="submit"
        className="submit-button"
        style={
          !reservationDate || isSubmitting
            ? { backgroundColor: "#d9d9d9" }
            : { backgroundColor: "#f4ce14" }
        }
        value={isSubmitting ? "Submitting..." : "Make Your reservation"}
        disabled={!reservationDate || isSubmitting}
        aria-label="Submit your reservation"
      />
    </form>
  );
}

export default BookingForm;
