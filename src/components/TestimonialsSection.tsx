
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "David's guidance during my divorce was invaluable. He navigated a complex situation with professionalism and genuine compassion. I felt supported throughout the entire process.",
    author: "Jennifer K.",
    position: "Family Law Client"
  },
  {
    id: 2,
    quote: "Rodriguez Law Office handled the purchase of our first home with incredible attention to detail. David explained every document clearly and saved us from several potential issues.",
    author: "Michael & Sarah T.",
    position: "Real Estate Clients"
  },
  {
    id: 3,
    quote: "Setting up our estate plan with David was surprisingly straightforward. He took the time to understand our needs and created a plan that gave us peace of mind about our children's future.",
    author: "Robert L.",
    position: "Estate Planning Client"
  },
  {
    id: 4,
    quote: "As a business owner, I needed legal guidance that was practical and efficient. David provided exactly that, helping my company navigate complex regulatory issues with ease.",
    author: "Thomas J.",
    position: "Business Law Client"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-law-darker relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/lovable-uploads/0f3bde5d-8e25-4688-9886-849636a1de96.png')" }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center gold-text">Client Success Stories</h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="h-64">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute w-full transform transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <blockquote className="text-center">
                  <div className="text-5xl text-law-gold mb-6">"</div>
                  <p className="text-xl mb-8 text-white/90">{testimonial.quote}</p>
                  <footer>
                    <p className="text-law-gold font-bold">{testimonial.author}</p>
                    <p className="text-white/60 text-sm">{testimonial.position}</p>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-12">
            <button 
              onClick={prevTestimonial}
              className="bg-law-dark hover:bg-law-black p-3 rounded-full text-white/80 hover:text-law-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`circular-button ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-law-dark hover:bg-law-black p-3 rounded-full text-white/80 hover:text-law-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
