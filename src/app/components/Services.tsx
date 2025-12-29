import React from 'react';
import { ArrowRight, Shield, Layers, FileCheck, Wrench, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import type { Page } from '../App';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      id: 'itsm',
      icon: Layers,
      title: 'ITSM Maturity Assessment',
      description: 'Comprehensive evaluation of your IT service management practices against industry standards. We identify gaps, define roadmaps, and guide your organization toward ITIL excellence.',
      features: [
        'Current-state assessment',
        'Maturity modeling',
        'Process optimization',
        'KPI framework development'
      ],
      gradient: 'from-purple-600 to-purple-700',
      lightGradient: 'from-purple-50 to-purple-100',
      hoverShadow: 'hover:shadow-purple-500/30',
      page: 'itsm' as Page
    },
    {
      id: 'sama',
      icon: Shield,
      title: 'SAMA Compliance Framework',
      description: 'Navigate Saudi Arabian Monetary Authority regulations with confidence. Our experts ensure your IT controls meet SAMA cybersecurity framework requirements.',
      features: [
        'Compliance gap analysis',
        'Control implementation',
        'Documentation & evidence',
        'Audit preparation'
      ],
      gradient: 'from-violet-600 to-violet-700',
      lightGradient: 'from-violet-50 to-violet-100',
      hoverShadow: 'hover:shadow-violet-500/30',
      page: 'sama' as Page
    },
    {
      id: 'nca',
      icon: FileCheck,
      title: 'NCA Framework Implementation',
      description: 'Achieve compliance with the National Cybersecurity Authority essential cybersecurity controls (ECC). Strategic guidance from assessment through certification.',
      features: [
        'ECC requirements mapping',
        'Security controls design',
        'Implementation support',
        'Continuous compliance'
      ],
      gradient: 'from-purple-500 to-violet-600',
      lightGradient: 'from-purple-50 to-violet-100',
      hoverShadow: 'hover:shadow-purple-500/30',
      page: 'nca' as Page
    },
    {
      id: 'tool-adoption',
      icon: Wrench,
      title: 'Tool Adoption & Optimization',
      description: 'Maximize value from your ServiceNow, Jira Service Management, or other ITSM platforms. From initial setup to advanced automation and user adoption strategies.',
      features: [
        'Platform configuration',
        'Workflow automation',
        'Change management',
        'Training & enablement'
      ],
      gradient: 'from-violet-500 to-purple-600',
      lightGradient: 'from-violet-50 to-purple-100',
      hoverShadow: 'hover:shadow-violet-500/30',
      page: 'tool-adoption' as Page
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/30 to-violet-200/30 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-violet-200/30 to-purple-200/30 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-purple-100/20 to-violet-100/20 rounded-full opacity-20 blur-3xl -z-10" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-300/50 text-purple-600 px-5 py-2.5 rounded-full mb-8 shadow-sm">
            <Sparkles size={16} className="text-purple-500" />
            <span className="text-sm font-semibold tracking-wide">OUR EXPERTISE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Our{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                Core Services
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-300 to-violet-300 opacity-30 blur-sm -z-10" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Specialized consulting that bridges the gap between IT operations and business objectives, 
            ensuring compliance, efficiency, and measurable outcomes.
          </p>
        </div>

        {/* Premium Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={service.id}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100/50 hover:border-purple-300 shadow-xl hover:shadow-2xl ${service.hoverShadow} transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative p-10">
                  {/* Icon */}
                  <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <div className={`w-5 h-5 bg-gradient-to-br ${service.lightGradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300`}>
                          <CheckCircle2 className="text-purple-600" size={14} />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <button
                    onClick={() => onNavigate(service.page)}
                    className="group/btn inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" size={18} />
                  </button>
                </div>

                {/* Bottom gradient border effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <div className="relative mt-20 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <div className="relative bg-gradient-to-br from-purple-100 via-violet-100 to-purple-50 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl border-2 border-purple-200">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  IT Operations?
                </span>
              </h3>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Let's discuss how our expertise can drive measurable improvements in your organization.
              </p>
              <Button
                onClick={() => onNavigate('contact')}
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-12 py-7 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-1 text-lg font-semibold"
              >
                <span className="flex items-center gap-2">
                  Schedule a Consultation
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