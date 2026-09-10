import React from 'react';
import { CAREER_HIGHLIGHTS } from '../data/executiveData';

export const CareerHighlights: React.FC = () => {
  return (
    <section
      id="highlights"
      className="bg-[#0B2239] text-white py-20 lg:py-24 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#42B8FF] uppercase mb-4">
            <span>MEASURABLE EXECUTIVE FOOTPRINT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            LEADERSHIP AT SCALE
          </h2>
          <p className="text-[15.5px] text-slate-300 font-light mt-4">
            Proven executive stewardship demonstrated through quantifiable organizational growth, sustained delivery governance, and commercial impact.
          </p>
        </div>

        {/* 8 Metric Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CAREER_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#071A2D]/80 border border-slate-800 hover:border-slate-700 p-7 rounded transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="font-serif text-4xl lg:text-5xl font-bold text-white group-hover:text-[#42B8FF] transition-colors tracking-tight mb-2">
                  {item.value}
                </div>
                <h3 className="text-[15px] font-bold text-slate-100 leading-snug">
                  {item.label}
                </h3>
              </div>

              <p className="text-[12.5px] text-slate-400 font-light leading-relaxed mt-4 pt-4 border-t border-slate-800/80">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
