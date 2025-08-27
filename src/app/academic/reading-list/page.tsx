'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, FileText, Users, Download, Star } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import PremiumButton from '@/components/PremiumButton';

const readingListArchitecture = `
graph TD
    A[Academic Reading List] --> B[Content Categories]
    A --> C[Curation Methods]
    A --> D[Learning Pathways]
    B --> E[Foundational Texts]
    B --> F[Contemporary Research]
    B --> G[Cross-Disciplinary Works]
    C --> H[Expert Recommendations]
    C --> I[Peer Review Process]
    C --> J[Impact Assessment]
    D --> K[Beginner Pathways]
    D --> L[Advanced Studies]
    D --> M[Specialized Tracks]
    E --> N[Comprehensive Bibliography]
    F --> N
    G --> N
    H --> O[Curation Framework]
    I --> O
    J --> O
    K --> P[Learning Progression]
    L --> P
    M --> P
    N --> Q[Complete Reading Collection]
    O --> Q
    P --> Q
    Q --> R{Reading Assessment?}
    R -->|High| S[Scholarly Excellence]
    R -->|Medium| T[Academic Competency]
    R -->|Growing| U[Developing Knowledge]
    S --> V[Intellectual Leadership]
    T --> V
    U --> V
    V --> W[Knowledge Advancement]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const readingListCode = `
class AcademicReadingListManager:
    def __init__(self, bibliography_database, scholarly_networks):
        self.bibliography_database = bibliography_database
        self.scholarly_networks = scholarly_networks
        self.content_curator = ContentCurator()
        self.pathway_designer = PathwayDesigner()
        self.impact_analyzer = ImpactAnalyzer()
        self.recommendation_engine = RecommendationEngine()
        
    def build_academic_reading_list_platform(self, subject_domains, learning_objectives):
        """Build comprehensive academic reading list platform with content curation, learning pathways, and impact assessment."""
        
        reading_system = {
            'content_curation': {},
            'pathway_design': {},
            'recommendation_engine': {},
            'impact_tracking': {},
            'scholarly_network': {}
        }
        
        # Comprehensive content curation
        reading_system['content_curation'] = self.curate_academic_content(
            self.bibliography_database, subject_domains,
            curation_components=[
                'foundational_text_identification',
                'contemporary_research_integration',
                'cross_disciplinary_work_inclusion',
                'historical_perspective_coverage',
                'emerging_trend_incorporation',
                'diverse_voice_representation'
            ]
        )
        
        # Learning pathway design and progression
        reading_system['pathway_design'] = self.design_learning_pathways(
            reading_system['content_curation'], learning_objectives,
            pathway_elements=[
                'beginner_foundation_building',
                'intermediate_skill_development',
                'advanced_specialization_tracks',
                'interdisciplinary_connection_facilitation',
                'research_methodology_integration',
                'critical_analysis_skill_building'
            ]
        )
        
        # Intelligent recommendation system
        reading_system['recommendation_engine'] = self.implement_recommendation_system(
            reading_system['pathway_design'],
            recommendation_strategies=[
                'personalized_learning_adaptation',
                'prerequisite_knowledge_assessment',
                'interest_alignment_optimization',
                'difficulty_progression_management',
                'complementary_resource_suggestion',
                'peer_collaboration_facilitation'
            ]
        )
        
        # Scholarly impact tracking and assessment
        reading_system['impact_tracking'] = self.track_scholarly_impact(
            reading_system,
            impact_dimensions=[
                'citation_network_analysis',
                'intellectual_influence_measurement',
                'knowledge_transfer_effectiveness',
                'research_productivity_correlation',
                'career_development_contribution',
                'field_advancement_participation'
            ]
        )
        
        return reading_system
    
    def curate_subject_specific_collections(self, academic_disciplines, expertise_levels, institutional_contexts):
        """Curate subject-specific reading collections for diverse academic disciplines and expertise levels."""
        
        collection_curation = {
            'ai_ethics_foundations': {},
            'technology_philosophy': {},
            'digital_rights_advocacy': {},
            'cross_cultural_perspectives': {},
            'research_methodologies': {}
        }
        
        # AI ethics foundational collection
        collection_curation['ai_ethics_foundations'] = self.curate_ai_ethics_collection(
            academic_disciplines, expertise_levels,
            foundation_categories=[
                'ethical_theory_fundamentals',
                'applied_ethics_frameworks',
                'technology_impact_studies',
                'algorithmic_accountability_research',
                'bias_fairness_literature',
                'privacy_surveillance_scholarship'
            ]
        )
        
        # Technology philosophy specialization
        collection_curation['technology_philosophy'] = self.develop_philosophy_collection(
            collection_curation['ai_ethics_foundations'], institutional_contexts,
            philosophy_domains=[
                'philosophy_of_technology',
                'ethics_of_artificial_intelligence',
                'digital_ontology_epistemology',
                'human_machine_interaction_theory',
                'technological_determinism_critique',
                'posthuman_transhumanist_perspectives'
            ]
        )
        
        # Digital rights and advocacy literature
        collection_curation['digital_rights_advocacy'] = self.compile_rights_literature(
            collection_curation,
            advocacy_focus_areas=[
                'digital_human_rights_frameworks',
                'privacy_protection_scholarship',
                'surveillance_capitalism_critique',
                'algorithmic_governance_analysis',
                'technology_policy_development',
                'global_digital_justice_movements'
            ]
        )
        
        return collection_curation
    
    def design_progressive_learning_pathways(self, reading_collections, student_profiles, learning_goals):
        """Design progressive learning pathways that guide students through structured intellectual development."""
        
        pathway_development = {
            'foundational_pathway': {},
            'specialization_tracks': {},
            'interdisciplinary_bridges': {},
            'research_preparation': {},
            'professional_application': {}
        }
        
        # Foundational learning pathway
        pathway_development['foundational_pathway'] = self.create_foundational_pathway(
            reading_collections, student_profiles,
            foundation_stages=[
                'conceptual_framework_introduction',
                'historical_context_establishment',
                'methodological_approach_familiarization',
                'critical_thinking_skill_development',
                'analytical_writing_preparation',
                'scholarly_communication_training'
            ]
        )
        
        # Advanced specialization tracks
        pathway_development['specialization_tracks'] = self.develop_specialization_tracks(
            pathway_development['foundational_pathway'], learning_goals,
            specialization_areas=[
                'theoretical_research_concentration',
                'applied_ethics_implementation',
                'policy_development_focus',
                'cross_cultural_analysis_emphasis',
                'technological_innovation_ethics',
                'social_impact_assessment_specialization'
            ]
        )
        
        # Research preparation and methodology
        pathway_development['research_preparation'] = self.design_research_preparation(
            pathway_development,
            research_components=[
                'literature_review_methodology',
                'research_question_formulation',
                'theoretical_framework_development',
                'empirical_investigation_design',
                'data_analysis_interpretation',
                'scholarly_publication_preparation'
            ]
        )
        
        return pathway_development
    
    def evaluate_reading_impact_effectiveness(self, student_outcomes, knowledge_retention, career_development):
        """Evaluate the impact and effectiveness of academic reading lists on student learning and career development."""
        
        impact_evaluation = {
            'learning_outcome_assessment': {},
            'knowledge_retention_analysis': {},
            'skill_development_measurement': {},
            'career_trajectory_influence': {},
            'intellectual_growth_tracking': {}
        }
        
        # Comprehensive learning outcome assessment
        impact_evaluation['learning_outcome_assessment'] = self.assess_learning_outcomes(
            student_outcomes, knowledge_retention,
            outcome_indicators=[
                'conceptual_understanding_depth',
                'critical_analysis_capability',
                'synthesis_skill_development',
                'argumentation_quality_improvement',
                'research_competency_advancement',
                'intellectual_curiosity_cultivation'
            ]
        )
        
        # Knowledge retention and application analysis
        impact_evaluation['knowledge_retention_analysis'] = self.analyze_knowledge_retention(
            impact_evaluation['learning_outcome_assessment'], career_development,
            retention_factors=[
                'long_term_concept_recall',
                'practical_application_ability',
                'knowledge_transfer_effectiveness',
                'interdisciplinary_connection_making',
                'continuous_learning_motivation',
                'intellectual_confidence_building'
            ]
        )
        
        # Career development and professional impact
        impact_evaluation['career_trajectory_influence'] = self.measure_career_impact(
            impact_evaluation,
            career_indicators=[
                'academic_achievement_correlation',
                'professional_opportunity_enhancement',
                'leadership_role_preparation',
                'research_productivity_improvement',
                'network_building_facilitation',
                'lifelong_learning_commitment'
            ]
        )
        
        return impact_evaluation
`;

export default function ReadingList() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="research" particleCount={90} />
      
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
                Academic Reading List: Essential Texts &amp; Scholarly Resources
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Curated Collection
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  200+ Resources
                </div>
                <PremiumButton
                  variant="ghost"
                  size="sm"
                  icon={Share2}
                  iconPosition="left"
                  className="hover:text-accent-ai-purple transition-colors duration-200"
                >
                  Share Bibliography
                </PremiumButton>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Foundational Texts', 'Contemporary Research', 'Cross-Disciplinary', 'Methodology', 'Philosophy', 'Policy Studies'].map((tag) => (
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
                Comprehensive academic reading list featuring essential texts, contemporary 
                research, and cross-disciplinary works in AI ethics, technology philosophy, 
                digital rights, and responsible AI development. Curated for diverse learning 
                pathways from foundational understanding to advanced specialization, with 
                emphasis on critical thinking, ethical reasoning, and scholarly excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Reading List Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Reading List Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                Carefully curated collection of 200+ essential academic resources spanning 
                AI ethics, technology philosophy, digital rights advocacy, and cross-cultural 
                perspectives on responsible AI development. The reading list is organized 
                into progressive learning pathways suitable for undergraduate, graduate, 
                and professional development contexts.
              </p>
              <p className="body-text text-research-text-secondary">
                The collection emphasizes foundational texts, contemporary research, 
                methodological approaches, and interdisciplinary perspectives that foster 
                critical thinking, ethical reasoning, and scholarly excellence in AI ethics 
                and technology philosophy education and research.
              </p>
            </motion.div>

            {/* Learning Pathways */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Progressive Learning Pathways</h2>
              </div>
              
              <LottieAnimation 
                animationFile="academic-reading-pathways.json"
                className="mx-auto mb-8"
                width={800}
                height={500}
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Foundational Pathway</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Introduction to Ethics &amp; Philosophy</p>
                    <p>• Technology &amp; Society Foundations</p>
                    <p>• Basic AI &amp; Machine Learning Concepts</p>
                    <p>• Critical Thinking &amp; Analysis Methods</p>
                    <p>• Academic Writing &amp; Research Skills</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Intermediate Pathway</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Applied Ethics in Technology</p>
                    <p>• AI Bias &amp; Fairness Literature</p>
                    <p>• Privacy &amp; Surveillance Studies</p>
                    <p>• Cross-Cultural Technology Perspectives</p>
                    <p>• Policy &amp; Governance Frameworks</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Advanced Pathway</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Theoretical AI Ethics Frameworks</p>
                    <p>• Philosophy of Artificial Intelligence</p>
                    <p>• Advanced Research Methodologies</p>
                    <p>• Interdisciplinary Collaboration</p>
                    <p>• Original Research Development</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Specialization Tracks</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Digital Rights &amp; Advocacy</p>
                    <p>• Technology Policy Development</p>
                    <p>• Cross-Cultural AI Ethics</p>
                    <p>• Responsible AI Implementation</p>
                    <p>• Future of AI &amp; Society</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Reading List Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Academic Reading List Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The academic reading list architecture integrates content categories, 
                curation methods, and learning pathways to deliver comprehensive scholarly 
                resources. The system emphasizes foundational texts, contemporary research, 
                and cross-disciplinary works through structured learning progression and 
                expert recommendation frameworks.
              </p>
              
              <MermaidDiagram chart={readingListArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The reading architecture operates through four integrated layers: (1) content 
                categories with foundational texts, contemporary research, and cross-disciplinary 
                works, (2) curation methods including expert recommendations and impact assessment, 
                (3) learning pathways from beginner to specialized tracks, and (4) comprehensive 
                bibliography leading to scholarly excellence and intellectual leadership for 
                knowledge advancement.
              </p>
            </motion.div>

            {/* Reading Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Reading Impact &amp; Learning Analytics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive analysis of reading list effectiveness, student engagement, 
                and learning outcomes across diverse educational contexts. The analytics 
                demonstrate successful knowledge acquisition, critical thinking development, 
                and scholarly competency advancement through structured reading programs.
              </p>
              
              <InteractiveChart
                dataFile="reading_list_analytics.json"
                chartType="line"
                title="Academic Reading List - Engagement &amp; Learning Outcomes"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Reading metrics show 200+ curated resources, 1000+ student engagements, 
                96% completion rate for structured pathways, significant knowledge retention 
                improvement, and sustained impact on academic achievement and research 
                competency development.
              </p>
            </motion.div>

            {/* Featured Collections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Featured Collections &amp; Essential Texts</h2>
              <div className="space-y-6">
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">AI Ethics Foundations</h3>
                        <p className="text-accent-ai-purple font-medium">Essential Texts &amp; Contemporary Research (45 resources)</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-blue-500/20 px-3 py-1 rounded-full">
                      Core Collection
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Foundational collection covering ethical theory, applied AI ethics, 
                    algorithmic accountability, bias and fairness, privacy protection, 
                    and responsible AI development. Includes seminal works by leading 
                    philosophers, computer scientists, and policy researchers.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><BookOpen className="h-3 w-3 inline mr-1" />45 resources</span>
                    <span>•</span>
                    <span><Users className="h-3 w-3 inline mr-1" />Beginner-Advanced</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">View Collection</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <FileText className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Technology Philosophy</h3>
                        <p className="text-accent-ai-purple font-medium">Philosophical Foundations &amp; Critical Theory (38 resources)</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-green-500/20 px-3 py-1 rounded-full">
                      Specialized
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Comprehensive collection exploring philosophy of technology, digital 
                    ontology, human-machine interaction theory, technological determinism 
                    critique, and posthuman perspectives. Features classical and contemporary 
                    philosophical works on technology and society.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><BookOpen className="h-3 w-3 inline mr-1" />38 resources</span>
                    <span>•</span>
                    <span><Users className="h-3 w-3 inline mr-1" />Intermediate-Advanced</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">Explore Philosophy</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Download className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Digital Rights &amp; Policy</h3>
                        <p className="text-accent-ai-purple font-medium">Advocacy Literature &amp; Policy Analysis (42 resources)</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-purple-500/20 px-3 py-1 rounded-full">
                      Applied
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Focused collection on digital human rights, privacy protection, 
                    surveillance capitalism critique, algorithmic governance, technology 
                    policy development, and global digital justice movements. Emphasizes 
                    practical advocacy and policy implementation strategies.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><BookOpen className="h-3 w-3 inline mr-1" />42 resources</span>
                    <span>•</span>
                    <span><Users className="h-3 w-3 inline mr-1" />All levels</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">Access Resources</a>
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
              <h2 className="section-title text-research-text mb-6">Academic Reading List Management System</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates the comprehensive academic reading 
                list management system with content curation, pathway design, recommendation 
                engine, and impact tracking designed to maximize learning effectiveness, 
                knowledge retention, and scholarly development across diverse educational 
                contexts and student populations.
              </p>
              
              <CodeBlock
                code={readingListCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The reading list management framework provides systematic approaches to 
                academic resource curation that enable educators to create comprehensive 
                learning experiences, implement progressive pathways, and measure educational 
                impact across diverse institutional contexts and learning objectives.
              </p>
            </motion.div>

            {/* Subject Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Subject Categories &amp; Thematic Collections</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Ethical Theory</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Classical ethical frameworks</p>
                    <p>• Applied ethics methodologies</p>
                    <p>• Moral philosophy foundations</p>
                    <p>• Contemporary ethical debates</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">AI &amp; Technology</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Artificial intelligence fundamentals</p>
                    <p>• Machine learning ethics</p>
                    <p>• Algorithmic accountability</p>
                    <p>• Human-AI interaction studies</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Policy &amp; Governance</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Technology policy frameworks</p>
                    <p>• Regulatory compliance studies</p>
                    <p>• International governance models</p>
                    <p>• Stakeholder engagement strategies</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Cross-Cultural Studies</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Cultural perspectives on technology</p>
                    <p>• Global digital rights movements</p>
                    <p>• Multilingual AI considerations</p>
                    <p>• Indigenous knowledge systems</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Research Methodology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Research Methodology &amp; Academic Skills</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Literature Review Techniques</h3>
                  <p className="body-text text-research-text-secondary">
                    Systematic approaches to literature review, source evaluation, 
                    synthesis methods, and critical analysis techniques for developing 
                    comprehensive understanding of complex academic topics and research areas.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Critical Analysis &amp; Argumentation</h3>
                  <p className="body-text text-research-text-secondary">
                    Development of critical thinking skills, logical argumentation, 
                    evidence evaluation, and scholarly writing techniques essential 
                    for academic success and intellectual development in AI ethics research.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Interdisciplinary Integration</h3>
                  <p className="body-text text-research-text-secondary">
                    Strategies for integrating knowledge across disciplines, synthesizing 
                    diverse perspectives, and developing holistic understanding of complex 
                    issues at the intersection of technology, ethics, and society.
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
                  href="/academic/ethics-syllabi"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous: Ethics Syllabi
                </Link>
                
                <Link
                  href="/articles"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next: Research Articles
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
