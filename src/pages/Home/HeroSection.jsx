import React from 'react';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import Button from '../../components/common/Button';

const HeroSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=1920&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&w=1920&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&w=1920&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=1920&q=80"
  ];

  return (
    <section id="home" className="position-relative hero-section overflow-hidden">
      {/* Carrusel */}
      <div id="heroCarousel" className="carousel slide carousel-fade h-100" data-bs-ride="carousel" data-bs-pause="false">
        <div className="carousel-inner h-100">
          {images.map((img, idx) => (
            <div className={`carousel-item h-100 ${idx === 0 ? 'active' : ''}`} key={idx} data-bs-interval="5000">
              <img src={img} className="d-block w-100 h-100 object-fit-cover" alt={`Slide ${idx + 1}`} />
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(35, 39, 72, 0.7)' }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido superpuesto */}
      <div className="position-absolute top-50 start-0 translate-middle-y w-100 z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7 text-white animate-fade-up">
              <div className="hero-text glass p-4 p-lg-5 rounded-4 shadow-sm">
                <h5 className="text-uppercase tracking-widest mb-3" style={{ color: 'var(--color-soft-purple)', letterSpacing: '3px' }}>
                  Curriculum digital & portafolio web
                </h5>
                <h1 className="display-2 fw-bolder mb-4" style={{ fontFamily: 'Outfit' }}>
                  Doris Valverde
                </h1>
                <p className="lead mb-5 fs-4 fw-light text-light" style={{ opacity: 0.95 }}>
                  Soy desarrolladora Full Stack MERN. Diseño y construyo aplicaciones web responsivas para móvil, tablet y escritorio.
                </p>
                
                <div className="d-flex flex-wrap gap-3 mb-5 hero-actions">
                  <a href="#projects" className="text-decoration-none w-auto">
                    <Button label="Ver Proyectos" variant="primary" size="lg" className="rounded-pill px-4" />
                  </a>
                  <a href="#contact" className="text-decoration-none w-auto">
                    <Button label="Contáctame" variant="outline" size="lg" className="rounded-pill px-4 text-white border-light hover-bg-light" />
                  </a>
                </div>

                <div className="d-flex flex-wrap align-items-center gap-3 hero-socials">
                  <span className="text-uppercase small tracking-widest">Sígueme en:</span>
                  <a href="https://www.linkedin.com/in/dorisvalverde/" target="_blank" rel="noreferrer" className="text-white hover-electric-blue transition-all">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://github.com/Andreadavj" target="_blank" rel="noreferrer" className="text-white hover-electric-blue transition-all">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flecha hacia abajo */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 z-1">
        <a href="#about" className="text-white opacity-75 hover-opacity-100 transition-all bounce">
          <FaChevronDown size={30} />
        </a>
      </div>

      <style>
        {`
          .tracking-widest { letter-spacing: 2px; }
          .hover-electric-blue:hover { color: var(--color-electric-blue) !important; transform: translateY(-2px); }
          .hover-bg-light:hover { background: rgba(255,255,255,0.1); }
          
          .animate-fade-up {
            animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          .bounce {
            display: inline-block;
            animation: bounce 2s infinite;
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-15px); }
            60% { transform: translateY(-7px); }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
