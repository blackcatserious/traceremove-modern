'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  BookOpen, 
  Lightbulb, 
  Users, 
  Globe, 
  Target,
  ArrowRight,
  Quote,
  Sparkles,
  Eye,
  Heart,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import BackgroundLayers from '@/components/BackgroundLayers';

const philosophicalAreas = [
  {
    title: "Philosophy of Technology",
    description: "Examining the relationship between technology, society, and human values. Exploring how AI systems shape and are shaped by philosophical frameworks.",
    icon: Brain,
    gradient: "from-blue-500 to-purple-600",
    keyTopics: ["Technological Determinism", "Human-AI Interaction", "Digital Ethics", "Posthuman Philosophy"]
  },
  {
    title: "AI Ethics & Responsibility",
    description: "Developing ethical frameworks for AI systems that prioritize human dignity, fairness, and social justice in technological advancement.",
    icon: Heart,
    gradient: "from-purple-500 to-pink-600",
    keyTopics: ["Algorithmic Fairness", "AI Governance", "Moral Agency", "Responsible Innovation"]
  },
  {
    title: "Epistemology & AI",
    description: "Investigating how AI systems acquire, process, and represent knowledge. Exploring the philosophical foundations of machine learning and reasoning.",
    icon: Eye,
    gradient: "from-green-500 to-teal-600",
    keyTopics: ["Machine Knowledge", "Interpretability", "Epistemic Justice", "Computational Epistemology"]
  },
  {
    title: "Philosophy of Mind & Agency",
    description: "Examining questions of consciousness, agency, and intentionality in artificial systems. Bridging cognitive science and AI development.",
    icon: Lightbulb,
    gradient: "from-orange-500 to-red-600",
    keyTopics: ["Artificial Agency", "Consciousness Studies", "Intentionality", "Cognitive Architecture"]
  }
];

const philosophicalWorks = [
  {
    title: "The Ethics of Agentic AI Systems",
    type: "Research Paper",
    year: "2024",
    description: "A comprehensive examination of moral agency in autonomous AI systems and the philosophical implications of machine decision-making.",
    url: "/philosophy/ethics-agentic-ai-systems.pdf"
  },
  {
    title: "Technology, Society, and Human Flourishing",
    type: "Book Chapter",
    year: "2023",
    description: "Exploring how technological advancement can be aligned with human values and social well-being through philosophical inquiry.",
    url: "/philosophy/technology-society-flourishing.pdf"
  },
  {
    title: "Epistemic Responsibility in AI Development",
    type: "Journal Article",
    year: "2023",
    description: "Investigating the epistemic duties of AI researchers and developers in creating knowledge-generating systems.",
    url: "/philosophy/epistemic-responsibility-ai.pdf"
  },
  {
    title: "Digital Rights and Human Dignity",
    type: "Conference Paper",
    year: "2022",
    description: "Philosophical foundations for digital rights frameworks that protect human dignity in the age of AI and automation.",
    url: "/philosophy/digital-rights-human-dignity.pdf"
  }
];

const philosophicalQuotes = [
  {
    text: "Technology is not neutral. It embodies the values, assumptions, and intentions of its creators. Our responsibility is to ensure these align with human flourishing.",
    context: "On Technology Ethics"
  },
  {
    text: "The question is not whether AI can think, but whether we can think responsibly about AI's role in human society.",
    context: "On AI Philosophy"
  },
  {
    text: "True progress in AI requires not just technical advancement, but philosophical wisdom about what it means to be human in a world of intelligent machines.",
    context: "On Human-AI Coexistence"
  }
];

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-research-50 via-white to-lab-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <BackgroundLayers variant="about" className="absolute inset-0 z-0" />
        
        <div className="absolute inset-0 bg-gradient-to-br from-accent-deep-blue/5 via-accent-ai-purple/5 to-accent-lab-purple/10 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.1),transparent_50%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.08),transparent_50%)] z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8"
            >
              <Brain className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                Philosophy of Technology
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight font-ibm-sans mb-6">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block text-accent-deep-blue mb-2"
                >
                  Philosophy &amp;
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600 bg-clip-text text-transparent"
                >
                  Technology
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-research-600 max-w-4xl mx-auto mb-12 leading-relaxed font-ibm-sans"
            >
              Exploring the philosophical foundations of artificial intelligence, technology ethics, 
              and the intersection of human values with technological advancement. Bridging ancient wisdom 
              with contemporary challenges in AI development and deployment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/philosophy/works"
                className="group glass-card-premium inline-flex items-center px-8 py-4 text-research-700 font-semibold transition-all duration-400"
              >
                <BookOpen className="mr-3 h-5 w-5 text-accent-ai-purple group-hover:text-accent-lab-purple transition-colors duration-300" />
                <span className="font-ibm-sans">Philosophical Works</span>
                <ArrowRight className="ml-3 h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:text-accent-ai-purple transition-all duration-300" />
              </Link>
              
              <Link
                href="/philosophy/ethics-framework"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-bold rounded-2xl shadow-hero-glow hover:shadow-ai-glow transition-all duration-300 hover:from-accent-lab-purple hover:to-accent-ai-purple font-ibm-sans"
              >
                <Heart className="mr-3 h-5 w-5 text-white" />
                Ethics Framework
                <Sparkles className="ml-3 h-4 w-4 text-white group-hover:animate-pulse" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophical Areas Section */}
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
              <Lightbulb className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                Areas of Inquiry
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-deep-blue mb-6 font-ibm-sans">
              Philosophical Research Areas
            </h2>
            <p className="text-xl text-research-600 max-w-3xl mx-auto leading-relaxed font-ibm-sans">
              Investigating fundamental questions at the intersection of philosophy, technology, and human experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophicalAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card-research group hover:shadow-card-hover transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${area.gradient} flex items-center justify-center shadow-lab-card`}>
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-accent-deep-blue ml-4 font-ibm-sans">
                      {area.title}
                    </h3>
                  </div>
                  
                  <p className="text-research-600 mb-6 leading-relaxed font-ibm-sans">
                    {area.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-accent-ai-purple mb-3 font-ibm-sans">
                      Key Topics:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {area.keyTopics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 text-accent-ai-purple text-sm rounded-full border border-accent-ai-purple/20 font-ibm-sans"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophical Works Section */}
      <section className="py-24 bg-gradient-to-br from-lab-50 to-research-50">
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
                Publications
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-deep-blue mb-6 font-ibm-sans">
              Philosophical Works
            </h2>
            <p className="text-xl text-research-600 max-w-3xl mx-auto leading-relaxed font-ibm-sans">
              Academic publications exploring the philosophical dimensions of AI, technology, and human society
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophicalWorks.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card-premium group hover:shadow-card-hover transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 text-accent-ai-purple text-sm rounded-full border border-accent-ai-purple/20 font-ibm-sans">
                      {work.type}
                    </span>
                    <span className="text-research-500 text-sm font-ibm-sans">
                      {work.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-accent-deep-blue mb-4 font-ibm-sans group-hover:text-accent-ai-purple transition-colors duration-300">
                    {work.title}
                  </h3>
                  
                  <p className="text-research-600 mb-6 leading-relaxed font-ibm-sans">
                    {work.description}
                  </p>
                  
                  <Link
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-ai-purple font-semibold hover:text-accent-lab-purple transition-colors duration-300 font-ibm-sans"
                  >
                    Read Paper
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophical Quotes Section */}
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
              <Quote className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="text-sm font-semibold text-accent-ai-purple font-ibm-sans">
                Philosophical Insights
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-deep-blue mb-6 font-ibm-sans">
              Key Insights
            </h2>
            <p className="text-xl text-research-600 max-w-3xl mx-auto leading-relaxed font-ibm-sans">
              Reflections on technology, ethics, and the human condition in the age of artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {philosophicalQuotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card-hero text-center group hover:shadow-card-hover transition-all duration-300"
              >
                <div className="p-8">
                  <Quote className="w-12 h-12 text-accent-ai-purple mx-auto mb-6 opacity-60" />
                  
                  <blockquote className="text-lg text-research-700 mb-6 leading-relaxed font-ibm-sans italic">
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>
                  
                  <cite className="text-accent-ai-purple font-semibold font-ibm-sans">
                    {quote.context}
                  </cite>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-accent-deep-blue via-accent-ai-purple to-accent-lab-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-ibm-sans">
              Join the Philosophical Dialogue
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-ibm-sans">
              Engage with cutting-edge philosophical research on AI, technology, and human values. 
              Contribute to the conversation shaping our technological future.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-accent-deep-blue font-bold rounded-2xl shadow-hero-glow hover:shadow-ai-glow transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-lab-50 font-ibm-sans text-lg"
              >
                <Users className="mr-3 h-6 w-6 text-accent-ai-purple" />
                Collaborate
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/research"
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/30 hover:border-white/50 shadow-lab-card hover:shadow-card-hover transition-all duration-300 hover:bg-white/20 font-ibm-sans text-lg"
              >
                <Brain className="mr-3 h-6 w-6 text-white" />
                Explore Research
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
