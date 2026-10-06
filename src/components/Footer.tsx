import React from 'react';
import { PageId } from '../agencyData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
  };

  return (
    <footer className="bg-[#050A18] text-slate-300 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNav('home');
              }}
              className="font-display text-2xl font-bold text-white tracking-tight inline-block hover:text-[#38BDF8] transition-colors"
            >
              Digital Vibes
            </a>
            <p className="text-sm font-semibold text-[#38BDF8]">
              Digital Vibes — Turn Your Vision Into Digital Growth.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We build powerful digital experiences that help businesses get noticed, attract customers, and grow online through futuristic web engineering, SEO, and result-driven marketing.
            </p>

            {/* Social Media Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('contact');
                }}
                aria-label="Digital Vibes on LinkedIn"
                className="w-10 h-10 rounded-lg bg-[#0B132B] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#38BDF8] hover:bg-sky-500/20 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('contact');
                }}
                aria-label="Digital Vibes on X / Twitter"
                className="w-10 h-10 rounded-lg bg-[#0B132B] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#38BDF8] hover:bg-sky-500/20 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('contact');
                }}
                aria-label="Digital Vibes on Instagram"
                className="w-10 h-10 rounded-lg bg-[#0B132B] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#38BDF8] hover:bg-sky-500/20 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('contact');
                }}
                aria-label="Digital Vibes on Facebook"
                className="w-10 h-10 rounded-lg bg-[#0B132B] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#38BDF8] hover:bg-sky-500/20 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white tracking-wide">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  className="text-slate-400 hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="text-slate-400 hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  About Digital Vibes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="text-slate-400 hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  Services Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="text-slate-400 hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white tracking-wide">
              Core Services
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('web-design')}
                  className="text-slate-400 hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  Website Design & Development
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('seo')}
                  className="text-slate-400 hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  SEO & Search Growth
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('social-media')}
                  className="text-slate-400 hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('email-marketing')}
                  className="text-slate-400 hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  Email Marketing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('link-building')}
                  className="text-slate-400 hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  Link Building
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="text-slate-400 hover:text-[#38BDF8] transition-colors cursor-pointer"
                >
                  Digital Marketing Strategy
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white tracking-wide">
              Start Your Project
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ready to transform your ideas into a high-performing digital brand? Let’s build your growth roadmap.
            </p>
            <div className="pt-1 space-y-1 text-xs text-slate-300">
              <div>hello@digitalvibes.agency</div>
              <div className="font-mono-tabular">+1 (800) 555-0194</div>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleNav('contact')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:from-[#0369A1] hover:to-[#0284C7] rounded-lg transition-all cursor-pointer"
              >
                Let’s Talk
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Digital Vibes — Turn Your Vision Into Digital Growth. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleNav('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => handleNav('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
