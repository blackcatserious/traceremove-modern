'use client';

import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieAnimationProps {
  animationFile: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  width?: number;
  height?: number;
}

export default function LottieAnimation({ 
  animationFile, 
  className = '', 
  autoplay = true, 
  loop = true,
  width = 400,
  height = 300
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      if (!containerRef.current) return;

      try {
        const response = await fetch(`/lottie/${animationFile}`);
        const animationData = await response.json();

        if (animationRef.current) {
          animationRef.current.destroy();
        }

        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop,
          autoplay,
          animationData,
        });

        return () => {
          if (animationRef.current) {
            animationRef.current.destroy();
          }
        };
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
        
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="flex items-center justify-center h-full bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
              <div class="text-center">
                <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 animate-pulse"></div>
                <p class="text-gray-600 text-sm">Animation Loading...</p>
              </div>
            </div>
          `;
        }
      }
    };

    loadAnimation();

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, [animationFile, autoplay, loop]);

  return (
    <div className={`bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden ${className}`}>
      <div 
        ref={containerRef}
        style={{ width, height }}
        className="flex items-center justify-center"
      />
    </div>
  );
}
