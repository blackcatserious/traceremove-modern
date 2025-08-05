'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VantaBackgroundProps {
  variant?: 'default' | 'hero' | 'research' | 'about';
  className?: string;
}

interface VantaEffect {
  destroy: () => void;
  setOptions?: (options: Record<string, unknown>) => void;
}

interface VantaModule {
  default: (options: {
    el: HTMLElement;
    THREE: unknown;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    scale: number;
    scaleMobile: number;
    color: number;
    color2?: number;
    backgroundColor: number;
    points: number;
    maxDistance: number;
    spacing: number;
    showDots?: boolean;
  }) => VantaEffect;
}

const variantConfigs = {
  default: {
    color: 0x7c3aed,
    color2: 0x8b5cf6,
    backgroundColor: 0x0a0612,
    points: 20,
    maxDistance: 25,
    spacing: 18,
    showDots: true
  },
  hero: {
    color: 0x6366f1,
    color2: 0x8b5cf6,
    backgroundColor: 0x0f0a1a,
    points: 25,
    maxDistance: 30,
    spacing: 16,
    showDots: true
  },
  research: {
    color: 0x3b82f6,
    color2: 0x6366f1,
    backgroundColor: 0x0c1222,
    points: 18,
    maxDistance: 28,
    spacing: 20,
    showDots: false
  },
  about: {
    color: 0x8b5cf6,
    color2: 0xa855f7,
    backgroundColor: 0x1a0b2e,
    points: 22,
    maxDistance: 26,
    spacing: 17,
    showDots: true
  }
};

export default function VantaBackground({ variant = 'default', className = '' }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const config = variantConfigs[variant];

  useEffect(() => {
    const loadVanta = async () => {
      try {
        const THREE = await import('three');
        const VANTA = await import('vanta/dist/vanta.net.min.js') as VantaModule;
        
        if (vantaRef.current && !vantaEffect.current) {
          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 0.8,
            ...config
          });
          setIsLoaded(true);
        }
      } catch (error) {
        console.warn('Vanta.js failed to load, falling back to CSS animations:', error);
        setIsLoaded(false);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [variant]);

  return (
    <>
      {/* Enhanced Vanta.js Background */}
      <div 
        ref={vantaRef}
        className={`vanta-background ${className}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -10,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      />

      {/* Dynamic Gradient Overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.6 : 0.8 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -9 }}
      >
        {/* Primary Gradient Layer */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
              linear-gradient(135deg, rgba(15, 10, 26, 0.9) 0%, rgba(30, 27, 75, 0.8) 25%, rgba(49, 46, 129, 0.7) 50%, rgba(67, 56, 202, 0.6) 75%, rgba(124, 58, 237, 0.5) 100%)
            `
          }}
        />

        {/* Secondary Animated Gradient */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
              'radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)',
              'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 60%)',
              'radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />

        {/* Mesh Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'meshMove 20s linear infinite'
          }}
        />
      </motion.div>

      {/* Floating Orbs - Constrained within viewport */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -8 }}>
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full"
          style={{
            top: '20%',
            left: '15%',
            maxWidth: 'calc(100vw - 10rem)',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)',
            filter: 'blur(20px)'
          }}
        />
        
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full"
          style={{
            top: '70%',
            right: '20%',
            maxWidth: 'calc(100vw - 8rem)',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(124, 58, 237, 0.15) 50%, transparent 100%)',
            filter: 'blur(15px)'
          }}
        />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            scale: [1, 1.05, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full"
          style={{
            top: '45%',
            right: '15%',
            maxWidth: 'calc(100vw - 6rem)',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(168, 85, 247, 0.18) 50%, transparent 100%)',
            filter: 'blur(12px)'
          }}
        />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes meshMove {
          0% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </>
  );
}
