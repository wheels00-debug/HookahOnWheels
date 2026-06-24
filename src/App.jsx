import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Rentals from './components/Rentals';
import EventPackages from './components/EventPackages';
import Products from './components/Products';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  const handleFloatingClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('book');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Header Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Rentals & Packages Section */}
      <Rentals />

      {/* Luxury Event Packages Showcase */}
      <EventPackages />

      {/* Premium Foggit Hookahs Section */}
      <Products />

      {/* Booking Form Section */}
      <BookingForm />

      {/* Footer Details */}
      <Footer />

      {/* Floating Action Button for Booking */}
      <a 
        href="#book" 
        onClick={handleFloatingClick} 
        className="whatsapp-float animate-float"
        title="Book Hookah on WhatsApp"
        aria-label="Book on WhatsApp"
      >
        <span className="wa-icon-glow"></span>
        <span className="wa-icon">💬</span>
      </a>
    </>
  );
}

export default App;
