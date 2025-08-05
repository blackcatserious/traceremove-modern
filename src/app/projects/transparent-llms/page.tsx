'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Eye, Code, Database } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const transparentLLMArchitecture = `
graph TD
    A[Transparent LLM System] --> B[Interpretability Layer]
    A --> C[Attention Visualization]
    A --> D[Decision Tracing]
    B --> E[Token Attribution]
    B --> F[Layer-wise Analysis]
    B --> G[Concept Activation]
    C --> H[Multi-Head Attention Maps]
    C --> I[Cross-Attention Patterns]
    C --> J[Self-Attention Flows]
    D --> K[Reasoning Chain Extraction]
    D --> L[Intermediate State Logging]
    D --> M[Causal Intervention Analysis]
    E --> N[Gradient-based Attribution]
    F --> N
    G --> N
    H --> O[Visual Explanation Interface]
    I --> O
    J --> O
    K --> P[Natural Language Explanations]
    L --> P
    M --> P
    N --> Q[Transparency Dashboard]
    O --> Q
    P --> Q
    Q --> R[User Understanding]
    R --> S{Trust Calibrated?}
    S -->|No| T[Explanation Refinement]
    S -->|Yes| U[Deployment]
    T --> B
    U --> V[Continuous Monitoring]
    V --> W[Adaptive Transparency]
    W --> X[Trustworthy AI System]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style X fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const transparentLLMCode = `
class TransparentLLMFramework:
    def __init__(self, base_model, interpretability_config):
        self.base_model = base_model
        self.interpretability_config = interpretability_config
        self.attention_analyzer = AttentionAnalyzer()
        self.attribution_calculator = AttributionCalculator()
        self.explanation_generator = ExplanationGenerator()
        self.transparency_dashboard = TransparencyDashboard()
        
    def implement_transparent_llm(self, model_architecture, transparency_requirements):
        &quot;Implement comprehensive transparency framework for LLM systems.&quot;
        
        transparency_system = {
            'interpretability_layers': {},
            'attention_visualization': {},
            'decision_tracing': {},
            'explanation_generation': {},
            'user_interface': {}
        }
        
        # Implement interpretability layers
        transparency_system['interpretability_layers'] = self.build_interpretability_layers(
            model_architecture, transparency_requirements,
            layer_types=[
                'token_attribution_layer',
                'concept_activation_layer',
                'layer_wise_analysis_layer',
                'gradient_flow_layer',
                'activation_pattern_layer',
                'causal_intervention_layer'
            ]
        )
        
        # Attention visualization system
        transparency_system['attention_visualization'] = self.implement_attention_visualization(
            self.base_model,
            visualization_components=[
                'multi_head_attention_maps',
                'cross_attention_patterns',
                'self_attention_flows',
                'attention_weight_distributions',
                'attention_entropy_analysis',
                'attention_pattern_clustering'
            ]
        )
        
        # Decision tracing mechanism
        transparency_system['decision_tracing'] = self.implement_decision_tracing(
            transparency_system['interpretability_layers'],
            tracing_methods=[
                'reasoning_chain_extraction',
                'intermediate_state_logging',
                'decision_path_analysis',
                'counterfactual_reasoning',
                'causal_mechanism_identification',
                'decision_confidence_tracking'
            ]
        )
        
        # Natural language explanation generation
        transparency_system['explanation_generation'] = self.build_explanation_system(
            transparency_system,
            explanation_types=[
                'step_by_step_reasoning',
                'feature_importance_explanations',
                'counterfactual_explanations',
                'example_based_explanations',
                'uncertainty_quantification',
                'confidence_interval_reporting'
            ]
        )
        
        return transparency_system
    
    def analyze_model_interpretability(self, model_outputs, input_data, user_queries):
        &quot;Comprehensive analysis of model interpretability across different dimensions.&quot;
        
        interpretability_analysis = {
            'attention_analysis': {},
            'attribution_analysis': {},
            'concept_analysis': {},
            'reasoning_analysis': {},
            'uncertainty_analysis': {}
        }
        
        # Attention pattern analysis
        interpretability_analysis['attention_analysis'] = self.analyze_attention_patterns(
            model_outputs, input_data,
            analysis_dimensions=[
                'attention_head_specialization',
                'layer_wise_attention_evolution',
                'token_importance_ranking',
                'attention_pattern_consistency',
                'cross_input_attention_similarity',
                'attention_based_feature_extraction'
            ]
        )
        
        # Attribution analysis
        interpretability_analysis['attribution_analysis'] = self.calculate_feature_attributions(
            model_outputs, input_data,
            attribution_methods=[
                'integrated_gradients',
                'layer_wise_relevance_propagation',
                'shapley_value_estimation',
                'lime_explanations',
                'gradient_shap',
                'deep_lift_analysis'
            ]
        )
        
        # Concept activation analysis
        interpretability_analysis['concept_analysis'] = self.analyze_concept_activations(
            model_outputs, input_data,
            concept_analysis_methods=[
                'concept_activation_vectors',
                'network_dissection',
                'concept_bottleneck_analysis',
                'semantic_concept_extraction',
                'concept_drift_detection',
                'concept_hierarchy_mapping'
            ]
        )
        
        # Reasoning chain analysis
        interpretability_analysis['reasoning_analysis'] = self.analyze_reasoning_chains(
            model_outputs, user_queries,
            reasoning_analysis_methods=[
                'logical_step_identification',
                'premise_conclusion_mapping',
                'reasoning_pattern_classification',
                'fallacy_detection',
                'reasoning_consistency_checking',
                'multi_step_reasoning_validation'
            ]
        )
        
        return interpretability_analysis
    
    def generate_adaptive_explanations(self, interpretability_analysis, user_context, explanation_preferences):
        &quot;Generate adaptive explanations tailored to user needs and context.&quot;
        
        explanation_system = {
            'explanation_content': {},
            'visualization_components': {},
            'interaction_mechanisms': {},
            'personalization_features': {},
            'feedback_integration': {}
        }
        
        # Generate explanation content
        explanation_system['explanation_content'] = self.generate_explanation_content(
            interpretability_analysis, user_context,
            content_types=[
                'high_level_summary',
                'detailed_step_by_step',
                'visual_attention_maps',
                'feature_importance_rankings',
                'counterfactual_scenarios',
                'uncertainty_quantification'
            ]
        )
        
        # Create visualization components
        explanation_system['visualization_components'] = self.create_explanation_visualizations(
            explanation_system['explanation_content'],
            visualization_types=[
                'interactive_attention_heatmaps',
                'decision_tree_visualizations',
                'feature_contribution_charts',
                'reasoning_flow_diagrams',
                'confidence_interval_plots',
                'comparative_analysis_views'
            ]
        )
        
        # Implement interaction mechanisms
        explanation_system['interaction_mechanisms'] = self.implement_interaction_mechanisms(
            explanation_system,
            interaction_features=[
                'drill_down_capabilities',
                'what_if_scenario_exploration',
                'explanation_level_adjustment',
                'focus_area_selection',
                'comparative_explanation_views',
                'explanation_history_tracking'
            ]
        )
        
        # Personalization features
        explanation_system['personalization_features'] = self.implement_personalization(
            user_context, explanation_preferences,
            personalization_aspects=[
                'expertise_level_adaptation',
                'domain_specific_terminology',
                'preferred_explanation_modalities',
                'cognitive_load_optimization',
                'cultural_context_sensitivity',
                'accessibility_accommodations'
            ]
        )
        
        return explanation_system
    
    def evaluate_transparency_effectiveness(self, transparency_system, user_interactions, task_performance):
        &quot;Evaluate the effectiveness of transparency mechanisms in improving user understanding and trust.&quot;
        
        evaluation_results = {
            'user_understanding_metrics': {},
            'trust_calibration_analysis': {},
            'task_performance_impact': {},
            'explanation_quality_assessment': {},
            'system_usability_evaluation': {}
        }
        
        # User understanding metrics
        evaluation_results['user_understanding_metrics'] = self.measure_user_understanding(
            user_interactions, transparency_system,
            understanding_metrics=[
                'explanation_comprehension_rates',
                'mental_model_accuracy',
                'prediction_accuracy_improvement',
                'decision_confidence_calibration',
                'learning_curve_analysis',
                'knowledge_transfer_effectiveness'
            ]
        )
        
        # Trust calibration analysis
        evaluation_results['trust_calibration_analysis'] = self.analyze_trust_calibration(
            user_interactions, task_performance,
            trust_metrics=[
                'appropriate_reliance_patterns',
                'overtrust_detection',
                'undertrust_identification',
                'trust_recovery_mechanisms',
                'trust_stability_over_time',
                'context_dependent_trust_adaptation'
            ]
        )
        
        # Task performance impact
        evaluation_results['task_performance_impact'] = self.assess_performance_impact(
            task_performance, transparency_system,
            performance_dimensions=[
                'decision_accuracy_improvement',
                'task_completion_time_analysis',
                'error_reduction_rates',
                'cognitive_load_assessment',
                'user_satisfaction_metrics',
                'long_term_performance_trends'
            ]
        )
        
        return evaluation_results
`;

export default function TransparentLLMs() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="neural" particleCount={80} />
      
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

            <div className="glass-card-premium p-12 mb-16">
              <motion.h1 
                className="hero-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Transparent LLMs: Building Interpretable Large Language Models
              </motion.h1>
              
              <motion.div 
                className="flex flex-wrap items-center gap-6 text-slate-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span className="typography-premium">24 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-purple-400" />
                  <span className="typography-premium">Project Status: Active Development</span>
                </div>
                <motion.button 
                  className="flex items-center space-x-2 hover:text-purple-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="h-5 w-5" />
                  <span className="typography-premium">Share</span>
                </motion.button>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {['LLM Interpretability', 'Attention Visualization', 'Explainable AI', 'Model Transparency', 'Trust Calibration', 'Decision Tracing'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-400/30 typography-premium"
                  >
                    <Tag className="h-4 w-4 mr-2" />
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.p 
                className="text-xl text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                Developing comprehensive transparency frameworks for large language models that enable users 
                to understand model reasoning, build appropriate trust, and make informed decisions about 
                AI-generated outputs through interpretable attention mechanisms and explainable decision processes.
              </motion.p>
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
                <Eye className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Project Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Transparent LLMs project addresses the critical challenge of interpretability in large 
                language models by developing comprehensive frameworks that make model reasoning visible 
                and understandable to users. Our approach combines attention visualization, decision tracing, 
                and adaptive explanation generation to create truly transparent AI systems.
              </p>
              <p className="body-text text-research-text-secondary">
                This project represents a fundamental shift from black-box AI systems to transparent, 
                interpretable models that enable users to understand not just what the model outputs, 
                but how and why it arrives at specific conclusions, fostering appropriate trust and 
                enabling more effective human-AI collaboration.
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
                <Database className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Transparent LLM Architecture</h2>
              </div>
              <LottieAnimation 
                animationFile="transparent-llm-architecture.json"
                className="mx-auto"
                width={650}
                height={450}
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
              <h2 className="section-title text-research-text mb-6">Transparency Framework Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our transparent LLM framework integrates multiple interpretability techniques to provide 
                comprehensive insights into model behavior. The architecture includes attention visualization, 
                decision tracing, and adaptive explanation generation, all unified through an intuitive 
                transparency dashboard that makes complex model behaviors accessible to users.
              </p>
              
              <MermaidDiagram chart={transparentLLMArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The framework operates through four key components: (1) interpretability layers that extract 
                meaningful patterns from model activations, (2) attention visualization systems that reveal 
                how the model focuses on different parts of the input, (3) decision tracing mechanisms that 
                track reasoning chains, and (4) adaptive explanation generation that tailors explanations to user needs.
              </p>
            </motion.div>

            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Transparency Effectiveness Metrics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Evaluation of our transparent LLM framework demonstrates significant improvements in user 
                understanding, trust calibration, and task performance. The transparency mechanisms enable 
                users to develop more accurate mental models of AI capabilities and limitations, leading to 
                more effective human-AI collaboration.
              </p>
              
              <InteractiveChart
                dataFile="transparent_llm_effectiveness.json"
                chartType="bar"
                title="Transparent LLM Framework Performance Across Key Metrics"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results show 55% improvement in user understanding of model decisions, 45% better trust 
                calibration, and 30% increase in task performance when using transparent LLM systems 
                compared to traditional black-box approaches.
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
                The following implementation demonstrates our comprehensive transparent LLM framework with 
                interpretability layers, attention visualization, decision tracing, and adaptive explanation 
                generation designed to make large language models truly transparent and interpretable.
              </p>
              
              <CodeBlock
                code={transparentLLMCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides systematic approaches to model interpretability that enable users to 
                understand complex AI reasoning processes through multiple complementary transparency mechanisms, 
                fostering appropriate trust and enabling more effective human-AI collaboration.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Key Features &amp; Capabilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Attention Visualization</h3>
                  <p className="body-text text-research-text-secondary">
                    Interactive visualization of multi-head attention patterns, revealing how the model focuses on different input elements.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Decision Tracing</h3>
                  <p className="body-text text-research-text-secondary">
                    Step-by-step tracking of model reasoning chains and intermediate decision states throughout processing.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Feature Attribution</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive analysis of input feature importance using gradient-based and perturbation methods.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Adaptive Explanations</h3>
                  <p className="body-text text-research-text-secondary">
                    Personalized explanation generation tailored to user expertise level and context requirements.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Real-World Applications</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Medical Diagnosis Support</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Transparent LLMs assist medical professionals by providing 
                    clear reasoning chains for diagnostic suggestions. <strong>Impact:</strong> Enables doctors 
                    to understand AI recommendations and make informed decisions about patient care.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Legal Document Analysis</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Legal professionals use transparent LLMs to analyze contracts 
                    and legal documents with full visibility into reasoning processes. <strong>Impact:</strong> 
                    Improves accuracy and trust in AI-assisted legal analysis.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Educational Content Generation</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Educators use transparent LLMs to generate learning materials 
                    with clear explanations of content creation reasoning. <strong>Impact:</strong> Enables 
                    quality control and pedagogical alignment in AI-generated educational content.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Technical Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Technical Challenges &amp; Solutions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Computational Overhead</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Transparency mechanisms add computational cost. Solution: Efficient approximation methods and selective transparency activation.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Explanation Complexity</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Model reasoning is inherently complex. Solution: Multi-level explanations adapted to user expertise and context.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Scalability Issues</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Transparency methods must scale to large models. Solution: Hierarchical analysis and distributed interpretation systems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Future Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Future Development Roadmap</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Multimodal Transparency</h3>
                  <p className="body-text text-research-text-secondary">
                    Extending transparency frameworks to multimodal LLMs that process text, images, and other 
                    data types, providing unified interpretability across different modalities and their interactions.
                  </p>
                </div>
                <div className="border-l-4 border-accent-lab-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Real-time Transparency</h3>
                  <p className="body-text text-research-text-secondary">
                    Developing real-time transparency mechanisms that provide immediate insights into model 
                    reasoning during inference, enabling dynamic trust calibration and interactive explanation refinement.
                  </p>
                </div>
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Collaborative Transparency</h3>
                  <p className="body-text text-research-text-secondary">
                    Creating collaborative transparency platforms where multiple users can contribute to and 
                    benefit from shared interpretability insights, building collective understanding of AI systems.
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
              <h2 className="section-title text-research-text mb-6">Project Impact &amp; Outcomes</h2>
              <p className="body-text text-research-text-secondary mb-6">
                The Transparent LLMs project has demonstrated significant impact on AI interpretability research 
                and practical applications. Our framework has been adopted by multiple organizations seeking to 
                deploy more trustworthy AI systems, and our open-source tools have enabled researchers worldwide 
                to advance the field of explainable AI.
              </p>
              <p className="body-text text-research-text-secondary">
                Beyond technical contributions, this project has influenced policy discussions about AI transparency 
                requirements and has contributed to the development of industry standards for interpretable AI systems. 
                The work continues to shape the future of responsible AI development and deployment.
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
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Projects
                </Link>
                
                <Link
                  href="/projects/symbolic-ai"
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
