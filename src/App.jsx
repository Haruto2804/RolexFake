import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToHome = () => setCurrentPage('home');
  const navigateToProduct = (productId) => setCurrentPage('product');

  return (
    <div className="app">
      <Header />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <FeaturedCollection onProductClick={navigateToProduct} />
            <BrandStory />
          </>
        ) : (
          <ProductDetail onBack={navigateToHome} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
