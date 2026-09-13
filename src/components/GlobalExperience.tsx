import React, { useState, useRef } from 'react';
import { Globe, MapPin, Building2, Check, Briefcase, TrendingUp } from 'lucide-react';
import { GLOBAL_LOCATIONS, GLOBAL_INDUSTRIES, GlobalLocationData } from '../data/executiveData';
import { MapRegionTooltip } from './MapRegionTooltip';

export const GlobalExperience: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<GlobalLocationData>(GLOBAL_LOCATIONS[0]);
  const [hoveredLocation, setHoveredLocation] = useState<GlobalLocationData | null>(null);
  const [tooltipCoords, setTooltipCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  // Helper to calculate relative pixel coordinates from SVG viewBox (1000x500)
  const handlePinMouseEnter = (
    loc: GlobalLocationData,
    svgX: number,
    svgY: number,
    event?: React.MouseEvent
  ) => {
    setHoveredLocation(loc);
    if (mapContainerRef.current) {
      const rect = mapContainerRef.current.getBoundingClientRect();
      // Map SVG coordinates (viewBox: 0 0 1000 500) to current rendered container width & height
      const renderedX = (svgX / 1000) * rect.width;
      const renderedY = (svgY / 500) * rect.height;
      setTooltipCoords({ x: renderedX, y: renderedY });
    }
  };

  const handlePinMouseLeave = () => {
    setHoveredLocation(null);
  };

  return (
    <section
      id="global"
      className="bg-[#0B2239] text-white py-20 lg:py-24 border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#42B8FF] uppercase mb-4">
            <Globe className="w-3.5 h-3.5 text-[#42B8FF]" />
            <span>GEOGRAPHIC FOOTPRINT & SECTOR REACH</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            GLOBAL EXPERIENCE
          </h2>
          <p className="text-[15.5px] text-slate-300 font-light mt-4">
            Cross-continental delivery leadership anchoring strategic engagements in India, Canada, the United States, and Europe. Hover or select hubs to inspect sector footprints and verified project volumes.
          </p>
        </div>

        {/* Global Map Visual Representation */}
        <div className="relative bg-[#071A2D] border border-slate-800 rounded-lg p-6 sm:p-10 mb-12 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#42B8FF] block">
                  Active Operational Hub
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1677D2]/20 border border-[#1677D2]/40 text-[#42B8FF]">
                  {activeLocation.projectCount}+ Projects Delivered
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                {activeLocation.name}
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl font-light">
                {activeLocation.role}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {GLOBAL_LOCATIONS.map((loc) => (
                <button
                  key={loc.name}
                  onClick={() => {
                    setActiveLocation(loc);
                    setHoveredLocation(loc);
                  }}
                  onMouseEnter={() => {
                    // Map approximate coords
                    const approxSvg = {
                      'Bengaluru, India': { x: 700, y: 280 },
                      'Mumbai, India': { x: 675, y: 265 },
                      'Toronto / Montreal, Canada': { x: 250, y: 160 },
                      'Copenhagen & Western Europe': { x: 520, y: 160 },
                      'United States (East & West)': { x: 275, y: 185 },
                    }[loc.name] || { x: 500, y: 250 };
                    handlePinMouseEnter(loc, approxSvg.x, approxSvg.y);
                  }}
                  onMouseLeave={handlePinMouseLeave}
                  className={`text-xs px-3 py-1.5 rounded transition-all font-medium cursor-pointer ${
                    activeLocation.name === loc.name
                      ? 'bg-[#1677D2] text-white shadow-md'
                      : 'bg-[#0B2239] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {loc.name.split(',')[0].replace(' & Western Europe', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Stylized Interactive Map Canvas with Tooltip Portal */}
          <div
            ref={mapContainerRef}
            className="relative w-full h-72 sm:h-84 md:h-96 flex items-center justify-center overflow-visible"
          >
            {/* Hover Tooltip Overlay */}
            {hoveredLocation && (
              <MapRegionTooltip
                location={hoveredLocation}
                coords={tooltipCoords}
                containerWidth={mapContainerRef.current?.getBoundingClientRect().width || 800}
              />
            )}

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
                  <stop offset="0%" stopColor="#42B8FF" stopOpacity="0.75" />
                  <stop offset="60%" stopColor="#1677D2" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#42B8FF" stopOpacity="0.65" />
                </linearGradient>

                {/* Global Arc Gradient: Trans-Pacific / Trans-Atlantic to Americas */}
                <linearGradient id="arc-in-na" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#42B8FF" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#1677D2" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#42B8FF" stopOpacity="0.75" />
                </linearGradient>

                {/* Transatlantic Corridor */}
                <linearGradient id="arc-eu-na" x1="100%" y1="50%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="#42B8FF" stopOpacity="0.6" />
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

              {/* Continents rough schematic paths (subtle background geometry with hover interactive regions) */}
              {/* North America */}
              <path
                d="M 160 120 Q 220 90 280 140 T 260 220 T 190 260 Z"
                fill="#0B2239"
                stroke="#1677D2"
                strokeWidth="0.8"
                opacity={hoveredLocation?.regionCode.startsWith('NA') ? '0.85' : '0.5'}
                className="transition-opacity duration-300 cursor-pointer"
                onMouseEnter={() => handlePinMouseEnter(GLOBAL_LOCATIONS[2], 250, 160)}
                onMouseLeave={handlePinMouseLeave}
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
                opacity={hoveredLocation?.regionCode === 'EU-DK' ? '0.85' : '0.5'}
                className="transition-opacity duration-300 cursor-pointer"
                onMouseEnter={() => handlePinMouseEnter(GLOBAL_LOCATIONS[3], 520, 160)}
                onMouseLeave={handlePinMouseLeave}
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
                opacity={hoveredLocation?.regionCode.startsWith('APAC') ? '0.85' : '0.6'}
                className="transition-opacity duration-300 cursor-pointer"
                onMouseEnter={() => handlePinMouseEnter(GLOBAL_LOCATIONS[0], 700, 280)}
                onMouseLeave={handlePinMouseLeave}
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
              <circle r="2.5" fill="#42B8FF" opacity="0.75">
                <animateMotion
                  path="M 700 280 Q 470 70 250 160"
                  dur="7s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="2.5" fill="#42B8FF" opacity="0.8">
                <animateMotion
                  path="M 700 280 Q 610 170 520 160"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="2" fill="#1677D2" opacity="0.6">
                <animateMotion
                  path="M 520 160 Q 390 130 275 185"
                  dur="5.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* LOCATION PINS & METRIC BEACONS WITH RICH HOVER TOOLTIPS */}

              {/* 1. Bengaluru (Primary Delivery HQ) */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveLocation(GLOBAL_LOCATIONS[0])}
                onMouseEnter={() => handlePinMouseEnter(GLOBAL_LOCATIONS[0], 700, 280)}
                onMouseLeave={handlePinMouseLeave}
              >
                {/* Hitbox expander */}
                <circle cx="700" cy="280" r="30" fill="transparent" />
                {/* Concentric pulsing rings */}
                <circle cx="700" cy="280" r="18" fill="none" stroke="#42B8FF" strokeWidth="0.75" opacity="0.25" className="animate-ping" />
                <circle cx="700" cy="280" r="10" fill="#1677D2" opacity="0.3" />
                <circle cx="700" cy="280" r="5" fill="#42B8FF" className="group-hover:scale-125 transition-transform" />
                <circle cx="700" cy="280" r="1.8" fill="#FFFFFF" />
                
                {/* Node Label & Project Tag */}
                <rect x="712" y="270" width="108" height="22" rx="3" fill="#071A2D" fillOpacity="0.9" stroke="#1677D2" strokeWidth="0.9" />
                <text x="718" y="284" fill="#FFFFFF" fontSize="9.5" fontWeight="600" letterSpacing="0.04em">
                  Bengaluru
                </text>
                <text x="784" y="284" fill="#42B8FF" fontSize="9" fontWeight="bold" fontFamily="monospace">
                  52+
                </text>
              </g>

              {/* 2. Mumbai (Foundational Industrial Engagements) */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveLocation(GLOBAL_LOCATIONS[1])}
                onMouseEnter={() => handlePinMouseEnter(GLOBAL_LOCATIONS[1], 675, 265)}
                onMouseLeave={handlePinMouseLeave}
              >
                <circle cx="675" cy="265" r="22" fill="transparent" />
                <circle cx="675" cy="265" r="8" fill="none" stroke="#42B8FF" strokeWidth="0.5" opacity="0.4" />
                <circle cx="675" cy="265" r="4" fill="#42B8FF" opacity="0.9" className="group-hover:scale-125 transition-transform" />
                <circle cx="675" cy="265" r="1.5" fill="#FFFFFF" />
                <rect x="590" y="252" width="76" height="20" rx="3" fill="#071A2D" fillOpacity="0.9" stroke="#1E3A5F" strokeWidth="0.8" />
                <text x="596" y="265" fill="#CBD5E1" fontSize="9" fontWeight="600">
                  Mumbai
                </text>
                <text x="645" y="265" fill="#42B8FF" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                  18+
                </text>
              </g>

              {/* 3. Canada (Toronto / Montreal - HCL JD Edwards) */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveLocation(GLOBAL_LOCATIONS[2])}
                onMouseEnter={() => handlePinMouseEnter(GLOBAL_LOCATIONS[2], 250, 160)}
                onMouseLeave={handlePinMouseLeave}
              >
                <circle cx="250" cy="160" r="28" fill="transparent" />
                <circle cx="250" cy="160" r="14" fill="none" stroke="#42B8FF" strokeWidth="0.75" opacity="0.25" className="animate-ping" />
                <circle cx="250" cy="160" r="8" fill="#1677D2" opacity="0.3" />
                <circle cx="250" cy="160" r="4.5" fill="#42B8FF" className="group-hover:scale-125 transition-transform" />
                <circle cx="250" cy="160" r="1.8" fill="#FFFFFF" />
                <rect x="156" y="146" width="88" height="22" rx="3" fill="#071A2D" fillOpacity="0.9" stroke="#1677D2" strokeWidth="0.9" />
                <text x="162" y="160" fill="#FFFFFF" fontSize="9" fontWeight="600" letterSpacing="0.04em">
                  Canada (HCL)
                </text>
                <text x="228" y="160" fill="#42B8FF" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                  24+
                </text>
              </g>

              {/* 4. Copenhagen & Western Europe (Maersk Order-to-Cash) */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveLocation(GLOBAL_LOCATIONS[3])}
                onMouseEnter={() => handlePinMouseEnter(GLOBAL_LOCATIONS[3], 520, 160)}
                onMouseLeave={handlePinMouseLeave}
              >
                <circle cx="520" cy="160" r="28" fill="transparent" />
                <circle cx="520" cy="160" r="12" fill="none" stroke="#42B8FF" strokeWidth="0.6" opacity="0.25" className="animate-ping" />
                <circle cx="520" cy="160" r="4.5" fill="#42B8FF" opacity="0.9" className="group-hover:scale-125 transition-transform" />
                <circle cx="520" cy="160" r="1.8" fill="#FFFFFF" />
                <rect x="528" y="146" width="94" height="22" rx="3" fill="#071A2D" fillOpacity="0.9" stroke="#1677D2" strokeWidth="0.9" />
                <text x="534" y="160" fill="#FFFFFF" fontSize="9" fontWeight="600" letterSpacing="0.04em">
                  Europe (Maersk)
                </text>
                <text x="604" y="160" fill="#42B8FF" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                  16+
                </text>
              </g>

              {/* 5. US East & West Coast (Fortune 500 Programs) */}
              <g
                className="cursor-pointer group"
                onClick={() => setActiveLocation(GLOBAL_LOCATIONS[4])}
                onMouseEnter={() => handlePinMouseEnter(GLOBAL_LOCATIONS[4], 275, 185)}
                onMouseLeave={handlePinMouseLeave}
              >
                <circle cx="275" cy="185" r="20" fill="transparent" />
                <circle cx="275" cy="185" r="3.5" fill="#42B8FF" opacity="0.8" className="group-hover:scale-125 transition-transform" />
                <circle cx="275" cy="185" r="8" fill="none" stroke="#42B8FF" strokeWidth="0.5" opacity="0.3" />
                <rect x="284" y="174" width="70" height="18" rx="2.5" fill="#071A2D" fillOpacity="0.85" stroke="#1E3A5F" strokeWidth="0.8" />
                <text x="288" y="186" fill="#94A3B8" fontSize="8" fontWeight="600">
                  US Markets
                </text>
                <text x="338" y="186" fill="#42B8FF" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                  20+
                </text>
              </g>

              {/* Singapore Node (APAC Regional Hub) */}
              <g
                className="cursor-pointer group"
                onMouseEnter={() => handlePinMouseEnter(GLOBAL_LOCATIONS[0], 760, 310)}
                onMouseLeave={handlePinMouseLeave}
              >
                <circle cx="760" cy="310" r="16" fill="transparent" />
                <circle cx="760" cy="310" r="3" fill="#42B8FF" opacity="0.7" />
                <text x="768" y="313" fill="#64748B" fontSize="7.5" fontWeight="500">
                  APAC Link
                </text>
              </g>
            </svg>
          </div>

          {/* Interactive Hint Bar */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#42B8FF] animate-pulse" />
              <span>Hover over any region or pin to inspect sector depth and project volume</span>
            </div>
            <div className="text-slate-400 text-[11px]">
              Total Cross-Border Engagements: <strong className="text-white font-mono">110+ Programs</strong>
            </div>
          </div>
        </div>

        {/* 10 Verified Industries Section with Interactive Regional Filters */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-[11px] font-mono tracking-widest text-[#42B8FF] uppercase">
              <Building2 className="w-3.5 h-3.5 text-[#42B8FF]" />
              <span>CROSS-INDUSTRY DOMAIN MASTERY ({GLOBAL_INDUSTRIES.length} SECTORS)</span>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Multi-Enterprise Application
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {GLOBAL_INDUSTRIES.map((ind, idx) => {
              const isRelevantToActive = activeLocation.keyIndustries.some((k) =>
                ind.toLowerCase().includes(k.split(' ')[0].toLowerCase())
              );

              return (
                <div
                  key={idx}
                  className={`border p-3.5 rounded transition-all duration-200 text-center ${
                    isRelevantToActive
                      ? 'bg-[#0B2A4A] border-[#1677D2] shadow-sm'
                      : 'bg-[#071A2D] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span
                    className={`text-[12.5px] font-medium block leading-tight ${
                      isRelevantToActive ? 'text-white font-semibold' : 'text-slate-300'
                    }`}
                  >
                    {ind}
                  </span>
                  {isRelevantToActive && (
                    <span className="inline-block mt-1 text-[9.5px] font-mono text-[#42B8FF]">
                      Active in {activeLocation.name.split(',')[0]}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
