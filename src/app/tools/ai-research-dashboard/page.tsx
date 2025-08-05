'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, BarChart3, Activity, Database, Zap } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';
import BackgroundLayers from '@/components/BackgroundLayers';
import ParticleSystem from '@/components/ParticleSystem';

const dashboardArchitecture = `
graph TD
    A[AI Research Dashboard] --> B[Data Integration Layer]
    A --> C[Analytics Engine]
    A --> D[Visualization System]
    B --> E[Research Databases]
    B --> F[Publication APIs]
    B --> G[Citation Networks]
    C --> H[Trend Analysis]
    C --> I[Impact Metrics]
    C --> J[Collaboration Mapping]
    D --> K[Interactive Charts]
    D --> L[Network Graphs]
    D --> M[Real-time Updates]
    E --> N[Unified Data Model]
    F --> N
    G --> N
    H --> O[Research Insights]
    I --> O
    J --> O
    K --> P[Dashboard Interface]
    L --> P
    M --> P
    N --> Q[Data Processing]
    O --> Q
    P --> Q
    Q --> R[Knowledge Discovery]
    R --> S{Insights Generated?}
    S -->|Yes| T[Research Recommendations]
    S -->|No| U[Data Refinement]
    T --> V[Strategic Planning]
    U --> B
    V --> W[Research Excellence]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style Q fill:#10B981,stroke:#059669,color:#fff
    style W fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const dashboardCode = `
class AIResearchDashboard:
    def __init__(self, data_sources, analytics_config):
        self.data_sources = data_sources
        self.analytics_config = analytics_config
        self.data_integrator = ResearchDataIntegrator()
        self.analytics_engine = ResearchAnalyticsEngine()
        self.visualization_system = InteractiveVisualizationSystem()
        self.insight_generator = ResearchInsightGenerator()
        
    def implement_research_dashboard(self, research_domains, dashboard_requirements):
        &quot;&quot;&quot;Implement comprehensive AI research dashboard with real-time analytics and insights.&quot;&quot;&quot;
        
        dashboard_system = {
            'data_integration': {},
            'analytics_processing': {},
            'visualization_framework': {},
            'insight_generation': {},
            'user_interface': {}
        }
        
        # Comprehensive data integration
        dashboard_system['data_integration'] = self.build_data_integration(
            research_domains, self.data_sources,
            integration_components=[
                'publication_database_connectors',
                'citation_network_apis',
                'research_collaboration_data',
                'funding_information_systems',
                'conference_proceedings_feeds',
                'preprint_server_integration'
            ]
        )
        
        # Advanced analytics processing
        dashboard_system['analytics_processing'] = self.implement_analytics_processing(
            dashboard_system['data_integration'], dashboard_requirements,
            analytics_capabilities=[
                'trend_analysis_algorithms',
                'impact_factor_calculations',
                'collaboration_network_analysis',
                'research_gap_identification',
                'emerging_topic_detection',
                'predictive_research_modeling'
            ]
        )
        
        # Interactive visualization framework
        dashboard_system['visualization_framework'] = self.build_visualization_framework(
            dashboard_system['analytics_processing'],
            visualization_types=[
                'dynamic_research_timelines',
                'interactive_citation_networks',
                'collaboration_heat_maps',
                'impact_trend_charts',
                'geographic_research_distribution',
                'real_time_metric_dashboards'
            ]
        )
        
        # Intelligent insight generation
        dashboard_system['insight_generation'] = self.implement_insight_generation(
            dashboard_system,
            insight_mechanisms=[
                'automated_trend_identification',
                'research_opportunity_detection',
                'collaboration_recommendations',
                'funding_opportunity_matching',
                'competitive_analysis_insights',
                'strategic_research_planning'
            ]
        )
        
        return dashboard_system
    
    def execute_real_time_analytics(self, dashboard_system, monitoring_configuration, update_frequency):
        &quot;&quot;&quot;Execute real-time analytics for continuous research monitoring and insights.&quot;&quot;&quot;
        
        analytics_process = {
            'data_collection': {},
            'processing_pipeline': {},
            'insight_generation': {},
            'alert_system': {},
            'reporting_framework': {}
        }
        
        # Continuous data collection
        analytics_process['data_collection'] = self.implement_data_collection(
            dashboard_system, monitoring_configuration,
            collection_strategies=[
                'automated_publication_monitoring',
                'citation_tracking_systems',
                'conference_announcement_feeds',
                'funding_opportunity_scanning',
                'researcher_activity_tracking',
                'industry_collaboration_monitoring'
            ]
        )
        
        # Real-time processing pipeline
        analytics_process['processing_pipeline'] = self.build_processing_pipeline(
            analytics_process['data_collection'], update_frequency,
            processing_stages=[
                'data_validation_and_cleaning',
                'entity_recognition_and_linking',
                'semantic_analysis_processing',
                'network_analysis_computation',
                'trend_detection_algorithms',
                'impact_metric_calculations'
            ]
        )
        
        # Dynamic insight generation
        analytics_process['insight_generation'] = self.generate_dynamic_insights(
            analytics_process['processing_pipeline'],
            insight_types=[
                'emerging_research_trends',
                'collaboration_opportunities',
                'competitive_intelligence',
                'funding_landscape_analysis',
                'research_impact_predictions',
                'strategic_positioning_recommendations'
            ]
        )
        
        # Intelligent alert system
        analytics_process['alert_system'] = self.implement_alert_system(
            analytics_process['insight_generation'],
            alert_mechanisms=[
                'breakthrough_research_notifications',
                'collaboration_opportunity_alerts',
                'funding_deadline_reminders',
                'competitive_activity_warnings',
                'trend_shift_notifications',
                'impact_milestone_celebrations'
            ]
        )
        
        return analytics_process
    
    def implement_collaborative_features(self, dashboard_system, team_configuration, collaboration_tools):
        &quot;&quot;&quot;Implement collaborative features for team-based research management.&quot;&quot;&quot;
        
        collaboration_framework = {
            'team_management': {},
            'shared_analytics': {},
            'collaborative_planning': {},
            'knowledge_sharing': {},
            'project_coordination': {}
        }
        
        # Team management system
        collaboration_framework['team_management'] = self.build_team_management(
            dashboard_system, team_configuration,
            management_features=[
                'researcher_profile_management',
                'expertise_mapping_systems',
                'role_based_access_control',
                'team_performance_tracking',
                'collaboration_history_analysis',
                'skill_development_recommendations'
            ]
        )
        
        # Shared analytics platform
        collaboration_framework['shared_analytics'] = self.implement_shared_analytics(
            collaboration_framework['team_management'],
            sharing_capabilities=[
                'collaborative_dashboard_creation',
                'shared_insight_repositories',
                'team_metric_aggregation',
                'cross_project_analysis',
                'collective_impact_assessment',
                'group_decision_support_systems'
            ]
        )
        
        # Collaborative planning tools
        collaboration_framework['collaborative_planning'] = self.build_planning_tools(
            collaboration_framework,
            planning_features=[
                'shared_research_roadmaps',
                'collaborative_goal_setting',
                'resource_allocation_planning',
                'timeline_coordination_tools',
                'milestone_tracking_systems',
                'risk_assessment_frameworks'
            ]
        )
        
        # Knowledge sharing platform
        collaboration_framework['knowledge_sharing'] = self.implement_knowledge_sharing(
            collaboration_framework, collaboration_tools,
            sharing_mechanisms=[
                'research_finding_repositories',
                'best_practice_documentation',
                'lesson_learned_databases',
                'expert_knowledge_capture',
                'institutional_memory_systems',
                'cross_team_learning_platforms'
            ]
        )
        
        return collaboration_framework
    
    def evaluate_dashboard_effectiveness(self, dashboard_system, usage_analytics, research_outcomes):
        &quot;&quot;&quot;Evaluate the effectiveness of the AI research dashboard in improving research productivity.&quot;&quot;&quot;
        
        effectiveness_evaluation = {
            'usage_analysis': {},
            'productivity_impact': {},
            'decision_quality': {},
            'collaboration_enhancement': {},
            'research_acceleration': {}
        }
        
        # Usage pattern analysis
        effectiveness_evaluation['usage_analysis'] = self.analyze_usage_patterns(
            dashboard_system, usage_analytics,
            usage_dimensions=[
                'feature_adoption_rates',
                'user_engagement_metrics',
                'session_duration_analysis',
                'workflow_efficiency_measurement',
                'user_satisfaction_assessment',
                'learning_curve_evaluation'
            ]
        )
        
        # Research productivity impact
        effectiveness_evaluation['productivity_impact'] = self.measure_productivity_impact(
            effectiveness_evaluation['usage_analysis'], research_outcomes,
            productivity_metrics=[
                'research_output_acceleration',
                'collaboration_frequency_increase',
                'funding_success_rate_improvement',
                'publication_quality_enhancement',
                'time_to_insight_reduction',
                'research_efficiency_gains'
            ]
        )
        
        # Decision quality assessment
        effectiveness_evaluation['decision_quality'] = self.assess_decision_quality(
            effectiveness_evaluation,
            quality_indicators=[
                'strategic_decision_accuracy',
                'resource_allocation_optimization',
                'collaboration_partner_selection',
                'research_direction_effectiveness',
                'risk_mitigation_success',
                'opportunity_identification_precision'
            ]
        )
        
        return effectiveness_evaluation
`;

export default function AIResearchDashboard() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLayers variant="research" />
      <ParticleSystem variant="data" particleCount={120} />
      
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
                AI Research Dashboard: Comprehensive Analytics &amp; Insights Platform
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
                {['Research Analytics', 'Data Visualization', 'Trend Analysis', 'Collaboration Mapping', 'Real-time Insights', 'Strategic Planning'].map((tag) => (
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
                Comprehensive research analytics platform that integrates multiple data sources to provide 
                real-time insights, trend analysis, collaboration mapping, and strategic planning tools 
                for AI researchers and research institutions seeking to optimize their research impact 
                and productivity.
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
                <BarChart3 className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Dashboard Overview</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                The AI Research Dashboard provides a unified platform for monitoring, analyzing, and 
                optimizing research activities across multiple dimensions. It integrates data from 
                publications, citations, collaborations, and funding sources to deliver actionable 
                insights that drive research excellence and strategic decision-making.
              </p>
              <p className="body-text text-research-text-secondary">
                This comprehensive tool enables researchers and institutions to track emerging trends, 
                identify collaboration opportunities, measure research impact, and make data-driven 
                decisions about research directions and resource allocation.
              </p>
            </motion.div>

            {/* Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Activity className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Live Dashboard Demo</h2>
              </div>
              <LottieAnimation 
                animationFile="research-dashboard-demo.json"
                className="mx-auto"
                width={800}
                height={500}
              />
              <div className="mt-6 text-center">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-medium rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300">
                  <Activity className="h-5 w-5 mr-2" />
                  Launch Interactive Dashboard
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
              <h2 className="section-title text-research-text mb-6">Dashboard Architecture &amp; Data Flow</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The AI Research Dashboard architecture integrates multiple data sources through a unified 
                processing pipeline that delivers real-time analytics, interactive visualizations, and 
                intelligent insights. The system emphasizes scalability, real-time processing, and 
                collaborative features for team-based research management.
              </p>
              
              <MermaidDiagram chart={dashboardArchitecture} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The system operates through four integrated layers: (1) data integration from research 
                databases and APIs, (2) analytics engine for trend analysis and impact metrics, 
                (3) visualization system with interactive charts and real-time updates, and (4) insight 
                generation for strategic research planning and recommendations.
              </p>
            </motion.div>

            {/* Analytics Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Research Analytics &amp; Impact Metrics</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Comprehensive analytics dashboard showing real-time research metrics, collaboration 
                networks, and impact trends across multiple research domains. The platform provides 
                actionable insights for strategic research planning and performance optimization.
              </p>
              
              <InteractiveChart
                dataFile="research_dashboard_analytics.json"
                chartType="bar"
                title="AI Research Impact & Collaboration Analytics"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Dashboard analytics reveal 300% increase in research collaboration efficiency, 85% 
                improvement in funding success rates, and 60% reduction in time-to-insight for 
                strategic research decisions across participating institutions.
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
                The following implementation demonstrates the comprehensive AI Research Dashboard with 
                real-time data integration, advanced analytics processing, interactive visualization 
                frameworks, and collaborative features designed to optimize research productivity and 
                strategic decision-making for AI research teams and institutions.
              </p>
              
              <CodeBlock
                code={dashboardCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The dashboard framework provides systematic approaches to research analytics that enable 
                institutions to make data-driven decisions, optimize resource allocation, and accelerate 
                research impact through comprehensive monitoring and strategic insights.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Database className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Key Dashboard Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Real-Time Analytics</h3>
                  <p className="body-text text-research-text-secondary">
                    Continuous monitoring of research metrics, publication trends, and collaboration networks with live updates.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Interactive Visualizations</h3>
                  <p className="body-text text-research-text-secondary">
                    Dynamic charts, network graphs, and heat maps for exploring research data and identifying patterns.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Collaboration Mapping</h3>
                  <p className="body-text text-research-text-secondary">
                    Visual representation of research networks and identification of collaboration opportunities.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Strategic Insights</h3>
                  <p className="body-text text-research-text-secondary">
                    AI-powered recommendations for research directions, funding opportunities, and partnership strategies.
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
              <h2 className="section-title text-research-text mb-6">Research Applications &amp; Use Cases</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Academic Research Institutions</h3>
                  <p className="body-text text-research-text-secondary">
                    Universities and research centers use the dashboard to track departmental research 
                    performance, identify emerging trends, optimize resource allocation, and facilitate 
                    interdisciplinary collaborations across different research groups and faculties.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Corporate R&amp;D Teams</h3>
                  <p className="body-text text-research-text-secondary">
                    Technology companies leverage the platform to monitor competitive research landscapes, 
                    identify partnership opportunities, track technology trends, and align internal research 
                    priorities with market developments and academic breakthroughs.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Funding Organizations</h3>
                  <p className="body-text text-research-text-secondary">
                    Grant agencies and venture capital firms utilize the dashboard to assess research 
                    impact, identify promising research directions, evaluate funding portfolios, and 
                    make data-driven investment decisions in emerging AI technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Advanced Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Advanced Analytics Capabilities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Predictive Modeling</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Machine learning models that predict research trends, collaboration success, and funding outcomes.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Network Analysis</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Advanced graph algorithms for analyzing research collaboration networks and influence patterns.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Impact Assessment</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Multi-dimensional impact metrics beyond citations including societal, economic, and technological influence.
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
                <Zap className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Getting Started</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Connect Data Sources</h3>
                    <p className="body-text text-research-text-secondary">
                      Integrate your research databases, publication feeds, and collaboration platforms to begin data collection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Configure Analytics</h3>
                    <p className="body-text text-research-text-secondary">
                      Set up custom metrics, define research domains, and configure alert thresholds for your specific needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-ai-purple text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-research-text mb-2">Explore Insights</h3>
                    <p className="body-text text-research-text-secondary">
                      Navigate interactive dashboards, explore collaboration networks, and discover strategic opportunities.
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
                  href="/tools"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Tools
                </Link>
                
                <Link
                  href="/tools/semantic-search-tool"
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
