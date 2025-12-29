import React from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', page: 'home' as Page, scrollTo: 'hero' },
    { label: 'About', page: 'home' as Page, scrollTo: 'about' },
    { label: 'Services', page: 'home' as Page, scrollTo: 'services' },
    { label: 'Frameworks', page: 'home' as Page, scrollTo: 'frameworks' },
    { label: 'Solutions', page: 'home' as Page, scrollTo: 'solutions' },
    { label: 'Blog', page: 'home' as Page, scrollTo: 'blog' },
    { label: 'Contact', page: 'home' as Page, scrollTo: 'contact' },
  ];

  const handleNavClick = (page: Page, scrollTo?: string) => {
    setMobileMenuOpen(false);
    
    if (page === 'home' && scrollTo) {
      // If we're already on home, just scroll
      if (currentPage === 'home') {
        const element = document.getElementById(scrollTo);
        if (element) {
          const headerOffset = 80; // Height of fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // Navigate to home first, then scroll
        onNavigate(page);
        setTimeout(() => {
          const element = document.getElementById(scrollTo);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    } else {
      // Other pages
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center hover:opacity-90 transition-all duration-300"
          >
            <Logo />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page, item.scrollTo)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  currentPage === item.page 
                    ? 'text-purple-500' 
                    : 'text-gray-700 hover:text-purple-500 hover:bg-purple-50/50'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-purple-500 transition-all duration-300 ${
                  currentPage === item.page ? 'w-8' : 'w-0 group-hover:w-8'
                }`} />
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                searchOpen 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-purple-600'
              }`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Sign In Button */}
            <Button 
              onClick={() => handleNavClick('home', 'blog')}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50/50 transition-all duration-300"
            >
              Sign In
            </Button>

            {/* CTA Button */}
            <div>
            <Button 
              onClick={() => handleNavClick('home', 'blog')}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
            >
              Get Started
            </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Search Bar (Desktop) */}
        {searchOpen && (
          <div className="hidden lg:block py-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search services, frameworks, insights..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:bg-white transition-all duration-300"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-2 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Search Bar (Mobile) */}
            <div className="px-2 mb-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:bg-white transition-all"
                />
              </div>
            </div>

            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page, item.scrollTo)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  currentPage === item.page 
                    ? 'text-purple-600 bg-purple-50' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="px-2 pt-4 space-y-3">
              <Button 
                onClick={() => handleNavClick('home', 'blog')}
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => handleNavClick('home', 'blog')}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg shadow-purple-600/30"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}