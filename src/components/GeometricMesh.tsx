'use client';

import { useEffect, useRef, useState } from 'react';

interface GeometricMeshProps {
  variant?: 'research' | 'academic' | 'tech';
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function GeometricMesh({ 
  variant = 'research', 
  density = 'medium',
  className = '' 
}: GeometricMeshProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [patterns, setPatterns] = useState<React.ReactElement[]>([]);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      svg.setAttribute('width', width.toString());
      svg.setAttribute('height', height.toString());
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    setPatterns(generatePatterns());
  }, [dimensions, variant, density]);

  const getGridSize = () => {
    switch (density) {
      case 'low': return 120;
      case 'high': return 60;
      default: return 80;
    }
  };

  const getColors = () => {
    switch (variant) {
      case 'academic':
        return {
          primary: 'rgba(30, 58, 138, 0.15)',
          secondary: 'rgba(59, 130, 246, 0.1)',
          accent: 'rgba(124, 58, 237, 0.08)'
        };
      case 'tech':
        return {
          primary: 'rgba(124, 58, 237, 0.2)',
          secondary: 'rgba(139, 92, 246, 0.15)',
          accent: 'rgba(6, 182, 212, 0.1)'
        };
      default:
        return {
          primary: 'rgba(30, 58, 138, 0.12)',
          secondary: 'rgba(124, 58, 237, 0.08)',
          accent: 'rgba(139, 92, 246, 0.06)'
        };
    }
  };

  const gridSize = getGridSize();
  const colors = getColors();

  const generatePatterns = () => {
    const patterns = [];
    const { width, height } = dimensions;

    for (let x = 0; x <= width; x += gridSize) {
      patterns.push(
        <line
          key={`v-${x}`}
          x1={x}
          y1={0}
          x2={x}
          y2={height}
          stroke={colors.primary}
          strokeWidth="0.5"
          opacity="0.6"
        />
      );
    }

    for (let y = 0; y <= height; y += gridSize) {
      patterns.push(
        <line
          key={`h-${y}`}
          x1={0}
          y1={y}
          x2={width}
          y2={y}
          stroke={colors.primary}
          strokeWidth="0.5"
          opacity="0.6"
        />
      );
    }

    for (let x = 0; x <= width; x += gridSize * 2) {
      for (let y = 0; y <= height; y += gridSize * 2) {
        if (Math.random() > 0.7) {
          patterns.push(
            <line
              key={`diag-${x}-${y}`}
              x1={x}
              y1={y}
              x2={x + gridSize}
              y2={y + gridSize}
              stroke={colors.secondary}
              strokeWidth="0.8"
              opacity="0.4"
            />
          );
        }
      }
    }

    for (let x = gridSize; x <= width; x += gridSize) {
      for (let y = gridSize; y <= height; y += gridSize) {
        if (Math.random() > 0.85) {
          patterns.push(
            <circle
              key={`node-${x}-${y}`}
              cx={x}
              cy={y}
              r="2"
              fill={colors.accent}
              opacity="0.8"
            />
          );
        }
      }
    }

    for (let x = gridSize; x <= width; x += gridSize * 3) {
      for (let y = gridSize; y <= height; y += gridSize * 3) {
        if (Math.random() > 0.9) {
          const hexPoints = [];
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const hexX = x + Math.cos(angle) * 15;
            const hexY = y + Math.sin(angle) * 15;
            hexPoints.push(`${hexX},${hexY}`);
          }
          
          patterns.push(
            <polygon
              key={`hex-${x}-${y}`}
              points={hexPoints.join(' ')}
              fill="none"
              stroke={colors.accent}
              strokeWidth="0.5"
              opacity="0.3"
            />
          );
        }
      }
    }

    return patterns;
  };

  return (
    <div className={`fixed inset-0 pointer-events-none z-[-7] ${className}`}>
      <svg
        ref={svgRef}
        className="w-full h-full"
        style={{ mixBlendMode: 'multiply' }}
      >
        <defs>
          <pattern
            id="geometric-grid"
            x="0"
            y="0"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <rect
              width={gridSize}
              height={gridSize}
              fill="none"
              stroke={colors.primary}
              strokeWidth="0.3"
              opacity="0.4"
            />
          </pattern>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated background grid */}
        <rect
          width="100%"
          height="100%"
          fill="url(#geometric-grid)"
          opacity="0.3"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values={`0,0; ${gridSize/2},${gridSize/2}; 0,0`}
            dur="60s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Dynamic geometric patterns */}
        <g filter="url(#glow)">
          {patterns}
        </g>
      </svg>
    </div>
  );
}
