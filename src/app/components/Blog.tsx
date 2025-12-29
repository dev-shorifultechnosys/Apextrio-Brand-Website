import React, { useState } from 'react';
import { ArrowLeft, Calendar, User, Clock, ArrowRight, Search } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import type { Page } from '../App';

interface BlogProps {
  onNavigate: (page: Page) => void;
}

export function Blog({ onNavigate }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'ITSM', 'Compliance', 'Tool Adoption', 'Best Practices'];

  const blogPosts = [
    {
      id: 1,
      title: '5 Key Steps to Achieving SAMA Cybersecurity Compliance',
      excerpt: 'Navigate the SAMA framework with confidence. Learn the essential steps financial institutions must take to meet regulatory requirements and strengthen security posture.',
      author: 'Ahmed Al-Rashid',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'Compliance',
      image: 'cybersecurity compliance',
      featured: true
    },
    {
      id: 2,
      title: 'ITIL 4 vs ITIL v3: What Changed and Why It Matters',
      excerpt: 'Understanding the evolution of ITIL and how the latest version aligns with modern digital transformation initiatives and agile methodologies.',
      author: 'Sarah Al-Qahtani',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'ITSM',
      image: 'business strategy',
      featured: false
    },
    {
      id: 3,
      title: 'Maximizing ServiceNow ROI: Beyond Ticketing',
      excerpt: 'Unlock the full potential of your ServiceNow investment with advanced automation, AI-powered workflows, and strategic configuration best practices.',
      author: 'Mohammed Al-Subaie',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'Tool Adoption',
      image: 'software dashboard',
      featured: true
    },
    {
      id: 4,
      title: 'NCA Essential Controls: A Practical Implementation Guide',
      excerpt: 'Step-by-step guidance on implementing NCA ECC requirements, from initial assessment through certification and continuous compliance.',
      author: 'Fatima Al-Harbi',
      date: '2024-11-28',
      readTime: '12 min read',
      category: 'Compliance',
      image: 'security shield',
      featured: false
    },
    {
      id: 5,
      title: 'Building an ITSM Maturity Roadmap: Lessons from 50+ Implementations',
      excerpt: 'Real-world insights on creating effective ITSM maturity roadmaps that balance quick wins with long-term transformation goals.',
      author: 'Khalid Al-Otaibi',
      date: '2024-11-20',
      readTime: '7 min read',
      category: 'ITSM',
      image: 'project planning',
      featured: false
    },
    {
      id: 6,
      title: 'Change Management Strategies for Tool Adoption Success',
      excerpt: 'Why 70% of tool implementations fail due to poor adoption, and proven strategies to ensure your team embraces new technology.',
      author: 'Noura Al-Dosari',
      date: '2024-11-15',
      readTime: '9 min read',
      category: 'Tool Adoption',
      image: 'team collaboration',
      featured: false
    },
    {
      id: 7,
      title: 'The Cost of Non-Compliance: SAMA and NCA Penalty Analysis',
      excerpt: 'A comprehensive look at regulatory penalties, reputational damage, and the business case for proactive compliance investments.',
      author: 'Ahmed Al-Rashid',
      date: '2024-11-08',
      readTime: '11 min read',
      category: 'Compliance',
      image: 'financial analysis',
      featured: false
    },
    {
      id: 8,
      title: 'Incident Management Best Practices for Enterprise IT',
      excerpt: 'Improve MTTR and reduce business impact with proven incident management workflows, automation, and communication strategies.',
      author: 'Sarah Al-Qahtani',
      date: '2024-11-01',
      readTime: '8 min read',
      category: 'Best Practices',
      image: 'emergency response',
      featured: false
    },
    {
      id: 9,
      title: 'Jira Service Management vs ServiceNow: A Decision Framework',
      excerpt: 'Objective comparison of leading ITSM platforms to help you choose the right solution based on your organization\'s needs and maturity.',
      author: 'Mohammed Al-Subaie',
      date: '2024-10-25',
      readTime: '15 min read',
      category: 'Tool Adoption',
      image: 'software comparison',
      featured: true
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => !post.featured || post.id !== featuredPost.id);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-8 text-white hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Button>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Insights & Resources
            </h1>
            <p className="text-xl text-blue-100">
              Expert perspectives on ITSM, compliance frameworks, and IT transformation
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Badge className="bg-blue-600">Featured Article</Badge>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📚</div>
                    <div className="text-xl font-semibold">{featuredPost.category}</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{featuredPost.author}</div>
                      </div>
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Read Article
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>

          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-6xl">📄</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <User size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Informed
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest insights on ITSM, compliance, and IT transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-gray-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
