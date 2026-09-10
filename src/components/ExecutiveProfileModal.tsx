import React from 'react';
import { X, Download, FileText, Printer, ExternalLink, CheckCircle2, Shield } from 'lucide-react';
import { EXECUTIVE_INFO, CAREER_JOURNEY, CAREER_HIGHLIGHTS, EDUCATION } from '../data/executiveData';

interface ExecutiveProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveProfileModal: React.FC<ExecutiveProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-4xl rounded-lg shadow-2xl border border-slate-200 overflow-hidden text-[#132238] my-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="executive-dossier-title"
      >
        {/* Action Header */}
        <div className="bg-[#071A2D] text-white px-6 sm:px-8 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-[#1677D2] flex items-center justify-center text-white">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#42B8FF] uppercase block">
                Official Executive Dossier
              </span>
              <h3 id="executive-dossier-title" className="font-serif text-lg font-bold text-white leading-tight">
                {EXECUTIVE_INFO.name} — Confidential Profile
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
              title="Print profile"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <a
              href={`/${encodeURIComponent(EXECUTIVE_INFO.pdfFileName)}`}
              download={EXECUTIVE_INFO.pdfFileName}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-white px-3.5 py-1.5 rounded bg-[#1677D2] hover:bg-[#1264b3] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close Profile"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dossier Document Body */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-8 bg-white font-sans">
          {/* Document Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-serif text-3xl font-bold text-[#071A2D]">
                  {EXECUTIVE_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-[#1677D2] mt-1">
                  {EXECUTIVE_INFO.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {EXECUTIVE_INFO.tagline}
                </p>
              </div>
              <div className="text-left sm:text-right text-xs text-slate-600 space-y-0.5 font-mono">
                <p>{EXECUTIVE_INFO.location}</p>
                <p>{EXECUTIVE_INFO.email}</p>
                <p>{EXECUTIVE_INFO.phone}</p>
                <p className="text-[#1677D2]">{EXECUTIVE_INFO.linkedinDisplay}</p>
              </div>
            </div>
          </div>

          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1677D2] mb-2">
              Executive Positioning
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed font-light">
              Nearly three decades of distinguished leadership helping global enterprises simplify digital transformation. Renowned for architecting predictable, resilient, and customer-centric SAP ecosystems that drive measurable business value. Track record of scaling global delivery practices (up to 1,300+ consultants), optimizing P&L portfolios, and driving systemic business value across Maersk, Mindtree, Infosys, HCL Technologies, Capgemini Ernst & Young, Asian Paints, and Siemens.
            </p>
          </div>

          {/* Credibility Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F5F8FC] rounded border border-slate-200">
            {CAREER_HIGHLIGHTS.slice(0, 4).map((m, i) => (
              <div key={i} className="text-center sm:text-left">
                <span className="font-serif text-2xl font-bold text-[#071A2D] block">
                  {m.value}
                </span>
                <span className="text-[11px] font-medium text-slate-500 block mt-0.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Verified Appointments */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1677D2] mb-4">
              Career Trajectory & Appointments
            </h4>
            <div className="space-y-4">
              {CAREER_JOURNEY.map((item, idx) => (
                <div key={idx} className="border-l-2 border-[#1677D2] pl-4 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm">
                    <span className="font-bold text-[#071A2D]">
                      {item.role} — {item.company}
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold">
                      {item.year} {item.location ? `• ${item.location}` : ''}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Pedigree */}
          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1677D2] mb-3">
              Academic Background
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-[#071A2D]">{edu.institution}</div>
                  <div className="text-slate-600">{edu.degree} — {edu.specialization}</div>
                  <div className="font-mono text-slate-400 mt-0.5">{edu.years} • {edu.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification badge */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
            <span className="flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified executive records. Source: ITC Infotech / Executive Profile.</span>
            </span>
            <span className="font-mono">Document: SB-EXP-2026</span>
          </div>
        </div>

        {/* Modal Bottom Banner */}
        <div className="bg-slate-100 px-6 sm:px-8 py-3.5 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Direct download filename: {EXECUTIVE_INFO.pdfFileName}
          </span>
          <a
            href={`/${encodeURIComponent(EXECUTIVE_INFO.pdfFileName)}`}
            download={EXECUTIVE_INFO.pdfFileName}
            className="inline-flex items-center space-x-2 text-xs font-bold text-[#1677D2] hover:underline"
          >
            <span>Direct PDF Link</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
