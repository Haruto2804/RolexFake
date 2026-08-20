import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoBlur = useTransform(scrollYProgress, [0, 0.8], [0, 6]);

  return (
    <section className="hero" ref={ref}>
      <div className="hero-bg">
        <motion.video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ scale: videoScale, filter: videoBlur.get ? undefined : undefined }}
        >
          <source src="/videos/hero_momment.mp4" type="video/mp4" />
        </motion.video>
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
      </div>
      
      <motion.div 
        className="hero-content"
        style={{ y: yText, opacity: opacityText }}
      >
        <motion.div 
          className="hero-line-top"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Oyster Perpetual
        </motion.h1>
        <motion.h2 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Submariner
        </motion.h2>
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          The reference among divers' watches
        </motion.p>
        <motion.button 
          className="btn-primary hero-cta"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(163, 126, 44, 0.4)" }}
          whileTap={{ scale: 0.97 }}
        >
          Discover the watch
        </motion.button>
        <motion.div 
          className="hero-line-bottom"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        style={{ opacity: opacityText }}
      >
        <span className="scroll-text">Scroll</span>
        <motion.div 
          className="scroll-line"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;

