'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

interface BackgroundLayersProps {
  variant?: 'default' | 'hero' | 'research' | 'about';
  className?: string;
}

const VARIANT_COLORS: Record<NonNullable<BackgroundLayersProps['variant']>, string[]> = {
  default: ['#1e3a8a', '#7c3aed', '#8b5cf6', '#3b82f6', '#6366f1'],
  hero: ['#0f172a', '#1d4ed8', '#4c1d95', '#7e22ce', '#4338ca'],
  research: ['#312e81', '#1e40af', '#2563eb', '#7c3aed', '#14b8a6'],
  about: ['#1f2937', '#4c1d95', '#6d28d9', '#0ea5e9', '#7c3aed'],
};

type WindowWithIdle = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function BackgroundLayers({ variant = 'default', className = '' }: BackgroundLayersProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const idleHandleRef = useRef<number | null>(null);
  const idleTimeoutRef = useRef<number | null>(null);
  const [motionEnabled, setMotionEnabled] = useState<boolean>(true);
  const [isIdle, setIsIdle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerQuery = window.matchMedia('(pointer: coarse)');

    const evaluate = () => {
      setMotionEnabled(!motionQuery.matches && !pointerQuery.matches);
    };

    evaluate();

    motionQuery.addEventListener('change', evaluate);
    pointerQuery.addEventListener('change', evaluate);

    return () => {
      motionQuery.removeEventListener('change', evaluate);
      pointerQuery.removeEventListener('change', evaluate);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const withIdle = window as WindowWithIdle;

    const start = () => {
      setIsIdle(true);
    };

    if (typeof withIdle.requestIdleCallback === 'function') {
      idleHandleRef.current = withIdle.requestIdleCallback(start, { timeout: 250 });
    } else {
      idleTimeoutRef.current = window.setTimeout(start, 180);
    }

    return () => {
      if (idleHandleRef.current !== null && typeof withIdle.cancelIdleCallback === 'function') {
        withIdle.cancelIdleCallback(idleHandleRef.current);
      }
      if (idleTimeoutRef.current !== null) {
        window.clearTimeout(idleTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(Boolean(entry?.isIntersecting));
      },
      { root: null, rootMargin: '320px 0px', threshold: 0.05 },
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const shouldAnimate = useMemo(() => motionEnabled && isIdle && isVisible, [isIdle, isVisible, motionEnabled]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const particleCanvas = particleCanvasRef.current;
    if (!canvas || !particleCanvas) return;

    const ctx = canvas.getContext('2d');
    const particleCtx = particleCanvas.getContext('2d');
    if (!ctx || !particleCtx) return;

    const colors = VARIANT_COLORS[variant] ?? VARIANT_COLORS.default;

    let connectionThreshold = 220;
    let connectionThresholdSq = connectionThreshold * connectionThreshold;
    let baseGrid = 120;

    const updateDerivedMetrics = () => {
      const longestEdge = Math.max(particleCanvas.width, particleCanvas.height);
      connectionThreshold = Math.min(260, Math.max(150, longestEdge * 0.18));
      connectionThresholdSq = connectionThreshold * connectionThreshold;
      baseGrid = Math.max(90, Math.min(140, Math.floor(Math.max(canvas.width, canvas.height) / 10)));
    };

    const drawStaticBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width * 0.6,
        canvas.height * 0.4,
        Math.max(canvas.width, canvas.height) * 0.08,
        canvas.width * 0.3,
        canvas.height * 0.8,
        Math.max(canvas.width, canvas.height) * 0.75,
      );

      gradient.addColorStop(0, `${colors[1] ?? colors[0]}33`);
      gradient.addColorStop(0.35, `${colors[2] ?? colors[0]}26`);
      gradient.addColorStop(1, '#020617ff');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      particleCanvas.width = width * dpr;
      particleCanvas.height = height * dpr;
      particleCanvas.style.width = `${width}px`;
      particleCanvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particleCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      updateDerivedMetrics();

      if (!shouldAnimate) {
        drawStaticBackground();
      } else if (particles.length) {
        for (const particle of particles) {
          particle.x = Math.max(0, Math.min(particleCanvas.width, particle.x));
          particle.y = Math.max(0, Math.min(particleCanvas.height, particle.y));
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (!shouldAnimate) {
      drawStaticBackground();
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }

    const initialWidth = Math.max(window.innerWidth, window.innerHeight);
    const particleBaseCount = initialWidth >= 1536 ? 72 : initialWidth >= 1024 ? 58 : initialWidth >= 768 ? 44 : 32;

    const randomFromPalette = () => colors[Math.floor(Math.random() * colors.length)] ?? colors[0];

    for (let i = 0; i < particleBaseCount; i++) {
      particles.push({
        x: Math.random() * particleCanvas.width,
        y: Math.random() * particleCanvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2.2 + 1,
        color: randomFromPalette(),
      });
    }

    let particleFrame = 0;

    const animateParticles = () => {
      particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

      const count = particles.length;

      for (let i = 0; i < count; i++) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > particleCanvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > particleCanvas.height) particle.vy *= -1;

        particleCtx.beginPath();
        particleCtx.arc(particle.x, particle.y, particle.size * 1.6, 0, Math.PI * 2);
        particleCtx.fillStyle = `${particle.color}e6`;
        particleCtx.fill();

        particleCtx.beginPath();
        particleCtx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        particleCtx.fillStyle = `${particle.color}33`;
        particleCtx.fill();

        for (let j = i + 1; j < count; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq <= connectionThresholdSq) {
            const distance = Math.sqrt(distanceSq);
            const opacity = (connectionThreshold - distance) / connectionThreshold;

            particleCtx.beginPath();
            particleCtx.moveTo(particle.x, particle.y);
            particleCtx.lineTo(other.x, other.y);
            particleCtx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.55})`;
            particleCtx.lineWidth = 2;
            particleCtx.stroke();
          }
        }
      }

      particleFrame = window.requestAnimationFrame(animateParticles);
    };

    particleFrame = window.requestAnimationFrame(animateParticles);

    let time = 0;
    let meshFrame = 0;

    const animateMesh = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = baseGrid;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;

          const wave1 = Math.sin((x + time) * 0.006) * Math.cos((y + time) * 0.004) * 18;
          const wave2 = Math.cos((x - time) * 0.004) * Math.sin((y - time) * 0.006) * 16;
          const wave3 = Math.sin((x + y + time) * 0.003) * 14;

          const finalX = x + wave1 + wave3 * 0.45;
          const finalY = y + wave2 + wave3 * 0.3;

          if (i < cols - 1) {
            const nextX = (i + 1) * gridSize + Math.sin(((i + 1) * gridSize + time) * 0.006) * 18;
            const opacity = 0.55 + Math.sin(time * 0.0018 + i * 0.14) * 0.25;

            ctx.beginPath();
            ctx.moveTo(finalX, finalY);
            ctx.lineTo(nextX, finalY);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 2.4;
            ctx.stroke();
          }

          if (j < rows - 1) {
            const nextY = (j + 1) * gridSize + Math.cos((y - time) * 0.004) * 16;
            const opacity = 0.55 + Math.cos(time * 0.0016 + j * 0.12) * 0.25;

            ctx.beginPath();
            ctx.moveTo(finalX, finalY);
            ctx.lineTo(finalX, nextY);
            ctx.strokeStyle = `rgba(20, 184, 166, ${opacity})`;
            ctx.lineWidth = 2.4;
            ctx.stroke();
          }
        }
      }

      time += 1.8;
      meshFrame = window.requestAnimationFrame(animateMesh);
    };

    meshFrame = window.requestAnimationFrame(animateMesh);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.cancelAnimationFrame(particleFrame);
      window.cancelAnimationFrame(meshFrame);
    };
  }, [shouldAnimate, variant]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <canvas ref={particleCanvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
