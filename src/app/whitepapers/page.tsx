'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  Tag, 
  Search, 
  BookOpen,
  Users,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const whitepapers = [
  {
    id: 'agentic-systems-architecture',
    title: 'Architectural Patterns for Agentic AI Systems: A Comprehensive Framework',
    description: 'This whitepaper presents a systematic approach to designing and implementing agentic AI systems, covering tool integration, failure recovery, and scalability patterns.',
    category: 'AI Architecture',
    authors: ['Arthur Ziganshin', 'Traceremove Research Team'],
    publishDate: '2024-01-15',
    pages: 42,
    downloads: '3.2k',
    featured: true,
    tags: ['Agentic AI', 'Architecture', 'Tool Integration', 'Scalability'],
    pdfUrl: '/whitepapers/agentic-systems-architecture.pdf',
    previewUrl: '/whitepapers/agentic-systems-architecture/preview',
    abstract: 'As AI systems evolve beyond simple input-output models, the need for robust architectural patterns becomes critical. This paper introduces a comprehensive framework for building agentic systems that can autonomously reason, plan, and execute complex tasks while maintaining reliability and interpretability.',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 'privacy-preserving-ai',
    title: 'Privacy-Preserving AI: Cryptographic Approaches for Secure Machine Learning',
    description: 'An in-depth analysis of cryptographic techniques for maintaining privacy in AI systems, including differential privacy, homomorphic encryption, and secure multi-party computation.',
    category: 'Privacy & Security',
    authors: ['Arthur Ziganshin', 'Security Research Collective'],
    publishDate: '2024-01-10',
    pages: 38,
    downloads: '2.8k',
    featured: true,
    tags: ['Privacy', 'Cryptography', 'Differential Privacy', 'Homomorphic Encryption'],
    pdfUrl: '/whitepapers/privacy-preserving-ai.pdf',
    previewUrl: '/whitepapers/privacy-preserving-ai/preview',
    abstract: 'This whitepaper explores advanced cryptographic techniques that enable privacy-preserving machine learning. We present practical implementations and performance evaluations of differential privacy, homomorphic encryption, and secure multi-party computation in real-world AI applications.',
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: 'ai-ethics-governance',
    title: 'AI Ethics and Governance: Frameworks for Responsible AI Development',
    description: 'A comprehensive guide to ethical AI development, covering bias mitigation, transparency, accountability, and governance frameworks for AI systems.',
    category: 'AI Ethics',
    authors: ['Arthur Ziganshin', 'Ethics Advisory Board'],
    publishDate: '2023-12-20',
    pages: 56,
    downloads: '4.1k',
    featured: false,
    tags: ['AI Ethics', 'Governance', 'Bias Mitigation', 'Transparency'],
    pdfUrl: '/whitepapers/ai-ethics-governance.pdf',
    previewUrl: '/whitepapers/ai-ethics-governance/preview',
    abstract: 'This paper presents a comprehensive framework for ethical AI development, addressing key challenges in bias mitigation, algorithmic transparency, and governance structures. We provide practical guidelines for implementing responsible AI practices in research and industry.',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 'multimodal-optimization',
    title: 'Optimizing Multimodal AI Under Resource Constraints',
    description: 'Strategies and techniques for optimizing multimodal AI systems in resource-constrained environments, focusing on efficiency and performance trade-offs.',
    category: 'Performance',
    authors: ['Arthur Ziganshin', 'Performance Engineering Team'],
    publishDate: '2023-12-15',
    pages: 34,
    downloads: '2.3k',
    featured: false,
    tags: ['Multimodal AI', 'Optimization', 'Resource Management', 'Performance'],
    pdfUrl: '/whitepapers/multimodal-optimization.pdf',
    previewUrl: '/whitepapers/multimodal-optimization/preview',
    abstract: 'This whitepaper addresses the challenges of deploying multimodal AI systems in resource-constrained environments. We present novel optimization techniques and architectural patterns that maintain performance while reducing computational and memory requirements.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'academic-ai-infrastructure',
    title: 'Building Cost-Effective AI Infrastructure for Academic Research',
    description: 'A practical guide to setting up and managing AI infrastructure in academic environments, with focus on cost optimization and resource sharing.',
    category: 'Infrastructure',
    authors: ['Arthur Ziganshin', 'Academic Computing Consortium'],
    publishDate: '2023-11-30',
    pages: 28,
    downloads: '1.9k',
    featured: false,
    tags: ['Academic Research', 'Infrastructure', 'Cost Optimization', 'Resource Sharing'],
    pdfUrl: '/whitepapers/academic-ai-infrastructure.pdf',
    previewUrl: '/whitepapers/academic-ai-infrastructure/preview',
    abstract: 'Academic institutions face unique challenges in building AI infrastructure due to budget constraints and diverse research needs. This paper provides practical strategies for creating cost-effective, scalable AI infrastructure that supports collaborative research.',
    gradient: 'from-indigo-500 to-blue-600'
  }
];

const categories = [
  { id: 'all', label: 'All Papers', count: whitepapers.length },
  { id: 'AI Architecture', label: 'AI Architecture', count: whitepapers.filter(p => p.category === 'AI Architecture').length },
  { id: 'Privacy & Security', label: 'Privacy & Security', count: whitepapers.filter(p => p.category === 'Privacy & Security').length },
  { id: 'AI Ethics', label: 'AI Ethics', count: whitepapers.filter(p => p.category === 'AI Ethics').length },
  { id: 'Performance', label: 'Performance', count: whitepapers.filter(p => p.category === 'Performance').length },
  { id: 'Infrastructure', label: 'Infrastructure', count: whitepapers.filter(p => p.category === 'Infrastructure').length }
];

export default function WhitepapersPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPapers = whitepapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         paper.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPapers = filteredPapers.filter(paper => paper.featured);
  const regularPapers = filteredPapers.filter(paper => !paper.featured);

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-deep-blue/5 via-accent-ai-purple/5 to-accent-lab-purple/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.08),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8"
            >
              <FileText className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                Research Publications
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="hero-title text-research-text mb-6">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block mb-2"
                >
                  Research
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600 bg-clip-text text-transparent"
                >
                  Whitepapers
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="section-title text-research-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              In-depth research papers and technical reports on AI systems, privacy, ethics, and infrastructure. 
              Comprehensive analysis with practical implementations and real-world applications that advance the field.
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
                  placeholder="Search research papers, authors, and topics..."
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

      {/* Featured Papers */}
      {featuredPapers.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              {/* Badge */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-6"
                >
                  <TrendingUp className="w-5 h-5 text-accent-ai-purple mr-2" />
                  <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                    Featured Research
                  </span>
                </motion.div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-accent-deep-blue mb-6 text-center font-ibm-sans">
                Featured Research
              </h2>
              <p className="text-xl text-research-600 text-center max-w-3xl mx-auto leading-relaxed font-ibm-sans">
                Highlighted research papers with comprehensive analysis and practical implementations 
                that are shaping the future of AI research and development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {featuredPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-white via-research-50/20 to-accent-ai-purple/5 rounded-3xl shadow-lab-card hover:shadow-card-hover transition-all duration-500 overflow-hidden border border-accent-ai-purple/10 hover:border-accent-ai-purple/30">
                    {/* Gradient Header */}
                    <div className="h-3 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600" />
                    
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-10">
                      {/* Category and Downloads */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="inline-flex items-center px-4 py-2 text-sm font-bold bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 text-accent-ai-purple border border-accent-ai-purple/20 rounded-full font-ibm-sans">
                          {paper.category}
                        </span>
                        <div className="flex items-center px-3 py-1 bg-white/80 backdrop-blur-sm rounded-xl border border-accent-ai-purple/20 shadow-soft">
                          <Download className="h-4 w-4 mr-2 text-accent-ai-purple" />
                          <span className="text-sm font-semibold text-research-600 font-ibm-sans">{paper.downloads}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-accent-deep-blue mb-6 group-hover:text-accent-ai-purple transition-colors duration-300 font-ibm-sans leading-tight">
                        {paper.title}
                      </h3>

                      {/* Authors and Date */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-research-600 mb-6 font-ibm-sans">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-accent-ai-purple" />
                          <span>{paper.authors.join(', ')}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-accent-ai-purple" />
                          <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Abstract */}
                      <p className="text-research-700 leading-relaxed mb-8 font-ibm-sans">
                        {paper.abstract}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {paper.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-research-100 text-research-700 border border-research-200 rounded-full font-ibm-sans"
                          >
                            <Tag className="h-3 w-3 mr-1 text-accent-ai-purple" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <Link
                            href={paper.previewUrl}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-bold rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 font-ibm-sans"
                          >
                            <Eye className="h-5 w-5 mr-2" />
                            Preview
                          </Link>
                          <a
                            href={paper.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-accent-ai-purple font-bold rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 shadow-lab-card hover:shadow-card-hover transition-all duration-300 font-ibm-sans"
                          >
                            <Download className="h-5 w-5 mr-2" />
                            PDF
                          </a>
                        </div>
                        
                        <div className="text-sm font-semibold text-research-600 font-ibm-sans">
                          {paper.pages} pages
                        </div>
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
            </div>
          </div>
        </section>
      )}

      {/* All Papers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularPapers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              {/* Badge */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-6"
                >
                  <BookOpen className="w-5 h-5 text-accent-ai-purple mr-2" />
                  <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                    All Research Papers
                  </span>
                </motion.div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-accent-deep-blue mb-6 text-center font-ibm-sans">
                All Research Papers
              </h2>
              <p className="text-xl text-research-600 text-center font-ibm-sans">
                <span className="font-semibold text-accent-ai-purple">{filteredPapers.length}</span> papers found
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-white via-research-50/20 to-accent-ai-purple/5 rounded-2xl shadow-lab-card hover:shadow-card-hover transition-all duration-500 overflow-hidden border border-accent-ai-purple/10 hover:border-accent-ai-purple/30">
                  {/* Gradient Header */}
                  <div className="h-2 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600" />
                  
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-6">
                    {/* Category and Downloads */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-bold bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 text-accent-ai-purple border border-accent-ai-purple/20 rounded-full font-ibm-sans">
                        {paper.category}
                      </span>
                      <div className="flex items-center px-2 py-1 bg-white/80 backdrop-blur-sm rounded-lg border border-accent-ai-purple/20 shadow-soft">
                        <Download className="h-3 w-3 mr-1 text-accent-ai-purple" />
                        <span className="text-xs font-semibold text-research-600 font-ibm-sans">{paper.downloads}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-accent-deep-blue mb-4 group-hover:text-accent-ai-purple transition-colors duration-300 font-ibm-sans leading-tight line-clamp-2">
                      {paper.title}
                    </h3>

                    {/* Description */}
                    <p className="text-research-600 text-sm leading-relaxed mb-6 font-ibm-sans line-clamp-3">
                      {paper.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-research-500 mb-6 font-ibm-sans">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 text-accent-ai-purple" />
                        <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-3 w-3 mr-1 text-accent-ai-purple" />
                        <span>{paper.pages} pages</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Link
                        href={paper.previewUrl}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white text-sm font-bold rounded-xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 font-ibm-sans"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Link>
                      <a
                        href={paper.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white/80 backdrop-blur-sm text-accent-ai-purple text-sm font-bold rounded-xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 shadow-lab-card hover:shadow-card-hover transition-all duration-300 font-ibm-sans"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </a>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                       style={{ padding: '1px' }}>
                    <div className="w-full h-full bg-white rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredPapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-full text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent-ai-purple/20 to-accent-lab-purple/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Search className="h-12 w-12 text-accent-ai-purple" />
              </div>
              <h3 className="text-2xl font-bold text-accent-deep-blue mb-4 font-ibm-sans">No papers found</h3>
              <p className="text-research-600 mb-8 max-w-md mx-auto leading-relaxed font-ibm-sans">
                Try adjusting your search query or selecting a different category to discover more research papers.
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
                  Stay Updated with Latest Research
                </h2>
                <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed font-ibm-sans">
                  Subscribe to receive notifications about new whitepapers and research publications. 
                  Join our community of researchers and practitioners.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-accent-ai-purple font-bold rounded-2xl shadow-hero-glow hover:shadow-ai-glow transition-all duration-300 font-ibm-sans"
                  >
                    <BookOpen className="h-6 w-6 mr-3" />
                    Subscribe to Updates
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/research"
                    className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 font-ibm-sans"
                  >
                    <TrendingUp className="h-6 w-6 mr-3" />
                    View Research Articles
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
