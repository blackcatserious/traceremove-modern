'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Search, 
  User, 
  Wrench, 
  FileText, 
  Phone, 
  Menu, 
  X,
  ChevronDown,
  Brain,
  BookOpen,
  Microscope
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: Home
  },
  {
    label: 'Research',
    href: '/research',
    icon: Microscope,
    children: [
      { label: 'Ethical AI Architecture', href: '/research/ethical-ai-architecture', icon: Brain },
      { label: 'Privacy-Preserving AI', href: '/research/privacy-preserving-ai', icon: Brain },
      { label: 'Human-Centered AI', href: '/research/human-centered-ai', icon: Brain },
      { label: 'Digital Rights & AI', href: '/research/digital-rights-ai', icon: Brain }
    ]
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: Wrench,
    children: [
      { label: 'Transparent LLMs', href: '/projects/transparent-llms', icon: Brain },
      { label: 'Symbolic AI', href: '/projects/symbolic-ai', icon: Brain },
      { label: 'Digital Identity & Agency', href: '/projects/digital-identity-agency', icon: Brain }
    ]
  },
  {
    label: 'Tools',
    href: '/tools',
    icon: Search,
    children: [
      { label: 'AI Research Dashboard', href: '/tools/ai-research-dashboard', icon: Search },
      { label: 'Semantic Search Tool', href: '/tools/semantic-search-tool', icon: Search },
      { label: 'Privacy Score Calculator', href: '/tools/privacy-score-calculator', icon: Search }
    ]
  },
  {
    label: 'Academic',
    href: '/academic',
    icon: BookOpen,
    children: [
      { label: 'CV', href: '/academic/cv', icon: FileText },
      { label: 'Publications Archive', href: '/academic/publications-archive', icon: FileText },
      { label: 'Conference Talks', href: '/academic/conference-talks', icon: FileText }
    ]
  },
  {
    label: 'Articles',
    href: '/articles',
    icon: FileText
  },
  {
    label: 'About',
    href: '/about',
    icon: User
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Phone
  }
];

export default function FloatingNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const menuVariants = {
    closed: {
      x: '-100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  } as const;

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const containerVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Floating Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-8 left-8 z-50 p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
          scrolled 
            ? 'bg-black/20 border-white/10 shadow-2xl' 
            : 'bg-white/5 border-white/5 shadow-xl'
        }`}
        style={{
          background: scrolled 
            ? 'linear-gradient(135deg, rgba(15, 10, 26, 0.9) 0%, rgba(30, 27, 75, 0.8) 50%, rgba(49, 46, 129, 0.7) 100%)'
            : 'linear-gradient(135deg, rgba(15, 10, 26, 0.6) 0%, rgba(30, 27, 75, 0.5) 50%, rgba(49, 46, 129, 0.4) 100%)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 25px 50px rgba(124, 58, 237, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 h-full w-80 z-45 p-8 pt-24"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 10, 26, 0.95) 0%, rgba(30, 27, 75, 0.9) 30%, rgba(49, 46, 129, 0.85) 60%, rgba(67, 56, 202, 0.8) 100%)',
              backdropFilter: 'blur(20px)',
              borderRight: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '20px 0 40px rgba(0, 0, 0, 0.3), inset -1px 0 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              className="space-y-2"
            >
              {navigationItems.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <div className="relative">
                    {item.children ? (
                      <button
                        onClick={() => toggleExpanded(item.label)}
                        className="w-full flex items-center justify-between p-4 rounded-xl text-white/90 hover:text-white transition-all duration-300 group hover:bg-white/5"
                        style={{
                          background: expandedItems.includes(item.label) 
                            ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)'
                            : 'transparent'
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                          <span className="font-medium text-lg">{item.label}</span>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedItems.includes(item.label) ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4 text-white/60" />
                        </motion.div>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 group ${
                          pathname === item.href
                            ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/20 text-white border border-purple-500/30'
                            : 'text-white/90 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <item.icon className={`w-5 h-5 transition-colors ${
                          pathname === item.href 
                            ? 'text-purple-300' 
                            : 'text-purple-400 group-hover:text-purple-300'
                        }`} />
                        <span className="font-medium text-lg">{item.label}</span>
                      </Link>
                    )}

                    {/* Submenu */}
                    <AnimatePresence>
                      {item.children && expandedItems.includes(item.label) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-8 mt-2 space-y-1 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group ${
                                pathname === child.href
                                  ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/10 text-white border-l-2 border-purple-400'
                                  : 'text-white/70 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              <child.icon className={`w-4 h-4 transition-colors ${
                                pathname === child.href 
                                  ? 'text-purple-300' 
                                  : 'text-purple-400/70 group-hover:text-purple-300'
                              }`} />
                              <span className="font-medium">{child.label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-8 left-8 right-8"
            >
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/60 text-sm text-center">
                  Artur Ziganshin
                </p>
                <p className="text-white/40 text-xs text-center mt-1">
                  AI Research Lab
                </p>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
