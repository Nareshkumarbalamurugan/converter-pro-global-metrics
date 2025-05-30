
import React from 'react';

const ConverterCard = ({ converter, converterKey, onClick, theme }) => {
  const getIconColor = (key) => {
    const colors = {
      area: '#10b981',
      length: '#f59e0b', 
      weight: '#f97316',
      volume: '#a855f7',
      temperature: '#ef4444',
      time: '#8b5cf6',
      speed: '#3b82f6',
      digital: '#06b6d4',
      currency: '#f59e0b',
      energy: '#ef4444',
      pressure: '#3b82f6',
      power: '#8b5cf6',
      density: '#06b6d4',
      fuel: '#10b981',
      data_rate: '#f97316',
      angle: '#a855f7',
      height: '#f59e0b'
    };
    return colors[key] || '#6b7280';
  };

  return (
    <div 
      className="converter-card"
      onClick={onClick}
      style={{ '--icon-color': getIconColor(converterKey) }}
    >
      <div className="converter-icon">
        <span>{converter.icon}</span>
      </div>
      <h3 className="converter-title">{converter.name.replace(' Converter', '')}</h3>
    </div>
  );
};

export default ConverterCard;
