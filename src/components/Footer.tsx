import React from 'react';
import { ArrowUp, ExternalLink, Mail } from 'lucide-react';
import { EXECUTIVE_INFO } from '../data/executiveData';

export const Footer: React.FC = () => {
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
            <span className="text-[10px] font-semibold tracking-[0.22em] text-slate-400 uppercase mt-1 block">
              {EXECUTIVE_INFO.brandMotto}
            </span>
            <p className="text-xs text-slate-400 mt-2">
              {EXECUTIVE_INFO.title} • {EXECUTIVE_INFO.location}
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-6 text-xs font-medium text-slate-300">
            <a href="#home" className="hover:text-[#42B8FF] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#42B8FF] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#42B8FF] transition-colors">Experience</a>
            <a href="#impact" className="hover:text-[#42B8FF] transition-colors">Impact</a>
            <a href="#case-studies" className="hover:text-[#42B8FF] transition-colors">Case Studies</a>
            <a href="#thought-leadership" className="hover:text-[#42B8FF] transition-colors">Thought Leadership</a>
            <a href="#education" className="hover:text-[#42B8FF] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#42B8FF] transition-colors">Contact</a>
          </div>

          {/* Social / Direct */}
          <div className="flex items-center space-x-4">
            <a
              href={EXECUTIVE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white flex items-center space-x-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#42B8FF]" />
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`mailto:${EXECUTIVE_INFO.email}`}
              className="text-xs text-slate-400 hover:text-white flex items-center space-x-1"
            >
              <span>{EXECUTIVE_INFO.email}</span>
              <Mail className="w-3 h-3 text-[#42B8FF]" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-slate-800/80 hover:bg-[#1677D2] flex items-center justify-center text-slate-300 hover:text-white transition-colors ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Sudeep Biswas. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-wider text-slate-400">
            Technology Leader • Transformation Partner • SAP & S/4HANA Strategist
          </p>
        </div>
      </div>
    </footer>
  );
};
