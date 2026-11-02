import React, { useState } from 'react';
import { ArrowUpRight, Check, Eye, Sparkles, Activity, Cpu, ShieldCheck } from 'lucide-react';
import { PROJECTS_DATA, type Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Crop diagnosis simulation state
  const [selectedCrop, setSelectedCrop] = useState<'tomato' | 'corn' | 'potato'>('tomato');
  const [isScanning, setIsScanning] = useState(false);

  // Smart dustbin simulation state
  const [proximityDistance, setProximityDistance] = useState<number>(14);
  const isLidOpen = proximityDistance <= 20;

  const handleRunCropScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 600);
  };

  const cropSamples = {
    tomato: {
      name: 'Tomato Leaf Sample #A4',
      disease: 'Early Blight (Alternaria solani)',
      confidence: '98.6%',
      status: 'Infected',
      treatment: 'Copper fungicide spray or organic neem oil extract',
    },
    corn: {
      name: 'Corn Leaf Sample #B1',
      disease: 'Common Rust (Puccinia sorghi)',
      confidence: '96.2%',
      status: 'Infected',
      treatment: 'Foliar fungicide application and balanced irrigation',
    },
    potato: {
      name: 'Potato Leaf Sample #C7',
      disease: 'Healthy / No Pathogen Detected',
      confidence: '99.4%',
      status: 'Healthy',
      treatment: 'Optimal leaf vigor; continue routine monitoring',
    },
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#121212] text-white bg-grid-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 space-y-3">
          <p className="font-mono text-sm font-semibold text-[#E0FD72] tracking-wider uppercase">
            // selected work
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Things I&apos;ve{' '}
            <mark className="bg-[#E0FD72] text-[#121212] px-3 py-0.5 rounded-lg inline-block">
              built
            </mark>
            .
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl">
            Practical applications, from crop disease diagnosis with deep learning to IoT automation.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12 sm:space-y-16">
          {/* PROJECT 1: AI-Driven Crop Disease Detection */}
          {PROJECTS_DATA[0] && (
            <article
              className="relative rounded-3xl sm:rounded-[32px] bg-[#1a1a1a]/95 border border-[#2c2c2c] p-6 sm:p-10 lg:p-12 overflow-hidden transition-all duration-300 hover:border-neutral-600"
              style={{
                boxShadow: 'rgba(34, 197, 94, 0.35) 0px -20px 60px -30px',
              }}
            >
              {/* Large Watermark Number */}
              <div
                className="absolute top-4 right-8 font-heading font-black text-7xl sm:text-9xl text-white/[0.04] select-none pointer-events-none"
                aria-hidden="true"
              >
                01
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Left Info Column */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {PROJECTS_DATA[0].category}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
                    {PROJECTS_DATA[0].title}
                  </h3>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {PROJECTS_DATA[0].description}
                  </p>

                  {/* Highlighted Features */}
                  <div className="space-y-2 pt-1">
                    {PROJECTS_DATA[0].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {PROJECTS_DATA[0].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(PROJECTS_DATA[0])}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E0FD72] text-[#121212] font-semibold text-xs sm:text-sm hover:bg-[#d0ed62] transition-colors focus:outline-none"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Architecture &amp; Details</span>
                    </button>
                    <span className="text-xs font-mono text-neutral-400">
                      Interactive Simulator on right →
                    </span>
                  </div>
                </div>

                {/* Right Interactive Mockup: Streamlit Crop Scanner */}
                <div className="lg:col-span-6">
                  <div className="w-full rounded-2xl bg-[#141414] border border-white/10 overflow-hidden shadow-2xl">
                    {/* Browser Address Bar */}
                    <div className="bg-[#1f1f1f] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        <span className="text-xs font-mono text-neutral-400 ml-2">
                          crop-disease-ai.streamlit.app
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        CNN Live
                      </span>
                    </div>

                    {/* App Mock Interface */}
                    <div className="p-5 sm:p-6 space-y-4 font-sans text-xs sm:text-sm">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-emerald-400" />
                          <span className="font-semibold text-white">Smart Farming Diagnostic</span>
                        </div>
                        <span className="text-[11px] font-mono text-neutral-400">Model: CNN v2</span>
                      </div>

                      {/* Sample Selector */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono text-neutral-400">
                          Select Sample Leaf Image:
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {(['tomato', 'corn', 'potato'] as const).map((crop) => (
                            <button
                              key={crop}
                              onClick={() => {
                                setSelectedCrop(crop);
                                handleRunCropScan();
                              }}
                              className={`py-1.5 px-2 rounded-lg text-xs font-mono text-center capitalize transition-colors ${
                                selectedCrop === crop
                                  ? 'bg-emerald-500 text-black font-bold'
                                  : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                              }`}
                            >
                              {crop} Leaf
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Scanner Visual Frame */}
                      <div className="relative rounded-xl bg-black/60 border border-emerald-500/30 p-4 space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-neutral-300 font-mono">
                            {cropSamples[selectedCrop].name}
                          </span>
                          <span className="font-mono text-emerald-400 font-bold">
                            {cropSamples[selectedCrop].confidence}
                          </span>
                        </div>

                        {/* Scanner Beam Animation */}
                        {isScanning ? (
                          <div className="py-6 text-center space-y-2">
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-400 animate-pulse w-3/4 rounded-full" />
                            </div>
                            <span className="text-xs font-mono text-emerald-300">
                              Running CNN Feature Extraction...
                            </span>
                          </div>
                        ) : (
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between">
                              <span className="text-neutral-400 text-xs">Detected Diagnosis:</span>
                              <span className="font-semibold text-emerald-300 text-xs sm:text-sm">
                                {cropSamples[selectedCrop].disease}
                              </span>
                            </div>

                            <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-neutral-300 text-xs">
                              <span className="font-mono text-[10px] text-emerald-400 block uppercase font-bold mb-0.5">
                                Recommended Advisory:
                              </span>
                              {cropSamples[selectedCrop].treatment}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between items-center text-[11px] text-neutral-400 font-mono">
                        <span>Modules: Encyclopedia · Govt Schemes · Advisory</span>
                        <button
                          onClick={handleRunCropScan}
                          className="text-emerald-400 hover:underline flex items-center gap-1"
                        >
                          <span>Re-analyze</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* PROJECT 2: Smart Dustbin with Automatic Lid Opening */}
          {PROJECTS_DATA[1] && (
            <article
              className="relative rounded-3xl sm:rounded-[32px] bg-[#1a1a1a]/95 border border-[#2c2c2c] p-6 sm:p-10 lg:p-12 overflow-hidden transition-all duration-300 hover:border-neutral-600"
              style={{
                boxShadow: 'rgba(59, 130, 246, 0.35) 0px -20px 60px -30px',
              }}
            >
              {/* Large Watermark Number */}
              <div
                className="absolute top-4 right-8 font-heading font-black text-7xl sm:text-9xl text-white/[0.04] select-none pointer-events-none"
                aria-hidden="true"
              >
                02
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Left Info Column */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/15 text-blue-400 border border-blue-500/30">
                      {PROJECTS_DATA[1].category}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
                    {PROJECTS_DATA[1].title}
                  </h3>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {PROJECTS_DATA[1].description}
                  </p>

                  {/* Highlighted Features */}
                  <div className="space-y-2 pt-1">
                    {PROJECTS_DATA[1].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {PROJECTS_DATA[1].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(PROJECTS_DATA[1])}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E0FD72] text-[#121212] font-semibold text-xs sm:text-sm hover:bg-[#d0ed62] transition-colors focus:outline-none"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Sensors &amp; Schematics</span>
                    </button>
                    <span className="text-xs font-mono text-neutral-400">
                      Sensor Simulator on right →
                    </span>
                  </div>
                </div>

                {/* Right Interactive Mockup: Smart Dustbin Telemetry */}
                <div className="lg:col-span-6">
                  <div className="w-full rounded-2xl bg-[#141414] border border-white/10 overflow-hidden shadow-2xl">
                    {/* Device Bar */}
                    <div className="bg-[#1f1f1f] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        <span className="text-xs font-mono text-neutral-400 ml-2">
                          smart-dustbin.sensor-hub
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        Hardware Active
                      </span>
                    </div>

                    {/* Sensor Telemetry Box */}
                    <div className="p-5 sm:p-6 space-y-5 font-sans text-xs sm:text-sm">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-blue-400" />
                          <span className="font-semibold text-white">Ultrasonic / Servo Telemetry</span>
                        </div>
                        <span className="text-[11px] font-mono text-neutral-400">Threshold: &le; 20cm</span>
                      </div>

                      {/* Interactive Proximity Distance Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-neutral-400">Test Object Proximity:</span>
                          <span className="text-blue-400 font-bold">{proximityDistance} cm</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="50"
                          value={proximityDistance}
                          onChange={(e) => setProximityDistance(Number(e.target.value))}
                          className="w-full accent-blue-500 cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                          <span>5cm (Close)</span>
                          <span>20cm (Trigger)</span>
                          <span>50cm (Far)</span>
                        </div>
                      </div>

                      {/* Real-time State Display */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                          <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                            Servo Motor
                          </span>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2.5 h-2.5 rounded-full ${
                                isLidOpen ? 'bg-blue-400 animate-pulse' : 'bg-neutral-600'
                              }`}
                            />
                            <span className="font-bold text-sm text-white">
                              {isLidOpen ? '90° (Open)' : '0° (Closed)'}
                            </span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                          <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                            Touchless Status
                          </span>
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span className="font-bold text-sm text-white">
                              {isLidOpen ? 'Depositing Waste' : 'Standby / Clean'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-900/40 text-neutral-300 text-xs flex items-center justify-between">
                        <span>Lid State:</span>
                        <span
                          className={`font-mono font-bold px-2.5 py-0.5 rounded ${
                            isLidOpen
                              ? 'bg-blue-500 text-black'
                              : 'bg-white/10 text-neutral-300'
                          }`}
                        >
                          {isLidOpen ? 'LID AUTOMATICALLY OPENED' : 'LID CLOSED & SEALED'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>

      {/* Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
