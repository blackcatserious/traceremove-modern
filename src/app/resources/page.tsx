'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  Video, 
  FileText, 
  Code, 
  Database,
  Headphones,
  Image,
  Search,
  Filter
} from 'lucide-react';

const resources = [
  {
    id: '1',
    title: "AI Ethics Implementation Guide",
    description: "Comprehensive guide for implementing ethical AI principles in production systems",
    type: "Guide",
    format: "PDF",
    size: "2.3 MB",
    category: "Ethics",
    downloadUrl: "/downloads/ai-ethics-guide.pdf",
    icon: FileText
  },
  {
    id: '2',
    title: "Privacy-Preserving AI Toolkit",
    description: "Open-source toolkit with implementations of differential privacy and homomorphic encryption",
    type: "Code",
    format: "GitHub",
    size: "45 MB",
    category: "Privacy",
    downloadUrl: "https://github.com/traceremove/privacy-toolkit",
    icon: Code
  },
  {
    id: '3',
    title: "Multimodal AI Research Dataset",
    description: "Curated dataset for training and evaluating multimodal AI systems",
    type: "Dataset",
    format: "CSV/JSON",
    size: "1.2 GB",
    category: "Data",
    downloadUrl: "/downloads/multimodal-dataset.zip",
    icon: Database
  },
  {
    id: '4',
    title: "AI Transparency Webinar Series",
    description: "Recorded webinars on building transparent and interpretable AI systems",
    type: "Video",
    format: "MP4",
    size: "850 MB",
    category: "Education",
    downloadUrl: "/downloads/transparency-webinars.zip",
    icon: Video
  },
  {
    id: '5',
    title: "Research Methodology Templates",
    description: "Templates and checklists for conducting ethical AI research",
    type: "Template",
    format: "DOCX",
    size: "1.5 MB",
    category: "Research",
    downloadUrl: "/downloads/research-templates.zip",
    icon: FileText
  },
  {
    id: '6',
    title: "AI Governance Podcast",
    description: "Audio discussions on AI governance, policy, and regulatory frameworks",
    type: "Audio",
    format: "MP3",
    size: "320 MB",
    category: "Policy",
    downloadUrl: "/downloads/governance-podcast.zip",
    icon: Headphones
  }
];

const categories = ["All", "Ethics", "Privacy", "Data", "Education", "Research", "Policy"];
const types = ["All", "Guide", "Code", "Dataset", "Video", "Template", "Audio"];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesType = selectedType === "All" || resource.type === selectedType;
    const matchesSearch = searchQuery === "" || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 decorative-blobs">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 decorative-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Research Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive collection of guides, tools, datasets, and educational materials 
              for ethical AI research and development.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search resources..."
                    className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Type Filter */}
                <div>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Resources</h2>
            <p className="text-lg text-gray-600">
              {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                  {/* Resource Header */}
                  <div className="relative h-32 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                    <resource.icon className="w-12 h-12 text-green-600" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 text-green-700 text-xs font-medium rounded-full">
                        {resource.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {resource.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {resource.size}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Format: <span className="font-medium text-gray-900">{resource.format}</span>
                      </div>
                      
                      <a
                        href={resource.downloadUrl}
                        target={resource.downloadUrl.startsWith('http') ? '_blank' : '_self'}
                        rel={resource.downloadUrl.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {resource.type === 'Code' ? 'View' : 'Download'}
                        {resource.downloadUrl.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-2" />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Resource CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Specific Resource?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Can&apos;t find what you&apos;re looking for? Contact us to request specific resources or suggest new additions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors duration-200 shadow-lg"
              >
                Request Resource
              </a>
              <a
                href="/community"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                Join Community
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}