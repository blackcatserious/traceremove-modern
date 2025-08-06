'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 20,
    rotateX: -2,
    filter: 'blur(4px)'
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)'
  },
  out: {
    opacity: 0,
    scale: 1.02,
    y: -20,
    rotateX: 2,
    filter: 'blur(4px)'
  }
};

const pageTransition = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 20
};

const loadingVariants = {
  initial: { width: '0%' },
  animate: { width: '100%' },
  exit: { width: '0%' }
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative min-h-screen"
        style={{ perspective: '1200px' }}
      >
        {/* Loading Progress Bar */}
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={loadingVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple z-50"
        />
        
        {/* Page Content with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="stagger-fade-in"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function PageSection({ children, className = "", delay = 0 }: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number; 
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30, rotateX: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 150,
        damping: 20
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function ScrollTriggeredElement({ 
  children, 
  className = "", 
  animation = "fadeInUp",
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "scaleIn" | "rotateIn";
  delay?: number;
}) {
  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -60, rotateY: -15 },
      animate: { opacity: 1, x: 0, rotateY: 0 }
    },
    slideInRight: {
      initial: { opacity: 0, x: 60, rotateY: 15 },
      animate: { opacity: 1, x: 0, rotateY: 0 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8, rotateZ: -5 },
      animate: { opacity: 1, scale: 1, rotateZ: 0 }
    },
    rotateIn: {
      initial: { opacity: 0, rotate: -180, scale: 0.5 },
      animate: { opacity: 1, rotate: 0, scale: 1 }
    }
  };

  return (
    <motion.div
      initial={animations[animation].initial}
      whileInView={animations[animation].animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 180,
        damping: 15
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
