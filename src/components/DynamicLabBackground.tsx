'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface DynamicLabBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function DynamicLabBackground({ intensity = 'medium', className = '' }: DynamicLabBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const maxWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
      const maxHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
      
      canvas.width = maxWidth;
      canvas.height = maxHeight;
      
      canvas.style.width = `${maxWidth}px`;
      canvas.style.height = `${maxHeight}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = [
      'rgba(124, 58, 237, 0.6)',
      'rgba(99, 102, 241, 0.5)',
      'rgba(139, 92, 246, 0.4)',
      'rgba(168, 85, 247, 0.3)'
    ];

    const particleCount = intensity === 'low' ? 40 : intensity === 'medium' ? 70 : 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              const opacity = 0.15 * (1 - distance / 120);
              const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y);
              gradient.addColorStop(0, `rgba(124, 58, 237, ${opacity})`);
              gradient.addColorStop(0.5, `rgba(99, 102, 241, ${opacity * 1.2})`);
              gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity})`);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        });
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: -7 }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ 
          mixBlendMode: 'screen',
          maxWidth: '100vw',
          maxHeight: '100vh',
          width: '100vw',
          height: '100vh',
          left: 0,
          top: 0
        }}
      />
      
      {/* Enhanced SVG patterns with bold gradients */}
      <svg className="absolute inset-0 w-full h-full opacity-15" style={{ zIndex: -6 }}>
        <defs>
          <radialGradient id="meshGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0.4)" />
            <stop offset="30%" stopColor="rgba(99, 102, 241, 0.3)" />
            <stop offset="60%" stopColor="rgba(139, 92, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(30, 58, 138, 0.1)" />
          </radialGradient>
          
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(124, 58, 237, 0.6)" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
          </linearGradient>
          
          <pattern id="hexPattern" x="0" y="0" width="80" height="69" patternUnits="userSpaceOnUse">
            <polygon
              points="40,2 65,22 65,45 40,65 15,45 15,22"
              fill="none"
              stroke="url(#connectionGradient)"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <circle cx="40" cy="33" r="1.5" fill="rgba(124, 58, 237, 0.5)" />
          </pattern>
          
          <pattern id="neuralPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="3" fill="rgba(99, 102, 241, 0.6)" />
            <line x1="60" y1="0" x2="60" y2="120" stroke="url(#connectionGradient)" strokeWidth="0.6" opacity="0.4" />
            <line x1="0" y1="60" x2="120" y2="60" stroke="url(#connectionGradient)" strokeWidth="0.6" opacity="0.4" />
            <line x1="15" y1="15" x2="105" y2="105" stroke="url(#connectionGradient)" strokeWidth="0.4" opacity="0.3" />
            <line x1="105" y1="15" x2="15" y2="105" stroke="url(#connectionGradient)" strokeWidth="0.4" opacity="0.3" />
          </pattern>
        </defs>
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#meshGradient)"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#hexPattern)"
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#neuralPattern)"
          animate={{ opacity: [0.08, 0.25, 0.08] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </svg>

      {/* Enhanced animated gradient beams with bold effects */}
      <div className="absolute inset-0" style={{ zIndex: -5 }}>
        <motion.div
          className="absolute top-0 left-1/4 w-0.5 h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(124, 58, 237, 0.6) 30%, rgba(99, 102, 241, 0.8) 50%, rgba(139, 92, 246, 0.6) 70%, transparent 100%)',
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.4), 0 0 40px rgba(99, 102, 241, 0.2)'
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-0 right-1/3 w-0.5 h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(99, 102, 241, 0.5) 30%, rgba(139, 92, 246, 0.7) 50%, rgba(168, 85, 247, 0.5) 70%, transparent 100%)',
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.3), 0 0 30px rgba(139, 92, 246, 0.2)'
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        <motion.div
          className="absolute left-0 top-1/3 w-full h-0.5"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(139, 92, 246, 0.4) 30%, rgba(124, 58, 237, 0.6) 50%, rgba(99, 102, 241, 0.4) 70%, transparent 100%)',
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.3), 0 0 20px rgba(124, 58, 237, 0.2)'
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
        />
        
        <motion.div
          className="absolute top-0 left-2/3 w-0.5 h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(30, 58, 138, 0.5) 40%, rgba(59, 130, 246, 0.7) 50%, rgba(147, 197, 253, 0.5) 60%, transparent 100%)',
            boxShadow: '0 0 12px rgba(30, 58, 138, 0.3), 0 0 25px rgba(59, 130, 246, 0.2)'
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          className="absolute left-0 top-2/3 w-full h-0.5"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(168, 85, 247, 0.4) 25%, rgba(139, 92, 246, 0.6) 50%, rgba(99, 102, 241, 0.4) 75%, transparent 100%)',
            boxShadow: '0 0 8px rgba(168, 85, 247, 0.3), 0 0 16px rgba(139, 92, 246, 0.2)'
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 9
          }}
        />
      </div>
    </div>
  );
}
