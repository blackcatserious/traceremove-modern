'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, FileText, Users, Download, Calendar } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const ethicsSyllabiArchitecture = `
graph TD
    A[AI Ethics Syllabi] --> B[Curriculum Design]
    A --> C[Learning Objectives]
    A --> D[Assessment Methods]
    B --> E[Foundational Concepts]
    B --> F[Applied Ethics]
    B --> G[Case Studies]
    C --> H[Critical Thinking]
    C --> I[Ethical Reasoning]
    C --> J[Practical Application]
    D --> K[Project-Based Assessment]
    D --> L[Peer Evaluation]
    D --> M[Reflective Essays]
    E --> N[Comprehensive Curriculum]
    F --> N
    G --> N
    H --> O[Learning Outcomes]
    I --> O
    J --> O
    K --> P[Assessment Framework]
    L --> P
    M --> P
    N --> Q[Complete Syllabi Collection]
    O --> Q
    P --> Q
    Q --> R{Curriculum Assessment?}
    R -->|High| S[Educational Excellence]
    R -->|Medium| T[Effective Teaching]
    R -->|Growing| U[Developing Curriculum]
    S --> V[Ethical AI Education]
    T --> V
    U --> V
    V --> W[Responsible AI Practitioners]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const ethicsSyllabiCode = `
class AIEthicsSyllabiManager:
    def __init__(self, curriculum_database, educational_standards):
        self.curriculum_database = curriculum_database
        self.educational_standards = educational_standards
        self.syllabus_designer = SyllabusDesigner()
        self.learning_assessor = LearningAssessor()
        self.content_curator = ContentCurator()
        self.outcome_evaluator = OutcomeEvaluator()
        
    def build_ai_ethics_syllabi_collection(self, educational_levels, learning_objectives):
        """Build comprehensive AI ethics syllabi collection with curriculum design, learning objectives, and assessment methods."""
        
        syllabi_system = {
            'curriculum_design': {},
            'learning_framework': {},
            'assessment_methods': {},
            'content_organization': {},
            'outcome_measurement': {}
        }
        
        # Comprehensive curriculum design
        syllabi_system['curriculum_design'] = self.design_curriculum_structure(
            self.curriculum_database, educational_levels,
            design_components=[
                'foundational_ethics_principles',
                'ai_technology_fundamentals',
                'applied_ethics_frameworks',
                'case_study_integration',
                'practical_implementation_guides',
                'cross_cultural_perspectives'
            ]
        )
        
        # Learning framework and objectives
        syllabi_system['learning_framework'] = self.implement_learning_framework(
            syllabi_system['curriculum_design'], learning_objectives,
            framework_elements=[
                'critical_thinking_development',
                'ethical_reasoning_skills',
                'practical_application_abilities',
                'collaborative_problem_solving',
                'communication_competencies',
                'lifelong_learning_orientation'
            ]
        )
        
        # Assessment methods and evaluation
        syllabi_system['assessment_methods'] = self.develop_assessment_methods(
            syllabi_system['learning_framework'],
            assessment_strategies=[
                'project_based_evaluation',
                'peer_review_processes',
                'reflective_essay_assignments',
                'case_study_analysis',
                'group_presentation_assessments',
                'continuous_feedback_integration'
            ]
        )
        
        # Content organization and sequencing
        syllabi_system['content_organization'] = self.organize_content_structure(
            syllabi_system,
            organization_principles=[
                'progressive_complexity_building',
                'conceptual_connection_facilitation',
                'practical_relevance_emphasis',
                'cultural_sensitivity_integration',
                'interdisciplinary_approach_adoption',
                'real_world_application_focus'
            ]
        )
        
        return syllabi_system
    
    def develop_course_syllabi(self, course_levels, target_audiences, institutional_contexts):
        """Develop specific course syllabi for different educational levels and institutional contexts."""
        
        syllabus_development = {
            'undergraduate_curricula': {},
            'graduate_programs': {},
            'professional_development': {},
            'public_education': {},
            'specialized_training': {}
        }
        
        # Undergraduate curriculum development
        syllabus_development['undergraduate_curricula'] = self.develop_undergraduate_syllabi(
            course_levels, target_audiences,
            undergraduate_components=[
                'introduction_to_ai_ethics',
                'technology_and_society_foundations',
                'ethical_decision_making_frameworks',
                'bias_and_fairness_exploration',
                'privacy_and_surveillance_issues',
                'future_of_ai_implications'
            ]
        )
        
        # Graduate program specialization
        syllabus_development['graduate_programs'] = self.design_graduate_curricula(
            syllabus_development['undergraduate_curricula'], institutional_contexts,
            graduate_specializations=[
                'advanced_ethical_theory_application',
                'ai_governance_and_policy_development',
                'research_methods_in_ai_ethics',
                'interdisciplinary_collaboration_skills',
                'leadership_in_responsible_ai',
                'global_perspectives_integration'
            ]
        )
        
        # Professional development programs
        syllabus_development['professional_development'] = self.create_professional_curricula(
            syllabus_development,
            professional_focus_areas=[
                'industry_specific_ethical_challenges',
                'regulatory_compliance_frameworks',
                'stakeholder_engagement_strategies',
                'risk_assessment_methodologies',
                'implementation_best_practices',
                'continuous_improvement_processes'
            ]
        )
        
        return syllabus_development
    
    def implement_pedagogical_approaches(self, teaching_methods, student_engagement, learning_environments):
        """Implement diverse pedagogical approaches for effective AI ethics education."""
        
        pedagogical_implementation = {
            'interactive_learning': {},
            'experiential_education': {},
            'collaborative_methods': {},
            'technology_integration': {},
            'assessment_innovation': {}
        }
        
        # Interactive learning methodologies
        pedagogical_implementation['interactive_learning'] = self.implement_interactive_methods(
            teaching_methods, student_engagement,
            interactive_strategies=[
                'socratic_dialogue_facilitation',
                'case_based_learning_integration',
                'role_playing_scenario_development',
                'debate_and_discussion_coordination',
                'problem_solving_workshop_design',
                'peer_teaching_opportunity_creation'
            ]
        )
        
        # Experiential education approaches
        pedagogical_implementation['experiential_education'] = self.design_experiential_learning(
            pedagogical_implementation['interactive_learning'], learning_environments,
            experiential_components=[
                'real_world_project_integration',
                'industry_partnership_development',
                'community_engagement_initiatives',
                'internship_program_coordination',
                'research_experience_provision',
                'service_learning_opportunity_creation'
            ]
        )
        
        # Technology-enhanced learning
        pedagogical_implementation['technology_integration'] = self.integrate_educational_technology(
            pedagogical_implementation,
            technology_applications=[
                'virtual_reality_ethics_simulations',
                'ai_tool_hands_on_exploration',
                'online_collaboration_platform_utilization',
                'multimedia_content_development',
                'adaptive_learning_system_implementation',
                'data_visualization_tool_integration'
            ]
        )
        
        return pedagogical_implementation
    
    def evaluate_curriculum_effectiveness(self, student_outcomes, feedback_data, institutional_impact):
        """Evaluate the effectiveness of AI ethics curricula through comprehensive outcome assessment."""
        
        effectiveness_evaluation = {
            'learning_outcome_assessment': {},
            'student_satisfaction_analysis': {},
            'institutional_impact_measurement': {},
            'long_term_career_influence': {},
            'curriculum_improvement_identification': {}
        }
        
        # Learning outcome assessment
        effectiveness_evaluation['learning_outcome_assessment'] = self.assess_learning_outcomes(
            student_outcomes, feedback_data,
            outcome_indicators=[
                'ethical_reasoning_skill_development',
                'critical_thinking_capability_enhancement',
                'practical_application_competency',
                'collaborative_problem_solving_ability',
                'communication_skill_improvement',
                'lifelong_learning_commitment'
            ]
        )
        
        # Student satisfaction and engagement analysis
        effectiveness_evaluation['student_satisfaction_analysis'] = self.analyze_student_satisfaction(
            effectiveness_evaluation['learning_outcome_assessment'], institutional_impact,
            satisfaction_dimensions=[
                'course_content_relevance_rating',
                'teaching_method_effectiveness_evaluation',
                'learning_environment_satisfaction',
                'instructor_support_adequacy',
                'peer_interaction_quality',
                'overall_educational_experience'
            ]
        )
        
        # Long-term career and societal impact
        effectiveness_evaluation['long_term_career_influence'] = self.measure_career_impact(
            effectiveness_evaluation,
            impact_indicators=[
                'career_trajectory_influence',
                'ethical_leadership_development',
                'professional_decision_making_improvement',
                'industry_contribution_enhancement',
                'social_responsibility_commitment',
                'continued_learning_engagement'
            ]
        )
        
        return effectiveness_evaluation
`;

export default function EthicsSyllabi() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="research" particleCount={95} />
      
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
              href="/academic"
              className="inline-flex items-center text-accent-ai-purple hover:text-accent-lab-purple font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Academic Resources
            </Link>

            <div className="mb-8">
              <h1 className="hero-title text-research-text mb-6">
                AI Ethics Syllabi: Comprehensive Educational Frameworks
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Updated Curricula
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  12+ Syllabi
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share Collection
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Undergraduate', 'Graduate', 'Professional', 'Ethics Frameworks', 'Case Studies', 'Assessment Tools'].map((tag) => (
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
                Comprehensive collection of AI ethics syllabi designed for diverse educational 
                contexts including undergraduate courses, graduate programs, professional 
                development, and public education. Features structured curricula, learning 
                objectives, assessment methods, and pedagogical approaches that foster critical 
                thinking, ethical reasoning, and practical understanding of responsible AI development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Syllabi Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Syllabi Collection Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                Extensive collection of AI ethics syllabi spanning multiple educational levels 
                and institutional contexts. The curricula are designed to develop critical 
                thinking, ethical reasoning, and practical skills necessary for responsible 
                AI development and deployment across diverse professional and academic settings.
              </p>
              <p className="body-text text-research-text-secondary">
                With 12+ comprehensive syllabi, structured learning objectives, innovative 
                assessment methods, and pedagogical approaches, the collection demonstrates 
                commitment to excellence in AI ethics education and the development of 
                ethically-minded AI practitioners and researchers.
              </p>
            </motion.div>

            {/* Curriculum Levels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Curriculum Levels &amp; Educational Contexts</h2>
              </div>
              
              <LottieAnimation 
                animationFile="ethics-curriculum-levels.json"
                className="mx-auto mb-8"
                width={800}
                height={500}
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Undergraduate Courses</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Introduction to AI Ethics (3 credits)</p>
                    <p>• Technology &amp; Society (3 credits)</p>
                    <p>• Digital Rights &amp; Privacy (3 credits)</p>
                    <p>• Algorithmic Fairness (3 credits)</p>
                    <p>• AI &amp; Human Values (3 credits)</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Graduate Programs</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Advanced AI Ethics Theory (4 credits)</p>
                    <p>• AI Governance &amp; Policy (4 credits)</p>
                    <p>• Research Methods in AI Ethics (4 credits)</p>
                    <p>• Cross-Cultural AI Perspectives (3 credits)</p>
                    <p>• Thesis Seminar in AI Ethics (2 credits)</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Professional Development</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• AI Ethics for Industry Leaders</p>
                    <p>• Regulatory Compliance Training</p>
                    <p>• Stakeholder Engagement Workshop</p>
                    <p>• Risk Assessment Certification</p>
                    <p>• Implementation Best Practices</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Public Education</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• AI Literacy for Citizens</p>
                    <p>• Digital Rights Awareness</p>
                    <p>• Understanding AI Impact</p>
                    <p>• Community Engagement Programs</p>
                    <p>• Public Policy Participation</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Syllabi Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">AI Ethics Syllabi Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The AI ethics syllabi architecture integrates curriculum design, learning 
                objectives, and assessment methods to deliver comprehensive educational 
                experiences. The system emphasizes foundational concepts, applied ethics, 
                and practical application through structured learning outcomes and innovative 
                assessment frameworks.
              </p>
              
              <MermaidDiagram chart={ethicsSyllabiArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The educational architecture operates through four integrated layers: (1) curriculum 
                design with foundational concepts, applied ethics, and case studies, (2) learning 
                objectives emphasizing critical thinking and practical application, (3) assessment 
                methods including project-based evaluation and peer review, and (4) comprehensive 
                syllabi collection leading to educational excellence and responsible AI practitioners.
              </p>
            </motion.div>

            {/* Learning Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Curriculum Effectiveness &amp; Learning Analytics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive analysis of curriculum effectiveness, student learning outcomes, 
                and educational impact across diverse institutional contexts. The analytics 
                demonstrate successful knowledge transfer, skill development, and ethical 
                reasoning advancement in AI ethics education programs.
              </p>
              
              <InteractiveChart
                dataFile="ethics_curriculum_analytics.json"
                chartType="line"
                title="AI Ethics Syllabi - Learning Outcomes &amp; Impact"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Curriculum metrics show 12+ syllabi implemented, 800+ students educated, 94% 
                learning objective achievement, significant ethical reasoning development, and 
                sustained impact on professional practice and career advancement in responsible AI.
              </p>
            </motion.div>

            {/* Featured Syllabi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Featured Syllabi &amp; Course Designs</h2>
              <div className="space-y-6">
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <FileText className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Introduction to AI Ethics</h3>
                        <p className="text-accent-ai-purple font-medium">Undergraduate Course (15 weeks, 3 credits)</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-blue-500/20 px-3 py-1 rounded-full">
                      Undergraduate
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Foundational course introducing ethical frameworks for AI development, 
                    algorithmic accountability, bias detection, privacy protection, and 
                    cross-cultural perspectives on responsible technology implementation. 
                    Includes case studies, group projects, and reflective assignments.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><Users className="h-3 w-3 inline mr-1" />120+ students/year</span>
                    <span>•</span>
                    <span><Calendar className="h-3 w-3 inline mr-1" />Fall/Spring</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">Download Syllabus</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Advanced AI Ethics Theory</h3>
                        <p className="text-accent-ai-purple font-medium">Graduate Seminar (15 weeks, 4 credits)</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-green-500/20 px-3 py-1 rounded-full">
                      Graduate
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Advanced seminar exploring theoretical foundations of AI ethics, 
                    philosophical frameworks, policy development, research methodologies, 
                    and interdisciplinary approaches to responsible AI governance. 
                    Emphasizes original research and critical analysis.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><Users className="h-3 w-3 inline mr-1" />15-20 students</span>
                    <span>•</span>
                    <span><Calendar className="h-3 w-3 inline mr-1" />Spring</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">View Materials</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Users className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">AI Ethics for Industry Leaders</h3>
                        <p className="text-accent-ai-purple font-medium">Professional Development (5 days intensive)</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-purple-500/20 px-3 py-1 rounded-full">
                      Professional
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Intensive professional development program for industry leaders focusing 
                    on practical implementation of ethical AI frameworks, regulatory compliance, 
                    stakeholder engagement, risk assessment, and organizational change 
                    management for responsible AI adoption.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><Users className="h-3 w-3 inline mr-1" />25-30 participants</span>
                    <span>•</span>
                    <span><Calendar className="h-3 w-3 inline mr-1" />Quarterly</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">Program Details</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technical Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">AI Ethics Syllabi Management System</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates the comprehensive AI ethics syllabi 
                management system with curriculum design, learning framework development, 
                assessment method integration, and outcome evaluation designed to maximize 
                educational effectiveness and ethical reasoning development across diverse 
                learning environments and student populations.
              </p>
              
              <CodeBlock
                code={ethicsSyllabiCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The syllabi management framework provides systematic approaches to curriculum 
                development that enable educators to create comprehensive learning experiences, 
                implement effective pedagogical methods, and measure educational outcomes 
                across diverse institutional contexts and student populations.
              </p>
            </motion.div>

            {/* Pedagogical Approaches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Pedagogical Approaches &amp; Teaching Methods</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Interactive Learning</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Socratic dialogue facilitation</p>
                    <p>• Case-based learning integration</p>
                    <p>• Role-playing scenario development</p>
                    <p>• Debate &amp; discussion coordination</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Experiential Education</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Real-world project integration</p>
                    <p>• Industry partnership development</p>
                    <p>• Community engagement initiatives</p>
                    <p>• Research experience provision</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Collaborative Methods</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Group project coordination</p>
                    <p>• Peer review processes</p>
                    <p>• Team-based problem solving</p>
                    <p>• Cross-cultural collaboration</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Technology Integration</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• VR ethics simulations</p>
                    <p>• AI tool hands-on exploration</p>
                    <p>• Online collaboration platforms</p>
                    <p>• Adaptive learning systems</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Assessment Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Assessment Innovation &amp; Evaluation Methods</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Project-Based Assessment</h3>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive project-based evaluation focusing on practical application 
                    of ethical frameworks, real-world problem solving, and collaborative 
                    implementation of responsible AI principles in diverse contexts.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Peer Review &amp; Collaboration</h3>
                  <p className="body-text text-research-text-secondary">
                    Structured peer review processes that develop critical evaluation skills, 
                    collaborative learning, and diverse perspective integration while 
                    fostering professional communication and constructive feedback abilities.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Reflective Learning Portfolio</h3>
                  <p className="body-text text-research-text-secondary">
                    Continuous reflective learning portfolios that document ethical reasoning 
                    development, personal growth, and evolving understanding of complex AI 
                    ethics issues through structured self-assessment and metacognitive reflection.
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
                  href="/academic/teaching-materials"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous: Teaching Materials
                </Link>
                
                <Link
                  href="/academic/reading-list"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next: Reading List
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
