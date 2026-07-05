import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './Faqs.css';

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is Hookah On Wheels delivery service?",
      answer: "We are an ultra-premium, on-demand hookah delivery and catering service. We bring the luxury hookah lounge experience directly to your home, hotel, villa, or private event. Our packages include premium stems, customized fresh mixes, organic coals, sanitization, and full setup by a professional hookah sommelier."
    },
    {
      question: "How do you ensure hygiene and sanitization?",
      answer: "Hygiene is our highest priority. Every hookah goes through a multi-stage medical-grade cleaning process before and after delivery. Stems and bases are washed, steam-sterilized, and sanitized. We provide individually wrapped disposable mouth tips and medical-grade silicone hoses for every customer."
    },
    {
      question: "What areas do you deliver to and what are the delivery times?",
      answer: "We deliver across the metropolitan area and select surrounding premium locations. Our standard delivery times are from 2:00 PM until 2:00 AM daily. For large private events or weddings, we can accommodate custom schedules when booked in advance."
    },
    {
      question: "Can I customize the shisha flavors and mixes?",
      answer: "Absolutely. We pride ourselves on custom mixology. You can choose from our curated menu of single origin herbal molasses or have our sommelier design a signature mix based on your taste profile (e.g., cooling mint, citrus infusions, exotic fruits, or rich spices)."
    },
    {
      question: "What is your policy on security deposits?",
      answer: "For rental equipment, a minor refundable security deposit and valid government ID verification are required upon delivery. The deposit is immediately returned once the equipment is collected in its original working condition."
    },
    {
      question: "Do you cater for weddings and corporate events?",
      answer: "Yes, we specialize in high-end events. We offer dedicated 'Hookah Bar' setups with professional on-site sommeliers who manage coal replacement, flavor mixing, and guest service throughout your event. Contact us directly to design a custom package."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }) }} />
          <span className="badge-gold">Your Questions Answered</span>
          <h2 className="heading-serif section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Everything you need to know about our luxury hookah deliveries, hygienic measures, and event bookings.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="faqs-accordion-container">
          {faqData.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div 
                key={idx} 
                className={`faq-item glass-panel ${isOpen ? 'active' : ''}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <button 
                  className="faq-trigger" 
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-content">
                    <HelpCircle className="faq-question-icon" size={20} />
                    <span className="faq-question">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="faq-chevron"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-content"
                    >
                      <p className="faq-answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
