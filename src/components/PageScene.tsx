'use client';

import { type CSSProperties, type ReactNode, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface ThemePreset {
  id: string;
  variant: 'default' | 'hero' | 'research' | 'about';
  gradient: string;
  highlight: string;
  highlightAlt: string;
  highlightPosition: string;
  highlightAltPosition: string;
  beamColor: string;
  beamAngle: number;
  meshColor: string;
  noiseColor: string;
  matcher: (path: string) => boolean;
}

const themePresets: ThemePreset[] = [
  {
    id: 'home',
    variant: 'hero',
    gradient: 'from-[#030712]/95 via-[#0b1836]/90 to-[#030712]/95',
    highlight: 'rgba(129, 140, 248, 0.28)',
    highlightAlt: 'rgba(94, 234, 212, 0.22)',
    highlightPosition: '18% 22%',
    highlightAltPosition: '82% 68%',
    beamColor: 'rgba(37, 99, 235, 0.22)',
    beamAngle: 128,
    meshColor: 'rgba(129, 140, 248, 0.16)',
    noiseColor: 'rgba(148, 163, 255, 0.12)',
    matcher: (path) => path === '/',
  },
  {
    id: 'research',
    variant: 'research',
    gradient: 'from-[#020617]/95 via-[#0b1230]/88 to-[#020617]/95',
    highlight: 'rgba(168, 85, 247, 0.28)',
    highlightAlt: 'rgba(56, 189, 248, 0.2)',
    highlightPosition: '20% 24%',
    highlightAltPosition: '82% 72%',
    beamColor: 'rgba(59, 130, 246, 0.22)',
    beamAngle: 124,
    meshColor: 'rgba(99, 102, 241, 0.15)',
    noiseColor: 'rgba(148, 163, 255, 0.12)',
    matcher: (path) =>
      path.startsWith('/research') ||
      path.startsWith('/atlas') ||
      path.startsWith('/whitepapers'),
  },
  {
    id: 'projects',
    variant: 'about',
    gradient: 'from-[#13060f]/96 via-[#240b21]/88 to-[#13060f]/96',
    highlight: 'rgba(249, 115, 22, 0.26)',
    highlightAlt: 'rgba(244, 114, 182, 0.22)',
    highlightPosition: '18% 20%',
    highlightAltPosition: '78% 70%',
    beamColor: 'rgba(251, 191, 36, 0.22)',
    beamAngle: 118,
    meshColor: 'rgba(251, 146, 60, 0.18)',
    noiseColor: 'rgba(254, 215, 170, 0.14)',
    matcher: (path) => path.startsWith('/projects'),
  },
  {
    id: 'tools',
    variant: 'hero',
    gradient: 'from-[#011318]/96 via-[#052738]/88 to-[#011318]/96',
    highlight: 'rgba(34, 211, 238, 0.28)',
    highlightAlt: 'rgba(14, 165, 233, 0.22)',
    highlightPosition: '18% 22%',
    highlightAltPosition: '82% 68%',
    beamColor: 'rgba(2, 132, 199, 0.26)',
    beamAngle: 130,
    meshColor: 'rgba(56, 189, 248, 0.18)',
    noiseColor: 'rgba(125, 211, 252, 0.14)',
    matcher: (path) => path.startsWith('/tools'),
  },
  {
    id: 'articles',
    variant: 'about',
    gradient: 'from-[#100716]/96 via-[#1c1030]/88 to-[#100716]/96',
    highlight: 'rgba(251, 113, 133, 0.26)',
    highlightAlt: 'rgba(192, 132, 252, 0.2)',
    highlightPosition: '20% 24%',
    highlightAltPosition: '80% 72%',
    beamColor: 'rgba(244, 114, 182, 0.22)',
    beamAngle: 122,
    meshColor: 'rgba(251, 113, 133, 0.18)',
    noiseColor: 'rgba(244, 114, 182, 0.12)',
    matcher: (path) => path.startsWith('/articles') || path.startsWith('/publications'),
  },
  {
    id: 'academic',
    variant: 'about',
    gradient: 'from-[#070c1a]/96 via-[#10203d]/88 to-[#070c1a]/96',
    highlight: 'rgba(96, 165, 250, 0.3)',
    highlightAlt: 'rgba(79, 209, 197, 0.24)',
    highlightPosition: '18% 24%',
    highlightAltPosition: '84% 70%',
    beamColor: 'rgba(14, 165, 233, 0.22)',
    beamAngle: 120,
    meshColor: 'rgba(59, 130, 246, 0.18)',
    noiseColor: 'rgba(191, 219, 254, 0.14)',
    matcher: (path) =>
      path.startsWith('/academic') ||
      path.startsWith('/about') ||
      path.startsWith('/cv') ||
      path.startsWith('/philosophy'),
  },
  {
    id: 'contact',
    variant: 'default',
    gradient: 'from-[#040910]/96 via-[#0b1c2c]/88 to-[#040910]/96',
    highlight: 'rgba(56, 189, 248, 0.26)',
    highlightAlt: 'rgba(59, 130, 246, 0.22)',
    highlightPosition: '22% 28%',
    highlightAltPosition: '78% 72%',
    beamColor: 'rgba(15, 118, 110, 0.24)',
    beamAngle: 126,
    meshColor: 'rgba(13, 148, 136, 0.16)',
    noiseColor: 'rgba(94, 234, 212, 0.12)',
    matcher: (path) =>
      path.startsWith('/contact') ||
      path.startsWith('/faq') ||
      path.startsWith('/site-map') ||
      path.startsWith('/ai-lab-members'),
  },
  {
    id: 'legal',
    variant: 'default',
    gradient: 'from-[#080b12]/96 via-[#121725]/88 to-[#080b12]/96',
    highlight: 'rgba(148, 163, 184, 0.24)',
    highlightAlt: 'rgba(94, 234, 212, 0.18)',
    highlightPosition: '20% 24%',
    highlightAltPosition: '82% 70%',
    beamColor: 'rgba(148, 163, 184, 0.22)',
    beamAngle: 116,
    meshColor: 'rgba(148, 163, 184, 0.18)',
    noiseColor: 'rgba(226, 232, 240, 0.12)',
    matcher: (path) =>
      path.startsWith('/legal') ||
      path.startsWith('/operational') ||
      path.startsWith('/whitepapers'),
  },
];

const fallbackTheme: ThemePreset = {
  id: 'default',
  variant: 'default',
  gradient: 'from-slate-950/95 via-slate-900/85 to-slate-950/95',
  highlight: 'rgba(124, 58, 237, 0.24)',
  highlightAlt: 'rgba(59, 130, 246, 0.18)',
  highlightPosition: '18% 24%',
  highlightAltPosition: '82% 72%',
  beamColor: 'rgba(124, 58, 237, 0.22)',
  beamAngle: 120,
  meshColor: 'rgba(99, 102, 241, 0.16)',
  noiseColor: 'rgba(148, 163, 184, 0.12)',
  matcher: () => true,
};

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function PageScene({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setHydrated(true);

    if (reduceMotion) {
      setReady(true);
      return;
    }

    if (typeof window === 'undefined') {
      return;
    }

    const withIdle = window as IdleWindow;
    let cancelled = false;
    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    const activate = () => {
      if (!cancelled) {
        setReady(true);
      }
    };

    if (typeof withIdle.requestIdleCallback === 'function') {
      idleHandle = withIdle.requestIdleCallback(
        () => {
          idleHandle = null;
          activate();
        },
        { timeout: 220 },
      );
    } else {
      timeoutHandle = window.setTimeout(activate, 140);
    }

    return () => {
      cancelled = true;
      if (idleHandle !== null && typeof withIdle.cancelIdleCallback === 'function') {
        withIdle.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, [reduceMotion]);

  const theme = useMemo(() => {
    const preset = themePresets.find((candidate) => candidate.matcher(pathname));
    return preset ?? fallbackTheme;
  }, [pathname]);

  const haloStyle: CSSProperties = {
    backgroundImage: `radial-gradient(circle at ${theme.highlightPosition}, ${theme.highlight} 0%, transparent 62%), radial-gradient(circle at ${theme.highlightAltPosition}, ${theme.highlightAlt} 0%, transparent 68%)`,
  };

  const beamStyle: CSSProperties = {
    backgroundImage: `linear-gradient(${theme.beamAngle}deg, transparent 0%, ${theme.beamColor} 45%, transparent 90%)`,
  };

  const meshStyle: CSSProperties = {
    backgroundImage: `radial-gradient(circle at 0% 0%, ${theme.meshColor} 0%, transparent 45%), radial-gradient(circle at 100% 100%, ${theme.meshColor} 0%, transparent 55%), linear-gradient(120deg, transparent 0%, ${theme.meshColor} 40%, transparent 80%)`,
  };

  const noiseStyle: CSSProperties = {
    backgroundImage:
      'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0), radial-gradient(circle at 3px 3px, rgba(255,255,255,0.1) 0.5px, transparent 0)',
    backgroundSize: '4px 4px, 6px 6px',
    backgroundColor: theme.noiseColor,
  };

  const animatedGradient = (
    <motion.div
      key={`${theme.id}-gradient`}
      className={`page-gradient bg-gradient-to-br ${theme.gradient}`}
      initial={reduceMotion ? { opacity: 0.92, scale: 1 } : { opacity: 0, scale: 0.98 }}
      animate={reduceMotion ? { opacity: 0.92, scale: 1 } : { opacity: 0.92, scale: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0, scale: 1.02 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: 'easeOut' }}
      aria-hidden
    />
  );

  const contentWrapper = (
    <motion.div
      key={pathname}
      className="page-shell"
      initial={reduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -18, filter: 'blur(4px)' }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );

  const shouldAnimateLayers = ready && !reduceMotion;
  const gradientElement = shouldAnimateLayers ? (
    <AnimatePresence mode="wait">{animatedGradient}</AnimatePresence>
  ) : (
    <div className={`page-gradient bg-gradient-to-br ${theme.gradient}`} aria-hidden />
  );

  const haloElement = shouldAnimateLayers ? (
    <motion.div
      key={`${theme.id}-halo`}
      className="page-halo"
      style={haloStyle}
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 0.75 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      aria-hidden
    />
  ) : (
    <div className="page-halo" style={haloStyle} aria-hidden />
  );

  const beamElement = shouldAnimateLayers ? (
    <motion.div
      key={`${theme.id}-beams`}
      className="page-beams"
      style={beamStyle}
      initial={{ opacity: 0.12 }}
      animate={{ opacity: 0.24 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      aria-hidden
    />
  ) : (
    <div className="page-beams" style={beamStyle} aria-hidden />
  );

  const meshElement = shouldAnimateLayers ? (
    <motion.div
      key={`${theme.id}-mesh`}
      className="page-grid"
      style={meshStyle}
      initial={{ opacity: 0.05 }}
      animate={{ opacity: 0.12 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      aria-hidden
    />
  ) : (
    <div className="page-grid" style={meshStyle} aria-hidden />
  );

  const noiseElement = shouldAnimateLayers ? (
    <motion.div
      key={`${theme.id}-noise`}
      className="page-noise"
      style={noiseStyle as CSSProperties}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.16 }}
      transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.1 }}
      aria-hidden
    />
  ) : (
    <div className="page-noise" style={noiseStyle as CSSProperties} aria-hidden />
  );

  const contentElement = shouldAnimateLayers ? (
    <AnimatePresence mode="wait">{contentWrapper}</AnimatePresence>
  ) : (
    <div key={pathname} className="page-shell">
      {children}
    </div>
  );

  return (
    <div className="page-scene" data-variant={theme.variant} data-hydrated={hydrated}>
      {gradientElement}
      {haloElement}
      {beamElement}
      {meshElement}
      {noiseElement}
      {contentElement}
    </div>
  );
}
