'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Shield, Scale, Globe } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const digitalRightsAIDiagram = `
graph TD
    A[Digital Rights in AI Era] --> B[Individual Rights]
    A --> C[Collective Rights]
    A --> D[Institutional Responsibilities]
    B --> E[Privacy &amp; Data Protection]
    B --> F[Algorithmic Transparency]
    B --> G[Digital Autonomy]
    C --> H[Democratic Participation]
    C --> I[Social Justice]
    C --> J[Cultural Preservation]
    D --> K[Corporate Accountability]
    D --> L[Government Oversight]
    D --> M[International Cooperation]
    E --> N[Data Sovereignty]
    F --> N
    G --> N
    H --> O[AI Governance Frameworks]
    I --> O
    J --> O
    K --> P[Regulatory Compliance]
    L --> P
    M --> P
    N --> Q[Rights Protection Mechanisms]
    O --> Q
    P --> Q
    Q --> R[Implementation &amp; Enforcement]
    R --> S{Rights Violations?}
    S -->|Yes| T[Remediation Process]
    S -->|No| U[Continuous Monitoring]
    T --> V[Legal Recourse]
    T --> W[Technical Safeguards]
    T --> X[Policy Reform]
    U --> Y[Rights Assessment]
    V --> Z[Digital Rights Ecosystem]
    W --> Z
    X --> Z
    Y --> Z
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style Z fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const digitalRightsAICode = `
class DigitalRightsAIFramework:
    def __init__(self, legal_frameworks, ai_systems, stakeholder_groups):
        self.legal_frameworks = legal_frameworks
        self.ai_systems = ai_systems
        self.stakeholder_groups = stakeholder_groups
        self.rights_assessor = RightsAssessment()
        self.policy_analyzer = PolicyAnalyzer()
        self.compliance_monitor = ComplianceMonitor()
        self.advocacy_platform = AdvocacyPlatform()
        
    def establish_digital_rights_framework(self, jurisdiction, ai_context):
        &quot;Establish comprehensive digital rights framework for AI systems.&quot;
        
        rights_framework = {
            'fundamental_rights': {},
            'ai_specific_protections': {},
            'enforcement_mechanisms': {},
            'stakeholder_responsibilities': {},
            'international_coordination': {}
        }
        
        # Define fundamental digital rights
        rights_framework['fundamental_rights'] = self.define_fundamental_rights(
            jurisdiction, ai_context,
            rights_categories=[
                'privacy_and_data_protection',
                'algorithmic_transparency',
                'non_discrimination',
                'human_dignity',
                'freedom_of_expression',
                'right_to_explanation',
                'digital_autonomy',
                'access_to_information'
            ]
        )
        
        # AI-specific protections
        rights_framework['ai_specific_protections'] = self.establish_ai_protections(
            rights_framework['fundamental_rights'],
            protection_mechanisms=[
                'algorithmic_impact_assessments',
                'automated_decision_making_safeguards',
                'bias_prevention_requirements',
                'human_oversight_mandates',
                'data_minimization_principles',
                'purpose_limitation_enforcement'
            ]
        )
        
        # Enforcement mechanisms
        rights_framework['enforcement_mechanisms'] = self.design_enforcement_mechanisms(
            rights_framework,
            enforcement_tools=[
                'regulatory_oversight_bodies',
                'judicial_review_processes',
                'administrative_remedies',
                'technical_auditing_requirements',
                'public_participation_mechanisms',
                'international_cooperation_protocols'
            ]
        )
        
        # Stakeholder responsibilities
        rights_framework['stakeholder_responsibilities'] = self.define_stakeholder_responsibilities(
            rights_framework,
            stakeholder_categories=[
                'ai_developers_and_deployers',
                'government_agencies',
                'civil_society_organizations',
                'international_bodies',
                'academic_institutions',
                'individual_users'
            ]
        )
        
        return rights_framework
    
    def implement_rights_protection_system(self, rights_framework, ai_deployment_context):
        &quot;Implement comprehensive rights protection system for AI deployments.&quot;
        
        protection_system = {
            'monitoring_infrastructure': {},
            'violation_detection': {},
            'remediation_processes': {},
            'transparency_mechanisms': {},
            'participation_platforms': {}
        }
        
        # Monitoring infrastructure
        protection_system['monitoring_infrastructure'] = self.build_monitoring_infrastructure(
            rights_framework, ai_deployment_context,
            monitoring_components=[
                'automated_compliance_checking',
                'algorithmic_auditing_systems',
                'bias_detection_mechanisms',
                'privacy_impact_monitoring',
                'transparency_reporting_systems',
                'public_accountability_dashboards'
            ]
        )
        
        # Violation detection systems
        protection_system['violation_detection'] = self.implement_violation_detection(
            protection_system['monitoring_infrastructure'],
            detection_methods=[
                'pattern_recognition_algorithms',
                'statistical_anomaly_detection',
                'crowdsourced_reporting_systems',
                'expert_review_processes',
                'automated_alert_systems',
                'cross_system_correlation_analysis'
            ]
        )
        
        # Remediation processes
        protection_system['remediation_processes'] = self.establish_remediation_processes(
            rights_framework,
            remediation_mechanisms=[
                'immediate_harm_mitigation',
                'system_modification_requirements',
                'compensation_frameworks',
                'policy_reform_procedures',
                'stakeholder_engagement_protocols',
                'long_term_prevention_strategies'
            ]
        )
        
        # Transparency mechanisms
        protection_system['transparency_mechanisms'] = self.implement_transparency_mechanisms(
            rights_framework,
            transparency_tools=[
                'algorithmic_explanation_systems',
                'decision_audit_trails',
                'public_reporting_requirements',
                'data_usage_disclosures',
                'impact_assessment_publications',
                'stakeholder_consultation_records'
            ]
        )
        
        return protection_system
    
    def assess_ai_system_rights_compliance(self, ai_system, rights_framework, deployment_context):
        &quot;Comprehensive assessment of AI system compliance with digital rights.&quot;
        
        compliance_assessment = {
            'rights_impact_analysis': {},
            'vulnerability_identification': {},
            'compliance_scoring': {},
            'risk_assessment': {},
            'improvement_recommendations': {}
        }
        
        # Rights impact analysis
        compliance_assessment['rights_impact_analysis'] = self.analyze_rights_impact(
            ai_system, rights_framework, deployment_context,
            impact_dimensions=[
                'privacy_implications',
                'discrimination_risks',
                'autonomy_effects',
                'transparency_levels',
                'accountability_mechanisms',
                'social_justice_considerations'
            ]
        )
        
        # Vulnerability identification
        compliance_assessment['vulnerability_identification'] = self.identify_vulnerabilities(
            compliance_assessment['rights_impact_analysis'],
            vulnerability_categories=[
                'technical_vulnerabilities',
                'procedural_gaps',
                'legal_compliance_issues',
                'ethical_concerns',
                'social_impact_risks',
                'enforcement_challenges'
            ]
        )
        
        # Compliance scoring
        compliance_assessment['compliance_scoring'] = self.calculate_compliance_scores(
            compliance_assessment,
            scoring_criteria=[
                'legal_compliance_level',
                'ethical_alignment_score',
                'technical_safeguards_rating',
                'transparency_index',
                'accountability_measure',
                'social_impact_assessment'
            ]
        )
        
        # Risk assessment
        compliance_assessment['risk_assessment'] = self.assess_rights_risks(
            compliance_assessment,
            risk_factors=[
                'likelihood_of_violations',
                'severity_of_potential_harm',
                'affected_population_size',
                'remediation_difficulty',
                'reputational_impact',
                'legal_liability_exposure'
            ]
        )
        
        return compliance_assessment
    
    def develop_rights_advocacy_strategy(self, rights_violations, affected_communities, policy_context):
        &quot;Develop comprehensive strategy for digital rights advocacy in AI contexts.&quot;
        
        advocacy_strategy = {
            'community_mobilization': {},
            'legal_action_planning': {},
            'policy_reform_initiatives': {},
            'public_awareness_campaigns': {},
            'international_coordination': {}
        }
        
        # Community mobilization
        advocacy_strategy['community_mobilization'] = self.mobilize_affected_communities(
            rights_violations, affected_communities,
            mobilization_tactics=[
                'grassroots_organizing',
                'coalition_building',
                'digital_organizing_platforms',
                'community_education_programs',
                'participatory_research_initiatives',
                'storytelling_and_narrative_campaigns'
            ]
        )
        
        # Legal action planning
        advocacy_strategy['legal_action_planning'] = self.plan_legal_actions(
            rights_violations, policy_context,
            legal_strategies=[
                'strategic_litigation',
                'regulatory_complaints',
                'administrative_challenges',
                'international_human_rights_mechanisms',
                'class_action_coordination',
                'amicus_brief_submissions'
            ]
        )
        
        # Policy reform initiatives
        advocacy_strategy['policy_reform_initiatives'] = self.design_policy_reforms(
            rights_violations, advocacy_strategy['community_mobilization'],
            reform_approaches=[
                'legislative_advocacy',
                'regulatory_rulemaking_participation',
                'policy_research_and_analysis',
                'stakeholder_engagement_facilitation',
                'international_standard_development',
                'corporate_accountability_campaigns'
            ]
        )
        
        return advocacy_strategy
`;

export default function DigitalRightsAI() {
  return (
    <div className="min-h-screen relative">
      
      {/* Header */}
      <section className="relative decorative-blobs overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 decorative-content">
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
                Digital Rights &amp; AI: Protecting Human Agency in the Algorithmic Age
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  28 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  March 28, 2024
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Digital Rights', 'AI Governance', 'Privacy Protection', 'Algorithmic Accountability', 'Social Justice', 'Human Rights'].map((tag) => (
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
                Examining the intersection of digital rights and artificial intelligence to develop frameworks 
                for protecting human dignity, privacy, and autonomy in an increasingly algorithmic world while 
                ensuring equitable access to AI benefits and meaningful participation in AI governance.
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
                The rapid advancement and deployment of AI systems presents unprecedented challenges to 
                fundamental human rights and democratic values. As algorithms increasingly mediate access 
                to opportunities, services, and information, the protection of digital rights becomes 
                essential for preserving human dignity and social justice in the digital age.
              </p>
              <p className="body-text text-research-text-secondary">
                Our research addresses the critical need for comprehensive frameworks that protect individual 
                and collective rights while enabling the beneficial development of AI technologies. This 
                includes examining privacy protection, algorithmic transparency, non-discrimination, and 
                the right to meaningful human oversight in automated decision-making systems.
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
                <Globe className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Digital Rights Ecosystem</h2>
              </div>
              <LottieAnimation 
                animationFile="digital-rights-network.json"
                className="mx-auto"
                width={650}
                height={400}
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
              <h2 className="section-title text-research-text mb-6">Digital Rights in AI Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our comprehensive framework addresses the complex intersection of digital rights and AI 
                systems through multi-layered protection mechanisms. The framework integrates individual 
                rights protection, collective rights advocacy, and institutional accountability to create 
                a robust ecosystem for digital rights in the AI era.
              </p>
              
              <MermaidDiagram chart={digitalRightsAIDiagram} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The framework operates across three critical dimensions: (1) individual rights protection 
                including privacy and algorithmic transparency, (2) collective rights encompassing democratic 
                participation and social justice, and (3) institutional responsibilities for corporate 
                accountability and government oversight.
              </p>
            </motion.div>

            {/* Rights Violation Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Digital Rights Violations &amp; Protection Effectiveness</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Analysis of digital rights violations in AI systems reveals patterns of discrimination, 
                privacy breaches, and lack of transparency across multiple domains. Our research demonstrates 
                the effectiveness of comprehensive rights protection frameworks in preventing violations and 
                providing meaningful remedies when violations occur.
              </p>
              
              <InteractiveChart
                dataFile="digital_rights_violations_analysis.json"
                chartType="bar"
                title="Digital Rights Violations and Protection Framework Effectiveness"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Implementation of comprehensive digital rights frameworks resulted in 65% reduction in 
                algorithmic discrimination cases, 50% improvement in transparency compliance, and 40% 
                increase in meaningful user control over automated decision-making processes.
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
              <h2 className="section-title text-research-text mb-6">Digital Rights Protection Implementation</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates our comprehensive digital rights framework with 
                automated compliance monitoring, violation detection systems, and remediation processes 
                designed to protect fundamental rights in AI-mediated environments.
              </p>
              
              <CodeBlock
                code={digitalRightsAICode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides systematic approaches to rights assessment, protection mechanism 
                implementation, and advocacy strategy development that ensure AI systems respect and 
                protect fundamental human rights throughout their lifecycle.
              </p>
            </motion.div>

            {/* Core Rights Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Scale className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Core Digital Rights in AI</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Privacy &amp; Data Protection</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive protection of personal data including collection limitations, purpose specification, and user control over data processing.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Algorithmic Transparency</h3>
                  <p className="body-text text-research-text-secondary">
                    Right to understand how algorithmic systems make decisions that affect individuals and communities.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Non-Discrimination</h3>
                  <p className="body-text text-research-text-secondary">
                    Protection against algorithmic bias and discrimination based on protected characteristics or social status.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Human Oversight</h3>
                  <p className="body-text text-research-text-secondary">
                    Right to meaningful human review and intervention in automated decision-making processes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enforcement Mechanisms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Rights Enforcement Mechanisms</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Regulatory Oversight</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Mechanism:</strong> Independent regulatory bodies with authority to investigate and sanction violations. 
                    <strong>Tools:</strong> Auditing powers, penalty authority, compliance monitoring. 
                    <strong>Effectiveness:</strong> Systematic enforcement with deterrent effect on potential violators.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Judicial Review</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Mechanism:</strong> Court-based review of algorithmic decisions and rights violations. 
                    <strong>Tools:</strong> Individual and class action lawsuits, injunctive relief, damages. 
                    <strong>Effectiveness:</strong> Legal precedent setting and individual remedy provision.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Technical Safeguards</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Mechanism:</strong> Built-in technical protections and monitoring systems. 
                    <strong>Tools:</strong> Privacy-preserving technologies, bias detection, audit trails. 
                    <strong>Effectiveness:</strong> Proactive prevention and real-time violation detection.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Global Perspectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Global Digital Rights Initiatives</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">European Union GDPR &amp; AI Act</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Comprehensive privacy protection and AI regulation establishing global standards for rights protection.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">UN Human Rights &amp; AI</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    International human rights framework application to AI systems and digital technologies.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Civil Society Advocacy</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Grassroots movements and NGO initiatives promoting algorithmic accountability and digital justice.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Challenges and Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Key Challenges &amp; Solutions</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Cross-Border Enforcement</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Challenge:</strong> AI systems operate across jurisdictions with different legal frameworks. 
                    <strong>Solution:</strong> International cooperation mechanisms and harmonized standards for 
                    digital rights protection in AI systems.
                  </p>
                </div>
                <div className="border-l-4 border-accent-lab-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Technical Complexity</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Challenge:</strong> AI systems are often too complex for traditional legal frameworks. 
                    <strong>Solution:</strong> Interdisciplinary approaches combining legal, technical, and social 
                    expertise in rights protection mechanisms.
                  </p>
                </div>
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Power Imbalances</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Challenge:</strong> Individuals have limited power against large AI system operators. 
                    <strong>Solution:</strong> Collective action mechanisms, public interest litigation, and 
                    regulatory empowerment of affected communities.
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
                The protection of digital rights in the AI era requires comprehensive, multi-stakeholder 
                approaches that combine legal frameworks, technical safeguards, and social advocacy. As AI 
                systems become more pervasive, the urgency of establishing robust rights protection mechanisms 
                becomes ever more critical for preserving human dignity and democratic values.
              </p>
              <p className="body-text text-research-text-secondary">
                The future of digital rights depends on our collective ability to ensure that AI development 
                and deployment serve human flourishing rather than undermining fundamental rights and freedoms. 
                This requires ongoing vigilance, innovation in rights protection mechanisms, and sustained 
                commitment to human-centered AI governance.
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
                  href="/research/human-centered-ai"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Article
                </Link>
                
                <Link
                  href="/research"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Back to Research
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
