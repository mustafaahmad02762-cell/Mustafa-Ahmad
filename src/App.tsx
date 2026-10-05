/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CORE_SERVICES, PageId } from './agencyData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesHubView } from './views/ServicesHubView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { ContactView } from './views/ContactView';

const PAGE_TITLES: Record<PageId, string> = {
  home: 'Digital Vibes – Grow Your Business. Build Your Digital Presence.',
  about: 'About Us – Digital Vibes Digital Marketing Agency',
  services: 'Our Services & Digital Marketing Strategy – Digital Vibes',
  seo: 'Search Engine Optimization (SEO) Services – Digital Vibes',
  'web-design': 'Website Design & Development – Digital Vibes',
  'social-media': 'Social Media Marketing Services – Digital Vibes',
  'email-marketing': 'Email Marketing & Lifecycle Automation – Digital Vibes',
  'link-building': 'White-Hat Link Building & Digital PR – Digital Vibes',
  contact: 'Contact Us – Digital Vibes | Your Digital Growth Partner',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  useEffect(() => {
    const syncFromHash = () => {
      const rawHash = window.location.hash.replace('#', '') as PageId;
      if (rawHash && Object.keys(PAGE_TITLES).includes(rawHash)) {
        setCurrentPage(rawHash);
      }
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} />;
      case 'about':
        return <AboutView onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesHubView onNavigate={handleNavigate} />;
      case 'seo':
      case 'web-design':
      case 'social-media':
      case 'email-marketing':
      case 'link-building': {
        const service = CORE_SERVICES.find((s) => s.id === currentPage)!;
        return <ServiceDetailView service={service} onNavigate={handleNavigate} />;
      }
      case 'contact':
        return <ContactView onNavigate={handleNavigate} />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A1128]">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
