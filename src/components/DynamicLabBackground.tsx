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

    const particleCount = intensity === 'low' ? 30 : intensity === 'medium' ? 50 : 80;

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

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(124, 58, 237, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
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
      
      {/* Additional SVG patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: -6 }}>
        <defs>
          <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
            <polygon
              points="30,2 50,17 50,35 30,50 10,35 10,17"
              fill="none"
              stroke="rgba(124, 58, 237, 0.3)"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="rgba(99, 102, 241, 0.4)" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(124, 58, 237, 0.2)" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(124, 58, 237, 0.2)" strokeWidth="0.5" />
          </pattern>
        </defs>
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#hexPattern)"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#circuitPattern)"
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </svg>

      {/* Animated gradient beams */}
      <div className="absolute inset-0" style={{ zIndex: -5 }}>
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(124, 58, 237, 0.4) 50%, transparent 100%)'
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(99, 102, 241, 0.3) 50%, transparent 100%)'
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        <motion.div
          className="absolute left-0 top-1/3 w-full h-px"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(139, 92, 246, 0.3) 50%, transparent 100%)'
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>
    </div>
  );
}
