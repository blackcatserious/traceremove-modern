'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, FileText, Shield, Lock, Eye, MessageSquare, Database, UserCheck, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const privacyPolicyArchitecture = `
graph TD
    A[Privacy Policy] --> B[Data Collection]
    A --> C[Data Processing]
    A --> D[Data Protection]
    B --> E[Personal Information]
    B --> F[Usage Data]
    B --> G[Technical Data]
    C --> H[Processing Purposes]
    C --> I[Legal Basis]
    C --> J[Data Sharing]
    D --> K[Security Measures]
    D --> L[Access Controls]
    D --> M[Retention Policies]
    E --> N[Comprehensive Privacy Framework]
    F --> N
    G --> N
    H --> O[Processing Governance]
    I --> O
    J --> O
    K --> P[Protection Architecture]
    L --> P
    M --> P
    N --> Q[Complete Privacy Policy]
    O --> Q
    P --> Q
    Q --> R{Privacy Compliance?}
    R -->|Compliant| S[Privacy-Compliant Operations]
    R -->|Review Needed| T[Privacy Assessment Process]
    R -->|Non-Compliant| U[Privacy Remediation]
    S --> V[Trustworthy Data Practices]
    T --> V
    U --> V
    V --> W[Privacy-Respecting Platform]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const privacyImplementationCode = `
class PrivacyPolicyFramework:
    def __init__(self, data_categories, processing_purposes, protection_measures):
        self.data_categories = data_categories
        self.processing_purposes = processing_purposes
        self.protection_measures = protection_measures
        self.privacy_assessor = PrivacyAssessor()
        self.compliance_monitor = ComplianceMonitor()
        self.consent_manager = ConsentManager()
        self.data_controller = DataController()
        
    def implement_privacy_framework(self, data_flows, user_interactions, regulatory_requirements):
        &quot;&quot;&quot;Implement comprehensive privacy framework with data governance, consent management, and protection measures.&quot;&quot;&quot;
        
        privacy_system = {
            'data_collection_governance': {},
            'processing_compliance': {},
            'protection_implementation': {},
            'user_rights_management': {},
            'continuous_monitoring': {}
        }
        
        # Data collection governance and transparency
        privacy_system['data_collection_governance'] = self.govern_data_collection(
            self.data_categories, data_flows,
            governance_dimensions=[
                'personal_information_handling',
                'usage_data_collection_protocols',
                'technical_data_processing',
                'consent_collection_mechanisms',
                'data_minimization_practices',
                'transparency_reporting_systems'
            ]
        )
        
        # Processing compliance and legal basis management
        privacy_system['processing_compliance'] = self.ensure_processing_compliance(
            privacy_system['data_collection_governance'], self.processing_purposes,
            compliance_aspects=[
                'processing_purpose_validation',
                'legal_basis_establishment',
                'data_sharing_governance',
                'third_party_processor_management',
                'cross_border_transfer_compliance',
                'retention_period_enforcement'
            ]
        )
        
        # Protection implementation and security measures
        privacy_system['protection_implementation'] = self.implement_protection_measures(
            privacy_system['processing_compliance'], user_interactions,
            protection_components=[
                'security_measure_deployment',
                'access_control_implementation',
                'encryption_protocol_application',
                'data_breach_prevention_systems',
                'incident_response_procedures',
                'vulnerability_assessment_processes'
            ]
        )
        
        # User rights management and empowerment
        privacy_system['user_rights_management'] = self.manage_user_rights(
            privacy_system,
            rights_features=[
                'access_request_processing',
                'rectification_mechanism_provision',
                'erasure_right_implementation',
                'portability_service_delivery',
                'objection_handling_procedures',
                'consent_withdrawal_facilitation'
            ]
        )
        
        return privacy_system
    
    def assess_data_processing_activities(self, processing_operations, data_subjects, risk_factors):
        &quot;&quot;&quot;Assess data processing activities through operation analysis, subject impact evaluation, and risk assessment.&quot;&quot;&quot;
        
        processing_assessment = {
            'operation_analysis': {},
            'subject_impact_evaluation': {},
            'risk_assessment': {},
            'compliance_gap_identification': {},
            'mitigation_strategy_development': {}
        }
        
        # Operation analysis and processing mapping
        processing_assessment['operation_analysis'] = self.analyze_processing_operations(
            processing_operations, data_subjects,
            analysis_dimensions=[
                'data_flow_mapping',
                'processing_purpose_alignment',
                'data_category_classification',
                'processor_relationship_analysis',
                'retention_schedule_evaluation',
                'automated_decision_making_assessment'
            ]
        )
        
        # Subject impact evaluation and rights assessment
        processing_assessment['subject_impact_evaluation'] = self.evaluate_subject_impact(
            processing_assessment['operation_analysis'], risk_factors,
            impact_aspects=[
                'privacy_impact_measurement',
                'individual_rights_effect_analysis',
                'discrimination_risk_evaluation',
                'autonomy_impact_assessment',
                'dignity_preservation_analysis',
                'vulnerable_group_protection_evaluation'
            ]
        )
        
        # Risk assessment and threat identification
        processing_assessment['risk_assessment'] = self.assess_privacy_risks(
            processing_assessment,
            risk_factors=[
                'data_breach_likelihood_analysis',
                'unauthorized_access_risk_evaluation',
                'data_misuse_potential_assessment',
                'compliance_violation_risk_analysis',
                'reputational_damage_evaluation',
                'financial_impact_assessment'
            ]
        )
        
        return processing_assessment
    
    def monitor_privacy_compliance(self, compliance_metrics, user_feedback, regulatory_updates):
        &quot;&quot;&quot;Monitor privacy compliance through metrics tracking, feedback analysis, and regulatory alignment.&quot;&quot;&quot;
        
        compliance_monitoring = {
            'metrics_tracking': {},
            'feedback_analysis': {},
            'regulatory_alignment': {},
            'performance_evaluation': {},
            'improvement_planning': {}
        }
        
        # Metrics tracking and performance measurement
        compliance_monitoring['metrics_tracking'] = self.track_compliance_metrics(
            compliance_metrics, user_feedback,
            tracking_dimensions=[
                'consent_rate_monitoring',
                'data_subject_request_processing_times',
                'security_incident_frequency_tracking',
                'privacy_policy_update_compliance',
                'staff_training_completion_rates',
                'audit_finding_resolution_tracking'
            ]
        )
        
        # Feedback analysis and stakeholder input integration
        compliance_monitoring['feedback_analysis'] = self.analyze_stakeholder_feedback(
            compliance_monitoring['metrics_tracking'], regulatory_updates,
            analysis_aspects=[
                'user_privacy_concern_analysis',
                'regulator_guidance_interpretation',
                'industry_best_practice_benchmarking',
                'expert_recommendation_evaluation',
                'community_feedback_integration',
                'transparency_report_effectiveness_assessment'
            ]
        )
        
        # Regulatory alignment and compliance maintenance
        compliance_monitoring['regulatory_alignment'] = self.maintain_regulatory_alignment(
            compliance_monitoring,
            alignment_factors=[
                'regulation_change_impact_assessment',
                'compliance_requirement_updating',
                'policy_revision_implementation',
                'staff_training_program_updates',
                'system_configuration_adjustments',
                'documentation_maintenance_processes'
            ]
        )
        
        return compliance_monitoring
`;

export default function PrivacyPolicy() {
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
              href="/"
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                Privacy Policy: Protecting Your Data &amp; Rights
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Last Updated Dec 2024
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  12 min read
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Privacy Policy
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share Policy
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Privacy', 'Data Protection', 'GDPR Compliance', 'User Rights', 'Security', 'Transparency'].map((tag) => (
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
                This privacy policy explains how Traceremove collects, uses, 
                processes, and protects your personal information. We are 
                committed to transparency, user control, and the highest 
                standards of data protection in all our research and 
                platform activities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Privacy Overview &amp; Commitment</h2>
              </div>
              
              <LottieAnimation 
                animationFile="privacy-policy.json"
                className="mx-auto mb-8"
                width={600}
                height={400}
              />
              
              <p className="body-text text-research-text-secondary mb-6">
                At Traceremove, we believe that privacy is a fundamental 
                human right. This privacy policy outlines our commitment 
                to protecting your personal information and respecting 
                your privacy rights. We collect and process personal 
                data only when necessary for our legitimate research 
                purposes and platform operations, always with appropriate 
                safeguards and transparency.
              </p>
              
              <p className="body-text text-research-text-secondary">
                This policy applies to all interactions with our website, 
                research platform, and services. We comply with applicable 
                data protection laws including the General Data Protection 
                Regulation (GDPR), California Consumer Privacy Act (CCPA), 
                and other relevant privacy regulations. We regularly review 
                and update our privacy practices to ensure continued 
                compliance and protection of your rights.
              </p>
            </motion.div>

            {/* Privacy Framework Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Privacy Framework Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our privacy framework integrates data collection governance, 
                processing compliance, and protection measures to create 
                comprehensive privacy management mechanisms. The system 
                emphasizes personal information handling, security measure 
                deployment, and user rights management through structured 
                compliance monitoring and privacy-respecting platform development.
              </p>
              
              <MermaidDiagram chart={privacyPolicyArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The privacy framework operates through four integrated layers: (1) data 
                collection including personal information, usage data, and technical data, 
                (2) data processing with processing purposes and legal basis, (3) data 
                protection featuring security measures and access controls, and (4) comprehensive 
                privacy policy leading to privacy-respecting platform development.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Information We Collect</h2>
              <div className="space-y-6">
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <UserCheck className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Personal Information</h3>
                        <p className="text-accent-ai-purple font-medium">Directly Provided Data</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-blue-500/20 px-3 py-1 rounded-full">
                      Direct
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    We collect personal information that you voluntarily 
                    provide to us, including your name, email address, 
                    professional affiliation, research interests, and 
                    any other information you choose to share through 
                    our contact forms, newsletter subscriptions, or 
                    research participation. We only collect information 
                    that is necessary for our stated purposes.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Contact information</span>
                    <span>•</span>
                    <span>Professional details</span>
                    <span>•</span>
                    <span>Research interests</span>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Eye className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Usage Data</h3>
                        <p className="text-accent-ai-purple font-medium">Platform Interaction Data</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-green-500/20 px-3 py-1 rounded-full">
                      Automatic
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    We automatically collect information about how you 
                    interact with our platform, including pages visited, 
                    time spent on pages, click patterns, search queries, 
                    and navigation paths. This data helps us improve 
                    our platform&apos;s usability and understand user needs. 
                    We use privacy-preserving analytics methods where possible.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Page interactions</span>
                    <span>•</span>
                    <span>Navigation patterns</span>
                    <span>•</span>
                    <span>Search behavior</span>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Database className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Technical Data</h3>
                        <p className="text-accent-ai-purple font-medium">System &amp; Device Information</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-purple-500/20 px-3 py-1 rounded-full">
                      Technical
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    We collect technical information necessary for platform 
                    functionality and security, including IP addresses, 
                    browser types, device information, operating systems, 
                    and connection details. This data is used for security 
                    monitoring, performance optimization, and ensuring 
                    platform compatibility across different devices and browsers.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span>Device information</span>
                    <span>•</span>
                    <span>Browser details</span>
                    <span>•</span>
                    <span>Connection data</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How We Use Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">How We Use Your Information</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Research &amp; Platform Operations</h3>
                  <p className="body-text text-research-text-secondary">
                    We use your information to operate and improve our 
                    research platform, provide requested services, respond 
                    to inquiries, and facilitate research collaborations. 
                    This includes maintaining user accounts, processing 
                    research participation requests, and delivering 
                    personalized content relevant to your research interests.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Communication &amp; Updates</h3>
                  <p className="body-text text-research-text-secondary">
                    We may use your contact information to send you 
                    important updates about our research, platform changes, 
                    new publications, and relevant opportunities. All 
                    marketing communications are opt-in, and you can 
                    unsubscribe at any time. We never share your contact 
                    information with third parties for marketing purposes.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Security &amp; Legal Compliance</h3>
                  <p className="body-text text-research-text-secondary">
                    We process certain data for security monitoring, 
                    fraud prevention, and legal compliance purposes. 
                    This includes analyzing usage patterns to detect 
                    suspicious activity, maintaining audit logs for 
                    regulatory compliance, and responding to legal 
                    requests when required by law.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Data Protection Measures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Data Protection &amp; Security Measures</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Technical Safeguards</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• End-to-end encryption for data transmission</p>
                    <p>• Encrypted storage for sensitive information</p>
                    <p>• Regular security audits and assessments</p>
                    <p>• Multi-factor authentication systems</p>
                    <p>• Secure backup and recovery procedures</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Organizational Measures</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Staff privacy training programs</p>
                    <p>• Access control and authorization policies</p>
                    <p>• Data processing agreements with vendors</p>
                    <p>• Incident response and breach notification procedures</p>
                    <p>• Regular policy reviews and updates</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Data Minimization</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Collection limited to necessary purposes</p>
                    <p>• Regular data retention review processes</p>
                    <p>• Automated deletion of expired data</p>
                    <p>• Privacy-by-design implementation</p>
                    <p>• Purpose limitation enforcement</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Transparency &amp; Control</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Clear privacy notices and policies</p>
                    <p>• User-friendly privacy controls</p>
                    <p>• Data portability and export options</p>
                    <p>• Consent management systems</p>
                    <p>• Regular transparency reporting</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Your Privacy Rights</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Eye className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Right to Access</h3>
                    <p className="body-text text-research-text-secondary">
                      You have the right to request access to the personal 
                      information we hold about you. We will provide you 
                      with a copy of your data in a commonly used format 
                      within 30 days of your request.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <UserCheck className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Right to Rectification</h3>
                    <p className="body-text text-research-text-secondary">
                      You can request correction of inaccurate or incomplete 
                      personal information. We will update your information 
                      promptly and notify any third parties who received 
                      the incorrect data.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Right to Erasure</h3>
                    <p className="body-text text-research-text-secondary">
                      You can request deletion of your personal information 
                      when it is no longer necessary for our purposes, 
                      you withdraw consent, or the processing is unlawful. 
                      Some data may be retained for legal compliance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Database className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Right to Data Portability</h3>
                    <p className="body-text text-research-text-secondary">
                      You can request your personal data in a structured, 
                      machine-readable format and have it transmitted to 
                      another organization where technically feasible.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Lock className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Right to Object</h3>
                    <p className="body-text text-research-text-secondary">
                      You can object to processing of your personal data 
                      for direct marketing purposes or when processing 
                      is based on legitimate interests. We will stop 
                      processing unless we have compelling legitimate grounds.
                    </p>
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
              <h2 className="section-title text-research-text mb-6">Privacy Implementation Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates our comprehensive privacy 
                framework with data governance, consent management, and protection 
                measures designed to ensure privacy compliance, user rights protection, 
                and continuous improvement in our privacy practices and data 
                protection standards.
              </p>
              
              <CodeBlock
                code={privacyImplementationCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Our privacy implementation framework provides systematic approaches 
                to data protection that enable us to maintain the highest standards 
                of privacy compliance, protect user rights, and build trust through 
                transparent and responsible data practices.
              </p>
            </motion.div>

            {/* Data Sharing &amp; Third Parties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Data Sharing &amp; Third Parties</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Service Providers</h3>
                  <p className="body-text text-research-text-secondary">
                    We may share your information with trusted service 
                    providers who assist us in operating our platform, 
                    conducting research, or providing services to you. 
                    These providers are contractually bound to protect 
                    your information and use it only for specified purposes. 
                    We conduct due diligence on all service providers.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Research Collaborations</h3>
                  <p className="body-text text-research-text-secondary">
                    For legitimate research purposes, we may share 
                    anonymized or aggregated data with academic institutions 
                    and research partners. Personal information is never 
                    shared without explicit consent, and all collaborations 
                    are governed by strict data sharing agreements that 
                    ensure appropriate protection of participant privacy.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Legal Requirements</h3>
                  <p className="body-text text-research-text-secondary">
                    We may disclose your information when required by law, 
                    legal process, or government request. We will notify 
                    you of such requests unless prohibited by law. We 
                    challenge overly broad requests and seek to minimize 
                    the scope of any required disclosure to protect your privacy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Privacy Compliance Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Privacy Compliance Monitoring</h2>
              
              <InteractiveChart
                dataFile="privacy_compliance_metrics.json"
                chartType="doughnut"
                title="Privacy Compliance Monitoring &amp; Performance Metrics"
                className="mb-8"
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Compliance Metrics</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Data subject request response times</p>
                    <p>• Consent collection and management rates</p>
                    <p>• Security incident frequency and resolution</p>
                    <p>• Privacy policy update compliance</p>
                    <p>• Staff training completion rates</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Audit &amp; Review</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Regular privacy impact assessments</p>
                    <p>• Third-party security audits</p>
                    <p>• Internal compliance reviews</p>
                    <p>• Data processing activity monitoring</p>
                    <p>• Regulatory compliance verification</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Continuous Improvement</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Privacy policy updates and revisions</p>
                    <p>• Technology upgrade implementations</p>
                    <p>• Process optimization initiatives</p>
                    <p>• Staff training program enhancements</p>
                    <p>• Best practice adoption</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Transparency Reporting</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Annual transparency reports</p>
                    <p>• Data breach notifications</p>
                    <p>• Privacy policy change notifications</p>
                    <p>• User rights exercise statistics</p>
                    <p>• Compliance certification updates</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact &amp; Requests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Privacy Requests &amp; Contact Information</h2>
              <div className="space-y-4">
                <p className="body-text text-research-text-secondary">
                  To exercise your privacy rights or if you have questions 
                  about this privacy policy, please contact us using the 
                  information below. We are committed to responding to 
                  your requests promptly and thoroughly.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="academic-card p-6">
                    <h3 className="text-lg font-semibold text-research-text mb-3">Contact Information</h3>
                    <div className="space-y-2 text-sm text-research-text-secondary">
                      <p>• Data Protection Officer: privacy@traceremove.dev</p>
                      <p>• Privacy Requests: requests@traceremove.dev</p>
                      <p>• General Inquiries: info@traceremove.dev</p>
                      <p>• Security Issues: security@traceremove.dev</p>
                    </div>
                  </div>
                  <div className="academic-card p-6">
                    <h3 className="text-lg font-semibold text-research-text mb-3">Request Process</h3>
                    <div className="space-y-2 text-sm text-research-text-secondary">
                      <p>• 48-hour acknowledgment commitment</p>
                      <p>• 30-day response time for most requests</p>
                      <p>• Identity verification for security</p>
                      <p>• Clear communication throughout process</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Supervisory Authority</h3>
                  <p className="body-text text-research-text-secondary">
                    If you are not satisfied with our response to your 
                    privacy concerns, you have the right to lodge a 
                    complaint with your local data protection authority. 
                    We encourage you to contact us first so we can 
                    address your concerns directly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Policy Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Policy Updates &amp; Changes</h2>
              <div className="space-y-4">
                <p className="body-text text-research-text-secondary">
                  We may update this privacy policy from time to time 
                  to reflect changes in our practices, technology, legal 
                  requirements, or other factors. We will notify you of 
                  any material changes through prominent notices on our 
                  website and, where appropriate, direct communication.
                </p>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Notification Process</h3>
                  <p className="body-text text-research-text-secondary">
                    For significant changes that affect your rights or 
                    how we process your data, we will provide at least 
                    30 days&apos; notice before the changes take effect. 
                    Minor updates may be posted with immediate effect, 
                    but we will always indicate the date of the last revision.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Your Continued Use</h3>
                  <p className="body-text text-research-text-secondary">
                    Your continued use of our platform after policy 
                    updates constitutes acceptance of the revised terms. 
                    If you do not agree with the changes, you may 
                    discontinue using our services and request deletion 
                    of your personal information.
                  </p>
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
                  href="/legal/ethics-statement"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Ethics Statement
                </Link>
                
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Back to Home
                  <Shield className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
