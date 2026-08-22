import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedCollection.css';

const watches = [
  {
    id: 1,
    name: 'Submariner',
    label: 'Oyster Perpetual',
    image: '/images/diver_watch_new.jpg',
  },
  {
    id: 2,
    name: 'The power of three',
    label: 'Triplock',
    image: '/images/crown_macro.jpg',
  },
  {
    id: 3,
    name: 'Sustainability',
    label: 'A commitment to the future',
    image: '/images/hero_watch_1787232652538.jpg',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

const FeaturedCollection = ({ onProductClick }) => {
  return (
    <section className="featured-collection">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title">Explore the collection</h2>
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
              className="watch-card-overlay"
              variants={cardVariants}
              onClick={() => i === 0 && onProductClick(watch.id)}
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
      </div>
    </section>
  );
};

export default FeaturedCollection;



