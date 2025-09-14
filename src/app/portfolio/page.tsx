'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Database, 
  Brain, 
  Shield, 
  Globe, 
  Zap,
  ExternalLink,
  Github,
  ArrowRight,
  Filter,
  Calendar,
  Award,
  Users,
  TrendingUp,
  Play,
  Eye
} from 'lucide-react';
import Link from 'next/link';

const portfolioItems = [
  {
    id: '1',
    title: "Ethical AI Framework",
    category: "Framework",
    description: "Comprehensive framework for implementing ethical AI principles in production systems with real-time monitoring and compliance checking.",
    image: "/images/portfolio/ethical-framework.jpg",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker", "PostgreSQL"],
    status: "Production",
    year: "2024",
    impact: "Used by 50+ organizations",
    githubUrl: "https://github.com/traceremove/ethical-ai-framework",
    liveUrl: "https://ethicalai.traceremove.dev",
    demoUrl: "/tools/ai-research-dashboard",
    stats: {
      users: "50K+",
      uptime: "99.9%",
      performance: "95%"
    },
    features: [
      "Real-time bias detection",
      "Automated compliance reporting", 
      "Stakeholder transparency dashboard",
      "Ethical decision trees"
    ]
  },
  {
    id: '2',
    title: "Privacy-Preserving Search Engine",
    category: "AI System",
    description: "Advanced search engine using differential privacy and homomorphic encryption to protect user queries while delivering accurate results.",
    image: "/images/portfolio/privacy-search.jpg",
    technologies: ["Rust", "WebAssembly", "React", "Node.js", "Redis"],
    status: "Beta",
    year: "2024",
    impact: "99.9% privacy guarantee",
    githubUrl: "https://github.com/traceremove/private-search",
    liveUrl: "https://search.traceremove.dev",
    demoUrl: "/tools/semantic-search-tool",
    stats: {
      queries: "1M+",
      privacy: "99.9%",
      latency: "<100ms"
    },
    features: [
      "Zero-knowledge architecture",
      "Differential privacy guarantees",
      "Homomorphic encryption",
      "Secure multi-party computation"
    ]
  },
  {
    id: '3',
    title: "Multimodal AI Assistant",
    category: "AI System",
    description: "Intelligent assistant capable of processing and reasoning across text, vision, audio, and structured data modalities.",
    image: "/images/portfolio/multimodal-ai.jpg",
    technologies: ["Python", "PyTorch", "Transformers", "OpenCV", "Whisper"],
    status: "Research",
    year: "2024",
    impact: "92% accuracy improvement",
    githubUrl: "https://github.com/traceremove/multimodal-ai",
    liveUrl: "https://ai.traceremove.dev",
    demoUrl: "/research/multimodal-reasoning",
    stats: {
      modalities: "4",
      accuracy: "92%",
      languages: "15+"
    },
    features: [
      "Cross-modal reasoning",
      "Multi-language support",
      "Real-time processing",
      "Contextual understanding"
    ]
  },
  {
    id: '4',
    title: "Academic Research Platform",
    category: "Platform",
    description: "Collaborative platform for academic researchers with tools for data sharing, experiment tracking, and publication management.",
    image: "/images/portfolio/research-platform.jpg",
    technologies: ["Next.js", "Prisma", "Vercel", "Supabase", "TypeScript"],
    status: "Production",
    year: "2023",
    impact: "100+ research projects",
    githubUrl: "https://github.com/traceremove/research-platform",
    liveUrl: "https://research.traceremove.dev",
    demoUrl: "/academic",
    stats: {
      projects: "100+",
      researchers: "500+",
      papers: "200+"
    },
    features: [
      "Experiment tracking",
      "Collaborative workspace",
      "Publication management",
      "Data visualization"
    ]
  },
  {
    id: '5',
    title: "Transparent Language Model",
    category: "Model",
    description: "Large language model with built-in explainability features and transparent decision-making processes.",
    image: "/images/portfolio/transparent-llm.jpg",
    technologies: ["Python", "Transformers", "LIME", "SHAP", "Gradio"],
    status: "Production",
    year: "2023",
    impact: "85% explainability score",
    githubUrl: "https://github.com/traceremove/transparent-llm",
    liveUrl: "https://llm.traceremove.dev",
    demoUrl: "/projects/transparent-llms",
    stats: {
      parameters: "7B",
      explainability: "85%",
      inference: "Fast"
    },
    features: [
      "Attention visualization",
      "Token importance scoring",
      "Decision path tracing",
      "Bias detection"
    ]
  },
  {
    id: '6',
    title: "Global AI Collaboration Hub",
    category: "Platform",
    description: "International platform connecting AI researchers, sharing resources, and facilitating cross-border collaboration.",
    image: "/images/portfolio/collaboration-hub.jpg",
    technologies: ["Vue.js", "Django", "PostgreSQL", "WebRTC", "Docker"],
    status: "Production",
    year: "2023",
    impact: "50+ institutions connected",
    githubUrl: "https://github.com/traceremove/collaboration-hub",
    liveUrl: "https://collaborate.traceremove.dev",
    demoUrl: "/academic/collaborations",
    stats: {
      institutions: "50+",
      countries: "25+",
      projects: "200+"
    },
    features: [
      "Real-time collaboration",
      "Resource sharing",
      "Video conferencing",
      "Project management"
    ]
  }
];

const categories = ["All", "Framework", "AI System", "Platform", "Model"];
const technologies = ["Python", "React", "Next.js", "TensorFlow", "PyTorch", "Rust", "TypeScript"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesTech = !selectedTech || item.technologies.includes(selectedTech);
    return matchesCategory && matchesTech;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 decorative-blobs">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 decorative-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI Research Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our cutting-edge AI systems, frameworks, and platforms that are advancing 
              the field of ethical artificial intelligence and responsible technology development.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: Code, label: "Active Projects", value: "25+" },
              { icon: Users, label: "Contributors", value: "100+" },
              { icon: Award, label: "Awards", value: "15+" },
              { icon: TrendingUp, label: "Impact Score", value: "95%" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4 mx-auto">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Technology Filter */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 whitespace-nowrap">Tech Stack:</span>
              <div className="flex flex-wrap gap-2">
                {technologies.map(tech => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedTech === tech
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Showing {filteredItems.length} of {portfolioItems.length} projects
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      item.category === 'Framework' ? 'from-green-500/20 to-emerald-600/20' :
                      item.category === 'AI System' ? 'from-blue-500/20 to-cyan-600/20' :
                      item.category === 'Platform' ? 'from-purple-500/20 to-indigo-600/20' :
                      'from-orange-500/20 to-red-600/20'
                    }`} />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      {item.category === 'Framework' && <Shield className="w-16 h-16 text-gray-400" />}
                      {item.category === 'AI System' && <Brain className="w-16 h-16 text-gray-400" />}
                      {item.category === 'Platform' && <Globe className="w-16 h-16 text-gray-400" />}
                      {item.category === 'Model' && <Database className="w-16 h-16 text-gray-400" />}
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Production' ? 'bg-green-100 text-green-800' :
                        item.status === 'Beta' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                          title="View Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      <button
                        onClick={() => setShowDetails(showDetails === item.id ? null : item.id)}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        title="View Details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.year}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 3).map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          +{item.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Impact */}
                    <div className="text-sm text-gray-600 mb-4">
                      <span className="font-medium text-gray-900">Impact:</span> {item.impact}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.demoUrl}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                      >
                        View Demo
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                      
                      <div className="flex items-center gap-2">
                        {item.githubUrl && (
                          <a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                            title="GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {item.liveUrl && (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Detailed Stats (Expandable) */}
                  <AnimatePresence>
                    {showDetails === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100 overflow-hidden"
                      >
                        <div className="p-6 bg-gray-50">
                          <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                          
                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            {Object.entries(item.stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-bold text-gray-900">{value}</div>
                                <div className="text-xs text-gray-600 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>

                          {/* Features */}
                          <h5 className="font-medium text-gray-900 mb-2">Key Features</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <Zap className="w-3 h-3 mr-2 text-blue-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in Our Work?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Explore our open-source projects, contribute to our research, or collaborate with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/traceremove"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}