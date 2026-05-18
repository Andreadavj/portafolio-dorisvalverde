import React from 'react';
import HeroSection from './HeroSection';
import CTABanner from './CTABanner';
import TechStackSection from './TechStackSection';
import AboutSection from './AboutSection';
import MiniBanner from './MiniBanner';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CTABanner />
      <AboutSection />
      <TechStackSection />
      <MiniBanner />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
