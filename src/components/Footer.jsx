import React from 'react';
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

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container container">
        
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" onClick={handleScrollToTop} className="footer-logo">
              <img src={logo} alt="Hookah On Wheels Logo" className="footer-logo-img" />
              <span className="footer-logo-text heading-serif gold-text-gradient">Hookah On Wheels</span>
            </a>
            <p className="brand-tagline">
              Premium Hookah Rental & Sales. Serving Chandigarh, Mohali, Zirakpur, Panchkula. Elevating every moment.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-title heading-serif">Quick Navigation</h4>
            <ul>
              <li><a href="#home" onClick={handleScrollToTop}>Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#rentals">Rentals & Flavors</a></li>
              <li><a href="#products">Foggit Collection</a></li>
              <li><a href="#book">Book Session</a></li>
            </ul>
          </div>

          <div className="footer-contact-info">
            <h4 className="footer-title heading-serif">Get In Touch</h4>
            <p><strong>📞 Phone:</strong> <a href="tel:+919700009384">+91 97000 09384</a></p>
            <p><strong>📸 Instagram:</strong> <a href="https://instagram.com/hookah_on_wheels" target="_blank" rel="noopener noreferrer">@hookah_on_wheels</a></p>
            <p><strong>🕒 Operating Hours:</strong> 24/7 Booking Services</p>
          </div>
        </div>

        {/* Footer Terms & Badges */}
        <div className="footer-rules glass-panel">
          <p className="rules-heading heading-serif gold-text-gradient">Important Booking Notice</p>
          <ul className="rules-list">
            <li>* Delivery Charges Applicable based on distance.</li>
            <li>* Cleanliness and sanitation of all equipment is fully guaranteed before setup.</li>
            <li>* Government laws apply. Must be of legal smoking age in your region.</li>
            <li>* Terms and conditions applied on all rentals.</li>
          </ul>
        </div>

        {/* Footer Divider */}
        <div className="footer-divider-line"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Hookah On Wheels. All Rights Reserved. Designed for premium vibes.
          </p>
          <div className="footer-taglines heading-serif">
            <span>GOOD VIBES</span> • <span>GREAT COMPANY</span> • <span>AMAZING SMOKE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
