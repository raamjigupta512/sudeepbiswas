import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight, FileText } from 'lucide-react';
import { EXECUTIVE_INFO } from '../data/executiveData';

interface HeaderProps {
  onOpenProfile: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProfile, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNavId, setActiveNavId] = useState<string>('');
  const [activeSectionLabel, setActiveSectionLabel] = useState<string>('');

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Impact', href: '#impact', id: 'impact' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'Thought Leadership', href: '#thought-leadership', id: 'thought-leadership' },
    { label: 'Education', href: '#education', id: 'education' },
  ];

  // Sections tracked in vertical document order to determine active navigation context
  const sectionsToTrack = [
    { id: 'home', label: 'Overview', navId: '' },
    { id: 'impact', label: 'Impact', navId: 'impact' },
    { id: 'enterprises', label: 'Clients', navId: 'impact' },
    { id: 'about', label: 'About', navId: 'about' },
    { id: 'philosophy', label: 'Philosophy', navId: 'about' },
    { id: 'experience', label: 'Experience', navId: 'experience' },
    { id: 'highlights', label: 'Leadership Scale', navId: 'experience' },
    { id: 'case-studies', label: 'Case Studies', navId: 'case-studies' },
    { id: 'toolkit', label: 'Capabilities', navId: 'case-studies' },
    { id: 'global', label: 'Global Footprint', navId: 'experience' },
    { id: 'thought-leadership', label: 'Thought Leadership', navId: 'thought-leadership' },
    { id: 'education', label: 'Education', navId: 'education' },
    { id: 'contact', label: 'Contact', navId: 'contact' },
  ];

  // High-performance scroll-spy and progress calculation
  useEffect(() => {
    let ticking = false;

    const calculateScrollState = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;

      setScrollProgress(progress);
      setScrolled(scrollY > 20);

      // Check if at page bottom
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveNavId('contact');
        setActiveSectionLabel('Contact');
        ticking = false;
        return;
      }

      // Check if near top hero
      if (scrollY < 240) {
        setActiveNavId('');
        setActiveSectionLabel('Overview');
        ticking = false;
        return;
      }

      // Scan bottom-up to detect the current primary section in the viewport
      const threshold = 140;
      let matchedNavId = '';
      let matchedLabel = '';

      for (let i = sectionsToTrack.length - 1; i >= 0; i--) {
        const item = sectionsToTrack[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            matchedNavId = item.navId;
            matchedLabel = item.label;
            break;
          }
        }
      }

      setActiveNavId(matchedNavId);
      setActiveSectionLabel(matchedLabel || 'Overview');
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateScrollState);
        ticking = true;
      }
    };

    calculateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Smooth scroll handler with sticky header offset compensation
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);

      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const target = document.getElementById(targetId);
      if (target) {
        const headerOffset = 84;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    },
    []
  );

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-white border-b border-slate-200'
      }`}
      style={{ minHeight: '82px' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-[82px] relative">
        {/* Brand / Logo */}
        <a
          href="#home"
          id="nav-logo"
          onClick={(e) => handleNavClick(e, 'home')}
          className="group flex flex-col justify-center text-left focus:outline-none shrink-0"
        >
          <span className="font-serif text-[26px] sm:text-[28px] font-bold tracking-tight text-[#071A2D] leading-none transition-colors group-hover:text-[#1677D2]">
            {EXECUTIVE_INFO.name}
          </span>
          <span className="text-[9.5px] sm:text-[10px] font-semibold tracking-[0.24em] text-slate-500 uppercase mt-1.5 transition-colors group-hover:text-slate-700">
            {EXECUTIVE_INFO.brandMotto}
          </span>
        </a>

        {/* Center Desktop Navigation with Scroll-Spy Highlighting & Keyboard Arrow Navigation */}
        <nav
          className="hidden lg:flex items-center space-x-5 xl:space-x-7 whitespace-nowrap"
          aria-label="Main Navigation"
          role="menubar"
        >
          {navLinks.map((link, idx) => {
            const isActive = activeNavId === link.id;

            return (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.id}`}
                role="menuitem"
                tabIndex={0}
                onClick={(e) => handleNavClick(e, link.id)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextLink = navLinks[(idx + 1) % navLinks.length];
                    const el = document.getElementById(`nav-link-${nextLink.id}`);
                    el?.focus();
                  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevLink = navLinks[(idx - 1 + navLinks.length) % navLinks.length];
                    const el = document.getElementById(`nav-link-${prevLink.id}`);
                    el?.focus();
                  } else if (e.key === 'Home') {
                    e.preventDefault();
                    const firstLink = navLinks[0];
                    document.getElementById(`nav-link-${firstLink.id}`)?.focus();
                  } else if (e.key === 'End') {
                    e.preventDefault();
                    const lastLink = navLinks[navLinks.length - 1];
                    document.getElementById(`nav-link-${lastLink.id}`)?.focus();
                  }
                }}
                className={`group relative text-[13.5px] py-1.5 transition-colors duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677D2] rounded px-1 ${
                  isActive
                    ? 'font-semibold text-[#1677D2]'
                    : 'font-medium text-slate-700 hover:text-[#1677D2]'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span>{link.label}</span>

                {/* Subtle active accent underline indicator */}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#1677D2] opacity-100 scale-x-100 shadow-[0_1px_4px_rgba(22,119,210,0.35)]'
                      : 'bg-[#1677D2] opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-75'
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        {/* Right: Profile, Active Context Badge & Get In Touch CTA */}
        <div className="hidden sm:flex items-center space-x-3 shrink-0">
          {/* Subtle active section context pill when scrolled */}
          {scrolled && activeSectionLabel && activeSectionLabel !== 'Overview' && (
            <div className="hidden xl:inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-slate-100/90 border border-slate-200/80 text-[11px] font-medium text-slate-700 animate-in fade-in duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1677D2] animate-pulse" />
              <span className="font-mono text-[9px] text-slate-400 tracking-wider uppercase">ACTIVE:</span>
              <span className="font-semibold text-[#071A2D]">{activeSectionLabel}</span>
            </div>
          )}

          <button
            onClick={onOpenProfile}
            id="nav-profile-button"
            className="inline-flex items-center space-x-1.5 text-[13.5px] font-semibold text-slate-700 hover:text-[#071A2D] px-3.5 py-2 rounded transition-colors cursor-pointer"
            title="View Executive Dossier"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Profile</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
              const el = document.getElementById('contact');
              if (el) {
                const headerOffset = 84;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            id="nav-cta-button"
            className={`inline-flex items-center space-x-2 text-[13px] font-semibold px-4.5 py-2.5 rounded transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow active:translate-y-0 whitespace-nowrap ${
              activeNavId === 'contact'
                ? 'bg-[#1677D2] text-white ring-2 ring-[#42B8FF]/40'
                : 'bg-[#071A2D] hover:bg-[#0B2239] text-white'
            }`}
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 text-[#42B8FF]" />
          </a>
        </div>

        {/* Mobile active indicator & hamburger toggle */}
        <div className="flex sm:hidden items-center space-x-2">
          {scrolled && activeSectionLabel && activeSectionLabel !== 'Overview' && (
            <span className="inline-flex items-center text-[10px] font-mono tracking-wider font-semibold text-[#1677D2] bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-full truncate max-w-[110px]">
              {activeSectionLabel}
            </span>
          )}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
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

      {/* ================= SUBTLE SCROLL-SPY PROGRESS INDICATOR ================= */}
      <div
        id="scroll-progress-bar"
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-100 overflow-hidden pointer-events-none z-20"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div
          className="h-full bg-gradient-to-r from-[#1677D2] via-[#2A93F5] to-[#42B8FF] transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(66,184,255,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer Menu with Active Highlights */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeNavId === link.id;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-[14.5px] py-2.5 px-3 rounded transition-colors flex items-center justify-between ${
                    isActive
                      ? 'font-semibold text-[#1677D2] bg-blue-50/80 border-l-3 border-[#1677D2]'
                      : 'font-medium text-slate-800 hover:text-[#1677D2] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#1677D2] bg-white px-2 py-0.5 rounded border border-blue-200/80">
                      Viewing
                    </span>
                  )}
                </a>
              );
            })}

            <div className="pt-3 flex flex-col space-y-2 border-t border-slate-100 mt-2">
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
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onOpenContact();
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
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
