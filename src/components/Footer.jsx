import React from 'react';
import { MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-crown">♛</span>
              <span className="logo-text">ROLEX</span>
            </div>
          </div>
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Rolex Watches</h4>
              <ul>
                <li><a href="#">New Watches 2026</a></li>
                <li><a href="#">Find your Rolex</a></li>
                <li><a href="#">Configure your Rolex</a></li>
                <li><a href="#">Men's watches</a></li>
                <li><a href="#">Women's watches</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>World of Rolex</h4>
              <ul>
                <li><a href="#">Sports and Arts</a></li>
                <li><a href="#">Rolex and Cinema</a></li>
                <li><a href="#">Rolex and Architecture</a></li>
                <li><a href="#">Perpetual Planet</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Find a Retailer</a></li>
                <li><a href="#">Find a Service Centre</a></li>
                <li><a href="#">Frequently Asked Questions</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Notice</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Youtube">YouTube</a>
            <a href="#" aria-label="Linkedin">LinkedIn</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Rolex Fake Project. For educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
