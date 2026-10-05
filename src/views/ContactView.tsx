import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { PageId } from '../agencyData';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
}

export const ContactView: React.FC<ContactViewProps> = () => {
  return (
    <div>
      {/* Dedicated Contact Page Hero Header */}
      <section className="bg-[#0A1128] text-white pt-14 pb-16 lg:pt-20 lg:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-medium text-[#38BDF8]">
              <span>Contact Digital Vibes</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Start Your Growth Partnership</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Let’s Discuss How to Grow Your Business Online.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you need a complete website overhaul, sustainable SEO rankings, or a multi-channel digital marketing strategy, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Details */}
      <ContactSection id="dedicated-contact-form" compactHeader />
    </div>
  );
};
