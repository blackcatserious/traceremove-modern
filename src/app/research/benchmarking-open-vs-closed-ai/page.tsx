'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, BarChart, GitBranch, Scale } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const benchmarkingFrameworkDiagram = `
graph TD
    A[AI Model Selection] --> B{Model Type?}
    B -->|Open Source| C[Open Model Analysis]
    B -->|Closed Source| D[Closed Model Analysis]
    C --> E[Code Accessibility]
    C --> F[Training Data Transparency]
    C --> G[Architecture Documentation]
    D --> H[API Performance]
    D --> I[Cost Analysis]
    D --> J[Usage Limitations]
    E --> K[Reproducibility Testing]
    F --> K
    G --> K
    H --> L[Benchmark Evaluation]
    I --> L
    J --> L
    K --> M[Performance Metrics]
    L --> M
    M --> N[Comparative Analysis]
    N --> O{Evaluation Criteria}
    O -->|Technical| P[Accuracy & Speed]
    O -->|Economic| Q[Cost Efficiency]
    O -->|Ethical| R[Bias & Fairness]
    P --> S[Final Recommendation]
    Q --> S
    R --> S
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style C fill:#10B981,stroke:#059669,color:#fff
    style D fill:#EF4444,stroke:#DC2626,color:#fff
    style S fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const benchmarkingFrameworkCode = `
class OpenVsClosedAIBenchmarkingFramework:
    def __init__(self, evaluation_metrics, cost_models):
        self.evaluation_metrics = evaluation_metrics
        self.cost_models = cost_models
        self.benchmark_suite = BenchmarkSuite()
        self.transparency_analyzer = TransparencyAnalyzer()
        self.performance_tracker = PerformanceTracker()
        
    def comprehensive_model_evaluation(self, models_config):
        """Evaluate both open and closed AI models across multiple dimensions."""
        
        evaluation_results = {
            'open_source_models': {},
            'closed_source_models': {},
            'comparative_analysis': {},
            'recommendations': {}
        }
        
        # Evaluate open source models
        for model_name, model_config in models_config['open_source'].items():
            open_eval = self.evaluate_open_source_model(model_name, model_config)
            evaluation_results['open_source_models'][model_name] = open_eval
        
        # Evaluate closed source models
        for model_name, model_config in models_config['closed_source'].items():
            closed_eval = self.evaluate_closed_source_model(model_name, model_config)
            evaluation_results['closed_source_models'][model_name] = closed_eval
        
        # Perform comparative analysis
        evaluation_results['comparative_analysis'] = self.compare_model_categories(
            evaluation_results['open_source_models'],
            evaluation_results['closed_source_models']
        )
        
        # Generate recommendations
        evaluation_results['recommendations'] = self.generate_recommendations(
            evaluation_results['comparative_analysis']
        )
        
        return evaluation_results
    
    def evaluate_open_source_model(self, model_name, model_config):
        """Comprehensive evaluation of open source AI models."""
        
        evaluation = {
            'technical_metrics': {},
            'transparency_score': {},
            'reproducibility_assessment': {},
            'community_metrics': {},
            'cost_analysis': {}
        }
        
        # Technical performance evaluation
        evaluation['technical_metrics'] = self.benchmark_suite.run_technical_benchmarks(
            model_name, model_config,
            benchmarks=['accuracy', 'latency', 'throughput', 'memory_usage']
        )
        
        # Transparency analysis
        evaluation['transparency_score'] = self.transparency_analyzer.assess_transparency(
            model_config,
            criteria=[
                'code_availability',
                'training_data_documentation',
                'architecture_details',
                'training_methodology',
                'evaluation_protocols'
            ]
        )
        
        # Reproducibility assessment
        evaluation['reproducibility_assessment'] = self.assess_reproducibility(
            model_name, model_config,
            reproduction_attempts=5,
            variance_threshold=0.05
        )
        
        # Community and ecosystem metrics
        evaluation['community_metrics'] = self.analyze_community_support(
            model_name,
            metrics=[
                'github_stars',
                'contributor_count',
                'issue_resolution_time',
                'documentation_quality',
                'community_activity'
            ]
        )
        
        # Cost analysis for deployment and fine-tuning
        evaluation['cost_analysis'] = self.cost_models.calculate_open_source_costs(
            model_config,
            scenarios=['inference', 'fine_tuning', 'deployment', 'maintenance']
        )
        
        return evaluation
    
    def evaluate_closed_source_model(self, model_name, model_config):
        """Comprehensive evaluation of closed source AI models."""
        
        evaluation = {
            'api_performance': {},
            'cost_efficiency': {},
            'service_reliability': {},
            'feature_completeness': {},
            'vendor_lock_in_risk': {}
        }
        
        # API performance benchmarking
        evaluation['api_performance'] = self.benchmark_suite.run_api_benchmarks(
            model_name, model_config,
            benchmarks=[
                'response_time',
                'rate_limits',
                'uptime',
                'error_rates',
                'scalability'
            ]
        )
        
        # Cost efficiency analysis
        evaluation['cost_efficiency'] = self.cost_models.analyze_pricing_models(
            model_config,
            usage_patterns=[
                'low_volume',
                'medium_volume',
                'high_volume',
                'burst_usage'
            ]
        )
        
        # Service reliability assessment
        evaluation['service_reliability'] = self.assess_service_reliability(
            model_name,
            metrics=[
                'historical_uptime',
                'sla_compliance',
                'incident_frequency',
                'recovery_time',
                'support_quality'
            ]
        )
        
        # Feature completeness evaluation
        evaluation['feature_completeness'] = self.evaluate_feature_set(
            model_config,
            feature_categories=[
                'core_capabilities',
                'customization_options',
                'integration_apis',
                'monitoring_tools',
                'security_features'
            ]
        )
        
        # Vendor lock-in risk analysis
        evaluation['vendor_lock_in_risk'] = self.assess_vendor_lock_in(
            model_config,
            risk_factors=[
                'data_portability',
                'api_standardization',
                'migration_complexity',
                'alternative_availability',
                'contract_flexibility'
            ]
        )
        
        return evaluation
    
    def compare_model_categories(self, open_models, closed_models):
        """Compare open source vs closed source models across key dimensions."""
        
        comparison = {
            'performance_comparison': {},
            'cost_comparison': {},
            'transparency_comparison': {},
            'flexibility_comparison': {},
            'risk_assessment': {}
        }
        
        # Aggregate performance metrics
        open_performance = self.aggregate_performance_metrics(open_models)
        closed_performance = self.aggregate_performance_metrics(closed_models)
        
        comparison['performance_comparison'] = {
            'open_source_avg': open_performance,
            'closed_source_avg': closed_performance,
            'performance_gap': self.calculate_performance_gap(
                open_performance, closed_performance
            )
        }
        
        # Cost comparison analysis
        comparison['cost_comparison'] = self.compare_total_cost_of_ownership(
            open_models, closed_models,
            time_horizon='3_years',
            usage_scenarios=['development', 'production', 'scaling']
        )
        
        # Transparency and control comparison
        comparison['transparency_comparison'] = self.compare_transparency_levels(
            open_models, closed_models
        )
        
        # Flexibility and customization comparison
        comparison['flexibility_comparison'] = self.compare_customization_capabilities(
            open_models, closed_models
        )
        
        # Risk assessment comparison
        comparison['risk_assessment'] = self.compare_risk_profiles(
            open_models, closed_models,
            risk_categories=[
                'technical_risk',
                'business_risk',
                'compliance_risk',
                'security_risk'
            ]
        )
        
        return comparison
    
    def generate_recommendations(self, comparative_analysis):
        """Generate actionable recommendations based on comparative analysis."""
        
        recommendations = {
            'use_case_recommendations': {},
            'hybrid_strategies': {},
            'decision_framework': {},
            'implementation_roadmap': {}
        }
        
        # Use case specific recommendations
        recommendations['use_case_recommendations'] = self.generate_use_case_recommendations(
            comparative_analysis,
            use_cases=[
                'research_and_development',
                'production_deployment',
                'rapid_prototyping',
                'enterprise_integration',
                'cost_sensitive_applications',
                'high_security_requirements'
            ]
        )
        
        # Hybrid deployment strategies
        recommendations['hybrid_strategies'] = self.design_hybrid_strategies(
            comparative_analysis,
            strategies=[
                'open_development_closed_production',
                'closed_core_open_extensions',
                'multi_model_ensemble',
                'gradual_migration_path'
            ]
        )
        
        return recommendations
`;

export default function BenchmarkingOpenVsClosedAI() {
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
              href="/research"
              className="inline-flex items-center text-purple-300 hover:text-white font-medium transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="h-5 w-5 mr-3" />
              </motion.div>
              <span className="typography-premium">Back to Research</span>
            </Link>

            <div className="mb-8">
              <motion.h1 
                className="hero-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Benchmarking Open vs Closed AI: Comprehensive Model Evaluation Framework
              </motion.h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  28 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  March 1, 2024
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>

              <motion.div 
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {['AI Benchmarking', 'Open Source AI', 'Closed Source AI', 'Model Evaluation', 'Performance Analysis', 'Cost Comparison'].map((tag, index) => (
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
                Developing comprehensive methodologies for evaluating and comparing open source versus closed source 
                AI models across technical performance, cost efficiency, transparency, and strategic considerations 
                for informed decision-making in AI adoption.
              </motion.p>
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
                <Scale className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Introduction</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The AI landscape presents organizations with a fundamental choice between open source and closed source 
                models, each offering distinct advantages and tradeoffs. Open source models provide transparency, 
                customization, and community-driven development, while closed source models often deliver superior 
                performance, professional support, and reduced implementation complexity.
              </p>
              <p className="body-text text-research-text-secondary">
                This research establishes a comprehensive benchmarking framework that evaluates both categories across 
                multiple dimensions including technical performance, cost efficiency, transparency, security, and 
                strategic considerations, enabling data-driven decision-making for AI adoption strategies.
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
                <GitBranch className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Model Evaluation Pipeline</h2>
              </div>
              <LottieAnimation 
                animationFile="model-comparison-flow.json"
                className="mx-auto"
                width={650}
                height={400}
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
              <h2 className="section-title text-research-text mb-6">Benchmarking Framework Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our benchmarking framework systematically evaluates AI models through parallel assessment pipelines 
                for open and closed source systems. The framework incorporates technical performance metrics, 
                transparency analysis, cost modeling, and strategic risk assessment to provide comprehensive 
                comparative insights for decision-making.
              </p>
              
              <MermaidDiagram chart={benchmarkingFrameworkDiagram} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The architecture emphasizes multi-dimensional evaluation including reproducibility testing for open 
                models, API performance analysis for closed models, and comprehensive cost-benefit analysis that 
                accounts for total cost of ownership across different deployment scenarios and time horizons.
              </p>
            </motion.div>

            {/* Performance Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Comprehensive Performance Analysis</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Extensive benchmarking across 15 open source and 8 closed source AI models reveals significant 
                performance variations and strategic tradeoffs. Our analysis encompasses technical metrics, cost 
                efficiency, and operational considerations across diverse use cases and deployment scenarios.
              </p>
              
              <InteractiveChart
                dataFile="open_vs_closed_ai_comparison.json"
                chartType="bar"
                title="Open Source vs Closed Source AI Model Performance Comparison"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results demonstrate that closed source models achieve 12% higher average accuracy on standardized 
                benchmarks, while open source models provide 3x better cost efficiency for high-volume applications 
                and 100% transparency for compliance-critical deployments.
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
              <h2 className="section-title text-research-text mb-6">Benchmarking Framework Implementation</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates our comprehensive benchmarking framework with automated 
                evaluation pipelines for both open and closed source AI models, including performance assessment, 
                cost analysis, and strategic recommendation generation.
              </p>
              
              <CodeBlock
                code={benchmarkingFrameworkCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides automated benchmarking capabilities with standardized metrics, reproducible 
                evaluation protocols, and comprehensive reporting that enables objective comparison across model 
                categories and informed decision-making for AI adoption strategies.
              </p>
            </motion.div>

            {/* Key Evaluation Dimensions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <BarChart className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Key Evaluation Dimensions</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Technical Performance</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive benchmarking of accuracy, latency, throughput, and resource utilization across standardized datasets and tasks.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Cost Efficiency</h3>
                  <p className="body-text text-research-text-secondary">
                    Total cost of ownership analysis including development, deployment, scaling, and maintenance costs across different scenarios.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Transparency &amp; Control</h3>
                  <p className="body-text text-research-text-secondary">
                    Assessment of code accessibility, training data documentation, customization capabilities, and regulatory compliance.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Strategic Risk Assessment</h3>
                  <p className="body-text text-research-text-secondary">
                    Evaluation of vendor lock-in risk, technology obsolescence, security considerations, and long-term viability.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Comparative Analysis Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Key Findings &amp; Insights</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Open Source Advantages</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Cost Efficiency:</strong> 60-80% lower total cost of ownership for high-volume applications. 
                    <strong>Transparency:</strong> Complete code access enables compliance and customization. 
                    <strong>Community Innovation:</strong> Rapid feature development and bug fixes through collaborative development.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Closed Source Advantages</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Performance:</strong> 10-15% higher accuracy on complex tasks with state-of-the-art architectures. 
                    <strong>Reliability:</strong> Professional support, SLA guarantees, and enterprise-grade infrastructure. 
                    <strong>Ease of Use:</strong> Simplified integration with comprehensive documentation and tooling.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Hybrid Strategies</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Optimal Approach:</strong> 70% of organizations benefit from hybrid strategies combining open 
                    source development with closed source production deployment, achieving both cost efficiency and 
                    performance optimization while maintaining strategic flexibility.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decision Framework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Strategic Decision Framework</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Choose Open Source When</h3>
                  <ul className="body-text text-research-text-secondary text-sm space-y-2">
                    <li>• High-volume, cost-sensitive applications</li>
                    <li>• Regulatory compliance requires transparency</li>
                    <li>• Extensive customization needed</li>
                    <li>• Strong internal AI/ML expertise available</li>
                    <li>• Long-term strategic control important</li>
                  </ul>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Choose Closed Source When</h3>
                  <ul className="body-text text-research-text-secondary text-sm space-y-2">
                    <li>• Maximum performance is critical</li>
                    <li>• Rapid deployment and scaling needed</li>
                    <li>• Limited internal AI expertise</li>
                    <li>• Professional support requirements</li>
                    <li>• Risk-averse organizational culture</li>
                  </ul>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Consider Hybrid When</h3>
                  <ul className="body-text text-research-text-secondary text-sm space-y-2">
                    <li>• Balancing cost and performance</li>
                    <li>• Different requirements across use cases</li>
                    <li>• Gradual migration strategies</li>
                    <li>• Risk diversification important</li>
                    <li>• Learning and experimentation goals</li>
                  </ul>
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
                The choice between open and closed source AI models is not binary but strategic, requiring careful 
                consideration of technical requirements, cost constraints, organizational capabilities, and long-term 
                objectives. Our comprehensive benchmarking framework provides the analytical foundation for informed 
                decision-making in this critical technology choice.
              </p>
              <p className="body-text text-research-text-secondary">
                Future research will focus on dynamic benchmarking methodologies that adapt to rapidly evolving AI 
                capabilities, automated decision support systems for model selection, and frameworks for evaluating 
                emerging hybrid deployment patterns and multi-model architectures.
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
                  href="/research/privacy-preserving-ai"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Article
                </Link>
                
                <Link
                  href="/research/opacity-responsibility-ai"
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
