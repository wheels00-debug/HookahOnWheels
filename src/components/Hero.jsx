import React from 'react';
import logo from '../assets/logo.png';
import './Hero.css';

export default function Hero() {
  const handleScrollToBook = (e) => {
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
    <section id="home" className="hero-section">
      <div className="smoke-overlay"></div>
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge badge-gold animate-float">
            ✦ PREMIUM HOOKAH SERVICES
          </div>
          <h1 className="hero-title heading-serif">
            PREMIUM <br />
            <span className="gold-text-gradient">HOOKAH</span> <br />
            RENTAL & SALES
          </h1>
          <p className="hero-subtitle">
            ELEVATE EVERY MOMENT
          </p>
          <p className="hero-description">
            Bring the ultimate luxury hookah lounge experience to your doorstep. We cater to homes, private parties, weddings, birthday celebrations, and corporate events with top-tier equipment and premium service.
          </p>
          
          <div className="hero-cta">
            <a href="#book" onClick={handleScrollToBook} className="btn-gold">
              DM to Book Now
            </a>
            <a href="#rentals" className="btn-outline-gold">
              Explore Packages
            </a>
          </div>

          <div className="hero-features">
            <div className="feature-item glass-panel">
              <div className="feature-icon">🛡️</div>
              <div className="feature-text">
                <h4>Premium Quality</h4>
                <p>Top-tier Hookahs</p>
              </div>
            </div>
            <div className="feature-item glass-panel">
              <div className="feature-icon">✨</div>
              <div className="feature-text">
                <h4>Clean & Hygienic</h4>
                <p>Fully Sanitized</p>
              </div>
            </div>
            <div className="feature-item glass-panel">
              <div className="feature-icon">⚡</div>
              <div className="feature-text">
                <h4>Easy Setup</h4>
                <p>Hassle-Free Delivery</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="logo-glow-container">
            <img src={logo} alt="Hookah On Wheels Logo Logo" className="hero-logo-large animate-float" />
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
