'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface VisualHighlightProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  linkText?: string;
  badge?: string;
  gradient?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function VisualHighlight({
  title,
  description,
  imageUrl,
  link,
  linkText = 'Learn More',
  badge,
  gradient = 'from-accent-ai-purple to-accent-lab-purple',
  className = '',
  children
}: VisualHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -8 }}
      className={`group ${className}`}
    >
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        
        <div className="relative bg-gradient-to-br from-white via-research-50/20 to-accent-ai-purple/5 rounded-3xl shadow-lab-card hover:shadow-card-hover border border-accent-ai-purple/10 hover:border-accent-ai-purple/30 transition-all duration-500 overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-lab-purple/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Image Section */}
          {imageUrl && (
            <div className="relative h-48 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {badge && (
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-accent-ai-purple border border-accent-ai-purple/20">
                    {badge}
                  </span>
                </div>
              )}
            </div>
          )}
          
          {/* Content Section */}
          <div className="relative p-8">
            {/* Badge (if no image) */}
            {badge && !imageUrl && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-6"
              >
                <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                  {badge}
                </span>
              </motion.div>
            )}
            
            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-accent-deep-blue mb-4 font-ibm-sans group-hover:text-accent-ai-purple transition-colors duration-300"
            >
              {title}
            </motion.h3>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-research-600 leading-relaxed mb-6 font-ibm-sans text-lg"
            >
              {description}
            </motion.p>
            
            {/* Custom Content */}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                {children}
              </motion.div>
            )}
            
            {/* Link */}
            {link && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <a
                  href={link}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 group/link font-ibm-sans`}
                >
                  {linkText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                  <ExternalLink className="ml-1 w-4 h-4 opacity-70" />
                </a>
              </motion.div>
            )}
          </div>
          
          {/* Hover Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
               style={{ padding: '1px' }}>
            <div className="w-full h-full bg-white rounded-3xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
