import React from 'react';
import { Calendar, Clock, ArrowRight, Sparkles, TrendingUp, BookOpen, FileText, User, Star, Flame, Eye } from 'lucide-react';
import { Button } from './ui/button';
import type { Page } from '../App';

interface BlogSectionProps {
  onNavigate: (page: Page) => void;
}

export function BlogSection({ onNavigate }: BlogSectionProps) {
  const featuredPost = {
    title: 'SAMA Cybersecurity Framework: A Complete Implementation Guide for 2025',
    excerpt: 'Navigate the latest SAMA requirements with our comprehensive guide covering risk assessment, control implementation, and audit preparation strategies for financial institutions.',
    category: 'Compliance',
    readTime: '12 min read',
    date: 'Dec 15, 2024',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    author: 'Sarah Al-Mansour',
    authorRole: 'Senior Compliance Consultant',
    views: '2.4K',
    trending: true
  };

  const posts = [
    {
      title: 'NCA ECC Controls: Essential Cybersecurity Framework Implementation',
      excerpt: 'Step-by-step guidance on implementing NCA Essential Cybersecurity Controls for Saudi organizations.',
      category: 'Compliance',
      readTime: '8 min read',
      date: 'Dec 10, 2024',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      icon: FileText,
      gradient: 'from-purple-500 to-purple-600',
      author: 'Mohammed Al-Harbi',
      views: '1.8K',
      size: 'large'
    },
    {
      title: 'ITIL 4 Service Value System: Maximizing Business Value',
      excerpt: 'Learn how to leverage ITIL 4 practices to drive continuous improvement.',
      category: 'ITSM',
      readTime: '10 min read',
      date: 'Dec 5, 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      icon: TrendingUp,
      gradient: 'from-violet-500 to-violet-600',
      author: 'Lisa Chen',
      views: '3.2K',
      size: 'medium'
    },
    {
      title: 'ServiceNow Implementation: Best Practices for Rapid Adoption',
      excerpt: 'Proven strategies to accelerate user adoption and maximize ROI.',
      category: 'Tool Adoption',
      readTime: '9 min read',
      date: 'Nov 28, 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      icon: BookOpen,
      gradient: 'from-purple-600 to-violet-500',
      author: 'David Park',
      views: '1.5K',
      size: 'medium'
    },
    {
      title: 'Zero Trust Architecture in Modern Enterprise',
      excerpt: 'Implementing zero trust security models for digital transformation.',
      category: 'Security',
      readTime: '7 min read',
      date: 'Nov 20, 2024',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
      icon: FileText,
      gradient: 'from-purple-500 to-violet-600',
      author: 'Emma Johnson',
      views: '2.1K',
      size: 'small'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 24, active: true },
    { name: 'ITSM', count: 8 },
    { name: 'Compliance', count: 12 },
    { name: 'Security', count: 7 },
    { name: 'Case Studies', count: 4 }
  ];

  return (
    <section id="blog" className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-100/50 via-violet-100/30 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-violet-100/50 via-purple-100/30 to-transparent rounded-full blur-3xl -z-10" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Exclusive Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-xl border border-purple-200/60 shadow-lg shadow-purple-500/10 text-purple-600 px-6 py-3 rounded-full mb-8">
            <Sparkles size={18} className="text-purple-500" />
            <span className="text-sm font-bold tracking-wider">EXCLUSIVE INSIGHTS</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Industry{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Intelligence
              </span>
              <div className="absolute -bottom-3 left-0 right-0 h-4 bg-gradient-to-r from-purple-400/40 to-violet-400/40 blur-lg -z-10" />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Premium perspectives on enterprise technology, compliance, and digital transformation
          </p>
        </div>

        {/* Premium Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-in fade-in duration-700 delay-100">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`group relative px-7 py-3.5 rounded-full transition-all duration-500 overflow-hidden ${
                category.active
                  ? 'bg-gray-900 text-white shadow-2xl shadow-gray-900/30'
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:border-purple-300 hover:shadow-xl hover:-translate-y-0.5'
              }`}
            >
              {category.active && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 animate-pulse" style={{ animationDuration: '3s' }} />
              )}
              <span className="relative flex items-center gap-2.5">
                <span className="font-bold text-sm">{category.name}</span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                  category.active
                    ? 'bg-white/20 text-white'
                    : 'bg-purple-50 text-purple-700'
                }`}>
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Hero Featured Post - Magazine Style */}
        <div className="mb-20 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <div className="group relative bg-white rounded-[2rem] shadow-2xl hover:shadow-3xl overflow-hidden transition-all duration-700 hover:-translate-y-2">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-0" />
            
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Image Side - Takes more space */}
              <div className="lg:col-span-3 relative h-[500px] lg:h-[600px] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Floating badges on image */}
                <div className="absolute top-8 left-8 flex flex-col gap-3">
                  {featuredPost.trending && (
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2.5 rounded-2xl shadow-2xl shadow-orange-500/40 backdrop-blur-md">
                      <Flame size={18} className="animate-pulse" />
                      <span className="text-sm font-bold">Trending Now</span>
                    </div>
                  )}
                  <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl">
                    <Star className="text-purple-600 fill-purple-600" size={16} />
                    <span className="text-sm font-bold text-gray-900">Featured Article</span>
                  </div>
                </div>

                {/* Stats on image */}
                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full">
                    <Eye size={14} />
                    <span className="text-sm font-semibold">{featuredPost.views} views</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-2 relative p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-purple-50/30">
                <div className="relative z-10">
                  {/* Category & Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-block bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg shadow-purple-500/30">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                      <Calendar size={14} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                      <Clock size={14} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-[1.2] group-hover:text-purple-700 transition-colors duration-500">
                    {featuredPost.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-base text-gray-600 mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{featuredPost.author}</div>
                      <div className="text-sm text-gray-600">{featuredPost.authorRole}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onNavigate('blog')}
                    className="group/btn inline-flex items-center gap-3 bg-gray-900 hover:bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-x-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid - Modern Asymmetric Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {posts.map((post, index) => {
            const Icon = post.icon;
            const isLarge = post.size === 'large';
            
            return (
              <div
                key={post.title}
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-700 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom ${
                  isLarge ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${300 + index * 100}ms`, animationDuration: '700ms' }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0 group-hover:from-purple-600/5 group-hover:to-violet-600/5 transition-all duration-700 -z-0" />
                
                {/* Image */}
                <div className={`relative overflow-hidden ${isLarge ? 'h-[400px]' : 'h-56'}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/95 backdrop-blur-xl text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-xl border border-white/40">
                      {post.category}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className={`absolute bottom-4 right-4 w-14 h-14 bg-gradient-to-br ${post.gradient} rounded-2xl flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Views */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    <Eye size={12} />
                    {post.views}
                  </div>
                </div>

                {/* Content */}
                <div className={`relative p-6 ${isLarge ? 'lg:p-8' : ''}`}>
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4 text-xs text-gray-600 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300 leading-tight ${
                    isLarge ? 'text-2xl lg:text-3xl mb-4' : 'text-lg line-clamp-2'
                  }`}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className={`text-sm text-gray-600 mb-5 leading-relaxed ${
                    isLarge ? 'text-base line-clamp-3' : 'line-clamp-2'
                  }`}>
                    {post.excerpt}
                  </p>

                  {/* Author & CTA */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{post.author}</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => onNavigate('blog')}
                      className="group/link flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors duration-300"
                    >
                      <span>Read</span>
                      <ArrowRight className="group-hover/link:translate-x-1 transition-transform duration-300" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Newsletter CTA */}
        <div className="relative animate-in fade-in slide-in-from-bottom duration-700 delay-600">
          <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-[2rem] p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Animated background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.4),transparent_60%)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="relative text-center max-w-3xl mx-auto">
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-2.5 rounded-full mb-8 shadow-xl">
                <Sparkles size={16} className="text-purple-300" />
                <span className="text-sm font-bold tracking-wide">EXCLUSIVE ACCESS</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Join Our Elite Community
              </h3>
              
              <p className="text-lg text-purple-200 mb-10 leading-relaxed">
                Get weekly insights, exclusive case studies, and early access to our research delivered directly to your inbox
              </p>

              {/* Email form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder:text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                />
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-purple-50 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  Subscribe Now
                </Button>
              </div>

              <p className="text-sm text-purple-300">
                Join 5,000+ IT professionals already subscribed • No spam, unsubscribe anytime
              </p>

              {/* View all button */}
              <div className="mt-12 pt-12 border-t border-white/10">
                <Button
                  onClick={() => onNavigate('blog')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-6 rounded-2xl font-bold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="flex items-center gap-3">
                    View All Articles
                    <ArrowRight size={20} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}