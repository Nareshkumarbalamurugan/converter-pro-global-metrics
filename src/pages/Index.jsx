
import React, { useState, useEffect } from 'react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [currentConverter, setCurrentConverter] = useState('area');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState('light');

  // Comprehensive conversion data for all 17 types
  const conversions = {
    area: {
      name: 'Area Converter',
      icon: '🌍',
      description: 'Convert between square meters, feet, acres, hectares, cent, and more',
      units: {
        sqm: { name: 'Square Meter', symbol: 'm²', factor: 1 },
        sqft: { name: 'Square Feet', symbol: 'ft²', factor: 0.092903 },
        sqyd: { name: 'Square Yard', symbol: 'yd²', factor: 0.836127 },
        acre: { name: 'Acre', symbol: 'ac', factor: 4046.86 },
        hectare: { name: 'Hectare', symbol: 'ha', factor: 10000 },
        are: { name: 'Are', symbol: 'a', factor: 100 },
        cent: { name: 'Cent', symbol: 'cent', factor: 40.4686 },
        bigha: { name: 'Bigha', symbol: 'bigha', factor: 2529.3 },
        gunta: { name: 'Gunta', symbol: 'gunta', factor: 101.17 },
        kanal: { name: 'Kanal', symbol: 'kanal', factor: 505.857 },
        marla: { name: 'Marla', symbol: 'marla', factor: 25.29 }
      }
    },
    length: {
      name: 'Length Converter',
      icon: '📏',
      description: 'Convert between meters, feet, inches, kilometers and more',
      units: {
        mm: { name: 'Millimeter', symbol: 'mm', factor: 0.001 },
        cm: { name: 'Centimeter', symbol: 'cm', factor: 0.01 },
        m: { name: 'Meter', symbol: 'm', factor: 1 },
        km: { name: 'Kilometer', symbol: 'km', factor: 1000 },
        inch: { name: 'Inch', symbol: 'in', factor: 0.0254 },
        ft: { name: 'Foot', symbol: 'ft', factor: 0.3048 },
        yd: { name: 'Yard', symbol: 'yd', factor: 0.9144 },
        mile: { name: 'Mile', symbol: 'mi', factor: 1609.34 },
        nautical_mile: { name: 'Nautical Mile', symbol: 'nmi', factor: 1852 }
      }
    },
    weight: {
      name: 'Weight Converter',
      icon: '⚖️',
      description: 'Convert between kilograms, pounds, ounces, tons and more',
      units: {
        mg: { name: 'Milligram', symbol: 'mg', factor: 0.000001 },
        g: { name: 'Gram', symbol: 'g', factor: 0.001 },
        kg: { name: 'Kilogram', symbol: 'kg', factor: 1 },
        ton: { name: 'Metric Ton', symbol: 't', factor: 1000 },
        oz: { name: 'Ounce', symbol: 'oz', factor: 0.0283495 },
        lb: { name: 'Pound', symbol: 'lb', factor: 0.453592 },
        stone: { name: 'Stone', symbol: 'st', factor: 6.35029 },
        us_ton: { name: 'US Ton', symbol: 'US ton', factor: 907.185 }
      }
    },
    volume: {
      name: 'Volume Converter',
      icon: '💧',
      description: 'Convert between liters, gallons, cups, and more',
      units: {
        ml: { name: 'Milliliter', symbol: 'ml', factor: 0.001 },
        l: { name: 'Liter', symbol: 'l', factor: 1 },
        cm3: { name: 'Cubic Centimeter', symbol: 'cm³', factor: 0.001 },
        m3: { name: 'Cubic Meter', symbol: 'm³', factor: 1000 },
        tsp: { name: 'Teaspoon', symbol: 'tsp', factor: 0.00492892 },
        tbsp: { name: 'Tablespoon', symbol: 'tbsp', factor: 0.0147868 },
        cup: { name: 'Cup', symbol: 'cup', factor: 0.236588 },
        pint: { name: 'Pint', symbol: 'pt', factor: 0.473176 },
        quart: { name: 'Quart', symbol: 'qt', factor: 0.946353 },
        gallon: { name: 'Gallon (US)', symbol: 'gal', factor: 3.78541 }
      }
    },
    temperature: {
      name: 'Temperature Converter',
      icon: '🌡️',
      description: 'Convert between Celsius, Fahrenheit, Kelvin and Rankine',
      units: {
        celsius: { name: 'Celsius', symbol: '°C' },
        fahrenheit: { name: 'Fahrenheit', symbol: '°F' },
        kelvin: { name: 'Kelvin', symbol: 'K' },
        rankine: { name: 'Rankine', symbol: '°R' }
      }
    },
    time: {
      name: 'Time Converter',
      icon: '⏱️',
      description: 'Convert between seconds, minutes, hours, days and more',
      units: {
        second: { name: 'Second', symbol: 's', factor: 1 },
        minute: { name: 'Minute', symbol: 'min', factor: 60 },
        hour: { name: 'Hour', symbol: 'h', factor: 3600 },
        day: { name: 'Day', symbol: 'd', factor: 86400 },
        week: { name: 'Week', symbol: 'wk', factor: 604800 },
        month: { name: 'Month', symbol: 'mo', factor: 2628000 },
        year: { name: 'Year', symbol: 'yr', factor: 31536000 }
      }
    },
    speed: {
      name: 'Speed Converter',
      icon: '⚡',
      description: 'Convert between km/h, mph, knots and more',
      units: {
        mps: { name: 'Meters/Second', symbol: 'm/s', factor: 1 },
        kmh: { name: 'Kilometers/Hour', symbol: 'km/h', factor: 0.277778 },
        mph: { name: 'Miles/Hour', symbol: 'mph', factor: 0.44704 },
        knot: { name: 'Knots', symbol: 'kn', factor: 0.514444 },
        fps: { name: 'Feet/Second', symbol: 'ft/s', factor: 0.3048 }
      }
    },
    digital: {
      name: 'Digital Storage',
      icon: '💻',
      description: 'Convert between bytes, KB, MB, GB and more',
      units: {
        bit: { name: 'Bit', symbol: 'bit', factor: 0.125 },
        byte: { name: 'Byte', symbol: 'B', factor: 1 },
        kb: { name: 'Kilobyte', symbol: 'KB', factor: 1024 },
        mb: { name: 'Megabyte', symbol: 'MB', factor: 1048576 },
        gb: { name: 'Gigabyte', symbol: 'GB', factor: 1073741824 },
        tb: { name: 'Terabyte', symbol: 'TB', factor: 1099511627776 }
      }
    },
    energy: {
      name: 'Energy Converter',
      icon: '🔋',
      description: 'Convert between joules, calories, kWh and more',
      units: {
        joule: { name: 'Joule', symbol: 'J', factor: 1 },
        calorie: { name: 'Calorie', symbol: 'cal', factor: 4.184 },
        kcal: { name: 'Kilocalorie', symbol: 'kcal', factor: 4184 },
        kj: { name: 'Kilojoule', symbol: 'kJ', factor: 1000 },
        wh: { name: 'Watt-hour', symbol: 'Wh', factor: 3600 },
        kwh: { name: 'Kilowatt-hour', symbol: 'kWh', factor: 3600000 }
      }
    },
    pressure: {
      name: 'Pressure Converter',
      icon: '🧪',
      description: 'Convert between Pascal, Bar, PSI and more',
      units: {
        pascal: { name: 'Pascal', symbol: 'Pa', factor: 1 },
        bar: { name: 'Bar', symbol: 'bar', factor: 100000 },
        psi: { name: 'PSI', symbol: 'psi', factor: 6894.76 },
        atm: { name: 'Atmosphere', symbol: 'atm', factor: 101325 },
        torr: { name: 'Torr', symbol: 'Torr', factor: 133.322 }
      }
    },
    power: {
      name: 'Power Converter',
      icon: '🔌',
      description: 'Convert between watts, kilowatts, horsepower',
      units: {
        watt: { name: 'Watt', symbol: 'W', factor: 1 },
        kw: { name: 'Kilowatt', symbol: 'kW', factor: 1000 },
        hp: { name: 'Horsepower', symbol: 'hp', factor: 745.7 },
        mw: { name: 'Megawatt', symbol: 'MW', factor: 1000000 }
      }
    },
    density: {
      name: 'Density Converter',
      icon: '🧱',
      description: 'Convert between kg/m³, g/cm³, lb/ft³',
      units: {
        kgm3: { name: 'kg/m³', symbol: 'kg/m³', factor: 1 },
        gcm3: { name: 'g/cm³', symbol: 'g/cm³', factor: 1000 },
        lbft3: { name: 'lb/ft³', symbol: 'lb/ft³', factor: 16.0185 }
      }
    },
    fuel: {
      name: 'Fuel Consumption',
      icon: '🎚️',
      description: 'Convert between km/l, l/100km, mpg',
      units: {
        kml: { name: 'km/l', symbol: 'km/l', factor: 1 },
        l100km: { name: 'l/100km', symbol: 'l/100km', factor: -1 }, // Special case
        mpg_us: { name: 'MPG (US)', symbol: 'mpg', factor: 2.35214 },
        mpg_uk: { name: 'MPG (UK)', symbol: 'mpg (UK)', factor: 2.82481 }
      }
    },
    data_rate: {
      name: 'Data Transfer Rate',
      icon: '🧾',
      description: 'Convert between bps, kbps, Mbps, Gbps',
      units: {
        bps: { name: 'bps', symbol: 'bps', factor: 1 },
        kbps: { name: 'kbps', symbol: 'kbps', factor: 1000 },
        mbps: { name: 'Mbps', symbol: 'Mbps', factor: 1000000 },
        gbps: { name: 'Gbps', symbol: 'Gbps', factor: 1000000000 }
      }
    },
    angle: {
      name: 'Angle Converter',
      icon: '📐',
      description: 'Convert between degrees, radians, gradians',
      units: {
        degree: { name: 'Degrees', symbol: '°', factor: 1 },
        radian: { name: 'Radians', symbol: 'rad', factor: 57.2958 },
        gradian: { name: 'Gradians', symbol: 'grad', factor: 0.9 },
        turn: { name: 'Turns', symbol: 'turn', factor: 360 }
      }
    },
    height: {
      name: 'Height Converter',
      icon: '🪜',
      description: 'Convert between feet, inches, centimeters, meters',
      units: {
        cm: { name: 'Centimeters', symbol: 'cm', factor: 1 },
        m: { name: 'Meters', symbol: 'm', factor: 100 },
        inch: { name: 'Inches', symbol: 'in', factor: 2.54 },
        ft: { name: 'Feet', symbol: 'ft', factor: 30.48 },
        hand: { name: 'Hands', symbol: 'h', factor: 10.16 }
      }
    },
    currency: {
      name: 'Currency Converter',
      icon: '💵',
      description: 'Convert between different currencies with live rates',
      units: {
        inr: { name: 'Indian Rupee', symbol: 'INR', factor: 1 },
        usd: { name: 'US Dollar', symbol: 'USD', factor: 83.15 },
        eur: { name: 'Euro', symbol: 'EUR', factor: 90.25 },
        gbp: { name: 'British Pound', symbol: 'GBP', factor: 105.40 },
        jpy: { name: 'Japanese Yen', symbol: 'JPY', factor: 0.56 },
        aud: { name: 'Australian Dollar', symbol: 'AUD', factor: 54.82 }
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

    if (category === 'fuel' && (fromUnit === 'l100km' || toUnit === 'l100km')) {
      return convertFuelConsumption(value, fromUnit, toUnit);
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

  // Fuel consumption conversion
  const convertFuelConsumption = (value, fromUnit, toUnit) => {
    if (fromUnit === 'l100km' && toUnit === 'kml') {
      return 100 / value;
    }
    if (fromUnit === 'kml' && toUnit === 'l100km') {
      return 100 / value;
    }
    return null;
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

  // Navigation functions
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

  // Search functionality
  const filteredConverters = Object.keys(conversions).filter(key => {
    const converter = conversions[key];
    return converter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           key.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 to-yellow-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`py-6 text-center shadow-lg transition-colors ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-blue-800'
      } text-white`}>
        <h1 className="text-4xl font-bold">ConverterPro</h1>
        <p className="text-blue-100 mt-2 text-lg">Made by BKND Groups</p>
      </header>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 shadow-md transition-colors ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-6">
              <button 
                onClick={() => showSection('home')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentSection === 'home' 
                    ? 'bg-blue-600 text-white' 
                    : theme === 'dark' 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => showSection('converters')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentSection === 'converters' 
                    ? 'bg-blue-600 text-white' 
                    : theme === 'dark' 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Converters
              </button>
              <button 
                onClick={() => showSection('about')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentSection === 'about' 
                    ? 'bg-blue-600 text-white' 
                    : theme === 'dark' 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => showSection('contact')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentSection === 'contact' 
                    ? 'bg-blue-600 text-white' 
                    : theme === 'dark' 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Contact
              </button>
            </div>
            <button 
              onClick={toggleTheme}
              className={`p-3 rounded-full transition-colors ${
                theme === 'dark' 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
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
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">
              Ultimate Unit Converter
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Convert between different units easily and accurately. Access 17+ converter types including area, length, weight, temperature, currency and more.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button 
                onClick={() => showSection('converters')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Start Converting
              </button>
              <button 
                onClick={() => showSection('about')}
                className={`px-8 py-4 rounded-lg text-lg font-semibold transition-colors border-2 ${
                  theme === 'dark' 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Learn More
              </button>
            </div>
          </div>
        )}

        {/* Converters Section */}
        {currentSection === 'converters' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Choose a Converter</h2>
              <div className="relative max-w-md mx-auto mb-8">
                <input
                  type="text"
                  placeholder="Search converters (e.g., 'length', 'temperature')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {(searchQuery ? filteredConverters : Object.keys(conversions)).map(key => {
                const converter = conversions[key];
                return (
                  <div 
                    key={key}
                    onClick={() => openConverter(key)}
                    className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 ${
                      theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-4xl mb-4">{converter.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{converter.name}</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {converter.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Converter Interface */}
        {currentSection === 'converter-interface' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <button 
                onClick={() => showSection('converters')}
                className={`px-4 py-2 rounded-lg mr-4 transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-gray-500 text-white hover:bg-gray-600'
                }`}
              >
                ← Back to Converters
              </button>
              <div className="flex items-center">
                <span className="text-3xl mr-3">{conversions[currentConverter]?.icon}</span>
                <h2 className="text-3xl font-bold">
                  {conversions[currentConverter]?.name}
                </h2>
              </div>
            </div>

            <div className={`rounded-xl shadow-lg p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-3">From:</label>
                  <select
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                    className={`w-full p-3 rounded-lg border-2 mb-4 transition-colors ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
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
                    className={`w-full p-3 rounded-lg border-2 transition-colors ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">To:</label>
                  <select
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value)}
                    className={`w-full p-3 rounded-lg border-2 mb-4 transition-colors ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
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
                    className={`w-full p-3 rounded-lg border-2 transition-colors ${
                      theme === 'dark' 
                        ? 'bg-gray-600 border-gray-500 text-white' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                  />
                </div>
              </div>

              <div className="flex justify-center space-x-4 mb-8">
                <button 
                  onClick={swapUnits}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  ⇄ Swap Units
                </button>
                <button 
                  onClick={copyResult}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  📋 Copy Result
                </button>
              </div>

              {/* All conversions display */}
              {fromValue && conversions[currentConverter] && (
                <div className={`rounded-lg p-6 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <h3 className="font-bold text-lg mb-4">All Conversions:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Object.keys(conversions[currentConverter].units).map(unitKey => {
                      const unit = conversions[currentConverter].units[unitKey];
                      const convertedValue = convertUnits(parseFloat(fromValue), fromUnit, unitKey, currentConverter);
                      if (convertedValue !== null) {
                        return (
                          <div key={unitKey} className={`p-3 rounded text-center ${
                            theme === 'dark' ? 'bg-gray-600' : 'bg-white'
                          }`}>
                            <div className="font-semibold text-blue-600">{unit.name}</div>
                            <div className="text-lg">{convertedValue.toFixed(6).replace(/\.?0+$/, '')} {unit.symbol}</div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* About Section */}
        {currentSection === 'about' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">About ConverterPro</h2>
            <div className={`rounded-xl shadow-lg p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <p className="text-lg mb-6 leading-relaxed">
                ConverterPro is the ultimate unit conversion tool created by BKND Groups. Our mission is to provide fast, accurate, and free conversions for all types of measurements that professionals, students, and everyday users need.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Whether you're an engineer calculating measurements, a student working on assignments, a traveler converting currencies, or just someone who needs quick conversions, ConverterPro has you covered with our comprehensive collection of 17+ unit converters.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-bold text-xl mb-2">Lightning Fast</h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    Instant conversions with real-time results as you type
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="font-bold text-xl mb-2">Mobile Friendly</h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    Perfect responsive design that works on all devices
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-bold text-xl mb-2">Comprehensive</h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    17+ converter types covering all measurement needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {currentSection === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
            <div className={`rounded-xl shadow-lg p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <p className="text-lg mb-8 leading-relaxed">
                We'd love to hear from you! Send us your feedback, suggestions, or questions about ConverterPro.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                    }`}>
                      <p><strong>Email:</strong> kamaleshkumarbalamurugan@gmail.com</p>
                    </div>
                    <div className={`p-4 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                    }`}>
                      <p><strong>Company:</strong> BKND Groups</p>
                    </div>
                    <div className={`p-4 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                    }`}>
                      <p><strong>Website:</strong> converterpro.online</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-6">Send Message</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className={`w-full p-3 rounded-lg border-2 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className={`w-full p-3 rounded-lg border-2 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                    <textarea 
                      rows="4" 
                      placeholder="Your Message" 
                      className={`w-full p-3 rounded-lg border-2 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    ></textarea>
                    <button 
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold w-full"
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
      <footer className={`py-8 mt-16 transition-colors ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-blue-800'
      } text-white`}>
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">ConverterPro</h3>
            <p className="text-blue-200">Ultimate Unit Conversion Tool by BKND Groups</p>
          </div>
          <div className="flex flex-wrap justify-center space-x-6 mb-6">
            <button onClick={() => showSection('about')} className="text-blue-200 hover:text-white transition-colors">About</button>
            <button onClick={() => showSection('contact')} className="text-blue-200 hover:text-white transition-colors">Contact</button>
            <a href="#privacy" className="text-blue-200 hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="text-blue-200 hover:text-white transition-colors">Terms</a>
          </div>
          <div className="border-t border-blue-700 pt-6">
            <p className="text-blue-200 mb-2">
              <a href="mailto:kamaleshkumarbalamurugan@gmail.com" className="hover:text-white transition-colors">
                Contact: kamaleshkumarbalamurugan@gmail.com
              </a>
            </p>
            <p className="text-sm text-blue-300">
              &copy; 2024 ConverterPro by BKND Groups. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
