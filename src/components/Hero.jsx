import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero" ref={ref}>
      <div className="hero-bg">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          {/* High quality luxury watch placeholder video */}
          <source src="https://cdn.pixabay.com/video/2021/08/11/84687-587834571_large.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <motion.div 
        className="hero-content"
        style={{ y: yText, opacity: opacityText }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, letterSpacing: '0px' }}
          animate={{ opacity: 1, letterSpacing: '4px' }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          Oyster Perpetual
        </motion.h1>
        <motion.h2 
          className="hero-subtitle"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
        >
          Submariner
        </motion.h2>
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          The reference among divers' watches
        </motion.p>
        <motion.button 
          className="btn-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          whileHover={{ scale: 1.05, backgroundColor: 'var(--rolex-gold)' }}
          whileTap={{ scale: 0.95 }}
        >
          Discover the watch
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
