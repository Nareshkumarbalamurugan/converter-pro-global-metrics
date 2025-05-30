
// Global variables
let currentLanguage = 'en';
let currentTheme = 'light';
let currentConverter = 'area';
let currencyRates = {};
let goldRates = {
    '24k': 6200,
    '22k': 5700,
    '18k': 4650,
    '14k': 3100
};

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
            cent: { name: 'Cent', symbol: 'cent', factor: 40.4686 },
            bigha: { name: 'Bigha', symbol: 'bigha', factor: 2529.3 },
            gunta: { name: 'Gunta', symbol: 'gunta', factor: 101.17 },
            kanal: { name: 'Kanal', symbol: 'kanal', factor: 505.857 },
            marla: { name: 'Marla', symbol: 'marla', factor: 25.2929 },
            ground: { name: 'Ground', symbol: 'ground', factor: 222.967 }
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
            mile: { name: 'Mile', symbol: 'mi', factor: 1609.34 },
            nmi: { name: 'Nautical Mile', symbol: 'nmi', factor: 1852 }
        }
    },
    weight: {
        name: 'Weight Converter',
        units: {
            kg: { name: 'Kilogram', symbol: 'kg', factor: 1 },
            mg: { name: 'Milligram', symbol: 'mg', factor: 0.000001 },
            g: { name: 'Gram', symbol: 'g', factor: 0.001 },
            ton: { name: 'Metric Ton', symbol: 't', factor: 1000 },
            oz: { name: 'Ounce', symbol: 'oz', factor: 0.0283495 },
            lb: { name: 'Pound', symbol: 'lb', factor: 0.453592 },
            stone: { name: 'Stone', symbol: 'st', factor: 6.35029 },
            us_ton: { name: 'US Ton', symbol: 'US ton', factor: 907.185 },
            uk_ton: { name: 'Imperial Ton', symbol: 'UK ton', factor: 1016.05 }
        }
    },
    volume: {
        name: 'Volume Converter',
        units: {
            l: { name: 'Liter', symbol: 'L', factor: 1 },
            ml: { name: 'Milliliter', symbol: 'mL', factor: 0.001 },
            cm3: { name: 'Cubic Centimeter', symbol: 'cm³', factor: 0.001 },
            m3: { name: 'Cubic Meter', symbol: 'm³', factor: 1000 },
            tsp: { name: 'Teaspoon', symbol: 'tsp', factor: 0.00492892 },
            tbsp: { name: 'Tablespoon', symbol: 'tbsp', factor: 0.0147868 },
            cup: { name: 'Cup', symbol: 'cup', factor: 0.236588 },
            pint: { name: 'Pint', symbol: 'pt', factor: 0.473176 },
            quart: { name: 'Quart', symbol: 'qt', factor: 0.946353 },
            gallon_us: { name: 'US Gallon', symbol: 'gal (US)', factor: 3.78541 },
            gallon_uk: { name: 'UK Gallon', symbol: 'gal (UK)', factor: 4.54609 }
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
    },
    time: {
        name: 'Time Converter',
        units: {
            second: { name: 'Second', symbol: 's', factor: 1 },
            minute: { name: 'Minute', symbol: 'min', factor: 60 },
            hour: { name: 'Hour', symbol: 'h', factor: 3600 },
            day: { name: 'Day', symbol: 'd', factor: 86400 },
            week: { name: 'Week', symbol: 'wk', factor: 604800 },
            month: { name: 'Month', symbol: 'mo', factor: 2629746 },
            year: { name: 'Year', symbol: 'yr', factor: 31556952 },
            decade: { name: 'Decade', symbol: 'dec', factor: 315569520 },
            century: { name: 'Century', symbol: 'cent', factor: 3155695200 }
        }
    },
    speed: {
        name: 'Speed Converter',
        units: {
            ms: { name: 'Meter/Second', symbol: 'm/s', factor: 1 },
            kmh: { name: 'Kilometer/Hour', symbol: 'km/h', factor: 0.277778 },
            mph: { name: 'Mile/Hour', symbol: 'mph', factor: 0.44704 },
            knot: { name: 'Knot', symbol: 'kn', factor: 0.514444 },
            fps: { name: 'Feet/Second', symbol: 'ft/s', factor: 0.3048 }
        }
    },
    digital: {
        name: 'Digital Storage Converter',
        units: {
            byte: { name: 'Byte', symbol: 'B', factor: 1 },
            bit: { name: 'Bit', symbol: 'bit', factor: 0.125 },
            kb: { name: 'Kilobyte', symbol: 'KB', factor: 1024 },
            mb: { name: 'Megabyte', symbol: 'MB', factor: 1048576 },
            gb: { name: 'Gigabyte', symbol: 'GB', factor: 1073741824 },
            tb: { name: 'Terabyte', symbol: 'TB', factor: 1099511627776 },
            pb: { name: 'Petabyte', symbol: 'PB', factor: 1125899906842624 },
            eb: { name: 'Exabyte', symbol: 'EB', factor: 1152921504606846976 }
        }
    },
    currency: {
        name: 'Currency Converter',
        units: {
            usd: { name: 'US Dollar', symbol: '$' },
            eur: { name: 'Euro', symbol: '€' },
            inr: { name: 'Indian Rupee', symbol: '₹' },
            gbp: { name: 'British Pound', symbol: '£' },
            jpy: { name: 'Japanese Yen', symbol: '¥' },
            aud: { name: 'Australian Dollar', symbol: 'A$' },
            cad: { name: 'Canadian Dollar', symbol: 'C$' },
            chf: { name: 'Swiss Franc', symbol: 'CHF' },
            cny: { name: 'Chinese Yuan', symbol: '¥' },
            rub: { name: 'Russian Ruble', symbol: '₽' }
        }
    },
    energy: {
        name: 'Energy Converter',
        units: {
            joule: { name: 'Joule', symbol: 'J', factor: 1 },
            calorie: { name: 'Calorie', symbol: 'cal', factor: 4.184 },
            kcal: { name: 'Kilocalorie', symbol: 'kcal', factor: 4184 },
            kj: { name: 'Kilojoule', symbol: 'kJ', factor: 1000 },
            wh: { name: 'Watt-hour', symbol: 'Wh', factor: 3600 },
            kwh: { name: 'Kilowatt-hour', symbol: 'kWh', factor: 3600000 },
            btu: { name: 'British Thermal Unit', symbol: 'BTU', factor: 1055.06 },
            therm: { name: 'Therm', symbol: 'therm', factor: 105506000 }
        }
    },
    pressure: {
        name: 'Pressure Converter',
        units: {
            pascal: { name: 'Pascal', symbol: 'Pa', factor: 1 },
            bar: { name: 'Bar', symbol: 'bar', factor: 100000 },
            psi: { name: 'PSI', symbol: 'psi', factor: 6894.76 },
            atm: { name: 'Atmosphere', symbol: 'atm', factor: 101325 },
            torr: { name: 'Torr', symbol: 'Torr', factor: 133.322 },
            mmhg: { name: 'mmHg', symbol: 'mmHg', factor: 133.322 }
        }
    },
    power: {
        name: 'Power Converter',
        units: {
            watt: { name: 'Watt', symbol: 'W', factor: 1 },
            kw: { name: 'Kilowatt', symbol: 'kW', factor: 1000 },
            hp: { name: 'Horsepower', symbol: 'hp', factor: 745.7 },
            btu_h: { name: 'BTU/hour', symbol: 'BTU/h', factor: 0.293071 },
            mw: { name: 'Megawatt', symbol: 'MW', factor: 1000000 }
        }
    },
    density: {
        name: 'Density Converter',
        units: {
            kg_m3: { name: 'kg/m³', symbol: 'kg/m³', factor: 1 },
            g_cm3: { name: 'g/cm³', symbol: 'g/cm³', factor: 1000 },
            lb_ft3: { name: 'lb/ft³', symbol: 'lb/ft³', factor: 16.0185 },
            lb_in3: { name: 'lb/in³', symbol: 'lb/in³', factor: 27679.9 }
        }
    },
    fuel: {
        name: 'Fuel Consumption Converter',
        units: {
            km_l: { name: 'km/L', symbol: 'km/L', factor: 1 },
            l_100km: { name: 'L/100km', symbol: 'L/100km', factor: -100 },
            mpg_us: { name: 'mpg (US)', symbol: 'mpg (US)', factor: 2.35215 },
            mpg_uk: { name: 'mpg (UK)', symbol: 'mpg (UK)', factor: 2.82481 }
        }
    },
    'data-transfer': {
        name: 'Data Transfer Rate Converter',
        units: {
            bps: { name: 'bit/second', symbol: 'bps', factor: 1 },
            kbps: { name: 'Kilobit/second', symbol: 'kbps', factor: 1000 },
            mbps: { name: 'Megabit/second', symbol: 'Mbps', factor: 1000000 },
            gbps: { name: 'Gigabit/second', symbol: 'Gbps', factor: 1000000000 },
            tbps: { name: 'Terabit/second', symbol: 'Tbps', factor: 1000000000000 }
        }
    },
    angle: {
        name: 'Angle Converter',
        units: {
            degree: { name: 'Degree', symbol: '°', factor: 1 },
            radian: { name: 'Radian', symbol: 'rad', factor: 57.2958 },
            gradian: { name: 'Gradian', symbol: 'grad', factor: 0.9 },
            turn: { name: 'Turn', symbol: 'turn', factor: 360 }
        }
    },
    height: {
        name: 'Height Converter',
        units: {
            m: { name: 'Meter', symbol: 'm', factor: 1 },
            cm: { name: 'Centimeter', symbol: 'cm', factor: 0.01 },
            ft: { name: 'Foot', symbol: 'ft', factor: 0.3048 },
            inch: { name: 'Inch', symbol: 'in', factor: 0.0254 },
            hand: { name: 'Hand', symbol: 'hh', factor: 0.1016 }
        }
    }
};

// Language translations
const translations = {
    en: {
        home: 'Home',
        converters: 'Converters',
        goldRates: 'Gold Rates',
        about: 'About',
        contact: 'Contact',
        searchPlaceholder: 'Search converters (e.g., \'inch to cm\', \'kg to lb\')',
        welcome: 'Welcome to ConverterPro',
        tagline: 'Your ultimate tool for all unit conversions. Fast, accurate, and free!',
        categories: 'Categories',
        units: 'Units',
        languages: 'Languages',
        backToConverters: 'Back to Converters',
        from: 'From:',
        to: 'To:',
        allConversions: 'All Conversions:',
        copyResult: 'Copy Result',
        share: 'Share',
        favorite: 'Favorite',
        currentGoldRates: 'Current Gold Rates (Today)',
        goldCalculator: 'Gold Calculator',
        goldPurity: 'Gold Purity:',
        weight: 'Weight:',
        estimatedValue: 'Estimated Value:',
        aboutTitle: 'About ConverterPro',
        aboutText: 'ConverterPro is the ultimate unit conversion tool created by BKND Groups. Our mission is to provide fast, accurate, and free conversions for all types of measurements.',
        contactTitle: 'Contact Us',
        contactText: 'We\'d love to hear from you! Send us your feedback, suggestions, or questions.',
        email: 'Email',
        company: 'Company',
        website: 'Website',
        sendMessage: 'Send Message',
        yourName: 'Your Name',
        yourEmail: 'Your Email',
        yourMessage: 'Your Message',
        lightningFast: 'Lightning Fast',
        multiLanguage: 'Multi-Language',
        mobileFriendly: 'Mobile Friendly',
        privacyFirst: 'Privacy First',
        instantConversions: 'Instant conversions with real-time results',
        availableLanguages: 'Available in 10+ languages',
        perfectDevices: 'Perfect on all devices',
        noDataCollection: 'No data collection or tracking'
    },
    hi: {
        home: 'होम',
        converters: 'कन्वर्टर',
        goldRates: 'सोने की दरें',
        about: 'हमारे बारे में',
        contact: 'संपर्क',
        searchPlaceholder: 'कन्वर्टर खोजें (जैसे, \'इंच से सेमी\', \'किलो से पाउंड\')',
        welcome: 'ConverterPro में आपका स्वागत है',
        tagline: 'सभी इकाई रूपांतरणों के लिए आपका अंतिम उपकरण। तेज़, सटीक और मुफ़्त!',
        categories: 'श्रेणियां',
        units: 'इकाइयां',
        languages: 'भाषाएं'
    },
    ta: {
        home: 'முகப்பு',
        converters: 'மாற்றிகள்',
        goldRates: 'தங்க விலைகள்',
        about: 'எங்களைப் பற்றி',
        contact: 'தொடர்பு',
        searchPlaceholder: 'மாற்றிகளைத் தேடுங்கள் (எ.கா., \'இன்ச் से செ.மீ\', \'கிலோ से பவுண்ட்\')',
        welcome: 'ConverterPro வில் உங்களை வரவேற்கிறோம்',
        tagline: 'அனைத்து அலகு மாற்றங்களுக்கான உங்கள் இறுதி கருவி। வேகமான, துல்லியமான மற்றும் இலவசம்!'
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    console.log('ConverterPro app initialized');
    
    // Set default theme and language
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Load currency rates
    loadCurrencyRates();
    
    // Update gold rates
    updateGoldRates();
    
    // Show home section by default
    showSection('home');
});

// Event listeners
function initializeEventListeners() {
    // Navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchConverters(e.target.value);
        });
        
        searchInput.addEventListener('focus', () => {
            const results = document.getElementById('search-results');
            if (results && results.innerHTML.trim() !== '') {
                results.style.display = 'block';
            }
        });
        
        searchInput.addEventListener('blur', () => {
            setTimeout(() => {
                const results = document.getElementById('search-results');
                if (results) {
                    results.style.display = 'none';
                }
            }, 200);
        });
    }
}

// Navigation functions
function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Close mobile menu
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
}

function openConverter(converterType) {
    console.log('Opening converter:', converterType);
    currentConverter = converterType;
    
    const converterData = conversions[converterType];
    if (!converterData) {
        console.error('Converter not found:', converterType);
        return;
    }
    
    // Update converter title
    const title = document.getElementById('converter-title');
    if (title) {
        title.textContent = converterData.name;
    }
    
    // Populate unit dropdowns
    populateUnitDropdowns(converterType);
    
    // Clear inputs
    const fromValue = document.getElementById('from-value');
    const toValue = document.getElementById('to-value');
    if (fromValue) fromValue.value = '';
    if (toValue) toValue.value = '';
    
    // Clear all conversions
    const conversionsGrid = document.getElementById('conversions-grid');
    if (conversionsGrid) {
        conversionsGrid.innerHTML = '';
    }
    
    // Show converter interface
    showSection('converter-interface');
}

function populateUnitDropdowns(converterType) {
    const converterData = conversions[converterType];
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    
    if (!fromUnit || !toUnit || !converterData) return;
    
    // Clear existing options
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    
    // Add options
    Object.keys(converterData.units).forEach(unitKey => {
        const unit = converterData.units[unitKey];
        
        const fromOption = document.createElement('option');
        fromOption.value = unitKey;
        fromOption.textContent = `${unit.name} (${unit.symbol})`;
        fromUnit.appendChild(fromOption);
        
        const toOption = document.createElement('option');
        toOption.value = unitKey;
        toOption.textContent = `${unit.name} (${unit.symbol})`;
        toUnit.appendChild(toOption);
    });
    
    // Set default selections (different units)
    const unitKeys = Object.keys(converterData.units);
    if (unitKeys.length >= 2) {
        fromUnit.value = unitKeys[0];
        toUnit.value = unitKeys[1];
    }
}

// Conversion functions
function updateConversion() {
    const fromValue = parseFloat(document.getElementById('from-value').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    const toValueElement = document.getElementById('to-value');
    
    if (!fromValue || isNaN(fromValue) || !fromUnit || !toUnit) {
        if (toValueElement) toValueElement.value = '';
        updateAllConversions(0, fromUnit);
        return;
    }
    
    const result = convertUnits(fromValue, fromUnit, toUnit, currentConverter);
    
    if (toValueElement) {
        toValueElement.value = result !== null ? formatNumber(result) : 'Error';
    }
    
    // Update all conversions display
    updateAllConversions(fromValue, fromUnit);
}

function convertUnits(value, fromUnit, toUnit, category) {
    const converterData = conversions[category];
    if (!converterData || !converterData.units[fromUnit] || !converterData.units[toUnit]) {
        return null;
    }
    
    // Special handling for temperature
    if (category === 'temperature') {
        return convertTemperature(value, fromUnit, toUnit);
    }
    
    // Special handling for currency
    if (category === 'currency') {
        return convertCurrency(value, fromUnit, toUnit);
    }
    
    // Special handling for fuel consumption
    if (category === 'fuel') {
        return convertFuelConsumption(value, fromUnit, toUnit);
    }
    
    // Standard conversion using factors
    const fromFactor = converterData.units[fromUnit].factor;
    const toFactor = converterData.units[toUnit].factor;
    
    if (fromFactor && toFactor) {
        return (value * fromFactor) / toFactor;
    }
    
    return null;
}

function convertTemperature(value, fromUnit, toUnit) {
    let celsius;
    
    // Convert to Celsius first
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
    
    // Convert from Celsius to target unit
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
}

function convertCurrency(value, fromUnit, toUnit) {
    if (!currencyRates[fromUnit] || !currencyRates[toUnit]) {
        return null;
    }
    
    // Convert to USD first, then to target currency
    const usdValue = value / currencyRates[fromUnit];
    return usdValue * currencyRates[toUnit];
}

function convertFuelConsumption(value, fromUnit, toUnit) {
    // Special handling for L/100km which is inverse
    if (fromUnit === 'l_100km' && toUnit === 'km_l') {
        return 100 / value;
    }
    if (fromUnit === 'km_l' && toUnit === 'l_100km') {
        return 100 / value;
    }
    
    // For other conversions, use standard factor method
    const converterData = conversions.fuel;
    const fromFactor = converterData.units[fromUnit].factor;
    const toFactor = converterData.units[toUnit].factor;
    
    if (fromFactor && toFactor) {
        return (value * fromFactor) / toFactor;
    }
    
    return null;
}

function updateAllConversions(value, fromUnit) {
    const conversionsGrid = document.getElementById('conversions-grid');
    if (!conversionsGrid || !value || value === 0) {
        conversionsGrid.innerHTML = '';
        return;
    }
    
    const converterData = conversions[currentConverter];
    if (!converterData) return;
    
    conversionsGrid.innerHTML = '';
    
    Object.keys(converterData.units).forEach(unitKey => {
        if (unitKey === fromUnit) return; // Skip same unit
        
        const result = convertUnits(value, fromUnit, unitKey, currentConverter);
        if (result !== null) {
            const item = document.createElement('div');
            item.className = 'conversion-item';
            
            const unit = converterData.units[unitKey];
            item.innerHTML = `
                <div class="unit">${unit.name}</div>
                <div class="value">${formatNumber(result)} ${unit.symbol}</div>
            `;
            
            conversionsGrid.appendChild(item);
        }
    });
}

function swapUnits() {
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    const fromValue = document.getElementById('from-value');
    const toValue = document.getElementById('to-value');
    
    if (!fromUnit || !toUnit || !fromValue || !toValue) return;
    
    // Swap unit selections
    const tempUnit = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = tempUnit;
    
    // Swap values
    const tempValue = fromValue.value;
    fromValue.value = toValue.value;
    toValue.value = tempValue;
    
    // Update conversion
    updateConversion();
}

// Search functionality
function searchConverters(query) {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;
    
    if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
    }
    
    const results = [];
    query = query.toLowerCase();
    
    // Search through all converters and units
    Object.keys(conversions).forEach(categoryKey => {
        const category = conversions[categoryKey];
        
        // Check if category name matches
        if (category.name.toLowerCase().includes(query)) {
            results.push({
                type: 'category',
                category: categoryKey,
                title: category.name,
                subtitle: 'Category'
            });
        }
        
        // Check units within category
        Object.keys(category.units).forEach(unitKey => {
            const unit = category.units[unitKey];
            if (unit.name.toLowerCase().includes(query) || 
                unit.symbol.toLowerCase().includes(query) ||
                unitKey.toLowerCase().includes(query)) {
                results.push({
                    type: 'unit',
                    category: categoryKey,
                    unit: unitKey,
                    title: unit.name,
                    subtitle: `${category.name} - ${unit.symbol}`
                });
            }
        });
    });
    
    // Check for conversion patterns like "inch to cm"
    const conversionMatch = query.match(/(.+?)\s+to\s+(.+)/);
    if (conversionMatch) {
        const fromQuery = conversionMatch[1].trim();
        const toQuery = conversionMatch[2].trim();
        
        Object.keys(conversions).forEach(categoryKey => {
            const category = conversions[categoryKey];
            let fromUnit = null;
            let toUnit = null;
            
            Object.keys(category.units).forEach(unitKey => {
                const unit = category.units[unitKey];
                if (unit.name.toLowerCase().includes(fromQuery) || 
                    unit.symbol.toLowerCase().includes(fromQuery) ||
                    unitKey.toLowerCase().includes(fromQuery)) {
                    fromUnit = unitKey;
                }
                if (unit.name.toLowerCase().includes(toQuery) || 
                    unit.symbol.toLowerCase().includes(toQuery) ||
                    unitKey.toLowerCase().includes(toQuery)) {
                    toUnit = unitKey;
                }
            });
            
            if (fromUnit && toUnit) {
                results.unshift({
                    type: 'conversion',
                    category: categoryKey,
                    fromUnit: fromUnit,
                    toUnit: toUnit,
                    title: `${category.units[fromUnit].name} to ${category.units[toUnit].name}`,
                    subtitle: `${category.name} conversion`
                });
            }
        });
    }
    
    // Display results
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
    } else {
        searchResults.innerHTML = results.slice(0, 8).map(result => 
            `<div class="search-result-item" onclick="handleSearchResult('${result.type}', '${result.category}', '${result.fromUnit || ''}', '${result.toUnit || ''}', '${result.unit || ''}')">
                <strong>${result.title}</strong><br>
                <small>${result.subtitle}</small>
            </div>`
        ).join('');
    }
    
    searchResults.style.display = 'block';
}

function handleSearchResult(type, category, fromUnit, toUnit, unit) {
    const searchResults = document.getElementById('search-results');
    const searchInput = document.getElementById('search-input');
    
    if (searchResults) searchResults.style.display = 'none';
    if (searchInput) searchInput.value = '';
    
    openConverter(category);
    
    if (type === 'conversion' && fromUnit && toUnit) {
        setTimeout(() => {
            const fromUnitSelect = document.getElementById('from-unit');
            const toUnitSelect = document.getElementById('to-unit');
            
            if (fromUnitSelect && toUnitSelect) {
                fromUnitSelect.value = fromUnit;
                toUnitSelect.value = toUnit;
                updateConversion();
            }
        }, 100);
    } else if (type === 'unit' && unit) {
        setTimeout(() => {
            const fromUnitSelect = document.getElementById('from-unit');
            
            if (fromUnitSelect) {
                fromUnitSelect.value = unit;
                updateConversion();
            }
        }, 100);
    }
}

// Utility functions
function formatNumber(num) {
    if (num === 0) return '0';
    if (Math.abs(num) >= 1000000) {
        return num.toExponential(4);
    }
    if (Math.abs(num) >= 1000) {
        return num.toLocaleString(undefined, { maximumFractionDigits: 4 });
    }
    if (Math.abs(num) >= 1) {
        return num.toFixed(6).replace(/\.?0+$/, '');
    }
    return num.toFixed(8).replace(/\.?0+$/, '');
}

// Action functions
function copyResult() {
    const toValue = document.getElementById('to-value');
    const toUnit = document.getElementById('to-unit');
    
    if (!toValue || !toUnit || !toValue.value) return;
    
    const unit = conversions[currentConverter].units[toUnit.value];
    const text = `${toValue.value} ${unit.symbol}`;
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Result copied to clipboard!');
    }).catch(() => {
        showNotification('Failed to copy result');
    });
}

function shareResult() {
    const fromValue = document.getElementById('from-value');
    const fromUnit = document.getElementById('from-unit');
    const toValue = document.getElementById('to-value');
    const toUnit = document.getElementById('to-unit');
    
    if (!fromValue || !fromUnit || !toValue || !toUnit || !fromValue.value || !toValue.value) {
        showNotification('Please enter a value to share');
        return;
    }
    
    const fromUnitData = conversions[currentConverter].units[fromUnit.value];
    const toUnitData = conversions[currentConverter].units[toUnit.value];
    
    const shareText = `${fromValue.value} ${fromUnitData.symbol} = ${toValue.value} ${toUnitData.symbol}`;
    const shareUrl = `${window.location.origin}${window.location.pathname}?converter=${currentConverter}&from=${fromUnit.value}&to=${toUnit.value}&value=${fromValue.value}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'ConverterPro - Unit Conversion',
            text: shareText,
            url: shareUrl
        });
    } else {
        navigator.clipboard.writeText(`${shareText}\nConverted using ConverterPro: ${shareUrl}`).then(() => {
            showNotification('Conversion link copied to clipboard!');
        });
    }
}

function addToFavorites() {
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    
    if (!fromUnit || !toUnit) return;
    
    const favorite = {
        category: currentConverter,
        fromUnit: fromUnit.value,
        toUnit: toUnit.value,
        timestamp: Date.now()
    };
    
    let favorites = JSON.parse(localStorage.getItem('converterPro_favorites') || '[]');
    
    // Check if already exists
    const exists = favorites.some(fav => 
        fav.category === favorite.category && 
        fav.fromUnit === favorite.fromUnit && 
        fav.toUnit === favorite.toUnit
    );
    
    if (exists) {
        showNotification('Already in favorites!');
        return;
    }
    
    favorites.unshift(favorite);
    favorites = favorites.slice(0, 20); // Keep only 20 favorites
    
    localStorage.setItem('converterPro_favorites', JSON.stringify(favorites));
    showNotification('Added to favorites!');
}

// Currency rates
async function loadCurrencyRates() {
    try {
        // Simulated exchange rates (in a real app, you'd fetch from an API)
        currencyRates = {
            usd: 1,
            eur: 0.85,
            inr: 83.12,
            gbp: 0.73,
            jpy: 150.45,
            aud: 1.52,
            cad: 1.36,
            chf: 0.88,
            cny: 7.24,
            rub: 92.50
        };
        
        console.log('Currency rates loaded:', currencyRates);
    } catch (error) {
        console.error('Failed to load currency rates:', error);
        showNotification('Failed to load current exchange rates. Using cached rates.');
    }
}

// Gold rates
function updateGoldRates() {
    // Simulate daily gold rate updates
    const rates = {
        '24k': 6200 + Math.floor(Math.random() * 200) - 100,
        '22k': 5700 + Math.floor(Math.random() * 180) - 90,
        '18k': 4650 + Math.floor(Math.random() * 150) - 75
    };
    
    Object.keys(rates).forEach(purity => {
        const element = document.getElementById(`gold-${purity}`);
        if (element) {
            element.textContent = `₹ ${rates[purity].toLocaleString()} / 10g`;
        }
    });
    
    goldRates = rates;
    goldRates['14k'] = Math.floor(rates['18k'] * 0.67);
}

function calculateGoldValue() {
    const purity = document.getElementById('gold-purity').value;
    const weight = parseFloat(document.getElementById('gold-weight').value);
    const weightUnit = document.getElementById('weight-unit').value;
    
    if (!weight || weight <= 0) {
        document.getElementById('gold-total-value').textContent = '₹ 0';
        document.getElementById('gold-breakdown').textContent = '';
        return;
    }
    
    // Convert weight to grams
    let weightInGrams = weight;
    switch (weightUnit) {
        case 'kg':
            weightInGrams = weight * 1000;
            break;
        case 'ounces':
            weightInGrams = weight * 28.3495;
            break;
        case 'tola':
            weightInGrams = weight * 11.6638;
            break;
    }
    
    // Calculate value
    const ratePerGram = goldRates[`${purity}k`] / 10;
    const totalValue = weightInGrams * ratePerGram;
    
    document.getElementById('gold-total-value').textContent = `₹ ${totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    document.getElementById('gold-breakdown').textContent = 
        `${weightInGrams.toFixed(2)} grams × ₹ ${ratePerGram.toFixed(0)}/gram`;
}

// Theme and language functions
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
    
    localStorage.setItem('converterPro_theme', currentTheme);
}

function changeLanguage(langCode) {
    currentLanguage = langCode;
    
    // Update text content based on selected language
    const translation = translations[langCode] || translations.en;
    
    // Update navigation
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
    
    localStorage.setItem('converterPro_language', langCode);
    console.log('Language changed to:', langCode);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Contact form
function sendMessage(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', Object.fromEntries(formData));
    
    showNotification('Message sent successfully! We\'ll get back to you soon.');
    form.reset();
}

// Load saved preferences
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('converterPro_theme');
    const savedLanguage = localStorage.getItem('converterPro_language');
    
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            }
        }
    }
    
    if (savedLanguage) {
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.value = savedLanguage;
            changeLanguage(savedLanguage);
        }
    }
});

// Handle URL parameters for direct conversion links
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const converter = urlParams.get('converter');
    const fromUnit = urlParams.get('from');
    const toUnit = urlParams.get('to');
    const value = urlParams.get('value');
    
    if (converter && conversions[converter]) {
        openConverter(converter);
        
        if (fromUnit && toUnit && value) {
            setTimeout(() => {
                const fromUnitSelect = document.getElementById('from-unit');
                const toUnitSelect = document.getElementById('to-unit');
                const fromValueInput = document.getElementById('from-value');
                
                if (fromUnitSelect && toUnitSelect && fromValueInput) {
                    fromUnitSelect.value = fromUnit;
                    toUnitSelect.value = toUnit;
                    fromValueInput.value = value;
                    updateConversion();
                }
            }, 100);
        }
    }
});

console.log('ConverterPro script loaded successfully');
