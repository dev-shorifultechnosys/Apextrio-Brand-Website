import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      role: 'CIO, Saudi National Bank',
      image: 'professional man',
      rating: 5,
      text: 'Apextrio guided us through SAMA compliance with exceptional expertise. Their structured approach and deep regulatory knowledge helped us achieve full compliance ahead of schedule. The team\'s professionalism is unmatched.'
    },
    {
      name: 'Sarah Al-Qahtani',
      role: 'VP IT Operations, Riyadh Municipality',
      image: 'professional woman',
      rating: 5,
      text: 'The ITSM maturity assessment transformed our service delivery. We saw a 40% reduction in incident resolution time within six months. Apextrio\'s team didn\'t just consult—they worked alongside us to ensure lasting change.'
    },
    {
      name: 'Mohammed Al-Subaie',
      role: 'Head of Cybersecurity, Aramco Digital',
      image: 'business man',
      rating: 5,
      text: 'Outstanding support on our NCA certification journey. Apextrio provided clear roadmaps, comprehensive documentation, and hands-on implementation support. We achieved certification on our first audit.'
    },
    {
      name: 'Fatima Al-Harbi',
      role: 'Director of IT, King Faisal Hospital',
      image: 'professional woman executive',
      rating: 5,
      text: 'Our ServiceNow implementation was struggling until Apextrio stepped in. Their tool adoption methodology and change management expertise drove user adoption from 45% to 90% in just three months. Impressive results.'
    },
    {
      name: 'Khalid Al-Otaibi',
      role: 'COO, Riyad Bank',
      image: 'executive man',
      rating: 5,
      text: 'Apextrio delivers real business value, not just checkbox compliance. Their pragmatic approach to frameworks like SAMA and ITIL helped us balance regulatory requirements with operational efficiency. Highly recommended.'
    },
    {
      name: 'Noura Al-Dosari',
      role: 'IT Strategy Manager, STC',
      image: 'professional businesswoman',
      rating: 5,
      text: 'What sets Apextrio apart is their ability to translate complex frameworks into actionable plans. The team understands both the technical and business perspectives, making them invaluable partners in our digital transformation.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-gray-600">
            See what our clients say about their experience working with Apextrio
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-6 hover:shadow-xl transition-shadow relative">
              <Quote className="absolute top-4 right-4 text-purple-100" size={48} />
              
              <div className="relative">
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">35+</div>
            <div className="text-sm text-gray-600">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
