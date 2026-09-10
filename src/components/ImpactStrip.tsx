import React, { useEffect, useState, useRef } from 'react';
import { TrendingDown, Zap, ShieldCheck, CheckCircle2, ArrowRight, Users, GitBranch, Cpu, Award } from 'lucide-react';
import { IMPACT_METRICS } from '../data/executiveData';

export const ImpactStrip: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const icons = [TrendingDown, Zap, CheckCircle2, ShieldCheck];

  const storyStages = [
    {
      step: '01',
      title: 'PEOPLE',
      subtitle: 'Culture & Capability',
      description: 'Building high-trust, psychologically safe global teams with 89% employee engagement and capability acceleration.',
      icon: Users,
    },
    {
      step: '02',
      title: 'PROCESS',
      subtitle: 'Predictable Governance',
      description: 'Institutionalizing Agile, DevSecOps, and ITIL frameworks ensuring consistent <2% change failure rates.',
      icon: GitBranch,
    },
    {
      step: '03',
      title: 'TECHNOLOGY',
      subtitle: 'Modern Architecture',
      description: 'Architecting clean-core SAP S/4HANA, automated Order-to-Cash flows, and pragmatic GenAI accelerators.',
      icon: Cpu,
    },
    {
      step: '04',
      title: 'BUSINESS VALUE',
      subtitle: 'Quantifiable Returns',
      description: 'Delivering 40% TCO reduction, 30% cycle-time acceleration, and predictable long-term shareholder value.',
      icon: Award,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative bg-[#F5F8FC] text-[#132238] border-b border-slate-200/90 py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#1677D2] uppercase mb-4">
            <span>THE TRANSFORMATION IMPACT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2D] tracking-tight leading-[1.15]">
            Turning complexity into
            <br />
            measurable business value.
          </h2>
          <p className="text-[15.5px] text-slate-600 font-light mt-4 max-w-2xl leading-relaxed">
            Every technology initiative is evaluated and governed against stringent business outcomes: total cost reduction, velocity acceleration, operational resilience, and sustained delivery quality.
          </p>
        </div>

        {/* 4 Impact Numbers with Whitespace & Vertical Separators (No heavy rounded boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-slate-200/80 mb-20 lg:mb-24 pb-12 border-b border-slate-200/80">
          {IMPACT_METRICS.map((metric, idx) => {
            const IconComponent = icons[idx] || CheckCircle2;
            return (
              <div
                key={metric.id}
                id={`impact-metric-${metric.id}`}
                className="flex flex-col justify-between px-0 sm:px-6 lg:px-8 first:pl-0 last:pr-0 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#1677D2] uppercase">
                      BENCHMARK {metric.id}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1677D2] border border-slate-200 group-hover:border-[#1677D2] transition-colors">
                      <IconComponent className="w-4 h-4 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Large Impact Number */}
                  <div className="font-serif text-5xl sm:text-6xl font-extrabold text-[#071A2D] tracking-tight mb-2.5">
                    {metric.value}
                  </div>

                  {/* Metric Label */}
                  <h3 className="text-[16px] font-bold text-[#071A2D] tracking-tight">
                    {metric.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[13px] text-slate-600 leading-relaxed font-normal mt-3 pt-3 border-t border-slate-200/60">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Impact Story: The Conceptual Backbone (PEOPLE → PROCESS → TECHNOLOGY → BUSINESS VALUE) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200/80 gap-4">
            <div>
              <span className="text-[10.5px] font-mono font-bold tracking-[0.24em] text-[#1677D2] uppercase block mb-1">
                TRANSFORMATION METHODOLOGY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#071A2D] tracking-tight">
                The Four-Pillar Value Sequence
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-mono tracking-wider uppercase">
              End-to-end orchestration model
            </p>
          </div>

          {/* Sequence Rail with Connecting Animated Flow Line */}
          <div className="relative">
            {/* Connecting SVG Flow Line */}
            <div className="hidden lg:block absolute top-12 left-8 right-8 h-1 z-0 pointer-events-none" aria-hidden="true">
              <svg className="w-full h-4 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="0%"
                  y1="2"
                  x2="100%"
                  y2="2"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <line
                  x1="0%"
                  y1="2"
                  x2="100%"
                  y2="2"
                  stroke="#1677D2"
                  strokeWidth="2.5"
                  className="anim-flow-dash"
                  strokeDasharray="16 16"
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {storyStages.map((stage, idx) => {
                const IconComponent = stage.icon;
                return (
                  <div
                    key={stage.step}
                    className="bg-white p-7 rounded border border-slate-200/90 hover:border-slate-300 shadow-sm flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1"
                  >
                    <div>
                      {/* Step Indicator and Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-full bg-[#F5F8FC] border border-slate-200 flex items-center justify-center text-[#1677D2] font-mono text-xs font-bold group-hover:bg-[#1677D2] group-hover:text-white transition-colors">
                          {stage.step}
                        </div>
                        <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-[#1677D2] transition-colors" />
                      </div>

                      {/* Stage Name */}
                      <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#1677D2] uppercase block">
                        STAGE {stage.step}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-[#071A2D] tracking-tight mt-1 mb-1">
                        {stage.title}
                      </h4>
                      <div className="text-xs font-semibold text-slate-500 mb-3">
                        {stage.subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-[13px] text-slate-600 leading-relaxed font-light">
                        {stage.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>{idx < 3 ? 'Enables Next Stage' : 'Measurable Impact'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#1677D2]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
