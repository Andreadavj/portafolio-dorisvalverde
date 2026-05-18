import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../common/Card';
import Tag from '../common/Tag';

const ProjectCard = ({ title, description, stack = [], githubUrl, liveUrl, image, status = 'completed' }) => {
  const isPlaceholder = status !== 'completed';

  return (
    <Card className="h-100 project-card" hoverable>
      <div className="position-relative overflow-hidden project-image-container" style={{ height: '200px' }}>
        {isPlaceholder ? (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-secondary">
            <span className="text-white opacity-50">Imagen Próximamente</span>
          </div>
        ) : (
          <img 
            src={image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&w=800&q=80"} 
            alt={title} 
            className="w-100 h-100 object-fit-cover transition-all"
          />
        )}
        
        {/* Overlay en hover */}
        <div className="project-overlay d-flex flex-column align-items-center justify-content-center gap-3">
          <div className="d-flex gap-3">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm" title="Ver Código">
                <FaGithub size={20} className="text-dark" />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ background: 'var(--color-electric-blue)' }} title="Ver Demo">
                <FaExternalLinkAlt size={18} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 p-2">
        <h4 className="fw-bold mb-2">{title}</h4>
        <p className="text-muted small mb-3" style={{ color: 'var(--color-text-secondary) !important' }}>
          {description}
        </p>
        <div className="d-flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <Tag key={index} text={tech} />
          ))}
        </div>
      </div>

      <style>
        {`
          .project-card .project-image-container img {
            transition: transform 0.5s ease;
          }
          .project-card:hover .project-image-container img {
            transform: scale(1.1);
          }
          .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(35, 39, 72, 0.85);
            opacity: 0;
            transition: opacity 0.3s ease;
            backdrop-filter: blur(4px);
          }
          .project-card:hover .project-overlay {
            opacity: 1;
          }
        `}
      </style>
    </Card>
  );
};

export default ProjectCard;
