
export const conversions = {
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
      cent: { name: 'Cent', symbol: 'cent', factor: 40.4686 }
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
      mile: { name: 'Mile', symbol: 'mi', factor: 1609.34 }
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
      lb: { name: 'Pound', symbol: 'lb', factor: 0.453592 }
    }
  },
  volume: {
    name: 'Volume Converter',
    icon: '💧',
    description: 'Convert between liters, gallons, cups, and more',
    units: {
      ml: { name: 'Milliliter', symbol: 'ml', factor: 0.001 },
      l: { name: 'Liter', symbol: 'l', factor: 1 },
      cup: { name: 'Cup', symbol: 'cup', factor: 0.236588 },
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
      kelvin: { name: 'Kelvin', symbol: 'K' }
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
      day: { name: 'Day', symbol: 'd', factor: 86400 }
    }
  },
  speed: {
    name: 'Speed Converter',
    icon: '⚡',
    description: 'Convert between km/h, mph, knots and more',
    units: {
      mps: { name: 'Meters/Second', symbol: 'm/s', factor: 1 },
      kmh: { name: 'Kilometers/Hour', symbol: 'km/h', factor: 0.277778 },
      mph: { name: 'Miles/Hour', symbol: 'mph', factor: 0.44704 }
    }
  },
  digital: {
    name: 'Digital Storage',
    icon: '💻',
    description: 'Convert between bytes, KB, MB, GB and more',
    units: {
      byte: { name: 'Byte', symbol: 'B', factor: 1 },
      kb: { name: 'Kilobyte', symbol: 'KB', factor: 1024 },
      mb: { name: 'Megabyte', symbol: 'MB', factor: 1048576 },
      gb: { name: 'Gigabyte', symbol: 'GB', factor: 1073741824 }
    }
  },
  currency: {
    name: 'Currency Converter',
    icon: '💵',
    description: 'Convert between different currencies',
    units: {
      inr: { name: 'Indian Rupee', symbol: 'INR', factor: 1 },
      usd: { name: 'US Dollar', symbol: 'USD', factor: 83.15 },
      eur: { name: 'Euro', symbol: 'EUR', factor: 90.25 }
    }
  },
  energy: {
    name: 'Energy Converter',
    icon: '🔋',
    description: 'Convert between joules, calories, kWh and more',
    units: {
      joule: { name: 'Joule', symbol: 'J', factor: 1 },
      calorie: { name: 'Calorie', symbol: 'cal', factor: 4.184 },
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
      psi: { name: 'PSI', symbol: 'psi', factor: 6894.76 }
    }
  },
  power: {
    name: 'Power Converter',
    icon: '🔌',
    description: 'Convert between watts, kilowatts, horsepower',
    units: {
      watt: { name: 'Watt', symbol: 'W', factor: 1 },
      kw: { name: 'Kilowatt', symbol: 'kW', factor: 1000 },
      hp: { name: 'Horsepower', symbol: 'hp', factor: 745.7 }
    }
  },
  density: {
    name: 'Density Converter',
    icon: '🧱',
    description: 'Convert between kg/m³, g/cm³, lb/ft³',
    units: {
      kgm3: { name: 'kg/m³', symbol: 'kg/m³', factor: 1 },
      gcm3: { name: 'g/cm³', symbol: 'g/cm³', factor: 1000 }
    }
  }
};
