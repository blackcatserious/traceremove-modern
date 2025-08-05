'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Heart, Users, Brain } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';
import PremiumButton from '@/components/PremiumButton';

const humanCenteredAIDiagram = `
graph TD
    A[Human-Centered AI System] --> B[Human Needs Analysis]
    A --> C[AI Capability Assessment]
    A --> D[Interaction Design]
    B --> E[User Research]
    B --> F[Stakeholder Analysis]
    B --> G[Context Understanding]
    C --> H[Technical Capabilities]
    C --> I[Limitation Assessment]
    C --> J[Ethical Constraints]
    D --> K[Interface Design]
    D --> L[Feedback Mechanisms]
    D --> M[Control Systems]
    E --> N[Human-AI Collaboration Model]
    F --> N
    G --> N
    H --> O[System Architecture]
    I --> O
    J --> O
    K --> P[User Experience]
    L --> P
    M --> P
    N --> Q[Implementation]
    O --> Q
    P --> Q
    Q --> R[Evaluation &amp; Iteration]
    R --> S{User Satisfaction?}
    S -->|No| T[Redesign Process]
    S -->|Yes| U[Deployment]
    T --> B
    U --> V[Continuous Monitoring]
    V --> W[Adaptive Improvement]
    W --> X[Sustainable Human-AI Partnership]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style N fill:#10B981,stroke:#059669,color:#fff
    style P fill:#F59E0B,stroke:#D97706,color:#fff
    style X fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const humanCenteredAICode = `
class HumanCenteredAIFramework:
    def __init__(self, user_research_data, ai_capabilities):
        self.user_research_data = user_research_data
        self.ai_capabilities = ai_capabilities
        self.interaction_designer = InteractionDesigner()
        self.user_experience_evaluator = UXEvaluator()
        self.collaboration_optimizer = CollaborationOptimizer()
        self.ethical_assessor = EthicalAssessment()
        
    def design_human_centered_ai_system(self, requirements, user_context):
        &quot;&quot;&quot;Design AI system that prioritizes human needs and capabilities.&quot;&quot;&quot;
        
        design_framework = {
            'human_needs_analysis': {},
            'ai_human_collaboration_model': {},
            'interaction_design': {},
            'ethical_considerations': {},
            'evaluation_metrics': {}
        }
        
        # Comprehensive human needs analysis
        design_framework['human_needs_analysis'] = self.analyze_human_needs(
            requirements, user_context,
            analysis_dimensions=[
                'cognitive_capabilities',
                'emotional_needs',
                'social_context',
                'cultural_considerations',
                'accessibility_requirements',
                'skill_levels',
                'domain_expertise',
                'workflow_integration'
            ]
        )
        
        # Design human-AI collaboration model
        design_framework['ai_human_collaboration_model'] = self.design_collaboration_model(
            design_framework['human_needs_analysis'],
            self.ai_capabilities,
            collaboration_patterns=[
                'human_in_the_loop',
                'human_on_the_loop',
                'human_out_of_the_loop',
                'adaptive_automation',
                'shared_control',
                'complementary_intelligence'
            ]
        )
        
        # Interaction design optimization
        design_framework['interaction_design'] = self.design_interactions(
            design_framework['ai_human_collaboration_model'],
            interaction_principles=[
                'transparency_and_explainability',
                'user_agency_and_control',
                'feedback_and_communication',
                'error_prevention_and_recovery',
                'learning_and_adaptation',
                'trust_building_mechanisms'
            ]
        )
        
        # Ethical considerations integration
        design_framework['ethical_considerations'] = self.integrate_ethical_considerations(
            design_framework,
            ethical_principles=[
                'human_dignity_preservation',
                'autonomy_respect',
                'beneficence_and_non_maleficence',
                'justice_and_fairness',
                'privacy_protection',
                'informed_consent'
            ]
        )
        
        return design_framework
    
    def implement_adaptive_interaction_system(self, design_framework, user_profiles):
        &quot;&quot;&quot;Implement adaptive interaction system that learns from user behavior.&quot;&quot;&quot;
        
        interaction_system = {
            'personalization_engine': {},
            'adaptive_interface': {},
            'feedback_processing': {},
            'trust_calibration': {},
            'performance_optimization': {}
        }
        
        # Personalization engine
        interaction_system['personalization_engine'] = self.build_personalization_engine(
            user_profiles,
            personalization_factors=[
                'individual_preferences',
                'skill_level_adaptation',
                'cognitive_load_management',
                'cultural_sensitivity',
                'accessibility_customization',
                'workflow_optimization'
            ]
        )
        
        # Adaptive interface design
        interaction_system['adaptive_interface'] = self.design_adaptive_interface(
            design_framework['interaction_design'],
            interaction_system['personalization_engine'],
            adaptation_mechanisms=[
                'dynamic_complexity_adjustment',
                'contextual_information_display',
                'proactive_assistance',
                'customizable_automation_levels',
                'intelligent_notification_systems'
            ]
        )
        
        # Feedback processing system
        interaction_system['feedback_processing'] = self.implement_feedback_processing(
            feedback_types=[
                'explicit_user_feedback',
                'implicit_behavioral_signals',
                'performance_metrics',
                'error_patterns',
                'satisfaction_indicators',
                'trust_measurements'
            ]
        )
        
        # Trust calibration mechanisms
        interaction_system['trust_calibration'] = self.implement_trust_calibration(
            trust_factors=[
                'system_reliability_communication',
                'uncertainty_quantification',
                'capability_boundary_explanation',
                'error_acknowledgment',
                'improvement_transparency'
            ]
        )
        
        return interaction_system
    
    def evaluate_human_ai_collaboration(self, system, user_interactions, performance_data):
        &quot;&quot;&quot;Comprehensive evaluation of human-AI collaboration effectiveness.&quot;&quot;&quot;
        
        evaluation_results = {
            'user_experience_metrics': {},
            'collaboration_effectiveness': {},
            'trust_and_acceptance': {},
            'performance_outcomes': {},
            'ethical_impact_assessment': {}
        }
        
        # User experience evaluation
        evaluation_results['user_experience_metrics'] = self.evaluate_user_experience(
            user_interactions,
            ux_dimensions=[
                'usability_and_ease_of_use',
                'cognitive_load_assessment',
                'satisfaction_and_engagement',
                'learning_curve_analysis',
                'error_recovery_effectiveness',
                'accessibility_compliance'
            ]
        )
        
        # Collaboration effectiveness assessment
        evaluation_results['collaboration_effectiveness'] = self.assess_collaboration_effectiveness(
            system, user_interactions, performance_data,
            effectiveness_metrics=[
                'task_completion_rates',
                'decision_quality_improvement',
                'time_efficiency_gains',
                'error_reduction_rates',
                'skill_augmentation_effectiveness',
                'workflow_integration_success'
            ]
        )
        
        # Trust and acceptance measurement
        evaluation_results['trust_and_acceptance'] = self.measure_trust_acceptance(
            user_interactions,
            trust_indicators=[
                'system_reliance_patterns',
                'override_frequency_analysis',
                'confidence_in_recommendations',
                'willingness_to_delegate',
                'perceived_system_competence',
                'emotional_responses'
            ]
        )
        
        # Performance outcomes analysis
        evaluation_results['performance_outcomes'] = self.analyze_performance_outcomes(
            performance_data,
            outcome_categories=[
                'individual_performance_improvement',
                'team_collaboration_enhancement',
                'organizational_productivity_gains',
                'innovation_and_creativity_impact',
                'skill_development_acceleration'
            ]
        )
        
        return evaluation_results
    
    def optimize_human_ai_partnership(self, evaluation_results, system_configuration):
        &quot;&quot;&quot;Optimize human-AI partnership based on evaluation insights.&quot;&quot;&quot;
        
        optimization_strategy = {
            'interaction_improvements': {},
            'system_adaptations': {},
            'training_recommendations': {},
            'policy_adjustments': {},
            'future_development_priorities': {}
        }
        
        # Interaction improvements
        optimization_strategy['interaction_improvements'] = self.identify_interaction_improvements(
            evaluation_results['user_experience_metrics'],
            evaluation_results['collaboration_effectiveness'],
            improvement_areas=[
                'interface_simplification',
                'feedback_mechanism_enhancement',
                'explanation_quality_improvement',
                'control_granularity_adjustment',
                'personalization_refinement'
            ]
        )
        
        # System adaptations
        optimization_strategy['system_adaptations'] = self.recommend_system_adaptations(
            evaluation_results,
            adaptation_strategies=[
                'algorithm_parameter_tuning',
                'decision_threshold_adjustment',
                'automation_level_optimization',
                'error_handling_improvement',
                'performance_monitoring_enhancement'
            ]
        )
        
        # Training and education recommendations
        optimization_strategy['training_recommendations'] = self.develop_training_recommendations(
            evaluation_results['trust_and_acceptance'],
            evaluation_results['performance_outcomes'],
            training_areas=[
                'ai_literacy_development',
                'collaboration_skill_building',
                'system_capability_understanding',
                'ethical_ai_use_education',
                'troubleshooting_and_maintenance'
            ]
        )
        
        return optimization_strategy
`;

export default function HumanCenteredAI() {
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
              href="/research"
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Research
            </Link>

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                Human-Centered AI: Designing Technology that Serves Humanity
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  26 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  March 22, 2024
                </div>
                <PremiumButton
                  variant="ghost"
                  size="sm"
                  icon={Share2}
                  iconPosition="left"
                  className="hover:text-accent-ai-purple transition-colors duration-200"
                >
                  Share
                </PremiumButton>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Human-Centered Design', 'AI Ethics', 'User Experience', 'Human-AI Collaboration', 'Inclusive AI', 'Trust in AI'].map((tag) => (
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
                Developing AI systems that prioritize human needs, capabilities, and values through user-centered 
                design principles, collaborative intelligence frameworks, and ethical technology development that 
                enhances rather than replaces human potential and agency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Introduction</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                Human-centered AI represents a paradigm shift from technology-first to human-first design, 
                prioritizing human needs, capabilities, and values in AI system development. This approach 
                recognizes that the most effective AI systems are those that complement and enhance human 
                intelligence rather than attempting to replace it entirely.
              </p>
              <p className="body-text text-research-text-secondary">
                Our research focuses on developing frameworks for creating AI systems that are not only 
                technically sophisticated but also deeply attuned to human psychology, social dynamics, 
                and ethical considerations, ensuring that AI serves as a tool for human flourishing and 
                empowerment rather than displacement or control.
              </p>
            </motion.div>

            {/* Interactive Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Human-AI Collaboration Ecosystem</h2>
              </div>
              <LottieAnimation 
                animationFile="human-ai-collaboration.json"
                className="mx-auto"
                width={600}
                height={450}
              />
            </motion.div>

            {/* Framework Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Human-Centered AI Design Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our comprehensive framework integrates human needs analysis, AI capability assessment, and 
                interaction design to create systems that truly serve human purposes. The framework emphasizes 
                continuous evaluation and adaptation based on user feedback and real-world performance, ensuring 
                that AI systems evolve to better meet human needs over time.
              </p>
              
              <MermaidDiagram chart={humanCenteredAIDiagram} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The framework addresses four critical dimensions: (1) understanding human needs and contexts, 
                (2) designing appropriate human-AI collaboration models, (3) creating intuitive and trustworthy 
                interactions, and (4) ensuring ethical considerations are embedded throughout the design process.
              </p>
            </motion.div>

            {/* User Experience Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Human-AI Interaction Effectiveness</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive evaluation of human-centered AI systems across multiple domains reveals significant 
                improvements in user satisfaction, task performance, and trust when human-centered design principles 
                are applied. Our research demonstrates the measurable benefits of prioritizing human needs in AI 
                system design.
              </p>
              
              <InteractiveChart
                dataFile="human_centered_ai_effectiveness.json"
                chartType="doughnut"
                title="Human-Centered AI System Performance Across Key Dimensions"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results show that human-centered AI systems achieve 40% higher user satisfaction, 25% better 
                task completion rates, and 60% increased trust levels compared to traditional AI implementations, 
                while maintaining comparable or superior technical performance.
              </p>
            </motion.div>

            {/* Implementation Framework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Human-Centered AI Implementation</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates our comprehensive human-centered AI framework with 
                adaptive interaction systems, personalization engines, and continuous evaluation mechanisms 
                designed to create AI systems that truly serve human needs and capabilities.
              </p>
              
              <CodeBlock
                code={humanCenteredAICode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides systematic approaches to human needs analysis, collaboration model design, 
                and interaction optimization that ensure AI systems are developed with human welfare and agency 
                as primary considerations throughout the development lifecycle.
              </p>
            </motion.div>

            {/* Design Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Core Design Principles</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Human Agency &amp; Control</h3>
                  <p className="body-text text-research-text-secondary">
                    Ensuring humans maintain meaningful control and decision-making authority in human-AI collaborative systems.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Transparency &amp; Explainability</h3>
                  <p className="body-text text-research-text-secondary">
                    Providing clear, understandable explanations of AI decisions and system capabilities to build trust and understanding.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Inclusive &amp; Accessible Design</h3>
                  <p className="body-text text-research-text-secondary">
                    Creating AI systems that work for diverse users across different abilities, cultures, and contexts.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Adaptive &amp; Personalized</h3>
                  <p className="body-text text-research-text-secondary">
                    Developing systems that learn and adapt to individual user needs, preferences, and working styles.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Collaboration Models */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Human-AI Collaboration Models</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Complementary Intelligence</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Approach:</strong> AI and humans contribute different but complementary capabilities. 
                    <strong>Benefits:</strong> Leverages unique strengths of both human and artificial intelligence. 
                    <strong>Applications:</strong> Creative tasks, complex problem-solving, strategic decision-making.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Adaptive Automation</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Approach:</strong> Dynamic adjustment of automation levels based on context and user needs. 
                    <strong>Benefits:</strong> Maintains human engagement while providing appropriate assistance. 
                    <strong>Applications:</strong> Monitoring systems, data analysis, quality control processes.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Collaborative Learning</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Approach:</strong> Humans and AI systems learn from each other through interaction. 
                    <strong>Benefits:</strong> Continuous improvement and mutual adaptation over time. 
                    <strong>Applications:</strong> Educational systems, research tools, personalized assistants.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Real-World Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Real-World Applications</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Healthcare AI Assistants</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    AI systems that support medical professionals while preserving clinical judgment and patient relationships.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Educational Technology</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Personalized learning systems that adapt to individual student needs while supporting teacher expertise.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Creative Collaboration Tools</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    AI systems that enhance human creativity in design, writing, and artistic endeavors without replacing human vision.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Ethical Considerations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Ethical Considerations &amp; Challenges</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Preserving Human Dignity</h3>
                  <p className="body-text text-research-text-secondary">
                    Ensuring AI systems respect human autonomy, dignity, and the intrinsic value of human 
                    decision-making and creativity. This includes avoiding systems that manipulate or 
                    undermine human agency.
                  </p>
                </div>
                <div className="border-l-4 border-accent-lab-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Addressing Bias and Fairness</h3>
                  <p className="body-text text-research-text-secondary">
                    Developing AI systems that are fair and inclusive across diverse populations, actively 
                    working to identify and mitigate biases that could harm or exclude certain groups.
                  </p>
                </div>
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Balancing Efficiency and Humanity</h3>
                  <p className="body-text text-research-text-secondary">
                    Finding the right balance between AI efficiency gains and maintaining human-centered 
                    values such as empathy, creativity, and meaningful work in AI-augmented environments.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Conclusion</h2>
              <p className="body-text text-research-text-secondary mb-6">
                Human-centered AI represents not just a design methodology but a fundamental philosophy about 
                the role of technology in human society. By prioritizing human needs, capabilities, and values, 
                we can create AI systems that truly serve humanity and enhance rather than diminish human potential.
              </p>
              <p className="body-text text-research-text-secondary">
                The future of AI lies not in replacing humans but in creating intelligent partnerships that 
                leverage the unique strengths of both human and artificial intelligence. This requires ongoing 
                research, careful design, and a commitment to keeping human welfare at the center of AI development.
              </p>
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
                  href="/research/ai-infrastructure-academia"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Article
                </Link>
                
                <Link
                  href="/research/digital-rights-ai"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next Article
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
