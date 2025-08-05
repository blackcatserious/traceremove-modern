'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  Mic, 
  FileText, 
  Library, 
  Calendar,
  Search, 
  Download,
  ExternalLink,
  ArrowRight,
  Clock,
  Tag
} from 'lucide-react';
import Link from 'next/link';
import BackgroundLayers from '@/components/BackgroundLayers';

const academicResources = [
  {
    id: 'cv',
    title: 'Curriculum Vitae',
    description: 'Comprehensive academic CV including education, research experience, publications, and professional achievements in AI ethics and philosophy of technology.',
    category: 'Profile',
    icon: FileText,
    gradient: 'from-blue-500 to-purple-600',
    features: ['Education History', 'Research Experience', 'Publications', 'Awards'],
    status: 'Updated',
    href: '/academic/cv',
    lastUpdated: '2024-01-15'
  },
  {
    id: 'publications-archive',
    title: 'Publications Archive',
    description: 'Complete archive of academic publications, research papers, and scholarly articles on AI ethics, privacy-preserving technologies, and digital rights.',
    category: 'Publications',
    icon: BookOpen,
    gradient: 'from-green-500 to-teal-600',
    features: ['Peer-reviewed Papers', 'Conference Proceedings', 'Book Chapters', 'Preprints'],
    status: 'Active',
    href: '/academic/publications-archive',
    lastUpdated: '2024-01-12'
  },
  {
    id: 'collaborations',
    title: 'Academic Collaborations',
    description: 'International research collaborations and partnerships with leading institutions in AI ethics, digital rights, and responsible technology development.',
    category: 'Collaborations',
    icon: Users,
    gradient: 'from-purple-500 to-pink-600',
    features: ['International Partners', 'Joint Research', 'Cross-institutional Projects', 'Advisory Roles'],
    status: 'Active',
    href: '/academic/collaborations',
    lastUpdated: '2024-01-10'
  },
  {
    id: 'press-coverage',
    title: 'Press & Media Coverage',
    description: 'Media appearances, interviews, and press coverage of research work in AI ethics, digital rights, and responsible AI development.',
    category: 'Media',
    icon: Mic,
    gradient: 'from-orange-500 to-red-600',
    features: ['Media Interviews', 'Press Releases', 'Expert Commentary', 'Public Engagement'],
    status: 'Updated',
    href: '/academic/press-coverage',
    lastUpdated: '2024-01-08'
  },
  {
    id: 'conference-talks',
    title: 'Conference Talks',
    description: 'Keynote presentations, invited talks, and conference presentations at international venues on AI ethics, philosophy of technology, and digital rights.',
    category: 'Speaking',
    icon: Award,
    gradient: 'from-indigo-500 to-blue-600',
    features: ['Keynote Speeches', 'Invited Talks', 'Panel Discussions', 'Workshop Presentations'],
    status: 'Active',
    href: '/academic/conference-talks',
    lastUpdated: '2024-01-05'
  },
  {
    id: 'teaching-materials',
    title: 'Teaching Materials',
    description: 'Educational resources, course materials, and teaching content for AI ethics, philosophy of technology, and responsible AI development courses.',
    category: 'Education',
    icon: Library,
    gradient: 'from-cyan-500 to-blue-600',
    features: ['Course Syllabi', 'Lecture Materials', 'Assignment Templates', 'Reading Lists'],
    status: 'Updated',
    href: '/academic/teaching-materials',
    lastUpdated: '2024-01-03'
  },
  {
    id: 'ethics-syllabi',
    title: 'AI Ethics Syllabi',
    description: 'Comprehensive syllabi and curriculum frameworks for AI ethics education, covering philosophical foundations, practical applications, and case studies.',
    category: 'Curriculum',
    icon: GraduationCap,
    gradient: 'from-rose-500 to-pink-600',
    features: ['Course Outlines', 'Learning Objectives', 'Assessment Methods', 'Resource Lists'],
    status: 'Updated',
    href: '/academic/ethics-syllabi',
    lastUpdated: '2024-01-01'
  },
  {
    id: 'reading-list',
    title: 'Essential Reading List',
    description: 'Curated reading list of essential texts, papers, and resources for understanding AI ethics, philosophy of technology, and responsible AI development.',
    category: 'Resources',
    icon: BookOpen,
    gradient: 'from-emerald-500 to-green-600',
    features: ['Core Texts', 'Recent Papers', 'Historical Perspectives', 'Interdisciplinary Sources'],
    status: 'Updated',
    href: '/academic/reading-list',
    lastUpdated: '2023-12-28'
  }
];

const categories = [
  { id: 'all', label: 'All Resources', count: academicResources.length },
  { id: 'Profile', label: 'Profile', count: academicResources.filter(r => r.category === 'Profile').length },
  { id: 'Publications', label: 'Publications', count: academicResources.filter(r => r.category === 'Publications').length },
  { id: 'Collaborations', label: 'Collaborations', count: academicResources.filter(r => r.category === 'Collaborations').length },
  { id: 'Media', label: 'Media', count: academicResources.filter(r => r.category === 'Media').length },
  { id: 'Speaking', label: 'Speaking', count: academicResources.filter(r => r.category === 'Speaking').length },
  { id: 'Education', label: 'Education', count: academicResources.filter(r => r.category === 'Education').length },
  { id: 'Curriculum', label: 'Curriculum', count: academicResources.filter(r => r.category === 'Curriculum').length },
  { id: 'Resources', label: 'Resources', count: academicResources.filter(r => r.category === 'Resources').length }
];

export default function AcademicPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = academicResources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-research-50 via-white to-lab-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Dynamic Background System */}
        <BackgroundLayers variant="research" className="absolute inset-0 z-0" />
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-deep-blue/5 via-accent-ai-purple/5 to-accent-lab-purple/10 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,99,255,0.1),transparent_50%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(112,86,230,0.08),transparent_50%)] z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-full border border-accent-ai-purple/20 mb-8"
            >
              <GraduationCap className="w-5 h-5 text-accent-ai-purple mr-2" />
              <span className="caption-text text-accent-ai-purple">
                Academic Resources
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="content-spacing-large"
            >
              <h1 className="hero-title">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block text-accent-deep-blue mb-2"
                >
                  Academic
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600 bg-clip-text text-transparent"
                >
                  Profile
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="body-text-large text-research-600 max-w-4xl mx-auto content-spacing"
            >
              Comprehensive academic profile including publications, collaborations, teaching materials, and research contributions. 
              Explore the academic journey of Artur Ziganshin in AI ethics, philosophy of technology, and responsible AI development.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-accent-ai-purple" />
                <input
                  type="text"
                  placeholder="Search academic resources, publications, and materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 bg-white/90 backdrop-blur-sm border border-accent-ai-purple/20 rounded-2xl shadow-lab-card focus:outline-none focus:ring-2 focus:ring-accent-ai-purple focus:border-accent-ai-purple/40 text-research-900 placeholder-research-500 font-ibm-sans text-lg transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 font-ibm-sans ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white shadow-ai-glow'
                      : 'bg-white/90 backdrop-blur-sm text-research-700 border border-accent-ai-purple/20 hover:border-accent-ai-purple/40 shadow-lab-card hover:shadow-card-hover hover:bg-gradient-to-r hover:from-accent-ai-purple/5 hover:to-accent-lab-purple/5'
                  }`}
                >
                  {category.label} <span className="opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Academic Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link href={resource.href}>
                  <div className="relative bg-gradient-to-br from-white via-research-50/20 to-accent-ai-purple/5 rounded-3xl shadow-lab-card hover:shadow-card-hover transition-all duration-500 overflow-hidden border border-accent-ai-purple/10 hover:border-accent-ai-purple/30">
                    {/* Gradient Header */}
                    <div className="h-2 bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-primary-600" />
                    
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 via-transparent to-accent-lab-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-8">
                      {/* Icon and Status */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-2xl flex items-center justify-center shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                          <resource.icon className="h-7 w-7 text-white" />
                        </div>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full font-ibm-sans ${
                          resource.status === 'Updated' ? 'bg-green-100 text-green-700 border border-green-200' :
                          resource.status === 'Active' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                          'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}>
                          {resource.status}
                        </span>
                      </div>

                      {/* Title and Description */}
                      <h3 className="subsection-title text-accent-deep-blue mb-4 group-hover:text-accent-ai-purple transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <p className="body-text text-research-600 leading-relaxed mb-6">
                        {resource.description}
                      </p>

                      {/* Category */}
                      <div className="mb-6">
                        <span className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-gradient-to-r from-accent-ai-purple/10 to-accent-lab-purple/10 text-accent-ai-purple border border-accent-ai-purple/20 rounded-full font-ibm-sans">
                          {resource.category}
                        </span>
                      </div>

                      {/* Last Updated */}
                      <div className="mb-6">
                        <div className="flex items-center px-3 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-accent-ai-purple/20 shadow-soft">
                          <Calendar className="h-4 w-4 mr-2 text-accent-ai-purple" />
                          <span className="caption-text text-research-600">
                            Updated {new Date(resource.lastUpdated).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                          {resource.features.slice(0, 2).map((feature) => (
                            <span
                              key={feature}
                              className="text-xs font-medium text-research-600 bg-research-100 px-3 py-1 rounded-full border border-research-200 font-ibm-sans"
                            >
                              {feature}
                            </span>
                          ))}
                          {resource.features.length > 2 && (
                            <span className="text-xs text-accent-ai-purple font-semibold font-ibm-sans">
                              +{resource.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white text-sm font-bold rounded-xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 font-ibm-sans">
                          <BookOpen className="h-4 w-4 mr-2" />
                          View
                        </div>
                        
                        <div className="flex items-center text-accent-ai-purple group-hover:text-accent-lab-purple transition-colors duration-300">
                          <span className="caption-text mr-3">Explore</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                         style={{ padding: '1px' }}>
                      <div className="w-full h-full bg-white rounded-3xl" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent-ai-purple/20 to-accent-lab-purple/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <GraduationCap className="h-12 w-12 text-accent-ai-purple" />
              </div>
              <h3 className="subsection-title text-accent-deep-blue mb-4">No resources found</h3>
              <p className="body-text text-research-600 mb-8 max-w-md mx-auto">
                Try adjusting your search query or selecting a different category to discover more academic resources.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-bold rounded-2xl shadow-ai-glow hover:shadow-hero-glow transition-all duration-300 font-ibm-sans"
              >
                <GraduationCap className="mr-3 h-5 w-5" />
                View All Resources
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
