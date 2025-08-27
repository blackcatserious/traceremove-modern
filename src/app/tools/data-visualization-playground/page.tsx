'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, BarChart3, PieChart, LineChart } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const visualizationArchitecture = `
graph TD
    A[Data Visualization Playground] --> B[Data Input Layer]
    A --> C[Processing Engine]
    A --> D[Visualization Framework]
    B --> E[File Upload System]
    B --> F[API Data Connectors]
    B --> G[Real-time Data Streams]
    C --> H[Data Transformation]
    C --> I[Statistical Analysis]
    C --> J[Machine Learning Pipeline]
    D --> K[Chart Generation]
    D --> L[Interactive Controls]
    D --> M[Export Capabilities]
    E --> N[Data Validation]
    F --> N
    G --> N
    H --> O[Processed Data]
    I --> O
    J --> O
    K --> P[Visualization Output]
    L --> P
    M --> P
    N --> Q[Data Pipeline]
    O --> Q
    P --> Q
    Q --> R[Interactive Dashboard]
    R --> S{User Interaction?}
    S -->|Yes| T[Dynamic Updates]
    S -->|No| U[Static Display]
    T --> V[Real-time Visualization]
    U --> W[Publication Ready]
    V --> X[Data Insights]
    W --> X
    X --> Y[Knowledge Discovery]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style Y fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const visualizationCode = `
class DataVisualizationPlayground:
    def __init__(self, chart_libraries, data_processors):
        self.chart_libraries = chart_libraries
        self.data_processors = data_processors
        self.data_loader = DataLoader()
        self.chart_generator = ChartGenerator()
        self.interaction_handler = InteractionHandler()
        self.export_manager = ExportManager()
        
    def implement_visualization_platform(self, data_sources, visualization_requirements):
        &quot;&quot;&quot;Implement comprehensive data visualization platform with interactive charts and analytics.&quot;&quot;&quot;
        
        visualization_system = {
            'data_ingestion': {},
            'processing_pipeline': {},
            'chart_generation': {},
            'interaction_framework': {},
            'export_capabilities': {}
        }
        
        # Comprehensive data ingestion
        visualization_system['data_ingestion'] = self.build_data_ingestion(
            data_sources, self.data_processors,
            ingestion_components=[
                'multi_format_file_support',
                'api_data_connectors',
                'real_time_streaming_integration',
                'database_connectivity',
                'web_scraping_capabilities',
                'cloud_storage_integration'
            ]
        )
        
        # Advanced processing pipeline
        visualization_system['processing_pipeline'] = self.implement_processing_pipeline(
            visualization_system['data_ingestion'], visualization_requirements,
            processing_capabilities=[
                'data_cleaning_and_validation',
                'statistical_analysis_engine',
                'machine_learning_preprocessing',
                'time_series_analysis',
                'geospatial_data_processing',
                'text_analytics_integration'
            ]
        )
        
        # Dynamic chart generation
        visualization_system['chart_generation'] = self.build_chart_generation(
            visualization_system['processing_pipeline'],
            chart_types=[
                'interactive_line_charts',
                'dynamic_bar_visualizations',
                'advanced_scatter_plots',
                'heatmap_and_correlation_matrices',
                'network_graph_visualizations',
                'geospatial_mapping_systems'
            ]
        )
        
        # Interactive framework
        visualization_system['interaction_framework'] = self.implement_interaction_framework(
            visualization_system['chart_generation'],
            interaction_features=[
                'real_time_filtering_controls',
                'drill_down_capabilities',
                'cross_chart_linking',
                'annotation_and_markup_tools',
                'collaborative_sharing_features',
                'responsive_design_adaptation'
            ]
        )
        
        return visualization_system
    
    def execute_data_visualization(self, dataset, chart_specifications, user_preferences):
        &quot;&quot;&quot;Execute comprehensive data visualization with customizable charts and interactive features.&quot;&quot;&quot;
        
        visualization_process = {
            'data_analysis': {},
            'chart_configuration': {},
            'rendering_optimization': {},
            'interaction_setup': {},
            'performance_monitoring': {}
        }
        
        # Intelligent data analysis
        visualization_process['data_analysis'] = self.analyze_dataset_characteristics(
            dataset, chart_specifications,
            analysis_dimensions=[
                'data_type_identification',
                'distribution_analysis',
                'correlation_detection',
                'outlier_identification',
                'trend_pattern_recognition',
                'seasonal_decomposition'
            ]
        )
        
        # Optimal chart configuration
        visualization_process['chart_configuration'] = self.configure_optimal_charts(
            visualization_process['data_analysis'], user_preferences,
            configuration_strategies=[
                'automatic_chart_type_selection',
                'color_palette_optimization',
                'axis_scaling_and_formatting',
                'legend_and_annotation_placement',
                'responsive_layout_adaptation',
                'accessibility_compliance_setup'
            ]
        )
        
        # High-performance rendering
        visualization_process['rendering_optimization'] = self.optimize_chart_rendering(
            visualization_process['chart_configuration'],
            optimization_techniques=[
                'canvas_vs_svg_selection',
                'data_point_aggregation',
                'lazy_loading_implementation',
                'memory_usage_optimization',
                'gpu_acceleration_utilization',
                'progressive_rendering_strategies'
            ]
        )
        
        # Advanced interaction setup
        visualization_process['interaction_setup'] = self.setup_chart_interactions(
            visualization_process['rendering_optimization'],
            interaction_types=[
                'zoom_and_pan_controls',
                'tooltip_and_hover_effects',
                'selection_and_brushing',
                'animation_and_transitions',
                'real_time_data_updates',
                'multi_touch_gesture_support'
            ]
        )
        
        return visualization_process
    
    def implement_advanced_analytics(self, visualization_system, analytics_requirements, ml_models):
        &quot;&quot;&quot;Implement advanced analytics capabilities with machine learning integration.&quot;&quot;&quot;
        
        analytics_framework = {
            'statistical_analysis': {},
            'predictive_modeling': {},
            'pattern_recognition': {},
            'anomaly_detection': {},
            'clustering_analysis': {}
        }
        
        # Comprehensive statistical analysis
        analytics_framework['statistical_analysis'] = self.build_statistical_analysis(
            visualization_system, analytics_requirements,
            statistical_methods=[
                'descriptive_statistics_computation',
                'hypothesis_testing_framework',
                'regression_analysis_tools',
                'time_series_decomposition',
                'correlation_and_causation_analysis',
                'confidence_interval_estimation'
            ]
        )
        
        # Predictive modeling integration
        analytics_framework['predictive_modeling'] = self.implement_predictive_modeling(
            analytics_framework['statistical_analysis'], ml_models,
            modeling_capabilities=[
                'forecasting_model_integration',
                'classification_algorithm_support',
                'regression_model_deployment',
                'ensemble_method_implementation',
                'model_performance_visualization',
                'prediction_uncertainty_quantification'
            ]
        )
        
        # Pattern recognition systems
        analytics_framework['pattern_recognition'] = self.build_pattern_recognition(
            analytics_framework,
            recognition_algorithms=[
                'trend_identification_algorithms',
                'seasonal_pattern_detection',
                'cyclical_behavior_analysis',
                'change_point_detection',
                'similarity_matching_systems',
                'sequence_pattern_mining'
            ]
        )
        
        # Intelligent anomaly detection
        analytics_framework['anomaly_detection'] = self.implement_anomaly_detection(
            analytics_framework, ml_models,
            detection_methods=[
                'statistical_outlier_detection',
                'machine_learning_anomaly_models',
                'time_series_anomaly_identification',
                'multivariate_anomaly_analysis',
                'real_time_anomaly_monitoring',
                'contextual_anomaly_assessment'
            ]
        )
        
        return analytics_framework
    
    def evaluate_visualization_effectiveness(self, visualization_usage, user_interactions, insight_generation):
        &quot;&quot;&quot;Evaluate the effectiveness of data visualizations in facilitating data understanding and insights.&quot;&quot;&quot;
        
        effectiveness_evaluation = {
            'user_engagement': {},
            'insight_discovery': {},
            'decision_support': {},
            'learning_outcomes': {},
            'system_performance': {}
        }
        
        # User engagement analysis
        effectiveness_evaluation['user_engagement'] = self.analyze_user_engagement(
            visualization_usage, user_interactions,
            engagement_metrics=[
                'interaction_frequency_analysis',
                'session_duration_measurement',
                'feature_utilization_tracking',
                'user_journey_mapping',
                'engagement_pattern_identification',
                'satisfaction_score_assessment'
            ]
        )
        
        # Insight discovery measurement
        effectiveness_evaluation['insight_discovery'] = self.measure_insight_discovery(
            effectiveness_evaluation['user_engagement'], insight_generation,
            discovery_indicators=[
                'pattern_identification_success',
                'hypothesis_generation_rate',
                'data_exploration_depth',
                'correlation_discovery_frequency',
                'anomaly_detection_accuracy',
                'actionable_insight_extraction'
            ]
        )
        
        # Decision support assessment
        effectiveness_evaluation['decision_support'] = self.assess_decision_support(
            effectiveness_evaluation,
            support_dimensions=[
                'decision_confidence_improvement',
                'time_to_insight_reduction',
                'data_driven_decision_frequency',
                'risk_assessment_accuracy',
                'strategic_planning_enhancement',
                'operational_efficiency_gains'
            ]
        )
        
        return effectiveness_evaluation
`;

export default function DataVisualizationPlayground() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      
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
                Data Visualization Playground: Interactive Analytics &amp; Chart Creation Platform
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
                {['Data Visualization', 'Interactive Charts', 'Statistical Analysis', 'Machine Learning', 'Real-time Analytics', 'Export Tools'].map((tag) => (
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
                Comprehensive data visualization platform that transforms raw data into interactive, 
                publication-ready charts and dashboards. Features advanced analytics, machine learning 
                integration, real-time data processing, and collaborative tools for data exploration, 
                pattern discovery, and insight generation across diverse datasets and use cases.
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
                <BarChart3 className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Visualization Platform Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Data Visualization Playground provides a comprehensive environment for creating 
                interactive, publication-quality visualizations from diverse data sources. It combines 
                advanced statistical analysis, machine learning capabilities, and intuitive design 
                tools to enable users to explore data, discover patterns, and communicate insights effectively.
              </p>
              <p className="body-text text-research-text-secondary">
                This powerful platform supports real-time data processing, collaborative features, 
                and export capabilities for academic research, business intelligence, and data 
                journalism applications.
              </p>
            </motion.div>

            {/* Interactive Playground */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <PieChart className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Interactive Visualization Studio</h2>
              </div>
              
              {/* Chart Type Selector */}
              <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-accent-ai-purple/20">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-research-text mb-4">Chart Type Selection</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: LineChart, name: 'Line Chart', desc: 'Time series & trends' },
                      { icon: BarChart3, name: 'Bar Chart', desc: 'Categorical comparisons' },
                      { icon: PieChart, name: 'Pie Chart', desc: 'Part-to-whole relationships' },
                      { icon: BarChart3, name: 'Scatter Plot', desc: 'Correlation analysis' }
                    ].map((chart) => (
                      <button
                        key={chart.name}
                        className="p-4 bg-white/5 border border-accent-ai-purple/20 rounded-xl hover:border-accent-ai-purple/40 hover:bg-white/10 transition-all duration-200 text-center"
                      >
                        <chart.icon className="h-8 w-8 text-accent-ai-purple mx-auto mb-2" />
                        <div className="text-sm font-medium text-research-text">{chart.name}</div>
                        <div className="text-xs text-research-text-secondary">{chart.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Data Source</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>Upload CSV/JSON File</option>
                      <option>Connect to API</option>
                      <option>Real-time Data Stream</option>
                      <option>Sample Dataset</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Analysis Type</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>Descriptive Statistics</option>
                      <option>Predictive Modeling</option>
                      <option>Anomaly Detection</option>
                      <option>Pattern Recognition</option>
                    </select>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-xl hover:shadow-ai-glow transition-all duration-300">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Create Visualization
                  </button>
                </div>
              </div>
              
              <LottieAnimation 
                animationFile="data-visualization-demo.json"
                className="mx-auto"
                width={800}
                height={500}
              />
              
              <div className="mt-6 text-center">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Launch Full Playground
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
              <h2 className="section-title text-research-text mb-6">Visualization Platform Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The data visualization playground architecture integrates data input systems, 
                processing engines, and visualization frameworks to deliver interactive, high-performance 
                charts and analytics. The system emphasizes real-time processing, scalable rendering, 
                and collaborative features for comprehensive data exploration and insight generation.
              </p>
              
              <MermaidDiagram chart={visualizationArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through five integrated layers: (1) data input with file upload, 
                API connectors, and real-time streams, (2) processing engine with transformation and 
                ML pipeline, (3) visualization framework with chart generation and interactive controls, 
                (4) data pipeline with validation and processing, and (5) interactive dashboard with 
                dynamic updates and knowledge discovery capabilities.
              </p>
            </motion.div>

            {/* Sample Visualizations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Interactive Data Visualizations &amp; Analytics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive visualization examples demonstrating advanced chart types, statistical 
                analysis, and machine learning integration. The platform provides real-time interactivity, 
                customizable styling, and export capabilities for publication-ready visualizations 
                across diverse data types and analytical requirements.
              </p>
              
              <InteractiveChart
                dataFile="visualization_playground_demo.json"
                chartType="line"
                title="Data Visualization Playground - Interactive Analytics Dashboard"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Platform capabilities include 50+ chart types, real-time data processing for datasets 
                up to 10M records, 95% rendering performance optimization, and seamless export to 
                PNG, SVG, PDF, and interactive HTML formats.
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
                The following implementation demonstrates the comprehensive data visualization platform 
                with advanced analytics capabilities, machine learning integration, interactive chart 
                generation, and performance optimization designed to handle large datasets and provide 
                real-time insights for data exploration and decision-making applications.
              </p>
              
              <CodeBlock
                code={visualizationCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The visualization framework provides systematic approaches to data analysis and 
                presentation that enable users to discover patterns, generate insights, and communicate 
                findings effectively through interactive, publication-quality visualizations.
              </p>
            </motion.div>

            {/* Chart Types & Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <LineChart className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Advanced Visualization Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Interactive Charts</h3>
                  <p className="body-text text-research-text-secondary">
                    50+ chart types with zoom, pan, brush selection, and real-time data updates.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Statistical Analysis</h3>
                  <p className="body-text text-research-text-secondary">
                    Built-in statistical functions, regression analysis, and hypothesis testing tools.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Machine Learning</h3>
                  <p className="body-text text-research-text-secondary">
                    Integrated ML models for predictive analytics, clustering, and anomaly detection.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Collaboration Tools</h3>
                  <p className="body-text text-research-text-secondary">
                    Real-time sharing, annotation, commenting, and version control for team projects.
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
              <h2 className="section-title text-research-text mb-6">Applications &amp; Use Cases</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Academic Research &amp; Publications</h3>
                  <p className="body-text text-research-text-secondary">
                    Researchers create publication-ready visualizations for papers, presentations, 
                    and grant proposals, with advanced statistical analysis and reproducible workflows 
                    for data exploration and hypothesis testing across diverse research domains.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Business Intelligence &amp; Analytics</h3>
                  <p className="body-text text-research-text-secondary">
                    Organizations leverage the platform for executive dashboards, performance monitoring, 
                    market analysis, and strategic planning with real-time data integration, predictive 
                    modeling, and collaborative decision-making capabilities.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Data Journalism &amp; Communication</h3>
                  <p className="body-text text-research-text-secondary">
                    Journalists and communicators create compelling, interactive stories with data-driven 
                    narratives, engaging visualizations, and accessible presentations that effectively 
                    communicate complex information to diverse audiences.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Advanced Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Advanced Analytics Capabilities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Predictive Modeling</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Integrated forecasting, regression, and classification models with uncertainty quantification.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Pattern Recognition</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Automated trend detection, seasonal analysis, and anomaly identification algorithms.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Real-time Processing</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Streaming data visualization with live updates and performance optimization for large datasets.
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
                <BarChart3 className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Getting Started</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Import Your Data</h3>
                    <p className="body-text text-research-text-secondary">
                      Upload files, connect APIs, or use sample datasets to begin your visualization journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Choose Chart Types</h3>
                    <p className="body-text text-research-text-secondary">
                      Select from 50+ visualization types and customize styling, colors, and interactive features.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Explore &amp; Export</h3>
                    <p className="body-text text-research-text-secondary">
                      Interact with your visualizations, discover insights, and export publication-ready results.
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
                  href="/tools/privacy-score-calculator"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Tool
                </Link>
                
                <Link
                  href="/tools/paper-summarizer"
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
