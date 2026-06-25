import { render, screen } from "@testing-library/react";
import BookingForm from "./components/bookingpage/BookingForm";
import { initializeTimes, updateTimes } from "./Main";

test("Renders the BookingForm date label", () => {
  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  render(<BookingForm availableTimes={availableTimes} />);

  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("initializeTimes returns the correct times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  expect(initializeTimes()).toEqual(expectedTimes);
});

test("updateTimes returns the same state", () => {
  const currentState = ["17:00", "18:00", "19:00"];

  expect(updateTimes(currentState)).toEqual(currentState);
});
