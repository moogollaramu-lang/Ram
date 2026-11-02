import React from 'react';
import { X, CheckCircle2, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#181818] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors focus:outline-none"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tag and Number */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-white/10 text-[#E0FD72]">
            {project.category}
          </span>
          <span className="font-mono text-xs text-neutral-500">Project {project.number}</span>
        </div>

        {/* Title */}
        <h2 id="modal-project-title" className="font-heading text-2xl sm:text-3xl font-extrabold leading-tight">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/10 text-white border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#E0FD72] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Key Features &amp; Capabilities</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-neutral-200 flex items-start gap-2"
              >
                <span className="text-[#E0FD72] font-bold">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Engineering Architecture</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
            {project.details.architecture.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0FD72] mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>Impact &amp; Results</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
            {project.details.outcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-500">
            Developer: MOOGOLLA RAMU
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#E0FD72] text-[#252525] text-xs font-bold font-mono hover:bg-[#d0ed62] transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
