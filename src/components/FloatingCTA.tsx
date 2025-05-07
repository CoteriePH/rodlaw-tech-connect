
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col space-y-4 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <a
        href="/contact"
        className="bg-law-gold text-law-black px-4 py-3 rounded shadow-lg hover:bg-law-gold-light transition-colors duration-300"
      >
        Schedule Consultation
      </a>
      
      <a
        href="tel:5196823100"
        className="bg-white text-law-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingCTA;
