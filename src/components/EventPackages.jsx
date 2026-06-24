import React from 'react';
import './EventPackages.css';

// Import the generated luxury assets
import weddingImg from '../assets/pkg_wedding.png';
import birthdayImg from '../assets/pkg_birthday.png';
import airbnbImg from '../assets/pkg_airbnb.png';
import clubImg from '../assets/pkg_club.png';
import corporateImg from '../assets/pkg_corporate.png';

export default function EventPackages() {
  const eventPackages = [
    {
      id: 'wedding-pkg',
      name: 'Wedding Luxury Package',
      price: 'Starting ₹15,000',
      tagline: 'Elite aesthetic setups tailored for marriages & grand receptions',
      image: weddingImg,
      badge: 'Royal & Grand',
      features: [
        'High-end crystal and designer gold hookahs',
        'Elegant fresh floral arrangements & decor styling',
        'Exotic fruit-heads (Pineapple/Grapefruit chillums) included',
        'Personalized signature flavor menu for guests',
        '1 Dedicated professional lounge sommelier',
        'Sanitized disposable velvet-touch hoses',
        'Unlimited premium organic coconut charcoals'
      ]
    },
    {
      id: 'birthday-pkg',
      name: 'Vibrant Birthday Bash',
      price: 'Starting ₹5,000',
      tagline: 'High-energy party setup with glowing effects & dynamic mixes',
      image: birthdayImg,
      badge: 'Best For Parties',
      features: [
        'Modern glowing LED base hookahs',
        'Dual-hose premium hookahs for interactive sharing',
        'Special ice-chamber chilling for massive dense clouds',
        'Trending sweet & fruity flavor blends (e.g. Brain Freezer)',
        'Color-themed setups matching your party theme',
        'Fast-burn charcoal services (attendant optional)'
      ]
    },
    {
      id: 'airbnb-pkg',
      name: 'Villa & Airbnb Stayover',
      price: 'Starting ₹3,500',
      tagline: 'Self-serve premium rental setup for private villas & staycations',
      image: airbnbImg,
      badge: 'Self-Serve VIP',
      features: [
        '2 Premium medium-sized travel-friendly hookahs',
        'Complete self-setup kit with electric charcoal burner',
        'Pre-punched foil & sanitised mouthtips',
        '3 Premium flavor blocks (50g each)',
        'Long-lasting 100% organic coconut coals (24 pcs)',
        'Easy step-by-step video instruction guide'
      ]
    },
    {
      id: 'club-pkg',
      name: 'VIP Club & Lounge Service',
      price: 'Starting ₹10,000',
      tagline: 'Ultra-premium multi-hose setups for private club tables & VIP areas',
      image: clubImg,
      badge: 'Premium Clubbing',
      features: [
        'Heavy industrial steel multi-hose hookahs (up to 4 hoses)',
        'Milk & ice-enhanced bases for maximum cloud density',
        'Custom engraving / branded mouthpieces option',
        'Super-fast charcoal replenishment and maintenance',
        'On-demand VIP flavor mixes',
        '24/7 dedicated lounge steward service'
      ]
    },
    {
      id: 'corporate-pkg',
      name: 'Executive Corporate Mixer',
      price: 'Custom Pricing',
      tagline: 'Sophisticated, low-profile minimalist setups for corporate events & mixers',
      image: corporateImg,
      badge: 'Corporate Elite',
      features: [
        'Sleek, minimalist matte-black stainless steel hookahs',
        'Strict single-use individually wrapped hygienic tips',
        'Low-odor herbal molasses (100% nicotine & tobacco free)',
        'Discreet, professionally dressed quiet attendants',
        'Clean layout designed to fit professional settings',
        'Fully insured commercial setup safety compliance'
      ]
    }
  ];

  const handleInquirePackage = (packageId) => {
    const bookingForm = document.getElementById('book');
    if (bookingForm) {
      const packageSelect = document.getElementById('booking-package-select');
      if (packageSelect) {
        packageSelect.value = packageId;
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
    <section id="events" className="events-packages-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-gold">Event Packages</span>
          <h2 className="heading-serif section-title">LUXURY EVENT SHOWCASE</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Indulge your guests in premium, realistic 4K visual elegance. Handpicked setups crafted for weddings, private villa parties, clubs, and executive mixers.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="events-packages-grid">
          {eventPackages.map((pkg) => (
            <div key={pkg.id} className="event-package-card glass-panel glass-panel-hover">
              <div className="event-pkg-badge">{pkg.badge}</div>
              
              <div className="event-pkg-image-wrapper">
                <img src={pkg.image} alt={pkg.name} className="event-pkg-image" />
                <div className="event-pkg-image-overlay"></div>
              </div>

              <div className="event-pkg-content">
                <h3 className="event-pkg-title heading-serif gold-text-gradient">{pkg.name}</h3>
                <p className="event-pkg-tagline">{pkg.tagline}</p>
                
                <div className="event-pkg-price heading-serif">{pkg.price}</div>
                
                <div className="event-pkg-features">
                  <h4 className="features-title">What's Included:</h4>
                  <ul>
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx}>
                        <span className="bullet">⚜</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleInquirePackage(pkg.id)}
                  className="btn-gold btn-event-pkg"
                >
                  Inquire Package
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
