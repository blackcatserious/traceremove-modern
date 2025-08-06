'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  User, 
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  Globe,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';
import PremiumButton from '@/components/PremiumButton';

const socialLinks = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/79991234567',
    icon: MessageSquare,
    description: 'Quick communication for urgent questions',
    gradient: 'from-green-600 to-green-700'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/traceremove_support',
    icon: Send,
    description: 'Technical support and consultations',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/traceremove',
    icon: Linkedin,
    description: 'Professional network and company news',
    gradient: 'from-blue-600 to-blue-700'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/traceremove',
    icon: Github,
    description: 'Open source tools and projects',
    gradient: 'from-gray-800 to-gray-900'
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'support@traceremove.com',
    href: 'mailto:support@traceremove.com',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+7 (999) 123-45-67',
    href: 'https://wa.me/79991234567',
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Send,
    label: 'Telegram',
    value: '@traceremove_support',
    href: 'https://t.me/traceremove_support',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'traceremove.com',
    href: 'https://traceremove.com',
    gradient: 'from-purple-500 to-pink-600'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    serviceType: 'general'
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must contain at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus('loading');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '', serviceType: 'general' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="neural" particleCount={75} />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-deep-blue/5 via-accent-ai-purple/5 to-accent-lab-purple/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.08),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8"
            >
              <Mail className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                Contact Us
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="hero-title text-research-text mb-6">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block mb-2"
                >
                  Contact
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600 bg-clip-text text-transparent"
                >
                  Us
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="section-title text-research-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Let&apos;s discuss your reputation management project, get a free consultation or ask any questions. 
              We are always ready to help protect your digital reputation and find the optimal solution.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative glass-card-premium p-10">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-50" />
                
                <div className="relative">
                  <div className="mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-6"
                    >
                      <Send className="w-5 h-5 text-accent-ai-purple mr-2" />
                      <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                        Send Message
                      </span>
                    </motion.div>
                    <h2 className="text-4xl font-bold text-accent-deep-blue font-ibm-sans">Send Message</h2>
                  </div>
              
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl flex items-center shadow-soft"
                    >
                      <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                      <span className="text-green-800 font-semibold font-ibm-sans">Message sent successfully! We will contact you shortly.</span>
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-8 p-6 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl flex items-center shadow-soft"
                    >
                      <AlertCircle className="h-6 w-6 text-red-600 mr-4" />
                      <span className="text-red-800 font-semibold font-ibm-sans">Failed to send message. Please try again or contact us directly.</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Service Type Selection */}
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-bold text-research-700 mb-3 font-ibm-sans">
                        Service Type
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border border-accent-ai-purple/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 transition-all duration-300 font-ibm-sans shadow-lab-card hover:shadow-card-hover"
                      >
                        <option value="general">General Questions</option>
                        <option value="audit">Request Reputation Audit</option>
                        <option value="orm">Reputation Management (ORM)</option>
                        <option value="deindex">Content Deindexing</option>
                        <option value="legal">Legal Support</option>
                        <option value="monitoring">Reputation Monitoring</option>
                        <option value="ai-tools">AI Tools</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-research-700 mb-3 font-ibm-sans">
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent-ai-purple" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 transition-all duration-300 font-ibm-sans ${
                              errors.name ? 'border-red-300 bg-red-50' : 'border-accent-ai-purple/20 shadow-lab-card hover:shadow-card-hover'
                            }`}
                            placeholder="Your name"
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-600 font-ibm-sans">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-research-700 mb-3 font-ibm-sans">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent-ai-purple" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 transition-all duration-300 font-ibm-sans ${
                              errors.email ? 'border-red-300 bg-red-50' : 'border-accent-ai-purple/20 shadow-lab-card hover:shadow-card-hover'
                            }`}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-2 text-sm text-red-600 font-ibm-sans">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-research-700 mb-3 font-ibm-sans">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border border-accent-ai-purple/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 transition-all duration-300 font-ibm-sans shadow-lab-card hover:shadow-card-hover"
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-research-700 mb-3 font-ibm-sans">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border border-accent-ai-purple/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 transition-all duration-300 font-ibm-sans shadow-lab-card hover:shadow-card-hover"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-research-700 mb-3 font-ibm-sans">
                        Message Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 bg-white/90 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 transition-all duration-300 font-ibm-sans ${
                          errors.subject ? 'border-red-300 bg-red-50' : 'border-accent-ai-purple/20 shadow-lab-card hover:shadow-card-hover'
                        }`}
                        placeholder="What would you like to talk about?"
                      />
                      {errors.subject && (
                        <p className="mt-2 text-sm text-red-600 font-ibm-sans">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-research-700 mb-3 font-ibm-sans">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-accent-ai-purple" />
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 transition-all duration-300 resize-none font-ibm-sans ${
                            errors.message ? 'border-red-300 bg-red-50' : 'border-accent-ai-purple/20 shadow-lab-card hover:shadow-card-hover'
                          }`}
                          placeholder="Tell us about your project, reputation issues, or ask any questions..."
                        />
                      </div>
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-600 font-ibm-sans">{errors.message}</p>
                      )}
                    </div>

                    <PremiumButton
                      type="submit"
                      disabled={formStatus === 'loading'}
                      loading={formStatus === 'loading'}
                      variant="primary"
                      size="lg"
                      icon={formStatus === 'loading' ? Loader2 : Send}
                      iconPosition="left"
                      className="w-full text-lg"
                    >
                      {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                    </PremiumButton>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-10"
            >
              <div>
                <div className="mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-6"
                  >
                    <MapPin className="w-5 h-5 text-accent-ai-purple mr-2" />
                    <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                      Contact Information
                    </span>
                  </motion.div>
                  <h2 className="text-4xl font-bold text-accent-deep-blue font-ibm-sans">Contact Information</h2>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="group"
                    >
                      <div className="relative glass-card-compact p-8 transition-all duration-500 overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative flex items-center">
                          <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple text-white mr-6 shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                            <info.icon className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="font-bold text-research-700 text-lg mb-2 font-ibm-sans">{info.label}</h3>
                            {info.href ? (
                              <a
                                href={info.href}
                                className="text-accent-ai-purple hover:text-accent-lab-purple transition-colors duration-300 font-semibold font-ibm-sans text-lg"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-research-600 font-semibold font-ibm-sans text-lg">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="relative overflow-hidden"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple via-accent-lab-purple to-primary-600 rounded-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
                
                <div className="relative p-10 text-white">
                  <h3 className="text-3xl font-bold mb-6 font-ibm-sans">Ready to Protect Your Reputation?</h3>
                  <p className="text-white/90 leading-relaxed mb-8 text-lg font-ibm-sans">
                    We are always ready to discuss reputation management, negative content removal 
                    and protection of your digital presence. Contact us for a free consultation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">Reputation Management</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">Deindexing</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">Legal Support</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">AI Monitoring</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8"
            >
              <Globe className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                Social Networks
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-accent-deep-blue mb-6 font-ibm-sans">Follow Us on Social Media</h2>
            <p className="text-xl text-research-600 max-w-3xl mx-auto leading-relaxed font-ibm-sans">
              Follow our updates, get reputation management tips and connect with us through convenient channels.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group"
              >
                <div className="relative glass-card-compact p-8 transition-all duration-500 overflow-hidden">
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple text-white mr-6 shadow-ai-glow group-hover:shadow-hero-glow group-hover:scale-110 transition-all duration-300">
                      <link.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-research-700 text-xl group-hover:text-accent-ai-purple transition-colors duration-300 font-ibm-sans">
                          {link.name}
                        </h3>
                        <ExternalLink className="h-5 w-5 text-research-400 group-hover:text-accent-ai-purple transition-colors duration-300" />
                      </div>
                      <p className="text-research-600 leading-relaxed font-ibm-sans">
                        {link.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                       style={{ padding: '1px' }}>
                    <div className="w-full h-full bg-white rounded-2xl" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
