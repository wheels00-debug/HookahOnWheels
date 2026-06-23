import React from 'react';
import './Products.css';

export default function Products() {
  const hookahs = [
    {
      id: 'foggit-dark-knight',
      name: 'Foggit Dark Knight',
      price: '₹5,499',
      imageEmoji: '🖤',
      badge: 'Bestseller',
      desc: 'Sleek matte-black design, vertical purge valve, Click-Lock glass base, premium silicone pipe.'
    },
    {
      id: 'foggit-alexander',
      name: 'Foggit Alexander',
      price: '₹6,200',
      imageEmoji: '⚜️',
      badge: 'Premium Stainless',
      desc: 'Heavy-duty food-grade stainless steel stem, crystal-clear thick glass, heavy base for maximum stability.'
    },
    {
      id: 'foggit-xxx',
      name: 'Foggit XXX (34")',
      price: '₹8,500',
      imageEmoji: '👑',
      badge: 'Flagship Tall',
      desc: '34-inch tall masterpiece. Stem features intricate cutouts with 4-way vertical X-purge technology.'
    },
    {
      id: 'foggit-burj-khalifa',
      name: 'Foggit Burj Khalifa',
      price: '₹7,999',
      imageEmoji: '🗼',
      badge: 'Iconic Tower',
      desc: 'Tall vertical spire design, premium alloy construct, top-to-bottom smoke blow-off purge.'
    },
    {
      id: 'foggit-diamond',
      name: 'Foggit Diamond',
      price: '₹6,800',
      imageEmoji: '💎',
      badge: 'Luxury Crystal',
      desc: 'Gorgeous diamond-cut crystal base that reflects light, gold metallic stem accent, premium smoke draw.'
    },
    {
      id: 'foggit-fighter',
      name: 'Foggit Fighter',
      price: '₹4,999',
      imageEmoji: '🎯',
      badge: 'Compact Power',
      desc: 'Portable travel hookah, heavy chamber base, quick purge, comes with a premium carry bag.'
    }
  ];

  const molasses = [
    { name: 'Foggit Herbal Molasses (50g)', price: '₹200', desc: 'Nicotine-free & Tar-free paste. Pure taste, thick smoke.' },
    { name: 'Premium Coconut Charcoals (1kg)', price: '₹350', desc: 'Organic cubes, low ash, odorless, burns up to 90 mins.' },
    { name: 'Silicone Hose + Metal Handle', price: '₹450', desc: 'Washable food-grade silicone hose, heavy-duty handle.' },
    { name: 'Clay Chillum / Bowl', price: '₹300', desc: 'Authentic handmade clay bowl, optimal heat distribution.' }
  ];

  const handleBuyClick = (productId, productName) => {
    const bookingForm = document.getElementById('book');
    if (bookingForm) {
      const packageSelect = document.getElementById('booking-package-select');
      if (packageSelect) {
        packageSelect.value = 'buy-hookah';
        packageSelect.dispatchEvent(new Event('change', { bubbles: true }));
        
        // Find custom notes input and autofill the product name
        const notesInput = document.getElementById('booking-notes');
        if (notesInput) {
          notesInput.value = `I am interested in buying: ${productName}`;
        }
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
    <section id="products" className="products-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-gold">VG France Collection</span>
          <h2 className="heading-serif section-title">FOGGIT HOOKAHS FOR SALE</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Premium Foggit hookahs and accessories, widely acclaimed for modern X-Function purge technology and elegant designs.
          </p>
        </div>

        {/* Hookah Products Grid */}
        <div className="products-grid">
          {hookahs.map((hk) => (
            <div key={hk.id} className="product-card glass-panel glass-panel-hover">
              <div className="product-badge">{hk.badge}</div>
              <div className="product-image-placeholder">
                <span className="product-emoji">{hk.imageEmoji}</span>
                {/* Custom glowing background ring */}
                <div className="product-image-glow"></div>
              </div>
              <h3 className="product-name heading-serif">{hk.name}</h3>
              <p className="product-desc">{hk.desc}</p>
              
              <div className="product-footer">
                <div className="product-price gold-text-gradient heading-serif">{hk.price}</div>
                <button 
                  onClick={() => handleBuyClick(hk.id, hk.name)}
                  className="btn-gold btn-buy"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Accessories & Molasses Sub-section */}
        <div className="molasses-container glass-panel">
          <div className="molasses-header">
            <h3 className="heading-serif gold-text-gradient">FLAVOURS, MOLASSES & ACCESSORIES</h3>
            <p>Order extra essentials along with your hookah or rentals</p>
          </div>

          <div className="molasses-grid">
            {molasses.map((item, idx) => (
              <div key={idx} className="molasses-item">
                <div className="molasses-item-info">
                  <h4 className="molasses-item-name">{item.name}</h4>
                  <p className="molasses-item-desc">{item.desc}</p>
                </div>
                <div className="molasses-item-action">
                  <span className="molasses-item-price gold-text-gradient heading-serif">{item.price}</span>
                  <button 
                    onClick={() => handleBuyClick('accessory', item.name)}
                    className="btn-outline-gold btn-molasses-buy"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
