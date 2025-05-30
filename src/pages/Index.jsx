
import React, { useState, useEffect } from 'react';
import { conversions } from '../utils/conversions';
import ConverterCard from '../components/ConverterCard';
import MainConverter from '../components/MainConverter';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentConverter, setCurrentConverter] = useState('area');
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const showSection = (sectionId) => {
    setCurrentSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConverter = (converterType) => {
    setCurrentConverter(converterType);
    setCurrentSection('converter-interface');
  };

  const filteredConverters = Object.keys(conversions).filter(key => {
    const converter = conversions[key];
    return converter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           key.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="app">
      <Navigation 
        currentSection={currentSection}
        showSection={showSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="main-content">
        {/* Hero Section */}
        {currentSection === 'home' && (
          <div className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">Unit Converter</h1>
              <p className="hero-subtitle">Convert various units across different categories easily.</p>
              
              {/* Main Converter Display */}
              <div className="main-converter-card">
                <MainConverter currentConverter={currentConverter} />
              </div>

              {/* Converter Categories Grid */}
              <div className="converter-categories">
                {Object.keys(conversions).map(key => {
                  const converter = conversions[key];
                  return (
                    <ConverterCard
                      key={key}
                      converter={converter}
                      converterKey={key}
                      onClick={() => openConverter(key)}
                      theme={theme}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Converter Interface */}
        {currentSection === 'converter-interface' && (
          <div className="converter-interface">
            <div className="converter-header">
              <button 
                onClick={() => showSection('home')}
                className="back-button"
              >
                ← Back to Home
              </button>
            </div>
            <MainConverter currentConverter={currentConverter} expanded={true} />
          </div>
        )}

        {/* About Section */}
        {currentSection === 'about' && (
          <div className="about-section">
            <div className="container">
              <h2>About ConverterPro</h2>
              <p>ConverterPro is the ultimate unit conversion tool created by BKND Groups. Convert between different units easily and accurately with our comprehensive collection of 17+ unit converters.</p>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {currentSection === 'contact' && (
          <div className="contact-section">
            <div className="container">
              <h2>Contact Us</h2>
              <p>Email: kamaleshkumarbalamurugan@gmail.com</p>
              <p>Company: BKND Groups</p>
              <p>Website: converterpro.online</p>
            </div>
          </div>
        )}
      </main>

      <Footer showSection={showSection} />
    </div>
  );
};

export default Index;
