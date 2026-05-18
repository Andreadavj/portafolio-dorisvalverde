import React from 'react';

const Button = ({ label, onClick, variant = 'primary', icon, size = 'md', className = '', ...props }) => {
  const baseClasses = 'btn d-inline-flex align-items-center justify-content-center gap-2 transition-all';
  
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses = 'text-white border-0';
      break;
    case 'secondary':
      variantClasses = 'text-white border-0';
      break;
    case 'outline':
      variantClasses = 'btn-outline-light';
      break;
    case 'ghost':
      variantClasses = 'btn-link text-decoration-none';
      break;
    default:
      variantClasses = 'btn-primary';
  }

  const sizeClasses = size === 'lg' ? 'btn-lg px-4 py-2' : size === 'sm' ? 'btn-sm' : '';

  const inlineStyles = variant === 'primary' 
    ? { background: 'var(--color-accent-gradient)' }
    : variant === 'secondary'
    ? { backgroundColor: 'var(--color-bg-secondary)' }
    : {};

  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
      style={inlineStyles}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
