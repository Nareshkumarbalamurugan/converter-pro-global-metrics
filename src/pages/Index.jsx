
import React, { useState, useEffect } from 'react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentConverter, setCurrentConverter] = useState('area');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [theme, setTheme] = useState('light');

  // Conversion data
  const conversions = {
    area: {
      name: 'Area Converter',
      units: {
        sqm: { name: 'Square Meter', symbol: 'm²', factor: 1 },
        sqft: { name: 'Square Feet', symbol: 'ft²', factor: 0.092903 },
        sqyd: { name: 'Square Yard', symbol: 'yd²', factor: 0.836127 },
        acre: { name: 'Acre', symbol: 'ac', factor: 4046.86 },
        hectare: { name: 'Hectare', symbol: 'ha', factor: 10000 },
        are: { name: 'Are', symbol: 'a', factor: 100 },
        cent: { name: 'Cent', symbol: 'cent', factor: 40.4686 }
      }
    },
    length: {
      name: 'Length Converter',
      units: {
        m: { name: 'Meter', symbol: 'm', factor: 1 },
        mm: { name: 'Millimeter', symbol: 'mm', factor: 0.001 },
        cm: { name: 'Centimeter', symbol: 'cm', factor: 0.01 },
        km: { name: 'Kilometer', symbol: 'km', factor: 1000 },
        inch: { name: 'Inch', symbol: 'in', factor: 0.0254 },
        ft: { name: 'Foot', symbol: 'ft', factor: 0.3048 },
        yd: { name: 'Yard', symbol: 'yd', factor: 0.9144 },
        mile: { name: 'Mile', symbol: 'mi', factor: 1609.34 }
      }
    },
    weight: {
      name: 'Weight Converter',
      units: {
        kg: { name: 'Kilogram', symbol: 'kg', factor: 1 },
        g: { name: 'Gram', symbol: 'g', factor: 0.001 },
        mg: { name: 'Milligram', symbol: 'mg', factor: 0.000001 },
        ton: { name: 'Metric Ton', symbol: 't', factor: 1000 },
        oz: { name: 'Ounce', symbol: 'oz', factor: 0.0283495 },
        lb: { name: 'Pound', symbol: 'lb', factor: 0.453592 }
      }
    },
    temperature: {
      name: 'Temperature Converter',
      units: {
        celsius: { name: 'Celsius', symbol: '°C' },
        fahrenheit: { name: 'Fahrenheit', symbol: '°F' },
        kelvin: { name: 'Kelvin', symbol: 'K' },
        rankine: { name: 'Rankine', symbol: '°R' }
      }
    }
  };

  // Convert units function
  const convertUnits = (value, fromUnit, toUnit, category) => {
    const converterData = conversions[category];
    if (!converterData || !converterData.units[fromUnit] || !converterData.units[toUnit]) {
      return null;
    }

    if (category === 'temperature') {
      return convertTemperature(value, fromUnit, toUnit);
    }

    const fromFactor = converterData.units[fromUnit].factor;
    const toFactor = converterData.units[toUnit].factor;
    
    if (fromFactor && toFactor) {
      return (value * fromFactor) / toFactor;
    }
    return null;
  };

  // Temperature conversion
  const convertTemperature = (value, fromUnit, toUnit) => {
    let celsius;
    
    switch (fromUnit) {
      case 'celsius':
        celsius = value;
        break;
      case 'fahrenheit':
        celsius = (value - 32) * 5/9;
        break;
      case 'kelvin':
        celsius = value - 273.15;
        break;
      case 'rankine':
        celsius = (value - 491.67) * 5/9;
        break;
      default:
        return null;
    }
    
    switch (toUnit) {
      case 'celsius':
        return celsius;
      case 'fahrenheit':
        return celsius * 9/5 + 32;
      case 'kelvin':
        return celsius + 273.15;
      case 'rankine':
        return celsius * 9/5 + 491.67;
      default:
        return null;
    }
  };

  // Update conversion when values change
  useEffect(() => {
    if (fromValue && fromUnit && toUnit) {
      const result = convertUnits(parseFloat(fromValue), fromUnit, toUnit, currentConverter);
      if (result !== null) {
        setToValue(result.toFixed(6).replace(/\.?0+$/, ''));
      }
    }
  }, [fromValue, fromUnit, toUnit, currentConverter]);

  // Set default units when converter changes
  useEffect(() => {
    const converterData = conversions[currentConverter];
    if (converterData) {
      const unitKeys = Object.keys(converterData.units);
      if (unitKeys.length >= 2) {
        setFromUnit(unitKeys[0]);
        setToUnit(unitKeys[1]);
      }
    }
  }, [currentConverter]);

  const showSection = (sectionId) => {
    setCurrentSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConverter = (converterType) => {
    setCurrentConverter(converterType);
    setCurrentSection('converter-interface');
    setFromValue('');
    setToValue('');
  };

  const swapUnits = () => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    
    const tempValue = fromValue;
    setFromValue(toValue);
    setToValue(tempValue);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const copyResult = () => {
    if (toValue && toUnit) {
      const unit = conversions[currentConverter].units[toUnit];
      const text = `${toValue} ${unit.symbol}`;
      navigator.clipboard.writeText(text).then(() => {
        alert('Result copied to clipboard!');
      });
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-yellow-50'}`}>
      {/* Header */}
      <header className="bg-blue-800 text-white py-5 text-center shadow-lg">
        <h1 className="text-3xl font-bold">ConverterPro</h1>
        <p className="text-blue-100 mt-1">Made by BKND Groups</p>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-6">
              <button 
                onClick={() => showSection('home')}
                className={`px-4 py-2 rounded transition-colors ${
                  currentSection === 'home' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => showSection('converters')}
                className={`px-4 py-2 rounded transition-colors ${
                  currentSection === 'converters' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Converters
              </button>
              <button 
                onClick={() => showSection('about')}
                className={`px-4 py-2 rounded transition-colors ${
                  currentSection === 'about' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => showSection('contact')}
                className={`px-4 py-2 rounded transition-colors ${
                  currentSection === 'contact' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Contact
              </button>
            </div>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Home Section */}
        {currentSection === 'home' && (
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              All-in-One Unit Converter
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Convert between different units easily and accurately
            </p>
            <button 
              onClick={() => showSection('converters')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Converting
            </button>
          </div>
        )}

        {/* Converters Section */}
        {currentSection === 'converters' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Choose a Converter
              </h2>
              <div className="relative max-w-md mx-auto mb-8">
                <input
                  type="text"
                  placeholder="Search converters (e.g., 'inch to cm')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                onClick={() => openConverter('area')}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-2xl mb-3">🌍</div>
                <h3 className="font-semibold text-lg mb-2">Area Converter</h3>
                <p className="text-gray-600 text-sm">
                  Convert between square meters, feet, acres, hectares, cent, and more
                </p>
              </div>
              
              <div 
                onClick={() => openConverter('length')}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-2xl mb-3">📏</div>
                <h3 className="font-semibold text-lg mb-2">Length Converter</h3>
                <p className="text-gray-600 text-sm">
                  Convert between meters, feet, inches, kilometers and more
                </p>
              </div>
              
              <div 
                onClick={() => openConverter('weight')}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-2xl mb-3">⚖️</div>
                <h3 className="font-semibold text-lg mb-2">Weight Converter</h3>
                <p className="text-gray-600 text-sm">
                  Convert between kilograms, pounds, ounces, tons and more
                </p>
              </div>
              
              <div 
                onClick={() => openConverter('temperature')}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-2xl mb-3">🌡️</div>
                <h3 className="font-semibold text-lg mb-2">Temperature Converter</h3>
                <p className="text-gray-600 text-sm">
                  Convert between Celsius, Fahrenheit, Kelvin and Rankine
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Converter Interface */}
        {currentSection === 'converter-interface' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <button 
                onClick={() => showSection('converters')}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-4 hover:bg-gray-600 transition-colors"
              >
                ← Back to Converters
              </button>
              <h2 className="text-2xl font-semibold text-gray-800">
                {conversions[currentConverter]?.name}
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From:</label>
                  <select
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  >
                    {conversions[currentConverter] && Object.keys(conversions[currentConverter].units).map(unitKey => {
                      const unit = conversions[currentConverter].units[unitKey];
                      return (
                        <option key={unitKey} value={unitKey}>
                          {unit.name} ({unit.symbol})
                        </option>
                      );
                    })}
                  </select>
                  <input
                    type="number"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                    placeholder="Enter value"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">To:</label>
                  <select
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  >
                    {conversions[currentConverter] && Object.keys(conversions[currentConverter].units).map(unitKey => {
                      const unit = conversions[currentConverter].units[unitKey];
                      return (
                        <option key={unitKey} value={unitKey}>
                          {unit.name} ({unit.symbol})
                        </option>
                      );
                    })}
                  </select>
                  <input
                    type="number"
                    value={toValue}
                    readOnly
                    placeholder="Result"
                    className="w-full p-2 border border-gray-300 rounded bg-gray-50"
                  />
                </div>
              </div>

              <div className="flex justify-center space-x-4 mb-6">
                <button 
                  onClick={swapUnits}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  ⇄ Swap
                </button>
                <button 
                  onClick={copyResult}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  📋 Copy Result
                </button>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {currentSection === 'about' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About ConverterPro</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-600 mb-4">
                ConverterPro is the ultimate unit conversion tool created by BKND Groups. Our mission is to provide fast, accurate, and free conversions for all types of measurements.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're a student, professional, or just someone who needs quick conversions, ConverterPro has you covered with our comprehensive collection of unit converters.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
                  <p className="text-gray-600">Instant conversions with real-time results</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="font-semibold text-lg mb-2">Mobile Friendly</h3>
                  <p className="text-gray-600">Perfect on all devices</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {currentSection === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-600 mb-6">
                We'd love to hear from you! Send us your feedback, suggestions, or questions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
                  <div className="space-y-3">
                    <p><strong>Email:</strong> kamaleshkumarbalamurugan@gmail.com</p>
                    <p><strong>Company:</strong> BKND Groups</p>
                    <p><strong>Website:</strong> converterpro.online</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Send Message</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                    <textarea 
                      rows="4" 
                      placeholder="Your Message" 
                      className="w-full p-3 border border-gray-300 rounded"
                    ></textarea>
                    <button 
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            <a href="mailto:kamaleshkumarbalamurugan@gmail.com" className="text-blue-200 hover:text-white">
              Contact: kamaleshkumarbalamurugan@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-6">
            <button onClick={() => showSection('about')} className="text-blue-200 hover:text-white">About</button>
            <a href="#privacy" className="text-blue-200 hover:text-white">Privacy</a>
            <a href="#terms" className="text-blue-200 hover:text-white">Terms</a>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            &copy; 2024 ConverterPro by BKND Groups. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
