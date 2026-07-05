import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import './Blog.css';

export default function Blog() {
  const [expandedId, setExpandedId] = useState(null);

  const articles = [
    {
      id: 1,
      title: "The Ultimate Guide to Premium Shisha Flavors for Beginners",
      excerpt: "Explore the delicate balances of temperature, fruit pairings, and premium herbal molasses to curate an extraordinary flavor profile for your next session in Chandigarh.",
      content: (
        <>
          <p>If you're new to the world of luxury shisha, selecting the right flavor profile can be overwhelming. The days of harsh, artificial flavors are over. Today, the <strong>best hookah in Tricity</strong> relies on premium, organically sourced herbal molasses that delivers smooth, thick clouds without the nicotine buzz.</p>
          <h4>1. The Mint Foundation</h4>
          <p>Mint is the backbone of almost any great mix. It provides a cooling sensation that smooths out the heat of the coals. We recommend starting with a 30% mint base paired with sweeter fruits like Blueberry or Watermelon.</p>
          <h4>2. Citrus Infusions</h4>
          <p>For outdoor events or daytime sessions in Mohali, citrus flavors like Lemon, Grapefruit, or Orange add a zesty, refreshing kick. These are perfect when paired with a chilled glass base filled with ice and actual fruit slices.</p>
          <h4>3. Creamy & Dessert Profiles</h4>
          <p>For evening relaxation, flavors like Vanilla, Spiced Chai, or Mint Chocolate offer a rich, dessert-like experience. Our <em>shisha sommelier Tricity</em> experts often blend these with a touch of coffee flavor for late-night corporate events.</p>
          <p>Ready to try these out? <a href="/store" style={{color: 'var(--gold-primary)'}}>Explore our nicotine-free herbal molasses</a> or book a premium <strong>hookah delivery Chandigarh</strong> to have our experts mix it for you perfectly.</p>
        </>
      ),
      category: "Masterclass",
      date: "Oct 12, 2026",
      readTime: "5 min read",
      gradient: "linear-gradient(135deg, #1d1508 0%, #0c0a06 100%)",
      glowColor: "rgba(212, 175, 55, 0.15)"
    },
    {
      id: 2,
      title: "Why Hookah Catering is the New Trend for Tricity Weddings",
      excerpt: "From luxury weddings to exclusive corporate galas in Mohali and Chandigarh, discover how our custom hookah catering adds a layer of premium social sophistication.",
      content: (
        <>
          <p>The modern Indian wedding is evolving. While open bars and lavish buffets remain staples, event planners are constantly looking for interactive, premium experiences to keep guests engaged. Enter the dedicated Hookah Lounge.</p>
          <h4>Creating a Social Hub</h4>
          <p>A beautifully styled hookah station acts as a natural gathering point. It encourages guests to sit down, converse, and relax away from the loud music of the dance floor. It's the ultimate VIP experience.</p>
          <h4>The Hookah Sommelier Experience</h4>
          <p>Our <strong>shisha catering Chandigarh</strong> service isn't just about dropping off equipment. We provide white-glove sommeliers dressed in premium uniform attire who manage everything: from custom flavor mixing to heat management (coal flipping) and immediate sanitization.</p>
          <h4>Perfect for Pre-Wedding Functions</h4>
          <p>Whether it's a bachelor party in a private Mohali villa or an elegant Mehndi night, luxury shisha elevates the aesthetic. We use high-end glass hookahs (like our Foggit Diamond) that feature LED lighting to match your event's theme.</p>
          <p>Looking to elevate your next event? View our <a href="/services" style={{color: 'var(--gold-primary)'}}>exclusive event packages</a> and reserve your date.</p>
        </>
      ),
      category: "Event Guide",
      date: "Sep 28, 2026",
      readTime: "4 min read",
      gradient: "linear-gradient(135deg, #10151d 0%, #060a0f 100%)",
      glowColor: "rgba(55, 175, 212, 0.15)"
    },
    {
      id: 3,
      title: "Uncompromising Standards: Our Hygiene & Sterilization Protocols",
      excerpt: "Behind the scenes of our medical-grade cleaning methods, sanitized silicone hoses, and individually sealed mouthpiece delivery systems.",
      content: (
        <>
          <p>At Hookah On Wheels, we understand that hygiene is the absolute highest priority for our clients. When you search for <em>luxury hookah delivery</em>, you aren't just paying for aesthetics—you are paying for peace of mind.</p>
          <h4>Medical-Grade Sanitization</h4>
          <p>After every rental, our equipment undergoes a rigorous 3-step sterilization process. Bases are scrubbed with organic, food-safe sanitizers. Stainless steel stems are steam-cleaned at high temperatures to eliminate any residue or bacteria.</p>
          <h4>Disposable, Sealed Accessories</h4>
          <p>We never reuse hoses between clients without extensive internal washing, but we prefer providing brand new, medical-grade silicone hoses for our premium packages. Furthermore, every single guest receives an individually wrapped, factory-sealed mouthpiece.</p>
          <h4>Clean Smoke Technology</h4>
          <p>We strictly use 100% organic coconut charcoal. This guarantees a clean burn with zero chemical ignition agents, ensuring the smoke you inhale is pure, smooth, and free of toxins.</p>
          <p>Experience the cleanest, most premium smoke of your life. <a href="/store" style={{color: 'var(--gold-primary)'}}>Order your setup today.</a></p>
        </>
      ),
      category: "Behind the Brand",
      date: "Sep 15, 2026",
      readTime: "3 min read",
      gradient: "linear-gradient(135deg, #15101d 0%, #09060f 100%)",
      glowColor: "rgba(175, 55, 212, 0.15)"
    }
  ];

  return (
    <section id="blog" className="blog-section section-padding">
      <div className="container">
        
        <div className="section-header">
          <span className="badge-gold">Hookah Journal</span>
          <h2 className="heading-serif section-title">THE LUXURY JOURNAL</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Delve into shisha culture, event design inspirations, and expert mixology tips directly from our master sommeliers.
          </p>
        </div>

        <div className="blog-grid">
          {articles.map((post, idx) => {
            const isExpanded = expandedId === post.id;
            
            return (
              <motion.article 
                key={post.id}
                layout
                className={`blog-card glass-panel ${isExpanded ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <motion.div 
                  layout
                  className="blog-card-banner" 
                  style={{ 
                    background: post.gradient,
                    boxShadow: `0 10px 30px -10px ${post.glowColor} inset`
                  }}
                >
                  <span className="blog-category badge-gold">{post.category}</span>
                  <div className="blog-banner-glow"></div>
                </motion.div>

                <motion.div layout className="blog-card-body">
                  <div className="blog-meta">
                    <div className="meta-item">
                      <Calendar size={14} className="meta-icon" />
                      <span>{post.date}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={14} className="meta-icon" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <motion.h3 layout className="blog-card-title heading-serif">
                    {post.title}
                  </motion.h3>
                  
                  {!isExpanded && (
                    <motion.p layout className="blog-card-excerpt">
                      {post.excerpt}
                    </motion.p>
                  )}

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        className="blog-full-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {post.content}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div layout className="blog-card-footer">
                    <button 
                      className="blog-read-more-btn"
                      onClick={() => setExpandedId(isExpanded ? null : post.id)}
                    >
                      <span>{isExpanded ? 'Close Article' : 'Read Article'}</span>
                      {isExpanded ? <X size={16} className="read-more-arrow" /> : <ArrowRight size={16} className="read-more-arrow" />}
                    </button>
                  </motion.div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
