import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-5 text-center position-relative mt-5" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'var(--color-accent-gradient)' }}></div>
      <div className="container">
        <h2 className="fw-bold mb-4" style={{ fontFamily: 'Outfit' }}><span className="text-gradient">DV</span></h2>
        
        <div className="d-flex justify-content-center gap-4 mb-4">
          <a href="#home" className="text-decoration-none" style={{ color: 'var(--color-text-secondary)' }}>Inicio</a>
          <a href="#about" className="text-decoration-none" style={{ color: 'var(--color-text-secondary)' }}>Sobre mí</a>
          <a href="#projects" className="text-decoration-none" style={{ color: 'var(--color-text-secondary)' }}>Proyectos</a>
          <a href="#contact" className="text-decoration-none" style={{ color: 'var(--color-text-secondary)' }}>Contacto</a>
        </div>

        <div className="d-flex justify-content-center gap-3 mb-4">
          <a href="https://github.com/Andreadavj" target="_blank" rel="noreferrer" className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', color: 'var(--color-text-primary)', borderColor: 'var(--color-text-secondary)' }}>
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/dorisvalverde/" target="_blank" rel="noreferrer" className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', color: 'var(--color-text-primary)', borderColor: 'var(--color-text-secondary)' }}>
            <FaLinkedin size={20} />
          </a>
        </div>

        <p className="mb-0" style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          © 2025 Doris Valverde · Diseñado y desarrollado con ❤️ en Santiago, Chile
        </p>
      </div>
    </footer>
  );
};

export default Footer;
