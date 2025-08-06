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
    icon: BookOpen
  },
  { 
    href: '/projects', 
    label: 'Projects', 
    icon: Lightbulb
  },
  { 
    href: '/tools', 
    label: 'Tools', 
    icon: Wrench
  },
  { 
    href: '/articles', 
    label: 'Articles', 
    icon: Newspaper
  },
  { 
    href: '/about', 
    label: 'About', 
    icon: User 
  },
  { 
    href: '/contact', 
    label: 'Contact', 
    icon: Mail
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`nav-premium ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="nav-logo-premium">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="nav-logo-icon"
            >
              <Brain className="w-5 h-5 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white font-ibm-sans">
                Traceremove
              </span>
              <span className="text-xs text-white/70 font-medium tracking-wider">
                AI Research Lab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav items-center space-x-1 static-export-visible">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`nav-link-premium ${isActive(item.href) ? 'active' : ''}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <item.icon className="w-5 h-5 mr-2 transition-colors duration-300" />
                  </motion.div>
                  <span className="font-ibm-sans">{item.label}</span>
                  
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
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ 
              scale: 1.12
            }}
            whileTap={{ 
              scale: 0.88
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15
            }}
            onClick={toggleMenu}
            className="lg:hidden mobile-menu-button static-export-visible relative p-3 rounded-2xl text-research-text-secondary hover:text-research-text hover:bg-white/5 transition-all duration-300"
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
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`mobile-menu-premium lg:hidden ${isOpen ? 'open' : ''}`}
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
                      <item.icon className={`w-6 h-6 transition-colors duration-300 ${
                        isActive(item.href) ? 'text-accent-ai-purple' : 'text-research-500 group-hover:text-accent-ai-purple'
                      }`} />
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
                  </Link>
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
