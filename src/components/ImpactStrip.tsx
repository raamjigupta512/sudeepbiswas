import React from 'react';
import { TrendingDown, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { IMPACT_METRICS } from '../data/executiveData';

export const ImpactStrip: React.FC = () => {
  const icons = [
    TrendingDown,
    Zap,
    CheckCircle2,
    ShieldCheck
  ];

  return (
    <section
      id="impact"
      className="relative bg-white text-[#132238] border-b border-slate-200 py-12 lg:py-16 shadow-sm z-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {IMPACT_METRICS.map((metric, idx) => {
            const IconComponent = icons[idx] || CheckCircle2;
            return (
              <div
                key={metric.id}
                id={`impact-metric-${metric.id}`}
                className="flex flex-col justify-between px-0 sm:px-6 lg:px-8 first:pl-0 last:pr-0 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#1677D2] uppercase">
                      METRIC {metric.id}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F5F8FC] flex items-center justify-center text-[#1677D2] border border-slate-200 group-hover:bg-[#1677D2] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Impact Number */}
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-[#071A2D] tracking-tight mb-2">
                    {metric.value}
                  </div>

                  {/* Metric Label */}
                  <h3 className="text-[15px] font-bold text-[#132238] tracking-tight mb-2">
                    {metric.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[13px] text-slate-500 leading-relaxed font-normal mt-2 border-t border-slate-100 pt-3">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
