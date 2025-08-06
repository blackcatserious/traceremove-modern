'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  className?: string;
  href?: string;
}

export default function InfoCard({
  title,
  description,
  gradient,
  borderColor,
  className = "",
  href
}: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateX: -15, y: 50 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
      whileHover={{ 
        scale: 1.05, 
        y: -15,
        rotateX: 3,
        rotateY: 5,
        rotateZ: 1
      }}
      whileTap={{ scale: 0.98, rotateX: -2 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      className={`relative group cursor-pointer card-hover-float magnetic-hover gpu-accelerated ${className}`}
      style={{ perspective: '1500px' }}
    >
      {/* Sophisticated Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.10] to-white/[0.05] rounded-4xl backdrop-blur-3xl border border-white/25 shadow-3xl morph-glow"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/25 via-accent-lab-purple/15 to-transparent rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-ai-purple/8 to-accent-lab-purple/15 rounded-4xl blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-600"></div>
      
      {/* Animated Mesh Overlay */}
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '100px 100px'
        }}
      />
      
      <div className="absolute inset-[1px] rounded-4xl bg-gradient-to-br from-slate-900/98 via-slate-800/95 to-slate-900/98 backdrop-blur-3xl"></div>
      
      {/* Content Container */}
      <div className="relative p-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Floating Sparkle Indicator */}
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-full mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>

            {/* Enhanced Info Typography */}
            <motion.h2 
              initial={{ opacity: 0, x: -30, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 200 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6 typography-premium tracking-tight leading-tight text-shine"
            >
              {title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 typography-premium leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Action Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center space-x-3 text-accent-ai-purple"
            >
              <span className="text-sm font-medium tracking-wide">Learn More</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Interactive Arrow with Advanced Animation */}
          <motion.div
            whileHover={{ 
              scale: 1.2, 
              rotate: -15,
              x: 10,
              y: -10
            }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              stiffness: 400,
              damping: 15
            }}
            className="ml-12 relative"
          >
            {/* Arrow Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/50 to-accent-lab-purple/50 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Arrow Container */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple rounded-full flex items-center justify-center shadow-2xl">
              <ArrowRight className="w-8 h-8 text-white drop-shadow-lg" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Progress Line */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple rounded-full"
        />
      </div>

      {/* Ambient Corner Elements */}
      <div className="absolute top-8 right-8 w-4 h-4 bg-accent-ai-purple rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-400"></div>
      <div className="absolute top-12 right-12 w-2 h-2 bg-accent-lab-purple rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-400"></div>
      <div className="absolute bottom-8 left-8 w-3 h-3 bg-accent-lab-purple rounded-full opacity-50 group-hover:opacity-90 transition-opacity duration-400"></div>
    </motion.div>
  );
}
