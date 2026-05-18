import React from 'react';

const Card = ({ children, className = '', hoverable = false, ...props }) => {
  const hoverClass = hoverable ? 'hover-lift' : '';
  
  return (
    <div 
      className={`card glass ${hoverClass} ${className}`} 
      style={{
        borderRadius: 'var(--border-radius-card)',
        boxShadow: 'var(--shadow-card)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: 'none',
        overflow: 'hidden'
      }}
      {...props}
    >
      <style>
        {`
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(35, 39, 72, 0.6);
          }
          [data-theme='light'] .hover-lift:hover {
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
