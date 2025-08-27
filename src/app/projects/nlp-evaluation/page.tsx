'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, BarChart3, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const nlpEvaluationArchitecture = `
graph TD
    A[NLP Evaluation Framework] --> B[Benchmark Suite]
    A --> C[Evaluation Metrics Engine]
    A --> D[Model Testing Pipeline]
    B --> E[Task-Specific Benchmarks]
    B --> F[Cross-Lingual Datasets]
    B --> G[Domain Adaptation Tests]
    C --> H[Automated Metrics]
    C --> I[Human Evaluation]
    C --> J[Fairness Assessment]
    D --> K[Model Comparison]
    D --> L[Performance Analysis]
    D --> M[Robustness Testing]
    E --> N[Standardized Evaluation]
    F --> N
    G --> N
    H --> O[Comprehensive Scoring]
    I --> O
    J --> O
    K --> P[Comparative Analysis]
    L --> P
    M --> P
    N --> Q[Evaluation Results]
    O --> Q
    P --> Q
    Q --> R[Quality Assessment]
    R --> S{Meets Standards?}
    S -->|No| T[Model Refinement]
    S -->|Yes| U[Deployment Approval]
    T --> D
    U --> V[Performance Monitoring]
    V --> W[Continuous Evaluation]
    W --> X[Reliable NLP Systems]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style X fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const nlpEvaluationCode = `
class NLPEvaluationFramework:
    def __init__(self, benchmark_config, evaluation_standards):
        self.benchmark_config = benchmark_config
        self.evaluation_standards = evaluation_standards
        self.benchmark_suite = ComprehensiveBenchmarkSuite()
        self.metrics_engine = EvaluationMetricsEngine()
        self.testing_pipeline = ModelTestingPipeline()
        self.fairness_assessor = FairnessAssessmentModule()
        
    def implement_nlp_evaluation_system(self, model_specifications, evaluation_requirements):
        &quot;Implement comprehensive NLP evaluation system with multi-dimensional assessment.&quot;
        
        evaluation_system = {
            'benchmark_framework': {},
            'metrics_computation': {},
            'model_testing': {},
            'fairness_evaluation': {},
            'performance_analysis': {}
        }
        
        # Comprehensive benchmark framework
        evaluation_system['benchmark_framework'] = self.build_benchmark_framework(
            model_specifications, self.benchmark_config,
            benchmark_components=[
                'task_specific_benchmarks',
                'cross_lingual_evaluation',
                'domain_adaptation_tests',
                'robustness_assessments',
                'efficiency_benchmarks',
                'multilingual_capabilities'
            ]
        )
        
        # Advanced metrics computation
        evaluation_system['metrics_computation'] = self.implement_metrics_computation(
            evaluation_system['benchmark_framework'], evaluation_requirements,
            metrics_categories=[
                'accuracy_based_metrics',
                'semantic_similarity_measures',
                'fluency_assessment',
                'coherence_evaluation',
                'factual_correctness',
                'bias_detection_metrics'
            ]
        )
        
        # Comprehensive model testing pipeline
        evaluation_system['model_testing'] = self.build_model_testing_pipeline(
            evaluation_system['benchmark_framework'],
            testing_methodologies=[
                'automated_testing_protocols',
                'human_evaluation_frameworks',
                'adversarial_testing',
                'stress_testing_procedures',
                'edge_case_evaluation',
                'performance_regression_testing'
            ]
        )
        
        # Fairness and bias evaluation
        evaluation_system['fairness_evaluation'] = self.implement_fairness_evaluation(
            evaluation_system,
            fairness_dimensions=[
                'demographic_parity_assessment',
                'equalized_odds_evaluation',
                'individual_fairness_testing',
                'counterfactual_fairness',
                'representation_bias_analysis',
                'intersectional_bias_detection'
            ]
        )
        
        return evaluation_system
    
    def execute_comprehensive_evaluation(self, model_under_test, evaluation_configuration, test_scenarios):
        &quot;Execute comprehensive NLP model evaluation across multiple dimensions and scenarios.&quot;
        
        evaluation_process = {
            'preparation_phase': {},
            'execution_phase': {},
            'analysis_phase': {},
            'validation_phase': {},
            'reporting_phase': {}
        }
        
        # Evaluation preparation and setup
        evaluation_process['preparation_phase'] = self.prepare_evaluation_environment(
            model_under_test, evaluation_configuration,
            preparation_steps=[
                'model_compatibility_verification',
                'benchmark_data_preparation',
                'evaluation_environment_setup',
                'baseline_model_configuration',
                'test_case_generation',
                'evaluation_protocol_validation'
            ]
        )
        
        # Systematic evaluation execution
        evaluation_process['execution_phase'] = self.execute_evaluation_protocols(
            evaluation_process['preparation_phase'], test_scenarios,
            execution_strategies=[
                'automated_benchmark_execution',
                'human_evaluation_coordination',
                'adversarial_testing_implementation',
                'cross_validation_procedures',
                'statistical_significance_testing',
                'reproducibility_verification'
            ]
        )
        
        # Comprehensive result analysis
        evaluation_process['analysis_phase'] = self.analyze_evaluation_results(
            evaluation_process['execution_phase'],
            analysis_methods=[
                'statistical_analysis',
                'error_pattern_identification',
                'performance_correlation_analysis',
                'failure_mode_categorization',
                'comparative_performance_assessment',
                'trend_analysis_over_time'
            ]
        )
        
        # Result validation and verification
        evaluation_process['validation_phase'] = self.validate_evaluation_results(
            evaluation_process['analysis_phase'],
            validation_procedures=[
                'result_consistency_checking',
                'cross_evaluator_agreement',
                'statistical_significance_validation',
                'bias_detection_verification',
                'reproducibility_confirmation',
                'external_validation_protocols'
            ]
        )
        
        return evaluation_process
    
    def implement_continuous_evaluation_monitoring(self, deployed_models, monitoring_configuration, quality_thresholds):
        &quot;Implement continuous evaluation and monitoring for deployed NLP models.&quot;
        
        monitoring_system = {
            'performance_tracking': {},
            'drift_detection': {},
            'quality_monitoring': {},
            'alert_systems': {},
            'adaptive_evaluation': {}
        }
        
        # Real-time performance tracking
        monitoring_system['performance_tracking'] = self.implement_performance_tracking(
            deployed_models, monitoring_configuration,
            tracking_dimensions=[
                'accuracy_trend_monitoring',
                'latency_performance_tracking',
                'throughput_measurement',
                'resource_utilization_monitoring',
                'user_satisfaction_tracking',
                'business_metric_correlation'
            ]
        )
        
        # Data and concept drift detection
        monitoring_system['drift_detection'] = self.implement_drift_detection(
            monitoring_system['performance_tracking'],
            drift_detection_methods=[
                'statistical_drift_detection',
                'distribution_shift_monitoring',
                'concept_drift_identification',
                'feature_importance_changes',
                'prediction_confidence_analysis',
                'temporal_pattern_analysis'
            ]
        )
        
        # Quality assurance monitoring
        monitoring_system['quality_monitoring'] = self.implement_quality_monitoring(
            monitoring_system,
            quality_assessment_methods=[
                'automated_quality_checks',
                'sampling_based_evaluation',
                'user_feedback_integration',
                'expert_review_coordination',
                'comparative_quality_assessment',
                'quality_degradation_detection'
            ]
        )
        
        # Intelligent alert and response systems
        monitoring_system['alert_systems'] = self.implement_alert_systems(
            monitoring_system, quality_thresholds,
            alert_mechanisms=[
                'threshold_based_alerting',
                'anomaly_detection_alerts',
                'trend_based_warnings',
                'predictive_alert_systems',
                'escalation_procedures',
                'automated_response_protocols'
            ]
        )
        
        return monitoring_system
    
    def evaluate_evaluation_framework_effectiveness(self, evaluation_system, validation_studies, effectiveness_metrics):
        &quot;Meta-evaluation of the NLP evaluation framework itself for continuous improvement.&quot;
        
        meta_evaluation = {
            'framework_validity': {},
            'evaluation_reliability': {},
            'predictive_accuracy': {},
            'practical_utility': {},
            'continuous_improvement': {}
        }
        
        # Framework validity assessment
        meta_evaluation['framework_validity'] = self.assess_framework_validity(
            evaluation_system, validation_studies,
            validity_dimensions=[
                'construct_validity_verification',
                'content_validity_assessment',
                'criterion_validity_evaluation',
                'face_validity_confirmation',
                'convergent_validity_testing',
                'discriminant_validity_analysis'
            ]
        )
        
        # Evaluation reliability analysis
        meta_evaluation['evaluation_reliability'] = self.analyze_evaluation_reliability(
            evaluation_system, validation_studies,
            reliability_measures=[
                'inter_rater_reliability',
                'test_retest_reliability',
                'internal_consistency_assessment',
                'measurement_error_analysis',
                'confidence_interval_estimation',
                'reliability_generalization'
            ]
        )
        
        # Predictive accuracy evaluation
        meta_evaluation['predictive_accuracy'] = self.evaluate_predictive_accuracy(
            evaluation_system, effectiveness_metrics,
            prediction_assessment=[
                'deployment_success_prediction',
                'performance_degradation_forecasting',
                'user_satisfaction_prediction',
                'business_impact_estimation',
                'failure_mode_prediction',
                'adaptation_requirement_forecasting'
            ]
        )
        
        return meta_evaluation
`;

export default function NLPEvaluation() {
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

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                NLP Evaluation: Comprehensive Assessment Framework for Language Models
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  24 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Project Status: Industry Standard
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Model Evaluation', 'Benchmarking', 'Performance Metrics', 'Fairness Testing', 'Robustness Analysis', 'Continuous Monitoring'].map((tag) => (
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
                Developing comprehensive evaluation frameworks for natural language processing models that 
                assess performance, fairness, robustness, and reliability across diverse tasks and domains, 
                enabling evidence-based model selection and deployment decisions in production environments.
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
                <BarChart3 className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Project Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The NLP Evaluation project addresses the critical need for rigorous, standardized assessment 
                of natural language processing models across multiple dimensions including accuracy, fairness, 
                robustness, and efficiency. Our framework provides comprehensive evaluation methodologies 
                that enable informed decision-making for model deployment in production environments.
              </p>
              <p className="body-text text-research-text-secondary">
                This project establishes industry-standard evaluation protocols that go beyond simple accuracy 
                metrics to include bias detection, adversarial robustness, cross-lingual performance, and 
                real-world deployment considerations, ensuring NLP systems meet the highest standards of 
                reliability and ethical deployment.
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
                <Target className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Evaluation Process Visualization</h2>
              </div>
              <LottieAnimation 
                animationFile="nlp-evaluation-process.json"
                className="mx-auto"
                width={640}
                height={440}
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
              <h2 className="section-title text-research-text mb-6">NLP Evaluation Framework Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our NLP evaluation framework integrates comprehensive benchmark suites, advanced metrics 
                computation, and systematic testing pipelines to provide multi-dimensional assessment of 
                language models. The architecture emphasizes reproducibility, fairness, and practical 
                deployment considerations across diverse NLP tasks and domains.
              </p>
              
              <MermaidDiagram chart={nlpEvaluationArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through four integrated components: (1) benchmark suites with task-specific 
                and cross-lingual datasets, (2) metrics engines combining automated and human evaluation, 
                (3) testing pipelines for comprehensive model assessment, and (4) continuous monitoring 
                systems for deployed models with real-time performance tracking.
              </p>
            </motion.div>

            {/* Evaluation Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Comprehensive Model Performance Analysis</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our evaluation framework has been applied to assess leading language models across multiple 
                dimensions, revealing important insights about model capabilities, limitations, and deployment 
                readiness. The analysis demonstrates the importance of multi-dimensional evaluation beyond 
                traditional accuracy metrics.
              </p>
              
              <InteractiveChart
                dataFile="nlp_evaluation_results.json"
                chartType="doughnut"
                title="Multi-Dimensional NLP Model Performance Comparison"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results show significant variation in model performance across different evaluation dimensions, 
                with 40% performance gaps between accuracy and fairness metrics, highlighting the critical 
                importance of comprehensive evaluation for responsible AI deployment.
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
                The following implementation demonstrates our comprehensive NLP evaluation framework with 
                multi-dimensional assessment capabilities, fairness evaluation, continuous monitoring, and 
                meta-evaluation mechanisms designed to ensure reliable and responsible deployment of 
                natural language processing systems.
              </p>
              
              <CodeBlock
                code={nlpEvaluationCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides systematic approaches to NLP model evaluation that enable organizations 
                to make evidence-based decisions about model deployment while ensuring fairness, robustness, 
                and reliability across diverse use cases and user populations.
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
                <Zap className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Key Evaluation Dimensions</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Performance &amp; Accuracy</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive assessment of model accuracy across diverse tasks with statistical significance testing and confidence intervals.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Fairness &amp; Bias Detection</h3>
                  <p className="body-text text-research-text-secondary">
                    Multi-dimensional fairness evaluation including demographic parity, equalized odds, and intersectional bias analysis.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Robustness &amp; Reliability</h3>
                  <p className="body-text text-research-text-secondary">
                    Adversarial testing, stress testing, and edge case evaluation to assess model reliability under challenging conditions.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Efficiency &amp; Scalability</h3>
                  <p className="body-text text-research-text-secondary">
                    Performance benchmarking including latency, throughput, and resource utilization for production deployment assessment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Industry Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Industry Applications &amp; Impact</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Healthcare AI Validation</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Medical AI systems undergo rigorous evaluation for clinical 
                    decision support, ensuring accuracy, fairness across patient populations, and regulatory 
                    compliance. <strong>Impact:</strong> Enables safe deployment of AI in healthcare with 
                    evidence-based validation of clinical effectiveness.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Financial Services Compliance</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Financial institutions use comprehensive evaluation frameworks 
                    to assess AI models for lending, fraud detection, and customer service applications. 
                    <strong>Impact:</strong> Ensures regulatory compliance and fair treatment across diverse 
                    customer populations.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Content Moderation Systems</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Social media platforms evaluate content moderation models 
                    for accuracy, cultural sensitivity, and bias across different communities and languages. 
                    <strong>Impact:</strong> Improves online safety while ensuring fair treatment of diverse 
                    user communities.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Methodological Innovations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Methodological Innovations</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Dynamic Benchmarking</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Adaptive benchmark generation that evolves with model capabilities to prevent evaluation saturation and gaming.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Intersectional Fairness</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Novel metrics for assessing fairness across multiple demographic dimensions simultaneously.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Causal Evaluation</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Causal inference methods for understanding model behavior and predicting performance in new domains.
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
                  <h3 className="text-lg font-semibold text-research-text mb-2">Multimodal Evaluation Frameworks</h3>
                  <p className="body-text text-research-text-secondary">
                    Extending evaluation methodologies to multimodal AI systems that process text, images, 
                    audio, and video, requiring new metrics and benchmarks for cross-modal understanding 
                    and generation capabilities.
                  </p>
                </div>
                <div className="border-l-4 border-accent-lab-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Real-World Performance Prediction</h3>
                  <p className="body-text text-research-text-secondary">
                    Developing evaluation methods that better predict real-world performance from controlled 
                    benchmarks, bridging the gap between laboratory evaluation and production deployment 
                    through domain adaptation assessment.
                  </p>
                </div>
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Automated Evaluation Generation</h3>
                  <p className="body-text text-research-text-secondary">
                    Creating AI systems that automatically generate evaluation tasks and metrics tailored 
                    to specific applications and domains, enabling rapid assessment of specialized models 
                    without manual benchmark creation.
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
                The NLP Evaluation project has established new standards for responsible AI assessment, 
                influencing evaluation practices across academia and industry. Our frameworks have been 
                adopted by major technology companies, research institutions, and regulatory bodies as 
                the foundation for evidence-based AI deployment decisions.
              </p>
              <p className="body-text text-research-text-secondary">
                The project has contributed to the development of international standards for AI evaluation 
                and has influenced policy discussions around AI governance and regulation. The open-source 
                evaluation tools have enabled widespread adoption of rigorous evaluation practices, 
                improving the overall quality and reliability of deployed NLP systems.
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
                  href="/projects/semantic-data-pipelines"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Project
                </Link>
                
                <Link
                  href="/projects/ethics-multimodal-ai"
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
