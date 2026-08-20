import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedCollection.css';

const watches = [
  {
    id: 1,
    name: 'Submariner',
    description: 'The reference among divers\' watches.',
    image: '/images/diver_watch_1787232710872.jpg',
    material: 'Oystersteel',
  },
  {
    id: 2,
    name: 'Datejust',
    description: 'The classic watch of reference.',
    image: '/images/dress_watch_1787232727199.jpg',
    material: 'Yellow gold',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  }
};

const FeaturedCollection = ({ onProductClick }) => {
  return (
    <section className="featured-collection">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
          {watches.map(watch => (
            <motion.div key={watch.id} className="watch-card" variants={cardVariants}>
              <div className="watch-img-container">
                <img src={watch.image} alt={watch.name} className="watch-img" />
              </div>
              <div className="watch-info">
                <h3 className="watch-name">{watch.name}</h3>
                <p className="watch-material">{watch.material}</p>
                <p className="watch-desc">{watch.description}</p>
                <button onClick={() => onProductClick(watch.id)} className="discover-link" style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>
                  Discover more
                  <span className="arrow">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="view-all-container">
          <motion.button 
            className="btn-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
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
