'use client';

import { useState, useEffect, useRef, useCallback, type CSSProperties } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Menu,
  X,
  Home,
  BookOpen,
  User,
  Wrench,
  FileText,
  Mail,
  ChevronDown,
  Lightbulb,
  Map,
  GraduationCap,
  Newspaper,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import PremiumButton from './PremiumButton';
import { runWhenDocumentVisible, shouldDeferHeavyWork } from '@/lib/browserEnvironment';
import type { NavigationCatalog } from '@/lib/navigationCatalogData';
import {
  hasPrefetchedRoute,
  markRoutePrefetched,
  prunePrefetchedRoutes,
} from '@/lib/navigationPrefetchCache';

type BaseNavigationItem = {
  id: string;
  href: string;
  label: string;
  icon: LucideIcon;
  accent: string;
  hasMegaMenu?: boolean;
};

type DropdownMetrics = {
  left: number;
  width: number;
  top: number;
  maxHeight: number;
};

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

const baseNavigationItems: BaseNavigationItem[] = [
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
];


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActive, setMobileActive] = useState<string | null>(null);
  const [dropdownMetrics, setDropdownMetrics] = useState<DropdownMetrics>({
    left: 0,
    width: 680,
    top: 96,
    maxHeight: 640,
  });
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef<HTMLElement | null>(null);
  const navRailRef = useRef<HTMLDivElement | null>(null);
  const navItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const prefetchedRoutes = useRef<Set<string>>(new Set());
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [navHeight, setNavHeight] = useState(96);
  const [catalog, setCatalog] = useState<NavigationCatalog | null>(null);
  const [catalogError, setCatalogError] = useState<string | null>(null);
  const catalogStatus = useRef<'idle' | 'loading' | 'loaded'>('idle');

  const updateDropdownMetrics = useCallback(
    (id: string) => {
      const rail = navRailRef.current;
      const trigger = navItemRefs.current[id];

      if (!rail || !trigger) return;

      const railRect = rail.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();
      const viewportPadding = 24;
      const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : railRect.width;
      const containerLeft = Math.max(railRect.left, viewportPadding);
      const containerRight = Math.min(railRect.right, viewportWidth - viewportPadding);
      const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
      const maxWidth = Math.min(760, Math.max(viewportWidth - viewportPadding * 2, 360));
      const desiredWidth = Math.max(triggerRect.width + 320, 420);
      const width = Math.max(360, Math.min(desiredWidth, maxWidth));
      const triggerCenterViewport = triggerRect.left + triggerRect.width / 2;
      const minCenter = containerLeft + width / 2;
      const maxCenter = containerRight - width / 2;
      const clampedCenter = Math.min(Math.max(triggerCenterViewport, minCenter), maxCenter);
      const navRect = navRef.current?.getBoundingClientRect();
      const navBottom = navRect?.bottom ?? railRect.bottom;
      const top = Math.max(navBottom + 12, 72);
      const availableHeight = Math.max(viewportHeight - top - viewportPadding, 320);

      const nextMetrics: DropdownMetrics = {
        left: clampedCenter,
        width,
        top,
        maxHeight: availableHeight,
      };

      setDropdownMetrics((current) => {
        if (
          Math.abs(current.left - nextMetrics.left) < 0.5 &&
          Math.abs(current.width - nextMetrics.width) < 0.5 &&
          Math.abs(current.top - nextMetrics.top) < 0.5 &&
          Math.abs(current.maxHeight - nextMetrics.maxHeight) < 0.5
        ) {
          return current;
        }

        return nextMetrics;
      });
    },
    []
  );

  const registerNavItem = useCallback(
    (id: string) => (element: HTMLDivElement | null) => {
      navItemRefs.current[id] = element;
    },
    []
  );

  const prefetchRoute = useCallback(
    (href: string | null | undefined) => {
      if (!href || href.startsWith('http') || href.startsWith('#')) {
        return;
      }

      const cache = prefetchedRoutes.current;
      if (cache.has(href) || hasPrefetchedRoute(href)) {
        return;
      }

      if (shouldDeferHeavyWork()) {
        return;
      }

      cache.add(href);

      try {
        const maybePromise = router.prefetch(href);
        void Promise.resolve(maybePromise)
          .then(() => {
            markRoutePrefetched(href);
          })
          .catch(() => {
            cache.delete(href);
          });
      } catch {
        cache.delete(href);
      }
    },
    [router]
  );

  const ensureCatalog = useCallback(() => {
    if (catalogStatus.current !== 'idle') {
      return;
    }

    catalogStatus.current = 'loading';
    setCatalogError(null);

    import('@/lib/navigationCatalogData')
      .then((mod) => {
        catalogStatus.current = 'loaded';
        setCatalog(mod.navigationCatalog as NavigationCatalog);
      })
      .catch((error) => {
        catalogStatus.current = 'idle';
        if (process.env.NODE_ENV !== 'production') {
          console.error('Failed to load navigation catalog', error);
        }
        setCatalogError('Navigation details failed to load. Links remain available.');
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    prunePrefetchedRoutes();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (shouldDeferHeavyWork()) {
      return;
    }

    return runWhenDocumentVisible(() => {
      if (catalogStatus.current !== 'idle') {
        return;
      }

      const withIdle = window as IdleWindow;
      let idleHandle: number | null = null;
      let timeoutHandle: number | null = null;

      const triggerLoad = () => {
        idleHandle = null;
        timeoutHandle = null;
        ensureCatalog();
      };

      if (typeof withIdle.requestIdleCallback === 'function') {
        idleHandle = withIdle.requestIdleCallback(
          () => {
            triggerLoad();
          },
          { timeout: 1200 },
        );
      } else {
        timeoutHandle = window.setTimeout(() => {
          triggerLoad();
        }, 420);
      }

      return () => {
        if (idleHandle !== null && typeof withIdle.cancelIdleCallback === 'function') {
          withIdle.cancelIdleCallback(idleHandle);
        }
        if (timeoutHandle !== null) {
          window.clearTimeout(timeoutHandle);
        }
      };
    });
  }, [ensureCatalog]);

  useEffect(() => {
    if (!activeDropdown) return;
    updateDropdownMetrics(activeDropdown);
  }, [activeDropdown, updateDropdownMetrics, navHeight]);

  useEffect(() => {
    if (!activeDropdown) return;
    const entry = catalog?.[activeDropdown];
    if (!entry) return;

    entry.dropdown?.forEach((item) => prefetchRoute(item.href));
    const highlightHref = entry.meta?.highlight?.href;
    if (highlightHref) {
      prefetchRoute(highlightHref);
    }
  }, [activeDropdown, catalog, prefetchRoute]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    return runWhenDocumentVisible(() => {
      if (shouldDeferHeavyWork()) {
        return;
      }

      const withIdle = window as IdleWindow;
      const destinations = baseNavigationItems.flatMap((item) => {
        const entry = catalog?.[item.id];
        const highlightHref = entry?.meta?.highlight?.href ?? null;
        const dropdownHrefs = entry?.dropdown?.map((entry) => entry.href) ?? [];
        return [item.href, ...dropdownHrefs, highlightHref];
      });

      const queue = Array.from(
        new Set(destinations.filter((href): href is string => Boolean(href) && href !== pathname)),
      ).slice(0, 20);

      if (!queue.length) {
        return;
      }

      let idleHandle: number | null = null;
      let timeoutHandle: number | null = null;

      const flushQueue = (deadline?: IdleDeadline) => {
        const shouldRun = () => {
          if (!deadline) return true;
          return deadline.timeRemaining() > 6 || deadline.didTimeout;
        };

        while (queue.length && shouldRun()) {
          const next = queue.shift();
          if (next) {
            prefetchRoute(next);
          }
        }

        if (queue.length) {
          schedule();
        }
      };

      function schedule() {
        if (withIdle.requestIdleCallback) {
          idleHandle = withIdle.requestIdleCallback((deadline) => {
            idleHandle = null;
            flushQueue(deadline);
          }, { timeout: 1500 });
        } else {
          timeoutHandle = window.setTimeout(() => {
            timeoutHandle = null;
            flushQueue();
          }, 240);
        }
      }

      schedule();

      return () => {
        if (idleHandle !== null && typeof withIdle.cancelIdleCallback === 'function') {
          withIdle.cancelIdleCallback(idleHandle);
        }
        if (timeoutHandle !== null) {
          window.clearTimeout(timeoutHandle);
        }
      };
    });
  }, [catalog, pathname, prefetchRoute]);

  useEffect(() => {
    if (!activeDropdown) return;

    const handleResize = () => updateDropdownMetrics(activeDropdown);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeDropdown, updateDropdownMetrics]);

  useEffect(() => {
    if (!activeDropdown) return;
    if (typeof window === 'undefined') return;
    const rail = navRailRef.current;
    if (!rail || typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(() => updateDropdownMetrics(activeDropdown));
    observer.observe(rail);

    return () => observer.disconnect();
  }, [activeDropdown, updateDropdownMetrics]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileActive(null);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const element = navRef.current;
    if (!element) return;

    const withIdle = window as IdleWindow;
    let cancelled = false;
    let idleHandle: number | null = null;
    let timeoutHandle: number | null = null;

    const updateHeight = () => {
      if (!cancelled) {
        const nextHeight = Math.round(element.getBoundingClientRect().height);
        setNavHeight((current) => (current !== nextHeight ? nextHeight : current));
      }
    };

    if (withIdle.requestIdleCallback) {
      idleHandle = withIdle.requestIdleCallback(() => {
        idleHandle = null;
        updateHeight();
      }, { timeout: 300 });
    } else {
      timeoutHandle = window.setTimeout(() => {
        timeoutHandle = null;
        updateHeight();
      }, 160);
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
  }, []);

  useEffect(() => {
    if (!isOpen && !activeDropdown) {
      return;
    }

    if (typeof window === 'undefined') return;
    const element = navRef.current;
    if (!element) return;

    const updateHeight = () => {
      const nextHeight = Math.round(element.getBoundingClientRect().height);
      setNavHeight((current) => (current !== nextHeight ? nextHeight : current));
    };

    updateHeight();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }

    const observer = new ResizeObserver(() => updateHeight());
    observer.observe(element);

    return () => observer.disconnect();
  }, [activeDropdown, isOpen]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setMobileActive(null);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleMenu = () =>
    setIsOpen((value) => {
      if (value) {
        setMobileActive(null);
        setActiveDropdown(null);
      }
      return !value;
    });

  const handleDropdownEnter = (id: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }

    ensureCatalog();
    setActiveDropdown(id);

    const navItem = baseNavigationItems.find((item) => item.id === id);
    if (navItem) {
      prefetchRoute(navItem.href);
    }

    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => updateDropdownMetrics(id));
    } else {
      updateDropdownMetrics(id);
    }
  };

  const handleDropdownLeave = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileSection = (id: string) => {
    ensureCatalog();
    setMobileActive((current) => (current === id ? null : id));
  };

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setMobileActive(null);
    setActiveDropdown(null);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      role="navigation"
      aria-label="Primary navigation"
      className={`nav-premium relative z-50 overflow-visible ${scrolled ? 'scrolled' : ''}`}
      style={{ '--nav-height': `${navHeight}px` } as CSSProperties}
    >
      {!prefersReducedMotion && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [0, 20, -10, 0],
              y: [0, 10, -6, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-32 left-16 h-64 w-64 rounded-full bg-gradient-to-br from-accent-ai-purple/30 via-accent-lab-purple/20 to-sky-500/20 blur-3xl"
          />
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [0, -30, 10, 0],
              y: [0, -12, 8, 0],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            className="absolute -bottom-32 right-20 h-72 w-72 rounded-full bg-gradient-to-br from-sky-500/25 via-blue-500/15 to-emerald-400/20 blur-3xl"
          />
        </div>
      )}

      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 w-full items-center justify-between gap-6">
          <Link href="/" className="nav-logo-premium relative flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="nav-logo-icon relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl"
            >
              <motion.img
                src="/brand/black-cat-solid.svg?v=2"
                alt="Traceremove"
                className="h-7 w-7"
                loading="lazy"
                decoding="async"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: -10 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </motion.div>
            <div className="flex flex-col text-white">
              <span className="font-ibm-sans text-xl font-semibold tracking-tight">Traceremove</span>
              <span className="font-ibm-sans text-xs font-medium uppercase tracking-[0.38em] text-white/70">AI Research Lab</span>
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div
              ref={navRailRef}
              className="relative flex items-center gap-1 rounded-3xl border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-xl"
              onMouseLeave={() => {
                if (!activeDropdown) return;
                handleDropdownLeave();
              }}
            >
              {baseNavigationItems.map((item, index) => {
                const Icon = item.icon;
                const details = catalog?.[item.id];
                const dropdown = details?.dropdown ?? [];
                const meta = details?.meta;
                const hasMegaContent = dropdown.length > 0 || Boolean(meta);
                const shouldHandleMega = (item.hasMegaMenu ?? false) || hasMegaContent || Boolean(catalogError);
                const isDropdownActive = activeDropdown === item.id;
                const dropdownId = `mega-${item.id}`;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative"
                    ref={registerNavItem(item.id)}
                    onMouseEnter={() => {
                      prefetchRoute(item.href);
                      if (shouldHandleMega) {
                        handleDropdownEnter(item.id);
                      }
                    }}
                    onMouseLeave={() => shouldHandleMega && handleDropdownLeave()}
                    onFocus={() => {
                      prefetchRoute(item.href);
                      if (shouldHandleMega) {
                        handleDropdownEnter(item.id);
                      }
                    }}
                    onBlur={(event) => {
                      if (!shouldHandleMega) return;
                      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                        handleDropdownLeave();
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      onMouseEnter={() => prefetchRoute(item.href)}
                      onFocus={() => prefetchRoute(item.href)}
                      onClick={() => {
                        if (closeTimeout.current) {
                          clearTimeout(closeTimeout.current);
                          closeTimeout.current = null;
                        }
                        setActiveDropdown(null);
                      }}
                      className={`nav-link-premium group relative inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold tracking-tight text-white/80 transition-all duration-300 ${isActive(item.href) ? 'text-white' : ''}`}
                      aria-haspopup={shouldHandleMega ? 'true' : undefined}
                      aria-expanded={shouldHandleMega ? isDropdownActive : undefined}
                      aria-controls={shouldHandleMega ? dropdownId : undefined}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.accent}`}></span>
                      <span className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative z-10 flex items-center gap-2">
                        <motion.span
                          initial={false}
                          animate={{
                            scale: isActive(item.href) ? 1.05 : 1,
                            rotate: isActive(item.href) ? 0 : -2,
                          }}
                          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                          className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white"
                        >
                          <Icon className="h-4 w-4" strokeWidth={2.4} />
                        </motion.span>
                        <span className="font-ibm-sans text-sm uppercase tracking-[0.24em] text-[11px] text-white/80 group-hover:text-white">
                          {item.label}
                        </span>
                        {shouldHandleMega && (
                          <ChevronDown
                            className={`h-3 w-3 transition-transform ${isDropdownActive ? 'rotate-180 text-white' : 'text-white/60 group-hover:text-white group-focus:text-white'}`}
                            strokeWidth={2.2}
                          />
                        )}
                      </span>
                      {isActive(item.href) && (
                        <motion.span
                          layoutId="navActiveGlow"
                          className="pointer-events-none absolute inset-0 rounded-2xl border border-white/40"
                          transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <AnimatePresence>
                {(() => {
                  if (!activeDropdown) return null;
                  const baseItem = baseNavigationItems.find((item) => item.id === activeDropdown);
                  if (!baseItem) return null;
                  const entry = catalog?.[activeDropdown];
                  const dropdownItems = entry?.dropdown ?? [];
                  const meta = entry?.meta;
                  const highlightMeta = meta?.highlight;
                  const HighlightIcon = highlightMeta?.icon;
                  const dropdownId = `mega-${activeDropdown}`;
                  const showSkeleton = (baseItem.hasMegaMenu ?? false) && !entry && !catalogError;
                  const showError = Boolean(catalogError) && !entry;
                  const shouldRender =
                    dropdownItems.length > 0 || Boolean(meta) || showSkeleton || showError;

                  if (!shouldRender) return null;

                  return (
                    <motion.div
                      key={`${activeDropdown}-dropdown`}
                      initial={{ opacity: 0, y: -10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="nav-mega pointer-events-auto fixed z-[60]"
                      id={dropdownId}
                      role="menu"
                      aria-label={`${baseItem.label} mega menu`}
                      onMouseEnter={() => handleDropdownEnter(activeDropdown)}
                      onMouseLeave={handleDropdownLeave}
                      style={{
                        left: dropdownMetrics.left,
                        top: dropdownMetrics.top,
                        transform: 'translateX(-50%)',
                        width: dropdownMetrics.width,
                        minWidth: dropdownMetrics.width,
                        maxHeight: dropdownMetrics.maxHeight,
                      }}
                    >
                      <motion.div
                        layout
                        className="relative flex max-h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 p-1 shadow-[0_40px_80px_rgba(15,23,42,0.55)] backdrop-blur-3xl"
                      >
                        <div className="absolute -top-32 right-10 h-64 w-64 rounded-full bg-gradient-to-br from-white/10 via-white/0 to-white/0 blur-3xl" />
                        <div className="absolute -bottom-36 left-14 h-72 w-72 rounded-full bg-gradient-to-br from-white/0 via-white/0 to-white/10 blur-3xl" />
                        <div className="relative flex-1 overflow-y-auto p-6 lg:p-7">
                          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
                            {meta ? (
                              <div className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl">
                                <div className="space-y-2">
                                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                                    {meta.tagline}
                                  </p>
                                  <p className="text-base font-medium text-white/80">{meta.description}</p>
                                </div>
                                {highlightMeta && HighlightIcon && (
                                  <Link
                                    href={highlightMeta.href}
                                    onMouseEnter={() => prefetchRoute(highlightMeta.href)}
                                    onFocus={() => prefetchRoute(highlightMeta.href)}
                                    onClick={() => {
                                      if (closeTimeout.current) {
                                        clearTimeout(closeTimeout.current);
                                        closeTimeout.current = null;
                                      }
                                      setActiveDropdown(null);
                                    }}
                                    className="group block"
                                  >
                                    <motion.div
                                      whileHover={{ y: -4, scale: 1.01 }}
                                      whileTap={{ scale: 0.99 }}
                                      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${highlightMeta.accent} p-5 text-white shadow-[0_20px_45px_rgba(15,23,42,0.45)]`}
                                      style={{ boxShadow: highlightMeta.glow }}
                                    >
                                      <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                                      <div className="flex items-start justify-between gap-3">
                                        <div className="space-y-3">
                                          {highlightMeta.badge && (
                                            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
                                              <span>{highlightMeta.badge}</span>
                                            </div>
                                          )}
                                          <div>
                                            <p className="text-lg font-semibold leading-tight">{highlightMeta.title}</p>
                                            <p className="mt-2 text-sm text-white/80">{highlightMeta.description}</p>
                                          </div>
                                        </div>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                                          <HighlightIcon className="h-6 w-6" strokeWidth={2.2} />
                                        </div>
                                      </div>
                                      <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="mt-4 flex items-center gap-2 text-sm font-semibold"
                                      >
                                        <span>Open blueprint</span>
                                        <ArrowRight className="h-4 w-4" />
                                      </motion.div>
                                    </motion.div>
                                  </Link>
                                )}
                              </div>
                            ) : showSkeleton ? (
                              <div className="space-y-4 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl animate-pulse">
                                <div className="h-3 w-32 rounded-full bg-white/10" />
                                <div className="h-4 w-48 rounded-full bg-white/10" />
                                <div className="h-4 w-40 rounded-full bg-white/5" />
                                <div className="h-4 w-52 rounded-full bg-white/10" />
                              </div>
                            ) : showError ? (
                              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 backdrop-blur-xl">
                                {catalogError}
                              </div>
                            ) : null}
                            <div className="grid gap-3 sm:grid-cols-2">
                              {dropdownItems.length > 0 ? (
                                dropdownItems.map((dropdownItem) => (
                                  <motion.div
                                    key={dropdownItem.href}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.18 }}
                                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                                  >
                                    <Link
                                      href={dropdownItem.href}
                                      onMouseEnter={() => prefetchRoute(dropdownItem.href)}
                                      onFocus={() => prefetchRoute(dropdownItem.href)}
                                      onClick={() => {
                                        if (closeTimeout.current) {
                                          clearTimeout(closeTimeout.current);
                                          closeTimeout.current = null;
                                        }
                                        setActiveDropdown(null);
                                      }}
                                      className="flex items-start gap-4"
                                      role="menuitem"
                                    >
                                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                                        <dropdownItem.icon className="h-6 w-6" strokeWidth={2.2} />
                                      </span>
                                      <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                          <span className="text-base font-semibold text-white">
                                            {dropdownItem.label}
                                          </span>
                                          {dropdownItem.badge && (
                                            <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                                              {dropdownItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-sm text-white/70">{dropdownItem.description}</p>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))
                              ) : showSkeleton ? (
                                Array.from({ length: 4 }).map((_, skeletonIndex) => (
                                  <div
                                    key={`nav-skeleton-${skeletonIndex}`}
                                    className="h-20 rounded-3xl border border-white/10 bg-white/5"
                                  />
                                ))
                              ) : showError ? (
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                                  Try refreshing the page to load this menu.
                                </div>
                              ) : (
                                <p className="text-sm text-white/70">Navigation details will load shortly.</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })()}
            </AnimatePresence>
          </div>
        </div>

          <div className="hidden items-center gap-3 lg:flex">
            <PremiumButton
              href="/atlas"
              icon={Sparkles}
              iconPosition="left"
              size="md"
              className="shadow-[0_18px_40px_rgba(124,58,237,0.35)]"
            >
              Explore Atlas
            </PremiumButton>
            <PremiumButton
              href="/contact"
              variant="ghost"
              icon={Mail}
              iconPosition="left"
              size="md"
              className="border border-white/20 text-white/80 hover:text-white"
            >
              Talk to us
            </PremiumButton>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="relative inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-3 text-white transition-all duration-300 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X strokeWidth={2.2} className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu strokeWidth={2.2} className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="mobile-menu-premium fixed inset-0 z-50 flex flex-col border-t border-white/10 bg-slate-950/95 shadow-[0_24px_64px_rgba(15,23,42,0.55)] backdrop-blur-3xl lg:hidden"
            style={
              {
                paddingTop: `calc(${navHeight}px + 1.25rem)`,
                paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 1.75rem)',
                maxHeight: `calc(100vh - env(safe-area-inset-bottom, 0px))`,
              } as CSSProperties
            }
          >
            <div className="flex-1 overflow-y-auto px-6">
              <div className="space-y-4">
              {baseNavigationItems.map((item, index) => {
                const Icon = item.icon;
                const details = catalog?.[item.id];
                const dropdown = details?.dropdown ?? [];
                const meta = details?.meta;
                const expanded = mobileActive === item.id;
                const showToggle = (item.hasMegaMenu ?? false) || dropdown.length > 0 || Boolean(meta) || Boolean(catalogError);
                const showSkeleton = (item.hasMegaMenu ?? false) && !details && !catalogError;
                const showError = Boolean(catalogError) && !details && (item.hasMegaMenu ?? false);

                return (
                  <motion.div
                    key={`${item.href}-mobile`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <Link
                        href={item.href}
                        onMouseEnter={() => prefetchRoute(item.href)}
                        onFocus={() => prefetchRoute(item.href)}
                        onClick={closeMenu}
                        className="flex flex-1 items-center gap-3"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                          <Icon className="h-5 w-5" strokeWidth={2.4} />
                        </span>
                        <div>
                          <p className="text-base font-semibold text-white">{item.label}</p>
                          {meta ? (
                            <p className="text-xs text-white/70">{meta.tagline}</p>
                          ) : showSkeleton ? (
                            <p className="text-xs text-white/60">Loading navigation...</p>
                          ) : null}
                        </div>
                      </Link>
                      {showToggle && (
                        <motion.button
                          onClick={() => toggleMobileSection(item.id)}
                          aria-expanded={expanded}
                          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-transform duration-200"
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
                      <div className="mt-3 h-4 w-3/4 animate-pulse rounded bg-white/10" aria-hidden="true" />
                    ) : null}

                    {showToggle && (
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.24, ease: 'easeInOut' }}
                            className="mt-3 space-y-2 border-t border-white/10 pt-3"
                          >
                            {dropdown.length > 0 ? (
                              dropdown.map((dropdownItem) => (
                                <Link
                                  key={`${dropdownItem.href}-mobile`}
                                  href={dropdownItem.href}
                                  onMouseEnter={() => prefetchRoute(dropdownItem.href)}
                                  onFocus={() => prefetchRoute(dropdownItem.href)}
                                  onClick={closeMenu}
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
                    )}
                  </motion.div>
                );
              })}
              </div>
            </div>
            <div className="space-y-3 px-6 pt-4">
              <PremiumButton
                href="/atlas"
                icon={Sparkles}
                iconPosition="left"
                size="lg"
                className="w-full justify-center"
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
              >
                Book a strategy call
              </PremiumButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
