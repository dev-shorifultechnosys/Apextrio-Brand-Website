import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight, Sparkles, Send } from 'lucide-react';
import { Button } from './ui/button';
import type { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'ITSM Maturity', page: 'itsm' as Page },
      { label: 'SAMA Compliance', page: 'sama' as Page },
      { label: 'NCA Framework', page: 'nca' as Page },
      { label: 'Tool Adoption', page: 'tool-adoption' as Page }
    ],
    company: [
      { label: 'About Us', page: 'about' as Page },
      { label: 'Blog & Insights', page: 'blog' as Page },
      { label: 'Contact', page: 'contact' as Page }
    ],
    resources: [
      { label: 'Case Studies', page: 'blog' as Page },
      { label: 'White Papers', page: 'blog' as Page },
      { label: 'Frameworks', page: 'home' as Page },
      { label: 'Solutions', page: 'home' as Page }
    ]
  };

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-600/10 to-violet-600/10 rounded-full opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-violet-600/10 to-purple-600/10 rounded-full opacity-50 blur-3xl" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 text-purple-300 px-4 py-2 rounded-full mb-6">
                <Sparkles size={14} className="text-purple-300" />
                <span className="text-xs font-semibold tracking-wide">STAY UPDATED</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Subscribe to Our{' '}
                <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                  Newsletter
                </span>
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Get expert insights, industry updates, and best practices delivered to your inbox monthly.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                  <Button className="group bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-400/30 transition-all duration-500">
                    <span className="flex items-center gap-2 font-semibold">
                      Subscribe
                      <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
                    </span>
                  </Button>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center sm:text-left">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <button 
                onClick={() => handleNavigation('home')} 
                className="inline-block hover:opacity-80 transition-opacity mb-6"
              >
                <Logo />
              </button>
              <p className="text-base text-gray-400 mb-8 max-w-md leading-relaxed">
                Expert IT consulting in ITSM maturity, SAMA and NCA compliance frameworks, 
                and tool-adoption strategies that drive measurable business value.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="group flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-purple-600/30 group-hover:to-violet-600/30 transition-all duration-300">
                    <Mail size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Email</p>
                    <a href="mailto:info@apextrio.com" className="text-sm text-white font-medium hover:text-purple-400 transition-colors">
                      info@apextrio.com
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-purple-600/30 group-hover:to-violet-600/30 transition-all duration-300">
                    <Phone size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Phone</p>
                    <a href="tel:+966112345678" className="text-sm text-white font-medium hover:text-purple-400 transition-colors">
                      +966 11 234 5678
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-purple-600/30 group-hover:to-violet-600/30 transition-all duration-300">
                    <MapPin size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Office</p>
                    <p className="text-sm text-white font-medium">
                      King Fahd Road, Olaya<br />
                      Riyadh, Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-6 text-base">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => handleNavigation(link.page)}
                      className="group text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold mb-6 text-base">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => handleNavigation(link.page)}
                      className="group text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold mb-6 text-base">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavigation(link.page)}
                      className="group text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-gray-500 order-2 lg:order-1">
              © {currentYear} Apextrio. All rights reserved. Empowering IT excellence across the Middle East.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 order-1 lg:order-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-violet-600 hover:border-transparent transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-violet-600 hover:border-transparent transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-gray-500 order-3">
              <button className="hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <button className="hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-50" />
    </footer>
  );
}