import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { CORE_SERVICES, PageId, ServiceItem } from '../agencyData';
import { ResilientImage } from '../components/ResilientImage';
import { CtaBanner } from '../components/CtaBanner';
import { ContactSection } from '../components/ContactSection';

interface ServiceDetailViewProps {
  service: ServiceItem;
  onNavigate: (page: PageId) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const otherServices = CORE_SERVICES.filter(
    (s) => s.id !== service.id && s.id !== 'services'
  );

  const scrollToServiceContact = () => {
    const el = document.getElementById('service-contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div>
      {/* 1. SERVICE HERO */}
      <section className="bg-white pt-12 pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-[#0A1128] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="hover:text-[#0A1128] transition-colors cursor-pointer"
            >
              Services
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-[#0284C7] font-medium">{service.shortTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-medium text-[#0284C7]">
                <span>Capability {service.index}</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>{service.kicker}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1128] tracking-tight leading-[1.1]">
                {service.fullHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.fullSubheading}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToServiceContact}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Get Started With {service.shortTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0A1128] bg-[#F8FAFC] hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>All Agency Services</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#0A1128]">
                <ResilientImage
                  src={service.image}
                  alt={service.title}
                  aspectClass="aspect-video"
                  className="w-full"
                  fallbackTitle={service.title}
                />
                <div className="p-5 bg-[#0A1128] text-white border-t border-slate-800 grid grid-cols-3 gap-4">
                  {service.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="font-mono-tabular text-lg sm:text-xl font-bold text-[#38BDF8]">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC OVERVIEW & DELIVERABLES */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-medium text-[#0284C7]">
                <span>Why It Matters</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Commercial Impact</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1128] tracking-tight">
                How Digital Vibes Approaches {service.shortTitle}.
              </h2>
              {service.overview.map((paragraph, index) => (
                <p key={index} className="text-base text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-slate-200/90 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tabular text-xs font-semibold text-[#0284C7]">
                      0{idx + 1}. Deliverable
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0A1128]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLAIM-TO-PROOF CASE STUDY */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A1128] text-white rounded-2xl p-8 sm:p-12 lg:p-14 border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="text-xs text-[#38BDF8]">
                  <span>Verified Case Study</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>{service.caseStudy.client} ({service.caseStudy.industry})</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span>Timeframe: {service.caseStudy.timeframe}</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {service.caseStudy.outcomeMetric}
                </h2>

                <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-white font-semibold">The Challenge: </strong>
                    {service.caseStudy.challenge}
                  </p>
                  <p>
                    <strong className="text-white font-semibold">The Digital Vibes Solution: </strong>
                    {service.caseStudy.solution}
                  </p>
                  <p>
                    <strong className="text-[#38BDF8] font-semibold">Business Outcome: </strong>
                    {service.caseStudy.outcomeDetail}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900/90 p-7 rounded-xl border border-slate-800 space-y-4">
                <p className="text-base text-slate-200 italic leading-relaxed">
                  “{service.caseStudy.quote}”
                </p>
                <div className="pt-3 border-t border-slate-800">
                  <div className="text-sm font-semibold text-white">
                    {service.caseStudy.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {service.caseStudy.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3-STEP EXECUTION PROCESS & FAQ */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Execution Process */}
          <div>
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-medium text-[#0284C7] mb-2">
                <span>How We Work</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Structured 3-Phase Execution</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-[#0A1128] tracking-tight">
                Our Proven {service.shortTitle} Roadmap.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.process.map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-slate-200/90 space-y-3"
                >
                  <div className="font-mono-tabular text-xs font-semibold text-[#0284C7]">
                    {p.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0A1128]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Service FAQs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 border-t border-slate-200">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-medium text-[#0284C7]">
                <span>Common Questions</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>{service.shortTitle}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1128] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Have a specific question about how {service.shortTitle} fits your business model? Reach out below for a direct answer from our senior team.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200/90 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-display text-base font-bold text-[#0A1128]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-[#0284C7]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cross-navigation to other dedicated service pages */}
          <div className="pt-12 border-t border-slate-200">
            <div className="text-xs font-semibold text-slate-500 mb-4">
              Explore Complementary Digital Vibes Capabilities:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherServices.map((other) => (
                <button
                  key={other.id}
                  type="button"
                  onClick={() => onNavigate(other.id)}
                  className="text-left p-5 rounded-xl bg-white border border-slate-200/90 hover:border-[#0284C7] transition-colors flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div>
                    <div className="text-xs font-mono-tabular text-slate-400">
                      {other.index}
                    </div>
                    <div className="text-sm font-bold text-[#0A1128] mt-0.5">
                      {other.shortTitle}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#0284C7] shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
      <ContactSection
        id="service-contact"
        initialService={service.title}
        compactHeader
      />
    </div>
  );
};
