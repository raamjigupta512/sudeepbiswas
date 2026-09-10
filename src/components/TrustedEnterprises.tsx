import React from 'react';
import { TRUSTED_ENTERPRISES } from '../data/executiveData';

export const TrustedEnterprises: React.FC = () => {
  return (
    <section
      id="enterprises"
      className="bg-[#F5F8FC] border-b border-slate-200/80 py-10 lg:py-12"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          {/* Main Logo Container */}
          <div className="flex-1">
            <div className="text-[10.5px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-6 flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1677D2]" />
              <span>TRUSTED BY GLOBAL ENTERPRISES</span>
            </div>

            {/* Elegant Horizontal Logo Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {TRUSTED_ENTERPRISES.map((company) => (
                <div
                  key={company.name}
                  className="flex flex-col items-center justify-center p-2.5 rounded hover:bg-white transition-all duration-200 group border border-transparent hover:border-slate-200/60"
                  title={`${company.name} — ${company.subtitle}`}
                >
                  <span className="font-serif tracking-tight text-[15px] sm:text-[16px] font-bold text-[#0B2239]/80 group-hover:text-[#1677D2] transition-colors whitespace-nowrap">
                    {company.name}
                  </span>
                  <span className="text-[9px] text-slate-400 group-hover:text-slate-500 uppercase tracking-wider font-mono mt-0.5 truncate max-w-full">
                    {company.subtitle.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Statement */}
          <div className="lg:border-l lg:border-slate-300 lg:pl-8 flex items-center">
            <div className="text-left font-sans text-[11px] font-bold tracking-[0.25em] text-slate-600 uppercase leading-[1.6]">
              <span>DIFFERENT</span>
              <br />
              <span>INDUSTRIES.</span>
              <br />
              <span className="text-[#1677D2]">A STRONGER</span>
              <br />
              <span className="text-[#1677D2]">TOMORROW.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
