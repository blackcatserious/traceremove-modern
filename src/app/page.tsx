'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Info, Sparkles, MessageSquare, Database, Network } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import ResearchCard from '@/components/ResearchCard';
import InfoCard from '@/components/InfoCard';
import VantaBackground from '@/components/VantaBackground';
import GeometricMesh from '@/components/GeometricMesh';
import DynamicLabBackground from '@/components/DynamicLabBackground';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Premium Background Layers */}
      <VantaBackground variant="hero" className="fixed inset-0 z-[-10]" />
      <GeometricMesh variant="research" density="medium" className="fixed inset-0 z-[-9]" />
      <DynamicLabBackground intensity="medium" className="fixed inset-0 z-[-8]" />
      {/* Hero Section with Premium Glass Effect */}
      <section className="relative overflow-hidden py-32 sm:py-40 lg:py-48">
        {/* Enhanced Premium Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/15 to-purple-900/20 backdrop-blur-md z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,58,138,0.15),transparent_70%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.12),transparent_70%)] z-10" />
        <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(139,92,246,0.08),rgba(59,130,246,0.06),rgba(147,51,234,0.08),rgba(139,92,246,0.08))] z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
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
                className="text-xl text-slate-200 max-w-4xl mx-auto mb-20 typography-premium leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Traceremove is committed to exploring the intersection of artificial intelligence, 
                ethics, and human understanding for responsible innovation.
              </motion.p>
            </motion.div>

            {/* Main Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="grid md:grid-cols-3 gap-10 mb-32"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <FeatureCard
                  icon={Sparkles}
                  title="Our Mission"
                  description="Learn about the guiding principles of our research lab"
                  gradient="from-blue-900/50 to-purple-900/50"
                  borderColor="border-blue-500/30"
                  iconGradient="from-blue-400 to-blue-500"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <FeatureCard
                  icon={Info}
                  title="How to Use This Platform"
                  description="Discover the features and content across multiple sections"
                  gradient="from-purple-900/50 to-violet-900/50"
                  borderColor="border-purple-500/30"
                  iconGradient="from-purple-400 to-purple-500"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <FeatureCard
                  icon={BookOpen}
                  title="Philosophy of AI"
                  description="Understand the ethical and philosophical context of our work"
                  gradient="from-violet-900/50 to-indigo-900/50"
                  borderColor="border-violet-500/30"
                  iconGradient="from-violet-400 to-violet-500"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas Section with Premium Glass Effect */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-slate-900/40 backdrop-blur-md" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.08),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={MessageSquare}
                title="Language Models & Ethics"
                description="Examining the moral considerations surrounding large-scale language models"
                gradient="from-blue-900/50 to-cyan-900/50"
                borderColor="border-blue-500/30"
                iconGradient="from-blue-400 to-cyan-400"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={Database}
                title="Big Data Architectures"
                description="Developing robust AI frameworks for processing and analysis"
                gradient="from-purple-900/50 to-pink-900/50"
                borderColor="border-purple-500/30"
                iconGradient="from-purple-400 to-pink-400"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={Network}
                title="Cognitive Agents"
                description="Creating intelligent AI systems with advanced decision-making capabilities"
                gradient="from-violet-900/50 to-indigo-900/50"
                borderColor="border-violet-500/30"
                iconGradient="from-violet-400 to-indigo-400"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Artur Ziganshin Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
          >
            <InfoCard
              title="About Artur Ziganshin"
              description="Learn about the background and expertise of our principal investigator."
              gradient="from-blue-900/50 to-purple-900/50"
              borderColor="border-blue-500/30"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
