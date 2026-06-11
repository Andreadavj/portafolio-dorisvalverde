import React from 'react';
import SectionTitle from '../../components/common/SectionTitle';
import ProjectCard from '../../components/spaces/ProjectCard';
import { useInView } from 'react-intersection-observer';

// Importa las imágenes aquí (asegúrate de guardar las imágenes en la carpeta src/assets con estos nombres)
import jaffaImg from '../../assets/jaffa.png';
import virtualPetImg from '../../assets/pet.png';
import spacexImg from '../../assets/spacex.png';
// Imagen por defecto para el backend si no tienes una específica
const defaultBackendImg = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&w=800&q=80";

const ProjectsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "JAFFA Cowork",
      description: "Aplicación Full Stack desarrollada con arquitectura MERN para la administración de espacios de coworking. Permite gestionar usuarios, reservas, pagos, facturación y soporte mediante una plataforma moderna y escalable.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      githubUrl: "https://github.com/Andreadavj/Sistema-de-gestion-de-co-working",
      liveUrl: "https://sistema-de-gestion-de-co-working.vercel.app/",
      image: jaffaImg,
      status: "completed"
    },
    {
      title: "Virtual Pet",
      description: "Aplicación Full Stack para la gestión de mascotas virtuales. Permite crear, editar, visualizar y administrar mascotas mediante una interfaz interactiva desarrollada con JavaScript puro y una API REST.",
      stack: ["JavaScript", "HTML/CSS", "API REST", "Node.js"],
      githubUrl: "https://github.com/Andreadavj/virtual-pet-manager",
      liveUrl: "https://andreadavj.github.io/virtual-pet-manager/",
      image: virtualPetImg,
      status: "completed"
    },
    {
      title: "SpaceX Tracker",
      description: "Single Page Application desarrollada en React que consume la API pública de SpaceX para visualizar, filtrar y explorar lanzamientos espaciales en tiempo real.",
      stack: ["React", "API REST", "SPA"],
      githubUrl: "https://github.com/Andreadavj/spacex-tracker",
      liveUrl: "https://spacex-tracker-eight.vercel.app/",
      image: spacexImg,
      status: "completed"
    },
    {
      title: "Backend LikeMel",
      description: "API REST desarrollada con Express y PostgreSQL para gestionar publicaciones y reacciones mediante operaciones CRUD completas.",
      stack: ["Node.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/Andreadavj/backend-LikeMel",
      liveUrl: "",
      image: defaultBackendImg,
      status: "completed"
    }
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
