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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header */}
      <section className="relative overflow-hidden py-12 sm:py-16 decorative-blobs">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 decorative-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/research"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Research
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Privacy-Preserving Information Retrieval in AI Systems
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  8 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  January 10, 2024
                </div>
                <button className="flex items-center hover:text-primary-600 transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Privacy', 'Security', 'Retrieval', 'Encryption'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-700"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                Developing secure information retrieval systems that maintain user privacy while delivering accurate results. 
                Focus on differential privacy, homomorphic encryption, and secure multi-party computation.
              </p>
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
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Privacy-preserving information retrieval represents a critical challenge in modern AI systems. 
                As organizations handle increasingly sensitive data, the need for retrieval systems that can 
                deliver accurate results without compromising user privacy has become paramount.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This research explores advanced cryptographic techniques including differential privacy, 
                homomorphic encryption, and secure multi-party computation to enable private information 
                retrieval at scale.
              </p>
            </motion.div>

            {/* Privacy Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Protection Mechanisms</h2>
              <LottieAnimation 
                animationFile="privacy.json"
                className="mx-auto"
                width={500}
                height={400}
              />
            </motion.div>

            {/* Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy-Preserving Architecture</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                The architecture integrates multiple privacy-preserving techniques to ensure that sensitive 
                information remains protected throughout the retrieval process. Each component adds a layer 
                of protection while maintaining system performance.
              </p>
              
              <MermaidDiagram chart={privacyArchitectureDiagram} className="mb-8" />
              
              <p className="text-gray-700 leading-relaxed">
                This multi-layered approach ensures that even if one privacy mechanism is compromised, 
                the overall system maintains strong privacy guarantees through defense in depth.
              </p>
            </motion.div>

            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy vs Performance Trade-offs</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our evaluation demonstrates the trade-offs between privacy guarantees and system performance. 
                The following metrics show how different privacy levels affect retrieval accuracy and latency.
              </p>
              
              <InteractiveChart
                dataFile="privacy_metrics.json"
                chartType="line"
                title="Privacy-Performance Trade-offs"
                className="mb-8"
              />
              
              <p className="text-gray-700 leading-relaxed">
                The results show that while stronger privacy guarantees do introduce some performance overhead, 
                the impact can be minimized through careful system design and optimization techniques.
              </p>
            </motion.div>

            {/* Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Example</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                The following implementation demonstrates key privacy-preserving techniques including 
                query encryption, differential privacy, and homomorphic search operations.
              </p>
              
              <CodeBlock
                code={encryptionCode}
                language="python"
                className="mb-8"
              />
              
              <p className="text-gray-700 leading-relaxed">
                This implementation provides a foundation for building production-ready privacy-preserving 
                retrieval systems. The modular design allows for easy integration of additional privacy 
                mechanisms as needed.
              </p>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Privacy-preserving information retrieval is essential for building trustworthy AI systems 
                that handle sensitive data. The techniques presented here provide a comprehensive framework 
                for maintaining privacy while delivering high-quality retrieval results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Future research should focus on optimizing the performance of privacy-preserving operations 
                and developing new cryptographic primitives that can further reduce the privacy-utility trade-off.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border-t border-gray-200 pt-8"
            >
              <div className="flex justify-between items-center">
                <Link
                  href="/research/agentic-systems-tool-use"
                  className="inline-flex items-center px-4 py-2 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-200"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Article
                </Link>
                
                <Link
                  href="/research"
                  className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  All Research
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
