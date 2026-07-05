import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

// Lazy loaded Pages for Code Splitting
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const StorePage = lazy(() => import('./pages/StorePage'));
const JournalPage = lazy(() => import('./pages/JournalPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));

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

      <main>
        <Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', color: '#d4af37' }}>
            <div className="animate-pulse-slow">Loading Premium Experience...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/faqs" element={<FaqPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Globally available Booking Form */}
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
