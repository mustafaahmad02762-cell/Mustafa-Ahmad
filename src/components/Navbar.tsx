import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { PageId } from '../agencyData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, hash?: string) => void;
}

const SERVICE_SUBPAGES: { id: PageId; label: string; meta: string }[] = [
  { id: 'services', label: 'All Services & Strategy', meta: 'Full-Funnel Overview' },
  { id: 'seo', label: 'Search Engine Optimization (SEO)', meta: 'Organic Search & Technical SEO' },
  { id: 'web-design', label: 'Web Design & Development', meta: 'Custom UI/UX & Responsive Code' },
  { id: 'social-media', label: 'Social Media Marketing', meta: 'Brand Authority & Paid Social' },
  { id: 'email-marketing', label: 'Email Marketing', meta: 'Lifecycle Flows & Retention' },
  { id: 'link-building', label: 'Link Building', meta: 'White-Hat Editorial Outreach' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const isServiceRelated = [
    'services',
    'seo',
    'web-design',
    'social-media',
    'email-marketing',
    'link-building',
  ].includes(currentPage);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-display text-xl font-bold tracking-tight text-[#0A1128] hover:text-[#0284C7] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0284C7]"
        >
          Digital Vibes
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentPage === 'home'
                ? 'text-[#0A1128] border-[#0284C7] font-semibold'
                : 'border-transparent hover:text-[#0A1128] hover:border-slate-300'
            }`}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentPage === 'about'
                ? 'text-[#0A1128] border-[#0284C7] font-semibold'
                : 'border-transparent hover:text-[#0A1128] hover:border-slate-300'
            }`}
          >
            About Us
          </button>

          {/* Services Dropdown Trigger */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              className={`flex items-center gap-1.5 py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                isServiceRelated
                  ? 'text-[#0A1128] border-[#0284C7] font-semibold'
                  : 'border-transparent hover:text-[#0A1128] hover:border-slate-300'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  dropdownOpen ? 'rotate-180 text-[#0284C7]' : ''
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-3 w-80 bg-white rounded-xl border border-slate-200 shadow-lg py-2 z-50">
                {SERVICE_SUBPAGES.map((item) => {
                  const active = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-2.5 flex items-center justify-between transition-colors ${
                        active
                          ? 'bg-sky-50/80 text-[#0A1128]'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-[#0A1128]">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {item.meta}
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          active ? 'text-[#0284C7] translate-x-0.5' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleNavClick('seo')}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentPage === 'seo'
                ? 'text-[#0A1128] border-[#0284C7] font-semibold'
                : 'border-transparent hover:text-[#0A1128] hover:border-slate-300'
            }`}
          >
            SEO
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('web-design')}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentPage === 'web-design'
                ? 'text-[#0A1128] border-[#0284C7] font-semibold'
                : 'border-transparent hover:text-[#0A1128] hover:border-slate-300'
            }`}
          >
            Web Design
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentPage === 'contact'
                ? 'text-[#0A1128] border-[#0284C7] font-semibold'
                : 'border-transparent hover:text-[#0A1128] hover:border-slate-300'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#0A1128] hover:bg-[#0284C7] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
          >
            Get Started
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#0A1128] hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-1">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                currentPage === 'home'
                  ? 'bg-sky-50 text-[#0284C7]'
                  : 'text-[#0A1128] hover:bg-slate-50'
              }`}
            >
              1. Home
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                currentPage === 'about'
                  ? 'bg-sky-50 text-[#0284C7]'
                  : 'text-[#0A1128] hover:bg-slate-50'
              }`}
            >
              2. About Us
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('services')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                currentPage === 'services'
                  ? 'bg-sky-50 text-[#0284C7]'
                  : 'text-[#0A1128] hover:bg-slate-50'
              }`}
            >
              3. Services (All Capabilities)
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('seo')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                currentPage === 'seo'
                  ? 'bg-sky-50 text-[#0284C7]'
                  : 'text-[#0A1128] hover:bg-slate-50'
              }`}
            >
              4. SEO (Search Engine Optimization)
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('web-design')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                currentPage === 'web-design'
                  ? 'bg-sky-50 text-[#0284C7]'
                  : 'text-[#0A1128] hover:bg-slate-50'
              }`}
            >
              5. Web Design & Development
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('social-media')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                currentPage === 'social-media'
                  ? 'bg-sky-50 text-[#0284C7]'
                  : 'text-[#0A1128] hover:bg-slate-50'
              }`}
            >
              6. Social Media Marketing
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('email-marketing')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                currentPage === 'email-marketing'
                  ? 'bg-sky-50 text-[#0284C7]'
                  : 'text-[#0A1128] hover:bg-slate-50'
              }`}
            >
              7. Email Marketing
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('link-building')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                currentPage === 'link-building'
                  ? 'bg-sky-50 text-[#0284C7]'
                  : 'text-[#0A1128] hover:bg-slate-50'
              }`}
            >
              8. Link Building
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                currentPage === 'contact'
                  ? 'bg-sky-50 text-[#0284C7]'
                  : 'text-[#0A1128] hover:bg-slate-50'
              }`}
            >
              9. Contact Us
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors text-center"
            >
              Get Started — Request Free Growth Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
