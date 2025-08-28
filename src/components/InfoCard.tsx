'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

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
  const Card = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.01, 
        y: -6,
        rotateX: 1,
        rotateY: 1
      }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 150,
        damping: 20
      }}
      className={`relative group cursor-pointer motion-reduce:transform-none motion-reduce:transition-none lab-card-lg lab-card-minh overflow-visible ${className}`}
      style={{ perspective: '1500px' }}
      aria-label={title}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.10] to-white/[0.05] rounded-4xl backdrop-blur-3xl border border-white/25 shadow-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/25 via-accent-lab-purple/15 to-transparent rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-ai-purple/8 to-accent-lab-purple/15 rounded-4xl blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-600"></div>
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
      <div className="relative p-12 pr-16 lab-card-padding">
        <div className="flex items-center justify-between">
          <div className="flex-1">
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
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold lab-card-title text-research-text mb-6 leading-tight"
            >
              {title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl lab-card-text font-inter leading-relaxed"
            >
              {description}
            </motion.p>
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
          <motion.div
            whileHover={{ 
              scale: 1.06
            }}
            transition={{ 
              duration: 0.25,
              type: "spring",
              stiffness: 350,
              damping: 20
            }}
            className="ml-12 relative shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/50 to-accent-lab-purple/50 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple rounded-full flex items-center justify-center shadow-2xl">
              <ArrowRight className="w-8 h-8 text-white drop-shadow-lg" />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple rounded-full"
        />
      </div>
      <div className="absolute top-8 right-8 w-4 h-4 bg-accent-ai-purple rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-400"></div>
      <div className="absolute top-12 right-12 w-2 h-2 bg-accent-lab-purple rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-400"></div>
      <div className="absolute bottom-8 left-8 w-3 h-3 bg-accent-lab-purple rounded-full opacity-50 group-hover:opacity-90 transition-opacity duration-400"></div>
    </motion.div>
  );
  return href ? (
    <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ai-purple rounded-4xl">
      {Card}
    </Link>
  ) : Card;
}
