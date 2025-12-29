import React from 'react';
import { ArrowRight, Shield, Target, Zap, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import type { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-violet-50/30 pt-20">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.08),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMDAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 px-5 py-2.5 rounded-full border border-purple-200/50 shadow-sm hover:shadow-md transition-shadow">
              <Sparkles size={16} className="animate-pulse" />
              <span className="text-sm font-semibold">Enterprise IT Excellence</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                IT Service Management
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
              Expert consulting in ITSM maturity, SAMA & NCA compliance frameworks, 
              and tool-adoption strategies that drive measurable business value.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={() => onNavigate('contact')}
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-xl shadow-purple-600/30 hover:shadow-2xl hover:shadow-purple-600/40 transition-all duration-300 text-base px-8 py-6"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                onClick={() => onNavigate('services')}
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-purple-600 hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-all duration-300 text-base px-8 py-6"
              >
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/80">
              <div className="group cursor-default">
                <div className="text-4xl font-bold bg-gradient-to-br from-purple-500 to-violet-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">50+</div>
                <div className="text-sm text-gray-600 mt-1">Client Projects</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl font-bold bg-gradient-to-br from-purple-500 to-violet-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl font-bold bg-gradient-to-br from-purple-500 to-violet-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Feature Grid */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="grid grid-cols-2 gap-5">
              {/* Feature Cards */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 p-7 rounded-2xl shadow-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-300/50 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.1),transparent_50%)]" />
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">100%</div>
                  <p className="text-sm text-purple-900 font-medium leading-relaxed">
                    Compliance success rate across SAMA and NCA frameworks
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-violet-50 to-violet-100 p-7 rounded-2xl shadow-xl border-2 border-violet-200 hover:border-violet-400 mt-10 hover:shadow-2xl hover:shadow-violet-300/50 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_50%)]" />
                <div className="relative">
                  <div className="text-5xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">24/7</div>
                  <p className="text-sm text-violet-900 font-medium leading-relaxed">
                    Ongoing support and guidance for enterprise clients
                  </p>
                </div>
              </div>

              <div className="group relative bg-white p-7 rounded-2xl shadow-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-1">
                <div className="text-5xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">ISO</div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Certified consultants in 20000, 27001, and industry best practices
                </p>
              </div>

              <div className="group bg-white p-7 rounded-2xl shadow-xl border-2 border-purple-200 hover:border-purple-400 mt-10 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-1">
                <div className="text-5xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">40%</div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Average efficiency improvement for our clients
                </p>
              </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-violet-300 rounded-full opacity-20 blur-3xl -z-10 animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200 to-violet-200 rounded-full opacity-10 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}