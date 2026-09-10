import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION } from '../data/executiveData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="bg-[#F5F8FC] text-[#132238] py-20 lg:py-24 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#1677D2] uppercase mb-4">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2D] tracking-tight">
            EDUCATION & CREDENTIALS
          </h2>
          <p className="text-[15px] text-slate-600 font-light mt-4">
            Rigorous foundations in engineering systems and strategic commercial leadership from premier Indian academic institutions.
          </p>
        </div>

        {/* 2 Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-extrabold text-[#071A2D] tracking-tight">
                    {item.institution}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1677D2]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-sm font-semibold text-slate-500 mb-1">
                  {item.fullName}
                </div>

                <div className="text-xl font-bold text-[#071A2D] mb-1">
                  {item.degree} — {item.specialization}
                </div>

                <div className="font-mono text-xs font-bold text-[#1677D2] mb-4">
                  {item.years} • {item.location}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-light pt-4 border-t border-slate-100">
                  {item.notes}
                </p>
              </div>

              <div className="mt-6 pt-3 flex items-center space-x-2 text-xs text-slate-400 font-mono">
                <Award className="w-3.5 h-3.5 text-slate-400" />
                <span>Verified Academic Pedigree</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
