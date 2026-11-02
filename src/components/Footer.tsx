import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { createMailtoLink, createTelLink } from '../utils/portfolioLogic';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Skills', href: '#skills' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <footer id="contact" className="bg-[#121212] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Callout */}
        <div className="space-y-6 max-w-4xl">
          <p className="font-mono text-sm font-semibold text-[#E0FD72] tracking-wider uppercase">
            // contact
          </p>

          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Let&apos;s build something{' '}
            <mark className="bg-[#E0FD72] text-[#121212] px-3 sm:px-4 py-0.5 rounded-lg inline-block my-1">
              together.
            </mark>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            I&apos;m seeking opportunities as a Python Developer and AI/ML Engineer. Whether you have an open role, an interesting project, or just want to connect—my inbox is open.
          </p>

          {/* Interactive Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={createMailtoLink(
                PERSONAL_INFO.email,
                'Opportunity / Project for Python Developer',
                'Hi Ramu,\n\nI reviewed your portfolio and would like to discuss an opportunity / project.\n\nBest regards,'
              )}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#E0FD72] text-[#121212] font-heading font-bold text-sm sm:text-base hover:bg-[#d0ed62] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-white/10 text-white font-mono text-sm hover:bg-white/20 transition-all border border-white/10 focus:outline-none"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#E0FD72]" />
                  <span className="text-[#E0FD72] font-semibold">Email copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy email</span>
                </>
              )}
            </button>

            <a
              href={createTelLink(PERSONAL_INFO.phone)}
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-transparent text-neutral-300 font-mono text-sm hover:text-white hover:bg-white/5 transition-all border border-white/15"
            >
              <Phone className="w-4 h-4 text-[#E0FD72]" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#E0FD72]">
              <Mail className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">Email</span>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="font-mono text-sm sm:text-base text-white hover:text-[#E0FD72] transition-colors block break-all"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#E0FD72]">
              <Phone className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">Phone</span>
            </div>
            <a
              href={createTelLink(PERSONAL_INFO.phone)}
              className="font-mono text-sm sm:text-base text-white hover:text-[#E0FD72] transition-colors block"
            >
              {PERSONAL_INFO.phone}
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#E0FD72]">
              <MapPin className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">Location</span>
            </div>
            <p className="font-mono text-sm sm:text-base text-white">
              {PERSONAL_INFO.location}
            </p>
          </div>
        </div>

        {/* Bottom Navigation & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-[#252525] border border-white/20 flex items-center justify-center text-[#E0FD72] font-bold text-xs">
              &gt;_
            </div>
            <span>© 2026 {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
