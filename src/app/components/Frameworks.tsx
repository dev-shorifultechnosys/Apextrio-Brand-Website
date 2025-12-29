import React from 'react';
import { Shield, Award, CheckCircle, Layers, Lock, Globe, Sparkles } from 'lucide-react';

export function Frameworks() {
  const frameworks = [
    {
      icon: Layers,
      name: 'ITIL 4',
      category: 'Service Management',
      description: 'IT Infrastructure Library best practices',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: Shield,
      name: 'ISO/IEC 20000',
      category: 'IT Service Management',
      description: 'International standard for ITSM',
      gradient: 'from-violet-600 to-violet-700'
    },
    {
      icon: Lock,
      name: 'ISO 27001',
      category: 'Information Security',
      description: 'Information security management',
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: Shield,
      name: 'SAMA Framework',
      category: 'Cybersecurity',
      description: 'Saudi Monetary Authority compliance',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: CheckCircle,
      name: 'NCA ECC',
      category: 'Essential Controls',
      description: 'National Cybersecurity Authority',
      gradient: 'from-purple-600 to-violet-600'
    },
    {
      icon: Globe,
      name: 'COBIT',
      category: 'Governance',
      description: 'Control Objectives for IT',
      gradient: 'from-violet-600 to-purple-700'
    }
  ];

  const platforms = [
    { name: 'ServiceNow', specialty: 'ITSM Platform' },
    { name: 'Jira Service Management', specialty: 'Agile ITSM' },
    { name: 'BMC Remedy', specialty: 'Enterprise ITSM' },
    { name: 'Cherwell', specialty: 'Service Management' },
    { name: 'Freshservice', specialty: 'Cloud ITSM' },
    { name: 'ManageEngine', specialty: 'IT Management' }
  ];

  return (
    <section id="frameworks" className="relative py-32 bg-gradient-to-b from-white via-purple-50/20 to-white overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/40 to-violet-200/40 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-violet-200/40 to-purple-200/40 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '11s', animationDelay: '2s' }} />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400/15 to-violet-400/15 backdrop-blur-sm border border-purple-300/50 text-purple-600 px-5 py-2.5 rounded-full mb-8 shadow-sm">
            <Sparkles size={16} className="text-purple-500" />
            <span className="text-sm font-semibold tracking-wide">STANDARDS & EXPERTISE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Frameworks &{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                Certifications
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-300 to-violet-300 opacity-30 blur-sm -z-10" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We bring deep expertise across industry-leading frameworks, standards, and platforms 
            to ensure your organization achieves excellence in IT service management and compliance.
          </p>
        </div>

        {/* Frameworks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {frameworks.map((framework, index) => {
            const Icon = framework.icon;
            return (
              <div
                key={framework.name}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100/50 hover:border-purple-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${framework.gradient} rounded-2xl items-center justify-center mb-5 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  {/* Category Badge */}
                  <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {framework.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    {framework.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {framework.description}
                  </p>
                </div>

                {/* Bottom gradient border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${framework.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Premium Platforms Section */}
        <div className="relative animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_60%)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
            
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Platform Expertise
                </h3>
                <p className="text-lg text-purple-200 max-w-2xl mx-auto">
                  Certified professionals with hands-on experience implementing and optimizing leading ITSM platforms
                </p>
              </div>

              {/* Platforms Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {platforms.map((platform, index) => (
                  <div
                    key={platform.name}
                    className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-purple-300/50 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                        <Award className="text-purple-300 group-hover:text-purple-200 transition-colors duration-300" size={20} />
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-200 transition-colors duration-300">
                        {platform.name}
                      </h4>
                      <p className="text-sm text-purple-300">
                        {platform.specialty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-4 gap-6 mt-20 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          {[
            { value: '20+', label: 'Framework Certifications' },
            { value: '100+', label: 'Successful Implementations' },
            { value: '15+', label: 'Years of Expertise' },
            { value: '98%', label: 'Compliance Success Rate' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100/50 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-200/50 p-8 text-center transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}