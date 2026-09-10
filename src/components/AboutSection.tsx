import React from 'react';
import { Award, Globe2, Layers, Users2, ShieldCheck, ArrowRight } from 'lucide-react';
import { EXECUTIVE_INFO } from '../data/executiveData';

interface AboutSectionProps {
  onOpenProfile: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenProfile }) => {
  return (
    <section
      id="about"
      className="bg-white text-[#132238] py-20 lg:py-24 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Headline & 29+ Years Visual */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#1677D2] uppercase mb-4">
                <span>ABOUT SUDEEP</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#071A2D] leading-[1.18] tracking-tight mb-6">
                Nearly three decades of transforming technology into measurable business value.
              </h2>

              <p className="text-[15px] text-slate-600 leading-relaxed font-light mb-8">
                Operating at the critical intersection of business strategy, global delivery, and modern enterprise software architecture.
              </p>
            </div>

            {/* Subtle "29+ YEARS" Visual Element */}
            <div className="relative p-7 bg-[#F5F8FC] border border-slate-200/90 rounded-sm mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-serif text-5xl lg:text-6xl font-extrabold text-[#071A2D] tracking-tight">
                    29+
                  </span>
                  <span className="text-xs font-bold text-[#1677D2] uppercase tracking-[0.2em] block mt-1">
                    YEARS OF EXECUTIVE IMPACT
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 font-medium block">
                    Siemens • SPJIMR • Asian Paints
                  </span>
                  <span className="text-xs text-slate-500 font-medium block">
                    Capgemini • HCL • Infosys
                  </span>
                  <span className="text-xs text-slate-500 font-semibold text-[#071A2D] block">
                    Mindtree • Maersk • ITC Infotech
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Biography & Competency Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-5 text-[15.5px] text-slate-700 leading-relaxed font-light">
              <p>
                Sudeep Biswas is a seasoned technology executive and digital transformation leader who currently serves as <strong className="font-semibold text-[#071A2D]">Vice President at ITC Infotech</strong>. Throughout a career spanning nearly thirty years, he has partnered with Fortune 500 boards, CXO leaders, and multi-disciplinary teams to conceptualize and execute mission-critical enterprise transformations.
              </p>

              <p>
                His core mastery spans the complete lifecycle of <strong className="font-semibold text-[#071A2D]">SAP and S/4HANA enterprise ecosystems</strong>, global IT product management, and complex multi-vendor program governance. Sudeep has stewarded multi-million dollar portfolio P&Ls, built and coached global consulting organizations exceeding 1,300 professionals, and pioneered robust rollout methodologies that ensure delivery predictability in highly regulated, cross-border environments.
              </p>

              <p>
                Prior to ITC Infotech, Sudeep was General Manager for the Order-to-Cash Platform at <strong className="font-semibold text-[#071A2D]">A.P. Moller – Maersk</strong>, co-leading the engineering backbone of their global New Finance & Tax Platform. Earlier, as Associate Vice President at <strong className="font-semibold text-[#071A2D]">Mindtree</strong>, he drove the hyper-growth of their global SAP practice while sustaining an industry-leading 89% employee engagement rating.
              </p>
            </div>

            {/* Strategic Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-start space-x-3 p-3 rounded bg-[#F8FAFC]">
                <Layers className="w-5 h-5 text-[#1677D2] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#071A2D]">Clean-Core SAP & S/4HANA</h4>
                  <p className="text-[12px] text-slate-500 mt-0.5">Greenfield architecture, data harmonization & Order-to-Cash mastery.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded bg-[#F8FAFC]">
                <Users2 className="w-5 h-5 text-[#1677D2] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#071A2D]">People & Talent Scale</h4>
                  <p className="text-[12px] text-slate-500 mt-0.5">Built 650+ and scaled 1300+ consultants with 89% employee engagement.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded bg-[#F8FAFC]">
                <Globe2 className="w-5 h-5 text-[#1677D2] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#071A2D]">Global Delivery & P&L</h4>
                  <p className="text-[12px] text-slate-500 mt-0.5">Seamless cross-border orchestration across India, Canada, Europe & US.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded bg-[#F8FAFC]">
                <ShieldCheck className="w-5 h-5 text-[#1677D2] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#071A2D]">Predictable Governance</h4>
                  <p className="text-[12px] text-slate-500 mt-0.5">&gt;97% SLA achievement with &lt;2% change failure rate.</p>
                </div>
              </div>
            </div>

            {/* Read Profile CTA */}
            <div className="mt-8 flex items-center space-x-4">
              <button
                onClick={onOpenProfile}
                id="about-read-dossier-btn"
                className="inline-flex items-center space-x-2 text-[13.5px] font-bold text-[#1677D2] hover:text-[#0B2239] transition-colors group"
              >
                <span>Read Full Executive Biography in Official Profile</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
