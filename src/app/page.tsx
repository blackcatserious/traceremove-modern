'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Info, Sparkles, MessageSquare, Database, Network } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import ResearchCard from '@/components/ResearchCard';
import InfoCard from '@/components/InfoCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.1),transparent_50%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.08),transparent_50%)] z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            {/* Platform Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-purple-300" />
                <span className="text-white/90 font-medium text-sm tracking-wide">
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
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-ibm-sans">
                Advancing AI for a<br />
                Better Future
              </h1>
              
              <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-16 font-inter">
                Traceremove is committed to exploring the intersection of artificial intelligence, 
                ethics, and human understanding for responsible innovation.
              </p>
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
              />
              
              <FeatureCard
                icon={Info}
                title="How to Use This Platform"
                description="Discover the features and content across multiple sections"
                gradient="from-purple-900/40 to-violet-900/40"
                borderColor="border-purple-500/20"
                iconGradient="from-purple-500 to-purple-600"
              />
              
              <FeatureCard
                icon={BookOpen}
                title="Philosophy of AI"
                description="Understand the ethical and philosophical context of our work"
                gradient="from-violet-900/40 to-indigo-900/40"
                borderColor="border-violet-500/20"
                iconGradient="from-violet-500 to-violet-600"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-ibm-sans">
              Research Areas
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-inter">
              Focusing on academic rigor and ethical integrity to build transparent and interpretable AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ResearchCard
              icon={MessageSquare}
              title="Language Models & Ethics"
              description="Examining the moral considerations surrounding large-scale language models"
              gradient="from-blue-900/40 to-cyan-900/40"
              borderColor="border-blue-500/20"
              iconGradient="from-blue-500 to-cyan-500"
            />
            
            <ResearchCard
              icon={Database}
              title="Big Data Architectures"
              description="Developing robust AI frameworks for processing and analysis"
              gradient="from-purple-900/40 to-pink-900/40"
              borderColor="border-purple-500/20"
              iconGradient="from-purple-500 to-pink-500"
            />
            
            <ResearchCard
              icon={Network}
              title="Cognitive Agents"
              description="Creating intelligent AI systems with advanced decision-making capabilities"
              gradient="from-violet-900/40 to-indigo-900/40"
              borderColor="border-violet-500/20"
              iconGradient="from-violet-500 to-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* About Artur Ziganshin Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfoCard
            title="About Artur Ziganshin"
            description="Learn about the background and expertise of our principal investigator."
            gradient="from-blue-900/40 to-purple-900/40"
            borderColor="border-blue-500/20"
          />
        </div>
      </section>
    </div>
  );
}
