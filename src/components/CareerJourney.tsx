import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle } from 'lucide-react';
import { CAREER_JOURNEY } from '../data/executiveData';
import { CareerMilestone } from '../types';

export const CareerJourney: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<CareerMilestone>(CAREER_JOURNEY[CAREER_JOURNEY.length - 1]);

  return (
    <section
      id="experience"
      className="bg-white text-[#132238] py-20 lg:py-24 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#1677D2] uppercase mb-4">
            <span>EXECUTIVE TRAJECTORY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2D] tracking-tight leading-tight">
            THREE DECADES.
            <br />
            MANY TRANSFORMATIONS.
          </h2>
          <p className="text-[15px] text-slate-600 font-light mt-4">
            An uninterrupted trajectory of expanding executive responsibility across premier global consulting firms, Fortune 500 conglomerates, and strategic technology enterprises.
          </p>
        </div>

        {/* Desktop Interactive Career Rail */}
        <div className="hidden lg:block mb-10">
          <div className="relative border-b border-slate-200 pb-4">
            <div className="grid grid-cols-9 gap-2">
              {CAREER_JOURNEY.map((item, idx) => {
                const isSelected = selectedMilestone.company === item.company && selectedMilestone.year === item.year;
                const isCurrent = idx === CAREER_JOURNEY.length - 1;
                return (
                  <button
                    key={`${item.company}-${idx}`}
                    onClick={() => setSelectedMilestone(item)}
                    id={`timeline-step-${idx}`}
                    className={`text-left p-3 rounded transition-all duration-200 group flex flex-col justify-between h-32 border ${
                      isSelected
                        ? 'bg-[#071A2D] text-white border-[#071A2D] shadow-md -translate-y-1'
                        : 'bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 border-slate-200/80'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-[10px] font-bold tracking-wider ${
                            isSelected ? 'text-[#42B8FF]' : isCurrent ? 'text-[#1677D2]' : 'text-slate-400'
                          }`}
                        >
                          {item.year}
                        </span>
                        {isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Active Appointment" />
                        )}
                      </div>
                      <div
                        className={`font-serif text-[13.5px] font-bold mt-1.5 leading-snug truncate ${
                          isSelected ? 'text-white' : 'text-[#071A2D]'
                        }`}
                      >
                        {item.company}
                      </div>
                    </div>
                    <div
                      className={`text-[11px] truncate leading-tight mt-2 ${
                        isSelected ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {item.role}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Milestone Deep Dive Spotlight */}
          <div className="bg-[#071A2D] text-white p-8 lg:p-10 rounded border border-slate-800 shadow-xl transition-all duration-300">
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-4 border-r border-slate-700/60 pr-8">
                <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#42B8FF] uppercase mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedMilestone.year}</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-white tracking-tight">
                  {selectedMilestone.company}
                </h3>
                <div className="text-[15px] font-semibold text-slate-200 mt-1">
                  {selectedMilestone.role}
                </div>
                {selectedMilestone.location && (
                  <div className="inline-flex items-center space-x-1.5 text-xs text-slate-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{selectedMilestone.location}</span>
                  </div>
                )}
              </div>

              <div className="col-span-8 space-y-4">
                <p className="text-[15px] text-slate-200 font-light leading-relaxed">
                  {selectedMilestone.description}
                </p>

                {selectedMilestone.highlights && (
                  <div className="pt-4 border-t border-slate-700/60">
                    <span className="text-[10.5px] font-mono tracking-wider text-slate-400 uppercase block mb-2.5">
                      Key Competency & Impact Focus:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedMilestone.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center space-x-1.5 bg-[#0B2239] border border-slate-700 text-[#42B8FF] text-[12px] font-medium px-3 py-1 rounded"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#42B8FF]" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {CAREER_JOURNEY.map((item, idx) => {
            const isCurrent = idx === CAREER_JOURNEY.length - 1;
            return (
              <div
                key={idx}
                className={`p-6 rounded border ${
                  isCurrent ? 'bg-[#071A2D] text-white border-slate-800' : 'bg-[#F8FAFC] text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isCurrent ? 'text-[#42B8FF]' : 'text-[#1677D2]'
                    }`}
                  >
                    {item.year}
                  </span>
                  {item.location && (
                    <span className={`text-[11px] ${isCurrent ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.location}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl font-bold tracking-tight mb-1">
                  {item.company}
                </h3>
                <h4 className={`text-sm font-semibold mb-3 ${isCurrent ? 'text-slate-200' : 'text-slate-700'}`}>
                  {item.role}
                </h4>
                <p className={`text-sm leading-relaxed font-light ${isCurrent ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                {item.highlights && (
                  <div className="mt-4 pt-3 border-t border-slate-700/40 flex flex-wrap gap-1.5">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                          isCurrent ? 'bg-[#0B2239] text-[#42B8FF]' : 'bg-slate-200/80 text-slate-700'
                        }`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
