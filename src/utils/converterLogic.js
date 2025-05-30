
export const convertUnits = (value, fromUnit, toUnit, category) => {
  const { conversions } = require('./conversions');
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
    default:
      return null;
  }
};
