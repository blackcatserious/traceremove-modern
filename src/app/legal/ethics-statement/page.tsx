'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, FileText, Shield, Scale, Users, Eye, MessageSquare, Heart, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const ethicsStatementArchitecture = `
graph TD
    A[Ethics Statement] --> B[Core Principles]
    A --> C[Research Ethics]
    A --> D[AI Development Ethics]
    B --> E[Human Dignity]
    B --> F[Transparency]
    B --> G[Accountability]
    C --> H[Research Integrity]
    C --> I[Data Protection]
    C --> J[Participant Rights]
    D --> K[Beneficial AI]
    D --> L[Fairness &amp; Bias Mitigation]
    D --> M[Safety &amp; Security]
    E --> N[Comprehensive Ethics Framework]
    F --> N
    G --> N
    H --> O[Research Ethics System]
    I --> O
    J --> O
    K --> P[AI Ethics Architecture]
    L --> P
    M --> P
    N --> Q[Complete Ethics Statement]
    O --> Q
    P --> Q
    Q --> R{Ethics Compliance?}
    R -->|Compliant| S[Ethical Research &amp; Development]
    R -->|Review Needed| T[Ethics Review Process]
    R -->|Non-Compliant| U[Ethics Remediation]
    S --> V[Responsible AI Research Platform]
    T --> V
    U --> V
    V --> W[Trustworthy AI Ecosystem]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const ethicsImplementationCode = `
class EthicsStatementFramework:
    def __init__(self, core_principles, research_guidelines, ai_development_standards):
        self.core_principles = core_principles
        self.research_guidelines = research_guidelines
        self.ai_development_standards = ai_development_standards
        self.ethics_evaluator = EthicsEvaluator()
        self.compliance_monitor = ComplianceMonitor()
        self.stakeholder_engagement = StakeholderEngagement()
        self.continuous_improvement = ContinuousImprovement()
        
    def implement_ethics_framework(self, research_contexts, development_projects, stakeholder_groups):
        """Implement comprehensive ethics framework with principle application, compliance monitoring, and stakeholder engagement."""
        
        ethics_system = {
            'principle_implementation': {},
            'research_ethics_compliance': {},
            'ai_development_ethics': {},
            'stakeholder_engagement': {},
            'continuous_monitoring': {}
        }
        
        # Core principle implementation and value integration
        ethics_system['principle_implementation'] = self.implement_core_principles(
            self.core_principles, research_contexts,
            principle_dimensions=[
                'human_dignity_preservation',
                'transparency_and_openness',
                'accountability_mechanisms',
                'fairness_and_justice',
                'beneficence_and_non_maleficence',
                'respect_for_autonomy'
            ]
        )
        
        # Research ethics compliance and integrity assurance
        ethics_system['research_ethics_compliance'] = self.ensure_research_ethics(
            ethics_system['principle_implementation'], self.research_guidelines,
            compliance_aspects=[
                'research_integrity_standards',
                'data_protection_protocols',
                'participant_rights_protection',
                'informed_consent_processes',
                'privacy_preservation_measures',
                'ethical_review_procedures'
            ]
        )
        
        # AI development ethics and responsible innovation
        ethics_system['ai_development_ethics'] = self.implement_ai_ethics(
            ethics_system['research_ethics_compliance'], development_projects,
            development_components=[
                'beneficial_ai_development',
                'bias_mitigation_strategies',
                'safety_and_security_measures',
                'explainability_requirements',
                'human_oversight_mechanisms',
                'societal_impact_assessment'
            ]
        )
        
        # Stakeholder engagement and participatory ethics
        ethics_system['stakeholder_engagement'] = self.engage_stakeholders(
            ethics_system,
            engagement_features=[
                'multi_stakeholder_consultation',
                'community_participation_processes',
                'expert_advisory_mechanisms',
                'public_dialogue_facilitation',
                'feedback_integration_systems',
                'collaborative_governance_structures'
            ]
        )
        
        return ethics_system
    
    def evaluate_ethical_compliance(self, research_activities, development_processes, stakeholder_feedback):
        """Evaluate ethical compliance through activity assessment, process evaluation, and stakeholder input analysis."""
        
        compliance_evaluation = {
            'principle_adherence_assessment': {},
            'process_ethics_evaluation': {},
            'outcome_impact_analysis': {},
            'stakeholder_satisfaction_measurement': {},
            'improvement_opportunity_identification': {}
        }
        
        # Principle adherence assessment and value alignment
        compliance_evaluation['principle_adherence_assessment'] = self.assess_principle_adherence(
            research_activities, development_processes,
            adherence_dimensions=[
                'human_dignity_respect_measurement',
                'transparency_implementation_evaluation',
                'accountability_mechanism_effectiveness',
                'fairness_outcome_assessment',
                'beneficence_impact_analysis',
                'autonomy_preservation_evaluation'
            ]
        )
        
        # Process ethics evaluation and procedural assessment
        compliance_evaluation['process_ethics_evaluation'] = self.evaluate_process_ethics(
            compliance_evaluation['principle_adherence_assessment'], stakeholder_feedback,
            process_aspects=[
                'ethical_review_quality_assessment',
                'consent_process_effectiveness',
                'data_handling_compliance_evaluation',
                'risk_management_adequacy',
                'oversight_mechanism_performance',
                'documentation_completeness_analysis'
            ]
        )
        
        # Outcome impact analysis and societal benefit assessment
        compliance_evaluation['outcome_impact_analysis'] = self.analyze_outcome_impacts(
            compliance_evaluation,
            impact_factors=[
                'positive_societal_impact_measurement',
                'harm_prevention_effectiveness',
                'equity_outcome_evaluation',
                'long_term_sustainability_assessment',
                'unintended_consequence_identification',
                'stakeholder_benefit_distribution_analysis'
            ]
        )
        
        return compliance_evaluation
    
    def monitor_continuous_improvement(self, ethics_performance, stakeholder_input, emerging_challenges):
        """Monitor continuous improvement through performance tracking, input integration, and challenge adaptation."""
        
        improvement_monitoring = {
            'performance_tracking': {},
            'stakeholder_feedback_integration': {},
            'emerging_challenge_adaptation': {},
            'best_practice_development': {},
            'knowledge_sharing_facilitation': {}
        }
        
        # Performance tracking and metrics monitoring
        improvement_monitoring['performance_tracking'] = self.track_ethics_performance(
            ethics_performance, stakeholder_input,
            tracking_dimensions=[
                'compliance_rate_monitoring',
                'stakeholder_satisfaction_tracking',
                'ethical_outcome_measurement',
                'process_efficiency_evaluation',
                'innovation_impact_assessment',
                'continuous_learning_progress'
            ]
        )
        
        # Stakeholder feedback integration and participatory improvement
        improvement_monitoring['stakeholder_feedback_integration'] = self.integrate_stakeholder_feedback(
            improvement_monitoring['performance_tracking'], emerging_challenges,
            integration_aspects=[
                'feedback_collection_systematization',
                'input_analysis_and_prioritization',
                'response_development_processes',
                'implementation_tracking_mechanisms',
                'communication_and_transparency',
                'collaborative_solution_development'
            ]
        )
        
        # Emerging challenge adaptation and proactive response
        improvement_monitoring['emerging_challenge_adaptation'] = self.adapt_to_emerging_challenges(
            improvement_monitoring,
            adaptation_factors=[
                'challenge_identification_systems',
                'rapid_response_mechanisms',
                'adaptive_policy_development',
                'stakeholder_consultation_processes',
                'solution_testing_and_validation',
                'knowledge_dissemination_strategies'
            ]
        )
        
        return improvement_monitoring
`;

export default function EthicsStatement() {
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
              href="/"
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                Ethics Statement: Principles for Responsible AI Research
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Last Updated Dec 2024
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  15 min read
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Ethics Statement
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share Statement
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Ethics', 'AI Research', 'Responsible Innovation', 'Human Rights', 'Transparency', 'Accountability'].map((tag) => (
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
                This ethics statement outlines the fundamental principles and 
                commitments that guide all research, development, and innovation 
                activities at Traceremove. We are committed to advancing artificial 
                intelligence in ways that respect human dignity, promote social 
                good, and contribute to a more just and equitable world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Our Mission &amp; Commitment</h2>
              </div>
              
              <LottieAnimation 
                animationFile="ethics-statement.json"
                className="mx-auto mb-8"
                width={600}
                height={400}
              />
              
              <p className="body-text text-research-text-secondary mb-6">
                At Traceremove, we believe that artificial intelligence has 
                the potential to address some of humanity&apos;s greatest challenges 
                and create unprecedented opportunities for human flourishing. 
                However, we also recognize that with this potential comes 
                profound responsibility. Our mission is to advance AI research 
                and development in ways that are ethical, transparent, and 
                aligned with human values and societal well-being.
              </p>
              
              <p className="body-text text-research-text-secondary">
                This ethics statement serves as our compass, guiding every 
                decision we make, every project we undertake, and every 
                innovation we pursue. It reflects our commitment to responsible 
                AI development and our dedication to ensuring that our work 
                contributes to a future where AI serves all of humanity 
                equitably and justly.
              </p>
            </motion.div>

            {/* Ethics Framework Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Ethics Framework Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our ethics framework integrates core principles, research ethics 
                guidelines, and AI development standards to create comprehensive 
                ethical governance mechanisms. The system emphasizes human dignity 
                preservation, transparency implementation, and accountability through 
                structured compliance monitoring and responsible AI ecosystem development.
              </p>
              
              <MermaidDiagram chart={ethicsStatementArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The ethics framework operates through four integrated layers: (1) core 
                principles including human dignity, transparency, and accountability, (2) research 
                ethics with integrity standards and data protection, (3) AI development ethics 
                featuring beneficial AI and bias mitigation, and (4) comprehensive ethics 
                statement leading to trustworthy AI ecosystem development.
              </p>
            </motion.div>

            {/* Core Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Core Ethical Principles</h2>
              <div className="space-y-6">
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Users className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Human Dignity &amp; Rights</h3>
                        <p className="text-accent-ai-purple font-medium">Fundamental Respect for Humanity</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-blue-500/20 px-3 py-1 rounded-full">
                      Core
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    We recognize the inherent dignity and worth of every human 
                    being. All our research and development activities are 
                    designed to respect, protect, and promote human rights. 
                    We reject any use of AI that dehumanizes, discriminates 
                    against, or harms individuals or communities. Our work 
                    aims to enhance human capabilities and well-being while 
                    preserving human agency and autonomy.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Human rights protection</span>
                    <span>•</span>
                    <span>Dignity preservation</span>
                    <span>•</span>
                    <span>Autonomy respect</span>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Eye className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Transparency &amp; Openness</h3>
                        <p className="text-accent-ai-purple font-medium">Clear Communication &amp; Accountability</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-green-500/20 px-3 py-1 rounded-full">
                      Transparency
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    We are committed to transparency in our research methods, 
                    findings, and decision-making processes. We believe that 
                    openness fosters trust, enables scrutiny, and promotes 
                    collaborative advancement of knowledge. We share our 
                    research openly, communicate clearly about our work&apos;s 
                    implications, and engage in honest dialogue about both
                    the benefits and risks of our innovations.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Open research</span>
                    <span>•</span>
                    <span>Clear communication</span>
                    <span>•</span>
                    <span>Public engagement</span>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Shield className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Accountability &amp; Responsibility</h3>
                        <p className="text-accent-ai-purple font-medium">Ownership of Impact &amp; Outcomes</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-purple-500/20 px-3 py-1 rounded-full">
                      Accountability
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    We take full responsibility for the consequences of our 
                    research and development activities. We establish clear 
                    accountability mechanisms, maintain rigorous oversight 
                    of our work, and are prepared to address any negative 
                    impacts that may arise. We believe that with the power 
                    to shape the future through AI comes the obligation 
                    to do so responsibly and ethically.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Clear accountability</span>
                    <span>•</span>
                    <span>Impact ownership</span>
                    <span>•</span>
                    <span>Rigorous oversight</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Research Ethics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Research Ethics &amp; Integrity</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Scientific Integrity</h3>
                  <p className="body-text text-research-text-secondary">
                    We maintain the highest standards of scientific integrity 
                    in all our research activities. This includes honest 
                    reporting of results, proper attribution of contributions, 
                    rigorous peer review processes, and transparent handling 
                    of conflicts of interest. We are committed to reproducible 
                    research practices and open sharing of data and methodologies 
                    where appropriate and safe.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Data Protection &amp; Privacy</h3>
                  <p className="body-text text-research-text-secondary">
                    We recognize data as a fundamental asset that must be 
                    handled with utmost care and respect. We implement robust 
                    data protection measures, ensure compliance with privacy 
                    regulations, and prioritize the rights of data subjects. 
                    We collect only necessary data, use it only for stated 
                    purposes, and implement strong security measures to 
                    prevent unauthorized access or misuse.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Informed Consent &amp; Participation</h3>
                  <p className="body-text text-research-text-secondary">
                    When our research involves human participants, we ensure 
                    that all participation is voluntary and based on informed 
                    consent. We provide clear, understandable information 
                    about research purposes, procedures, risks, and benefits. 
                    Participants have the right to withdraw at any time, 
                    and we respect their decisions without penalty or 
                    disadvantage.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* AI Development Ethics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">AI Development Ethics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Beneficial AI Development</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Focus on positive societal impact</p>
                    <p>• Address real-world problems</p>
                    <p>• Enhance human capabilities</p>
                    <p>• Promote social good</p>
                    <p>• Consider long-term consequences</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Fairness &amp; Bias Mitigation</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Proactive bias identification</p>
                    <p>• Inclusive design processes</p>
                    <p>• Diverse team composition</p>
                    <p>• Regular fairness audits</p>
                    <p>• Equitable outcome measurement</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Safety &amp; Security</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Robust safety testing</p>
                    <p>• Security by design</p>
                    <p>• Risk assessment protocols</p>
                    <p>• Fail-safe mechanisms</p>
                    <p>• Continuous monitoring</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Explainability &amp; Interpretability</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Transparent decision-making</p>
                    <p>• Interpretable model design</p>
                    <p>• Clear explanation interfaces</p>
                    <p>• User understanding support</p>
                    <p>• Audit trail maintenance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Implementation Framework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Ethics Implementation Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates our comprehensive ethics 
                framework with principle application, compliance monitoring, and 
                stakeholder engagement designed to ensure ethical research practices, 
                responsible AI development, and continuous improvement in our 
                ethical standards and practices.
              </p>
              
              <CodeBlock
                code={ethicsImplementationCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Our ethics implementation framework provides systematic approaches 
                to ethical compliance that enable us to maintain the highest 
                standards of research integrity, develop beneficial AI systems, 
                and contribute to a trustworthy AI ecosystem.
              </p>
            </motion.div>

            {/* Stakeholder Engagement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Stakeholder Engagement &amp; Community Involvement</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Multi-Stakeholder Dialogue</h3>
                  <p className="body-text text-research-text-secondary">
                    We actively engage with diverse stakeholders including 
                    researchers, policymakers, civil society organizations, 
                    industry partners, and affected communities. We believe 
                    that inclusive dialogue is essential for understanding 
                    the full implications of our work and ensuring that 
                    our research serves the broader public interest.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Community Participation</h3>
                  <p className="body-text text-research-text-secondary">
                    We recognize that communities affected by AI systems 
                    should have a voice in their development and deployment. 
                    We create opportunities for meaningful community 
                    participation in our research processes, from problem 
                    identification through solution design and evaluation. 
                    We respect community knowledge and integrate local 
                    perspectives into our work.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Expert Advisory Networks</h3>
                  <p className="body-text text-research-text-secondary">
                    We maintain relationships with expert advisory networks 
                    spanning ethics, law, social science, and domain-specific 
                    expertise. These networks provide critical guidance on 
                    ethical considerations, help us anticipate potential 
                    issues, and ensure that our work meets the highest 
                    standards of professional and ethical practice.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Compliance &amp; Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Compliance Monitoring &amp; Continuous Improvement</h2>
              
              <InteractiveChart
                dataFile="ethics_compliance_metrics.json"
                chartType="bar"
                title="Ethics Compliance Monitoring &amp; Performance Metrics"
                className="mb-8"
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Regular Ethics Reviews</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Quarterly ethics assessments</p>
                    <p>• Project-specific ethical reviews</p>
                    <p>• External ethics committee oversight</p>
                    <p>• Peer review processes</p>
                    <p>• Stakeholder feedback integration</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Performance Metrics</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Ethics compliance rates</p>
                    <p>• Stakeholder satisfaction scores</p>
                    <p>• Impact assessment outcomes</p>
                    <p>• Transparency index measurements</p>
                    <p>• Community engagement levels</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Improvement Processes</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Continuous learning programs</p>
                    <p>• Best practice development</p>
                    <p>• Policy update mechanisms</p>
                    <p>• Training and education</p>
                    <p>• Knowledge sharing initiatives</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Accountability Mechanisms</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Clear responsibility assignment</p>
                    <p>• Grievance procedures</p>
                    <p>• Corrective action protocols</p>
                    <p>• Public reporting requirements</p>
                    <p>• Independent oversight bodies</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Commitments &amp; Pledges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Our Commitments &amp; Pledges</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Commitment to Beneficial AI</h3>
                    <p className="body-text text-research-text-secondary">
                      We pledge to develop AI systems that benefit humanity 
                      and contribute to solving important global challenges. 
                      We will not knowingly create or support AI applications 
                      that cause harm or undermine human welfare.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Commitment to Transparency</h3>
                    <p className="body-text text-research-text-secondary">
                      We commit to maintaining transparency in our research 
                      processes, sharing our findings openly, and engaging 
                      in honest communication about the capabilities and 
                      limitations of our AI systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Commitment to Fairness</h3>
                    <p className="body-text text-research-text-secondary">
                      We pledge to actively work against bias and discrimination 
                      in AI systems, promote equitable access to AI benefits, 
                      and ensure that our work contributes to a more just 
                      and inclusive society.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Commitment to Accountability</h3>
                    <p className="body-text text-research-text-secondary">
                      We commit to taking responsibility for the impacts 
                      of our work, maintaining robust oversight mechanisms, 
                      and being responsive to legitimate concerns raised 
                      by stakeholders and the broader community.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Commitment to Continuous Improvement</h3>
                    <p className="body-text text-research-text-secondary">
                      We pledge to continuously improve our ethical practices, 
                      learn from our experiences and mistakes, and adapt 
                      our approaches as our understanding of AI ethics 
                      evolves and deepens.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact &amp; Reporting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Ethics Concerns &amp; Reporting</h2>
              <div className="space-y-4">
                <p className="body-text text-research-text-secondary">
                  We encourage anyone with concerns about the ethical 
                  implications of our work to reach out to us. We are 
                  committed to addressing legitimate concerns promptly 
                  and transparently.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="academic-card p-6">
                    <h3 className="text-lg font-semibold text-research-text mb-3">Contact Information</h3>
                    <div className="space-y-2 text-sm text-research-text-secondary">
                      <p>• Ethics Committee: ethics@traceremove.dev</p>
                      <p>• Research Director: research@traceremove.dev</p>
                      <p>• General Inquiries: info@traceremove.dev</p>
                      <p>• Anonymous Reporting: Available via website</p>
                    </div>
                  </div>
                  <div className="academic-card p-6">
                    <h3 className="text-lg font-semibold text-research-text mb-3">Reporting Process</h3>
                    <div className="space-y-2 text-sm text-research-text-secondary">
                      <p>• Confidential reporting options</p>
                      <p>• 48-hour acknowledgment commitment</p>
                      <p>• Thorough investigation process</p>
                      <p>• Transparent resolution reporting</p>
                    </div>
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
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
                
                <Link
                  href="/legal/privacy-policy"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Privacy Policy
                  <Scale className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
