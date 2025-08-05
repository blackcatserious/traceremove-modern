'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Search, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-research-bg via-research-surface to-research-bg flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              404
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-ai-purple/20 to-accent-lab-purple/20 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Error Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm border border-research-surface/50 rounded-full">
            <AlertTriangle className="h-10 w-10 text-accent-ai-purple" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-research-text mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Страница не найдена
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg text-research-text-secondary mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          К сожалению, запрашиваемая страница не существует или была перемещена. 
          Возможно, вы перешли по устаревшей ссылке.
        </motion.p>

        {/* Suggestions */}
        <motion.div
          className="bg-gradient-to-br from-research-surface/60 to-research-surface/30 backdrop-blur-sm border border-research-surface/40 rounded-2xl p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-research-text mb-4">
            Что вы можете сделать:
          </h3>
          <ul className="text-research-text-secondary space-y-2 text-left">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-accent-ai-purple rounded-full mr-3 flex-shrink-0" />
              Проверьте правильность введенного URL
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-accent-ai-purple rounded-full mr-3 flex-shrink-0" />
              Вернитесь на главную страницу
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-accent-ai-purple rounded-full mr-3 flex-shrink-0" />
              Воспользуйтесь навигационным меню
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-accent-ai-purple rounded-full mr-3 flex-shrink-0" />
              Свяжитесь с нами, если проблема повторяется
            </li>
          </ul>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Home className="h-5 w-5 mr-2" />
              На главную
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center border border-accent-ai-purple text-accent-ai-purple font-semibold py-4 px-8 rounded-xl hover:bg-accent-ai-purple/10 transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Назад
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-accent-ai-purple text-accent-ai-purple font-semibold py-4 px-8 rounded-xl hover:bg-accent-ai-purple/10 transition-all duration-300"
            >
              <Search className="h-5 w-5 mr-2" />
              Наши услуги
            </Link>
          </motion.div>
        </motion.div>

        {/* Popular Pages */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-research-text mb-6">
            Популярные страницы:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/services', title: 'Услуги', description: 'ORM, Deindex, Legal' },
              { href: '/cases', title: 'Кейсы', description: 'Истории успеха' },
              { href: '/testimonials', title: 'Отзывы', description: 'Мнения клиентов' },
              { href: '/contact', title: 'Контакты', description: 'Связаться с нами' }
            ].map((page, index) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                whileHover={{ y: -4 }}
              >
                <Link
                  href={page.href}
                  className="block bg-gradient-to-br from-research-surface/40 to-research-surface/20 backdrop-blur-sm border border-research-surface/30 rounded-xl p-4 hover:border-accent-ai-purple/50 transition-all duration-300"
                >
                  <div className="font-medium text-research-text mb-1">{page.title}</div>
                  <div className="text-sm text-research-text-secondary">{page.description}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-research-text-secondary text-sm">
            Нужна помощь? Свяжитесь с нами:{' '}
            <a 
              href="mailto:support@traceremove.com" 
              className="text-accent-ai-purple hover:underline"
            >
              support@traceremove.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
