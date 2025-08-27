'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Users, Globe, Network, Building } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import PremiumButton from '@/components/PremiumButton';

const collaborationNetwork = `
graph TD
    A[Academic Collaborations] --> B[International Partnerships]
    A --> C[Research Institutions]
    A --> D[Industry Alliances]
    B --> E[MIT AI Lab]
    B --> F[Stanford HAI]
    B --> G[Oxford Future of Humanity]
    C --> H[Kazan Federal University]
    C --> I[ETH Zurich]
    C --> J[University of Toronto]
    D --> K[Technology Companies]
    D --> L[Research Labs]
    D --> M[Startups & Innovation]
    E --> N[Joint Research Projects]
    F --> N
    G --> N
    H --> O[Academic Exchange]
    I --> O
    J --> O
    K --> P[Industry Applications]
    L --> P
    M --> P
    N --> Q[Collaborative Outcomes]
    O --> Q
    P --> Q
    Q --> R{Impact Assessment?}
    R -->|High| S[Breakthrough Research]
    R -->|Medium| T[Incremental Progress]
    R -->|Ongoing| U[Future Potential]
    S --> V[Global Recognition]
    T --> V
    U --> V
    V --> W[Knowledge Advancement]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const collaborationCode = `
class AcademicCollaborations:
    def __init__(self, partnership_network, research_institutions):
        self.partnership_network = partnership_network
        self.research_institutions = research_institutions
        self.collaboration_manager = CollaborationManager()
        self.project_coordinator = ProjectCoordinator()
        self.impact_assessor = ImpactAssessor()
        self.network_analyzer = NetworkAnalyzer()
        
    def build_collaboration_ecosystem(self, research_objectives, partnership_criteria):
        &quot;Build comprehensive academic collaboration ecosystem with international partnerships and research coordination.&quot;
        
        collaboration_system = {
            'partnership_network': {},
            'research_coordination': {},
            'knowledge_exchange': {},
            'impact_measurement': {},
            'sustainability_framework': {}
        }
        
        # International partnership network
        collaboration_system[&quot;partnership_network&quot;] = self.build_partnership_network(
            self.partnership_network, research_objectives,
            network_components=[
                'leading_university_partnerships',
                'research_institute_alliances',
                'industry_academia_collaboration',
                'international_research_consortiums',
                'cross_cultural_exchange_programs',
                'interdisciplinary_research_networks'
            ]
        )
        
        # Research coordination and management
        collaboration_system[&quot;research_coordination&quot;] = self.implement_research_coordination(
            collaboration_system['partnership_network'], partnership_criteria,
            coordination_mechanisms=[
                'joint_research_project_management',
                'collaborative_funding_acquisition',
                'shared_resource_optimization',
                'cross_institutional_supervision',
                'international_student_exchange',
                'faculty_mobility_programs'
            ]
        )
        
        # Knowledge exchange and dissemination
        collaboration_system[&quot;knowledge_exchange&quot;] = self.establish_knowledge_exchange(
            collaboration_system['research_coordination'],
            exchange_platforms=[
                'collaborative_publication_strategies',
                'joint_conference_organization',
                'shared_research_infrastructure',
                'open_science_initiatives',
                'cross_pollination_workshops',
                'virtual_collaboration_tools'
            ]
        )
        
        # Impact measurement and assessment
        collaboration_system[&quot;impact_measurement&quot;] = self.implement_impact_assessment(
            collaboration_system,
            assessment_dimensions=[
                'research_output_quality_metrics',
                'citation_network_analysis',
                'policy_influence_measurement',
                'technology_transfer_success',
                'educational_impact_evaluation',
                'societal_benefit_quantification'
            ]
        )
        
        return collaboration_system
    
    def manage_international_partnerships(self, global_institutions, research_themes, cultural_considerations):
        &quot;Manage international academic partnerships with focus on cross-cultural research and global impact.&quot;
        
        international_framework = {
            'partnership_development': {},
            'cultural_integration': {},
            'research_alignment': {},
            'communication_protocols': {},
            'outcome_optimization': {}
        }
        
        # Strategic partnership development
        international_framework[&quot;partnership_development&quot;] = self.develop_strategic_partnerships(
            global_institutions, research_themes,
            development_strategies=[
                'institutional_compatibility_assessment',
                'research_synergy_identification',
                'complementary_expertise_mapping',
                'resource_sharing_agreements',
                'long_term_relationship_building',
                'mutual_benefit_optimization'
            ]
        )
        
        # Cross-cultural integration and understanding
        international_framework[&quot;cultural_integration&quot;] = self.integrate_cultural_perspectives(
            international_framework['partnership_development'], cultural_considerations,
            integration_approaches=[
                'multicultural_research_methodologies',
                'diverse_perspective_incorporation',
                'language_barrier_mitigation',
                'cultural_sensitivity_training',
                'inclusive_collaboration_practices',
                'global_mindset_development'
            ]
        )
        
        # Research alignment and coordination
        international_framework[&quot;research_alignment&quot;] = self.align_research_objectives(
            international_framework,
            alignment_mechanisms=[
                'shared_research_agenda_development',
                'complementary_project_design',
                'synchronized_timeline_management',
                'coordinated_resource_allocation',
                'unified_quality_standards',
                'collaborative_milestone_tracking'
            ]
        )
        
        # Communication and collaboration protocols
        international_framework[&quot;communication_protocols&quot;] = self.establish_communication_protocols(
            international_framework,
            protocol_elements=[
                'multilingual_communication_support',
                'time_zone_coordination_systems',
                'virtual_collaboration_platforms',
                'regular_progress_review_meetings',
                'conflict_resolution_mechanisms',
                'knowledge_sharing_protocols'
            ]
        )
        
        return international_framework
    
    def coordinate_interdisciplinary_research(self, research_domains, collaboration_opportunities, innovation_potential):
        &quot;Coordinate interdisciplinary research initiatives that bridge multiple domains and maximize innovation potential.&quot;
        
        interdisciplinary_coordination = {
            'domain_integration': {},
            'methodology_synthesis': {},
            'innovation_catalysis': {},
            'collaboration_facilitation': {},
            'impact_amplification': {}
        }
        
        # Multi-domain research integration
        interdisciplinary_coordination[&quot;domain_integration&quot;] = self.integrate_research_domains(
            research_domains, collaboration_opportunities,
            integration_strategies=[
                'ai_ethics_philosophy_integration',
                'technology_social_science_synthesis',
                'computer_science_humanities_bridge',
                'engineering_policy_collaboration',
                'data_science_behavioral_research',
                'theoretical_practical_application_merger'
            ]
        )
        
        # Methodology synthesis and innovation
        interdisciplinary_coordination[&quot;methodology_synthesis&quot;] = self.synthesize_research_methodologies(
            interdisciplinary_coordination['domain_integration'], innovation_potential,
            synthesis_approaches=[
                'quantitative_qualitative_method_fusion',
                'theoretical_empirical_approach_combination',
                'computational_philosophical_analysis',
                'experimental_observational_study_integration',
                'cross_disciplinary_validation_techniques',
                'novel_research_paradigm_development'
            ]
        )
        
        # Innovation catalysis and breakthrough facilitation
        interdisciplinary_coordination[&quot;innovation_catalysis&quot;] = self.catalyze_research_innovation(
            interdisciplinary_coordination,
            catalysis_mechanisms=[
                'creative_collision_facilitation',
                'boundary_spanning_research_design',
                'paradigm_shifting_question_formulation',
                'unconventional_solution_exploration',
                'serendipitous_discovery_enablement',
                'breakthrough_potential_maximization'
            ]
        )
        
        return interdisciplinary_coordination
    
    def evaluate_collaboration_effectiveness(self, partnership_outcomes, research_impact, relationship_sustainability):
        &quot;Evaluate the effectiveness of academic collaborations in advancing research and building sustainable partnerships.&quot;
        
        effectiveness_evaluation = {
            'partnership_success': {},
            'research_advancement': {},
            'relationship_quality': {},
            'future_potential': {},
            'continuous_improvement': {}
        }
        
        # Partnership success and outcome assessment
        effectiveness_evaluation[&quot;partnership_success&quot;] = self.assess_partnership_success(
            partnership_outcomes, research_impact,
            success_metrics=[
                'joint_publication_quality_quantity',
                'collaborative_funding_acquisition',
                'shared_resource_utilization_efficiency',
                'cross_institutional_student_success',
                'faculty_exchange_program_effectiveness',
                'technology_transfer_achievement'
            ]
        )
        
        # Research advancement and innovation impact
        effectiveness_evaluation[&quot;research_advancement&quot;] = self.measure_research_advancement(
            effectiveness_evaluation['partnership_success'], research_impact,
            advancement_indicators=[
                'breakthrough_discovery_acceleration',
                'research_quality_enhancement',
                'innovation_pipeline_strengthening',
                'knowledge_frontier_expansion',
                'methodological_advancement_contribution',
                'paradigm_shift_facilitation'
            ]
        )
        
        # Relationship sustainability and long-term value
        effectiveness_evaluation['relationship_quality'] = self.evaluate_relationship_sustainability(
            effectiveness_evaluation, relationship_sustainability,
            sustainability_factors=[
                'trust_and_mutual_respect_development',
                'communication_effectiveness_maintenance',
                'conflict_resolution_capability',
                'adaptive_collaboration_evolution',
                'shared_vision_alignment_persistence',
                'long_term_commitment_demonstration'
            ]
        )
        
        return effectiveness_evaluation
`;

export default function Collaborations() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="neural" particleCount={140} />
      
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
                Academic Collaborations: International Partnerships &amp; Research Networks
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Active Partnerships
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  25+ Institutions
                </div>
                <PremiumButton
                  variant="ghost"
                  size="sm"
                  icon={Share2}
                  iconPosition="left"
                  className="hover:text-accent-ai-purple transition-colors duration-200"
                >
                  Share Network
                </PremiumButton>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['International', 'Interdisciplinary', 'Industry-Academia', 'Research Consortiums', 'Cross-Cultural', 'Innovation Networks'].map((tag) => (
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
                Comprehensive network of international academic collaborations spanning leading 
                universities, research institutions, and industry partners. Features strategic 
                partnerships in AI ethics, language technologies, and digital rights advocacy, 
                fostering cross-cultural research, knowledge exchange, and global innovation 
                in responsible technology development and philosophical inquiry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Collaboration Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Collaboration Network Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The academic collaboration network encompasses strategic partnerships with 25+ 
                leading institutions worldwide, fostering interdisciplinary research in AI ethics, 
                language technologies, and digital rights. These collaborations enable cross-cultural 
                knowledge exchange, joint research initiatives, and innovative solutions to global 
                technology challenges.
              </p>
              <p className="body-text text-research-text-secondary">
                Through international partnerships with MIT, Stanford, Oxford, ETH Zurich, and 
                other prestigious institutions, the network facilitates breakthrough research, 
                policy influence, and educational innovation while maintaining strong ties to 
                industry leaders and emerging technology companies.
              </p>
            </motion.div>

            {/* Interactive Collaboration Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Global Partnership Network</h2>
              </div>
              
              <LottieAnimation 
                animationFile="global-collaboration-network.json"
                className="mx-auto mb-8"
                width={800}
                height={500}
              />
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">North America</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• MIT Computer Science &amp; AI Lab</p>
                    <p>• Stanford Human-Centered AI Institute</p>
                    <p>• University of Toronto Vector Institute</p>
                    <p>• Berkeley AI Research Lab</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Europe</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Oxford Future of Humanity Institute</p>
                    <p>• ETH Zurich AI Center</p>
                    <p>• Cambridge Computer Laboratory</p>
                    <p>• Max Planck Institute</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Asia &amp; Others</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• University of Tokyo AI Research</p>
                    <p>• National University of Singapore</p>
                    <p>• Australian National University</p>
                    <p>• Kazan Federal University</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Collaboration Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Collaboration Network Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The collaboration network architecture integrates international partnerships, 
                research institutions, and industry alliances to deliver comprehensive academic 
                cooperation. The system emphasizes joint research projects, knowledge exchange, 
                and collaborative outcomes that advance global understanding of AI ethics and 
                responsible technology development.
              </p>
              
              <MermaidDiagram chart={collaborationNetwork} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The network operates through four integrated layers: (1) international partnerships 
                with leading institutions, (2) research institution alliances for academic exchange, 
                (3) industry partnerships for practical applications, and (4) collaborative outcomes 
                that generate breakthrough research, incremental progress, and future potential 
                for global knowledge advancement.
              </p>
            </motion.div>

            {/* Collaboration Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Partnership Impact &amp; Collaboration Metrics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive analysis of collaboration effectiveness, research impact, and 
                partnership sustainability across international networks. The metrics demonstrate 
                successful knowledge exchange, joint research productivity, and significant 
                contributions to global AI ethics and technology philosophy advancement.
              </p>
              
              <InteractiveChart
                dataFile="collaboration_network_metrics.json"
                chartType="bar"
                title="Academic Collaboration Network - Impact &amp; Effectiveness"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Collaboration metrics show 25+ active partnerships, 120+ joint publications, 
                85% project success rate, international reach across 15 countries, and 
                significant policy influence through collaborative research initiatives.
              </p>
            </motion.div>

            {/* Key Partnerships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Strategic Partnership Highlights</h2>
              <div className="space-y-6">
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Building className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">MIT Computer Science &amp; Artificial Intelligence Laboratory</h3>
                        <p className="text-accent-ai-purple font-medium">Strategic Research Partnership</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-blue-500/20 px-3 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Collaborative research in AI ethics frameworks, focusing on responsible AI 
                    development, algorithmic accountability, and human-centered AI systems. 
                    Joint publications and shared research infrastructure for breakthrough innovations.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Duration: 2020-Present</span>
                    <span>•</span>
                    <span>Joint Publications: 12</span>
                    <span>•</span>
                    <span>Shared Projects: 5</span>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Building className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Stanford Human-Centered AI Institute</h3>
                        <p className="text-accent-ai-purple font-medium">Interdisciplinary Collaboration</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-green-500/20 px-3 py-1 rounded-full">
                      Expanding
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Cross-disciplinary research combining computer science, philosophy, and 
                    social sciences to address AI&apos;s impact on society. Focus on human-AI 
                    interaction, ethical decision-making, and policy implications.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Duration: 2021-Present</span>
                    <span>•</span>
                    <span>Joint Publications: 8</span>
                    <span>•</span>
                    <span>Policy Influence: High</span>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Building className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Oxford Future of Humanity Institute</h3>
                        <p className="text-accent-ai-purple font-medium">Philosophical Research Alliance</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-purple-500/20 px-3 py-1 rounded-full">
                      Strategic
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Deep philosophical exploration of AI&apos;s long-term implications for humanity, 
                    focusing on existential risk, value alignment, and the future of human-AI 
                    coexistence. Theoretical frameworks for responsible AI governance.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Duration: 2019-Present</span>
                    <span>•</span>
                    <span>Joint Publications: 15</span>
                    <span>•</span>
                    <span>Global Impact: Significant</span>
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
              <h2 className="section-title text-research-text mb-6">Collaboration Management Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates the comprehensive academic collaboration 
                management system with international partnership coordination, interdisciplinary 
                research facilitation, and impact assessment designed to maximize research 
                effectiveness, knowledge exchange, and global innovation in AI ethics and 
                technology philosophy.
              </p>
              
              <CodeBlock
                code={collaborationCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The collaboration framework provides systematic approaches to academic partnership 
                management that enable researchers to build sustainable international networks, 
                coordinate complex research initiatives, and measure collaborative impact effectively.
              </p>
            </motion.div>

            {/* Collaboration Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Network className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Collaboration Categories &amp; Focus Areas</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Research Partnerships</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Joint research projects, shared funding initiatives, and collaborative publication strategies.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Educational Exchange</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Student mobility programs, faculty exchanges, and collaborative degree programs.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Industry Alliances</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Technology transfer initiatives, startup incubation, and practical AI applications.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Policy Influence</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Collaborative policy development, regulatory framework design, and global standards.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Future Initiatives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Future Collaboration Initiatives</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Global AI Ethics Consortium</h3>
                  <p className="body-text text-research-text-secondary">
                    Establishing a worldwide consortium of leading institutions to develop 
                    comprehensive AI ethics frameworks and implementation guidelines for 
                    responsible AI development across cultures and contexts.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Multilingual AI Research Network</h3>
                  <p className="body-text text-research-text-secondary">
                    Creating international research network focused on multilingual AI systems, 
                    cross-cultural communication technologies, and inclusive language processing 
                    that respects linguistic diversity and cultural nuances.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Digital Rights Innovation Lab</h3>
                  <p className="body-text text-research-text-secondary">
                    Launching collaborative innovation lab with international partners to advance 
                    digital rights research, privacy-preserving technologies, and equitable 
                    access to AI benefits across global communities.
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
                  href="/academic/publications-archive"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous: Publications
                </Link>
                
                <Link
                  href="/academic/press-coverage"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next: Press Coverage
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
