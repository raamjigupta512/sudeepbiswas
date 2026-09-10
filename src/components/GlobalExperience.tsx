import React, { useState } from 'react';
import { Globe, MapPin, Building2, Check } from 'lucide-react';
import { GLOBAL_LOCATIONS, GLOBAL_INDUSTRIES } from '../data/executiveData';

export const GlobalExperience: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState(GLOBAL_LOCATIONS[0]);

  return (
    <section
      id="global"
      className="bg-[#0B2239] text-white py-20 lg:py-24 border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#42B8FF] uppercase mb-4">
            <span>GEOGRAPHIC FOOTPRINT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            GLOBAL EXPERIENCE.
            <br />
            LOCAL IMPACT.
          </h2>
          <p className="text-[15.5px] text-slate-300 font-light mt-4">
            Cross-continental delivery leadership anchoring strategic engagements in India, Canada, the United States, and Europe.
          </p>
        </div>

        {/* Global Map Visual Representation */}
        <div className="relative bg-[#071A2D] border border-slate-800 rounded p-6 sm:p-10 mb-12 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#42B8FF] block mb-1">
                Active Operational Hubs
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {activeLocation.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {activeLocation.role}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {GLOBAL_LOCATIONS.map((loc) => (
                <button
                  key={loc.name}
                  onClick={() => setActiveLocation(loc)}
                  className={`text-xs px-3 py-1.5 rounded transition-colors font-medium ${
                    activeLocation.name === loc.name
                      ? 'bg-[#1677D2] text-white'
                      : 'bg-[#0B2239] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {loc.name.split(',')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Stylized Interactive Map Canvas */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
            <svg
              className="w-full h-full object-contain"
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="dot-matrix" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#42B8FF" opacity="0.12" />
                </pattern>
                
                {/* Global Arc Gradient: Trans-Eurasian */}
                <linearGradient id="arc-in-eu" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#42B8FF" stopOpacity="0.7" />
                  <stop offset="60%" stopColor="#1677D2" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#42B8FF" stopOpacity="0.6" />
                </linearGradient>

                {/* Global Arc Gradient: Trans-Pacific / Trans-Atlantic to Americas */}
                <linearGradient id="arc-in-na" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#42B8FF" stopOpacity="0.65" />
                  <stop offset="50%" stopColor="#1677D2" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#42B8FF" stopOpacity="0.7" />
                </linearGradient>

                {/* Transatlantic Corridor */}
                <linearGradient id="arc-eu-na" x1="100%" y1="50%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="#42B8FF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#1677D2" stopOpacity="0.3" />
                </linearGradient>

                {/* Filter for subtle beam glow */}
                <filter id="map-glow" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Digital Matrix */}
              <rect width="100%" height="100%" fill="url(#dot-matrix)" />

              {/* Continents rough schematic paths (subtle background geometry) */}
              {/* North America */}
              <path
                d="M 160 120 Q 220 90 280 140 T 260 220 T 190 260 Z"
                fill="#0B2239"
                stroke="#1677D2"
                strokeWidth="0.8"
                opacity="0.5"
              />
              {/* South America */}
              <path
                d="M 280 270 Q 320 320 290 400 T 260 410 Z"
                fill="#0B2239"
                stroke="#1677D2"
                strokeWidth="0.6"
                opacity="0.35"
              />
              {/* Europe */}
              <path
                d="M 480 120 Q 560 110 580 180 T 490 220 Z"
                fill="#0B2239"
                stroke="#1677D2"
                strokeWidth="0.8"
                opacity="0.5"
              />
              {/* Africa */}
              <path
                d="M 480 230 Q 540 250 530 360 T 460 300 Z"
                fill="#0B2239"
                stroke="#1677D2"
                strokeWidth="0.6"
                opacity="0.35"
              />
              {/* India / Asia */}
              <path
                d="M 640 180 Q 740 160 820 220 T 700 320 T 630 240 Z"
                fill="#0B2239"
                stroke="#1677D2"
                strokeWidth="0.8"
                opacity="0.6"
              />

              {/* GLOBAL FLIGHT & DATA ARCS (STATIC BASE TRACKS) */}
              {/* Arc 1: India (700, 280) to Canada (250, 160) */}
              <path
                id="path-in-ca"
                d="M 700 280 Q 470 70 250 160"
                fill="none"
                stroke="#1E3A5F"
                strokeWidth="1.2"
                opacity="0.45"
              />

              {/* Arc 2: India (700, 280) to Europe (520, 160) */}
              <path
                id="path-in-eu"
                d="M 700 280 Q 610 170 520 160"
                fill="none"
                stroke="#1E3A5F"
                strokeWidth="1.2"
                opacity="0.45"
              />

              {/* Arc 3: Europe (520, 160) to North America East Coast (275, 185) */}
              <path
                id="path-eu-na"
                d="M 520 160 Q 390 130 275 185"
                fill="none"
                stroke="#1E3A5F"
                strokeWidth="1"
                opacity="0.35"
              />

              {/* Arc 4: India (700, 280) to Singapore/APAC (760, 310) */}
              <path
                id="path-in-apac"
                d="M 700 280 Q 730 290 760 310"
                fill="none"
                stroke="#1E3A5F"
                strokeWidth="1"
                opacity="0.4"
              />

              {/* Arc 5: India (700, 280) to UK / London (490, 175) */}
              <path
                id="path-in-uk"
                d="M 700 280 Q 590 180 490 175"
                fill="none"
                stroke="#1E3A5F"
                strokeWidth="1"
                opacity="0.35"
              />

              {/* DYNAMIC LOW-OPACITY ANIMATED OVERLAYS */}
              {/* Animated Arc 1: India to Canada */}
              <path
                d="M 700 280 Q 470 70 250 160"
                fill="none"
                stroke="url(#arc-in-na)"
                strokeWidth="1.8"
                strokeDasharray="8 14"
                className="anim-flow-dash"
                filter="url(#map-glow)"
                opacity="0.6"
              />

              {/* Animated Arc 2: India to Europe */}
              <path
                d="M 700 280 Q 610 170 520 160"
                fill="none"
                stroke="url(#arc-in-eu)"
                strokeWidth="2"
                strokeDasharray="10 16"
                className="anim-flow-dash-slow"
                filter="url(#map-glow)"
                opacity="0.65"
              />

              {/* Animated Arc 3: Europe to North America */}
              <path
                d="M 520 160 Q 390 130 275 185"
                fill="none"
                stroke="url(#arc-eu-na)"
                strokeWidth="1.4"
                strokeDasharray="6 12"
                className="anim-flow-dash-reverse"
                opacity="0.45"
              />

              {/* Animated Arc 4: India to Singapore */}
              <path
                d="M 700 280 Q 730 290 760 310"
                fill="none"
                stroke="url(#arc-in-eu)"
                strokeWidth="1.2"
                strokeDasharray="4 8"
                className="anim-flow-dash"
                opacity="0.5"
              />

              {/* Animated Signal Packet Pulses (Traveling dots via SVG animateMotion) */}
              {/* Packet 1: India -> Canada */}
              <circle r="2.5" fill="#42B8FF" opacity="0.75">
                <animateMotion
                  path="M 700 280 Q 470 70 250 160"
                  dur="7s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Packet 2: India -> Europe */}
              <circle r="2.5" fill="#42B8FF" opacity="0.8">
                <animateMotion
                  path="M 700 280 Q 610 170 520 160"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Packet 3: Europe -> Americas */}
              <circle r="2" fill="#1677D2" opacity="0.6">
                <animateMotion
                  path="M 520 160 Q 390 130 275 185"
                  dur="5.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* LOCATION PINS & METRIC BEACONS */}
              {/* Bengaluru (Primary Delivery HQ) */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveLocation(GLOBAL_LOCATIONS[0])}
              >
                {/* Staggered concentric pulsing rings */}
                <circle cx="700" cy="280" r="18" fill="none" stroke="#42B8FF" strokeWidth="0.75" opacity="0.25" className="animate-ping" />
                <circle cx="700" cy="280" r="10" fill="#1677D2" opacity="0.3" />
                <circle cx="700" cy="280" r="4.5" fill="#42B8FF" />
                <circle cx="700" cy="280" r="1.5" fill="#FFFFFF" />
                
                {/* Node Label */}
                <rect x="712" y="272" width="94" height="18" rx="2" fill="#071A2D" fillOpacity="0.85" stroke="#1E3A5F" strokeWidth="0.8" />
                <text x="718" y="284" fill="#FFFFFF" fontSize="9.5" fontWeight="600" letterSpacing="0.05em">
                  Bengaluru (HQ)
                </text>
              </g>

              {/* Mumbai */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveLocation(GLOBAL_LOCATIONS[1])}
              >
                <circle cx="675" cy="265" r="3.5" fill="#42B8FF" opacity="0.8" />
                <circle cx="675" cy="265" r="7" fill="none" stroke="#42B8FF" strokeWidth="0.5" opacity="0.3" />
                <text x="635" y="258" fill="#94A3B8" fontSize="8.5" fontWeight="500">
                  Mumbai
                </text>
              </g>

              {/* Canada (Toronto / Montreal) */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveLocation(GLOBAL_LOCATIONS[2])}
              >
                <circle cx="250" cy="160" r="14" fill="none" stroke="#42B8FF" strokeWidth="0.75" opacity="0.25" className="animate-ping" />
                <circle cx="250" cy="160" r="8" fill="#1677D2" opacity="0.3" />
                <circle cx="250" cy="160" r="4" fill="#42B8FF" />
                <circle cx="250" cy="160" r="1.5" fill="#FFFFFF" />
                <rect x="168" y="148" width="76" height="18" rx="2" fill="#071A2D" fillOpacity="0.85" stroke="#1E3A5F" strokeWidth="0.8" />
                <text x="174" y="160" fill="#FFFFFF" fontSize="9" fontWeight="600" letterSpacing="0.05em">
                  Canada (HCL)
                </text>
              </g>

              {/* Copenhagen / Europe (Maersk Engagement) */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveLocation(GLOBAL_LOCATIONS[3])}
              >
                <circle cx="520" cy="160" r="10" fill="none" stroke="#42B8FF" strokeWidth="0.6" opacity="0.25" className="animate-ping" />
                <circle cx="520" cy="160" r="4" fill="#42B8FF" opacity="0.9" />
                <circle cx="520" cy="160" r="1.5" fill="#FFFFFF" />
                <rect x="528" y="148" width="88" height="18" rx="2" fill="#071A2D" fillOpacity="0.85" stroke="#1E3A5F" strokeWidth="0.8" />
                <text x="534" y="160" fill="#FFFFFF" fontSize="9" fontWeight="600" letterSpacing="0.05em">
                  Europe (Maersk)
                </text>
              </g>

              {/* US East Coast Node (New York) */}
              <g>
                <circle cx="275" cy="185" r="2.5" fill="#94A3B8" opacity="0.6" />
                <text x="282" y="188" fill="#64748B" fontSize="7.5">
                  US East
                </text>
              </g>

              {/* Singapore Node (APAC) */}
              <g>
                <circle cx="760" cy="310" r="2.5" fill="#42B8FF" opacity="0.6" />
                <text x="768" y="313" fill="#64748B" fontSize="7.5">
                  APAC Hub
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* 10 Verified Industries Section */}
        <div>
          <div className="flex items-center space-x-2 text-[11px] font-mono tracking-widest text-[#42B8FF] uppercase mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#42B8FF]" />
            <span>CROSS-INDUSTRY DOMAIN EXPERIENCE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {GLOBAL_INDUSTRIES.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#071A2D] border border-slate-800 p-3 rounded text-center hover:border-slate-700 transition-colors"
              >
                <span className="text-[12.5px] font-medium text-slate-300">
                  {ind}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
