import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { createMailtoLink } from '../utils/portfolioLogic';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F3EA]/90 backdrop-blur-md border-b border-black/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          aria-label="Moogolla Ramu - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#252525] flex items-center justify-center text-[#E0FD72] font-mono text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
            &gt;_
          </div>
          <span className="font-mono text-lg font-bold tracking-tight text-[#252525] group-hover:text-black transition-colors">
            {PERSONAL_INFO.shortName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#252525]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black transition-colors hover:underline underline-offset-4 decoration-[#E0FD72] decoration-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={createMailtoLink(PERSONAL_INFO.email)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#252525] text-white text-sm font-semibold hover:bg-black hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-4 h-4 text-[#E0FD72]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#252525] hover:bg-black/5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F3EA] border-b border-black/10 px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3 font-medium text-base">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-black/5 text-[#252525] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-black/10">
            <a
              href={createMailtoLink(PERSONAL_INFO.email)}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#252525] text-white text-sm font-semibold hover:bg-black"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4 text-[#E0FD72]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
