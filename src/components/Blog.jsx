import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import './Blog.css';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "The Art of Shisha Mixology: Crafting the Perfect Blend",
      excerpt: "Explore the delicate balances of temperature, fruit pairings, and premium herbal molasses to curate an extraordinary flavor profile for your guests.",
      category: "Masterclass",
      date: "Oct 12, 2026",
      readTime: "5 min read",
      gradient: "linear-gradient(135deg, #1d1508 0%, #0c0a06 100%)",
      glowColor: "rgba(212, 175, 55, 0.15)"
    },
    {
      id: 2,
      title: "Elevating Private & Corporate Events with Bespoke Hookah Lounges",
      excerpt: "From luxury weddings to exclusive corporate galas, discover how our custom hookah catering adds a layer of premium social sophistication.",
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
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-gold">Hookah Journal</span>
          <h2 className="heading-serif section-title">THE LUXURY JOURNAL</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Delve into shisha culture, event design inspirations, and expert mixology tips directly from our master sommeliers.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {articles.map((post, idx) => (
            <motion.article 
              key={post.id}
              className="blog-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Card Banner with Gradient & Glow */}
              <div 
                className="blog-card-banner" 
                style={{ 
                  background: post.gradient,
                  boxShadow: `0 10px 30px -10px ${post.glowColor} inset`
                }}
              >
                <span className="blog-category badge-gold">{post.category}</span>
                <div className="blog-banner-glow"></div>
              </div>

              {/* Card Body */}
              <div className="blog-card-body">
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

                <h3 className="blog-card-title heading-serif">
                  {post.title}
                </h3>
                <p className="blog-card-excerpt">
                  {post.excerpt}
                </p>

                <div className="blog-card-footer">
                  <button className="blog-read-more-btn">
                    <span>Read Article</span>
                    <ArrowRight size={16} className="read-more-arrow" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
