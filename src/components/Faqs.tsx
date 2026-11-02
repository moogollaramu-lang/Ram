import React, { useState } from 'react';
import { FAQS_DATA } from '../data/portfolioData';

export const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default like reference

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#F5F3EA] border-t border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 space-y-3">
          <p className="font-mono text-sm font-semibold text-[#252525]/70 tracking-wider uppercase">
            // faqs
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#252525] tracking-tight">
            Questions, answered.
          </h2>
        </div>

        {/* Accordion List matching reference */}
        <div className="divide-y divide-[#252525]/20 border-y border-[#252525]/20">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-2">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left font-sans text-lg sm:text-xl font-semibold text-[#252525] hover:text-black transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-xl font-mono text-[#252525] shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pt-1 text-sm sm:text-base text-[#252525]/80 leading-relaxed font-normal animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
