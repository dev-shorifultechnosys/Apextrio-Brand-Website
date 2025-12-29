import React from 'react';
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import type { Page } from '../App';

interface ServiceDetailProps {
  service: 'itsm' | 'sama' | 'nca' | 'tool-adoption';
  onNavigate: (page: Page) => void;
}

export function ServiceDetail({ service, onNavigate }: ServiceDetailProps) {
  const serviceData = {
    itsm: {
      title: 'ITSM Maturity Assessment & Optimization',
      subtitle: 'Elevate Your IT Service Management to Industry-Leading Standards',
      description: 'Transform your IT operations with a structured approach to ITSM maturity. We assess your current state, identify improvement opportunities, and guide you through a proven roadmap toward ITIL excellence.',
      heroImage: 'business technology',
      benefits: [
        {
          icon: TrendingUp,
          title: 'Increased Efficiency',
          description: 'Streamline processes and reduce operational overhead by 30-40%'
        },
        {
          icon: Users,
          title: 'Enhanced User Experience',
          description: 'Improve service delivery and end-user satisfaction scores'
        },
        {
          icon: Award,
          title: 'Industry Recognition',
          description: 'Achieve certifications and demonstrate best-practice adherence'
        }
      ],
      approach: [
        {
          phase: 'Discovery & Assessment',
          description: 'Comprehensive evaluation of your current ITSM practices, tools, and processes against ITIL framework standards.',
          deliverables: [
            'Current-state analysis report',
            'Maturity scorecard',
            'Gap identification',
            'Stakeholder interviews'
          ]
        },
        {
          phase: 'Strategy & Roadmap',
          description: 'Define target state and create a prioritized improvement roadmap aligned with business objectives.',
          deliverables: [
            'Target operating model',
            'Phased implementation plan',
            'Resource requirements',
            'ROI projections'
          ]
        },
        {
          phase: 'Implementation & Optimization',
          description: 'Hands-on support to implement improvements, optimize workflows, and embed best practices.',
          deliverables: [
            'Process redesign',
            'Tool configuration',
            'Training materials',
            'KPI dashboard'
          ]
        },
        {
          phase: 'Continuous Improvement',
          description: 'Establish governance and monitoring mechanisms to sustain gains and drive ongoing maturity.',
          deliverables: [
            'Performance metrics',
            'Review cadence',
            'Optimization recommendations',
            'Knowledge transfer'
          ]
        }
      ],
      outcomes: [
        '35% reduction in incident resolution time',
        '50% improvement in first-call resolution rate',
        '25% decrease in IT operational costs',
        '90+ Net Promoter Score from end users'
      ]
    },
    sama: {
      title: 'SAMA Cybersecurity Framework Compliance',
      subtitle: 'Navigate Saudi Financial Sector Regulations with Confidence',
      description: 'Ensure your organization meets SAMA cybersecurity framework requirements with our comprehensive compliance consulting. From gap analysis to audit preparation, we guide financial institutions through every step of regulatory adherence.',
      heroImage: 'financial security',
      benefits: [
        {
          icon: CheckCircle2,
          title: 'Regulatory Confidence',
          description: 'Meet all SAMA requirements and avoid penalties with expert guidance'
        },
        {
          icon: TrendingUp,
          title: 'Risk Reduction',
          description: 'Strengthen security posture and minimize cyber threats'
        },
        {
          icon: Award,
          title: 'Audit Readiness',
          description: 'Maintain comprehensive documentation for regulatory reviews'
        }
      ],
      approach: [
        {
          phase: 'Compliance Gap Analysis',
          description: 'Detailed assessment of your current controls against SAMA cybersecurity framework requirements.',
          deliverables: [
            'Compliance assessment report',
            'Gap analysis matrix',
            'Risk register',
            'Priority recommendations'
          ]
        },
        {
          phase: 'Control Design & Planning',
          description: 'Design technical and procedural controls to address identified gaps and meet regulatory standards.',
          deliverables: [
            'Control design documents',
            'Implementation roadmap',
            'Resource allocation plan',
            'Policy templates'
          ]
        },
        {
          phase: 'Implementation Support',
          description: 'Guide your team through control implementation, policy updates, and evidence collection.',
          deliverables: [
            'Control deployment',
            'Policy documentation',
            'Evidence repository',
            'Training programs'
          ]
        },
        {
          phase: 'Audit Preparation',
          description: 'Prepare comprehensive documentation and conduct mock audits to ensure readiness.',
          deliverables: [
            'Audit response package',
            'Evidence mapping',
            'Mock audit findings',
            'Remediation support'
          ]
        }
      ],
      outcomes: [
        'Full SAMA framework compliance achieved',
        '100% audit readiness with comprehensive documentation',
        '60% reduction in security incidents',
        'Enhanced stakeholder confidence and reputation'
      ]
    },
    nca: {
      title: 'NCA Essential Cybersecurity Controls',
      subtitle: 'Achieve and Maintain NCA ECC Certification',
      description: 'Navigate the National Cybersecurity Authority framework with strategic guidance from initial assessment through certification. Our experts ensure your organization implements all essential cybersecurity controls effectively.',
      heroImage: 'cybersecurity shield',
      benefits: [
        {
          icon: CheckCircle2,
          title: 'ECC Certification',
          description: 'Achieve compliance with all NCA essential controls'
        },
        {
          icon: TrendingUp,
          title: 'Security Maturity',
          description: 'Build robust cybersecurity capabilities organization-wide'
        },
        {
          icon: Award,
          title: 'National Standards',
          description: 'Align with Saudi Arabia\'s national cybersecurity requirements'
        }
      ],
      approach: [
        {
          phase: 'ECC Requirements Mapping',
          description: 'Map NCA essential controls to your existing security landscape and identify implementation requirements.',
          deliverables: [
            'Requirements traceability matrix',
            'Control mapping document',
            'Gap assessment report',
            'Compliance baseline'
          ]
        },
        {
          phase: 'Security Architecture',
          description: 'Design security controls, policies, and technical architecture to meet ECC requirements.',
          deliverables: [
            'Security control design',
            'Architecture blueprints',
            'Policy framework',
            'Technical specifications'
          ]
        },
        {
          phase: 'Implementation & Testing',
          description: 'Deploy controls, configure security solutions, and validate effectiveness through rigorous testing.',
          deliverables: [
            'Control implementation',
            'Security configuration',
            'Test results documentation',
            'Validation reports'
          ]
        },
        {
          phase: 'Certification Support',
          description: 'Prepare for NCA assessment with comprehensive documentation and evidence packages.',
          deliverables: [
            'Certification package',
            'Evidence collection',
            'Assessment readiness',
            'Ongoing compliance plan'
          ]
        }
      ],
      outcomes: [
        'NCA ECC certification achieved',
        '100% essential controls implemented',
        '70% improvement in security incident response',
        'Continuous compliance monitoring established'
      ]
    },
    'tool-adoption': {
      title: 'ITSM Tool Adoption & Optimization',
      subtitle: 'Maximize ROI from Your ServiceNow, Jira, and ITSM Investments',
      description: 'Transform your ITSM platform from a ticketing system into a strategic asset. We help organizations configure, customize, and optimize tools like ServiceNow and Jira Service Management while driving user adoption and automation.',
      heroImage: 'software development',
      benefits: [
        {
          icon: TrendingUp,
          title: 'Higher ROI',
          description: 'Maximize value from your ITSM platform investments'
        },
        {
          icon: Users,
          title: 'User Adoption',
          description: 'Drive engagement with intuitive workflows and training'
        },
        {
          icon: Award,
          title: 'Automation Excellence',
          description: 'Reduce manual work with intelligent automation'
        }
      ],
      approach: [
        {
          phase: 'Platform Assessment',
          description: 'Evaluate current tool utilization, configuration, and identify optimization opportunities.',
          deliverables: [
            'Health check report',
            'Utilization analysis',
            'Best practice gaps',
            'Quick wins identification'
          ]
        },
        {
          phase: 'Configuration & Customization',
          description: 'Optimize platform setup, design workflows, and configure modules to match your processes.',
          deliverables: [
            'Platform configuration',
            'Workflow automation',
            'Custom applications',
            'Integration architecture'
          ]
        },
        {
          phase: 'Change Management',
          description: 'Drive user adoption through communication, training, and change enablement strategies.',
          deliverables: [
            'Change management plan',
            'Training programs',
            'User documentation',
            'Adoption metrics'
          ]
        },
        {
          phase: 'Continuous Optimization',
          description: 'Monitor performance, gather feedback, and continuously improve tool effectiveness.',
          deliverables: [
            'Performance dashboard',
            'Enhancement backlog',
            'Optimization roadmap',
            'Admin enablement'
          ]
        }
      ],
      outcomes: [
        '85% user adoption rate achieved',
        '40% reduction in manual task processing',
        '50% faster service request fulfillment',
        '3x increase in automation coverage'
      ]
    }
  };

  const data = serviceData[service];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-8 text-white hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Services
          </Button>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {data.title}
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              {data.subtitle}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {data.description}
            </p>
            
            <div className="mt-8">
              <Button
                onClick={() => onNavigate('contact')}
                size="lg"
                className="bg-white text-purple-900 hover:bg-gray-100"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {data.benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Our Approach
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A proven methodology that delivers results through structured phases and clear deliverables
          </p>

          <div className="space-y-8">
            {data.approach.map((phase, idx) => (
              <Card key={idx} className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {phase.phase}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {phase.description}
                    </p>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Key Deliverables:</p>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {phase.deliverables.map((deliverable, dIdx) => (
                          <li key={dIdx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Expected Outcomes
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {data.outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-800 font-medium">{outcome}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={() => onNavigate('contact')}
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}