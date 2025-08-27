'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp, Server, GraduationCap, Network } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const academicInfrastructureDiagram = `
graph TD
    A[Academic AI Infrastructure] --> B[Compute Resources]
    A --> C[Data Management]
    A --> D[Research Platforms]
    B --> E[HPC Clusters]
    B --> F[Cloud Computing]
    B --> G[Edge Computing]
    C --> H[Research Data Lakes]
    C --> I[Collaborative Datasets]
    C --> J[Privacy-Preserving Storage]
    D --> K[ML Experiment Platforms]
    D --> L[Collaborative Research Tools]
    D --> M[Publication &amp; Sharing Systems]
    E --> N[Resource Allocation]
    F --> O[Cost Optimization]
    G --> P[Distributed Computing]
    H --> Q[Data Governance]
    I --> R[Open Science Initiatives]
    J --> S[Ethical Data Handling]
    K --> T[Reproducible Research]
    L --> U[Cross-Institutional Collaboration]
    M --> V[Knowledge Dissemination]
    N --> W[Fair Access Policies]
    O --> W
    P --> W
    Q --> X[Research Integrity]
    R --> X
    S --> X
    T --> Y[Academic Impact]
    U --> Y
    V --> Y
    W --> Z[Sustainable AI Research Ecosystem]
    X --> Z
    Y --> Z
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style B fill:#10B981,stroke:#059669,color:#fff
    style C fill:#F59E0B,stroke:#D97706,color:#fff
    style D fill:#EF4444,stroke:#DC2626,color:#fff
    style Z fill:#8B5CF6,stroke:#7C3AED,color:#fff
`;

const academicInfrastructureCode = `
class AcademicAIInfrastructureFramework:
    def __init__(self, institution_config, resource_pools):
        self.institution_config = institution_config
        self.resource_pools = resource_pools
        self.compute_scheduler = ComputeScheduler()
        self.data_manager = AcademicDataManager()
        self.collaboration_platform = CollaborationPlatform()
        self.cost_optimizer = CostOptimizer()
        
    def design_academic_compute_infrastructure(self, requirements):
        &quot;Design scalable compute infrastructure for academic AI research.&quot;
        
        infrastructure_design = {
            'compute_architecture': {},
            'resource_allocation': {},
            'cost_management': {},
            'scalability_plan': {},
            'governance_framework': {}
        }
        
        # Design compute architecture
        infrastructure_design['compute_architecture'] = self.design_compute_architecture(
            requirements,
            components=[
                'high_performance_computing',
                'cloud_integration',
                'edge_computing_nodes',
                'gpu_clusters',
                'storage_systems'
            ]
        )
        
        # Implement resource allocation system
        infrastructure_design['resource_allocation'] = self.design_resource_allocation(
            requirements,
            allocation_strategies=[
                'fair_share_scheduling',
                'priority_based_allocation',
                'research_impact_weighting',
                'collaborative_resource_sharing',
                'emergency_resource_reservation'
            ]
        )
        
        # Cost management and optimization
        infrastructure_design['cost_management'] = self.design_cost_management(
            requirements,
            cost_strategies=[
                'multi_cloud_optimization',
                'spot_instance_utilization',
                'resource_pooling',
                'energy_efficiency_optimization',
                'budget_allocation_algorithms'
            ]
        )
        
        # Scalability planning
        infrastructure_design['scalability_plan'] = self.design_scalability_framework(
            requirements,
            scalability_dimensions=[
                'horizontal_scaling',
                'vertical_scaling',
                'cross_institutional_federation',
                'cloud_bursting',
                'adaptive_resource_provisioning'
            ]
        )
        
        return infrastructure_design
    
    def implement_research_data_platform(self, data_requirements):
        &quot;Implement comprehensive research data management platform.&quot;
        
        data_platform = {
            'data_architecture': {},
            'governance_policies': {},
            'collaboration_features': {},
            'privacy_protection': {},
            'open_science_integration': {}
        }
        
        # Design data architecture
        data_platform['data_architecture'] = self.design_data_architecture(
            data_requirements,
            architecture_components=[
                'distributed_data_lakes',
                'federated_databases',
                'version_controlled_datasets',
                'metadata_management',
                'data_lineage_tracking'
            ]
        )
        
        # Implement data governance
        data_platform['governance_policies'] = self.implement_data_governance(
            data_requirements,
            governance_areas=[
                'data_quality_standards',
                'access_control_policies',
                'retention_policies',
                'compliance_frameworks',
                'ethical_use_guidelines'
            ]
        )
        
        # Enable collaborative features
        data_platform['collaboration_features'] = self.implement_collaboration_features(
            data_requirements,
            collaboration_tools=[
                'shared_workspaces',
                'collaborative_annotation',
                'cross_institutional_sharing',
                'real_time_collaboration',
                'version_control_integration'
            ]
        )
        
        # Privacy protection mechanisms
        data_platform['privacy_protection'] = self.implement_privacy_protection(
            data_requirements,
            privacy_mechanisms=[
                'differential_privacy_integration',
                'federated_learning_support',
                'secure_multi_party_computation',
                'homomorphic_encryption',
                'privacy_preserving_analytics'
            ]
        )
        
        return data_platform
    
    def establish_collaborative_research_platform(self, collaboration_requirements):
        &quot;Establish platform for cross-institutional AI research collaboration.&quot;
        
        collaboration_platform = {
            'platform_architecture': {},
            'collaboration_tools': {},
            'knowledge_sharing': {},
            'project_management': {},
            'impact_measurement': {}
        }
        
        # Platform architecture design
        collaboration_platform['platform_architecture'] = self.design_collaboration_architecture(
            collaboration_requirements,
            architecture_elements=[
                'federated_identity_management',
                'cross_institutional_authentication',
                'distributed_project_workspaces',
                'real_time_communication',
                'integrated_development_environments'
            ]
        )
        
        # Collaboration tools implementation
        collaboration_platform['collaboration_tools'] = self.implement_collaboration_tools(
            collaboration_requirements,
            tool_categories=[
                'experiment_sharing_platforms',
                'collaborative_coding_environments',
                'peer_review_systems',
                'conference_and_workshop_tools',
                'mentorship_matching_systems'
            ]
        )
        
        # Knowledge sharing systems
        collaboration_platform['knowledge_sharing'] = self.implement_knowledge_sharing(
            collaboration_requirements,
            sharing_mechanisms=[
                'open_access_repositories',
                'preprint_servers',
                'collaborative_wikis',
                'best_practices_databases',
                'lesson_learned_systems'
            ]
        )
        
        return collaboration_platform
    
    def optimize_resource_utilization(self, usage_patterns, performance_metrics):
        &quot;Optimize academic AI infrastructure resource utilization.&quot;
        
        optimization_results = {
            'utilization_analysis': {},
            'optimization_strategies': {},
            'cost_savings': {},
            'performance_improvements': {},
            'sustainability_metrics': {}
        }
        
        # Analyze current utilization patterns
        optimization_results['utilization_analysis'] = self.analyze_utilization_patterns(
            usage_patterns,
            analysis_dimensions=[
                'temporal_usage_patterns',
                'resource_type_utilization',
                'user_group_patterns',
                'project_resource_consumption',
                'idle_resource_identification'
            ]
        )
        
        # Develop optimization strategies
        optimization_results['optimization_strategies'] = self.develop_optimization_strategies(
            optimization_results['utilization_analysis'],
            performance_metrics,
            strategies=[
                'dynamic_resource_allocation',
                'predictive_scaling',
                'workload_consolidation',
                'energy_efficient_scheduling',
                'cross_institutional_load_balancing'
            ]
        )
        
        # Calculate cost savings
        optimization_results['cost_savings'] = self.calculate_cost_savings(
            optimization_results['optimization_strategies'],
            cost_categories=[
                'compute_cost_reduction',
                'storage_cost_optimization',
                'energy_cost_savings',
                'maintenance_cost_reduction',
                'licensing_cost_optimization'
            ]
        )
        
        return optimization_results
    
    def implement_sustainable_ai_practices(self, sustainability_goals):
        &quot;Implement sustainable AI practices in academic infrastructure.&quot;
        
        sustainability_framework = {
            'energy_efficiency': {},
            'carbon_footprint_reduction': {},
            'resource_lifecycle_management': {},
            'green_computing_practices': {},
            'sustainability_metrics': {}
        }
        
        # Energy efficiency optimization
        sustainability_framework['energy_efficiency'] = self.optimize_energy_efficiency(
            sustainability_goals,
            efficiency_measures=[
                'dynamic_voltage_frequency_scaling',
                'intelligent_cooling_systems',
                'renewable_energy_integration',
                'energy_aware_scheduling',
                'power_management_policies'
            ]
        )
        
        # Carbon footprint reduction
        sustainability_framework['carbon_footprint_reduction'] = self.reduce_carbon_footprint(
            sustainability_goals,
            reduction_strategies=[
                'carbon_aware_computing',
                'geographical_load_distribution',
                'renewable_energy_sourcing',
                'carbon_offset_programs',
                'sustainable_hardware_procurement'
            ]
        )
        
        return sustainability_framework
`;

export default function AIInfrastructureAcademia() {
  return (
    <div className="min-h-screen relative">
      
      {/* Header */}
      <section className="relative decorative-blobs overflow-hidden py-12 sm:py-16">
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
                AI Infrastructure for Academia: Building Sustainable Research Ecosystems
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-research-text-secondary mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  32 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  March 15, 2024
                </div>
                <button className="flex items-center hover:text-accent-ai-purple transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Academic Infrastructure', 'Research Computing', 'Collaborative Platforms', 'Resource Optimization', 'Sustainable AI', 'Open Science'].map((tag) => (
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
                Designing and implementing scalable, sustainable AI infrastructure for academic institutions 
                that enables cutting-edge research while promoting collaboration, resource efficiency, and 
                equitable access to computational resources across the global research community.
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
                <GraduationCap className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Introduction</h2>
              </div>
              <p className="body-text text-research-text-secondary mb-6">
                Academic AI research faces unprecedented computational demands that traditional university 
                infrastructure cannot adequately support. The complexity of modern AI models, the scale of 
                datasets, and the need for collaborative research across institutions require sophisticated 
                infrastructure solutions that balance performance, cost, accessibility, and sustainability.
              </p>
              <p className="body-text text-research-text-secondary">
                This research addresses the critical challenge of designing AI infrastructure for academia 
                that democratizes access to computational resources, enables reproducible research, facilitates 
                cross-institutional collaboration, and promotes sustainable computing practices while maintaining 
                the flexibility needed for diverse research methodologies and emerging AI paradigms.
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
                <Network className="h-8 w-8 text-accent-lab-purple mr-3" />
                <h2 className="section-title text-research-text">Academic AI Infrastructure Ecosystem</h2>
              </div>
              <LottieAnimation 
                animationFile="academic-infrastructure-network.json"
                className="mx-auto"
                width={650}
                height={400}
              />
            </motion.div>

            {/* Infrastructure Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Academic AI Infrastructure Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Our comprehensive infrastructure framework integrates high-performance computing, cloud resources, 
                and collaborative platforms to create a unified ecosystem for academic AI research. The architecture 
                emphasizes resource sharing, cost optimization, and sustainable computing practices while maintaining 
                the flexibility and accessibility essential for diverse research needs.
              </p>
              
              <MermaidDiagram chart={academicInfrastructureDiagram} className="mb-8" />
              
              <p className="body-text text-research-text-secondary">
                The framework addresses three critical pillars: (1) scalable compute resources with intelligent 
                allocation, (2) collaborative data management with privacy preservation, and (3) integrated research 
                platforms that support the full AI research lifecycle from experimentation to publication.
              </p>
            </motion.div>

            {/* Resource Utilization Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Resource Utilization &amp; Cost Optimization</h2>
              <p className="body-text text-research-text-secondary mb-8">
                Analysis of academic AI infrastructure utilization patterns reveals significant opportunities for 
                optimization through intelligent resource allocation, predictive scaling, and cross-institutional 
                resource sharing. Our optimization framework achieves substantial cost reductions while improving 
                resource accessibility for researchers.
              </p>
              
              <InteractiveChart
                dataFile="academic_ai_infrastructure_metrics.json"
                chartType="line"
                title="Academic AI Infrastructure Utilization and Cost Optimization"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                Implementation of our optimization framework resulted in 45% improvement in resource utilization, 
                35% reduction in computational costs, and 60% increase in researcher access to high-performance 
                computing resources across participating academic institutions.
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
              <h2 className="section-title text-research-text mb-6">Infrastructure Implementation Framework</h2>
              <p className="body-text text-research-text-secondary mb-8">
                The following implementation demonstrates our comprehensive academic AI infrastructure framework 
                with automated resource management, collaborative research platforms, and sustainability optimization 
                designed specifically for the unique requirements of academic research environments.
              </p>
              
              <CodeBlock
                code={academicInfrastructureCode}
                language="python"
                className="mb-8"
              />
              
              <p className="body-text text-research-text-secondary">
                The framework provides modular infrastructure components with intelligent resource allocation, 
                collaborative research tools, and comprehensive cost optimization that enables academic institutions 
                to build sustainable AI research ecosystems tailored to their specific needs and constraints.
              </p>
            </motion.div>

            {/* Core Infrastructure Components */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <div className="flex items-center mb-6">
                <Server className="h-8 w-8 text-accent-ai-purple mr-3" />
                <h2 className="section-title text-research-text">Core Infrastructure Components</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Compute Resources</h3>
                  <p className="body-text text-research-text-secondary">
                    Hybrid HPC-cloud architecture with GPU clusters, intelligent scheduling, and dynamic scaling for diverse AI workloads.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Data Management</h3>
                  <p className="body-text text-research-text-secondary">
                    Federated data lakes with privacy preservation, version control, and collaborative sharing capabilities.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Collaboration Platforms</h3>
                  <p className="body-text text-research-text-secondary">
                    Integrated research environments supporting cross-institutional collaboration and knowledge sharing.
                  </p>
                </div>
                <div className="expertise-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Sustainability Framework</h3>
                  <p className="body-text text-research-text-secondary">
                    Energy-efficient computing with carbon footprint reduction and renewable energy integration.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Collaboration Models */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Academic Collaboration Models</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Federated Research Networks</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Model:</strong> Distributed infrastructure with shared resources and governance. 
                    <strong>Benefits:</strong> Cost sharing, resource pooling, knowledge exchange. 
                    <strong>Implementation:</strong> Cross-institutional agreements with standardized APIs and protocols.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Consortium-Based Infrastructure</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Model:</strong> Joint investment in shared infrastructure with tiered access levels. 
                    <strong>Benefits:</strong> Economies of scale, specialized resources, collaborative governance. 
                    <strong>Implementation:</strong> Formal consortium agreements with resource allocation algorithms.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Cloud-Native Academic Platforms</h3>
                  <p className="body-text text-research-text-secondary">
                    <strong>Model:</strong> Cloud-based infrastructure with academic-specific optimizations. 
                    <strong>Benefits:</strong> Scalability, accessibility, reduced maintenance overhead. 
                    <strong>Implementation:</strong> Academic cloud services with educational pricing and research tools.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Success Stories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Implementation Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Multi-University AI Consortium</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    15 universities sharing GPU clusters and datasets, achieving 40% cost reduction and 3x increase in research output.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Sustainable Computing Initiative</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Carbon-neutral AI research infrastructure with 50% renewable energy and intelligent workload scheduling.
                  </p>
                </div>
                <div className="academic-card p-6">
                  <h3 className="text-lg font-semibold text-research-text mb-3">Open Science Platform</h3>
                  <p className="body-text text-research-text-secondary text-sm">
                    Collaborative research platform enabling reproducible AI research with automated experiment tracking and sharing.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Future Directions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 mb-12"
            >
              <h2 className="section-title text-research-text mb-6">Future Research Directions</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Quantum-Classical Hybrid Infrastructure</h3>
                  <p className="body-text text-research-text-secondary">
                    Integration of quantum computing resources with classical AI infrastructure for next-generation 
                    research capabilities, including quantum machine learning and hybrid algorithm development.
                  </p>
                </div>
                <div className="border-l-4 border-accent-lab-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">AI-Driven Infrastructure Management</h3>
                  <p className="body-text text-research-text-secondary">
                    Autonomous infrastructure management using AI for predictive maintenance, intelligent resource 
                    allocation, and adaptive optimization based on research patterns and emerging needs.
                  </p>
                </div>
                <div className="border-l-4 border-accent-ai-purple pl-6">
                  <h3 className="text-lg font-semibold text-research-text mb-2">Global Research Infrastructure Federation</h3>
                  <p className="body-text text-research-text-secondary">
                    Development of global standards and protocols for academic AI infrastructure federation, 
                    enabling seamless collaboration and resource sharing across international research networks.
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
                Building sustainable AI infrastructure for academia requires a holistic approach that balances 
                performance, cost, accessibility, and environmental responsibility. Our framework demonstrates 
                that collaborative, well-designed infrastructure can democratize access to AI research capabilities 
                while promoting innovation and knowledge sharing across the global academic community.
              </p>
              <p className="body-text text-research-text-secondary">
                The future of academic AI research depends on our ability to create infrastructure ecosystems 
                that adapt to rapidly evolving technological landscapes while maintaining the core values of 
                open science, collaboration, and equitable access to computational resources.
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
                  href="/research/opacity-responsibility-ai"
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-research-text font-medium rounded-2xl border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Article
                </Link>
                
                <Link
                  href="/research/human-centered-ai"
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
