import React from 'react';
import { Compass, Database, Users, Code2, ArrowRight } from 'lucide-react';

export const TransformationToolkit: React.FC = () => {
  const toolkitColumns = [
    {
      title: 'STRATEGY',
      icon: Compass,
      description: 'Aligning boardroom vision with pragmatic technological execution.',
      items: [
        'Technology Strategy',
        'Business Transformation',
        'IT Strategy & Roadmaps',
        'Target Operating Models',
        'Enterprise Architecture Alignment',
      ],
    },
    {
      title: 'SAP',
      icon: Database,
      description: 'Architecting resilient, clean-core enterprise application ecosystems.',
      items: [
        'SAP S/4HANA Greenfield & Brownfield',
        'SAP Implementation & Governance',
        'Global SAP Rollouts',
        'Order-to-Cash (O2C) Platforms',
        'SAP Ecosystem Optimization',
      ],
    },
    {
      title: 'LEADERSHIP',
      icon: Users,
      description: 'Inspiring global teams and steering multi-vendor delivery governance.',
      items: [
        'Global Delivery Orchestration',
        'P&L Management & Commercial Growth',
        'People Leadership (650+ Led)',
        'CXO Stakeholder Management',
        'Multi-Vendor Governance',
      ],
    },
    {
      title: 'ENGINEERING',
      icon: Code2,
      description: 'Modernizing release velocity, pipeline security, and intelligent automation.',
      items: [
        'Agile & Scaled Delivery Frameworks',
        'DevSecOps & Automated Pipelines',
        'GenAI & AI-Powered Operations',
        'Process Automation & RPA',
        'Continuous Integration & Quality Engineering',
      ],
    },
  ];

  return (
    <section
      id="toolkit"
      className="bg-[#071A2D] text-white py-20 lg:py-28 border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#42B8FF] uppercase mb-4">
            <span>CORE COMPETENCY MATRIX</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            THE TRANSFORMATION TOOLKIT
          </h2>
          <p className="text-[15.5px] text-slate-300 font-light mt-4 max-w-2xl leading-relaxed">
            A battle-tested matrix of executive leadership capabilities, enterprise architecture disciplines, and modern engineering practices honed over three decades.
          </p>
        </div>

        {/* Four Distinct Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolkitColumns.map((col) => {
            const IconComponent = col.icon;
            return (
              <div
                key={col.title}
                id={`toolkit-cat-${col.title.toLowerCase()}`}
                className="bg-[#0B2239] border border-slate-800 hover:border-slate-700 p-8 rounded flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#42B8FF] uppercase">
                      {col.title}
                    </span>
                    <IconComponent className="w-4 h-4 text-slate-400 group-hover:text-[#42B8FF] transition-colors" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {col.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-light mb-6 pb-4 border-b border-slate-800 leading-relaxed">
                    {col.description}
                  </p>

                  <ul className="space-y-3">
                    {col.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[13.5px] text-slate-300 font-medium flex items-start space-x-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1677D2] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-slate-400">
                  <span>Executive Mastery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#42B8FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
