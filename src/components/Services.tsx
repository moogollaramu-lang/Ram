import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F3EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 space-y-3">
          <p className="font-mono text-sm font-semibold text-[#252525]/70 tracking-wider uppercase">
            // services
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#252525] tracking-tight">
            What I can build with you.
          </h2>
        </div>

        {/* Services Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.title}
              className={`p-8 rounded-3xl bg-white border border-[#252525]/10 shadow-xs hover:shadow-md hover:border-[#252525]/30 transition-all duration-300 flex flex-col justify-between group ${
                index === 3 ? 'md:col-span-1 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#F5F3EA] border border-[#252525]/15 flex items-center justify-center font-mono text-lg font-bold text-[#252525] group-hover:bg-[#E0FD72] group-hover:border-black transition-colors">
                  {service.icon}
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#252525] group-hover:text-black">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-[#252525]/80 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono text-[#252525]/60 group-hover:text-black">
                <span>0{index + 1} // capability</span>
                <span className="text-[#252525] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
