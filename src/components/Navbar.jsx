import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check if anything was clicked in "Buy Now" to simulate cart additions
    const handleCartUpdate = () => {
      setCartCount(prev => prev + 1);
    };
    window.addEventListener('add-to-cart-simulated', handleCartUpdate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('add-to-cart-simulated', handleCartUpdate);
    };
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
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="navbar-logo">
          <img src={logo} alt="Hookah On Wheels Logo" className="logo-img" />
          <span className="logo-text heading-serif gold-text-gradient">Hookah On Wheels</span>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          <li><NavLink to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/store" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Store</NavLink></li>
          <li><NavLink to="/journal" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Journal</NavLink></li>
          <li><NavLink to="/faqs" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>FAQs</NavLink></li>
          <li><a href="#book" onClick={(e) => handleLinkClick(e, 'book')} className="nav-link">Contact</a></li>
        </ul>

        <div className="navbar-actions">
          {/* Search Icon */}
          <button className="nav-icon-btn" aria-label="Search Store">
            <Search size={20} />
          </button>

          {/* Cart Bag Icon with dynamic counter */}
          <button 
            className="nav-icon-btn cart-btn" 
            aria-label="Cart"
            onClick={(e) => handleLinkClick(e, 'book')}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <motion.span 
                className="cart-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={cartCount}
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          <a href="#book" onClick={(e) => handleLinkClick(e, 'book')} className="btn-gold btn-nav">
            Book Now
          </a>
          
          <button 
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
            onClick={toggleMobileMenu} 
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-menu-links">
              <li><NavLink to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink></li>
              <li><NavLink to="/store" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Store</NavLink></li>
              <li><NavLink to="/journal" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Journal</NavLink></li>
              <li><NavLink to="/faqs" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>FAQs</NavLink></li>
              <li><a href="#book" onClick={(e) => handleLinkClick(e, 'book')} className="mobile-nav-link">Contact</a></li>
              <li style={{ marginTop: '20px' }}>
                <a href="#book" onClick={(e) => handleLinkClick(e, 'book')} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Book Now</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

