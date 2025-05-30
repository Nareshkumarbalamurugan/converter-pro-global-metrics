
import React from 'react';

const Footer = ({ showSection }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ConverterPro</h3>
            <p>Ultimate Unit Conversion Tool by BKND Groups</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <button onClick={() => showSection('about')} className="footer-link">About</button>
            <button onClick={() => showSection('contact')} className="footer-link">Contact</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ConverterPro by BKND Groups. All rights reserved.</p>
          <p>Contact: kamaleshkumarbalamurugan@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
