
import React from 'react';
import NavBar from '../components/NavBar';
import HeroCarousel from '../components/HeroCarousel';
import PracticeAreas from '../components/PracticeAreas';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-law-dark">
      <NavBar />
      <HeroCarousel />
      <PracticeAreas />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <MapSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
