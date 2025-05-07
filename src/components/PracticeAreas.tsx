
import React, { useState } from 'react';

interface PracticeArea {
  id: string;
  title: string;
  icon: string;
  description: string;
  services: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

const practiceAreas: PracticeArea[] = [
  {
    id: 'family-law',
    title: 'Family Law',
    icon: '👪',
    description: "Our family law services provide compassionate guidance during life's most challenging transitions. We handle divorce, custody, and support matters with sensitivity and expertise.",
    services: [
      'Divorce and Separation',
      'Child Custody and Visitation',
      'Child and Spousal Support',
      'Property Division',
      'Mediation Services'
    ],
    testimonial: {
      quote: "David provided clarity and empathy during my divorce. His guidance helped me secure a fair custody arrangement that puts my children first.",
      author: 'Sarah M., Chatham'
    }
  },
  {
    id: 'real-estate',
    title: 'Real Estate Law',
    icon: '🏠',
    description: 'Our real estate practice serves both residential and commercial clients with comprehensive legal services for property transactions and disputes.',
    services: [
      'Residential Purchases and Sales',
      'Commercial Property Transactions',
      'Title Searches and Insurance',
      'Lease Agreements',
      'Land Use and Zoning Issues'
    ],
    testimonial: {
      quote: "Rodriguez Law Office made our first home purchase smooth and stress-free. Their attention to detail saved us from potential issues we wouldn't have noticed.",
      author: 'Michael & Jennifer K., Chatham'
    }
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    icon: '📝',
    description: "Protect your legacy and provide for your loved ones with our tailored estate planning services designed to safeguard your assets and express your wishes.",
    services: [
      'Wills and Trusts',
      'Power of Attorney',
      'Healthcare Directives',
      'Estate Administration',
      'Probate Services'
    ],
    testimonial: {
      quote: "Creating our estate plan with David gave us peace of mind knowing our children's future is protected. The process was much simpler than we expected.",
      author: 'Robert L., Chatham-Kent'
    }
  }
];

const PracticeAreas: React.FC = () => {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedArea === id) {
      setExpandedArea(null);
    } else {
      setExpandedArea(id);
    }
  };

  return (
    <section className="py-20 bg-law-darker" id="practice-areas">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center gold-text">Our Practice Areas</h2>
        <p className="text-center mb-14 max-w-2xl mx-auto text-white/80">
          At Rodriguez Law Office, we specialize in helping individuals and families navigate
          complex legal matters with expertise and compassion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className={`bg-law-dark border border-law-gold/20 rounded-lg overflow-hidden transition-all duration-500 ${
                expandedArea === area.id ? 'transform scale-105 shadow-xl' : ''
              }`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(area.id)}
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-law-gold">{area.title}</h3>
                <p className="text-white/70 mb-4">{area.description}</p>
                <button
                  className="text-law-gold hover:text-law-gold-light flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(area.id);
                  }}
                >
                  {expandedArea === area.id ? 'Show Less' : 'Learn More'}
                </button>
              </div>

              {expandedArea === area.id && (
                <div className="p-6 pt-0 bg-law-black/30 animate-fade-in">
                  <h4 className="text-lg font-semibold mb-3 text-white">Our Services:</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-1">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="text-white/70">{service}</li>
                    ))}
                  </ul>

                  {area.testimonial && (
                    <div className="border-l-4 border-law-gold pl-4 italic">
                      <p className="text-white/80 mb-2">"{area.testimonial.quote}"</p>
                      <p className="text-law-gold text-sm">— {area.testimonial.author}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/practice-areas"
            className="cta-button"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
