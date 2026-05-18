import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const MiniBanner = () => {
  const stats = [
    { label: 'Proyectos completados', value: 3, suffix: '+' },
    { label: 'Años de experiencia', value: 5, suffix: '+' },
    { label: 'Tecnologías dominadas', value: 10, suffix: '+' },
    { label: 'Entregas a tiempo', value: 100, suffix: '%' }
  ];

  return (
    <section className="py-5 my-5" style={{ background: 'var(--color-overlay)' }}>
      <div className="container">
        <div className="row g-4 text-center">
          {stats.map((stat, idx) => (
            <div className="col-6 col-md-3 stat-item" key={idx}>
              <h2 className="display-4 fw-bold mb-2 text-gradient" style={{ fontFamily: 'Outfit' }}>
                <Counter end={stat.value} suffix={stat.suffix} />
              </h2>
              <p className="text-uppercase fw-medium small mb-0 tracking-wider" style={{ color: 'var(--color-text-secondary)', letterSpacing: '1px' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
          .stat-item {
            transition: transform 0.3s ease;
          }
          .stat-item:hover {
            transform: translateY(-5px);
          }
        `}
      </style>
    </section>
  );
};

export default MiniBanner;
