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
      initial={{ opacity: 0, y: 30, scale: 0.95, rotateX: -8 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      whileHover={{ 
        scale: 1.04, 
        y: -12,
        rotateX: 6,
        rotateY: 4,
        rotateZ: 0.5
      }}
      whileTap={{ scale: 0.98, y: -3 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 280,
        damping: 18
      }}
      className={`relative group cursor-pointer card-hover-float magnetic-hover gpu-accelerated ${className}`}
      style={{ perspective: '1000px' }}
    >
      {/* Multi-layered Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl morph-glow"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/20 via-accent-lab-purple/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-ai-purple/5 to-accent-lab-purple/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple/50 via-accent-lab-purple/50 to-accent-ai-purple/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl"></div>
      
      {/* Content Container */}
      <div className="relative p-8 text-center">
        {/* Floating Icon with Advanced Effects */}
        <motion.div
          whileHover={{ 
            scale: 1.1, 
            rotate: [0, -5, 5, 0],
            y: -5
          }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
          className="relative mx-auto mb-6 w-20 h-20"
        >
          {/* Icon Background with Multiple Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple rounded-2xl shadow-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-2xl"></div>
          
          {/* Animated Glow Ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/40 to-accent-lab-purple/40 rounded-2xl blur-md"
          />
          
          {/* Icon Container */}
          <div className="relative w-full h-full flex items-center justify-center rounded-2xl">
            <Icon className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
        </motion.div>

        {/* Enhanced Typography */}
        <motion.h3 
          initial={{ opacity: 0, y: 15, rotateX: -8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          whileHover={{ scale: 1.02, y: -1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
          className="text-2xl font-bold text-white mb-4 typography-premium tracking-tight text-shine"
        >
          {title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-300 typography-premium leading-relaxed text-sm"
        >
          {description}
        </motion.p>

        {/* Subtle Interaction Indicator */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: '60%' }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-6 h-0.5 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full"
        />
      </div>

      {/* Corner Accent Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-accent-ai-purple rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-lab-purple rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
    </motion.div>
  );
}
