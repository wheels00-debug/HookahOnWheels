import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Rentals from './components/Rentals';
import EventPackages from './components/EventPackages';
import Products from './components/Products';
import InstagramFeed from './components/InstagramFeed';
import Blog from './components/Blog';
import Faqs from './components/Faqs';
import Newsletter from './components/Newsletter';
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
      {/* Top Sticky Glass Navbar */}
      <Navbar />

      {/* Fullscreen Interactive Smoke Hero */}
      <Hero />

      {/* Premium Shisha Services */}
      <Services />

      {/* Rentals & Packages Showcase */}
      <Rentals />

      {/* Event Luxury Packages Showcase */}
      <EventPackages />

      {/* E-Commerce Elite Store Showcase */}
      <Products />

      {/* Simulated Premium Instagram Feed */}
      <InstagramFeed />

      {/* The Luxury Journal (Blog) */}
      <Blog />

      {/* FAQs Accordion System */}
      <Faqs />

      {/* Invitation Newsletter Sign-up */}
      <Newsletter />

      {/* white-glove Booking Form */}
      <BookingForm />

      {/* Luxury Footer with badging */}
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
