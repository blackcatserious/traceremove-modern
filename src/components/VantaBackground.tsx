'use client';

import { useEffect, useRef } from 'react';

interface VantaBackgroundProps {
  variant?: 'default' | 'hero' | 'research' | 'about';
  className?: string;
}

interface VantaEffect {
  destroy: () => void;
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
    backgroundColor: number;
    points: number;
    maxDistance: number;
    spacing: number;
  }) => VantaEffect;
}

export default function VantaBackground({ variant = 'default', className = '' }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);

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
            scaleMobile: 1.00,
            color: 0x7c3aed,
            backgroundColor: 0x0a0612,
            points: 15.00,
            maxDistance: 23.00,
            spacing: 16.00
          });
        }
      } catch (error) {
        console.warn('Vanta.js failed to load, falling back to CSS animations:', error);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
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
  );
}
