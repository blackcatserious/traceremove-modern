'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Shield, Users, Brain } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import PremiumButton from '@/components/PremiumButton';

const ethicalArchitectureDiagram = `
graph TD
    A[Ethical Requirements] --> B[Architecture Design]
    B --> C[Implementation Guidelines]
    C --> D[Testing & Validation]
    D --> E{Ethical Compliance?}
    E -->|Yes| F[Deployment]
    E -->|No| G[Ethical Review]
    G --> H[Architecture Refinement]
    H --> B
    F --> I[Monitoring & Auditing]
    I --> J[Continuous Improvement]
    J --> A
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style F fill:#10B981,stroke:#059669,color:#fff
    style G fill:#EF4444,stroke:#DC2626,color:#fff
    style I fill:#F59E0B,stroke:#D97706,color:#fff
`;

const ethicalFrameworkCode = `
class EthicalAIFramework:
    def __init__(self, principles, constraints):
        self.principles = principles  # fairness, transparency, accountability
        self.constraints = constraints  # privacy, safety, human oversight
        self.audit_trail = []
    
    def evaluate_decision(self, context, proposed_action):
        &quot;&quot;&quot;Evaluate AI decision against ethical principles.&quot;&quot;&quot;
        ethical_score = 0
        violations = []
        
        # Check fairness across demographic groups
        fairness_score = self.assess_fairness(context, proposed_action)
        if fairness_score < self.principles['fairness_threshold']:
            violations.append(f&quot;Fairness violation: {fairness_score}&quot;)
        
        # Verify transparency requirements
        if not self.is_explainable(proposed_action):
            violations.append(&quot;Decision lacks sufficient explainability&quot;)
        
        # Ensure human oversight capability
        if context.requires_human_review and not self.can_escalate():
            violations.append(&quot;Human oversight not available&quot;)
        
        # Log decision for audit trail
        self.audit_trail.append({
            'timestamp': datetime.now(),
            'context': context,
            'action': proposed_action,
            'ethical_score': ethical_score,
            'violations': violations
        })
        
        return {
            'approved': len(violations) == 0,
            'score': ethical_score,
            'violations': violations,
            'recommendations': self.generate_recommendations(violations)
        }
    
    def assess_fairness(self, context, action):
        &quot;&quot;&quot;Assess fairness across protected attributes.&quot;&quot;&quot;
        protected_groups = context.get_protected_groups()
        outcomes = {}
        
        for group in protected_groups:
            group_context = context.filter_by_group(group)
            group_outcome = self.predict_outcome(group_context, action)
            outcomes[group] = group_outcome
        
        # Calculate statistical parity and equalized odds
        parity_score = self.calculate_statistical_parity(outcomes)
        odds_score = self.calculate_equalized_odds(outcomes)
        
        return min(parity_score, odds_score)
`;

export default function EthicalAIArchitecture() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="neural" particleCount={80} />
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
                Ethical AI Architecture: Building Responsible Intelligence Systems
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  15 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  January 20, 2024
                </div>
                <PremiumButton
                  variant="ghost"
                  size="sm"
                  icon={Share2}
                  iconPosition="left"
                  className="hover:text-accent-ai-purple transition-colors duration-200"
                >
                  Share
                </PremiumButton>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['AI Ethics', 'Architecture', 'Responsible AI', 'Governance'].map((tag) => (
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
                Exploring architectural patterns and design principles for building AI systems that prioritize 
                ethical considerations, fairness, transparency, and human oversight throughout the development lifecycle.
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
                Ethical AI architecture represents a fundamental shift in how we design and implement artificial 
                intelligence systems. Rather than treating ethics as an afterthought, ethical architecture embeds 
                moral considerations, fairness principles, and human values directly into the system&apos;s foundation.
              </p>
              <p className="body-text text-research-text-secondary">
                This research explores comprehensive frameworks for building AI systems that are not only technically 
                robust but also ethically sound, transparent in their decision-making processes, and accountable to 
                the communities they serve.
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
                <Brain className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Ethical Decision Framework</h2>
              </div>
              <LottieAnimation 
                animationFile="ethical-framework.json"
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
              <h2 className="section-title text-research-text mb-6">Ethical Architecture Lifecycle</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The ethical AI architecture follows a comprehensive lifecycle that integrates ethical considerations 
                at every stage, from initial requirements gathering through deployment and ongoing monitoring. This 
                approach ensures that ethical principles are not merely compliance checkboxes but fundamental design constraints.
              </p>
              
              <MermaidDiagram chart={ethicalArchitectureDiagram} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                Each stage in this lifecycle includes specific ethical checkpoints, stakeholder consultations, and 
                validation processes that ensure the system remains aligned with human values and societal expectations 
                throughout its operational lifetime.
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
              <h2 className="section-title text-research-text mb-6">Ethical Compliance Metrics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Measuring ethical compliance requires sophisticated metrics that go beyond traditional performance 
                indicators. Our framework evaluates fairness across demographic groups, transparency of decision 
                processes, and the effectiveness of human oversight mechanisms.
              </p>
              
              <InteractiveChart
                dataFile="ethical_metrics.json"
                chartType="bar"
                title="Ethical Compliance Scores Across Domains"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The data reveals significant variations in ethical compliance across different application domains, 
                with healthcare and criminal justice systems requiring the highest standards of fairness and 
                transparency, while recommendation systems show more flexibility in their ethical constraints.
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
                The following implementation demonstrates a practical ethical AI framework that can be integrated 
                into existing systems. This framework provides real-time ethical evaluation of AI decisions and 
                maintains comprehensive audit trails for accountability.
              </p>
              
              <CodeBlock
                code={ethicalFrameworkCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                This framework emphasizes proactive ethical evaluation rather than reactive compliance checking. 
                By integrating ethical assessment directly into the decision-making process, systems can prevent 
                harmful outcomes before they occur while maintaining detailed records for post-hoc analysis.
              </p>
            </motion.div>

            {/* Key Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Core Ethical Principles</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Fairness &amp; Non-discrimination</h3>
                  <p className="body-text text-research-text-secondary">
                    Ensuring equitable treatment across all demographic groups and protected attributes through statistical parity and equalized opportunity measures.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Transparency &amp; Explainability</h3>
                  <p className="body-text text-research-text-secondary">
                    Providing clear, understandable explanations for AI decisions that enable meaningful human oversight and accountability.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Privacy &amp; Data Protection</h3>
                  <p className="body-text text-research-text-secondary">
                    Implementing privacy-by-design principles with differential privacy, federated learning, and secure multi-party computation.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Human Agency &amp; Oversight</h3>
                  <p className="body-text text-research-text-secondary">
                    Maintaining meaningful human control over AI systems with clear escalation paths and intervention mechanisms.
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
                Ethical AI architecture is not merely a technical challenge but a fundamental reimagining of how 
                we build intelligent systems. By embedding ethical considerations into the architectural foundation, 
                we can create AI systems that are not only powerful and efficient but also trustworthy and aligned 
                with human values.
              </p>
              <p className="body-text text-research-text-secondary">
                Future research should focus on developing standardized ethical evaluation metrics, creating 
                interoperable ethical frameworks across different AI domains, and establishing governance structures 
                that can adapt to rapidly evolving technological capabilities while maintaining core ethical principles.
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
                  href="/research"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Research
                </Link>
                
                <Link
                  href="/research/multimodal-reasoning"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
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
