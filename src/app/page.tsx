'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Microscope, Users, Zap, ChevronDown, Sparkles, Target, Globe, Award, TrendingUp, BarChart3, Activity, User, Cpu, FileText } from 'lucide-react';
import Link from 'next/link';
import InteractiveStatsChart from '@/components/InteractiveStatsChart';
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
        
        {/* Floating Elements */}
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
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/5 rounded-full blur-xl"
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
          className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-accent-lab-purple/8 to-accent-violet/5 rounded-full blur-lg"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-6xl mx-auto mb-16"
            >
              <p className="body-text-large text-slate-200 text-center mb-8">
                Traceremove Research investigates AI as a participant in the human symbolic environment, 
                developing interpretable systems that respect meaning, agency, and ethical foundations. 
                <span className="block mt-4 text-slate-300">
                  We bridge rigorous engineering with philosophical inquiry to advance transparent, human-aligned artificial intelligence.
                </span>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
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
                className="group relative research-card-wow rounded-[48px] p-8 transition-all duration-1000 hover:scale-108 glow-effect card-hover-glow motion-safe"
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
                  <div className="research-card p-10 transition-all duration-700 overflow-hidden card-hover-glow motion-safe">
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
