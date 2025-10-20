'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import InteractiveChart from '@/components/InteractiveChart';
import LottieAnimation from '@/components/LottieAnimation';
import MermaidDiagram from '@/components/MermaidDiagram';
import CodeBlock from '@/components/CodeBlock';

const agentWorkflowDiagram = `
graph TD
    A[User Request] --> B[Task Planning]
    B --> C[Tool Selection]
    C --> D[Tool Execution]
    D --> E{Success?}
    E -->|Yes| F[Result Processing]
    E -->|No| G[Error Recovery]
    G --> H{Retry?}
    H -->|Yes| C
    H -->|No| I[Fallback Strategy]
    I --> J[Human Intervention]
    F --> K[Response Generation]
    K --> L[User Response]
    
    style A fill:#3B82F6,stroke:#2563EB,color:#fff
    style L fill:#10B981,stroke:#059669,color:#fff
    style G fill:#EF4444,stroke:#DC2626,color:#fff
    style J fill:#F59E0B,stroke:#D97706,color:#fff
`;

const sampleCode = `
class AgenticSystem:
    def __init__(self, tools, recovery_strategies):
        self.tools = tools
        self.recovery_strategies = recovery_strategies
        self.execution_history = []
    
    async def execute_task(self, task):
        """Execute a task with automatic recovery mechanisms."""
        plan = await self.create_execution_plan(task)
        
        for step in plan.steps:
            try:
                result = await self.execute_step(step)
                self.execution_history.append({
                    'step': step,
                    'result': result,
                    'status': 'success'
                })
            except ToolExecutionError as e:
                recovery_result = await self.handle_failure(step, e)
                if not recovery_result.success:
                    return self.escalate_to_human(task, e)
        
        return self.synthesize_results()
    
    async def handle_failure(self, step, error):
        """Implement recovery strategies for failed tool executions."""
        for strategy in self.recovery_strategies:
            if strategy.can_handle(error):
                return await strategy.recover(step, error)
        
        return RecoveryResult(success=False, reason="No applicable recovery strategy")
`;

export default function AgenticSystemsToolUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <section className="relative decorative-blobs overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/research"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Research
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Agentic Systems & Tool Use: Building Autonomous Reasoning Capabilities
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  13 min read
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  January 15, 2024
                </div>
                <button className="flex items-center hover:text-primary-600 transition-colors duration-200">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Agentic AI', 'Tool Use', 'Reasoning', 'Architecture'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                Exploring how AI agents can effectively use tools and reason about complex multi-step problems. 
                This research examines the architecture patterns, failure modes, and recovery strategies in agentic systems.
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
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Agentic systems represent a paradigm shift in AI architecture, moving beyond simple input-output models 
                to systems capable of autonomous reasoning, planning, and tool utilization. These systems can break down 
                complex tasks, select appropriate tools, and recover from failures—all while maintaining transparency 
                and interpretability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This research explores the fundamental challenges in building robust agentic systems, with particular 
                focus on tool integration patterns, failure recovery mechanisms, and the architectural decisions that 
                enable scalable autonomous reasoning.
              </p>
            </motion.div>

            {/* Interactive Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Agent Workflow Visualization</h2>
              <LottieAnimation 
                animationFile="agent-flow.json"
                className="mx-auto"
                width={500}
                height={400}
              />
            </motion.div>

            {/* Architecture Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">System Architecture</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                The architecture of an effective agentic system requires careful consideration of several key components: 
                task planning, tool selection, execution monitoring, and failure recovery. The following diagram illustrates 
                the complete workflow from user request to final response.
              </p>
              
              <MermaidDiagram chart={agentWorkflowDiagram} className="mb-8" />
              
              <p className="text-gray-700 leading-relaxed">
                Each component in this architecture serves a specific purpose in maintaining system reliability and 
                enabling autonomous operation. The feedback loops ensure that failures are handled gracefully and 
                that the system can adapt to changing conditions.
              </p>
            </motion.div>

            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Analysis</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our evaluation of agentic systems across different task complexities reveals important insights about 
                success rates and recovery mechanisms. The following chart shows performance metrics across various 
                task categories.
              </p>
              
              <InteractiveChart
                dataFile="workflow_metrics.json"
                chartType="bar"
                title="Task Success Rates by Complexity"
                className="mb-8"
              />
              
              <p className="text-gray-700 leading-relaxed">
                The data shows that while simple tasks achieve high success rates (94%), complex multi-step tasks 
                present significant challenges (65% success rate). This highlights the importance of robust recovery 
                mechanisms and careful task decomposition strategies.
              </p>
            </motion.div>

            {/* Implementation Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Example</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                The following code demonstrates a basic implementation of an agentic system with built-in recovery 
                mechanisms. This example shows how to structure the core execution loop and handle various failure modes.
              </p>
              
              <CodeBlock
                code={sampleCode}
                language="python"
                className="mb-8"
              />
              
              <p className="text-gray-700 leading-relaxed">
                This implementation provides a foundation for building more sophisticated agentic systems. Key features 
                include structured error handling, execution history tracking, and pluggable recovery strategies that 
                can be customized for specific use cases.
              </p>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Agentic systems represent a significant advancement in AI capabilities, enabling autonomous reasoning 
                and tool use that approaches human-level problem-solving flexibility. However, building robust systems 
                requires careful attention to failure modes, recovery strategies, and architectural patterns.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Future work should focus on improving multi-step task success rates, developing more sophisticated 
                recovery mechanisms, and creating standardized frameworks for agentic system development. The potential 
                for these systems to transform how we approach complex problem-solving is immense.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border-t border-gray-200 pt-8"
            >
              <div className="flex justify-between items-center">
                <Link
                  href="/research"
                  className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Research
                </Link>
                
                <Link
                  href="/research/privacy-preserving-retrieval"
                  className="inline-flex items-center px-4 py-2 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-200"
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
