import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, ArrowRight, Copy, Check, Send } from 'lucide-react';
import { EXECUTIVE_INFO } from '../data/executiveData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    subject: 'Executive Transformation Inquiry',
    message: ''
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger direct mailto with subject and body
    const mailtoUrl = `mailto:${EXECUTIVE_INFO.email}?subject=${encodeURIComponent(formData.subject + ' - from ' + formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#071A2D] text-white py-20 lg:py-28 border-b border-slate-800 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#1677D2]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Direct Contact Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-bold tracking-[0.25em] text-[#42B8FF] uppercase mb-4">
                <span>STRATEGIC DIALOGUE</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                LET'S BUILD
                <br />
                WHAT'S NEXT.
              </h2>
              <p className="text-[16px] text-slate-300 font-light mt-5 leading-relaxed max-w-lg">
                For transformation leadership, technology strategy, SAP programs and strategic conversations.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="p-5 rounded bg-[#0B2239] border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-full bg-[#071A2D] border border-slate-700 flex items-center justify-center text-[#42B8FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${EXECUTIVE_INFO.email}`}
                      className="text-base font-semibold text-white hover:text-[#42B8FF] transition-colors"
                    >
                      {EXECUTIVE_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(EXECUTIVE_INFO.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-5 rounded bg-[#0B2239] border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-full bg-[#071A2D] border border-slate-700 flex items-center justify-center text-[#42B8FF]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Executive Telephone
                    </span>
                    <a
                      href={`tel:${EXECUTIVE_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-base font-semibold text-white hover:text-[#42B8FF] transition-colors"
                    >
                      {EXECUTIVE_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(EXECUTIVE_INFO.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="p-5 rounded bg-[#0B2239] border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-11 h-11 rounded-full bg-[#071A2D] border border-slate-700 flex items-center justify-center text-[#42B8FF]">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      LinkedIn Network
                    </span>
                    <a
                      href={EXECUTIVE_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-white hover:text-[#42B8FF] transition-colors"
                    >
                      {EXECUTIVE_INFO.linkedinDisplay}
                    </a>
                  </div>
                </div>
                <a
                  href={EXECUTIVE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  title="Open LinkedIn"
                >
                  <ArrowRight className="w-4 h-4 text-[#42B8FF]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Message / Strategic Inquiry Form */}
          <div className="lg:col-span-6 bg-[#0B2239] border border-slate-800 p-8 sm:p-10 rounded shadow-xl">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                Initiate Executive Dialogue
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Direct transmission to Sudeep Biswas's executive office.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-[#071A2D] border border-[#1677D2] rounded text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-[#42B8FF] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  Message Prepared
                </h4>
                <p className="text-sm text-slate-300">
                  Your mail client has been opened with your inquiry. You can also reach out directly via{' '}
                  <strong className="text-white font-semibold">{EXECUTIVE_INFO.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-[#42B8FF] underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Evans"
                      className="w-full bg-[#071A2D] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#42B8FF] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Enterprise / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Global Logistics Corp"
                      className="w-full bg-[#071A2D] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#42B8FF] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="d.evans@organization.com"
                      className="w-full bg-[#071A2D] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#42B8FF] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Inquiry Focus
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#071A2D] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#42B8FF] transition-colors"
                    >
                      <option value="SAP S/4HANA Strategy">SAP S/4HANA Strategy</option>
                      <option value="Executive Transformation Leadership">Executive Transformation Leadership</option>
                      <option value="Global Delivery Advisory">Global Delivery Advisory</option>
                      <option value="Strategic Partnership / Speaking">Strategic Partnership / Speaking</option>
                      <option value="Other Confidential Dialogue">Other Confidential Dialogue</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Strategic Context / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the enterprise context, transformation objectives or discussion parameters..."
                    className="w-full bg-[#071A2D] border border-slate-700/80 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#42B8FF] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-button"
                  className="w-full bg-[#1677D2] hover:bg-[#1366b5] text-white text-sm font-bold uppercase tracking-wider py-3.5 rounded flex items-center justify-center space-x-2 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#1677D2]/25"
                >
                  <span>Transmit Inquiry</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
