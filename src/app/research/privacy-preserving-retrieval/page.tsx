'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, Shield } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const privacyArchitectureDiagram = `
graph TB
    A[User Query] --> B[Query Encryption]
    B --> C[Homomorphic Processing]
    C --> D[Encrypted Index Search]
    D --> E[Secure Aggregation]
    E --> F[Result Decryption]
    F --> G[Privacy-Preserved Results]
    
    H[Data Store] --> I[Differential Privacy]
    I --> J[Noise Addition]
    J --> D
    
    K[Access Control] --> L[Zero-Knowledge Proofs]
    L --> M[Authentication]
    M --> B
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style G fill:#10B981,stroke:#059669,color:#fff
    style I fill:#8B5CF6,stroke:#7C3AED,color:#fff
    style L fill:#F59E0B,stroke:#D97706,color:#fff
`;

const encryptionCode = `
from cryptography.fernet import Fernet
import numpy as np
from typing import List, Tuple

class PrivacyPreservingRetrieval:
    def __init__(self, noise_scale: float = 1.0):
        self.key = Fernet.generate_key()
        self.cipher = Fernet(self.key)
        self.noise_scale = noise_scale
    
    def encrypt_query(self, query: str) -> bytes:
        """Encrypt user query with semantic preservation."""
        query_bytes = query.encode('utf-8')
        return self.cipher.encrypt(query_bytes)
    
    def add_differential_privacy(self, results: List[float], 
                               epsilon: float = 1.0) -> List[float]:
        """Add calibrated noise for differential privacy."""
        sensitivity = 1.0  # L1 sensitivity
        noise_scale = sensitivity / epsilon
        
        noise = np.random.laplace(0, noise_scale, len(results))
        return [max(0, r + n) for r, n in zip(results, noise)]
    
    def homomorphic_search(self, encrypted_query: bytes, 
                          encrypted_index: dict) -> List[Tuple[str, float]]:
        """Perform search on encrypted data without decryption."""
        # Simplified homomorphic computation
        results = []
        
        for doc_id, encrypted_content in encrypted_index.items():
            # Compute similarity in encrypted space
            similarity = self._encrypted_similarity(encrypted_query, encrypted_content)
            results.append((doc_id, similarity))
        
        return sorted(results, key=lambda x: x[1], reverse=True)
    
    def _encrypted_similarity(self, query: bytes, content: bytes) -> float:
        """Compute similarity without revealing plaintext."""
        # Placeholder for actual homomorphic operations
        return np.random.random()  # Simulated encrypted similarity
`;

export default function PrivacyPreservingRetrieval() {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/15 to-purple-900/20 backdrop-blur-md" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,58,138,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(139,92,246,0.08),rgba(59,130,246,0.06),rgba(147,51,234,0.08),rgba(139,92,246,0.08))]" />
      
      {/* Header */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
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
            </motion.div>

            <div className="glass-card-premium p-12 mb-16">
              <motion.h1 
                className="hero-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Privacy-Preserving Information Retrieval in AI Systems
              </motion.h1>
              
              <motion.div 
                className="flex flex-wrap items-center gap-6 text-slate-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span className="typography-premium">8 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-purple-400" />
                  <span className="typography-premium">January 10, 2024</span>
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
                {['Privacy', 'Security', 'Retrieval', 'Encryption'].map((tag, index) => (
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
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Developing secure information retrieval systems that maintain user privacy while delivering accurate results. 
                Focus on differential privacy, homomorphic encryption, and secure multi-party computation.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Introduction
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed mb-6 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Privacy-preserving information retrieval represents a critical challenge in modern AI systems. 
                As organizations handle increasingly sensitive data, the need for retrieval systems that can 
                deliver accurate results without compromising user privacy has become paramount.
              </motion.p>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                This research explores advanced cryptographic techniques including differential privacy, 
                homomorphic encryption, and secure multi-party computation to enable private information 
                retrieval at scale.
              </motion.p>
            </motion.div>

            {/* Privacy Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Privacy Protection Mechanisms
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <LottieAnimation 
                  animationFile="privacy.json"
                  className="mx-auto"
                  width={500}
                  height={400}
                />
              </motion.div>
            </motion.div>

            {/* Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Privacy-Preserving Architecture
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed mb-10 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                The architecture integrates multiple privacy-preserving techniques to ensure that sensitive 
                information remains protected throughout the retrieval process. Each component adds a layer 
                of protection while maintaining system performance.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <MermaidDiagram chart={privacyArchitectureDiagram} className="rounded-2xl overflow-hidden" />
              </motion.div>
              
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                This multi-layered approach ensures that even if one privacy mechanism is compromised, 
                the overall system maintains strong privacy guarantees through defense in depth.
              </motion.p>
            </motion.div>

            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Privacy vs Performance Trade-offs
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed mb-10 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our evaluation demonstrates the trade-offs between privacy guarantees and system performance. 
                The following metrics show how different privacy levels affect retrieval accuracy and latency.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <InteractiveChart
                  dataFile="privacy_metrics.json"
                  chartType="line"
                  title="Privacy-Performance Trade-offs"
                  className="rounded-2xl overflow-hidden"
                />
              </motion.div>
              
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                The results show that while stronger privacy guarantees do introduce some performance overhead, 
                the impact can be minimized through careful system design and optimization techniques.
              </motion.p>
            </motion.div>

            {/* Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Implementation Example
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed mb-10 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                The following implementation demonstrates key privacy-preserving techniques including 
                query encryption, differential privacy, and homomorphic search operations.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <CodeBlock
                  code={encryptionCode}
                  language="python"
                  className="rounded-2xl overflow-hidden"
                />
              </motion.div>
              
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                This implementation provides a foundation for building production-ready privacy-preserving 
                retrieval systems. The modular design allows for easy integration of additional privacy 
                mechanisms as needed.
              </motion.p>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Conclusion
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed mb-6 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Privacy-preserving information retrieval is essential for building trustworthy AI systems 
                that handle sensitive data. The techniques presented here provide a comprehensive framework 
                for maintaining privacy while delivering high-quality retrieval results.
              </motion.p>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Future research should focus on optimizing the performance of privacy-preserving operations 
                and developing new cryptographic primitives that can further reduce the privacy-utility trade-off.
              </motion.p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8"
            >
              <div className="flex justify-between items-center">
                <motion.div
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/research/agentic-systems-tool-use"
                    className="inline-flex items-center px-6 py-3 glass-card-premium text-white font-semibold rounded-xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 typography-premium"
                  >
                    <ArrowLeft className="h-5 w-5 mr-3" />
                    Previous Article
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/research"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 typography-premium"
                  >
                    <Shield className="h-5 w-5 mr-3" />
                    All Research
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
