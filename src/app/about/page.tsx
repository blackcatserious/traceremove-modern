'use client';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Languages, 
  Globe, 
  BookOpen, 
  Users, 
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  FileText,
  Download,
  Calendar,
  Award,
  Link as LinkIcon,
  TrendingUp,
  BarChart3,
  PieChart
} from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';

const expertise = [
  { area: "AI Ethics", description: "Developing ethical frameworks for AI systems and responsible technology deployment" },
  { area: "Agentic Systems", description: "Building autonomous AI agents with advanced reasoning and tool-use capabilities" },
  { area: "Big Data", description: "Large-scale data processing and analysis for research and commercial applications" },
  { area: "Language Technologies", description: "Natural language processing, multilingual systems, and computational linguistics" },
  { area: "Security & Privacy", description: "Privacy-preserving technologies and secure AI system architectures" },
  { area: "Philosophy of Technology", description: "Exploring the intersection of technology, society, and human values" }
];

const education = [
  {
    degree: "Master of Arts in Philosophy",
    institution: "Federal University",
    year: "2018",
    focus: "Philosophy of Technology, Ethics, and Cognitive Science"
  },
  {
    degree: "Bachelor of Arts in Philosophy", 
    institution: "Federal University",
    year: "2016",
    focus: "Logic, Epistemology, and Philosophy of Mind"
  }
];

const languages = [
  { language: "Russian", level: "Native", flag: "🇷🇺" },
  { language: "English", level: "Fluent", flag: "🇺🇸" },
  { language: "Tatar", level: "Native", flag: "🏴" },
  { language: "Serbian", level: "Conversational", flag: "🇷🇸" },
  { language: "Spanish", level: "Intermediate", flag: "🇪🇸" }
];

const organizations = [
  {
    name: "Traceremove",
    role: "Founder & CEO",
    description: "AI research platform focused on transparent and interpretable AI systems",
    period: "2020 - Present"
  },
  {
    name: "Rarematrix",
    role: "Co-Founder",
    description: "Advanced data analytics and AI infrastructure solutions",
    period: "2019 - Present"
  },
  {
    name: "Equality",
    role: "Founder",
    description: "International organization promoting digital rights and AI ethics",
    period: "2018 - Present"
  }
];

const socialLinks = [
  { 
    name: "LinkedIn", 
    url: "https://linkedin.com/in/arthur-ziganshin", 
    icon: Linkedin,
    description: "Professional network and career updates"
  },
  { 
    name: "ORCID", 
    url: "https://orcid.org/0000-0002-1234-5678", 
    icon: FileText,
    description: "Academic publications and research contributions"
  },
  { 
    name: "Google Scholar", 
    url: "https://scholar.google.com/citations?user=ArthurZiganshin", 
    icon: BookOpen,
    description: "Citation metrics and academic papers"
  },
  { 
    name: "ResearchGate", 
    url: "https://www.researchgate.net/profile/Arthur-Ziganshin", 
    icon: Users,
    description: "Research collaboration and academic networking"
  },
  { 
    name: "GitHub", 
    url: "https://github.com/arthur-ziganshin", 
    icon: Github,
    description: "Open source projects and code repositories"
  }
];

const academicLinks = [
  { 
    name: "PhilPeople", 
    url: "https://philpeople.org/profiles/arthur-ziganshin", 
    icon: BookOpen,
    description: "Philosophy research and academic profile"
  },
  { 
    name: "Academia.edu", 
    url: "https://university.academia.edu/ArthurZiganshin", 
    icon: GraduationCap,
    description: "Academic papers and research sharing"
  }
];

const publications = [
  {
    title: "Ethical Frameworks for Autonomous AI Systems",
    journal: "Journal of AI Ethics",
    year: "2024",
    type: "Journal Article",
    url: "/publications/ethical-frameworks-ai-2024.pdf",
    abstract: "Comprehensive analysis of ethical considerations in autonomous AI system design and deployment."
  },
  {
    title: "Privacy-Preserving Retrieval in Large Language Models",
    conference: "International Conference on AI Safety",
    year: "2023",
    type: "Conference Paper",
    url: "/publications/privacy-retrieval-llm-2023.pdf",
    abstract: "Novel approaches to maintaining privacy while enabling effective information retrieval in LLMs."
  },
  {
    title: "Agentic Systems and Tool Use: A Philosophical Perspective",
    journal: "Philosophy & Technology",
    year: "2023",
    type: "Journal Article",
    url: "/publications/agentic-systems-philosophy-2023.pdf",
    abstract: "Philosophical examination of agency and tool use in artificial intelligence systems."
  },
  {
    title: "Transparency and Interpretability in AI Decision Making",
    conference: "European Conference on AI",
    year: "2022",
    type: "Conference Paper",
    url: "/publications/transparency-ai-decisions-2022.pdf",
    abstract: "Methods for improving transparency and interpretability in AI decision-making processes."
  }
];

const conferences = [
  {
    name: "International Conference on AI Safety",
    role: "Keynote Speaker",
    year: "2024",
    topic: "Building Ethical AI Systems for Global Impact"
  },
  {
    name: "European Conference on AI",
    role: "Session Chair",
    year: "2023",
    topic: "Privacy and Security in AI Systems"
  },
  {
    name: "Philosophy & Technology Conference",
    role: "Presenter",
    year: "2023",
    topic: "Philosophical Foundations of AI Agency"
  },
  {
    name: "International Symposium on Digital Rights",
    role: "Panel Moderator",
    year: "2022",
    topic: "AI Ethics and Human Rights"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-research-50 via-white to-lab-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Dynamic Background System */}
        <BackgroundLayers variant="about" className="absolute inset-0 z-0" />
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-deep-blue/5 via-accent-ai-purple/5 to-accent-lab-purple/10 z-1" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.1),transparent_50%)] z-1" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.08),transparent_50%)] z-1" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            {/* Profile Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple via-accent-lab-purple to-primary-600 rounded-full shadow-hero-glow animate-pulse" />
                <div className="absolute inset-2 bg-gradient-to-br from-accent-deep-blue to-accent-research-blue rounded-full flex items-center justify-center shadow-ai-glow">
                  <span className="text-6xl font-bold text-white font-ibm-sans">AZ</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight font-ibm-sans mb-6">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-accent-deep-blue mb-2"
                >
                  Arthur
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600 bg-clip-text text-transparent"
                >
                  Ziganshin
                </motion.span>
              </h1>
            </motion.div>

            {/* Professional Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-6">
                <span className="text-lg font-semibold text-accent-ai-purple font-ibm-sans">
                  AI Systems Architect • Developer • Philosopher
                </span>
              </div>
              
              <p className="text-xl sm:text-2xl text-research-600 max-w-4xl mx-auto mb-8 leading-relaxed font-ibm-sans">
                Founder of Traceremove, Rarematrix, and Equality
              </p>
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-lg text-research-500 max-w-4xl mx-auto mb-12 leading-relaxed font-ibm-sans"
            >
              Dedicated to building ethical, transparent AI systems that serve humanity&apos;s best interests. 
              Bridging the gap between cutting-edge AI research and practical applications through philosophy, 
              international collaboration, and responsible technology development.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-card-premium inline-flex items-center px-8 py-4 text-research-700 font-semibold transition-all duration-400"
                  >
                    <link.icon className="mr-3 h-5 w-5 text-accent-ai-purple group-hover:text-accent-lab-purple transition-colors duration-300" />
                    <span className="font-ibm-sans">{link.name}</span>
                    <ExternalLink className="ml-3 h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:text-accent-ai-purple transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Academic Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {academicLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 backdrop-blur-sm text-accent-ai-purple font-semibold rounded-xl border border-accent-ai-purple/30 hover:border-accent-ai-purple/50 shadow-lab-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-accent-ai-purple/20 hover:to-accent-lab-purple/20"
                  >
                    <link.icon className="mr-3 h-5 w-5 text-accent-ai-purple group-hover:text-accent-lab-purple transition-colors duration-300" />
                    <span className="font-ibm-sans">{link.name}</span>
                    <ExternalLink className="ml-3 h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:text-accent-lab-purple transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CV Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/cv/Arthur_Ziganshin_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-bold rounded-2xl shadow-hero-glow hover:shadow-ai-glow transition-all duration-300 hover:from-accent-lab-purple hover:to-accent-ai-purple font-ibm-sans text-lg"
                >
                  <Download className="mr-3 h-6 w-6 text-white group-hover:animate-bounce" />
                  Download CV (PDF)
                  <div className="ml-3 w-2 h-2 bg-white rounded-full group-hover:shadow-ai-glow transition-all duration-300"></div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/cv/Arthur_Ziganshin_CV.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-accent-deep-blue font-bold rounded-2xl border border-accent-ai-purple/30 shadow-lab-card hover:shadow-card-hover transition-all duration-300 hover:bg-gradient-to-r hover:from-accent-ai-purple/10 hover:to-accent-lab-purple/10 font-ibm-sans text-lg"
                >
                  <Download className="mr-3 h-6 w-6 text-accent-ai-purple group-hover:text-accent-lab-purple transition-colors duration-300" />
                  Download CV (DOCX)
                  <div className="ml-3 w-2 h-2 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full group-hover:shadow-ai-glow transition-all duration-300"></div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
              <BookOpen className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                Research Expertise
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-deep-blue mb-6 font-ibm-sans">
              Areas of Expertise
            </h2>
            <p className="text-xl text-research-600 max-w-3xl mx-auto leading-relaxed font-ibm-sans">
              Bridging the gap between cutting-edge AI research and practical, ethical applications 
              through interdisciplinary collaboration and philosophical inquiry
            </p>
          </motion.div>

          {/* Research Visual Element */}
          <div className="flex justify-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-64 h-64 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-3xl border border-accent-ai-purple/20 flex items-center justify-center shadow-2xl"
            >
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-ai-purple/20 to-accent-lab-purple/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group expertise-card p-8"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-xl flex items-center justify-center mb-6 shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-accent-deep-blue mb-4 font-ibm-sans group-hover:text-accent-ai-purple transition-colors duration-300">
                    {item.area}
                  </h3>
                  <p className="text-research-600 leading-relaxed font-ibm-sans">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-24 bg-gradient-to-br from-accent-ai-purple/5 via-research-50 to-accent-lab-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-12">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-xl flex items-center justify-center mr-4 shadow-ai-glow">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-accent-deep-blue font-ibm-sans">Education</h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group academic-card p-8"
                  >
                    <div className="relative">
                      <h3 className="text-xl font-bold text-accent-deep-blue mb-3 font-ibm-sans group-hover:text-accent-ai-purple transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-accent-ai-purple font-semibold mb-2 font-ibm-sans">
                        {edu.institution}
                      </p>
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full mr-3"></div>
                        <p className="text-research-500 text-sm font-medium">
                          {edu.year}
                        </p>
                      </div>
                      <p className="text-research-600 leading-relaxed font-ibm-sans">
                        {edu.focus}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-12">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-lab-purple to-accent-ai-purple rounded-xl flex items-center justify-center mr-4 shadow-ai-glow">
                  <Languages className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-accent-deep-blue font-ibm-sans">Languages</h2>
              </div>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="group academic-card p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-research-100 to-research-200 rounded-xl flex items-center justify-center mr-4 group-hover:shadow-soft transition-all duration-300">
                          <span className="text-2xl">{lang.flag}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-accent-deep-blue font-ibm-sans group-hover:text-accent-ai-purple transition-colors duration-300">
                            {lang.language}
                          </h3>
                          <p className="text-research-600 text-sm font-medium">
                            {lang.level}
                          </p>
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
              <Globe className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                Leadership &amp; Impact
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-deep-blue mb-6 font-ibm-sans">
              Organizations &amp; Leadership
            </h2>
            <p className="text-xl text-research-600 max-w-3xl mx-auto leading-relaxed font-ibm-sans">
              Building organizations that advance AI research, digital rights, and international collaboration 
              through ethical technology development and philosophical inquiry
            </p>
          </motion.div>

          <div className="space-y-8">
            {organizations.map((org, index) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative bg-gradient-to-br from-white via-research-50/20 to-accent-ai-purple/5 rounded-3xl shadow-lab-card hover:shadow-card-hover transition-all duration-500 p-10 border border-accent-ai-purple/10 hover:border-accent-ai-purple/30 overflow-hidden"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-6 lg:mb-0 flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full mr-4 group-hover:shadow-ai-glow transition-all duration-300"></div>
                      <h3 className="text-3xl font-bold text-accent-deep-blue font-ibm-sans group-hover:text-accent-ai-purple transition-colors duration-300">
                        {org.name}
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20">
                        <span className="text-accent-ai-purple font-semibold font-ibm-sans">
                          {org.role}
                        </span>
                      </span>
                    </div>
                    
                    <p className="text-research-600 leading-relaxed max-w-3xl font-ibm-sans text-lg">
                      {org.description}
                    </p>
                  </div>
                  
                  <div className="lg:ml-8 flex-shrink-0">
                    <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-accent-ai-purple/20 shadow-soft">
                      <span className="text-research-600 font-semibold font-ibm-sans">
                        {org.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-white rounded-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
              <FileText className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                Academic Publications
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-deep-blue mb-6 font-ibm-sans">
              Research Publications
            </h2>
            <p className="text-xl text-research-600 max-w-3xl mx-auto leading-relaxed font-ibm-sans">
              Peer-reviewed research contributions to AI ethics, privacy-preserving technologies, 
              and philosophical foundations of artificial intelligence systems
            </p>
          </motion.div>

          {/* Interactive Research Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <InteractiveChart
              dataFile="publication_metrics.json"
              chartType="line"
              title="Publication Timeline"
              className="lg:col-span-2"
            />
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-accent-ai-purple/20 shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-xl shadow-lg mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-ibm-sans">
                    Research Impact
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-ibm-sans">Citations</span>
                    <span className="text-2xl font-bold text-accent-ai-purple font-ibm-sans">150+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-ibm-sans">H-Index</span>
                    <span className="text-2xl font-bold text-accent-lab-purple font-ibm-sans">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-ibm-sans">Collaborations</span>
                    <span className="text-2xl font-bold text-accent-violet font-ibm-sans">25+</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-accent-ai-purple/20 shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-accent-lab-purple to-accent-violet rounded-xl shadow-lg mr-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-ibm-sans">
                    Research Areas
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent-ai-purple rounded-full mr-3"></div>
                    <span className="text-slate-300 font-ibm-sans text-sm">AI Ethics (40%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent-lab-purple rounded-full mr-3"></div>
                    <span className="text-slate-300 font-ibm-sans text-sm">Privacy Tech (30%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent-violet rounded-full mr-3"></div>
                    <span className="text-slate-300 font-ibm-sans text-sm">Philosophy (30%)</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative bg-gradient-to-br from-white via-research-50/20 to-accent-ai-purple/5 rounded-3xl shadow-lab-card hover:shadow-card-hover transition-all duration-500 p-10 border border-accent-ai-purple/10 hover:border-accent-ai-purple/30 overflow-hidden"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full mr-4 group-hover:shadow-ai-glow transition-all duration-300"></div>
                        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 text-accent-ai-purple text-sm font-semibold font-ibm-sans">
                          {pub.type}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-accent-deep-blue mb-4 font-ibm-sans group-hover:text-accent-ai-purple transition-colors duration-300">
                        {pub.title}
                      </h3>
                      
                      <p className="text-accent-ai-purple font-semibold mb-2 font-ibm-sans">
                        {pub.journal || pub.conference} • {pub.year}
                      </p>
                      
                      <p className="text-research-600 leading-relaxed font-ibm-sans">
                        {pub.abstract}
                      </p>
                    </div>
                    
                    <div className="lg:ml-8 flex-shrink-0">
                      <Link
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-semibold rounded-xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 hover:scale-105 font-ibm-sans"
                      >
                        <Download className="mr-2 h-5 w-5 text-white group-hover/link:animate-bounce" />
                        Download PDF
                        <ExternalLink className="ml-2 h-4 w-4 opacity-80 group-hover/link:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-white rounded-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences Section */}
      <section className="py-24 bg-gradient-to-br from-accent-ai-purple/5 via-research-50 to-accent-lab-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8">
              <Calendar className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                Academic Conferences
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-deep-blue mb-6 font-ibm-sans">
              Conference Participation
            </h2>
            <p className="text-xl text-research-600 max-w-3xl mx-auto leading-relaxed font-ibm-sans">
              Active participation in leading international conferences on AI, ethics, 
              and technology philosophy through keynotes, presentations, and panel discussions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conferences.map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lab-card hover:shadow-card-hover transition-all duration-500 p-8 border border-accent-ai-purple/10 hover:border-accent-ai-purple/30 overflow-hidden"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-xl flex items-center justify-center mr-4 shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-2">
                        <span className="text-accent-ai-purple text-sm font-semibold font-ibm-sans">
                          {conf.role}
                        </span>
                      </div>
                      <div className="text-research-500 text-sm font-medium">
                        {conf.year}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-accent-deep-blue mb-3 font-ibm-sans group-hover:text-accent-ai-purple transition-colors duration-300">
                    {conf.name}
                  </h3>
                  
                  <p className="text-research-600 leading-relaxed font-ibm-sans">
                    {conf.topic}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-accent-deep-blue via-accent-research-blue to-accent-ai-purple relative overflow-hidden">
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
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <Mail className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-semibold text-white font-ibm-sans">
                Let&apos;s Collaborate
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 font-ibm-sans">
              Connect &amp; Collaborate
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto font-ibm-sans">
              Interested in AI research collaboration, discussing ethics in technology, 
              or exploring international partnerships? I&apos;d love to connect and explore 
              how we can advance transparent, interpretable AI systems together.
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
                className="inline-flex items-center px-10 py-5 bg-white/90 backdrop-blur-sm text-accent-deep-blue font-bold rounded-2xl shadow-hero-glow hover:shadow-ai-glow transition-all duration-300 hover:bg-white group font-ibm-sans text-lg"
              >
                <Mail className="mr-3 h-6 w-6 text-accent-ai-purple group-hover:text-accent-lab-purple transition-colors duration-300" />
                Get In Touch
                <div className="ml-3 w-2 h-2 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-full group-hover:shadow-ai-glow transition-all duration-300"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
