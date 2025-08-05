'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Microscope, Users, Zap, ChevronDown, Sparkles, Target, Globe, Award, TrendingUp, BarChart3, Activity, User, Cpu, FileText, Shield, Database, Network, Eye, Lightbulb, GitBranch, Code2, Layers, Workflow, Compass } from 'lucide-react';
import Link from 'next/link';
import InteractiveStatsChart from '@/components/InteractiveStatsChart';
import AnimatedStats from '@/components/AnimatedStats';
import ResearchMetricsChart from '@/components/ResearchMetricsChart';
import VantaBackground from '@/components/VantaBackground';
import FloatingNavigation from '@/components/FloatingNavigation';

const researchHighlights = [
  {
    title: "Agentic Systems & Tool Integration",
    description: "Investigating autonomous reasoning architectures that maintain interpretability while enabling sophisticated tool use. Focus on symbolic-connectionist hybrid approaches and ethical constraint satisfaction.",
    category: "AI Architecture",
    readTime: "13 min read",
    href: "/research/agentic-systems-tool-use",
    icon: Brain,
    gradient: "from-accent-ai-purple to-accent-lab-purple",
    bgGradient: "from-accent-ai-purple/10 to-accent-lab-purple/5",
    methodology: "Formal verification, empirical evaluation"
  },
  {
    title: "Privacy-Preserving Information Retrieval",
    description: "Developing cryptographically secure retrieval systems using differential privacy and homomorphic encryption. Balancing utility with privacy guarantees in large-scale knowledge systems.",
    category: "Security & Privacy",
    readTime: "8 min read", 
    href: "/research/privacy-preserving-retrieval",
    icon: Zap,
    gradient: "from-primary-500 to-accent-ai-purple",
    bgGradient: "from-primary-50 to-accent-ai-purple/10",
    methodology: "Cryptographic protocols, privacy analysis"
  },
  {
    title: "Philosophical Foundations of AI Ethics",
    description: "Examining the ontological and epistemological assumptions underlying AI systems. Developing normative frameworks for responsible AI that integrate virtue ethics and consequentialist approaches.",
    category: "AI Ethics & Philosophy",
    readTime: "11 min read",
    href: "/research/ai-ethics-philosophy", 
    icon: Microscope,
    gradient: "from-accent-lab-purple to-secondary-500",
    bgGradient: "from-accent-lab-purple/10 to-secondary-50",
    methodology: "Philosophical analysis, case studies"
  }
];

const stats = [
  { 
    label: "Research Articles", 
    value: "15+",
    icon: BookOpen,
    description: "Published papers & studies"
  },
  { 
    label: "Years Experience", 
    value: "10+",
    icon: Target,
    description: "AI research & development"
  },
  { 
    label: "Languages", 
    value: "5",
    icon: Globe,
    description: "RU, EN, Tatar, Serbian, Spanish"
  },
  { 
    label: "International Projects", 
    value: "20+",
    icon: Award,
    description: "Global collaborations"
  }
];

const expertiseAreas = [
  {
    title: "AI Systems Architecture",
    description: "Designing scalable, interpretable AI systems",
    icon: Brain,
    color: "accent-ai-purple"
  },
  {
    title: "Philosophy of Technology",
    description: "Exploring ethical implications of AI",
    icon: Sparkles,
    color: "accent-lab-purple"
  },
  {
    title: "Big Data & Security",
    description: "Privacy-preserving data processing",
    icon: Zap,
    color: "primary-500"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{
      background: `
        radial-gradient(ellipse 120% 80% at 20% 0%, rgba(30, 58, 138, 0.4), transparent 70%),
        radial-gradient(ellipse 100% 60% at 80% 20%, rgba(124, 58, 237, 0.3), transparent 60%),
        radial-gradient(ellipse 80% 100% at 40% 80%, rgba(139, 92, 246, 0.2), transparent 50%),
        linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 70%, #475569 100%),
        conic-gradient(from 180deg at 50% 50%, rgba(30, 58, 138, 0.1) 0deg, rgba(124, 58, 237, 0.1) 120deg, rgba(139, 92, 246, 0.1) 240deg, rgba(30, 58, 138, 0.1) 360deg)
      `,
      backgroundAttachment: 'fixed, fixed, fixed, fixed, scroll',
      backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 200% 200%',
      backgroundPosition: '0% 0%, 100% 0%, 50% 100%, 0% 0%, 0% 0%'
    }}>
      {/* Hero Section */}
      <section className="relative hero-background overflow-hidden py-24 sm:py-32 lg:py-48">
        {/* Dynamic Background System - Advanced Multi-Layer */}
        <VantaBackground variant="hero" className="absolute inset-0 z-0" />
        
        {/* Ultra-Subtle Content Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-900/8 z-5" />
        
        {/* Floating Elements - Fixed positioning to prevent overflow */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/5 rounded-full blur-xl max-w-[calc(100vw-2rem)]"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-4 sm:right-16 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent-lab-purple/8 to-accent-violet/5 rounded-full blur-lg max-w-[calc(100vw-2rem)]"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Platform Introduction Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-purple-300" />
                <span className="text-white/90 font-medium text-sm tracking-wide">
                  Advanced AI Research Platform
                </span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-accent-ai-purple mr-2" />
                <span className="text-sm font-medium text-accent-ai-purple font-ibm-sans">
                  AI Research &amp; Philosophy Lab
                </span>
              </motion.div>
              
              <h1 className="hero-title">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="block text-white mb-6 drop-shadow-2xl"
                  style={{
                    textShadow: '0 0 40px rgba(124, 58, 237, 0.3), 0 0 80px rgba(139, 92, 246, 0.2)'
                  }}
                >
                  Advancing AI
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-violet bg-clip-text text-transparent drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(124, 58, 237, 0.4))'
                  }}
                >
                  Through Ethics
                </motion.span>
              </h1>
            </motion.div>

            {/* About the Platform - Enhanced Academic Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-6xl mx-auto mb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.7 }}
                className="glass-card-hero p-12 mb-12"
              >
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6"
                  >
                    <BookOpen className="w-5 h-5 text-blue-300 mr-3" />
                    <span className="text-blue-200 font-medium text-lg font-ibm-sans">
                      About This Research Platform
                    </span>
                  </motion.div>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-ibm-sans">
                    <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-violet-200 bg-clip-text text-transparent">
                      Advancing Interpretable AI
                    </span>
                    <span className="block text-3xl lg:text-4xl mt-2 text-slate-300">
                      Through Interdisciplinary Research
                    </span>
                  </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-xl text-slate-200 leading-relaxed font-inter">
                      <strong className="text-blue-300">Traceremove Research</strong> investigates AI as a participant in the human symbolic environment, 
                      developing interpretable systems that respect meaning, agency, and ethical foundations.
                    </p>
                    
                    <p className="text-lg text-slate-300 leading-relaxed font-inter">
                      We bridge <span className="text-purple-300 font-semibold">rigorous engineering</span> with 
                      <span className="text-blue-300 font-semibold"> philosophical inquiry</span> to advance 
                      transparent, human-aligned artificial intelligence.
                    </p>

                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 border border-slate-600/30">
                      <h4 className="text-lg font-semibold text-blue-300 mb-3 font-ibm-sans">Research Focus</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          <span>Agentic AI systems and tool-use architectures</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          <span>Privacy-preserving information retrieval</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                          <span>Ethical frameworks for AI deployment</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20">
                      <h4 className="text-xl font-semibold text-white mb-4 font-ibm-sans flex items-center">
                        <Compass className="w-6 h-6 text-blue-300 mr-3" />
                        How to Navigate This Platform
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white font-bold text-sm">1</span>
                          </div>
                          <div>
                            <p className="text-blue-200 font-medium">Explore Research</p>
                            <p className="text-slate-300 text-sm">Browse peer-reviewed publications, methodologies, and findings</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white font-bold text-sm">2</span>
                          </div>
                          <div>
                            <p className="text-purple-200 font-medium">Interactive Tools</p>
                            <p className="text-slate-300 text-sm">Test AI architectures and ethical decision-making frameworks</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white font-bold text-sm">3</span>
                          </div>
                          <div>
                            <p className="text-violet-200 font-medium">Academic Profile</p>
                            <p className="text-slate-300 text-sm">Learn about collaborations, publications, and research philosophy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <p className="body-text-large text-slate-200 text-center mb-8">
                This platform serves as a comprehensive resource for researchers, practitioners, and students interested in 
                <span className="text-blue-300 font-semibold"> ethical AI development</span>, 
                <span className="text-purple-300 font-semibold"> interpretable machine learning</span>, and 
                <span className="text-violet-300 font-semibold"> philosophical foundations of artificial intelligence</span>.
              </p>

              {/* Platform Guide - Enhanced with Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.8 }}
                className="glass-card-premium p-12 mb-16"
              >
                <h3 className="section-title text-white mb-8 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent text-center">
                  Platform Navigation &amp; Research Focus
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <motion.div 
                    className="floating-card p-6 text-center"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center mx-auto">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="card-title text-blue-300 mb-3">Research</h4>
                    <p className="caption-text text-slate-300">Peer-reviewed publications on agentic systems, privacy-preserving retrieval, and AI ethics with rigorous methodology</p>
                  </motion.div>
                  
                  <motion.div 
                    className="floating-card p-6 text-center"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center mx-auto">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="card-title text-purple-300 mb-3">About</h4>
                    <p className="caption-text text-slate-300">Academic profile, international collaborations, philosophical foundations, and interdisciplinary approach</p>
                  </motion.div>
                  
                  <motion.div 
                    className="floating-card p-6 text-center"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl mb-4 flex items-center justify-center mx-auto">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="card-title text-violet-300 mb-3">Tools</h4>
                    <p className="caption-text text-slate-300">Interactive demonstrations of interpretable AI architectures and ethical decision-making frameworks</p>
                  </motion.div>
                  
                  <motion.div 
                    className="floating-card p-6 text-center"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl mb-4 flex items-center justify-center mx-auto">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="card-title text-indigo-300 mb-3">Whitepapers</h4>
                    <p className="caption-text text-slate-300">Technical reports on scalable AI systems, ethical frameworks, and philosophical implications</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Philosophical Significance */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 1.0 }}
                className="glass-card-premium p-10 mb-16"
              >
                <h3 className="section-title text-white mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent text-center">
                  Philosophical Significance
                </h3>
                <div className="max-w-4xl mx-auto">
                  <p className="body-text-large text-slate-300 mb-6 text-center">
                    Contemporary AI development often prioritizes performance metrics over interpretability and ethical considerations. 
                    Our research addresses this critical gap by developing <span className="text-blue-300 font-medium">transparent, human-aligned systems</span> through 
                    interdisciplinary collaboration between engineering, philosophy, and data-driven design.
                  </p>
                  <p className="body-text-large text-slate-300 text-center">
                    We investigate how AI systems can participate meaningfully in human symbolic environments while maintaining 
                    <span className="text-purple-300 font-medium"> respect for agency, interpretability, and ethical foundations</span> — 
                    essential for building trustworthy artificial intelligence.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/research" className="hero-button group inline-flex items-center text-lg">
                  <span className="relative z-10">Explore Research</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/about" className="hero-button-secondary group inline-flex items-center text-lg">
                  <span className="relative z-10">About Artur</span>
                  <User className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform relative z-10" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
              {/* Interactive Chart */}
              <InteractiveStatsChart className="lg:col-span-1" />
              
              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl rounded-3xl p-6 border border-accent-ai-purple/20 shadow-2xl hover:shadow-accent-ai-purple/10 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 to-accent-lab-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-2xl mb-4 shadow-lg group-hover:shadow-accent-ai-purple/25"
                      >
                        <stat.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-violet bg-clip-text text-transparent font-ibm-sans mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-white mb-1 font-ibm-sans">{stat.label}</div>
                      <div className="text-xs text-slate-300 font-ibm-sans leading-relaxed">{stat.description}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Advanced Research Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-6"
                >
                  <BarChart3 className="w-4 h-4 text-accent-ai-purple mr-2" />
                  <span className="text-sm font-medium text-accent-ai-purple font-ibm-sans">
                    Research Analytics
                  </span>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4 font-ibm-sans">
                  Impact &amp; Collaboration Metrics
                </h3>
                <p className="text-slate-300 max-w-2xl mx-auto font-ibm-sans">
                  Real-time visualization of research output, citation networks, and academic collaboration patterns across AI ethics and philosophy domains.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <ResearchMetricsChart
                  title="Publication Impact"
                  type="bar"
                  data={[
                    { label: 'AI Ethics', value: 12, color: '#6366F1', trend: 15 },
                    { label: 'Philosophy', value: 8, color: '#7056E6', trend: 8 },
                    { label: 'Technology', value: 15, color: '#282A36', trend: 22 }
                  ]}
                />
                <ResearchMetricsChart
                  title="Citation Growth"
                  type="line"
                  data={[
                    { label: '2021', value: 45, color: '#6366F1' },
                    { label: '2022', value: 78, color: '#7056E6' },
                    { label: '2023', value: 124, color: '#282A36' },
                    { label: '2024', value: 189, color: '#6366F1' }
                  ]}
                />
                <ResearchMetricsChart
                  title="Research Areas"
                  type="pie"
                  data={[
                    { label: 'AI Ethics', value: 35, color: '#6366F1' },
                    { label: 'Big Data', value: 25, color: '#7056E6' },
                    { label: 'Philosophy', value: 20, color: '#282A36' },
                    { label: 'Security', value: 20, color: '#10B981' }
                  ]}
                />
              </div>

              {/* Animated Stats Component */}
              <div className="mt-20">
                <AnimatedStats />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-6 h-10 border-2 border-accent-ai-purple/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-gradient-to-b from-accent-ai-purple to-accent-lab-purple rounded-full mt-2"
              />
            </div>
            <ChevronDown className="h-5 w-5 text-accent-ai-purple/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Expertise Areas */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-background"></div>
        <div className="lab-particles"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8"
            >
              <Brain className="w-4 h-4 text-accent-ai-purple mr-2" />
              <span className="text-sm font-medium text-accent-ai-purple font-ibm-sans">
                Core Expertise
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-ibm-sans drop-shadow-lg">
              Research Focus Areas
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto font-ibm-sans">
              Bridging the gap between cutting-edge AI technology and philosophical understanding
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative floating-card-enhanced p-10 transition-all duration-800 motion-safe"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-2xl mb-6 shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-500">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-accent-deep-blue mb-4 font-ibm-sans group-hover:text-accent-ai-purple transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-research-600 leading-relaxed font-ibm-sans">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-background"></div>
        <div className="lab-particles"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8"
            >
              <BookOpen className="w-4 h-4 text-accent-ai-purple mr-2" />
              <span className="text-sm font-medium text-accent-ai-purple font-ibm-sans">
                Latest Publications
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-ibm-sans drop-shadow-lg">
              Featured Research
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto font-ibm-sans">
              Cutting-edge research in AI ethics, agentic systems, and privacy-preserving technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchHighlights.map((research, index) => (
              <motion.div
                key={research.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={research.href}>
                  <div className="research-card-wow p-10 transition-all duration-800 overflow-hidden motion-safe">
                    {/* Gradient top bar */}
                    <div className={`h-1 bg-gradient-to-r ${research.gradient}`} />
                    
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${research.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${research.gradient} shadow-ai-glow`}>
                          <research.icon className="h-8 w-8 text-white" />
                        </div>
                        <span className="text-sm text-research-500 font-ibm-sans bg-research-50 px-3 py-1 rounded-full">
                          {research.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-accent-deep-blue mb-4 group-hover:text-accent-ai-purple transition-colors duration-300 font-ibm-sans">
                        {research.title}
                      </h3>
                      
                      <p className="text-research-600 mb-6 leading-relaxed font-ibm-sans">
                        {research.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${research.gradient} text-white shadow-soft font-ibm-sans`}>
                          {research.category}
                        </span>
                        <ArrowRight className="h-5 w-5 text-research-400 group-hover:text-accent-ai-purple group-hover:translate-x-2 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/research"
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-semibold rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-500 hover:scale-105 font-ibm-sans text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <span className="relative z-10">View All Research</span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-accent-deep-blue via-accent-ai-purple to-accent-lab-purple relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white font-ibm-sans">
                Let&apos;s Collaborate
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 font-ibm-sans">
              Building the Future of
              <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Responsible AI
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto font-ibm-sans">
              Interested in collaboration, research partnerships, or discussing AI ethics and philosophy? 
              Let&apos;s connect and explore how we can advance transparent, interpretable AI systems together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center px-10 py-5 bg-white text-accent-deep-blue font-semibold rounded-2xl shadow-hero-glow hover:shadow-ai-glow transition-all duration-500 hover:scale-105 font-ibm-sans text-lg"
              >
                <div className="absolute inset-0 bg-white rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <span className="relative z-10">Get In Touch</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </Link>
              
              <Link
                href="/about"
                className="group inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-white/20 hover:border-white/40 shadow-soft hover:shadow-medium transition-all duration-500 hover:scale-105 font-ibm-sans text-lg"
              >
                <Users className="mr-3 h-6 w-6" />
                Learn More About Me
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
