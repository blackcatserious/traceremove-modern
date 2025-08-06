'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Shield, Clock, ArrowRight, CheckCircle, BarChart3 } from 'lucide-react';

const caseStudies = [
  {
    id: 'tech-startup',
    title: 'IT Startup',
    category: 'Technology',
    challenge: 'Negative product reviews in the first days of launch',
    solution: 'Comprehensive ORM strategy with monitoring and rapid response',
    results: {
      timeframe: '3 months',
      metrics: [
        { label: 'Negative mentions', before: '85%', after: '12%', improvement: '-73%' },
        { label: 'Positive reviews', before: '15%', after: '78%', improvement: '+63%' },
        { label: 'Organic traffic', before: '2.3K', after: '15.7K', improvement: '+582%' },
        { label: 'Conversion', before: '1.2%', after: '4.8%', improvement: '+300%' }
      ]
    },
    testimonial: {
      text: "TraceRemove helped us turn a reputation crisis into an opportunity for growth. Professional approach and fast results.",
      author: "Alex Petrov",
      position: "CEO, TechStart"
    },
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'restaurant-chain',
    title: 'Restaurant Chain',
    category: 'HoReCa',
    challenge: 'Mass negative reviews after food quality incident',
    solution: 'Crisis management, review management, legal support',
    results: {
      timeframe: '6 months',
      metrics: [
        { label: 'Google Rating', before: '2.1', after: '4.6', improvement: '+119%' },
        { label: 'Negative reviews', before: '78%', after: '8%', improvement: '-70%' },
        { label: 'Attendance', before: '-45%', after: '+23%', improvement: '+68%' },
        { label: 'Revenue', before: '-38%', after: '+15%', improvement: '+53%' }
      ]
    },
    testimonial: {
      text: "Thanks to TraceRemove, we not only restored our reputation, but became stronger. Customers trust us again.",
      author: "Maria Ivanova",
      position: "Marketing Director, FoodChain"
    },
    gradient: 'from-green-600 to-blue-600'
  },
  {
    id: 'medical-clinic',
    title: 'Medical Clinic',
    category: 'Healthcare',
    challenge: 'Slanderous materials from competitors in search results',
    solution: 'Negative content deindexing, legal protection, SEO optimization',
    results: {
      timeframe: '4 months',
      metrics: [
        { label: 'Negative pages removed', before: '0', after: '23', improvement: '100%' },
        { label: 'Search positions', before: '15-20', after: '1-3', improvement: '+85%' },
        { label: 'Appointments', before: '45/day', after: '127/day', improvement: '+182%' },
        { label: 'Patient trust', before: '34%', after: '89%', improvement: '+55%' }
      ]
    },
    testimonial: {
      text: "The professional work of the TraceRemove team helped us completely clean our reputation and restore patient trust.",
      author: "Dr. Sergey Volkov",
      position: "Chief Physician, MedCenter+"
    },
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'financial-company',
    title: 'Financial Company',
    category: 'Finance',
    challenge: 'Negative information about management in media and social networks',
    solution: 'Comprehensive monitoring, working with journalists, creating positive content',
    results: {
      timeframe: '8 months',
      metrics: [
        { label: 'Media mentions', before: '23% positive', after: '87% positive', improvement: '+64%' },
        { label: 'Social networks', before: '156 negative', after: '12 negative', improvement: '-92%' },
        { label: 'Client base', before: '-12%', after: '+34%', improvement: '+46%' },
        { label: 'Stock price', before: '-8%', after: '+28%', improvement: '+36%' }
      ]
    },
    testimonial: {
      text: "TraceRemove didn't just clean our reputation - they helped build a long-term company image management strategy.",
      author: "Elena Smirnova",
      position: "PR Director, FinanceGroup"
    },
    gradient: 'from-orange-600 to-red-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const caseVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const MetricCard = ({ metric, delay }: { metric: { label: string; before: string; after: string; improvement: string }, delay: number }) => (
  <motion.div
    className="bg-gradient-to-br from-research-surface/60 to-research-surface/30 backdrop-blur-sm border border-research-surface/40 rounded-xl p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="text-sm text-research-text-secondary mb-1">{metric.label}</div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-research-text-secondary text-sm">Before: {metric.before}</span>
      <span className="text-research-text font-semibold">After: {metric.after}</span>
    </div>
    <div className="flex items-center">
      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
      <span className="text-green-500 font-semibold text-sm">{metric.improvement}</span>
    </div>
  </motion.div>
);

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-research-bg via-research-surface to-research-bg">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent-ai-purple/20 to-accent-lab-purple/20 border border-accent-ai-purple/30 mb-8"
          >
            <BarChart3 className="h-5 w-5 text-accent-ai-purple mr-2" />
            <span className="text-accent-ai-purple font-medium">Success Stories</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-research-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple bg-clip-text text-transparent">
              Results
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-research-text-secondary max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Real success stories from our clients. Learn how we helped companies 
            restore their reputation and reach new heights in business.
          </motion.p>
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto space-y-20">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              variants={caseVariants}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-accent-ai-purple/20 to-accent-lab-purple/20 border border-accent-ai-purple/30 mb-4">
                    <span className="text-accent-ai-purple text-sm font-medium">{caseStudy.category}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-research-text mb-4">
                    {caseStudy.title}
                  </h2>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-research-text mb-2 flex items-center">
                        <Shield className="h-5 w-5 text-red-500 mr-2" />
                        Challenge
                      </h3>
                      <p className="text-research-text-secondary">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-research-text mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Solution
                      </h3>
                      <p className="text-research-text-secondary">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-research-text mb-2 flex items-center">
                        <Clock className="h-5 w-5 text-blue-500 mr-2" />
                        Timeframe
                      </h3>
                      <p className="text-research-text-secondary">{caseStudy.results.timeframe}</p>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <motion.div
                    className="bg-gradient-to-br from-research-surface/60 to-research-surface/30 backdrop-blur-sm border border-research-surface/40 rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  >
                    <p className="text-research-text-secondary italic mb-4">
                      &ldquo;{caseStudy.testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${caseStudy.gradient} flex items-center justify-center mr-4`}>
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-research-text">{caseStudy.testimonial.author}</div>
                        <div className="text-sm text-research-text-secondary">{caseStudy.testimonial.position}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Metrics */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    className="bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm border border-research-surface/50 rounded-3xl p-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  >
                    <h3 className="text-2xl font-bold text-research-text mb-6 text-center">
                      Results
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {caseStudy.results.metrics.map((metric, metricIndex) => (
                        <MetricCard 
                          key={metricIndex} 
                          metric={metric} 
                          delay={0.6 + (index * 0.1) + (metricIndex * 0.1)} 
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm border border-research-surface/50 rounded-3xl p-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-research-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Become the Next Success Story
            </motion.h2>
            <motion.p 
              className="text-xl text-research-text-secondary mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              Let us help your company achieve the same impressive results
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.button
                className="bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Your Project
                <ArrowRight className="h-5 w-5 ml-2" />
              </motion.button>
              <motion.button
                className="border border-accent-ai-purple text-accent-ai-purple font-semibold py-4 px-8 rounded-xl hover:bg-accent-ai-purple/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Cases PDF
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
