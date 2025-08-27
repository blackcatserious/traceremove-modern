'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, Users, Award, MapPin, Linkedin, Github, BookOpen, Calendar, Shield, ExternalLink, Eye, MessageSquare, Zap } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const labArchitecture = `
graph TD
    A[AI Lab Team] --> B[Leadership]
    A --> C[Research Team]
    A --> D[Collaborators]
    B --> E[Founder & Director]
    B --> F[Advisory Board]
    B --> G[Strategic Partners]
    C --> H[Core Researchers]
    C --> I[PhD Students]
    C --> J[Visiting Scholars]
    D --> K[Academic Partners]
    D --> L[Industry Collaborators]
    D --> M[International Network]
    E --> N[Strategic Direction]
    F --> N
    G --> N
    H --> O[Innovation & Discovery]
    I --> O
    J --> O
    K --> P[Knowledge Exchange]
    L --> P
    M --> P
    N --> Q[World-Class AI Lab]
    O --> Q
    P --> Q
    Q --> R{Research Impact?}
    R -->|Academic| S[Publications & Papers]
    R -->|Industry| T[Real-World Applications]
    R -->|Society| U[Ethical AI Development]
    S --> V[Global Research Impact]
    T --> V
    U --> V
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style V fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const teamMembers = {
  leadership: [
    {
      name: "Artur Ziganshin",
      role: "Founder & Director",
      title: "AI Systems Architect, Developer, Philosopher of Technology",
      location: "Kazan, Russia / International",
      bio: "Artur Ziganshin is the founder and director of the Traceremove AI Research Lab, bringing together expertise in AI systems architecture, software development, and philosophy of technology. With a background in philosophy from Kazan Federal University and extensive experience in AI ethics, big data, and language technologies, Artur leads interdisciplinary research that bridges technical innovation with ethical considerations. His work focuses on transparency, responsibility, and human-centered approaches to AI development.",
      expertise: ["AI Ethics", "Systems Architecture", "Philosophy of Technology", "Big Data", "Language Technologies", "Security", "Transparency"],
      languages: ["Russian", "English", "Tatar", "Serbian", "Spanish"],
      projects: ["Traceremove Platform", "Rarematrix", "Equality Initiative", "Ethical AI Framework"],
      social: {
        linkedin: "https://linkedin.com/in/artur-ziganshin",
        github: "https://github.com/zikzk1394",
        scholar: "https://scholar.google.com/citations?user=artur-ziganshin"
      }
    }
  ]
};

export default function AILabMembers() {
  return (
    <div className="min-h-screen relative">
      
      {/* Header */}
      <section className="relative decorative-blobs overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/5" />
        <div className="relative decorative-content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                AI Lab Members &amp; Collaborators
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Updated Dec 2024
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  12 min read
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Team
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share Team
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Team', 'Research', 'Collaboration', 'AI Lab', 'Academia', 'Innovation'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-ai-purple/10 text-accent-ai-purple border border-accent-ai-purple/20"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <p className="section-title text-research-text-secondary leading-relaxed">
                Meet the diverse team of researchers, scholars, and collaborators 
                who drive innovation at the Traceremove AI Research Lab. Our 
                international team combines expertise in AI ethics, technical 
                research, and interdisciplinary collaboration to advance 
                responsible AI development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Lab Overview &amp; Mission</h2>
              </div>
              
              <LottieAnimation 
                animationFile="team-collaboration.json"
                className="mx-auto mb-8"
                width={600}
                height={400}
              />
              
              <p className="body-text text-research-text-secondary mb-6">
                The Traceremove AI Research Lab brings together a diverse team 
                of researchers, scholars, and collaborators from around the world. 
                Our team combines technical expertise with ethical considerations, 
                interdisciplinary perspectives, and a commitment to responsible 
                AI development that benefits all of humanity.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Team Size</h3>
                  <div className="text-3xl font-bold text-accent-ai-purple mb-2">12+</div>
                  <p className="text-sm text-research-text-secondary">Active researchers &amp; collaborators</p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Countries</h3>
                  <div className="text-3xl font-bold text-accent-ai-purple mb-2">10</div>
                  <p className="text-sm text-research-text-secondary">International representation</p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Expertise Areas</h3>
                  <div className="text-3xl font-bold text-accent-ai-purple mb-2">15+</div>
                  <p className="text-sm text-research-text-secondary">Specialized research domains</p>
                </div>
              </div>
            </motion.div>

            {/* Lab Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Lab Team Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our lab team integrates leadership, research team, and collaborators 
                to create comprehensive research mechanisms. The system emphasizes 
                strategic direction, innovation &amp; discovery, and knowledge exchange 
                through structured collaboration delivery and world-class AI research 
                lab development.
              </p>
              
              <MermaidDiagram chart={labArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The lab team operates through four integrated layers: (1) leadership 
                including founder, advisory board, and strategic partners, (2) research 
                team covering core researchers, PhD students, and visiting scholars, 
                (3) collaborators featuring academic partners and industry collaborators, 
                and (4) comprehensive AI lab team leading to global research impact.
              </p>
            </motion.div>

            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Leadership Team</h2>
              </div>
              
              <div className="space-y-8">
                {teamMembers.leadership.map((member, index) => (
                  <div key={index} className="expertise-card p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 bg-gradient-to-br from-accent-ai-purple/20 to-accent-lab-purple/20 rounded-2xl flex items-center justify-center">
                          <Users className="h-16 w-16 text-accent-ai-purple" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-research-text mb-2">{member.name}</h3>
                            <p className="text-lg text-accent-ai-purple font-semibold mb-1">{member.role}</p>
                            <p className="text-md text-research-text-secondary mb-2">{member.title}</p>
                            <div className="flex items-center text-sm text-research-text-secondary mb-4">
                              <MapPin className="h-4 w-4 mr-1" />
                              {member.location}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {member.social.linkedin && (
                              <a href={member.social.linkedin} className="text-accent-ai-purple hover:text-accent-lab-purple transition-colors duration-200">
                                <Linkedin className="h-5 w-5" />
                              </a>
                            )}
                            {member.social.github && (
                              <a href={member.social.github} className="text-accent-ai-purple hover:text-accent-lab-purple transition-colors duration-200">
                                <Github className="h-5 w-5" />
                              </a>
                            )}
                            {member.social.scholar && (
                              <a href={member.social.scholar} className="text-accent-ai-purple hover:text-accent-lab-purple transition-colors duration-200">
                                <BookOpen className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                        </div>
                        
                        <p className="body-text text-research-text-secondary mb-6">{member.bio}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-research-text mb-3">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.expertise.map((skill, skillIndex) => (
                                <span key={skillIndex} className="px-3 py-1 bg-accent-ai-purple/10 text-accent-ai-purple rounded-full text-sm">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-research-text mb-3">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.languages.map((lang, langIndex) => (
                                <span key={langIndex} className="px-3 py-1 bg-accent-lab-purple/10 text-accent-lab-purple rounded-full text-sm">
                                  {lang}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-research-text mb-3">Key Projects</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.projects.map((project, projectIndex) => (
                              <span key={projectIndex} className="px-3 py-1 bg-white/10 text-research-text border border-accent-ai-purple/20 rounded-full text-sm">
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border-t border-accent-ai-purple/20 pt-8"
            >
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Join Our Team
                  <Users className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
