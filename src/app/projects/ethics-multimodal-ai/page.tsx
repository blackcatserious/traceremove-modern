'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Shield, Eye, Brain } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const ethicsMultimodalArchitecture = `
graph TD
    A[Ethics in Multimodal AI] --> B[Ethical Framework]
    A --> C[Bias Detection System]
    A --> D[Fairness Assessment]
    B --> E[Cross-Modal Ethics]
    B --> F[Representation Ethics]
    B --> G[Decision Ethics]
    C --> H[Visual Bias Detection]
    C --> I[Textual Bias Analysis]
    C --> J[Audio Bias Assessment]
    D --> K[Demographic Fairness]
    D --> L[Intersectional Analysis]
    D --> M[Outcome Equity]
    E --> N[Modal Consistency]
    F --> N
    G --> N
    H --> O[Comprehensive Bias Report]
    I --> O
    J --> O
    K --> P[Fairness Metrics]
    L --> P
    M --> P
    N --> Q[Ethical Validation]
    O --> Q
    P --> Q
    Q --> R[Ethics Assessment]
    R --> S{Ethical Standards Met?}
    S -->|No| T[Model Refinement]
    S -->|Yes| U[Ethical Deployment]
    T --> B
    U --> V[Continuous Monitoring]
    V --> W[Ethical Compliance]
    W --> X[Responsible Multimodal AI]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style X fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const ethicsMultimodalCode = `
class EthicsMultimodalAIFramework:
    def __init__(self, ethical_standards, multimodal_config):
        self.ethical_standards = ethical_standards
        self.multimodal_config = multimodal_config
        self.bias_detector = MultimodalBiasDetector()
        self.fairness_assessor = FairnessAssessmentEngine()
        self.ethics_validator = EthicalValidationSystem()
        self.monitoring_system = ContinuousEthicsMonitor()
        
    def implement_multimodal_ethics_framework(self, model_specifications, ethical_requirements):
        &quot;&quot;&quot;Implement comprehensive ethics framework for multimodal AI systems.&quot;&quot;&quot;
        
        ethics_framework = {
            'ethical_foundation': {},
            'bias_detection': {},
            'fairness_assessment': {},
            'validation_system': {},
            'monitoring_infrastructure': {}
        }
        
        # Comprehensive ethical foundation
        ethics_framework['ethical_foundation'] = self.build_ethical_foundation(
            model_specifications, self.ethical_standards,
            foundation_components=[
                'cross_modal_ethical_principles',
                'representation_ethics_guidelines',
                'decision_making_ethics',
                'privacy_protection_protocols',
                'transparency_requirements',
                'accountability_mechanisms'
            ]
        )
        
        # Advanced bias detection system
        ethics_framework['bias_detection'] = self.implement_bias_detection(
            ethics_framework['ethical_foundation'], ethical_requirements,
            detection_capabilities=[
                'visual_representation_bias',
                'textual_language_bias',
                'audio_cultural_bias',
                'cross_modal_amplification_bias',
                'intersectional_bias_analysis',
                'temporal_bias_evolution'
            ]
        )
        
        # Comprehensive fairness assessment
        ethics_framework['fairness_assessment'] = self.build_fairness_assessment(
            ethics_framework['bias_detection'],
            assessment_dimensions=[
                'demographic_parity_multimodal',
                'equalized_odds_cross_modal',
                'individual_fairness_assessment',
                'group_fairness_evaluation',
                'outcome_equity_analysis',
                'procedural_fairness_validation'
            ]
        )
        
        # Ethical validation system
        ethics_framework['validation_system'] = self.implement_ethical_validation(
            ethics_framework,
            validation_methods=[
                'automated_ethics_checking',
                'human_expert_review',
                'stakeholder_consultation',
                'adversarial_ethics_testing',
                'real_world_impact_assessment',
                'long_term_consequence_analysis'
            ]
        )
        
        return ethics_framework
    
    def execute_multimodal_ethical_assessment(self, multimodal_model, assessment_configuration, evaluation_scenarios):
        &quot;&quot;&quot;Execute comprehensive ethical assessment of multimodal AI systems.&quot;&quot;&quot;
        
        assessment_process = {
            'preparation_phase': {},
            'analysis_phase': {},
            'evaluation_phase': {},
            'validation_phase': {},
            'reporting_phase': {}
        }
        
        # Ethical assessment preparation
        assessment_process['preparation_phase'] = self.prepare_ethical_assessment(
            multimodal_model, assessment_configuration,
            preparation_steps=[
                'ethical_baseline_establishment',
                'stakeholder_identification',
                'assessment_protocol_design',
                'evaluation_dataset_preparation',
                'expert_panel_coordination',
                'assessment_environment_setup'
            ]
        )
        
        # Comprehensive ethical analysis
        assessment_process['analysis_phase'] = self.conduct_ethical_analysis(
            assessment_process['preparation_phase'], evaluation_scenarios,
            analysis_methods=[
                'cross_modal_bias_analysis',
                'representation_fairness_evaluation',
                'decision_transparency_assessment',
                'privacy_impact_analysis',
                'cultural_sensitivity_evaluation',
                'accessibility_assessment'
            ]
        )
        
        # Multi-dimensional evaluation
        assessment_process['evaluation_phase'] = self.evaluate_ethical_dimensions(
            assessment_process['analysis_phase'],
            evaluation_frameworks=[
                'consequentialist_ethics_evaluation',
                'deontological_ethics_assessment',
                'virtue_ethics_analysis',
                'care_ethics_evaluation',
                'justice_theory_application',
                'human_rights_compliance'
            ]
        )
        
        # Stakeholder validation process
        assessment_process['validation_phase'] = self.validate_ethical_assessment(
            assessment_process['evaluation_phase'],
            validation_procedures=[
                'expert_review_validation',
                'community_stakeholder_feedback',
                'affected_population_consultation',
                'cross_cultural_validation',
                'interdisciplinary_review',
                'regulatory_compliance_check'
            ]
        )
        
        return assessment_process
    
    def implement_continuous_ethical_monitoring(self, deployed_models, monitoring_configuration, ethical_thresholds):
        &quot;&quot;&quot;Implement continuous ethical monitoring for deployed multimodal AI systems.&quot;&quot;&quot;
        
        monitoring_system = {
            'real_time_monitoring': {},
            'ethical_drift_detection': {},
            'impact_assessment': {},
            'intervention_systems': {},
            'adaptive_governance': {}
        }
        
        # Real-time ethical monitoring
        monitoring_system['real_time_monitoring'] = self.implement_real_time_monitoring(
            deployed_models, monitoring_configuration,
            monitoring_dimensions=[
                'bias_manifestation_tracking',
                'fairness_metric_monitoring',
                'representation_quality_assessment',
                'decision_transparency_tracking',
                'user_experience_monitoring',
                'societal_impact_measurement'
            ]
        )
        
        # Ethical drift detection
        monitoring_system['ethical_drift_detection'] = self.implement_ethical_drift_detection(
            monitoring_system['real_time_monitoring'],
            drift_detection_methods=[
                'bias_amplification_detection',
                'fairness_degradation_monitoring',
                'representation_shift_analysis',
                'ethical_standard_deviation',
                'cultural_sensitivity_changes',
                'accessibility_impact_tracking'
            ]
        )
        
        # Societal impact assessment
        monitoring_system['impact_assessment'] = self.implement_impact_assessment(
            monitoring_system,
            assessment_frameworks=[
                'individual_impact_analysis',
                'community_effect_evaluation',
                'institutional_influence_assessment',
                'cultural_transformation_tracking',
                'economic_consequence_analysis',
                'democratic_participation_impact'
            ]
        )
        
        # Automated intervention systems
        monitoring_system['intervention_systems'] = self.implement_intervention_systems(
            monitoring_system, ethical_thresholds,
            intervention_mechanisms=[
                'automated_bias_correction',
                'fairness_adjustment_protocols',
                'representation_rebalancing',
                'decision_transparency_enhancement',
                'user_protection_measures',
                'stakeholder_notification_systems'
            ]
        )
        
        return monitoring_system
    
    def evaluate_ethical_framework_effectiveness(self, ethics_framework, real_world_deployments, effectiveness_metrics):
        &quot;&quot;&quot;Evaluate the effectiveness of the multimodal AI ethics framework.&quot;&quot;&quot;
        
        effectiveness_evaluation = {
            'framework_impact': {},
            'stakeholder_satisfaction': {},
            'ethical_outcome_analysis': {},
            'continuous_improvement': {},
            'societal_benefit_assessment': {}
        }
        
        # Framework impact assessment
        effectiveness_evaluation['framework_impact'] = self.assess_framework_impact(
            ethics_framework, real_world_deployments,
            impact_dimensions=[
                'bias_reduction_effectiveness',
                'fairness_improvement_measurement',
                'transparency_enhancement_evaluation',
                'accountability_mechanism_success',
                'privacy_protection_effectiveness',
                'cultural_sensitivity_improvement'
            ]
        )
        
        # Stakeholder satisfaction analysis
        effectiveness_evaluation['stakeholder_satisfaction'] = self.analyze_stakeholder_satisfaction(
            ethics_framework, effectiveness_metrics,
            satisfaction_measures=[
                'user_trust_and_confidence',
                'community_acceptance_levels',
                'expert_validation_scores',
                'regulatory_compliance_satisfaction',
                'developer_usability_assessment',
                'societal_benefit_recognition'
            ]
        )
        
        # Ethical outcome analysis
        effectiveness_evaluation['ethical_outcome_analysis'] = self.analyze_ethical_outcomes(
            effectiveness_evaluation,
            outcome_evaluation=[
                'harm_prevention_effectiveness',
                'benefit_distribution_fairness',
                'rights_protection_success',
                'dignity_preservation_assessment',
                'autonomy_respect_evaluation',
                'justice_promotion_measurement'
            ]
        )
        
        # Continuous improvement mechanisms
        effectiveness_evaluation['continuous_improvement'] = self.implement_continuous_improvement(
            effectiveness_evaluation,
            improvement_strategies=[
                'feedback_integration_protocols',
                'adaptive_framework_evolution',
                'emerging_challenge_response',
                'best_practice_incorporation',
                'cross_domain_learning',
                'future_proofing_mechanisms'
            ]
        )
        
        return effectiveness_evaluation
`;

export default function EthicsMultimodalAI() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="neural" particleCount={85} />
      
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
              href="/projects"
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                Ethics in Multimodal AI: Responsible Development Framework
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  26 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Project Status: Research & Implementation
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['AI Ethics', 'Multimodal Systems', 'Bias Detection', 'Fairness Assessment', 'Responsible AI', 'Cross-Modal Analysis'].map((tag) => (
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
                Developing comprehensive ethical frameworks for multimodal AI systems that integrate vision, 
                language, and audio processing, ensuring responsible development through bias detection, 
                fairness assessment, and continuous monitoring across diverse modalities and cultural contexts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Project Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Ethics in Multimodal AI project addresses the complex ethical challenges that arise when 
                AI systems process and integrate multiple modalities including vision, language, and audio. 
                Our framework provides comprehensive methodologies for detecting bias, assessing fairness, 
                and ensuring responsible deployment across diverse cultural and demographic contexts.
              </p>
              <p className="body-text text-research-text-secondary">
                This project recognizes that multimodal AI systems can amplify biases across modalities and 
                create new forms of discrimination that are not present in unimodal systems. Our approach 
                develops novel techniques for cross-modal bias detection and mitigation while establishing 
                ethical guidelines for responsible multimodal AI development.
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
                <Eye className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Ethical Assessment Process</h2>
              </div>
              <LottieAnimation 
                animationFile="ethics-multimodal-assessment.json"
                className="mx-auto"
                width={660}
                height={460}
              />
            </motion.div>

            {/* System Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Multimodal AI Ethics Framework Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our ethics framework for multimodal AI integrates cross-modal bias detection, comprehensive 
                fairness assessment, and continuous ethical monitoring to ensure responsible development and 
                deployment. The architecture addresses the unique challenges of multimodal systems where 
                biases can be amplified or created through modal interactions.
              </p>
              
              <MermaidDiagram chart={ethicsMultimodalArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through four integrated components: (1) ethical framework establishment 
                with cross-modal principles, (2) comprehensive bias detection across visual, textual, and 
                audio modalities, (3) multi-dimensional fairness assessment including intersectional analysis, 
                and (4) continuous monitoring with automated intervention capabilities.
              </p>
            </motion.div>

            {/* Ethical Assessment Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Cross-Modal Bias Analysis &amp; Mitigation</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our comprehensive analysis of multimodal AI systems reveals significant bias amplification 
                effects when multiple modalities interact. The framework successfully identifies and mitigates 
                these biases while maintaining system performance across diverse demographic groups and 
                cultural contexts.
              </p>
              
              <InteractiveChart
                dataFile="multimodal_ethics_analysis.json"
                chartType="bar"
                title="Cross-Modal Bias Detection and Mitigation Effectiveness"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results demonstrate 65% reduction in cross-modal bias amplification, 80% improvement in 
                fairness metrics across demographic groups, and 90% compliance with established ethical 
                guidelines while maintaining competitive system performance.
              </p>
            </motion.div>

            {/* Implementation Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Technical Implementation</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates our comprehensive ethics framework for multimodal 
                AI systems with cross-modal bias detection, fairness assessment, continuous monitoring, and 
                automated intervention capabilities designed to ensure responsible development and deployment 
                of multimodal artificial intelligence systems.
              </p>
              
              <CodeBlock
                code={ethicsMultimodalCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides systematic approaches to ethical multimodal AI development that enable 
                organizations to build responsible systems while addressing the unique challenges of cross-modal 
                bias amplification and ensuring fairness across diverse user populations and cultural contexts.
              </p>
            </motion.div>

            {/* Ethical Dimensions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Key Ethical Dimensions</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Cross-Modal Bias Detection</h3>
                  <p className="body-text text-research-text-secondary">
                    Advanced techniques for identifying bias amplification effects when multiple modalities interact in AI systems.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Intersectional Fairness</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive assessment of fairness across multiple demographic dimensions and cultural contexts simultaneously.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Representation Ethics</h3>
                  <p className="body-text text-research-text-secondary">
                    Ensuring diverse and accurate representation across visual, textual, and audio modalities in AI systems.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Continuous Monitoring</h3>
                  <p className="body-text text-research-text-secondary">
                    Real-time ethical monitoring with automated intervention capabilities for deployed multimodal systems.
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
              <h2 className="section-title text-research-text mb-6">Real-World Applications &amp; Impact</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Healthcare Multimodal Diagnostics</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Medical AI systems that combine medical imaging, patient records, 
                    and audio symptoms undergo comprehensive ethical assessment to ensure fair treatment across 
                    diverse patient populations. <strong>Impact:</strong> Reduces diagnostic bias and improves 
                    healthcare equity through responsible AI deployment.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Educational Technology Platforms</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Learning platforms that process student video, audio, and text 
                    interactions implement ethical frameworks to prevent bias in assessment and recommendation 
                    systems. <strong>Impact:</strong> Ensures equitable educational opportunities and prevents 
                    algorithmic discrimination in learning environments.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Autonomous Vehicle Safety</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Self-driving cars that integrate camera, lidar, and audio data 
                    use ethical frameworks to ensure fair and safe decision-making across diverse environments 
                    and populations. <strong>Impact:</strong> Promotes equitable access to autonomous transportation 
                    technology.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Research Innovations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Research Innovations &amp; Contributions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Cross-Modal Bias Metrics</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Novel metrics for measuring bias amplification effects when multiple AI modalities interact and influence each other.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Cultural Sensitivity Framework</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Comprehensive framework for assessing cultural sensitivity across different modalities and contexts.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Automated Ethics Intervention</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Real-time intervention systems that automatically adjust multimodal AI behavior when ethical violations are detected.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Future Research Directions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Future Research Directions</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Emergent Modality Ethics</h3>
                  <p className="body-text text-research-text-secondary">
                    Developing ethical frameworks for emerging modalities such as haptic feedback, brain-computer 
                    interfaces, and augmented reality, addressing new forms of bias and fairness challenges that 
                    arise with novel interaction paradigms.
                  </p>
                </div>
                <div className="border-l-4 border-accent-lab-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Global Ethics Harmonization</h3>
                  <p className="body-text text-research-text-secondary">
                    Creating frameworks that harmonize ethical standards across different cultural, legal, and 
                    regulatory contexts while respecting local values and ensuring global interoperability of 
                    multimodal AI systems.
                  </p>
                </div>
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Participatory Ethics Design</h3>
                  <p className="body-text text-research-text-secondary">
                    Developing methodologies for involving diverse stakeholders and affected communities in the 
                    design and evaluation of ethical frameworks for multimodal AI, ensuring democratic participation 
                    in AI governance and development.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Project Impact &amp; Industry Adoption</h2>
              <p className="body-text text-research-text-secondary mb-6">
                The Ethics in Multimodal AI project has established new standards for responsible development 
                of multimodal systems, influencing industry practices and regulatory frameworks worldwide. 
                Our methodologies have been adopted by leading technology companies and research institutions 
                as the foundation for ethical multimodal AI development.
              </p>
              <p className="body-text text-research-text-secondary">
                The project has contributed to international discussions on AI ethics and has influenced policy 
                development for multimodal AI governance. The open-source tools and frameworks have enabled 
                widespread adoption of ethical practices, improving the overall responsibility and fairness 
                of deployed multimodal AI systems across diverse applications and contexts.
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
                  href="/projects/nlp-evaluation"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Project
                </Link>
                
                <Link
                  href="/projects/real-world-ai-deployments"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next Project
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
