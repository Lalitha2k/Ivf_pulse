import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo-container">
  <div className="custom-logo">
    <span className="logo-i">
      i<span className="logo-dot">.</span>
    </span>
    <span className="logo-text">VF</span>
  </div>
  <span className="logo-subtext">Pulse</span>
</div>

      {/* Navigation Links */}
      <nav className="header-nav">
        <a href="#donor-programme" className="header-link">Donor Programme</a>
        <a href="#fertility-preservation" className="header-link">Fertility Preservation</a>
        <a href="#advanced-treatments" className="header-link">Advanced Treatments</a>
        <a href="#infertility-treatments" className="header-link">Infertility Treatments</a>
        <a href="#ivf-testing" className="header-link">IVF Testing</a>
        <a href="#about-us" className="header-link">About Us</a>
      </nav>

      {/* Talk to Us Button */}
      <div className="header-cta">
        <button className="cta-button">Talk to Us<span className="arrow"> →</span> </button>
      </div>
    </header>
  );
};

export default Header;
