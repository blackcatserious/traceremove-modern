'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  BookOpen, 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Globe,
  Search, 
  ArrowRight,
  Clock,
  Tag,
  Calendar,
  User,
  Eye,
  X
} from 'lucide-react';
import Link from 'next/link';

const researchArticles = [
  {
    id: 'guardrails-ux-safety',
    title: 'Guardrails in UX Safety: Designing Protective User Experiences',
    description: 'Comprehensive analysis of user experience safety mechanisms in AI applications, exploring design patterns that protect users from harmful content and interactions.',
    category: 'UX Safety',
    icon: Shield,
    gradient: 'from-green-500 to-teal-600',
    tags: ['UX Design', 'Safety', 'User Protection', 'Interface Design'],
    readTime: '12 min read',
    publishDate: '2024-01-15',
    featured: true,
    href: '/articles/guardrails-ux-safety',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '2.8k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'cost-aware-llm-serving',
    title: 'Cost-Aware LLM Serving: Optimizing AI Infrastructure Economics',
    description: 'Strategic approaches to cost optimization in large language model deployment, covering resource allocation, scaling strategies, and economic efficiency.',
    category: 'Infrastructure',
    icon: TrendingUp,
    gradient: 'from-blue-500 to-purple-600',
    tags: ['Cost Optimization', 'LLM Serving', 'Infrastructure', 'Economics'],
    readTime: '15 min read',
    publishDate: '2024-01-12',
    featured: true,
    href: '/articles/cost-aware-llm-serving',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '3.2k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'agent-evaluation-beyond-win-rates',
    title: 'Agent Evaluation Beyond Win-Rates: Comprehensive Assessment Frameworks',
    description: 'Moving beyond simple win-rate metrics to develop comprehensive evaluation frameworks for AI agents, including reliability, robustness, and real-world performance.',
    category: 'Evaluation',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-600',
    tags: ['Agent Evaluation', 'Metrics', 'Assessment', 'Performance'],
    readTime: '18 min read',
    publishDate: '2024-01-10',
    featured: true,
    href: '/articles/agent-evaluation-beyond-win-rates',
    hasInteractiveCharts: true,
    hasLottieAnimation: true,
    hasMermaidDiagrams: true,
    views: '4.1k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'philosophy-machine-agency',
    title: 'Philosophy of Machine Agency: Autonomy and Responsibility in AI',
    description: 'Philosophical exploration of machine agency, examining questions of autonomy, intentionality, and moral responsibility in artificial intelligence systems.',
    category: 'Philosophy',
    icon: BookOpen,
    gradient: 'from-indigo-500 to-blue-600',
    tags: ['Philosophy', 'Machine Agency', 'Ethics', 'Autonomy'],
    readTime: '22 min read',
    publishDate: '2024-01-08',
    featured: false,
    href: '/articles/philosophy-machine-agency',
    hasInteractiveCharts: false,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '1.9k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'epistemic-risks-ai',
    title: 'Epistemic Risks in AI: Knowledge, Truth, and Uncertainty',
    description: 'Analysis of epistemic risks in AI systems, exploring how artificial intelligence affects human knowledge, truth-seeking, and our relationship with uncertainty.',
    category: 'Philosophy',
    icon: Globe,
    gradient: 'from-orange-500 to-red-600',
    tags: ['Epistemology', 'Risk Analysis', 'Knowledge', 'Uncertainty'],
    readTime: '20 min read',
    publishDate: '2024-01-05',
    featured: false,
    href: '/articles/epistemic-risks-ai',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '2.3k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'linguistic-symbolism-ml',
    title: 'Linguistic Symbolism in ML: Language, Meaning, and Representation',
    description: 'Exploration of linguistic symbolism in machine learning, examining how AI systems process language, create meaning, and represent symbolic knowledge.',
    category: 'Language',
    icon: BookOpen,
    gradient: 'from-cyan-500 to-blue-600',
    tags: ['Linguistics', 'Symbolism', 'Language Processing', 'Representation'],
    readTime: '16 min read',
    publishDate: '2024-01-03',
    featured: false,
    href: '/articles/linguistic-symbolism-ml',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '1.7k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'ai-human-dignity',
    title: 'AI & Human Dignity: Preserving Human Worth in the Age of Automation',
    description: 'Examination of how artificial intelligence impacts human dignity, exploring ways to preserve human worth, agency, and meaning in an increasingly automated world.',
    category: 'Ethics',
    icon: Shield,
    gradient: 'from-rose-500 to-pink-600',
    tags: ['Human Dignity', 'Ethics', 'Automation', 'Human Worth'],
    readTime: '19 min read',
    publishDate: '2023-12-28',
    featured: false,
    href: '/articles/ai-human-dignity',
    hasInteractiveCharts: false,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '2.1k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'philosophy-responsibility',
    title: 'Philosophy of Responsibility: Moral Agency in AI Systems',
    description: 'Philosophical analysis of responsibility in AI systems, examining moral agency, accountability frameworks, and the distribution of responsibility between humans and machines.',
    category: 'Philosophy',
    icon: Globe,
    gradient: 'from-emerald-500 to-green-600',
    tags: ['Responsibility', 'Moral Agency', 'Accountability', 'Ethics'],
    readTime: '21 min read',
    publishDate: '2023-12-25',
    featured: false,
    href: '/articles/philosophy-responsibility',
    hasInteractiveCharts: false,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '1.8k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'comparative-llm-analysis',
    title: 'Comparative LLM Analysis: Benchmarking Language Model Performance',
    description: 'Comprehensive comparative analysis of large language models, examining performance across various tasks, efficiency metrics, and real-world applications.',
    category: 'Analysis',
    icon: TrendingUp,
    gradient: 'from-violet-500 to-purple-600',
    tags: ['LLM Comparison', 'Benchmarking', 'Performance', 'Analysis'],
    readTime: '17 min read',
    publishDate: '2023-12-20',
    featured: false,
    href: '/articles/comparative-llm-analysis',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '3.5k',
    author: 'Artur Ziganshin'
  },
  {
    id: 'case-study-ai-social-systems',
    title: 'Case Study: AI in Social Systems - Impact and Implementation',
    description: 'Detailed case study examining the implementation and impact of AI systems in social contexts, including lessons learned and best practices for responsible deployment.',
    category: 'Case Study',
    icon: Brain,
    gradient: 'from-amber-500 to-orange-600',
    tags: ['Case Study', 'Social Systems', 'Implementation', 'Impact'],
    readTime: '14 min read',
    publishDate: '2023-12-15',
    featured: false,
    href: '/articles/case-study-ai-social-systems',
    hasInteractiveCharts: true,
    hasLottieAnimation: false,
    hasMermaidDiagrams: true,
    views: '2.6k',
    author: 'Artur Ziganshin'
  }
];

const categories = [
  { id: 'all', label: 'All Articles', count: researchArticles.length },
  { id: 'UX Safety', label: 'UX Safety', count: researchArticles.filter(a => a.category === 'UX Safety').length },
  { id: 'Infrastructure', label: 'Infrastructure', count: researchArticles.filter(a => a.category === 'Infrastructure').length },
  { id: 'Evaluation', label: 'Evaluation', count: researchArticles.filter(a => a.category === 'Evaluation').length },
  { id: 'Philosophy', label: 'Philosophy', count: researchArticles.filter(a => a.category === 'Philosophy').length },
  { id: 'Language', label: 'Language', count: researchArticles.filter(a => a.category === 'Language').length },
  { id: 'Ethics', label: 'Ethics', count: researchArticles.filter(a => a.category === 'Ethics').length },
  { id: 'Analysis', label: 'Analysis', count: researchArticles.filter(a => a.category === 'Analysis').length },
  { id: 'Case Study', label: 'Case Study', count: researchArticles.filter(a => a.category === 'Case Study').length }
];

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = researchArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-research-50 via-white to-lab-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Dynamic Background System */}
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-deep-blue/5 via-accent-ai-purple/5 to-accent-lab-purple/10 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.1),transparent_50%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.08),transparent_50%)] z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
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
                Research Articles
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
                  Research
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600 bg-clip-text text-transparent"
                >
                  Articles
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="body-text-large text-research-600 max-w-4xl mx-auto content-spacing"
            >
              In-depth research articles exploring AI ethics, philosophy of technology, and responsible AI development. 
              From technical implementations to philosophical foundations, discover comprehensive analyses of contemporary AI challenges.
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
                  placeholder="Search research articles, topics, and insights..."
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

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-accent-ai-purple/5 via-research-50 to-accent-lab-purple/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
                <TrendingUp className="w-5 h-5 text-accent-ai-purple mr-2" />
                <span className="caption-text text-accent-ai-purple">
                  Featured Articles
                </span>
              </div>
              
              <h2 className="section-title text-accent-deep-blue content-spacing">
                Latest Research Insights
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <div className="relative bg-gradient-to-br from-white via-research-50/20 to-accent-ai-purple/5 rounded-3xl shadow-lab-card hover:shadow-card-hover transition-all duration-500 p-10 border border-accent-ai-purple/10 hover:border-accent-ai-purple/30 overflow-hidden">
                      {/* Background Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative">
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
                        
                        <div className="flex flex-wrap gap-3 mb-6">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 text-accent-ai-purple border border-accent-ai-purple/20 font-ibm-sans"
                            >
                              <Tag className="h-3 w-3 mr-2" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-accent-ai-purple/20 shadow-soft">
                              <Clock className="h-4 w-4 mr-2 text-accent-ai-purple" />
                              <span className="caption-text text-research-600">{article.readTime}</span>
                            </div>
                            <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-accent-ai-purple/20 shadow-soft">
                              <Eye className="h-4 w-4 mr-2 text-accent-ai-purple" />
                              <span className="caption-text text-research-600">{article.views}</span>
                            </div>
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
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
              <BookOpen className="w-5 h-5 text-accent-ai-purple mr-2" />
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
                {selectedCategory !== 'all' && ` in ${categories.find(cat => cat.id === selectedCategory)?.label}`}
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
                  <div className="relative bg-gradient-to-br from-white via-research-50/20 to-accent-ai-purple/5 rounded-3xl shadow-lab-card hover:shadow-card-hover transition-all duration-500 p-10 border border-accent-ai-purple/10 hover:border-accent-ai-purple/30 overflow-hidden">
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
                        <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-accent-ai-purple/20 shadow-soft">
                          <Eye className="h-4 w-4 mr-2 text-accent-ai-purple" />
                          <span className="caption-text text-research-600">{article.views}</span>
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
                Try adjusting your search query or selecting a different category to discover more research articles.
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
