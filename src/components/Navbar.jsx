import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="navbar-logo">
          <img src={logo} alt="Hookah On Wheels Logo" className="logo-img" />
          <span className="logo-text heading-serif gold-text-gradient">Hookah On Wheels</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="nav-link">Home</a></li>
          <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="nav-link">Services</a></li>
          <li><a href="#rentals" onClick={(e) => handleLinkClick(e, 'rentals')} className="nav-link">Rentals</a></li>
          <li><a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="nav-link">Buy Hookahs</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="nav-link">Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <a href="#book" onClick={(e) => handleLinkClick(e, 'book')} className="btn-gold btn-nav">Book Now</a>
          
          <button className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-menu-links">
          <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="mobile-nav-link">Home</a></li>
          <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="mobile-nav-link">Services</a></li>
          <li><a href="#rentals" onClick={(e) => handleLinkClick(e, 'rentals')} className="mobile-nav-link">Rentals</a></li>
          <li><a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="mobile-nav-link">Buy Hookahs</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="mobile-nav-link">Contact</a></li>
          <li style={{ marginTop: '20px' }}>
            <a href="#book" onClick={(e) => handleLinkClick(e, 'book')} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Book Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
