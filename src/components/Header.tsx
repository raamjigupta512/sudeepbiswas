import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, FileText } from 'lucide-react';
import { EXECUTIVE_INFO } from '../data/executiveData';

interface HeaderProps {
  onOpenProfile: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProfile, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Impact', href: '#impact' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Thought Leadership', href: '#thought-leadership' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80' : 'bg-white border-b border-slate-200'
      }`}
      style={{ minHeight: '82px' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-[82px]">
        {/* Brand / Logo */}
        <a
          href="#home"
          id="nav-logo"
          className="group flex flex-col justify-center text-left focus:outline-none"
        >
          <span className="font-serif text-[26px] sm:text-[28px] font-bold tracking-tight text-[#071A2D] leading-none transition-colors group-hover:text-[#1677D2]">
            {EXECUTIVE_INFO.name}
          </span>
          <span className="text-[9.5px] sm:text-[10px] font-semibold tracking-[0.24em] text-slate-500 uppercase mt-1.5 transition-colors group-hover:text-slate-700">
            {EXECUTIVE_INFO.brandMotto}
          </span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[13.5px] font-medium text-slate-700 hover:text-[#1677D2] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1677D2] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenProfile}
            id="nav-profile-button"
            className="hidden xl:inline-flex items-center space-x-1.5 text-[13px] font-medium text-slate-600 hover:text-[#071A2D] px-3.5 py-2 rounded transition-colors"
            title="View Executive Dossier"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Profile Dossier</span>
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            id="nav-cta-button"
            className="inline-flex items-center space-x-2 bg-[#071A2D] hover:bg-[#0B2239] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow active:translate-y-0"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 text-[#42B8FF]" />
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex sm:hidden items-center space-x-2">
          <a
            href="#contact"
            onClick={onOpenContact}
            className="text-[12px] font-semibold bg-[#071A2D] text-white px-3 py-1.5 rounded"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-2 text-slate-700 hover:text-[#071A2D] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-slate-800 hover:text-[#1677D2] py-2 border-b border-slate-100 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfile();
                }}
                className="w-full text-center py-2.5 text-[14px] font-medium text-slate-700 bg-slate-100 rounded"
              >
                View Executive Dossier (PDF)
              </button>
              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center py-2.5 text-[14px] font-semibold text-white bg-[#071A2D] rounded flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 text-[#42B8FF]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
