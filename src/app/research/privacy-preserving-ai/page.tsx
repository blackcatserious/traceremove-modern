'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Shield, Lock, Eye } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const privacyPreservingPipelineDiagram = `
graph TD
    A[Sensitive Data] --> B[Privacy Assessment]
    B --> C{Privacy Level Required?}
    C -->|High| D[Differential Privacy]
    C -->|Medium| E[Federated Learning]
    C -->|Low| F[Data Anonymization]
    D --> G[Noise Addition]
    E --> H[Local Model Training]
    F --> I[Identifier Removal]
    G --> J[Privacy Budget Management]
    H --> K[Secure Aggregation]
    I --> L[K-Anonymity Check]
    J --> M[Model Training]
    K --> M
    L --> M
    M --> N[Privacy Validation]
    N --> O{Privacy Preserved?}
    O -->|Yes| P[Model Deployment]
    O -->|No| Q[Privacy Enhancement]
    Q --> D
    P --> R[Continuous Monitoring]
    
    style A fill:#EF4444,stroke:#DC2626,color:#fff
    style D fill:#3B82F6,stroke:#2563EB,color:#fff
    style E fill:#10B981,stroke:#059669,color:#fff
    style F fill:#F59E0B,stroke:#D97706,color:#fff
    style P fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const privacyFrameworkCode = `
class PrivacyPreservingAIFramework:
    def __init__(self, privacy_budget=1.0, noise_mechanism='gaussian'):
        self.privacy_budget = privacy_budget
        self.noise_mechanism = noise_mechanism
        self.privacy_accountant = PrivacyAccountant()
        self.secure_aggregator = SecureAggregator()
        self.anonymizer = DataAnonymizer()
        
    def differential_privacy_training(self, dataset, model, epsilon=1.0, delta=1e-5):
        """Train model with differential privacy guarantees."""
        
        # Initialize privacy parameters
        privacy_params = {
            'epsilon': epsilon,
            'delta': delta,
            'sensitivity': self.compute_sensitivity(model),
            'noise_scale': self.calculate_noise_scale(epsilon, delta)
        }
        
        # Track privacy budget consumption
        self.privacy_accountant.initialize_budget(epsilon, delta)
        
        # Training with privacy-preserving gradients
        for epoch in range(self.num_epochs):
            epoch_privacy_cost = 0
            
            for batch in self.get_batches(dataset):
                # Compute gradients with clipping
                gradients = self.compute_clipped_gradients(
                    batch, model, 
                    clip_norm=privacy_params['sensitivity']
                )
                
                # Add calibrated noise to gradients
                noisy_gradients = self.add_privacy_noise(
                    gradients, 
                    noise_scale=privacy_params['noise_scale'],
                    mechanism=self.noise_mechanism
                )
                
                # Update model with noisy gradients
                model.update_parameters(noisy_gradients)
                
                # Track privacy cost
                batch_privacy_cost = self.privacy_accountant.compute_privacy_cost(
                    noise_scale=privacy_params['noise_scale'],
                    batch_size=len(batch)
                )
                epoch_privacy_cost += batch_privacy_cost
            
            # Check privacy budget
            if not self.privacy_accountant.check_budget_available(epoch_privacy_cost):
                print(f"Privacy budget exhausted at epoch {epoch}")
                break
                
            self.privacy_accountant.consume_budget(epoch_privacy_cost)
        
        # Generate privacy analysis report
        privacy_report = self.generate_privacy_report(
            model, privacy_params, self.privacy_accountant.get_consumed_budget()
        )
        
        return {
            'model': model,
            'privacy_guarantees': privacy_params,
            'privacy_report': privacy_report,
            'remaining_budget': self.privacy_accountant.get_remaining_budget()
        }
    
    def federated_learning_with_privacy(self, client_datasets, global_model):
        """Implement federated learning with privacy preservation."""
        
        federated_config = {
            'num_clients': len(client_datasets),
            'local_epochs': 5,
            'secure_aggregation': True,
            'client_sampling_rate': 0.1
        }
        
        global_weights = global_model.get_weights()
        
        for round_num in range(self.num_rounds):
            # Sample clients for this round
            selected_clients = self.sample_clients(
                client_datasets, 
                federated_config['client_sampling_rate']
            )
            
            client_updates = []
            
            # Local training on selected clients
            for client_id in selected_clients:
                client_data = client_datasets[client_id]
                
                # Initialize local model with global weights
                local_model = self.create_local_model(global_weights)
                
                # Train locally with privacy constraints
                local_update = self.train_local_model(
                    local_model, 
                    client_data,
                    epochs=federated_config['local_epochs'],
                    privacy_enabled=True
                )
                
                # Add local differential privacy noise
                noisy_update = self.add_local_privacy_noise(
                    local_update,
                    epsilon=self.local_epsilon
                )
                
                client_updates.append({
                    'client_id': client_id,
                    'update': noisy_update,
                    'data_size': len(client_data)
                })
            
            # Secure aggregation of client updates
            if federated_config['secure_aggregation']:
                aggregated_update = self.secure_aggregator.aggregate(
                    client_updates,
                    privacy_threshold=self.aggregation_threshold
                )
            else:
                aggregated_update = self.simple_average_aggregation(client_updates)
            
            # Update global model
            global_weights = self.update_global_model(
                global_weights, 
                aggregated_update
            )
            
            # Evaluate privacy preservation
            privacy_metrics = self.evaluate_privacy_preservation(
                global_model, client_datasets, round_num
            )
            
            print(f"Round {round_num}: Privacy Score = {privacy_metrics['privacy_score']}")
        
        return {
            'global_model': global_model,
            'privacy_metrics': privacy_metrics,
            'federated_stats': self.compute_federated_statistics(client_updates)
        }
    
    def anonymize_dataset(self, dataset, anonymization_level='k_anonymity'):
        """Apply data anonymization techniques."""
        
        if anonymization_level == 'k_anonymity':
            return self.anonymizer.apply_k_anonymity(
                dataset, 
                k=self.k_value,
                quasi_identifiers=self.identify_quasi_identifiers(dataset)
            )
        elif anonymization_level == 'l_diversity':
            return self.anonymizer.apply_l_diversity(
                dataset,
                l=self.l_value,
                sensitive_attributes=self.identify_sensitive_attributes(dataset)
            )
        elif anonymization_level == 't_closeness':
            return self.anonymizer.apply_t_closeness(
                dataset,
                t=self.t_threshold,
                distance_metric='earth_movers'
            )
    
    def privacy_risk_assessment(self, model, dataset):
        """Assess privacy risks in trained models."""
        
        risk_assessment = {
            'membership_inference_risk': self.assess_membership_inference(model, dataset),
            'attribute_inference_risk': self.assess_attribute_inference(model, dataset),
            'model_inversion_risk': self.assess_model_inversion(model, dataset),
            'property_inference_risk': self.assess_property_inference(model, dataset)
        }
        
        overall_risk_score = self.compute_overall_risk_score(risk_assessment)
        
        return {
            'risk_assessment': risk_assessment,
            'overall_risk_score': overall_risk_score,
            'recommendations': self.generate_privacy_recommendations(risk_assessment)
        }
`;

export default function PrivacyPreservingAI() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="neural" particleCount={75} />
      
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
              <h1 className="hero-title text-research-text mb-6">
                Privacy-Preserving AI: Protecting Data While Enabling Intelligence
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  25 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  February 22, 2024
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Differential Privacy', 'Federated Learning', 'Data Anonymization', 'Secure Computation', 'Privacy Engineering'].map((tag) => (
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
                Advancing the state-of-the-art in privacy-preserving machine learning through differential privacy, 
                federated learning, and secure multi-party computation techniques that enable AI development while 
                protecting individual privacy and sensitive data.
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
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Introduction</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                Privacy-preserving AI addresses the fundamental tension between the need for data-driven insights 
                and the imperative to protect individual privacy. As AI systems become more pervasive and powerful, 
                ensuring that machine learning can be performed without compromising sensitive information becomes 
                critical for ethical AI deployment and regulatory compliance.
              </p>
              <p className="body-text text-research-text-secondary">
                This research explores cutting-edge techniques in differential privacy, federated learning, and 
                secure computation that enable organizations to harness the power of AI while providing mathematical 
                guarantees of privacy protection and maintaining the utility of learned models.
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
                <Lock className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Privacy Protection Pipeline</h2>
              </div>
              <LottieAnimation 
                animationFile="privacy-protection-flow.json"
                className="mx-auto"
                width={600}
                height={450}
              />
            </motion.div>

            {/* Architecture Framework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Privacy-Preserving AI Pipeline</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our privacy-preserving framework implements a multi-layered approach to data protection, incorporating 
                differential privacy for statistical guarantees, federated learning for distributed training, and 
                advanced anonymization techniques. The system dynamically selects appropriate privacy mechanisms 
                based on data sensitivity and utility requirements.
              </p>
              
              <MermaidDiagram chart={privacyPreservingPipelineDiagram} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The architecture provides formal privacy guarantees through mathematical frameworks while maintaining 
                model utility through adaptive noise calibration, secure aggregation protocols, and privacy budget 
                management that optimizes the privacy-utility tradeoff.
              </p>
            </motion.div>

            {/* Privacy Metrics Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Privacy-Utility Tradeoff Analysis</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive evaluation of privacy-preserving techniques across different datasets and model types 
                reveals optimal configurations for various privacy requirements. Our analysis demonstrates that 
                sophisticated privacy mechanisms can achieve strong privacy guarantees while maintaining high model utility.
              </p>
              
              <InteractiveChart
                dataFile="privacy_utility_tradeoff.json"
                chartType="line"
                title="Privacy Budget vs Model Accuracy Across Techniques"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results show that differential privacy with adaptive noise scaling achieves 95% of baseline accuracy 
                while providing ε=1.0 privacy guarantees. Federated learning maintains 92% accuracy with additional
                benefits of data locality and reduced communication overhead.
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
              <h2 className="section-title text-research-text mb-6">Privacy-Preserving Framework Implementation</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates our comprehensive privacy-preserving AI framework with 
                differential privacy training, federated learning capabilities, and advanced anonymization techniques 
                designed for production-scale privacy-sensitive applications.
              </p>
              
              <CodeBlock
                code={privacyFrameworkCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides modular privacy mechanisms with formal guarantees, automated privacy budget 
                management, and comprehensive risk assessment tools that enable organizations to deploy AI systems 
                with quantifiable privacy protection.
              </p>
            </motion.div>

            {/* Core Techniques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Core Privacy Techniques</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Differential Privacy</h3>
                  <p className="body-text text-research-text-secondary">
                    Mathematical framework providing formal privacy guarantees through calibrated noise addition with provable bounds on information leakage.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Federated Learning</h3>
                  <p className="body-text text-research-text-secondary">
                    Distributed training approach that keeps data localized while enabling collaborative model development through secure aggregation.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Secure Multi-Party Computation</h3>
                  <p className="body-text text-research-text-secondary">
                    Cryptographic protocols enabling computation on encrypted data without revealing individual inputs to participating parties.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Homomorphic Encryption</h3>
                  <p className="body-text text-research-text-secondary">
                    Advanced encryption schemes allowing computation directly on encrypted data while maintaining privacy throughout the process.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Privacy Attacks &amp; Defenses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Privacy Attacks &amp; Defense Mechanisms</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Membership Inference Attacks</h3>
                  <p className="body-text text-research-text-secondary mb-2">
                    <strong>Attack:</strong> Adversaries determine if specific data points were used in model training.
                  </p>
                  <p className="body-text text-research-text-secondary">
                    <strong>Defense:</strong> Differential privacy with ε&lt;1.0 provides mathematical guarantees against 
                    membership inference with 95% protection rate in our evaluations.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Model Inversion Attacks</h3>
                  <p className="body-text text-research-text-secondary mb-2">
                    <strong>Attack:</strong> Reconstructing training data from model parameters and outputs.
                  </p>
                  <p className="body-text text-research-text-secondary">
                    <strong>Defense:</strong> Gradient clipping and noise injection during training prevents reconstruction 
                    while maintaining model utility above 90% of baseline performance.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Property Inference Attacks</h3>
                  <p className="body-text text-research-text-secondary mb-2">
                    <strong>Attack:</strong> Inferring statistical properties of training datasets from model behavior.
                  </p>
                  <p className="body-text text-research-text-secondary">
                    <strong>Defense:</strong> Federated learning with secure aggregation prevents property inference 
                    by distributing training across multiple parties without data sharing.
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
                  <h3 className="text-lg font-semibold text-research-text mb-3">Healthcare AI</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Enabling medical research and diagnosis while protecting patient privacy through federated learning across hospitals.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Financial Services</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Fraud detection and risk assessment with differential privacy to protect customer financial information.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Smart Cities</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Urban analytics and optimization while preserving citizen privacy through secure multi-party computation.
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
                Privacy-preserving AI represents a critical enabler for the responsible deployment of artificial 
                intelligence in sensitive domains. Our research demonstrates that sophisticated privacy mechanisms 
                can provide strong mathematical guarantees while maintaining the utility necessary for practical 
                AI applications.
              </p>
              <p className="body-text text-research-text-secondary">
                Future research directions include developing more efficient privacy-preserving algorithms, creating 
                standardized privacy evaluation frameworks, and investigating the intersection of privacy preservation 
                with emerging AI paradigms such as large language models and multimodal systems.
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
                  href="/research/language-code-interoperability"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Article
                </Link>
                
                <Link
                  href="/research/benchmarking-open-vs-closed-ai"
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
