import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Terminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'build' | 'models' | 'contact'>('build');
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCommand = (tab: 'build' | 'models' | 'contact') => {
    setIsRunning(true);
    setActiveTab(tab);
    setTimeout(() => {
      setIsRunning(false);
    }, 400);
  };

  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-none rounded-2xl bg-[#181818] text-[#e5e5e5] shadow-2xl border border-white/10 overflow-hidden font-mono text-sm">
      {/* Terminal Title Bar */}
      <div className="bg-[#202020] px-4 py-3 border-b border-white/5 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <div className="w-3 h-3 rounded-full bg-[#10B981]" />
          <span className="text-xs text-neutral-400 font-mono ml-2">ramu.py</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Python 3.12</span>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-5 sm:p-6 space-y-4 min-h-[220px]">
        {activeTab === 'build' && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#E0FD72]">
              <span className="text-neutral-500">$</span>
              <span>python -m ramu.core --build</span>
            </div>
            <p className="text-neutral-400 pl-4 text-xs sm:text-sm">
              &gt; Loading core modules (Python, SQL, Streamlit)...
            </p>
            <p className="text-neutral-400 pl-4 text-xs sm:text-sm">
              &gt; Compiling CNN architecture for crop disease detection...
            </p>
            <p className="text-emerald-400 pl-4 font-semibold text-xs sm:text-sm flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 inline shrink-0" />
              <span>Ready: Shipping reliable software solutions to production</span>
            </p>
          </div>
        )}

        {activeTab === 'models' && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#E0FD72]">
              <span className="text-neutral-500">$</span>
              <span>python -m ramu.ai --diagnose</span>
            </div>
            <p className="text-neutral-400 pl-4 text-xs sm:text-sm">
              &gt; TensorFlow 2.15 initialized. GPU/CPU acceleration enabled.
            </p>
            <p className="text-neutral-400 pl-4 text-xs sm:text-sm">
              &gt; Evaluating Convolutional Neural Network (CNN)...
            </p>
            <p className="text-emerald-400 pl-4 font-semibold text-xs sm:text-sm flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 inline shrink-0" />
              <span>Inference: Leaf crop disease classifier accurate &amp; ready</span>
            </p>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#E0FD72]">
              <span className="text-neutral-500">$</span>
              <span>cat credentials.env</span>
            </div>
            <p className="text-neutral-300 pl-4 text-xs sm:text-sm">
              DEVELOPER = &quot;{PERSONAL_INFO.name}&quot;
            </p>
            <p className="text-neutral-300 pl-4 text-xs sm:text-sm">
              EMAIL = &quot;{PERSONAL_INFO.email}&quot;
            </p>
            <p className="text-neutral-300 pl-4 text-xs sm:text-sm">
              PHONE = &quot;{PERSONAL_INFO.phone}&quot;
            </p>
            <p className="text-neutral-300 pl-4 text-xs sm:text-sm">
              LOCATION = &quot;{PERSONAL_INFO.location}&quot;
            </p>
          </div>
        )}

        {/* Blinking Prompt Line */}
        <div className="flex items-center gap-2 text-neutral-400 pt-2 border-t border-white/5">
          <span className="text-[#E0FD72]">&gt;</span>
          <span className="text-xs text-neutral-500">status: active</span>
          <span className="w-2 h-4 bg-[#E0FD72] inline-block animate-pulse ml-1" />
        </div>
      </div>

      {/* Terminal Interactive Quick Action Bar */}
      <div className="bg-[#1e1e1e] px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-xs">
        <span className="text-neutral-400 hidden sm:inline">Run test commands:</span>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={() => handleRunCommand('build')}
            className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
              activeTab === 'build'
                ? 'bg-[#E0FD72] text-[#252525] font-semibold'
                : 'bg-white/5 text-neutral-300 hover:bg-white/10'
            }`}
          >
            <Play className="w-3 h-3" />
            <span>build.py</span>
          </button>
          <button
            onClick={() => handleRunCommand('models')}
            className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
              activeTab === 'models'
                ? 'bg-[#E0FD72] text-[#252525] font-semibold'
                : 'bg-white/5 text-neutral-300 hover:bg-white/10'
            }`}
          >
            <RefreshCw className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span>models.py</span>
          </button>
          <button
            onClick={() => handleRunCommand('contact')}
            className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
              activeTab === 'contact'
                ? 'bg-[#E0FD72] text-[#252525] font-semibold'
                : 'bg-white/5 text-neutral-300 hover:bg-white/10'
            }`}
          >
            <TerminalIcon className="w-3 h-3" />
            <span>info.sh</span>
          </button>
        </div>
      </div>
    </div>
  );
};
