import React from 'react';
import './Rentals.css';

export default function Rentals() {
  const packages = [
    {
      name: 'Standard Package',
      price: '₹1,000',
      tagline: 'Perfect for casual setups & small gatherings',
      features: [
        'Premium Quality single-hose Hookah',
        'Standard chilling ice base',
        '1 Premium flavor choice included',
        'Clean, sanitized, and ready-to-smoke',
        'Easy setup guidance',
        'Standard charcoal set (4 pieces)'
      ],
      popular: false
    },
    {
      name: 'Premium Package',
      price: '₹1,200',
      tagline: 'Ideal for premium parties & large celebrations',
      features: [
        'Exclusive glass/designer heavy Hookah',
        'Milky/Ice base enhancement for thick clouds',
        '2 Premium flavor choices included',
        'Sanitized & polished hygienic hoses',
        'Professional setup assistance',
        'Extended charcoal set (8 pieces)',
        'Priority delivery in selected regions'
      ],
      popular: true
    }
  ];

  const flavors = [
    { name: 'Double Apple', color: '#8db600', icon: '🍎🍏' },
    { name: 'Pan Masala', color: '#a0522d', icon: '🍃🌰' },
    { name: 'Mint', color: '#3eb489', icon: '🌱' },
    { name: 'Pineapple', color: '#ffd700', icon: '🍍' },
    { name: 'Blueberry', color: '#4f86f7', icon: '🫐' },
    { name: 'Kiwi', color: '#8ee53f', icon: '🥝' },
    { name: 'Grape', color: '#6f2da8', icon: '🍇' },
    { name: 'Watermelon', color: '#fc5a5a', icon: '🍉' }
  ];

  const handleSelectPackage = (packageName) => {
    const bookingForm = document.getElementById('book');
    if (bookingForm) {
      // Find package input in booking form or scroll
      const packageSelect = document.getElementById('booking-package-select');
      if (packageSelect) {
        packageSelect.value = packageName === 'Standard Package' ? 'standard-rent' : 'premium-rent';
        // Trigger change event programmatically if needed
        packageSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
      
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = bookingForm.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="rentals" className="rentals-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-gold">Rental Packages</span>
          <h2 className="heading-serif section-title">RENTAL OPTIONS</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Flexible packages suited for any gathering. Select your plan and book in under a minute.
          </p>
        </div>

        {/* Packages Cards */}
        <div className="packages-grid">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`package-card glass-panel ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">RECOMMENDED</div>}
              <h3 className="package-name heading-serif">{pkg.name}</h3>
              <p className="package-tagline">{pkg.tagline}</p>
              
              <div className="package-price-box">
                <span className="price-currency"></span>
                <span className="price-value heading-serif gold-text-gradient">{pkg.price}</span>
                <span className="price-duration">/ session</span>
              </div>

              <div className="package-features-list">
                {pkg.features.map((feat, fidx) => (
                  <div key={fidx} className="package-feature-item">
                    <span className="feature-check">✔</span>
                    <span className="feature-text">{feat}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleSelectPackage(pkg.name)} 
                className={`btn-package ${pkg.popular ? 'btn-gold' : 'btn-outline-gold'}`}
              >
                Select & Customise
              </button>
            </div>
          ))}
        </div>

        {/* Flavors Section */}
        <div className="flavors-container glass-panel">
          <div className="flavors-header">
            <h3 className="heading-serif gold-text-gradient">POPULAR FLAVORS</h3>
            <p>A wide variety of premium, refreshing herbal molasses choices</p>
          </div>
          
          <div className="flavors-grid">
            {flavors.map((flv, idx) => (
              <div key={idx} className="flavor-chip" style={{ '--accent-color': flv.color }}>
                <span className="flavor-icon">{flv.icon}</span>
                <span className="flavor-name">{flv.name}</span>
              </div>
            ))}
          </div>

          <div className="flavors-footer">
            <p>...AND MANY MORE EXOTIC FLAVORS AVAILABLE ON DEMAND!</p>
            <div className="sales-notice glass-panel">
              <span className="notice-icon">🛒</span>
              <p><strong>Note:</strong> Premium Quality Hookahs, Extra Flavors, and Coconut Charcoals are also available for direct purchase.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
