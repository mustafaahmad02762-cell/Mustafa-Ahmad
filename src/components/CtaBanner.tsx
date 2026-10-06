import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../agencyData';

interface CtaBannerProps {
  onNavigate: (page: PageId) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 lg:py-32 bg-[#050A18] text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Subtle futuristic electric sky blue radial illumination */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.16) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(56, 189, 248, 0.12) 0%, transparent 45%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#0B132B] via-[#0F172A] to-[#071126] border border-sky-500/30 p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-medium text-[#38BDF8] tracking-wide">
              <span>Digital Vibes</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Turn Your Vision Into Digital Growth</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Ready to Make Your Business Stand Out?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Let’s create a digital presence that people remember.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:from-[#0369A1] hover:to-[#0284C7] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38BDF8]"
            >
              <span>Let’s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
