'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Scale, Eye, Bot, Zap, CheckCircle, Star, Users, Clock, Mail, User, MessageSquare, Send, AlertCircle, Loader2, Sparkles, Info, BookOpen, Database, Network } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import ResearchCard from '@/components/ResearchCard';
import InfoCard from '@/components/InfoCard';
import PremiumButton from '@/components/PremiumButton';
import { ScrollFadeIn, StaggeredList, ScrollProgress, Parallax, FloatingElement } from '@/components/ScrollAnimations';

export default function Home() {
  const [auditFormData, setAuditFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [auditFormStatus, setAuditFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [auditErrors, setAuditErrors] = useState<Record<string, string>>({});

  const validateAuditForm = () => {
    const newErrors: Record<string, string> = {};

    if (!auditFormData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!auditFormData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(auditFormData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!auditFormData.website.trim()) {
      newErrors.website = 'Website URL is required';
    }

    setAuditErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateAuditForm()) {
      return;
    }

    setAuditFormStatus('loading');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAuditFormStatus('success');
      setAuditFormData({ name: '', email: '', website: '', message: '' });
      setTimeout(() => setAuditFormStatus('idle'), 5000);
    } catch {
      setAuditFormStatus('error');
      setTimeout(() => setAuditFormStatus('idle'), 5000);
    }
  };

  const handleAuditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAuditFormData(prev => ({ ...prev, [name]: value }));
    
    if (auditErrors[name]) {
      setAuditErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      
      {/* Hero Section with Premium Glass Effect */}
      <section className="glass-card-premium relative overflow-hidden py-16 sm:py-20 lg:py-24 mx-6 lg:mx-8 mb-8">
        
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            {/* Platform Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="mb-12"
            >
              <motion.div 
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full glass-card-premium border border-accent-ai-purple/40 shadow-ai-glow"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-purple-300" />
                </motion.div>
                <span className="text-white/95 font-semibold text-sm tracking-wide typography-premium">
                  AI Research Platform
                </span>
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-12"
            >
              <motion.h1 
                className="hero-title text-white mb-10 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block"
                >
                  Advancing AI for a
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="block bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 bg-clip-text text-transparent"
                >
                  Better Future
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-slate-200 max-w-5xl mx-auto mb-20 typography-premium leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                TraceRemove is Artur Ziganshin&apos;s advanced AI research laboratory and platform, dedicated to exploring the intersection of artificial intelligence, 
                ethics, and human understanding. Our mission is to advance responsible AI innovation through rigorous academic research, 
                ethical AI development, and cutting-edge machine learning solutions. We focus on creating transparent, interpretable AI systems 
                that respect human dignity while pushing the boundaries of what&apos;s possible in artificial intelligence.
              </motion.p>
            </motion.div>

            {/* AI Research Laboratory Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mb-20"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="text-center p-6 glass-card border border-white/10 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-slate-300 text-sm">Research Projects</div>
                </div>
                <div className="text-center p-6 glass-card border border-white/10 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-slate-300 text-sm">Publications</div>
                </div>
                <div className="text-center p-6 glass-card border border-white/10 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-2">5+</div>
                  <div className="text-slate-300 text-sm">AI Tools Developed</div>
                </div>
                <div className="text-center p-6 glass-card border border-white/10 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-2">3+</div>
                  <div className="text-slate-300 text-sm">Years of Research</div>
                </div>
              </div>
            </motion.div>

            {/* Main Feature Cards */}
            <ScrollFadeIn delay={1.4} direction="up" distance={40}>
              <div className="grid md:grid-cols-3 gap-10 mb-32">
                <StaggeredList staggerDelay={0.2}>
                  {[
                    <FloatingElement key="mission" amplitude={8} frequency={3}>
                      <FeatureCard
                        icon={Sparkles}
                        title="Our Mission"
                        description="Learn about the guiding principles of our research lab"
                        gradient="from-blue-900/50 to-purple-900/50"
                        borderColor="border-blue-500/30"
                        iconGradient="from-blue-400 to-blue-500"
                      />
                    </FloatingElement>,
                    
                    <FloatingElement key="platform" amplitude={10} frequency={2.5}>
                      <FeatureCard
                        icon={Info}
                        title="How to Use This Platform"
                        description="Discover the features and content across multiple sections"
                        gradient="from-purple-900/50 to-violet-900/50"
                        borderColor="border-purple-500/30"
                        iconGradient="from-purple-400 to-purple-500"
                      />
                    </FloatingElement>,
                    
                    <FloatingElement key="philosophy" amplitude={12} frequency={2.8}>
                      <FeatureCard
                        icon={BookOpen}
                        title="Philosophy of AI"
                        description="Understand the ethical and philosophical context of our work"
                        gradient="from-violet-900/50 to-indigo-900/50"
                        borderColor="border-violet-500/30"
                        iconGradient="from-violet-400 to-violet-500"
                      />
                    </FloatingElement>
                  ]}
                </StaggeredList>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Research Areas Section with Premium Glass Effect */}
      <section className="glass-card-premium relative py-16 mx-6 lg:mx-8">
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="section-title text-white mb-8 typography-premium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Research Areas
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-4xl mx-auto typography-premium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Focusing on academic rigor and ethical integrity to build transparent and interpretable AI systems.
            </motion.p>
          </motion.div>

          <ScrollFadeIn delay={0.6} direction="up" distance={50}>
            <div className="grid md:grid-cols-3 gap-10">
              <StaggeredList staggerDelay={0.2}>
                {[
                  <Parallax key="language-models" speed={0.3}>
                    <ResearchCard
                      icon={MessageSquare}
                      title="Language Models & Ethics"
                      description="Examining the moral considerations surrounding large-scale language models"
                      gradient="from-blue-900/50 to-cyan-900/50"
                      borderColor="border-blue-500/30"
                      iconGradient="from-blue-400 to-cyan-400"
                    />
                  </Parallax>,
                  
                  <Parallax key="big-data" speed={0.4}>
                    <ResearchCard
                      icon={Database}
                      title="Big Data Architectures"
                      description="Developing robust AI frameworks for processing and analysis"
                      gradient="from-purple-900/50 to-pink-900/50"
                      borderColor="border-purple-500/30"
                      iconGradient="from-purple-400 to-pink-400"
                    />
                  </Parallax>,
                  
                  <Parallax key="cognitive-agents" speed={0.2}>
                    <ResearchCard
                      icon={Network}
                      title="Cognitive Agents"
                      description="Creating intelligent AI systems with advanced decision-making capabilities"
                      gradient="from-violet-900/50 to-indigo-900/50"
                      borderColor="border-violet-500/30"
                      iconGradient="from-violet-400 to-indigo-400"
                    />
                  </Parallax>
                ]}
              </StaggeredList>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* About Artur Ziganshin Section */}
      <section className="glass-card-premium relative py-16 mx-6 lg:mx-8 mb-8">
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="section-title text-white mb-8 typography-premium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About Our Research
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-4xl mx-auto typography-premium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Meet our principal investigator and explore the academic foundation behind our AI research initiatives.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            <InfoCard
              title="About Artur Ziganshin"
              description="Learn about the background and expertise of our principal investigator and research philosophy."
              gradient="from-blue-900/50 to-purple-900/50"
              borderColor="border-blue-500/30"
            />
            <InfoCard
              title="Academic Publications"
              description="Explore our peer-reviewed research papers and academic contributions to AI ethics."
              gradient="from-purple-900/50 to-violet-900/50"
              borderColor="border-purple-500/30"
            />
            <InfoCard
              title="Research Philosophy"
              description="Understand our approach to responsible AI development and ethical considerations."
              gradient="from-violet-900/50 to-indigo-900/50"
              borderColor="border-violet-500/30"
            />
          </motion.div>
        </div>
      </section>

      {/* Tools & Projects Section */}
      <section className="glass-card-premium relative py-16 mx-6 lg:mx-8 mb-8">
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="section-title text-white mb-8 typography-premium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Tools & Projects
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-4xl mx-auto typography-premium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Interactive tools and research projects demonstrating practical applications of our AI research.
            </motion.p>
          </motion.div>

          <ScrollFadeIn delay={0.6} direction="up" distance={50}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StaggeredList staggerDelay={0.2}>
                {[
                  <FloatingElement key="dashboard" amplitude={6} frequency={3.2}>
                    <InfoCard
                      title="AI Research Dashboard"
                      description="Interactive dashboard for exploring AI research metrics and trends."
                      gradient="from-blue-900/50 to-cyan-900/50"
                      borderColor="border-blue-500/30"
                    />
                  </FloatingElement>,
                  
                  <FloatingElement key="comparison" amplitude={8} frequency={2.8}>
                    <InfoCard
                      title="Language Model Comparison"
                      description="Compare different language models across various evaluation metrics."
                      gradient="from-purple-900/50 to-pink-900/50"
                      borderColor="border-purple-500/30"
                    />
                  </FloatingElement>,
                  
                  <FloatingElement key="privacy" amplitude={7} frequency={3.5}>
                    <InfoCard
                      title="Privacy Score Calculator"
                      description="Evaluate the privacy implications of AI systems and data processing."
                      gradient="from-violet-900/50 to-indigo-900/50"
                      borderColor="border-violet-500/30"
                    />
                  </FloatingElement>,

                  <FloatingElement key="search" amplitude={9} frequency={2.6}>
                    <InfoCard
                      title="Semantic Search Tool"
                      description="Advanced semantic search capabilities for research papers and documents."
                      gradient="from-indigo-900/50 to-blue-900/50"
                      borderColor="border-indigo-500/30"
                    />
                  </FloatingElement>
                ]}
              </StaggeredList>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Articles & Publications Section */}
      <section className="glass-card-premium relative py-16 mx-6 lg:mx-8 mb-8">
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="section-title text-white mb-8 typography-premium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Latest Articles
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-4xl mx-auto typography-premium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Recent publications and articles exploring the ethical dimensions of artificial intelligence.
            </motion.p>
          </motion.div>

          <ScrollFadeIn delay={0.6} direction="up" distance={50}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StaggeredList staggerDelay={0.25}>
                {[
                  <Parallax key="philosophy" speed={0.2}>
                    <FloatingElement amplitude={5} frequency={4}>
                      <ResearchCard
                        icon={BookOpen}
                        title="Philosophy of Machine Agency"
                        description="Exploring the philosophical foundations of autonomous AI systems and decision-making."
                        gradient="from-blue-900/50 to-cyan-900/50"
                        borderColor="border-blue-500/30"
                        iconGradient="from-blue-400 to-cyan-400"
                      />
                    </FloatingElement>
                  </Parallax>,
                  
                  <Parallax key="dignity" speed={0.35}>
                    <FloatingElement amplitude={7} frequency={3.5}>
                      <ResearchCard
                        icon={Shield}
                        title="AI & Human Dignity"
                        description="Examining how AI systems can respect and enhance human dignity in their operations."
                        gradient="from-purple-900/50 to-pink-900/50"
                        borderColor="border-purple-500/30"
                        iconGradient="from-purple-400 to-pink-400"
                      />
                    </FloatingElement>
                  </Parallax>,
                  
                  <Parallax key="epistemic" speed={0.15}>
                    <FloatingElement amplitude={6} frequency={3.8}>
                      <ResearchCard
                        icon={Scale}
                        title="Epistemic Risks in AI"
                        description="Understanding and mitigating knowledge-related risks in artificial intelligence systems."
                        gradient="from-violet-900/50 to-indigo-900/50"
                        borderColor="border-violet-500/30"
                        iconGradient="from-violet-400 to-indigo-400"
                      />
                    </FloatingElement>
                  </Parallax>
                ]}
              </StaggeredList>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
