import React, { useState } from 'react';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub
} from 'react-icons/fa';
import { 
  SiVite, SiTailwindcss, SiBootstrap, SiExpress, SiJsonwebtokens,
  SiMongodb, SiPostgresql
} from 'react-icons/si';
import { FaTasks, FaTrello } from 'react-icons/fa';

const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const techData = {
    frontend: [
      { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
      { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
      { name: 'JavaScript ES6+', icon: <FaJs color="#F7DF1E" /> },
      { name: 'React', icon: <FaReact color="#61DAFB" /> },
      { name: 'Vite', icon: <SiVite color="#646CFF" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" /> },
      { name: 'Responsive Design', icon: <FaCss3Alt color="#1572B6" /> }
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
      { name: 'Express.js', icon: <SiExpress color="#000000" className="bg-white rounded-circle" /> },
      { name: 'REST API', icon: <FaNodeJs color="#339933" /> },
      { name: 'JWT', icon: <SiJsonwebtokens color="#000000" className="bg-white" /> }
    ],
    database: [
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> }
    ],
    tools: [
      { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
      { name: 'GitHub', icon: <FaGithub color="#181717" className="bg-white rounded-circle" /> },
      { name: 'Scrum', icon: <FaTrello color="#0052CC" /> },
      { name: 'Agile', icon: <FaTasks color="#00C09D" /> }
    ]
  };

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Bases de Datos' },
    { id: 'tools', label: 'Herramientas' }
  ];

  return (
    <section id="tech" className="py-5 py-lg-7 my-5" ref={ref}>
      <div className="container">
        <SectionTitle title="Tecnologías que domino" subtitle="MI STACK TÉCNICO" />

        <div className={`fade-up ${inView ? 'visible' : ''}`}>
          {/* Tabs */}
          <ul className="nav nav-pills justify-content-center mb-5 gap-2" id="tech-tab" role="tablist">
            {tabs.map(tab => (
              <li className="nav-item" role="presentation" key={tab.id}>
                <button 
                  className={`nav-link rounded-pill px-4 ${activeTab === tab.id ? 'active shadow' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: activeTab === tab.id ? 'var(--color-accent-gradient)' : 'var(--color-bg-secondary)',
                    color: activeTab === tab.id ? '#fff' : 'var(--color-text-primary)',
                    border: 'none',
                    fontWeight: '500'
                  }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row g-4 justify-content-center">
                {techData[activeTab].map((tech, idx) => (
                  <div className="col-6 col-md-4 col-lg-3 tech-item" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                    <Card className="text-center h-100 d-flex flex-column justify-content-center py-4 tech-card" hoverable>
                      <div className="mb-3 fs-1 tech-icon">
                        {tech.icon}
                      </div>
                      <h6 className="mb-0 fw-bold">{tech.name}</h6>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
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
          .tech-card {
            transition: all 0.3s ease;
            cursor: default;
          }
          .tech-card:hover {
            box-shadow: 0 10px 25px rgba(62, 123, 255, 0.4) !important;
            border-color: var(--color-electric-blue) !important;
          }
          [data-theme='light'] .tech-card:hover {
            box-shadow: 0 10px 25px rgba(62, 123, 255, 0.2) !important;
          }
          .tech-icon {
            transition: transform 0.3s ease;
          }
          .tech-card:hover .tech-icon {
            transform: scale(1.2);
            filter: drop-shadow(0 0 8px rgba(62, 123, 255, 0.6));
          }
          .tech-item {
            animation: zoomIn 0.5s ease backwards;
          }
          @keyframes zoomIn {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </section>
  );
};

export default TechStackSection;
