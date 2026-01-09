'use client';

import { useMemo, type CSSProperties } from 'react';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { usePerformanceProfile } from '@/components/PerformanceProfileProvider';

type BackgroundVariant =
  | 'default'
  | 'hero'
  | 'research'
  | 'about'
  | 'projects'
  | 'tools'
  | 'academic'
  | 'articles'
  | 'contact'
  | 'atlas'
  | 'atlasBlueprint'
  | 'assistant'
  | 'faq'
  | 'legal'
  | 'whitepapers'
  | 'philosophy'
  | 'members'
  | 'sitemap';

const VARIANT_GRADIENTS: Record<BackgroundVariant, { soft: string; vivid: string }> = {
  default: {
    soft: 'radial-gradient(120% 100% at 20% 0%, rgba(30,58,138,0.65), transparent 70%)',
    vivid: 'radial-gradient(140% 120% at 80% 10%, rgba(124,58,237,0.55), transparent 70%)',
  },
  hero: {
    soft: 'radial-gradient(120% 90% at 30% 10%, rgba(29,78,216,0.6), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 75% 20%, rgba(126,34,206,0.5), transparent 75%)',
  },
  research: {
    soft: 'radial-gradient(120% 90% at 25% 0%, rgba(49,46,129,0.6), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 80% 30%, rgba(20,184,166,0.45), transparent 75%)',
  },
  about: {
    soft: 'radial-gradient(120% 90% at 30% 0%, rgba(79,70,229,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 75% 35%, rgba(14,165,233,0.45), transparent 75%)',
  },
  projects: {
    soft: 'radial-gradient(120% 95% at 25% 0%, rgba(251,146,60,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 80% 30%, rgba(236,72,153,0.45), transparent 75%)',
  },
  tools: {
    soft: 'radial-gradient(120% 95% at 20% 0%, rgba(8,145,178,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 78% 30%, rgba(99,102,241,0.5), transparent 75%)',
  },
  academic: {
    soft: 'radial-gradient(120% 95% at 25% 0%, rgba(17,94,89,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 78% 30%, rgba(37,99,235,0.45), transparent 75%)',
  },
  articles: {
    soft: 'radial-gradient(120% 95% at 22% 0%, rgba(244,63,94,0.5), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 78% 30%, rgba(168,85,247,0.5), transparent 75%)',
  },
  contact: {
    soft: 'radial-gradient(120% 95% at 25% 0%, rgba(37,99,235,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 75% 30%, rgba(14,165,233,0.45), transparent 75%)',
  },
  atlas: {
    soft: 'radial-gradient(120% 95% at 20% 0%, rgba(59,130,246,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 75% 25%, rgba(147,51,234,0.5), transparent 75%)',
  },
  atlasBlueprint: {
    soft: 'radial-gradient(120% 95% at 20% 0%, rgba(59,130,246,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 75% 25%, rgba(14,165,233,0.45), transparent 75%)',
  },
  assistant: {
    soft: 'radial-gradient(120% 95% at 25% 0%, rgba(56,189,248,0.5), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 75% 30%, rgba(192,132,252,0.5), transparent 75%)',
  },
  faq: {
    soft: 'radial-gradient(120% 95% at 25% 0%, rgba(129,140,248,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 75% 35%, rgba(34,211,238,0.45), transparent 75%)',
  },
  legal: {
    soft: 'radial-gradient(120% 95% at 25% 0%, rgba(14,165,233,0.5), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 75% 30%, rgba(16,185,129,0.45), transparent 75%)',
  },
  whitepapers: {
    soft: 'radial-gradient(120% 95% at 25% 0%, rgba(99,102,241,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 78% 30%, rgba(236,72,153,0.45), transparent 75%)',
  },
  philosophy: {
    soft: 'radial-gradient(120% 95% at 25% 0%, rgba(124,58,237,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 78% 30%, rgba(56,189,248,0.45), transparent 75%)',
  },
  members: {
    soft: 'radial-gradient(120% 95% at 25% 0%, rgba(99,102,241,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 75% 30%, rgba(192,132,252,0.45), transparent 75%)',
  },
  sitemap: {
    soft: 'radial-gradient(120% 95% at 25% 0%, rgba(59,130,246,0.55), transparent 75%)',
    vivid: 'radial-gradient(120% 120% at 78% 30%, rgba(16,185,129,0.45), transparent 75%)',
  },
};

interface BackgroundLayersProps {
  variant?: BackgroundVariant;
  className?: string;
}

export default function BackgroundLayers({ variant = 'default', className = '' }: BackgroundLayersProps) {
  const { deferHeavyWork, reducedMotion: profileReducedMotion } = usePerformanceProfile();
  const systemReducedMotion = usePrefersReducedMotion();
  const simplified = deferHeavyWork || profileReducedMotion || systemReducedMotion;

  const layers = useMemo(() => VARIANT_GRADIENTS[variant] ?? VARIANT_GRADIENTS.default, [variant]);

  const layerOpacity = simplified ? 0.65 : 0.85;
  const backgroundImage = simplified ? layers.soft : `${layers.soft}, ${layers.vivid}`;

  const backgroundStyle = useMemo(() => {
    const style: CSSProperties = {
      backgroundImage,
      backgroundRepeat: 'no-repeat',
      opacity: layerOpacity,
      transform: 'translateZ(0)',
      willChange: 'opacity',
      transition: 'opacity 0.45s ease-out',
    };

    if (simplified) {
      style.backgroundSize = '180% 160%';
      style.backgroundPosition = 'center -12%';
    } else {
      style.backgroundSize = '160% 140%, 140% 140%';
      style.backgroundPosition = 'left -10%, right -10%';
    }

    return style;
  }, [backgroundImage, layerOpacity, simplified]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      data-simplified={simplified ? 'true' : undefined}
      aria-hidden
    >
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0" style={backgroundStyle} />
      {!simplified ? (
        <>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(80% 80% at 50% 20%, rgba(226,232,240,0.08), transparent), radial-gradient(60% 60% at 80% 80%, rgba(15,118,110,0.12), transparent)',
              mixBlendMode: 'screen',
              opacity: 0.45,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
        </>
      ) : null}
    </div>
  );
}
