import React, { useState } from 'react';
import posterImg from '../assets/poster.jpg';
import './BookingForm.css';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'premium-rent',
    flavor: 'Double Apple',
    customFlavor: '',
    location: 'Chandigarh',
    customLocation: '',
    date: '',
    notes: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [waLink, setWaLink] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate text message for WhatsApp
    const serviceLabels = {
      'standard-rent': 'Standard Rental Package (₹1,000)',
      'premium-rent': 'Premium Rental Package (₹1,200)',
      'wedding-pkg': 'Wedding Luxury Event Package (Starting ₹15,000)',
      'birthday-pkg': 'Vibrant Birthday Bash Event Package (Starting ₹5,000)',
      'airbnb-pkg': 'Villa & Airbnb Stayover Event Package (Starting ₹3,500)',
      'club-pkg': 'VIP Club & Lounge Event Package (Starting ₹10,000)',
      'corporate-pkg': 'Executive Corporate Mixer Event Package (Custom)',
      'buy-hookah': 'Buy Hookah (Foggit Collection)',
      'buy-accessories': 'Buy Molasses / Accessories'
    };

    const chosenService = serviceLabels[formData.serviceType];
    const chosenFlavor = formData.flavor === 'Other' ? formData.customFlavor : formData.flavor;
    const chosenLocation = formData.location === 'Other' ? formData.customLocation : formData.location;

    const message = `Hello Hookah On Wheels! 
I would like to make an inquiry/booking:

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service Selected:* ${chosenService}
*Flavour Selected:* ${chosenFlavor}
*Delivery Location:* ${chosenLocation}
*Delivery Date/Time:* ${formData.date}
*Additional Requests:* ${formData.notes || 'None'}

Please confirm my booking!`;

    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/919700009384?text=${encodedMessage}`;
    
    setWaLink(link);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    window.open(waLink, '_blank');
  };

  return (
    <section id="book" className="booking-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-gold">DM to Book</span>
          <h2 className="heading-serif section-title">BOOK YOUR SESSION</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Fill in the details below to generate a pre-filled booking text. Submit to connect directly via WhatsApp.
          </p>
        </div>

        <div className="booking-grid">
          {/* Booking Form Card */}
          <form className="booking-form glass-panel" onSubmit={handleSubmit}>
            <h3 className="form-title heading-serif gold-text-gradient">INQUIRY FORM</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="booking-name">Your Name *</label>
                <input 
                  type="text" 
                  id="booking-name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your full name" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="booking-phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="booking-phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter phone number" 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="booking-package-select">Select Service *</label>
                <select 
                  id="booking-package-select" 
                  name="serviceType" 
                  value={formData.serviceType} 
                  onChange={handleChange}
                >
                  <option value="standard-rent">Rent: Standard Package (₹1,000)</option>
                  <option value="premium-rent">Rent: Premium Package (₹1,200)</option>
                  <optgroup label="Luxury Event Packages">
                    <option value="wedding-pkg">Event: Wedding Luxury Package (Starting ₹15,000)</option>
                    <option value="birthday-pkg">Event: Vibrant Birthday Bash (Starting ₹5,000)</option>
                    <option value="airbnb-pkg">Event: Villa & Airbnb Stayover (Starting ₹3,500)</option>
                    <option value="club-pkg">Event: VIP Club & Lounge Service (Starting ₹10,000)</option>
                    <option value="corporate-pkg">Event: Executive Corporate Mixer (Custom)</option>
                  </optgroup>
                  <optgroup label="Purchase Items">
                    <option value="buy-hookah">Buy: Foggit Hookah</option>
                    <option value="buy-accessories">Buy: Molasses / Accessories</option>
                  </optgroup>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="booking-flavor">Preferred Flavor</label>
                <select 
                  id="booking-flavor" 
                  name="flavor" 
                  value={formData.flavor} 
                  onChange={handleChange}
                >
                  <option value="Double Apple">Double Apple 🍎🍏</option>
                  <option value="Pan Masala">Pan Masala 🍃🌰</option>
                  <option value="Mint">Mint 🌱</option>
                  <option value="Pineapple">Pineapple 🍍</option>
                  <option value="Blueberry">Blueberry 🫐</option>
                  <option value="Kiwi">Kiwi 🥝</option>
                  <option value="Grape">Grape 🍇</option>
                  <option value="Watermelon">Watermelon 🍉</option>
                  <option value="Other">Other / Custom Mix</option>
                </select>
              </div>
            </div>

            {formData.flavor === 'Other' && (
              <div className="form-group slide-down">
                <label htmlFor="booking-custom-flavor">Specify Custom Flavor / Mix *</label>
                <input 
                  type="text" 
                  id="booking-custom-flavor" 
                  name="customFlavor" 
                  value={formData.customFlavor} 
                  onChange={handleChange}
                  required
                  placeholder="e.g. Brain Freezer, Double Apple Mint mix" 
                />
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="booking-location">Delivery Location *</label>
                <select 
                  id="booking-location" 
                  name="location" 
                  value={formData.location} 
                  onChange={handleChange}
                >
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Mohali">Mohali</option>
                  <option value="Zirakpur">Zirakpur</option>
                  <option value="Panchkula">Panchkula</option>
                  <option value="Other">Other Region</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="booking-date">Delivery Date & Time *</label>
                <input 
                  type="datetime-local" 
                  id="booking-date" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            {formData.location === 'Other' && (
              <div className="form-group slide-down">
                <label htmlFor="booking-custom-location">Specify Your Location *</label>
                <input 
                  type="text" 
                  id="booking-custom-location" 
                  name="customLocation" 
                  value={formData.customLocation} 
                  onChange={handleChange}
                  required
                  placeholder="Enter full delivery address" 
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="booking-notes">Special Instructions / Custom Purchases</label>
              <textarea 
                id="booking-notes" 
                name="notes" 
                rows="3" 
                value={formData.notes} 
                onChange={handleChange} 
                placeholder="List any extra charcoal, specific Foggit models to buy, or setup requests..."
              ></textarea>
            </div>

            <button type="submit" className="btn-gold btn-submit">
              💬 Generate Booking & DM
            </button>
          </form>

          {/* Quick Info & Poster Card */}
          <div className="booking-info glass-panel">
            <h3 className="info-title heading-serif gold-text-gradient">HOOKAH ON WHEELS</h3>
            <p className="info-tagline">Good Vibes • Great Company • Amazing Smoke</p>
            
            <div className="poster-preview-container">
              <img src={posterImg} alt="Hookah On Wheels Poster" className="poster-preview-img" />
              <div className="poster-overlay">
                <span className="poster-overlay-text">Official Poster</span>
              </div>
            </div>

            <div className="direct-booking-details">
              <div className="direct-item">
                <span className="direct-icon">📞</span>
                <div>
                  <h4>Call / WhatsApp to Book</h4>
                  <a href="tel:+919700009384" className="gold-link">+91 97000 09384</a>
                </div>
              </div>
              <div className="direct-item">
                <span className="direct-icon">📸</span>
                <div>
                  <h4>Instagram Direct Message</h4>
                  <a href="https://instagram.com/hookah_on_wheels" target="_blank" rel="noopener noreferrer" className="gold-link">@hookah_on_wheels</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redirect Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content glass-panel animate-float">
              <div className="modal-icon">💬</div>
              <h3 className="heading-serif gold-text-gradient">REDIRECTING TO WHATSAPP</h3>
              <p>We've created a custom booking text with your preferences. Clicking the button below will open WhatsApp to send your inquiry directly.</p>
              
              <div className="message-preview">
                <strong>Message Preview:</strong>
                <pre>{decodeURIComponent(waLink.split('text=')[1])}</pre>
              </div>

              <div className="modal-actions">
                <button className="btn-gold" onClick={handleModalClose}>Open WhatsApp</button>
                <button className="btn-outline-gold" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
