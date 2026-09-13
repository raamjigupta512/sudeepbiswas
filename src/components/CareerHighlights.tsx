import React from 'react';
import { Users, TrendingUp, HeartHandshake, ShieldCheck, Zap, Percent, Clock } from 'lucide-react';
import { CareerGrowthChart } from './CareerGrowthChart';

export const CareerHighlights: React.FC = () => {
  return (
    <section
      id="highlights"
      className="bg-[#051525] text-white py-20 lg:py-28 border-b border-slate-800 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#1677D2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#42B8FF]/08 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#42B8FF] uppercase mb-4">
            <span>MEASURABLE EXECUTIVE FOOTPRINT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            LEADERSHIP AT SCALE
          </h2>
          <p className="text-[15.5px] text-slate-300 font-light mt-4 max-w-2xl leading-relaxed">
            Proven executive stewardship demonstrated through organizational scale, sustained delivery predictability, and transformative commercial value creation.
          </p>
        </div>

        {/* Asymmetrical Editorial Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ================= LEFT COLUMN: Monumental Practice & People Scale (lg:col-span-5) ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#081F33] border border-slate-800 p-8 sm:p-10 rounded shadow-xl relative group">
            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#42B8FF] uppercase block mb-3">
                  PEOPLE LEADERSHIP & COACHING
                </span>
                <div className="font-serif text-6xl sm:text-7xl lg:text-[76px] font-extrabold text-white tracking-tight leading-none">
                  650+
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mt-3">
                  SAP Consultants Built & Led
                </h3>
                <p className="text-[14px] text-slate-300 font-light leading-relaxed mt-2">
                  Built, coached and directed world-class global consulting practices across multiple geographies, establishing competency centers and talent academies.
                </p>
              </div>

              <div className="pt-8 border-t border-slate-700/60">
                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#42B8FF] uppercase block mb-3">
                  ORGANIZATIONAL EXPANSION
                </span>
                <div className="font-serif text-6xl sm:text-7xl lg:text-[76px] font-extrabold text-white tracking-tight leading-none">
                  1,300+
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mt-3">
                  SAP Practice Scale at Mindtree
                </h3>
                <p className="text-[14px] text-slate-300 font-light leading-relaxed mt-2">
                  Instrumental in scaling the enterprise SAP practice from a few hundred specialized engineers to over 1,300 consultants globally while sustaining top-tier profitability and win rates.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>GLOBAL DELIVERY FOOTPRINT</span>
              <span className="text-[#42B8FF]">INDIA • US • EU • CANADA</span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Asymmetrical Performance Mosaic (lg:col-span-7) ================= */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Stat 1: 89% ESAT */}
            <div className="bg-[#081F33] border border-slate-800 hover:border-slate-700 p-7 rounded flex flex-col justify-between transition-all duration-200 hover:-translate-y-1">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#42B8FF] uppercase block mb-2">
                  RETENTION & CULTURE
                </span>
                <div className="font-serif text-5xl font-bold text-white tracking-tight mb-2">
                  89%
                </div>
                <h4 className="text-base font-bold text-white tracking-tight">
                  Employee Satisfaction (ESAT)
                </h4>
                <p className="text-[13px] text-slate-300 font-light leading-relaxed mt-2">
                  High-trust leadership fostering retention, technical mastery, and psychological safety in high-velocity delivery environments.
                </p>
              </div>
            </div>

            {/* Stat 2: 40% TCO Reduction */}
            <div className="bg-[#081F33] border border-slate-800 hover:border-slate-700 p-7 rounded flex flex-col justify-between transition-all duration-200 hover:-translate-y-1">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#42B8FF] uppercase block mb-2">
                  COMMERCIAL IMPACT
                </span>
                <div className="font-serif text-5xl font-bold text-white tracking-tight mb-2">
                  40%
                </div>
                <h4 className="text-base font-bold text-white tracking-tight">
                  TCO Reduction Realized
                </h4>
                <p className="text-[13px] text-slate-300 font-light leading-relaxed mt-2">
                  Realized using optimized delivery models, Agile, DevSecOps automation, and GenAI accelerators.
                </p>
              </div>
            </div>

            {/* Stat 3: 30% Cycle Time Reduction */}
            <div className="bg-[#081F33] border border-slate-800 hover:border-slate-700 p-7 rounded flex flex-col justify-between transition-all duration-200 hover:-translate-y-1">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#42B8FF] uppercase block mb-2">
                  RELEASE VELOCITY
                </span>
                <div className="font-serif text-5xl font-bold text-white tracking-tight mb-2">
                  30%
                </div>
                <h4 className="text-base font-bold text-white tracking-tight">
                  Cycle Time Reduction
                </h4>
                <p className="text-[13px] text-slate-300 font-light leading-relaxed mt-2">
                  Accelerating software release frequency and streamlining Order-to-Cash operations across enterprise value chains.
                </p>
              </div>
            </div>

            {/* Stat 4: >97% SLA & KPI */}
            <div className="bg-[#081F33] border border-slate-800 hover:border-slate-700 p-7 rounded flex flex-col justify-between transition-all duration-200 hover:-translate-y-1">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#42B8FF] uppercase block mb-2">
                  PREDICTABILITY
                </span>
                <div className="font-serif text-5xl font-bold text-white tracking-tight mb-2">
                  &gt;97%
                </div>
                <h4 className="text-base font-bold text-white tracking-tight">
                  SLA & KPI Achievement
                </h4>
                <p className="text-[13px] text-slate-300 font-light leading-relaxed mt-2">
                  Consistent delivery predictability across multi-million dollar global enterprise accounts and multi-vendor partnerships.
                </p>
              </div>
            </div>

            {/* Full-width Span Stat: <2% Change Failure Rate */}
            <div className="sm:col-span-2 bg-[#081F33] border border-slate-800 hover:border-slate-700 p-7 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all duration-200">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#42B8FF] uppercase block mb-1">
                  ENGINEERING QUALITY
                </span>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Change Failure Rate Held Below 2%
                </h4>
                <p className="text-[13px] text-slate-300 font-light leading-relaxed mt-1 max-w-xl">
                  Disciplined engineering standards, automated stage gates, and test automation ensuring flawless, zero-downtime production rollouts.
                </p>
              </div>
              <div className="font-serif text-5xl sm:text-6xl font-bold text-[#42B8FF] tracking-tight shrink-0">
                &lt;2%
              </div>
            </div>

          </div>

        </div>

        {/* Recharts Quantitative Growth Visualization */}
        <CareerGrowthChart />

      </div>
    </section>
  );
};
