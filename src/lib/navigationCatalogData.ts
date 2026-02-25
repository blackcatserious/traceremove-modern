import type { LucideIcon } from 'lucide-react';
import {
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
  Brain,
  Network,
  UserCheck,
  Workflow,
  Presentation,
  Library,
  ScrollText,
  BookOpen,
  BookOpenCheck,
  Sparkles,
  Compass,
  Radar,
  Hexagon,
  ArrowRight,
  Layers,
  User,
} from 'lucide-react';

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

type NavigationMeta = {
  tagline: string;
  description: string;
  highlight?: NavigationHighlight;
};

export type NavigationCatalogEntry = {
  meta?: NavigationMeta;
  dropdown?: DropdownItem[];
};

export type NavigationCatalog = Record<string, NavigationCatalogEntry>;

export const navigationCatalog: NavigationCatalog = {
  research: {
    meta: {
      tagline: 'AI Research Blueprints',
      description:
        'Methodologies and ethical frameworks that keep intelligent systems transparent, verifiable, and human-centred.',
      highlight: {
        title: 'Systems Research Playbook',
        description: 'Structured experiment ladders for building reproducible and auditable intelligent services.',
        href: '/research/ethical-ai-architecture',
        icon: Microscope,
        badge: 'Featured',
        accent: 'from-purple-500/80 via-fuchsia-500/70 to-indigo-500/80',
        glow: '0 25px 60px rgba(139, 92, 246, 0.45)',
      },
    },
    dropdown: [
      {
        href: '/research/ethical-ai-architecture',
        label: 'Ethical Architecture',
        description: 'Architectural guardrails and review rituals for responsible AI stacks.',
        icon: Shield,
      },
      {
        href: '/research/agentic-systems-tool-use',
        label: 'Agentic Systems',
        description: 'Tool-use patterns and orchestration for adaptive reasoning agents.',
        icon: Cpu,
      },
      {
        href: '/research/multimodal-reasoning',
        label: 'Multimodal Reasoning',
        description: 'Sensing, grounding, and interleaving signals across modalities.',
        icon: Brain,
      },
      {
        href: '/research/big-data-interpretability',
        label: 'Data Interpretability',
        description: 'Observability pipelines that make large-scale datasets interrogable.',
        icon: Database,
      },
      {
        href: '/research/language-code-interoperability',
        label: 'Language-Code Interop',
        description: 'Bridging natural language workflows with typed developer tooling.',
        icon: Code,
      },
      {
        href: '/research/privacy-preserving-ai',
        label: 'Privacy-Preserving',
        description: 'Federated learning, secure enclaves, and adaptive consent tooling.',
        icon: Lock,
      },
      {
        href: '/research/benchmarking-open-vs-closed-ai',
        label: 'Open vs Closed Benchmarks',
        description: 'Evidence-led comparisons to balance openness with stewardship.',
        icon: BarChart3,
      },
      {
        href: '/research/opacity-responsibility-ai',
        label: 'Opacity & Responsibility',
        description: 'Translating algorithmic opacity into accountable governance layers.',
        icon: Eye,
      },
      {
        href: '/research/ai-infrastructure-academia',
        label: 'Academic AI Infra',
        description: 'Shared compute fabrics and reproducibility services for scholars.',
        icon: GraduationCap,
      },
      {
        href: '/research/human-centered-ai',
        label: 'Human-Centered',
        description: 'Participatory design and sense-making rituals with communities.',
        icon: Heart,
      },
      {
        href: '/research/digital-rights-ai',
        label: 'Digital Rights',
        description: 'Policy blueprints for rights-preserving data stewardship.',
        icon: Scale,
      },
    ],
  },
  projects: {
    meta: {
      tagline: 'Living Laboratory',
      description:
        'Applied engagements that translate critical research into deployable software, civic tools, and field experiments.',
      highlight: {
        title: 'Transparent LLM Studio',
        description: 'An execution stack for tuning explainable models with governance hooks.',
        href: '/projects/transparent-llms',
        icon: Layers,
        badge: 'In Production',
        accent: 'from-amber-400/80 via-orange-500/70 to-rose-500/80',
        glow: '0 25px 60px rgba(251, 146, 60, 0.45)',
      },
    },
    dropdown: [
      {
        href: '/projects/transparent-llms',
        label: 'Transparent LLMs',
        description: 'Auditable LLM deployment with human-in-the-loop disclosure.',
        icon: Eye,
      },
      {
        href: '/projects/symbolic-ai',
        label: 'Symbolic AI',
        description: 'Hybrid neuro-symbolic systems for interpretable reasoning.',
        icon: Network,
      },
      {
        href: '/projects/digital-identity-agency',
        label: 'Digital Identity',
        description: 'Citizen-centric identity protocols with delegated consent.',
        icon: UserCheck,
      },
      {
        href: '/projects/semantic-data-pipelines',
        label: 'Semantic Pipelines',
        description: 'Linked-data infrastructure for institutional interoperability.',
        icon: Workflow,
      },
      {
        href: '/projects/nlp-evaluation',
        label: 'NLP Evaluation',
        description: 'Evaluation scaffolds that go beyond benchmark leaderboards.',
        icon: Target,
      },
      {
        href: '/projects/ethics-multimodal-ai',
        label: 'Multimodal Ethics',
        description: 'Responsible experience design across audio, vision, and text.',
        icon: Shield,
      },
      {
        href: '/projects/real-world-ai-deployments',
        label: 'Real-World Deployments',
        description: 'Field programmes with civic, health, and climate partners.',
        icon: Globe,
      },
    ],
  },
  tools: {
    meta: {
      tagline: 'Operational Tooling',
      description:
        'Dashboards and workflow utilities that accelerate research, compliance checks, and collaborative insight.',
      highlight: {
        title: 'Research Ops Dashboard',
        description: 'Monitor experiment velocity, cost envelopes, and dataset health in real time.',
        href: '/tools/ai-research-dashboard',
        icon: Radar,
        badge: 'Updated',
        accent: 'from-cyan-400/80 via-sky-500/70 to-blue-600/80',
        glow: '0 25px 60px rgba(59, 130, 246, 0.45)',
      },
    },
    dropdown: [
      {
        href: '/tools/ai-research-dashboard',
        label: 'Research Dashboard',
        description: 'Dynamic governance cockpit for AI programmes.',
        icon: BarChart3,
      },
      {
        href: '/tools/semantic-search-tool',
        label: 'Semantic Search',
        description: 'Semantic embeddings to surface adjacent research signals.',
        icon: Search,
      },
      {
        href: '/tools/privacy-score-calculator',
        label: 'Privacy Score',
        description: 'Quantify exposure and privacy debt in deployments.',
        icon: Calculator,
      },
      {
        href: '/tools/data-visualization-playground',
        label: 'Data Viz Lab',
        description: 'Interactive visual lab for storytelling with data.',
        icon: PieChart,
      },
      {
        href: '/tools/paper-summarizer',
        label: 'Paper Summarizer',
        description: 'Condense research papers with evidence-linked briefs.',
        icon: BookMarked,
      },
      {
        href: '/tools/language-model-comparison',
        label: 'Model Comparison',
        description: 'Side-by-side evaluation of open and closed models.',
        icon: GitCompare,
      },
      {
        href: '/tools/annotation-demo',
        label: 'Annotation Demo',
        description: 'High-fidelity annotation loops for human-guided labelling.',
        icon: Target,
      },
    ],
  },
  atlas: {
    meta: {
      tagline: 'Global Atlas',
      description:
        '176 immersive case studies capturing civic tech, policy, and product coalitions reshaping intelligence responsibly.',
      highlight: {
        title: 'Experience Atlas Overview',
        description: 'Survey the full atlas, filter by sector, and step into cinematic narratives.',
        href: '/atlas',
        icon: Compass,
        badge: 'Explore',
        accent: 'from-fuchsia-500/80 via-purple-500/70 to-indigo-500/80',
        glow: '0 25px 60px rgba(168, 85, 247, 0.45)',
      },
    },
    dropdown: [
      {
        href: '/atlas',
        label: 'Atlas Overview',
        description: 'Interactive index of research blueprints and field notes.',
        icon: Sparkles,
        badge: 'New',
      },
      {
        href: '/atlas/transparent-ai-governance-global-initiative',
        label: 'Governance · Global',
        description: 'International partnership sharing open compliance blueprints.',
        icon: Shield,
      },
      {
        href: '/atlas/human-centered-safety-systems-healthcare-alliance',
        label: 'Safety · Healthcare',
        description: 'Patient-first guardrails across clinical AI deployments.',
        icon: Heart,
      },
      {
        href: '/atlas/planetary-compute-stewardship-climate-tech',
        label: 'Compute · Climate',
        description: 'Scaling equitable compute for planetary intelligence teams.',
        icon: Globe,
      },
      {
        href: '/atlas/civic-tech-participation-civic-consortium',
        label: 'Civic · Consortium',
        description: 'Community-led protocols powering civic innovation.',
        icon: Users,
      },
    ],
  },
  academic: {
    meta: {
      tagline: 'Academic Collaboration',
      description:
        'Syllabi, publications, teaching assets, and invitations for joint scholarships across institutions.',
      highlight: {
        title: 'Academic CV',
        description: 'Comprehensive portfolio of appointments, grants, and keynote programmes.',
        href: '/academic/cv',
        icon: Hexagon,
        badge: 'Updated',
        accent: 'from-emerald-400/80 via-teal-500/70 to-blue-500/80',
        glow: '0 25px 60px rgba(34, 197, 94, 0.45)',
      },
    },
    dropdown: [
      {
        href: '/academic/cv',
        label: 'CV',
        description: 'Roles, research fellowships, and advisory councils.',
        icon: User,
      },
      {
        href: '/academic/publications-archive',
        label: 'Publications',
        description: 'Peer-reviewed papers with reproducible artefacts.',
        icon: Library,
      },
      {
        href: '/academic/collaborations',
        label: 'Collaborations',
        description: 'Joint programmes and lab exchanges currently open.',
        icon: Users,
      },
      {
        href: '/academic/press-coverage',
        label: 'Press',
        description: 'Media interviews, op-eds, and public scholarship.',
        icon: Newspaper,
      },
      {
        href: '/academic/conference-talks',
        label: 'Talks',
        description: 'Keynotes, panels, and workshop facilitation decks.',
        icon: Presentation,
      },
      {
        href: '/academic/teaching-materials',
        label: 'Teaching',
        description: 'Studio syllabi, slides, and learning modules.',
        icon: BookOpenCheck,
      },
      {
        href: '/academic/ethics-syllabi',
        label: 'Ethics Syllabi',
        description: 'Ready-to-adapt frameworks for ethics courses.',
        icon: ScrollText,
      },
      {
        href: '/academic/reading-list',
        label: 'Reading List',
        description: 'Curated bibliographies spanning AI governance.',
        icon: BookOpen,
      },
    ],
  },
  articles: {
    meta: {
      tagline: 'Editorial Insights',
      description: 'Long-form analyses, dispatches, and opinion pieces unpacking responsible AI futures.',
      highlight: {
        title: 'Guardrails in UX Safety',
        description: 'Designing humane guardrails for agentic systems in production.',
        href: '/articles/guardrails-ux-safety',
        icon: ArrowRight,
        badge: "Editor’s Pick",
        accent: 'from-rose-500/80 via-purple-500/70 to-blue-500/80',
        glow: '0 25px 60px rgba(244, 114, 182, 0.45)',
      },
    },
    dropdown: [
      {
        href: '/articles/guardrails-ux-safety',
        label: 'UX Safety Guardrails',
        description: 'Field notes on calibrating UX with rigorous safety.',
        icon: Shield,
        badge: 'Featured',
      },
      {
        href: '/articles/cost-aware-llm-serving',
        label: 'Cost-Aware Serving',
        description: 'Operational intelligence for efficient inference pipelines.',
        icon: BarChart3,
      },
      {
        href: '/articles/agent-evaluation-beyond-win-rates',
        label: 'Agent Eval Beyond Win-Rates',
        description: 'Holistic evaluation frameworks for agents and swarms.',
        icon: Target,
      },
      {
        href: '/articles/philosophy-machine-agency',
        label: 'Machine Agency',
        description: 'Ethical discourse on distributed machine agency.',
        icon: Brain,
      },
      {
        href: '/articles/epistemic-risks-ai',
        label: 'Epistemic Risks',
        description: 'Mapping epistemic debt and mitigation strategies.',
        icon: Eye,
      },
      {
        href: '/articles/linguistic-symbolism-ml',
        label: 'Linguistic Symbolism',
        description: 'How symbolic language shapes machine meaning.',
        icon: Code,
      },
      {
        href: '/articles/ai-human-dignity',
        label: 'Human Dignity',
        description: 'Upholding dignity in human-machine co-creation.',
        icon: Heart,
      },
      {
        href: '/articles/philosophy-responsibility',
        label: 'Responsibility',
        description: 'Accountability frameworks for socio-technical systems.',
        icon: Scale,
      },
      {
        href: '/articles/comparative-llm-analysis',
        label: 'LLM Comparison',
        description: 'Comparing open and closed models beyond benchmarks.',
        icon: GitCompare,
      },
      {
        href: '/articles/case-study-ai-social-systems',
        label: 'AI Social Systems',
        description: 'Socio-technical case studies from civic deployments.',
        icon: Globe,
      },
    ],
  },
};

export type { DropdownItem, NavigationHighlight, NavigationMeta };
