import React from 'react';
import { EDUCATION_DATA, INTERNSHIPS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Award, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

export const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-20 lg:py-28 bg-[#F3EA9A] text-[#252525] border-y border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 space-y-3">
          <p className="font-mono text-sm font-semibold text-[#252525]/75 tracking-wider uppercase">
            // highlights
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#252525] tracking-tight">
            Beyond the code.
          </h2>
          <p className="text-[#252525]/80 text-base sm:text-lg max-w-2xl">
            Education, government-certified internships, and accredited technical certifications.
          </p>
        </div>

        {/* 4 Cards Grid matching reference */}
        <div className="space-y-6 sm:space-y-8">
          {/* CARD 1: Education */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F3EA]/90 border border-black/15 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Stat Callout */}
              <div className="md:col-span-3 lg:col-span-3 border-b md:border-b-0 md:border-r border-black/15 pb-4 md:pb-0 md:pr-6">
                <span className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#252525] tracking-tight block">
                  {EDUCATION_DATA.percentage}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#252525]/70 block mt-1">
                  Overall B.Tech Score
                </span>
              </div>

              {/* Main Content */}
              <div className="md:col-span-9 lg:col-span-9 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#252525]">
                    {EDUCATION_DATA.degree} — {EDUCATION_DATA.branch}
                  </h3>
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-black/5 border border-black/10">
                    {EDUCATION_DATA.duration}
                  </span>
                </div>

                <p className="font-mono text-sm font-medium text-[#252525]/85">
                  {EDUCATION_DATA.institution}, {EDUCATION_DATA.location}
                </p>

                <p className="text-sm sm:text-base text-[#252525]/80 leading-relaxed">
                  Graduated with a strong foundation in Python programming, Artificial Intelligence, Machine Learning, Deep Learning, and database technologies. Successfully balanced coursework, laboratory work, and technical projects.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2: NIELIT Internship */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F3EA]/90 border border-black/15 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Stat Callout */}
              <div className="md:col-span-3 lg:col-span-3 border-b md:border-b-0 md:border-r border-black/15 pb-4 md:pb-0 md:pr-6">
                <span className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#252525] tracking-tight block">
                  6 Months
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#252525]/70 block mt-1">
                  Govt. Certified AI/ML
                </span>
              </div>

              {/* Main Content */}
              <div className="md:col-span-9 lg:col-span-9 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#252525]">
                    {INTERNSHIPS_DATA[0].role}
                  </h3>
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-800 border border-emerald-600/20">
                    {INTERNSHIPS_DATA[0].duration}
                  </span>
                </div>

                <p className="font-mono text-sm font-medium text-[#252525]/85">
                  {INTERNSHIPS_DATA[0].organization}
                </p>

                <ul className="space-y-2 text-sm sm:text-base text-[#252525]/85 leading-relaxed">
                  {INTERNSHIPS_DATA[0].description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-black font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CARD 3: Summer Internship */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F3EA]/90 border border-black/15 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Stat Callout */}
              <div className="md:col-span-3 lg:col-span-3 border-b md:border-b-0 md:border-r border-black/15 pb-4 md:pb-0 md:pr-6">
                <span className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#252525] tracking-tight block">
                  Summer &apos;25
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#252525]/70 block mt-1">
                  Skill Training
                </span>
              </div>

              {/* Main Content */}
              <div className="md:col-span-9 lg:col-span-9 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#252525]">
                    {INTERNSHIPS_DATA[1].role}
                  </h3>
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-black/5 border border-black/10">
                    {INTERNSHIPS_DATA[1].duration}
                  </span>
                </div>

                <p className="font-mono text-sm font-medium text-[#252525]/85">
                  {INTERNSHIPS_DATA[1].organization}
                </p>

                <ul className="space-y-2 text-sm sm:text-base text-[#252525]/85 leading-relaxed">
                  {INTERNSHIPS_DATA[1].description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-black font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CARD 4: Accredited Certifications */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F5F3EA]/90 border border-black/15 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Stat Callout */}
              <div className="md:col-span-3 lg:col-span-3 border-b md:border-b-0 md:border-r border-black/15 pb-4 md:pb-0 md:pr-6">
                <span className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#252525] tracking-tight block">
                  5 Badges
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#252525]/70 block mt-1">
                  Accredited Credentials
                </span>
              </div>

              {/* Main Content */}
              <div className="md:col-span-9 lg:col-span-9 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#252525]">
                    Professional Certifications
                  </h3>
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-black/5 border border-black/10">
                    Verified
                  </span>
                </div>

                <p className="text-sm text-[#252525]/80">
                  Completed accredited certifications from leading educational and technical institutions:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {CERTIFICATIONS_DATA.map((cert, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-2xl bg-white border border-black/10 flex items-start gap-2.5 shadow-xs"
                    >
                      <Award className="w-4 h-4 text-[#252525] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-[#252525]">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
