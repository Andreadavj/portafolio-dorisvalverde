import React from 'react';

const Badge = ({ text, color = 'primary', className = '' }) => {
  return (
    <span className={`badge bg-${color} ${className}`} style={{ fontWeight: '500' }}>
      {text}
    </span>
  );
};

export default Badge;
