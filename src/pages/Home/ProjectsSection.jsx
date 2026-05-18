import React from 'react';
import SectionTitle from '../../components/common/SectionTitle';
import ProjectCard from '../../components/spaces/ProjectCard';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "Sistema de Gestión de Reservas – Coworking",
      description: "Plataforma para administrar reservas en un espacio de coworking, permitiendo agendamiento y gestión de disponibilidad.",
      stack: ["HTML5", "CSS3", "JS", "Bootstrap", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/Andreadavj",
      liveUrl: "https://github.com/Andreadavj",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&w=800&q=80",
      status: "completed"
    },
    {
      title: "Single Page Application con React",
      description: "Aplicación SPA interactiva construida con React y consumiendo APIs externas para mostrar datos en tiempo real.",
      stack: ["React", "JS ES6+", "CSS3", "REST APIs", "React Hooks"],
      githubUrl: "https://github.com/Andreadavj",
      liveUrl: "https://github.com/Andreadavj",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&w=800&q=80",
      status: "completed"
    },
    {
      title: "Backend API Like Me & JWT Auth",
      description: "API REST robusta con autenticación JWT, manejo de usuarios y posts, utilizando múltiples bases de datos.",
      stack: ["Node.js", "Express", "PostgreSQL", "MongoDB", "JWT"],
      githubUrl: "https://github.com/Andreadavj",
      liveUrl: "",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&w=800&q=80",
      status: "completed"
    },
    { title: "Proyecto en Desarrollo", status: "pending", stack: [] },
    { title: "Proyecto en Desarrollo", status: "pending", stack: [] },
    { title: "Proyecto en Desarrollo", status: "pending", stack: [] }
  ];

  return (
    <section id="projects" className="py-5 my-5" ref={ref}>
      <div className="container">
        <SectionTitle title="Proyectos Destacados" subtitle="PORTAFOLIO" />

        <div className={`row g-4 mt-4 projects-grid ${inView ? 'visible' : ''}`}>
          {projects.map((project, idx) => (
            <div className="col-md-6 col-lg-4 project-item" key={idx} style={{ animationDelay: `${idx * 0.15}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .projects-grid {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          .projects-grid.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .projects-grid.visible .project-item {
            animation: fadeUpItem 0.6s ease forwards;
            opacity: 0;
          }
          @keyframes fadeUpItem {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsSection;
