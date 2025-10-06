'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Github, 
  Twitter, 
  Linkedin, 
  Calendar, 
  Award,
  Globe,
  BookOpen,
  Zap,
  Heart,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const communityStats = [
  { icon: Users, label: "Active Members", value: "2,500+" },
  { icon: Globe, label: "Countries", value: "45+" },
  { icon: Award, label: "Contributions", value: "1,200+" },
  { icon: MessageCircle, label: "Discussions", value: "5,800+" }
];

const platforms = [
  {
    name: "Discord",
    description: "Join our active community for real-time discussions, Q&A, and collaboration",
    members: "1,200+",
    icon: MessageCircle,
    color: "from-indigo-500 to-purple-600",
    url: "https://discord.gg/traceremove"
  },
  {
    name: "GitHub",
    description: "Contribute to our open-source projects and access community repositories",
    members: "800+",
    icon: Github,
    color: "from-gray-600 to-gray-800",
    url: "https://github.com/traceremove"
  },
  {
    name: "LinkedIn",
    description: "Connect with professionals and stay updated on industry insights",
    members: "500+",
    icon: Linkedin,
    color: "from-blue-600 to-blue-800",
    url: "https://linkedin.com/company/traceremove"
  }
];

const initiatives = [
  {
    title: "AI Ethics Reading Group",
    description: "Monthly discussions on latest research papers in AI ethics and responsible AI development",
    schedule: "First Thursday of each month",
    participants: "150+",
    icon: BookOpen,
    color: "bg-blue-500"
  },
  {
    title: "Open Source Fridays",
    description: "Weekly sessions for contributing to open-source AI tools and frameworks",
    schedule: "Every Friday, 3 PM UTC",
    participants: "80+",
    icon: Github,
    color: "bg-purple-500"
  },
  {
    title: "Mentorship Program",
    description: "Connect experienced AI researchers with newcomers to the field",
    schedule: "Ongoing matchmaking",
    participants: "200+",
    icon: Users,
    color: "bg-green-500"
  },
  {
    title: "Lightning Talks",
    description: "Short presentations on cutting-edge AI research and innovations",
    schedule: "Second Wednesday monthly",
    participants: "120+",
    icon: Zap,
    color: "bg-orange-500"
  }
];

const contributors = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Ethics Researcher",
    contribution: "Ethics Framework Lead",
    avatar: "/images/avatars/sarah-chen.jpg",
    location: "Stanford, USA"
  },
  {
    name: "Prof. Marcus Johnson",
    role: "Computer Science",
    contribution: "Privacy Tools Maintainer",
    avatar: "/images/avatars/marcus-johnson.jpg",
    location: "Cambridge, UK"
  },
  {
    name: "Elena Rodriguez",
    role: "ML Engineer",
    contribution: "Community Moderator",
    avatar: "/images/avatars/elena-rodriguez.jpg",
    location: "Barcelona, Spain"
  },
  {
    name: "Dr. Yuki Tanaka",
    role: "Data Scientist",
    contribution: "Documentation Lead",
    avatar: "/images/avatars/yuki-tanaka.jpg",
    location: "Tokyo, Japan"
  }
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 decorative-blobs">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 decorative-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with researchers, developers, and enthusiasts passionate about ethical AI development 
              and responsible technology innovation.
            </p>
          </motion.div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl mb-4 mx-auto">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Platforms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Connect</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us on various platforms to engage with the community, contribute to projects, 
              and stay updated on the latest developments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                  <div className={`h-32 bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                    <platform.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">
                        {platform.members} members
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors duration-200" />
                    </div>

                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      Join {platform.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Regular programs and activities that bring our community together for learning, 
              collaboration, and knowledge sharing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${initiative.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <initiative.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
                    <p className="text-gray-600 mb-4">{initiative.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {initiative.schedule}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {initiative.participants}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contributors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Contributors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet some of the amazing people who make our community vibrant and impactful.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1">{contributor.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{contributor.role}</p>
                <p className="text-xs text-purple-600 font-medium mb-2">{contributor.contribution}</p>
                <p className="text-xs text-gray-500">{contributor.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Be part of a global network of researchers and developers working towards ethical AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/traceremove"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-colors duration-200 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
              </a>
              <a
                href="https://github.com/traceremove"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}