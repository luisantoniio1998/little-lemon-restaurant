import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes, state } from "./components/Reservation";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Occasion");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes validate that it returns expected value", () => {
  const expectedResult = { availableTimes: ["17:00", "18:00", "19:00"] };
  const result = initializeTimes();
  expect(result).toEqual(expectedResult);
});

test("updateTimes", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const result = updateTimes(state, { type: "update_time", payload: state });
  expect(result).toEqual(state);
});
