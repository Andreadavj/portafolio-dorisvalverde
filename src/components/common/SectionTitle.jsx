import React from 'react';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-5 text-center ${className}`}>
      {subtitle && <h6 className="text-uppercase tracking-wider mb-2" style={{ color: 'var(--color-electric-blue)', letterSpacing: '2px' }}>{subtitle}</h6>}
      <h2 className="display-5 fw-bold mb-3">{title}</h2>
      <div className="d-flex justify-content-center">
        <div className="title-line"></div>
      </div>
      <style>
        {`
          .title-line {
            height: 4px;
            width: 80px;
            background: var(--color-accent-gradient);
            border-radius: 2px;
            position: relative;
            overflow: hidden;
          }
          .title-line::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(255,255,255,0.5);
            animation: moveLine 2s linear infinite;
          }
          @keyframes moveLine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
};

export default SectionTitle;
