import CustomersReview from './components/homepage/CustomerReview'; // Import the homepage components
import CallToAction from './components/homepage/CallToAction'; // Import the homepage components
import Chicago from './components/homepage/Chicago'; // Import the homepage components
import Specials from './components/homepage/Specials'; // Import the homepage components
import  './components/homepage/homepage.css'; // Import the homepage CSS

function HomePage() {
  return (
    <div>
      <CallToAction />
      <Chicago />
      <Specials />
      <CustomersReview />
    </div>
  );
}

export default HomePage;