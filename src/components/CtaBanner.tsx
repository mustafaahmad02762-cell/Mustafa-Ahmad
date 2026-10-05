import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../agencyData';

interface CtaBannerProps {
  onNavigate: (page: PageId) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 lg:py-24 bg-[#0A1128] text-white relative overflow-hidden">
      {/* Subtle architectural grid lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, #38BDF8 0%, transparent 45%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 border-t border-b border-slate-800 py-12 lg:py-16">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-medium text-[#38BDF8] tracking-wide">
              <span>Digital Vibes Growth Partnership</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Custom Roadmaps for Ambitious Brands</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Partner with Digital Vibes to build a high-converting website, dominate search rankings, and turn digital channels into predictable revenue.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38BDF8]"
            >
              <span>Let’s Work Together</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
