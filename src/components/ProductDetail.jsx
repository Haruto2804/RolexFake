import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ onBack }) => {
  return (
    <div className="product-page fade-in">
      <div className="product-breadcrumb">
        <button className="back-btn" onClick={onBack}>
          <span className="arrow">←</span> Back to Collection
        </button>
      </div>
      
      <div className="product-container">
        <div className="product-gallery">
          <div className="product-image-main">
            <img src="/images/diver_watch_1787232710872.jpg" alt="Submariner" />
          </div>
        </div>
        
        <div className="product-info-panel">
          <p className="product-collection">Submariner</p>
          <h1 className="product-name">Oyster Perpetual Submariner Date</h1>
          <p className="product-reference">Reference 126610LN</p>
          
          <div className="product-price-section">
            <p className="product-price">$10,250</p>
            <p className="price-disclaimer">Suggested Retail Price. VAT Included.</p>
          </div>
          
          <p className="product-description">
            The Submariner's rotatable bezel is a key functionality of the watch. Its 60-minute graduations allow a diver to accurately and safely monitor diving time and decompression stops.
          </p>
          
          <div className="product-actions">
            <button className="btn-primary full-width">Contact a Retailer</button>
          </div>
          
          <div className="product-specs">
            <div className="spec-item">
              <h3>Model Case</h3>
              <p>Oyster, 41 mm, Oystersteel</p>
            </div>
            <div className="spec-item">
              <h3>Bezel</h3>
              <p>Unidirectional rotatable 60-minute graduated, scratch-resistant Cerachrom insert in ceramic, numerals and graduations coated in platinum</p>
            </div>
            <div className="spec-item">
              <h3>Water Resistance</h3>
              <p>Waterproof to 300 metres / 1,000 feet</p>
            </div>
            <div className="spec-item">
              <h3>Movement</h3>
              <p>Perpetual, mechanical, self-winding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
