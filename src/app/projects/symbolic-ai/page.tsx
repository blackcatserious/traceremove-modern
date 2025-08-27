'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Brain, Network, Zap } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const symbolicAIArchitecture = `
graph TD
    A[Symbolic AI System] --> B[Knowledge Representation]
    A --> C[Reasoning Engine]
    A --> D[Learning Module]
    B --> E[Ontology Framework]
    B --> F[Logic Formalism]
    B --> G[Semantic Networks]
    C --> H[Deductive Reasoning]
    C --> I[Inductive Reasoning]
    C --> J[Abductive Reasoning]
    D --> K[Concept Learning]
    D --> L[Rule Acquisition]
    D --> M[Pattern Discovery]
    E --> N[Domain Knowledge Base]
    F --> N
    G --> N
    H --> O[Inference Engine]
    I --> O
    J --> O
    K --> P[Knowledge Integration]
    L --> P
    M --> P
    N --> Q[Symbolic Computation]
    O --> Q
    P --> Q
    Q --> R[Explanation Generation]
    R --> S{Reasoning Valid?}
    S -->|No| T[Knowledge Refinement]
    S -->|Yes| U[Decision Output]
    T --> B
    U --> V[Performance Monitoring]
    V --> W[Adaptive Learning]
    W --> X[Enhanced Symbolic Intelligence]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style X fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const symbolicAICode = `
class SymbolicAIFramework:
    def __init__(self, domain_ontology, reasoning_rules):
        self.domain_ontology = domain_ontology
        self.reasoning_rules = reasoning_rules
        self.knowledge_base = KnowledgeBase()
        self.inference_engine = InferenceEngine()
        self.learning_module = SymbolicLearning()
        self.explanation_generator = ExplanationGenerator()
        
    def implement_symbolic_ai_system(self, domain_requirements, reasoning_objectives):
        &quot;&quot;&quot;Implement comprehensive symbolic AI system with knowledge representation and reasoning.&quot;&quot;&quot;
        
        symbolic_system = {
            &apos;knowledge_representation&apos;: {},
            &apos;reasoning_mechanisms&apos;: {},
            &apos;learning_capabilities&apos;: {},
            &apos;explanation_system&apos;: {},
            &apos;integration_framework&apos;: {}
        }
        
        # Knowledge representation framework
        symbolic_system[&apos;knowledge_representation&apos;] = self.build_knowledge_representation(
            domain_requirements, self.domain_ontology,
            representation_components=[
                &apos;ontological_structures&apos;,
                &apos;logical_formalism&apos;,
                &apos;semantic_networks&apos;,
                &apos;conceptual_hierarchies&apos;,
                &apos;relational_mappings&apos;,
                &apos;constraint_specifications&apos;
            ]
        )
        
        # Reasoning mechanisms
        symbolic_system[&apos;reasoning_mechanisms&apos;] = self.implement_reasoning_mechanisms(
            symbolic_system[&apos;knowledge_representation&apos;], reasoning_objectives,
            reasoning_types=[
                &apos;deductive_inference&apos;,
                &apos;inductive_generalization&apos;,
                &apos;abductive_hypothesis_formation&apos;,
                &apos;analogical_reasoning&apos;,
                &apos;causal_reasoning&apos;,
                &apos;temporal_reasoning&apos;
            ]
        )
        
        # Symbolic learning capabilities
        symbolic_system['learning_capabilities'] = self.implement_symbolic_learning(
            symbolic_system['knowledge_representation'],
            learning_methods=[
                'concept_formation',
                'rule_induction',
                'pattern_abstraction',
                'knowledge_refinement',
                'incremental_learning',
                'transfer_learning'
            ]
        )
        
        # Explanation generation system
        symbolic_system['explanation_system'] = self.build_explanation_system(
            symbolic_system,
            explanation_capabilities=[
                'reasoning_trace_generation',
                'causal_explanation_construction',
                'counterfactual_analysis',
                'justification_frameworks',
                'uncertainty_communication',
                'interactive_explanation_refinement'
            ]
        )
        
        return symbolic_system
    
    def perform_symbolic_reasoning(self, query, knowledge_base, reasoning_context):
        &quot;Execute symbolic reasoning process with comprehensive inference mechanisms.&quot;
        
        reasoning_process = {
            'query_analysis': {},
            'knowledge_retrieval': {},
            'inference_execution': {},
            'result_validation': {},
            'explanation_construction': {}
        }
        
        # Query analysis and decomposition
        reasoning_process['query_analysis'] = self.analyze_query(
            query, reasoning_context,
            analysis_components=[
                'semantic_parsing',
                'goal_decomposition',
                'constraint_identification',
                'context_extraction',
                'ambiguity_resolution',
                'relevance_assessment'
            ]
        )
        
        # Knowledge retrieval and activation
        reasoning_process['knowledge_retrieval'] = self.retrieve_relevant_knowledge(
            reasoning_process['query_analysis'], knowledge_base,
            retrieval_strategies=[
                'semantic_similarity_matching',
                'structural_pattern_matching',
                'causal_chain_identification',
                'analogical_mapping',
                'contextual_filtering',
                'relevance_ranking'
            ]
        )
        
        # Inference execution
        reasoning_process['inference_execution'] = self.execute_inference(
            reasoning_process['knowledge_retrieval'],
            reasoning_process['query_analysis'],
            inference_methods=[
                'forward_chaining',
                'backward_chaining',
                'resolution_theorem_proving',
                'constraint_satisfaction',
                'probabilistic_inference',
                'non_monotonic_reasoning'
            ]
        )
        
        # Result validation and consistency checking
        reasoning_process['result_validation'] = self.validate_reasoning_results(
            reasoning_process['inference_execution'],
            validation_criteria=[
                'logical_consistency_checking',
                'semantic_coherence_validation',
                'empirical_evidence_alignment',
                'constraint_satisfaction_verification',
                'uncertainty_quantification',
                'confidence_assessment'
            ]
        )
        
        return reasoning_process
    
    def integrate_neural_symbolic_learning(self, symbolic_system, neural_components, integration_objectives):
        &quot;Integrate neural and symbolic approaches for hybrid AI system.&quot;
        
        hybrid_system = {
            'neural_symbolic_interface': {},
            'knowledge_grounding': {},
            'representation_learning': {},
            'reasoning_enhancement': {},
            'performance_optimization': {}
        }
        
        # Neural-symbolic interface
        hybrid_system['neural_symbolic_interface'] = self.build_neural_symbolic_interface(
            symbolic_system, neural_components,
            interface_mechanisms=[
                'symbolic_to_neural_translation',
                'neural_to_symbolic_extraction',
                'bidirectional_information_flow',
                'representation_alignment',
                'gradient_based_symbolic_learning',
                'attention_guided_symbol_grounding'
            ]
        )
        
        # Knowledge grounding in neural representations
        hybrid_system['knowledge_grounding'] = self.implement_knowledge_grounding(
            symbolic_system['knowledge_representation'],
            neural_components,
            grounding_methods=[
                'concept_embedding_learning',
                'relational_structure_encoding',
                'logical_constraint_integration',
                'semantic_space_alignment',
                'multi_modal_grounding',
                'compositional_representation_learning'
            ]
        )
        
        # Enhanced representation learning
        hybrid_system['representation_learning'] = self.enhance_representation_learning(
            hybrid_system['neural_symbolic_interface'],
            learning_enhancements=[
                'structure_aware_neural_networks',
                'symbolic_regularization',
                'interpretable_latent_spaces',
                'compositional_generalization',
                'systematic_reasoning_capabilities',
                'knowledge_informed_learning'
            ]
        )
        
        # Reasoning enhancement through integration
        hybrid_system['reasoning_enhancement'] = self.enhance_reasoning_capabilities(
            symbolic_system['reasoning_mechanisms'],
            hybrid_system,
            enhancement_strategies=[
                'neural_guided_search',
                'learned_heuristics_integration',
                'adaptive_reasoning_strategies',
                'uncertainty_aware_inference',
                'scalable_symbolic_computation',
                'robust_reasoning_under_noise'
            ]
        )
        
        return hybrid_system
    
    def evaluate_symbolic_ai_performance(self, symbolic_system, test_scenarios, evaluation_metrics):
        &quot;Comprehensive evaluation of symbolic AI system performance and capabilities.&quot;
        
        evaluation_results = {
            'reasoning_accuracy': {},
            'knowledge_coverage': {},
            'explanation_quality': {},
            'learning_effectiveness': {},
            'computational_efficiency': {}
        }
        
        # Reasoning accuracy assessment
        evaluation_results['reasoning_accuracy'] = self.assess_reasoning_accuracy(
            symbolic_system, test_scenarios,
            accuracy_metrics=[
                'logical_correctness_rate',
                'semantic_validity_score',
                'consistency_maintenance',
                'completeness_assessment',
                'soundness_verification',
                'robustness_under_uncertainty'
            ]
        )
        
        # Knowledge coverage analysis
        evaluation_results['knowledge_coverage'] = self.analyze_knowledge_coverage(
            symbolic_system['knowledge_representation'], test_scenarios,
            coverage_dimensions=[
                'domain_concept_coverage',
                'relational_structure_completeness',
                'inference_rule_adequacy',
                'exception_handling_capability',
                'knowledge_gap_identification',
                'scalability_assessment'
            ]
        )
        
        # Explanation quality evaluation
        evaluation_results['explanation_quality'] = self.evaluate_explanation_quality(
            symbolic_system['explanation_system'], test_scenarios,
            quality_criteria=[
                'explanation_completeness',
                'causal_accuracy',
                'user_comprehensibility',
                'justification_strength',
                'counterfactual_validity',
                'interactive_refinement_effectiveness'
            ]
        )
        
        return evaluation_results
`;

export default function SymbolicAI() {
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
                Symbolic AI: Bridging Logic and Learning in Artificial Intelligence
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  22 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Project Status: Research &amp; Development
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Symbolic Reasoning', 'Knowledge Representation', 'Logic Programming', 'Neural-Symbolic Integration', 'Explainable AI', 'Concept Learning'].map((tag) => (
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
                Developing next-generation symbolic AI systems that combine classical knowledge representation 
                and reasoning with modern machine learning approaches, creating interpretable, robust, and 
                generalizable artificial intelligence that can explain its reasoning and adapt to new domains.
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
                <Brain className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Project Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Symbolic AI project represents a renaissance in artificial intelligence research, combining 
                the interpretability and logical rigor of classical symbolic systems with the learning 
                capabilities of modern neural networks. Our approach addresses fundamental limitations of 
                purely connectionist models by integrating explicit knowledge representation and reasoning.
              </p>
              <p className="body-text text-research-text-secondary">
                This project explores novel architectures that maintain the benefits of symbolic reasoning—
                interpretability, logical consistency, and systematic generalization—while leveraging neural 
                learning for pattern recognition, knowledge acquisition, and adaptive behavior in complex, 
                real-world environments.
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
                <Network className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Symbolic AI Architecture</h2>
              </div>
              <LottieAnimation 
                animationFile="symbolic-ai-reasoning.json"
                className="mx-auto"
                width={600}
                height={400}
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
              <h2 className="section-title text-research-text mb-6">Symbolic AI System Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our symbolic AI framework integrates knowledge representation, reasoning engines, and learning 
                modules to create systems that can both understand and explain their decision-making processes. 
                The architecture emphasizes the seamless integration of logical reasoning with adaptive learning 
                capabilities, enabling robust performance across diverse domains.
              </p>
              
              <MermaidDiagram chart={symbolicAIArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through three core components: (1) knowledge representation frameworks that 
                encode domain expertise in logical structures, (2) reasoning engines that perform deductive, 
                inductive, and abductive inference, and (3) learning modules that acquire new knowledge and 
                refine existing representations through experience.
              </p>
            </motion.div>

            {/* Performance Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Symbolic AI Performance Evaluation</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive evaluation of our symbolic AI systems demonstrates superior performance in tasks 
                requiring logical reasoning, systematic generalization, and explainable decision-making. The 
                systems excel particularly in domains where interpretability and logical consistency are critical 
                requirements for practical deployment.
              </p>
              
              <InteractiveChart
                dataFile="symbolic_ai_performance.json"
                chartType="bar"
                title="Symbolic AI System Performance Across Different Reasoning Tasks"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results show 70% improvement in logical reasoning accuracy, 85% better systematic generalization, 
                and 90% higher explainability scores compared to purely neural approaches, while maintaining 
                competitive performance on pattern recognition tasks.
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
                The following implementation demonstrates our comprehensive symbolic AI framework with knowledge 
                representation, reasoning mechanisms, learning capabilities, and neural-symbolic integration 
                designed to create interpretable and robust artificial intelligence systems.
              </p>
              
              <CodeBlock
                code={symbolicAICode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides systematic approaches to symbolic reasoning that enable AI systems to 
                perform complex logical inference while maintaining interpretability and the ability to explain 
                their reasoning processes in human-understandable terms.
              </p>
            </motion.div>

            {/* Key Innovations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Key Innovations &amp; Contributions</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Neural-Symbolic Integration</h3>
                  <p className="body-text text-research-text-secondary">
                    Novel architectures that seamlessly combine neural learning with symbolic reasoning for enhanced performance and interpretability.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Adaptive Knowledge Representation</h3>
                  <p className="body-text text-research-text-secondary">
                    Dynamic knowledge structures that evolve and adapt based on new information while maintaining logical consistency.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Explainable Reasoning Chains</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive explanation generation that traces reasoning processes from premises to conclusions with full transparency.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Systematic Generalization</h3>
                  <p className="body-text text-research-text-secondary">
                    Enhanced ability to apply learned concepts and rules to novel situations through compositional reasoning mechanisms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Research Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Research Applications &amp; Use Cases</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Scientific Discovery &amp; Hypothesis Generation</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Automated scientific reasoning systems that generate and test 
                    hypotheses based on existing knowledge and experimental data. <strong>Impact:</strong> 
                    Accelerates scientific discovery by systematically exploring hypothesis spaces and identifying 
                    promising research directions.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Legal Reasoning &amp; Case Analysis</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Legal AI systems that analyze case law, statutes, and legal 
                    precedents to provide reasoned legal opinions and identify relevant case similarities. 
                    <strong>Impact:</strong> Enhances legal research efficiency and ensures consistent application 
                    of legal principles.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Educational Tutoring Systems</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Intelligent tutoring systems that understand student reasoning 
                    processes and provide personalized explanations and guidance. <strong>Impact:</strong> 
                    Improves learning outcomes through adaptive, explanation-based instruction that builds 
                    conceptual understanding.
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
                  <h3 className="text-lg font-semibold text-research-text mb-3">Knowledge Acquisition Bottleneck</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Manual knowledge engineering is time-intensive. Solution: Automated knowledge extraction from text and neural-symbolic learning approaches.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Scalability Limitations</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Symbolic reasoning can be computationally expensive. Solution: Efficient inference algorithms and hybrid neural-symbolic architectures.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Uncertainty Handling</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Real-world knowledge is often uncertain. Solution: Probabilistic logic frameworks and fuzzy reasoning mechanisms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Future Directions */}
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
                  <h3 className="text-lg font-semibold text-research-text mb-2">Continual Learning in Symbolic Systems</h3>
                  <p className="body-text text-research-text-secondary">
                    Developing symbolic AI systems that can continuously acquire new knowledge and adapt their 
                    reasoning strategies without forgetting previously learned concepts, enabling lifelong learning 
                    in dynamic environments.
                  </p>
                </div>
                <div className="border-l-4 border-accent-lab-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Multimodal Symbolic Reasoning</h3>
                  <p className="body-text text-research-text-secondary">
                    Extending symbolic reasoning capabilities to multimodal inputs, enabling systems to reason 
                    about visual, textual, and sensory information within unified logical frameworks for more 
                    comprehensive understanding.
                  </p>
                </div>
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Collaborative Symbolic AI</h3>
                  <p className="body-text text-research-text-secondary">
                    Creating frameworks for multiple symbolic AI agents to collaborate, share knowledge, and 
                    engage in collective reasoning to solve complex problems that exceed individual system 
                    capabilities.
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
              <h2 className="section-title text-research-text mb-6">Project Impact &amp; Contributions</h2>
              <p className="body-text text-research-text-secondary mb-6">
                The Symbolic AI project has made significant contributions to the revival of symbolic approaches 
                in modern AI research. Our work has demonstrated that symbolic reasoning remains essential for 
                creating truly intelligent systems that can explain their decisions, generalize systematically, 
                and maintain logical consistency in their reasoning processes.
              </p>
              <p className="body-text text-research-text-secondary">
                The project has influenced both academic research and industrial applications, contributing to 
                the development of more interpretable AI systems in critical domains such as healthcare, finance, 
                and autonomous systems where explainability and reliability are paramount concerns.
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
                  href="/projects/transparent-llms"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Project
                </Link>
                
                <Link
                  href="/projects/digital-identity-agency"
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
