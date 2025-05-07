
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Slide {
  image: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    image: "/lovable-uploads/845bd96f-ab2a-4752-be1a-cf5c1762f312.png",
    headline: "CLARITY AND CARE",
    subheadline: "WHEN YOUR FAMILY NEEDS IT MOST",
    ctaText: "YOUR PATH FORWARD",
    ctaLink: "/practice-areas/family-law",
  },
  {
    image: "/lovable-uploads/4d738e46-4eda-4058-ac22-ae505cd63a23.png",
    headline: "GUIDING OWNERS",
    subheadline: "EVERY STEP OF THE WAY",
    ctaText: "REQUEST A QUOTE",
    ctaLink: "/practice-areas/real-estate",
  },
  {
    image: "/lovable-uploads/524f254c-098d-49d2-bfba-777d51c13438.png",
    headline: "PROTECT YOUR",
    subheadline: "LEGACY AND LOVED ONES",
    ctaText: "PLAN YOUR NEXT STEP",
    ctaLink: "/practice-areas/estate-planning",
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-law-black bg-opacity-60"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center pl-8 md:pl-24 max-w-5xl">
            <div className="vertical-gold-line pl-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {slide.headline}
              </h2>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-8">
                {slide.subheadline}
              </h3>
              <a
                href={slide.ctaLink}
                className="inline-flex items-center bg-law-black bg-opacity-70 hover:bg-opacity-80 text-law-gold px-6 py-3 border border-law-gold transition-all duration-300"
              >
                {slide.ctaText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              
              <div className="mt-8">
                <p className="text-white text-lg">Call us today at <a href="tel:5196823100" className="text-law-gold hover:text-law-gold-light font-semibold">(519) 682-3100</a></p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation controls */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`circular-button ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-law-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-law-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroCarousel;
