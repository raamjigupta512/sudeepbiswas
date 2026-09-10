import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/executiveData';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

export const CaseStudies: React.FC = () => {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  return (
    <section
      id="case-studies"
      className="bg-white text-[#132238] py-20 lg:py-28 border-b border-slate-200/90"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#1677D2] uppercase mb-4">
            <span>SELECTED PORTFOLIO ENGAGEMENTS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2D] tracking-tight">
            TRANSFORMATIONS THAT MATTER
          </h2>
          <p className="text-[15.5px] text-slate-600 font-light mt-4 max-w-2xl leading-relaxed">
            Real-world enterprise modernizations demonstrating large-scale SAP engineering, global practice scaling, and cross-border digital governance.
          </p>
        </div>

        {/* Large Editorial Case Study Compositions */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              id={study.id}
              className="group border border-slate-200 hover:border-slate-300 rounded p-8 lg:p-12 bg-[#FAFCFF] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Column: Number, Company, Title, Role (lg:col-span-5) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="font-serif text-5xl lg:text-6xl font-bold text-slate-300 group-hover:text-[#1677D2] transition-colors leading-none">
                        {study.number}
                      </span>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#1677D2] uppercase bg-blue-50 px-2.5 py-1 rounded">
                        {study.company}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#071A2D] tracking-tight leading-snug mb-3">
                      {study.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-medium">
                      Mandate: <span className="text-slate-700 font-semibold">{study.role}</span>
                    </p>
                  </div>

                  {/* Abstract System Architecture Visual Indicator */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block mb-2">
                      Transformation Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {study.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-bold tracking-wider text-[#071A2D] bg-slate-200/80 px-2.5 py-1 rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Executive Context, Key Outcomes, Trigger CTA (lg:col-span-7) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[10.5px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-2">
                      EXECUTIVE SUMMARY
                    </span>
                    <p className="text-[15.5px] text-slate-700 leading-relaxed font-light">
                      {study.summary}
                    </p>
                  </div>

                  {/* Key Strategic Outcomes Preview */}
                  <div className="bg-white p-5 rounded border border-slate-200/90 space-y-2.5">
                    <span className="text-[10.5px] font-mono font-bold tracking-widest text-[#1677D2] uppercase block">
                      KEY VALUE DELIVERED
                    </span>
                    <ul className="space-y-2">
                      {study.outcomes.slice(0, 2).map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-[13.5px] text-slate-700 font-light">
                          <CheckCircle2 className="w-4 h-4 text-[#1677D2] shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags and Action */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveModalStudy(study)}
                      id={`explore-case-${study.id}`}
                      className="inline-flex items-center space-x-2 text-[13.5px] font-bold text-[#1677D2] hover:text-[#071A2D] transition-colors group/btn cursor-pointer whitespace-nowrap self-start sm:self-auto"
                    >
                      <span>VIEW TRANSFORMATION</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Full Modal Dialog */}
      <CaseStudyModal
        study={activeModalStudy}
        isOpen={Boolean(activeModalStudy)}
        onClose={() => setActiveModalStudy(null)}
      />
    </section>
  );
};
