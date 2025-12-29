import React from 'react';
import { Rocket, Users, Zap, Target, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import type { Page } from '../App';

interface SolutionsProps {
  onNavigate: (page: Page) => void;
}

export function Solutions({ onNavigate }: SolutionsProps) {
  const [activePhase, setActivePhase] = React.useState(0);

  const solutions = [
    {
      icon: Rocket,
      title: 'Assessment & Roadmap',
      tagline: 'Know Where You Stand',
      description: 'Comprehensive evaluation of your current state with a clear, actionable roadmap to maturity.',
      features: [
        'Gap analysis & benchmarking',
        'Maturity assessment',
        'Strategic roadmap development',
        'Quick wins identification'
      ],
      gradient: 'from-purple-600 to-purple-700',
      lightGradient: 'from-purple-50 to-purple-100',
      iconGradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Implementation & Integration',
      tagline: 'Transform with Confidence',
      description: 'End-to-end implementation support from design through deployment and stabilization.',
      features: [
        'Process design & optimization',
        'Platform configuration',
        'Integration architecture',
        'Testing & validation'
      ],
      gradient: 'from-violet-600 to-violet-700',
      lightGradient: 'from-violet-50 to-violet-100',
      iconGradient: 'from-violet-500 to-violet-600'
    },
    {
      icon: Users,
      title: 'Change & Adoption',
      tagline: 'Drive User Engagement',
      description: 'Comprehensive change management ensuring your teams embrace new tools and processes.',
      features: [
        'Stakeholder engagement',
        'Training & enablement',
        'Communication strategy',
        'Adoption measurement'
      ],
      gradient: 'from-purple-500 to-violet-600',
      lightGradient: 'from-purple-50 to-violet-100',
      iconGradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: Zap,
      title: 'Optimization & Support',
      tagline: 'Continuous Improvement',
      description: 'Ongoing optimization, support, and enhancement to maximize value and ROI.',
      features: [
        'Performance monitoring',
        'Continuous optimization',
        'Best practice coaching',
        'Technical support'
      ],
      gradient: 'from-violet-500 to-purple-600',
      lightGradient: 'from-violet-50 to-purple-100',
      iconGradient: 'from-violet-600 to-purple-600'
    }
  ];

  const industries = [
    { name: 'Financial Services', description: 'Banks, Insurance, Fintech' },
    { name: 'Healthcare', description: 'Hospitals, Clinics, Health Tech' },
    { name: 'Government', description: 'Public Sector, Municipalities' },
    { name: 'Energy & Utilities', description: 'Oil, Gas, Power, Water' },
    { name: 'Telecommunications', description: 'Telecom, ISPs, Mobile' },
    { name: 'Education', description: 'Universities, Schools, EdTech' }
  ];

  return (
    <section id="solutions" className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-200/40 to-violet-200/40 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/40 to-purple-200/40 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100/20 to-violet-100/20 rounded-full opacity-20 blur-3xl -z-10" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/10 to-violet-600/10 backdrop-blur-sm border border-purple-200/50 text-purple-700 px-5 py-2.5 rounded-full mb-8 shadow-sm">
            <Sparkles size={16} className="text-purple-600" />
            <span className="text-sm font-semibold tracking-wide">HOW WE HELP</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Tailored{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-200 to-violet-200 opacity-30 blur-sm -z-10" />
            </span>
            {' '}for Every Stage
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From initial assessment to ongoing optimization, we provide comprehensive solutions 
            designed to meet you where you are and take you where you need to be.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100/50 hover:border-purple-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-10">
                  {/* Icon & Tagline */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="inline-block bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {solution.tagline}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <div className={`w-5 h-5 bg-gradient-to-br ${solution.lightGradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300`}>
                          <CheckCircle2 className="text-purple-600" size={14} />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom gradient border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Industries Section */}
        <div className="relative animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We{' '}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Serve
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep domain expertise across regulated and mission-critical industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100/50 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-200/50 p-6 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full group-hover:scale-150 transition-transform duration-300" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300">
                    {industry.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Process Flow CTA */}
        <div className="relative mt-24 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <div className="relative bg-gradient-to-br from-purple-100 via-violet-100 to-purple-50 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl border-2 border-purple-200">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Let's Build Your{' '}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Custom Solution
                </span>
              </h3>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Every organization is unique. We'll craft a tailored approach that fits your context, timeline, and objectives.
              </p>
              <Button
                onClick={() => onNavigate('contact')}
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-12 py-7 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-1 text-lg font-semibold"
              >
                <span className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}