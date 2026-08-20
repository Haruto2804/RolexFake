import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import Craftsmanship from './components/Craftsmanship';
import BrandStory from './components/BrandStory';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import LoadingScreen from './components/LoadingScreen';
import GoldParticles from './components/GoldParticles';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const navigateToHome = () => setCurrentPage('home');
  const navigateToProduct = (productId) => setCurrentPage('product');

  return (
    <div className="app">
      <LoadingScreen isLoading={isLoading} />
      <ScrollProgress />
      <GoldParticles count={25} />
      <Header />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <FeaturedCollection onProductClick={navigateToProduct} />
            <Craftsmanship />
            <BrandStory />
            <Newsletter />
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


