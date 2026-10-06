import React, { useState } from 'react';
import {
  Search,
  Layout,
  Share2,
  Mail,
  Link2,
  Compass,
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';
import {
  CORE_SERVICES,
  WHY_DIGITAL_VIBES_ITEMS,
  WHY_STATS_HIGHLIGHTS,
  PROCESS_STEPS,
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
    case 'web-design':
      return <Layout className="w-5 h-5 text-[#38BDF8]" />;
    case 'seo':
      return <Search className="w-5 h-5 text-[#38BDF8]" />;
    case 'social-media':
      return <Share2 className="w-5 h-5 text-[#38BDF8]" />;
    case 'email-marketing':
      return <Mail className="w-5 h-5 text-[#38BDF8]" />;
    case 'link-building':
      return <Link2 className="w-5 h-5 text-[#38BDF8]" />;
    default:
      return <Compass className="w-5 h-5 text-[#38BDF8]" />;
  }
};

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [activeProcessIdx, setActiveProcessIdx] = useState<number>(0);

  const scrollToServices = () => {
    const el = document.getElementById('home-services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('services');
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('home-contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div>
      {/* 1. FUTURISTIC HERO SECTION WITH ANIMATED DIGITAL BACKGROUND */}
      <section className="relative bg-[#050A18] text-white pt-14 pb-24 lg:pt-24 lg:pb-32 border-b border-slate-800/80 overflow-hidden">
        {/* Modern Animated Digital Background */}
        <div
          className="absolute inset-0 pointer-events-none animate-pulse-slow"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 28%, rgba(14, 165, 233, 0.22) 0%, transparent 45%), radial-gradient(circle at 82% 65%, rgba(56, 189, 248, 0.16) 0%, transparent 50%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-medium text-[#38BDF8] tracking-wide">
                <span>Digital Vibes</span>
                <span aria-hidden="true">·</span>
                <span>Turn Your Vision Into Digital Growth.</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08]">
                Your Business. Your Vision. Our Digital Vibes.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                We build powerful digital experiences that help businesses get noticed, attract customers and grow online.
              </p>

              {/* Two Requested Buttons: Start Your Project & Explore Services */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:from-[#0369A1] hover:to-[#0284C7] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38BDF8]"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#0B132B] hover:bg-slate-800 border border-slate-700 hover:border-[#38BDF8] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Explore Services</span>
                </button>
              </div>

              {/* Unboxed Quantitative Trust Bar */}
              <div className="pt-8 border-t border-slate-800/90 grid grid-cols-3 gap-6">
                <div>
                  <div className="font-mono-tabular text-xl sm:text-2xl font-bold text-white">
                    +168%
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Avg. Search & Lead Growth
                  </div>
                </div>
                <div>
                  <div className="font-mono-tabular text-xl sm:text-2xl font-bold text-white">
                    $42.8M
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Client Pipeline Generated
                  </div>
                </div>
                <div>
                  <div className="font-mono-tabular text-xl sm:text-2xl font-bold text-white">
                    24/7
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Digital Growth Engine
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Animated Visual: Digital Growth, Websites, SEO & Social Media */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-sky-500/30 bg-[#0B132B] animate-float-subtle">
                <div className="relative">
                  <ResilientImage
                    src={IMAGES.hero}
                    alt="Digital Vibes futuristic digital growth, web design, SEO and social media studio"
                    aspectClass="aspect-video"
                    className="w-full"
                    fallbackTitle="Digital Vibes Growth Ecosystem"
                  />
                  {/* Measured contrast scrim overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/45 to-transparent" />

                  {/* Interactive Ecosystem Nodes: Websites, SEO, Social Media, Digital Growth */}
                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <button
                      type="button"
                      onClick={() => onNavigate('web-design')}
                      className="text-left p-3 rounded-xl bg-[#050A18]/90 backdrop-blur-md border border-slate-700/80 hover:border-[#38BDF8] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                        <Layout className="w-3.5 h-3.5" />
                        <span className="font-mono-tabular text-[11px] font-semibold">0.8s</span>
                      </div>
                      <div className="text-xs font-semibold text-white">Websites</div>
                      <div className="text-[11px] text-slate-400">Custom UI/UX</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate('seo')}
                      className="text-left p-3 rounded-xl bg-[#050A18]/90 backdrop-blur-md border border-slate-700/80 hover:border-[#38BDF8] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                        <Search className="w-3.5 h-3.5" />
                        <span className="font-mono-tabular text-[11px] font-semibold">+184%</span>
                      </div>
                      <div className="text-xs font-semibold text-white">SEO Growth</div>
                      <div className="text-[11px] text-slate-400">Top Rankings</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate('social-media')}
                      className="text-left p-3 rounded-xl bg-[#050A18]/90 backdrop-blur-md border border-slate-700/80 hover:border-[#38BDF8] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                        <Share2 className="w-3.5 h-3.5" />
                        <span className="font-mono-tabular text-[11px] font-semibold">4.2x</span>
                      </div>
                      <div className="text-xs font-semibold text-white">Social Media</div>
                      <div className="text-[11px] text-slate-400">Brand Demand</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate('services')}
                      className="text-left p-3 rounded-xl bg-[#050A18]/90 backdrop-blur-md border border-slate-700/80 hover:border-[#38BDF8] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between text-[#38BDF8] mb-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span className="font-mono-tabular text-[11px] font-semibold">3.8x</span>
                      </div>
                      <div className="text-xs font-semibold text-white">Digital Growth</div>
                      <div className="text-[11px] text-slate-400">Full-Funnel ROI</div>
                    </button>
                  </div>
                </div>

                <div className="bg-[#0B132B] text-white px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-800">
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-white">Interactive Growth Architecture</span>
                    <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
                    <span>Click any channel above to inspect our methodology</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#38BDF8] hover:text-white inline-flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>All 6 Capabilities</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION — 6 Interactive Service Cards */}
      <section id="home-services" className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold text-[#0284C7] mb-2">
                <span>Interactive Capabilities</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Turn Your Vision Into Digital Growth</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
                Six Core Digital Services Engineered to Scale Your Brand.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0284C7] hover:text-[#0A1128] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Explore Full Services Hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {CORE_SERVICES.map((service: ServiceItem) => (
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
                className="lg:col-span-6 group bg-white rounded-2xl border border-slate-200/90 hover:border-[#0EA5E9] p-7 sm:p-8 transition-all duration-150 hover:-translate-y-1 flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0EA5E9]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#050A18] border border-slate-800 group-hover:border-[#38BDF8] flex items-center justify-center shrink-0 transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="font-mono-tabular text-xs font-semibold text-slate-400 group-hover:text-[#0284C7] transition-colors">
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

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] group-hover:translate-x-1 transition-transform whitespace-nowrap shrink-0">
                    <span>Explore {service.shortTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY DIGITAL VIBES? (5 Pillars + 3 Animated Stats: 100% Creative, 24/7 Digital Presence, Growth Focused) */}
      <section className="py-20 lg:py-28 bg-[#050A18] text-white border-t border-slate-800/80 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.14) 0%, transparent 45%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-medium text-[#38BDF8] mb-2">
              <span>Why Digital Vibes?</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>The Futuristic Agency Advantage</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Where High-End Creative Design Meets Relentless Growth Engineering.
            </h2>
          </div>

          {/* 3 Featured Animated Stat Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {WHY_STATS_HIGHLIGHTS.map((stat, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#0B132B] border border-sky-500/25 hover:border-[#38BDF8] transition-all duration-150 hover:-translate-y-1"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#38BDF8] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mt-2">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

          {/* 5 Requested Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_DIGITAL_VIBES_ITEMS.map((item) => (
              <div
                key={item.index}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono-tabular text-xs font-semibold text-[#38BDF8] mb-3">
                    {item.index}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT DIGITAL VIBES */}
      <section className="py-20 lg:py-28 bg-white text-[#0A1128] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#050A18]">
                <ResilientImage
                  src={IMAGES.about}
                  alt="Digital Vibes team transforming ideas into digital brands"
                  aspectClass="aspect-[4/3]"
                  className="w-full"
                  fallbackTitle="Digital Vibes Brand Architects"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold text-[#0284C7]">
                <span>About Digital Vibes</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Turn Your Vision Into Digital Growth.</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
                Transforming Bold Ideas Into Unmistakable Digital Brands.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Every great business starts with a powerful vision—yet too many extraordinary companies remain invisible online because their digital presence looks like an afterthought. Digital Vibes was born to change that.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                We help ambitious founders, growing businesses, and modern organizations transform their raw ideas into authoritative digital brands. By fusing futuristic website engineering, precision search intelligence, and high-converting marketing strategies, we build digital ecosystems that command attention, earn immediate customer trust, and turn online visibility into lasting commercial growth.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-6 border-t border-slate-200">
                {AGENCY_METRICS.slice(0, 2).map((metric, i) => (
                  <div key={i} className="pt-4">
                    <div className="font-mono-tabular text-2xl font-bold text-[#0284C7]">
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
                  <span>Read Our Full Agency Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-STEP INTERACTIVE PROCESS (01 — Discover, 02 — Strategize, 03 — Create, 04 — Grow) */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0A1128] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold text-[#0284C7] mb-2">
                <span>Our 4-Step Execution Process</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>From Concept to Market Leadership</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
                How We Turn Your Vision Into Digital Growth.
              </h2>
            </div>

            {/* Interactive Step Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl">
              {PROCESS_STEPS.map((step, idx) => (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveProcessIdx(idx)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    activeProcessIdx === idx
                      ? 'bg-[#050A18] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#0A1128]'
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4-Step Cards Grid with Active Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeProcessIdx === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveProcessIdx(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveProcessIdx(idx);
                    }
                  }}
                  className={`rounded-2xl p-7 transition-all duration-150 cursor-pointer flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-[#050A18] text-white border-[#38BDF8] -translate-y-1'
                      : 'bg-white text-[#0A1128] border-slate-200/90 hover:border-[#0284C7]'
                  }`}
                >
                  <div>
                    <div
                      className={`font-mono-tabular text-sm font-bold mb-4 ${
                        isSelected ? 'text-[#38BDF8]' : 'text-[#0284C7]'
                      }`}
                    >
                      {step.label}
                    </div>
                    <h3
                      className={`font-display text-2xl font-bold ${
                        isSelected ? 'text-white' : 'text-[#0A1128]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <div
                      className={`text-xs font-semibold mt-1 ${
                        isSelected ? 'text-sky-300' : 'text-slate-500'
                      }`}
                    >
                      {step.subtitle}
                    </div>
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        isSelected ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  <div
                    className={`mt-6 pt-4 border-t text-xs ${
                      isSelected
                        ? 'border-slate-800 text-slate-300'
                        : 'border-slate-100 text-slate-500'
                    }`}
                  >
                    <span className="font-semibold">Outcome: </span>
                    {step.deliverable}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PROOF OF IMPACT / VERIFIED CASE STUDIES */}
      <section className="py-20 lg:py-24 bg-white text-[#0A1128] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-semibold text-[#0284C7] mb-2">
              <span>Verified Client Outcomes</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Quantified Revenue & Pipeline Impact</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
              Measurable Results From Brands We’ve Helped Scale.
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
                    Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED CTA SECTION */}
      <CtaBanner onNavigate={onNavigate} />

      {/* 8. CONTACT SECTION */}
      <ContactSection id="home-contact" />
    </div>
  );
};
