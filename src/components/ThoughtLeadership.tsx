import React from 'react';
import { ExternalLink, BookOpen, Clock, Sparkles } from 'lucide-react';
import { THOUGHT_LEADERSHIP_TOPICS, EXECUTIVE_INFO } from '../data/executiveData';

export const ThoughtLeadership: React.FC = () => {
  return (
    <section
      id="thought-leadership"
      className="bg-white text-[#132238] py-20 lg:py-24 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#1677D2] uppercase mb-4">
              <span>PERSPECTIVES & ESSAYS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2D] tracking-tight">
              THOUGHT LEADERSHIP
            </h2>
            <p className="text-[15px] text-slate-600 font-light mt-4">
              Executive viewpoints on clean-core ERP architectures, pragmatic automation, talent retention, and outcome-based global delivery models.
            </p>
          </div>

          <div>
            <a
              href={EXECUTIVE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="thought-leadership-linkedin-cta"
              className="inline-flex items-center space-x-2 text-[13.5px] font-bold text-[#1677D2] hover:text-[#0B2239] border border-slate-300 hover:border-slate-400 px-5 py-3 rounded transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Follow on LinkedIn</span>
              <ExternalLink className="w-4 h-4 text-[#1677D2]" />
            </a>
          </div>
        </div>

        {/* Articles / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {THOUGHT_LEADERSHIP_TOPICS.map((topic, idx) => (
            <div
              key={idx}
              className="bg-[#FAFCFF] border border-slate-200/90 rounded p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#1677D2] uppercase bg-blue-50 px-2.5 py-1 rounded">
                    {topic.theme}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{topic.status}</span>
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#071A2D] tracking-tight mb-3 leading-snug group-hover:text-[#1677D2] transition-colors">
                  {topic.title}
                </h3>

                <p className="text-[13.5px] text-slate-600 leading-relaxed font-light">
                  {topic.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 italic">
                  Publication pending
                </span>
                <span className="text-xs font-semibold text-[#1677D2] inline-flex items-center space-x-1">
                  <span>Executive Note</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
