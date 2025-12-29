import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Frameworks } from './components/Frameworks';
import { Solutions } from './components/Solutions';
import { TrustedBy } from './components/TrustedBy';
import { BlogSection } from './components/BlogSection';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';

export type Page = 'home' | 'itsm' | 'sama' | 'nca' | 'tool-adoption' | 'blog' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'itsm':
        return <ServiceDetail service="itsm" onNavigate={setCurrentPage} />;
      case 'sama':
        return <ServiceDetail service="sama" onNavigate={setCurrentPage} />;
      case 'nca':
        return <ServiceDetail service="nca" onNavigate={setCurrentPage} />;
      case 'tool-adoption':
        return <ServiceDetail service="tool-adoption" onNavigate={setCurrentPage} />;
      case 'blog':
        return <Blog onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <About onNavigate={setCurrentPage} />
            <Services onNavigate={setCurrentPage} />
            <Frameworks />
            <Solutions onNavigate={setCurrentPage} />
            <TrustedBy />
            <BlogSection onNavigate={setCurrentPage} />
            <Contact onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}