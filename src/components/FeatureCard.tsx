'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  iconGradient: string;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
  borderColor,
  iconGradient,
  className = ""
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className={`bg-gradient-to-br ${gradient} backdrop-blur-sm border ${borderColor} rounded-2xl p-8 text-center ${className}`}
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${iconGradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 font-ibm-sans">{title}</h3>
      <p className="text-slate-300 font-inter">
        {description}
      </p>
    </motion.div>
  );
}
