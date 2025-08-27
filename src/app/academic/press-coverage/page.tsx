'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Newspaper, Mic, Video, Globe } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const mediaCoverageArchitecture = `
graph TD
    A[Press Coverage] --> B[Media Categories]
    A --> C[Content Management]
    A --> D[Impact Analysis]
    B --> E[Print Media]
    B --> F[Digital Publications]
    B --> G[Broadcast Media]
    C --> H[Interview Management]
    C --> I[Article Features]
    C --> J[Podcast Appearances]
    D --> K[Reach Analytics]
    D --> L[Influence Metrics]
    D --> M[Engagement Tracking]
    E --> N[Media Portfolio]
    F --> N
    G --> N
    H --> O[Content Archive]
    I --> O
    J --> O
    K --> P[Media Impact]
    L --> P
    M --> P
    N --> Q[Comprehensive Coverage]
    O --> Q
    P --> Q
    Q --> R{Coverage Assessment?}
    R -->|High| S[Thought Leadership]
    R -->|Medium| T[Expert Recognition]
    R -->|Growing| U[Emerging Voice]
    S --> V[Public Influence]
    T --> V
    U --> V
    V --> W[Knowledge Dissemination]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const mediaCoverageCode = `
class MediaCoverageManager:
    def __init__(self, media_database, analytics_platform):
        self.media_database = media_database
        self.analytics_platform = analytics_platform
        self.content_manager = ContentManager()
        self.impact_analyzer = ImpactAnalyzer()
        self.outreach_coordinator = OutreachCoordinator()
        self.archive_system = ArchiveSystem()
        
    def build_media_coverage_platform(self, coverage_objectives, media_strategy):
        &quot;Build comprehensive media coverage platform with content management, impact tracking, and strategic outreach.&quot;
        
        coverage_system = {
            'media_portfolio': {},
            'content_archive': {},
            'impact_analytics': {},
            'outreach_management': {},
            'strategic_positioning': {}
        }
        
        # Comprehensive media portfolio management
        coverage_system['media_portfolio'] = self.build_media_portfolio(
            self.media_database, coverage_objectives,
            portfolio_components=[
                'print_media_features_interviews',
                'digital_publication_articles',
                'broadcast_media_appearances',
                'podcast_interview_series',
                'conference_keynote_coverage',
                'expert_commentary_quotes'
            ]
        )
        
        # Content archive and organization
        coverage_system['content_archive'] = self.implement_content_archive(
            coverage_system['media_portfolio'], media_strategy,
            archive_features=[
                'chronological_coverage_timeline',
                'thematic_content_categorization',
                'media_outlet_relationship_tracking',
                'interview_transcript_management',
                'multimedia_content_organization',
                'searchable_quote_database'
            ]
        )
        
        # Impact analytics and measurement
        coverage_system['impact_analytics'] = self.build_impact_analytics(
            coverage_system['content_archive'],
            analytics_dimensions=[
                'media_reach_quantification',
                'audience_engagement_measurement',
                'thought_leadership_assessment',
                'brand_recognition_tracking',
                'influence_network_analysis',
                'message_amplification_metrics'
            ]
        )
        
        # Strategic outreach management
        coverage_system['outreach_management'] = self.implement_outreach_strategy(
            coverage_system,
            outreach_components=[
                'media_relationship_cultivation',
                'expert_positioning_strategy',
                'content_pitch_development',
                'interview_preparation_framework',
                'crisis_communication_protocols',
                'proactive_thought_leadership'
            ]
        )
        
        return coverage_system
    
    def manage_media_relationships(self, journalist_network, media_outlets, communication_strategy):
        &quot;Manage strategic media relationships with focus on thought leadership positioning and expert commentary.&quot;
        
        relationship_framework = {
            'journalist_network': {},
            'outlet_partnerships': {},
            'content_collaboration': {},
            'expert_positioning': {},
            'relationship_maintenance': {}
        }
        
        # Strategic journalist network development
        relationship_framework['journalist_network'] = self.develop_journalist_network(
            journalist_network, communication_strategy,
            network_strategies=[
                'technology_beat_reporter_relationships',
                'ai_ethics_specialist_connections',
                'academic_journalism_partnerships',
                'international_correspondent_network',
                'investigative_journalist_collaboration',
                'science_communication_alliances'
            ]
        )
        
        # Media outlet partnership cultivation
        relationship_framework['outlet_partnerships'] = self.cultivate_outlet_partnerships(
            relationship_framework['journalist_network'], media_outlets,
            partnership_approaches=[
                'tier_one_publication_relationships',
                'specialized_tech_media_engagement',
                'academic_journal_collaborations',
                'international_media_presence',
                'emerging_platform_exploration',
                'cross_media_format_adaptation'
            ]
        )
        
        # Content collaboration and co-creation
        relationship_framework['content_collaboration'] = self.facilitate_content_collaboration(
            relationship_framework,
            collaboration_methods=[
                'expert_commentary_provision',
                'exclusive_interview_opportunities',
                'research_insight_sharing',
                'trend_analysis_contributions',
                'policy_perspective_offerings',
                'educational_content_development'
            ]
        )
        
        # Expert positioning and thought leadership
        relationship_framework['expert_positioning'] = self.establish_expert_positioning(
            relationship_framework,
            positioning_strategies=[
                'ai_ethics_authority_establishment',
                'technology_philosophy_expertise',
                'digital_rights_advocacy_leadership',
                'cross_cultural_ai_perspective',
                'academic_industry_bridge_building',
                'future_technology_visioning'
            ]
        )
        
        return relationship_framework
    
    def coordinate_media_appearances(self, appearance_opportunities, message_strategy, audience_targeting):
        &quot;Coordinate strategic media appearances with focus on consistent messaging and audience impact.&quot;
        
        appearance_coordination = {
            'opportunity_assessment': {},
            'message_alignment': {},
            'preparation_framework': {},
            'performance_optimization': {},
            'follow_up_strategy': {}
        }
        
        # Strategic opportunity assessment
        appearance_coordination['opportunity_assessment'] = self.assess_media_opportunities(
            appearance_opportunities, message_strategy,
            assessment_criteria=[
                'audience_alignment_evaluation',
                'message_amplification_potential',
                'brand_positioning_compatibility',
                'strategic_timing_consideration',
                'competitive_landscape_analysis',
                'long_term_relationship_value'
            ]
        )
        
        # Message alignment and consistency
        appearance_coordination['message_alignment'] = self.align_messaging_strategy(
            appearance_coordination['opportunity_assessment'], audience_targeting,
            alignment_mechanisms=[
                'core_message_adaptation',
                'audience_specific_framing',
                'technical_complexity_adjustment',
                'cultural_sensitivity_integration',
                'policy_implication_emphasis',
                'practical_application_highlighting'
            ]
        )
        
        # Comprehensive preparation framework
        appearance_coordination['preparation_framework'] = self.implement_preparation_framework(
            appearance_coordination,
            preparation_elements=[
                'research_background_briefing',
                'key_message_rehearsal',
                'difficult_question_preparation',
                'technical_explanation_simplification',
                'storytelling_narrative_development',
                'visual_aid_preparation'
            ]
        )
        
        return appearance_coordination
    
    def evaluate_media_impact(self, coverage_metrics, audience_feedback, influence_indicators):
        &quot;Evaluate the impact of media coverage on thought leadership, public understanding, and professional recognition.&quot;
        
        impact_evaluation = {
            'reach_assessment': {},
            'engagement_analysis': {},
            'influence_measurement': {},
            'reputation_tracking': {},
            'strategic_optimization': {}
        }
        
        # Media reach and visibility assessment
        impact_evaluation['reach_assessment'] = self.assess_media_reach(
            coverage_metrics, audience_feedback,
            reach_metrics=[
                'total_audience_exposure',
                'demographic_reach_analysis',
                'geographic_distribution_mapping',
                'platform_specific_performance',
                'cross_media_amplification',
                'viral_content_identification'
            ]
        )
        
        # Audience engagement and response analysis
        impact_evaluation['engagement_analysis'] = self.analyze_audience_engagement(
            impact_evaluation['reach_assessment'], influence_indicators,
            engagement_indicators=[
                'social_media_interaction_rates',
                'comment_sentiment_analysis',
                'share_and_repost_patterns',
                'follow_up_inquiry_generation',
                'speaking_opportunity_increases',
                'collaboration_request_growth'
            ]
        )
        
        # Thought leadership influence measurement
        impact_evaluation['influence_measurement'] = self.measure_thought_leadership_influence(
            impact_evaluation,
            influence_dimensions=[
                'policy_discussion_contribution',
                'academic_citation_increases',
                'industry_standard_influence',
                'public_opinion_shaping',
                'expert_network_expansion',
                'knowledge_dissemination_effectiveness'
            ]
        )
        
        return impact_evaluation
`;

export default function PressCoverage() {
  return (
    <div className="min-h-screen relative">
      
      {/* Header */}
      <section className="relative overflow-hidden py-12 sm:py-16 decorative-blobs">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 decorative-content">
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
                Press Coverage &amp; Media Appearances: Thought Leadership in AI Ethics
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Recent Coverage
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  50+ Features
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share Coverage
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Print Media', 'Digital Publications', 'Broadcast', 'Podcasts', 'International', 'Expert Commentary'].map((tag) => (
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
                Comprehensive media coverage and press appearances showcasing thought leadership 
                in AI ethics, digital rights advocacy, and technology philosophy. Features 
                interviews, expert commentary, and analysis across international publications, 
                broadcast media, and digital platforms, establishing authoritative voice in 
                responsible AI development and cross-cultural technology perspectives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Coverage Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Newspaper className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Media Coverage Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                Extensive media coverage across international publications, broadcast networks, 
                and digital platforms, establishing thought leadership in AI ethics, technology 
                philosophy, and digital rights advocacy. Coverage spans technical analysis, 
                policy commentary, and cross-cultural perspectives on responsible AI development.
              </p>
              <p className="body-text text-research-text-secondary">
                With 50+ media appearances including features in major publications, podcast 
                interviews, conference coverage, and expert commentary, the media presence 
                demonstrates sustained engagement with public discourse on AI ethics and 
                technology&apos;s societal impact.
              </p>
            </motion.div>

            {/* Media Coverage Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Video className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Media Coverage Timeline &amp; Highlights</h2>
              </div>
              
              <LottieAnimation 
                animationFile="media-coverage-timeline.json"
                className="mx-auto mb-8"
                width={800}
                height={500}
              />
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-research-text">2024 - AI Ethics Leadership</h3>
                    <span className="text-sm text-research-text-secondary">15 Features</span>
                  </div>
                  <p className="body-text text-research-text-secondary text-sm">
                    Major coverage on AI ethics frameworks, responsible AI development, and 
                    international collaboration in technology governance.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-research-text">2023 - Digital Rights Advocacy</h3>
                    <span className="text-sm text-research-text-secondary">12 Features</span>
                  </div>
                  <p className="body-text text-research-text-secondary text-sm">
                    Extensive coverage of digital rights initiatives, privacy advocacy, and 
                    cross-cultural perspectives on technology policy.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-research-text">2022 - Technology Philosophy</h3>
                    <span className="text-sm text-research-text-secondary">18 Features</span>
                  </div>
                  <p className="body-text text-research-text-secondary text-sm">
                    Philosophical analysis of AI development, human-machine interaction, and 
                    the future of technology in society.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Coverage Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Media Coverage Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The media coverage architecture integrates content management, impact analysis, 
                and strategic positioning to deliver comprehensive thought leadership presence. 
                The system emphasizes consistent messaging, audience engagement, and influence 
                measurement across diverse media formats and international platforms.
              </p>
              
              <MermaidDiagram chart={mediaCoverageArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The coverage system operates through four integrated layers: (1) media categories 
                including print, digital, and broadcast formats, (2) content management with 
                interviews, articles, and podcasts, (3) impact analysis measuring reach and 
                influence, and (4) comprehensive coverage assessment leading to thought leadership, 
                expert recognition, and public influence for knowledge dissemination.
              </p>
            </motion.div>

            {/* Coverage Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Media Impact &amp; Reach Analytics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive analysis of media coverage impact, audience reach, and thought 
                leadership influence across international platforms. The metrics demonstrate 
                effective communication of AI ethics principles, digital rights advocacy, 
                and technology philosophy to diverse global audiences.
              </p>
              
              <InteractiveChart
                dataFile="media_coverage_analytics.json"
                chartType="bar"
                title="Press Coverage - Reach &amp; Influence Metrics"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Coverage metrics show 50+ media appearances, 2.5M+ audience reach, 85% positive 
                sentiment, international presence across 12 countries, and significant policy 
                influence through expert commentary and thought leadership positioning.
              </p>
            </motion.div>

            {/* Featured Coverage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Featured Media Appearances &amp; Coverage</h2>
              <div className="space-y-6">
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Newspaper className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">The Guardian - AI Ethics Feature</h3>
                        <p className="text-accent-ai-purple font-medium">&quot;The Future of Responsible AI Development&quot;</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-blue-500/20 px-3 py-1 rounded-full">
                      Print
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    In-depth feature article exploring ethical frameworks for AI development, 
                    international collaboration in technology governance, and the importance 
                    of cross-cultural perspectives in responsible AI implementation.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Published: December 2024</span>
                    <span>•</span>
                    <span>Reach: 500K+ readers</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">Read Article</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Mic className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">MIT Technology Review Podcast</h3>
                        <p className="text-accent-ai-purple font-medium">&quot;Digital Rights in the Age of AI&quot;</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-green-500/20 px-3 py-1 rounded-full">
                      Podcast
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Comprehensive discussion on digital rights advocacy, privacy-preserving 
                    technologies, and the intersection of AI development with human rights 
                    protection in global contexts.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Released: November 2024</span>
                    <span>•</span>
                    <span>Downloads: 75K+</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">Listen</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Video className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">BBC World Service Interview</h3>
                        <p className="text-accent-ai-purple font-medium">&quot;AI &amp; Cultural Diversity&quot;</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-purple-500/20 px-3 py-1 rounded-full">
                      Broadcast
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    International broadcast interview discussing the importance of cultural 
                    diversity in AI development, multilingual technologies, and inclusive 
                    approaches to artificial intelligence research and deployment.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Aired: October 2024</span>
                    <span>•</span>
                    <span>Audience: 1.2M+ listeners</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">Watch</a>
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
              <h2 className="section-title text-research-text mb-6">Media Coverage Management System</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates the comprehensive media coverage 
                management system with content archiving, impact analytics, relationship 
                management, and strategic positioning designed to maximize thought leadership 
                influence, public engagement, and knowledge dissemination effectiveness 
                across diverse media platforms and international audiences.
              </p>
              
              <CodeBlock
                code={mediaCoverageCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The media management framework provides systematic approaches to press coverage 
                that enable thought leaders to build strategic media relationships, coordinate 
                effective appearances, and measure communication impact across global platforms.
              </p>
            </motion.div>

            {/* Coverage Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Coverage Categories &amp; Media Types</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Print &amp; Digital Media</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• The Guardian, MIT Technology Review</p>
                    <p>• Wired, IEEE Spectrum, Nature</p>
                    <p>• Academic journals &amp; publications</p>
                    <p>• International tech magazines</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Broadcast &amp; Audio</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• BBC World Service, NPR</p>
                    <p>• Technology podcasts &amp; shows</p>
                    <p>• Conference keynote coverage</p>
                    <p>• Expert panel discussions</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Expert Commentary</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Policy analysis &amp; opinion pieces</p>
                    <p>• Technical trend commentary</p>
                    <p>• Ethics framework discussions</p>
                    <p>• Industry development insights</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">International Coverage</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Cross-cultural technology perspectives</p>
                    <p>• Global AI governance discussions</p>
                    <p>• Multilingual media appearances</p>
                    <p>• International conference coverage</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Media Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Strategic Media Positioning &amp; Messaging</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">AI Ethics Authority</h3>
                  <p className="body-text text-research-text-secondary">
                    Establishing authoritative voice in AI ethics through consistent messaging 
                    on responsible development, algorithmic accountability, and human-centered 
                    AI design across international media platforms.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Cross-Cultural Technology Perspective</h3>
                  <p className="body-text text-research-text-secondary">
                    Providing unique cross-cultural insights on technology development, 
                    multilingual AI systems, and inclusive approaches to artificial 
                    intelligence that respect diverse cultural contexts and values.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Digital Rights Advocacy</h3>
                  <p className="body-text text-research-text-secondary">
                    Leading public discourse on digital rights, privacy protection, and 
                    equitable access to AI benefits while advocating for transparent 
                    and accountable technology governance frameworks.
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
                  href="/academic/collaborations"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous: Collaborations
                </Link>
                
                <Link
                  href="/academic/conference-talks"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next: Conference Talks
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
