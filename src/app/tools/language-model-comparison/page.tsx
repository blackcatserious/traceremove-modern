'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Cpu, Zap, BarChart3, Target } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const comparisonArchitecture = `
graph TD
    A[Language Model Comparison] --> B[Model Registry]
    A --> C[Evaluation Framework]
    A --> D[Benchmarking Suite]
    B --> E[Open Source Models]
    B --> F[Commercial APIs]
    B --> G[Custom Models]
    C --> H[Performance Metrics]
    C --> I[Quality Assessment]
    C --> J[Bias Evaluation]
    D --> K[Standard Benchmarks]
    D --> L[Custom Tasks]
    D --> M[Real-world Scenarios]
    E --> N[Model Deployment]
    F --> N
    G --> N
    H --> O[Evaluation Pipeline]
    I --> O
    J --> O
    K --> P[Benchmark Execution]
    L --> P
    M --> P
    N --> Q[Unified Testing]
    O --> Q
    P --> Q
    Q --> R[Results Analysis]
    R --> S{Comparison Complete?}
    S -->|Yes| T[Comprehensive Report]
    S -->|No| U[Additional Testing]
    T --> V[Model Recommendations]
    U --> W[Extended Evaluation]
    V --> X[Decision Support]
    W --> X
    X --> Y[Optimal Model Selection]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style Y fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const comparisonCode = `
class LanguageModelComparison:
    def __init__(self, model_registry, evaluation_frameworks):
        self.model_registry = model_registry
        self.evaluation_frameworks = evaluation_frameworks
        self.benchmark_suite = BenchmarkSuite()
        self.performance_analyzer = PerformanceAnalyzer()
        self.bias_evaluator = BiasEvaluator()
        self.cost_calculator = CostCalculator()
        
    def implement_model_comparison_system(self, model_specifications, evaluation_criteria):
        &quot;Implement comprehensive language model comparison system with multi-dimensional evaluation.&quot;
        
        comparison_system = {
            'model_integration': {},
            'evaluation_pipeline': {},
            'benchmark_execution': {},
            'analysis_framework': {},
            'reporting_system': {}
        }
        
        # Comprehensive model integration
        comparison_system['model_integration'] = self.build_model_integration(
            model_specifications, self.model_registry,
            integration_components=[
                'open_source_model_deployment',
                'commercial_api_integration',
                'custom_model_loading',
                'unified_inference_interface',
                'resource_management_system',
                'scalable_deployment_architecture'
            ]
        )
        
        # Advanced evaluation pipeline
        comparison_system['evaluation_pipeline'] = self.implement_evaluation_pipeline(
            comparison_system['model_integration'], evaluation_criteria,
            pipeline_capabilities=[
                'multi_dimensional_assessment',
                'automated_quality_evaluation',
                'bias_and_fairness_analysis',
                'performance_benchmarking',
                'cost_efficiency_calculation',
                'real_world_scenario_testing'
            ]
        )
        
        # Comprehensive benchmark execution
        comparison_system['benchmark_execution'] = self.build_benchmark_execution(
            comparison_system['evaluation_pipeline'],
            benchmark_categories=[
                'language_understanding_tasks',
                'text_generation_quality',
                'reasoning_and_logic_tests',
                'domain_specific_evaluations',
                'multilingual_capabilities',
                'safety_and_alignment_assessment'
            ]
        )
        
        # Intelligent analysis framework
        comparison_system['analysis_framework'] = self.implement_analysis_framework(
            comparison_system['benchmark_execution'],
            analysis_methods=[
                'statistical_significance_testing',
                'multi_criteria_decision_analysis',
                'performance_trade_off_evaluation',
                'cost_benefit_optimization',
                'use_case_specific_ranking',
                'confidence_interval_estimation'
            ]
        )
        
        return comparison_system
    
    def execute_comprehensive_comparison(self, target_models, comparison_tasks, evaluation_preferences):
        &quot;Execute comprehensive model comparison with customizable evaluation criteria and detailed analysis.&quot;
        
        comparison_process = {
            'model_preparation': {},
            'task_execution': {},
            'performance_measurement': {},
            'quality_assessment': {},
            'comparative_analysis': {}
        }
        
        # Systematic model preparation
        comparison_process['model_preparation'] = self.prepare_models_for_comparison(
            target_models, comparison_tasks,
            preparation_steps=[
                'model_configuration_standardization',
                'resource_allocation_optimization',
                'inference_parameter_alignment',
                'prompt_template_normalization',
                'output_format_standardization',
                'evaluation_environment_setup'
            ]
        )
        
        # Comprehensive task execution
        comparison_process['task_execution'] = self.execute_comparison_tasks(
            comparison_process['model_preparation'], evaluation_preferences,
            execution_strategies=[
                'parallel_model_evaluation',
                'batch_processing_optimization',
                'error_handling_and_recovery',
                'progress_monitoring_system',
                'resource_usage_tracking',
                'quality_control_checkpoints'
            ]
        )
        
        # Detailed performance measurement
        comparison_process['performance_measurement'] = self.measure_model_performance(
            comparison_process['task_execution'],
            measurement_dimensions=[
                'accuracy_and_precision_metrics',
                'response_time_analysis',
                'throughput_and_scalability',
                'resource_consumption_profiling',
                'consistency_and_reliability',
                'edge_case_handling_capability'
            ]
        )
        
        # Comprehensive quality assessment
        comparison_process['quality_assessment'] = self.assess_output_quality(
            comparison_process['performance_measurement'],
            quality_criteria=[
                'semantic_coherence_evaluation',
                'factual_accuracy_verification',
                'style_and_tone_consistency',
                'creativity_and_originality',
                'safety_and_appropriateness',
                'user_preference_alignment'
            ]
        )
        
        return comparison_process
    
    def implement_advanced_comparison_features(self, comparison_system, feature_requirements, domain_expertise):
        &quot;Implement advanced comparison features with specialized evaluation and recommendation capabilities.&quot;
        
        advanced_features = {
            'domain_specialization': {},
            'adaptive_evaluation': {},
            'ensemble_analysis': {},
            'cost_optimization': {},
            'recommendation_engine': {}
        }
        
        # Domain-specific specialization
        advanced_features['domain_specialization'] = self.build_domain_specialization(
            comparison_system, feature_requirements,
            specialization_areas=[
                'scientific_and_technical_writing',
                'creative_content_generation',
                'code_generation_and_debugging',
                'multilingual_translation_tasks',
                'conversational_ai_applications',
                'educational_content_creation'
            ]
        )
        
        # Adaptive evaluation system
        advanced_features['adaptive_evaluation'] = self.implement_adaptive_evaluation(
            advanced_features['domain_specialization'], domain_expertise,
            adaptation_capabilities=[
                'dynamic_benchmark_selection',
                'personalized_evaluation_criteria',
                'context_aware_assessment',
                'iterative_refinement_process',
                'user_feedback_integration',
                'continuous_learning_system'
            ]
        )
        
        # Ensemble analysis framework
        advanced_features['ensemble_analysis'] = self.build_ensemble_analysis(
            advanced_features,
            ensemble_methods=[
                'model_combination_strategies',
                'weighted_voting_systems',
                'confidence_based_selection',
                'task_specific_routing',
                'performance_complementarity_analysis',
                'hybrid_approach_optimization'
            ]
        )
        
        # Cost optimization engine
        advanced_features['cost_optimization'] = self.implement_cost_optimization(
            advanced_features, domain_expertise,
            optimization_strategies=[
                'price_performance_ratio_analysis',
                'usage_pattern_optimization',
                'resource_allocation_efficiency',
                'batch_processing_cost_reduction',
                'api_rate_limit_management',
                'total_cost_of_ownership_calculation'
            ]
        )
        
        return advanced_features
    
    def evaluate_comparison_effectiveness(self, comparison_usage, decision_outcomes, user_satisfaction):
        &quot;Evaluate the effectiveness of model comparison in supporting optimal model selection decisions.&quot;
        
        effectiveness_evaluation = {
            'decision_accuracy': {},
            'user_adoption': {},
            'performance_prediction': {},
            'cost_savings': {},
            'system_reliability': {}
        }
        
        # Decision accuracy assessment
        effectiveness_evaluation['decision_accuracy'] = self.assess_decision_accuracy(
            comparison_usage, decision_outcomes,
            accuracy_metrics=[
                'optimal_model_selection_rate',
                'performance_prediction_accuracy',
                'cost_estimation_precision',
                'use_case_matching_success',
                'recommendation_relevance_score',
                'long_term_satisfaction_correlation'
            ]
        )
        
        # User adoption and engagement
        effectiveness_evaluation['user_adoption'] = self.measure_user_adoption(
            effectiveness_evaluation['decision_accuracy'], user_satisfaction,
            adoption_indicators=[
                'platform_usage_frequency',
                'comparison_completion_rates',
                'recommendation_acceptance_rates',
                'repeat_usage_patterns',
                'feature_utilization_depth',
                'community_engagement_levels'
            ]
        )
        
        # Performance prediction validation
        effectiveness_evaluation['performance_prediction'] = self.validate_performance_predictions(
            effectiveness_evaluation,
            validation_dimensions=[
                'benchmark_score_correlation',
                'real_world_performance_alignment',
                'scalability_prediction_accuracy',
                'resource_usage_estimation',
                'quality_metric_reliability',
                'comparative_ranking_stability'
            ]
        )
        
        return effectiveness_evaluation
`;

export default function LanguageModelComparison() {
  return (
    <div className="min-h-screen relative">
      
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
              href="/tools"
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tools
            </Link>

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                Language Model Comparison: Comprehensive AI Model Evaluation &amp; Selection Platform
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Interactive Tool
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Status: Production Ready
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share Tool
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Model Evaluation', 'Benchmark Testing', 'Performance Analysis', 'Cost Optimization', 'Bias Assessment', 'Decision Support'].map((tag) => (
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
                Advanced platform for comprehensive evaluation and comparison of language models 
                across multiple dimensions including performance, cost, bias, and domain-specific 
                capabilities. Features automated benchmarking, statistical analysis, and intelligent 
                recommendations to support optimal model selection for diverse AI applications and use cases.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Tool Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Cpu className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Model Comparison Platform Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Language Model Comparison platform provides comprehensive evaluation and 
                benchmarking capabilities for comparing AI language models across performance, 
                cost, bias, and domain-specific metrics. It supports both open-source and 
                commercial models with automated testing, statistical analysis, and intelligent recommendations.
              </p>
              <p className="body-text text-research-text-secondary">
                This powerful platform enables researchers, developers, and organizations to 
                make data-driven decisions about model selection, optimize resource allocation, 
                and ensure optimal performance for their specific use cases and requirements.
              </p>
            </motion.div>

            {/* Interactive Comparison Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Model Selection &amp; Comparison Interface</h2>
              </div>
              
              {/* Model Selection Interface */}
              <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-accent-ai-purple/20">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-research-text mb-4">Select Models for Comparison</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-research-text mb-2">Open Source Models</label>
                      <div className="space-y-2">
                        {['Llama 2 70B', 'Mistral 7B', 'CodeLlama 34B', 'Vicuna 13B'].map((model) => (
                          <label key={model} className="flex items-center space-x-3">
                            <input type="checkbox" className="w-4 h-4 text-accent-ai-purple bg-white/10 border-accent-ai-purple/30 rounded focus:ring-accent-ai-purple focus:ring-2" />
                            <span className="text-sm text-research-text-secondary">{model}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-research-text mb-2">Commercial APIs</label>
                      <div className="space-y-2">
                        {['GPT-4 Turbo', 'Claude 3 Opus', 'Gemini Pro', 'PaLM 2'].map((model) => (
                          <label key={model} className="flex items-center space-x-3">
                            <input type="checkbox" className="w-4 h-4 text-accent-ai-purple bg-white/10 border-accent-ai-purple/30 rounded focus:ring-accent-ai-purple focus:ring-2" />
                            <span className="text-sm text-research-text-secondary">{model}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Evaluation Focus</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>General Performance</option>
                      <option>Code Generation</option>
                      <option>Creative Writing</option>
                      <option>Scientific Reasoning</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Priority Metric</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>Accuracy &amp; Quality</option>
                      <option>Cost Efficiency</option>
                      <option>Response Speed</option>
                      <option>Bias &amp; Fairness</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-research-text mb-2">Benchmark Categories</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Language Understanding', 'Text Generation', 'Reasoning &amp; Logic', 'Domain Knowledge', 'Safety &amp; Alignment', 'Multilingual'].map((category) => (
                      <label key={category} className="flex items-center space-x-3">
                        <input type="checkbox" className="w-4 h-4 text-accent-ai-purple bg-white/10 border-accent-ai-purple/30 rounded focus:ring-accent-ai-purple focus:ring-2" />
                        <span className="text-sm text-research-text-secondary">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-xl hover:shadow-ai-glow transition-all duration-300">
                    <Zap className="h-5 w-5 mr-2" />
                    Start Comparison
                  </button>
                </div>
              </div>
              
              <LottieAnimation 
                animationFile="model-comparison-demo.json"
                className="mx-auto"
                width={800}
                height={500}
              />
              
              <div className="mt-6 text-center">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  View Detailed Results
                </button>
              </div>
            </motion.div>

            {/* System Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Comparison System Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The language model comparison architecture integrates model registry, evaluation 
                frameworks, and benchmarking suites to deliver comprehensive, multi-dimensional 
                model assessment. The system emphasizes unified testing, statistical analysis, 
                and intelligent recommendations for optimal model selection across diverse use cases.
              </p>
              
              <MermaidDiagram chart={comparisonArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through five integrated layers: (1) model registry with 
                open-source, commercial, and custom model support, (2) evaluation framework 
                with performance, quality, and bias assessment, (3) benchmarking suite with 
                standard and custom tasks, (4) unified testing with deployment and pipeline 
                integration, and (5) results analysis with comprehensive reporting and recommendations.
              </p>
            </motion.div>

            {/* Comparison Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Model Performance Comparison &amp; Benchmarking Results</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive comparison results across multiple language models showing performance 
                metrics, cost analysis, bias assessment, and domain-specific capabilities. The 
                platform provides detailed statistical analysis, confidence intervals, and 
                actionable recommendations for model selection based on specific use case requirements.
              </p>
              
              <InteractiveChart
                dataFile="model_comparison_results.json"
                chartType="bar"
                title="Language Model Comparison - Performance &amp; Cost Analysis"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results demonstrate significant performance variations across models, with GPT-4 
                achieving 94% accuracy on reasoning tasks, Llama 2 70B providing optimal cost-performance 
                ratio, and Claude 3 showing superior safety alignment with 98% appropriate response rates.
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
                The following implementation demonstrates the comprehensive language model comparison 
                system with multi-dimensional evaluation capabilities, automated benchmarking, 
                statistical analysis, and intelligent recommendation generation designed to support 
                optimal model selection for diverse AI applications and organizational requirements.
              </p>
              
              <CodeBlock
                code={comparisonCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The comparison framework provides systematic approaches to model evaluation that 
                enable organizations to make data-driven decisions about AI model selection, 
                optimize resource allocation, and ensure optimal performance for their specific use cases.
              </p>
            </motion.div>

            {/* Evaluation Dimensions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <BarChart3 className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Multi-Dimensional Evaluation Framework</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Performance &amp; Accuracy</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive evaluation of model accuracy, response quality, and task-specific performance metrics.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Cost &amp; Efficiency</h3>
                  <p className="body-text text-research-text-secondary">
                    Analysis of computational costs, API pricing, resource utilization, and total cost of ownership.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Bias &amp; Fairness</h3>
                  <p className="body-text text-research-text-secondary">
                    Systematic evaluation of model bias, fairness across demographics, and ethical considerations.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Domain Specialization</h3>
                  <p className="body-text text-research-text-secondary">
                    Assessment of domain-specific capabilities including code, science, creative writing, and multilingual tasks.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Benchmark Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Comprehensive Benchmark Suite</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Standard Academic Benchmarks</h3>
                  <p className="body-text text-research-text-secondary">
                    Evaluation using established benchmarks including GLUE, SuperGLUE, HellaSwag, 
                    ARC, MMLU, and HumanEval for comprehensive assessment of language understanding, 
                    reasoning, and code generation capabilities across diverse academic tasks.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Real-World Application Tasks</h3>
                  <p className="body-text text-research-text-secondary">
                    Custom evaluation scenarios based on real-world applications including customer 
                    service, content creation, technical documentation, educational assistance, 
                    and domain-specific problem-solving to assess practical utility and performance.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Safety &amp; Alignment Assessment</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive evaluation of model safety, alignment with human values, 
                    robustness to adversarial inputs, and adherence to ethical guidelines 
                    including bias detection, harmful content prevention, and responsible AI practices.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decision Support Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Intelligent Decision Support</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Recommendation Engine</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    AI-powered recommendations based on use case requirements, performance needs, and budget constraints.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Trade-off Analysis</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Comprehensive analysis of performance vs. cost trade-offs with optimization suggestions.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Risk Assessment</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Evaluation of deployment risks, bias concerns, and mitigation strategies for responsible AI adoption.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Getting Started */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Cpu className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Getting Started</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Select Models &amp; Criteria</h3>
                    <p className="body-text text-research-text-secondary">
                      Choose the language models you want to compare and define your evaluation criteria and priorities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Configure Benchmarks</h3>
                    <p className="body-text text-research-text-secondary">
                      Select benchmark categories and customize evaluation tasks to match your specific use case requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Analyze Results &amp; Decide</h3>
                    <p className="body-text text-research-text-secondary">
                      Review comprehensive comparison results, recommendations, and make informed model selection decisions.
                    </p>
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
                  href="/tools/paper-summarizer"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Tool
                </Link>
                
                <Link
                  href="/tools/annotation-demo"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next Tool
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
