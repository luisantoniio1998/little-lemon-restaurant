import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes, state } from "./components/Reservation";
import { fetchAPI } from "./API";

const mockedUsedNavigate = jest.fn();

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Occasion");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes validate that it returns expected value", () => {
  const expectedResult = { availableTimes: fetchAPI(new Date()) };
  const result = initializeTimes();
  expect(result).toEqual(expectedResult);
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("updateTimes", () => {
  const selectedDate = new Date("2022-06-01");
  const availableTimes = updateTimes(selectedDate);

  expect(Array.isArray(availableTimes)).toBe(true);
  expect(availableTimes).toEqual([
    "17:00",
    "17:30",
    "18:00",
    "20:00",
    "21:00",
    "23:30",
  ]);
});
