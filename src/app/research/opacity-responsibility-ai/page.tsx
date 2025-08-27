'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, AlertTriangle, Users, Gavel } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const responsibilityFrameworkDiagram = `
graph TD
    A[AI System Deployment] --> B[Opacity Assessment]
    B --> C{Transparency Level?}
    C -->|High Opacity| D[Responsibility Gap Analysis]
    C -->|Medium Opacity| E[Partial Accountability Framework]
    C -->|Low Opacity| F[Standard Accountability]
    D --> G[Stakeholder Identification]
    E --> H[Hybrid Responsibility Model]
    F --> I[Direct Attribution]
    G --> J[Responsibility Distribution]
    H --> K[Shared Accountability]
    I --> L[Individual Responsibility]
    J --> M{Harm Occurs?}
    K --> M
    L --> M
    M -->|Yes| N[Harm Assessment]
    M -->|No| O[Continuous Monitoring]
    N --> P[Causal Analysis]
    P --> Q[Responsibility Attribution]
    Q --> R[Remediation Actions]
    O --> S[System Updates]
    R --> T[Learning Integration]
    S --> T
    T --> U[Policy Refinement]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style D fill:#EF4444,stroke:#DC2626,color:#fff
    style N fill:#F59E0B,stroke:#D97706,color:#fff
    style U fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const responsibilityFrameworkCode = `
class OpacityResponsibilityFramework:
    def __init__(self, stakeholder_registry, accountability_models):
        self.stakeholder_registry = stakeholder_registry
        self.accountability_models = accountability_models
        self.opacity_analyzer = OpacityAnalyzer()
        self.responsibility_tracker = ResponsibilityTracker()
        self.harm_assessor = HarmAssessment()
        
    def assess_system_opacity(self, ai_system, context):
        &quot;Comprehensive assessment of AI system opacity and transparency.&quot;
        
        opacity_assessment = {
            'technical_opacity': {},
            'procedural_opacity': {},
            'institutional_opacity': {},
            'overall_opacity_score': 0,
            'transparency_gaps': []
        }
        
        # Technical opacity analysis
        opacity_assessment['technical_opacity'] = self.analyze_technical_opacity(
            ai_system,
            dimensions=[
                'model_architecture_transparency',
                'training_data_visibility',
                'decision_process_explainability',
                'algorithmic_auditability',
                'performance_metrics_disclosure'
            ]
        )
        
        # Procedural opacity analysis
        opacity_assessment['procedural_opacity'] = self.analyze_procedural_opacity(
            ai_system, context,
            dimensions=[
                'development_process_documentation',
                'testing_validation_transparency',
                'deployment_decision_rationale',
                'monitoring_procedures_disclosure',
                'update_modification_tracking'
            ]
        )
        
        # Institutional opacity analysis
        opacity_assessment['institutional_opacity'] = self.analyze_institutional_opacity(
            ai_system, context,
            dimensions=[
                'organizational_structure_clarity',
                'decision_authority_identification',
                'accountability_chain_visibility',
                'governance_framework_transparency',
                'stakeholder_engagement_openness'
            ]
        )
        
        # Calculate overall opacity score
        opacity_assessment['overall_opacity_score'] = self.calculate_opacity_score(
            opacity_assessment['technical_opacity'],
            opacity_assessment['procedural_opacity'],
            opacity_assessment['institutional_opacity']
        )
        
        # Identify transparency gaps
        opacity_assessment['transparency_gaps'] = self.identify_transparency_gaps(
            opacity_assessment,
            regulatory_requirements=context.get('regulations', []),
            stakeholder_expectations=context.get('stakeholder_needs', [])
        )
        
        return opacity_assessment
    
    def establish_responsibility_framework(self, ai_system, opacity_assessment, stakeholders):
        &quot;Establish comprehensive responsibility framework based on opacity analysis.&quot;
        
        responsibility_framework = {
            'stakeholder_responsibilities': {},
            'accountability_mechanisms': {},
            'responsibility_gaps': [],
            'mitigation_strategies': {},
            'monitoring_protocols': {}
        }
        
        # Map stakeholder responsibilities
        for stakeholder in stakeholders:
            responsibility_framework['stakeholder_responsibilities'][stakeholder.id] = {
                'primary_responsibilities': self.define_primary_responsibilities(
                    stakeholder, ai_system, opacity_assessment
                ),
                'secondary_responsibilities': self.define_secondary_responsibilities(
                    stakeholder, ai_system, opacity_assessment
                ),
                'capability_assessment': self.assess_stakeholder_capability(
                    stakeholder, ai_system
                ),
                'authority_level': self.determine_authority_level(
                    stakeholder, ai_system
                )
            }
        
        # Design accountability mechanisms
        responsibility_framework['accountability_mechanisms'] = self.design_accountability_mechanisms(
            opacity_assessment,
            stakeholders,
            mechanisms=[
                'direct_attribution',
                'shared_responsibility',
                'collective_accountability',
                'hierarchical_responsibility',
                'distributed_oversight'
            ]
        )
        
        # Identify responsibility gaps
        responsibility_framework['responsibility_gaps'] = self.identify_responsibility_gaps(
            responsibility_framework['stakeholder_responsibilities'],
            ai_system.risk_profile,
            opacity_assessment['overall_opacity_score']
        )
        
        # Develop mitigation strategies
        responsibility_framework['mitigation_strategies'] = self.develop_mitigation_strategies(
            responsibility_framework['responsibility_gaps'],
            opacity_assessment['transparency_gaps']
        )
        
        return responsibility_framework
    
    def handle_harm_incident(self, incident, ai_system, responsibility_framework):
        &quot;Handle harm incidents with appropriate responsibility attribution.&quot;
        
        incident_response = {
            'harm_assessment': {},
            'causal_analysis': {},
            'responsibility_attribution': {},
            'remediation_actions': {},
            'learning_outcomes': {}
        }
        
        # Assess harm severity and scope
        incident_response['harm_assessment'] = self.harm_assessor.assess_harm(
            incident,
            dimensions=[
                'severity_level',
                'affected_population',
                'harm_type',
                'reversibility',
                'systemic_implications'
            ]
        )
        
        # Perform causal analysis
        incident_response['causal_analysis'] = self.perform_causal_analysis(
            incident, ai_system,
            analysis_methods=[
                'technical_root_cause',
                'procedural_failure_analysis',
                'institutional_factor_analysis',
                'environmental_context_analysis',
                'human_factor_analysis'
            ]
        )
        
        # Attribute responsibility based on causal analysis
        incident_response['responsibility_attribution'] = self.attribute_responsibility(
            incident_response['causal_analysis'],
            responsibility_framework,
            attribution_principles=[
                'causal_contribution',
                'foreseeability',
                'capability_to_prevent',
                'authority_to_act',
                'duty_of_care'
            ]
        )
        
        # Design remediation actions
        incident_response['remediation_actions'] = self.design_remediation_actions(
            incident_response['harm_assessment'],
            incident_response['responsibility_attribution'],
            action_types=[
                'immediate_harm_mitigation',
                'victim_compensation',
                'system_corrections',
                'process_improvements',
                'policy_updates'
            ]
        )
        
        # Extract learning outcomes
        incident_response['learning_outcomes'] = self.extract_learning_outcomes(
            incident_response,
            learning_categories=[
                'technical_lessons',
                'procedural_improvements',
                'governance_enhancements',
                'stakeholder_education',
                'policy_implications'
            ]
        )
        
        return incident_response
    
    def continuous_responsibility_monitoring(self, ai_system, responsibility_framework):
        &quot;Implement continuous monitoring of responsibility and accountability.&quot;
        
        monitoring_system = {
            'responsibility_metrics': {},
            'accountability_indicators': {},
            'early_warning_signals': {},
            'adaptation_triggers': {},
            'reporting_mechanisms': {}
        }
        
        # Define responsibility metrics
        monitoring_system['responsibility_metrics'] = self.define_responsibility_metrics(
            responsibility_framework,
            metrics=[
                'responsibility_clarity_score',
                'accountability_mechanism_effectiveness',
                'stakeholder_capability_alignment',
                'responsibility_gap_coverage',
                'response_time_to_incidents'
            ]
        )
        
        # Establish accountability indicators
        monitoring_system['accountability_indicators'] = self.establish_accountability_indicators(
            ai_system, responsibility_framework,
            indicators=[
                'decision_traceability',
                'oversight_effectiveness',
                'remediation_success_rate',
                'stakeholder_satisfaction',
                'regulatory_compliance'
            ]
        )
        
        return monitoring_system
`;

export default function OpacityResponsibilityAI() {
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
                Opacity &amp; Responsibility in AI: Navigating Accountability in Complex Systems
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  30 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  March 8, 2024
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['AI Ethics', 'Algorithmic Accountability', 'Transparency', 'Responsibility Attribution', 'AI Governance', 'Harm Mitigation'].map((tag) => (
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
                Investigating the complex relationship between AI system opacity and responsibility attribution, 
                developing frameworks for accountability in opaque systems, and establishing mechanisms for 
                harm prevention and remediation in complex sociotechnical AI deployments.
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
                <AlertTriangle className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Introduction</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The increasing deployment of opaque AI systems creates fundamental challenges for responsibility 
                attribution and accountability. As AI systems become more complex and their decision-making processes 
                less transparent, traditional frameworks for assigning responsibility become inadequate, creating 
                &quot;responsibility gaps&quot; that undermine trust and effective governance.
              </p>
              <p className="body-text text-research-text-secondary">
                This research addresses the critical intersection of AI opacity and responsibility, developing 
                comprehensive frameworks for understanding how transparency limitations affect accountability, 
                establishing mechanisms for responsibility attribution in complex systems, and creating governance 
                structures that ensure appropriate oversight and harm mitigation.
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
                <Users className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Responsibility Attribution Framework</h2>
              </div>
              <LottieAnimation 
                animationFile="responsibility-network.json"
                className="mx-auto"
                width={600}
                height={450}
              />
            </motion.div>

            {/* Framework Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Opacity-Responsibility Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our framework systematically assesses AI system opacity across technical, procedural, and institutional 
                dimensions, then establishes appropriate responsibility attribution mechanisms based on transparency 
                levels. The system includes stakeholder identification, capability assessment, and continuous monitoring 
                to ensure effective accountability throughout the AI lifecycle.
              </p>
              
              <MermaidDiagram chart={responsibilityFrameworkDiagram} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The framework addresses three critical challenges: (1) mapping opacity sources to responsibility gaps, 
                (2) designing adaptive accountability mechanisms that function despite limited transparency, and 
                (3) establishing effective harm response protocols that enable learning and system improvement.
              </p>
            </motion.div>

            {/* Opacity Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">AI System Opacity Analysis</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive analysis of opacity patterns across different AI system types reveals significant 
                variations in transparency challenges and their implications for responsibility attribution. Our 
                research identifies key opacity dimensions and their impact on stakeholder accountability.
              </p>
              
              <InteractiveChart
                dataFile="ai_opacity_responsibility_analysis.json"
                chartType="doughnut"
                title="Sources of AI System Opacity and Responsibility Gaps"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results show that technical opacity accounts for 45% of responsibility attribution challenges, 
                procedural opacity for 30%, and institutional opacity for 25%. Deep learning systems exhibit 
                the highest opacity scores, while rule-based systems maintain the clearest responsibility chains.
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
              <h2 className="section-title text-research-text mb-6">Responsibility Framework Implementation</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates our comprehensive opacity-responsibility framework with 
                automated opacity assessment, stakeholder responsibility mapping, and incident response protocols 
                designed for complex AI systems with varying transparency levels.
              </p>
              
              <CodeBlock
                code={responsibilityFrameworkCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides systematic approaches to opacity assessment, responsibility attribution, 
                and harm response that adapt to different levels of system transparency while maintaining 
                accountability and enabling continuous improvement through learning from incidents.
              </p>
            </motion.div>

            {/* Key Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Gavel className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Core Accountability Challenges</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">The Problem of Many Hands</h3>
                  <p className="body-text text-research-text-secondary">
                    Complex AI systems involve multiple stakeholders, making it difficult to attribute responsibility when harm occurs.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Temporal Responsibility Gaps</h3>
                  <p className="body-text text-research-text-secondary">
                    AI systems evolve over time through learning and updates, creating challenges for retrospective responsibility attribution.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Emergent Behavior Accountability</h3>
                  <p className="body-text text-research-text-secondary">
                    Unforeseeable emergent behaviors in complex systems challenge traditional notions of foreseeability and control.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Scale and Automation Challenges</h3>
                  <p className="body-text text-research-text-secondary">
                    Large-scale automated decision-making creates challenges for meaningful human oversight and intervention.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Responsibility Models */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Responsibility Attribution Models</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Hierarchical Responsibility Model</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Clear organizational structures with defined authority chains. 
                    <strong>Strengths:</strong> Clear accountability lines, efficient decision-making. 
                    <strong>Limitations:</strong> May not capture distributed causation in complex systems.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Distributed Responsibility Model</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Complex systems with multiple contributing factors and stakeholders. 
                    <strong>Strengths:</strong> Captures complex causation, promotes collective accountability. 
                    <strong>Limitations:</strong> Can lead to diffusion of responsibility and reduced individual accountability.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Role-Based Responsibility Model</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Professional contexts with established roles and duties. 
                    <strong>Strengths:</strong> Leverages existing professional standards, clear role expectations. 
                    <strong>Limitations:</strong> May not address novel AI-specific responsibilities and emerging roles.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Case Studies */}
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
                  <h3 className="text-lg font-semibold text-research-text mb-3">Autonomous Vehicle Accidents</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Complex responsibility attribution involving manufacturers, software developers, regulators, and users in accident scenarios.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Algorithmic Hiring Bias</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Distributed responsibility across HR departments, algorithm developers, and organizational leadership for discriminatory outcomes.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Medical AI Misdiagnosis</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Professional responsibility frameworks adapted for AI-assisted medical decision-making and diagnostic errors.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Policy Implications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Policy &amp; Governance Implications</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Regulatory Framework Development</h3>
                  <p className="body-text text-research-text-secondary">
                    Need for adaptive regulatory frameworks that can address varying levels of AI system opacity 
                    while maintaining effective oversight and accountability mechanisms. Regulations must balance 
                    innovation with responsibility attribution.
                  </p>
                </div>
                <div className="border-l-4 border-accent-lab-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Professional Standards Evolution</h3>
                  <p className="body-text text-research-text-secondary">
                    Professional codes of conduct and standards must evolve to address AI-specific responsibilities, 
                    including duties related to system transparency, bias mitigation, and harm prevention in 
                    opaque AI systems.
                  </p>
                </div>
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Institutional Design Principles</h3>
                  <p className="body-text text-research-text-secondary">
                    Organizations deploying AI systems need governance structures that explicitly address opacity 
                    challenges, establish clear responsibility chains, and create mechanisms for continuous 
                    accountability assessment and improvement.
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
                The challenge of opacity and responsibility in AI systems requires sophisticated frameworks that 
                can navigate the complex relationships between transparency, accountability, and effective governance. 
                Our research demonstrates that responsibility attribution in opaque systems is possible through 
                systematic assessment, adaptive mechanisms, and continuous monitoring.
              </p>
              <p className="body-text text-research-text-secondary">
                Future research will focus on developing real-time responsibility monitoring systems, creating 
                standardized opacity assessment tools, and investigating the effectiveness of different accountability 
                mechanisms across various AI application domains and cultural contexts.
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
                  href="/research/benchmarking-open-vs-closed-ai"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Article
                </Link>
                
                <Link
                  href="/research/ai-infrastructure-academia"
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
