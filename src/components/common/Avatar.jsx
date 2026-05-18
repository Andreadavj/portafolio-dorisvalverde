import React from 'react';

const Avatar = ({ src, alt, size = 250, className = '' }) => {
  return (
    <div className={`avatar-container ${className}`} style={{ width: size, height: size }}>
      <div className="avatar-wrapper rounded-circle p-1">
        <div className="avatar-inner rounded-circle overflow-hidden w-100 h-100">
          <img 
            src={src || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=500&q=80"} 
            alt={alt || "Avatar"} 
            className="w-100 h-100 object-fit-cover"
          />
        </div>
      </div>
      <style>
        {`
          .avatar-container {
            position: relative;
            margin: 0 auto;
          }
          .avatar-wrapper {
            background: var(--color-accent-gradient);
            position: relative;
            z-index: 1;
          }
          .avatar-wrapper::before {
            content: '';
            position: absolute;
            top: -5px; right: -5px; bottom: -5px; left: -5px;
            background: var(--color-accent-gradient);
            border-radius: 50%;
            z-index: -1;
            filter: blur(15px);
            opacity: 0.7;
            animation: pulse 3s infinite alternate;
          }
          @keyframes pulse {
            0% { transform: scale(0.95); opacity: 0.5; }
            100% { transform: scale(1.05); opacity: 0.8; }
          }
        `}
      </style>
    </div>
  );
};

export default Avatar;
