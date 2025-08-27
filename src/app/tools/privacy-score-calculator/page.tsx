'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Shield, Lock, Eye, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const privacyScoreArchitecture = `
graph TD
    A[Privacy Score Calculator] --> B[Data Collection Analysis]
    A --> C[Privacy Risk Assessment]
    A --> D[Compliance Evaluation]
    B --> E[Data Type Classification]
    B --> F[Collection Method Analysis]
    B --> G[Data Volume Assessment]
    C --> H[Vulnerability Identification]
    C --> I[Risk Quantification]
    C --> J[Impact Analysis]
    D --> K[Regulatory Compliance]
    D --> L[Industry Standards]
    D --> M[Best Practice Alignment]
    E --> N[Privacy Impact Score]
    F --> N
    G --> N
    H --> O[Risk Mitigation Score]
    I --> O
    J --> O
    K --> P[Compliance Score]
    L --> P
    M --> P
    N --> Q[Comprehensive Assessment]
    O --> Q
    P --> Q
    Q --> R[Privacy Score Calculation]
    R --> S{Score Acceptable?}
    S -->|No| T[Improvement Recommendations]
    S -->|Yes| U[Privacy Certification]
    T --> V[Implementation Guidance]
    U --> W[Privacy Excellence]
    V --> B
    W --> X[Trusted Systems]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style X fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const privacyCalculatorCode = `
class PrivacyScoreCalculator:
    def __init__(self, privacy_frameworks, compliance_standards):
        self.privacy_frameworks = privacy_frameworks
        self.compliance_standards = compliance_standards
        self.risk_assessor = PrivacyRiskAssessor()
        self.compliance_checker = ComplianceChecker()
        self.recommendation_engine = RecommendationEngine()
        self.score_calculator = ScoreCalculator()
        
    def implement_privacy_assessment_system(self, system_specifications, privacy_requirements):
        """Implement comprehensive privacy score calculation system with multi-dimensional assessment."""
        
        assessment_system = {
            'data_analysis': {},
            'risk_evaluation': {},
            'compliance_assessment': {},
            'score_calculation': {},
            'recommendation_generation': {}
        }
        
        # Comprehensive data analysis
        assessment_system['data_analysis'] = self.build_data_analysis(
            system_specifications, self.privacy_frameworks,
            analysis_components=[
                'personal_data_identification',
                'sensitive_data_classification',
                'data_flow_mapping',
                'collection_purpose_analysis',
                'retention_period_assessment',
                'third_party_sharing_evaluation'
            ]
        )
        
        # Multi-dimensional risk evaluation
        assessment_system['risk_evaluation'] = self.implement_risk_evaluation(
            assessment_system['data_analysis'], privacy_requirements,
            risk_dimensions=[
                'data_breach_vulnerability',
                'unauthorized_access_risks',
                'data_misuse_potential',
                'consent_management_gaps',
                'anonymization_effectiveness',
                'cross_border_transfer_risks'
            ]
        )
        
        # Regulatory compliance assessment
        assessment_system['compliance_assessment'] = self.build_compliance_assessment(
            assessment_system['risk_evaluation'],
            compliance_frameworks=[
                'gdpr_compliance_evaluation',
                'ccpa_requirements_assessment',
                'hipaa_privacy_standards',
                'pci_dss_data_protection',
                'iso_27001_privacy_controls',
                'industry_specific_regulations'
            ]
        )
        
        # Intelligent score calculation
        assessment_system['score_calculation'] = self.implement_score_calculation(
            assessment_system,
            scoring_methodologies=[
                'weighted_risk_aggregation',
                'compliance_score_integration',
                'best_practice_alignment',
                'industry_benchmarking',
                'temporal_risk_adjustment',
                'contextual_score_normalization'
            ]
        )
        
        return assessment_system
    
    def execute_privacy_score_calculation(self, target_system, assessment_criteria, scoring_preferences):
        """Execute comprehensive privacy score calculation with detailed analysis and recommendations."""
        
        calculation_process = {
            'system_profiling': {},
            'privacy_analysis': {},
            'risk_quantification': {},
            'compliance_evaluation': {},
            'score_generation': {}
        }
        
        # Detailed system profiling
        calculation_process['system_profiling'] = self.profile_target_system(
            target_system, assessment_criteria,
            profiling_dimensions=[
                'data_architecture_analysis',
                'privacy_control_inventory',
                'user_interaction_patterns',
                'data_lifecycle_mapping',
                'security_measure_assessment',
                'governance_framework_evaluation'
            ]
        )
        
        # Comprehensive privacy analysis
        calculation_process['privacy_analysis'] = self.analyze_privacy_posture(
            calculation_process['system_profiling'], scoring_preferences,
            analysis_areas=[
                'data_minimization_practices',
                'purpose_limitation_adherence',
                'consent_mechanism_effectiveness',
                'transparency_and_disclosure',
                'user_control_capabilities',
                'privacy_by_design_implementation'
            ]
        )
        
        # Quantitative risk assessment
        calculation_process['risk_quantification'] = self.quantify_privacy_risks(
            calculation_process['privacy_analysis'],
            quantification_methods=[
                'probability_impact_modeling',
                'threat_landscape_analysis',
                'vulnerability_severity_scoring',
                'business_impact_assessment',
                'regulatory_penalty_estimation',
                'reputational_risk_evaluation'
            ]
        )
        
        # Multi-framework compliance evaluation
        calculation_process['compliance_evaluation'] = self.evaluate_compliance_status(
            calculation_process['risk_quantification'],
            evaluation_frameworks=[
                'regulatory_requirement_mapping',
                'standard_conformance_assessment',
                'gap_analysis_execution',
                'maturity_level_determination',
                'certification_readiness_evaluation',
                'continuous_compliance_monitoring'
            ]
        )
        
        return calculation_process
    
    def generate_privacy_recommendations(self, assessment_results, improvement_objectives, resource_constraints):
        """Generate actionable privacy improvement recommendations based on assessment results."""
        
        recommendation_framework = {
            'priority_identification': {},
            'improvement_strategies': {},
            'implementation_roadmap': {},
            'cost_benefit_analysis': {},
            'monitoring_framework': {}
        }
        
        # Strategic priority identification
        recommendation_framework['priority_identification'] = self.identify_improvement_priorities(
            assessment_results, improvement_objectives,
            prioritization_criteria=[
                'risk_severity_ranking',
                'compliance_gap_urgency',
                'implementation_feasibility',
                'business_impact_potential',
                'resource_requirement_assessment',
                'stakeholder_value_alignment'
            ]
        )
        
        # Comprehensive improvement strategies
        recommendation_framework['improvement_strategies'] = self.develop_improvement_strategies(
            recommendation_framework['priority_identification'], resource_constraints,
            strategy_categories=[
                'technical_control_enhancements',
                'process_improvement_initiatives',
                'governance_framework_strengthening',
                'training_and_awareness_programs',
                'vendor_management_improvements',
                'incident_response_optimization'
            ]
        )
        
        # Detailed implementation roadmap
        recommendation_framework['implementation_roadmap'] = self.create_implementation_roadmap(
            recommendation_framework['improvement_strategies'],
            roadmap_components=[
                'phased_implementation_planning',
                'milestone_definition_and_tracking',
                'resource_allocation_optimization',
                'timeline_estimation_and_management',
                'dependency_mapping_and_resolution',
                'success_criteria_establishment'
            ]
        )
        
        # Strategic cost-benefit analysis
        recommendation_framework['cost_benefit_analysis'] = self.perform_cost_benefit_analysis(
            recommendation_framework,
            analysis_dimensions=[
                'implementation_cost_estimation',
                'operational_expense_projection',
                'risk_reduction_quantification',
                'compliance_benefit_assessment',
                'competitive_advantage_evaluation',
                'return_on_investment_calculation'
            ]
        )
        
        return recommendation_framework
    
    def evaluate_calculator_effectiveness(self, calculator_usage, assessment_outcomes, user_feedback):
        """Evaluate the effectiveness of the privacy score calculator in improving privacy postures."""
        
        effectiveness_evaluation = {
            'accuracy_assessment': {},
            'user_adoption': {},
            'improvement_impact': {},
            'system_reliability': {},
            'stakeholder_satisfaction': {}
        }
        
        # Calculation accuracy assessment
        effectiveness_evaluation['accuracy_assessment'] = self.assess_calculation_accuracy(
            calculator_usage, assessment_outcomes,
            accuracy_metrics=[
                'prediction_accuracy_validation',
                'risk_assessment_precision',
                'compliance_evaluation_correctness',
                'benchmark_comparison_reliability',
                'expert_validation_correlation',
                'longitudinal_accuracy_tracking'
            ]
        )
        
        # User adoption and engagement
        effectiveness_evaluation['user_adoption'] = self.measure_user_adoption(
            effectiveness_evaluation['accuracy_assessment'], user_feedback,
            adoption_indicators=[
                'user_engagement_frequency',
                'feature_utilization_rates',
                'recommendation_implementation_rates',
                'repeat_usage_patterns',
                'user_satisfaction_scores',
                'referral_and_recommendation_rates'
            ]
        )
        
        # Privacy improvement impact
        effectiveness_evaluation['improvement_impact'] = self.measure_improvement_impact(
            effectiveness_evaluation,
            impact_dimensions=[
                'privacy_score_improvements',
                'compliance_status_enhancements',
                'risk_reduction_achievements',
                'incident_frequency_reduction',
                'audit_performance_improvements',
                'stakeholder_confidence_increases'
            ]
        )
        
        return effectiveness_evaluation
`;

export default function PrivacyScoreCalculator() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="data" particleCount={100} />
      
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
              href="/tools"
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tools
            </Link>

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                Privacy Score Calculator: Comprehensive Privacy Assessment Platform
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Interactive Tool
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Status: Production Ready
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share Tool
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Privacy Assessment', 'Risk Analysis', 'Compliance Evaluation', 'GDPR/CCPA', 'Data Protection', 'Security Scoring'].map((tag) => (
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
                Advanced privacy assessment platform that evaluates data protection practices, 
                regulatory compliance, and privacy risks to generate comprehensive privacy scores 
                with actionable recommendations for improving data protection posture and ensuring 
                regulatory compliance across GDPR, CCPA, and other privacy frameworks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Tool Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Privacy Calculator Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The Privacy Score Calculator provides comprehensive assessment of data protection 
                practices, privacy risks, and regulatory compliance across multiple frameworks 
                including GDPR, CCPA, HIPAA, and industry-specific standards. It delivers 
                quantitative privacy scores with detailed analysis and actionable improvement recommendations.
              </p>
              <p className="body-text text-research-text-secondary">
                This intelligent platform evaluates data collection practices, consent mechanisms, 
                security controls, and governance frameworks to provide organizations with clear 
                insights into their privacy posture and compliance status.
              </p>
            </motion.div>

            {/* Interactive Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Privacy Assessment Interface</h2>
              </div>
              
              {/* Assessment Form Mockup */}
              <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-accent-ai-purple/20">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Data Collection Scope</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>Personal Data Only</option>
                      <option>Sensitive Personal Data</option>
                      <option>Health Information</option>
                      <option>Financial Data</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-research-text mb-2">Geographic Scope</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-accent-ai-purple/30 rounded-xl text-research-text focus:outline-none focus:border-accent-ai-purple focus:ring-2 focus:ring-accent-ai-purple/20">
                      <option>European Union (GDPR)</option>
                      <option>California (CCPA)</option>
                      <option>Global Operations</option>
                      <option>Healthcare (HIPAA)</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-research-text mb-2">Privacy Controls Assessment</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Consent Management', 'Data Minimization', 'Purpose Limitation', 'Retention Policies', 'User Rights', 'Security Measures'].map((control) => (
                      <label key={control} className="flex items-center space-x-3">
                        <input type="checkbox" className="w-4 h-4 text-accent-ai-purple bg-white/10 border-accent-ai-purple/30 rounded focus:ring-accent-ai-purple focus:ring-2" />
                        <span className="text-sm text-research-text-secondary">{control}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-xl hover:shadow-ai-glow transition-all duration-300">
                    <Shield className="h-5 w-5 mr-2" />
                    Calculate Privacy Score
                  </button>
                </div>
              </div>
              
              <LottieAnimation 
                animationFile="privacy-assessment-demo.json"
                className="mx-auto"
                width={700}
                height={400}
              />
              
              <div className="mt-6 text-center">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300">
                  <Eye className="h-5 w-5 mr-2" />
                  View Detailed Assessment
                </button>
              </div>
            </motion.div>

            {/* System Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Privacy Assessment Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The privacy score calculator architecture integrates data collection analysis, 
                risk assessment frameworks, and compliance evaluation systems to deliver comprehensive 
                privacy scoring. The system emphasizes multi-dimensional assessment, regulatory 
                alignment, and actionable improvement recommendations for enhanced data protection.
              </p>
              
              <MermaidDiagram chart={privacyScoreArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through five integrated layers: (1) data collection analysis 
                with type classification and volume assessment, (2) privacy risk assessment with 
                vulnerability identification and impact analysis, (3) compliance evaluation against 
                regulatory frameworks, (4) comprehensive score calculation with weighted aggregation, 
                and (5) improvement recommendations with implementation guidance.
              </p>
            </motion.div>

            {/* Privacy Score Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Privacy Score Analysis &amp; Benchmarking</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive privacy score analysis across multiple dimensions including data 
                protection practices, regulatory compliance, risk management, and industry benchmarking. 
                The assessment provides detailed insights into privacy posture strengths and areas 
                for improvement with quantitative scoring and qualitative recommendations.
              </p>
              
              <InteractiveChart
                dataFile="privacy_score_analysis.json"
                chartType="bar"
                title="Privacy Score Assessment & Compliance Analysis"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Results demonstrate average privacy scores of 78/100 across assessed organizations, 
                with 85% achieving basic compliance, 60% meeting advanced privacy standards, and 
                40% implementing privacy-by-design principles effectively.
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
                The following implementation demonstrates the comprehensive privacy score calculator 
                with multi-dimensional assessment capabilities, regulatory compliance evaluation, 
                risk quantification algorithms, and recommendation generation designed to provide 
                organizations with actionable insights for improving their privacy and data protection posture.
              </p>
              
              <CodeBlock
                code={privacyCalculatorCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The calculator framework provides systematic approaches to privacy assessment that 
                enable organizations to understand their privacy risks, ensure regulatory compliance, 
                and implement effective data protection strategies through evidence-based recommendations.
              </p>
            </motion.div>

            {/* Assessment Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Privacy Assessment Categories</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Data Collection &amp; Processing</h3>
                  <p className="body-text text-research-text-secondary">
                    Assessment of data collection practices, processing purposes, and data minimization principles.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Consent &amp; User Rights</h3>
                  <p className="body-text text-research-text-secondary">
                    Evaluation of consent mechanisms, user control capabilities, and rights management systems.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Security &amp; Protection</h3>
                  <p className="body-text text-research-text-secondary">
                    Analysis of technical and organizational security measures for data protection.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Governance &amp; Compliance</h3>
                  <p className="body-text text-research-text-secondary">
                    Review of privacy governance frameworks and regulatory compliance status.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Compliance Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Supported Compliance Frameworks</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">GDPR (General Data Protection Regulation)</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive assessment against all GDPR requirements including lawful basis, 
                    data subject rights, privacy by design, data protection impact assessments, 
                    and breach notification obligations for EU data processing activities.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">CCPA (California Consumer Privacy Act)</h3>
                  <p className="body-text text-research-text-secondary">
                    Evaluation of CCPA compliance including consumer rights implementation, 
                    privacy notice requirements, opt-out mechanisms, and data sale disclosures 
                    for organizations processing California resident data.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">HIPAA &amp; Industry Standards</h3>
                  <p className="body-text text-research-text-secondary">
                    Assessment of healthcare privacy requirements, financial data protection 
                    standards (PCI DSS), and industry-specific privacy frameworks including 
                    ISO 27001, NIST Privacy Framework, and sector-specific regulations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Scoring Methodology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Privacy Scoring Methodology</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Risk-Based Scoring</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Quantitative risk assessment with probability-impact modeling and threat landscape analysis.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Compliance Weighting</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Regulatory requirement mapping with weighted scoring based on legal obligations and penalties.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Industry Benchmarking</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Comparative analysis against industry standards and best practice implementation levels.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Getting Started */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Getting Started</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">System Assessment Setup</h3>
                    <p className="body-text text-research-text-secondary">
                      Define your system scope, data types, geographic coverage, and applicable regulatory frameworks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Privacy Controls Evaluation</h3>
                    <p className="body-text text-research-text-secondary">
                      Complete the comprehensive assessment questionnaire covering all privacy and security controls.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Review Results &amp; Recommendations</h3>
                    <p className="body-text text-research-text-secondary">
                      Analyze your privacy score, compliance status, and implement the prioritized improvement recommendations.
                    </p>
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
                  href="/tools/semantic-search-tool"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Tool
                </Link>
                
                <Link
                  href="/tools/data-visualization-playground"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next Tool
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
