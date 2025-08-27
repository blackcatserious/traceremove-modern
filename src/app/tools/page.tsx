'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Brain, 
  Code, 
  Database, 
  Zap, 
  Shield, 
  Search, 
  BarChart3, 
  Cpu, 
  Globe,
  ArrowRight,
  ExternalLink,
  Play,
  Download,
  Calculator,
  PieChart,
  BookMarked,
  Target
} from 'lucide-react';
import Link from 'next/link';

const tools = [
  {
    id: 'ai-research-dashboard',
    title: 'AI Research Dashboard',
    description: 'Comprehensive dashboard for tracking AI research progress, metrics, and collaborative insights across multiple projects and teams.',
    category: 'Research Analytics',
    icon: BarChart3,
    gradient: 'from-blue-500 to-purple-600',
    features: ['Project Tracking', 'Collaboration Tools', 'Performance Metrics', 'Research Insights'],
    status: 'Available',
    demoUrl: '/tools/ai-research-dashboard',
    githubUrl: 'https://github.com/traceremove/ai-research-dashboard',
    downloadCount: '2.8k'
  },
  {
    id: 'semantic-search-tool',
    title: 'Semantic Search Tool',
    description: 'Advanced semantic search engine for research papers, code repositories, and knowledge bases with AI-powered understanding.',
    category: 'Search & Discovery',
    icon: Search,
    gradient: 'from-green-500 to-teal-600',
    features: ['Semantic Understanding', 'Multi-modal Search', 'Knowledge Graphs', 'Context Awareness'],
    status: 'Available',
    demoUrl: '/tools/semantic-search-tool',
    githubUrl: 'https://github.com/traceremove/semantic-search',
    downloadCount: '3.2k'
  },
  {
    id: 'privacy-score-calculator',
    title: 'Privacy Score Calculator',
    description: 'Evaluate and score the privacy implications of AI systems and data processing pipelines with actionable recommendations.',
    category: 'Privacy & Security',
    icon: Calculator,
    gradient: 'from-purple-500 to-pink-600',
    features: ['Privacy Assessment', 'Risk Scoring', 'Compliance Checking', 'Recommendations'],
    status: 'Available',
    demoUrl: '/tools/privacy-score-calculator',
    githubUrl: 'https://github.com/traceremove/privacy-calculator',
    downloadCount: '1.9k'
  },
  {
    id: 'data-visualization-playground',
    title: 'Data Visualization Playground',
    description: 'Interactive playground for creating sophisticated data visualizations and exploring AI model behaviors through visual analytics.',
    category: 'Visualization',
    icon: PieChart,
    gradient: 'from-orange-500 to-red-600',
    features: ['Interactive Charts', 'Model Visualization', 'Custom Dashboards', 'Export Tools'],
    status: 'Available',
    demoUrl: '/tools/data-visualization-playground',
    githubUrl: 'https://github.com/traceremove/data-viz-playground',
    downloadCount: '2.1k'
  },
  {
    id: 'paper-summarizer',
    title: 'Paper Summarizer',
    description: 'AI-powered tool for automatically summarizing research papers, extracting key insights, and generating structured reviews.',
    category: 'Research Tools',
    icon: BookMarked,
    gradient: 'from-indigo-500 to-blue-600',
    features: ['Auto Summarization', 'Key Insights', 'Citation Analysis', 'Structured Reviews'],
    status: 'Available',
    demoUrl: '/tools/paper-summarizer',
    githubUrl: 'https://github.com/traceremove/paper-summarizer',
    downloadCount: '4.1k'
  },
  {
    id: 'language-model-comparison',
    title: 'Language Model Comparison',
    description: 'Comprehensive comparison tool for evaluating different language models across various tasks, metrics, and use cases.',
    category: 'Model Evaluation',
    icon: Brain,
    gradient: 'from-cyan-500 to-blue-600',
    features: ['Model Benchmarking', 'Performance Analysis', 'Cost Comparison', 'Task-specific Evaluation'],
    status: 'Available',
    demoUrl: '/tools/language-model-comparison',
    githubUrl: 'https://github.com/traceremove/llm-comparison',
    downloadCount: '3.7k'
  },
  {
    id: 'annotation-demo',
    title: 'Annotation Demo',
    description: 'Interactive demonstration of AI-assisted annotation tools for various data types including text, images, and structured data.',
    category: 'Data Annotation',
    icon: Target,
    gradient: 'from-rose-500 to-pink-600',
    features: ['Multi-modal Annotation', 'AI Assistance', 'Quality Control', 'Export Formats'],
    status: 'Available',
    demoUrl: '/tools/annotation-demo',
    githubUrl: 'https://github.com/traceremove/annotation-demo',
    downloadCount: '1.6k'
  }
];

const categories = [
  { id: 'all', label: 'All Tools', count: tools.length },
  { id: 'Research Analytics', label: 'Research Analytics', count: tools.filter(t => t.category === 'Research Analytics').length },
  { id: 'Search & Discovery', label: 'Search & Discovery', count: tools.filter(t => t.category === 'Search & Discovery').length },
  { id: 'Privacy & Security', label: 'Privacy & Security', count: tools.filter(t => t.category === 'Privacy & Security').length },
  { id: 'Visualization', label: 'Visualization', count: tools.filter(t => t.category === 'Visualization').length },
  { id: 'Research Tools', label: 'Research Tools', count: tools.filter(t => t.category === 'Research Tools').length },
  { id: 'Model Evaluation', label: 'Model Evaluation', count: tools.filter(t => t.category === 'Model Evaluation').length },
  { id: 'Data Annotation', label: 'Data Annotation', count: tools.filter(t => t.category === 'Data Annotation').length }
];

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-research-50 via-white to-lab-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-deep-blue/5 via-accent-ai-purple/5 to-accent-lab-purple/10 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.1),transparent_50%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.08),transparent_50%)] z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8"
            >
              <Code className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                AI Tools & Demos
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="content-spacing-large"
            >
              <h1 className="hero-title">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block text-accent-deep-blue mb-2"
                >
                  AI Tools &
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600 bg-clip-text text-transparent"
                >
                  Demos
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="body-text-large text-research-600 max-w-4xl mx-auto content-spacing"
            >
              Interactive tools and demos for AI research, development, and deployment. 
              Built with privacy, performance, and reliability in mind. Explore cutting-edge solutions 
              for modern AI challenges including semantic search, privacy assessment, and model evaluation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-accent-ai-purple" />
                <input
                  type="text"
                  placeholder="Search AI tools, frameworks, and demos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 bg-white/90 backdrop-blur-sm border border-accent-ai-purple/20 rounded-2xl shadow-lab-card focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 text-research-900 placeholder-research-500 font-ibm-sans text-lg transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 font-ibm-sans ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white shadow-ai-glow'
                      : 'bg-white/90 backdrop-blur-sm text-research-700 border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 shadow-lab-card hover:shadow-card-hover hover:bg-gradient-to-r hover:from-accent-ai-purple/5 hover:to-accent-lab-purple/5'
                  }`}
                >
                  {category.label} <span className="opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-white via-research-50/20 to-accent-ai-purple/5 rounded-3xl shadow-lab-card hover:shadow-card-hover transition-all duration-500 overflow-hidden border border-accent-ai-purple/10 hover:border-accent-ai-purple/30">
                  {/* Gradient Header */}
                  <div className="h-2 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600" />
                  
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8">
                    {/* Icon and Status */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-2xl flex items-center justify-center shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                        <tool.icon className="h-7 w-7 text-white" />
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full font-ibm-sans ${
                        tool.status === 'Available' ? 'bg-green-100 text-green-700 border border-green-200' :
                        tool.status === 'Beta' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                        'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}>
                        {tool.status}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold text-accent-deep-blue mb-4 group-hover:text-accent-ai-purple transition-colors duration-300 font-ibm-sans">
                      {tool.title}
                    </h3>
                    <p className="text-research-600 leading-relaxed mb-6 font-ibm-sans">
                      {tool.description}
                    </p>

                    {/* Category */}
                    <div className="mb-6">
                      <span className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 text-accent-ai-purple border border-accent-ai-purple/20 rounded-full font-ibm-sans">
                        {tool.category}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {tool.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="text-xs font-medium text-research-600 bg-research-100 px-3 py-1 rounded-full border border-research-200 font-ibm-sans"
                          >
                            {feature}
                          </span>
                        ))}
                        {tool.features.length > 3 && (
                          <span className="text-xs text-accent-ai-purple font-semibold font-ibm-sans">
                            +{tool.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        {tool.demoUrl && (
                          <Link
                            href={tool.demoUrl}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white text-sm font-bold rounded-xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 font-ibm-sans"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Demo
                          </Link>
                        )}
                        <a
                          href={tool.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-accent-ai-purple text-sm font-bold rounded-xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 shadow-lab-card hover:shadow-card-hover transition-all duration-300 font-ibm-sans"
                        >
                          <Code className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </div>
                      
                      {tool.downloadCount && (
                        <div className="flex items-center px-3 py-1 bg-white/80 backdrop-blur-sm rounded-xl border border-accent-ai-purple/20 shadow-soft">
                          <Download className="h-4 w-4 mr-2 text-accent-ai-purple" />
                          <span className="text-sm font-semibold text-research-600 font-ibm-sans">{tool.downloadCount}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                       style={{ padding: '1px' }}>
                    <div className="w-full h-full bg-white rounded-3xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredTools.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-full text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent-ai-purple/20 to-accent-lab-purple/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Search className="h-12 w-12 text-accent-ai-purple" />
              </div>
              <h3 className="text-2xl font-bold text-accent-deep-blue mb-4 font-ibm-sans">No tools found</h3>
              <p className="text-research-600 mb-8 max-w-md mx-auto leading-relaxed font-ibm-sans">
                Try adjusting your search query or selecting a different category to discover more AI tools.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-bold rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 font-ibm-sans"
              >
                Clear All Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple via-accent-lab-purple to-primary-600 rounded-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
            
            <div className="relative p-12 text-center text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-ibm-sans">
                  Contribute to Open Source AI
                </h2>
                <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed font-ibm-sans">
                  Join our community of researchers and developers building the future of AI tools. 
                  Collaborate on cutting-edge projects that advance the field.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/traceremove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-accent-ai-purple font-bold rounded-2xl shadow-hero-glow hover:shadow-ai-glow transition-all duration-300 font-ibm-sans"
                >
                  <Globe className="h-6 w-6 mr-3" />
                  View on GitHub
                  <ExternalLink className="h-5 w-5 ml-3" />
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 font-ibm-sans"
                  >
                    Get in Touch
                    <ArrowRight className="h-5 w-5 ml-3" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
