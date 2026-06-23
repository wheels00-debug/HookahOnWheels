import React from 'react';
import './Services.css';

export default function Services() {
  const cities = [
    { name: 'Chandigarh', icon: '📍', description: 'Premium delivery and setup across Chandigarh.' },
    { name: 'Mohali', icon: '📍', description: 'Elite catering services throughout Mohali.' },
    { name: 'Zirakpur', icon: '📍', description: 'Hassle-free setup at any location in Zirakpur.' },
    { name: 'Panchkula', icon: '📍', description: 'Professional service serving all of Panchkula.' }
  ];

  const events = [
    { title: 'Home Services', icon: '🏠', details: 'Relax in the comfort of your own home with a customized hookah setup.' },
    { title: 'Social Parties', icon: '🎉', details: 'Elevate your private house parties, terrace gatherings, and get-togethers.' },
    { title: 'Marriage Functions', icon: '💍', details: 'Offer a luxury experience for your wedding guests with our premium lounges.' },
    { title: 'Birthday Parties', icon: '🎂', details: 'Celebrate in style with themed setups, rich flavors, and high-end smoke.' }
  ];

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-gold">Our Offerings</span>
          <h2 className="heading-serif section-title">HOW WE ELEVATE</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Catering premium hookah setups to the Tricity region for any special event.
          </p>
        </div>

        {/* Perfect For Grid */}
        <div className="events-grid">
          {events.map((event, idx) => (
            <div key={idx} className="event-card glass-panel glass-panel-hover">
              <div className="event-icon-wrapper">
                <span className="event-emoji">{event.icon}</span>
              </div>
              <h3 className="event-title heading-serif">{event.title}</h3>
              <p className="event-details">{event.details}</p>
            </div>
          ))}
        </div>

        {/* Serving In Section */}
        <div className="serving-container glass-panel">
          <h3 className="serving-title heading-serif gold-text-gradient">SERVING IN</h3>
          <div className="cities-grid">
            {cities.map((city, idx) => (
              <div key={idx} className="city-item">
                <div className="city-marker">📍</div>
                <h4 className="city-name heading-serif">{city.name}</h4>
                <p className="city-desc">{city.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
