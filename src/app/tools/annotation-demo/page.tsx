'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Edit3, MousePointer, Layers, Users } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const annotationArchitecture = `
graph TD
    A[Annotation Demo Platform] --> B[Data Input Layer]
    A --> C[Annotation Engine]
    A --> D[Collaboration Framework]
    B --> E[Text Documents]
    B --> F[Image Collections]
    B --> G[Video Streams]
    C --> H[Annotation Tools]
    C --> I[ML-Assisted Labeling]
    C --> J[Quality Control]
    D --> K[Multi-user Interface]
    D --> L[Version Control]
    D --> M[Consensus Management]
    E --> N[Content Processing]
    F --> N
    G --> N
    H --> O[Annotation Pipeline]
    I --> O
    J --> O
    K --> P[Collaborative Workspace]
    L --> P
    M --> P
    N --> Q[Unified Data Flow]
    O --> Q
    P --> Q
    Q --> R[Annotation Results]
    R --> S{Quality Check?}
    S -->|Pass| T[Validated Annotations]
    S -->|Fail| U[Review Process]
    T --> V[Export & Integration]
    U --> W[Refinement Cycle]
    V --> X[Training Data]
    W --> X
    X --> Y[ML Model Training]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style Y fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const annotationCode = `
class AnnotationDemo:
    def __init__(self, annotation_tools, collaboration_systems):
        self.annotation_tools = annotation_tools
        self.collaboration_systems = collaboration_systems
        self.data_processor = DataProcessor()
        self.ml_assistant = MLAssistant()
        self.quality_controller = QualityController()
        self.export_manager = ExportManager()
        
    def implement_annotation_platform(self, data_sources, annotation_requirements):
        """Implement comprehensive annotation platform with collaborative tools and ML assistance."""
        
        annotation_system = {
            'data_management': {},
            'annotation_interface': {},
            'collaboration_tools': {},
            'quality_assurance': {},
            'export_capabilities': {}
        }
        
        # Comprehensive data management
        annotation_system['data_management'] = self.build_data_management(
            data_sources, self.annotation_tools,
            management_components=[
                'multi_format_data_ingestion',
                'hierarchical_data_organization',
                'metadata_extraction_system',
                'data_preprocessing_pipeline',
                'version_control_integration',
                'backup_and_recovery_system'
            ]
        )
        
        # Advanced annotation interface
        annotation_system['annotation_interface'] = self.implement_annotation_interface(
            annotation_system['data_management'], annotation_requirements,
            interface_capabilities=[
                'multi_modal_annotation_tools',
                'customizable_label_taxonomies',
                'intelligent_annotation_suggestions',
                'real_time_validation_feedback',
                'keyboard_shortcut_optimization',
                'accessibility_compliance_features'
            ]
        )
        
        # Collaborative annotation framework
        annotation_system['collaboration_tools'] = self.build_collaboration_framework(
            annotation_system['annotation_interface'],
            collaboration_features=[
                'multi_user_simultaneous_editing',
                'role_based_access_control',
                'annotation_conflict_resolution',
                'consensus_building_mechanisms',
                'communication_and_commenting',
                'progress_tracking_dashboards'
            ]
        )
        
        # Intelligent quality assurance
        annotation_system['quality_assurance'] = self.implement_quality_assurance(
            annotation_system['collaboration_tools'],
            quality_mechanisms=[
                'inter_annotator_agreement_analysis',
                'automated_consistency_checking',
                'expert_review_workflows',
                'statistical_quality_metrics',
                'bias_detection_and_mitigation',
                'continuous_improvement_feedback'
            ]
        )
        
        return annotation_system
    
    def execute_annotation_workflow(self, dataset, annotation_schema, team_configuration):
        """Execute comprehensive annotation workflow with ML assistance and quality control."""
        
        annotation_process = {
            'data_preparation': {},
            'annotation_execution': {},
            'quality_monitoring': {},
            'consensus_building': {},
            'result_validation': {}
        }
        
        # Intelligent data preparation
        annotation_process['data_preparation'] = self.prepare_annotation_data(
            dataset, annotation_schema,
            preparation_steps=[
                'data_quality_assessment',
                'sampling_strategy_implementation',
                'pre_annotation_analysis',
                'difficulty_level_estimation',
                'resource_allocation_planning',
                'timeline_optimization'
            ]
        )
        
        # Collaborative annotation execution
        annotation_process['annotation_execution'] = self.execute_collaborative_annotation(
            annotation_process['data_preparation'], team_configuration,
            execution_strategies=[
                'task_distribution_optimization',
                'ml_assisted_pre_labeling',
                'active_learning_integration',
                'real_time_progress_monitoring',
                'adaptive_difficulty_adjustment',
                'burnout_prevention_measures'
            ]
        )
        
        # Continuous quality monitoring
        annotation_process['quality_monitoring'] = self.monitor_annotation_quality(
            annotation_process['annotation_execution'],
            monitoring_dimensions=[
                'real_time_agreement_tracking',
                'annotation_speed_analysis',
                'consistency_pattern_detection',
                'error_type_classification',
                'annotator_performance_profiling',
                'quality_trend_identification'
            ]
        )
        
        # Intelligent consensus building
        annotation_process['consensus_building'] = self.build_annotation_consensus(
            annotation_process['quality_monitoring'],
            consensus_methods=[
                'weighted_voting_algorithms',
                'expert_arbitration_systems',
                'confidence_based_aggregation',
                'iterative_refinement_processes',
                'disagreement_resolution_protocols',
                'final_decision_documentation'
            ]
        )
        
        return annotation_process
    
    def implement_advanced_annotation_features(self, annotation_system, feature_requirements, domain_expertise):
        """Implement advanced annotation features with AI assistance and specialized tools."""
        
        advanced_features = {
            'ai_assistance': {},
            'specialized_tools': {},
            'analytics_dashboard': {},
            'integration_apis': {},
            'training_modules': {}
        }
        
        # AI-powered annotation assistance
        advanced_features['ai_assistance'] = self.build_ai_assistance(
            annotation_system, feature_requirements,
            assistance_capabilities=[
                'intelligent_pre_labeling_suggestions',
                'anomaly_detection_highlighting',
                'pattern_recognition_automation',
                'context_aware_recommendations',
                'uncertainty_quantification',
                'active_learning_sample_selection'
            ]
        )
        
        # Domain-specific specialized tools
        advanced_features['specialized_tools'] = self.implement_specialized_tools(
            advanced_features['ai_assistance'], domain_expertise,
            tool_categories=[
                'nlp_text_annotation_suite',
                'computer_vision_labeling_tools',
                'audio_annotation_interfaces',
                'time_series_labeling_systems',
                'graph_structure_annotation',
                'multimodal_content_labeling'
            ]
        )
        
        # Comprehensive analytics dashboard
        advanced_features['analytics_dashboard'] = self.build_analytics_dashboard(
            advanced_features,
            analytics_components=[
                'annotation_progress_visualization',
                'quality_metrics_monitoring',
                'team_performance_analytics',
                'cost_and_time_tracking',
                'predictive_completion_modeling',
                'roi_and_efficiency_analysis'
            ]
        )
        
        # Integration and API framework
        advanced_features['integration_apis'] = self.implement_integration_apis(
            advanced_features, domain_expertise,
            integration_capabilities=[
                'ml_pipeline_integration',
                'data_warehouse_connectivity',
                'third_party_tool_compatibility',
                'cloud_storage_synchronization',
                'workflow_automation_hooks',
                'real_time_data_streaming'
            ]
        )
        
        return advanced_features
    
    def evaluate_annotation_effectiveness(self, annotation_usage, quality_outcomes, productivity_metrics):
        """Evaluate the effectiveness of annotation platform in producing high-quality labeled datasets."""
        
        effectiveness_evaluation = {
            'quality_assessment': {},
            'productivity_analysis': {},
            'cost_efficiency': {},
            'user_satisfaction': {},
            'ml_performance_impact': {}
        }
        
        # Comprehensive quality assessment
        effectiveness_evaluation['quality_assessment'] = self.assess_annotation_quality(
            annotation_usage, quality_outcomes,
            quality_metrics=[
                'inter_annotator_agreement_scores',
                'expert_validation_accuracy',
                'consistency_across_batches',
                'error_rate_analysis',
                'bias_detection_results',
                'downstream_model_performance'
            ]
        )
        
        # Productivity and efficiency analysis
        effectiveness_evaluation['productivity_analysis'] = self.analyze_annotation_productivity(
            effectiveness_evaluation['quality_assessment'], productivity_metrics,
            productivity_indicators=[
                'annotation_speed_optimization',
                'task_completion_rates',
                'learning_curve_analysis',
                'tool_utilization_efficiency',
                'collaboration_effectiveness',
                'automation_impact_measurement'
            ]
        )
        
        # ML model performance impact
        effectiveness_evaluation['ml_performance_impact'] = self.assess_ml_impact(
            effectiveness_evaluation,
            impact_dimensions=[
                'model_accuracy_improvement',
                'training_data_quality_correlation',
                'generalization_capability_enhancement',
                'bias_reduction_effectiveness',
                'robustness_improvement_metrics',
                'deployment_success_rates'
            ]
        )
        
        return effectiveness_evaluation
`;

export default function AnnotationDemo() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="data" particleCount={110} />
      
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
              className="inline-flex items-center text-purple-300 hover:text-white font-medium transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
              </motion.div>
              <span className="typography-premium">Back to Tools</span>
            </Link>

            <div className="mb-8">
              <motion.h1 
                className="hero-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Annotation Demo: Collaborative Data Labeling &amp; ML Training Platform
              </motion.h1>
              
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

              <motion.div 
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {['Data Annotation', 'Collaborative Labeling', 'ML Training Data', 'Quality Control', 'AI Assistance', 'Multi-modal Support'].map((tag, index) => (
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
                Comprehensive data annotation platform that enables collaborative labeling of text, 
                images, audio, and multimodal content for machine learning training. Features AI-assisted 
                annotation, quality control mechanisms, consensus building tools, and seamless integration 
                with ML pipelines to accelerate the creation of high-quality training datasets.
              </motion.p>
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
                <Edit3 className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Annotation Platform Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Annotation Demo platform provides a comprehensive environment for collaborative 
                data labeling across multiple modalities including text, images, audio, and video. 
                It combines intelligent annotation tools, AI-assisted labeling, quality control 
                mechanisms, and seamless ML pipeline integration to accelerate training data creation.
              </p>
              <p className="body-text text-research-text-secondary">
                This powerful platform supports research teams, data science organizations, and 
                AI companies in creating high-quality labeled datasets efficiently while maintaining 
                consistency, reducing bias, and ensuring optimal model training outcomes.
              </p>
            </motion.div>

            {/* Interactive Annotation Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <MousePointer className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Interactive Annotation Workspace</h2>
              </div>
              
              {/* Annotation Interface */}
              <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-accent-ai-purple/20">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-research-text mb-4">Annotation Project Setup</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-research-text mb-2">Data Type</label>
                      <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                        <option>Text Documents</option>
                        <option>Image Collections</option>
                        <option>Audio Files</option>
                        <option>Video Content</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-research-text mb-2">Annotation Task</label>
                      <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                        <option>Named Entity Recognition</option>
                        <option>Sentiment Classification</option>
                        <option>Object Detection</option>
                        <option>Semantic Segmentation</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-research-text mb-4">Annotation Tools &amp; Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: Edit3, name: 'Text Labeling', desc: 'NER, classification' },
                      { icon: Layers, name: 'Image Annotation', desc: 'Bounding boxes, masks' },
                      { icon: MousePointer, name: 'Interactive Tools', desc: 'Point, polygon, brush' },
                      { icon: Users, name: 'Collaboration', desc: 'Multi-user, consensus' }
                    ].map((tool) => (
                      <button
                        key={tool.name}
                        className="p-4 bg-white/5 border border-accent-ai-purple/20 rounded-xl hover:border-accent-ai-purple/40 hover:bg-white/10 transition-all duration-200 text-center"
                      >
                        <tool.icon className="h-8 w-8 text-accent-ai-purple mx-auto mb-2" />
                        <div className="text-sm font-medium text-research-text">{tool.name}</div>
                        <div className="text-xs text-research-text-secondary">{tool.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Team Size</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>Solo Annotator</option>
                      <option>Small Team (2-5)</option>
                      <option>Medium Team (6-15)</option>
                      <option>Large Team (16+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Quality Control</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>Inter-annotator Agreement</option>
                      <option>Expert Review</option>
                      <option>Consensus Building</option>
                      <option>AI-Assisted Validation</option>
                    </select>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-xl hover:shadow-ai-glow transition-all duration-300">
                    <Edit3 className="h-5 w-5 mr-2" />
                    Start Annotation Project
                  </button>
                </div>
              </div>
              
              <LottieAnimation 
                animationFile="annotation-workflow-demo.json"
                className="mx-auto"
                width={800}
                height={500}
              />
              
              <div className="mt-6 text-center">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300">
                  <Layers className="h-5 w-5 mr-2" />
                  Launch Full Demo
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
              <h2 className="section-title text-research-text mb-6">Annotation Platform Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The annotation platform architecture integrates data input layers, annotation engines, 
                and collaboration frameworks to deliver comprehensive, multi-modal labeling capabilities. 
                The system emphasizes quality control, consensus building, and seamless integration 
                with machine learning pipelines for optimal training data generation and model development.
              </p>
              
              <MermaidDiagram chart={annotationArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through five integrated layers: (1) data input with text, image, 
                and video processing, (2) annotation engine with tools, ML assistance, and quality 
                control, (3) collaboration framework with multi-user interface and consensus management, 
                (4) unified data flow with content processing and annotation pipeline, and (5) results 
                validation with export capabilities and ML model training integration.
              </p>
            </motion.div>

            {/* Annotation Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Annotation Quality &amp; Productivity Metrics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive analysis of annotation quality, team productivity, and consensus 
                building across different data types and annotation tasks. The platform provides 
                real-time monitoring, quality assurance metrics, and performance optimization 
                insights to ensure high-quality training data creation and efficient workflows.
              </p>
              
              <InteractiveChart
                dataFile="annotation_platform_metrics.json"
                chartType="doughnut"
                title="Annotation Platform - Quality &amp; Productivity Analysis"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Platform metrics demonstrate 95% inter-annotator agreement on structured tasks, 
                3x productivity improvement with AI assistance, 85% reduction in annotation time 
                through collaborative workflows, and 92% downstream model performance improvement.
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
                The following implementation demonstrates the comprehensive annotation platform 
                with collaborative tools, AI assistance, quality control mechanisms, and ML 
                pipeline integration designed to accelerate the creation of high-quality training 
                datasets for diverse machine learning applications and research projects.
              </p>
              
              <CodeBlock
                code={annotationCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The annotation framework provides systematic approaches to data labeling that 
                enable teams to create high-quality training datasets efficiently while maintaining 
                consistency, reducing bias, and ensuring optimal machine learning model performance.
              </p>
            </motion.div>

            {/* Annotation Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Layers className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Multi-Modal Annotation Capabilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Text Annotation</h3>
                  <p className="body-text text-research-text-secondary">
                    Named entity recognition, sentiment analysis, text classification, and relationship extraction tools.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Image Labeling</h3>
                  <p className="body-text text-research-text-secondary">
                    Object detection, semantic segmentation, keypoint annotation, and image classification interfaces.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Audio Annotation</h3>
                  <p className="body-text text-research-text-secondary">
                    Speech transcription, audio event detection, speaker identification, and acoustic scene labeling.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Video Processing</h3>
                  <p className="body-text text-research-text-secondary">
                    Temporal action recognition, object tracking, scene understanding, and multimodal content analysis.
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
                  <h3 className="text-lg font-semibold text-research-text mb-2">Machine Learning Research</h3>
                  <p className="body-text text-research-text-secondary">
                    Research teams create high-quality labeled datasets for training and evaluating 
                    machine learning models across NLP, computer vision, and multimodal AI applications 
                    with collaborative annotation workflows and quality assurance mechanisms.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Enterprise AI Development</h3>
                  <p className="body-text text-research-text-secondary">
                    Organizations accelerate AI model development by efficiently creating domain-specific 
                    training data with collaborative teams, AI-assisted labeling, and seamless integration 
                    with ML pipelines for production deployment and continuous improvement.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Educational &amp; Training Programs</h3>
                  <p className="body-text text-research-text-secondary">
                    Educational institutions and training programs use the platform to teach data 
                    annotation best practices, demonstrate ML workflow concepts, and provide hands-on 
                    experience with collaborative data labeling and quality control processes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quality Control Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Quality Control &amp; Consensus Building</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Agreement Analysis</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Inter-annotator agreement metrics, consistency tracking, and disagreement resolution workflows.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Expert Review</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Expert validation workflows, quality scoring systems, and iterative improvement processes.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">AI Assistance</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    ML-powered pre-labeling, anomaly detection, and intelligent annotation suggestions.
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
                <Edit3 className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Getting Started</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Setup Annotation Project</h3>
                    <p className="body-text text-research-text-secondary">
                      Define your data type, annotation task, label taxonomy, and team configuration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Collaborate &amp; Annotate</h3>
                    <p className="body-text text-research-text-secondary">
                      Use collaborative tools, AI assistance, and quality control mechanisms to create high-quality labels.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Export &amp; Train Models</h3>
                    <p className="body-text text-research-text-secondary">
                      Export validated annotations and integrate with ML pipelines for model training and evaluation.
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
                  href="/tools/language-model-comparison"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Tool
                </Link>
                
                <Link
                  href="/tools"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  All Tools
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
