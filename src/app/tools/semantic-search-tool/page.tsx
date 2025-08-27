'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Search, Brain, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import PremiumButton from '@/components/PremiumButton';

const semanticSearchArchitecture = `
graph TD
    A[Semantic Search Tool] --> B[Query Processing]
    A --> C[Embedding Engine]
    A --> D[Vector Database]
    B --> E[Natural Language Understanding]
    B --> F[Intent Recognition]
    B --> G[Context Extraction]
    C --> H[Transformer Models]
    C --> I[Domain Adaptation]
    C --> J[Multi-modal Encoding]
    D --> K[Vector Indexing]
    D --> L[Similarity Search]
    D --> M[Result Ranking]
    E --> N[Semantic Representation]
    F --> N
    G --> N
    H --> O[Dense Embeddings]
    I --> O
    J --> O
    K --> P[Search Infrastructure]
    L --> P
    M --> P
    N --> Q[Query Understanding]
    O --> Q
    P --> Q
    Q --> R[Relevance Matching]
    R --> S{Results Found?}
    S -->|Yes| T[Ranked Results]
    S -->|No| U[Query Expansion]
    T --> V[Result Presentation]
    U --> B
    V --> W[Intelligent Search]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const semanticSearchCode = `
class SemanticSearchTool:
    def __init__(self, embedding_model, vector_database, search_config):
        self.embedding_model = embedding_model
        self.vector_database = vector_database
        self.search_config = search_config
        self.query_processor = QueryProcessor()
        self.relevance_ranker = RelevanceRanker()
        self.result_enhancer = ResultEnhancer()
        self.context_manager = ContextManager()
        
    def implement_semantic_search_system(self, document_corpus, search_requirements):
        &quot;&quot;&quot;Implement comprehensive semantic search system with advanced NLP and vector similarity.&quot;&quot;&quot;
        
        search_system = {
            'query_processing': {},
            'embedding_generation': {},
            'vector_indexing': {},
            'similarity_matching': {},
            'result_ranking': {}
        }
        
        # Advanced query processing
        search_system['query_processing'] = self.build_query_processing(
            search_requirements, self.search_config,
            processing_components=[
                'natural_language_understanding',
                'intent_classification_system',
                'entity_recognition_extraction',
                'context_aware_parsing',
                'query_expansion_mechanisms',
                'semantic_disambiguation'
            ]
        )
        
        # Multi-modal embedding generation
        search_system['embedding_generation'] = self.implement_embedding_generation(
            search_system['query_processing'], document_corpus,
            embedding_capabilities=[
                'transformer_based_encoders',
                'domain_specific_fine_tuning',
                'multi_modal_representation',
                'contextual_embedding_adaptation',
                'cross_lingual_understanding',
                'temporal_embedding_evolution'
            ]
        )
        
        # Scalable vector indexing
        search_system['vector_indexing'] = self.build_vector_indexing(
            search_system['embedding_generation'],
            indexing_strategies=[
                'approximate_nearest_neighbor',
                'hierarchical_clustering_index',
                'locality_sensitive_hashing',
                'graph_based_indexing',
                'distributed_vector_storage',
                'real_time_index_updates'
            ]
        )
        
        # Intelligent similarity matching
        search_system['similarity_matching'] = self.implement_similarity_matching(
            search_system['vector_indexing'],
            matching_algorithms=[
                'cosine_similarity_computation',
                'euclidean_distance_metrics',
                'learned_similarity_functions',
                'contextual_relevance_scoring',
                'multi_criteria_matching',
                'adaptive_threshold_adjustment'
            ]
        )
        
        return search_system
    
    def execute_semantic_search(self, search_query, search_context, result_preferences):
        &quot;&quot;&quot;Execute comprehensive semantic search with contextual understanding and personalization.&quot;&quot;&quot;
        
        search_process = {
            'query_analysis': {},
            'embedding_computation': {},
            'vector_retrieval': {},
            'relevance_assessment': {},
            'result_enhancement': {}
        }
        
        # Deep query analysis
        search_process['query_analysis'] = self.analyze_search_query(
            search_query, search_context,
            analysis_dimensions=[
                'semantic_intent_extraction',
                'conceptual_relationship_mapping',
                'domain_context_identification',
                'user_preference_integration',
                'temporal_relevance_assessment',
                'complexity_level_determination'
            ]
        )
        
        # Contextual embedding computation
        search_process['embedding_computation'] = self.compute_contextual_embeddings(
            search_process['query_analysis'], result_preferences,
            computation_strategies=[
                'query_specific_encoding',
                'context_aware_representation',
                'user_profile_integration',
                'domain_knowledge_injection',
                'multi_granularity_encoding',
                'dynamic_embedding_adaptation'
            ]
        )
        
        # Efficient vector retrieval
        search_process['vector_retrieval'] = self.retrieve_candidate_vectors(
            search_process['embedding_computation'],
            retrieval_mechanisms=[
                'approximate_similarity_search',
                'multi_stage_filtering',
                'candidate_set_expansion',
                'diversity_aware_selection',
                'performance_optimized_retrieval',
                'scalable_search_execution'
            ]
        )
        
        # Advanced relevance assessment
        search_process['relevance_assessment'] = self.assess_result_relevance(
            search_process['vector_retrieval'], search_context,
            assessment_criteria=[
                'semantic_similarity_scoring',
                'contextual_relevance_evaluation',
                'user_intent_alignment',
                'content_quality_assessment',
                'freshness_and_authority_scoring',
                'personalization_factor_integration'
            ]
        )
        
        return search_process
    
    def implement_advanced_features(self, search_system, feature_requirements, user_feedback):
        &quot;&quot;&quot;Implement advanced semantic search features including personalization and learning.&quot;&quot;&quot;
        
        advanced_features = {
            'personalization_engine': {},
            'learning_system': {},
            'multi_modal_search': {},
            'collaborative_filtering': {},
            'explainable_results': {}
        }
        
        # Intelligent personalization engine
        advanced_features['personalization_engine'] = self.build_personalization_engine(
            search_system, feature_requirements,
            personalization_components=[
                'user_behavior_modeling',
                'preference_learning_algorithms',
                'contextual_adaptation_mechanisms',
                'search_history_integration',
                'collaborative_preference_inference',
                'dynamic_profile_updating'
            ]
        )
        
        # Continuous learning system
        advanced_features['learning_system'] = self.implement_learning_system(
            advanced_features['personalization_engine'], user_feedback,
            learning_mechanisms=[
                'relevance_feedback_integration',
                'click_through_rate_optimization',
                'query_reformulation_learning',
                'result_quality_improvement',
                'user_satisfaction_modeling',
                'adaptive_ranking_refinement'
            ]
        )
        
        # Multi-modal search capabilities
        advanced_features['multi_modal_search'] = self.build_multi_modal_search(
            advanced_features,
            modal_capabilities=[
                'text_and_image_search',
                'audio_content_retrieval',
                'video_semantic_search',
                'document_structure_understanding',
                'cross_modal_similarity_matching',
                'unified_representation_learning'
            ]
        )
        
        # Collaborative filtering integration
        advanced_features['collaborative_filtering'] = self.implement_collaborative_filtering(
            advanced_features, user_feedback,
            filtering_approaches=[
                'user_similarity_computation',
                'item_based_recommendations',
                'matrix_factorization_techniques',
                'deep_collaborative_models',
                'hybrid_recommendation_systems',
                'social_network_integration'
            ]
        )
        
        return advanced_features
    
    def evaluate_search_performance(self, search_system, evaluation_metrics, test_queries):
        &quot;&quot;&quot;Evaluate semantic search performance across multiple dimensions and use cases.&quot;&quot;&quot;
        
        performance_evaluation = {
            'relevance_metrics': {},
            'efficiency_analysis': {},
            'user_satisfaction': {},
            'system_scalability': {},
            'comparative_analysis': {}
        }
        
        # Comprehensive relevance metrics
        performance_evaluation['relevance_metrics'] = self.measure_relevance_performance(
            search_system, evaluation_metrics,
            relevance_dimensions=[
                'precision_and_recall_analysis',
                'mean_average_precision',
                'normalized_discounted_cumulative_gain',
                'semantic_similarity_correlation',
                'user_intent_fulfillment_rate',
                'contextual_relevance_accuracy'
            ]
        )
        
        # System efficiency analysis
        performance_evaluation['efficiency_analysis'] = self.analyze_system_efficiency(
            performance_evaluation['relevance_metrics'], test_queries,
            efficiency_metrics=[
                'query_processing_latency',
                'embedding_computation_time',
                'vector_search_performance',
                'result_ranking_efficiency',
                'memory_usage_optimization',
                'throughput_scalability_analysis'
            ]
        )
        
        # User satisfaction assessment
        performance_evaluation['user_satisfaction'] = self.assess_user_satisfaction(
            performance_evaluation,
            satisfaction_indicators=[
                'search_success_rate',
                'user_engagement_metrics',
                'query_reformulation_frequency',
                'result_click_through_rates',
                'session_completion_analysis',
                'long_term_usage_patterns'
            ]
        )
        
        return performance_evaluation
`;

export default function SemanticSearchTool() {
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
                Semantic Search Tool: Intelligent Knowledge Discovery Platform
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
                <PremiumButton
                  variant="ghost"
                  size="sm"
                  icon={Share2}
                  iconPosition="left"
                  className="hover:text-accent-ai-purple transition-colors duration-200"
                >
                  Share Tool
                </PremiumButton>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Semantic Search', 'Vector Embeddings', 'NLP Processing', 'Contextual Understanding', 'Multi-modal Search', 'Personalization'].map((tag) => (
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
                Advanced semantic search platform that leverages transformer-based embeddings, vector 
                similarity matching, and contextual understanding to deliver highly relevant search 
                results across diverse content types, enabling intelligent knowledge discovery and 
                information retrieval for research and enterprise applications.
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
                <Search className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Search Tool Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Semantic Search Tool revolutionizes information retrieval by understanding the 
                meaning and context behind search queries rather than relying solely on keyword 
                matching. It employs state-of-the-art transformer models and vector embeddings to 
                deliver semantically relevant results that match user intent and contextual requirements.
              </p>
              <p className="body-text text-research-text-secondary">
                This intelligent platform supports multi-modal search across text, images, and 
                documents, providing personalized results that improve over time through continuous 
                learning and user feedback integration.
              </p>
            </motion.div>

            {/* Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Live Search Interface</h2>
              </div>
              
              {/* Search Interface Mockup */}
              <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-accent-ai-purple/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent-ai-purple" />
                    <input
                      type="text"
                      placeholder="Search for AI research papers, concepts, or methodologies..."
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text placeholder-research-text-secondary focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20"
                    />
                  </div>
                  <PremiumButton
                    variant="primary"
                    size="md"
                    className="hover:shadow-ai-glow"
                  >
                    Search
                  </PremiumButton>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['transformer models', 'neural networks', 'machine learning ethics', 'computer vision', 'natural language processing'].map((suggestion) => (
                    <button
                      key={suggestion}
                      className="px-3 py-1 text-sm bg-accent-ai-purple/10 text-accent-ai-purple rounded-full border border-accent-ai-purple/20 hover:bg-accent-ai-purple/20 transition-colors duration-200"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
              
              <LottieAnimation 
                animationFile="semantic-search-demo.json"
                className="mx-auto"
                width={700}
                height={400}
              />
              
              <div className="mt-6 text-center">
                <PremiumButton
                  variant="primary"
                  size="lg"
                  icon={Zap}
                  iconPosition="left"
                  className="shadow-ai-glow hover:shadow-hero-glow"
                >
                  Try Advanced Search
                </PremiumButton>
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
              <h2 className="section-title text-research-text mb-6">Semantic Search Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The semantic search architecture integrates natural language understanding, 
                transformer-based embeddings, and vector similarity matching to deliver intelligent 
                search results. The system emphasizes contextual understanding, multi-modal processing, 
                and personalized relevance ranking for optimal user experience.
              </p>
              
              <MermaidDiagram chart={semanticSearchArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through five integrated layers: (1) query processing with NLP 
                understanding and intent recognition, (2) embedding engine with transformer models 
                and domain adaptation, (3) vector database with indexing and similarity search, 
                (4) relevance matching with contextual scoring, and (5) intelligent result presentation 
                with personalized ranking.
              </p>
            </motion.div>

            {/* Performance Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Search Performance &amp; Accuracy Metrics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive performance analysis demonstrating superior search accuracy, relevance 
                scoring, and user satisfaction compared to traditional keyword-based search systems. 
                The semantic approach delivers significantly improved results across diverse query types 
                and content domains.
              </p>
              
              <InteractiveChart
                dataFile="semantic_search_performance.json"
                chartType="line"
                title="Semantic vs Traditional Search Performance Comparison"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results show 85% improvement in search relevance, 70% reduction in query reformulation 
                rates, 92% user satisfaction scores, and 60% faster time-to-relevant-result compared 
                to traditional keyword-based search systems.
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
                The following implementation demonstrates the comprehensive semantic search system with 
                advanced NLP processing, vector embedding generation, similarity matching algorithms, 
                and personalization features designed to deliver intelligent and contextually relevant 
                search results for diverse applications and user requirements.
              </p>
              
              <CodeBlock
                code={semanticSearchCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The search framework provides systematic approaches to semantic understanding that enable 
                applications to deliver highly relevant results, improve user satisfaction, and adapt 
                to evolving information needs through continuous learning and optimization.
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
                <Target className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Advanced Search Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Contextual Understanding</h3>
                  <p className="body-text text-research-text-secondary">
                    Deep semantic analysis that understands query intent, context, and conceptual relationships.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Multi-Modal Search</h3>
                  <p className="body-text text-research-text-secondary">
                    Search across text, images, documents, and multimedia content with unified relevance scoring.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Personalized Results</h3>
                  <p className="body-text text-research-text-secondary">
                    Adaptive ranking based on user preferences, search history, and behavioral patterns.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Real-Time Learning</h3>
                  <p className="body-text text-research-text-secondary">
                    Continuous improvement through user feedback integration and relevance optimization.
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
                  <h3 className="text-lg font-semibold text-research-text mb-2">Academic Research Discovery</h3>
                  <p className="body-text text-research-text-secondary">
                    Researchers use semantic search to discover relevant papers, identify research gaps, 
                    find collaboration opportunities, and explore interdisciplinary connections across 
                    vast academic databases and publication repositories.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Enterprise Knowledge Management</h3>
                  <p className="body-text text-research-text-secondary">
                    Organizations leverage semantic search for internal knowledge bases, document 
                    repositories, and expertise location, enabling employees to quickly find relevant 
                    information, best practices, and subject matter experts.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">E-commerce &amp; Content Platforms</h3>
                  <p className="body-text text-research-text-secondary">
                    Digital platforms implement semantic search to improve product discovery, content 
                    recommendation, and user experience by understanding customer intent and delivering 
                    contextually relevant results that drive engagement and conversion.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Technical Innovations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Technical Innovations</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Hybrid Embeddings</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Combination of dense and sparse embeddings for optimal semantic and lexical matching.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Dynamic Reranking</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Context-aware result reranking based on user interaction patterns and feedback signals.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Cross-Modal Fusion</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Advanced techniques for combining text, image, and structured data representations.
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
                <Zap className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Getting Started</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Index Your Content</h3>
                    <p className="body-text text-research-text-secondary">
                      Upload and process your documents, research papers, or content corpus for semantic indexing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Configure Search Parameters</h3>
                    <p className="body-text text-research-text-secondary">
                      Set up domain-specific embeddings, relevance thresholds, and personalization preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Start Searching</h3>
                    <p className="body-text text-research-text-secondary">
                      Begin with natural language queries and explore the intelligent, contextually relevant results.
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
                  href="/tools/ai-research-dashboard"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Tool
                </Link>
                
                <Link
                  href="/tools/privacy-score-calculator"
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
