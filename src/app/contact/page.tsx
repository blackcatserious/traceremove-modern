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
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/arthur-ziganshin',
    icon: Linkedin,
    description: 'Professional network and career updates',
    gradient: 'from-blue-600 to-blue-700'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/traceremove',
    icon: Github,
    description: 'Open source projects and code repositories',
    gradient: 'from-gray-800 to-gray-900'
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0000-0002-1234-5678',
    icon: Globe,
    description: 'Academic publications and research profile',
    gradient: 'from-green-600 to-green-700'
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=example',
    icon: Globe,
    description: 'Citation metrics and academic papers',
    gradient: 'from-red-600 to-red-700'
  },
  {
    name: 'ResearchGate',
    url: 'https://researchgate.net/profile/Arthur-Ziganshin',
    icon: Globe,
    description: 'Research collaboration and publications',
    gradient: 'from-teal-600 to-teal-700'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/traceremove',
    icon: Twitter,
    description: 'Thoughts on AI, technology, and research',
    gradient: 'from-blue-400 to-blue-500'
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'arthur@traceremove.dev',
    href: 'mailto:arthur@traceremove.dev',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'traceremove.dev',
    href: 'https://traceremove.dev',
    gradient: 'from-purple-500 to-pink-600'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
      newErrors.message = 'Message must be at least 10 characters long';
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        console.error('Contact form error:', result.error);
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                Let&apos;s Connect
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
                  Get in
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600 bg-clip-text text-transparent"
                >
                  Touch
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="section-title text-research-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Let&apos;s discuss AI research, collaboration opportunities, or any questions about my work. 
              I&apos;m always interested in connecting with fellow researchers and innovators to advance the field together.
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
                    <h2 className="text-4xl font-bold text-accent-deep-blue font-ibm-sans">Send a Message</h2>
                  </div>
              
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl flex items-center shadow-soft"
                    >
                      <CheckCircle className="h-6 w-6 text-green-600 mr-4" />
                      <span className="text-green-800 font-semibold font-ibm-sans">Message sent successfully! I&apos;ll get back to you soon.</span>
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-8 p-6 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl flex items-center shadow-soft"
                    >
                      <AlertCircle className="h-6 w-6 text-red-600 mr-4" />
                      <span className="text-red-800 font-semibold font-ibm-sans">Failed to send message. Please try again or use email directly.</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
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

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-research-700 mb-3 font-ibm-sans">
                        Subject *
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
                        placeholder="What would you like to discuss?"
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
                          placeholder="Tell me about your project, research, or any questions you have..."
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
                  <h3 className="text-3xl font-bold mb-6 font-ibm-sans">Let&apos;s Collaborate</h3>
                  <p className="text-white/90 leading-relaxed mb-8 text-lg font-ibm-sans">
                    I&apos;m always interested in discussing AI research, ethical technology development, 
                    and innovative solutions to complex problems. Whether you&apos;re a researcher, 
                    developer, or organization looking to explore AI applications, let&apos;s connect.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">AI Research</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">Collaboration</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">Consulting</span>
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">Speaking</span>
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
            
            <h2 className="text-4xl sm:text-5xl font-bold text-accent-deep-blue mb-6 font-ibm-sans">Connect on Social Media</h2>
            <p className="text-xl text-research-600 max-w-3xl mx-auto leading-relaxed font-ibm-sans">
              Follow my research updates, thoughts on AI ethics, and professional activities across various platforms.
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
