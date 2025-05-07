
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-law-darker" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gold-text">Contact Us</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Schedule a consultation today to discuss your legal needs. Our team is ready to provide you with the guidance and representation you deserve.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-law-dark p-6 rounded-lg shadow-lg border border-law-gold/20 h-full">
              <h3 className="text-2xl font-bold mb-6 gold-underline pb-4">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-law-gold mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <a
                      href="tel:5196823100"
                      className="text-white/80 hover:text-law-gold transition-colors"
                    >
                      (519) 682-3100
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-law-gold mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <a
                      href="mailto:info@rodlaw.ca"
                      className="text-white/80 hover:text-law-gold transition-colors"
                    >
                      info@rodlaw.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-law-gold mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="text-lg font-semibold">Office Location</h4>
                    <address className="text-white/80 not-italic">
                      55 Dover Street<br />
                      Chatham, ON N7M 1S7
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-law-gold mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="text-lg font-semibold">Office Hours</h4>
                    <p className="text-white/80">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-white/80">Saturdays & Evenings: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-law-dark p-6 rounded-lg shadow-lg border border-law-gold/20">
              <h3 className="text-2xl font-bold mb-6 gold-underline pb-4">Schedule a Consultation</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 bg-law-black border border-gray-600 rounded text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 bg-law-black border border-gray-600 rounded text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 bg-law-black border border-gray-600 rounded text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 bg-law-black border border-gray-600 rounded text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-white mb-2">Service Type</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="w-full px-4 py-2 bg-law-black border border-gray-600 rounded text-white"
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="family-law">Family Law</option>
                    <option value="real-estate">Real Estate Law</option>
                    <option value="estate-planning">Estate Planning</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">Brief Description of Your Case</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-law-black border border-gray-600 rounded text-white"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cta-button"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
