'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface MenuItem {
  label: string;
  href?: string;
  icon?: LucideIcon;
  children?: MenuItem[];
}

interface PremiumMenuProps {
  items: MenuItem[];
  className?: string;
}

export default function PremiumMenu({ items, className = "" }: PremiumMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="relative"
          onMouseEnter={() => item.children && handleMouseEnter(item.label)}
          onMouseLeave={() => item.children && handleMouseLeave()}
        >
          {item.href ? (
            <Link
              href={item.href}
              className="group relative px-4 py-2 rounded-xl text-white/90 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-ai-purple/0 via-accent-ai-purple/10 to-accent-ai-purple/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
              
              {/* Content */}
              <div className="relative flex items-center space-x-2">
                {item.icon && (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.div>
                )}
                <span className="font-medium">{item.label}</span>
                {item.children && (
                  <motion.div
                    animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                )}
              </div>

              {/* Active Indicator */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full"
              />
            </Link>
          ) : (
            <button className="group relative px-4 py-2 rounded-xl text-white/90 hover:text-white transition-all duration-300 flex items-center space-x-2">
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-ai-purple/0 via-accent-ai-purple/10 to-accent-ai-purple/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
              
              {/* Content */}
              <div className="relative flex items-center space-x-2">
                {item.icon && (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.div>
                )}
                <span className="font-medium">{item.label}</span>
                {item.children && (
                  <motion.div
                    animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                )}
              </div>
            </button>
          )}

          {/* Dropdown Menu */}
          {item.children && (
            <AnimatePresence>
              {activeDropdown === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 w-80 z-50"
                >
                  {/* Dropdown Background */}
                  <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Animated Background Pattern */}
                    <motion.div
                      animate={{ 
                        backgroundPosition: ['0% 0%', '100% 100%']
                      }}
                      transition={{ 
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `
                          radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
                        `,
                        backgroundSize: '60px 60px'
                      }}
                    />
                    
                    <div className="relative p-4 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <motion.div
                          key={child.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: childIndex * 0.05 }}
                        >
                          <Link
                            href={child.href || '#'}
                            className="group flex items-center px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                          >
                            {child.icon && (
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.2 }}
                                className="mr-3"
                              >
                                <child.icon className="w-5 h-5 text-accent-ai-purple/70 group-hover:text-accent-ai-purple transition-colors duration-200" />
                              </motion.div>
                            )}
                            <span className="font-medium text-sm">{child.label}</span>
                            
                            {/* Hover Indicator */}
                            <motion.div
                              initial={{ width: 0 }}
                              whileHover={{ width: 4 }}
                              className="ml-auto h-4 bg-gradient-to-b from-accent-ai-purple to-accent-lab-purple rounded-full"
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Dropdown Footer */}
                    <div className="px-4 py-3 border-t border-white/10 bg-gradient-to-r from-accent-ai-purple/5 to-accent-lab-purple/5">
                      <div className="text-center">
                        <p className="text-xs text-white/60 font-medium">
                          {item.children.length} {item.label.toLowerCase()} available
                        </p>
                        <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full mx-auto" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      ))}
    </div>
  );
}
