'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  href,
  onClick,
  disabled = false,
  loading = false,
  className = "",
  type = 'button'
}: PremiumButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-ai-purple disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple text-white shadow-2xl hover:shadow-accent-ai-purple/50 border border-accent-ai-purple/50",
    secondary: "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white shadow-xl hover:shadow-slate-500/30 border border-slate-600/50",
    ghost: "text-accent-ai-purple hover:text-white hover:bg-accent-ai-purple/10 border border-transparent",
    outline: "text-accent-ai-purple border border-accent-ai-purple/50 hover:bg-accent-ai-purple/10 backdrop-blur-sm"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-xl",
    md: "px-6 py-3 text-base rounded-2xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
    xl: "px-12 py-6 text-xl rounded-3xl"
  };

  const Component = href ? motion.a : motion.button;
  const componentProps = href ? { href } : { onClick, type };

  return (
    <Component
      {...componentProps}
      disabled={disabled || loading}
      whileHover={{ 
        scale: disabled ? 1 : 1.02,
        y: disabled ? 0 : -2
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.98 
      }}
      transition={{ 
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 20
      }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {/* Animated Background Layers */}
      {variant === 'primary' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-accent-ai-purple/0 via-white/20 to-accent-ai-purple/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
          <motion.div
            animate={{ 
              background: [
                'linear-gradient(45deg, rgba(124, 58, 237, 0.8), rgba(139, 92, 246, 0.8))',
                'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(124, 58, 237, 0.8))',
                'linear-gradient(225deg, rgba(124, 58, 237, 0.8), rgba(139, 92, 246, 0.8))',
                'linear-gradient(315deg, rgba(139, 92, 246, 0.8), rgba(124, 58, 237, 0.8))'
              ]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </>
      )}

      {/* Content Container */}
      <div className="relative flex items-center space-x-2">
        {Icon && iconPosition === 'left' && (
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : size === 'lg' ? 'w-6 h-6' : 'w-7 h-7'}`} />
          </motion.div>
        )}
        
        <span className="relative">
          {loading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
            />
          ) : (
            children
          )}
        </span>
        
        {Icon && iconPosition === 'right' && (
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : size === 'lg' ? 'w-6 h-6' : 'w-7 h-7'}`} />
          </motion.div>
        )}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-accent-ai-purple/50 to-accent-lab-purple/50 blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
    </Component>
  );
}
