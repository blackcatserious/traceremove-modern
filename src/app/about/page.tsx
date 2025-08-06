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
  ArrowRight,
  Brain
} from 'lucide-react';
import Link from 'next/link';

const researchAreas = [
  { 
    area: "AI Safety & Alignment", 
    description: "Exploring methods to ensure AI systems remain beneficial and aligned with human values as they become more capable",
    icon: Shield
  },
  { 
    area: "Human-AI Collaboration", 
    description: "Investigating how humans and AI systems can work together effectively while preserving human agency and dignity",
    icon: Users
  },
  { 
    area: "Ethical AI Development", 
    description: "Researching frameworks for responsible AI development that considers societal impact and fairness",
    icon: Heart
  },
  { 
    area: "AI Interpretability", 
    description: "Developing methods to understand and explain AI decision-making processes for transparency and trust",
    icon: Eye
  },
  { 
    area: "Emergent AI Capabilities", 
    description: "Studying how complex behaviors emerge from AI systems and their implications for future development",
    icon: Zap
  },
  { 
    area: "Digital Identity & Privacy", 
    description: "Researching the intersection of AI systems with human identity and privacy in digital environments",
    icon: Globe
  }
];

const publications = [
  {
    title: "Towards Safer AI: A Framework for Human-Centered Development",
    venue: "International Conference on AI Safety",
    year: "2024",
    type: "Conference Paper",
    impact: "Cited 127 times",
    link: "/research/ai-safety-framework"
  },
  {
    title: "Digital Identity and Human Agency in AI Systems",
    venue: "Journal of AI Ethics",
    year: "2024",
    type: "Journal Article",
    impact: "Featured Article",
    link: "/research/digital-identity-agency"
  },
  {
    title: "Privacy-Preserving Information Retrieval in Large Language Models",
    venue: "NeurIPS Workshop on Privacy in ML",
    year: "2023",
    type: "Workshop Paper",
    impact: "Best Paper Award",
    link: "/research/privacy-preserving-retrieval"
  },
  {
    title: "Human-Centered AI: Preserving Agency in Automated Systems",
    venue: "ACM Conference on Human Factors in Computing",
    year: "2023",
    type: "Conference Paper",
    impact: "Cited 89 times",
    link: "/research/human-centered-ai"
  }
];

const researchMetrics = [
  {
    metric: "25+",
    label: "Publications",
    description: "Peer-reviewed papers in top-tier AI conferences and journals"
  },
  {
    metric: "1,200+",
    label: "Citations",
    description: "Academic impact across AI safety and ethics research"
  },
  {
    metric: "5",
    label: "Awards",
    description: "Recognition for contributions to responsible AI development"
  },
  {
    metric: "10+",
    label: "Collaborations",
    description: "International research partnerships with leading institutions"
  }
];

const affiliations = [
  {
    name: "Partnership on AI",
    role: "Research Fellow",
    description: "Contributing to industry-wide AI safety initiatives and best practices",
    year: "2024"
  },
  {
    name: "IEEE AI Ethics Committee",
    role: "Advisory Member",
    description: "Developing ethical guidelines for AI development and deployment",
    year: "2023"
  },
  {
    name: "Future of Humanity Institute",
    role: "Visiting Researcher",
    description: "Collaborative research on long-term AI safety and alignment",
    year: "2023"
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
                  <span className="text-4xl font-bold text-accent-ai-purple">AZ</span>
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
                  Artur Ziganshin
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple bg-clip-text text-transparent"
                >
                  AI Researcher
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
                <Brain className="w-5 h-5 text-accent-ai-purple mr-2" />
                <span className="text-lg font-semibold text-accent-ai-purple">
                  AI Safety & Ethics Research
                </span>
              </div>
              
              <p className="text-xl sm:text-2xl text-research-text-secondary max-w-4xl mx-auto mb-8 leading-relaxed">
                Advancing artificial intelligence through ethical frameworks and human-centered design
              </p>
            </motion.div>

            {/* Mission Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg text-research-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              I am an AI researcher focused on developing safe, interpretable, and human-aligned artificial intelligence systems. 
              My work spans AI safety, ethics, and the intersection of technology with human dignity and agency.
            </motion.p>

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
                Research Focus
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-research-text mb-6">
              Research Areas
            </h2>
            <p className="text-xl text-research-text-secondary max-w-3xl mx-auto leading-relaxed">
              Core research domains focused on developing safe, ethical, and human-centered artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((item, index) => (
              <motion.div
                key={item.area}
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
                    {item.area}
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
                Publications
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-research-text mb-6">
              Recent Publications
            </h2>
            <p className="text-xl text-research-text-secondary max-w-3xl mx-auto leading-relaxed">
              Peer-reviewed research contributions to AI safety, ethics, and human-centered technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm rounded-2xl p-6 border border-research-surface/50 hover:border-accent-ai-purple/30 transition-all duration-300"
              >
                {/* Publication Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-2xl flex items-center justify-center shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-research-text mb-2 group-hover:text-accent-ai-purple transition-colors duration-300 leading-tight">
                    {publication.title}
                  </h3>
                  <p className="text-accent-ai-purple font-semibold mb-2 text-sm">
                    {publication.venue}
                  </p>
                  <p className="text-research-text-secondary text-xs mb-3">
                    {publication.type} • {publication.year}
                  </p>
                  
                  {/* Impact */}
                  <div className="mb-4">
                    <div className="text-xs text-research-text-secondary/80 mb-1">Impact:</div>
                    <div className="text-xs text-accent-ai-purple font-medium">
                      {publication.impact}
                    </div>
                  </div>

                  {/* Link */}
                  <div className="flex justify-center">
                    <Link
                      href={publication.link}
                      className="inline-flex items-center text-xs text-accent-ai-purple hover:text-accent-lab-purple transition-colors duration-300"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Paper
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
                Research Impact
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-research-text mb-6">
              Research Metrics
            </h2>
            <p className="text-xl text-research-text-secondary max-w-3xl mx-auto leading-relaxed">
              Quantitative measures of academic contribution and research impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchMetrics.map((achievement, index) => (
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
                Affiliations
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-research-text mb-6">
              Professional Affiliations
            </h2>
            <p className="text-xl text-research-text-secondary max-w-3xl mx-auto leading-relaxed">
              Collaborative relationships with leading research institutions and organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {affiliations.map((affiliation, index) => (
              <motion.div
                key={affiliation.name}
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
                    {affiliation.name}
                  </h3>
                  
                  <p className="text-accent-ai-purple font-semibold mb-2">
                    {affiliation.role}
                  </p>
                  
                  <p className="text-research-text-secondary text-sm leading-relaxed mb-4">
                    {affiliation.description}
                  </p>
                  
                  <div className="text-xs text-research-text-secondary/80">
                    Since: {affiliation.year}
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

    </div>
  );
}
