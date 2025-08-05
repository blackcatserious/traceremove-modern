'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  className?: string;
}

export default function InfoCard({
  title,
  description,
  gradient,
  borderColor,
  className = ""
}: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`glass-card-premium backdrop-blur-sm border ${borderColor} rounded-2xl p-12 text-center shadow-ai-glow hover:shadow-hero-glow transition-all duration-700 group ${className}`}
    >
      <div className="relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        
        <div className="relative flex items-center justify-between">
          <div className="text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-ibm-sans">
              {title}
            </h2>
            <p className="text-xl text-slate-300 font-inter">
              {description}
            </p>
          </div>
          <div className="ml-8">
            <ArrowRight className="w-8 h-8 text-blue-300 group-hover:text-accent-ai-purple transition-colors duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
