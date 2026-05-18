import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import Avatar from '../../components/common/Avatar';
import Button from '../../components/common/Button';

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-5 my-5 overflow-hidden" ref={ref}>
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Columna Izquierda: Imagen */}
          <div className={`col-md-5 position-relative fade-right ${inView ? 'visible' : ''}`}>
            <Avatar 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=600&q=80" 
              alt="Doris Valverde" 
              size={320}
              className="mx-auto mx-md-0"
            />
            {/* Badges Flotantes */}
            <div className="position-absolute top-0 start-0 translate-middle-y ms-4 mt-4 d-none d-lg-block">
              <div className="glass px-4 py-2 rounded-pill shadow-sm d-flex align-items-center gap-2">
                <span className="fs-3 fw-bold text-gradient">5+</span>
                <span className="small lh-sm" style={{ color: 'var(--color-text-primary)' }}>Años de<br/>Experiencia</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Texto */}
          <div className={`col-md-7 fade-left ${inView ? 'visible' : ''}`}>
            <h6 className="text-uppercase tracking-wider mb-2" style={{ color: 'var(--color-electric-blue)', letterSpacing: '2px' }}>CONÓCEME</h6>
            <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'Outfit' }}>Sobre mí</h2>
            
            <p className="lead mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Full Stack JavaScript Developer especializada en el stack MERN. Construyo aplicaciones web SPA con arquitectura de componentes, REST APIs, autenticación JWT e integración de bases de datos SQL y NoSQL.
            </p>
            
            <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Aporto 5 años de experiencia previa en gestión de proyectos. He liderado equipos como Scrum Master y Product Owner, lo que me permite entender no solo el código, sino todo el ciclo de vida del producto y las necesidades del negocio.
            </p>

            <div className="row g-3 mb-5">
              {[
                "MERN Stack", "Scrum Master", "5 años gestión proyectos", "Santiago, Chile"
              ].map((item, idx) => (
                <div className="col-sm-6 d-flex align-items-center gap-2" key={idx}>
                  <FaCheckCircle style={{ color: 'var(--color-electric-blue)' }} />
                  <span className="fw-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="d-flex flex-wrap align-items-center gap-3">
              <a href="#" className="text-decoration-none">
                <Button label="Descargar CV" variant="outline" icon={<FaDownload />} className="rounded-pill border-2" />
              </a>
              <div className="d-flex gap-2 ms-sm-3">
                <a href="https://github.com/Andreadavj" target="_blank" rel="noreferrer" className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm">
                  <FaGithub size={20} className="text-dark" />
                </a>
                <a href="https://www.linkedin.com/in/dorisvalverde/" target="_blank" rel="noreferrer" className="btn btn-primary rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ background: '#0A66C2', border: 'none' }}>
                  <FaLinkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .fade-right {
            opacity: 0;
            transform: translateX(-50px);
            transition: opacity 1s ease, transform 1s ease;
          }
          .fade-left {
            opacity: 0;
            transform: translateX(50px);
            transition: opacity 1s ease, transform 1s ease;
            transition-delay: 0.2s;
          }
          .fade-right.visible, .fade-left.visible {
            opacity: 1;
            transform: translateX(0);
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
