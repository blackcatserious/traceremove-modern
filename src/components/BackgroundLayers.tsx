'use client';

import { useEffect, useRef } from 'react';

interface BackgroundLayersProps {
  variant?: 'default' | 'hero' | 'research' | 'about';
  className?: string;
}

export default function BackgroundLayers({ variant = 'default', className = '' }: BackgroundLayersProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const particleCanvas = particleCanvasRef.current;
    if (!canvas || !particleCanvas) return;

    const ctx = canvas.getContext('2d');
    const particleCtx = particleCanvas.getContext('2d');
    if (!ctx || !particleCtx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCanvas.width = window.innerWidth;
      particleCanvas.height = window.innerHeight;
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
      connections: number[];
    }> = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: ['#1e3a8a', '#7c3aed', '#8b5cf6', '#3b82f6', '#6366f1'][Math.floor(Math.random() * 5)],
        connections: []
      });
    }

    const animateParticles = () => {
      particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > particleCanvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > particleCanvas.height) particle.vy *= -1;
        
        particleCtx.shadowBlur = 20;
        particleCtx.shadowColor = particle.color;
        
        particleCtx.beginPath();
        particleCtx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        particleCtx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        particleCtx.fill();
        
        particleCtx.beginPath();
        particleCtx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        particleCtx.fillStyle = particle.color + '30';
        particleCtx.fill();
        
        particleCtx.beginPath();
        particleCtx.arc(particle.x, particle.y, particle.size * 8, 0, Math.PI * 2);
        particleCtx.fillStyle = particle.color + '10';
        particleCtx.fill();
        
        particleCtx.shadowBlur = 0;
        
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
              const opacity = (200 - distance) / 200;
              
              particleCtx.beginPath();
              particleCtx.moveTo(particle.x, particle.y);
              particleCtx.lineTo(otherParticle.x, otherParticle.y);
              particleCtx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.8})`;
              particleCtx.lineWidth = 3;
              particleCtx.stroke();
              
              particleCtx.beginPath();
              particleCtx.moveTo(particle.x, particle.y);
              particleCtx.lineTo(otherParticle.x, otherParticle.y);
              particleCtx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.4})`;
              particleCtx.lineWidth = 6;
              particleCtx.stroke();
              
              particleCtx.beginPath();
              particleCtx.moveTo(particle.x, particle.y);
              particleCtx.lineTo(otherParticle.x, otherParticle.y);
              particleCtx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.2})`;
              particleCtx.lineWidth = 12;
              particleCtx.stroke();
            }
          }
        });
      });
      
      requestAnimationFrame(animateParticles);
    };
    animateParticles();

    let time = 0;
    const animateMesh = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 80;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          
          const wave1 = Math.sin((x + time) * 0.008) * Math.cos((y + time) * 0.006) * 30;
          const wave2 = Math.cos((x - time) * 0.005) * Math.sin((y - time) * 0.009) * 25;
          const wave3 = Math.sin((x + y + time) * 0.004) * 20;
          
          const finalX = x + wave1 + wave3 * 0.5;
          const finalY = y + wave2 + wave3 * 0.3;
          
          if (i < cols - 1) {
            const nextWave1 = Math.sin(((i + 1) * gridSize + time) * 0.008) * Math.cos((y + time) * 0.006) * 30;
            const nextWave3 = Math.sin(((i + 1) * gridSize + y + time) * 0.004) * 20;
            const nextX = (i + 1) * gridSize + nextWave1 + nextWave3 * 0.5;
            
            const opacity = 0.7 + Math.sin(time * 0.002 + i * 0.15) * 0.3;
            
            ctx.shadowBlur = 15;
            ctx.shadowColor = `rgba(30, 58, 138, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(finalX, finalY);
            ctx.lineTo(nextX, finalY);
            ctx.strokeStyle = `rgba(30, 58, 138, ${opacity})`;
            ctx.lineWidth = 3;
            ctx.stroke();
            
            ctx.shadowBlur = 25;
            ctx.shadowColor = `rgba(59, 130, 246, ${opacity * 0.6})`;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.6})`;
            ctx.lineWidth = 5;
            ctx.stroke();
            
            ctx.shadowBlur = 0;
          }
          
          if (j < rows - 1) {
            const nextWave2 = Math.cos((x - time) * 0.005) * Math.sin(((j + 1) * gridSize - time) * 0.009) * 25;
            const nextWave3 = Math.sin((x + (j + 1) * gridSize + time) * 0.004) * 20;
            const nextY = (j + 1) * gridSize + nextWave2 + nextWave3 * 0.3;
            
            const opacity = 0.6 + Math.cos(time * 0.002 + j * 0.12) * 0.4;
            
            ctx.shadowBlur = 15;
            ctx.shadowColor = `rgba(124, 58, 237, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(finalX, finalY);
            ctx.lineTo(finalX, nextY);
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
            ctx.lineWidth = 3;
            ctx.stroke();
            
            ctx.shadowBlur = 25;
            ctx.shadowColor = `rgba(139, 92, 246, ${opacity * 0.6})`;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.6})`;
            ctx.lineWidth = 5;
            ctx.stroke();
            
            ctx.shadowBlur = 0;
          }
          
          if (i % 2 === 0 && j % 2 === 0) {
            const pulseOpacity = 0.8 + Math.sin(time * 0.003 + i * j * 0.1) * 0.2;
            ctx.shadowBlur = 30;
            ctx.shadowColor = `rgba(168, 85, 247, ${pulseOpacity})`;
            ctx.beginPath();
            ctx.arc(finalX, finalY, 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(168, 85, 247, ${pulseOpacity})`;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }
      
      time += 1.5;
      requestAnimationFrame(animateMesh);
    };
    animateMesh();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const getVariantIntensity = () => {
    switch (variant) {
      case 'hero':
        return { opacity: 'opacity-95', blur: 'blur-[120px]', scale: 'scale-115' };
      case 'research':
        return { opacity: 'opacity-90', blur: 'blur-[100px]', scale: 'scale-110' };
      case 'about':
        return { opacity: 'opacity-92', blur: 'blur-[110px]', scale: 'scale-112' };
      default:
        return { opacity: 'opacity-85', blur: 'blur-[90px]', scale: 'scale-105' };
    }
  };

  const intensity = getVariantIntensity();

  return (
    <div 
      className={`background-layers ${className}`}
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
    >
      {/* Layer 1: Ultra-Deep Foundation Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 150% 120% at 10% 0%, rgba(15, 10, 26, 1) 0%, rgba(30, 27, 75, 0.95) 25%, rgba(49, 46, 129, 0.8) 50%, transparent 80%),
            radial-gradient(ellipse 120% 150% at 90% 10%, rgba(67, 56, 202, 0.9) 0%, rgba(124, 58, 237, 0.7) 30%, rgba(168, 85, 247, 0.5) 60%, transparent 85%),
            radial-gradient(ellipse 180% 100% at 50% 100%, rgba(139, 92, 246, 0.8) 0%, rgba(168, 85, 247, 0.6) 40%, rgba(30, 58, 138, 0.4) 70%, transparent 90%),
            linear-gradient(135deg, 
              #0a0612 0%, 
              #1a0b2e 15%,
              #2d1b69 30%, 
              #3730a3 45%, 
              #4338ca 60%, 
              #5b21b6 75%,
              #1e1b4b 100%
            ),
            conic-gradient(from 45deg at 30% 70%, 
              rgba(30, 58, 138, 0.3) 0deg, 
              rgba(124, 58, 237, 0.4) 90deg,
              rgba(139, 92, 246, 0.3) 180deg, 
              rgba(59, 130, 246, 0.4) 270deg,
              rgba(30, 58, 138, 0.3) 360deg)
          `,
          animation: 'wowGradientShift 25s ease-in-out infinite',
        }}
      />

      {/* Layer 2: Generative Canvas Mesh */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-90"
        style={{ mixBlendMode: 'screen', filter: 'brightness(1.2) saturate(1.4)' }}
      />

      {/* Layer 3: Neural Network Particle System */}
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 w-full h-full opacity-95"
        style={{ mixBlendMode: 'screen', filter: 'brightness(1.3) saturate(1.5)' }}
      />

      {/* Layer 4: Enhanced Animated Blur Blobs */}
      <div className="absolute inset-0">
        <div className={`wow-blob wow-blob-1 ${intensity.blur} ${intensity.scale}`} 
             style={{ 
               background: 'radial-gradient(circle, rgba(30, 58, 138, 0.6) 0%, rgba(124, 58, 237, 0.4) 40%, rgba(139, 92, 246, 0.2) 70%, transparent 100%)',
               filter: 'blur(80px) saturate(1.5)'
             }} />
        <div className={`wow-blob wow-blob-2 ${intensity.blur} ${intensity.scale}`}
             style={{ 
               background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.3) 40%, rgba(147, 51, 234, 0.2) 70%, transparent 100%)',
               filter: 'blur(100px) saturate(1.3)'
             }} />
        <div className={`wow-blob wow-blob-3 ${intensity.blur} ${intensity.scale}`}
             style={{ 
               background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(108, 99, 255, 0.3) 40%, rgba(124, 58, 237, 0.2) 70%, transparent 100%)',
               filter: 'blur(120px) saturate(1.4)'
             }} />
        <div className={`wow-blob wow-blob-4 ${intensity.blur} ${intensity.scale}`}
             style={{ 
               background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(30, 58, 138, 0.2) 40%, rgba(59, 130, 246, 0.15) 70%, transparent 100%)',
               filter: 'blur(90px) saturate(1.2)'
             }} />
        <div className={`wow-blob wow-blob-5 ${intensity.blur} ${intensity.scale}`}
             style={{ 
               background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(139, 92, 246, 0.15) 40%, rgba(168, 85, 247, 0.1) 70%, transparent 100%)',
               filter: 'blur(110px) saturate(1.6)'
             }} />
      </div>

      {/* Layer 5: Complex Dynamic Overlay Patterns */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          background: `
            conic-gradient(from 0deg at 20% 20%, 
              rgba(30, 58, 138, 0.4) 0deg, 
              rgba(124, 58, 237, 0.3) 60deg,
              rgba(139, 92, 246, 0.25) 120deg, 
              rgba(59, 130, 246, 0.3) 180deg,
              rgba(147, 51, 234, 0.25) 240deg,
              rgba(108, 99, 255, 0.3) 300deg, 
              rgba(30, 58, 138, 0.4) 360deg),
            conic-gradient(from 180deg at 80% 80%, 
              rgba(139, 92, 246, 0.3) 0deg, 
              rgba(59, 130, 246, 0.2) 90deg,
              rgba(147, 51, 234, 0.15) 180deg, 
              rgba(108, 99, 255, 0.2) 270deg, 
              rgba(139, 92, 246, 0.3) 360deg),
            radial-gradient(ellipse at 60% 40%, rgba(124, 58, 237, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse at 40% 60%, rgba(30, 58, 138, 0.15) 0%, transparent 50%)
          `,
          animation: 'wowOverlayRotate 120s linear infinite'
        }}
      />

      {/* Layer 6: Digital Matrix Texture */}
      <div 
        className="absolute inset-0 opacity-6"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 85% 85%, rgba(30, 58, 138, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 35% 65%, rgba(124, 58, 237, 0.12) 0.5px, transparent 0.5px),
            radial-gradient(circle at 65% 35%, rgba(139, 92, 246, 0.1) 0.5px, transparent 0.5px),
            linear-gradient(90deg, transparent 0%, rgba(124, 58, 237, 0.03) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(30, 58, 138, 0.02) 50%, transparent 100%)
          `,
          backgroundSize: '80px 80px, 60px 60px, 40px 40px, 50px 50px, 200px 1px, 1px 200px',
          animation: 'wowNoiseShift 150s linear infinite'
        }}
      />

      {/* Layer 7: Depth Enhancement Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            linear-gradient(45deg, transparent 0%, rgba(30, 58, 138, 0.1) 25%, transparent 50%, rgba(124, 58, 237, 0.08) 75%, transparent 100%),
            linear-gradient(-45deg, transparent 0%, rgba(139, 92, 246, 0.06) 25%, transparent 50%, rgba(59, 130, 246, 0.04) 75%, transparent 100%)
          `,
          backgroundSize: '400px 400px, 300px 300px',
          animation: 'wowDepthShift 200s ease-in-out infinite'
        }}
      />
    </div>
  );
}
