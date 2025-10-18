'use client';

import {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useLayoutEffect,
  lazy,
  Suspense,
  type CSSProperties,
  type ReactElement,
} from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  FileText,
  GraduationCap,
  Home,
  Lightbulb,
  Mail,
  Map,
  Menu,
  Newspaper,
  Sparkles,
  User,
  Wrench,
  X,
} from 'lucide-react';

import PremiumButton from './PremiumButton';
import { usePerformanceProfile } from '@/components/PerformanceProfileProvider';
import { runWhenDocumentVisible } from '@/lib/browserEnvironment';
import { scheduleIdlePreload } from '@/lib/idlePreload';
import type { NavigationCatalog } from '@/lib/navigationCatalogData';
import {
  hasPrefetchedRoute,
  markRoutePrefetched,
  prunePrefetchedRoutes,
} from '@/lib/navigationPrefetchCache';
import type { MegaMenuMetrics } from '@/components/navigation/MegaMenuPanel';

const MegaMenuPanel = lazy(() => import('@/components/navigation/MegaMenuPanel'));

const MEGA_MENU_PORTAL_ID = 'mega-menu-root';

type BaseNavigationItem = {
  id: string;
  href: string;
  label: string;
  icon: LucideIcon;
  accent: string;
  hasMegaMenu?: boolean;
};

const baseNavigationItems = [
  {
    id: 'home',
    href: '/',
    label: 'Home',
    icon: Home,
    accent: 'from-sky-500/70 via-indigo-500/70 to-violet-600/70',
  },
  {
    id: 'research',
    href: '/research',
    label: 'Research',
    icon: BookOpen,
    accent: 'from-violet-500/80 via-purple-500/70 to-sky-500/70',
    hasMegaMenu: true,
  },
  {
    id: 'projects',
    href: '/projects',
    label: 'Projects',
    icon: Lightbulb,
    accent: 'from-amber-400/80 via-orange-500/70 to-rose-500/70',
    hasMegaMenu: true,
  },
  {
    id: 'tools',
    href: '/tools',
    label: 'Tools',
    icon: Wrench,
    accent: 'from-cyan-400/80 via-sky-500/70 to-blue-600/70',
    hasMegaMenu: true,
  },
  {
    id: 'atlas',
    href: '/atlas',
    label: 'Atlas',
    icon: Map,
    accent: 'from-fuchsia-500/80 via-purple-500/70 to-indigo-500/80',
    hasMegaMenu: true,
  },
  {
    id: 'academic',
    href: '/academic',
    label: 'Academic',
    icon: GraduationCap,
    accent: 'from-emerald-400/80 via-teal-500/70 to-blue-500/70',
    hasMegaMenu: true,
  },
  {
    id: 'articles',
    href: '/articles',
    label: 'Articles',
    icon: Newspaper,
    accent: 'from-rose-500/80 via-purple-500/70 to-blue-500/70',
    hasMegaMenu: true,
  },
  {
    id: 'about',
    href: '/about',
    label: 'About',
    icon: User,
    accent: 'from-purple-500/70 via-violet-500/60 to-indigo-500/60',
  },
  {
    id: 'whitepapers',
    href: '/whitepapers',
    label: 'Whitepapers',
    icon: FileText,
    accent: 'from-blue-500/70 via-indigo-500/60 to-slate-500/60',
  },
  {
    id: 'contact',
    href: '/contact',
    label: 'Contact',
    icon: Mail,
    accent: 'from-emerald-500/70 via-teal-500/60 to-cyan-500/60',
  },
] satisfies BaseNavigationItem[];

type DropdownMetrics = MegaMenuMetrics;

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

let catalogCache: NavigationCatalog | null = null;
let catalogPromise: Promise<NavigationCatalog> | null = null;

async function loadNavigationCatalog(): Promise<NavigationCatalog> {
  if (catalogCache) {
    return catalogCache;
  }

  if (!catalogPromise) {
    catalogPromise = import('@/lib/navigationCatalogData').then((module) => module.navigationCatalog);
  }

  const catalog = await catalogPromise;
  catalogCache = catalog;
  return catalog;
}

function createMegaMenuRoot(): HTMLElement | null {
  if (typeof document === 'undefined') {
    return null;
  }

  const existing = document.getElementById(MEGA_MENU_PORTAL_ID);
  if (existing) {
    return existing;
  }

  const element = document.createElement('div');
  element.id = MEGA_MENU_PORTAL_ID;
  element.className = 'pointer-events-none fixed inset-0 z-[60]';
  document.body.appendChild(element);
  return element;
}

function useMegaMenuPortal(): HTMLElement | null {
  const [portal, setPortal] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = createMegaMenuRoot();
    setPortal(root);
    return () => {
      if (root && root.childElementCount === 0) {
        root.remove();
      }
    };
  }, []);

  return portal;
}

export default function Navigation(): ReactElement {
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const navRailRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const prefetchedRoutes = useRef<Set<string>>(new Set());
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [catalog, setCatalog] = useState<NavigationCatalog | null>(() => catalogCache);
  const [catalogStatus, setCatalogStatus] = useState<'idle' | 'loading' | 'loaded'>(
    () => (catalogCache ? 'loaded' : 'idle'),
  );
  const [catalogError, setCatalogError] = useState<string | null>(null);
  const [megaState, setMegaState] = useState<{ id: string; metrics: DropdownMetrics } | null>(null);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(96);
  const megaPortal = useMegaMenuPortal();
  const reducedMotionSystem = useReducedMotion();
  const {
    deferHeavyWork,
    reducedMotion: reducedMotionProfile,
    slowConnection,
    constrainedConnection,
  } = usePerformanceProfile();
  const disableFancyMotion = Boolean(deferHeavyWork || reducedMotionProfile || reducedMotionSystem);

  const registerNavItem = useCallback(
    (id: string) => (element: HTMLDivElement | null) => {
      itemRefs.current[id] = element;
    },
    [],
  );

  const isActive = useCallback(
    (href: string) => {
      if (href === '/') {
        return pathname === '/';
      }
      return pathname?.startsWith(href) ?? false;
    },
    [pathname],
  );

  const ensureCatalog = useCallback(() => {
    if (catalogStatus !== 'idle') {
      return;
    }

    setCatalogStatus('loading');
    setCatalogError(null);

    loadNavigationCatalog()
      .then((data) => {
        setCatalog(data);
        setCatalogStatus('loaded');
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== 'production') {
          console.error('Failed to load navigation catalog', error);
        }
        setCatalogStatus('idle');
        setCatalogError('Navigation details failed to load. Links remain available.');
      });
  }, [catalogStatus]);

  const prefetchRoute = useCallback(
    (href: string | null | undefined) => {
      if (!href || href.startsWith('#') || href.startsWith('http')) {
        return;
      }

      if (deferHeavyWork || slowConnection || constrainedConnection) {
        return;
      }

      if (prefetchedRoutes.current.has(href) || hasPrefetchedRoute(href)) {
        return;
      }

      prefetchedRoutes.current.add(href);
      try {
        const maybePromise = router.prefetch(href);
        void Promise.resolve(maybePromise)
          .then(() => {
            markRoutePrefetched(href);
          })
          .catch(() => {
            prefetchedRoutes.current.delete(href);
          });
      } catch {
        prefetchedRoutes.current.delete(href);
      }
    },
    [constrainedConnection, deferHeavyWork, router, slowConnection],
  );

  const computeMetrics = useCallback(
    (id: string): DropdownMetrics | null => {
      const trigger = itemRefs.current[id];
      const nav = navRef.current;
      if (!trigger || !nav || typeof window === 'undefined') {
        return null;
      }

      const triggerRect = trigger.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const viewportPadding = 24;
      const maxWidth = Math.min(760, Math.max(viewportWidth - viewportPadding * 2, 360));
      const desiredWidth = Math.max(triggerRect.width + 320, 420);
      const width = Math.max(360, Math.min(desiredWidth, maxWidth));
      const triggerCenter = triggerRect.left + triggerRect.width / 2;
      const minCenter = viewportPadding + width / 2;
      const maxCenter = viewportWidth - viewportPadding - width / 2;
      const left = Math.min(Math.max(triggerCenter, minCenter), maxCenter);
      const top = Math.round((navRect.bottom ?? triggerRect.bottom) + 12);
      const maxHeight = Math.max(320, viewportHeight - top - viewportPadding);

      return {
        left,
        width,
        top,
        maxHeight,
      } satisfies DropdownMetrics;
    },
    [],
  );

  const openMegaMenu = useCallback(
    (id: string) => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }

      const metrics = computeMetrics(id);
      if (!metrics) {
        return;
      }

      setMegaState((current) => {
        if (current && current.id === id) {
          const currentMetrics = current.metrics;
          const unchanged =
            Math.abs(currentMetrics.left - metrics.left) < 0.5 &&
            Math.abs(currentMetrics.width - metrics.width) < 0.5 &&
            Math.abs(currentMetrics.top - metrics.top) < 0.5 &&
            Math.abs(currentMetrics.maxHeight - metrics.maxHeight) < 0.5;

          return unchanged ? current : { id, metrics };
        }
        return { id, metrics };
      });
    },
    [computeMetrics],
  );

  const closeMegaMenu = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMegaState(null);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      closeTimeoutRef.current = null;
      setMegaState(null);
    }, 140);
  }, []);

  const handleDesktopTriggerEnter = useCallback(
    (id: string, href: string) => {
      prefetchRoute(href);
      ensureCatalog();
      openMegaMenu(id);
    },
    [ensureCatalog, openMegaMenu, prefetchRoute],
  );

  const handleDesktopTriggerLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  const handleMegaMenuEnter = useCallback(
    (id: string) => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      openMegaMenu(id);
    },
    [openMegaMenu],
  );

  const handleMegaMenuLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  const handleNavigate = useCallback(() => {
    closeMegaMenu();
    setIsOpen(false);
    setMobileActive(null);
  }, [closeMegaMenu]);

  useEffect(() => {
    prunePrefetchedRoutes();
  }, []);

  useEffect(() => {
    const element = navRef.current;
    if (!element || typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (typeof ResizeObserver === 'undefined') {
      return;
    }
    const element = navRef.current;
    if (!element) {
      return;
    }

    const observer = new ResizeObserver(() => {
      const next = Math.round(element.getBoundingClientRect().height);
      setNavHeight((current) => (current !== next ? next : current));
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!megaState) {
      return;
    }

    const update = () => {
      const metrics = computeMetrics(megaState.id);
      if (!metrics) return;
      setMegaState((current) =>
        current && current.id === megaState.id ? { id: megaState.id, metrics } : current,
      );
    };

    update();

    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    };
  }, [computeMetrics, megaState]);

  useEffect(() => {
    if (!megaState) {
      return;
    }

    const entry = catalog?.[megaState.id];
    if (!entry) {
      return;
    }

    prefetchRoute(baseNavigationItems.find((item) => item.id === megaState.id)?.href);
    entry.dropdown?.forEach((item) => prefetchRoute(item.href));
    if (entry.meta?.highlight?.href) {
      prefetchRoute(entry.meta.highlight.href);
    }
  }, [catalog, megaState, prefetchRoute]);

  useEffect(() => {
    if (deferHeavyWork || slowConnection) {
      return;
    }

    return scheduleIdlePreload(() => import('@/components/navigation/MegaMenuPanel'), {
      timeout: 800,
    });
  }, [deferHeavyWork, slowConnection]);

  useEffect(() => {
    if (deferHeavyWork || slowConnection || constrainedConnection) {
      return;
    }

    return runWhenDocumentVisible(() => {
      const win = window as IdleWindow;
      let idleHandle: number | null = null;
      let timeoutHandle: number | null = null;

      const trigger = () => {
        ensureCatalog();
      };

      if (typeof win.requestIdleCallback === 'function') {
        idleHandle = win.requestIdleCallback(
          () => {
            idleHandle = null;
            trigger();
          },
          { timeout: 1000 },
        );
      } else {
        timeoutHandle = window.setTimeout(() => {
          timeoutHandle = null;
          trigger();
        }, 420);
      }

      return () => {
        if (idleHandle && typeof win.cancelIdleCallback === 'function') {
          win.cancelIdleCallback(idleHandle);
        }
        if (timeoutHandle) {
          window.clearTimeout(timeoutHandle);
        }
      };
    });
  }, [constrainedConnection, deferHeavyWork, ensureCatalog, slowConnection]);

  useEffect(() => {
    if (!megaState) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMegaMenu();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeMegaMenu, megaState]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setMobileActive(null);
    closeMegaMenu();
  }, [closeMegaMenu, pathname]);

  const desktopNav = useMemo(() => baseNavigationItems.filter(Boolean), []);

  const portalContent = megaState && megaPortal ? (
    <AnimatePresence>
      {megaState ? (
        <Suspense
          key={megaState.id}
          fallback={
            <MegaMenuFallback
              metrics={megaState.metrics}
              label={
                baseNavigationItems.find((item) => item.id === megaState.id)?.label ?? 'Navigation'
              }
              onEnter={() => handleMegaMenuEnter(megaState.id)}
              onLeave={handleMegaMenuLeave}
            />
          }
        >
          <MegaMenuPanel
            dropdownId={`mega-${megaState.id}`}
            dropdownMetrics={megaState.metrics}
            baseLabel={
              baseNavigationItems.find((item) => item.id === megaState.id)?.label ?? 'Navigation'
            }
            entry={catalog?.[megaState.id]}
            catalogError={catalogError}
            showSkeleton={catalogStatus === 'loading' && !catalog?.[megaState.id] && !catalogError}
            showError={Boolean(catalogError) && !catalog?.[megaState.id]}
            onEnter={() => handleMegaMenuEnter(megaState.id)}
            onLeave={handleMegaMenuLeave}
            onNavigate={handleNavigate}
            prefetchRoute={prefetchRoute}
            disableMotion={disableFancyMotion}
          />
        </Suspense>
      ) : null}
    </AnimatePresence>
  ) : null;

  return (
    <motion.nav
      ref={navRef}
      initial={disableFancyMotion ? false : { y: -60, opacity: 0 }}
      animate={disableFancyMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
      transition={disableFancyMotion ? undefined : { duration: 0.48, ease: 'easeOut' }}
      role="navigation"
      aria-label="Primary navigation"
      className={`nav-premium relative z-50 overflow-visible ${scrolled ? 'scrolled' : ''}`}
      style={{ '--nav-height': `${navHeight}px` } as CSSProperties}
    >
      {!disableFancyMotion && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-sky-500/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      )}
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 w-full items-center justify-between gap-6">
          <Link href="/" className="nav-logo-premium relative flex items-center gap-3" onClick={handleNavigate}>
            <motion.div
              whileHover={disableFancyMotion ? undefined : { scale: 1.04, rotate: 4 }}
              whileTap={disableFancyMotion ? undefined : { scale: 0.96 }}
              className="nav-logo-icon relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl"
            >
              <motion.img
                src="/brand/black-cat-solid.svg?v=2"
                alt="Traceremove"
                className="h-7 w-7"
                loading="lazy"
                decoding="async"
                initial={disableFancyMotion ? false : { rotate: 0 }}
                whileHover={disableFancyMotion ? undefined : { rotate: -8 }}
                transition={disableFancyMotion ? undefined : { duration: 0.35, ease: 'easeOut' }}
              />
            </motion.div>
            <div className="flex flex-col text-white">
              <span className="font-ibm-sans text-xl font-semibold tracking-tight">Traceremove</span>
              <span className="font-ibm-sans text-xs font-medium uppercase tracking-[0.38em] text-white/70">
                AI Research Lab
              </span>
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div
              ref={navRailRef}
              className="relative flex items-center gap-1 rounded-3xl border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-xl"
              onMouseLeave={handleDesktopTriggerLeave}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                  scheduleClose();
                }
              }}
            >
              {desktopNav.map((item, index) => {
                const Icon = item.icon;
                const isDropdown = Boolean(item.hasMegaMenu);
                const isActiveLink = isActive(item.href);
                const dropdownId = `mega-${item.id}`;

                return (
                  <motion.div
                    key={item.id}
                    ref={registerNavItem(item.id)}
                    initial={disableFancyMotion ? false : { opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={disableFancyMotion ? undefined : { duration: 0.4, delay: index * 0.05 }}
                    onMouseEnter={() => handleDesktopTriggerEnter(item.id, item.href)}
                    onFocus={() => handleDesktopTriggerEnter(item.id, item.href)}
                  >
                    <Link
                      href={item.href}
                      onMouseEnter={() => prefetchRoute(item.href)}
                      onFocus={() => prefetchRoute(item.href)}
                      onClick={handleNavigate}
                      className={`nav-link-premium group relative inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold tracking-tight text-white/80 transition-all duration-300 ${isActiveLink ? 'text-white' : ''}`}
                      aria-haspopup={isDropdown ? 'true' : undefined}
                      aria-expanded={megaState?.id === item.id}
                      aria-controls={isDropdown ? dropdownId : undefined}
                      aria-current={isActiveLink ? 'page' : undefined}
                    >
                      <span
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.accent}`}
                      />
                      <span className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative z-10 flex items-center gap-2">
                        <motion.span
                          initial={false}
                          animate={{
                            scale: isActiveLink ? 1.05 : 1,
                            rotate: disableFancyMotion ? 0 : isActiveLink ? 0 : -2,
                          }}
                          transition={disableFancyMotion ? undefined : { type: 'spring', stiffness: 360, damping: 24 }}
                          className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white"
                        >
                          <Icon className="h-4 w-4" strokeWidth={2.3} />
                        </motion.span>
                        <span className="font-ibm-sans text-sm uppercase tracking-[0.24em] text-[11px] text-white/80 group-hover:text-white">
                          {item.label}
                        </span>
                        {isDropdown && (
                          <ChevronDown
                            className={`h-3 w-3 transition-transform ${megaState?.id === item.id ? 'rotate-180 text-white' : 'text-white/60 group-hover:text-white'}`}
                            strokeWidth={2.2}
                          />
                        )}
                      </span>
                      {isActiveLink && (
                        disableFancyMotion ? (
                          <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/40" />
                        ) : (
                          <motion.span
                            layoutId="nav-active-glow"
                            className="pointer-events-none absolute inset-0 rounded-2xl border border-white/40"
                            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          />
                        )
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => {
                setIsOpen((prev) => !prev);
                setMobileActive(null);
              }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[var(--nav-height)] z-40 mt-2 h-[calc(100vh-var(--nav-height))] overflow-y-auto bg-slate-950/95 backdrop-blur-3xl"
          >
            <div className="space-y-4 px-4 pb-16 pt-6">
              {desktopNav.map((item) => {
                const Icon = item.icon;
                const entry = catalog?.[item.id];
                const dropdown = entry?.dropdown ?? [];
                const hasDropdown = dropdown.length > 0;
                const expanded = mobileActive === item.id;
                const meta = entry?.meta;
                const showSkeleton = catalogStatus === 'loading' && !entry && !catalogError;
                const showError = Boolean(catalogError) && !entry;

                return (
                  <div
                    key={`${item.id}-mobile`}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <Link
                        href={item.href}
                        className="flex flex-1 items-center gap-3"
                        onClick={handleNavigate}
                        onFocus={() => ensureCatalog()}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                          <Icon className="h-5 w-5" strokeWidth={2.3} />
                        </span>
                        <div>
                          <p className="text-base font-semibold text-white">{item.label}</p>
                          {meta ? (
                            <p className="text-xs text-white/70">{meta.tagline}</p>
                          ) : showSkeleton ? (
                            <p className="text-xs text-white/60">Loading navigation…</p>
                          ) : null}
                        </div>
                      </Link>
                      {(item.hasMegaMenu || hasDropdown || showSkeleton || showError) && (
                        <motion.button
                          type="button"
                          aria-expanded={expanded}
                          onClick={() => {
                            ensureCatalog();
                            setMobileActive((current) => (current === item.id ? null : item.id));
                          }}
                          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white"
                        >
                          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown strokeWidth={2.2} className="h-5 w-5" />
                          </motion.div>
                        </motion.button>
                      )}
                    </div>

                    {meta ? (
                      <p className="mt-3 text-sm text-white/70">{meta.description}</p>
                    ) : showSkeleton ? (
                      <div className="mt-3 h-4 w-3/4 animate-pulse rounded bg-white/10" />
                    ) : null}

                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="mt-3 space-y-2 border-t border-white/10 pt-3"
                        >
                          {dropdown.length > 0 ? (
                            dropdown.map((dropdownItem) => (
                              <Link
                                key={`${dropdownItem.href}-mobile`}
                                href={dropdownItem.href}
                                onClick={handleNavigate}
                                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-3 py-3 transition-all duration-200 hover:bg-white/10"
                              >
                                <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white">
                                  <dropdownItem.icon className="h-4 w-4" strokeWidth={2.3} />
                                </span>
                                <div className="flex-1">
                                  <p className="text-sm font-semibold text-white">{dropdownItem.label}</p>
                                  <p className="text-xs text-white/70">{dropdownItem.description}</p>
                                </div>
                                <ArrowRight className="mt-1 h-4 w-4 text-white/60" />
                              </Link>
                            ))
                          ) : showSkeleton ? (
                            Array.from({ length: 3 }).map((_, skeletonIndex) => (
                              <div
                                key={`mobile-skeleton-${skeletonIndex}`}
                                className="h-12 rounded-2xl border border-white/10 bg-white/5"
                              />
                            ))
                          ) : showError ? (
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">
                              Try refreshing to load this menu.
                            </div>
                          ) : (
                            <p className="text-xs text-white/70">Navigation details will load shortly.</p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="space-y-3 px-2 pt-4">
                <PremiumButton
                  href="/atlas"
                  icon={Sparkles}
                  iconPosition="left"
                  size="lg"
                  className="w-full justify-center"
                  onClick={handleNavigate}
                >
                  Open Atlas
                </PremiumButton>
                <PremiumButton
                  href="/contact"
                  variant="secondary"
                  icon={Mail}
                  iconPosition="left"
                  size="lg"
                  className="w-full justify-center"
                  onClick={handleNavigate}
                >
                  Book a strategy call
                </PremiumButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {megaPortal && portalContent ? createPortal(portalContent, megaPortal) : null}
    </motion.nav>
  );
}

type MegaMenuFallbackProps = {
  metrics: DropdownMetrics;
  label: string;
  onEnter: () => void;
  onLeave: () => void;
};

function MegaMenuFallback({ metrics, label, onEnter, onLeave }: MegaMenuFallbackProps): ReactElement {
  return (
    <div
      className="nav-mega pointer-events-auto"
      role="menu"
      aria-label={`${label} mega menu`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        left: metrics.left,
        top: metrics.top,
        transform: 'translateX(-50%)',
        width: metrics.width,
        minWidth: metrics.width,
        maxHeight: metrics.maxHeight,
        position: 'fixed',
        zIndex: 60,
      }}
    >
      <div className="relative flex max-h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.55)] backdrop-blur-3xl">
        <div className="space-y-4">
          <div className="h-3 w-32 rounded-full bg-white/10" aria-hidden="true" />
          <div className="h-4 w-48 rounded-full bg-white/10" aria-hidden="true" />
          <div className="grid gap-3 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="h-20 rounded-3xl border border-white/10 bg-white/5"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
