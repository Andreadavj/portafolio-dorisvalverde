import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';
import useScrollSpy from '../../hooks/useScrollSpy';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  
  const sectionIds = ['home', 'about', 'tech', 'projects', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // offset para el navbar sticky
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#home" onClick={(e) => handleNavClick(e, 'home')} style={{ color: 'var(--color-text-primary)' }}>
          <span className="text-gradient">DV</span>
        </a>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: isDarkMode ? 'invert(1)' : 'none' }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            {[
              { id: 'home', label: 'Inicio' },
              { id: 'about', label: 'Sobre mí' },
              { id: 'tech', label: 'Tecnologías' },
              { id: 'projects', label: 'Proyectos' },
              { id: 'contact', label: 'Contacto' }
            ].map((item) => (
              <li className="nav-item" key={item.id}>
                <a 
                  className={`nav-link fw-medium ${activeSection === item.id ? 'active text-gradient' : ''}`}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{ color: activeSection === item.id ? 'inherit' : 'var(--color-text-secondary)' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            <button 
              onClick={toggleDarkMode} 
              className="btn btn-link p-2 rounded-circle"
              style={{ color: 'var(--color-text-primary)', background: 'var(--color-bg-secondary)' }}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          .nav-scrolled {
            background: rgba(35, 39, 72, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          }
          [data-theme='light'] .nav-scrolled {
            background: rgba(255, 255, 255, 0.95);
          }
          .nav-link:hover {
            color: var(--color-electric-blue) !important;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
