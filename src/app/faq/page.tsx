'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, FileText, HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, Eye, Users, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const faqArchitecture = `
graph TD
    A[FAQ System] --> B[General Questions]
    A --> C[Research Questions]
    A --> D[Platform Questions]
    B --> E[About Traceremove]
    B --> F[Mission &amp; Vision]
    B --> G[Team &amp; Leadership]
    C --> H[Research Areas]
    C --> I[Publications]
    C --> J[Collaborations]
    D --> K[Platform Usage]
    D --> L[Technical Support]
    D --> M[Privacy &amp; Security]
    E --> N[Comprehensive FAQ Framework]
    F --> N
    G --> N
    H --> O[Research FAQ System]
    I --> O
    J --> O
    K --> P[Platform FAQ Architecture]
    L --> P
    M --> P
    N --> Q[Complete FAQ System]
    O --> Q
    P --> Q
    Q --> R{User Query?}
    R -->|General| S[General Information Response]
    R -->|Research| T[Research Information Response]
    R -->|Platform| U[Platform Support Response]
    S --> V[Comprehensive User Support]
    T --> V
    U --> V
    V --> W[Informed User Community]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const faqData = [
  {
    category: "General",
    questions: [
      {
        id: 1,
        question: "What is Traceremove and what do you do?",
        answer: "Traceremove is a research platform founded by Artur Ziganshin, focused on advancing artificial intelligence research with emphasis on ethics, transparency, and human-centered design. We conduct cutting-edge research in areas such as ethical AI architecture, multimodal reasoning, privacy-preserving AI, and digital rights. Our mission is to develop AI systems that benefit humanity while respecting human dignity and promoting social good."
      },
      {
        id: 2,
        question: "Who is Artur Ziganshin?",
        answer: "Artur Ziganshin is the founder of Traceremove and Rarematrix, an AI systems architect, developer, and philosopher of technology. He holds BA/MA degrees in Philosophy from Kazan Federal University (KFU) and has extensive expertise in AI ethics, Big Data, language technologies, and security. He is multilingual (Russian, English, Tatar, Serbian, Spanish) and actively involved in international activities including Equality, ORM, and cyber rights research."
      },
      {
        id: 3,
        question: "What is your mission and vision?",
        answer: "Our mission is to advance AI research and development in ways that are ethical, transparent, and aligned with human values. We envision a future where AI serves all of humanity equitably, enhances human capabilities while preserving autonomy, and contributes to solving global challenges. We are committed to responsible innovation, open research practices, and meaningful stakeholder engagement in all our work."
      },
      {
        id: 4,
        question: "How can I get involved with Traceremove?",
        answer: "There are several ways to get involved: (1) Follow our research through publications and updates, (2) Participate in our research studies when opportunities arise, (3) Collaborate on research projects if you're an academic or industry researcher, (4) Engage with our open-source tools and provide feedback, (5) Join our community discussions and workshops. Contact us at info@traceremove.dev to explore collaboration opportunities."
      }
    ]
  },
  {
    category: "Research",
    questions: [
      {
        id: 5,
        question: "What are your main research areas?",
        answer: "Our research spans 11 key areas: Ethical AI Architecture, Agentic Systems, Multimodal Reasoning, Big Data Interpretability, Language & Code Interoperability, Privacy-Preserving AI, Benchmarking Open vs Closed AI, Opacity & Responsibility in AI, AI Infrastructure for Academia, Human-Centered AI, and Digital Rights & AI. Each area focuses on advancing both technical capabilities and ethical considerations."
      },
      {
        id: 6,
        question: "How do you ensure research ethics and integrity?",
        answer: "We maintain the highest standards of research ethics through: (1) Comprehensive ethics review processes for all projects, (2) Transparent reporting of methods and findings, (3) Rigorous peer review and collaboration, (4) Respect for participant rights and informed consent, (5) Robust data protection and privacy measures, (6) Regular ethics training for all team members, and (7) Engagement with ethics advisory boards and external oversight."
      },
      {
        id: 7,
        question: "Can I access your research publications?",
        answer: "Yes! We are committed to open research practices. Our publications are available through multiple channels: (1) Our publications archive on this website, (2) Academic databases and repositories, (3) Preprint servers for early access to findings, (4) Our research blog for accessible summaries, and (5) Conference presentations and talks. We also provide supplementary materials, code, and datasets when possible and appropriate."
      },
      {
        id: 8,
        question: "Do you collaborate with other researchers and institutions?",
        answer: "Absolutely! Collaboration is central to our research approach. We work with academic institutions, industry partners, civil society organizations, and individual researchers worldwide. Our collaborations include joint research projects, data sharing agreements, co-authored publications, workshop organization, and advisory roles. We welcome new collaboration opportunities that align with our mission and values."
      }
    ]
  },
  {
    category: "Platform",
    questions: [
      {
        id: 9,
        question: "How do I navigate the research platform?",
        answer: "Our platform is designed for intuitive navigation: (1) Use the main menu to access different sections (Research, About, Tools, etc.), (2) Browse research areas to explore specific topics, (3) Use the search functionality to find specific content, (4) Check the site map for a complete overview, (5) Follow breadcrumb navigation within sections, and (6) Use direct links to bookmark and share specific pages or articles."
      },
      {
        id: 10,
        question: "What interactive tools are available?",
        answer: "We offer 7 interactive tools: (1) AI Research Dashboard for tracking research metrics, (2) Semantic Search Tool for exploring research literature, (3) Privacy Score Calculator for assessing data protection, (4) Data Visualization Playground for creating custom charts, (5) Paper Summarizer for research paper analysis, (6) Language Model Comparison for evaluating AI systems, and (7) Annotation Demo for data labeling workflows."
      },
      {
        id: 11,
        question: "Is my data safe and private?",
        answer: "Yes, we take data protection very seriously. We implement: (1) End-to-end encryption for data transmission, (2) Secure storage with access controls, (3) Regular security audits and assessments, (4) Compliance with GDPR, CCPA, and other privacy regulations, (5) Data minimization practices, (6) Transparent privacy policies, (7) User control over personal information, and (8) Prompt breach notification procedures if needed."
      },
      {
        id: 12,
        question: "How do I report technical issues or provide feedback?",
        answer: "We welcome your feedback and are committed to resolving issues promptly: (1) Technical issues: support@traceremove.dev, (2) General feedback: feedback@traceremove.dev, (3) Research inquiries: research@traceremove.dev, (4) Privacy concerns: privacy@traceremove.dev, (5) Use our contact form for detailed reports, (6) Follow up on GitHub for open-source projects, and (7) Participate in user surveys and feedback sessions."
      }
    ]
  },
  {
    category: "Collaboration",
    questions: [
      {
        id: 13,
        question: "How can academic institutions partner with Traceremove?",
        answer: "We offer several partnership models for academic institutions: (1) Joint research projects and grants, (2) Student internship and mentorship programs, (3) Faculty exchange and visiting researcher opportunities, (4) Shared datasets and computational resources, (5) Co-organized workshops and conferences, (6) Curriculum development and educational materials, and (7) Ethics advisory and consultation services. Contact us to discuss specific partnership opportunities."
      },
      {
        id: 14,
        question: "Do you work with industry partners?",
        answer: "Yes, we collaborate with industry partners who share our commitment to ethical AI development: (1) Applied research projects addressing real-world challenges, (2) Technology transfer and commercialization support, (3) Ethics consultation and responsible AI guidance, (4) Workforce development and training programs, (5) Standards development and best practice sharing, and (6) Public-private partnership initiatives. All collaborations must align with our ethical principles."
      },
      {
        id: 15,
        question: "Can I contribute to your open-source projects?",
        answer: "We welcome contributions to our open-source initiatives! Ways to contribute include: (1) Code contributions through GitHub repositories, (2) Documentation improvements and translations, (3) Bug reports and feature requests, (4) Testing and quality assurance, (5) Community support and user assistance, (6) Educational content and tutorials, and (7) Research validation and replication studies. Check our GitHub organization for current projects and contribution guidelines."
      },
      {
        id: 16,
        question: "What funding opportunities are available?",
        answer: "We pursue various funding mechanisms: (1) Government research grants and contracts, (2) Foundation and philanthropic funding, (3) Industry-sponsored research projects, (4) International collaboration grants, (5) Innovation and commercialization funding, (6) Student and early-career researcher fellowships, and (7) Conference and workshop support grants. We also welcome discussions about custom funding arrangements for specific research priorities."
      }
    ]
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const categories = ['All', 'General', 'Research', 'Platform', 'Collaboration'];

  const filteredQuestions = faqData.filter(category => {
    if (selectedCategory !== 'All' && category.category !== selectedCategory) {
      return false;
    }
    if (searchTerm) {
      return category.questions.some(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true;
  });

  const toggleQuestion = (questionId: number) => {
    setExpandedQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="neural" particleCount={75} />
      
      {/* Header */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Frequently Asked Questions
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Updated Dec 2024
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  10 min read
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  FAQ
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share FAQ
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['FAQ', 'Support', 'Research', 'Platform', 'Collaboration', 'Help'].map((tag) => (
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
                Find answers to common questions about Traceremove, our research, 
                platform features, and collaboration opportunities. Can&apos;t find 
                what you&apos;re looking for? Contact us directly for personalized assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <HelpCircle className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">FAQ Overview &amp; Support</h2>
              </div>
              
              <LottieAnimation 
                animationFile="faq-support.json"
                className="mx-auto mb-8"
                width={600}
                height={400}
              />
              
              <p className="body-text text-research-text-secondary mb-6">
                This FAQ section provides comprehensive answers to the most 
                common questions about Traceremove, our research activities, 
                platform features, and collaboration opportunities. We&apos;ve 
                organized questions into categories to help you find the 
                information you need quickly and efficiently.
              </p>
              
              <p className="body-text text-research-text-secondary">
                If you can&apos;t find the answer to your question here, please 
                don&apos;t hesitate to contact us directly. We&apos;re committed to
                providing helpful, timely responses to all inquiries and 
                continuously updating this FAQ based on community feedback 
                and emerging questions.
              </p>
            </motion.div>

            {/* FAQ Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">FAQ System Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our FAQ system integrates general questions, research inquiries, 
                and platform support to create comprehensive user assistance 
                mechanisms. The system emphasizes about Traceremove information, 
                research area details, and platform usage guidance through 
                structured response delivery and informed user community development.
              </p>
              
              <MermaidDiagram chart={faqArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The FAQ system operates through four integrated layers: (1) general 
                questions including about Traceremove, mission &amp; vision, and team information, 
                (2) research questions covering research areas and publications, (3) platform 
                questions featuring usage guidance and technical support, and (4) comprehensive 
                FAQ system leading to informed user community development.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Search &amp; Filter Questions</h2>
              
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-research-text-secondary" />
                  <input
                    type="text"
                    placeholder="Search questions and answers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-accent-ai-purple/20 rounded-2xl text-research-text placeholder-research-text-secondary focus:outline-none focus:border-accent-ai-purple/40 backdrop-blur-sm"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-accent-ai-purple text-white shadow-ai-glow'
                          : 'bg-white/10 text-research-text-secondary border border-accent-ai-purple/20 hover:border-accent-ai-purple/40'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FAQ Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {filteredQuestions.map((categoryData) => (
                <div key={categoryData.category} className="glass-card-premium p-8">
                  <div className="flex items-center mb-6">
                    {categoryData.category === 'General' && <Users className="h-6 w-6 text-accent-ai-purple mr-3" />}
                    {categoryData.category === 'Research' && <FileText className="h-6 w-6 text-accent-ai-purple mr-3" />}
                    {categoryData.category === 'Platform' && <Zap className="h-6 w-6 text-accent-ai-purple mr-3" />}
                    {categoryData.category === 'Collaboration' && <Shield className="h-6 w-6 text-accent-ai-purple mr-3" />}
                    <h3 className="section-title text-research-text">{categoryData.category} Questions</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {categoryData.questions
                      .filter(q => 
                        !searchTerm || 
                        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((question) => (
                        <div key={question.id} className="academic-card">
                          <button
                            onClick={() => toggleQuestion(question.id)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                          >
                            <h4 className="text-lg font-semibold text-research-text pr-4">
                              {question.question}
                            </h4>
                            {expandedQuestions.includes(question.id) ? (
                              <ChevronUp className="h-5 w-5 text-accent-ai-purple flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-accent-ai-purple flex-shrink-0" />
                            )}
                          </button>
                          
                          {expandedQuestions.includes(question.id) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-6"
                            >
                              <div className="border-t border-accent-ai-purple/20 pt-4">
                                <p className="body-text text-research-text-secondary leading-relaxed">
                                  {question.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* FAQ Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">FAQ Usage &amp; Support Statistics</h2>
              
              <InteractiveChart
                dataFile="faq_usage_metrics.json"
                chartType="line"
                title="FAQ Usage Statistics &amp; User Support Metrics"
                className="mb-8"
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Most Asked Questions</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• What is Traceremove and what do you do?</p>
                    <p>• How can I get involved with Traceremove?</p>
                    <p>• What are your main research areas?</p>
                    <p>• How do I navigate the research platform?</p>
                    <p>• Can I access your research publications?</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Support Response Times</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• General inquiries: 24-48 hours</p>
                    <p>• Technical support: 12-24 hours</p>
                    <p>• Research collaboration: 2-5 business days</p>
                    <p>• Privacy concerns: 24 hours</p>
                    <p>• Emergency issues: Same day</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">User Satisfaction</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• FAQ helpfulness rating: 4.8/5.0</p>
                    <p>• Question resolution rate: 94%</p>
                    <p>• User feedback score: 4.7/5.0</p>
                    <p>• Follow-up question rate: 12%</p>
                    <p>• Contact form usage: 8% of visitors</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Content Updates</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Monthly FAQ reviews and updates</p>
                    <p>• New questions added based on user feedback</p>
                    <p>• Seasonal content refreshes</p>
                    <p>• Policy and procedure updates</p>
                    <p>• Community-driven improvements</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Still Need Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Still Need Help?</h2>
              <div className="space-y-4">
                <p className="body-text text-research-text-secondary">
                  If you couldn&apos;t find the answer to your question in our FAQ, 
                  we&apos;re here to help! Our team is committed to providing 
                  personalized assistance and comprehensive support for all 
                  your inquiries.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="academic-card p-6">
                    <h3 className="text-lg font-semibold text-research-text mb-3">Contact Options</h3>
                    <div className="space-y-2 text-sm text-research-text-secondary">
                      <p>• General inquiries: info@traceremove.dev</p>
                      <p>• Research questions: research@traceremove.dev</p>
                      <p>• Technical support: support@traceremove.dev</p>
                      <p>• Collaboration: partnerships@traceremove.dev</p>
                      <p>• Media inquiries: media@traceremove.dev</p>
                    </div>
                  </div>
                  <div className="academic-card p-6">
                    <h3 className="text-lg font-semibold text-research-text mb-3">Additional Resources</h3>
                    <div className="space-y-2 text-sm text-research-text-secondary">
                      <p>• <Link href="/about" className="text-accent-ai-purple hover:underline">About page</Link> for detailed information</p>
                      <p>• <Link href="/contact" className="text-accent-ai-purple hover:underline">Contact form</Link> for specific inquiries</p>
                      <p>• <Link href="/site-map" className="text-accent-ai-purple hover:underline">Site map</Link> for navigation help</p>
                      <p>• Research publications for technical details</p>
                      <p>• Community forums and discussions</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Response Commitment</h3>
                  <p className="body-text text-research-text-secondary">
                    We commit to acknowledging all inquiries within 24 hours 
                    and providing comprehensive responses within 2-5 business 
                    days, depending on the complexity of your question. For 
                    urgent matters, please indicate the urgency in your message 
                    subject line.
                  </p>
                </div>
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
                  Contact Us
                  <MessageSquare className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
