/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImpactStrip } from './components/ImpactStrip';
import { TrustedEnterprises } from './components/TrustedEnterprises';
import { AboutSection } from './components/AboutSection';
import { TransformationPhilosophy } from './components/TransformationPhilosophy';
import { CareerJourney } from './components/CareerJourney';
import { CareerHighlights } from './components/CareerHighlights';
import { CaseStudies } from './components/CaseStudies';
import { TransformationToolkit } from './components/TransformationToolkit';
import { GlobalExperience } from './components/GlobalExperience';
import { ThoughtLeadership } from './components/ThoughtLeadership';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExecutiveProfileModal } from './components/ExecutiveProfileModal';

export default function App() {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#071A2D] text-white flex flex-col selection:bg-[#1677D2] selection:text-white">
      {/* 3. White Executive Header */}
      <Header
        onOpenProfile={() => setProfileModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main className="flex-grow">
        {/* 4. Hero Section — Reference Layout */}
        <Hero onOpenProfile={() => setProfileModalOpen(true)} />

        {/* 5. White Impact Metric Strip */}
        <ImpactStrip />

        {/* 6. Trusted Enterprises Logo Strip */}
        <TrustedEnterprises />

        {/* 7. About Section with 29+ Years Visual */}
        <AboutSection onOpenProfile={() => setProfileModalOpen(true)} />

        {/* 8. Transformation Philosophy: 3 Pillars + Connecting Line */}
        <TransformationPhilosophy />

        {/* 9. Career Journey: Interactive 3-Decade Milestones */}
        <CareerJourney />

        {/* 10. Leadership At Scale: Editorial Metrics */}
        <CareerHighlights />

        {/* 11. Selected Transformations: 4 Case Study Panels */}
        <CaseStudies />

        {/* 12. The Transformation Toolkit: 5-Category Matrix */}
        <TransformationToolkit />

        {/* 13. Global Experience: World Map & 10 Industries */}
        <GlobalExperience />

        {/* 14. Thought Leadership: Strategic Perspectives */}
        <ThoughtLeadership />

        {/* 15. Education: SPJIMR & VJTI Credentials */}
        <EducationSection />

        {/* 16. Executive Contact: Direct Channels & Inquiry */}
        <ContactSection />
      </main>

      {/* 17. Minimalist Executive Footer */}
      <Footer onOpenProfile={() => setProfileModalOpen(true)} />

      {/* 22. Downloadable Executive Profile & Briefing Dossier */}
      <ExecutiveProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
    </div>
  );
}
