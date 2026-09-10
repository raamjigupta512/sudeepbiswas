import React from 'react';
import { Users, Workflow, Cpu, Sparkles } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/executiveData';

export const TransformationPhilosophy: React.FC = () => {
  const pillarIcons = [Users, Workflow, Cpu];

  return (
    <section
      id="philosophy"
      className="relative bg-[#071A2D] text-white py-24 lg:py-28 overflow-hidden border-b border-slate-800"
    >
      {/* Background Subtle Ambience & Faint Digital Grid */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft radial glow centers */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1677D2]/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#42B8FF]/5 rounded-full blur-3xl opacity-40" />

        {/* Low-opacity technical coordinate grid */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="philosophy-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#42B8FF" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1" fill="#42B8FF" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#philosophy-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Eyebrow and Headline */}
        <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#42B8FF] uppercase mb-4">
          <span>STRATEGIC FOUNDATION</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          TRANSFORMATION IS A BUSINESS JOURNEY
        </h2>

        <p className="text-[15.5px] text-slate-300 max-w-2xl mx-auto font-light mb-16 sm:mb-20">
          Sustainable enterprise evolution succeeds only when human capability, engineering rigors, and technological innovation converge to solve concrete commercial problems.
        </p>

        {/* The 3 Pillars with Animated Connecting Circuit */}
        <div className="relative">
          {/* Animated Connecting SVG Network (Desktop) */}
          <div className="hidden lg:block absolute inset-0 -top-6 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Horizontal Stream Gradient */}
                <linearGradient id="pillar-stream-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1677D2" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#42B8FF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#1677D2" stopOpacity="0.4" />
                </linearGradient>

                {/* Vertical Convergence Stream */}
                <linearGradient id="convergence-beam" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#42B8FF" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#1677D2" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#42B8FF" stopOpacity="0.9" />
                </linearGradient>

                {/* Subtle Glow Filter */}
                <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Base Static Architecture Tracks */}
              {/* Horizontal line joining Pillar 1 (approx x=200), Pillar 2 (approx x=600), Pillar 3 (approx x=1000) */}
              <line x1="200" y1="58" x2="1000" y2="58" stroke="#1B3654" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />

              {/* Dynamic Flowing Beam: Pillar 1 to 2 */}
              <line
                x1="200"
                y1="58"
                x2="600"
                y2="58"
                stroke="url(#pillar-stream-grad)"
                strokeWidth="2"
                strokeDasharray="16 12"
                className="anim-flow-dash"
                filter="url(#soft-glow)"
                opacity="0.75"
              />

              {/* Dynamic Flowing Beam: Pillar 3 to 2 (reverse flow inward) */}
              <line
                x1="1000"
                y1="58"
                x2="600"
                y2="58"
                stroke="url(#pillar-stream-grad)"
                strokeWidth="2"
                strokeDasharray="16 12"
                className="anim-flow-dash-reverse"
                filter="url(#soft-glow)"
                opacity="0.75"
              />

              {/* Convergence Junction at Center Pillar */}
              <circle cx="600" cy="58" r="5" fill="#42B8FF" opacity="0.9" />
              <circle cx="600" cy="58" r="11" fill="none" stroke="#42B8FF" strokeWidth="1" opacity="0.4" className="animate-ping" />

              {/* Outer Junction Nodes at Pillars 1 & 3 */}
              <circle cx="200" cy="58" r="4" fill="#1677D2" opacity="0.8" />
              <circle cx="1000" cy="58" r="4" fill="#1677D2" opacity="0.8" />

              {/* Diagonal / Branching convergence lines down to the Business Value Node (x=600, y=420) */}
              {/* Central drop */}
              <line
                x1="600"
                y1="320"
                x2="600"
                y2="415"
                stroke="#1B3654"
                strokeWidth="1.5"
                opacity="0.5"
              />

              {/* Dynamic Vertical Stream to Business Value Node */}
              <line
                x1="600"
                y1="320"
                x2="600"
                y2="415"
                stroke="url(#convergence-beam)"
                strokeWidth="2.5"
                strokeDasharray="14 10"
                className="anim-stream-v"
                filter="url(#soft-glow)"
                opacity="0.85"
              />

              {/* Lateral convergence feeders from Left & Right pillars down toward the node */}
              <path
                d="M 280 320 Q 440 370 560 415"
                fill="none"
                stroke="#1E3A5F"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.4"
              />
              <path
                d="M 920 320 Q 760 370 640 415"
                fill="none"
                stroke="#1E3A5F"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.4"
              />

              {/* Low-opacity animated pulses along side feeders */}
              <path
                d="M 280 320 Q 440 370 560 415"
                fill="none"
                stroke="url(#pillar-stream-grad)"
                strokeWidth="1.5"
                strokeDasharray="8 16"
                className="anim-flow-dash-slow"
                opacity="0.55"
              />
              <path
                d="M 920 320 Q 760 370 640 415"
                fill="none"
                stroke="url(#pillar-stream-grad)"
                strokeWidth="1.5"
                strokeDasharray="8 16"
                className="anim-flow-dash-reverse"
                opacity="0.55"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => {
              const IconComp = pillarIcons[idx];
              return (
                <div
                  key={pillar.num}
                  id={`pillar-${pillar.num}`}
                  className="group bg-[#0B2239]/90 hover:bg-[#0E2C4A] border border-slate-800 hover:border-slate-700/80 p-8 sm:p-9 rounded text-left transition-all duration-300 hover:-translate-y-1 shadow-lg relative"
                >
                  {/* Subtle top indicator dot linking to connecting line */}
                  <div className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#071A2D] border border-[#42B8FF] group-hover:bg-[#42B8FF] transition-colors" />

                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#42B8FF]">
                      {pillar.num}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#071A2D] border border-slate-700/60 flex items-center justify-center text-[#42B8FF] group-hover:bg-[#1677D2] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white tracking-tight mb-3">
                    {pillar.name}
                  </h3>

                  <p className="text-[15px] font-medium text-slate-200 leading-snug mb-3">
                    {pillar.lead}
                  </p>

                  <p className="text-[13.5px] text-slate-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Convergence down to Business Value Node */}
          <div className="mt-14 sm:mt-16 flex flex-col items-center justify-center relative z-10">
            {/* Vertical connector line (Mobile & Tablet) */}
            <div className="lg:hidden w-px h-12 bg-gradient-to-b from-[#42B8FF] to-transparent opacity-80" />

            {/* Glowing Node at Bottom: BUSINESS VALUE */}
            <div className="relative group">
              {/* Outer breathing aura */}
              <div className="absolute -inset-1.5 bg-[#42B8FF]/20 rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity" />

              <div
                id="business-value-node"
                className="relative inline-flex items-center space-x-3 bg-[#0B2239] border border-[#1677D2] anim-node-glow px-8 py-3.5 rounded-full transition-all duration-300 cursor-default"
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#42B8FF] relative z-10" />
                  <div className="absolute w-5 h-5 rounded-full bg-[#42B8FF] animate-ping opacity-75" />
                </div>
                <span className="text-[12.5px] font-bold tracking-[0.25em] text-white uppercase group-hover:text-[#42B8FF] transition-colors">
                  BUSINESS VALUE
                </span>
                <Sparkles className="w-4 h-4 text-[#42B8FF] animate-pulse" />
              </div>
            </div>
            
            <p className="text-xs text-slate-400 mt-3.5 font-mono tracking-wider">
              Measurable ROI • TCO Reduction • Operational Resilience
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

