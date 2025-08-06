'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2, Users, ArrowRight, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 'tech-ceo',
    name: 'Алексей Петров',
    position: 'CEO',
    company: 'TechStart',
    industry: 'IT',
    avatar: '/avatars/alexey.jpg',
    companyLogo: '/logos/techstart.png',
    rating: 5,
    text: 'TraceRemove помогли нам превратить репутационный кризис в возможность для роста. Их профессиональный подход и быстрые результаты превзошли все наши ожидания. Рекомендую всем, кто серьезно относится к своей репутации.',
    results: ['Рост трафика на 582%', 'Конверсия увеличилась в 4 раза', 'Негативные упоминания снизились на 73%'],
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'restaurant-director',
    name: 'Мария Иванова',
    position: 'Директор по маркетингу',
    company: 'FoodChain',
    industry: 'HoReCa',
    avatar: '/avatars/maria.jpg',
    companyLogo: '/logos/foodchain.png',
    rating: 5,
    text: 'Благодаря TraceRemove мы не только восстановили репутацию после кризиса, но и стали сильнее. Клиенты снова нам доверяют, а наши рестораны процветают. Команда работала круглосуточно, чтобы помочь нам.',
    results: ['Рейтинг Google вырос с 2.1 до 4.6', 'Посещаемость увеличилась на 68%', 'Выручка выросла на 53%'],
    gradient: 'from-green-600 to-blue-600'
  },
  {
    id: 'medical-doctor',
    name: 'Доктор Сергей Волков',
    position: 'Главный врач',
    company: 'МедЦентр+',
    industry: 'Медицина',
    avatar: '/avatars/sergey.jpg',
    companyLogo: '/logos/medcenter.png',
    rating: 5,
    text: 'Профессиональная работа команды TraceRemove помогла нам полностью очистить репутацию от клеветнических материалов конкурентов. Теперь пациенты снова нам доверяют, а наша клиника процветает.',
    results: ['Удалено 23 негативных страницы', 'Записи на прием выросли на 182%', 'Доверие пациентов увеличилось на 55%'],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'finance-director',
    name: 'Елена Смирнова',
    position: 'PR-директор',
    company: 'FinanceGroup',
    industry: 'Финансы',
    avatar: '/avatars/elena.jpg',
    companyLogo: '/logos/financegroup.png',
    rating: 5,
    text: 'TraceRemove не просто очистили нашу репутацию - они помогли построить долгосрочную стратегию управления имиджем компании. Их экспертиза в области финансового сектора впечатляет.',
    results: ['87% позитивных упоминаний в СМИ', 'Клиентская база выросла на 34%', 'Стоимость акций увеличилась на 28%'],
    gradient: 'from-orange-600 to-red-600'
  },
  {
    id: 'retail-owner',
    name: 'Дмитрий Козлов',
    position: 'Владелец',
    company: 'RetailMax',
    industry: 'Ритейл',
    avatar: '/avatars/dmitry.jpg',
    companyLogo: '/logos/retailmax.png',
    rating: 5,
    text: 'Когда наш интернет-магазин столкнулся с волной негативных отзывов, TraceRemove быстро взяли ситуацию под контроль. Их AI-инструменты и персональный подход помогли нам не только восстановиться, но и стать лидером рынка.',
    results: ['Конверсия выросла на 245%', 'Возвраты снизились на 67%', 'NPS увеличился до 8.7'],
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'law-partner',
    name: 'Анна Федорова',
    position: 'Управляющий партнер',
    company: 'LegalPro',
    industry: 'Юриспруденция',
    avatar: '/avatars/anna.jpg',
    companyLogo: '/logos/legalpro.png',
    rating: 5,
    text: 'Как юристы, мы понимаем важность репутации. TraceRemove продемонстрировали высочайший профессионализм в работе с нашим делом. Их знание правовых аспектов управления репутацией впечатляет.',
    results: ['Новые клиенты +156%', 'Средний чек увеличился на 89%', 'Рейтинг в каталогах 4.9/5'],
    gradient: 'from-indigo-600 to-purple-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const testimonialVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const TestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => (
  <motion.div
    variants={testimonialVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group cursor-pointer"
  >
    <div className="relative h-full bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm border border-research-surface/50 rounded-3xl p-8 overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Quote Icon */}
      <div className="relative z-10 mb-6">
        <Quote className="h-8 w-8 text-accent-ai-purple/60" />
      </div>
      
      {/* Rating */}
      <div className="relative z-10 flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <blockquote className="relative z-10 text-research-text-secondary text-lg leading-relaxed mb-6">
        "{testimonial.text}"
      </blockquote>
      
      {/* Results */}
      <div className="relative z-10 mb-6">
        <h4 className="text-research-text font-semibold mb-3 flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          Ключевые результаты
        </h4>
        <ul className="space-y-2">
          {testimonial.results.map((result: string, resultIndex: number) => (
            <motion.li
              key={resultIndex}
              className="text-research-text-secondary text-sm flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) + (resultIndex * 0.1) }}
            >
              <div className="w-2 h-2 bg-accent-ai-purple rounded-full mr-3 flex-shrink-0" />
              {result}
            </motion.li>
          ))}
        </ul>
      </div>
      
      {/* Author Info */}
      <div className="relative z-10 flex items-center">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center mr-4 flex-shrink-0`}>
          <Users className="h-8 w-8 text-white" />
        </div>
        <div className="flex-grow">
          <div className="font-semibold text-research-text">{testimonial.name}</div>
          <div className="text-sm text-research-text-secondary">{testimonial.position}</div>
          <div className="text-sm text-accent-ai-purple font-medium">{testimonial.company}</div>
        </div>
        <div className="flex items-center">
          <Building2 className="h-5 w-5 text-research-text-secondary mr-1" />
          <span className="text-xs text-research-text-secondary">{testimonial.industry}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialsPage() {
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
            <Quote className="h-5 w-5 text-accent-ai-purple mr-2" />
            <span className="text-accent-ai-purple font-medium">Отзывы клиентов</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-research-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Что говорят{' '}
            <span className="bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple bg-clip-text text-transparent">
              Клиенты
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-research-text-secondary max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Истории успеха от реальных клиентов, которые доверили нам свою репутацию. 
            Узнайте, как мы помогли компаниям из разных отраслей достичь выдающихся результатов.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-ai-purple mb-2">500+</div>
              <div className="text-research-text-secondary">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-ai-purple mb-2">98%</div>
              <div className="text-research-text-secondary">Успешных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-ai-purple mb-2">4.9</div>
              <div className="text-research-text-secondary">Средний рейтинг</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Grid */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Industry Coverage */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-research-text text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Работаем с компаниями всех отраслей
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {['IT', 'HoReCa', 'Медицина', 'Финансы', 'Ритейл', 'Юриспруденция'].map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-gradient-to-br from-research-surface/60 to-research-surface/30 backdrop-blur-sm border border-research-surface/40 rounded-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <Building2 className="h-8 w-8 text-accent-ai-purple mx-auto mb-3" />
                <div className="text-research-text font-medium">{industry}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm border border-research-surface/50 rounded-3xl p-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-research-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Присоединяйтесь к довольным клиентам
            </motion.h2>
            <motion.p 
              className="text-xl text-research-text-secondary mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Станьте частью истории успеха TraceRemove. Позвольте нам защитить и улучшить репутацию вашего бренда.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.button
                className="bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Получить консультацию
                <ArrowRight className="h-5 w-5 ml-2" />
              </motion.button>
              <motion.button
                className="border border-accent-ai-purple text-accent-ai-purple font-semibold py-4 px-8 rounded-xl hover:bg-accent-ai-purple/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Посмотреть портфолио
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
