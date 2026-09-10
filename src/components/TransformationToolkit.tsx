import React from 'react';
import { Compass, Database, Users, Code2, Sliders } from 'lucide-react';
import { TRANSFORMATION_TOOLKIT } from '../data/executiveData';

export const TransformationToolkit: React.FC = () => {
  const categoryIcons: Record<string, React.ElementType> = {
    STRATEGY: Compass,
    SAP: Database,
    LEADERSHIP: Users,
    ENGINEERING: Code2,
    OPERATIONS: Sliders
  };

  return (
    <section
      id="toolkit"
      className="bg-[#071A2D] text-white py-20 lg:py-24 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#42B8FF] uppercase mb-4">
            <span>CORE COMPETENCY MATRIX</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            THE TRANSFORMATION TOOLKIT
          </h2>
          <p className="text-[15.5px] text-slate-300 font-light mt-4">
            A comprehensive matrix of executive leadership capabilities, enterprise architecture disciplines, and modern engineering practices.
          </p>
        </div>

        {/* 5-Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TRANSFORMATION_TOOLKIT.map((category) => {
            const IconComponent = categoryIcons[category.title] || Compass;
            return (
              <div
                key={category.title}
                id={`toolkit-cat-${category.title.toLowerCase()}`}
                className="bg-[#0B2239] border border-slate-800 hover:border-slate-700 p-6 rounded flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#42B8FF] uppercase">
                      {category.title}
                    </span>
                    <IconComponent className="w-4 h-4 text-slate-400 group-hover:text-[#42B8FF] transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {category.title}
                  </h3>

                  {category.description && (
                    <p className="text-xs text-slate-400 font-light mb-4 pb-3 border-b border-slate-800">
                      {category.description}
                    </p>
                  )}

                  <ul className="space-y-2.5">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[13px] text-slate-300 font-medium flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1677D2] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    Enterprise Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
