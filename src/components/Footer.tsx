import React from 'react';
import { ArrowUp, ExternalLink, Mail, FileText } from 'lucide-react';
import { EXECUTIVE_INFO } from '../data/executiveData';

interface FooterProps {
  onOpenProfile?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProfile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051322] text-white border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              {EXECUTIVE_INFO.name}
            </span>
            <span className="text-[10px] font-semibold tracking-[0.24em] text-[#42B8FF] uppercase mt-1 block">
              {EXECUTIVE_INFO.brandMotto}
            </span>
            <p className="text-xs text-slate-400 mt-2">
              {EXECUTIVE_INFO.title} • {EXECUTIVE_INFO.location}
            </p>
          </div>

          {/* Minimal Links: LinkedIn, Email, Profile */}
          <div className="flex items-center space-x-6 text-xs text-slate-300">
            <a
              href={EXECUTIVE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#42B8FF] transition-colors flex items-center space-x-1.5"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#42B8FF]" />
            </a>

            <span className="text-slate-700">•</span>

            <a
              href={`mailto:${EXECUTIVE_INFO.email}`}
              className="hover:text-[#42B8FF] transition-colors flex items-center space-x-1.5"
            >
              <span>Email</span>
              <Mail className="w-3.5 h-3.5 text-[#42B8FF]" />
            </a>

            {onOpenProfile && (
              <>
                <span className="text-slate-700">•</span>
                <button
                  onClick={onOpenProfile}
                  className="hover:text-[#42B8FF] transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Profile</span>
                  <FileText className="w-3.5 h-3.5 text-[#42B8FF]" />
                </button>
              </>
            )}

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-slate-800/80 hover:bg-[#1677D2] flex items-center justify-center text-slate-300 hover:text-white transition-colors ml-4"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Minimal Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Sudeep Biswas. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-wider text-slate-500">
            STRATEGY • TRANSFORMATION • PEOPLE • IMPACT
          </p>
        </div>
      </div>
    </footer>
  );
};
