import React, { useState, useEffect } from 'react';
import { Menu, Search, MapPin } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-left">
          <button className="icon-btn">
            <Menu size={24} />
            <span className="menu-text">Menu</span>
          </button>
        </div>
        
        <div className="header-center">
          <a href="/" className="logo">
            <span className="logo-crown">♛</span>
            <span className="logo-text">ROLEX</span>
          </a>
        </div>
        
        <div className="header-right">
          <button className="icon-btn">
            <Search size={20} />
          </button>
          <button className="icon-btn store-locator">
            <MapPin size={20} />
            <span>Find a Retailer</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
