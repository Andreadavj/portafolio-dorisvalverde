import React from 'react';

const Tag = ({ text, icon, className = '' }) => {
  return (
    <span className={`d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill ${className}`} style={{
      background: 'var(--color-bg-secondary)',
      fontSize: '0.85rem',
      color: 'var(--color-text-primary)'
    }}>
      {icon && <span style={{ color: 'var(--color-electric-blue)' }}>{icon}</span>}
      {text}
    </span>
  );
};

export default Tag;
