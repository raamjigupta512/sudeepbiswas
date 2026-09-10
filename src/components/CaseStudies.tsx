import React, { useState } from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { CASE_STUDIES } from '../data/executiveData';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

export const CaseStudies: React.FC = () => {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  return (
    <section
      id="case-studies"
      className="bg-white text-[#132238] py-20 lg:py-24 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#1677D2] uppercase mb-4">
            <span>PORTFOLIO ENGAGEMENTS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2D] tracking-tight">
            SELECTED TRANSFORMATIONS
          </h2>
          <p className="text-[15px] text-slate-600 font-light mt-4">
            Real-world enterprise modernizations demonstrating large-scale SAP engineering, global practice scaling, and cross-border digital governance.
          </p>
        </div>

        {/* 4 Case Studies Large-Format Panels */}
        <div className="space-y-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              id={study.id}
              className="group border border-slate-200 hover:border-slate-300 rounded p-8 lg:p-10 bg-[#FAFCFF] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Number, Company, Title */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <span className="font-serif text-4xl lg:text-5xl font-bold text-slate-300 group-hover:text-[#1677D2] transition-colors block mb-3">
                      {study.number}
                    </span>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#1677D2] uppercase block mb-1">
                      {study.company}
                    </span>
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#071A2D] tracking-tight">
                      {study.title}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <span className="text-xs text-slate-500 font-medium block">
                      {study.role}
                    </span>
                  </div>
                </div>

                {/* Right: Summary, Highlights, Tags, CTA */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  <p className="text-[15.5px] text-slate-700 leading-relaxed font-light">
                    {study.summary}
                  </p>

                  {/* Highlights Strip */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mr-1">
                      Focus:
                    </span>
                    {study.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-bold tracking-wider text-[#071A2D] bg-slate-200/70 px-2.5 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11.5px] text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveModalStudy(study)}
                      id={`explore-case-${study.id}`}
                      className="inline-flex items-center space-x-2 text-[13.5px] font-bold text-[#1677D2] hover:text-[#0B2239] transition-colors group/btn cursor-pointer"
                    >
                      <span>Explore case study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        caseStudy={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
      />
    </section>
  );
};
