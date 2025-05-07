
import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="py-12 bg-law-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gold-text">Find Us</h2>
          <p className="text-white/80">Our office is conveniently located in downtown Chatham</p>
        </div>
        
        <div className="overflow-hidden rounded-lg border border-law-gold/20 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1481.9236628930836!2d-82.19929036024394!3d42.40413593394839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882fea0fef0f60b5%3A0xdf9a9b645decc32f!2s55%20Dover%20St%2C%20Chatham%2C%20ON%20N7M%201S7%2C%20Canada!5e0!3m2!1sen!2sus!4v1714444641123!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rodriguez Law Office Location"
          ></iframe>
        </div>
        
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Rodriguez Law Office</h3>
          <p className="text-white/80">55 Dover Street, Chatham, ON N7M 1S7</p>
          <p className="mt-4">
            <a href="https://goo.gl/maps/YourSpecificGoogleMapsLink" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-law-gold hover:text-law-gold-light transition-colors">
              Get Directions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
