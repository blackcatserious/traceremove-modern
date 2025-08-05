'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export default function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      securityLevel: 'loose',
      themeVariables: {
        fontFamily: 'Inter, system-ui, sans-serif',
        primaryColor: '#3B82F6',
        primaryTextColor: '#1F2937',
        primaryBorderColor: '#2563EB',
        lineColor: '#6B7280',
        secondaryColor: '#8B5CF6',
        tertiaryColor: '#F3F4F6',
      },
    });

    if (elementRef.current) {
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      elementRef.current.innerHTML = `<div class="mermaid" id="${id}">${chart}</div>`;
      const mermaidElement = elementRef.current.querySelector('.mermaid');
      if (mermaidElement) {
        mermaid.init(undefined, mermaidElement as HTMLElement);
      }
    }
  }, [chart]);

  return (
    <div className={`bg-white rounded-xl shadow-soft border border-gray-100 p-6 overflow-x-auto ${className}`}>
      <div ref={elementRef} className="flex justify-center" />
    </div>
  );
}
