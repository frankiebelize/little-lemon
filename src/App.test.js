import { render, screen } from "@testing-library/react";
import BookingForm from "./components/bookingpage/bookingForm";

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
