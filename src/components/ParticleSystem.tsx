'use client';

import { useEffect, useRef } from 'react';

interface ParticleSystemProps {
  particleCount?: number;
  variant?: 'neural' | 'data' | 'research';
  className?: string;
}

export default function ParticleSystem({ 
  particleCount = 100, 
  variant = 'neural',
  className = '' 
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
      type: 'node' | 'data' | 'signal';
    }> = [];

    const colors = {
      neural: ['rgba(30, 58, 138, 0.8)', 'rgba(124, 58, 237, 0.6)', 'rgba(139, 92, 246, 0.4)'],
      data: ['rgba(6, 182, 212, 0.7)', 'rgba(59, 130, 246, 0.5)', 'rgba(30, 58, 138, 0.3)'],
      research: ['rgba(124, 58, 237, 0.6)', 'rgba(139, 92, 246, 0.4)', 'rgba(30, 58, 138, 0.2)']
    };

    for (let i = 0; i < particleCount; i++) {
      const type = Math.random() > 0.8 ? 'signal' : Math.random() > 0.6 ? 'data' : 'node';
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: type === 'signal' ? 1 + Math.random() * 2 : 2 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.4,
        color: colors[variant][Math.floor(Math.random() * colors[variant].length)],
        connections: [],
        type
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        particle.connections = [];
        particles.forEach((other, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120 && particle.connections.length < 3) {
              particle.connections.push(otherIndex);
            }
          }
        });
      });

      particles.forEach((particle, index) => {
        particle.connections.forEach(connectionIndex => {
          const other = particles[connectionIndex];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const opacity = Math.max(0, (120 - distance) / 120 * 0.2);
          
          ctx.strokeStyle = `rgba(30, 58, 138, ${opacity})`;
          ctx.lineWidth = particle.type === 'signal' ? 0.5 : 0.8;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();

          if (particle.type === 'signal' && Math.random() > 0.98) {
            const midX = (particle.x + other.x) / 2;
            const midY = (particle.y + other.y) / 2;
            
            ctx.fillStyle = 'rgba(124, 58, 237, 0.8)';
            ctx.beginPath();
            ctx.arc(midX, midY, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        
        ctx.beginPath();
        if (particle.type === 'node') {
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else if (particle.type === 'data') {
          ctx.fillRect(
            particle.x - particle.size/2, 
            particle.y - particle.size/2, 
            particle.size, 
            particle.size
          );
        } else {
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
          ctx.restore();
        }
        
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [particleCount, variant]);

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-40"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
}
