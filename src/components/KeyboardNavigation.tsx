import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronUp, ChevronDown, Command, ArrowUp, ArrowDown, X } from 'lucide-react';

export interface ExecutiveSection {
  id: string;
  name: string;
  shortLabel: string;
}

export const EXECUTIVE_SECTIONS: ExecutiveSection[] = [
  { id: 'home', name: 'Executive Overview', shortLabel: 'Overview' },
  { id: 'impact', name: 'Measurable Impact', shortLabel: 'Impact' },
  { id: 'enterprises', name: 'Enterprise Clients', shortLabel: 'Clients' },
  { id: 'about', name: 'Executive Biography', shortLabel: 'About' },
  { id: 'philosophy', name: 'Transformation Philosophy', shortLabel: 'Philosophy' },
  { id: 'experience', name: 'Career Journey', shortLabel: 'Experience' },
  { id: 'highlights', name: 'Leadership & Practice Scale', shortLabel: 'Scale & Highlights' },
  { id: 'case-studies', name: 'Transformation Case Studies', shortLabel: 'Case Studies' },
  { id: 'toolkit', name: 'Transformation Toolkit', shortLabel: 'Capabilities' },
  { id: 'global', name: 'Global Footprint & Industries', shortLabel: 'Global' },
  { id: 'thought-leadership', name: 'Thought Leadership', shortLabel: 'Perspectives' },
  { id: 'education', name: 'Academic Credentials', shortLabel: 'Education' },
  { id: 'contact', name: 'Executive Contact', shortLabel: 'Contact' },
];

interface KeyboardNavigationProps {
  isModalOpen?: boolean;
}

export const KeyboardNavigation: React.FC<KeyboardNavigationProps> = ({ isModalOpen = false }) => {
  const [activeToast, setActiveToast] = useState<{
    sectionName: string;
    index: number;
    total: number;
  } | null>(null);
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Determine current active section index based on viewport scroll position
  const getCurrentSectionIndex = useCallback((): number => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const headerOffset = 100;

    // If at the very bottom, return last section
    if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50) {
      return EXECUTIVE_SECTIONS.length - 1;
    }

    // If near top, return first section
    if (scrollY < 200) {
      return 0;
    }

    // Find the section whose top is closest to or just above the header
    let currentIndex = 0;
    for (let i = 0; i < EXECUTIVE_SECTIONS.length; i++) {
      const el = document.getElementById(EXECUTIVE_SECTIONS[i].id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerOffset + 40) {
          currentIndex = i;
        }
      }
    }
    return currentIndex;
  }, []);

  // Smoothly scroll to target section with sticky header offset
  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= EXECUTIVE_SECTIONS.length) return;

    const targetSection = EXECUTIVE_SECTIONS[index];
    const el = document.getElementById(targetSection.id);

    if (targetSection.id === 'home' || !el) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const headerOffset = 82;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Maintain accessibility focus on the target element
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    }

    // Trigger toast notification
    setActiveToast({
      sectionName: targetSection.name,
      index: index + 1,
      total: EXECUTIVE_SECTIONS.length,
    });

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setActiveToast(null);
    }, 2400);
  }, []);

  // Global Keyboard Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not intercept if a modal dialog is currently open
      if (isModalOpen) return;

      // Do not intercept if typing inside input, textarea, select, or editable element
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable ||
          target.getAttribute('role') === 'textbox')
      ) {
        return;
      }

      // Allow default behavior if browser modifier keys (Ctrl, Meta, Alt) are pressed
      if (e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }

      const currentIndex = getCurrentSectionIndex();

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          if (currentIndex < EXECUTIVE_SECTIONS.length - 1) {
            scrollToSection(currentIndex + 1);
          }
          break;

        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (currentIndex > 0) {
            scrollToSection(currentIndex - 1);
          }
          break;

        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;

        case 'End':
          e.preventDefault();
          scrollToSection(EXECUTIVE_SECTIONS.length - 1);
          break;

        case '?':
          // Toggle keyboard shortcuts cheat-sheet
          e.preventDefault();
          setIsHelpVisible((prev) => !prev);
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, [getCurrentSectionIndex, isModalOpen, scrollToSection]);

  return (
    <>
      {/* Toast Notification when navigating via Keyboard */}
      {activeToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="bg-[#071A2D]/95 backdrop-blur-md border border-[#1677D2] text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center space-x-3 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#42B8FF] animate-ping" />
            <span className="font-semibold text-white tracking-wide">
              {activeToast.sectionName}
            </span>
            <span className="font-mono text-[#42B8FF] bg-[#1677D2]/30 px-2 py-0.5 rounded text-[10px]">
              {activeToast.index} / {activeToast.total}
            </span>
            <span className="hidden sm:inline text-slate-400 text-[11px]">
              (Use <kbd className="font-mono text-slate-200 bg-slate-800 px-1 py-0.5 rounded">↑</kbd> <kbd className="font-mono text-slate-200 bg-slate-800 px-1 py-0.5 rounded">↓</kbd> to jump)
            </span>
          </div>
        </div>
      )}

      {/* Discreet Fixed Keyboard Navigation Helper Pill (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 hidden md:flex items-center space-x-2">
        <div className="group relative">
          <button
            type="button"
            onClick={() => setIsHelpVisible(!isHelpVisible)}
            className="flex items-center space-x-2 bg-[#081F33]/90 hover:bg-[#071A2D] text-slate-300 hover:text-white border border-slate-700/80 hover:border-[#1677D2] px-3 py-1.5 rounded-full text-[11.5px] font-mono shadow-lg transition-all backdrop-blur cursor-pointer"
            title="Keyboard Navigation Shortcuts (Press ? to toggle)"
            aria-label="Keyboard Navigation Shortcuts"
          >
            <span className="flex items-center space-x-1 text-[#42B8FF]">
              <ArrowUp className="w-3 h-3" />
              <ArrowDown className="w-3 h-3" />
            </span>
            <span>Keys</span>
          </button>

          {/* Quick Hover Tooltip */}
          <div className="hidden group-hover:block absolute bottom-full right-0 mb-2 w-64 bg-[#081F33] border border-slate-700 rounded-lg p-3 text-xs text-slate-300 shadow-xl pointer-events-none">
            <div className="font-bold text-white mb-1.5 flex items-center justify-between">
              <span>Section Navigation</span>
              <span className="text-[10px] font-mono text-[#42B8FF]">Keyboard</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span>Next Section:</span>
                <kbd className="font-mono bg-[#051525] px-1.5 py-0.5 rounded border border-slate-700 text-white">↓</kbd>
              </div>
              <div className="flex justify-between">
                <span>Previous Section:</span>
                <kbd className="font-mono bg-[#051525] px-1.5 py-0.5 rounded border border-slate-700 text-white">↑</kbd>
              </div>
              <div className="flex justify-between">
                <span>Jump to Top:</span>
                <kbd className="font-mono bg-[#051525] px-1.5 py-0.5 rounded border border-slate-700 text-white">Home</kbd>
              </div>
              <div className="flex justify-between">
                <span>Jump to Bottom:</span>
                <kbd className="font-mono bg-[#051525] px-1.5 py-0.5 rounded border border-slate-700 text-white">End</kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Up / Down Quick Section Jump Buttons */}
        <div className="flex items-center bg-[#081F33]/90 border border-slate-700/80 rounded-full p-0.5 shadow-lg backdrop-blur">
          <button
            type="button"
            onClick={() => {
              const cur = getCurrentSectionIndex();
              if (cur > 0) scrollToSection(cur - 1);
            }}
            className="p-1.5 text-slate-400 hover:text-[#42B8FF] hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            title="Previous Section (Arrow Up)"
            aria-label="Previous Section"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => {
              const cur = getCurrentSectionIndex();
              if (cur < EXECUTIVE_SECTIONS.length - 1) scrollToSection(cur + 1);
            }}
            className="p-1.5 text-slate-400 hover:text-[#42B8FF] hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            title="Next Section (Arrow Down)"
            aria-label="Next Section"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Expanded Shortcuts Modal Dialog */}
      {isHelpVisible && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsHelpVisible(false)}
        >
          <div
            className="bg-[#081F33] border border-slate-700 rounded-xl max-w-md w-full p-6 text-white shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsHelpVisible(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
              aria-label="Close keyboard shortcuts"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2.5 mb-4">
              <Command className="w-5 h-5 text-[#42B8FF]" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Executive Section Navigation
              </h3>
            </div>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Navigate seamlessly between all 13 major executive portfolio sections using your keyboard without needing a mouse.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded bg-[#051525] border border-slate-800">
                <span className="text-slate-300 font-sans">Next Section</span>
                <div className="flex items-center space-x-1.5">
                  <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[#42B8FF]">↓ Arrow</kbd>
                  <span className="text-slate-500">or</span>
                  <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[#42B8FF]">PageDown</kbd>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-[#051525] border border-slate-800">
                <span className="text-slate-300 font-sans">Previous Section</span>
                <div className="flex items-center space-x-1.5">
                  <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[#42B8FF]">↑ Arrow</kbd>
                  <span className="text-slate-500">or</span>
                  <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[#42B8FF]">PageUp</kbd>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-[#051525] border border-slate-800">
                <span className="text-slate-300 font-sans">Jump to Top (Hero Overview)</span>
                <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-white font-bold">Home</kbd>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-[#051525] border border-slate-800">
                <span className="text-slate-300 font-sans">Jump to Bottom (Contact)</span>
                <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-white font-bold">End</kbd>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-[#051525] border border-slate-800">
                <span className="text-slate-300 font-sans">Toggle Shortcuts Dialog</span>
                <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[#42B8FF]">?</kbd>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setIsHelpVisible(false)}
                className="px-4 py-2 rounded bg-[#1677D2] hover:bg-[#1262AF] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
