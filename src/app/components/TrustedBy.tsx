import React from 'react';
import { Building2, Sparkles, Award, Shield, Star } from 'lucide-react';

export function TrustedBy() {
  const testimonials = [
    {
      client: 'Saudi Telecom Company',
      industry: 'Telecommunications',
      icon: Building2,
      testimonial: 'Apextrio has been a reliable partner in our IT service management journey, ensuring compliance and excellence.'
    },
    {
      client: 'National Commercial Bank',
      industry: 'Financial Services',
      icon: Building2,
      testimonial: 'Their expertise in regulatory compliance has been invaluable to our operations.'
    },
    {
      client: 'Saudi Aramco',
      industry: 'Energy & Utilities',
      icon: Building2,
      testimonial: 'Apextrio\'s deep understanding of our industry has helped us achieve our goals.'
    },
    {
      client: 'Ministry of Health',
      industry: 'Government',
      icon: Building2,
      testimonial: 'Their commitment to our success is unmatched.'
    },
    {
      client: 'King Saud University',
      industry: 'Education',
      icon: Building2,
      testimonial: 'Apextrio\'s support has been crucial in our IT transformation.'
    },
    {
      client: 'Saudi Electricity Company',
      industry: 'Energy & Utilities',
      icon: Building2,
      testimonial: 'Their technical expertise has been a game-changer for us.'
    },
    {
      client: 'Al Rajhi Bank',
      industry: 'Financial Services',
      icon: Building2,
      testimonial: 'We trust Apextrio to handle our most critical IT initiatives.'
    },
    {
      client: 'Mobily',
      industry: 'Telecommunications',
      icon: Building2,
      testimonial: 'Their regional expertise has been a key factor in our success.'
    }
  ];

  const achievements = [
    {
      icon: Award,
      value: '50+',
      label: 'Enterprise Clients',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Compliance Success',
      gradient: 'from-violet-600 to-violet-700'
    },
    {
      icon: Star,
      value: '98%',
      label: 'Client Satisfaction',
      gradient: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/40 to-violet-200/40 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '11s' }} />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tl from-violet-200/40 to-purple-200/40 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '13s', animationDelay: '2s' }} />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400/15 to-violet-400/15 backdrop-blur-sm border border-purple-300/50 text-purple-600 px-5 py-2.5 rounded-full mb-8 shadow-sm">
            <Sparkles size={16} className="text-purple-500" />
            <span className="text-sm font-semibold tracking-wide">OUR CLIENTS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Trusted by{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                Leading Organizations
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-300 to-violet-300 opacity-30 blur-sm -z-10" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Partnering with industry leaders across Saudi Arabia and the Middle East to deliver 
            excellence in IT service management and regulatory compliance.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <div
                key={testimonial.client}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100/50 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-200/50 p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative text-center">
                  {/* Icon */}
                  <div className="inline-flex w-14 h-14 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500">
                    <Icon className="text-purple-600" size={28} />
                  </div>

                  {/* Client Name */}
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    {testimonial.client}
                  </h3>

                  {/* Industry Tag */}
                  <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {testimonial.industry}
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Achievements Bar */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.label}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100/50 hover:border-purple-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 p-10 text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-2xl items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Value */}
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3">
                    {achievement.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-gray-700 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Trust Statement */}
        <div className="relative animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_60%)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
            
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="relative">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Trust Statement */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Building Long-Term Partnerships
                  </h3>
                  <p className="text-lg text-purple-200 leading-relaxed mb-6">
                    Our clients choose us not just for our technical expertise, but for our commitment 
                    to their success. We measure our achievements by the lasting impact we create and 
                    the relationships we build.
                  </p>
                  <p className="text-base text-purple-300 leading-relaxed">
                    From Fortune 500 companies to government entities, organizations trust Apextrio 
                    to guide their most critical IT transformation initiatives.
                  </p>
                </div>

                {/* Right - Key Differentiators */}
                <div className="space-y-4">
                  {[
                    { title: 'Regional Expertise', description: 'Deep understanding of Middle East markets' },
                    { title: 'Proven Track Record', description: '15+ years delivering excellence' },
                    { title: 'Industry Recognition', description: 'Certified professionals and partnerships' },
                    { title: 'Client-First Approach', description: 'Your success is our priority' }
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="group/item relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:bg-white/15 hover:border-purple-300/50 transition-all duration-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mt-2 group-hover/item:scale-150 transition-transform duration-300" />
                        <div>
                          <h4 className="text-base font-bold text-white mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-purple-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12 animate-in fade-in duration-700 delay-700">
          <p className="text-sm text-gray-500 italic">
            * Client names shown are representative examples. Actual client relationships are confidential.
          </p>
        </div>
      </div>
    </section>
  );
}