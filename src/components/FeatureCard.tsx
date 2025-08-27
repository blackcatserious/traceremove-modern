'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  iconGradient: string;
  className?: string;
  href?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
  borderColor,
  iconGradient,
  className = "",
  href
}: FeatureCardProps) {
  const Card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02, 
        y: -8,
        rotateX: 5,
        rotateY: 5
      }}
      transition={{ 
        duration: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className={`relative group cursor-pointer motion-reduce:transform-none motion-reduce:transition-none ${className}`}
      style={{ perspective: '1000px' }}
      aria-label={title}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/20 via-accent-lab-purple/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-ai-purple/5 to-accent-lab-purple/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple/50 via-accent-lab-purple/50 to-accent-ai-purple/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl"></div>
      <div className="relative p-8 text-center">
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
          <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple rounded-2xl shadow-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 rounded-2xl"></div>
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
          <div className="relative w-full h-full flex items-center justify-center rounded-2xl">
            <Icon className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white mb-4 font-ibm-sans tracking-tight"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-300 font-inter leading-relaxed text-sm"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: '60%' }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-6 h-0.5 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full"
        />
      </div>
      <div className="absolute top-4 right-4 w-2 h-2 bg-accent-ai-purple rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-lab-purple rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
    </motion.div>
  );
  return href ? (
    <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ai-purple rounded-3xl">
      {Card}
    </Link>
  ) : Card;
}
