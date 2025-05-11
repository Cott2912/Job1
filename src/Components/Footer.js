import React from "react";
import '../Style/Footer.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-links">
        <NavLink to="/about-us" className="footer-link">About Us</NavLink>
        <NavLink to="/contact-us" className="footer-link">Contact Us</NavLink>
        <NavLink to="/dmca" className="footer-link">DMCA</NavLink>
        <NavLink to="/privacy-policy" className="footer-link">Privacy Policy</NavLink>
        <NavLink to="/terms-of-service" className="footer-link">Terms of Service</NavLink>
      </nav>
    </footer>
  );
};

export default Footer;