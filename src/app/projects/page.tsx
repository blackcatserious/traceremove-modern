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
  GitBranch,
  Layers,
  Target,
  Microscope,
  BookOpen,
  Tag,
  Clock,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 'transparent-llms',
    title: 'Transparent LLMs',
    description: 'Building interpretable and explainable large language models with transparent decision-making processes and comprehensive audit trails.',
    category: 'AI Transparency',
    icon: Brain,
    gradient: 'from-blue-500 to-purple-600',
    features: ['Interpretability', 'Audit Trails', 'Decision Transparency', 'Explainable AI'],
    status: 'Active',
    demoUrl: '/projects/transparent-llms',
    githubUrl: '/projects/transparent-llms',
    progress: 85,
    team: 'AI Ethics Lab',
    duration: '18 months'
  },
  {
    id: 'symbolic-ai',
    title: 'Symbolic AI',
    description: 'Hybrid symbolic-neural AI systems that combine the reasoning capabilities of symbolic AI with the learning power of neural networks.',
    category: 'Hybrid AI',
    icon: Layers,
    gradient: 'from-green-500 to-teal-600',
    features: ['Symbolic Reasoning', 'Neural Integration', 'Knowledge Graphs', 'Logic Programming'],
    status: 'Active',
    demoUrl: '/projects/symbolic-ai',
    githubUrl: '/projects/symbolic-ai',
    progress: 72,
    team: 'Reasoning Systems',
    duration: '24 months'
  },
  {
    id: 'digital-identity-agency',
    title: 'Digital Identity & Agency',
    description: 'Exploring digital identity frameworks and human agency in AI-mediated environments with focus on privacy and autonomy.',
    category: 'Digital Rights',
    icon: Shield,
    gradient: 'from-purple-500 to-pink-600',
    features: ['Identity Management', 'Privacy Protection', 'User Agency', 'Decentralized Systems'],
    status: 'Research',
    demoUrl: '/projects/digital-identity-agency',
    githubUrl: '/projects/digital-identity-agency',
    progress: 45,
    team: 'Digital Rights Lab',
    duration: '12 months'
  },
  {
    id: 'semantic-data-pipelines',
    title: 'Semantic Data Pipelines',
    description: 'Advanced data processing pipelines with semantic understanding, automated quality assessment, and intelligent data transformation.',
    category: 'Data Infrastructure',
    icon: Database,
    gradient: 'from-orange-500 to-red-600',
    features: ['Semantic Processing', 'Quality Assessment', 'Auto Transformation', 'Pipeline Optimization'],
    status: 'Active',
    demoUrl: '/projects/semantic-data-pipelines',
    githubUrl: '/projects/semantic-data-pipelines',
    progress: 90,
    team: 'Data Systems',
    duration: '15 months'
  },
  {
    id: 'nlp-evaluation',
    title: 'NLP Evaluation',
    description: 'Comprehensive evaluation framework for natural language processing systems with focus on robustness, fairness, and real-world performance.',
    category: 'Evaluation',
    icon: BarChart3,
    gradient: 'from-indigo-500 to-blue-600',
    features: ['Robustness Testing', 'Fairness Metrics', 'Performance Analysis', 'Benchmark Suite'],
    status: 'Active',
    demoUrl: '/projects/nlp-evaluation',
    githubUrl: '/projects/nlp-evaluation',
    progress: 78,
    team: 'Evaluation Lab',
    duration: '20 months'
  },
  {
    id: 'ethics-multimodal-ai',
    title: 'Ethics in Multimodal AI',
    description: 'Ethical frameworks and guidelines for multimodal AI systems, addressing bias, fairness, and responsible deployment across modalities.',
    category: 'AI Ethics',
    icon: Globe,
    gradient: 'from-cyan-500 to-blue-600',
    features: ['Ethical Frameworks', 'Bias Detection', 'Multimodal Analysis', 'Responsible AI'],
    status: 'Research',
    demoUrl: '/projects/ethics-multimodal-ai',
    githubUrl: '/projects/ethics-multimodal-ai',
    progress: 60,
    team: 'AI Ethics Lab',
    duration: '16 months'
  },
  {
    id: 'real-world-ai-deployments',
    title: 'Real-World AI Deployments',
    description: 'Case studies and frameworks for deploying AI systems in real-world environments with focus on reliability, scalability, and impact.',
    category: 'AI Deployment',
    icon: Target,
    gradient: 'from-rose-500 to-pink-600',
    features: ['Deployment Frameworks', 'Case Studies', 'Impact Assessment', 'Scalability Solutions'],
    status: 'Active',
    demoUrl: '/projects/real-world-ai-deployments',
    githubUrl: '/projects/real-world-ai-deployments',
    progress: 82,
    team: 'Deployment Lab',
    duration: '22 months'
  }
];

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'AI Transparency', label: 'AI Transparency', count: projects.filter(p => p.category === 'AI Transparency').length },
  { id: 'Hybrid AI', label: 'Hybrid AI', count: projects.filter(p => p.category === 'Hybrid AI').length },
  { id: 'Digital Rights', label: 'Digital Rights', count: projects.filter(p => p.category === 'Digital Rights').length },
  { id: 'Data Infrastructure', label: 'Data Infrastructure', count: projects.filter(p => p.category === 'Data Infrastructure').length },
  { id: 'Evaluation', label: 'Evaluation', count: projects.filter(p => p.category === 'Evaluation').length },
  { id: 'AI Ethics', label: 'AI Ethics', count: projects.filter(p => p.category === 'AI Ethics').length },
  { id: 'AI Deployment', label: 'AI Deployment', count: projects.filter(p => p.category === 'AI Deployment').length }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-research-50 via-white to-lab-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 decorative-blobs">
        {/* Dynamic Background System */}
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-deep-blue/5 via-accent-ai-purple/5 to-accent-lab-purple/10 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.1),transparent_50%)] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.08),transparent_50%)] z-10 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 decorative-content">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8"
            >
              <GitBranch className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="caption-text text-accent-ai-purple">
                Research Projects
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
                  Projects
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="body-text-large text-research-600 max-w-4xl mx-auto content-spacing"
            >
              Cutting-edge research projects advancing the frontiers of AI ethics, transparency, and responsible deployment. 
              From transparent LLMs to digital identity frameworks, explore our portfolio of impactful research initiatives.
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
                  placeholder="Search research projects, technologies, and methodologies..."
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

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link href={project.demoUrl}>
                  <div className="glass-card-research transition-all duration-500 overflow-hidden hover:border-accent-ai-purple/30">
                    {/* Gradient Header */}
                    <div className="h-2 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600" />
                    
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-8">
                      {/* Icon and Status */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-2xl flex items-center justify-center shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                          <project.icon className="h-7 w-7 text-white" />
                        </div>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full font-ibm-sans ${
                          project.status === 'Active' ? 'bg-green-100 text-green-700 border border-green-200' :
                          project.status === 'Research' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                          'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Title and Description */}
                      <h3 className="subsection-title text-accent-deep-blue mb-4 group-hover:text-accent-ai-purple transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="body-text text-research-600 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Category */}
                      <div className="mb-6">
                        <span className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 text-accent-ai-purple border border-accent-ai-purple/20 rounded-full font-ibm-sans">
                          {project.category}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="caption-text text-research-600">Progress</span>
                          <span className="caption-text text-accent-ai-purple font-semibold">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-research-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${project.progress}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple h-2 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center px-3 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-accent-ai-purple/20 shadow-soft">
                          <Clock className="h-4 w-4 mr-2 text-accent-ai-purple" />
                          <span className="caption-text text-research-600">{project.duration}</span>
                        </div>
                        <div className="flex items-center px-3 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-accent-ai-purple/20 shadow-soft">
                          <Microscope className="h-4 w-4 mr-2 text-accent-ai-purple" />
                          <span className="caption-text text-research-600">{project.team}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                          {project.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="text-xs font-medium text-research-600 bg-research-100 px-3 py-1 rounded-full border border-research-200 font-ibm-sans"
                            >
                              {feature}
                            </span>
                          ))}
                          {project.features.length > 3 && (
                            <span className="text-xs text-accent-ai-purple font-semibold font-ibm-sans">
                              +{project.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white text-sm font-bold rounded-xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 font-ibm-sans">
                            <Play className="h-4 w-4 mr-2" />
                            Explore
                          </div>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-accent-ai-purple text-sm font-bold rounded-xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 shadow-lab-card hover:shadow-card-hover transition-all duration-300 font-ibm-sans"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Code className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </div>
                        
                        <div className="flex items-center text-accent-ai-purple group-hover:text-accent-lab-purple transition-colors duration-300">
                          <span className="caption-text mr-3">Learn More</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                         style={{ padding: "1px" }}>
                      <div className="w-full h-full bg-white rounded-3xl" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent-ai-purple/20 to-accent-lab-purple/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <GitBranch className="h-12 w-12 text-accent-ai-purple" />
              </div>
              <h3 className="subsection-title text-accent-deep-blue mb-4">No projects found</h3>
              <p className="body-text text-research-600 mb-8 max-w-md mx-auto">
                Try adjusting your search query or selecting a different category to discover more research projects.
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
                <GitBranch className="mr-3 h-5 w-5" />
                View All Projects
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
