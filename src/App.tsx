import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Highlights } from './components/Highlights';
import { Skills } from './components/Skills';
import { Faqs } from './components/Faqs';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F3EA] text-[#252525] selection:bg-[#E0FD72] selection:text-[#252525] overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Blobs, Status, Big Heading, Intro, and Terminal */}
        <Hero />

        {/* 2. Full-bleed Animated Technologies Marquee */}
        <Marquee />

        {/* 3. About Section with Developer Card and Career Objectives */}
        <About />

        {/* 4. Selected Work Projects with Deep Dark Theme and Mockups */}
        <Projects />

        {/* 5. Services Section: What I Can Build */}
        <Services />

        {/* 6. Highlights: Education, NIELIT & Summer Internships, Certifications */}
        <Highlights />

        {/* 7. Comprehensive Technical Skills Matrix */}
        <Skills />

        {/* 8. FAQs Accordion */}
        <Faqs />
      </main>

      {/* 9. Contact Section and Footer with Interactive Actions */}
      <Footer />
    </div>
  );
}
