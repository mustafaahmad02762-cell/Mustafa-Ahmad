import heroImg from './assets/images/hero_digital_vibes_1791201554798.jpg';
import aboutImg from './assets/images/about_agency_studio_1791201571612.jpg';
import webDesignImg from './assets/images/service_web_design_1791201588466.jpg';
import seoAnalyticsImg from './assets/images/service_seo_analytics_1791201603972.jpg';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'seo'
  | 'web-design'
  | 'social-media'
  | 'email-marketing'
  | 'link-building'
  | 'contact';

export interface ServiceItem {
  id: PageId;
  index: string;
  title: string;
  shortTitle: string;
  kicker: string;
  shortDescription: string;
  fullHeadline: string;
  fullSubheading: string;
  overview: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    detail: string;
  }[];
  metrics: {
    value: string;
    label: string;
    context: string;
  }[];
  caseStudy: {
    client: string;
    industry: string;
    timeframe: string;
    challenge: string;
    solution: string;
    outcomeMetric: string;
    outcomeDetail: string;
    quote: string;
    author: string;
    role: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  image: string;
  featuredSpan?: boolean;
}

export const IMAGES = {
  hero: heroImg,
  about: aboutImg,
  webDesign: webDesignImg,
  seoAnalytics: seoAnalyticsImg,
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    index: '01',
    title: 'Search Engine Optimization (SEO)',
    shortTitle: 'SEO',
    kicker: 'Organic Search · Technical Architecture · Local Dominance',
    shortDescription:
      'Capture high-intent search demand with technical site audits, semantic keyword architecture, and local search optimization that compounds organic traffic month after month.',
    fullHeadline: 'Search Engine Optimization That Turns High-Intent Queries Into Qualified Pipeline.',
    fullSubheading:
      'We engineer search visibility from the ground up—combining technical crawl efficiency, buyer-intent content architecture, and authoritative local presence.',
    overview: [
      'Most SEO campaigns fail because they chase vanity keyword volume instead of commercial purchase intent. At Digital Vibes, our search engineering begins with your revenue model—mapping the exact queries prospective buyers use right before they evaluate vendors.',
      'From Core Web Vitals remediation and schema markup to comprehensive topical authority hubs, we build sustainable organic acquisition engines for startups, local service businesses, and scaling online brands.'
    ],
    deliverables: [
      {
        title: 'Technical SEO & Crawl Architecture',
        description:
          'Deep log-file analysis, Core Web Vitals speed optimization, canonicalization, and structured Schema.org JSON-LD implementation so search engines index every commercial page.'
      },
      {
        title: 'Commercial Keyword & Intent Mapping',
        description:
          'Granular research into bottom-of-funnel comparison terms, service modifiers, and high-converting search clusters tailored to your ideal customer profile.'
      },
      {
        title: 'On-Page Content Engineering',
        description:
          'Semantic content briefs, entity optimization, and internal linking hierarchies that establish definitive subject-matter authority in your niche.'
      },
      {
        title: 'Local SEO & Google Business Profile Dominance',
        description:
          'Citation consistency, geo-targeted landing pages, and local map pack optimization to capture immediate regional demand.'
      }
    ],
    process: [
      {
        step: '01. Diagnostic Technical Audit',
        title: 'Uncovering Hidden Crawl & Indexation Bottlenecks',
        detail:
          'Within the first 14 days, we audit over 120 technical checkpoints, competitor backlink gaps, and conversion leaks across your existing domain.'
      },
      {
        step: '02. Architecture & Content Sprint',
        title: 'Deploying Revenue-Focused Landing Pages',
        detail:
          'We restructure site taxonomy, optimize metadata, and publish high-utility commercial pages engineered to rank and convert.'
      },
      {
        step: '03. Authority & Iterative Scaling',
        title: 'Compounding Rankings & Attribution Reporting',
        detail:
          'Continuous rank tracking, conversion rate refinement, and authority link acquisition backed by transparent monthly pipeline reporting.'
      }
    ],
    metrics: [
      {
        value: '+184%',
        label: 'Organic Non-Branded Traffic',
        context: 'Average client increase within 6 months'
      },
      {
        value: '3.8x',
        label: 'Inbound Lead Velocity',
        context: 'From commercial-intent search pages'
      },
      {
        value: '98/100',
        label: 'Core Web Vitals Score',
        context: 'Post-remediation technical benchmark'
      }
    ],
    caseStudy: {
      client: 'Vanguard Climate Systems',
      industry: 'Regional Commercial HVAC & Energy',
      timeframe: '6 Months',
      challenge:
        'Relied almost entirely on expensive pay-per-click ads ($185+ CPA) while ranking on page 4 for core commercial installation terms across three metro areas.',
      solution:
        'Rebuilt site architecture around 18 service-area hubs, resolved 420+ indexing errors, and deployed structured local schema with authoritative industry backlinks.',
      outcomeMetric: '+215% Qualified Organic Inquiries in 6 Months',
      outcomeDetail:
        'Reduced blended customer acquisition cost by 58% while securing top-3 rankings for 34 high-intent commercial keywords.',
      quote:
        'Digital Vibes replaced our unpredictable ad spend with a steady, compounding stream of commercial facility leads we actually close.',
      author: 'Marcus Vance',
      role: 'Managing Director, Vanguard Climate Systems'
    },
    faqs: [
      {
        question: 'How long does it take to see measurable SEO results?',
        answer:
          'Technical fixes and local map pack optimizations typically produce measurable ranking lifts within 30 to 45 days. Competitive national commercial keywords generally compound into significant lead flow between months 3 and 6.'
      },
      {
        question: 'Do you write the SEO content or just provide recommendations?',
        answer:
          'We handle end-to-end execution. Our strategists and subject-matter writers draft, optimize, and publish conversion-focused service pages and authority guides directly into your CMS.'
      },
      {
        question: 'How do you measure SEO success beyond keyword rankings?',
        answer:
          'Rankings mean nothing without revenue. We track organic form submissions, booked discovery calls, phone inquiries, and assisted pipeline revenue in clean, real-time dashboards.'
      }
    ],
    image: seoAnalyticsImg,
    featuredSpan: true
  },
  {
    id: 'web-design',
    index: '02',
    title: 'Website Design & Development',
    shortTitle: 'Web Design & Development',
    kicker: 'Bespoke UI/UX · Responsive Engineering · Conversion Architecture',
    shortDescription:
      'Custom, fast-loading websites engineered to establish instant brand credibility, guide visitor attention, and turn traffic into measurable customer inquiries.',
    fullHeadline: 'Modern Websites Engineered for Speed, Trust, and High-Intent Conversion.',
    fullSubheading:
      'Your website is your most important sales representative. We design and code bespoke, mobile-first digital experiences that make your business look unmistakable.',
    overview: [
      'Visitors form an impression of your business in under 200 milliseconds. Generic templates, sluggish load times, and confusing navigation silently erode trust and waste every dollar you spend on marketing.',
      'Digital Vibes pairs architectural UI/UX design with clean, semantic frontend engineering. Every layout, typographic hierarchy, and interactive touchpoint is crafted to guide prospects effortlessly from initial curiosity to a booked consultation or purchase.'
    ],
    deliverables: [
      {
        title: 'Custom Brand-Native UI/UX Design',
        description:
          'Zero cookie-cutter templates. We craft bespoke visual systems in Figma with intentional typography, balanced whitespace, and clear visual hierarchy.'
      },
      {
        title: 'Responsive Mobile-First Development',
        description:
          'Fluid layouts tested across mobile, tablet, and widescreen viewports with tactile touch targets and sub-second page transitions.'
      },
      {
        title: 'Conversion Rate Optimization (CRO) Architecture',
        description:
          'Strategic placement of social proof, frictionless lead capture forms, and clear value propositions aligned with buyer psychology.'
      },
      {
        title: 'SEO-Ready Technical Foundation',
        description:
          'Clean semantic HTML5, optimized media assets, accessibility compliance (WCAG AA), and instant search engine indexability out of the box.'
      }
    ],
    process: [
      {
        step: '01. Messaging & Wireframe Blueprint',
        title: 'Structuring the Sales Argument Before Pixels',
        detail:
          'We map user journeys, refine your core value proposition, and build interactive wireframes focused on conversion flow.'
      },
      {
        step: '02. High-Fidelity Visual Design',
        title: 'Crafting a Premium, Trustworthy Aesthetic',
        detail:
          'We establish your color system, typography scale, custom imagery, and component library with full stakeholder walkthroughs.'
      },
      {
        step: '03. Precision Build & QA Launch',
        title: 'Fast-Loading Code & Zero-Downtime Deployment',
        detail:
          'Rigorous cross-browser testing, speed optimization, analytics integration, and smooth launch support.'
      }
    ],
    metrics: [
      {
        value: '+142%',
        label: 'Visitor-to-Lead Conversion Rate',
        context: 'Post-redesign average across B2B & local clients'
      },
      {
        value: '0.8s',
        label: 'First Contentful Paint',
        context: 'Engineered for instant mobile & desktop loading'
      },
      {
        value: '-46%',
        label: 'Bounce Rate Reduction',
        context: 'Through clear messaging & visual hierarchy'
      }
    ],
    caseStudy: {
      client: 'Kova Legal & Advisory',
      industry: 'Boutique Corporate Law & Startup Counsel',
      timeframe: '8 Weeks',
      challenge:
        'An outdated 2018 website failed to reflect the firm’s senior expertise, resulting in a 1.1% consultation booking rate on mobile devices.',
      solution:
        'Designed and launched a refined, authoritative web platform with practice-area conversion funnels, attorney credential showcases, and instant scheduling.',
      outcomeMetric: '3.4% Visitor-to-Consultation Rate (+209% Lift)',
      outcomeDetail:
        'Generated 48 qualified founder retainers in the first 90 days post-launch with a 99/100 Google PageSpeed performance score.',
      quote:
        'Prospects routinely tell us our new website was the deciding factor in choosing our firm over larger competitors.',
      author: 'Elena Rostova',
      role: 'Founding Partner, Kova Legal & Advisory'
    },
    faqs: [
      {
        question: 'Will my website work seamlessly on smartphones and tablets?',
        answer:
          'Yes. Over 65% of commercial traffic arrives on mobile devices. We design mobile-first, ensuring every headline, navigation menu, and contact form feels native on any screen size.'
      },
      {
        question: 'Can my team easily update text and case studies after launch?',
        answer:
          'Absolutely. We structure modular content blocks and provide a recorded training walkthrough so your team can publish updates without touching code.'
      },
      {
        question: 'Do you include copywriting and visual assets?',
        answer:
          'Yes. Great design falls flat with weak copy. Our team helps sharpen your headlines, service descriptions, and calls-to-action as an integrated part of every web build.'
      }
    ],
    image: webDesignImg,
    featuredSpan: true
  },
  {
    id: 'social-media',
    index: '03',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media Marketing',
    kicker: 'Brand Authority · Paid Social Acquisition · Community Growth',
    shortDescription:
      'Build an unmistakable brand voice and capture targeted audience attention across LinkedIn, Instagram, Facebook, and short-form video channels.',
    fullHeadline: 'Social Media Strategies Built for Brand Authority and Measurable Demand.',
    fullSubheading:
      'Stop posting just to check a box. We combine editorial content production with precision paid social targeting to turn passive scrollers into loyal customers.',
    overview: [
      'Modern buyers research brands across social channels long before filling out a contact form. An inactive feed or generic stock-photo graphics signals stagnation.',
      'Digital Vibes manages both organic brand storytelling and high-ROI paid social campaigns. We craft platform-native creative assets, founder thought leadership, and retargeting funnels that keep your business top-of-mind with decision-makers.'
    ],
    deliverables: [
      {
        title: 'Platform-Native Content Production',
        description:
          'Custom carousel graphics, short-form video frameworks, and authoritative written posts tailored to LinkedIn, Instagram, and Facebook algorithms.'
      },
      {
        title: 'Paid Social & Retargeting Funnels',
        description:
          'Full-funnel Meta and LinkedIn ad campaigns with lookalike audience modeling, creative A/B testing, and conversion pixel tracking.'
      },
      {
        title: 'Executive & Founder Positioning',
        description:
          'Ghostwritten industry insights and case-study breakdowns that position your leadership team as trusted voices in your market.'
      },
      {
        title: 'Community Engagement & Analytics',
        description:
          'Proactive comment and DM management paired with monthly attribution reports measuring reach, saves, click-throughs, and leads.'
      }
    ],
    process: [
      {
        step: '01. Audience & Creative Audit',
        title: 'Defining Your Content Pillars & Visual Identity',
        detail:
          'We analyze where your ideal buyers spend time online and build a custom 90-day editorial and paid campaign roadmap.'
      },
      {
        step: '02. Batch Production & Launch',
        title: 'Consistent, High-Craft Publishing',
        detail:
          'We design visual assets, write persuasive hooks, and launch targeted ad sets without burdening your internal team.'
      },
      {
        step: '03. Creative Iteration & Scaling',
        title: 'Doubling Down on Winning Formats',
        detail:
          'Bi-weekly performance reviews where we reallocate budget and content formats toward the highest-converting hooks.'
      }
    ],
    metrics: [
      {
        value: '4.2x',
        label: 'Return on Ad Spend (ROAS)',
        context: 'Across managed paid social retargeting funnels'
      },
      {
        value: '+310%',
        label: 'Qualified Profile Visits & Clicks',
        context: 'Average 90-day organic & paid lift'
      },
      {
        value: '-38%',
        label: 'Cost Per Acquisition (CPA)',
        context: 'Through iterative creative testing'
      }
    ],
    caseStudy: {
      client: 'Lumina Botanical Skincare',
      industry: 'Direct-to-Consumer Clean Beauty',
      timeframe: '4 Months',
      challenge:
        'High ad fatigue on Instagram and Facebook led to rising acquisition costs and stagnant repeat customer engagement.',
      solution:
        'Launched an educational ingredient-spotlight content series paired with dynamic retargeting ads and UGC creative testing.',
      outcomeMetric: '4.6x Blended ROAS & +$190K Incremental Revenue',
      outcomeDetail:
        'Grew organic engagement by 280% while lowering first-time customer acquisition cost from $42 to $24.',
      quote:
        'Digital Vibes gave our brand a cohesive visual identity and turned our social channels into our #1 predictable sales driver.',
      author: 'Sienna Park',
      role: 'Founder, Lumina Botanical'
    },
    faqs: [
      {
        question: 'Which social media platforms should my business focus on?',
        answer:
          'Rather than spreading your budget thin across every network, we concentrate on the 2–3 channels where your customers actively make buying decisions—typically LinkedIn and YouTube for B2B, or Instagram, Facebook, and TikTok for local and consumer brands.'
      },
      {
        question: 'Do we need to approve posts before they go live?',
        answer:
          'Yes. You receive a clean monthly content calendar two weeks in advance where you can review, request edits, or approve posts with a single click.'
      },
      {
        question: 'Can you manage both organic posts and paid social ads?',
        answer:
          'Yes, and they work best together. Organic content builds credibility when prospects visit your profile, while paid social amplifies your best-performing messages directly to targeted buyers.'
      }
    ],
    image: heroImg
  },
  {
    id: 'email-marketing',
    index: '04',
    title: 'Email Marketing & Automation',
    shortTitle: 'Email Marketing',
    kicker: 'Lifecycle Flows · Lead Nurturing · Retention Revenue',
    shortDescription:
      'Turn one-time visitors and cold leads into repeat buyers through automated lifecycle sequences, segmented newsletters, and high-converting email design.',
    fullHeadline: 'Owned Audience Lifecycle Marketing That Generates Predictable Repeat Revenue.',
    fullSubheading:
      'Stop renting attention from algorithms. We architect automated email sequences and segmented campaigns that nurture prospects and maximize customer lifetime value.',
    overview: [
      'Ad costs fluctuate, and search algorithms shift—but your email list is an owned asset with the highest ROI in digital marketing. Yet most businesses either send sporadic, uninspired blasts or let leads go cold after initial signup.',
      'Digital Vibes builds intelligent email ecosystems. From behavioral welcome series and abandoned-inquiry follow-ups to B2B lead nurturing and VIP retention campaigns, we ensure the right message reaches the right subscriber at the exact moment they are ready to act.'
    ],
    deliverables: [
      {
        title: 'Automated Lifecycle & Drip Sequences',
        description:
          'Multi-step welcome flows, lead-magnet nurture tracks, post-purchase onboarding, and win-back automations running 24/7.'
      },
      {
        title: 'Audience Segmentation & Personalization',
        description:
          'Dynamic list segmentation based on browsing behavior, purchase history, and engagement tier so subscribers only receive relevant offers.'
      },
      {
        title: 'Bespoke HTML Email Design & Copywriting',
        description:
          'Mobile-responsive email templates and crisp, persuasive copywriting engineered for high open rates and click-through velocity.'
      },
      {
        title: 'Deliverability & Domain Authentication',
        description:
          'Full SPF, DKIM, and DMARC configuration plus list-hygiene protocols to ensure your emails land in the primary inbox, never spam.'
      }
    ],
    process: [
      {
        step: '01. Deliverability & Funnel Audit',
        title: 'Fixing Inbox Placement & Mapping Lifecycle Gaps',
        detail:
          'We audit your current ESP setup, sender reputation, lead capture popups/forms, and missed revenue opportunities.'
      },
      {
        step: '02. Core Automation Buildout',
        title: 'Launching Always-On Revenue Flows',
        detail:
          'We write, design, and configure your core behavioral sequences with split-tested subject lines and clear CTAs.'
      },
      {
        step: '03. Campaign Cadence & Optimization',
        title: 'Weekly Campaigns & Cohort Analysis',
        detail:
          'Ongoing newsletter execution and continuous A/B testing of send times, offers, and layout structures.'
      }
    ],
    metrics: [
      {
        value: '34%',
        label: 'Total Revenue From Email',
        context: 'Average share of revenue for e-commerce & service clients'
      },
      {
        value: '46.8%',
        label: 'Average Open Rate',
        context: 'Backed by strict deliverability & segmentation'
      },
      {
        value: '5.4%',
        label: 'Click-to-Conversion Rate',
        context: 'Across automated behavioral flows'
      }
    ],
    caseStudy: {
      client: 'Atlas Peak Roasters & Supply',
      industry: 'Specialty E-Commerce & B2B Wholesale',
      timeframe: '90 Days',
      challenge:
        'Only 9% of store revenue came from email due to a single generic monthly newsletter and zero automated cart or wholesale follow-up sequences.',
      solution:
        'Implemented a 6-part welcome and education series, tiered VIP retention flows, and a dedicated B2B wholesale inquiry nurture sequence.',
      outcomeMetric: '+$84,500 Automated Flow Revenue in 90 Days',
      outcomeDetail:
        'Increased email’s share of total company revenue from 9% to 36% while boosting repeat customer purchase frequency by 44%.',
      quote:
        'The automated flows Digital Vibes built now pay for our entire marketing retainer every single week on autopilot.',
      author: 'David Thorne',
      role: 'Co-Founder, Atlas Peak Supply'
    },
    faqs: [
      {
        question: 'Which email marketing platforms do you work with?',
        answer:
          'We work seamlessly with Klaviyo, HubSpot, ActiveCampaign, Mailchimp, and ConvertKit—and can help you migrate platforms if your current tool is holding you back.'
      },
      {
        question: 'What if our email list is currently small?',
        answer:
          'We pair email automation with high-converting website lead capture (educational guides, interactive assessments, or first-order incentives) to grow a clean, high-intent subscriber base rapidly.'
      },
      {
        question: 'How do you prevent subscribers from unsubscribing?',
        answer:
          'People unsubscribe from boring, repetitive sales pitches. By segmenting your list and leading with genuine value, industry insights, and timely offers, we keep unsubscribe rates well below 0.2%.'
      }
    ],
    image: aboutImg
  },
  {
    id: 'link-building',
    index: '05',
    title: 'Authority Link Building & Digital PR',
    shortTitle: 'Link Building',
    kicker: 'White-Hat Outreach · Editorial Placements · Domain Authority',
    shortDescription:
      'Earn high-authority editorial backlinks from vetted industry publications that accelerate search rankings and establish undeniable domain trust.',
    fullHeadline: 'White-Hat Link Building That Elevates Domain Authority and Competitive Rankings.',
    fullSubheading:
      'In competitive search markets, great content alone isn’t enough. We secure genuine, contextual editorial placements on respected websites in your industry.',
    overview: [
      'Search engines treat backlinks from trusted publications as votes of confidence. However, cheap link farms and automated PBNs put your domain at risk of severe algorithmic penalties.',
      'Digital Vibes executes 100% manual, white-hat link acquisition and digital PR. We research journalist needs, create link-worthy data assets, and conduct personalized outreach to secure contextual placements on real, high-traffic websites with verified organic readership.'
    ],
    deliverables: [
      {
        title: 'Competitor Backlink Gap Intelligence',
        description:
          'Reverse-engineering the exact referring domains and anchor-text profiles powering your top-ranking competitors.'
      },
      {
        title: 'Manual Editorial Outreach & Digital PR',
        description:
          'Bespoke outreach to industry editors, journalists, and niche publications to earn organic in-content mentions and feature placements.'
      },
      {
        title: 'Linkable Asset & Resource Creation',
        description:
          'Developing original industry benchmarks, visual guides, and authoritative studies that other websites naturally cite and reference.'
      },
      {
        title: 'Anchor Text & Toxicity Governance',
        description:
          'Natural anchor-text distribution planning and toxic backlink disavow audits to safeguard long-term domain health.'
      }
    ],
    process: [
      {
        step: '01. Authority & Risk Assessment',
        title: 'Auditing Your Current Link Profile & Target Pages',
        detail:
          'We identify which commercial pages need authority reinforcement to break into the top 3 search positions.'
      },
      {
        step: '02. Vetted Prospecting & Pitching',
        title: 'Strict Quality Filtering (DR 45–80+ & Real Traffic)',
        detail:
          'Every target publication is manually vetted for organic search traffic, editorial standards, and topical relevance.'
      },
      {
        step: '03. Placement Verification & Reporting',
        title: 'Transparent Live-Link Ledger',
        detail:
          'You receive a clear monthly ledger showing every live editorial URL, domain rating, organic traffic metric, and target page impact.'
      }
    ],
    metrics: [
      {
        value: 'DR 58+',
        label: 'Average Referring Domain Rating',
        context: 'Vetted sites with minimum 5,000+ monthly organic visits'
      },
      {
        value: '100%',
        label: 'White-Hat Manual Outreach',
        context: 'Zero PBNs, link farms, or automated spam networks'
      },
      {
        value: '+24 pts',
        label: 'Average Domain Rating Growth',
        context: 'Across 6-month authority building retainers'
      }
    ],
    caseStudy: {
      client: 'CloudPulse FinTech SaaS',
      industry: 'B2B Financial Workflow Software',
      timeframe: '5 Months',
      challenge:
        'Despite strong on-page content, CloudPulse was stuck on page 2 for high-value SaaS comparison keywords due to a Domain Rating of 26 vs. competitors at DR 60+.',
      solution:
        'Executed a targeted Digital PR and editorial link building campaign around a quarterly CFO automation benchmark report, earning 62 high-authority placements.',
      outcomeMetric: 'Domain Rating 26 → 54 & #1 Rankings for 12 Core Terms',
      outcomeDetail:
        'Drove a 195% surge in organic demo requests and secured editorial mentions in three leading accounting and finance publications.',
      quote:
        'Every single placement Digital Vibes secured was on a publication we were proud to share with our board and investors.',
      author: 'Liam O’Connor',
      role: 'VP of Marketing, CloudPulse'
    },
    faqs: [
      {
        question: 'Are your link building methods safe from Google penalties?',
        answer:
          'Yes. We strictly follow white-hat editorial standards. We never use private blog networks (PBNs), hacked sites, or automated link schemes. Every link is earned through genuine editorial value and manual outreach.'
      },
      {
        question: 'How do you vet the websites where our links appear?',
        answer:
          'Each domain must pass a 7-point inspection: real organic search traffic (verified via Ahrefs/Semrush), clean backlink history, topical alignment with your industry, and genuine editorial standards.'
      },
      {
        question: 'Can we review target publications or anchor text strategy?',
        answer:
          'Completely. We collaborate with your team on target commercial pages, approved brand messaging, and full link ledger transparency.'
      }
    ],
    image: seoAnalyticsImg
  },
  {
    id: 'services',
    index: '06',
    title: 'Digital Marketing Strategy',
    shortTitle: 'Digital Marketing Strategy',
    kicker: 'Full-Funnel Architecture · Attribution · Growth Roadmaps',
    shortDescription:
      'Unify your search, web, social, and email channels under one cohesive, data-backed growth roadmap engineered around customer acquisition cost and ROI.',
    fullHeadline: 'Integrated Digital Marketing Strategy Built Around Revenue, Not Siloed Tactics.',
    fullSubheading:
      'Random acts of marketing produce random results. We align your positioning, website conversion funnel, and acquisition channels into one unified growth system.',
    overview: [
      'Many growing businesses waste budget because their web designer, SEO vendor, and social media manager operate in complete isolation. Without a unified strategy, traffic lands on pages that don’t convert, and leads fall through the cracks.',
      'Digital Vibes acts as your strategic growth partner. We audit your unit economics, competitive landscape, and buyer journey to build a prioritized 12-month execution blueprint where every channel compounds the effectiveness of the others.'
    ],
    deliverables: [
      {
        title: 'Full-Funnel Growth & Conversion Audit',
        description:
          'End-to-end diagnostic of your current traffic sources, landing page conversion rates, CRM lead handling, and competitor positioning.'
      },
      {
        title: 'Ideal Customer Profile (ICP) & Messaging Matrix',
        description:
          'Sharp value proposition architecture that articulates exactly why prospects should choose your business over every alternative.'
      },
      {
        title: 'Channel Allocation & Budget Modeling',
        description:
          'Data-driven prioritization of SEO, web improvements, paid social, and email automation based on your target CAC and payback window.'
      },
      {
        title: 'Multi-Touch Attribution & KPI Dashboards',
        description:
          'Unified tracking infrastructure (GA4, CRM integration, call tracking) so you know with certainty which campaigns generate real revenue.'
      }
    ],
    process: [
      {
        step: '01. Unit Economics & Market Discovery',
        title: 'Benchmarking Margins, LTV, and Competitive Whitespace',
        detail:
          'We interview stakeholders, analyze historical customer data, and identify the highest-leverage acquisition opportunities.'
      },
      {
        step: '02. 90-Day & 12-Month Growth Blueprint',
        title: 'Sequencing Quick Wins Alongside Compounding Assets',
        detail:
          'We deliver a concrete execution roadmap detailing exact deliverables, timelines, budget allocation, and projected pipeline milestones.'
      },
      {
        step: '03. Fractional CMO Execution & Governance',
        title: 'Turning Strategy Into Weekly Momentum',
        detail:
          'Our cross-functional specialists execute the roadmap with transparent bi-weekly sprint reviews and revenue attribution.'
      }
    ],
    metrics: [
      {
        value: '+165%',
        label: 'Blended Pipeline Growth',
        context: 'Average 12-month growth for full-retainer partners'
      },
      {
        value: '-41%',
        label: 'Blended CAC Reduction',
        context: 'By eliminating wasted spend & unifying channels'
      },
      {
        value: '96%',
        label: 'Client Retention Rate',
        context: 'Built on transparent communication & real ROI'
      }
    ],
    caseStudy: {
      client: 'Meridian Modular Workspaces',
      industry: 'Commercial Interior Architecture',
      timeframe: '12 Months',
      challenge:
        'Fragmented marketing across three separate freelancers resulted in inconsistent branding and no visibility into which channels produced $50K+ commercial contracts.',
      solution:
        'Consolidated web redesign, commercial SEO, LinkedIn authority, and HubSpot email nurturing under a single Digital Vibes growth roadmap.',
      outcomeMetric: '$3.2M Attributed Commercial Pipeline in 12 Months',
      outcomeDetail:
        'Doubled qualified enterprise RFPs while establishing full-funnel attribution from first search click to signed contract.',
      quote:
        'Having one cohesive team manage our website, SEO, and lead nurturing transformed marketing from an expense into our most reliable growth engine.',
      author: 'arthur Pendelton',
      role: 'Chief Executive Officer, Meridian Modular'
    },
    faqs: [
      {
        question: 'Can we start with a single service and expand into a full strategy later?',
        answer:
          'Yes. Many partners begin with a high-impact Website Redesign or Technical SEO sprint and expand into multi-channel retainers once they experience our execution standards.'
      },
      {
        question: 'Who will we communicate with day-to-day?',
        answer:
          'You work directly with a dedicated Senior Growth Strategist supported by our in-house SEO engineers, designers, and copywriters—never handed off to unvetted junior account coordinators.'
      },
      {
        question: 'Do you lock clients into rigid long-term contracts?',
        answer:
          'We believe in earning your partnership through performance and transparent communication. We offer clear quarterly roadmaps with straightforward, flexible engagement terms.'
      }
    ],
    image: webDesignImg
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    index: '01',
    title: 'Professional Strategy',
    description:
      'Every campaign starts with deep market research, competitor intelligence, and unit-economic modeling—never guesswork or recycled checklists.'
  },
  {
    index: '02',
    title: 'Modern Solutions',
    description:
      'We combine fast, semantic web engineering, technical SEO architecture, and behavioral automation built for how modern buyers actually make decisions.'
  },
  {
    index: '03',
    title: 'Client-Focused Approach',
    description:
      'Your business goals dictate our roadmap. We tailor every deliverable to your specific industry, growth stage, and target customer profile.'
  },
  {
    index: '04',
    title: 'Growth-Oriented Marketing',
    description:
      'We reject vanity metrics like empty impressions. Our work is measured by qualified inbound leads, conversion velocity, and measurable revenue impact.'
  },
  {
    index: '05',
    title: 'Transparent Communication',
    description:
      'Direct access to senior strategists, real-time attribution dashboards, and plain-English bi-weekly progress updates with zero agency jargon.'
  }
];

export const AGENCY_METRICS = [
  {
    value: '+168%',
    label: 'Average Qualified Lead Growth',
    detail: 'Across active client partners in months 1–6'
  },
  {
    value: '$42.8M',
    label: 'Attributed Client Pipeline',
    detail: 'Generated through organic search, web & lifecycle flows'
  },
  {
    value: '140+',
    label: 'Brands & Businesses Scaled',
    detail: 'From local service leaders to high-growth startups'
  },
  {
    value: '96.4%',
    label: 'Partner Retention Rate',
    detail: 'Driven by transparent reporting and measurable ROI'
  }
];
