import React from 'react';
import '../style/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="container footer-grid">
        
        {/* Brand Column */}
        <div className="footer-brand-box">
          <div className="footer-logo">
            LARKANA<span className="text-highlight">GYM</span>
          </div>
          <p className="footer-bio">
            Built to forge elite fitness levels and raw performance. Join a disciplined local community dedicated to real progression.
          </p>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">FB</a>
            <a href="#instagram" aria-label="Instagram">IG</a>
            <a href="#linkedin" aria-label="LinkedIn">LN</a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links-box">
          <h4>Explore</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#schedule">Timetable</a></li>
            <li><a href="#pricing">Memberships</a></li>
          </ul>
        </div>

        {/* Contact/Utility Column */}
        <div className="footer-links-box">
          <h4>Support</h4>
          <ul>
            <li><a href="#contact">Book Tour</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

      </div>

      {/* Attribution Bar */}
      <div className="footer-bottom">
        <div className="container bottom-wrapper">
          <p>&copy; {currentYear} Larkana Gym. All rights reserved.</p>
          <p className="agency-credit">
            Designed & Developed by <a href="https://webnaid.com" target="_blank" rel="noreferrer" className="text-highlight">Webnaid</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;