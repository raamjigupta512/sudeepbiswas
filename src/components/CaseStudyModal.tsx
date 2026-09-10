import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl rounded-lg shadow-2xl border border-slate-200 overflow-hidden text-[#132238] my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-case-title"
      >
        {/* Modal Header */}
        <div className="bg-[#071A2D] text-white p-6 sm:p-8 flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="font-mono text-xs font-bold tracking-widest text-[#42B8FF] uppercase">
                CASE STUDY {caseStudy.number}
              </span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                • {caseStudy.company}
              </span>
            </div>
            <h3 id="modal-case-title" className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {caseStudy.title}
            </h3>
            <p className="text-sm font-medium text-slate-300 mt-1">
              {caseStudy.role}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Executive Context */}
          <div className="bg-[#F5F8FC] p-4.5 rounded border border-slate-200">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1677D2] mb-1">
              Enterprise Context
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {caseStudy.context}
            </p>
          </div>

          {/* Business Challenge */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
              The Strategic Challenge
            </h4>
            <p className="text-[14.5px] text-slate-700 leading-relaxed font-light">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Strategic Solution & Architecture */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1677D2] mb-2">
              Strategic Strategy & Leadership
            </h4>
            <p className="text-[14.5px] text-slate-700 leading-relaxed font-light">
              {caseStudy.strategy}
            </p>
          </div>

          {/* Measurable Outcomes */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-3">
              Measurable Outcomes & Deliverables
            </h4>
            <div className="space-y-2.5">
              {caseStudy.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Tags */}
          <div className="pt-4 border-t border-slate-200">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Domain & Architecture Focus
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Verified leadership case study
          </span>
          <button
            onClick={onClose}
            className="bg-[#071A2D] hover:bg-[#0B2239] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
