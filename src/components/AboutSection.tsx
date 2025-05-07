
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-law-dark" id="about-us">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img
              src="/lovable-uploads/4d483d29-02b0-4e16-b8da-39564df83782.png"
              alt="David Rodriguez, Attorney"
              className="rounded-lg shadow-lg border border-law-gold/20 w-full max-w-md mx-auto"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4 gold-underline pb-4">DAVID RODRIGUEZ</h2>
            <h3 className="text-2xl font-medium text-white mb-6">Lawyer, Owner, BMSc., J.D.</h3>

            <div className="space-y-6">
              <p className="text-white/80">
                Grown and raised in Chatham-Kent, I established Rodriguez Law Office in 2020 to
                service the communities' family, real estate, and construction law needs. Since then
                my practice has expanded to help homeowners and builders throughout Ontario.
              </p>

              <p className="text-white/80">
                As a young and independent lawyer, I can provide a greater level of personal
                attention at more competitive rates than older lawyers. Let me show you the
                difference that makes.
              </p>

              <h4 className="text-xl font-bold text-law-gold mt-8">Our Firm's Philosophy</h4>
              <p className="text-white/80">
                At Rodriguez Law Office, we believe in a client-centered approach that combines
                legal expertise with compassion and accessibility. We strive to make the legal
                process transparent and understandable, empowering our clients to make informed
                decisions with confidence.
              </p>

              <div className="pt-4">
                <a href="/about" className="cta-button">
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
