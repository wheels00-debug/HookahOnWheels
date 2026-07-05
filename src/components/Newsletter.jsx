import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section className="newsletter-section section-padding">
      <div className="container">
        <div className="newsletter-card-container">
          {/* Decorative glowing gradient ring */}
          <div className="newsletter-glow-ring"></div>

          <div className="newsletter-card glass-panel">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form-container"
                  className="newsletter-form-container"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="newsletter-icon-wrapper">
                    <Mail className="newsletter-mail-icon" size={28} />
                  </div>

                  <h2 className="heading-serif newsletter-title">
                    JOIN THE <span className="gold-text-gradient">INNER CIRCLE</span>
                  </h2>
                  <p className="newsletter-subtitle">
                    Subscribe to receive invitations to private shisha tastings, exclusive product launches, and seasonal luxury recipes. No spam. Only excellence.
                  </p>

                  <form onSubmit={handleSubmit} className="newsletter-form">
                    <div className="input-group">
                      <input
                        type="email"
                        placeholder="ENTER YOUR EMAIL ADDRESS"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                        className="newsletter-input"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="newsletter-submit-btn"
                        aria-label="Subscribe"
                      >
                        {loading ? (
                          <div className="btn-spinner"></div>
                        ) : (
                          <>
                            <span>SUBSCRIBE</span>
                            <ArrowRight size={16} className="btn-arrow" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                  <p className="newsletter-disclaimer">
                    By subscribing, you agree to our Privacy Policy and terms of elite membership.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="success-container"
                  className="newsletter-success-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  >
                    <CheckCircle2 className="success-icon" size={56} />
                  </motion.div>
                  <h3 className="heading-serif success-title">WELCOME TO THE CIRCLE</h3>
                  <p className="success-message">
                    An confirmation invitation has been sent to your inbox. Prepare to elevate your smoke sessions.
                  </p>
                  <motion.button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-gold success-btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Go Back
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
