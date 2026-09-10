import React, { useEffect, useState } from 'react';
import { Download, ArrowRight, ExternalLink } from 'lucide-react';
import { EXECUTIVE_INFO } from '../data/executiveData';
import { ExecutivePortrait } from './ExecutivePortrait';

interface HeroProps {
  onOpenProfile: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProfile }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [portraitLoaded, setPortraitLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
    };
    window.addEventListener('scroll', handleScroll, { once: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-[#071A2D] text-white overflow-hidden min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] flex flex-col justify-between border-b border-slate-800/80"
    >
      {/* Background Architectural Canvas: Transformation Environment (5–12% opacity) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Subtle Atmospheric Radiance */}
        <div className="absolute -top-40 -left-40 w-[640px] h-[640px] bg-[#1677D2]/12 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/4 right-1/4 w-[540px] h-[540px] bg-[#42B8FF]/10 rounded-full blur-3xl opacity-50" />

        {/* Diagonal Architectural Shape (Extremely subtle, 6% opacity) */}
        <div
          className="absolute -top-24 right-0 w-[55%] h-[120%] bg-gradient-to-bl from-[#102E46]/30 via-[#0B2239]/15 to-transparent transform -skew-x-12 pointer-events-none"
        />

        {/* Global Digital Network, Routes, & Coordinate Grid */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 760"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="hero-grid-matrix" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#42B8FF" strokeWidth="0.5" opacity="0.3" />
            </pattern>
            <linearGradient id="corridor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#42B8FF" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#1677D2" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#42B8FF" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Coordinate grid */}
          <rect width="100%" height="100%" fill="url(#hero-grid-matrix)" />

          {/* Global geometric arcs & shipping logistics lines */}
          <path
            d="M 180,260 Q 480,100 880,360"
            fill="none"
            stroke="url(#corridor-gradient)"
            strokeWidth="1.5"
          />
          <path
            d="M 460,200 Q 720,70 1020,380"
            fill="none"
            stroke="url(#corridor-gradient)"
            strokeWidth="1.2"
          />
          <path
            d="M 880,360 Q 1060,460 1280,310"
            fill="none"
            stroke="url(#corridor-gradient)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />

          {/* Strategic enterprise anchors */}
          {[
            [260, 240, 'Americas Enterprise Hub'],
            [540, 190, 'Europe Logistics Node'],
            [880, 360, 'Bengaluru Technology Center'],
            [980, 410, 'Asia-Pacific Core'],
            [1220, 290, 'Global Delivery Node'],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="3.5" fill="#42B8FF" />
              <circle cx={cx} cy={cy} r="10" fill="none" stroke="#42B8FF" strokeWidth="0.7" opacity="0.5" />
            </g>
          ))}
        </svg>

        {/* Subtle horizon divider line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#42B8FF]/20 to-transparent" />
      </div>

      {/* Main Hero Grid Content: 55/45 Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-12 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-12 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* ================= LEFT COLUMN: ~55% CONTENT (lg:col-span-7) ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left pr-0 lg:pr-4">
            
            {/* Eyebrow: STRATEGY / TRANSFORMATION / PEOPLE / IMPACT */}
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-slate-400 uppercase mb-4 sm:mb-5">
              <span>STRATEGY &nbsp;/&nbsp; TRANSFORMATION &nbsp;/&nbsp; PEOPLE &nbsp;/&nbsp; IMPACT</span>
            </div>

            {/* Large Editorial Serif Masthead: Sudeep Biswas (72–84px on desktop) */}
            <h1
              id="hero-name-heading"
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-bold text-white tracking-tight leading-[1.02] mb-4 sm:mb-5"
            >
              {EXECUTIVE_INFO.name}
            </h1>

            {/* Underneath: Technology Leader. Transformation Partner. */}
            <div className="space-y-1 mb-4 sm:mb-5">
              <p className="text-xl sm:text-2xl lg:text-[26px] font-medium text-slate-200 tracking-tight">
                Technology Leader. Transformation Partner.
              </p>
              {/* Highlight: Enabling a Smarter, More Resilient Tomorrow. */}
              <p className="text-xl sm:text-2xl lg:text-[26px] font-semibold tracking-tight text-white">
                Enabling a <span className="text-[#42B8FF]">Smarter, More Resilient Tomorrow.</span>
              </p>
            </div>

            {/* Supporting Copy (~3 lines, clean, no massive paragraph) */}
            <p className="text-[15.5px] sm:text-[16.5px] text-slate-300 leading-relaxed max-w-2xl font-light mb-8 sm:mb-9">
              Nearly three decades of experience helping global enterprises simplify digital transformation — enabling predictable, resilient, and customer-centric SAP ecosystems that drive measurable business value.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenProfile}
                id="hero-download-profile-btn"
                className="inline-flex items-center space-x-2.5 bg-[#1677D2] hover:bg-[#1264b3] text-white text-[13.5px] font-semibold px-6 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#1677D2]/25 cursor-pointer"
              >
                <span>DOWNLOAD EXECUTIVE PROFILE</span>
                <Download className="w-4 h-4 text-white" />
              </button>

              <a
                href={EXECUTIVE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-btn"
                className="inline-flex items-center space-x-2 text-[13.5px] font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 px-5 py-3.5 rounded transition-all duration-200"
              >
                <span>CONNECT ON LINKEDIN</span>
                <ArrowRight className="w-4 h-4 text-[#42B8FF]" />
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: ~45% PORTRAIT & EDITORIAL (lg:col-span-5) ================= */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-end mt-8 lg:mt-0">
            
            {/* Right-Side Editorial Statement Annotation (Consulting report style, placed in top-right negative space) */}
            <div
              className="hidden md:block absolute -top-8 right-2 z-20 text-right pointer-events-none select-none"
              aria-hidden="true"
            >
              <div className="flex flex-col text-[10px] font-mono tracking-[0.28em] text-slate-400 uppercase leading-[1.65]">
                <span className="text-[#42B8FF] font-semibold">PEOPLE</span>
                <span>PROCESS</span>
                <span>TECHNOLOGY</span>
                <div className="mt-1 pt-1 border-t border-slate-700/60 flex flex-col">
                  <span className="text-slate-300 font-medium">A STRONGER</span>
                  <span className="text-[#42B8FF] font-semibold">TOMORROW.</span>
                </div>
              </div>
            </div>

            {/* Portrait Composition Frame (Sudeep naturally emerging from the navy environment) */}
            <div
              className="relative w-full max-w-[320px] sm:max-w-[370px] md:max-w-[400px] lg:max-w-[430px] xl:max-w-[460px] aspect-square flex items-end justify-center"
              style={{ aspectRatio: '1 / 1' }}
            >
              {/* ================= LAYER 2: SUBTLE GLOBAL TECHNOLOGY & STUDIO LIGHTING ================= */}
              
              {/* Primary Studio Separation Light (Soft cool blue backlight behind left shoulder/upper torso) */}
              <div
                className="absolute -inset-10 pointer-events-none rounded-full filter blur-3xl opacity-80 select-none"
                style={{
                  background:
                    'radial-gradient(circle at 38% 44%, rgba(66, 184, 255, 0.28) 0%, rgba(22, 119, 210, 0.16) 42%, rgba(7, 26, 45, 0.08) 68%, transparent 85%)',
                }}
                aria-hidden="true"
              />

              {/* Edge Rim Light along shoulders & jacket contour */}
              <div
                className="absolute top-2 -left-4 w-56 h-56 pointer-events-none rounded-full filter blur-2xl opacity-60 select-none"
                style={{
                  background:
                    'radial-gradient(circle at 45% 45%, rgba(66, 184, 255, 0.35) 0%, rgba(22, 119, 210, 0.18) 45%, transparent 75%)',
                }}
                aria-hidden="true"
              />

              {/* Subtle Architectural Geometry & Global Network Lines (Low opacity, executive boardroom style) */}
              <div
                className="absolute inset-0 pointer-events-none select-none opacity-40"
                aria-hidden="true"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Concentric Architectural Radar Rings */}
                  <circle cx="180" cy="180" r="160" stroke="#42B8FF" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.45" />
                  <circle cx="180" cy="180" r="115" stroke="#1677D2" strokeWidth="0.5" opacity="0.35" />
                  <circle cx="180" cy="180" r="70" stroke="#42B8FF" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.25" />

                  {/* Coordinate Alignment Crosshairs */}
                  <line x1="20" y1="180" x2="340" y2="180" stroke="#42B8FF" strokeWidth="0.5" strokeDasharray="2 8" opacity="0.25" />
                  <line x1="180" y1="20" x2="180" y2="340" stroke="#42B8FF" strokeWidth="0.5" strokeDasharray="2 8" opacity="0.25" />

                  {/* Global Delivery Hub Nodes & Arcs */}
                  <path d="M 60,120 Q 180,60 300,140" stroke="#42B8FF" strokeWidth="0.8" opacity="0.3" fill="none" />
                  <path d="M 90,260 Q 210,320 330,240" stroke="#1677D2" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.3" fill="none" />
                  <circle cx="60" cy="120" r="2.5" fill="#42B8FF" opacity="0.6" />
                  <circle cx="300" cy="140" r="2.5" fill="#42B8FF" opacity="0.6" />
                  <circle cx="90" cy="260" r="2" fill="#42B8FF" opacity="0.5" />
                  <circle cx="330" cy="240" r="2" fill="#42B8FF" opacity="0.5" />
                </svg>
              </div>

              {/* ================= LAYER 3: REAL SUDEEP PORTRAIT (EXTRACTED, ZERO WHITE BOX) ================= */}
              <div
                className="relative z-10 w-full h-full aspect-square overflow-hidden"
                style={{ aspectRatio: '1 / 1' }}
              >
                <ExecutivePortrait
                  defaultSrc="/sudeep_extracted.png"
                  altText="Sudeep Biswas - Vice President at ITC Infotech, Technology Leader & Transformation Partner"
                  onLoadedChange={setPortraitLoaded}
                />
              </div>

              {/* Minimal Editorial Pull-Quote (Refined without heavy card appearance, thin vertical accent) */}
              <div
                className={`absolute -bottom-4 sm:-bottom-2 right-0 left-2 sm:left-auto sm:max-w-[330px] z-20 bg-[#071A2D]/75 backdrop-blur-sm border-l-2 border-[#42B8FF] pl-3.5 pr-3 py-2 transition-all duration-700 ease-out ${
                  portraitLoaded ? 'opacity-100 translate-y-0' : 'opacity-85 translate-y-1'
                }`}
              >
                <p className="font-serif italic text-[12.5px] sm:text-[13px] text-slate-200 leading-snug">
                  “Transformation is not just about technology. It's about people, purpose and lasting impact.”
                </p>
                <div className="mt-1 flex items-center space-x-2 text-[10px] tracking-wider uppercase font-mono">
                  <span className="text-[#42B8FF] font-semibold">— Sudeep Biswas</span>
                  <span className="text-slate-400">/ Vice President</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Executive Proof Strip: 4 Editorial Statistics with Thin Vertical Dividers (Hero Bottom) */}
      <div
        id="hero-proof-strip"
        className="relative z-20 w-full border-t border-slate-800/90 bg-[#051524]/75 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 lg:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            {/* Proof Point 1 */}
            <div className="py-2 sm:py-0 px-2 sm:px-6 first:pl-0 flex flex-col justify-center">
              <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none">
                3 DECADES
              </span>
              <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 mt-1.5 uppercase tracking-wider">
                Experience
              </span>
            </div>

            {/* Proof Point 2 */}
            <div className="py-2 sm:py-0 px-2 sm:px-6 flex flex-col justify-center">
              <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none">
                650+
              </span>
              <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 mt-1.5 uppercase tracking-wider">
                SAP Consultants Led
              </span>
            </div>

            {/* Proof Point 3 */}
            <div className="py-2 sm:py-0 px-2 sm:px-6 flex flex-col justify-center">
              <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none">
                89%
              </span>
              <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 mt-1.5 uppercase tracking-wider">
                Employee Satisfaction
              </span>
            </div>

            {/* Proof Point 4 */}
            <div className="py-2 sm:py-0 px-2 sm:px-6 last:pr-0 flex flex-col justify-center">
              <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-none">
                GLOBAL
              </span>
              <span className="text-[11px] sm:text-[12px] font-medium text-slate-400 mt-1.5 uppercase tracking-wider">
                Delivery Experience
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
