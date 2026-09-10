import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { EXECUTIVE_INFO, HERO_CREDIBILITY } from '../data/executiveData';
import { ExecutivePortrait } from './ExecutivePortrait';

interface HeroProps {
  onOpenProfile: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProfile }) => {
  return (
    <section
      id="home"
      className="relative bg-[#071A2D] text-white overflow-hidden min-h-[640px] lg:min-h-[680px] xl:min-h-[720px] flex items-center border-b border-slate-800/80"
    >
      {/* Background Architectural Canvas: Global Digital Map, Connected Nodes, Logistics Lines */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Deep atmospheric glow */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#1677D2]/15 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#42B8FF]/10 rounded-full blur-3xl opacity-40" />

        {/* Global Network SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-[0.09]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#42B8FF" strokeWidth="0.5" opacity="0.3" />
            </pattern>
            <linearGradient id="stream-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#42B8FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1677D2" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Faint coordinate grid */}
          <rect width="100%" height="100%" fill="url(#hero-grid)" />

          {/* Continents faint geometry outlines */}
          <path
            d="M220,180 Q320,140 420,220 T620,260 T820,180 T1040,240 T1280,190"
            fill="none"
            stroke="#42B8FF"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            className="animate-pulse"
            style={{ animationDuration: '6s' }}
          />
          <path
            d="M180,320 Q360,390 560,340 T840,400 T1120,350 T1360,420"
            fill="none"
            stroke="#1677D2"
            strokeWidth="1"
            strokeDasharray="2 4"
          />

          {/* Trade / Shipping logistics arcs connecting global nodes */}
          <path d="M 310,250 Q 560,110 880,340" fill="none" stroke="url(#stream-gradient)" strokeWidth="1.5" />
          <path d="M 520,220 Q 720,80 940,360" fill="none" stroke="url(#stream-gradient)" strokeWidth="1.2" />
          <path d="M 880,340 Q 1050,440 1200,320" fill="none" stroke="url(#stream-gradient)" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Pulsing global node anchors */}
          {[
            [310, 250, 'North America Hub'],
            [520, 220, 'Europe HQ Logistics'],
            [880, 340, 'Bengaluru Technology Center'],
            [940, 360, 'Asia-Pacific Operations'],
            [1200, 320, 'Global Delivery Node']
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="4" fill="#42B8FF" />
              <circle cx={cx} cy={cy} r="10" fill="none" stroke="#42B8FF" strokeWidth="0.8" opacity="0.5" />
            </g>
          ))}
        </svg>

        {/* Faint subtle horizon divider */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#42B8FF]/20 to-transparent" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: ~55% (lg:col-span-7) ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 text-[10.5px] sm:text-[11.5px] tracking-[0.28em] font-semibold text-slate-400 uppercase mb-4 sm:mb-5">
              <span>{EXECUTIVE_INFO.heroEyebrow}</span>
            </div>

            {/* Main Heading: Sudeep Biswas (72–84px on desktop) */}
            <h1
              id="hero-name-heading"
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-bold text-white tracking-tight leading-[1.02] mb-4 sm:mb-5"
            >
              {EXECUTIVE_INFO.heroHeadline}
            </h1>

            {/* Subheadline and highlighted line */}
            <div className="space-y-1 mb-5 sm:mb-6">
              <p className="text-xl sm:text-2xl lg:text-[25px] font-medium text-slate-200 tracking-tight">
                {EXECUTIVE_INFO.heroSubheadline}
              </p>
              <p className="text-xl sm:text-2xl lg:text-[25px] font-semibold text-[#42B8FF] tracking-tight">
                {EXECUTIVE_INFO.heroHighlight}
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-[15.5px] sm:text-[16.5px] text-slate-300 leading-relaxed max-w-2xl font-light mb-8 sm:mb-9">
              {EXECUTIVE_INFO.heroBio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12">
              <button
                onClick={onOpenProfile}
                id="hero-download-profile-btn"
                className="inline-flex items-center space-x-2.5 bg-[#1677D2] hover:bg-[#1264b3] text-white text-[14px] font-semibold px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#1677D2]/25"
              >
                <span>Download Executive Profile</span>
                <Download className="w-4 h-4 text-white" />
              </button>

              <a
                href={EXECUTIVE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-btn"
                className="inline-flex items-center space-x-2 text-[14px] font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 px-5 py-3.5 rounded transition-all duration-200 hover:border-slate-500"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-4 h-4 text-[#42B8FF]" />
              </a>
            </div>

            {/* Executive Credibility Strip (4 metrics) */}
            <div
              id="hero-credibility-strip"
              className="pt-6 border-t border-slate-800/90 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
            >
              {HERO_CREDIBILITY.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-[11.5px] font-medium text-slate-400 mt-1 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: ~45% (lg:col-span-5) ================= */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-end self-end mt-4 lg:mt-0">
            
            {/* Vertical Editorial Statement (Near upper right) */}
            <div
              className="hidden sm:block absolute top-0 -right-2 sm:right-2 z-20 text-right pointer-events-none select-none opacity-80"
              aria-hidden="true"
            >
              <div className="flex flex-col text-[10.5px] tracking-[0.3em] font-bold text-slate-400 uppercase leading-[1.6]">
                <span className="text-[#42B8FF]">PEOPLE</span>
                <span>PROCESS</span>
                <span>TECHNOLOGY</span>
                <span className="text-white mt-1 pt-1 border-t border-slate-700/60 font-semibold tracking-[0.25em]">
                  A STRONGER
                </span>
                <span className="text-[#42B8FF]">TOMORROW</span>
              </div>
            </div>

            {/* Executive Portrait Frame */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[450px] aspect-[3/4] flex items-end justify-center">
              {/* Cinematic Blue Rim-Light Radial Gradient Overlays Behind Portrait */}
              {/* 1. Expansive atmospheric blue halo extending into the dark background */}
              <div
                className="absolute -inset-8 sm:-inset-12 pointer-events-none rounded-full filter blur-3xl opacity-85 select-none"
                style={{
                  background:
                    'radial-gradient(ellipse 95% 85% at 50% 36%, rgba(66, 184, 255, 0.38) 0%, rgba(22, 119, 210, 0.26) 36%, rgba(10, 43, 76, 0.15) 62%, transparent 84%)',
                }}
                aria-hidden="true"
              />

              {/* 2. Focused cinematic rim-light overlay outlining the executive silhouette */}
              <div
                className="absolute -inset-3 sm:-inset-5 pointer-events-none rounded-3xl filter blur-xl sm:blur-2xl opacity-90 select-none"
                style={{
                  background:
                    'radial-gradient(ellipse 76% 68% at 50% 34%, rgba(66, 184, 255, 0.5) 0%, rgba(22, 119, 210, 0.32) 38%, rgba(7, 26, 45, 0) 72%)',
                }}
                aria-hidden="true"
              />

              {/* 3. Dynamic directional rim-light kick on upper-left head and shoulder contour */}
              <div
                className="absolute top-2 left-0 w-52 sm:w-64 h-52 sm:h-64 pointer-events-none rounded-full filter blur-2xl opacity-70 select-none"
                style={{
                  background:
                    'radial-gradient(circle at 42% 42%, rgba(66, 184, 255, 0.45) 0%, rgba(22, 119, 210, 0.22) 48%, transparent 75%)',
                }}
                aria-hidden="true"
              />

              {/* Portrait Image with dark bottom & side gradients for executive blend */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-t-lg">
                <ExecutivePortrait
                  defaultSrc="/1516228066078.jpeg"
                  altText="Sudeep Biswas - Vice President at ITC Infotech, Technology Leader & Transformation Partner"
                />
                {/* Soft outer radial gradient vignette over the frame */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 90% 92% at 50% 45%, transparent 56%, rgba(7, 26, 45, 0.4) 82%, #071A2D 100%)',
                  }}
                />
              </div>

              {/* Subtle Translucent Quote Box (Near lower portion) */}
              <div className="absolute -bottom-4 sm:bottom-4 left-2 right-2 sm:-left-6 sm:right-6 z-20 bg-[#0B2239]/85 backdrop-blur-md border border-slate-700/80 p-4 sm:p-4.5 rounded shadow-2xl transition-transform hover:-translate-y-1">
                <p className="font-serif italic text-[13.5px] sm:text-[14px] text-slate-200 leading-snug">
                  “Transformation is not just about technology. It’s about people, purpose and lasting impact.”
                </p>
                <div className="mt-2 flex items-center justify-between border-t border-slate-700/60 pt-1.5">
                  <span className="text-[11px] font-semibold text-[#42B8FF] tracking-wider uppercase">
                    — Sudeep Biswas
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                    Vice President
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
