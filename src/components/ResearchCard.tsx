'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ResearchCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  iconGradient: string;
  className?: string;
}

export default function ResearchCard({
  icon: Icon,
  title,
  description,
  gradient,
  borderColor,
  iconGradient,
  className = ""
}: ResearchCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className={`glass-card-premium backdrop-blur-sm border ${borderColor} rounded-2xl p-8 text-center shadow-ai-glow hover:shadow-hero-glow transition-all duration-700 group ${className}`}
    >
      <div className="relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        
        <div className={`relative w-16 h-16 bg-gradient-to-br ${iconGradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="relative text-2xl font-bold text-white mb-4 font-ibm-sans">{title}</h3>
        <p className="relative text-slate-300 font-inter">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
