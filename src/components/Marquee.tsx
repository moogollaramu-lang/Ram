import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'PYTHON',
    'MACHINE LEARNING',
    'DEEP LEARNING',
    'CNN',
    'TENSORFLOW',
    'SQL',
    'MYSQL',
    'STREAMLIT',
    'AWS DATA ENGINEERING',
    'DATA PREPROCESSING',
    'DIGITAL IMAGE PROCESSING',
    'C',
    'JAVA (BASIC)',
    'HTML',
    'PYTHON',
    'AI & ML',
  ];

  return (
    <div
      className="w-full bg-[#252525] text-[#F5F3EA] py-4.5 overflow-hidden border-y border-black/20 select-none"
      role="region"
      aria-label="Technologies Marquee"
    >
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap text-sm sm:text-base font-mono font-medium tracking-wider">
        {/* Sequence 1 */}
        {items.map((item, index) => (
          <React.Fragment key={`seq1-${index}`}>
            <span className="hover:text-[#E0FD72] transition-colors">{item}</span>
            <span className="text-[#E0FD72] text-xs">✦</span>
          </React.Fragment>
        ))}

        {/* Sequence 2 for continuous seamless loop */}
        {items.map((item, index) => (
          <React.Fragment key={`seq2-${index}`}>
            <span className="hover:text-[#E0FD72] transition-colors">{item}</span>
            <span className="text-[#E0FD72] text-xs">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
