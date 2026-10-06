import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  AGENCY_METRICS,
  WHY_DIGITAL_VIBES_ITEMS,
  WHY_STATS_HIGHLIGHTS,
  PROCESS_STEPS,
  IMAGES,
  PageId,
} from '../agencyData';
import { ResilientImage } from '../components/ResilientImage';
import { CtaBanner } from '../components/CtaBanner';
import { ContactSection } from '../components/ContactSection';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Futuristic Hero Header */}
      <section className="bg-[#050A18] text-white pt-14 pb-20 lg:pt-20 lg:pb-24 border-b border-slate-800/80 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 75% 25%, rgba(14, 165, 233, 0.16) 0%, transparent 45%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs font-medium text-[#38BDF8]">
              <span>About Digital Vibes</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Turn Your Vision Into Digital Growth.</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Helping Businesses Transform Bold Ideas Into Professional Digital Brands.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Digital Vibes is a futuristic digital marketing and web engineering agency built for ambitious businesses, startups, and online brands that want to stand out, attract customers, and scale online.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story & Visual */}
      <section className="py-20 lg:py-28 bg-white text-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1128] tracking-tight">
                Where Creative Vision Meets High-Performance Digital Engineering.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Too often, growing businesses are forced to choose between a creative studio that builds visually striking websites that nobody finds on search engines, or an analytics vendor that drives traffic to uninspiring, template-driven pages.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Digital Vibes was founded to unify both worlds. We help businesses transform their ideas into unforgettable digital brands—combining custom Website Design & Development, SEO & Search Growth, Social Media Marketing, Email Marketing, and White-Hat Link Building under one roof.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:from-[#0369A1] hover:to-[#0284C7] rounded-xl transition-all cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#0A1128] bg-[#F8FAFC] border border-slate-300 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  <span>Start Your Project</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#050A18]">
                <ResilientImage
                  src={IMAGES.about}
                  alt="Digital Vibes senior strategy and web design team"
                  aspectClass="aspect-[4/3]"
                  className="w-full"
                  fallbackTitle="Digital Vibes Collaborative Studio"
                />
              </div>
            </div>
          </div>

          {/* 3 Core Stat Highlights + Quantitative Benchmarks */}
          <div className="mt-20 pt-14 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_STATS_HIGHLIGHTS.map((stat, idx) => (
              <div key={idx} className="bg-[#050A18] text-white p-7 rounded-2xl border border-slate-800">
                <div className="font-display text-2xl font-bold text-[#38BDF8]">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mt-2">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENCY_METRICS.map((item, idx) => (
              <div key={idx} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/90">
                <div className="font-mono-tabular text-3xl font-bold text-[#0284C7]">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-[#0A1128] mt-2">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital Vibes & 4-Step Process Overview */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] text-[#0A1128] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div>
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-semibold text-[#0284C7] mb-2">
                <span>Why Digital Vibes?</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Five Pillars of Excellence</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
                What Sets Digital Vibes Apart.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_DIGITAL_VIBES_ITEMS.map((item) => (
                <div
                  key={item.index}
                  className="bg-white p-7 rounded-2xl border border-slate-200/90 space-y-3"
                >
                  <div className="font-mono-tabular text-xs font-semibold text-[#0284C7]">
                    {item.index}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0A1128]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-slate-200">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-semibold text-[#0284C7] mb-2">
                <span>Our Process</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>01 Discover to 04 Grow</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-[#0A1128] tracking-tight">
                A Proven 4-Step Methodology.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 space-y-2"
                >
                  <div className="font-mono-tabular text-xs font-bold text-[#0284C7]">
                    {step.label}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0A1128]">
                    {step.subtitle}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
      <ContactSection compactHeader />
    </div>
  );
};
