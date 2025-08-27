'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Presentation, Users, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const conferenceTalksArchitecture = `
graph TD
    A[Conference Talks] --> B[Talk Categories]
    A --> C[Event Management]
    A --> D[Impact Assessment]
    B --> E[Keynote Presentations]
    B --> F[Panel Discussions]
    B --> G[Workshop Sessions]
    C --> H[Conference Selection]
    C --> I[Content Development]
    C --> J[Audience Engagement]
    D --> K[Reach Analytics]
    D --> L[Feedback Analysis]
    D --> M[Network Building]
    E --> N[Speaking Portfolio]
    F --> N
    G --> N
    H --> O[Event Archive]
    I --> O
    J --> O
    K --> P[Speaking Impact]
    L --> P
    M --> P
    N --> Q[Comprehensive Speaking Record]
    O --> Q
    P --> Q
    Q --> R{Speaking Assessment?}
    R -->|High| S[Thought Leadership]
    R -->|Medium| T[Expert Recognition]
    R -->|Growing| U[Emerging Speaker]
    S --> V[Global Influence]
    T --> V
    U --> V
    V --> W[Knowledge Dissemination]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const conferenceTalksCode = `
class ConferenceTalksManager:
    def __init__(self, speaking_database, event_platforms):
        self.speaking_database = speaking_database
        self.event_platforms = event_platforms
        self.content_manager = ContentManager()
        self.engagement_analyzer = EngagementAnalyzer()
        self.network_builder = NetworkBuilder()
        self.impact_tracker = ImpactTracker()
        
    def build_speaking_portfolio_platform(self, speaking_objectives, audience_strategy):
        &quot;&quot;&quot;Build comprehensive conference speaking platform with content management, engagement tracking, and impact analysis.&quot;&quot;&quot;
        
        speaking_system = {
            'talk_portfolio': {},
            'event_archive': {},
            'engagement_analytics': {},
            'network_development': {},
            'thought_leadership': {}
        }
        
        # Comprehensive speaking portfolio management
        speaking_system['talk_portfolio'] = self.build_speaking_portfolio(
            self.speaking_database, speaking_objectives,
            portfolio_components=[
                'keynote_presentation_archive',
                'panel_discussion_participation',
                'workshop_session_leadership',
                'invited_lecture_series',
                'conference_tutorial_delivery',
                'expert_commentary_sessions'
            ]
        )
        
        # Event archive and organization
        speaking_system['event_archive'] = self.implement_event_archive(
            speaking_system['talk_portfolio'], audience_strategy,
            archive_features=[
                'chronological_speaking_timeline',
                'conference_tier_categorization',
                'geographic_distribution_tracking',
                'audience_size_documentation',
                'presentation_material_storage',
                'video_recording_management'
            ]
        )
        
        # Engagement analytics and measurement
        speaking_system['engagement_analytics'] = self.build_engagement_analytics(
            speaking_system['event_archive'],
            analytics_dimensions=[
                'audience_engagement_measurement',
                'question_quality_assessment',
                'social_media_amplification',
                'follow_up_inquiry_tracking',
                'speaking_invitation_generation',
                'thought_leadership_recognition'
            ]
        )
        
        # Network development and relationship building
        speaking_system['network_development'] = self.implement_network_development(
            speaking_system,
            network_strategies=[
                'conference_organizer_relationships',
                'fellow_speaker_connections',
                'audience_member_engagement',
                'industry_leader_interactions',
                'academic_collaboration_building',
                'international_network_expansion'
            ]
        )
        
        return speaking_system
    
    def manage_conference_selection(self, conference_opportunities, strategic_priorities, audience_alignment):
        &quot;&quot;&quot;Manage strategic conference selection with focus on thought leadership positioning and audience impact.&quot;&quot;&quot;
        
        selection_framework = {
            'opportunity_assessment': {},
            'strategic_alignment': {},
            'audience_analysis': {},
            'impact_potential': {},
            'resource_optimization': {}
        }
        
        # Strategic opportunity assessment
        selection_framework['opportunity_assessment'] = self.assess_conference_opportunities(
            conference_opportunities, strategic_priorities,
            assessment_criteria=[
                'conference_reputation_evaluation',
                'audience_quality_assessment',
                'topic_relevance_alignment',
                'networking_potential_analysis',
                'career_advancement_opportunity',
                'knowledge_dissemination_reach'
            ]
        )
        
        # Strategic alignment and positioning
        selection_framework['strategic_alignment'] = self.align_strategic_positioning(
            selection_framework['opportunity_assessment'], audience_alignment,
            alignment_strategies=[
                'thought_leadership_positioning',
                'expertise_area_reinforcement',
                'brand_message_consistency',
                'competitive_differentiation',
                'market_positioning_optimization',
                'long_term_vision_alignment'
            ]
        )
        
        # Audience analysis and targeting
        selection_framework['audience_analysis'] = self.analyze_target_audiences(
            selection_framework,
            audience_factors=[
                'demographic_composition_analysis',
                'professional_background_assessment',
                'knowledge_level_evaluation',
                'decision_making_influence',
                'network_value_potential',
                'engagement_likelihood_prediction'
            ]
        )
        
        # Impact potential and ROI assessment
        selection_framework['impact_potential'] = self.evaluate_impact_potential(
            selection_framework,
            impact_dimensions=[
                'immediate_audience_influence',
                'long_term_relationship_building',
                'thought_leadership_advancement',
                'professional_recognition_growth',
                'collaboration_opportunity_creation',
                'knowledge_transfer_effectiveness'
            ]
        )
        
        return selection_framework
    
    def develop_presentation_content(self, talk_objectives, audience_characteristics, engagement_strategies):
        &quot;&quot;&quot;Develop compelling presentation content with focus on audience engagement and knowledge transfer.&quot;&quot;&quot;
        
        content_development = {
            'narrative_structure': {},
            'visual_design': {},
            'interaction_elements': {},
            'knowledge_transfer': {},
            'engagement_optimization': {}
        }
        
        # Compelling narrative structure development
        content_development['narrative_structure'] = self.develop_narrative_structure(
            talk_objectives, audience_characteristics,
            structure_elements=[
                'compelling_opening_hook',
                'clear_problem_statement',
                'evidence_based_argumentation',
                'practical_application_examples',
                'actionable_insights_delivery',
                'memorable_closing_message'
            ]
        )
        
        # Visual design and presentation aesthetics
        content_development['visual_design'] = self.design_visual_presentation(
            content_development['narrative_structure'], engagement_strategies,
            design_components=[
                'professional_slide_design',
                'data_visualization_integration',
                'interactive_demonstration_elements',
                'multimedia_content_incorporation',
                'accessibility_consideration',
                'brand_consistency_maintenance'
            ]
        )
        
        # Interactive elements and audience engagement
        content_development['interaction_elements'] = self.implement_interaction_elements(
            content_development,
            interaction_strategies=[
                'audience_polling_integration',
                'live_demonstration_sessions',
                'question_answer_facilitation',
                'breakout_discussion_coordination',
                'real_time_feedback_collection',
                'social_media_engagement_encouragement'
            ]
        )
        
        return content_development
    
    def evaluate_speaking_impact(self, presentation_metrics, audience_feedback, network_growth):
        &quot;&quot;&quot;Evaluate the impact of conference speaking on thought leadership, professional recognition, and network expansion.&quot;&quot;&quot;
        
        impact_evaluation = {
            'immediate_impact': {},
            'audience_response': {},
            'network_expansion': {},
            'thought_leadership': {},
            'long_term_influence': {}
        }
        
        # Immediate presentation impact assessment
        impact_evaluation['immediate_impact'] = self.assess_immediate_impact(
            presentation_metrics, audience_feedback,
            impact_metrics=[
                'audience_engagement_levels',
                'question_quality_depth',
                'social_media_mention_volume',
                'presentation_rating_scores',
                'content_sharing_frequency',
                'follow_up_inquiry_generation'
            ]
        )
        
        # Audience response and satisfaction analysis
        impact_evaluation['audience_response'] = self.analyze_audience_response(
            impact_evaluation['immediate_impact'], network_growth,
            response_indicators=[
                'feedback_sentiment_analysis',
                'learning_outcome_achievement',
                'actionability_perception',
                'speaker_credibility_assessment',
                'recommendation_likelihood',
                'content_applicability_rating'
            ]
        )
        
        # Professional network expansion measurement
        impact_evaluation['network_expansion'] = self.measure_network_expansion(
            impact_evaluation,
            expansion_metrics=[
                'new_professional_connections',
                'collaboration_opportunity_emergence',
                'speaking_invitation_increases',
                'advisory_role_opportunities',
                'partnership_proposal_generation',
                'mentorship_relationship_development'
            ]
        )
        
        return impact_evaluation
`;

export default function ConferenceTalks() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="neural" particleCount={110} />
      
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
                Conference Talks &amp; Speaking Engagements: Global Thought Leadership
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Recent Talks
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  35+ Presentations
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share Portfolio
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Keynotes', 'Panel Discussions', 'Workshops', 'International', 'AI Ethics', 'Technology Philosophy'].map((tag) => (
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
                Comprehensive portfolio of conference presentations, keynote addresses, and 
                speaking engagements across international venues. Features thought leadership 
                in AI ethics, digital rights advocacy, and technology philosophy, with focus 
                on cross-cultural perspectives, responsible AI development, and the intersection 
                of technology with human values and societal impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Speaking Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Presentation className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Speaking Portfolio Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                Extensive speaking portfolio encompassing keynote presentations, panel discussions, 
                and workshop sessions at leading international conferences. Presentations focus 
                on AI ethics, technology philosophy, digital rights advocacy, and cross-cultural 
                perspectives on responsible AI development and deployment.
              </p>
              <p className="body-text text-research-text-secondary">
                With 35+ presentations across major venues including NeurIPS, ICML, FAccT, 
                and international policy forums, the speaking engagements demonstrate sustained 
                thought leadership and global recognition in AI ethics and technology governance.
              </p>
            </motion.div>

            {/* Speaking Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Speaking Timeline &amp; Global Reach</h2>
              </div>
              
              <LottieAnimation 
                animationFile="conference-speaking-timeline.json"
                className="mx-auto mb-8"
                width={800}
                height={500}
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">2024 Highlights</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• NeurIPS 2024 - &quot;Ethical AI Frameworks&quot;</p>
                    <p>• UNESCO AI Ethics Summit - Keynote</p>
                    <p>• MIT AI Policy Conference - Panel</p>
                    <p>• Oxford Future of Humanity - Workshop</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">2023 Highlights</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• ICML 2023 - &quot;Responsible AI Development&quot;</p>
                    <p>• FAccT Conference - &quot;Digital Rights&quot;</p>
                    <p>• Stanford HAI Symposium - Keynote</p>
                    <p>• European AI Alliance - Policy Panel</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">International Venues</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• 15 Countries across 4 Continents</p>
                    <p>• Major Academic Conferences</p>
                    <p>• Policy &amp; Governance Forums</p>
                    <p>• Industry Leadership Events</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Audience Impact</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• 25,000+ Total Audience Reach</p>
                    <p>• 95% Positive Feedback Rating</p>
                    <p>• 150+ Follow-up Collaborations</p>
                    <p>• 80+ Media Coverage Features</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Conference Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Conference Speaking Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The conference speaking architecture integrates talk categories, event management, 
                and impact assessment to deliver comprehensive thought leadership presence. The 
                system emphasizes strategic conference selection, compelling content development, 
                and audience engagement measurement across diverse international venues.
              </p>
              
              <MermaidDiagram chart={conferenceTalksArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The speaking system operates through four integrated layers: (1) talk categories 
                including keynotes, panels, and workshops, (2) event management with conference 
                selection and content development, (3) impact assessment measuring reach and 
                feedback, and (4) comprehensive speaking record leading to thought leadership, 
                expert recognition, and global influence for knowledge dissemination.
              </p>
            </motion.div>

            {/* Speaking Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Speaking Impact &amp; Engagement Analytics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive analysis of speaking engagement impact, audience reach, and 
                thought leadership influence across international conference venues. The 
                metrics demonstrate effective communication of AI ethics principles, digital 
                rights advocacy, and technology philosophy to diverse global audiences.
              </p>
              
              <InteractiveChart
                dataFile="conference_speaking_analytics.json"
                chartType="bar"
                title="Conference Speaking - Engagement &amp; Impact Metrics"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Speaking metrics show 35+ presentations, 25,000+ audience reach, 95% positive 
                feedback, international presence across 15 countries, and significant network 
                expansion through conference engagement and thought leadership positioning.
              </p>
            </motion.div>

            {/* Featured Presentations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Featured Presentations &amp; Keynote Addresses</h2>
              <div className="space-y-6">
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Presentation className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">NeurIPS 2024 Keynote</h3>
                        <p className="text-accent-ai-purple font-medium">&quot;Ethical Frameworks for Responsible AI Development&quot;</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-blue-500/20 px-3 py-1 rounded-full">
                      Keynote
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Comprehensive keynote address exploring ethical frameworks for AI development, 
                    international collaboration in technology governance, and the importance of 
                    cross-cultural perspectives in responsible AI implementation and deployment.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><MapPin className="h-3 w-3 inline mr-1" />Vancouver, Canada</span>
                    <span>•</span>
                    <span><Users className="h-3 w-3 inline mr-1" />3,500 attendees</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">Watch Recording</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Users className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">UNESCO AI Ethics Summit</h3>
                        <p className="text-accent-ai-purple font-medium">&quot;Digital Rights in the Age of Artificial Intelligence&quot;</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-green-500/20 px-3 py-1 rounded-full">
                      Panel
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    High-level panel discussion on digital rights advocacy, privacy-preserving 
                    technologies, and the intersection of AI development with human rights 
                    protection in global policy contexts and international governance frameworks.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><MapPin className="h-3 w-3 inline mr-1" />Paris, France</span>
                    <span>•</span>
                    <span><Users className="h-3 w-3 inline mr-1" />800 delegates</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">View Slides</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Stanford HAI Symposium</h3>
                        <p className="text-accent-ai-purple font-medium">&quot;Cross-Cultural Perspectives on AI Development&quot;</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-purple-500/20 px-3 py-1 rounded-full">
                      Workshop
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Interactive workshop exploring the importance of cultural diversity in AI 
                    development, multilingual technologies, and inclusive approaches to artificial 
                    intelligence research that respect diverse cultural contexts and values.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><MapPin className="h-3 w-3 inline mr-1" />Stanford, USA</span>
                    <span>•</span>
                    <span><Users className="h-3 w-3 inline mr-1" />150 participants</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">Download Materials</a>
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
              <h2 className="section-title text-research-text mb-6">Conference Speaking Management System</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates the comprehensive conference speaking 
                management system with portfolio organization, event selection, content development, 
                and impact measurement designed to maximize thought leadership influence, audience 
                engagement, and knowledge dissemination effectiveness across international venues.
              </p>
              
              <CodeBlock
                code={conferenceTalksCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The speaking management framework provides systematic approaches to conference 
                engagement that enable thought leaders to build strategic speaking portfolios, 
                develop compelling presentations, and measure communication impact effectively.
              </p>
            </motion.div>

            {/* Speaking Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Speaking Categories &amp; Engagement Types</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Keynote Presentations</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Major conference opening addresses</p>
                    <p>• Policy summit keynote speeches</p>
                    <p>• Industry leadership presentations</p>
                    <p>• Academic symposium addresses</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Panel Discussions</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• AI ethics expert panels</p>
                    <p>• Technology policy discussions</p>
                    <p>• Cross-cultural AI perspectives</p>
                    <p>• Digital rights advocacy forums</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Workshop Sessions</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Interactive AI ethics workshops</p>
                    <p>• Hands-on technology tutorials</p>
                    <p>• Collaborative problem-solving sessions</p>
                    <p>• Skills development workshops</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Invited Lectures</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• University guest lectures</p>
                    <p>• Research institute seminars</p>
                    <p>• Corporate leadership talks</p>
                    <p>• International exchange programs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Future Speaking Engagements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Upcoming Speaking Engagements &amp; Future Initiatives</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">ICML 2025 - Montreal</h3>
                  <p className="body-text text-research-text-secondary">
                    Keynote presentation on &quot;The Future of Human-AI Collaboration: Ethical 
                    Frameworks for Responsible Development&quot; exploring next-generation AI 
                    systems and their integration with human decision-making processes.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">World Economic Forum - Davos</h3>
                  <p className="body-text text-research-text-secondary">
                    Panel discussion on &quot;Global AI Governance: Building International 
                    Frameworks for Responsible Technology Development&quot; with focus on 
                    cross-cultural perspectives and inclusive policy development.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Oxford AI Ethics Conference</h3>
                  <p className="body-text text-research-text-secondary">
                    Workshop leadership on &quot;Philosophical Foundations of AI Ethics: 
                    Bridging Theory and Practice&quot; exploring the intersection of philosophy, 
                    technology, and practical AI implementation challenges.
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
                  href="/academic/press-coverage"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous: Press Coverage
                </Link>
                
                <Link
                  href="/academic/teaching-materials"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next: Teaching Materials
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
