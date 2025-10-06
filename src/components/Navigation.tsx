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
  Brain,
  ChevronDown,
  Microscope,
  Code,
  Shield,
  Database,
  Users,
  GraduationCap,
  Newspaper,
  Scale,
  Eye,
  Globe,
  Cpu,
  Heart,
  Lock,
  BarChart3,
  Search,
  Calculator,
  PieChart,
  BookMarked,
  GitCompare,
  Target,
  Lightbulb,
  Network,
  UserCheck,
  Workflow,
  Presentation,
  Library,
  ScrollText,
  BookOpenCheck,
  Map,
  Sparkles,
  ArrowRight,
  Layers,
  Compass,
  Radar,
  Hexagon
} from 'lucide-react';
import PremiumButton from './PremiumButton';

type DropdownItem = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
};

type NavigationHighlight = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  accent: string;
  glow: string;
};

type NavigationItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  accent: string;
  dropdown?: DropdownItem[];
  meta?: {
    tagline: string;
    description: string;
    highlight?: NavigationHighlight;
  };
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

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
};

const navigationItems: NavigationItem[] = [
  {
    href: '/',
    label: 'Home',
    icon: Home,
    accent: 'from-sky-500/70 via-indigo-500/70 to-violet-600/70'
  },
  {
    href: '/research',
    label: 'Research',
    icon: BookOpen,
    accent: 'from-violet-500/80 via-purple-500/70 to-sky-500/70',
    meta: {
      tagline: 'AI Research Blueprints',
      description: 'Methodologies and ethical frameworks that keep intelligent systems transparent, verifiable, and human-centred.',
      highlight: {
        title: 'Systems Research Playbook',
        description: 'Structured experiment ladders for building reproducible and auditable intelligent services.',
        href: '/research/ethical-ai-architecture',
        icon: Microscope,
        badge: 'Featured',
        accent: 'from-purple-500/80 via-fuchsia-500/70 to-indigo-500/80',
        glow: '0 25px 60px rgba(139, 92, 246, 0.45)'
      }
    },
    dropdown: [
      { href: '/research/ethical-ai-architecture', label: 'Ethical AI Architecture', description: 'Architectural guardrails and review rituals for responsible AI stacks.', icon: Shield },
      { href: '/research/agentic-systems-tool-use', label: 'Agentic Systems', description: 'Tool-use patterns and orchestration for adaptive reasoning agents.', icon: Cpu },
      { href: '/research/multimodal-reasoning', label: 'Multimodal Reasoning', description: 'Sensing, grounding, and interleaving signals across modalities.', icon: Brain },
      { href: '/research/big-data-interpretability', label: 'Big Data Interpretability', description: 'Observability pipelines that make large-scale datasets interrogable.', icon: Database },
      { href: '/research/language-code-interoperability', label: 'Language & Code Interoperability', description: 'Bridging natural language workflows with typed developer tooling.', icon: Code },
      { href: '/research/privacy-preserving-ai', label: 'Privacy-Preserving AI', description: 'Federated learning, secure enclaves, and adaptive consent tooling.', icon: Lock },
      { href: '/research/benchmarking-open-vs-closed-ai', label: 'Benchmarking Open vs Closed AI', description: 'Evidence-led comparisons to balance openness with stewardship.', icon: BarChart3 },
      { href: '/research/opacity-responsibility-ai', label: 'Opacity & Responsibility in AI', description: 'Translating algorithmic opacity into accountable governance layers.', icon: Eye },
      { href: '/research/ai-infrastructure-academia', label: 'AI Infrastructure for Academia', description: 'Shared compute fabrics and reproducibility services for scholars.', icon: GraduationCap },
      { href: '/research/human-centered-ai', label: 'Human-Centered AI', description: 'Participatory design and sense-making rituals with communities.', icon: Heart },
      { href: '/research/digital-rights-ai', label: 'Digital Rights & AI', description: 'Policy blueprints for rights-preserving data stewardship.', icon: Scale }
    ]
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: Lightbulb,
    accent: 'from-amber-400/80 via-orange-500/70 to-rose-500/70',
    meta: {
      tagline: 'Living Laboratory',
      description: 'Applied engagements that translate critical research into deployable software, civic tools, and field experiments.',
      highlight: {
        title: 'Transparent LLM Studio',
        description: 'An execution stack for tuning explainable models with governance hooks.',
        href: '/projects/transparent-llms',
        icon: Layers,
        badge: 'In Production',
        accent: 'from-amber-400/80 via-orange-500/70 to-rose-500/80',
        glow: '0 25px 60px rgba(251, 146, 60, 0.45)'
      }
    },
    dropdown: [
      { href: '/projects/transparent-llms', label: 'Transparent LLMs', description: 'Auditable LLM deployment with human-in-the-loop disclosure.', icon: Eye },
      { href: '/projects/symbolic-ai', label: 'Symbolic AI', description: 'Hybrid neuro-symbolic systems for interpretable reasoning.', icon: Network },
      { href: '/projects/digital-identity-agency', label: 'Digital Identity & Agency', description: 'Citizen-centric identity protocols with delegated consent.', icon: UserCheck },
      { href: '/projects/semantic-data-pipelines', label: 'Semantic Data Pipelines', description: 'Linked-data infrastructure for institutional interoperability.', icon: Workflow },
      { href: '/projects/nlp-evaluation', label: 'NLP Evaluation', description: 'Evaluation scaffolds that go beyond benchmark leaderboards.', icon: Target },
      { href: '/projects/ethics-multimodal-ai', label: 'Ethics in Multimodal AI', description: 'Responsible experience design across audio, vision, and text.', icon: Shield },
      { href: '/projects/real-world-ai-deployments', label: 'Real-World AI Deployments', description: 'Field programmes with civic, health, and climate partners.', icon: Globe }
    ]
  },
  {
    href: '/tools',
    label: 'Tools',
    icon: Wrench,
    accent: 'from-cyan-400/80 via-sky-500/70 to-blue-600/70',
    meta: {
      tagline: 'Operational Tooling',
      description: 'Dashboards and workflow utilities that accelerate research, compliance checks, and collaborative insight.',
      highlight: {
        title: 'Research Ops Dashboard',
        description: 'Monitor experiment velocity, cost envelopes, and dataset health in real time.',
        href: '/tools/ai-research-dashboard',
        icon: Radar,
        badge: 'Updated',
        accent: 'from-cyan-400/80 via-sky-500/70 to-blue-600/80',
        glow: '0 25px 60px rgba(59, 130, 246, 0.45)'
      }
    },
    dropdown: [
      { href: '/tools/ai-research-dashboard', label: 'AI Research Dashboard', description: 'Dynamic governance cockpit for AI programmes.', icon: BarChart3 },
      { href: '/tools/semantic-search-tool', label: 'Semantic Search Tool', description: 'Semantic embeddings to surface adjacent research signals.', icon: Search },
      { href: '/tools/privacy-score-calculator', label: 'Privacy Score Calculator', description: 'Quantify exposure and privacy debt in deployments.', icon: Calculator },
      { href: '/tools/data-visualization-playground', label: 'Data Visualization Playground', description: 'Interactive visual lab for storytelling with data.', icon: PieChart },
      { href: '/tools/paper-summarizer', label: 'Paper Summarizer', description: 'Condense research papers with evidence-linked briefs.', icon: BookMarked },
      { href: '/tools/language-model-comparison', label: 'Language Model Comparison', description: 'Side-by-side evaluation of open and closed models.', icon: GitCompare },
      { href: '/tools/annotation-demo', label: 'Annotation Demo', description: 'High-fidelity annotation loops for human-guided labelling.', icon: Target }
    ]
  },
  {
    href: '/atlas',
    label: 'Atlas',
    icon: Map,
    accent: 'from-fuchsia-500/80 via-purple-500/70 to-indigo-500/80',
    meta: {
      tagline: 'Global Atlas',
      description: '176 immersive case studies capturing civic tech, policy, and product coalitions reshaping intelligence responsibly.',
      highlight: {
        title: 'Experience Atlas Overview',
        description: 'Survey the full atlas, filter by sector, and step into cinematic narratives.',
        href: '/atlas',
        icon: Compass,
        badge: 'Explore',
        accent: 'from-fuchsia-500/80 via-purple-500/70 to-indigo-500/80',
        glow: '0 25px 60px rgba(168, 85, 247, 0.45)'
      }
    },
    dropdown: [
      { href: '/atlas', label: 'Experience Atlas Overview', description: 'Interactive index of research blueprints and field notes.', icon: Sparkles, badge: 'New' },
      { href: '/atlas/transparent-ai-governance-global-initiative', label: 'Transparent Governance · Global', description: 'International partnership sharing open compliance blueprints.', icon: Shield },
      { href: '/atlas/human-centered-safety-systems-healthcare-alliance', label: 'Safety Systems · Healthcare', description: 'Patient-first guardrails across clinical AI deployments.', icon: Heart },
      { href: '/atlas/planetary-compute-stewardship-climate-tech', label: 'Compute Stewardship · Climate', description: 'Scaling equitable compute for planetary intelligence teams.', icon: Globe },
      { href: '/atlas/civic-tech-participation-civic-consortium', label: 'Civic Participation · Consortium', description: 'Community-led protocols powering civic innovation.', icon: Users }
    ]
  },
  {
    href: '/academic',
    label: 'Academic',
    icon: GraduationCap,
    accent: 'from-emerald-400/80 via-teal-500/70 to-blue-500/70',
    meta: {
      tagline: 'Academic Collaboration',
      description: 'Syllabi, publications, teaching assets, and invitations for joint scholarships across institutions.',
      highlight: {
        title: 'Academic CV',
        description: 'Comprehensive portfolio of appointments, grants, and keynote programmes.',
        href: '/academic/cv',
        icon: Hexagon,
        badge: 'Updated',
        accent: 'from-emerald-400/80 via-teal-500/70 to-blue-500/80',
        glow: '0 25px 60px rgba(34, 197, 94, 0.45)'
      }
    },
    dropdown: [
      { href: '/academic/cv', label: 'Curriculum Vitae', description: 'Roles, research fellowships, and advisory councils.', icon: User },
      { href: '/academic/publications-archive', label: 'Publications Archive', description: 'Peer-reviewed papers with reproducible artefacts.', icon: Library },
      { href: '/academic/collaborations', label: 'Academic Collaborations', description: 'Joint programmes and lab exchanges currently open.', icon: Users },
      { href: '/academic/press-coverage', label: 'Press / Media Coverage', description: 'Media interviews, op-eds, and public scholarship.', icon: Newspaper },
      { href: '/academic/conference-talks', label: 'Conference Talks', description: 'Keynotes, panels, and workshop facilitation decks.', icon: Presentation },
      { href: '/academic/teaching-materials', label: 'Teaching Materials', description: 'Studio syllabi, slides, and learning modules.', icon: BookOpenCheck },
      { href: '/academic/ethics-syllabi', label: 'AI Ethics Syllabi', description: 'Ready-to-adapt frameworks for ethics courses.', icon: ScrollText },
      { href: '/academic/reading-list', label: 'Reading List', description: 'Curated bibliographies spanning AI governance.', icon: BookOpen }
    ]
  },
  {
    href: '/articles',
    label: 'Articles',
    icon: Newspaper,
    accent: 'from-rose-500/80 via-purple-500/70 to-blue-500/70',
    meta: {
      tagline: 'Editorial Insights',
      description: 'Long-form analyses, dispatches, and opinion pieces unpacking responsible AI futures.',
      highlight: {
        title: 'Guardrails in UX Safety',
        description: 'Designing humane guardrails for agentic systems in production.',
        href: '/articles/guardrails-ux-safety',
        icon: ArrowRight,
        badge: 'Editor’s Pick',
        accent: 'from-rose-500/80 via-purple-500/70 to-blue-500/80',
        glow: '0 25px 60px rgba(244, 114, 182, 0.45)'
      }
    },
    dropdown: [
      { href: '/articles/guardrails-ux-safety', label: 'Guardrails in UX Safety', description: 'Field notes on calibrating UX with rigorous safety.', icon: Shield, badge: 'Featured' },
      { href: '/articles/cost-aware-llm-serving', label: 'Cost-Aware LLM Serving', description: 'Operational intelligence for efficient inference pipelines.', icon: BarChart3 },
      { href: '/articles/agent-evaluation-beyond-win-rates', label: 'Agent Evaluation Beyond Win-Rates', description: 'Holistic evaluation frameworks for agents and swarms.', icon: Target },
      { href: '/articles/philosophy-machine-agency', label: 'Philosophy of Machine Agency', description: 'Ethical discourse on distributed machine agency.', icon: Brain },
      { href: '/articles/epistemic-risks-ai', label: 'Epistemic Risks in AI', description: 'Mapping epistemic debt and mitigation strategies.', icon: Eye },
      { href: '/articles/linguistic-symbolism-ml', label: 'Linguistic Symbolism in ML', description: 'How symbolic language shapes machine meaning.', icon: Code },
      { href: '/articles/ai-human-dignity', label: 'AI & Human Dignity', description: 'Upholding dignity in human-machine co-creation.', icon: Heart },
      { href: '/articles/philosophy-responsibility', label: 'Philosophy of Responsibility', description: 'Accountability frameworks for socio-technical systems.', icon: Scale },
      { href: '/articles/comparative-llm-analysis', label: 'Comparative LLM Analysis', description: 'Comparing open and closed models beyond benchmarks.', icon: GitCompare },
      { href: '/articles/case-study-ai-social-systems', label: 'Case Study: AI in Social Systems', description: 'Socio-technical case studies from civic deployments.', icon: Globe }
    ]
  },
  {
    href: '/about',
    label: 'About',
    icon: User,
    accent: 'from-purple-500/70 via-violet-500/60 to-indigo-500/60'
  },
  {
    href: '/whitepapers',
    label: 'Whitepapers',
    icon: FileText,
    accent: 'from-blue-500/70 via-indigo-500/60 to-slate-500/60'
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: Mail,
    accent: 'from-emerald-500/70 via-teal-500/60 to-cyan-500/60'
  }
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

  const updateDropdownMetrics = useCallback(
    (label: string) => {
      const rail = navRailRef.current;
      const trigger = navItemRefs.current[label];

      if (!rail || !trigger) return;

      const railRect = rail.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();
      const viewportPadding = 24;
      const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : railRect.width;
      const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
      const maxWidth = Math.min(760, Math.max(viewportWidth - viewportPadding * 2, 360));
      const desiredWidth = Math.max(triggerRect.width + 320, 420);
      const width = Math.max(360, Math.min(desiredWidth, maxWidth));
      const triggerCenterViewport = triggerRect.left + triggerRect.width / 2;
      const minCenter = viewportPadding + width / 2;
      const maxCenter = viewportWidth - viewportPadding - width / 2;
      const clampedCenter = Math.min(Math.max(triggerCenterViewport, minCenter), maxCenter);
      const navRect = navRef.current?.getBoundingClientRect();
      const navBottom = navRect?.bottom ?? railRect.bottom;
      const top = Math.max(navBottom + 12, 72);
      const availableHeight = Math.max(viewportHeight - top - viewportPadding, 320);

      setDropdownMetrics({
        left: clampedCenter,
        width,
        top,
        maxHeight: availableHeight,
      });
    },
    []
  );

  const registerNavItem = useCallback(
    (label: string) => (element: HTMLDivElement | null) => {
      navItemRefs.current[label] = element;
    },
    []
  );

  const prefetchRoute = useCallback(
    (href: string) => {
      if (!href || href.startsWith('http') || href.startsWith('#')) {
        return;
      }

      const cache = prefetchedRoutes.current;
      if (cache.has(href)) {
        return;
      }

      try {
        router.prefetch(href);
        cache.add(href);
      } catch {
        // Ignore prefetch errors (e.g. during development).
      }
    },
    [router]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!activeDropdown) return;
    updateDropdownMetrics(activeDropdown);
  }, [activeDropdown, updateDropdownMetrics, navHeight]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const connection = (navigator as NavigatorWithConnection | undefined)?.connection;
    if (connection?.saveData || connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g') {
      return;
    }

    const withIdle = window as IdleWindow;
    const queue = Array.from(
      new Set(
        navigationItems
          .flatMap((item) => [
            item.href,
            ...(item.dropdown?.map((entry) => entry.href) ?? []),
            item.meta?.highlight?.href ?? null,
          ])
          .filter((href): href is string => Boolean(href) && href !== pathname),
      ),
    ).slice(0, 32);

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
  }, [pathname, prefetchRoute]);

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
  }, []);

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

  const handleDropdownEnter = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }

    setActiveDropdown(label);
    const navItem = navigationItems.find((item) => item.label === label);
    if (navItem) {
      prefetchRoute(navItem.href);
      navItem.dropdown?.forEach((entry) => prefetchRoute(entry.href));
      if (navItem.meta?.highlight?.href) {
        prefetchRoute(navItem.meta.highlight.href);
      }
    }
    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => updateDropdownMetrics(label));
    } else {
      updateDropdownMetrics(label);
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

  const toggleMobileSection = (label: string) => {
    setMobileActive((current) => (current === label ? null : label));
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

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const isDropdownActive = activeDropdown === item.label;
                const navItemId = item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const dropdownId = `mega-${navItemId}`;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative"
                    ref={registerNavItem(item.label)}
                    onMouseEnter={() => {
                      prefetchRoute(item.href);
                      if (item.dropdown) {
                        handleDropdownEnter(item.label);
                      }
                    }}
                    onMouseLeave={() => item.dropdown && handleDropdownLeave()}
                    onFocus={() => {
                      prefetchRoute(item.href);
                      if (item.dropdown) {
                        handleDropdownEnter(item.label);
                      }
                    }}
                    onBlur={(event) => {
                      if (!item.dropdown) return;
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
                      className={`nav-link-premium group relative inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold tracking-tight text-white/80 transition-all duration-300 ${
                        isActive(item.href) ? 'text-white' : ''
                      }`}
                      aria-haspopup={item.dropdown ? 'true' : undefined}
                      aria-expanded={item.dropdown ? isDropdownActive : undefined}
                      aria-controls={item.dropdown ? dropdownId : undefined}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.accent}`}></span>
                      <span className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative z-10 flex items-center gap-2">
                        <motion.span
                          initial={false}
                          animate={{
                            scale: isActive(item.href) ? 1.05 : 1,
                            rotate: isActive(item.href) ? 0 : -2
                          }}
                          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                          className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white"
                        >
                          <Icon className="h-4 w-4" strokeWidth={2.4} />
                        </motion.span>
                        <span className="font-ibm-sans text-sm uppercase tracking-[0.24em] text-[11px] text-white/80 group-hover:text-white">
                          {item.label}
                        </span>
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
                  const activeItemData = navigationItems.find((item) => item.label === activeDropdown);
                  if (!activeItemData || !activeItemData.dropdown) return null;
                  const dropdownId = `mega-${activeItemData.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                  const highlightMeta = activeItemData.meta?.highlight;
                  const HighlightIcon = highlightMeta?.icon;

                  return (
                    <motion.div
                      key={`${activeItemData.label}-dropdown`}
                      initial={{ opacity: 0, y: -10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="nav-mega pointer-events-auto fixed z-[60]"
                      id={dropdownId}
                      role="menu"
                      aria-label={`${activeItemData.label} mega menu`}
                      onMouseEnter={() => handleDropdownEnter(activeItemData.label)}
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
                            {activeItemData.meta && (
                              <div className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl">
                                <div className="space-y-2">
                                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                                    {activeItemData.meta.tagline}
                                </p>
                                <p className="text-base font-medium text-white/80">
                                  {activeItemData.meta.description}
                                </p>
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
                                        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
                                          {highlightMeta.badge && <span>{highlightMeta.badge}</span>}
                                        </div>
                                        <div>
                                          <p className="text-lg font-semibold leading-tight">{highlightMeta.title}</p>
                                          <p className="mt-2 text-sm text-white/80">
                                            {highlightMeta.description}
                                          </p>
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
                          )}
                            <div className="grid gap-3 sm:grid-cols-2">
                              {activeItemData.dropdown.map((dropdownItem) => (
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
                              ))}
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
              } as CSSProperties
            }
          >
            <div className="flex-1 overflow-y-auto px-6">
              <div className="space-y-4">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const expanded = mobileActive === item.label;

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
                          {item.meta && (
                            <p className="text-xs text-white/70">{item.meta.tagline}</p>
                          )}
                        </div>
                      </Link>
                      {item.dropdown && (
                        <motion.button
                          onClick={() => toggleMobileSection(item.label)}
                          aria-expanded={expanded}
                          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-transform duration-200"
                        >
                          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown strokeWidth={2.2} className="h-5 w-5" />
                          </motion.div>
                        </motion.button>
                      )}
                    </div>

                    {item.meta?.description && (
                      <p className="mt-3 text-sm text-white/70">{item.meta.description}</p>
                    )}

                    {item.dropdown && (
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.24, ease: 'easeInOut' }}
                            className="mt-3 space-y-2 border-t border-white/10 pt-3"
                          >
                            {item.dropdown.map((dropdownItem) => (
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
                            ))}
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
