
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-law-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/lovable-uploads/eafac1c3-8b15-4610-a1c9-c48a788ca6c9.png"
                alt="Rodriguez Law Office"
                className="h-16"
              />
            </Link>
            <p className="text-white/70 mb-6">
              Professional legal services tailored to your needs. We provide expert guidance with a personal touch.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-law-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-law-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-law-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-bold mb-6 gold-underline pb-3">Practice Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/practice-areas/family-law" className="text-white/70 hover:text-law-gold transition-colors">
                  Family Law
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/real-estate" className="text-white/70 hover:text-law-gold transition-colors">
                  Real Estate Law
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/estate-planning" className="text-white/70 hover:text-law-gold transition-colors">
                  Estate Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 gold-underline pb-3">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/70 hover:text-law-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-law-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white/70 hover:text-law-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-white/70 hover:text-law-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 gold-underline pb-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="text-law-gold mr-3 mt-1" size={16} />
                <a href="tel:5196823100" className="text-white/70 hover:text-law-gold transition-colors">
                  (519) 682-3100
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="text-law-gold mr-3 mt-1" size={16} />
                <a href="mailto:info@rodlaw.ca" className="text-white/70 hover:text-law-gold transition-colors">
                  info@rodlaw.ca
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="text-law-gold mr-3 mt-1" size={16} />
                <address className="text-white/70 not-italic">
                  55 Dover Street<br />
                  Chatham, ON N7M 1S7
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} Rodriguez Law Office. All rights reserved.
          </p>
          <p className="text-white/40 text-sm mt-2">
            The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
