import React from 'react';
import {
  Search,
  Layout,
  Share2,
  Mail,
  Link2,
  Compass,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import {
  CORE_SERVICES,
  WHY_CHOOSE_ITEMS,
  AGENCY_METRICS,
  IMAGES,
  PageId,
  ServiceItem,
} from '../agencyData';
import { ResilientImage } from '../components/ResilientImage';
import { CtaBanner } from '../components/CtaBanner';
import { ContactSection } from '../components/ContactSection';

interface HomeViewProps {
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

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const scrollToServices = () => {
    const el = document.getElementById('home-services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('services');
    }
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative bg-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-medium text-[#0284C7]">
                <span>Digital Vibes Agency</span>
                <span aria-hidden="true">·</span>
                <span>Small Businesses, Startups & Online Brands</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0A1128] tracking-tight leading-[1.08]">
                Grow Your Business. Build Your Digital Presence.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Digital Vibes helps businesses grow online with powerful digital marketing, modern websites, SEO and result-driven strategies.
              </p>

              {/* Two Requested Buttons: Get Started & Our Services */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#0A1128] bg-[#F8FAFC] hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Our Services</span>
                </button>
              </div>

              {/* Quiet unboxed trust proof */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6">
                <div>
                  <div className="font-mono-tabular text-xl sm:text-2xl font-bold text-[#0A1128]">
                    +168%
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Avg. Organic Lead Lift
                  </div>
                </div>
                <div>
                  <div className="font-mono-tabular text-xl sm:text-2xl font-bold text-[#0A1128]">
                    140+
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Businesses Scaled
                  </div>
                </div>
                <div>
                  <div className="font-mono-tabular text-xl sm:text-2xl font-bold text-[#0A1128]">
                    96.4%
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Client Retention Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual / Illustration */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-[#0A1128] shadow-sm">
                <ResilientImage
                  src={IMAGES.hero}
                  alt="Digital Vibes modern digital marketing strategy studio and analytics command center"
                  aspectClass="aspect-video"
                  className="w-full"
                  fallbackTitle="Digital Vibes Growth Studio"
                />
                <div className="bg-[#0A1128] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-800">
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-white">Full-Funnel Execution</span>
                    <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
                    <span>SEO, Bespoke Web Design, Social & Lifecycle Automation</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#38BDF8] hover:text-white inline-flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Explore Capabilities</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (Asymmetric Bento Grid for all 6 requested services) */}
      <section id="home-services" className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs font-medium text-[#0284C7] mb-2">
                <span>Core Capabilities</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Result-Driven Digital Architecture</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
                Specialized Digital Marketing Services Engineered for Measurable Growth.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0284C7] hover:text-[#0A1128] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>View Full Services Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Asymmetric Bento Grid: 6 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {CORE_SERVICES.map((service: ServiceItem, idx: number) => {
              // Asymmetric spans: first 2 marquee capabilities span 6 columns on desktop, remaining 4 span 6 columns in pairs
              const colSpan =
                idx === 0 || idx === 1
                  ? 'lg:col-span-6'
                  : idx === 2 || idx === 3
                  ? 'lg:col-span-6'
                  : 'lg:col-span-6';

              return (
                <div
                  key={service.id}
                  onClick={() => onNavigate(service.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onNavigate(service.id);
                    }
                  }}
                  className={`${colSpan} group bg-white rounded-2xl border border-slate-200/90 hover:border-[#0284C7] p-7 sm:p-8 transition-colors duration-150 flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                        {getServiceIcon(service.id)}
                      </div>
                      <span className="font-mono-tabular text-xs font-medium text-slate-400">
                        {service.index} / 06
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 mb-2">
                      {service.kicker}
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0A1128] group-hover:text-[#0284C7] transition-colors">
                      {service.index}. {service.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      <span className="font-mono-tabular font-semibold text-[#0A1128]">
                        {service.metrics[0].value}
                      </span>{' '}
                      <span>{service.metrics[0].label}</span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] group-hover:translate-x-0.5 transition-transform whitespace-nowrap shrink-0">
                      <span>Explore {service.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PROOF OF IMPACT / CASE STUDIES (Claim-to-Proof Adjacency right after Services) */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-medium text-[#0284C7] mb-2">
              <span>Verified Client Outcomes</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Quantified Revenue & Pipeline Impact</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
              Real Numbers From Real Businesses We’ve Helped Scale.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-7 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-[#0A1128]">{item.caseStudy.client}</span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span>{item.caseStudy.industry}</span>
                  </div>

                  <div className="py-3 border-y border-slate-200/80">
                    <div className="font-mono-tabular text-xl font-bold text-[#0284C7]">
                      {item.caseStudy.outcomeMetric}
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      {item.caseStudy.outcomeDetail}
                    </p>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    “{item.caseStudy.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-semibold text-[#0A1128]">
                      {item.caseStudy.author}
                    </div>
                    <div className="text-xs text-slate-500">
                      {item.caseStudy.role}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="text-xs font-semibold text-[#0284C7] hover:text-[#0A1128] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Read Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <ResilientImage
                  src={IMAGES.about}
                  alt="Digital Vibes strategists and web engineers collaborating on client campaigns"
                  aspectClass="aspect-[4/3]"
                  className="w-full"
                  fallbackTitle="Digital Vibes Strategy Team"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-medium text-[#0284C7]">
                <span>About Digital Vibes</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Your Digital Growth Partner</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
                Helping Ambitious Businesses Establish a Commanding Online Presence.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                At Digital Vibes, we believe great businesses deserve to be found, trusted, and chosen online. In a crowded digital landscape, simply having a website or posting occasionally on social media is no longer enough to capture buyer attention.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                We partner with small businesses, venture-backed startups, local service leaders, and online brands to establish a strong online presence, attract the right high-intent audience, and grow predictably through modern digital strategies. By combining technical SEO, bespoke website engineering, and conversion-focused campaigns under one roof, we turn your digital footprint into your strongest competitive advantage.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-6 border-t border-slate-200">
                {AGENCY_METRICS.slice(0, 2).map((metric, i) => (
                  <div key={i} className="pt-4">
                    <div className="font-mono-tabular text-2xl font-bold text-[#0A1128]">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-[#0A1128] mt-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {metric.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#0A1128] hover:bg-[#0284C7] rounded-xl transition-colors cursor-pointer"
                >
                  <span>More About Our Agency & Methodology</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE DIGITAL VIBES */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <div className="text-xs font-medium text-[#0284C7]">
                <span>The Digital Vibes Standard</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>5 Pillars of Partnership</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
                Why Growing Brands Choose Digital Vibes.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We built Digital Vibes to be the agency we wished existed: senior-level execution, crisp modern engineering, and relentless focus on commercial outcomes over agency fluff.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0284C7] hover:text-[#0A1128] transition-colors cursor-pointer"
                >
                  <span>Book a Discovery Call With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <div key={item.index} className="py-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                  <span className="font-mono-tabular text-sm font-semibold text-[#0284C7] shrink-0 pt-0.5">
                    {item.index}.
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0A1128]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <CtaBanner onNavigate={onNavigate} />

      {/* 7. CONTACT SECTION */}
      <ContactSection id="home-contact" />
    </div>
  );
};
