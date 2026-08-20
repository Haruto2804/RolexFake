import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './BrandStory.css';

const BrandStory = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const crownScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const crownRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section className="brand-story" ref={containerRef}>
      <div className="story-container">
        <motion.div 
          className="story-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="story-title">An obsession with perfection</h2>
          <p className="story-text">
            At the heart of our philosophy is a long-term vision. The concept of sustainability has always underpinned the brand's development: offering timeless and durable watches that are built to last, while committing to future generations.
          </p>
          <a href="#discover" className="discover-link">
            Discover our history
            <span className="arrow">→</span>
          </a>
        </motion.div>
        <div className="story-image-container">
          <motion.div 
            className="story-image-placeholder"
            style={{ y: imageY }}
          >
            <motion.span 
              className="logo-crown gold"
              style={{ scale: crownScale, rotate: crownRotate }}
            >
              ♛
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
