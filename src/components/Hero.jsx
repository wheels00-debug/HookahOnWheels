import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Zap, ArrowRight, ShoppingCart } from 'lucide-react';
import heroImg from '../assets/luxury_hero.png';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  // Animated Smoke Particle System in Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const maxParticles = 65;
    let mouse = { x: null, y: null, vx: 0, vy: 0 };
    let lastMouseX = null;
    let lastMouseY = null;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class SmokeParticle {
      constructor() {
        this.reset();
        // Distribute initial particles across the height
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 80;
        this.size = Math.random() * 120 + 80;
        this.vy = -(Math.random() * 0.4 + 0.2); // upward drift
        this.vx = Math.random() * 0.3 - 0.15; // horizontal wiggle
        this.alpha = 0;
        this.targetAlpha = Math.random() * 0.12 + 0.04;
        this.fadeSpeed = Math.random() * 0.005 + 0.003;
        this.rotation = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.002 - 0.001;
      }

      update() {
        this.y += this.vy;
        this.x += this.vx;
        this.rotation += this.spin;

        // Apply slight mouse interaction (wind)
        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 250) {
            const force = (250 - dist) / 250;
            // Push particle in the direction of mouse movement velocity
            this.vx += mouse.vx * force * 0.08;
            this.vy += mouse.vy * force * 0.08;
          }
        }

        // Dampen velocity to return to natural drift
        this.vx *= 0.98;
        if (this.vy > -0.2) this.vy -= 0.01;
        if (this.vy < -0.8) this.vy += 0.01;

        // Fade in
        if (this.alpha < this.targetAlpha) {
          this.alpha += this.fadeSpeed;
        }

        // Fade out as it goes near the top
        if (this.y < canvas.height * 0.4) {
          this.alpha -= 0.002;
        }

        // Reset particle if it leaves bounds or fully fades
        if (this.y < -this.size || this.alpha <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        // Soft golden charcoal smoke color palette
        grad.addColorStop(0, `rgba(212, 175, 55, ${this.alpha * 0.45})`);
        grad.addColorStop(0.3, `rgba(30, 30, 36, ${this.alpha * 0.7})`);
        grad.addColorStop(1, 'rgba(6, 6, 8, 0)');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new SmokeParticle());
    }

    // Track mouse position and velocity
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (lastMouseX !== null && lastMouseY !== null) {
        mouse.vx = x - lastMouseX;
        mouse.vy = y - lastMouseY;
      }
      mouse.x = x;
      mouse.y = y;
      
      lastMouseX = x;
      lastMouseY = y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.vx = 0;
      mouse.vy = 0;
      lastMouseX = null;
      lastMouseY = null;
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Decay mouse velocity slowly
      mouse.vx *= 0.95;
      mouse.vy *= 0.95;

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Canvas Smoke Overlay */}
      <canvas ref={canvasRef} className="hero-smoke-canvas" />

      {/* Background Gradients */}
      <div className="hero-radial-glow-1"></div>
      <div className="hero-radial-glow-2"></div>

      <div className="hero-container container">
        {/* Left column info */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div 
            className="hero-badge badge-gold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ✦ THE ULTIMATE SHISHA CATERING & SALES
          </motion.div>
          
          <motion.h1 
            className="hero-title heading-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            LUXURY HOOKAH <br />
            <span className="gold-text-gradient">ON DEMAND</span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            DELIVERED & SERVED AT YOUR DOORSTEP
          </motion.p>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Bring the high-end lounge experience to your home, villa, hotel, or private celebration. Featuring medical-grade sanitized stems, customized fresh flavor profiles, and professional white-glove setup by expert sommeliers.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a 
              href="#book" 
              onClick={(e) => handleScrollToSection(e, 'book')} 
              className="btn-gold"
            >
              <span>ORDER DELIVERY</span>
              <ArrowRight size={16} />
            </a>
            <a 
              href="#products" 
              onClick={(e) => handleScrollToSection(e, 'products')}
              className="btn-outline-gold"
            >
              <ShoppingCart size={16} />
              <span>EXPLORE STORE</span>
            </a>
          </motion.div>

          {/* Luxury features icons */}
          <motion.div 
            className="hero-features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="feature-item glass-panel">
              <div className="feature-icon-wrapper">
                <Sparkles className="feature-icon" size={18} />
              </div>
              <div className="feature-text">
                <h4>Premium Stems</h4>
                <p>Rolex-Grade Quality</p>
              </div>
            </div>
            <div className="feature-item glass-panel">
              <div className="feature-icon-wrapper">
                <ShieldCheck className="feature-icon" size={18} />
              </div>
              <div className="feature-text">
                <h4>White-Glove Setup</h4>
                <p>Expert Sommeliers</p>
              </div>
            </div>
            <div className="feature-item glass-panel">
              <div className="feature-icon-wrapper">
                <Zap className="feature-icon" size={18} />
              </div>
              <div className="feature-text">
                <h4>Hygienic standard</h4>
                <p>Steam-Sanitized</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column premium visual */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="hero-image-container">
            {/* Pulsing Backlit Gold Aura */}
            <div className="hero-aura-glow animate-pulse-slow"></div>
            
            <motion.img 
              src={heroImg} 
              alt="Bespoke luxury hookah assembly" 
              className="hero-visual-image"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
