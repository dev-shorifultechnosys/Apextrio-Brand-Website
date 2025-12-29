import React from 'react';
import { ArrowRight, Target, Users, Award, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import type { Page } from '../App';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Target,
      title: 'Client-Centric Excellence',
      description: 'Every engagement is tailored to your unique challenges, industry context, and business objectives.'
    },
    {
      icon: Award,
      title: 'Technical Expertise',
      description: 'Deep expertise in ITSM frameworks, regulatory compliance, and enterprise tool ecosystems.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work alongside your teams, transferring knowledge and building internal capabilities.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Impact',
      description: 'Clear KPIs from day one with quantifiable improvements in efficiency and satisfaction.'
    }
  ];

  const keyAreas = [
    'ITIL 4 & Service Management',
    'SAMA Cybersecurity Framework',
    'NCA Essential Controls',
    'ISO/IEC 20000 & 27001',
    'ServiceNow & ITSM Platforms',
    'Digital Transformation'
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 to-violet-200/40 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/40 to-purple-200/40 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-100/20 to-violet-100/20 rounded-full opacity-40 blur-3xl -z-10" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400/15 to-violet-400/15 backdrop-blur-sm border border-purple-300/50 text-purple-600 px-5 py-2.5 rounded-full mb-8 shadow-sm">
            <Sparkles size={16} className="text-purple-500" />
            <span className="text-sm font-semibold tracking-wide">WHO WE ARE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Your Partner in{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                IT Excellence
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-300 to-violet-300 opacity-30 blur-sm -z-10" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are a specialized IT consulting firm dedicated to helping organizations achieve 
            operational excellence through mature service management practices, regulatory compliance, 
            and strategic technology adoption.
          </p>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
          {/* Left - Mission with Enhanced Design */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-violet-600 rounded-full" />
              <h3 className="text-4xl font-bold text-gray-900 mb-6 pl-4">
                Our Mission
              </h3>
            </div>
            
            <div className="space-y-6 pl-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower organizations with the frameworks, tools, and expertise needed to transform 
                IT from a cost center into a strategic enabler of business growth and resilience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that effective IT service management and compliance aren't just about meeting 
                standards—they're about creating responsive, efficient, and secure technology environments 
                that drive competitive advantage.
              </p>
            </div>

            {/* Premium Key Areas Card */}
            <div className="relative group mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white p-8 rounded-3xl border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full" />
                  Key Areas of Expertise
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {keyAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-3 group/item">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-purple-600" size={16} />
                      </div>
                      <span className="text-base text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Premium Stats Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              {/* Stat Card 1 */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl shadow-2xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-purple-300/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_60%)]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl" />
                </div>
                <div className="relative">
                  <div className="text-6xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3">15+</div>
                  <div className="text-sm text-purple-900 font-medium tracking-wide">Years in Business</div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-violet-50 to-violet-100 p-10 rounded-3xl shadow-2xl border-2 border-violet-200 hover:border-violet-400 hover:shadow-violet-300/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] mt-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_60%)]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-200/30 rounded-full blur-2xl" />
                </div>
                <div className="relative">
                  <div className="text-6xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3">50+</div>
                  <div className="text-sm text-violet-900 font-medium tracking-wide">Client Projects</div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-purple-100 to-violet-100 p-10 rounded-3xl shadow-2xl border-2 border-purple-300 hover:border-purple-400 hover:shadow-purple-300/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.15),transparent_60%)]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl" />
                </div>
                <div className="relative">
                  <div className="text-6xl font-bold bg-gradient-to-br from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3">35+</div>
                  <div className="text-sm text-purple-900 font-medium tracking-wide">Enterprise Clients</div>
                </div>
              </div>

              {/* Stat Card 4 - White Premium */}
              <div className="group relative bg-white p-10 rounded-3xl shadow-2xl border-2 border-purple-200 hover:border-purple-400 mt-10 hover:shadow-purple-300/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-6xl font-bold bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent mb-3">98%</div>
                  <div className="text-sm text-gray-700 font-medium tracking-wide">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-purple-300 to-violet-300 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-tr from-violet-300 to-purple-300 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
          </div>
        </div>

        {/* Premium Values Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div 
                key={idx} 
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100/50 hover:border-purple-300 shadow-lg hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-purple-500/30">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Premium CTA */}
        <div className="text-center animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <Button
            onClick={() => onNavigate('about')}
            size="lg"
            className="group relative bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-1 text-base font-semibold"
          >
            <span className="relative z-10 flex items-center gap-2">
              Discover Our Story
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}