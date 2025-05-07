
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-law-dark flex flex-col">
      <NavBar />
      
      <div className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-law-gold mb-4">404</h1>
          <p className="text-2xl text-white mb-8">Page Not Found</p>
          <p className="text-lg text-white/70 mb-8">
            We're sorry, but the page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="cta-button"
          >
            Return to Home
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
