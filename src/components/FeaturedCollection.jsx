import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedCollection.css';

const watches = [
  {
    id: 1,
    name: 'Submariner',
    label: 'Oyster Perpetual',
    image: '/images/diver_watch_1787232710872.jpg',
  },
  {
    id: 2,
    name: 'Datejust',
    label: 'The Classic',
    image: '/images/dress_watch_1787232727199.jpg',
  },
  {
    id: 3,
    name: 'Craftsmanship',
    label: 'A commitment to excellence',
    image: '/images/hero_watch_1787232652538.jpg',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
  }
};

const FeaturedCollection = ({ onProductClick }) => {
  return (
    <section className="featured-collection">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title">Rolex Watches</h2>
          <p className="section-subtitle">Experience a Rolex</p>
        </motion.div>
        
        <motion.div 
          className="watch-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {watches.map((watch, i) => (
            <motion.div 
              key={watch.id} 
              className={`watch-card-overlay ${i === 0 ? 'card-large' : ''}`}
              variants={cardVariants}
              onClick={() => i < 2 && onProductClick(watch.id)}
            >
              <img src={watch.image} alt={watch.name} className="card-bg-img" />
              <div className="card-gradient"></div>
              <div className="card-content">
                <span className="card-label">{watch.label}</span>
                <h3 className="card-name">{watch.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="view-all-container">
          <motion.button 
            className="btn-secondary"
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all watches
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;

