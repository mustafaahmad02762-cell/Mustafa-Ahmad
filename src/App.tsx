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
  home: 'Digital Vibes — Turn Your Vision Into Digital Growth',
  about: 'About Digital Vibes — Turn Your Vision Into Digital Growth',
  services: 'Services & Digital Marketing Strategy — Digital Vibes',
  'web-design': 'Website Design & Development — Digital Vibes',
  seo: 'SEO & Search Growth — Digital Vibes',
  'social-media': 'Social Media Marketing — Digital Vibes',
  'email-marketing': 'Email Marketing & Lifecycle Automation — Digital Vibes',
  'link-building': 'White-Hat Link Building — Digital Vibes',
  contact: 'Contact Digital Vibes — Start Your Project',
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
      case 'web-design':
      case 'seo':
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
    <div className="min-h-screen flex flex-col bg-[#050A18] text-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
