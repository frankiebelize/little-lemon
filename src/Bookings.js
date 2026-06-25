import BookingForm from './components/bookingpage/bookingForm';

function Bookings() {
  return (
    <main>
      <h1>Reserve a Table</h1>
      <BookingForm 
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTimes}
      />
    </main>
  );
}

export default Bookings;