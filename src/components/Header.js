import React, { useState } from 'react';
import '../styles/Header.css'; 
import logo from '../assets/logo-1.png';

const Header = () => {
  // State to control the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>

      {/* Hamburger icon for mobile view */}
      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        &#9776;
      </div>

      {/* Navigation links */}
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/courses">Our Courses</a>
        <a href="/contact">Contact</a>
        <button className="sign-in-btn">Sign In</button>
      </nav>
    </header>
  );
};

export default Header;
