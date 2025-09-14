'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  Eye,
  MessageCircle,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: '1',
    title: "The Future of Human-AI Collaboration in Research",
    excerpt: "Exploring how artificial intelligence can augment human creativity and scientific discovery while maintaining ethical boundaries.",
    content: "Full exploration of collaborative AI systems...",
    author: "Artur Ziganshin",
    category: "AI Research",
    tags: ["Human-AI", "Collaboration", "Ethics", "Research"],
    publishDate: "2024-01-15",
    readTime: "8 min",
    views: 1245,
    comments: 23,
    featured: true,
    slug: "future-human-ai-collaboration-research"
  },
  {
    id: '2',
    title: "Privacy-First AI: Building Trust in Machine Learning Systems",
    excerpt: "Deep dive into privacy-preserving techniques that enable AI development without compromising user data protection.",
    content: "Comprehensive analysis of privacy techniques...",
    author: "Artur Ziganshin", 
    category: "Privacy",
    tags: ["Privacy", "Security", "Trust", "Machine Learning"],
    publishDate: "2024-01-10",
    readTime: "12 min",
    views: 987,
    comments: 18,
    featured: false,
    slug: "privacy-first-ai-building-trust"
  },
  {
    id: '3',
    title: "Multimodal AI: Beyond Text-Only Language Models",
    excerpt: "Understanding how AI systems can process and reason across different types of data: text, images, audio, and beyond.",
    content: "Technical exploration of multimodal systems...",
    author: "Artur Ziganshin",
    category: "Technology",
    tags: ["Multimodal", "Language Models", "Vision", "Audio"],
    publishDate: "2024-01-05",
    readTime: "10 min",
    views: 1532,
    comments: 31,
    featured: true,
    slug: "multimodal-ai-beyond-text-language-models"
  },
  {
    id: '4',
    title: "Ethical Frameworks for AI Development: A Practical Guide",
    excerpt: "Concrete steps and frameworks for implementing ethical considerations throughout the AI development lifecycle.",
    content: "Practical guide to ethical AI development...",
    author: "Artur Ziganshin",
    category: "Ethics",
    tags: ["Ethics", "Framework", "Development", "Governance"],
    publishDate: "2023-12-28",
    readTime: "15 min",
    views: 2103,
    comments: 45,
    featured: false,
    slug: "ethical-frameworks-ai-development-guide"
  },
  {
    id: '5',
    title: "The Role of Transparency in AI Decision Making",
    excerpt: "Why explainable AI matters and how to build systems that users can understand and trust.",
    content: "Analysis of transparency in AI systems...",
    author: "Artur Ziganshin",
    category: "Transparency",
    tags: ["Transparency", "Explainability", "Trust", "Decision Making"],
    publishDate: "2023-12-20",
    readTime: "9 min",
    views: 876,
    comments: 19,
    featured: false,
    slug: "role-transparency-ai-decision-making"
  },
  {
    id: '6',
    title: "Benchmarking Open vs Closed AI Systems: A Comprehensive Study",
    excerpt: "Detailed comparison of open-source and proprietary AI systems across multiple dimensions including performance, accessibility, and ethics.",
    content: "Comprehensive benchmarking study...",
    author: "Artur Ziganshin",
    category: "Research",
    tags: ["Benchmarking", "Open Source", "Closed Source", "Performance"],
    publishDate: "2023-12-15",
    readTime: "18 min",
    views: 1654,
    comments: 37,
    featured: true,
    slug: "benchmarking-open-vs-closed-ai-systems"
  }
];

const categories = ["All", "AI Research", "Privacy", "Technology", "Ethics", "Transparency", "Research"];

const popularTags = ["Ethics", "Privacy", "Collaboration", "Machine Learning", "Transparency", "Open Source", "Human-AI", "Research"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI Research Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Insights, discoveries, and thoughts on the future of artificial intelligence, 
              ethics, and responsible technology development.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="flex items-center px-6 py-3 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-colors duration-200 shadow-sm"
              >
                <Search className="w-5 h-5 mr-2 text-gray-500" />
                <span className="text-gray-700">Search articles...</span>
              </button>
              
              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 z-10"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by title, content, or tags..."
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none shadow-lg"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
              <p className="text-lg text-gray-600">Our most popular and impactful research insights</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                    <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <BookOpen className="w-8 h-8 text-purple-600/70" />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </div>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-lg text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/4">
                      <div className="h-48 lg:h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="lg:w-3/4">
                      <div className="flex items-center gap-6 mb-4 text-sm text-gray-500">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 flex items-center"
                          >
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar with Popular Tags */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-gray-600">Explore articles by topic</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-purple-300 hover:text-purple-700 transition-colors duration-200 shadow-sm"
              >
                <Tag className="w-4 h-4 mr-2 inline" />
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with AI Research
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get the latest insights on ethical AI development and research breakthroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/20 outline-none"
              />
              <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}