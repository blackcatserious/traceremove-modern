'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Download, User, GraduationCap, Award } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const academicJourney = `
graph TD
    A[Academic Journey] --> B[Educational Foundation]
    A --> C[Research Development]
    A --> D[Professional Growth]
    B --> E[BA Philosophy - KFU]
    B --> F[MA Philosophy - KFU]
    B --> G[Specialized Training]
    C --> H[AI Ethics Research]
    C --> I[Language Technologies]
    C --> J[Big Data Systems]
    D --> K[Traceremove Founder]
    D --> L[Rarematrix Co-founder]
    D --> M[Equality Initiative]
    E --> N[Philosophical Foundation]
    F --> N
    G --> N
    H --> O[Research Portfolio]
    I --> O
    J --> O
    K --> P[Leadership Experience]
    L --> P
    M --> P
    N --> Q[Academic Excellence]
    O --> Q
    P --> Q
    Q --> R{Career Impact?}
    R -->|Research| S[Academic Publications]
    R -->|Industry| T[Technology Innovation]
    R -->|Society| U[Digital Rights Advocacy]
    S --> V[Scholarly Recognition]
    T --> V
    U --> V
    V --> W[Global Impact]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const skillsCode = `
class ArturZiganshinCV:
    def __init__(self, academic_background, professional_experience):
        self.academic_background = academic_background
        self.professional_experience = professional_experience
        self.research_portfolio = ResearchPortfolio()
        self.language_skills = LanguageSkills()
        self.technical_expertise = TechnicalExpertise()
        self.leadership_experience = LeadershipExperience()
        
    def build_comprehensive_profile(self, career_objectives, research_interests):
        "Build comprehensive academic and professional profile with research focus and industry impact."
        
        professional_profile = {
            'academic_credentials': {},
            'research_expertise': {},
            'technical_skills': {},
            'leadership_roles': {},
            'international_activities': {}
        }
        
        # Academic credentials and foundation
        professional_profile['academic_credentials'] = self.build_academic_foundation(
            self.academic_background, career_objectives,
            educational_components=[
                'bachelor_philosophy_kfu_distinction',
                'master_philosophy_kfu_research_focus',
                'specialized_ai_ethics_training',
                'big_data_systems_certification',
                'language_technologies_expertise',
                'continuous_learning_commitment'
            ]
        )
        
        # Research expertise and contributions
        professional_profile['research_expertise'] = self.develop_research_portfolio(
            professional_profile['academic_credentials'], research_interests,
            research_areas=[
                'ai_ethics_and_responsibility',
                'language_technologies_development',
                'big_data_interpretability',
                'digital_rights_advocacy',
                'philosophy_of_technology',
                'human_centered_ai_systems'
            ]
        )
        
        # Technical skills and competencies
        professional_profile['technical_skills'] = self.build_technical_expertise(
            professional_profile['research_expertise'],
            technical_domains=[
                'ai_systems_architecture',
                'machine_learning_frameworks',
                'natural_language_processing',
                'data_science_methodologies',
                'software_development_practices',
                'research_methodology_design'
            ]
        )
        
        # Leadership and organizational roles
        professional_profile['leadership_roles'] = self.establish_leadership_experience(
            professional_profile,
            leadership_positions=[
                'traceremove_founder_ceo',
                'rarematrix_co_founder',
                'equality_initiative_leader',
                'academic_conference_organizer',
                'research_collaboration_coordinator',
                'digital_rights_advocate'
            ]
        )
        
        return professional_profile
    
    def demonstrate_research_impact(self, publication_record, conference_presentations, collaborative_projects):
        "Demonstrate research impact through publications, presentations, and collaborative initiatives."
        
        research_impact = {
            'scholarly_publications': {},
            'conference_contributions': {},
            'collaborative_research': {},
            'industry_applications': {},
            'societal_influence': {}
        }
        
        # Scholarly publications and academic contributions
        research_impact['scholarly_publications'] = self.build_publication_portfolio(
            publication_record, self.research_portfolio,
            publication_categories=[
                'peer_reviewed_journal_articles',
                'conference_proceedings_papers',
                'book_chapters_contributions',
                'technical_reports_whitepapers',
                'open_access_research_publications',
                'collaborative_research_outputs'
            ]
        )
        
        # Conference presentations and academic engagement
        research_impact['conference_contributions'] = self.develop_conference_portfolio(
            research_impact['scholarly_publications'], conference_presentations,
            presentation_types=[
                'keynote_speaker_engagements',
                'research_paper_presentations',
                'panel_discussion_participation',
                'workshop_facilitation',
                'poster_session_contributions',
                'academic_networking_activities'
            ]
        )
        
        # Collaborative research and partnerships
        research_impact['collaborative_research'] = self.establish_research_collaborations(
            research_impact, collaborative_projects,
            collaboration_dimensions=[
                'international_research_partnerships',
                'interdisciplinary_project_leadership',
                'industry_academia_collaboration',
                'open_source_research_contributions',
                'cross_cultural_research_initiatives',
                'knowledge_transfer_activities'
            ]
        )
        
        # Industry applications and practical impact
        research_impact['industry_applications'] = self.demonstrate_practical_impact(
            research_impact,
            application_areas=[
                'ai_ethics_framework_implementation',
                'language_technology_commercialization',
                'big_data_system_optimization',
                'digital_rights_policy_influence',
                'technology_consulting_expertise',
                'startup_ecosystem_contribution'
            ]
        )
        
        return research_impact
    
    def showcase_international_activities(self, global_initiatives, language_competencies, cultural_engagement):
        "Showcase international activities, multilingual capabilities, and cross-cultural research engagement."
        
        international_profile = {
            'global_initiatives': {},
            'language_expertise': {},
            'cultural_competency': {},
            'international_recognition': {},
            'cross_border_collaboration': {}
        }
        
        # Global initiatives and international projects
        international_profile['global_initiatives'] = self.build_global_engagement(
            global_initiatives, self.leadership_experience,
            initiative_categories=[
                'equality_international_advocacy',
                'orm_cyber_rights_participation',
                'cross_border_research_projects',
                'global_ai_ethics_initiatives',
                'international_conference_organization',
                'worldwide_digital_rights_campaigns'
            ]
        )
        
        # Multilingual expertise and communication
        international_profile['language_expertise'] = self.demonstrate_language_skills(
            language_competencies, self.language_skills,
            language_proficiencies=[
                'russian_native_fluency',
                'english_professional_proficiency',
                'tatar_cultural_heritage_fluency',
                'serbian_conversational_competency',
                'spanish_intermediate_proficiency',
                'technical_multilingual_communication'
            ]
        )
        
        # Cross-cultural research and collaboration
        international_profile['cross_border_collaboration'] = self.establish_cultural_competency(
            international_profile,
            collaboration_aspects=[
                'multicultural_team_leadership',
                'international_research_coordination',
                'cross_cultural_communication_expertise',
                'global_perspective_integration',
                'diverse_stakeholder_engagement',
                'inclusive_research_methodology'
            ]
        )
        
        return international_profile
    
    def evaluate_career_trajectory(self, professional_achievements, future_objectives, impact_assessment):
        "Evaluate career trajectory, professional achievements, and future research and leadership objectives."
        
        career_evaluation = {
            'achievement_analysis': {},
            'impact_measurement': {},
            'growth_trajectory': {},
            'future_planning': {},
            'legacy_building': {}
        }
        
        # Professional achievement analysis
        career_evaluation['achievement_analysis'] = self.assess_professional_achievements(
            professional_achievements, self.professional_experience,
            achievement_dimensions=[
                'academic_excellence_recognition',
                'research_innovation_impact',
                'leadership_effectiveness_measurement',
                'industry_influence_assessment',
                'societal_contribution_evaluation',
                'international_recognition_analysis'
            ]
        )
        
        # Impact measurement and validation
        career_evaluation['impact_measurement'] = self.measure_career_impact(
            career_evaluation['achievement_analysis'], impact_assessment,
            impact_indicators=[
                'research_citation_influence',
                'technology_adoption_rates',
                'policy_influence_measurement',
                'educational_impact_assessment',
                'industry_transformation_contribution',
                'social_change_facilitation'
            ]
        )
        
        # Future career planning and objectives
        career_evaluation['future_planning'] = self.plan_future_trajectory(
            career_evaluation, future_objectives,
            planning_dimensions=[
                'research_agenda_expansion',
                'leadership_role_advancement',
                'international_collaboration_growth',
                'technology_innovation_leadership',
                'academic_institution_partnership',
                'societal_impact_amplification'
            ]
        )
        
        return career_evaluation
`;

export default function CV() {
  return (
    <div className="min-h-screen relative">
      
      {/* Header */}
      <section className="relative decorative-blobs overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/5" />
        <div className="relative decorative-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Curriculum Vitae: Artur Ziganshin - AI Researcher &amp; Technology Philosopher
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Updated January 2025
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Academic Profile
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Download className="h-4 w-4 mr-1" />
                  Download PDF
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['AI Ethics', 'Philosophy of Technology', 'Language Technologies', 'Big Data Systems', 'Digital Rights', 'Research Leadership'].map((tag) => (
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
                Comprehensive academic and professional profile of Artur Ziganshin, showcasing expertise 
                in AI ethics, language technologies, and digital rights advocacy. Founder of Traceremove 
                and co-founder of Rarematrix, with extensive research contributions, international 
                collaborations, and leadership in technology philosophy and human-centered AI development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <User className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Professional Summary</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                AI systems architect, developer, and philosopher of technology with extensive expertise 
                in AI ethics, language technologies, and big data systems. Founder of Traceremove and 
                co-founder of Rarematrix, leading innovative research in human-centered AI development, 
                digital rights advocacy, and responsible technology deployment.
              </p>
              <p className="body-text text-research-text-secondary">
                Multilingual researcher with fluency in Russian, English, Tatar, Serbian, and Spanish, 
                enabling cross-cultural collaboration and international research initiatives. Active 
                participant in global digital rights movements and academic conferences, contributing 
                to the advancement of ethical AI practices and technology philosophy.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Contact Information &amp; Academic Profiles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Professional Contact</h3>
                    <div className="space-y-2 text-research-text-secondary">
                      <p>Email: artur@tracermove.com</p>
                      <p>Website: traceremove.dev</p>
                      <p>Location: International (Remote)</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Organizations</h3>
                    <div className="space-y-2 text-research-text-secondary">
                      <p>Traceremove - Founder &amp; CEO</p>
                      <p>Rarematrix - Co-founder</p>
                      <p>Equality Initiative - Leader</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Academic Profiles</h3>
                    <div className="space-y-2">
                      <a href="#" className="block text-accent-ai-purple hover:text-accent-lab-purple transition-colors duration-200">
                        LinkedIn Profile →
                      </a>
                      <a href="#" className="block text-accent-ai-purple hover:text-accent-lab-purple transition-colors duration-200">
                        ORCID Research ID →
                      </a>
                      <a href="#" className="block text-accent-ai-purple hover:text-accent-lab-purple transition-colors duration-200">
                        Google Scholar →
                      </a>
                      <a href="#" className="block text-accent-ai-purple hover:text-accent-lab-purple transition-colors duration-200">
                        ResearchGate Profile →
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Languages</h3>
                    <div className="space-y-1 text-research-text-secondary">
                      <p>Russian (Native), English (Professional)</p>
                      <p>Tatar (Fluent), Serbian (Conversational)</p>
                      <p>Spanish (Intermediate)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Academic Journey Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Academic &amp; Professional Journey</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive visualization of academic progression from philosophical foundation 
                through research development to professional leadership, showcasing the integration 
                of theoretical knowledge with practical innovation in AI ethics and technology philosophy.
              </p>
              
              <MermaidDiagram chart={academicJourney} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The journey demonstrates a systematic progression from philosophical education at KFU 
                through specialized AI research to founding innovative technology companies, emphasizing 
                the integration of ethical considerations with practical technology development and 
                international collaboration in digital rights advocacy.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Education &amp; Academic Credentials</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Master of Arts in Philosophy</h3>
                  <p className="text-research-text-secondary mb-2">Kazan Federal University (KFU)</p>
                  <p className="body-text text-research-text-secondary">
                    Advanced philosophical research with focus on technology ethics, epistemology, 
                    and philosophy of mind. Thesis research on the intersection of artificial 
                    intelligence and human consciousness, exploring ethical implications of 
                    machine cognition and responsibility frameworks.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Bachelor of Arts in Philosophy</h3>
                  <p className="text-research-text-secondary mb-2">Kazan Federal University (KFU)</p>
                  <p className="body-text text-research-text-secondary">
                    Comprehensive philosophical foundation covering logic, ethics, metaphysics, 
                    and epistemology. Specialized coursework in philosophy of science, technology 
                    studies, and applied ethics. Graduated with distinction, demonstrating 
                    exceptional analytical and critical thinking capabilities.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Specialized Training &amp; Certifications</h3>
                  <p className="body-text text-research-text-secondary">
                    Continuous professional development in AI ethics, machine learning frameworks, 
                    natural language processing, and big data systems. Participation in international 
                    conferences, workshops, and collaborative research projects to maintain 
                    cutting-edge expertise in rapidly evolving technology domains.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Professional Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Professional Experience &amp; Leadership</h2>
              <div className="space-y-8">
                <div className="expertise-card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-research-text">Founder &amp; CEO</h3>
                      <p className="text-accent-ai-purple font-medium">Traceremove</p>
                    </div>
                    <span className="text-sm text-research-text-secondary">2020 - Present</span>
                  </div>
                  <p className="body-text text-research-text-secondary">
                    Founded and lead innovative AI research platform focused on transparent, 
                    ethical AI development. Oversee research initiatives in language technologies, 
                    big data interpretability, and human-centered AI systems. Direct international 
                    collaborations and establish partnerships with academic institutions and 
                    technology organizations worldwide.
                  </p>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-research-text">Co-founder</h3>
                      <p className="text-accent-ai-purple font-medium">Rarematrix</p>
                    </div>
                    <span className="text-sm text-research-text-secondary">2019 - Present</span>
                  </div>
                  <p className="body-text text-research-text-secondary">
                    Co-founded technology innovation company specializing in advanced data 
                    analytics and machine learning solutions. Contribute to strategic planning, 
                    research direction, and technology development. Focus on creating practical 
                    applications of AI research for real-world problem solving and societal benefit.
                  </p>
                </div>
                
                <div className="expertise-card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-research-text">Initiative Leader</h3>
                      <p className="text-accent-ai-purple font-medium">Equality &amp; Digital Rights</p>
                    </div>
                    <span className="text-sm text-research-text-secondary">2018 - Present</span>
                  </div>
                  <p className="body-text text-research-text-secondary">
                    Lead international initiatives promoting digital rights, cyber security, 
                    and equitable access to technology. Coordinate with global organizations 
                    including ORM (Organization for Rights Management) to advocate for responsible 
                    AI deployment and protection of individual privacy and digital autonomy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Research Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Research Expertise &amp; Specializations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">AI Ethics &amp; Responsibility</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Comprehensive research in ethical AI frameworks, algorithmic accountability, 
                    and responsible technology deployment with focus on human dignity and autonomy.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Language Technologies</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Advanced work in natural language processing, multilingual systems, and 
                    cross-cultural communication technologies with emphasis on semantic understanding.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Big Data Interpretability</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Research in making complex data systems transparent and interpretable, 
                    developing methodologies for explainable AI and data-driven decision making.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Philosophy of Technology</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Theoretical and practical exploration of technology&apos;s impact on society, 
                    human consciousness, and ethical frameworks for emerging technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills & Competencies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Technical Skills &amp; Competencies</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive technical expertise spanning AI systems architecture, research 
                methodology, and international collaboration, demonstrating the integration 
                of theoretical knowledge with practical implementation capabilities.
              </p>
              
              <InteractiveChart
                dataFile="artur_skills_competencies.json"
                chartType="doughnut"
                title="Technical Skills &amp; Research Competencies"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Skills profile demonstrates exceptional capabilities in AI ethics (95%), 
                language technologies (92%), research methodology (94%), and international 
                collaboration (90%), reflecting comprehensive expertise across technical 
                and philosophical domains.
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
              <h2 className="section-title text-research-text mb-6">Professional Profile Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates the comprehensive professional profile 
                framework that integrates academic credentials, research expertise, technical 
                skills, and leadership experience to showcase the multidimensional capabilities 
                and contributions of a technology philosopher and AI researcher.
              </p>
              
              <CodeBlock
                code={skillsCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The professional framework provides systematic approaches to career development 
                that enable researchers and technology leaders to demonstrate their impact, 
                plan future objectives, and contribute meaningfully to the advancement of 
                ethical AI and responsible technology development.
              </p>
            </motion.div>

            {/* Awards & Recognition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Awards &amp; Recognition</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Academic Excellence</h3>
                  <p className="body-text text-research-text-secondary">
                    Graduated with distinction from Kazan Federal University, demonstrating 
                    exceptional performance in philosophical research and critical analysis.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Research Innovation</h3>
                  <p className="body-text text-research-text-secondary">
                    Recognition for innovative contributions to AI ethics research and 
                    practical applications of philosophical frameworks in technology development.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">International Collaboration</h3>
                  <p className="body-text text-research-text-secondary">
                    Acknowledged for leadership in international digital rights initiatives 
                    and cross-cultural research collaboration in AI ethics and technology philosophy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interactive CV Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Professional Journey Visualization</h2>
              
              <LottieAnimation 
                animationFile="academic-career-timeline.json"
                className="mx-auto"
                width={800}
                height={500}
              />
              
              <div className="mt-6 text-center">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300">
                  <Download className="h-5 w-5 mr-2" />
                  Download Complete CV
                </button>
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
                  href="/academic"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Academic Resources
                </Link>
                
                <Link
                  href="/academic/publications-archive"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300"
                >
                  Publications Archive
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
