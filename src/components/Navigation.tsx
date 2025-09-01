'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
  Zap,
  ChevronDown,
  Microscope,
  Code,
  Shield,
  Database,
  Users,
  Award,
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
  Building,
  Briefcase,
  Presentation,
  Library,
  ScrollText,
  BookOpenCheck,
  HelpCircle,
  Map,
  Users as TeamIcon
} from 'lucide-react';

const navigationItems = [
  { 
    href: '/', 
    label: 'Home', 
    icon: Home 
  },
  { 
    href: '/research', 
    label: 'Research', 
    icon: BookOpen,
    dropdown: [
      { href: '/research/ethical-ai-architecture', label: 'Ethical AI Architecture', icon: Shield },
      { href: '/research/agentic-systems-tool-use', label: 'Agentic Systems', icon: Cpu },
      { href: '/research/multimodal-reasoning', label: 'Multimodal Reasoning', icon: Brain },
      { href: '/research/big-data-interpretability', label: 'Big Data Interpretability', icon: Database },
      { href: '/research/language-code-interoperability', label: 'Language & Code Interoperability', icon: Code },
      { href: '/research/privacy-preserving-ai', label: 'Privacy-Preserving AI', icon: Lock },
      { href: '/research/benchmarking-open-vs-closed-ai', label: 'Benchmarking Open vs Closed AI', icon: BarChart3 },
      { href: '/research/opacity-responsibility-ai', label: 'Opacity & Responsibility in AI', icon: Eye },
      { href: '/research/ai-infrastructure-academia', label: 'AI Infrastructure for Academia', icon: GraduationCap },
      { href: '/research/human-centered-ai', label: 'Human-Centered AI', icon: Heart },
      { href: '/research/digital-rights-ai', label: 'Digital Rights & AI', icon: Scale }
    ]
  },
  { 
    href: '/projects', 
    label: 'Projects', 
    icon: Lightbulb,
    dropdown: [
      { href: '/projects/transparent-llms', label: 'Transparent LLMs', icon: Eye },
      { href: '/projects/symbolic-ai', label: 'Symbolic AI', icon: Network },
      { href: '/projects/digital-identity-agency', label: 'Digital Identity & Agency', icon: UserCheck },
      { href: '/projects/semantic-data-pipelines', label: 'Semantic Data Pipelines', icon: Workflow },
      { href: '/projects/nlp-evaluation', label: 'NLP Evaluation', icon: Target },
      { href: '/projects/ethics-multimodal-ai', label: 'Ethics in Multimodal AI', icon: Shield },
      { href: '/projects/real-world-ai-deployments', label: 'Real-World AI Deployments', icon: Globe }
    ]
  },
  { 
    href: '/tools', 
    label: 'Tools', 
    icon: Wrench,
    dropdown: [
      { href: '/tools/ai-research-dashboard', label: 'AI Research Dashboard', icon: BarChart3 },
      { href: '/tools/semantic-search-tool', label: 'Semantic Search Tool', icon: Search },
      { href: '/tools/privacy-score-calculator', label: 'Privacy Score Calculator', icon: Calculator },
      { href: '/tools/data-visualization-playground', label: 'Data Visualization Playground', icon: PieChart },
      { href: '/tools/paper-summarizer', label: 'Paper Summarizer', icon: BookMarked },
      { href: '/tools/language-model-comparison', label: 'Language Model Comparison', icon: GitCompare },
      { href: '/tools/annotation-demo', label: 'Annotation Demo', icon: Target }
    ]
  },
  { 
    href: '/academic', 
    label: 'Academic', 
    icon: GraduationCap,
    dropdown: [
      { href: '/academic/cv', label: 'Curriculum Vitae', icon: User },
      { href: '/academic/publications-archive', label: 'Publications Archive', icon: Library },
      { href: '/academic/collaborations', label: 'Academic Collaborations', icon: Users },
      { href: '/academic/press-coverage', label: 'Press / Media Coverage', icon: Newspaper },
      { href: '/academic/conference-talks', label: 'Conference Talks', icon: Presentation },
      { href: '/academic/teaching-materials', label: 'Teaching Materials', icon: BookOpenCheck },
      { href: '/academic/ethics-syllabi', label: 'AI Ethics Syllabi', icon: ScrollText },
      { href: '/academic/reading-list', label: 'Reading List', icon: BookOpen }
    ]
  },
  { 
    href: '/articles', 
    label: 'Articles', 
    icon: Newspaper,
    dropdown: [
      { href: '/articles/guardrails-ux-safety', label: 'Guardrails in UX Safety', icon: Shield },
      { href: '/articles/cost-aware-llm-serving', label: 'Cost-Aware LLM Serving', icon: BarChart3 },
      { href: '/articles/agent-evaluation-beyond-win-rates', label: 'Agent Evaluation Beyond Win-Rates', icon: Target },
      { href: '/articles/philosophy-machine-agency', label: 'Philosophy of Machine Agency', icon: Brain },
      { href: '/articles/epistemic-risks-ai', label: 'Epistemic Risks in AI', icon: Eye },
      { href: '/articles/linguistic-symbolism-ml', label: 'Linguistic Symbolism in ML', icon: Code },
      { href: '/articles/ai-human-dignity', label: 'AI & Human Dignity', icon: Heart },
      { href: '/articles/philosophy-responsibility', label: 'Philosophy of Responsibility', icon: Scale },
      { href: '/articles/comparative-llm-analysis', label: 'Comparative LLM Analysis', icon: GitCompare },
      { href: '/articles/case-study-ai-social-systems', label: 'Case Study: AI in Social Systems', icon: Globe }
    ]
  },
  { href: '/about', label: 'About', icon: User },
  { href: '/whitepapers', label: 'Whitepapers', icon: FileText },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`nav-premium z-50 ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="nav-logo-premium">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="nav-logo-icon"
            >
              <img src="/brand/black-cat-solid.svg" alt="Traceremove" className="w-6 h-6" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white font-ibm-sans whitespace-nowrap">
                Traceremove
              </span>
              <span className="text-xs text-white/70 font-medium tracking-wider whitespace-nowrap">
                AI Research Lab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 whitespace-nowrap">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                onMouseLeave={() => item.dropdown && handleDropdownLeave()}
              >
                <Link
                  href={item.href}
                  className={`nav-link-premium inline-flex items-center gap-2 leading-none whitespace-nowrap group ${isActive(item.href) ? 'active' : ''} ${item.dropdown ? 'dropdown-trigger' : ''}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-2 rounded-xl bg-white/12 ring-1 ring-white/25 backdrop-blur-sm shadow-md">
                      <item.icon strokeWidth={2.8} className="w-6 h-6 shrink-0 align-middle text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.6)] transition-colors duration-300" />
                    </span>
                  </motion.div>
                  <span className="font-ibm-sans text-white leading-none group-hover:text-white transition-colors duration-300 tracking-tight drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]">{item.label}</span>
                  
                  {/* Dropdown indicator */}
                  {item.dropdown && (
                    <motion.div
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 ml-1 rounded-lg bg-white/12 ring-1 ring-white/25 backdrop-blur-sm shadow">
                        <ChevronDown strokeWidth={2.6} className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
                      </span>
                    </motion.div>
                  )}
                  
                  {/* Active indicator */}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-ai-purple/0 via-accent-ai-purple/5 to-accent-lab-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white/10 backdrop-blur-xl border border-accent-ai-purple/20 rounded-2xl shadow-2xl shadow-accent-ai-purple/10 z-50"
                      >
                        <div className="p-4 space-y-1">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <motion.div
                              key={dropdownItem.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: dropdownIndex * 0.03 }}
                            >
                              <Link
                                href={dropdownItem.href}
                                className="flex items-center px-4 py-3 rounded-xl text-research-text hover:text-accent-ai-purple hover:bg-accent-ai-purple/10 transition-all duration-200 group"
                              >
                                <motion.div
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-xl bg-white/12 ring-1 ring-white/20 backdrop-blur-sm shadow">
                                    <dropdownItem.icon strokeWidth={2.6} className="w-5 h-5 text-white transition-colors duration-200 drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
                                  </span>
                                </motion.div>
                                <span className="font-medium text-sm">{dropdownItem.label}</span>
                                
                                {/* Hover indicator */}
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileHover={{ width: 4 }}
                                  className="ml-auto h-4 bg-gradient-to-b from-accent-ai-purple to-accent-lab-purple rounded-full"
                                />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Dropdown footer */}
                        <div className="px-4 py-3 border-t border-accent-ai-purple/10">
                          <div className="text-center">
                            <p className="text-xs text-research-text-secondary font-medium">
                              {item.dropdown.length} {item.label.toLowerCase()} areas
                            </p>
                            <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full mx-auto" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="lg:hidden relative p-3 rounded-2xl text-research-text-secondary hover:text-research-text hover:bg-white/5 transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X strokeWidth={2.2} className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu strokeWidth={2.2} className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mobile-menu-premium lg:hidden"
          >
            <div className="px-6 py-4 space-y-2 max-h-96 overflow-y-auto">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {/* Main navigation item */}
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="mobile-menu-link"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/12 ring-1 ring-white/25 backdrop-blur-sm shadow-md">
                        <item.icon strokeWidth={2.8} className={`w-6 h-6 transition-colors duration-300 ${isActive(item.href) ? 'text-white' : 'text-white group-hover:text-white'} drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]`} />
                      </span>
                    </motion.div>
                    <span className="font-ibm-sans text-lg">{item.label}</span>
                    
                    {/* Mobile active indicator */}
                    {isActive(item.href) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full"
                      />
                    )}
                    
                    {/* Dropdown indicator for mobile */}
                    {item.dropdown && (
                      <ChevronDown strokeWidth={2.4} className="w-4 h-4 ml-2 text-white" />
                    )}
                  </Link>
                  
                  {/* Mobile dropdown items */}
                  {item.dropdown && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <motion.div
                          key={dropdownItem.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: dropdownIndex * 0.02 }}
                        >
                          <Link
                            href={dropdownItem.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center px-3 py-2 rounded-lg text-research-text-secondary hover:text-accent-ai-purple hover:bg-accent-ai-purple/5 transition-all duration-200 group"
                          >
                            <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-xl bg-white/12 ring-1 ring-white/20 backdrop-blur-sm shadow">
                              <dropdownItem.icon strokeWidth={2.6} className="w-4 h-4 text-white transition-colors duration-200 drop-shadow-[0_0_8px_rgba(0,0,0,0.45)]" />
                            </span>
                            <span className="text-sm font-medium">{dropdownItem.label}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Mobile footer */}
            <div className="px-6 py-4 border-t border-accent-ai-purple/10">
              <div className="text-center">
                <p className="text-sm text-research-text-secondary font-medium">
                  AI Research &amp; Philosophy
                </p>
                <div className="mt-2 w-16 h-0.5 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full mx-auto" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
