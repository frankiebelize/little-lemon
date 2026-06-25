import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/bookings">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;