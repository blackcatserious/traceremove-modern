'use client';

import { useEffect, useRef } from 'react';

interface CodeMatrixOverlayProps {
  variant?: 'subtle' | 'prominent' | 'hero';
  className?: string;
}

export default function CodeMatrixOverlay({ variant = 'subtle', className = '' }: CodeMatrixOverlayProps) {
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

    const characters = [
      '0', '1', 'λ', 'α', 'β', 'γ', 'δ', 'θ', 'π', 'σ', 'φ', 'ψ', 'ω',
      '{', '}', '[', ']', '(', ')', '<', '>', '/', '\\', '|', '-', '_', '=',
      'AI', 'ML', 'NN', 'DL', 'NLP', 'CV', 'RL', 'GAN', 'LLM', 'GPT',
      'def', 'class', 'import', 'return', 'if', 'else', 'for', 'while',
      '∇', '∂', '∑', '∏', '∫', '∞', '∈', '∉', '⊂', '⊃', '∪', '∩', '∅'
    ];

    const columns: Array<{
      x: number;
      y: number;
      speed: number;
      chars: string[];
      opacity: number;
      lastUpdate: number;
    }> = [];

    const columnWidth = 20;
    const numColumns = Math.floor(canvas.width / columnWidth);

    for (let i = 0; i < numColumns; i++) {
      columns.push({
        x: i * columnWidth,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 1.5,
        chars: [],
        opacity: 0.1 + Math.random() * 0.3,
        lastUpdate: Date.now()
      });

      for (let j = 0; j < 20; j++) {
        columns[i].chars.push(characters[Math.floor(Math.random() * characters.length)]);
      }
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();

      columns.forEach(column => {
        if (now - column.lastUpdate > 100 + Math.random() * 200) {
          const randomIndex = Math.floor(Math.random() * column.chars.length);
          column.chars[randomIndex] = characters[Math.floor(Math.random() * characters.length)];
          column.lastUpdate = now;
        }

        column.y += column.speed;
        if (column.y > canvas.height + 100) {
          column.y = -100;
          column.opacity = 0.1 + Math.random() * 0.3;
        }

        column.chars.forEach((char, index) => {
          const y = column.y + index * 16;
          if (y > -20 && y < canvas.height + 20) {
            const distanceFromFront = Math.abs(index - 10);
            const brightness = Math.max(0, 1 - distanceFromFront / 10);
            
            let color;
            if (char.length > 1) { // AI/ML terms
              color = `rgba(124, 58, 237, ${column.opacity * brightness * 0.8})`;
            } else if (/[λαβγδθπσφψω∇∂∑∏∫∞∈∉⊂⊃∪∩∅]/.test(char)) { // Greek/math symbols
              color = `rgba(139, 92, 246, ${column.opacity * brightness * 0.6})`;
            } else { // Code symbols
              color = `rgba(30, 58, 138, ${column.opacity * brightness * 0.4})`;
            }

            ctx.fillStyle = color;
            ctx.font = `${char.length > 1 ? '10px' : '12px'} 'JetBrains Mono', monospace`;
            ctx.fillText(char, column.x, y);
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [variant]);

  const getOpacity = () => {
    switch (variant) {
      case 'hero':
        return 'opacity-30';
      case 'prominent':
        return 'opacity-20';
      default:
        return 'opacity-10';
    }
  };

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className={`w-full h-full ${getOpacity()}`}
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
}
