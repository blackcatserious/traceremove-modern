'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Target, 
  Users, 
  Globe, 
  Award, 
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Heart,
  Zap,
  Eye,
  TrendingUp,
  BarChart3,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const companyValues = [
  { 
    value: "Прозрачность", 
    description: "Мы работаем открыто и честно, предоставляя клиентам полную информацию о наших методах и результатах",
    icon: Eye
  },
  { 
    value: "Эффективность", 
    description: "Используем передовые AI-технологии для достижения максимальных результатов в кратчайшие сроки",
    icon: Zap
  },
  { 
    value: "Этичность", 
    description: "Соблюдаем высочайшие этические стандарты и работаем только в рамках правового поля",
    icon: Shield
  },
  { 
    value: "Клиентоориентированность", 
    description: "Каждый проект — это индивидуальный подход и персональная стратегия для достижения целей клиента",
    icon: Heart
  },
  { 
    value: "Инновации", 
    description: "Постоянно развиваем и внедряем новые технологии для улучшения качества наших услуг",
    icon: Target
  },
  { 
    value: "Глобальность", 
    description: "Работаем с клиентами по всему миру, понимая особенности различных рынков и культур",
    icon: Globe
  }
];

const teamMembers = [
  {
    name: "Артур Зиганшин",
    position: "Основатель и CEO",
    description: "Эксперт в области AI и управления репутацией с 8+ летним опытом. Философ технологий и специалист по этике ИИ.",
    avatar: "/team/arthur.jpg",
    linkedin: "https://linkedin.com/in/arthur-ziganshin",
    github: "https://github.com/arthur-ziganshin",
    specialization: "AI Ethics, Reputation Management, Strategic Planning"
  },
  {
    name: "Мария Петрова",
    position: "Технический директор",
    description: "Ведущий разработчик AI-систем с опытом работы в крупных технологических компаниях. Специалист по машинному обучению.",
    avatar: "/team/maria.jpg",
    linkedin: "https://linkedin.com/in/maria-petrova",
    github: "https://github.com/maria-petrova",
    specialization: "Machine Learning, AI Development, Technical Architecture"
  },
  {
    name: "Дмитрий Волков",
    position: "Директор по правовым вопросам",
    description: "Юрист с 12+ летним опытом в области интернет-права и защиты репутации. Эксперт по международному праву.",
    avatar: "/team/dmitry.jpg",
    linkedin: "https://linkedin.com/in/dmitry-volkov",
    specialization: "Internet Law, Legal Compliance, International Regulations"
  },
  {
    name: "Елена Смирнова",
    position: "Директор по клиентскому сервису",
    description: "Специалист по работе с клиентами и управлению проектами. Обеспечивает высочайший уровень сервиса и результатов.",
    avatar: "/team/elena.jpg",
    linkedin: "https://linkedin.com/in/elena-smirnova",
    specialization: "Client Relations, Project Management, Customer Success"
  }
];

const achievements = [
  {
    metric: "500+",
    label: "Довольных клиентов",
    description: "Компании по всему миру доверяют нам свою репутацию"
  },
  {
    metric: "98%",
    label: "Успешных проектов",
    description: "Высочайший показатель эффективности в индустрии"
  },
  {
    metric: "24/7",
    label: "Мониторинг",
    description: "Круглосуточная защита репутации наших клиентов"
  },
  {
    metric: "50+",
    label: "Стран",
    description: "География наших успешных проектов"
  }
];

const certifications = [
  {
    name: "ISO 27001",
    issuer: "ISO International",
    description: "Международный стандарт информационной безопасности",
    year: "2023"
  },
  {
    name: "GDPR Compliance",
    issuer: "EU Commission",
    description: "Соответствие европейским стандартам защиты данных",
    year: "2023"
  },
  {
    name: "SOC 2 Type II",
    issuer: "AICPA",
    description: "Аудит безопасности и контроля данных",
    year: "2024"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-research-bg via-research-surface to-research-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-accent-lab-purple/5 to-accent-ai-purple/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.08),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            {/* Company Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple rounded-2xl shadow-hero-glow animate-pulse" />
                <div className="absolute inset-2 bg-gradient-to-br from-research-surface to-research-bg rounded-xl flex items-center justify-center shadow-ai-glow">
                  <span className="text-4xl font-bold text-accent-ai-purple">TR</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
              </div>
            </motion.div>

            {/* Company Name and Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-research-text mb-2"
                >
                  TraceRemove
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple bg-clip-text text-transparent"
                >
                  О нас
                </motion.span>
              </h1>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-6">
                <Shield className="w-5 h-5 text-accent-ai-purple mr-2" />
                <span className="text-lg font-semibold text-accent-ai-purple">
                  AI Reputation Firewall
                </span>
              </div>
              
              <p className="text-xl sm:text-2xl text-research-text-secondary max-w-4xl mx-auto mb-8 leading-relaxed">
                Защищаем репутацию компаний и частных лиц с помощью передовых AI-технологий
              </p>
            </motion.div>

            {/* Mission Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg text-research-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Мы — команда экспертов в области управления репутацией, объединившая опыт в сфере AI, 
              права и технологий для создания комплексных решений по защите цифровой репутации. 
              Наша миссия — обеспечить каждому клиенту безопасное и контролируемое присутствие в интернете.
            </motion.p>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-semibold rounded-xl shadow-hero-glow hover:shadow-ai-glow transition-all duration-300"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Связаться с нами
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm text-accent-ai-purple font-semibold rounded-xl border border-accent-ai-purple/30 hover:border-accent-ai-purple/50 transition-all duration-300"
                >
                  <Eye className="mr-3 h-5 w-5" />
                  Наши услуги
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-24 bg-gradient-to-br from-research-surface/30 to-research-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
              <Heart className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple">
                Наши ценности
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-research-text mb-6">
              Принципы работы
            </h2>
            <p className="text-xl text-research-text-secondary max-w-3xl mx-auto leading-relaxed">
              Мы строим доверительные отношения с клиентами на основе прозрачности, 
              этичности и высочайших стандартов качества
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm rounded-2xl p-8 border border-research-surface/50 hover:border-accent-ai-purple/30 transition-all duration-300"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-xl flex items-center justify-center mb-6 shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-research-text mb-4 group-hover:text-accent-ai-purple transition-colors duration-300">
                    {item.value}
                  </h3>
                  <p className="text-research-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-gradient-to-br from-research-surface/80 to-research-surface/40 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-research-surface/20 to-research-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
              <Users className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple">
                Наша команда
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-research-text mb-6">
              Кто мы
            </h2>
            <p className="text-xl text-research-text-secondary max-w-3xl mx-auto leading-relaxed">
              Команда экспертов с многолетним опытом в области AI, права, технологий и клиентского сервиса
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm rounded-2xl p-6 border border-research-surface/50 hover:border-accent-ai-purple/30 transition-all duration-300"
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-full flex items-center justify-center shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-research-text mb-2 group-hover:text-accent-ai-purple transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-accent-ai-purple font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-research-text-secondary text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  {/* Specialization */}
                  <div className="mb-4">
                    <div className="text-xs text-research-text-secondary/80 mb-2">Специализация:</div>
                    <div className="text-xs text-accent-ai-purple font-medium">
                      {member.specialization}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-br from-accent-ai-purple/20 to-accent-lab-purple/20 rounded-lg flex items-center justify-center hover:from-accent-ai-purple hover:to-accent-lab-purple hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                    <Link
                      href={member.github || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gradient-to-br from-accent-ai-purple/20 to-accent-lab-purple/20 rounded-lg flex items-center justify-center hover:from-accent-ai-purple hover:to-accent-lab-purple hover:text-white transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-gradient-to-br from-research-surface/80 to-research-surface/40 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-br from-research-surface/40 to-research-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
              <TrendingUp className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple">
                Наши достижения
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-research-text mb-6">
              Результаты работы
            </h2>
            <p className="text-xl text-research-text-secondary max-w-3xl mx-auto leading-relaxed">
              Цифры, которые говорят о качестве наших услуг и доверии клиентов
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm rounded-2xl p-8 border border-research-surface/50 hover:border-accent-ai-purple/30 transition-all duration-300 text-center"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-accent-ai-purple mb-2 group-hover:text-accent-lab-purple transition-colors duration-300">
                    {achievement.metric}
                  </div>
                  
                  <h3 className="text-xl font-bold text-research-text mb-3">
                    {achievement.label}
                  </h3>
                  
                  <p className="text-research-text-secondary leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-gradient-to-br from-research-surface/80 to-research-surface/40 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-gradient-to-br from-research-surface/30 to-research-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
              <Award className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple">
                Сертификации
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-research-text mb-6">
              Наши сертификаты
            </h2>
            <p className="text-xl text-research-text-secondary max-w-3xl mx-auto leading-relaxed">
              Подтверждение нашей экспертизы и соответствия международным стандартам
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm rounded-2xl p-8 border border-research-surface/50 hover:border-accent-ai-purple/30 transition-all duration-300"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-research-text mb-3 group-hover:text-accent-ai-purple transition-colors duration-300">
                    {cert.name}
                  </h3>
                  
                  <p className="text-accent-ai-purple font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-research-text-secondary text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="text-xs text-research-text-secondary/80">
                    Получен: {cert.year}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-gradient-to-br from-research-surface/80 to-research-surface/40 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-accent-ai-purple/10 via-research-surface/20 to-accent-lab-purple/10 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.2),transparent_50%)]" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8"
            >
              <Mail className="w-4 h-4 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple">
                Свяжитесь с нами
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-research-text mb-8">
              Готовы начать?
            </h2>
            
            <p className="text-xl text-research-text-secondary mb-12 leading-relaxed max-w-4xl mx-auto">
              Обсудим ваш проект и найдем оптимальное решение для защиты вашей репутации. 
              Получите бесплатную консультацию от наших экспертов.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-bold rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 group text-lg"
              >
                <Mail className="mr-3 h-6 w-6 text-white group-hover:animate-pulse transition-all duration-300" />
                Связаться с нами
                <ArrowRight className="ml-3 h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
