import React from 'react';
import {
  Search,
  Layout,
  Share2,
  Mail,
  Link2,
  Compass,
  ArrowRight,
  Check,
} from 'lucide-react';
import { CORE_SERVICES, PageId } from '../agencyData';
import { CtaBanner } from '../components/CtaBanner';
import { ContactSection } from '../components/ContactSection';

interface ServicesHubViewProps {
  onNavigate: (page: PageId) => void;
}

const getServiceIcon = (id: PageId) => {
  switch (id) {
    case 'seo':
      return <Search className="w-5 h-5 text-[#0284C7]" />;
    case 'web-design':
      return <Layout className="w-5 h-5 text-[#0284C7]" />;
    case 'social-media':
      return <Share2 className="w-5 h-5 text-[#0284C7]" />;
    case 'email-marketing':
      return <Mail className="w-5 h-5 text-[#0284C7]" />;
    case 'link-building':
      return <Link2 className="w-5 h-5 text-[#0284C7]" />;
    default:
      return <Compass className="w-5 h-5 text-[#0284C7]" />;
  }
};

export const ServicesHubView: React.FC<ServicesHubViewProps> = ({ onNavigate }) => {
  const strategyService = CORE_SERVICES.find((s) => s.id === 'services')!;

  return (
    <div>
      {/* Header */}
      <section className="bg-white pt-14 pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs font-medium text-[#0284C7]">
              <span>Our Services</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Full-Funnel Digital Growth Capabilities</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0A1128] tracking-tight leading-[1.1]">
              End-to-End Digital Marketing & Web Engineering Built to Compound Revenue.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every service at Digital Vibes is designed to work as part of a unified growth engine—attracting qualified search and social traffic, converting visitors on a modern website, and nurturing leads into lifelong customers.
            </p>
          </div>
        </div>
      </section>

      {/* Complete 6 Services Detailed Cards */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-10 transition-colors hover:border-[#0284C7]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                      {getServiceIcon(service.id)}
                    </div>
                    <div className="text-xs text-slate-500">
                      {service.kicker}
                    </div>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1128]">
                    {service.index}. {service.title}
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                        <span className="font-medium">{del.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F8FAFC] rounded-xl p-6 border border-slate-200/80 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-xs text-slate-500 mb-2">
                      Verified Partner Impact · {service.caseStudy.client}
                    </div>
                    <div className="font-mono-tabular text-2xl font-bold text-[#0284C7]">
                      {service.caseStudy.outcomeMetric}
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {service.caseStudy.outcomeDetail}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                    {service.id !== 'services' ? (
                      <button
                        type="button"
                        onClick={() => onNavigate(service.id)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0A1128] hover:bg-[#0284C7] rounded-lg transition-colors cursor-pointer"
                      >
                        <span>Explore {service.shortTitle} Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onNavigate('contact')}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors cursor-pointer"
                      >
                        <span>Request Custom Strategy Blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive on 06: Digital Marketing Strategy */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-medium text-[#0284C7] mb-2">
              <span>Featured Methodology</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>06. Digital Marketing Strategy</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
              {strategyService.fullHeadline}
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              {strategyService.fullSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategyService.process.map((step, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 space-y-3"
              >
                <div className="font-mono-tabular text-xs font-semibold text-[#0284C7]">
                  {step.step}
                </div>
                <h3 className="font-display text-lg font-bold text-[#0A1128]">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onNavigate={onNavigate} />
      <ContactSection initialService="Full-Funnel Digital Strategy" compactHeader />
    </div>
  );
};
