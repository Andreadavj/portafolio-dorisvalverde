import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaSpinner, FaExclamationCircle } from 'react-icons/fa';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const ContactSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/dorisvalverde.dev@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Mensaje de Portafolio',
          message: formData.message,
          _subject: `Nuevo mensaje de portafolio de ${formData.name}`,
        })
      });
      
      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true)) {
        setAlertType('success');
        setAlertMessage('¡Mensaje enviado con éxito! Te responderé lo antes posible. (Nota: Si es el primer mensaje, revisa tu correo para activar el formulario).');
        setShowAlert(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setAlertType('danger');
        setAlertMessage('Hubo un problema al enviar el mensaje. Por favor intenta de nuevo.');
        setShowAlert(true);
      }
    } catch (error) {
      setAlertType('danger');
      setAlertMessage('Error de conexión. Por favor intenta de nuevo.');
      setShowAlert(true);
    } finally {
      setLoading(false);
      setTimeout(() => setShowAlert(false), 8000);
    }
  };

  return (
    <section id="contact" className="py-5 my-5 position-relative" ref={ref}>
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{ 
        backgroundImage: 'radial-gradient(var(--color-text-secondary) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        zIndex: -1
      }}></div>

      <div className="container">
        <SectionTitle title="Ponte en Contacto" subtitle="HABLEMOS" />

        <div className={`row g-5 mt-2 fade-up ${inView ? 'visible' : ''}`}>
          {/* Info de contacto */}
          <div className="col-lg-5">
            <h3 className="fw-bold mb-4" style={{ fontFamily: 'Outfit' }}>¿Tienes un proyecto en mente?</h3>
            <p className="mb-5" style={{ color: 'var(--color-text-secondary)' }}>
              Estoy disponible para nuevas oportunidades y colaboraciones. Si tienes alguna pregunta o simplemente quieres saludar, ¡no dudes en escribirme!
            </p>

            <div className="d-flex flex-column gap-4 mb-5">
              <div className="d-flex align-items-center gap-3">
                <div className="btn btn-primary rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', background: 'var(--color-bg-secondary)', border: 'none' }}>
                  <FaEnvelope size={20} style={{ color: 'var(--color-electric-blue)' }} />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">Email</h6>
                  <a href="mailto:dorisvalverde.dev@gmail.com" className="text-decoration-none" style={{ color: 'var(--color-text-secondary)' }}>dorisvalverde.dev@gmail.com</a>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="btn btn-primary rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', background: 'var(--color-bg-secondary)', border: 'none' }}>
                  <FaPhoneAlt size={20} style={{ color: 'var(--color-electric-blue)' }} />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">Teléfono</h6>
                  <a href="tel:+56968021126" className="text-decoration-none" style={{ color: 'var(--color-text-secondary)' }}>+56 9 6802 1126</a>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="btn btn-primary rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', background: 'var(--color-bg-secondary)', border: 'none' }}>
                  <FaMapMarkerAlt size={20} style={{ color: 'var(--color-electric-blue)' }} />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">Ubicación</h6>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Santiago, Chile</span>
                </div>
              </div>
            </div>

            <h6 className="fw-bold mb-3">Sígueme</h6>
            <div className="d-flex gap-3">
              <a href="https://www.linkedin.com/in/dorisvalverde/" target="_blank" rel="noreferrer" className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm text-primary">
                <FaLinkedin size={22} />
              </a>
              <a href="https://github.com/Andreadavj" target="_blank" rel="noreferrer" className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm text-dark">
                <FaGithub size={22} />
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-lg-7">
            <Card className="p-sm-4 p-2">
              {showAlert && (
                <div className={`alert alert-${alertType} alert-dismissible fade show d-flex align-items-center gap-2`} role="alert">
                  {alertType === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                  <div>{alertMessage}</div>
                  <button type="button" className="btn-close" onClick={() => setShowAlert(false)} aria-label="Close"></button>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label small fw-medium">Nombre Completo</label>
                    <input type="text" className="form-control form-control-lg custom-input" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Ej: Juan Pérez" disabled={loading} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label small fw-medium">Correo Electrónico</label>
                    <input type="email" className="form-control form-control-lg custom-input" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="ejemplo@correo.com" disabled={loading} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label small fw-medium">Asunto</label>
                    <input type="text" className="form-control form-control-lg custom-input" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="¿De qué trata tu mensaje?" disabled={loading} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label small fw-medium">Mensaje</label>
                    <textarea className="form-control custom-input" id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Escribe tu mensaje aquí..." disabled={loading}></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <Button 
                      type="submit" 
                      label={loading ? "Enviando..." : "Enviar Mensaje"} 
                      icon={loading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />} 
                      size="lg" 
                      className="w-100 rounded-3 shadow-sm" 
                      disabled={loading} 
                    />
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <style>
        {`
          .fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .custom-input {
            background: var(--color-bg-primary);
            border: 1px solid rgba(255,255,255,0.1);
            color: var(--color-text-primary);
            transition: all 0.3s ease;
          }
          [data-theme='light'] .custom-input {
            border: 1px solid rgba(0,0,0,0.1);
          }
          .custom-input:focus {
            background: var(--color-bg-primary);
            color: var(--color-text-primary);
            border-color: var(--color-electric-blue);
            box-shadow: 0 0 0 0.25rem rgba(62, 123, 255, 0.25);
          }
          .custom-input::placeholder {
            color: var(--color-text-secondary);
            opacity: 0.6;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin {
            animation: spin 1s linear infinite;
            display: inline-block;
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;
