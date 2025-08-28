'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/arthur-ziganshin', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/blackcatserious', icon: Github },
    { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=ArthurZiganshin', icon: Globe },
    { name: 'ORCID', href: 'https://orcid.org/0000-0002-1234-5678', icon: Globe },
    { name: 'ResearchGate', href: 'https://www.researchgate.net/profile/Arthur-Ziganshin', icon: Globe },
  ];

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Research', href: '/research' },
    { name: 'Projects', href: '/projects' },
    { name: 'Tools', href: '/tools' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/legal/privacy-policy' },
    { name: 'Ethics Statement', href: '/legal/ethics-statement' },
  ];
  
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mt-32 overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-ai-purple/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-lab-purple/15 via-transparent to-transparent" />
      
      {/* Animated mesh overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 animate-pulse" />
        </div>
      </div>

      <div className="relative glass-card-premium border-t border-accent-ai-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Lab Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-ibm-sans">
                  Traceremove AI Research Lab
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed font-inter max-w-md">
                  Advancing AI through ethics, interpretability, and human-centered design. 
                  Building the future of responsible artificial intelligence.
                </p>
              </div>
              
              {/* Contact Info */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-xl border border-accent-ai-purple/20 backdrop-blur-sm hover:border-accent-ai-purple/40 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-accent-ai-purple mr-3" />
                <span className="text-slate-300 font-ibm-sans group-hover:text-white transition-colors duration-300">
                  artur@tracermove.com
                </span>
              </motion.div>
            </motion.div>
            
            {/* Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 font-ibm-sans">Navigation</h3>
              <ul className="space-y-4">
                {navigationLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      className="group inline-flex items-center text-slate-300 hover:text-white transition-all duration-300 font-inter"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Connect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 font-ibm-sans">Connect</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="group inline-flex items-center text-slate-300 hover:text-white transition-all duration-300 font-inter"
                  >
                    <social.icon className="w-5 h-5 mr-3 text-accent-ai-purple group-hover:text-accent-lab-purple transition-colors duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {social.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 pt-8 border-t border-accent-ai-purple/20"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-slate-400 font-inter">
                © {currentYear} Traceremove AI Research Lab. All rights reserved.
              </p>
              <div className="flex space-x-8">
                {legalLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-slate-400 hover:text-accent-ai-purple transition-colors duration-300 font-inter text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
