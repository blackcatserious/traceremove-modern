'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

let mermaidConfigured = false;

export default function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mermaidConfigured) {
      mermaid.initialize({
        startOnLoad: false,
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
      mermaidConfigured = true;
    }

    let cancelled = false;

    const renderDiagram = async () => {
      if (!elementRef.current) return;

      try {
        const id = `mermaid-${Math.random().toString(36).slice(2, 11)}`;
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled && elementRef.current) {
          elementRef.current.innerHTML = svg;
        }
      } catch {
        if (!cancelled && elementRef.current) {
          elementRef.current.innerHTML = `<pre style="white-space: pre-wrap; color: #94a3b8; font-size: 0.875rem;">Unable to render diagram for this view.</pre>`;
        }
      }
    };

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [chart]);

  return (
    <div className={`bg-white rounded-xl shadow-soft border border-gray-100 p-6 overflow-x-auto ${className}`}>
      <div ref={elementRef} className="flex justify-center" />
    </div>
  );
}
