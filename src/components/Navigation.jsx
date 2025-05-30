
import React from 'react';

const Navigation = ({ currentSection, showSection, theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>ConverterPro</h2>
          <span>by BKND Groups</span>
        </div>
        
        <div className="nav-menu">
          <button 
            onClick={() => showSection('home')}
            className={`nav-link ${currentSection === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => showSection('about')}
            className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}
          >
            About
          </button>
          <button 
            onClick={() => showSection('contact')}
            className={`nav-link ${currentSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
        </div>

        <button 
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
