'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, GraduationCap, Users, Download, FileText } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const teachingMaterialsArchitecture = `
graph TD
    A[Teaching Materials] --> B[Content Categories]
    A --> C[Delivery Methods]
    A --> D[Learning Assessment]
    B --> E[Course Curricula]
    B --> F[Lecture Materials]
    B --> G[Interactive Exercises]
    C --> H[Traditional Lectures]
    C --> I[Online Courses]
    C --> J[Workshop Sessions]
    D --> K[Student Feedback]
    D --> L[Learning Outcomes]
    D --> M[Skill Development]
    E --> N[Educational Portfolio]
    F --> N
    G --> N
    H --> O[Teaching Archive]
    I --> O
    J --> O
    K --> P[Teaching Impact]
    L --> P
    M --> P
    N --> Q[Comprehensive Teaching Record]
    O --> Q
    P --> Q
    Q --> R{Teaching Assessment?}
    R -->|High| S[Educational Leadership]
    R -->|Medium| T[Effective Instruction]
    R -->|Growing| U[Emerging Educator]
    S --> V[Knowledge Transfer]
    T --> V
    U --> V
    V --> W[Student Empowerment]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const teachingMaterialsCode = `
class TeachingMaterialsManager:
    def __init__(self, curriculum_database, learning_platforms):
        self.curriculum_database = curriculum_database
        self.learning_platforms = learning_platforms
        self.content_creator = ContentCreator()
        self.assessment_analyzer = AssessmentAnalyzer()
        self.engagement_tracker = EngagementTracker()
        self.outcome_evaluator = OutcomeEvaluator()
        
    def build_teaching_materials_platform(self, educational_objectives, learning_strategies):
        &quot;Build comprehensive teaching materials platform with content management, delivery optimization, and learning assessment.&quot;
        
        teaching_system = {
            'curriculum_portfolio': {},
            'content_archive': {},
            'delivery_optimization': {},
            'assessment_framework': {},
            'impact_measurement': {}
        }
        
        # Comprehensive curriculum portfolio management
        teaching_system['curriculum_portfolio'] = self.build_curriculum_portfolio(
            self.curriculum_database, educational_objectives,
            portfolio_components=[
                'ai_ethics_course_curricula',
                'technology_philosophy_modules',
                'digital_rights_education_programs',
                'cross_cultural_ai_perspectives',
                'responsible_development_frameworks',
                'practical_implementation_guides'
            ]
        )
        
        # Educational content archive and organization
        teaching_system['content_archive'] = self.implement_content_archive(
            teaching_system['curriculum_portfolio'], learning_strategies,
            archive_features=[
                'lecture_slide_collections',
                'interactive_exercise_libraries',
                'case_study_repositories',
                'multimedia_learning_resources',
                'assessment_tool_databases',
                'student_project_examples'
            ]
        )
        
        # Delivery method optimization
        teaching_system['delivery_optimization'] = self.optimize_delivery_methods(
            teaching_system['content_archive'],
            delivery_strategies=[
                'traditional_classroom_instruction',
                'online_learning_platform_integration',
                'hybrid_teaching_methodologies',
                'interactive_workshop_facilitation',
                'peer_learning_coordination',
                'self_paced_study_guidance'
            ]
        )
        
        # Assessment framework and evaluation
        teaching_system['assessment_framework'] = self.implement_assessment_framework(
            teaching_system,
            assessment_components=[
                'learning_objective_measurement',
                'skill_development_tracking',
                'critical_thinking_evaluation',
                'practical_application_assessment',
                'collaborative_project_grading',
                'continuous_feedback_integration'
            ]
        )
        
        return teaching_system
    
    def develop_curriculum_content(self, subject_areas, learning_objectives, student_demographics):
        &quot;Develop comprehensive curriculum content with focus on AI ethics, technology philosophy, and practical applications.&quot;
        
        curriculum_development = {
            'content_structure': {},
            'learning_progression': {},
            'engagement_strategies': {},
            'assessment_integration': {},
            'accessibility_optimization': {}
        }
        
        # Structured content development
        curriculum_development['content_structure'] = self.structure_curriculum_content(
            subject_areas, learning_objectives,
            structure_elements=[
                'foundational_concept_introduction',
                'theoretical_framework_exploration',
                'practical_application_demonstration',
                'case_study_analysis_integration',
                'critical_thinking_exercise_design',
                'synthesis_project_coordination'
            ]
        )
        
        # Learning progression and scaffolding
        curriculum_development['learning_progression'] = self.design_learning_progression(
            curriculum_development['content_structure'], student_demographics,
            progression_strategies=[
                'prerequisite_knowledge_assessment',
                'incremental_complexity_building',
                'conceptual_connection_facilitation',
                'skill_transfer_optimization',
                'mastery_checkpoint_integration',
                'advanced_application_preparation'
            ]
        )
        
        # Student engagement and motivation
        curriculum_development['engagement_strategies'] = self.implement_engagement_strategies(
            curriculum_development,
            engagement_methods=[
                'interactive_discussion_facilitation',
                'real_world_problem_solving',
                'collaborative_project_design',
                'multimedia_content_integration',
                'gamification_element_incorporation',
                'peer_teaching_opportunity_creation'
            ]
        )
        
        return curriculum_development
    
    def manage_learning_delivery(self, teaching_modalities, student_needs, technology_integration):
        &quot;Manage diverse learning delivery methods with focus on accessibility, engagement, and effectiveness.&quot;
        
        delivery_management = {
            'modality_optimization': {},
            'student_adaptation': {},
            'technology_integration': {},
            'accessibility_enhancement': {},
            'quality_assurance': {}
        }
        
        # Teaching modality optimization
        delivery_management['modality_optimization'] = self.optimize_teaching_modalities(
            teaching_modalities, student_needs,
            optimization_strategies=[
                'in_person_lecture_enhancement',
                'online_synchronous_session_design',
                'asynchronous_learning_resource_creation',
                'hybrid_classroom_coordination',
                'workshop_interactive_facilitation',
                'one_on_one_mentoring_integration'
            ]
        )
        
        # Student-centered adaptation
        delivery_management['student_adaptation'] = self.adapt_to_student_needs(
            delivery_management['modality_optimization'], technology_integration,
            adaptation_approaches=[
                'learning_style_accommodation',
                'pace_flexibility_provision',
                'cultural_sensitivity_integration',
                'language_barrier_mitigation',
                'accessibility_requirement_fulfillment',
                'individual_support_customization'
            ]
        )
        
        # Technology integration and enhancement
        delivery_management['technology_integration'] = self.integrate_educational_technology(
            delivery_management,
            technology_components=[
                'learning_management_system_utilization',
                'interactive_presentation_tools',
                'collaborative_platform_integration',
                'assessment_automation_implementation',
                'multimedia_content_delivery',
                'virtual_reality_experience_design'
            ]
        )
        
        return delivery_management
    
    def evaluate_teaching_effectiveness(self, student_outcomes, feedback_data, learning_analytics):
        &quot;Evaluate teaching effectiveness through student outcomes, feedback analysis, and learning analytics.&quot;
        
        effectiveness_evaluation = {
            'outcome_assessment': {},
            'feedback_analysis': {},
            'engagement_measurement': {},
            'improvement_identification': {},
            'impact_quantification': {}
        }
        
        # Student outcome assessment
        effectiveness_evaluation['outcome_assessment'] = self.assess_student_outcomes(
            student_outcomes, feedback_data,
            outcome_metrics=[
                'learning_objective_achievement',
                'skill_development_progression',
                'knowledge_retention_measurement',
                'practical_application_capability',
                'critical_thinking_advancement',
                'collaborative_skill_enhancement'
            ]
        )
        
        # Comprehensive feedback analysis
        effectiveness_evaluation['feedback_analysis'] = self.analyze_student_feedback(
            effectiveness_evaluation['outcome_assessment'], learning_analytics,
            feedback_dimensions=[
                'content_clarity_evaluation',
                'delivery_method_effectiveness',
                'engagement_level_assessment',
                'support_adequacy_measurement',
                'learning_environment_satisfaction',
                'instructor_effectiveness_rating'
            ]
        )
        
        # Teaching impact quantification
        effectiveness_evaluation['impact_quantification'] = self.quantify_teaching_impact(
            effectiveness_evaluation,
            impact_indicators=[
                'student_success_rate_improvement',
                'knowledge_transfer_effectiveness',
                'skill_application_demonstration',
                'career_preparation_contribution',
                'lifelong_learning_inspiration',
                'field_advancement_influence'
            ]
        )
        
        return effectiveness_evaluation
`;

export default function TeachingMaterials() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="research" particleCount={100} />
      
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
                Teaching Materials &amp; Educational Resources: AI Ethics Education
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Updated Materials
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  15+ Courses
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share Resources
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Curricula', 'Lecture Materials', 'Interactive Exercises', 'Case Studies', 'Assessment Tools', 'Online Resources'].map((tag) => (
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
                Comprehensive collection of teaching materials and educational resources for 
                AI ethics, technology philosophy, and digital rights education. Features 
                course curricula, lecture materials, interactive exercises, case studies, 
                and assessment tools designed to foster critical thinking, ethical reasoning, 
                and practical understanding of responsible AI development and deployment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Teaching Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Educational Portfolio Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                Extensive collection of teaching materials spanning AI ethics, technology 
                philosophy, digital rights, and cross-cultural perspectives on responsible 
                AI development. Materials are designed for diverse learning environments 
                including universities, professional development programs, and public education.
              </p>
              <p className="body-text text-research-text-secondary">
                With 15+ comprehensive courses, 200+ lecture materials, interactive exercises, 
                case studies, and assessment tools, the educational resources demonstrate 
                commitment to knowledge transfer and student empowerment in critical technology 
                literacy and ethical reasoning.
              </p>
            </motion.div>

            {/* Course Catalog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Course Catalog &amp; Curriculum Design</h2>
              </div>
              
              <LottieAnimation 
                animationFile="educational-curriculum-design.json"
                className="mx-auto mb-8"
                width={800}
                height={500}
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Core Courses</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Introduction to AI Ethics</p>
                    <p>• Philosophy of Technology</p>
                    <p>• Digital Rights &amp; Privacy</p>
                    <p>• Cross-Cultural AI Perspectives</p>
                    <p>• Responsible AI Development</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Advanced Seminars</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• AI Governance &amp; Policy</p>
                    <p>• Algorithmic Accountability</p>
                    <p>• Human-AI Interaction Ethics</p>
                    <p>• Technology &amp; Social Justice</p>
                    <p>• Future of AI &amp; Society</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Practical Workshops</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Ethical AI Design Thinking</p>
                    <p>• Bias Detection &amp; Mitigation</p>
                    <p>• Privacy-Preserving Technologies</p>
                    <p>• Stakeholder Engagement Methods</p>
                    <p>• Policy Development Simulation</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Professional Development</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• AI Ethics for Industry Leaders</p>
                    <p>• Technology Policy for Practitioners</p>
                    <p>• Cross-Cultural Communication</p>
                    <p>• Research Methods in AI Ethics</p>
                    <p>• Public Speaking &amp; Advocacy</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Teaching Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Teaching Materials Architecture</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The teaching materials architecture integrates content categories, delivery 
                methods, and learning assessment to deliver comprehensive educational experiences. 
                The system emphasizes curriculum development, interactive engagement, and 
                outcome measurement across diverse learning environments and student populations.
              </p>
              
              <MermaidDiagram chart={teachingMaterialsArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The educational system operates through four integrated layers: (1) content 
                categories including curricula, lectures, and exercises, (2) delivery methods 
                with traditional, online, and workshop formats, (3) learning assessment measuring 
                feedback and outcomes, and (4) comprehensive teaching record leading to educational 
                leadership, effective instruction, and student empowerment through knowledge transfer.
              </p>
            </motion.div>

            {/* Teaching Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Teaching Impact &amp; Learning Analytics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive analysis of teaching effectiveness, student outcomes, and 
                learning impact across diverse educational contexts. The analytics demonstrate 
                successful knowledge transfer, skill development, and critical thinking 
                advancement in AI ethics and technology philosophy education.
              </p>
              
              <InteractiveChart
                dataFile="teaching_effectiveness_analytics.json"
                chartType="bar"
                title="Teaching Materials - Learning Outcomes &amp; Impact"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Teaching metrics show 15+ courses delivered, 500+ students taught, 92% 
                satisfaction rating, significant learning outcome achievement, and sustained 
                impact on student career development and ethical reasoning capabilities.
              </p>
            </motion.div>

            {/* Featured Materials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Featured Teaching Materials &amp; Resources</h2>
              <div className="space-y-6">
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <FileText className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">AI Ethics: Foundations &amp; Applications</h3>
                        <p className="text-accent-ai-purple font-medium">Complete Course Curriculum (15 weeks)</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-blue-500/20 px-3 py-1 rounded-full">
                      Curriculum
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Comprehensive 15-week curriculum covering ethical frameworks for AI development, 
                    algorithmic accountability, bias detection and mitigation, privacy-preserving 
                    technologies, and cross-cultural perspectives on responsible AI implementation.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><Users className="h-3 w-3 inline mr-1" />150+ students</span>
                    <span>•</span>
                    <span><Download className="h-3 w-3 inline mr-1" />Syllabus</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">View Materials</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <GraduationCap className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Digital Rights &amp; Technology Policy</h3>
                        <p className="text-accent-ai-purple font-medium">Interactive Workshop Series (8 sessions)</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-green-500/20 px-3 py-1 rounded-full">
                      Workshop
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Hands-on workshop series exploring digital rights advocacy, privacy protection 
                    frameworks, technology policy development, and stakeholder engagement strategies 
                    for creating inclusive and equitable AI governance structures.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><Users className="h-3 w-3 inline mr-1" />80+ participants</span>
                    <span>•</span>
                    <span><Download className="h-3 w-3 inline mr-1" />Materials</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">Access Resources</a>
                  </div>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-6 w-6 text-accent-ai-purple mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-research-text">Cross-Cultural AI Perspectives</h3>
                        <p className="text-accent-ai-purple font-medium">Graduate Seminar &amp; Case Study Collection</p>
                      </div>
                    </div>
                    <span className="text-sm text-research-text-secondary bg-purple-500/20 px-3 py-1 rounded-full">
                      Seminar
                    </span>
                  </div>
                  <p className="body-text text-research-text-secondary mb-4">
                    Advanced graduate seminar examining cultural diversity in AI development, 
                    multilingual technologies, inclusive design principles, and the importance 
                    of diverse perspectives in creating globally responsible AI systems.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-research-text-secondary">
                    <span><Users className="h-3 w-3 inline mr-1" />25+ students</span>
                    <span>•</span>
                    <span><Download className="h-3 w-3 inline mr-1" />Case Studies</span>
                    <span>•</span>
                    <a href="#" className="text-accent-ai-purple hover:text-accent-lab-purple">Download Pack</a>
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
              <h2 className="section-title text-research-text mb-6">Teaching Materials Management System</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates the comprehensive teaching materials 
                management system with curriculum development, content organization, delivery 
                optimization, and learning assessment designed to maximize educational effectiveness, 
                student engagement, and knowledge transfer across diverse learning environments.
              </p>
              
              <CodeBlock
                code={teachingMaterialsCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The educational management framework provides systematic approaches to teaching 
                that enable educators to develop comprehensive curricula, optimize delivery methods, 
                and measure learning outcomes effectively across diverse student populations.
              </p>
            </motion.div>

            {/* Resource Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Resource Categories &amp; Material Types</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Lecture Materials</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Comprehensive slide presentations</p>
                    <p>• Interactive demonstration scripts</p>
                    <p>• Multimedia content integration</p>
                    <p>• Real-time polling questions</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Interactive Exercises</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Ethical dilemma scenarios</p>
                    <p>• Case study analysis frameworks</p>
                    <p>• Group discussion prompts</p>
                    <p>• Hands-on coding exercises</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Assessment Tools</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Rubric-based evaluation systems</p>
                    <p>• Peer review frameworks</p>
                    <p>• Project-based assessments</p>
                    <p>• Continuous feedback mechanisms</p>
                  </div>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Online Resources</h3>
                  <div className="space-y-2 text-sm text-research-text-secondary">
                    <p>• Learning management system content</p>
                    <p>• Video lecture recordings</p>
                    <p>• Interactive online modules</p>
                    <p>• Digital collaboration tools</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Educational Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Educational Philosophy &amp; Teaching Approach</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Critical Thinking Development</h3>
                  <p className="body-text text-research-text-secondary">
                    Fostering analytical skills and ethical reasoning through Socratic dialogue, 
                    case study analysis, and structured debate on complex AI ethics issues 
                    that require nuanced understanding and balanced perspectives.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Cross-Cultural Learning</h3>
                  <p className="body-text text-research-text-secondary">
                    Integrating diverse cultural perspectives and multilingual approaches 
                    to AI ethics education, ensuring inclusive learning environments that 
                    respect and leverage cultural diversity in technology understanding.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Practical Application Focus</h3>
                  <p className="body-text text-research-text-secondary">
                    Emphasizing real-world application of ethical principles through 
                    hands-on projects, industry case studies, and collaborative problem-solving 
                    that bridges theoretical knowledge with practical implementation.
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
                  href="/academic/conference-talks"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous: Conference Talks
                </Link>
                
                <Link
                  href="/academic/ethics-syllabi"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Next: Ethics Syllabi
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
