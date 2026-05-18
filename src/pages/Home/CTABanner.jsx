import React from 'react';
import { useInView } from 'react-intersection-observer';

const CTABanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className="py-5 text-white text-center position-relative overflow-hidden" 
      style={{ 
        background: 'var(--color-accent-gradient)',
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        opacity: inView ? 1 : 0,
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="container position-relative z-1 py-4">
        <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'Outfit' }}>
          Construyendo el futuro digital, línea por línea.
        </h2>
        <p className="lead fw-normal mb-0" style={{ color: 'rgba(255,255,255,0.9)' }}>
          Disponible para nuevas oportunidades · Santiago, Chile
        </p>
        
        {/* Decoraciones de código */}
        <div className="position-absolute top-50 start-0 translate-middle-y d-none d-lg-block ms-5 opacity-50">
          <span className="fs-1 fw-bold fw-mono">&lt;&gt;</span>
        </div>
        <div className="position-absolute top-50 end-0 translate-middle-y d-none d-lg-block me-5 opacity-50">
          <span className="fs-1 fw-bold fw-mono">/&gt;</span>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
