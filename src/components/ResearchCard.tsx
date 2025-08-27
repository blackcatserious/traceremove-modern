'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface ResearchCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  iconGradient: string;
  className?: string;
  href?: string;
}

export default function ResearchCard({
  icon: Icon,
  title,
  description,
  gradient,
  borderColor,
  iconGradient,
  className = "",
  href
}: ResearchCardProps) {
  const Card = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.03, 
        y: -12,
        rotateX: 2,
        rotateY: 2
      }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      className={`relative group cursor-pointer motion-reduce:transform-none motion-reduce:transition-none lab-card-lg lab-card-minh ${className}`}
      style={{ perspective: '1200px' }}
      aria-label={title}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] rounded-3xl backdrop-blur-2xl border border-white/20 shadow-2xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/30 via-accent-lab-purple/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-ai-purple/10 to-accent-lab-purple/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
      <motion.div
        animate={{ 
          background: [
            'linear-gradient(45deg, rgba(124, 58, 237, 0.5), rgba(139, 92, 246, 0.5))',
            'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(124, 58, 237, 0.5))',
            'linear-gradient(225deg, rgba(124, 58, 237, 0.5), rgba(139, 92, 246, 0.5))',
            'linear-gradient(315deg, rgba(139, 92, 246, 0.5), rgba(124, 58, 237, 0.5))'
          ]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
      />
      <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-2xl"></div>
      <div className="relative p-10 text-center lab-card-padding">
        <motion.div
          whileHover={{ 
            scale: 1.15, 
            rotate: [0, -3, 3, 0],
            y: -8
          }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 300,
            damping: 12
          }}
          className="relative mx-auto mb-8 w-24 h-24"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple rounded-3xl shadow-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 rounded-3xl"></div>
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/50 to-accent-lab-purple/50 rounded-3xl blur-lg"
          />
          <div className="relative w-full h-full flex items-center justify-center rounded-3xl">
            <Icon className="w-12 h-12 text-white drop-shadow-xl" />
          </div>
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold lab-card-title text-research-text mb-6 leading-tight"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lab-card-text font-inter leading-relaxed text-base mb-6"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, x: 5 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center space-x-2 text-accent-ai-purple"
        >
          <span className="text-sm font-medium">Explore Research</span>
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: '80%' }}
          transition={{ duration: 0.4 }}
          className="mx-auto mt-6 h-1 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple rounded-full"
        />
      </div>
      <div className="absolute top-6 right-6 w-3 h-3 bg-accent-ai-purple rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-10 right-10 w-1.5 h-1.5 bg-accent-lab-purple rounded-full opacity-50 group-hover:opacity-90 transition-opacity duration-300"></div>
      <div className="absolute bottom-6 left-6 w-2 h-2 bg-accent-lab-purple rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
  return href ? (
    <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ai-purple rounded-3xl">
      {Card}
    </Link>
  ) : Card;
}
