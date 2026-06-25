import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from './Nav';
import About from './About';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import HomePage from './HomePage';
import Bookings from './Bookings';

export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export function updateTimes(state, action) {
  return state;
}

function Main() {

   const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
    return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </main>
    );
  }
  
  export default Main;