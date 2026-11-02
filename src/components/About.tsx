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
              {/* Main Card Frame */}
              <div className="relative aspect-4/5 w-full rounded-3xl bg-[#E8E5D8] border-2 border-[#252525] p-4 sm:p-6 shadow-[8px_8px_0px_0px_#252525] flex flex-col justify-between overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                {/* Top card info */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#E0FD72] border border-[#252525]" />
                    <span className="font-mono text-xs font-bold text-[#252525]">ID: MR-2026</span>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white border border-[#252525]">
                    Anantapur, AP
                  </span>
                </div>

                {/* Center Visual: Profile Photo */}
                <div className="relative z-10 flex flex-col items-center justify-center my-6 text-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl relative group ring-4 ring-[#E0FD72]/50 bg-[#252525]">
                    <img
                      src="/profile.jpg"
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#252525] mt-4">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-[#252525]/70 mt-1">
                    {PERSONAL_INFO.role} · B.Tech CSE
                  </p>
                </div>

                {/* Card footer details */}
                <div className="relative z-10 bg-white/90 rounded-2xl p-3 border border-[#252525]/20 text-xs font-mono text-[#252525]/80 space-y-1">
                  <div className="flex justify-between">
                    <span>Internship:</span>
                    <span className="font-semibold text-black">NIELIT (AI/ML)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Graduation:</span>
                    <span className="font-semibold text-black">2026 (70.08%)</span>
                  </div>
                </div>

                {/* Floating Tech Chips matching reference with subtle scroll parallax */}
                <motion.div
                  style={{ y: badgeParallax }}
                  className="absolute -top-3 -right-3 bg-white px-3 py-1.5 rounded-full border border-[#252525] text-xs font-mono font-semibold shadow-md flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E0FD72]" />
                  <span>Python</span>
                </motion.div>
                <motion.div
                  style={{ y: badgeParallax }}
                  className="absolute top-1/2 -left-4 bg-[#252525] text-white px-3 py-1.5 rounded-full border border-black text-xs font-mono font-medium shadow-md flex items-center gap-1.5"
                >
                  <BrainCircuit className="w-3.5 h-3.5 text-[#E0FD72]" />
                  <span>CNN / TensorFlow</span>
                </motion.div>
                <motion.div
                  style={{ y: badgeParallax }}
                  className="absolute -bottom-3 right-6 bg-[#E0FD72] text-[#252525] px-3.5 py-1.5 rounded-full border border-[#252525] text-xs font-mono font-bold shadow-md flex items-center gap-1.5"
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>MySQL</span>
                </motion.div>
              </div>
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
