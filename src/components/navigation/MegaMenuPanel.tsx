'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import type { NavigationCatalogEntry } from '@/lib/navigationCatalogData';

export type MegaMenuMetrics = {
  left: number;
  width: number;
  top: number;
  maxHeight: number;
};

interface MegaMenuPanelProps {
  dropdownId: string;
  dropdownMetrics: MegaMenuMetrics;
  baseLabel: string;
  entry: NavigationCatalogEntry | undefined;
  catalogError: string | null;
  showSkeleton: boolean;
  showError: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onNavigate: () => void;
  prefetchRoute: (href: string) => void;
  disableMotion?: boolean;
}

export default function MegaMenuPanel({
  dropdownId,
  dropdownMetrics,
  baseLabel,
  entry,
  catalogError,
  showSkeleton,
  showError,
  onEnter,
  onLeave,
  onNavigate,
  prefetchRoute,
  disableMotion = false,
}: MegaMenuPanelProps) {
  const dropdownItems = entry?.dropdown ?? [];
  const meta = entry?.meta;
  const highlightMeta = meta?.highlight;
  const HighlightIcon = highlightMeta?.icon;

  const shouldRender =
    dropdownItems.length > 0 || Boolean(meta) || showSkeleton || showError;

  if (!shouldRender) {
    return null;
  }

  const handlePrefetch = (href: string | undefined | null) => {
    if (!href) return;
    prefetchRoute(href);
  };

  return (
    <motion.div
      key={`${dropdownId}-panel`}
      initial={disableMotion ? false : { opacity: 0, y: -10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={disableMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.97 }}
      transition={disableMotion ? undefined : { duration: 0.18, ease: 'easeOut' }}
      className="nav-mega pointer-events-auto fixed z-[60]"
      id={dropdownId}
      role="menu"
      aria-label={`${baseLabel} mega menu`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
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
        layout={!disableMotion}
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
                    onMouseEnter={() => handlePrefetch(highlightMeta.href)}
                    onFocus={() => handlePrefetch(highlightMeta.href)}
                    onClick={() => {
                      onNavigate();
                    }}
                    className="group block"
                  >
                    <motion.div
                      whileHover={disableMotion ? undefined : { y: -4, scale: 1.01 }}
                      whileTap={disableMotion ? undefined : { scale: 0.99 }}
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
                        initial={disableMotion ? false : { opacity: 0, x: -10 }}
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
                    initial={disableMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={disableMotion ? undefined : { duration: 0.18 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <Link
                      href={dropdownItem.href}
                      onMouseEnter={() => handlePrefetch(dropdownItem.href)}
                      onFocus={() => handlePrefetch(dropdownItem.href)}
                      onClick={() => {
                        onNavigate();
                      }}
                      className="flex items-start gap-4"
                      role="menuitem"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <dropdownItem.icon className="h-6 w-6" strokeWidth={2.2} />
                      </span>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-semibold text-white">{dropdownItem.label}</span>
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
}
