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
    <div className="min-h-screen relative">
      {/* Enhanced Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/15 to-purple-900/20 backdrop-blur-md" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,58,138,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(139,92,246,0.08),rgba(59,130,246,0.06),rgba(147,51,234,0.08),rgba(139,92,246,0.08))]" />
      
      {/* Header */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <Link
                href="/research"
                className="inline-flex items-center text-purple-300 hover:text-white font-medium transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowLeft className="h-5 w-5 mr-3" />
                </motion.div>
                <span className="typography-premium">Back to Research</span>
              </Link>
            </motion.div>

            <div className="glass-card-premium p-12 mb-16">
              <motion.h1 
                className="hero-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Agentic Systems &amp; Tool Use: Building Autonomous Reasoning Capabilities
              </motion.h1>
              
              <motion.div 
                className="flex flex-wrap items-center gap-6 text-slate-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span className="typography-premium">13 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-purple-400" />
                  <span className="typography-premium">January 15, 2024</span>
                </div>
                <motion.button 
                  className="flex items-center space-x-2 hover:text-purple-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="h-5 w-5" />
                  <span className="typography-premium">Share</span>
                </motion.button>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {['Agentic AI', 'Tool Use', 'Reasoning', 'Architecture'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-400/30 typography-premium"
                  >
                    <Tag className="h-4 w-4 mr-2" />
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.p 
                className="text-xl text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Exploring how AI agents can effectively use tools and reason about complex multi-step problems. 
                This research examines the architecture patterns, failure modes, and recovery strategies in agentic systems.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Introduction
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed mb-6 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Agentic systems represent a paradigm shift in AI architecture, moving beyond simple input-output models 
                to systems capable of autonomous reasoning, planning, and tool utilization. These systems can break down 
                complex tasks, select appropriate tools, and recover from failures—all while maintaining transparency 
                and interpretability.
              </motion.p>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                This research explores the fundamental challenges in building robust agentic systems, with particular 
                focus on tool integration patterns, failure recovery mechanisms, and the architectural decisions that 
                enable scalable autonomous reasoning.
              </motion.p>
            </motion.div>

            {/* Interactive Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Agent Workflow Visualization
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <LottieAnimation 
                  animationFile="agent-flow.json"
                  className="mx-auto"
                  width={500}
                  height={400}
                />
              </motion.div>
            </motion.div>

            {/* Architecture Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                System Architecture
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed mb-10 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                The architecture of an effective agentic system requires careful consideration of several key components: 
                task planning, tool selection, execution monitoring, and failure recovery. The following diagram illustrates 
                the complete workflow from user request to final response.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <MermaidDiagram chart={agentWorkflowDiagram} className="rounded-2xl overflow-hidden" />
              </motion.div>
              
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Each component in this architecture serves a specific purpose in maintaining system reliability and 
                enabling autonomous operation. The feedback loops ensure that failures are handled gracefully and 
                that the system can adapt to changing conditions.
              </motion.p>
            </motion.div>

            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Performance Analysis
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed mb-10 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our evaluation of agentic systems across different task complexities reveals important insights about 
                success rates and recovery mechanisms. The following chart shows performance metrics across various 
                task categories.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <InteractiveChart
                  dataFile="workflow_metrics.json"
                  chartType="bar"
                  title="Task Success Rates by Complexity"
                  className="rounded-2xl overflow-hidden"
                />
              </motion.div>
              
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                The data shows that while simple tasks achieve high success rates (94%), complex multi-step tasks 
                present significant challenges (65% success rate). This highlights the importance of robust recovery 
                mechanisms and careful task decomposition strategies.
              </motion.p>
            </motion.div>

            {/* Implementation Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Implementation Example
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed mb-10 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                The following code demonstrates a basic implementation of an agentic system with built-in recovery 
                mechanisms. This example shows how to structure the core execution loop and handle various failure modes.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <CodeBlock
                  code={sampleCode}
                  language="python"
                  className="rounded-2xl overflow-hidden"
                />
              </motion.div>
              
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                This implementation provides a foundation for building more sophisticated agentic systems. Key features 
                include structured error handling, execution history tracking, and pluggable recovery strategies that 
                can be customized for specific use cases.
              </motion.p>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-10"
            >
              <motion.h2 
                className="section-title text-white mb-8 typography-premium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Conclusion
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed mb-6 typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Agentic systems represent a significant advancement in AI capabilities, enabling autonomous reasoning 
                and tool use that approaches human-level problem-solving flexibility. However, building robust systems 
                requires careful attention to failure modes, recovery strategies, and architectural patterns.
              </motion.p>
              <motion.p 
                className="text-lg text-slate-200 leading-relaxed typography-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Future work should focus on improving multi-step task success rates, developing more sophisticated 
                recovery mechanisms, and creating standardized frameworks for agentic system development. The potential 
                for these systems to transform how we approach complex problem-solving is immense.
              </motion.p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8"
            >
              <div className="flex justify-between items-center">
                <motion.div
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/research"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 typography-premium"
                  >
                    <ArrowLeft className="h-5 w-5 mr-3" />
                    Back to Research
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/research/privacy-preserving-retrieval"
                    className="inline-flex items-center px-6 py-3 glass-card-premium text-white font-semibold rounded-xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 typography-premium"
                  >
                    Next Article
                    <TrendingUp className="h-5 w-5 ml-3" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
