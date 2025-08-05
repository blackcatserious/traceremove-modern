'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, FileText, Brain, Zap, Download } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const summarizerArchitecture = `
graph TD
    A[Paper Summarizer] --> B[Document Processing]
    A --> C[NLP Analysis Engine]
    A --> D[Summarization Framework]
    B --> E[PDF Text Extraction]
    B --> F[Structure Recognition]
    B --> G[Citation Parsing]
    C --> H[Language Understanding]
    C --> I[Key Concept Extraction]
    C --> J[Semantic Analysis]
    D --> K[Abstractive Summarization]
    D --> L[Extractive Summarization]
    D --> M[Multi-level Summaries]
    E --> N[Preprocessed Text]
    F --> N
    G --> N
    H --> O[Analyzed Content]
    I --> O
    J --> O
    K --> P[Generated Summaries]
    L --> P
    M --> P
    N --> Q[Content Pipeline]
    O --> Q
    P --> Q
    Q --> R[Summary Generation]
    R --> S{Quality Check?}
    S -->|Pass| T[Final Summary]
    S -->|Fail| U[Refinement Process]
    T --> V[Multi-format Output]
    U --> W[Improved Summary]
    V --> X[Knowledge Extraction]
    W --> X
    X --> Y[Research Insights]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style Y fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const summarizerCode = `
class PaperSummarizer:
    def __init__(self, nlp_models, summarization_engines):
        self.nlp_models = nlp_models
        self.summarization_engines = summarization_engines
        self.document_processor = DocumentProcessor()
        self.content_analyzer = ContentAnalyzer()
        self.summary_generator = SummaryGenerator()
        self.quality_assessor = QualityAssessor()
        
    def implement_paper_summarization_system(self, document_sources, summarization_requirements):
        """Implement comprehensive paper summarization system with multi-level analysis and generation."""
        
        summarization_system = {
            'document_processing': {},
            'content_analysis': {},
            'summary_generation': {},
            'quality_assessment': {},
            'output_formatting': {}
        }
        
        # Advanced document processing
        summarization_system['document_processing'] = self.build_document_processing(
            document_sources, self.nlp_models,
            processing_components=[
                'pdf_text_extraction_engine',
                'document_structure_recognition',
                'citation_and_reference_parsing',
                'figure_and_table_extraction',
                'metadata_identification',
                'multi_language_support'
            ]
        )
        
        # Intelligent content analysis
        summarization_system['content_analysis'] = self.implement_content_analysis(
            summarization_system['document_processing'], summarization_requirements,
            analysis_capabilities=[
                'semantic_understanding_engine',
                'key_concept_identification',
                'argument_structure_analysis',
                'methodology_extraction',
                'result_significance_assessment',
                'contribution_evaluation'
            ]
        )
        
        # Multi-modal summary generation
        summarization_system['summary_generation'] = self.build_summary_generation(
            summarization_system['content_analysis'],
            generation_methods=[
                'abstractive_summarization_models',
                'extractive_key_sentence_selection',
                'hierarchical_summary_creation',
                'domain_specific_adaptation',
                'length_customizable_outputs',
                'style_and_tone_adjustment'
            ]
        )
        
        # Comprehensive quality assessment
        summarization_system['quality_assessment'] = self.implement_quality_assessment(
            summarization_system['summary_generation'],
            assessment_criteria=[
                'factual_accuracy_verification',
                'completeness_evaluation',
                'coherence_and_flow_analysis',
                'readability_optimization',
                'bias_detection_and_mitigation',
                'citation_integrity_checking'
            ]
        )
        
        return summarization_system
    
    def execute_paper_summarization(self, research_paper, summary_specifications, user_preferences):
        """Execute comprehensive paper summarization with customizable depth and focus areas."""
        
        summarization_process = {
            'document_analysis': {},
            'content_extraction': {},
            'summary_synthesis': {},
            'quality_refinement': {},
            'output_generation': {}
        }
        
        # Comprehensive document analysis
        summarization_process['document_analysis'] = self.analyze_research_paper(
            research_paper, summary_specifications,
            analysis_dimensions=[
                'paper_type_classification',
                'research_domain_identification',
                'methodology_categorization',
                'contribution_significance_assessment',
                'citation_network_analysis',
                'novelty_and_impact_evaluation'
            ]
        )
        
        # Intelligent content extraction
        summarization_process['content_extraction'] = self.extract_key_content(
            summarization_process['document_analysis'], user_preferences,
            extraction_strategies=[
                'abstract_and_introduction_processing',
                'methodology_section_analysis',
                'results_and_findings_extraction',
                'discussion_and_conclusion_synthesis',
                'related_work_contextualization',
                'future_work_identification'
            ]
        )
        
        # Advanced summary synthesis
        summarization_process['summary_synthesis'] = self.synthesize_comprehensive_summary(
            summarization_process['content_extraction'],
            synthesis_approaches=[
                'multi_level_abstraction_creation',
                'cross_section_integration',
                'logical_flow_optimization',
                'technical_detail_balancing',
                'audience_appropriate_language',
                'visual_element_integration'
            ]
        )
        
        # Iterative quality refinement
        summarization_process['quality_refinement'] = self.refine_summary_quality(
            summarization_process['summary_synthesis'],
            refinement_processes=[
                'factual_consistency_verification',
                'clarity_and_conciseness_optimization',
                'technical_accuracy_validation',
                'bias_neutrality_enhancement',
                'citation_completeness_checking',
                'readability_improvement'
            ]
        )
        
        return summarization_process
    
    def implement_advanced_summarization_features(self, summarization_system, feature_requirements, domain_knowledge):
        """Implement advanced summarization features with domain expertise and personalization."""
        
        advanced_features = {
            'domain_adaptation': {},
            'personalization_engine': {},
            'comparative_analysis': {},
            'trend_identification': {},
            'collaboration_tools': {}
        }
        
        # Domain-specific adaptation
        advanced_features['domain_adaptation'] = self.build_domain_adaptation(
            summarization_system, feature_requirements,
            adaptation_capabilities=[
                'field_specific_terminology_handling',
                'methodology_pattern_recognition',
                'domain_expert_knowledge_integration',
                'specialized_evaluation_metrics',
                'context_aware_summarization',
                'interdisciplinary_connection_identification'
            ]
        )
        
        # Intelligent personalization engine
        advanced_features['personalization_engine'] = self.implement_personalization_engine(
            advanced_features['domain_adaptation'], domain_knowledge,
            personalization_features=[
                'user_expertise_level_adaptation',
                'research_interest_alignment',
                'reading_preference_customization',
                'summary_length_optimization',
                'focus_area_prioritization',
                'learning_objective_alignment'
            ]
        )
        
        # Comparative analysis capabilities
        advanced_features['comparative_analysis'] = self.build_comparative_analysis(
            advanced_features,
            comparison_methods=[
                'multi_paper_synthesis',
                'methodology_comparison_analysis',
                'result_contradiction_identification',
                'research_gap_detection',
                'trend_evolution_tracking',
                'citation_impact_assessment'
            ]
        )
        
        # Research trend identification
        advanced_features['trend_identification'] = self.implement_trend_identification(
            advanced_features, domain_knowledge,
            trend_analysis_capabilities=[
                'emerging_topic_detection',
                'research_direction_prediction',
                'collaboration_pattern_analysis',
                'impact_trajectory_modeling',
                'innovation_cycle_identification',
                'paradigm_shift_recognition'
            ]
        )
        
        return advanced_features
    
    def evaluate_summarization_effectiveness(self, summarization_usage, summary_quality, user_satisfaction):
        """Evaluate the effectiveness of paper summarization in facilitating research understanding and productivity."""
        
        effectiveness_evaluation = {
            'accuracy_assessment': {},
            'comprehension_improvement': {},
            'time_efficiency': {},
            'research_productivity': {},
            'user_experience': {}
        }
        
        # Summary accuracy assessment
        effectiveness_evaluation['accuracy_assessment'] = self.assess_summary_accuracy(
            summarization_usage, summary_quality,
            accuracy_metrics=[
                'factual_correctness_validation',
                'key_point_coverage_analysis',
                'technical_detail_preservation',
                'context_maintenance_evaluation',
                'citation_accuracy_verification',
                'expert_evaluation_correlation'
            ]
        )
        
        # Comprehension improvement measurement
        effectiveness_evaluation['comprehension_improvement'] = self.measure_comprehension_improvement(
            effectiveness_evaluation['accuracy_assessment'], user_satisfaction,
            comprehension_indicators=[
                'concept_understanding_enhancement',
                'methodology_clarity_improvement',
                'result_interpretation_accuracy',
                'research_context_appreciation',
                'critical_thinking_facilitation',
                'knowledge_retention_improvement'
            ]
        )
        
        # Research productivity impact
        effectiveness_evaluation['research_productivity'] = self.assess_productivity_impact(
            effectiveness_evaluation,
            productivity_dimensions=[
                'literature_review_acceleration',
                'research_direction_clarification',
                'collaboration_opportunity_identification',
                'methodology_selection_support',
                'writing_quality_enhancement',
                'innovation_inspiration_generation'
            ]
        )
        
        return effectiveness_evaluation
`;

export default function PaperSummarizer() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="neural" particleCount={120} />
      
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
                Paper Summarizer: Intelligent Research Document Analysis &amp; Synthesis
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
                {['NLP Processing', 'Document Analysis', 'Abstractive Summarization', 'Research Synthesis', 'Multi-format Output', 'Quality Assessment'].map((tag) => (
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
                Advanced AI-powered research paper summarization platform that transforms complex 
                academic documents into clear, comprehensive summaries. Features intelligent content 
                analysis, multi-level abstraction, domain-specific adaptation, and quality assessment 
                to accelerate literature review, enhance research comprehension, and support academic productivity.
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
                <FileText className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Paper Summarizer Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Paper Summarizer leverages advanced natural language processing and machine 
                learning to automatically generate high-quality summaries of research papers, 
                academic articles, and technical documents. It provides multi-level abstractions, 
                domain-specific insights, and customizable output formats for diverse research needs.
              </p>
              <p className="body-text text-research-text-secondary">
                This intelligent platform supports researchers, students, and professionals in 
                efficiently processing large volumes of academic literature, identifying key 
                contributions, and accelerating knowledge discovery across disciplines.
              </p>
            </motion.div>

            {/* Interactive Summarizer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Intelligent Summarization Interface</h2>
              </div>
              
              {/* Upload Interface */}
              <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-accent-ai-purple/20">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-research-text mb-4">Document Upload &amp; Processing</h3>
                  <div className="border-2 border-dashed border-accent-ai-purple/30 rounded-xl p-8 text-center hover:border-accent-ai-purple/50 transition-colors duration-200">
                    <FileText className="h-12 w-12 text-accent-ai-purple mx-auto mb-4" />
                    <p className="text-research-text mb-2">Drop your research paper here or click to browse</p>
                    <p className="text-sm text-research-text-secondary">Supports PDF, DOC, DOCX, TXT formats up to 50MB</p>
                    <button className="mt-4 px-6 py-2 bg-accent-ai-purple/20 text-accent-ai-purple rounded-lg hover:bg-accent-ai-purple/30 transition-colors duration-200">
                      Choose File
                    </button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Summary Type</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>Executive Summary</option>
                      <option>Technical Abstract</option>
                      <option>Methodology Focus</option>
                      <option>Results &amp; Findings</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Summary Length</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>Brief (100-200 words)</option>
                      <option>Standard (300-500 words)</option>
                      <option>Detailed (500-1000 words)</option>
                      <option>Comprehensive (1000+ words)</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-research-text mb-2">Focus Areas</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Key Contributions', 'Methodology', 'Results & Data', 'Related Work', 'Future Directions', 'Limitations'].map((focus) => (
                      <label key={focus} className="flex items-center space-x-3">
                        <input type="checkbox" className="w-4 h-4 text-accent-ai-purple bg-white/10 border-accent-ai-purple/30 rounded focus:ring-accent-ai-purple focus:ring-2" />
                        <span className="text-sm text-research-text-secondary">{focus}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-xl hover:shadow-ai-glow transition-all duration-300">
                    <Zap className="h-5 w-5 mr-2" />
                    Generate Summary
                  </button>
                </div>
              </div>
              
              <LottieAnimation 
                animationFile="paper-summarization-demo.json"
                className="mx-auto"
                width={750}
                height={450}
              />
              
              <div className="mt-6 text-center">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300">
                  <Download className="h-5 w-5 mr-2" />
                  Download Summary Report
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
              <h2 className="section-title text-research-text mb-6">Summarization System Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The paper summarizer architecture integrates document processing, NLP analysis, 
                and summarization frameworks to deliver intelligent, high-quality research summaries. 
                The system emphasizes content understanding, multi-level abstraction, and quality 
                assessment to ensure accurate and comprehensive knowledge extraction from academic literature.
              </p>
              
              <MermaidDiagram chart={summarizerArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through five integrated layers: (1) document processing with 
                PDF extraction and structure recognition, (2) NLP analysis with semantic understanding 
                and concept extraction, (3) summarization framework with abstractive and extractive 
                methods, (4) content pipeline with preprocessing and analysis, and (5) summary 
                generation with quality checks and multi-format output capabilities.
              </p>
            </motion.div>

            {/* Sample Summaries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Summarization Performance &amp; Quality Metrics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive analysis of summarization effectiveness across different document 
                types, research domains, and summary formats. The platform demonstrates high 
                accuracy in key concept extraction, factual preservation, and readability 
                optimization while maintaining technical precision and contextual coherence.
              </p>
              
              <InteractiveChart
                dataFile="paper_summarization_metrics.json"
                chartType="doughnut"
                title="Paper Summarization - Quality &amp; Performance Analysis"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Performance metrics show 92% accuracy in key concept identification, 88% factual 
                consistency preservation, 85% user satisfaction ratings, and 70% time reduction 
                in literature review processes across diverse academic disciplines.
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
                The following implementation demonstrates the comprehensive paper summarization 
                system with advanced NLP capabilities, multi-level analysis, quality assessment, 
                and domain adaptation designed to process complex academic documents and generate 
                accurate, readable summaries for diverse research and educational applications.
              </p>
              
              <CodeBlock
                code={summarizerCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The summarization framework provides systematic approaches to document analysis 
                and synthesis that enable researchers to efficiently process academic literature, 
                extract key insights, and accelerate knowledge discovery through intelligent automation.
              </p>
            </motion.div>

            {/* Summarization Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Advanced Summarization Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Multi-level Abstraction</h3>
                  <p className="body-text text-research-text-secondary">
                    Generate summaries at different levels of detail from brief abstracts to comprehensive overviews.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Domain Adaptation</h3>
                  <p className="body-text text-research-text-secondary">
                    Specialized processing for different research fields with domain-specific terminology and conventions.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Quality Assessment</h3>
                  <p className="body-text text-research-text-secondary">
                    Automated evaluation of summary accuracy, completeness, and readability with iterative refinement.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Comparative Analysis</h3>
                  <p className="body-text text-research-text-secondary">
                    Multi-paper synthesis and comparison capabilities for comprehensive literature reviews.
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
                  <h3 className="text-lg font-semibold text-research-text mb-2">Academic Research &amp; Literature Review</h3>
                  <p className="body-text text-research-text-secondary">
                    Researchers accelerate literature review processes by quickly understanding 
                    key contributions, methodologies, and findings across large volumes of papers, 
                    enabling more efficient research planning and comprehensive state-of-the-art analysis.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Educational Support &amp; Learning</h3>
                  <p className="body-text text-research-text-secondary">
                    Students and educators use the platform to break down complex research papers 
                    into digestible summaries, facilitating comprehension, supporting coursework, 
                    and enhancing learning outcomes across diverse academic disciplines.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Industry Research &amp; Innovation</h3>
                  <p className="body-text text-research-text-secondary">
                    R&amp;D teams and innovation professionals leverage the tool to stay current 
                    with academic developments, identify emerging trends, and translate research 
                    insights into practical applications and strategic decision-making.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Output Formats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Summary Output Formats</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Executive Summary</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Concise overview highlighting key contributions, methodology, and implications for decision-makers.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Technical Abstract</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Detailed technical summary preserving methodological details and quantitative results.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Structured Report</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Comprehensive analysis with sections for background, methods, results, and conclusions.
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
                <FileText className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Getting Started</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Upload Research Paper</h3>
                    <p className="body-text text-research-text-secondary">
                      Upload your PDF, DOC, or text file and select your preferred summary type and length.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Configure Summary Options</h3>
                    <p className="body-text text-research-text-secondary">
                      Choose focus areas, summary depth, and output format to match your specific needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Review &amp; Export Summary</h3>
                    <p className="body-text text-research-text-secondary">
                      Review the generated summary, make adjustments if needed, and export in your preferred format.
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
                  href="/tools/data-visualization-playground"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Tool
                </Link>
                
                <Link
                  href="/tools/language-model-comparison"
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
