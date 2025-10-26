'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

import PremiumButton from './PremiumButton';
import { navigationCatalog } from '@/lib/navigationCatalogData';

type BaseItem = {
  id: string;
  href: string;
  label: string;
};

const NAV_ITEMS: BaseItem[] = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'research', href: '/research', label: 'Research' },
  { id: 'projects', href: '/projects', label: 'Projects' },
  { id: 'tools', href: '/tools', label: 'Tools' },
  { id: 'atlas', href: '/atlas', label: 'Atlas' },
  { id: 'academic', href: '/academic', label: 'Academic' },
  { id: 'articles', href: '/articles', label: 'Articles' },
  { id: 'about', href: '/about', label: 'About' },
  { id: 'whitepapers', href: '/whitepapers', label: 'Whitepapers' },
  { id: 'contact', href: '/contact', label: 'Contact' },
];

const DROPDOWN_IDS = new Set(
  Object.entries(navigationCatalog)
    .filter(([, entry]) => entry.dropdown && entry.dropdown.length > 0)
    .map(([id]) => id),
);

const MOBILE_MENU_ID = 'site-navigation-mobile-panel';

type ExpandedSections = Record<string, boolean>;

type NavigationCatalog = typeof navigationCatalog;

function getDropdownItems(id: string, catalog: NavigationCatalog) {
  return catalog[id]?.dropdown ?? [];
}

function getMetaTagline(id: string, catalog: NavigationCatalog) {
  return catalog[id]?.meta?.tagline ?? null;
}

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<ExpandedSections>({});
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      ticking = false;
      const next = window.scrollY > 10;
      setScrolled((current) => (current === next ? current : next));
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const { body } = document;
    const previousOverflow = body.style.overflow;

    if (mobileOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = previousOverflow || '';
    }

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setExpandedMobile({});
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setExpandedMobile({});
    setDesktopDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setExpandedMobile({});
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const catalog = useMemo(() => navigationCatalog, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href) ?? false;
  };

  const toggleMobileSection = (id: string) => {
    setExpandedMobile((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/92 shadow-lg shadow-slate-950/30'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Traceremove
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => {
            const hasDropdown = DROPDOWN_IDS.has(item.id);
            const dropdownItems = hasDropdown ? getDropdownItems(item.id, catalog) : [];
            const tagline = hasDropdown ? getMetaTagline(item.id, catalog) : null;
            const active = isActive(item.href);

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => hasDropdown && setDesktopDropdown(item.id)}
                onMouseLeave={() => hasDropdown && setDesktopDropdown((current) => (current === item.id ? null : current))}
                onFocusCapture={() => hasDropdown && setDesktopDropdown(item.id)}
                onBlurCapture={(event) => {
                  if (hasDropdown && !event.currentTarget.contains(event.relatedTarget)) {
                    setDesktopDropdown((current) => (current === item.id ? null : current));
                  }
                }}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white'
                  }`}
                  aria-haspopup={hasDropdown ? 'true' : undefined}
                  aria-expanded={hasDropdown && desktopDropdown === item.id}
                >
                  <span>{item.label}</span>
                  {hasDropdown ? (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${desktopDropdown === item.id ? 'rotate-180' : ''}`}
                    />
                  ) : null}
                </Link>
                {hasDropdown && desktopDropdown === item.id ? (
                  <div className="absolute left-0 top-full mt-3 w-80 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl">
                    {tagline ? <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">{tagline}</p> : null}
                    <ul className="space-y-2">
                      {dropdownItems.map((dropdown) => (
                        <li key={dropdown.href}>
                          <Link
                            href={dropdown.href}
                            className="flex flex-col rounded-xl px-3 py-2 transition-colors hover:bg-white/5"
                          >
                            <span className="text-sm font-semibold text-white">{dropdown.label}</span>
                            <span className="text-xs text-slate-300">{dropdown.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <PremiumButton href="/contact" size="sm" className="hidden sm:inline-flex">
            Work with us
          </PremiumButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="lg:hidden">
          <div
            id={MOBILE_MENU_ID}
            className="border-t border-white/10 bg-slate-950/95 px-4 pb-12 pt-4 shadow-2xl sm:px-6"
            role="dialog"
            aria-modal="true"
          >
            <nav aria-label="Mobile">
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => {
                  const hasDropdown = DROPDOWN_IDS.has(item.id);
                  const dropdownItems = hasDropdown ? getDropdownItems(item.id, catalog) : [];
                  const expanded = expandedMobile[item.id];
                  const active = isActive(item.href);

                  return (
                    <li key={`${item.id}-mobile`} className="rounded-2xl border border-white/10 bg-white/5">
                      <div className="flex items-center justify-between px-4 py-3">
                        <Link
                          href={item.href}
                          className={`text-base font-semibold ${active ? 'text-white' : 'text-white/80'}`}
                          onClick={() => {
                            setMobileOpen(false);
                            setExpandedMobile({});
                          }}
                        >
                          {item.label}
                        </Link>
                        {hasDropdown ? (
                          <button
                            type="button"
                            className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white"
                            aria-expanded={expanded}
                            onClick={() => toggleMobileSection(item.id)}
                          >
                            <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                          </button>
                        ) : null}
                      </div>
                      {hasDropdown && expanded ? (
                        <div className="space-y-2 border-t border-white/10 px-4 py-3">
                          {dropdownItems.map((dropdown) => (
                            <Link
                              key={`${item.id}-${dropdown.href}`}
                              href={dropdown.href}
                              className="block rounded-xl bg-white/5 px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                              onClick={() => {
                                setMobileOpen(false);
                                setExpandedMobile({});
                              }}
                            >
                              <span className="block font-semibold text-white">{dropdown.label}</span>
                              <span className="text-xs text-white/70">{dropdown.description}</span>
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6">
                <PremiumButton href="/contact" size="md" className="w-full justify-center">
                  Work with us
                </PremiumButton>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
