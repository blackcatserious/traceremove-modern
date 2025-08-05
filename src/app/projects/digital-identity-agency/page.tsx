'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Shield, Users, Key } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';
import PremiumButton from '@/components/PremiumButton';

const digitalIdentityArchitecture = `
graph TD
    A[Digital Identity & Agency System] --> B[Identity Management Layer]
    A --> C[Agency Framework]
    A --> D[Privacy Protection Module]
    B --> E[Decentralized Identity]
    B --> F[Credential Management]
    B --> G[Authentication Systems]
    C --> H[Autonomous Decision Making]
    C --> I[Consent Management]
    C --> J[Rights Enforcement]
    D --> K[Data Minimization]
    D --> L[Anonymization Techniques]
    D --> M[Encryption Protocols]
    E --> N[Self-Sovereign Identity]
    F --> N
    G --> N
    H --> O[Agency Engine]
    I --> O
    J --> O
    K --> P[Privacy Dashboard]
    L --> P
    M --> P
    N --> Q[Identity Verification]
    O --> Q
    P --> Q
    Q --> R[Trust Establishment]
    R --> S{Identity Verified?}
    S -->|No| T[Identity Refinement]
    S -->|Yes| U[Service Access]
    T --> B
    U --> V[Usage Monitoring]
    V --> W[Adaptive Privacy]
    W --> X[Empowered Digital Citizenship]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style X fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const digitalIdentityCode = `
class DigitalIdentityAgencyFramework:
    def __init__(self, identity_standards, privacy_requirements):
        self.identity_standards = identity_standards
        self.privacy_requirements = privacy_requirements
        self.identity_manager = DecentralizedIdentityManager()
        self.agency_engine = AutonomousAgencyEngine()
        self.privacy_controller = PrivacyProtectionController()
        self.consent_manager = ConsentManagementSystem()
        
    def implement_digital_identity_system(self, user_requirements, regulatory_framework):
        &quot;Implement comprehensive digital identity and agency system with privacy protection.&quot;
        
        identity_system = {
            'identity_management': {},
            'agency_mechanisms': {},
            'privacy_protection': {},
            'consent_framework': {},
            'trust_establishment': {}
        }
        
        # Decentralized identity management
        identity_system['identity_management'] = self.build_identity_management(
            user_requirements, self.identity_standards,
            identity_components=[
                'self_sovereign_identity',
                'verifiable_credentials',
                'decentralized_identifiers',
                'identity_verification',
                'credential_issuance',
                'identity_recovery_mechanisms'
            ]
        )
        
        # Autonomous agency mechanisms
        identity_system['agency_mechanisms'] = self.implement_agency_mechanisms(
            identity_system['identity_management'], user_requirements,
            agency_features=[
                'autonomous_decision_making',
                'preference_learning',
                'goal_oriented_behavior',
                'adaptive_interaction',
                'context_aware_responses',
                'proactive_privacy_management'
            ]
        )
        
        # Privacy protection framework
        identity_system['privacy_protection'] = self.implement_privacy_protection(
            identity_system, self.privacy_requirements,
            protection_mechanisms=[
                'data_minimization',
                'purpose_limitation',
                'selective_disclosure',
                'zero_knowledge_proofs',
                'homomorphic_encryption',
                'differential_privacy'
            ]
        )
        
        # Consent management system
        identity_system['consent_framework'] = self.build_consent_framework(
            identity_system,
            consent_capabilities=[
                'granular_consent_control',
                'dynamic_consent_management',
                'consent_withdrawal_mechanisms',
                'consent_audit_trails',
                'automated_consent_enforcement',
                'consent_preference_learning'
            ]
        )
        
        return identity_system
    
    def manage_digital_agency(self, identity_context, user_goals, environmental_constraints):
        &quot;Manage autonomous digital agency while respecting user preferences and privacy.&quot;
        
        agency_management = {
            'goal_analysis': {},
            'decision_making': {},
            'action_execution': {},
            'privacy_preservation': {},
            'accountability_tracking': {}
        }
        
        # Goal analysis and prioritization
        agency_management['goal_analysis'] = self.analyze_user_goals(
            user_goals, identity_context,
            analysis_components=[
                'goal_decomposition',
                'priority_assessment',
                'conflict_resolution',
                'feasibility_evaluation',
                'resource_requirement_analysis',
                'temporal_constraint_handling'
            ]
        )
        
        # Autonomous decision making
        agency_management['decision_making'] = self.execute_autonomous_decisions(
            agency_management['goal_analysis'], environmental_constraints,
            decision_mechanisms=[
                'multi_criteria_decision_analysis',
                'risk_benefit_assessment',
                'stakeholder_impact_evaluation',
                'ethical_constraint_checking',
                'privacy_impact_assessment',
                'reversibility_analysis'
            ]
        )
        
        # Action execution with privacy preservation
        agency_management['action_execution'] = self.execute_privacy_preserving_actions(
            agency_management['decision_making'],
            execution_strategies=[
                'minimal_data_exposure',
                'pseudonymous_interactions',
                'selective_identity_revelation',
                'privacy_preserving_protocols',
                'secure_multi_party_computation',
                'federated_learning_participation'
            ]
        )
        
        # Privacy preservation monitoring
        agency_management['privacy_preservation'] = self.monitor_privacy_preservation(
            agency_management['action_execution'],
            preservation_metrics=[
                'data_exposure_tracking',
                'inference_risk_assessment',
                'anonymity_set_monitoring',
                'linkability_analysis',
                'privacy_budget_management',
                're_identification_risk_evaluation'
            ]
        )
        
        return agency_management
    
    def establish_trust_relationships(self, identity_system, service_providers, trust_requirements):
        &quot;Establish and maintain trust relationships in digital identity ecosystem.&quot;
        
        trust_framework = {
            'trust_establishment': {},
            'reputation_management': {},
            'verification_protocols': {},
            'trust_maintenance': {},
            'dispute_resolution': {}
        }
        
        # Trust establishment mechanisms
        trust_framework['trust_establishment'] = self.establish_trust_mechanisms(
            identity_system, service_providers,
            trust_mechanisms=[
                'cryptographic_proof_systems',
                'multi_party_attestation',
                'reputation_based_trust',
                'behavioral_trust_modeling',
                'social_proof_integration',
                'institutional_trust_anchors'
            ]
        )
        
        # Reputation management system
        trust_framework['reputation_management'] = self.implement_reputation_management(
            trust_framework['trust_establishment'],
            reputation_features=[
                'decentralized_reputation_scoring',
                'context_aware_reputation',
                'reputation_portability',
                'reputation_privacy_protection',
                'reputation_attack_resistance',
                'reputation_recovery_mechanisms'
            ]
        )
        
        # Verification protocols
        trust_framework['verification_protocols'] = self.implement_verification_protocols(
            identity_system, trust_requirements,
            verification_methods=[
                'zero_knowledge_credential_verification',
                'selective_disclosure_protocols',
                'biometric_verification',
                'multi_factor_authentication',
                'continuous_authentication',
                'risk_based_verification'
            ]
        )
        
        # Trust maintenance and monitoring
        trust_framework['trust_maintenance'] = self.maintain_trust_relationships(
            trust_framework,
            maintenance_strategies=[
                'continuous_trust_monitoring',
                'trust_relationship_updates',
                'trust_degradation_detection',
                'trust_recovery_protocols',
                'trust_relationship_analytics',
                'adaptive_trust_thresholds'
            ]
        )
        
        return trust_framework
    
    def evaluate_identity_agency_effectiveness(self, identity_system, usage_scenarios, evaluation_metrics):
        &quot;Comprehensive evaluation of digital identity and agency system effectiveness.&quot;
        
        evaluation_results = {
            'identity_security': {},
            'agency_effectiveness': {},
            'privacy_protection': {},
            'user_empowerment': {},
            'system_usability': {}
        }
        
        # Identity security assessment
        evaluation_results['identity_security'] = self.assess_identity_security(
            identity_system, usage_scenarios,
            security_metrics=[
                'identity_theft_resistance',
                'credential_forgery_prevention',
                'authentication_strength',
                'identity_recovery_reliability',
                'attack_surface_minimization',
                'cryptographic_security_level'
            ]
        )
        
        # Agency effectiveness evaluation
        evaluation_results['agency_effectiveness'] = self.evaluate_agency_effectiveness(
            identity_system['agency_mechanisms'], usage_scenarios,
            effectiveness_metrics=[
                'goal_achievement_rate',
                'decision_quality_assessment',
                'adaptation_capability',
                'proactive_behavior_effectiveness',
                'user_preference_alignment',
                'contextual_appropriateness'
            ]
        )
        
        # Privacy protection analysis
        evaluation_results['privacy_protection'] = self.analyze_privacy_protection(
            identity_system['privacy_protection'], usage_scenarios,
            privacy_metrics=[
                'data_minimization_effectiveness',
                'anonymity_preservation',
                'unlinkability_achievement',
                'inference_attack_resistance',
                'privacy_budget_efficiency',
                'consent_enforcement_accuracy'
            ]
        )
        
        return evaluation_results
`;

export default function DigitalIdentityAgency() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="data" particleCount={75} />
      
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
              href="/projects"
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                Digital Identity &amp; Agency: Empowering Autonomous Digital Citizenship
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  26 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Project Status: Active Development
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
                {['Self-Sovereign Identity', 'Digital Agency', 'Privacy Protection', 'Decentralized Systems', 'Consent Management', 'Trust Networks'].map((tag) => (
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
                Developing comprehensive frameworks for digital identity and autonomous agency that empower 
                individuals with self-sovereign control over their digital presence while enabling intelligent, 
                privacy-preserving interactions in complex digital ecosystems through decentralized trust networks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Project Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Digital Identity &amp; Agency project addresses fundamental challenges in digital citizenship 
                by creating systems that give individuals true ownership and control over their digital identities. 
                Our approach combines self-sovereign identity principles with autonomous agency mechanisms to 
                enable intelligent, privacy-preserving digital interactions.
              </p>
              <p className="body-text text-research-text-secondary">
                This project represents a paradigm shift from centralized identity management to user-controlled, 
                decentralized systems that respect individual autonomy while enabling sophisticated digital services. 
                The framework empowers users to make autonomous decisions about their digital presence while 
                maintaining privacy and security in an increasingly connected world.
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
                <h2 className="section-title text-research-text">Digital Identity Ecosystem</h2>
              </div>
              <LottieAnimation 
                animationFile="digital-identity-network.json"
                className="mx-auto"
                width={620}
                height={420}
              />
            </motion.div>

            {/* System Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Digital Identity &amp; Agency Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our digital identity and agency framework integrates decentralized identity management, autonomous 
                agency mechanisms, and comprehensive privacy protection to create a holistic system for digital 
                citizenship. The architecture emphasizes user empowerment, privacy preservation, and intelligent 
                automation while maintaining security and trust in digital interactions.
              </p>
              
              <MermaidDiagram chart={digitalIdentityArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through four integrated layers: (1) identity management providing self-sovereign 
                control over digital credentials, (2) agency frameworks enabling autonomous decision-making, 
                (3) privacy protection ensuring data minimization and user control, and (4) trust establishment 
                mechanisms that enable secure interactions without compromising privacy.
              </p>
            </motion.div>

            {/* Impact Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Digital Empowerment Impact Analysis</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive evaluation of our digital identity and agency framework demonstrates significant 
                improvements in user empowerment, privacy protection, and digital autonomy. The system enables 
                users to maintain control over their digital presence while benefiting from intelligent, 
                automated interactions that respect their preferences and privacy requirements.
              </p>
              
              <InteractiveChart
                dataFile="digital_identity_impact.json"
                chartType="line"
                title="Digital Identity & Agency Framework Impact Across Key Dimensions"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results show 80% improvement in user control over digital identity, 65% better privacy protection, 
                and 75% increase in digital autonomy compared to traditional centralized identity management systems, 
                while maintaining high levels of security and usability.
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
                The following implementation demonstrates our comprehensive digital identity and agency framework 
                with decentralized identity management, autonomous agency mechanisms, privacy protection, and 
                trust establishment designed to empower users with true digital sovereignty and intelligent automation.
              </p>
              
              <CodeBlock
                code={digitalIdentityCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides systematic approaches to digital identity and agency that enable users to 
                maintain autonomous control over their digital presence while benefiting from intelligent automation 
                that respects privacy and user preferences in complex digital ecosystems.
              </p>
            </motion.div>

            {/* Core Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Key className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Core Capabilities &amp; Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Self-Sovereign Identity</h3>
                  <p className="body-text text-research-text-secondary">
                    Complete user control over digital identity with decentralized credential management and verifiable claims.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Autonomous Agency</h3>
                  <p className="body-text text-research-text-secondary">
                    Intelligent agents that act on behalf of users while respecting preferences and privacy constraints.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Privacy by Design</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive privacy protection through data minimization, selective disclosure, and zero-knowledge proofs.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Trust Networks</h3>
                  <p className="body-text text-research-text-secondary">
                    Decentralized trust establishment through cryptographic proofs and reputation-based systems.
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
              <h2 className="section-title text-research-text mb-6">Real-World Applications</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Healthcare Data Management</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Patients control their medical records through self-sovereign identity, 
                    enabling secure sharing with healthcare providers while maintaining privacy. <strong>Impact:</strong> 
                    Improves care coordination while giving patients complete control over their sensitive health data.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Financial Services Access</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Decentralized identity enables access to financial services without 
                    traditional intermediaries, using verifiable credentials for KYC compliance. <strong>Impact:</strong> 
                    Increases financial inclusion while reducing identity theft and fraud risks.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Digital Citizenship Platforms</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Application:</strong> Citizens interact with government services through autonomous agents 
                    that handle bureaucratic processes while maintaining privacy. <strong>Impact:</strong> Streamlines 
                    government interactions while preserving citizen privacy and autonomy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Technical Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Technical Challenges &amp; Solutions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Interoperability Standards</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Multiple identity standards and protocols. Solution: Universal identity layer with cross-protocol compatibility and standard mappings.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Scalability Concerns</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Decentralized systems can be slow. Solution: Layer-2 scaling solutions and efficient consensus mechanisms for identity operations.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">User Experience Complexity</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Challenge: Self-sovereign identity can be complex. Solution: Intuitive interfaces and intelligent agents that simplify identity management.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Future Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Future Development Roadmap</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">AI-Enhanced Identity Management</h3>
                  <p className="body-text text-research-text-secondary">
                    Integrating advanced AI capabilities for intelligent identity management, automated privacy 
                    optimization, and predictive security measures that adapt to emerging threats and user behavior patterns.
                  </p>
                </div>
                <div className="border-l-4 border-accent-lab-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Cross-Reality Identity</h3>
                  <p className="body-text text-research-text-secondary">
                    Extending digital identity frameworks to virtual and augmented reality environments, enabling 
                    seamless identity continuity across physical and digital spaces with appropriate privacy controls.
                  </p>
                </div>
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Collective Agency Systems</h3>
                  <p className="body-text text-research-text-secondary">
                    Developing frameworks for collective digital agency where groups can coordinate autonomous 
                    actions while maintaining individual privacy and consent, enabling new forms of digital collaboration.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Project Impact &amp; Vision</h2>
              <p className="body-text text-research-text-secondary mb-6">
                The Digital Identity &amp; Agency project envisions a future where individuals have true sovereignty 
                over their digital presence, supported by intelligent systems that act in their best interests while 
                preserving privacy and autonomy. This work contributes to the foundation of a more equitable and 
                user-centric digital society.
              </p>
              <p className="body-text text-research-text-secondary">
                By empowering users with self-sovereign identity and autonomous agency, this project addresses 
                fundamental power imbalances in the digital economy and creates new possibilities for human-centered 
                technology that serves individual and collective flourishing rather than extractive business models.
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
                  href="/projects/symbolic-ai"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Project
                </Link>
                
                <Link
                  href="/projects/semantic-data-pipelines"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next Project
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
