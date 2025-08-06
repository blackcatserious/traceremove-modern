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
      scale: 0.95,
      rotateY: -15,
      filter: 'blur(8px)',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    closed: { 
      x: -30, 
      opacity: 0, 
      scale: 0.9,
      rotateX: -10,
      filter: 'blur(4px)'
    },
    open: { 
      x: 0, 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      x: 8,
      rotateY: 2,
      boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3), 0 4px 12px rgba(139, 92, 246, 0.2)',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 15
      }
    }
  } as const;

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
        className={`fixed top-6 left-6 z-50 p-4 rounded-2xl backdrop-blur-xl border transition-all duration-500 ${
          scrolled 
            ? 'bg-black/30 border-white/20 shadow-2xl' 
            : 'bg-white/10 border-white/10 shadow-xl'
        }`}
        style={{
          background: scrolled 
            ? 'linear-gradient(135deg, rgba(15, 10, 26, 0.95) 0%, rgba(30, 27, 75, 0.9) 30%, rgba(49, 46, 129, 0.85) 60%, rgba(124, 58, 237, 0.8) 100%)'
            : 'linear-gradient(135deg, rgba(15, 10, 26, 0.7) 0%, rgba(30, 27, 75, 0.6) 30%, rgba(49, 46, 129, 0.5) 60%, rgba(124, 58, 237, 0.4) 100%)',
          boxShadow: scrolled 
            ? '0 25px 50px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(124, 58, 237, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            : '0 20px 40px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(124, 58, 237, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          fontFamily: 'var(--font-inter)'
        }}
        whileHover={{ 
          scale: 1.15,
          rotate: isOpen ? 0 : 12,
          rotateY: 8,
          y: -4,
          boxShadow: '0 40px 80px rgba(124, 58, 237, 0.6), 0 25px 50px rgba(139, 92, 246, 0.5), inset 0 3px 0 rgba(255, 255, 255, 0.4)'
        }}
        whileTap={{ 
          scale: 0.85, 
          rotateX: -8,
          rotateY: 0
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 12
        }}
      >
        <motion.div
          animate={{ 
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1
          }}
          transition={{ 
            duration: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <X className="w-6 h-6 text-white drop-shadow-lg" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Menu className="w-6 h-6 text-white drop-shadow-lg" />
            </motion.div>
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
            className="fixed top-0 left-0 h-full w-96 z-50 p-8 pt-24 overflow-y-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 10, 26, 0.98) 0%, rgba(30, 27, 75, 0.95) 20%, rgba(49, 46, 129, 0.92) 40%, rgba(67, 56, 202, 0.9) 60%, rgba(124, 58, 237, 0.88) 80%, rgba(139, 92, 246, 0.85) 100%)',
              backdropFilter: 'blur(24px)',
              borderRight: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '25px 0 50px rgba(0, 0, 0, 0.4), 10px 0 20px rgba(124, 58, 237, 0.2), inset -1px 0 0 rgba(255, 255, 255, 0.08)',
              fontFamily: 'var(--font-inter)'
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
                      <motion.button
                        onClick={() => toggleExpanded(item.label)}
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.98, rotateX: -2 }}
                        className="w-full flex items-center justify-between p-4 rounded-xl text-white/90 hover:text-white transition-all duration-500 group hover:bg-white/8 hover:backdrop-blur-sm magnetic-hover"
                        style={{
                          background: expandedItems.includes(item.label) 
                            ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)'
                            : 'transparent'
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <motion.div
                            whileHover={{ 
                              scale: 1.2, 
                              rotate: [0, -5, 5, 0],
                              filter: 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.6))'
                            }}
                            transition={{ duration: 0.4 }}
                          >
                            <item.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                          </motion.div>
                          <motion.span 
                            className="font-semibold text-lg tracking-wide text-shine"
                            whileHover={{ x: 3 }}
                          >
                            {item.label}
                          </motion.span>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedItems.includes(item.label) ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4 text-white/60" />
                        </motion.div>
                      </motion.button>
                    ) : (
                      <motion.div
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.98, rotateX: -2 }}
                        className="magnetic-hover"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-500 group ${
                            pathname === item.href
                              ? 'bg-gradient-to-r from-purple-600/40 to-blue-600/30 text-white border border-purple-400/40 shadow-lg shadow-purple-500/20'
                              : 'text-white/90 hover:text-white hover:bg-white/8 hover:backdrop-blur-sm hover:shadow-md hover:shadow-purple-500/10'
                          }`}
                        >
                        <item.icon className={`w-5 h-5 transition-colors ${
                          pathname === item.href 
                            ? 'text-purple-300' 
                            : 'text-purple-400 group-hover:text-purple-300'
                        }`} />
                          <span className="font-medium text-lg">{item.label}</span>
                        </Link>
                      </motion.div>
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
                          {item.children.map((child, childIndex) => (
                            <motion.div
                              key={child.href}
                              initial={{ opacity: 0, x: -20, scale: 0.95 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              transition={{ delay: childIndex * 0.05 }}
                              whileHover={{ 
                                scale: 1.02, 
                                x: 5,
                                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)'
                              }}
                              whileTap={{ scale: 0.98 }}
                              className="magnetic-hover"
                            >
                              <Link
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group ${
                                  pathname === child.href
                                    ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/10 text-white border-l-2 border-purple-400'
                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                }`}
                              >
                                <motion.div
                                  whileHover={{ 
                                    scale: 1.15, 
                                    rotate: 360,
                                    filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.5))'
                                  }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <child.icon className={`w-4 h-4 transition-colors ${
                                    pathname === child.href 
                                      ? 'text-purple-300' 
                                      : 'text-purple-400/70 group-hover:text-purple-300'
                                  }`} />
                                </motion.div>
                                <motion.span 
                                  className="font-medium"
                                  whileHover={{ x: 2 }}
                                >
                                  {child.label}
                                </motion.span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Footer */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-8 left-8 right-8"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-sm shadow-lg">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center"
                  >
                    <User className="w-6 h-6 text-white" />
                  </motion.div>
                  <p className="text-white/80 text-sm font-semibold tracking-wide">
                    Artur Ziganshin
                  </p>
                  <p className="text-white/50 text-xs mt-1 font-medium">
                    AI Research Lab • Philosophy
                  </p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-white/40 text-xs">Online</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
