'use client';

import { type CSSProperties, type ReactNode, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import useMotionModule from '@/hooks/useMotionModule';
import { usePerformanceProfile } from '@/components/PerformanceProfileProvider';

type SceneVariant =
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

interface ThemePreset {
  id: string;
  variant: SceneVariant;
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
    beamColor: 'rgba(37, 99, 235, 0.24)',
    beamAngle: 128,
    meshColor: 'rgba(99, 102, 241, 0.18)',
    noiseColor: 'rgba(148, 163, 255, 0.12)',
    matcher: (path) => path === '/',
  },
  {
    id: 'atlas-blueprint',
    variant: 'atlasBlueprint',
    gradient: 'from-[#020617]/96 via-[#0c1a32]/90 to-[#020617]/96',
    highlight: 'rgba(56, 189, 248, 0.3)',
    highlightAlt: 'rgba(129, 140, 248, 0.24)',
    highlightPosition: '22% 26%',
    highlightAltPosition: '78% 72%',
    beamColor: 'rgba(192, 132, 252, 0.24)',
    beamAngle: 134,
    meshColor: 'rgba(129, 140, 248, 0.2)',
    noiseColor: 'rgba(125, 211, 252, 0.14)',
    matcher: (path) => path.startsWith('/atlas/') && path !== '/atlas/',
  },
  {
    id: 'atlas',
    variant: 'atlas',
    gradient: 'from-[#020617]/96 via-[#0f1d3a]/90 to-[#020617]/96',
    highlight: 'rgba(96, 165, 250, 0.3)',
    highlightAlt: 'rgba(168, 85, 247, 0.24)',
    highlightPosition: '20% 24%',
    highlightAltPosition: '82% 70%',
    beamColor: 'rgba(147, 51, 234, 0.24)',
    beamAngle: 130,
    meshColor: 'rgba(56, 189, 248, 0.2)',
    noiseColor: 'rgba(129, 140, 248, 0.14)',
    matcher: (path) => path === '/atlas' || path === '/atlas/',
  },
  {
    id: 'research',
    variant: 'research',
    gradient: 'from-[#020617]/96 via-[#0b1230]/90 to-[#020617]/96',
    highlight: 'rgba(56, 189, 248, 0.3)',
    highlightAlt: 'rgba(168, 85, 247, 0.24)',
    highlightPosition: '18% 24%',
    highlightAltPosition: '84% 70%',
    beamColor: 'rgba(59, 130, 246, 0.26)',
    beamAngle: 124,
    meshColor: 'rgba(37, 99, 235, 0.2)',
    noiseColor: 'rgba(94, 234, 212, 0.12)',
    matcher: (path) => path.startsWith('/research'),
  },
  {
    id: 'whitepapers',
    variant: 'whitepapers',
    gradient: 'from-[#08061a]/96 via-[#151135]/88 to-[#08061a]/96',
    highlight: 'rgba(76, 29, 149, 0.32)',
    highlightAlt: 'rgba(124, 58, 237, 0.26)',
    highlightPosition: '18% 24%',
    highlightAltPosition: '80% 70%',
    beamColor: 'rgba(236, 72, 153, 0.24)',
    beamAngle: 122,
    meshColor: 'rgba(124, 58, 237, 0.2)',
    noiseColor: 'rgba(56, 189, 248, 0.12)',
    matcher: (path) => path.startsWith('/whitepapers'),
  },
  {
    id: 'projects',
    variant: 'projects',
    gradient: 'from-[#15060c]/96 via-[#2b0f1d]/88 to-[#15060c]/96',
    highlight: 'rgba(251, 146, 60, 0.3)',
    highlightAlt: 'rgba(236, 72, 153, 0.24)',
    highlightPosition: '20% 24%',
    highlightAltPosition: '80% 70%',
    beamColor: 'rgba(249, 115, 22, 0.25)',
    beamAngle: 118,
    meshColor: 'rgba(251, 146, 60, 0.2)',
    noiseColor: 'rgba(254, 215, 170, 0.12)',
    matcher: (path) => path.startsWith('/projects'),
  },
  {
    id: 'tools',
    variant: 'tools',
    gradient: 'from-[#03131d]/96 via-[#05273a]/88 to-[#03131d]/96',
    highlight: 'rgba(14, 165, 233, 0.3)',
    highlightAlt: 'rgba(99, 102, 241, 0.24)',
    highlightPosition: '18% 22%',
    highlightAltPosition: '82% 68%',
    beamColor: 'rgba(6, 182, 212, 0.26)',
    beamAngle: 130,
    meshColor: 'rgba(56, 189, 248, 0.2)',
    noiseColor: 'rgba(125, 211, 252, 0.12)',
    matcher: (path) => path.startsWith('/tools'),
  },
  {
    id: 'articles',
    variant: 'articles',
    gradient: 'from-[#120617]/96 via-[#1f1030]/88 to-[#120617]/96',
    highlight: 'rgba(251, 113, 133, 0.3)',
    highlightAlt: 'rgba(192, 132, 252, 0.24)',
    highlightPosition: '18% 24%',
    highlightAltPosition: '82% 72%',
    beamColor: 'rgba(236, 72, 153, 0.24)',
    beamAngle: 122,
    meshColor: 'rgba(251, 113, 133, 0.2)',
    noiseColor: 'rgba(244, 114, 182, 0.12)',
    matcher: (path) => path.startsWith('/articles') || path.startsWith('/publications'),
  },
  {
    id: 'assistant',
    variant: 'assistant',
    gradient: 'from-[#020b18]/96 via-[#0a1a33]/88 to-[#020b18]/96',
    highlight: 'rgba(56, 189, 248, 0.32)',
    highlightAlt: 'rgba(34, 211, 238, 0.26)',
    highlightPosition: '20% 26%',
    highlightAltPosition: '80% 72%',
    beamColor: 'rgba(124, 58, 237, 0.24)',
    beamAngle: 132,
    meshColor: 'rgba(192, 132, 252, 0.2)',
    noiseColor: 'rgba(125, 211, 252, 0.14)',
    matcher: (path) => path.startsWith('/assistant'),
  },
  {
    id: 'faq',
    variant: 'faq',
    gradient: 'from-[#020b18]/96 via-[#141f3b]/88 to-[#020b18]/96',
    highlight: 'rgba(129, 140, 248, 0.3)',
    highlightAlt: 'rgba(56, 189, 248, 0.24)',
    highlightPosition: '18% 24%',
    highlightAltPosition: '82% 70%',
    beamColor: 'rgba(168, 85, 247, 0.24)',
    beamAngle: 126,
    meshColor: 'rgba(34, 211, 238, 0.2)',
    noiseColor: 'rgba(191, 219, 254, 0.12)',
    matcher: (path) => path.startsWith('/faq'),
  },
  {
    id: 'contact',
    variant: 'contact',
    gradient: 'from-[#04101a]/96 via-[#0a1f33]/88 to-[#04101a]/96',
    highlight: 'rgba(37, 99, 235, 0.32)',
    highlightAlt: 'rgba(56, 189, 248, 0.24)',
    highlightPosition: '22% 28%',
    highlightAltPosition: '78% 72%',
    beamColor: 'rgba(124, 58, 237, 0.24)',
    beamAngle: 126,
    meshColor: 'rgba(20, 184, 166, 0.2)',
    noiseColor: 'rgba(148, 197, 253, 0.12)',
    matcher: (path) => path.startsWith('/contact'),
  },
  {
    id: 'sitemap',
    variant: 'sitemap',
    gradient: 'from-[#050812]/96 via-[#0d1424]/88 to-[#050812]/96',
    highlight: 'rgba(56, 189, 248, 0.3)',
    highlightAlt: 'rgba(99, 102, 241, 0.24)',
    highlightPosition: '20% 24%',
    highlightAltPosition: '82% 70%',
    beamColor: 'rgba(249, 115, 22, 0.24)',
    beamAngle: 128,
    meshColor: 'rgba(34, 197, 94, 0.2)',
    noiseColor: 'rgba(148, 197, 253, 0.12)',
    matcher: (path) => path.startsWith('/site-map'),
  },
  {
    id: 'members',
    variant: 'members',
    gradient: 'from-[#050b16]/96 via-[#111b34]/88 to-[#050b16]/96',
    highlight: 'rgba(99, 102, 241, 0.3)',
    highlightAlt: 'rgba(56, 189, 248, 0.24)',
    highlightPosition: '18% 24%',
    highlightAltPosition: '80% 70%',
    beamColor: 'rgba(192, 132, 252, 0.24)',
    beamAngle: 120,
    meshColor: 'rgba(34, 211, 238, 0.2)',
    noiseColor: 'rgba(165, 180, 252, 0.12)',
    matcher: (path) => path.startsWith('/ai-lab-members'),
  },
  {
    id: 'legal',
    variant: 'legal',
    gradient: 'from-[#060910]/96 via-[#101523]/88 to-[#060910]/96',
    highlight: 'rgba(56, 189, 248, 0.3)',
    highlightAlt: 'rgba(34, 211, 238, 0.24)',
    highlightPosition: '20% 24%',
    highlightAltPosition: '82% 70%',
    beamColor: 'rgba(16, 185, 129, 0.24)',
    beamAngle: 118,
    meshColor: 'rgba(125, 211, 252, 0.18)',
    noiseColor: 'rgba(148, 197, 253, 0.12)',
    matcher: (path) => path.startsWith('/legal') || path.startsWith('/operational'),
  },
  {
    id: 'about',
    variant: 'about',
    gradient: 'from-[#060b18]/96 via-[#121c34]/88 to-[#060b18]/96',
    highlight: 'rgba(76, 29, 149, 0.32)',
    highlightAlt: 'rgba(14, 165, 233, 0.24)',
    highlightPosition: '18% 24%',
    highlightAltPosition: '82% 70%',
    beamColor: 'rgba(124, 58, 237, 0.26)',
    beamAngle: 120,
    meshColor: 'rgba(99, 102, 241, 0.2)',
    noiseColor: 'rgba(153, 246, 228, 0.12)',
    matcher: (path) => path.startsWith('/about'),
  },
  {
    id: 'academic',
    variant: 'academic',
    gradient: 'from-[#050b16]/96 via-[#0f1f36]/88 to-[#050b16]/96',
    highlight: 'rgba(37, 99, 235, 0.3)',
    highlightAlt: 'rgba(124, 58, 237, 0.24)',
    highlightPosition: '18% 24%',
    highlightAltPosition: '84% 70%',
    beamColor: 'rgba(34, 197, 94, 0.24)',
    beamAngle: 118,
    meshColor: 'rgba(14, 165, 233, 0.2)',
    noiseColor: 'rgba(191, 219, 254, 0.12)',
    matcher: (path) => path.startsWith('/academic') || path.startsWith('/cv'),
  },
  {
    id: 'philosophy',
    variant: 'philosophy',
    gradient: 'from-[#080514]/96 via-[#160c2a]/88 to-[#080514]/96',
    highlight: 'rgba(124, 58, 237, 0.3)',
    highlightAlt: 'rgba(168, 85, 247, 0.24)',
    highlightPosition: '20% 24%',
    highlightAltPosition: '82% 72%',
    beamColor: 'rgba(56, 189, 248, 0.24)',
    beamAngle: 122,
    meshColor: 'rgba(34, 211, 238, 0.2)',
    noiseColor: 'rgba(196, 181, 253, 0.14)',
    matcher: (path) => path.startsWith('/philosophy'),
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
  const systemReduceMotion = usePrefersReducedMotion();
  const { deferHeavyWork, reducedMotion: profileReducedMotion } = usePerformanceProfile();
  const shouldReduceMotion = profileReducedMotion || systemReduceMotion;
  const [hydrated, setHydrated] = useState(false);
  const [ready, setReady] = useState(false);

  const shouldAttemptAnimation = ready && !shouldReduceMotion && !deferHeavyWork;
  const simplifiedBackground = shouldReduceMotion || deferHeavyWork;
  const motionModule = useMotionModule(shouldAttemptAnimation);

  useEffect(() => {
    setHydrated(true);

    if (shouldReduceMotion || deferHeavyWork) {
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
  }, [deferHeavyWork, shouldReduceMotion]);

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

  let gradientElement: ReactNode = (
    <div key={`${theme.id}-gradient`} className={`page-gradient bg-gradient-to-br ${theme.gradient}`} aria-hidden />
  );

  let haloElement: ReactNode = <div className="page-halo" style={haloStyle} aria-hidden />;
  let beamElement: ReactNode = <div className="page-beams" style={beamStyle} aria-hidden />;
  let meshElement: ReactNode = <div className="page-grid" style={meshStyle} aria-hidden />;
  let noiseElement: ReactNode = <div className="page-noise" style={noiseStyle as CSSProperties} aria-hidden />;

  if (simplifiedBackground) {
    haloElement = (
      <div
        className="page-halo"
        style={{ ...haloStyle, opacity: 0.55 }}
        aria-hidden
      />
    );
    beamElement = null;
    meshElement = null;
    noiseElement = null;
  }

  let contentElement: ReactNode = (
    <div key={pathname} className="page-shell">
      {children}
    </div>
  );

  if (shouldAttemptAnimation && motionModule) {
    gradientElement = (
      <motionModule.AnimatePresence mode="wait">
        <motionModule.motion.div
          key={`${theme.id}-gradient`}
          className={`page-gradient bg-gradient-to-br ${theme.gradient}`}
          initial={shouldReduceMotion ? { opacity: 0.92, scale: 1 } : { opacity: 0, scale: 0.98 }}
          animate={shouldReduceMotion ? { opacity: 0.92, scale: 1 } : { opacity: 0.92, scale: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 1.02 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: 'easeOut' }}
          aria-hidden
        />
      </motionModule.AnimatePresence>
    );

    haloElement = (
      <motionModule.motion.div
        key={`${theme.id}-halo`}
        className="page-halo"
        style={haloStyle}
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        aria-hidden
      />
    );

    beamElement = (
      <motionModule.motion.div
        key={`${theme.id}-beams`}
        className="page-beams"
        style={beamStyle}
        initial={{ opacity: 0.12 }}
        animate={{ opacity: 0.24 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        aria-hidden
      />
    );

    meshElement = (
      <motionModule.motion.div
        key={`${theme.id}-mesh`}
        className="page-grid"
        style={meshStyle}
        initial={{ opacity: 0.05 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        aria-hidden
      />
    );

    noiseElement = (
      <motionModule.motion.div
        key={`${theme.id}-noise`}
        className="page-noise"
        style={noiseStyle as CSSProperties}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.16 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.1 }}
        aria-hidden
      />
    );

    const animatedContent = (
      <motionModule.motion.div
        key={pathname}
        className="page-shell"
        initial={shouldReduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 24, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -18, filter: 'blur(4px)' }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motionModule.motion.div>
    );

    contentElement = <motionModule.AnimatePresence mode="wait">{animatedContent}</motionModule.AnimatePresence>;
  }

  return (
    <div
      className="page-scene"
      data-variant={theme.variant}
      data-hydrated={hydrated}
      data-simplified={simplifiedBackground ? 'true' : undefined}
    >
      {gradientElement}
      {haloElement}
      {beamElement}
      {meshElement}
      {noiseElement}
      {contentElement}
    </div>
  );
}
