'use client';

import { motion } from 'framer-motion';
import { User, Award, Globe, BookOpen } from 'lucide-react';

interface ProfessionalAvatarProps {
  name: string;
  title: string;
  imageUrl?: string;
  className?: string;
  showBadges?: boolean;
}

export default function ProfessionalAvatar({ 
  name, 
  title, 
  imageUrl, 
  className = '',
  showBadges = true 
}: ProfessionalAvatarProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/20 to-accent-lab-purple/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
      
      <div className="relative">
        {/* Avatar Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-48 h-48 mx-auto mb-8"
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-white p-2">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full rounded-full object-cover shadow-ai-glow"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple flex items-center justify-center shadow-ai-glow">
                  <User className="w-20 h-20 text-white" />
                </div>
              )}
            </div>
          </div>
          
          {/* Floating Badges */}
          {showBadges && (
            <>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-full flex items-center justify-center shadow-ai-glow"
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-accent-lab-purple to-primary-600 rounded-full flex items-center justify-center shadow-ai-glow"
              >
                <Globe className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-ai-purple rounded-full flex items-center justify-center shadow-ai-glow"
              >
                <BookOpen className="w-6 h-6 text-white" />
              </motion.div>
            </>
          )}
        </motion.div>
        
        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-accent-deep-blue mb-4 font-ibm-sans">
            {name}
          </h1>
          <p className="text-xl text-research-600 font-semibold font-ibm-sans">
            {title}
          </p>
        </motion.div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-ai-purple/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
