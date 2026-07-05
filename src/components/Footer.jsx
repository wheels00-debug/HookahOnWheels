import React from 'react';
import { Instagram, Phone, Mail, MapPin, Clock, ChevronUp, Shield, Award, Sparkles } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
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
    <footer id="contact" className="footer-section">
      <div className="footer-container container">
        
        {/* Trust Badges Bar */}
        <div className="footer-trust-badges">
          <div className="trust-badge-item glass-panel">
            <Shield className="trust-badge-icon" size={24} />
            <div className="trust-badge-text">
              <h5>Steam Sanitized</h5>
              <p>Medical-grade cleaning</p>
            </div>
          </div>
          <div className="trust-badge-item glass-panel">
            <Clock className="trust-badge-icon" size={24} />
            <div className="trust-badge-text">
              <h5>24/7 Availability</h5>
              <p>Bookings open all day</p>
            </div>
          </div>
          <div className="trust-badge-item glass-panel">
            <Sparkles className="trust-badge-icon" size={24} />
            <div className="trust-badge-text">
              <h5>White-Glove Setup</h5>
              <p>Sommelier styling included</p>
            </div>
          </div>
        </div>

        {/* Footer Top Grid */}
        <div className="footer-top-grid">
          
          {/* Brand Info */}
          <div className="footer-grid-col brand-col">
            <a href="#home" onClick={handleScrollToTop} className="footer-logo">
              <img src={logo} alt="Hookah On Wheels Logo" className="footer-logo-img" />
              <span className="footer-logo-text heading-serif gold-text-gradient">Hookah On Wheels</span>
            </a>
            <p className="brand-tagline">
              Bespoke luxury hookah rentals, sales, and white-glove event shisha sommelier services. Elevating your celebrations with Rolex-grade quality and design.
            </p>
            <div className="footer-social-row">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="tel:+919700009384" className="social-icon-wrapper" aria-label="Phone Call">
                <Phone size={18} />
              </a>
              <a href="mailto:info@hookah-on-wheels.com" className="social-icon-wrapper" aria-label="Mail Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-grid-col links-col">
            <h4 className="footer-col-title heading-serif">Quick Links</h4>
            <ul className="footer-col-links-list">
              <li><a href="#home" onClick={handleScrollToTop}>Home</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a></li>
              <li><a href="#rentals" onClick={(e) => handleLinkClick(e, 'rentals')}>Rental Packages</a></li>
              <li><a href="#products" onClick={(e) => handleLinkClick(e, 'products')}>Store & Products</a></li>
              <li><a href="#blog" onClick={(e) => handleLinkClick(e, 'blog')}>The Journal</a></li>
              <li><a href="#faqs" onClick={(e) => handleLinkClick(e, 'faqs')}>FAQs</a></li>
            </ul>
          </div>

          {/* Services Location info */}
          <div className="footer-grid-col info-col">
            <h4 className="footer-col-title heading-serif">Our Areas</h4>
            <p className="footer-info-item">
              <MapPin size={16} className="info-icon" />
              <span>Premium delivery across Chandigarh, Mohali, Zirakpur, and Panchkula. Custom event catering available nationwide.</span>
            </p>
            <p className="footer-info-item">
              <Phone size={16} className="info-icon" />
              <a href="tel:+919700009384" className="tel-link">+91 97000 09384</a>
            </p>
            <p className="footer-info-item">
              <Clock size={16} className="info-icon" />
              <span>Standard delivery: 2:00 PM – 2:00 AM daily. Booking desk is open 24/7.</span>
            </p>
          </div>

        </div>

        {/* Important Guidelines notice */}
        <div className="footer-guidelines-box glass-panel">
          <div className="guidelines-heading heading-serif gold-text-gradient">
            <Award size={16} />
            <span>ELITE STANDARDS NOTICE</span>
          </div>
          <ul className="guidelines-list">
            <li>* High-precision hygiene: every component undergoes steam sanitization and custom packaging before delivery.</li>
            <li>* Government laws apply: all customers must verify legal age requirements in their respective region before booking.</li>
            <li>* Security notice: a refundable deposit and official ID verification are required for all premium hardware rentals.</li>
          </ul>
        </div>

        {/* Divider */}
        <div className="footer-divider-line"></div>

        {/* Footer Bottom Row */}
        <div className="footer-bottom-row">
          <div className="bottom-left">
            <p className="copyright-text">
              © {new Date().getFullYear()} Hookah On Wheels. Designed for high-end lifestyle connoisseurs.
            </p>
            <div className="payment-gateways">
              <span className="payment-icon font-sans">VISA</span>
              <span className="payment-icon font-sans">MASTERCARD</span>
              <span className="payment-icon font-sans">UPI</span>
              <span className="payment-icon font-sans">APPLE PAY</span>
            </div>
          </div>
          
          {/* Scroll to Top */}
          <a href="#" onClick={handleScrollToTop} className="back-to-top-btn" aria-label="Scroll to top">
            <span>BACK TO TOP</span>
            <div className="chevron-up-wrapper">
              <ChevronUp size={16} />
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
}
