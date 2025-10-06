'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Award, 
  TrendingUp, 
  Eye, 
  Globe, 
  Users, 
  Database, 
  Shield,
  Brain,
  ArrowRight,
  ExternalLink,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

const showcaseItems = [
  {
    title: "AI Ethics Framework Implementation",
    description: "Real-world deployment of ethical AI principles in production systems",
    category: "Ethics",
    impact: "500K+ users protected",
    image: "/images/showcase/ethics-framework.jpg",
    status: "Deployed",
    link: "/research/ethical-ai-architecture",
    icon: Shield,
    gradient: "from-green-500 to-emerald-600"
  },
  {
    title: "Privacy-Preserving Search Engine",
    description: "Zero-knowledge information retrieval with differential privacy",
    category: "Privacy",
    impact: "99.9% privacy guarantee",
    image: "/images/showcase/privacy-search.jpg", 
    status: "Beta",
    link: "/research/privacy-preserving-retrieval",
    icon: Eye,
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    title: "Multimodal AI Assistant",
    description: "Advanced reasoning across text, vision, and audio modalities",
    category: "AI Systems",
    impact: "92% accuracy improvement",
    image: "/images/showcase/multimodal-ai.jpg",
    status: "Research",
    link: "/research/multimodal-reasoning",
    icon: Brain,
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    title: "Transparent LLM Pipeline",
    description: "Interpretable large language model with explainable outputs",
    category: "Transparency",
    impact: "85% explainability score",
    image: "/images/showcase/transparent-llm.jpg",
    status: "Deployed",
    link: "/projects/transparent-llms",
    icon: Eye,
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Global AI Collaboration Platform",
    description: "International research coordination and knowledge sharing",
    category: "Collaboration",
    impact: "50+ institutions",
    image: "/images/showcase/collaboration.jpg",
    status: "Active",
    link: "/academic/collaborations",
    icon: Globe,
    gradient: "from-teal-500 to-green-600"
  },
  {
    title: "Academic AI Infrastructure",
    description: "Scalable research computing platform for universities",
    category: "Infrastructure",
    impact: "100+ research projects",
    image: "/images/showcase/infrastructure.jpg",
    status: "Scaling",
    link: "/research/ai-infrastructure-academia",
    icon: Database,
    gradient: "from-violet-500 to-purple-600"
  }
];

const metrics = [
  { label: "Active Projects", value: "25+", icon: Zap },
  { label: "Research Papers", value: "40+", icon: Award },
  { label: "Citations", value: "1,200+", icon: TrendingUp },
  { label: "Collaborations", value: "50+", icon: Users }
];

export default function ShowcasePage() {
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
              Research Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our most impactful AI research projects, deployed systems, and collaborative initiatives 
              that are shaping the future of ethical artificial intelligence.
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4 mx-auto">
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our latest research breakthroughs and their real-world applications across 
              various domains of artificial intelligence and machine learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                  {/* Project Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <item.icon className="w-16 h-16 text-gray-400" />
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Deployed' ? 'bg-green-100 text-green-800' :
                        item.status === 'Beta' ? 'bg-blue-100 text-blue-800' :
                        item.status === 'Active' ? 'bg-purple-100 text-purple-800' :
                        item.status === 'Scaling' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <Calendar className="w-4 h-4 text-gray-400" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">Impact:</span> {item.impact}
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>

                    <Link
                      href={item.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in Collaboration?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join our research community and contribute to the future of ethical AI development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/academic/collaborations"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                View Collaborations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}