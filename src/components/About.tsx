import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Check, Sparkles, Code2, Database, BrainCircuit, User } from 'lucide-react';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // Subtle scroll-driven entrance transformations
  const cardOpacity = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.45], [40, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 0.45], [0.94, 1]);

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.55], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.55], [45, 0]);

  // Floating parallax drift on badge chips
  const badgeParallax = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section ref={sectionRef} id="about" className="py-20 lg:py-28 bg-[#F5F3EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Stylized Developer Portrait & Floating Badges */}
          <motion.div
            style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Main Card Frame: Full-bleed profile picture occupying the entire box */}
              <div className="relative aspect-4/5 w-full rounded-3xl border-2 border-[#252525] shadow-[8px_8px_0px_0px_#252525] overflow-hidden bg-[#252525] group">
                <img
                  src="/profile.jpg"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Tech Chips */}
              <motion.div
                style={{ y: badgeParallax }}
                className="absolute -top-3 -right-3 z-20 bg-white px-3 py-1.5 rounded-full border border-[#252525] text-xs font-mono font-semibold shadow-md flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#E0FD72]" />
                <span>Python</span>
              </motion.div>
              <motion.div
                style={{ y: badgeParallax }}
                className="absolute top-1/2 -left-4 z-20 bg-[#252525] text-white px-3 py-1.5 rounded-full border border-black text-xs font-mono font-medium shadow-md flex items-center gap-1.5"
              >
                <BrainCircuit className="w-3.5 h-3.5 text-[#E0FD72]" />
                <span>CNN / TensorFlow</span>
              </motion.div>
              <motion.div
                style={{ y: badgeParallax }}
                className="absolute -bottom-3 right-6 z-20 bg-[#E0FD72] text-[#252525] px-3.5 py-1.5 rounded-full border border-[#252525] text-xs font-mono font-bold shadow-md flex items-center gap-1.5"
              >
                <Database className="w-3.5 h-3.5" />
                <span>MySQL</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: About Text & Highlights with entrance animation */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <p className="font-mono text-sm font-semibold text-[#252525]/70 tracking-wider">
                // about
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#252525] tracking-tight leading-tight">
                Technology should serve people.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#252525]/90 leading-relaxed font-normal">
              {PERSONAL_INFO.introduction}
            </p>

            {/* Career Objective Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/70 border border-[#252525]/15 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#252525] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#252525]" />
                <span>Career Objective</span>
              </div>
              <p className="text-sm sm:text-base text-[#252525] italic leading-relaxed">
                &ldquo;{PERSONAL_INFO.careerObjective}&rdquo;
              </p>
            </div>

            {/* 3 Core Traits matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="px-4 py-3 rounded-xl bg-white border border-[#252525]/20 text-center text-sm font-semibold text-[#252525] shadow-xs hover:border-[#252525] transition-colors">
                Clean architecture
              </div>
              <div className="px-4 py-3 rounded-xl bg-white border border-[#252525]/20 text-center text-sm font-semibold text-[#252525] shadow-xs hover:border-[#252525] transition-colors">
                AI for good
              </div>
              <div className="px-4 py-3 rounded-xl bg-white border border-[#252525]/20 text-center text-sm font-semibold text-[#252525] shadow-xs hover:border-[#252525] transition-colors">
                Problem solving
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
