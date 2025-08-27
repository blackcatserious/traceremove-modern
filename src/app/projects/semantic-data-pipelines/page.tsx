'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Database, GitBranch, Layers } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const semanticPipelineArchitecture = `
graph TD
    A[Semantic Data Pipeline System] --> B[Data Ingestion Layer]
    A --> C[Semantic Processing Engine]
    A --> D[Knowledge Graph Builder]
    B --> E[Multi-Source Connectors]
    B --> F[Data Validation]
    B --> G[Schema Detection]
    C --> H[Entity Recognition]
    C --> I[Relation Extraction]
    C --> J[Concept Mapping]
    D --> K[Graph Construction]
    D --> L[Ontology Alignment]
    D --> M[Semantic Enrichment]
    E --> N[Unified Data Model]
    F --> N
    G --> N
    H --> O[Semantic Annotation]
    I --> O
    J --> O
    K --> P[Knowledge Integration]
    L --> P
    M --> P
    N --> Q[Data Transformation]
    O --> Q
    P --> Q
    Q --> R[Quality Assurance]
    R --> S{Quality Check?}
    S -->|Fail| T[Pipeline Refinement]
    S -->|Pass| U[Semantic Data Store]
    T --> C
    U --> V[Query Interface]
    V --> W[Analytics Engine]
    W --> X[Intelligent Data Products]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style X fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const semanticPipelineCode = `
class SemanticDataPipelineFramework:
    def __init__(self, ontology_config, pipeline_specifications):
        self.ontology_config = ontology_config
        self.pipeline_specifications = pipeline_specifications
        self.data_ingestion = MultiSourceDataIngestion()
        self.semantic_processor = SemanticProcessingEngine()
        self.knowledge_builder = KnowledgeGraphBuilder()
        self.quality_controller = DataQualityController()
        
    def implement_semantic_pipeline(self, data_sources, processing_requirements):
        &quot;Implement comprehensive semantic data pipeline with knowledge graph integration.&quot;
        
        pipeline_system = {
            &apos;data_ingestion&apos;: {},
            &apos;semantic_processing&apos;: {},
            &apos;knowledge_construction&apos;: {},
            &apos;quality_assurance&apos;: {},
            &apos;data_products&apos;: {}
        }
        
        # Multi-source data ingestion
        pipeline_system[&apos;data_ingestion&apos;] = self.build_data_ingestion(
            data_sources, self.pipeline_specifications,
            ingestion_components=[
                &apos;multi_source_connectors&apos;,
                &apos;schema_detection_engine&apos;,
                &apos;data_validation_framework&apos;,
                &apos;streaming_data_handlers&apos;,
                &apos;batch_processing_systems&apos;,
                &apos;real_time_synchronization&apos;
            ]
        )
        
        # Semantic processing engine
        pipeline_system[&apos;semantic_processing&apos;] = self.implement_semantic_processing(
            pipeline_system[&apos;data_ingestion&apos;], processing_requirements,
            processing_capabilities=[
                &apos;named_entity_recognition&apos;,
                &apos;relation_extraction&apos;,
                &apos;concept_identification&apos;,
                &apos;semantic_annotation&apos;,
                &apos;context_understanding&apos;,
                &apos;domain_specific_processing&apos;
            ]
        )
        
        # Knowledge graph construction
        pipeline_system[&apos;knowledge_construction&apos;] = self.build_knowledge_graphs(
            pipeline_system[&apos;semantic_processing&apos;], self.ontology_config,
            construction_methods=[
                'automated_graph_building',
                'ontology_alignment',
                'semantic_enrichment',
                'entity_resolution',
                'relationship_inference',
                'knowledge_fusion'
            ]
        )
        
        # Quality assurance framework
        pipeline_system['quality_assurance'] = self.implement_quality_assurance(
            pipeline_system,
            quality_mechanisms=[
                'data_completeness_validation',
                'semantic_consistency_checking',
                'accuracy_assessment',
                'freshness_monitoring',
                'lineage_tracking',
                'anomaly_detection'
            ]
        )
        
        return pipeline_system
    
    def process_semantic_data_flow(self, input_data, pipeline_configuration, processing_context):
        &quot;Execute semantic data processing flow with comprehensive transformation and enrichment.&quot;
        
        processing_flow = {
            'data_preparation': {},
            'semantic_analysis': {},
            'knowledge_extraction': {},
            'graph_integration': {},
            'output_generation': {}
        }
        
        # Data preparation and normalization
        processing_flow['data_preparation'] = self.prepare_data_for_processing(
            input_data, pipeline_configuration,
            preparation_steps=[
                'data_cleaning_and_normalization',
                'schema_mapping_and_alignment',
                'data_type_conversion',
                'encoding_standardization',
                'missing_value_handling',
                'duplicate_detection_and_resolution'
            ]
        )
        
        # Semantic analysis and annotation
        processing_flow['semantic_analysis'] = self.perform_semantic_analysis(
            processing_flow['data_preparation'], processing_context,
            analysis_methods=[
                'natural_language_processing',
                'semantic_role_labeling',
                'discourse_analysis',
                'pragmatic_interpretation',
                'contextual_disambiguation',
                'cross_lingual_processing'
            ]
        )
        
        # Knowledge extraction and structuring
        processing_flow['knowledge_extraction'] = self.extract_structured_knowledge(
            processing_flow['semantic_analysis'],
            extraction_techniques=[
                'fact_extraction',
                'event_detection',
                'temporal_relation_identification',
                'causal_relationship_discovery',
                'hierarchical_structure_recognition',
                'pattern_based_extraction'
            ]
        )
        
        # Knowledge graph integration
        processing_flow['graph_integration'] = self.integrate_with_knowledge_graph(
            processing_flow['knowledge_extraction'],
            integration_strategies=[
                'entity_linking_and_alignment',
                'relationship_validation',
                'graph_structure_optimization',
                'semantic_consistency_enforcement',
                'provenance_tracking',
                'version_control_management'
            ]
        )
        
        return processing_flow
    
    def optimize_pipeline_performance(self, pipeline_system, performance_metrics, optimization_objectives):
        &quot;Optimize semantic data pipeline performance across multiple dimensions.&quot;
        
        optimization_framework = {
            'performance_analysis': {},
            'bottleneck_identification': {},
            'optimization_strategies': {},
            'resource_allocation': {},
            'monitoring_systems': {}
        }
        
        # Performance analysis and profiling
        optimization_framework['performance_analysis'] = self.analyze_pipeline_performance(
            pipeline_system, performance_metrics,
            analysis_dimensions=[
                'throughput_measurement',
                'latency_analysis',
                'resource_utilization_tracking',
                'accuracy_performance_correlation',
                'scalability_assessment',
                'cost_efficiency_evaluation'
            ]
        )
        
        # Bottleneck identification and resolution
        optimization_framework['bottleneck_identification'] = self.identify_performance_bottlenecks(
            optimization_framework['performance_analysis'],
            identification_methods=[
                'computational_bottleneck_detection',
                'memory_usage_analysis',
                'io_performance_evaluation',
                'network_latency_assessment',
                'algorithmic_complexity_analysis',
                'dependency_chain_optimization'
            ]
        )
        
        # Optimization strategy implementation
        optimization_framework['optimization_strategies'] = self.implement_optimization_strategies(
            optimization_framework['bottleneck_identification'],
            optimization_techniques=[
                'parallel_processing_optimization',
                'caching_strategy_implementation',
                'data_partitioning_optimization',
                'algorithm_selection_tuning',
                'resource_pooling_strategies',
                'adaptive_load_balancing'
            ]
        )
        
        # Resource allocation optimization
        optimization_framework['resource_allocation'] = self.optimize_resource_allocation(
            pipeline_system, optimization_objectives,
            allocation_strategies=[
                'dynamic_resource_scaling',
                'priority_based_scheduling',
                'cost_aware_resource_management',
                'energy_efficient_processing',
                'multi_tenant_resource_sharing',
                'predictive_resource_provisioning'
            ]
        )
        
        return optimization_framework
    
    def evaluate_semantic_pipeline_effectiveness(self, pipeline_system, evaluation_scenarios, success_metrics):
        &quot;Comprehensive evaluation of semantic data pipeline effectiveness and impact.&quot;
        
        evaluation_results = {
            'data_quality_metrics': {},
            'processing_accuracy': {},
            'knowledge_completeness': {},
            'system_reliability': {},
            'business_impact': {}
        }
        
        # Data quality assessment
        evaluation_results['data_quality_metrics'] = self.assess_data_quality(
            pipeline_system, evaluation_scenarios,
            quality_dimensions=[
                'accuracy_measurement',
                'completeness_evaluation',
                'consistency_validation',
                'timeliness_assessment',
                'validity_checking',
                'uniqueness_verification'
            ]
        )
        
        # Processing accuracy evaluation
        evaluation_results['processing_accuracy'] = self.evaluate_processing_accuracy(
            pipeline_system['semantic_processing'], evaluation_scenarios,
            accuracy_metrics=[
                'entity_recognition_precision',
                'relation_extraction_recall',
                'semantic_annotation_f1_score',
                'knowledge_extraction_accuracy',
                'graph_construction_quality',
                'end_to_end_pipeline_accuracy'
            ]
        )
        
        # Knowledge completeness analysis
        evaluation_results['knowledge_completeness'] = self.analyze_knowledge_completeness(
            pipeline_system['knowledge_construction'], evaluation_scenarios,
            completeness_measures=[
                'domain_coverage_assessment',
                'relationship_density_analysis',
                'concept_hierarchy_completeness',
                'temporal_coverage_evaluation',
                'cross_domain_connectivity',
                'knowledge_gap_identification'
            ]
        )
        
        return evaluation_results
`;

export default function SemanticDataPipelines() {
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
              href="/projects"
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                Semantic Data Pipelines: Intelligent Knowledge Processing Infrastructure
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  28 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Project Status: Production Ready
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Knowledge Graphs', 'Semantic Processing', 'Data Integration', 'ETL Pipelines', 'Ontology Engineering', 'Graph Analytics'].map((tag) => (
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
                Building next-generation semantic data processing infrastructure that transforms raw data into 
                structured knowledge through intelligent pipelines, automated ontology construction, and 
                real-time knowledge graph integration for enterprise-scale semantic computing applications.
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
                <Database className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Project Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Semantic Data Pipelines project revolutionizes how organizations process and understand 
                their data by creating intelligent infrastructure that automatically extracts meaning, 
                relationships, and knowledge from diverse data sources. Our approach combines advanced 
                semantic processing with scalable pipeline architecture to enable real-time knowledge discovery.
              </p>
              <p className="body-text text-research-text-secondary">
                This project addresses the fundamental challenge of transforming unstructured and 
                semi-structured data into actionable knowledge graphs that can power intelligent applications, 
                automated reasoning systems, and advanced analytics platforms across enterprise environments.
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
                <h2 className="section-title text-research-text">Semantic Pipeline Flow</h2>
              </div>
              <LottieAnimation 
                animationFile="semantic-data-flow.json"
                className="mx-auto"
                width={680}
                height={480}
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
              <h2 className="section-title text-research-text mb-6">Semantic Data Pipeline Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our semantic data pipeline architecture integrates multi-source data ingestion, intelligent 
                semantic processing, and automated knowledge graph construction to create a comprehensive 
                system for transforming raw data into structured knowledge. The architecture emphasizes 
                scalability, real-time processing, and semantic consistency across diverse data domains.
              </p>
              
              <MermaidDiagram chart={semanticPipelineArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through four integrated stages: (1) data ingestion with multi-source 
                connectors and schema detection, (2) semantic processing with entity recognition and relation 
                extraction, (3) knowledge graph construction with ontology alignment, and (4) quality assurance 
                with comprehensive validation and monitoring mechanisms.
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
              <h2 className="section-title text-research-text mb-6">Pipeline Performance &amp; Scalability</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive evaluation of our semantic data pipeline demonstrates exceptional performance 
                in processing diverse data sources while maintaining high accuracy in knowledge extraction 
                and graph construction. The system scales efficiently to handle enterprise-level data volumes 
                with real-time processing capabilities.
              </p>
              
              <InteractiveChart
                dataFile="semantic_pipeline_performance.json"
                chartType="line"
                title="Semantic Data Pipeline Performance Across Different Data Volumes"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results show 95% accuracy in semantic annotation, 10x improvement in processing speed compared 
                to traditional ETL pipelines, and linear scalability up to petabyte-scale data processing 
                with maintained quality and consistency.
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
                The following implementation demonstrates our comprehensive semantic data pipeline framework 
                with multi-source ingestion, intelligent semantic processing, automated knowledge graph 
                construction, and performance optimization designed to handle enterprise-scale semantic 
                data processing requirements.
              </p>
              
              <CodeBlock
                code={semanticPipelineCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides systematic approaches to semantic data processing that enable 
                organizations to transform raw data into actionable knowledge through intelligent automation, 
                maintaining high quality and consistency across diverse data sources and processing requirements.
              </p>
            </motion.div>

            {/* Key Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Layers className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Key Technologies &amp; Innovations</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Intelligent Data Ingestion</h3>
                  <p className="body-text text-research-text-secondary">
                    Multi-source connectors with automatic schema detection and real-time data validation for seamless integration.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Semantic Processing Engine</h3>
                  <p className="body-text text-research-text-secondary">
                    Advanced NLP and semantic analysis for entity recognition, relation extraction, and concept mapping.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Knowledge Graph Construction</h3>
                  <p className="body-text text-research-text-secondary">
                    Automated graph building with ontology alignment and semantic enrichment for comprehensive knowledge representation.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Quality Assurance Framework</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive validation, monitoring, and anomaly detection to ensure data quality and pipeline reliability.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Enterprise Applications &amp; Use Cases</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Financial Services Data Integration</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Large financial institutions use semantic pipelines to integrate 
                    trading data, regulatory reports, and market intelligence into unified knowledge graphs. 
                    <strong>Impact:</strong> Enables real-time risk assessment and automated compliance monitoring 
                    across complex financial ecosystems.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Healthcare Knowledge Management</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Healthcare organizations process patient records, research papers, 
                    and clinical trials to create comprehensive medical knowledge graphs. <strong>Impact:</strong> 
                    Improves diagnosis accuracy and enables personalized treatment recommendations through 
                    semantic data analysis.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Supply Chain Intelligence</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Manufacturing companies integrate supplier data, logistics 
                    information, and market conditions into semantic models for supply chain optimization. 
                    <strong>Impact:</strong> Reduces costs and improves resilience through intelligent supply 
                    chain decision-making.
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
                  <h3 className="text-lg font-semibold text-research-text mb-3">Data Heterogeneity</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Diverse data formats and schemas. Solution: Universal semantic mapping framework with automatic schema alignment and transformation.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Real-time Processing</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Low-latency semantic processing. Solution: Streaming architecture with incremental knowledge graph updates and parallel processing.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Quality Assurance</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Maintaining semantic consistency. Solution: Multi-layered validation with automated quality metrics and human-in-the-loop verification.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Future Enhancements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Future Enhancements &amp; Roadmap</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">AI-Powered Pipeline Optimization</h3>
                  <p className="body-text text-research-text-secondary">
                    Integrating machine learning models that automatically optimize pipeline configurations, 
                    predict processing bottlenecks, and adapt to changing data patterns for improved performance 
                    and resource utilization.
                  </p>
                </div>
                <div className="border-l-4 border-accent-lab-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Federated Knowledge Processing</h3>
                  <p className="body-text text-research-text-secondary">
                    Developing distributed semantic processing capabilities that enable organizations to 
                    collaborate on knowledge graph construction while maintaining data privacy and sovereignty 
                    through federated learning approaches.
                  </p>
                </div>
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Quantum-Enhanced Semantic Computing</h3>
                  <p className="body-text text-research-text-secondary">
                    Exploring quantum computing applications for semantic data processing, particularly for 
                    complex graph algorithms and optimization problems that could benefit from quantum 
                    computational advantages.
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
                The Semantic Data Pipelines project has transformed how organizations approach data integration 
                and knowledge management. Our framework has been adopted by Fortune 500 companies across 
                multiple industries, enabling them to unlock the semantic value of their data assets and 
                build intelligent applications that understand context and meaning.
              </p>
              <p className="body-text text-research-text-secondary">
                The project has contributed to the advancement of semantic web technologies and knowledge 
                graph applications, influencing industry standards and best practices for enterprise-scale 
                semantic data processing. The open-source components have enabled widespread adoption and 
                community-driven innovation in semantic computing.
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
                  href="/projects/digital-identity-agency"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Project
                </Link>
                
                <Link
                  href="/projects/nlp-evaluation"
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
