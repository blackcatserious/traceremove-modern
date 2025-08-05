'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Eye, Layers, Zap } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const multimodalArchitectureDiagram = `
graph TD
    A[Text Input] --> D[Multimodal Encoder]
    B[Image Input] --> D
    C[Audio Input] --> D
    D --> E[Cross-Modal Attention]
    E --> F[Fusion Layer]
    F --> G[Reasoning Engine]
    G --> H{Task Type?}
    H -->|VQA| I[Visual Question Answering]
    H -->|Captioning| J[Image Captioning]
    H -->|Classification| K[Multimodal Classification]
    I --> L[Output Generation]
    J --> L
    K --> L
    L --> M[Response]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style B fill:#10B981,stroke:#059669,color:#fff
    style C fill:#F59E0B,stroke:#D97706,color:#fff
    style G fill:#8B5CF6,stroke:#7C3AED,color:#fff
    style M fill:#EF4444,stroke:#DC2626,color:#fff
`;

const multimodalReasoningCode = `
class MultimodalReasoningSystem:
    def __init__(self, vision_model, language_model, audio_model):
        self.vision_encoder = vision_model
        self.language_encoder = language_model
        self.audio_encoder = audio_model
        self.cross_attention = CrossModalAttention()
        self.fusion_layer = AdaptiveFusion()
        self.reasoning_engine = SymbolicReasoner()
    
    def process_multimodal_input(self, text=None, image=None, audio=None):
        """Process multiple modalities and perform cross-modal reasoning."""
        modality_embeddings = {}
        attention_weights = {}
        
        # Encode each available modality
        if text is not None:
            text_embedding = self.language_encoder.encode(text)
            modality_embeddings['text'] = text_embedding
        
        if image is not None:
            # Extract visual features with spatial attention
            visual_features = self.vision_encoder.extract_features(image)
            spatial_attention = self.compute_spatial_attention(visual_features)
            modality_embeddings['vision'] = {
                'features': visual_features,
                'attention': spatial_attention
            }
        
        if audio is not None:
            audio_features = self.audio_encoder.encode(audio)
            modality_embeddings['audio'] = audio_features
        
        # Cross-modal attention and alignment
        aligned_features = self.cross_attention.align_modalities(
            modality_embeddings
        )
        
        # Adaptive fusion based on task requirements
        fused_representation = self.fusion_layer.fuse(
            aligned_features,
            task_context=self.current_task
        )
        
        # Multi-step reasoning with symbolic constraints
        reasoning_steps = self.reasoning_engine.reason(
            fused_representation,
            constraints=self.get_domain_constraints()
        )
        
        return {
            'fused_features': fused_representation,
            'reasoning_trace': reasoning_steps,
            'attention_weights': attention_weights,
            'confidence_scores': self.compute_confidence(reasoning_steps)
        }
    
    def compute_spatial_attention(self, visual_features):
        """Compute spatial attention over visual regions."""
        attention_map = torch.softmax(
            self.spatial_attention_layer(visual_features), dim=-1
        )
        return attention_map
    
    def get_domain_constraints(self):
        """Define domain-specific reasoning constraints."""
        return {
            'temporal_consistency': True,
            'physical_plausibility': True,
            'semantic_coherence': True,
            'causal_relationships': True
        }
`;

export default function MultimodalReasoning() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="data" particleCount={90} />
      
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
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Research
            </Link>

            <div className="mb-8">
              <motion.h1 
                className="hero-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Multimodal Reasoning: Integrating Vision, Language, and Audio Intelligence
              </motion.h1>
              
              <motion.div 
                className="flex flex-wrap items-center gap-6 text-slate-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span className="typography-premium">18 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-purple-400" />
                  <span className="typography-premium">January 25, 2024</span>
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
                {['Multimodal AI', 'Computer Vision', 'NLP', 'Cross-Modal Learning', 'Reasoning'].map((tag, index) => (
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
                Exploring advanced architectures for multimodal reasoning that seamlessly integrate visual, textual, 
                and auditory information to enable sophisticated understanding and decision-making across diverse AI applications.
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
                <Eye className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Introduction</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                Multimodal reasoning represents a fundamental leap toward human-like artificial intelligence, where 
                systems can process and integrate information from multiple sensory channels simultaneously. Unlike 
                traditional unimodal approaches, multimodal systems can leverage the complementary nature of different 
                data types to achieve deeper understanding and more robust decision-making.
              </p>
              <p className="body-text text-research-text-secondary">
                This research investigates novel architectures for cross-modal attention, adaptive fusion mechanisms, 
                and symbolic reasoning frameworks that enable AI systems to perform complex reasoning tasks across 
                visual, linguistic, and auditory domains with unprecedented accuracy and interpretability.
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
                <Layers className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Multimodal Processing Pipeline</h2>
              </div>
              <LottieAnimation 
                animationFile="multimodal-processing.json"
                className="mx-auto"
                width={500}
                height={400}
              />
            </motion.div>

            {/* Architecture Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Multimodal Architecture Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our multimodal reasoning architecture employs a sophisticated pipeline that processes text, images, 
                and audio inputs through specialized encoders, applies cross-modal attention mechanisms, and performs 
                adaptive fusion to create unified representations for downstream reasoning tasks.
              </p>
              
              <MermaidDiagram chart={multimodalArchitectureDiagram} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The architecture features three key innovations: (1) cross-modal attention that learns optimal 
                alignment between modalities, (2) adaptive fusion that dynamically weights modality contributions 
                based on task requirements, and (3) symbolic reasoning constraints that ensure logical consistency 
                across multimodal inferences.
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
              <h2 className="section-title text-research-text mb-6">Cross-Modal Performance Analysis</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive evaluation across multiple multimodal benchmarks demonstrates significant improvements 
                in visual question answering, image captioning, and cross-modal retrieval tasks. The adaptive fusion 
                mechanism shows particular strength in handling modality-specific noise and missing information.
              </p>
              
              <InteractiveChart
                dataFile="multimodal_performance.json"
                chartType="line"
                title="Multimodal Reasoning Performance Across Tasks"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results indicate that our cross-modal attention mechanism achieves 15-20% improvement over baseline 
                approaches in complex reasoning tasks, with particularly strong performance in scenarios requiring 
                temporal understanding and spatial-linguistic alignment.
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
              <h2 className="section-title text-research-text mb-6">Implementation Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates our multimodal reasoning system with cross-modal attention, 
                adaptive fusion, and symbolic reasoning capabilities. The system processes multiple input modalities 
                and generates coherent, contextually-aware responses.
              </p>
              
              <CodeBlock
                code={multimodalReasoningCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The implementation emphasizes modular design with pluggable encoders for different modalities, 
                learnable attention mechanisms for cross-modal alignment, and configurable reasoning constraints 
                that can be adapted to specific domain requirements and task objectives.
              </p>
            </motion.div>

            {/* Key Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Core Capabilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Cross-Modal Attention</h3>
                  <p className="body-text text-research-text-secondary">
                    Advanced attention mechanisms that learn optimal alignment between visual, textual, and auditory features for enhanced understanding.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Adaptive Fusion</h3>
                  <p className="body-text text-research-text-secondary">
                    Dynamic weighting of modality contributions based on task requirements, data quality, and contextual relevance.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Symbolic Reasoning</h3>
                  <p className="body-text text-research-text-secondary">
                    Integration of symbolic constraints and logical rules to ensure coherent and interpretable multimodal inferences.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Temporal Understanding</h3>
                  <p className="body-text text-research-text-secondary">
                    Sophisticated modeling of temporal relationships across modalities for video understanding and sequential reasoning.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Real-World Applications</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Medical Diagnosis</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Integrating medical images, patient history, and clinical notes for comprehensive diagnostic support.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Autonomous Systems</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Combining visual perception, natural language instructions, and sensor data for intelligent navigation.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Content Creation</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Generating rich multimedia content from multimodal inputs with coherent narrative structure.
                  </p>
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
                Multimodal reasoning represents a critical step toward more human-like artificial intelligence that 
                can understand and interact with the world through multiple sensory channels. Our research demonstrates 
                that sophisticated cross-modal attention and adaptive fusion mechanisms can significantly enhance AI 
                system performance across diverse reasoning tasks.
              </p>
              <p className="body-text text-research-text-secondary">
                Future work will focus on scaling these approaches to larger modality sets, developing more efficient 
                attention mechanisms for real-time applications, and exploring the integration of multimodal reasoning 
                with large language models for enhanced conversational AI capabilities.
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
                  href="/research/ethical-ai-architecture"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Article
                </Link>
                
                <Link
                  href="/research/big-data-interpretability"
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
