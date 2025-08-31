'use client';
import dynamic from 'next/dynamic';
import AskTraceremoveAI from '@/components/AskTraceremoveAI';


import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, Info, Sparkles, MessageSquare, Database, Network } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import ResearchCard from '@/components/ResearchCard';
import InfoCard from '@/components/InfoCard';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Premium Glass Effect */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 decorative-blobs decorative-ai-rich decorative-ai-motion">
        {/* Premium Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-blue-900/5 to-purple-900/10 backdrop-blur-sm z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.05),transparent_60%)] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.04),transparent_60%)] z-10 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 decorative-content">
          <div className="text-center">
            {/* Platform Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full glass-card-premium border border-accent-ai-purple/30 shadow-ai-glow">
                <Sparkles className="w-5 h-5 text-purple-300" />
                <span className="text-white/90 font-medium text-sm tracking-wide typography-premium">
                  AI Research Platform
                </span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="hero-title text-research-text mb-8 typography-premium">
                Advancing AI for a<br />
                Better Future
              </h1>
              
              <p className="text-xl text-research-text-secondary max-w-3xl mx-auto mb-16 typography-premium leading-relaxed">
                Traceremove is committed to exploring the intersection of artificial intelligence, 
                ethics, and human understanding for responsible innovation.
              </p>
            <div className="hidden md:grid grid-cols-3 gap-4 max-w-4xl mx-auto mb-10 opacity-90">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image src="/images/lab/lab-hero-1.svg" alt="AI Lab workspace gradient" fill sizes="(max-width: 768px) 100vw, 33vw" priority={false} className="object-cover" />
              </div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image src="/images/lab/lab-setup-analytics.svg" alt="Analytics setup abstract" fill sizes="(max-width: 768px) 100vw, 33vw" priority={false} className="object-cover" />
              </div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image src="/images/lab/lab-whiteboard-research.svg" alt="Research whiteboard abstract" fill sizes="(max-width: 768px) 100vw, 33vw" priority={false} className="object-cover" />
              </div>
            </div>

            </motion.div>

            {/* Main Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-8 mb-24"
            >
              <FeatureCard
                icon={Sparkles}
                title="Our Mission"
                description="Learn about the guiding principles of our research lab"
                gradient="from-blue-900/40 to-purple-900/40"
                borderColor="border-blue-500/20"
                iconGradient="from-blue-500 to-blue-600"
                href="/about"
              />
              
              <FeatureCard
                icon={Info}
                title="How to Use This Platform"
                description="Discover the features and content across multiple sections"
                gradient="from-purple-900/40 to-violet-900/40"
                borderColor="border-purple-500/20"
                iconGradient="from-purple-500 to-purple-600"
                href="/site-map"
              />
              
              <FeatureCard
                icon={BookOpen}
                title="Philosophy of AI"
                description="Understand the ethical and philosophical context of our work"
                gradient="from-violet-900/40 to-indigo-900/40"
                borderColor="border-violet-500/20"
                iconGradient="from-violet-500 to-violet-600"
                href="/articles"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas Section with Premium Glass Effect */}
      <section className="relative py-24 decorative-blobs decorative-ai">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/30 backdrop-blur-sm pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 decorative-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-research-text mb-6 typography-premium">
              Research Areas
            </h2>
            <p className="text-xl text-research-text-secondary max-w-4xl mx-auto typography-premium leading-relaxed">
              Focusing on academic rigor and ethical integrity to build transparent and interpretable AI systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={MessageSquare}
                title="Language Models & Ethics"
                description="Examining the moral considerations surrounding large-scale language models"
                gradient="from-blue-900/40 to-cyan-900/40"
                borderColor="border-blue-500/20"
                iconGradient="from-blue-500 to-cyan-500"
                href="/research/human-centered-ai"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={Database}
                title="Big Data Architectures"
                description="Developing robust AI frameworks for processing and analysis"
                gradient="from-purple-900/40 to-pink-900/40"
                borderColor="border-purple-500/20"
                iconGradient="from-purple-500 to-pink-500"
                href="/research/big-data-interpretability"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={Network}
                title="Cognitive Agents"
                description="Creating intelligent AI systems with advanced decision-making capabilities"
                gradient="from-violet-900/40 to-indigo-900/40"
                borderColor="border-violet-500/20"
                iconGradient="from-violet-500 to-indigo-500"
                href="/research/agentic-systems-tool-use"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Artur Ziganshin Section */}
      <section className="relative py-24 decorative-blobs decorative-ai">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 decorative-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InfoCard
              title="About Artur Ziganshin"
              description="Learn about the background and expertise of our principal investigator."
              gradient="from-blue-900/40 to-purple-900/40"
              borderColor="border-blue-500/20"
              href="/about"
            />
          </motion.div>
        </div>
      </section>
      {process.env.NEXT_PUBLIC_ASSISTANT_WIDGET !== 'off' && <AskTraceremoveAI compact />}
    </div>
  );
}
