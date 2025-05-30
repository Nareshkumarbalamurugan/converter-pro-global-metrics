
import React, { useState, useEffect } from 'react';
import { conversions } from '../utils/conversions';
import { convertUnits } from '../utils/converterLogic';

const MainConverter = ({ currentConverter, expanded = false }) => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');

  const converterData = conversions[currentConverter];

  useEffect(() => {
    if (converterData) {
      const unitKeys = Object.keys(converterData.units);
      if (unitKeys.length >= 2) {
        setFromUnit(unitKeys[0]);
        setToUnit(unitKeys[1]);
      }
    }
  }, [currentConverter, converterData]);

  useEffect(() => {
    if (fromValue && fromUnit && toUnit) {
      const result = convertUnits(parseFloat(fromValue), fromUnit, toUnit, currentConverter);
      if (result !== null) {
        setToValue(result.toFixed(6).replace(/\.?0+$/, ''));
      }
    }
  }, [fromValue, fromUnit, toUnit, currentConverter]);

  const swapUnits = () => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    
    const tempValue = fromValue;
    setFromValue(toValue);
    setToValue(tempValue);
  };

  const copyResult = () => {
    if (toValue && toUnit && converterData) {
      const unit = converterData.units[toUnit];
      const text = `${toValue} ${unit.symbol}`;
      navigator.clipboard.writeText(text).then(() => {
        alert('Result copied to clipboard!');
      });
    }
  };

  if (!converterData) return null;

  return (
    <div className={`main-converter ${expanded ? 'expanded' : ''}`}>
      <div className="converter-header-info">
        <h2>{converterData.name}</h2>
        {!expanded && <p>{converterData.description}</p>}
      </div>

      <div className="converter-inputs">
        <div className="input-group">
          <label>From</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="unit-select"
          >
            {Object.keys(converterData.units).map(unitKey => {
              const unit = converterData.units[unitKey];
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
            className="value-input"
          />
        </div>

        <button onClick={swapUnits} className="swap-button">
          ⇄
        </button>

        <div className="input-group">
          <label>To</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="unit-select"
          >
            {Object.keys(converterData.units).map(unitKey => {
              const unit = converterData.units[unitKey];
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
            className="value-input result-input"
          />
        </div>
      </div>

      {expanded && (
        <div className="converter-actions">
          <button onClick={copyResult} className="action-button">
            📋 Copy Result
          </button>
        </div>
      )}

      {expanded && fromValue && (
        <div className="all-conversions">
          <h3>All Conversions:</h3>
          <div className="conversions-grid">
            {Object.keys(converterData.units).map(unitKey => {
              const unit = converterData.units[unitKey];
              const convertedValue = convertUnits(parseFloat(fromValue), fromUnit, unitKey, currentConverter);
              if (convertedValue !== null) {
                return (
                  <div key={unitKey} className="conversion-item">
                    <div className="unit-name">{unit.name}</div>
                    <div className="unit-value">{convertedValue.toFixed(6).replace(/\.?0+$/, '')} {unit.symbol}</div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainConverter;
