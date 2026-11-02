import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SKILLS_DATA } from '../data/portfolioData';
import { Code2, BrainCircuit, Globe, Database, Cloud, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // Subtle entrance animations driven by viewport scroll progress
  const headerOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.35], [30, 0]);

  const filtersOpacity = useTransform(scrollYProgress, [0.08, 0.45], [0, 1]);
  const filtersY = useTransform(scrollYProgress, [0.08, 0.45], [20, 0]);

  const cardsOpacity = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.15, 0.55], [35, 0]);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-[#252525]" />;
      case 'Artificial Intelligence and Machine Learning':
        return <BrainCircuit className="w-5 h-5 text-emerald-600" />;
      case 'Web Technologies':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-amber-600" />;
      case 'Cloud and Data':
        return <Cloud className="w-5 h-5 text-indigo-600" />;
      default:
        return <Wrench className="w-5 h-5 text-neutral-600" />;
    }
  };

  const filteredGroups =
    activeCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((group) => group.category === activeCategory);

  return (
    <section ref={sectionRef} id="skills" className="py-20 lg:py-28 bg-[#F5F3EA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Subtle Scroll Entrance */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="mb-12 sm:mb-16 space-y-3"
        >
          <p className="font-mono text-sm font-semibold text-[#252525]/70 tracking-wider uppercase">
            // technical skills
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#252525] tracking-tight">
            Toolbox &amp; Technologies.
          </h2>
          <p className="text-[#252525]/80 text-base sm:text-lg max-w-2xl">
            Proficiencies across programming, machine learning, deep learning, databases, and engineering tools.
          </p>
        </motion.div>

        {/* Category Filters with Subtle Scroll Entrance */}
        <motion.div
          style={{ opacity: filtersOpacity, y: filtersY }}
          className="flex flex-wrap gap-2 pb-8"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-[#252525] text-white shadow-xs'
                : 'bg-white border border-[#252525]/15 text-[#252525] hover:bg-black/5'
            }`}
          >
            All Categories ({SKILLS_DATA.reduce((acc, g) => acc + g.skills.length, 0)})
          </button>
          {SKILLS_DATA.map((group) => (
            <button
              key={group.category}
              onClick={() => setActiveCategory(group.category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-medium transition-colors ${
                activeCategory === group.category
                  ? 'bg-[#252525] text-white shadow-xs'
                  : 'bg-white border border-[#252525]/15 text-[#252525] hover:bg-black/5'
              }`}
            >
              {group.category}
            </button>
          ))}
        </motion.div>

        {/* Skills Cards Grid with Subtle Scroll Entrance */}
        <motion.div
          style={{ opacity: cardsOpacity, y: cardsY }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#252525]/10 shadow-xs hover:border-[#252525]/30 hover:shadow-sm transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-black/5">
                <div className="w-10 h-10 rounded-xl bg-[#F5F3EA] flex items-center justify-center shrink-0">
                  {getIcon(group.category)}
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#252525]">
                  {group.category}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full bg-[#F5F3EA] border border-[#252525]/15 text-xs sm:text-sm font-mono font-medium text-[#252525] hover:bg-[#E0FD72] hover:border-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
