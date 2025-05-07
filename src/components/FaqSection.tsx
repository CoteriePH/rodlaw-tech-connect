
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: "What should I bring to my initial consultation?",
    answer: "For your initial consultation, please bring any relevant documents related to your case such as contracts, court papers, correspondence, and identification. If you're unsure what to bring, feel free to call our office ahead of time for guidance specific to your situation."
  },
  {
    question: "How much will my legal services cost?",
    answer: "Legal fees vary depending on the complexity of your case and the services required. During your initial consultation, we'll discuss our fee structure and provide you with an estimate. We're committed to transparency in our billing practices and will keep you informed about costs throughout the process."
  },
  {
    question: "How long will my case take to resolve?",
    answer: "The timeline for resolving legal matters varies widely depending on the nature of your case, court schedules, and whether a settlement can be reached. During your consultation, we can provide an estimated timeline based on similar cases we've handled, while acknowledging that each situation is unique."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we understand that legal services can be a significant investment. We offer flexible payment plans to help make quality legal representation accessible. We'll discuss payment options during your initial consultation to find an arrangement that works for your budget."
  },
  {
    question: "Can you represent me in areas outside of Chatham-Kent?",
    answer: "Yes, while our office is located in Chatham, we regularly represent clients throughout Southwestern Ontario. For certain matters, we may be able to handle your case remotely, minimizing the need for you to travel."
  }
];

const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <section className="py-20 bg-law-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gold-text">Frequently Asked Questions</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Get answers to common questions about working with Rodriguez Law Office. If you don't see your question here, please contact us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 last:border-b-0"
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                <span className="text-law-gold ml-4">
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-white/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80 mb-6">Still have questions? We're here to help.</p>
          <a href="/contact" className="cta-button">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
