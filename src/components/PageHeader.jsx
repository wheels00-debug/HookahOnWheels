import React from 'react';
import { motion } from 'framer-motion';
import './PageHeader.css';

export default function PageHeader({ title, subtitle, bgImage }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="page-header">
      {/* Background */}
      {bgImage && (
        <div 
          className="page-header-bg" 
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="page-header-overlay" />
      
      {/* Dynamic smoke effect overlay */}
      <div className="smoke-overlay" />

      <motion.div 
        className="page-header-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="page-header-title heading-serif" variants={itemVariants}>
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p className="page-header-subtitle" variants={itemVariants}>
            {subtitle}
          </motion.p>
        )}
        <motion.div className="header-divider" variants={itemVariants} />
      </motion.div>
    </div>
  );
}
