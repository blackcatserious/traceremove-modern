'use client';

export const metadata = {
  title: "Research — AI Ethics, Agentic Systems, Privacy",
  description: "Research highlights in AI ethics, agentic systems, and privacy-preserving technologies at Traceremove Research.",
};


'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Clock, 
  Tag, 
  ArrowRight, 
  BookOpen, 
  Brain, 
  Zap, 
  Microscope,
  Shield,
  Globe,
  TrendingUp,
  X
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const researchCategories = [
  { id: 'all', label: 'All Research', count: 11 },
  { id: 'ai-architecture', label: 'AI Architecture', count: 4 },
  { id: 'ethics', label: 'AI Ethics', count: 4 },
  { id: 'security-privacy', label: 'Security & Privacy', count: 2 },
  { id: 'infrastructure', label: 'Infrastructure', count: 2 },
  { id: 'philosophy', label: 'Philosophy', count: 1 }
];

const researchArticles = [
  {
    id: 'agentic-systems-tool-use',
    title: "Agentic Systems & Tool Use: Building Autonomous Reasoning Capabilities",
    description: "Exploring how AI agents can effectively use tools and reason about complex multi-step problems. This research examines the architecture patterns, failure modes, and recovery strategies in agentic systems.",
    category: 'ai-architecture',
    tags: ['Agentic AI', 'Tool Use', 'Reasoning', 'Architecture'],
    readTime: '13 min read',
    publishDate: '2024-01-15',
    featured: true,
    icon: Brain,
    gradient: 'from-primary-500 to-secondary-500',
    href: '/research/agentic-systems-tool-use',
    hasInteractiveCharts: true,
    hasLottieAnimation: true,
    hasMermaidDiagrams: true
  },
  {
    id: 'ethical-ai-architecture',
    title: "Ethical AI Architecture: Building Responsible AI Systems",
    description: "Comprehensive framework for designing AI systems with built-in ethical considerations. Exploring fairness, transparency, accountability, and human-centered design principles in AI architecture.",
    category: 'ethics',
    tags: ['Ethics', 'Architecture', 'Fairness', 'Transparency'],
    readTime: '16 min read',
    publishDate: '2024-01-12',
    featured: true,
    icon: Shield,
    gradient: 'from-accent-ai-purple to-accent-lab-purple',
    href: '/research/ethical-ai-architecture',
    hasInteractiveCharts: true,
    hasLottieAnimation: true,
    hasMermaidDiagrams: true
  },
  {
    id: 'multimodal-reasoning',
    title: "Multimodal Reasoning: Integrating Vision, Language, and Logic",
    description: "Advanced research in multimodal AI systems that can reason across different modalities. Examining cross-modal attention, unified representations, and emergent reasoning capabilities.",
    category: 'ai-architecture',
    tags: ['Multimodal', 'Reasoning', 'Vision-Language', 'Logic'],
    readTime: '14 min read',
    publishDate: '2024-01-10',
    featured: true,
    icon: Brain,
    gradient: 'from-blue-500 to-purple-600',
    href: '/research/multimodal-reasoning',
    hasInteractiveCharts: true,
    hasLottieAnimation: true,
    hasMermaidDiagrams: true
  },
  {
    id: 'privacy-preserving-ai',
    title: "Privacy-Preserving AI: Secure and Private Machine Learning",
    description: "Developing AI systems that protect user privacy while maintaining high performance. Focus on differential privacy, federated learning, homomorphic encryption, and secure multi-party computation.",
    category: 'security-privacy',
    tags: ['Privacy', 'Security', 'Federated Learning', 'Encryption'],
    readTime: '12 min read',
    publishDate: '2024-01-08',
    featured: true,
    icon: Shield,
    gradient: 'from-green-500 to-teal-600',
    href: '/research/privacy-preserving-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'big-data-interpretability',
    title: "Big Data Interpretability: Making Sense of Complex AI Decisions",
    description: "Research into interpretable AI methods for large-scale data processing. Exploring explainable AI techniques, feature attribution, and decision transparency in big data contexts.",
    category: 'ai-architecture',
    tags: ['Interpretability', 'Big Data', 'Explainable AI', 'Transparency'],
    readTime: '11 min read',
    publishDate: '2024-01-05',
    featured: false,
    icon: TrendingUp,
    gradient: 'from-orange-500 to-red-500',
    href: '/research/big-data-interpretability',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'language-code-interoperability',
    title: "Language & Code Interoperability: Bridging Natural and Programming Languages",
    description: "Investigating the intersection of natural language processing and code generation. Focus on semantic understanding, cross-language translation, and unified representations.",
    category: 'ai-architecture',
    tags: ['NLP', 'Code Generation', 'Interoperability', 'Semantics'],
    readTime: '10 min read',
    publishDate: '2024-01-03',
    featured: false,
    icon: Globe,
    gradient: 'from-indigo-500 to-blue-600',
    href: '/research/language-code-interoperability',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'benchmarking-open-vs-closed-ai',
    title: "Benchmarking Open vs Closed AI: Comparative Analysis Framework",
    description: "Comprehensive evaluation framework for comparing open-source and proprietary AI systems. Analyzing performance, transparency, accessibility, and innovation metrics.",
    category: 'infrastructure',
    tags: ['Benchmarking', 'Open Source', 'Evaluation', 'Metrics'],
    readTime: '15 min read',
    publishDate: '2023-12-28',
    featured: false,
    icon: Microscope,
    gradient: 'from-purple-500 to-pink-500',
    href: '/research/benchmarking-open-vs-closed-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'opacity-responsibility-ai',
    title: "Opacity & Responsibility in AI: Philosophical Foundations",
    description: "Philosophical investigation into AI opacity and moral responsibility. Examining the ethical implications of black-box AI systems and frameworks for algorithmic accountability.",
    category: 'philosophy',
    tags: ['Philosophy', 'Responsibility', 'Ethics', 'Opacity'],
    readTime: '18 min read',
    publishDate: '2023-12-25',
    featured: false,
    icon: BookOpen,
    gradient: 'from-gray-600 to-slate-700',
    href: '/research/opacity-responsibility-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'ai-infrastructure-academia',
    title: "AI Infrastructure for Academia: Democratizing Research Access",
    description: "Building scalable, cost-effective AI infrastructure solutions tailored for academic research environments. Examining cloud-native architectures, resource optimization, and collaborative platforms.",
    category: 'infrastructure',
    tags: ['Infrastructure', 'Academia', 'Cloud', 'Democratization'],
    readTime: '13 min read',
    publishDate: '2023-12-20',
    featured: false,
    icon: Microscope,
    gradient: 'from-cyan-500 to-blue-600',
    href: '/research/ai-infrastructure-academia',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'human-centered-ai',
    title: "Human-Centered AI: Designing for Human Flourishing",
    description: "Research into AI systems designed with human values, needs, and capabilities at the center. Exploring human-AI collaboration, augmentation, and empowerment paradigms.",
    category: 'ethics',
    tags: ['Human-Centered', 'Collaboration', 'Values', 'Empowerment'],
    readTime: '14 min read',
    publishDate: '2023-12-15',
    featured: false,
    icon: Globe,
    gradient: 'from-emerald-500 to-green-600',
    href: '/research/human-centered-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  },
  {
    id: 'digital-rights-ai',
    title: "Digital Rights & AI: Protecting Human Agency in the Digital Age",
    description: "Comprehensive analysis of digital rights in the context of AI systems. Examining privacy, autonomy, dignity, and democratic participation in AI-mediated environments.",
    category: 'ethics',
    tags: ['Digital Rights', 'Privacy', 'Autonomy', 'Democracy'],
    readTime: '17 min read',
    publishDate: '2023-12-10',
    featured: false,
    icon: Shield,
    gradient: 'from-rose-500 to-pink-600',
    href: '/research/digital-rights-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true
  }
];

export default function Research() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = researchArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = researchArticles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-research-50 via-white to-lab-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Dynamic Background System - Vanta.js Network */}
        
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
              <BookOpen className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="caption-text text-accent-ai-purple">
                Research Publications
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
                  Research &amp;
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600 bg-clip-text text-transparent"
                >
                  Publications
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="body-text-large text-research-600 max-w-4xl mx-auto content-spacing"
            >
              Cutting-edge research in AI ethics, agentic systems, privacy-preserving technologies, 
              and the philosophy of artificial intelligence. Bridging theory and practice through 
              rigorous investigation and innovative solutions.
            </motion.p>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-accent-ai-purple" />
                  <input
                    type="text"
                    placeholder="Search research articles, topics, or methodologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-16 pr-6 py-5 bg-white/90 backdrop-blur-sm border border-accent-ai-purple/20 rounded-2xl shadow-lab-card focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 text-research-900 placeholder-research-500 font-ibm-sans text-lg transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {researchCategories.map((category, index) => (
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
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
              <Brain className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="caption-text text-accent-ai-purple">
                Featured Research
              </span>
            </div>
            
            <h2 className="section-title text-accent-deep-blue content-spacing">
              Featured Research
            </h2>
            <p className="body-text-large text-research-600 max-w-3xl mx-auto">
              Highlighted research with interactive visualizations, animations, and comprehensive analysis. 
              Explore cutting-edge methodologies and breakthrough discoveries in AI research.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link href={article.href}>
                  <div className="glass-card-research transition-all duration-500 overflow-hidden">
                    {/* Gradient Header */}
                    <div className="h-2 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600" />
                    
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-2xl flex items-center justify-center shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                          <article.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex items-center space-x-3">
                          {article.hasInteractiveCharts && (
                            <div className="flex items-center px-2 py-1 bg-green-100 rounded-full" title="Interactive Charts">
                              <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                              <span className="text-xs font-medium text-green-700">Charts</span>
                            </div>
                          )}
                          {article.hasLottieAnimation && (
                            <div className="flex items-center px-2 py-1 bg-blue-100 rounded-full" title="Lottie Animations">
                              <Zap className="w-3 h-3 text-blue-600 mr-1" />
                              <span className="text-xs font-medium text-blue-700">Animation</span>
                            </div>
                          )}
                          {article.hasMermaidDiagrams && (
                            <div className="flex items-center px-2 py-1 bg-purple-100 rounded-full" title="Mermaid Diagrams">
                              <BookOpen className="w-3 h-3 text-purple-600 mr-1" />
                              <span className="text-xs font-medium text-purple-700">Diagrams</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="card-title text-accent-deep-blue mb-4 group-hover:text-accent-ai-purple transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="body-text text-research-600 mb-6 line-clamp-3">
                        {article.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 text-accent-ai-purple border border-accent-ai-purple/20 font-ibm-sans"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center caption-text text-research-500">
                          <Clock className="h-4 w-4 mr-2 text-accent-ai-purple" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center text-accent-ai-purple group-hover:text-accent-lab-purple transition-colors duration-300">
                          <span className="caption-text mr-2">Read More</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                         style={{ padding: '1px' }}>
                      <div className="w-full h-full bg-white rounded-3xl" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Research Articles */}
      <section className="py-24 bg-gradient-to-br from-accent-ai-purple/5 via-research-50 to-accent-lab-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
              <Microscope className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="caption-text text-accent-ai-purple">
                Complete Archive
              </span>
            </div>
            
            <h2 className="section-title text-accent-deep-blue content-spacing">
              All Research Articles
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="body-text-large text-research-600 mb-4">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                {selectedCategory !== 'all' && ` in ${researchCategories.find(cat => cat.id === selectedCategory)?.label}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
              {(selectedCategory !== 'all' || searchQuery) && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-accent-ai-purple font-semibold rounded-xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 shadow-lab-card hover:shadow-card-hover transition-all duration-300 font-ibm-sans"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </motion.button>
              )}
            </div>
          </motion.div>

          <div className="space-y-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group"
              >
                <Link href={article.href}>
                  <div className="glass-card-research transition-all duration-500 p-10 overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 mb-6 lg:mb-0 lg:mr-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-2xl flex items-center justify-center mr-4 shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                            <article.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex items-center space-x-3">
                            {article.hasInteractiveCharts && (
                              <div className="flex items-center text-xs text-green-600 bg-green-100 px-3 py-1 rounded-full font-semibold">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Interactive Charts
                              </div>
                            )}
                            {article.hasLottieAnimation && (
                              <div className="flex items-center text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded-full font-semibold">
                                <Zap className="h-3 w-3 mr-1" />
                                Animations
                              </div>
                            )}
                            {article.hasMermaidDiagrams && (
                              <div className="flex items-center text-xs text-purple-600 bg-purple-100 px-3 py-1 rounded-full font-semibold">
                                <BookOpen className="h-3 w-3 mr-1" />
                                Diagrams
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <h3 className="subsection-title text-accent-deep-blue mb-4 group-hover:text-accent-ai-purple transition-colors duration-300">
                          {article.title}
                        </h3>
                        
                        <p className="body-text-large text-research-600 mb-6">
                          {article.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 text-accent-ai-purple border border-accent-ai-purple/20 font-ibm-sans"
                            >
                              <Tag className="h-3 w-3 mr-2" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-4 lg:min-w-48">
                        <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-accent-ai-purple/20 shadow-soft">
                          <Clock className="h-4 w-4 mr-2 text-accent-ai-purple" />
                          <span className="caption-text text-research-600">{article.readTime}</span>
                        </div>
                        <div className="caption-text text-research-500">
                          {new Date(article.publishDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center text-accent-ai-purple group-hover:text-accent-lab-purple transition-colors duration-300">
                          <span className="caption-text mr-3">Read Article</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                         style={{ padding: '1px' }}>
                      <div className="w-full h-full bg-white rounded-3xl" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent-ai-purple/20 to-accent-lab-purple/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <BookOpen className="h-12 w-12 text-accent-ai-purple" />
              </div>
              <h3 className="subsection-title text-accent-deep-blue mb-4">No articles found</h3>
              <p className="body-text text-research-600 mb-8 max-w-md mx-auto">
                Try adjusting your search query or selecting a different category to discover more research.
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
                <X className="mr-3 h-5 w-5" />
                Clear All Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
