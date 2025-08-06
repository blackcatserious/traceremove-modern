'use client';

import { motion } from 'framer-motion';
import { 
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/artur-ziganshin',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700',
    description: 'Professional research network'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/blackcatserious',
    icon: Github,
    color: 'from-gray-700 to-gray-800',
    description: 'Research code and projects'
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-ibm-sans"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block mb-2"
              >
                Research
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-deep-blue bg-clip-text text-transparent"
              >
                Network
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-research-text-secondary max-w-4xl mx-auto leading-relaxed font-ibm-sans"
            >
              Connect with my research network and explore collaborative opportunities in AI safety, ethics, and human-centered technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card-premium p-8 text-center"
          >
            <h2 className="text-4xl font-bold text-accent-deep-blue mb-6 font-ibm-sans">Research Network</h2>
            <p className="text-research-text-secondary mb-8 text-lg font-ibm-sans">
              Connect with my research work and explore collaborative opportunities in AI safety and ethics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(124, 58, 237, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <social.icon className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold text-xl mb-3 font-ibm-sans">{social.name}</h3>
                    <p className="text-sm opacity-90 font-ibm-sans">{social.description}</p>
                    <ExternalLink className="w-5 h-5 mt-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-deep-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 font-ibm-sans">Explore AI Research</h3>
            <p className="text-white/90 leading-relaxed mb-8 text-lg font-ibm-sans">
              Discover cutting-edge research in AI safety, ethics, and human-centered technology. 
              Join the conversation about responsible AI development and deployment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">AI Safety</span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">Ethical AI</span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">Human-Centered AI</span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 font-ibm-sans">Digital Rights</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
