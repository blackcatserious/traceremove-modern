'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, FileText, Map, Folder, BookOpen, Settings, Users, Shield, Zap, ExternalLink, Eye, MessageSquare, File } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const siteMapArchitecture = `
graph TD
    A[Site Map System] --> B[Main Sections]
    A --> C[Research Areas]
    A --> D[Content Pages]
    B --> E[Home Page]
    B --> F[About Page]
    B --> G[Contact Page]
    C --> H[11 Research Areas]
    C --> I[7 Projects]
    C --> J[7 Interactive Tools]
    D --> K[Academic Resources]
    D --> L[Research Articles]
    D --> M[Additional Pages]
    E --> N[Comprehensive Site Map]
    F --> N
    G --> N
    H --> O[Research Navigation System]
    I --> O
    J --> O
    K --> P[Content Navigation Architecture]
    L --> P
    M --> P
    N --> Q[Complete Site Map]
    O --> Q
    P --> Q
    Q --> R{User Navigation?}
    R -->|Main| S[Main Section Access]
    R -->|Research| T[Research Area Discovery]
    R -->|Content| U[Content Page Navigation]
    S --> V[Fully Navigable Platform]
    T --> V
    U --> V
    V --> W[Enhanced User Experience]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const siteStructure = {
  mainSections: [
    {
      title: "Home",
      path: "/",
      icon: "🏠",
      description: "Platform mission, hero section, and overview of research areas and capabilities."
    },
    {
      title: "About Artur Ziganshin",
      path: "/about",
      icon: "👨‍🎓",
      description: "Full profile, CV, expertise, education, languages, and international activities."
    },
    {
      title: "Research Overview",
      path: "/research",
      icon: "🔬",
      description: "Comprehensive overview of all 11 research areas with interactive navigation."
    },
    {
      title: "Interactive Tools",
      path: "/tools",
      icon: "⚡",
      description: "7 AI-powered research tools and interactive demonstrations."
    },
    {
      title: "Whitepapers",
      path: "/whitepapers",
      icon: "📄",
      description: "PDF publications with preview functionality and download options."
    },
    {
      title: "Contact",
      path: "/contact",
      icon: "📧",
      description: "Contact form, social links, and academic profile connections."
    }
  ],
  researchAreas: [
    {
      title: "Ethical AI Architecture",
      path: "/research/ethical-ai-architecture",
      description: "Frameworks for building AI systems with embedded ethical principles and accountability mechanisms."
    },
    {
      title: "Agentic Systems & Tool Use",
      path: "/research/agentic-systems-tool-use",
      description: "Research on autonomous AI agents and their interaction with external tools and environments."
    },
    {
      title: "Multimodal Reasoning",
      path: "/research/multimodal-reasoning",
      description: "Integration of text, vision, audio, and other modalities for comprehensive AI understanding."
    },
    {
      title: "Big Data Interpretability",
      path: "/research/big-data-interpretability",
      description: "Methods for making large-scale data analysis transparent and understandable."
    },
    {
      title: "Language & Code Interoperability",
      path: "/research/language-code-interoperability",
      description: "Bridging natural language and programming languages for enhanced AI capabilities."
    },
    {
      title: "Privacy-Preserving AI",
      path: "/research/privacy-preserving-ai",
      description: "Techniques for maintaining privacy while enabling powerful AI applications."
    },
    {
      title: "Benchmarking Open vs Closed AI",
      path: "/research/benchmarking-open-vs-closed-ai",
      description: "Comparative analysis of open-source and proprietary AI systems and their implications."
    },
    {
      title: "Opacity & Responsibility in AI",
      path: "/research/opacity-responsibility-ai",
      description: "Addressing the challenges of AI transparency and establishing accountability frameworks."
    },
    {
      title: "AI Infrastructure for Academia",
      path: "/research/ai-infrastructure-academia",
      description: "Building sustainable AI research infrastructure for academic institutions."
    },
    {
      title: "Human-Centered AI",
      path: "/research/human-centered-ai",
      description: "Designing AI systems that augment human capabilities while preserving human agency."
    },
    {
      title: "Digital Rights & AI",
      path: "/research/digital-rights-ai",
      description: "Protecting digital rights and freedoms in the age of artificial intelligence."
    }
  ],
  projects: [
    {
      title: "Transparent LLMs",
      path: "/projects/transparent-llms",
      description: "Developing interpretable large language models with explainable decision-making processes."
    },
    {
      title: "Symbolic AI",
      path: "/projects/symbolic-ai",
      description: "Combining symbolic reasoning with neural approaches for robust AI systems."
    },
    {
      title: "Digital Identity & Agency",
      path: "/projects/digital-identity-agency",
      description: "Frameworks for digital identity management and preserving human agency online."
    },
    {
      title: "Semantic Data Pipelines",
      path: "/projects/semantic-data-pipelines",
      description: "Building intelligent data processing pipelines with semantic understanding."
    },
    {
      title: "NLP Evaluation",
      path: "/projects/nlp-evaluation",
      description: "Comprehensive evaluation frameworks for natural language processing systems."
    },
    {
      title: "Ethics in Multimodal AI",
      path: "/projects/ethics-multimodal-ai",
      description: "Ethical considerations and frameworks for multimodal AI systems."
    },
    {
      title: "Real-World AI Deployments",
      path: "/projects/real-world-ai-deployments",
      description: "Case studies and best practices for deploying AI systems in production environments."
    }
  ],
  tools: [
    {
      title: "AI Research Dashboard",
      path: "/tools/ai-research-dashboard",
      description: "Interactive dashboard for tracking AI research metrics and trends."
    },
    {
      title: "Semantic Search Tool",
      path: "/tools/semantic-search-tool",
      description: "Advanced search capabilities for exploring research literature semantically."
    },
    {
      title: "Privacy Score Calculator",
      path: "/tools/privacy-score-calculator",
      description: "Tool for assessing privacy implications of AI systems and data practices."
    },
    {
      title: "Data Visualization Playground",
      path: "/tools/data-visualization-playground",
      description: "Interactive environment for creating custom data visualizations and charts."
    },
    {
      title: "Paper Summarizer",
      path: "/tools/paper-summarizer",
      description: "AI-powered tool for generating concise summaries of research papers."
    },
    {
      title: "Language Model Comparison",
      path: "/tools/language-model-comparison",
      description: "Comparative analysis tool for evaluating different language models."
    },
    {
      title: "Annotation Demo",
      path: "/tools/annotation-demo",
      description: "Interactive demonstration of data annotation workflows and best practices."
    }
  ],
  academicResources: [
    {
      title: "Curriculum Vitae",
      path: "/academic/cv",
      description: "Complete academic CV with education, experience, publications, and achievements."
    },
    {
      title: "Publications Archive",
      path: "/academic/publications-archive",
      description: "Comprehensive archive of research publications, papers, and academic contributions."
    },
    {
      title: "Academic Collaborations",
      path: "/academic/collaborations",
      description: "Overview of research collaborations, partnerships, and joint projects."
    },
    {
      title: "Press Coverage",
      path: "/academic/press-coverage",
      description: "Media coverage, interviews, and press mentions of research work."
    },
    {
      title: "Conference Talks",
      path: "/academic/conference-talks",
      description: "Presentations, keynotes, and talks at academic conferences and events."
    },
    {
      title: "Teaching Materials",
      path: "/academic/teaching-materials",
      description: "Educational resources, course materials, and teaching methodologies."
    },
    {
      title: "AI Ethics Syllabi",
      path: "/academic/ethics-syllabi",
      description: "Comprehensive syllabi and curricula for AI ethics education."
    },
    {
      title: "Reading List",
      path: "/academic/reading-list",
      description: "Curated reading lists for AI research, ethics, and philosophy of technology."
    }
  ],
  articles: [
    {
      title: "Guardrails in UX Safety",
      path: "/articles/guardrails-ux-safety",
      description: "Exploring safety mechanisms and user experience considerations in AI interfaces."
    },
    {
      title: "Cost-Aware LLM Serving",
      path: "/articles/cost-aware-llm-serving",
      description: "Strategies for efficient and cost-effective deployment of large language models."
    },
    {
      title: "Agent Evaluation Beyond Win-Rates",
      path: "/articles/agent-evaluation-beyond-win-rates",
      description: "Comprehensive evaluation metrics for AI agents beyond simple success rates."
    },
    {
      title: "Philosophy of Machine Agency",
      path: "/articles/philosophy-machine-agency",
      description: "Philosophical examination of agency, autonomy, and decision-making in AI systems."
    },
    {
      title: "Epistemic Risks in AI",
      path: "/articles/epistemic-risks-ai",
      description: "Analysis of knowledge-related risks and uncertainties in AI systems."
    },
    {
      title: "Linguistic Symbolism in ML",
      path: "/articles/linguistic-symbolism-ml",
      description: "The role of symbolic representation and linguistic structures in machine learning."
    },
    {
      title: "AI & Human Dignity",
      path: "/articles/ai-human-dignity",
      description: "Preserving human dignity and worth in the development and deployment of AI."
    },
    {
      title: "Philosophy of Responsibility",
      path: "/articles/philosophy-responsibility",
      description: "Philosophical frameworks for understanding responsibility in AI systems."
    },
    {
      title: "Comparative LLM Analysis",
      path: "/articles/comparative-llm-analysis",
      description: "Systematic comparison and analysis of different large language model architectures."
    },
    {
      title: "Case Study: AI in Social Systems",
      path: "/articles/case-study-ai-social-systems",
      description: "Real-world case study of AI integration in complex social and organizational systems."
    }
  ],
  additionalPages: [
    {
      title: "Ethics Statement",
      path: "/legal/ethics-statement",
      description: "Comprehensive ethics statement outlining principles and commitments."
    },
    {
      title: "Privacy Policy",
      path: "/legal/privacy-policy",
      description: "Detailed privacy policy covering data collection, usage, and protection practices."
    },
    {
      title: "FAQ",
      path: "/faq",
      description: "Frequently asked questions about research, platform, and collaboration opportunities."
    },
    {
      title: "Site Map",
      path: "/site-map",
      description: "Complete navigation map of all platform pages and content structure."
    },
    {
      title: "AI Lab Members",
      path: "/ai-lab-members",
      description: "Team members, contributors, and collaborators in the AI research lab."
    }
  ]
};

const siteMapImplementationCode = `
class SiteMapFramework:
    """
    Comprehensive site map framework for research platform navigation
    with accessibility features, SEO optimization, and user experience enhancement.
    """
    
    def __init__(self):
        self.navigation_structure = {
            'main_sections': 6,
            'research_areas': 11,
            'projects': 7,
            'tools': 7,
            'academic_resources': 8,
            'articles': 10,
            'additional_pages': 5
        }
        self.accessibility_features = []
        self.seo_optimization = []
        self.user_experience_metrics = {}
    
    def generate_navigation_structure(self):
        """Generate comprehensive navigation structure with hierarchical organization."""
        structure = {
            'main_navigation': self._create_main_navigation(),
            'research_navigation': self._create_research_navigation(),
            'content_navigation': self._create_content_navigation(),
            'utility_navigation': self._create_utility_navigation()
        }
        
        return self._optimize_navigation_structure(structure)
    
    def implement_accessibility_features(self):
        """Implement WCAG 2.1 AA compliant accessibility features."""
        features = [
            'keyboard_navigation_support',
            'screen_reader_compatibility',
            'high_contrast_mode',
            'focus_indicators',
            'skip_navigation_links',
            'aria_labels_and_descriptions',
            'semantic_html_structure'
        ]
        
        for feature in features:
            self._implement_accessibility_feature(feature)
        
        return self._validate_accessibility_compliance()
    
    def optimize_seo_structure(self):
        """Optimize site structure for search engine optimization."""
        optimizations = [
            'semantic_url_structure',
            'breadcrumb_navigation',
            'internal_linking_strategy',
            'xml_sitemap_generation',
            'structured_data_markup',
            'meta_descriptions',
            'canonical_urls'
        ]
        
        for optimization in optimizations:
            self._apply_seo_optimization(optimization)
        
        return self._measure_seo_performance()
    
    def enhance_user_experience(self):
        """Enhance user experience through intuitive navigation and design."""
        enhancements = {
            'responsive_design': self._implement_responsive_navigation(),
            'search_functionality': self._add_site_search(),
            'breadcrumb_trails': self._create_breadcrumb_system(),
            'related_content': self._implement_content_recommendations(),
            'loading_optimization': self._optimize_page_loading(),
            'mobile_navigation': self._enhance_mobile_experience()
        }
        
        return self._evaluate_user_experience(enhancements)
    
    def monitor_navigation_analytics(self):
        """Monitor and analyze navigation patterns and user behavior."""
        analytics = {
            'page_views': self._track_page_views(),
            'navigation_paths': self._analyze_user_journeys(),
            'search_queries': self._monitor_site_search(),
            'bounce_rates': self._calculate_bounce_rates(),
            'conversion_funnels': self._track_conversion_paths(),
            'accessibility_usage': self._monitor_accessibility_features()
        }
        
        return self._generate_navigation_insights(analytics)
    
    def continuous_improvement(self):
        """Implement continuous improvement based on user feedback and analytics."""
        improvements = {
            'user_feedback_integration': self._collect_user_feedback(),
            'a_b_testing': self._conduct_navigation_tests(),
            'performance_optimization': self._optimize_navigation_performance(),
            'content_organization': self._refine_content_structure(),
            'accessibility_updates': self._update_accessibility_features()
        }
        
        return self._implement_improvements(improvements)

# Example usage for comprehensive site map management
site_map = SiteMapFramework()
navigation_structure = site_map.generate_navigation_structure()
accessibility_compliance = site_map.implement_accessibility_features()
seo_optimization = site_map.optimize_seo_structure()
user_experience = site_map.enhance_user_experience()
analytics_insights = site_map.monitor_navigation_analytics()
continuous_improvements = site_map.continuous_improvement()
`;

export default function SiteMap() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="neural" particleCount={75} />
      
      {/* Header */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-purple-300 hover:text-white font-medium transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
              </motion.div>
              <span className="typography-premium">Back to Home</span>
            </Link>

            <div className="mb-8">
              <motion.h1 
                className="hero-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Site Map: Complete Platform Navigation
              </motion.h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Updated Dec 2024
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  8 min read
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Site Map
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share Map
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Navigation', 'Site Map', 'Structure', 'Research Platform', 'Accessibility', 'SEO'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-ai-purple/10 text-accent-ai-purple border border-accent-ai-purple/20"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <motion.p 
                className="text-xl text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                This comprehensive site map provides a complete overview of the 
                Traceremove research platform structure, including all 50+ pages, 
                research areas, tools, and resources. Use this map to navigate 
                efficiently and discover all available content and features.
              </motion.p>
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Map className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Platform Overview & Structure</h2>
              </div>
              
              <LottieAnimation 
                animationFile="site-map-navigation.json"
                className="mx-auto mb-8"
                width={600}
                height={400}
              />
              
              <p className="body-text text-research-text-secondary mb-6">
                The Traceremove research platform is organized into six main 
                sections with over 50 individual pages covering research areas, 
                interactive tools, academic resources, and comprehensive content. 
                The platform is designed for intuitive navigation with clear 
                hierarchies, cross-references, and accessibility features.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Total Pages</h3>
                  <div className="text-3xl font-bold text-accent-ai-purple mb-2">50+</div>
                  <p className="text-sm text-research-text-secondary">Comprehensive content coverage</p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Research Areas</h3>
                  <div className="text-3xl font-bold text-accent-ai-purple mb-2">11</div>
                  <p className="text-sm text-research-text-secondary">Specialized research domains</p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Interactive Tools</h3>
                  <div className="text-3xl font-bold text-accent-ai-purple mb-2">7</div>
                  <p className="text-sm text-research-text-secondary">AI-powered research tools</p>
                </div>
              </div>
            </motion.div>

            {/* Site Map Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Site Map Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our site map integrates main sections, research areas, and content 
                pages to create comprehensive navigation mechanisms. The system 
                emphasizes home page access, research area organization, and content 
                page discovery through structured navigation delivery and fully 
                navigable platform development.
              </p>
              
              <MermaidDiagram chart={siteMapArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The site map operates through four integrated layers: (1) main 
                sections including home, about, and contact pages, (2) research areas 
                covering 11 specialized domains and 7 projects, (3) content pages 
                featuring academic resources and research articles, and (4) comprehensive 
                site map leading to fully navigable platform development.
              </p>
            </motion.div>

            {/* Main Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Folder className="h-6 w-6 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Main Sections</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {siteStructure.mainSections.map((section, index) => (
                  <Link
                    key={index}
                    href={section.path}
                    className="expertise-card p-6 hover:border-accent-ai-purple/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{section.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold text-research-text group-hover:text-accent-ai-purple transition-colors duration-200">
                            {section.title}
                          </h3>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-accent-ai-purple opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <p className="body-text text-research-text-secondary">
                      {section.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Research Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Research Areas (11 Pages)</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {siteStructure.researchAreas.map((area, index) => (
                  <Link
                    key={index}
                    href={area.path}
                    className="academic-card p-4 hover:border-accent-ai-purple/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-md font-semibold text-research-text group-hover:text-accent-ai-purple transition-colors duration-200">
                        {area.title}
                      </h3>
                      <ExternalLink className="h-3 w-3 text-accent-ai-purple opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <p className="text-sm text-research-text-secondary">
                      {area.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Settings className="h-6 w-6 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Project Portfolio (7 Pages)</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {siteStructure.projects.map((project, index) => (
                  <Link
                    key={index}
                    href={project.path}
                    className="academic-card p-4 hover:border-accent-ai-purple/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-md font-semibold text-research-text group-hover:text-accent-ai-purple transition-colors duration-200">
                        {project.title}
                      </h3>
                      <ExternalLink className="h-3 w-3 text-accent-ai-purple opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <p className="text-sm text-research-text-secondary">
                      {project.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Interactive Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Zap className="h-6 w-6 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Interactive Tools (7 Pages)</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {siteStructure.tools.map((tool, index) => (
                  <Link
                    key={index}
                    href={tool.path}
                    className="academic-card p-4 hover:border-accent-ai-purple/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-md font-semibold text-research-text group-hover:text-accent-ai-purple transition-colors duration-200">
                        {tool.title}
                      </h3>
                      <ExternalLink className="h-3 w-3 text-accent-ai-purple opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <p className="text-sm text-research-text-secondary">
                      {tool.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Academic Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Academic Resources (8 Pages)</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {siteStructure.academicResources.map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.path}
                    className="academic-card p-4 hover:border-accent-ai-purple/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-md font-semibold text-research-text group-hover:text-accent-ai-purple transition-colors duration-200">
                        {resource.title}
                      </h3>
                      <ExternalLink className="h-3 w-3 text-accent-ai-purple opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <p className="text-sm text-research-text-secondary">
                      {resource.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Research Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <File className="h-6 w-6 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Research Articles (10 Pages)</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {siteStructure.articles.map((article, index) => (
                  <Link
                    key={index}
                    href={article.path}
                    className="academic-card p-4 hover:border-accent-ai-purple/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-md font-semibold text-research-text group-hover:text-accent-ai-purple transition-colors duration-200">
                        {article.title}
                      </h3>
                      <ExternalLink className="h-3 w-3 text-accent-ai-purple opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <p className="text-sm text-research-text-secondary">
                      {article.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Additional Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Additional Pages (5+ Pages)</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {siteStructure.additionalPages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.path}
                    className="academic-card p-4 hover:border-accent-ai-purple/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-md font-semibold text-research-text group-hover:text-accent-ai-purple transition-colors duration-200">
                        {page.title}
                      </h3>
                      <ExternalLink className="h-3 w-3 text-accent-ai-purple opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                    <p className="text-sm text-research-text-secondary">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Implementation Framework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Site Map Implementation Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates our comprehensive site map 
                framework with navigation structure, accessibility features, and SEO 
                optimization designed to ensure intuitive navigation, user experience 
                enhancement, and continuous improvement in our platform structure 
                and accessibility standards.
              </p>
              
              <CodeBlock
                code={siteMapImplementationCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Our site map implementation framework provides systematic approaches 
                to navigation management that enable us to maintain the highest 
                standards of user experience, accessibility compliance, and SEO 
                optimization while building trust through clear and intuitive 
                platform navigation.
              </p>
            </motion.div>

            {/* Navigation Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Navigation Statistics & Usage Analytics</h2>
              
              <InteractiveChart
                dataFile="site_navigation_metrics.json"
                chartType="line"
                title="Site Navigation Statistics & User Behavior Analytics"
                className="mb-8"
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Most Visited Pages</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Home page: 45% of total visits</p>
                    <p>• About page: 18% of total visits</p>
                    <p>• Research overview: 12% of total visits</p>
                    <p>• Interactive tools: 10% of total visits</p>
                    <p>• Contact page: 8% of total visits</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Navigation Patterns</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Average pages per session: 4.2</p>
                    <p>• Average session duration: 6.8 minutes</p>
                    <p>• Bounce rate: 28%</p>
                    <p>• Return visitor rate: 42%</p>
                    <p>• Mobile navigation: 35% of visits</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Search & Discovery</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Internal search usage: 15% of visitors</p>
                    <p>• Most searched terms: AI ethics, research</p>
                    <p>• Search success rate: 87%</p>
                    <p>• Content discovery via navigation: 73%</p>
                    <p>• External referral rate: 22%</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Accessibility & Performance</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• WCAG 2.1 AA compliance: 98%</p>
                    <p>• Average page load time: 1.2 seconds</p>
                    <p>• Mobile responsiveness score: 95/100</p>
                    <p>• Keyboard navigation support: 100%</p>
                    <p>• Screen reader compatibility: 97%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Quick Navigation Links</h2>
              <div className="space-y-4">
                <p className="body-text text-research-text-secondary">
                  Use these quick links to jump directly to major sections 
                  of the platform. All links open in the same window for 
                  seamless navigation experience.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="academic-card p-4">
                    <h3 className="text-lg font-semibold text-research-text mb-3">Research</h3>
                    <div className="space-y-2 text-sm">
                      <Link href="/research" className="block text-accent-ai-purple hover:underline">Research Overview</Link>
                      <Link href="/research/ethical-ai-architecture" className="block text-accent-ai-purple hover:underline">Ethical AI</Link>
                      <Link href="/research/multimodal-reasoning" className="block text-accent-ai-purple hover:underline">Multimodal AI</Link>
                      <Link href="/research/privacy-preserving-ai" className="block text-accent-ai-purple hover:underline">Privacy AI</Link>
                    </div>
                  </div>
                  <div className="academic-card p-4">
                    <h3 className="text-lg font-semibold text-research-text mb-3">Tools & Resources</h3>
                    <div className="space-y-2 text-sm">
                      <Link href="/tools" className="block text-accent-ai-purple hover:underline">Interactive Tools</Link>
                      <Link href="/academic/cv" className="block text-accent-ai-purple hover:underline">Curriculum Vitae</Link>
                      <Link href="/academic/publications-archive" className="block text-accent-ai-purple hover:underline">Publications</Link>
                      <Link href="/whitepapers" className="block text-accent-ai-purple hover:underline">Whitepapers</Link>
                    </div>
                  </div>
                  <div className="academic-card p-4">
                    <h3 className="text-lg font-semibold text-research-text mb-3">Information</h3>
                    <div className="space-y-2 text-sm">
                      <Link href="/about" className="block text-accent-ai-purple hover:underline">About Artur</Link>
                      <Link href="/contact" className="block text-accent-ai-purple hover:underline">Contact</Link>
                      <Link href="/faq" className="block text-accent-ai-purple hover:underline">FAQ</Link>
                      <Link href="/legal/privacy-policy" className="block text-accent-ai-purple hover:underline">Privacy Policy</Link>
                    </div>
                  </div>
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
