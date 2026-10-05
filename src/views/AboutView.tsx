import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  AGENCY_METRICS,
  WHY_CHOOSE_ITEMS,
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
      {/* Hero Header */}
      <section className="bg-white pt-14 pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs font-medium text-[#0284C7]">
              <span>About Us</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Digital Vibes — Your Digital Growth Partner</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0A1128] tracking-tight leading-[1.1]">
              We Help Ambitious Businesses Establish a Strong Online Presence and Scale With Clarity.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Digital Vibes is a modern digital marketing and web engineering agency built for small businesses, startups, local service leaders, and online brands that demand measurable commercial returns from their digital investments.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story & Visual */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1128] tracking-tight">
                Bridging the Gap Between Creative Brand Design and Performance Engineering.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Too often, growing businesses are forced to choose between a design studio that builds visually appealing websites that nobody finds on Google, or an SEO vendor that drives traffic to clunky, low-converting pages.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Digital Vibes was founded to unify both disciplines. We combine architectural web design, deep technical SEO, authoritative link building, social media demand generation, and lifecycle email marketing into a single cohesive system. Every strategy we deploy is engineered to attract the right audience, earn immediate trust, and convert attention into long-term customer relationships.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl transition-colors cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#0A1128] bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                >
                  <span>Work With Our Team</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
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

          {/* Quantitative Benchmarks */}
          <div className="mt-20 pt-14 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AGENCY_METRICS.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/90">
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

      {/* Who We Serve */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-medium text-[#0284C7] mb-2">
              <span>Who We Partner With</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Tailored Digital Growth</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
              Built for Ambitious Organizations Ready to Scale Online.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-3">
              <div className="text-xs font-mono-tabular font-semibold text-[#0284C7]">
                01. Small & Medium Businesses
              </div>
              <h3 className="font-display text-xl font-bold text-[#0A1128]">
                Turning Regional Reputation Into Digital Dominance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We help established businesses modernize outdated websites, capture high-intent search queries, and build automated lead pipelines that reduce reliance on word-of-mouth alone.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-3">
              <div className="text-xs font-mono-tabular font-semibold text-[#0284C7]">
                02. High-Growth Startups
              </div>
              <h3 className="font-display text-xl font-bold text-[#0A1128]">
                Rapid Market Positioning & Scalable Acquisition
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                From launch-ready web platforms to authoritative link building and B2B demand generation, we give startups the credibility and inbound velocity needed to win market share.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-3">
              <div className="text-xs font-mono-tabular font-semibold text-[#0284C7]">
                03. Local Service Businesses
              </div>
              <h3 className="font-display text-xl font-bold text-[#0A1128]">
                Owning Local Search & Map Pack Inquiries
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Legal practices, medical clinics, home services, and commercial contractors rely on our local SEO architecture and conversion-focused landing pages to keep their schedules booked.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-3">
              <div className="text-xs font-mono-tabular font-semibold text-[#0284C7]">
                04. Online & E-Commerce Brands
              </div>
              <h3 className="font-display text-xl font-bold text-[#0A1128]">
                Compounding Organic Traffic & Customer Lifetime Value
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We pair high-converting storefront UX with category SEO, paid social creative, and automated Klaviyo/email retention flows that turn first-time buyers into loyal advocates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Digital Vibes */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-medium text-[#0284C7] mb-2">
              <span>Why Choose Digital Vibes</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Our Operating Principles</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
              Five Commitments That Define Every Client Engagement.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.index}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 space-y-3"
              >
                <div className="font-mono-tabular text-xs font-semibold text-[#0284C7]">
                  Principle {item.index}
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
      </section>

      <CtaBanner onNavigate={onNavigate} />
      <ContactSection compactHeader />
    </div>
  );
};
