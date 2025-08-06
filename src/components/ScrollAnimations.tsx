'use client';

import React from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export function ScrollFadeIn({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  distance = 50 
}: ScrollFadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        scale: 0.95,
        filter: 'blur(4px)',
        ...directionMap[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1,
        filter: 'blur(0px)',
        x: 0, 
        y: 0 
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 150,
        damping: 20
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ 
  from, 
  to, 
  duration = 2, 
  suffix = "",
  className = "" 
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const count = useTransform(
    useScroll().scrollYProgress,
    [0, 1],
    [from, to]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration }}
      >
        {isInView ? Math.round(to) : Math.round(from)}
        {suffix}
      </motion.span>
    </motion.div>
  );
}

interface StaggeredListProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function StaggeredList({ 
  children, 
  className = "",
  staggerDelay = 0.1 
}: StaggeredListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ 
            opacity: 0, 
            y: 30, 
            scale: 0.95,
            rotateX: -5
          }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            rotateX: 0
          } : {}}
          transition={{ 
            duration: 0.6, 
            delay: index * staggerDelay,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple z-50 ${className}`}
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
}

interface MagneticScrollProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticScroll({ 
  children, 
  strength = 0.3,
  className = "" 
}: MagneticScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-50 * strength, 0, 50 * strength]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10 * strength, 0, 10 * strength]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ x, rotateY, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: React.ReactNode;
  amplitude?: number;
  frequency?: number;
  className?: string;
}

export function FloatingElement({ 
  children, 
  amplitude = 10,
  frequency = 2,
  className = "" 
}: FloatingElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      animate={isInView ? {
        y: [0, -amplitude, 0],
        rotateZ: [0, 2, 0, -2, 0],
        scale: [1, 1.02, 1]
      } : {}}
      transition={{
        duration: frequency,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
