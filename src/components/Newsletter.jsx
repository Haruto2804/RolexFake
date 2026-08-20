import React from 'react';
import { motion } from 'framer-motion';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <motion.div 
        className="newsletter-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="news-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <span className="news-label">Keep in Touch</span>
        <h2 className="news-title">Stay Informed</h2>
        <p className="news-desc">
          Receive the latest news about Rolex watches and events.
        </p>
        <motion.button
          className="btn-primary"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(163, 126, 44, 0.4)" }}
          whileTap={{ scale: 0.97 }}
        >
          Subscribe
        </motion.button>
        <motion.div
          className="news-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </section>
  );
};

export default Newsletter;
