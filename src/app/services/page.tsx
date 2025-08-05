'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Scale, Eye, Bot, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'orm',
    title: 'ORM',
    subtitle: 'Online Reputation Management',
    description: 'Комплексное управление онлайн репутацией вашего бренда. Мониторинг, анализ и улучшение восприятия компании в интернете.',
    icon: Shield,
    features: [
      'Анализ текущей репутации',
      'Стратегия улучшения имиджа',
      '24/7 мониторинг упоминаний',
      'Работа с отзывами и комментариями'
    ],
    gradient: 'from-blue-600 to-purple-600',
    delay: 0.1
  },
  {
    id: 'deindex',
    title: 'Deindex',
    subtitle: 'Удаление из поиска',
    description: 'Профессиональная деиндексация негативных материалов из поисковых систем. Законные методы удаления нежелательного контента.',
    icon: Search,
    features: [
      'Удаление из Google и Yandex',
      'Работа с поисковыми системами',
      'Правовое обоснование запросов',
      'Гарантия результата'
    ],
    gradient: 'from-purple-600 to-pink-600',
    delay: 0.2
  },
  {
    id: 'legal',
    title: 'Legal Support',
    subtitle: 'Правовая поддержка',
    description: 'Юридическое сопровождение вопросов репутации. Защита от клеветы, диффамации и незаконного распространения информации.',
    icon: Scale,
    features: [
      'Консультации по репутационному праву',
      'Досудебное урегулирование',
      'Судебная защита интересов',
      'Международное право'
    ],
    gradient: 'from-green-600 to-blue-600',
    delay: 0.3
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    subtitle: 'Мониторинг репутации',
    description: 'Непрерывный мониторинг упоминаний вашего бренда в интернете. Раннее обнаружение репутационных угроз и возможностей.',
    icon: Eye,
    features: [
      'Мониторинг социальных сетей',
      'Отслеживание новостных сайтов',
      'Анализ тональности упоминаний',
      'Еженедельные отчеты'
    ],
    gradient: 'from-orange-600 to-red-600',
    delay: 0.4
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    subtitle: 'AI-инструменты',
    description: 'Передовые AI-технологии для управления репутацией. Автоматизация процессов мониторинга и анализа репутационных данных.',
    icon: Bot,
    features: [
      'AI-анализ тональности',
      'Автоматическое реагирование',
      'Предиктивная аналитика',
      'Персонализированные рекомендации'
    ],
    gradient: 'from-cyan-600 to-blue-600',
    delay: 0.5
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-research-bg via-research-surface to-research-bg">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent-ai-purple/20 to-accent-lab-purple/20 border border-accent-ai-purple/30 mb-8"
          >
            <Shield className="h-5 w-5 text-accent-ai-purple mr-2" />
            <span className="text-accent-ai-purple font-medium">Профессиональные услуги</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-research-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Наши{' '}
            <span className="bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple bg-clip-text text-transparent">
              Услуги
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-research-text-secondary max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Комплексные решения для управления репутацией с использованием передовых AI-технологий. 
            Защитите и улучшите восприятие вашего бренда в цифровом пространстве.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="rest"
                  className="group cursor-pointer"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="relative h-full bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm border border-research-surface/50 rounded-2xl p-8 overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 relative z-10`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-research-text mb-2">
                        {service.title}
                      </h3>
                      <p className="text-accent-ai-purple font-medium mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-research-text-secondary mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center text-research-text-secondary"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: service.delay + (index * 0.1) }}
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      {/* CTA Button */}
                      <motion.button
                        className={`w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Узнать больше
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm border border-research-surface/50 rounded-3xl p-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-research-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Готовы защитить свою репутацию?
            </motion.h2>
            <motion.p 
              className="text-xl text-research-text-secondary mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Получите бесплатную консультацию и узнайте, как мы можем помочь улучшить восприятие вашего бренда
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.button
                className="bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Бесплатная консультация
                <ArrowRight className="h-5 w-5 ml-2" />
              </motion.button>
              <motion.button
                className="border border-accent-ai-purple text-accent-ai-purple font-semibold py-4 px-8 rounded-xl hover:bg-accent-ai-purple/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Связаться с нами
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
