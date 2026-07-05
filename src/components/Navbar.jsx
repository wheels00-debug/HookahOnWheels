import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
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
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="navbar-logo">
          <img src={logo} alt="Hookah On Wheels Logo" className="logo-img" />
          <span className="logo-text heading-serif gold-text-gradient">Hookah On Wheels</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="nav-link">Home</a></li>
          <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="nav-link">Services</a></li>
          <li><a href="#rentals" onClick={(e) => handleLinkClick(e, 'rentals')} className="nav-link">Rentals</a></li>
          <li><a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="nav-link">Store</a></li>
          <li><a href="#blog" onClick={(e) => handleLinkClick(e, 'blog')} className="nav-link">Journal</a></li>
          <li><a href="#faqs" onClick={(e) => handleLinkClick(e, 'faqs')} className="nav-link">FAQs</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="nav-link">Contact</a></li>
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
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="mobile-nav-link">Home</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="mobile-nav-link">Services</a></li>
              <li><a href="#rentals" onClick={(e) => handleLinkClick(e, 'rentals')} className="mobile-nav-link">Rentals</a></li>
              <li><a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="mobile-nav-link">Store</a></li>
              <li><a href="#blog" onClick={(e) => handleLinkClick(e, 'blog')} className="mobile-nav-link">Journal</a></li>
              <li><a href="#faqs" onClick={(e) => handleLinkClick(e, 'faqs')} className="mobile-nav-link">FAQs</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="mobile-nav-link">Contact</a></li>
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

