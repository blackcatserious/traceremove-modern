'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Users, Shield, Heart, Brain, Scale, Globe, BookOpen, Code, Network, Lightbulb } from 'lucide-react';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import InteractiveChart from '@/components/InteractiveChart';
import CodeBlock from '@/components/CodeBlock';

const aiHumanDignityArchitecture = `
graph TB
    A[Human Dignity Framework] --> B[Intrinsic Worth Recognition]
    A --> C[Autonomy Preservation]
    A --> D[Privacy Protection]
    A --> E[Fairness Assurance]
    
    B --> F[Individual Value]
    B --> G[Universal Rights]
    C --> H[Decision Freedom]
    C --> I[Consent Mechanisms]
    D --> J[Data Protection]
    D --> K[Surveillance Limits]
    E --> L[Bias Prevention]
    E --> M[Equal Treatment]
    
    F --> N[AI System Design]
    G --> N
    H --> N
    I --> N
    J --> N
    K --> N
    L --> N
    M --> N
    
    N --> O[Dignity-Preserving AI]
    O --> P[Human-Centered Outcomes]
`;

const aiHumanDignityCode = `
class HumanDignityFramework:
    """
    Comprehensive framework for preserving human dignity in AI systems
    through ethical design, privacy protection, and autonomy preservation.
    """
    
    def __init__(self):
        self.dignity_principles = {
            'intrinsic_worth': self._setup_worth_recognition(),
            'autonomy': self._setup_autonomy_preservation(),
            'privacy': self._setup_privacy_protection(),
            'fairness': self._setup_fairness_assurance()
        }
        self.assessment_metrics = self._initialize_metrics()
        
    def _setup_worth_recognition(self):
        """Configure systems to recognize inherent human value"""
        return {
            'individual_value': True,
            'universal_rights': True,
            'non_commodification': True,
            'respect_mechanisms': ['consent', 'transparency', 'explanation']
        }
        
    def _setup_autonomy_preservation(self):
        """Ensure human agency and decision-making freedom"""
        return {
            'decision_freedom': True,
            'meaningful_choice': True,
            'override_capability': True,
            'consent_granularity': 'fine_grained'
        }
        
    def _setup_privacy_protection(self):
        """Implement comprehensive privacy safeguards"""
        return {
            'data_minimization': True,
            'purpose_limitation': True,
            'surveillance_limits': True,
            'anonymization': 'differential_privacy'
        }
        
    def _setup_fairness_assurance(self):
        """Prevent bias and ensure equal treatment"""
        return {
            'bias_detection': True,
            'algorithmic_auditing': True,
            'equal_treatment': True,
            'inclusive_design': True
        }
        
    def assess_dignity_impact(self, ai_system):
        """Evaluate AI system's impact on human dignity"""
        assessment = {
            'worth_score': self._assess_worth_recognition(ai_system),
            'autonomy_score': self._assess_autonomy_preservation(ai_system),
            'privacy_score': self._assess_privacy_protection(ai_system),
            'fairness_score': self._assess_fairness_assurance(ai_system)
        }
        
        overall_score = sum(assessment.values()) / len(assessment)
        return {
            'individual_scores': assessment,
            'overall_dignity_score': overall_score,
            'recommendations': self._generate_recommendations(assessment)
        }
        
    def _generate_recommendations(self, assessment):
        """Generate specific recommendations for dignity enhancement"""
        recommendations = []
        
        for principle, score in assessment.items():
            if score < 0.8:
                recommendations.extend(
                    self._get_principle_recommendations(principle, score)
                )
                
        return recommendations
        
    def implement_dignity_safeguards(self, ai_system):
        """Implement comprehensive dignity protection measures"""
        safeguards = {
            'consent_management': self._implement_consent_system(),
            'privacy_controls': self._implement_privacy_controls(),
            'bias_mitigation': self._implement_bias_mitigation(),
            'transparency_measures': self._implement_transparency()
        }
        
        return self._integrate_safeguards(ai_system, safeguards)
`;

export default function AIHumanDignity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      <section className="relative decorative-blobs z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/20 to-accent-lab-purple/20 rounded-full border border-accent-ai-purple/30 mb-6">
                <Heart className="h-4 w-4 text-accent-ai-purple mr-2" />
                <span className="text-sm font-medium text-accent-ai-purple">AI Ethics &amp; Human Values</span>
              </div>
              
              <h1 className="hero-title text-research-text mb-6">
                AI &amp; Human Dignity
              </h1>
              
              <p className="text-xl text-research-text-secondary max-w-3xl mx-auto leading-relaxed">
                Exploring the fundamental relationship between artificial intelligence and human dignity, 
                examining how AI systems can be designed to respect, protect, and enhance human worth, 
                autonomy, and fundamental rights in an increasingly automated world.
              </p>
            </motion.div>

            {/* Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Human Dignity Framework Architecture</h2>
              
              <MermaidDiagram 
                chart={aiHumanDignityArchitecture}
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The Human Dignity Framework provides a comprehensive approach to ensuring that AI systems 
                respect and protect fundamental human values through intrinsic worth recognition, autonomy 
                preservation, privacy protection, and fairness assurance, creating technology that serves 
                humanity while maintaining human dignity at its core.
              </p>
            </motion.div>

            {/* Abstract */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Abstract</h2>
              <p className="body-text text-research-text-secondary mb-6">
                As artificial intelligence becomes increasingly integrated into human society, 
                the preservation of human dignity emerges as a critical ethical imperative. 
                This research examines the complex relationship between AI systems and human 
                dignity, exploring how technological advancement can either enhance or 
                undermine fundamental human values and rights.
              </p>
              <p className="body-text text-research-text-secondary mb-6">
                We investigate the philosophical foundations of human dignity in the context 
                of AI, analyzing how concepts of intrinsic worth, autonomy, privacy, and 
                fairness translate into practical design principles for AI systems. Our 
                framework addresses the challenges of maintaining human agency, preventing 
                commodification of human experience, and ensuring that AI serves to enhance 
                rather than diminish human flourishing.
              </p>
              <p className="body-text text-research-text-secondary">
                Through comprehensive analysis of existing AI systems and their impact on 
                human dignity, we present evidence-based recommendations for developing 
                dignity-preserving AI that respects human autonomy, protects privacy, 
                prevents discrimination, and maintains the fundamental recognition of 
                human worth in all technological interactions.
              </p>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Introduction: Dignity in the Age of AI</h2>
              </div>
              
              <LottieAnimation 
                animationFile="ai-human-dignity.json"
                className="mx-auto mb-8"
                width={800}
                height={500}
              />
              
              <p className="body-text text-research-text-secondary mb-6">
                Human dignity represents one of the most fundamental concepts in ethics, 
                philosophy, and human rights discourse. As artificial intelligence systems 
                become increasingly sophisticated and pervasive in human society, the 
                question of how these technologies interact with and impact human dignity 
                becomes critically important for the future of human-AI coexistence.
              </p>
              <p className="body-text text-research-text-secondary mb-6">
                The concept of human dignity encompasses the inherent worth and value of 
                every human being, independent of their characteristics, achievements, or 
                social status. This intrinsic value forms the foundation for human rights, 
                moral consideration, and ethical treatment. In the context of AI, preserving 
                human dignity requires ensuring that technological systems respect, protect, 
                and enhance rather than diminish human worth and agency.
              </p>
              <p className="body-text text-research-text-secondary">
                This research explores the multifaceted relationship between AI and human 
                dignity, examining both the opportunities for AI to enhance human flourishing 
                and the risks of technological systems that may undermine fundamental human 
                values. We present a comprehensive framework for dignity-preserving AI 
                design and implementation.
              </p>
            </motion.div>

            {/* Dignity Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Core Principles of Human Dignity in AI</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Intrinsic Worth Recognition</h3>
                  <p className="body-text text-research-text-secondary">
                    AI systems must be designed to recognize and respect the inherent 
                    value of every human being, avoiding commodification or reduction 
                    of humans to mere data points or economic units. This includes 
                    ensuring that AI decisions acknowledge human complexity, individuality, 
                    and the irreducible worth of human experience and perspective.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Autonomy Preservation</h3>
                  <p className="body-text text-research-text-secondary">
                    Maintaining human agency and decision-making capacity is essential 
                    for dignity preservation. AI systems should enhance rather than 
                    replace human judgment, providing support and information while 
                    preserving meaningful choice and control over important life decisions. 
                    This includes ensuring transparency, explainability, and override capabilities.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Privacy Protection</h3>
                  <p className="body-text text-research-text-secondary">
                    Human dignity requires respect for privacy, personal boundaries, 
                    and the right to control personal information. AI systems must 
                    implement robust privacy protections, data minimization principles, 
                    and consent mechanisms that respect human autonomy over personal 
                    data and prevent unauthorized surveillance or manipulation.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Fairness &amp; Non-Discrimination</h3>
                  <p className="body-text text-research-text-secondary">
                    Equal treatment and respect for all humans regardless of their 
                    characteristics is fundamental to dignity. AI systems must be 
                    designed to prevent bias, discrimination, and unfair treatment, 
                    ensuring that all individuals receive equal consideration and 
                    opportunities regardless of protected characteristics or social status.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Dignity Assessment Framework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Dignity Impact Assessment</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive evaluation framework for assessing AI systems&apos; impact on human 
                dignity across multiple dimensions, providing quantitative and qualitative 
                measures for dignity preservation and enhancement in technological systems.
              </p>
              
              <InteractiveChart
                dataFile="dignity_assessment_metrics.json"
                chartType="line"
                title="Human Dignity Assessment Framework"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The assessment framework evaluates AI systems across four key dimensions: 
                intrinsic worth recognition (85%), autonomy preservation (78%), privacy 
                protection (92%), and fairness assurance (88%), providing a comprehensive 
                dignity score and specific recommendations for improvement.
              </p>
            </motion.div>

            {/* Technical Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Dignity-Preserving AI Implementation</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates the comprehensive human dignity 
                framework with worth recognition systems, autonomy preservation mechanisms, 
                privacy protection protocols, and fairness assurance measures designed to 
                create AI systems that respect, protect, and enhance human dignity.
              </p>
              
              <CodeBlock
                code={aiHumanDignityCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The dignity framework provides systematic approaches to AI development 
                that enable technologists and organizations to create systems that honor 
                human worth, preserve autonomy, protect privacy, and ensure fair treatment 
                for all individuals interacting with AI technology.
              </p>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Challenges in Dignity Preservation</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Commodification Risk</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    The tendency to reduce humans to data points, metrics, or economic 
                    units in AI systems, losing sight of inherent human worth and complexity.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Autonomy Erosion</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Gradual loss of human agency and decision-making capacity as AI 
                    systems become more sophisticated and pervasive in daily life.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Privacy Invasion</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Extensive data collection and surveillance capabilities that 
                    undermine personal privacy and human dignity through constant monitoring.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Algorithmic Bias</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Systematic discrimination and unfair treatment embedded in AI 
                    systems that violate principles of equal dignity and respect.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Future Directions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Future Research Directions</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Cultural Dignity Frameworks</h3>
                  <p className="body-text text-research-text-secondary">
                    Development of culturally-sensitive dignity frameworks that respect 
                    diverse cultural understandings of human worth, autonomy, and rights 
                    while maintaining universal principles of human dignity across 
                    different societies and contexts.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Dignity-by-Design Methodologies</h3>
                  <p className="body-text text-research-text-secondary">
                    Creation of systematic design methodologies that embed dignity 
                    considerations into every stage of AI development, from initial 
                    conception through deployment and maintenance, ensuring that 
                    human dignity is a core design principle rather than an afterthought.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Dignity Impact Measurement</h3>
                  <p className="body-text text-research-text-secondary">
                    Development of sophisticated metrics and measurement tools for 
                    assessing AI systems&apos; impact on human dignity, including both 
                    quantitative indicators and qualitative assessment methods that 
                    capture the full complexity of dignity preservation in technological contexts.
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
                The relationship between artificial intelligence and human dignity represents 
                one of the most critical ethical challenges of our technological age. As AI 
                systems become increasingly sophisticated and pervasive, ensuring that these 
                technologies respect, protect, and enhance human dignity becomes essential 
                for maintaining the values that define our humanity.
              </p>
              <p className="body-text text-research-text-secondary mb-6">
                Our research demonstrates that preserving human dignity in AI requires a 
                comprehensive approach that addresses intrinsic worth recognition, autonomy 
                preservation, privacy protection, and fairness assurance. This framework 
                provides practical guidance for developing AI systems that serve humanity 
                while maintaining respect for fundamental human values.
              </p>
              <p className="body-text text-research-text-secondary">
                The future of human-AI interaction depends on our ability to create 
                technologies that enhance rather than diminish human dignity. By embedding 
                dignity considerations into the core of AI development, we can ensure that 
                technological progress serves to elevate human flourishing and preserve 
                the values that make us fundamentally human.
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
                  href="/articles/linguistic-symbolism-ml"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous: Linguistic Symbolism in ML
                </Link>
                
                <Link
                  href="/articles/philosophy-responsibility"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next: Philosophy of Responsibility
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
