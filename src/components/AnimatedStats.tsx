'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, BookOpen, Award } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  gradient: string;
}

interface AnimatedStatsProps {
  stats?: StatItem[];
  className?: string;
}

const defaultStats: StatItem[] = [
  {
    icon: BookOpen,
    value: 25,
    label: 'Research Papers',
    suffix: '+',
    gradient: 'from-accent-ai-purple to-accent-lab-purple'
  },
  {
    icon: Award,
    value: 10,
    label: 'Years Experience',
    suffix: '+',
    gradient: 'from-accent-lab-purple to-primary-600'
  },
  {
    icon: Users,
    value: 500,
    label: 'Collaborations',
    suffix: '+',
    gradient: 'from-primary-600 to-accent-ai-purple'
  },
  {
    icon: TrendingUp,
    value: 95,
    label: 'Success Rate',
    suffix: '%',
    gradient: 'from-accent-deep-blue to-accent-ai-purple'
  }
];

function AnimatedCounter({ 
  value, 
  duration = 2000, 
  prefix = '', 
  suffix = '' 
}: { 
  value: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-bold text-4xl sm:text-5xl font-ibm-sans">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function AnimatedStats({ stats = defaultStats, className = '' }: AnimatedStatsProps) {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -8 }}
          className="group"
        >
          <div className="relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-white via-research-50/20 to-accent-ai-purple/5 rounded-3xl shadow-lab-card hover:shadow-card-hover border border-accent-ai-purple/10 hover:border-accent-ai-purple/30 p-8 transition-all duration-500 text-center">
              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white mb-6 shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300`}
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              
              {/* Value */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                className="mb-3"
              >
                <div className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  <AnimatedCounter 
                    value={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>
              </motion.div>
              
              {/* Label */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
                className="text-research-600 font-semibold font-ibm-sans text-lg"
              >
                {stat.label}
              </motion.p>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                   style={{ padding: '1px' }}>
                <div className="w-full h-full bg-white rounded-3xl" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
