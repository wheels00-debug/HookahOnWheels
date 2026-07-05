import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import './InstagramFeed.css';

// Import local images from assets
import imgWedding from '../assets/pkg_wedding.png';
import imgCorporate from '../assets/pkg_corporate.png';
import imgClub from '../assets/pkg_club.png';
import imgBirthday from '../assets/pkg_birthday.png';
import imgAirbnb from '../assets/pkg_airbnb.png';
import imgPoster from '../assets/poster.jpg';

export default function InstagramFeed() {
  const feedItems = [
    { id: 1, image: imgWedding, likes: '1.2k', comments: '64', tag: '#LuxuryWedding' },
    { id: 2, image: imgCorporate, likes: '942', comments: '38', tag: '#CorporateEvents' },
    { id: 3, image: imgClub, likes: '2.1k', comments: '105', tag: '#VIPNightlife' },
    { id: 4, image: imgAirbnb, likes: '870', comments: '42', tag: '#StaycationLuxury' },
    { id: 5, image: imgBirthday, likes: '1.5k', comments: '88', tag: '#VVIPParty' },
    { id: 6, image: imgPoster, likes: '3.4k', comments: '210', tag: '#HookahOnWheels' }
  ];

  return (
    <section className="instagram-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <Instagram className="instagram-section-icon" size={32} />
          <span className="badge-gold">Curated Lifestyle Feed</span>
          <h2 className="heading-serif section-title">@HOOKAHONWHEELS</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Immerse yourself in our premium smoke sessions, private catering events, and high-end lifestyle moments.
          </p>
        </div>

        {/* Feed Grid */}
        <div className="instagram-grid">
          {feedItems.map((item, idx) => (
            <motion.a 
              key={item.id}
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-item-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="instagram-image-wrapper">
                <img src={item.image} alt={item.tag} className="instagram-img" loading="lazy" />
                
                {/* Gold/Black Glass Overlay on Hover */}
                <div className="instagram-overlay">
                  <div className="instagram-overlay-content">
                    <span className="instagram-tag">{item.tag}</span>
                    <div className="instagram-stats">
                      <div className="stat">
                        <Heart className="stat-icon fill-current" size={18} />
                        <span>{item.likes}</span>
                      </div>
                      <div className="stat">
                        <MessageCircle className="stat-icon fill-current" size={18} />
                        <span>{item.comments}</span>
                      </div>
                    </div>
                    <div className="view-link">
                      <span>VIEW ON INSTAGRAM</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="instagram-cta">
          <motion.a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={18} />
            <span>Follow the Elite Experience</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
