import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, Filter, Heart } from 'lucide-react';
import './Products.css';

// Import generated luxury assets
import imgDarkKnight from '../assets/hookah_dark_knight.png';
import imgAlexander from '../assets/hookah_alexander.png';
import imgXXX from '../assets/hookah_xxx.png';
import imgBurj from '../assets/hookah_burj.png';
import imgDiamond from '../assets/hookah_diamond.png';

export default function Products() {
  const [filter, setFilter] = useState('all');
  const [favorites, setFavorites] = useState({});

  const categories = [
    { id: 'all', name: 'ALL PRODUCTS' },
    { id: 'sales', name: 'HOOKAH SALES' },
    { id: 'rentals', name: 'LUXURY RENTALS' },
    { id: 'accessories', name: 'FLAVOURS & ACCS' }
  ];

  const products = [
    // Hookah Sales
    {
      id: 'foggit-dark-knight',
      name: 'Foggit Dark Knight',
      price: '₹5,499',
      image: imgDarkKnight,
      badge: 'Bestseller',
      category: 'sales',
      rating: 4.9,
      desc: 'Sleek matte-black design, vertical purge valve, Click-Lock glass base, premium silicone pipe.'
    },
    {
      id: 'foggit-alexander',
      name: 'Foggit Alexander',
      price: '₹6,200',
      image: imgAlexander,
      badge: 'Premium Stainless',
      category: 'sales',
      rating: 4.8,
      desc: 'Heavy-duty food-grade stainless steel stem, crystal-clear thick glass, heavy base for maximum stability.'
    },
    {
      id: 'foggit-xxx',
      name: 'Foggit XXX (34")',
      price: '₹8,500',
      image: imgXXX,
      badge: 'Flagship Tall',
      category: 'sales',
      rating: 5.0,
      desc: '34-inch tall masterpiece. Stem features intricate cutouts with 4-way vertical X-purge technology.'
    },
    {
      id: 'foggit-burj-khalifa',
      name: 'Foggit Burj Khalifa',
      price: '₹7,999',
      image: imgBurj,
      badge: 'Iconic Spire',
      category: 'sales',
      rating: 4.9,
      desc: 'Tall vertical spire design, premium alloy construct, top-to-bottom smoke blow-off purge.'
    },
    {
      id: 'foggit-diamond',
      name: 'Foggit Diamond',
      price: '₹6,800',
      image: imgDiamond,
      badge: 'Luxury Crystal',
      category: 'sales',
      rating: 4.7,
      desc: 'Gorgeous diamond-cut crystal base that reflects light, gold metallic stem accent, premium smoke draw.'
    },
    {
      id: 'foggit-fighter',
      name: 'Foggit Fighter',
      price: '₹4,999',
      image: imgDarkKnight, // compact black
      badge: 'Compact Power',
      category: 'sales',
      rating: 4.6,
      desc: 'Portable travel hookah, heavy chamber base, quick purge, comes with a premium carry bag.'
    },

    // Rentals
    {
      id: 'rental-sommelier',
      name: 'Sommelier Shisha Package',
      price: '₹2,500 / night',
      image: imgDiamond,
      badge: 'Most Popular',
      category: 'rentals',
      rating: 5.0,
      desc: '1 Luxury Hookah setup, 2 premium customized fresh molasses mixes, unlimited charcoal, sommelier service setup.'
    },
    {
      id: 'rental-royal',
      name: 'Royal Dual Shisha Setup',
      price: '₹4,500 / night',
      image: imgXXX,
      badge: 'VVIP Choice',
      category: 'rentals',
      rating: 4.9,
      desc: '2 Top-tier Hookahs (Foggit XXX/Diamond), 4 customized exotic mixes, premium heating systems, full table setup.'
    },

    // Accessories
    {
      id: 'acc-herbal-molasses',
      name: 'Foggit Herbal Molasses (50g)',
      price: '₹200',
      image: imgAlexander,
      badge: 'Nicotine-Free',
      category: 'accessories',
      rating: 4.8,
      desc: 'Nicotine-free & Tar-free paste. Pure taste, thick smoke. Available in Blueberry, Mint, Lemon, Watermelon.'
    },
    {
      id: 'acc-coconut-charcoals',
      name: 'Premium Coconut Charcoals (1kg)',
      price: '₹350',
      image: imgDarkKnight,
      badge: '100% Organic',
      category: 'accessories',
      rating: 4.7,
      desc: 'Organic cubes, low ash, odorless, burns up to 90 mins.'
    },
    {
      id: 'acc-silicone-hose',
      name: 'Silicone Hose + Metal Handle',
      price: '₹450',
      image: imgBurj,
      badge: 'Washable',
      category: 'accessories',
      rating: 4.5,
      desc: 'Washable food-grade silicone hose, heavy-duty handle.'
    },
    {
      id: 'acc-clay-chillum',
      name: 'Clay Chillum / Bowl',
      price: '₹300',
      image: imgAlexander,
      badge: 'Handmade',
      category: 'accessories',
      rating: 4.6,
      desc: 'Authentic handmade clay bowl, optimal heat distribution.'
    }
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBuyClick = (productId, productName, category) => {
    // Fire a custom event to notify Navbar of simulated cart additions
    window.dispatchEvent(new Event('add-to-cart-simulated'));

    const bookingForm = document.getElementById('book');
    if (bookingForm) {
      const packageSelect = document.getElementById('booking-package-select');
      if (packageSelect) {
        if (category === 'rentals') {
          packageSelect.value = 'premium-package';
        } else if (category === 'sales') {
          packageSelect.value = 'buy-hookah';
        } else {
          packageSelect.value = 'accessories-only';
        }
        packageSelect.dispatchEvent(new Event('change', { bubbles: true }));
        
        // Find custom notes input and autofill the product name
        const notesInput = document.getElementById('booking-notes');
        if (notesInput) {
          notesInput.value = `I am interested in ordering: ${productName}`;
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": products.map((p, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": p.name,
                "description": p.desc,
                "image": `https://hookah-on-wheels.vercel.app/assets/${p.id}.png`,
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "INR",
                  "price": p.price.replace(/[^\d.]/g, ''),
                  "availability": "https://schema.org/InStock",
                  "url": "https://hookah-on-wheels.vercel.app/#products"
                }
              }
            }))
          }) }} />
          <span className="badge-gold">VG France Collection</span>
          <h2 className="heading-serif section-title">THE ELITE STORE</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Premium Foggit hookahs, accessories, and bespoke rental packages, widely acclaimed for modern X-Function purge technology and elegant designs.
          </p>
        </div>

        {/* Filter Navigation Category Tabs */}
        <div className="category-filter-container">
          <Filter size={16} className="filter-icon" />
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`category-tab-btn ${filter === cat.id ? 'active' : ''}`}
              >
                <span>{cat.name}</span>
                {filter === cat.id && (
                  <motion.div 
                    layoutId="activeTabUnderline" 
                    className="tab-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div 
          layout 
          className="products-grid-container"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                layout
                key={p.id}
                className="luxury-product-card glass-panel"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
              >
                <div className="card-top-header">
                  <span className="card-badge">{p.badge}</span>
                  <button 
                    onClick={() => toggleFavorite(p.id)}
                    className={`fav-btn ${favorites[p.id] ? 'active' : ''}`}
                    aria-label="Add to Wishlist"
                  >
                    <Heart className="heart-icon" size={16} />
                  </button>
                </div>

                {/* Product Image Showcase */}
                <div className="luxury-product-image-wrapper">
                  <img src={p.image} alt={p.name} className="luxury-product-image" loading="lazy" />
                  <div className="luxury-image-shadow-ring"></div>
                </div>

                {/* Info Container */}
                <div className="luxury-product-info">
                  <div className="product-stars-row">
                    <div className="stars-wrapper">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="star-icon fill-current" />
                      ))}
                    </div>
                    <span className="product-rating-num">{p.rating}</span>
                  </div>

                  <h3 className="luxury-product-name heading-serif">{p.name}</h3>
                  <p className="luxury-product-desc">{p.desc}</p>
                  
                  <div className="luxury-product-footer">
                    <div className="luxury-product-price gold-text-gradient heading-serif">{p.price}</div>
                    <button 
                      onClick={() => handleBuyClick(p.id, p.name, p.category)}
                      className="btn-gold luxury-card-buy-btn"
                    >
                      <ShoppingCart size={14} />
                      <span>{p.category === 'rentals' ? 'Rent Now' : 'Buy Now'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
