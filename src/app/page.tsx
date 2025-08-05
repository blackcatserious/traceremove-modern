'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Scale, Eye, Bot, Zap, CheckCircle, Star, Users, Clock, Mail, User, MessageSquare, Send, AlertCircle, Loader2 } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import ResearchCard from '@/components/ResearchCard';
import InfoCard from '@/components/InfoCard';
import VantaBackground from '@/components/VantaBackground';
import GeometricMesh from '@/components/GeometricMesh';
import DynamicLabBackground from '@/components/DynamicLabBackground';
import PremiumButton from '@/components/PremiumButton';

export default function Home() {
  const [auditFormData, setAuditFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [auditFormStatus, setAuditFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [auditErrors, setAuditErrors] = useState<Record<string, string>>({});

  const validateAuditForm = () => {
    const newErrors: Record<string, string> = {};

    if (!auditFormData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    }

    if (!auditFormData.email.trim()) {
      newErrors.email = 'Email обязателен для заполнения';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(auditFormData.email)) {
      newErrors.email = 'Введите корректный email адрес';
    }

    if (!auditFormData.website.trim()) {
      newErrors.website = 'URL сайта обязателен для заполнения';
    }

    setAuditErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateAuditForm()) {
      return;
    }

    setAuditFormStatus('loading');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAuditFormStatus('success');
      setAuditFormData({ name: '', email: '', website: '', message: '' });
      setTimeout(() => setAuditFormStatus('idle'), 5000);
    } catch {
      setAuditFormStatus('error');
      setTimeout(() => setAuditFormStatus('idle'), 5000);
    }
  };

  const handleAuditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAuditFormData(prev => ({ ...prev, [name]: value }));
    
    if (auditErrors[name]) {
      setAuditErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Premium Background Layers */}
      <VantaBackground variant="hero" className="fixed inset-0 z-[-10]" />
      <GeometricMesh variant="research" density="medium" className="fixed inset-0 z-[-9]" />
      <DynamicLabBackground intensity="medium" className="fixed inset-0 z-[-8]" />
      {/* Hero Section with Premium Glass Effect */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Premium Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-blue-900/5 to-purple-900/10 backdrop-blur-sm z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.05),transparent_60%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.04),transparent_60%)] z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            {/* Platform Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full glass-card-premium border border-accent-ai-purple/30 shadow-ai-glow">
                <Shield className="w-5 h-5 text-purple-300" />
                <span className="text-white/90 font-medium text-sm tracking-wide typography-premium">
                  AI Reputation Firewall
                </span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="hero-title text-white mb-8 typography-premium">
                Защитите свою<br />
                цифровую репутацию
              </h1>
              
              <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-16 typography-premium leading-relaxed">
                TraceRemove — ведущая платформа управления репутацией с AI-технологиями. 
                Удаляем негативный контент, защищаем бренд и восстанавливаем доверие.
              </p>
            </motion.div>

            {/* Main Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-8 mb-24"
            >
              <FeatureCard
                icon={Shield}
                title="Управление репутацией"
                description="Комплексная защита и восстановление цифровой репутации"
                gradient="from-blue-900/40 to-purple-900/40"
                borderColor="border-blue-500/20"
                iconGradient="from-blue-500 to-blue-600"
              />
              
              <FeatureCard
                icon={Search}
                title="Деиндексация контента"
                description="Удаление негативных материалов из поисковых систем"
                gradient="from-purple-900/40 to-violet-900/40"
                borderColor="border-purple-500/20"
                iconGradient="from-purple-500 to-purple-600"
              />
              
              <FeatureCard
                icon={Bot}
                title="AI мониторинг"
                description="Автоматическое отслеживание упоминаний и угроз репутации"
                gradient="from-violet-900/40 to-indigo-900/40"
                borderColor="border-violet-500/20"
                iconGradient="from-violet-500 to-violet-600"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas Section with Premium Glass Effect */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/30 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white mb-6 typography-premium">
              Наши услуги
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto typography-premium leading-relaxed">
              Полный спектр решений для защиты и восстановления репутации в цифровом пространстве.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={Scale}
                title="Юридическая поддержка"
                description="Правовое сопровождение процессов удаления контента и защиты репутации"
                gradient="from-blue-900/40 to-cyan-900/40"
                borderColor="border-blue-500/20"
                iconGradient="from-blue-500 to-cyan-500"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={Eye}
                title="Мониторинг репутации"
                description="Круглосуточное отслеживание упоминаний бренда в интернете"
                gradient="from-purple-900/40 to-pink-900/40"
                borderColor="border-purple-500/20"
                iconGradient="from-purple-500 to-pink-500"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                icon={Zap}
                title="Экстренное реагирование"
                description="Быстрое устранение репутационных кризисов и негативных атак"
                gradient="from-violet-900/40 to-indigo-900/40"
                borderColor="border-violet-500/20"
                iconGradient="from-violet-500 to-indigo-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why TraceRemove Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/30 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white mb-6 typography-premium">
              Почему TraceRemove?
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto typography-premium leading-relaxed">
              Мы предлагаем уникальное сочетание передовых AI-технологий и экспертизы в области управления репутацией.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {[
              {
                icon: CheckCircle,
                title: "99% успешности",
                description: "Высокий процент успешного удаления негативного контента",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Clock,
                title: "24/7 мониторинг",
                description: "Круглосуточное отслеживание угроз репутации",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "500+ клиентов",
                description: "Доверие ведущих компаний и публичных личностей",
                gradient: "from-purple-500 to-violet-500"
              },
              {
                icon: Star,
                title: "AI технологии",
                description: "Использование машинного обучения для анализа угроз",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="glass-card-premium p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${advantage.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 typography-premium">{advantage.title}</h3>
                  <p className="text-slate-300 typography-premium leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Request Audit Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 via-accent-lab-purple/5 to-primary-600/10 backdrop-blur-sm" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title text-white mb-6 typography-premium">
              Получите бесплатный аудит репутации
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto typography-premium leading-relaxed">
              Узнайте, что говорят о вас в интернете. Получите детальный анализ вашей цифровой репутации и рекомендации по её улучшению.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card-premium p-8 rounded-3xl border border-white/10"
          >
            {auditFormStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl flex items-center"
              >
                <CheckCircle className="h-6 w-6 text-green-400 mr-4" />
                <span className="text-green-100 font-semibold typography-premium">Заявка успешно отправлена! Мы свяжемся с вами в течение 24 часов.</span>
              </motion.div>
            )}

            {auditFormStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl flex items-center"
              >
                <AlertCircle className="h-6 w-6 text-red-400 mr-4" />
                <span className="text-red-100 font-semibold typography-premium">Не удалось отправить заявку. Попробуйте еще раз или свяжитесь с нами напрямую.</span>
              </motion.div>
            )}

            <form onSubmit={handleAuditSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="audit-name" className="block text-sm font-bold text-white mb-3 typography-premium">
                    Имя *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent-ai-purple" />
                    <input
                      type="text"
                      id="audit-name"
                      name="name"
                      value={auditFormData.name}
                      onChange={handleAuditInputChange}
                      className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 transition-all duration-300 typography-premium text-white placeholder-white/60 ${
                        auditErrors.name ? 'border-red-400 bg-red-500/10' : 'border-white/20 hover:border-white/30'
                      }`}
                      placeholder="Ваше имя"
                    />
                  </div>
                  {auditErrors.name && (
                    <p className="mt-2 text-sm text-red-400 typography-premium">{auditErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="audit-email" className="block text-sm font-bold text-white mb-3 typography-premium">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent-ai-purple" />
                    <input
                      type="email"
                      id="audit-email"
                      name="email"
                      value={auditFormData.email}
                      onChange={handleAuditInputChange}
                      className={`w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 transition-all duration-300 typography-premium text-white placeholder-white/60 ${
                        auditErrors.email ? 'border-red-400 bg-red-500/10' : 'border-white/20 hover:border-white/30'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {auditErrors.email && (
                    <p className="mt-2 text-sm text-red-400 typography-premium">{auditErrors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="audit-website" className="block text-sm font-bold text-white mb-3 typography-premium">
                  Сайт или имя для проверки *
                </label>
                <input
                  type="text"
                  id="audit-website"
                  name="website"
                  value={auditFormData.website}
                  onChange={handleAuditInputChange}
                  className={`w-full px-4 py-4 bg-white/10 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 transition-all duration-300 typography-premium text-white placeholder-white/60 ${
                    auditErrors.website ? 'border-red-400 bg-red-500/10' : 'border-white/20 hover:border-white/30'
                  }`}
                  placeholder="example.com или Ваше имя"
                />
                {auditErrors.website && (
                  <p className="mt-2 text-sm text-red-400 typography-premium">{auditErrors.website}</p>
                )}
              </div>

              <div>
                <label htmlFor="audit-message" className="block text-sm font-bold text-white mb-3 typography-premium">
                  Дополнительная информация
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-accent-ai-purple" />
                  <textarea
                    id="audit-message"
                    name="message"
                    rows={4}
                    value={auditFormData.message}
                    onChange={handleAuditInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 transition-all duration-300 resize-none typography-premium text-white placeholder-white/60 hover:border-white/30"
                    placeholder="Расскажите о ваших проблемах с репутацией или целях аудита..."
                  />
                </div>
              </div>

              <div className="text-center">
                <PremiumButton
                  type="submit"
                  disabled={auditFormStatus === 'loading'}
                  icon={auditFormStatus === 'loading' ? Loader2 : Send}
                  iconPosition="left"
                  className="text-lg px-8 py-4"
                >
                  {auditFormStatus === 'loading' ? 'Отправляем...' : 'Получить бесплатный аудит'}
                </PremiumButton>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
