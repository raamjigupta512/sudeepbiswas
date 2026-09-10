import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { CAREER_JOURNEY } from '../data/executiveData';
import { CareerMilestone } from '../types';

export const CareerJourney: React.FC = () => {
  // Filter for the main corporate career milestones specified: Siemens, Asian Paints, Capgemini, HCL, Infosys, Mindtree, Maersk, ITC Infotech
  const milestones = CAREER_JOURNEY.filter(m => m.company !== 'SPJIMR');
  const [activeMilestone, setActiveMilestone] = useState<CareerMilestone>(milestones[milestones.length - 1]);

  return (
    <section
      id="experience"
      className="bg-[#071A2D] text-white py-20 lg:py-28 border-b border-slate-800 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#1677D2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#42B8FF] uppercase mb-4">
            <span>EXECUTIVE TRAJECTORY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12]">
            THREE DECADES.
            <br />
            MANY TRANSFORMATIONS.
          </h2>
          <p className="text-[15.5px] text-slate-300 font-light mt-4 leading-relaxed">
            A continuous three-decade trajectory of expanding executive responsibility across premier global consulting firms, Fortune 500 conglomerates, and strategic technology enterprises.
          </p>
        </div>

        {/* ================= DESKTOP: Cinematic Horizontal Timeline ================= */}
        <div className="hidden lg:block">
          
          {/* Horizontal Rail Line */}
          <div className="relative mb-10 pb-6 border-b border-slate-800">
            {/* Connecting Track Line */}
            <div className="absolute top-7 left-6 right-6 h-[2px] bg-slate-800 z-0">
              <div
                className="h-full bg-gradient-to-r from-[#1677D2] to-[#42B8FF] transition-all duration-300"
                style={{
                  width: `${((milestones.findIndex(m => m.company === activeMilestone.company) + 1) / milestones.length) * 100}%`,
                }}
              />
            </div>

            {/* Timeline Nodes Grid */}
            <div className="grid grid-cols-8 gap-3 relative z-10">
              {milestones.map((item, idx) => {
                const isSelected = activeMilestone.company === item.company;
                const isCurrent = idx === milestones.length - 1;

                return (
                  <button
                    key={`${item.company}-${item.year}`}
                    onClick={() => setActiveMilestone(item)}
                    id={`timeline-node-${idx}`}
                    className={`text-left p-3.5 rounded transition-all duration-200 flex flex-col justify-between h-36 border group cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B2239] border-[#42B8FF] shadow-lg shadow-[#42B8FF]/15 -translate-y-1'
                        : 'bg-[#071A2D] border-slate-800/90 hover:border-slate-700 hover:bg-[#0B2239]/60'
                    }`}
                  >
                    <div>
                      {/* Year badge & node indicator */}
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`font-mono text-[11px] font-bold tracking-wider ${
                            isSelected ? 'text-[#42B8FF]' : 'text-slate-400 group-hover:text-slate-200'
                          }`}
                        >
                          {item.year.split('–')[0]}
                        </span>
                        <span
                          className={`w-3 h-3 rounded-full border-2 transition-all ${
                            isSelected
                              ? 'bg-[#42B8FF] border-[#42B8FF] ring-4 ring-[#42B8FF]/20'
                              : isCurrent
                              ? 'bg-emerald-500 border-emerald-400'
                              : 'bg-[#071A2D] border-slate-600 group-hover:border-slate-400'
                          }`}
                        />
                      </div>

                      {/* Company Name */}
                      <div
                        className={`font-serif text-[14px] font-bold leading-tight line-clamp-2 ${
                          isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                        }`}
                      >
                        {item.company}
                      </div>
                    </div>

                    {/* Role teaser (progressive disclosure) */}
                    <div
                      className={`text-[11px] line-clamp-2 leading-tight pt-2 border-t ${
                        isSelected
                          ? 'border-slate-700 text-[#42B8FF] font-medium'
                          : 'border-slate-800/80 text-slate-400'
                      }`}
                    >
                      {item.role}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Expanded Milestone Deep Dive (Progressive Disclosure) */}
          <div className="bg-[#0B2239] border border-slate-800 p-8 lg:p-10 rounded shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Organization & Appointment Metadata */}
              <div className="col-span-5 border-r border-slate-800 pr-8">
                <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#42B8FF] uppercase mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>TENURE: {activeMilestone.year}</span>
                </div>

                <h3 className="font-serif text-3xl xl:text-4xl font-bold text-white tracking-tight leading-tight">
                  {activeMilestone.company}
                </h3>

                <div className="text-[17px] font-semibold text-slate-200 mt-2">
                  {activeMilestone.role}
                </div>

                {activeMilestone.location && (
                  <div className="inline-flex items-center space-x-1.5 text-xs text-slate-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{activeMilestone.location}</span>
                  </div>
                )}

                <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400 leading-relaxed font-light">
                  Click any milestone on the timeline above to examine career impact, scale, and strategic outcomes across each chapter.
                </div>
              </div>

              {/* Right Column: Key Contribution & Specific Highlights */}
              <div className="col-span-7 pl-4 space-y-6">
                <div>
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                    EXECUTIVE MANDATE & IMPACT
                  </span>
                  <p className="text-[15.5px] text-slate-200 leading-relaxed font-light">
                    {activeMilestone.description}
                  </p>
                </div>

                {/* Key Deliverables / Highlights */}
                {activeMilestone.highlights && activeMilestone.highlights.length > 0 && (
                  <div className="pt-4 border-t border-slate-800/80">
                    <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-[#42B8FF] block mb-3">
                      KEY TRANSFORMATION CONTRIBUTIONS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeMilestone.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2.5 p-3 rounded bg-[#071A2D]/80 border border-slate-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#42B8FF] shrink-0 mt-0.5" />
                          <span className="text-[13px] text-slate-300 font-medium">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* ================= MOBILE: Vertical Timeline ================= */}
        <div className="lg:hidden space-y-6">
          {milestones.map((item, idx) => (
            <div
              key={`${item.company}-${item.year}`}
              className="p-6 rounded bg-[#0B2239] border border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#42B8FF]">
                <span>{item.year}</span>
                {idx === milestones.length - 1 && (
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                    Current
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                {item.company}
              </h3>
              <div className="text-sm font-semibold text-slate-200">
                {item.role}
              </div>

              {item.location && (
                <div className="inline-flex items-center space-x-1.5 text-xs text-slate-400">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{item.location}</span>
                </div>
              )}

              <p className="text-sm text-slate-300 font-light leading-relaxed pt-2 border-t border-slate-800">
                {item.description}
              </p>

              {item.highlights && (
                <div className="space-y-1.5 pt-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#42B8FF]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
