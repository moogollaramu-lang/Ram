import React from 'react';
import { ArrowRight, PhoneCall, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal } from './Terminal';

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#F5F3EA] bg-grid-pattern pt-12 pb-20 lg:pt-16 lg:pb-28"
    >
      {/* Decorative Organic Blobs */}
      <div
        className="absolute top-10 right-4 sm:right-16 w-64 h-64 sm:w-80 sm:h-80 bg-[#E0FD72] blob-lime opacity-85 blur-[1px] pointer-events-none -z-0 transform rotate-12 transition-all duration-700"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-12 left-4 sm:left-12 w-56 h-56 sm:w-72 sm:h-72 bg-[#E0D9FD]/75 blob-lavender opacity-80 blur-[2px] pointer-events-none -z-0 transform -rotate-6 transition-all duration-700"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Status Pill Badge with Profile Thumbnail */}
        <div className="mb-6 sm:mb-8 flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#252525] shadow-xs shrink-0 ring-2 ring-[#E0FD72]">
            <img src="/profile.jpg" alt="Moogolla Ramu" className="w-full h-full object-cover object-top" />
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#252525] text-[#252525] font-mono text-xs sm:text-sm font-medium shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.statusBadge}</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="mb-10 sm:mb-14">
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-tight text-[#252525] leading-[0.95] uppercase">
            <span>WHERE IDEAS</span>
            <br />
            <mark className="bg-[#E0FD72] text-[#252525] px-2 sm:px-4 py-0 sm:py-0.5 rounded-lg inline-block my-1.5 shadow-xs">
              MEET EXECUTION
            </mark>
          </h1>
        </div>

        {/* 2-Column Split: Intro & Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Subtitle & Description */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-mono text-xs sm:text-sm text-[#252525]/70 tracking-wide uppercase">
              // {PERSONAL_INFO.heroSubtitle}
            </p>

            <h2 className="text-xl sm:text-2xl text-[#252525] font-medium leading-relaxed">
              Hi, I&apos;m <span className="font-bold underline decoration-[#E0FD72] decoration-4">Ramu</span>. I turn ideas into reliable software and practical AI solutions with Python, Machine Learning, Deep Learning, and modern databases.
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#252525] text-white font-semibold text-sm sm:text-base hover:bg-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md group"
              >
                <span>See my work</span>
                <ArrowRight className="w-4 h-4 text-[#E0FD72] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent border border-[#252525] text-[#252525] font-semibold text-sm sm:text-base hover:bg-black/5 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Let&apos;s connect</span>
                <span className="text-[#252525]/60">↗</span>
              </a>
            </div>

            {/* Quick credentials banner */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#252525]/80 pt-2 border-t border-black/10">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>B.Tech CSE (70.08%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>NIELIT AI/ML Intern</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Python &amp; TensorFlow</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal Window */}
          <div className="lg:col-span-6">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};
