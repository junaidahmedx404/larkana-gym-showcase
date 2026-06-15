import React, { useState } from 'react';
import '../style/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container nav-wrapper">
        
        {/* Brand Identity */}
        <div className="nav-logo">
          LARKANA<span className="text-highlight">GYM</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#programs" onClick={() => setIsOpen(false)}>Programs</a></li>
          <li><a href="#schedule" onClick={() => setIsOpen(false)}>Schedule</a></li>
          <li><a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a></li>
          <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Stories</a></li>
          <li className="nav-cta-mobile">
            <a href="#contact" className="btn-nav-cta" onClick={() => setIsOpen(false)}>Join Now</a>
          </li>
        </ul>

        {/* Desktop Call to Action */}
        <div className="nav-cta-desktop">
          <a href="#contact" className="btn-nav-cta">Join Now</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;