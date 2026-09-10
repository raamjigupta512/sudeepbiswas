import React from 'react';
import { Layers, Globe, Compass, CheckCircle } from 'lucide-react';
import { EXECUTIVE_INFO } from '../data/executiveData';

interface AboutSectionProps {
  onOpenProfile: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenProfile }) => {
  const attributes = [
    {
      title: 'STRATEGIC',
      lead: 'Think beyond technology.',
      description:
        'Framing technology choices not as technical upgrades, but as board-level value drivers: working capital efficiency, supply chain agility, and customer retention.',
    },
    {
      title: 'OPERATIONAL',
      lead: 'Turn strategy into execution.',
      description:
        'Bridging architectural blueprints with ground-level engineering rigor, DevSecOps velocity, multi-vendor stage-gate governance, and predictable SLA adherence.',
    },
    {
      title: 'HUMAN',
      lead: 'Build teams that sustain transformation.',
      description:
        'Cultivating psychological safety, transparent career pathways, and technical mentorship that sustained an 89% employee satisfaction score across global delivery organizations.',
    },
  ];

  return (
    <section
      id="about"
      className="bg-white text-[#132238] py-20 lg:py-28 border-b border-slate-200/90"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: Large Editorial Statement ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#1677D2] uppercase mb-4">
                <span>ABOUT SUDEEP</span>
              </div>

              {/* Editorial Statement */}
              <div className="space-y-2 mb-8">
                <p className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#071A2D] leading-[1.12] tracking-tight">
                  Nearly three decades.
                </p>
                <p className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#071A2D] leading-[1.12] tracking-tight">
                  Multiple industries.
                </p>
                <p className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-medium text-slate-500 leading-[1.18] tracking-tight pt-2">
                  One consistent mission:
                </p>
                <p className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#1677D2] leading-[1.18] tracking-tight">
                  Turn technology transformation into measurable business value.
                </p>
              </div>

              <p className="text-[15.5px] text-slate-600 leading-relaxed font-light">
                An executive leadership philosophy shaped by nearly thirty years of guiding premier global organizations through technological shifts — from foundational industrial engineering to enterprise ERP, cloud modernizations, and AI-accelerated delivery ecosystems.
              </p>
            </div>

            {/* Subtle Pedigree Strip */}
            <div className="mt-10 pt-6 border-t border-slate-200">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-slate-400 block mb-2">
                Executive Pedigree
              </span>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Siemens • Asian Paints • Capgemini • HCL Technologies • Infosys • Mindtree • A.P. Moller – Maersk • ITC Infotech
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Concise Biography & Three Attributes ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Concise Executive Biography */}
            <div className="space-y-4 text-[15.5px] sm:text-[16px] text-slate-700 leading-relaxed font-light mb-10">
              <p>
                Sudeep Biswas is a seasoned technology and transformation leader who currently serves as <strong className="font-semibold text-[#071A2D]">Vice President at ITC Infotech</strong>. Partnering with Fortune 500 enterprises, CXO suites, and global delivery centers, he stewards complex, mission-critical digital modernizations that demand strategic foresight and operational precision.
              </p>
              <p>
                His core executive mastery spans large-scale <strong className="font-semibold text-[#071A2D]">SAP and S/4HANA ecosystems</strong>, global enterprise delivery governance, and multi-vendor P&L management. Sudeep has directed delivery practices exceeding 1,300 consultants, co-owned multi-billion-dollar logistics platform engineering at A.P. Moller – Maersk, and pioneered large-program rollout frameworks that sustained &gt;97% SLA compliance across his career.
              </p>
            </div>

            {/* The Three Leadership Attributes: STRATEGIC / OPERATIONAL / HUMAN */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#1677D2] uppercase block mb-2">
                CORE LEADERSHIP ATTRIBUTES
              </span>

              <div className="grid grid-cols-1 gap-4">
                {attributes.map((attr) => (
                  <div
                    key={attr.title}
                    className="p-5 rounded bg-[#F8FAFC] border border-slate-200/80 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center space-x-2.5 mb-1.5">
                      <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#1677D2] uppercase">
                        {attr.title}
                      </span>
                      <span className="text-slate-300">—</span>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#071A2D] tracking-tight">
                        {attr.lead}
                      </h4>
                    </div>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed font-light pl-0 sm:pl-1">
                      {attr.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
