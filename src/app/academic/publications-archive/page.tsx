'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, FileText, Search, Filter, Calendar } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const publicationArchitecture = `
graph TD
    A[Publications Archive] --> B[Research Categories]
    A --> C[Publication Management]
    A --> D[Impact Analytics]
    B --> E[AI Ethics Papers]
    B --> F[Language Technology]
    B --> G[Big Data Research]
    C --> H[Peer Review Journals]
    C --> I[Conference Proceedings]
    C --> J[Technical Reports]
    D --> K[Citation Analysis]
    D --> L[Impact Metrics]
    D --> M[Collaboration Networks]
    E --> N[Publication Database]
    F --> N
    G --> N
    H --> O[Academic Output]
    I --> O
    J --> O
    K --> P[Research Impact]
    L --> P
    M --> P
    N --> Q[Comprehensive Archive]
    O --> Q
    P --> Q
    Q --> R{Archive Complete?}
    R -->|Yes| S[Scholarly Recognition]
    R -->|No| T[Continued Research]
    S --> U[Academic Influence]
    T --> U
    U --> V[Knowledge Contribution]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style V fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const archiveCode = `
class PublicationsArchive:
    def __init__(self, research_database, citation_systems):
        self.research_database = research_database
        self.citation_systems = citation_systems
        self.publication_manager = PublicationManager()
        self.impact_analyzer = ImpactAnalyzer()
        self.collaboration_tracker = CollaborationTracker()
        self.search_engine = SearchEngine()
        
    def build_comprehensive_archive(self, research_portfolio, publication_criteria):
        """Build comprehensive publications archive with advanced search, impact analysis, and collaboration tracking."""
        
        archive_system = {
            'publication_database': {},
            'search_interface': {},
            'impact_analytics': {},
            'collaboration_network': {},
            'export_capabilities': {}
        }
        
        # Comprehensive publication database
        archive_system['publication_database'] = self.build_publication_database(
            research_portfolio, self.research_database,
            database_components=[
                'peer_reviewed_journal_articles',
                'conference_proceedings_papers',
                'book_chapters_contributions',
                'technical_reports_whitepapers',
                'collaborative_research_outputs',
                'open_access_publications'
            ]
        )
        
        # Advanced search and filtering interface
        archive_system['search_interface'] = self.implement_search_interface(
            archive_system['publication_database'], publication_criteria,
            search_capabilities=[
                'full_text_semantic_search',
                'multi_criteria_filtering',
                'temporal_publication_analysis',
                'topic_clustering_visualization',
                'author_collaboration_mapping',
                'citation_network_exploration'
            ]
        )
        
        # Comprehensive impact analytics
        archive_system['impact_analytics'] = self.build_impact_analytics(
            archive_system['search_interface'],
            analytics_dimensions=[
                'citation_impact_measurement',
                'h_index_calculation_tracking',
                'journal_impact_factor_analysis',
                'altmetrics_social_impact',
                'research_influence_mapping',
                'temporal_impact_evolution'
            ]
        )
        
        # Collaboration network analysis
        archive_system['collaboration_network'] = self.implement_collaboration_tracking(
            archive_system,
            network_features=[
                'co_author_relationship_mapping',
                'institutional_collaboration_analysis',
                'international_partnership_tracking',
                'interdisciplinary_research_identification',
                'research_community_engagement',
                'knowledge_transfer_pathways'
            ]
        )
        
        return archive_system
    
    def organize_research_contributions(self, publication_records, research_themes, temporal_analysis):
        """Organize research contributions by themes, impact, and temporal evolution for comprehensive scholarly presentation."""
        
        research_organization = {
            'thematic_categorization': {},
            'temporal_evolution': {},
            'impact_stratification': {},
            'collaboration_analysis': {},
            'future_directions': {}
        }
        
        # Thematic research categorization
        research_organization['thematic_categorization'] = self.categorize_research_themes(
            publication_records, research_themes,
            categorization_methods=[
                'ai_ethics_responsibility_research',
                'language_technology_development',
                'big_data_interpretability_studies',
                'digital_rights_advocacy_papers',
                'philosophy_technology_integration',
                'human_centered_ai_frameworks'
            ]
        )
        
        # Temporal research evolution analysis
        research_organization['temporal_evolution'] = self.analyze_temporal_evolution(
            research_organization['thematic_categorization'], temporal_analysis,
            evolution_tracking=[
                'research_focus_progression',
                'methodology_advancement',
                'collaboration_network_growth',
                'impact_trajectory_analysis',
                'innovation_milestone_identification',
                'paradigm_shift_contributions'
            ]
        )
        
        # Impact-based research stratification
        research_organization['impact_stratification'] = self.stratify_research_impact(
            research_organization,
            stratification_criteria=[
                'high_impact_breakthrough_papers',
                'foundational_theoretical_contributions',
                'practical_application_developments',
                'policy_influence_publications',
                'educational_resource_contributions',
                'community_building_initiatives'
            ]
        )
        
        # Comprehensive collaboration analysis
        research_organization['collaboration_analysis'] = self.analyze_research_collaborations(
            research_organization,
            collaboration_dimensions=[
                'international_partnership_outcomes',
                'interdisciplinary_research_success',
                'mentorship_and_supervision_impact',
                'industry_academia_collaboration',
                'open_source_community_contributions',
                'knowledge_dissemination_effectiveness'
            ]
        )
        
        return research_organization
    
    def implement_advanced_archive_features(self, archive_system, user_requirements, accessibility_standards):
        """Implement advanced archive features with personalization, accessibility, and integration capabilities."""
        
        advanced_features = {
            'personalization_engine': {},
            'accessibility_compliance': {},
            'integration_apis': {},
            'visualization_tools': {},
            'export_formats': {}
        }
        
        # Intelligent personalization engine
        advanced_features['personalization_engine'] = self.build_personalization_engine(
            archive_system, user_requirements,
            personalization_features=[
                'user_interest_based_recommendations',
                'research_trajectory_suggestions',
                'collaboration_opportunity_identification',
                'trending_topic_notifications',
                'personalized_reading_lists',
                'adaptive_search_result_ranking'
            ]
        )
        
        # Comprehensive accessibility compliance
        advanced_features['accessibility_compliance'] = self.implement_accessibility_features(
            advanced_features['personalization_engine'], accessibility_standards,
            accessibility_components=[
                'screen_reader_optimization',
                'keyboard_navigation_support',
                'high_contrast_visual_modes',
                'multilingual_interface_support',
                'cognitive_accessibility_features',
                'assistive_technology_integration'
            ]
        )
        
        # Advanced visualization tools
        advanced_features['visualization_tools'] = self.build_visualization_suite(
            advanced_features,
            visualization_capabilities=[
                'interactive_citation_networks',
                'temporal_research_timelines',
                'collaboration_relationship_maps',
                'impact_evolution_charts',
                'thematic_research_landscapes',
                'comparative_analysis_dashboards'
            ]
        )
        
        # Comprehensive export and integration
        advanced_features['integration_apis'] = self.implement_integration_capabilities(
            advanced_features, accessibility_standards,
            integration_features=[
                'bibtex_citation_export',
                'orcid_profile_synchronization',
                'institutional_repository_integration',
                'social_media_sharing_optimization',
                'academic_cv_generation',
                'grant_application_support'
            ]
        )
        
        return advanced_features
    
    def evaluate_archive_effectiveness(self, usage_analytics, user_feedback, scholarly_impact):
        """Evaluate the effectiveness of publications archive in supporting research discovery and academic engagement."""
        
        effectiveness_evaluation = {
            'user_engagement': {},
            'research_discovery': {},
            'scholarly_impact': {},
            'system_performance': {},
            'continuous_improvement': {}
        }
        
        # User engagement and satisfaction analysis
        effectiveness_evaluation['user_engagement'] = self.assess_user_engagement(
            usage_analytics, user_feedback,
            engagement_metrics=[
                'archive_usage_frequency',
                'search_success_rates',
                'publication_download_patterns',
                'user_session_duration',
                'feature_utilization_depth',
                'user_satisfaction_scores'
            ]
        )
        
        # Research discovery and accessibility
        effectiveness_evaluation['research_discovery'] = self.measure_research_discovery(
            effectiveness_evaluation['user_engagement'], scholarly_impact,
            discovery_indicators=[
                'publication_visibility_enhancement',
                'cross_disciplinary_citation_increase',
                'international_collaboration_growth',
                'research_impact_amplification',
                'knowledge_transfer_effectiveness',
                'academic_network_expansion'
            ]
        )
        
        # Scholarly impact and recognition
        effectiveness_evaluation['scholarly_impact'] = self.evaluate_scholarly_impact(
            effectiveness_evaluation,
            impact_dimensions=[
                'citation_growth_acceleration',
                'research_influence_expansion',
                'academic_recognition_increase',
                'policy_influence_enhancement',
                'educational_resource_utilization',
                'community_engagement_deepening'
            ]
        )
        
        return effectiveness_evaluation
`;

export default function PublicationsArchive() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="neural" particleCount={130} />
      
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
              href="/academic"
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Academic Resources
            </Link>

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                Publications Archive: Comprehensive Research Portfolio &amp; Scholarly Contributions
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Updated January 2025
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  45+ Publications
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Export Bibliography
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Peer-Reviewed', 'Conference Papers', 'Technical Reports', 'Book Chapters', 'Open Access', 'Collaborative Research'].map((tag) => (
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
                Comprehensive archive of research publications spanning AI ethics, language technologies, 
                big data systems, and digital rights advocacy. Features advanced search capabilities, 
                impact analytics, collaboration networks, and scholarly contribution tracking across 
                peer-reviewed journals, conference proceedings, and collaborative research initiatives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Archive Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Publications Archive Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Publications Archive provides comprehensive access to research contributions 
                across AI ethics, language technologies, big data interpretability, and digital 
                rights advocacy. The archive features advanced search capabilities, impact analytics, 
                and collaboration network visualization to support scholarly discovery and engagement.
              </p>
              <p className="body-text text-research-text-secondary">
                With 45+ publications spanning peer-reviewed journals, conference proceedings, 
                technical reports, and collaborative research initiatives, the archive demonstrates 
                sustained scholarly contribution and international research collaboration across 
                multiple domains of technology philosophy and AI development.
              </p>
            </motion.div>

            {/* Search & Filter Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Search className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Advanced Search &amp; Discovery</h2>
              </div>
              
              {/* Search Interface */}
              <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-accent-ai-purple/20">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-research-text mb-2">Search Publications</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by title, keywords, authors, or abstract..."
                      className="w-full px-4 py-3 pl-12 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text placeholder-research-text-secondary focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20"
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-research-text-secondary" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Research Area</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>All Areas</option>
                      <option>AI Ethics</option>
                      <option>Language Technologies</option>
                      <option>Big Data Systems</option>
                      <option>Digital Rights</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Publication Type</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>All Types</option>
                      <option>Journal Articles</option>
                      <option>Conference Papers</option>
                      <option>Technical Reports</option>
                      <option>Book Chapters</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Year Range</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>All Years</option>
                      <option>2024-2025</option>
                      <option>2022-2023</option>
                      <option>2020-2021</option>
                      <option>2018-2019</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <button className="flex items-center px-4 py-2 bg-accent-ai-purple/20 text-accent-ai-purple rounded-lg border border-accent-ai-purple/30 hover:bg-accent-ai-purple/30 transition-all duration-200">
                    <Filter className="h-4 w-4 mr-2" />
                    High Impact
                  </button>
                  <button className="flex items-center px-4 py-2 bg-white/10 text-research-text-secondary rounded-lg border border-accent-ai-purple/20 hover:bg-white/20 transition-all duration-200">
                    <Calendar className="h-4 w-4 mr-2" />
                    Recent
                  </button>
                  <button className="flex items-center px-4 py-2 bg-white/10 text-research-text-secondary rounded-lg border border-accent-ai-purple/20 hover:bg-white/20 transition-all duration-200">
                    Open Access
                  </button>
                  <button className="flex items-center px-4 py-2 bg-white/10 text-research-text-secondary rounded-lg border border-accent-ai-purple/20 hover:bg-white/20 transition-all duration-200">
                    Collaborative
                  </button>
                </div>
                
                <div className="text-center">
                  <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-xl hover:shadow-ai-glow transition-all duration-300">
                    <Search className="h-5 w-5 mr-2" />
                    Search Publications
                  </button>
                </div>
              </div>
              
              <LottieAnimation 
                animationFile="publications-search-demo.json"
                className="mx-auto"
                width={800}
                height={400}
              />
            </motion.div>

            {/* Archive Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Publications Archive Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The publications archive architecture integrates research categorization, publication 
                management, and impact analytics to deliver comprehensive scholarly resource access. 
                The system emphasizes advanced search capabilities, collaboration network analysis, 
                and impact measurement for optimal research discovery and academic engagement.
              </p>
              
              <MermaidDiagram chart={publicationArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through five integrated layers: (1) research categories with 
                AI ethics, language technology, and big data focus, (2) publication management 
                with journals, conferences, and reports, (3) impact analytics with citation and 
                collaboration analysis, (4) comprehensive archive with database integration, 
                and (5) scholarly recognition with academic influence and knowledge contribution.
              </p>
            </motion.div>

            {/* Publication Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Research Impact &amp; Publication Metrics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive analysis of research impact, citation patterns, and scholarly 
                contribution across multiple domains. The metrics demonstrate sustained research 
                productivity, international collaboration, and significant influence in AI ethics, 
                language technologies, and digital rights advocacy fields.
              </p>
              
              <InteractiveChart
                dataFile="publications_impact_metrics.json"
                chartType="doughnut"
                title="Publications Impact &amp; Citation Analysis"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Research metrics show 45+ publications with 850+ citations, h-index of 18, 
                international collaboration rate of 65%, and significant policy influence 
                through digital rights advocacy and AI ethics framework development.
              </p>
            </motion.div>

            {/* Featured Publications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Featured Publications &amp; High-Impact Research</h2>
              <div className="space-y-6">
                <div className="expertise-card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-research-text mb-2">
                        &quot;Ethical Frameworks for Responsible AI: A Philosophical Approach to Machine Agency&quot;
                      </h3>
                      <p className="text-accent-ai-purple font-medium">Journal of AI Ethics • 2024</p>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-green-500/20 px-3 py-1 rounded-full">
                      High Impact
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Comprehensive examination of ethical frameworks for AI systems, exploring 
                    philosophical foundations of machine agency and responsibility in autonomous 
                    decision-making contexts.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Citations: 127</span>
                    <span>•</span>
                    <span>Downloads: 2,340</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">View PDF</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-research-text mb-2">
                        &quot;Multilingual Language Technologies: Cross-Cultural Communication in AI Systems&quot;
                      </h3>
                      <p className="text-accent-ai-purple font-medium">ACL Conference Proceedings • 2023</p>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-blue-500/20 px-3 py-1 rounded-full">
                      Conference
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Advanced research in multilingual natural language processing with focus 
                    on cross-cultural communication patterns and semantic understanding across 
                    diverse linguistic contexts.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Citations: 89</span>
                    <span>•</span>
                    <span>Downloads: 1,850</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">View PDF</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-research-text mb-2">
                        &quot;Big Data Interpretability: Making Complex Systems Transparent and Accountable&quot;
                      </h3>
                      <p className="text-accent-ai-purple font-medium">Nature Machine Intelligence • 2023</p>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-purple-500/20 px-3 py-1 rounded-full">
                      Open Access
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Methodological framework for enhancing interpretability in big data systems, 
                    with practical applications in explainable AI and transparent decision-making processes.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Citations: 156</span>
                    <span>•</span>
                    <span>Downloads: 3,120</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">View PDF</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technical Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Archive System Implementation</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates the comprehensive publications archive 
                system with advanced search capabilities, impact analytics, collaboration tracking, 
                and scholarly contribution management designed to support research discovery, 
                academic engagement, and knowledge dissemination across diverse research domains.
              </p>
              
              <CodeBlock
                code={archiveCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The archive framework provides systematic approaches to scholarly communication 
                that enable researchers to organize, discover, and analyze research contributions 
                effectively while supporting collaboration, impact measurement, and knowledge transfer.
              </p>
            </motion.div>

            {/* Research Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Research Categories &amp; Thematic Areas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">AI Ethics &amp; Responsibility</h3>
                  <p className="body-text text-research-text-secondary text-sm mb-3">
                    15 publications exploring ethical frameworks, algorithmic accountability, and responsible AI deployment.
                  </p>
                  <div className="text-xs text-research-text-secondary">
                    Recent: &quot;Machine Agency and Human Dignity&quot; (2024)
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Language Technologies</h3>
                  <p className="body-text text-research-text-secondary text-sm mb-3">
                    12 publications on multilingual NLP, cross-cultural communication, and semantic understanding.
                  </p>
                  <div className="text-xs text-research-text-secondary">
                    Recent: &quot;Semantic Interoperability in AI&quot; (2024)
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Big Data &amp; Interpretability</h3>
                  <p className="body-text text-research-text-secondary text-sm mb-3">
                    10 publications on data transparency, explainable AI, and interpretable machine learning.
                  </p>
                  <div className="text-xs text-research-text-secondary">
                    Recent: &quot;Transparent Data Pipelines&quot; (2023)
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Digital Rights &amp; Policy</h3>
                  <p className="body-text text-research-text-secondary text-sm mb-3">
                    8 publications on digital rights advocacy, privacy protection, and technology policy.
                  </p>
                  <div className="text-xs text-research-text-secondary">
                    Recent: &quot;AI Governance Frameworks&quot; (2024)
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Collaboration Networks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">International Collaboration Networks</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Academic Institutions</h3>
                  <p className="body-text text-research-text-secondary">
                    Collaborative research partnerships with leading universities including MIT, 
                    Stanford, Oxford, and ETH Zurich, focusing on AI ethics and language technologies.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Industry Partnerships</h3>
                  <p className="body-text text-research-text-secondary">
                    Joint research initiatives with technology companies and research labs, 
                    translating theoretical frameworks into practical AI applications and systems.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">International Organizations</h3>
                  <p className="body-text text-research-text-secondary">
                    Contributions to global initiatives including UNESCO AI Ethics, IEEE Standards, 
                    and digital rights organizations promoting responsible technology development.
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
                  href="/academic/cv"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous: CV
                </Link>
                
                <Link
                  href="/academic/collaborations"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next: Collaborations
                  <TrendingUp className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
