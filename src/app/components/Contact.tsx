import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, Clock, MessageCircle, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import type { Page } from '../App';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: 'general',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+966 11 234 5678',
      subdetails: 'Mon-Fri 9am-6pm AST',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@apextrio.com',
      subdetails: 'We reply within 24 hours',
      gradient: 'from-violet-600 to-violet-700'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Riyadh, Saudi Arabia',
      subdetails: 'King Fahd Road, Olaya District',
      gradient: 'from-purple-500 to-violet-600'
    }
  ];

  const features = [
    { icon: CheckCircle, text: 'Free initial consultation' },
    { icon: Clock, text: '24-hour response guarantee' },
    { icon: Building2, text: '15+ years of experience' },
    { icon: MessageCircle, text: 'Dedicated support team' }
  ];

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-200/40 to-violet-200/40 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/40 to-purple-200/40 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }} />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400/15 to-violet-400/15 backdrop-blur-sm border border-purple-300/50 text-purple-600 px-5 py-2.5 rounded-full mb-8 shadow-sm">
            <Sparkles size={16} className="text-purple-500" />
            <span className="text-sm font-semibold tracking-wide">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Let's Start a{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                Conversation
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-300 to-violet-300 opacity-30 blur-sm -z-10" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your IT operations? Schedule a free consultation with our experts 
            and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="relative animate-in fade-in slide-in-from-left duration-700">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100/50 shadow-2xl p-10 overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/50 opacity-50 rounded-3xl" />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/40 to-transparent rounded-3xl" />

              <div className="relative">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h3>

                {submitted ? (
                  <div className="py-16 text-center animate-in fade-in zoom-in duration-500">
                    <div className="inline-flex w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                      <CheckCircle className="text-white" size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      Thank You!
                    </h4>
                    <p className="text-base text-gray-600">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Ahmed Al-Rashid"
                          className="w-full px-4 py-3 bg-white border-2 border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                        />
                      </div>
                      <div className="group">
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="ahmed@company.com"
                          className="w-full px-4 py-3 bg-white border-2 border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <Label htmlFor="company" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full px-4 py-3 bg-white border-2 border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                        />
                      </div>
                      <div className="group">
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+966 XX XXX XXXX"
                          className="w-full px-4 py-3 bg-white border-2 border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <Label htmlFor="service" className="text-sm font-semibold text-gray-700 mb-2 block">
                        Area of Interest *
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-gray-700"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="itsm">ITSM Maturity Assessment</option>
                        <option value="sama">SAMA Compliance</option>
                        <option value="nca">NCA Framework</option>
                        <option value="tool-adoption">Tool Adoption & Optimization</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>

                    <div className="group">
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project or requirements..."
                        className="w-full px-4 py-3 bg-white border-2 border-purple-100 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-7 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-1 group"
                    >
                      <span className="flex items-center justify-center gap-2 text-base font-semibold">
                        Send Message
                        <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={18} />
                      </span>
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700">
            {/* Contact Info Cards */}
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100/50 hover:border-purple-300 shadow-lg hover:shadow-xl hover:shadow-purple-200/50 p-8 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-5">
                    <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-all duration-500 flex-shrink-0`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-base text-gray-900 font-semibold mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.subdetails}
                      </p>
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              );
            })}

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.text}
                    className="group relative bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100 p-5 hover:border-purple-300 hover:shadow-md transition-all duration-500"
                  >
                    <Icon className="text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                    <p className="text-sm font-semibold text-gray-700 leading-snug">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Response Promise */}
            <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-2xl p-8 overflow-hidden shadow-2xl">
              {/* Background effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_60%)]" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
              
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-purple-300" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      24-Hour Response Guarantee
                    </h4>
                    <p className="text-base text-purple-200 leading-relaxed">
                      We understand that your time is valuable. Our team commits to responding 
                      to all inquiries within one business day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}