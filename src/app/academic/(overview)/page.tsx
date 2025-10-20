'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  ArrowRight,
  Clock,
  Tag,
  Bookmark,
} from 'lucide-react';
import AssistantWidgetShell from '@/components/AssistantWidgetShell';

const academicResources = [
  {
    id: 'cv',
    title: 'Curriculum Vitae',
    description:
      'Comprehensive academic CV including education, research experience, publications, and professional achievements in AI ethics and philosophy of technology.',
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
    description:
      'Complete archive of academic publications, research papers, and scholarly articles on AI ethics, privacy-preserving technologies, and digital rights.',
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
    description:
      'International research collaborations and partnerships with leading institutions in AI ethics, digital rights, and responsible technology development.',
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
    description:
      'Media appearances, interviews, and press coverage of research work in AI ethics, digital rights, and responsible AI development.',
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
    description:
      'Keynote presentations, invited talks, and conference presentations at international venues on AI ethics, philosophy of technology, and digital rights.',
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
    description:
      'Educational resources, course materials, and teaching content for AI ethics, philosophy of technology, and responsible AI development courses.',
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
    description:
      'Comprehensive syllabi and curriculum frameworks for AI ethics education, covering philosophical foundations, practical applications, and case studies.',
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
    description:
      'Curated reading list of essential texts, papers, and resources for understanding AI ethics, philosophy of technology, and responsible AI development.',
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
  { id: 'Profile', label: 'Profile', count: academicResources.filter((resource) => resource.category === 'Profile').length },
  { id: 'Publications', label: 'Publications', count: academicResources.filter((resource) => resource.category === 'Publications').length },
  { id: 'Collaborations', label: 'Collaborations', count: academicResources.filter((resource) => resource.category === 'Collaborations').length },
  { id: 'Media', label: 'Media', count: academicResources.filter((resource) => resource.category === 'Media').length },
  { id: 'Speaking', label: 'Speaking', count: academicResources.filter((resource) => resource.category === 'Speaking').length },
  { id: 'Education', label: 'Education', count: academicResources.filter((resource) => resource.category === 'Education').length },
  { id: 'Curriculum', label: 'Curriculum', count: academicResources.filter((resource) => resource.category === 'Curriculum').length },
  { id: 'Resources', label: 'Resources', count: academicResources.filter((resource) => resource.category === 'Resources').length }
];

export default function AcademicPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    return academicResources.filter((resource) => {
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const spotlightResources = filteredResources.slice(0, 3);
  const remainingResources = filteredResources.slice(3);

  return (
    <div className="relative z-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Search the academic archive</h2>
                <p className="max-w-2xl text-sm text-white/70">
                  Filter by category or keyword to uncover publications, curriculum, and partnership materials. Every resource includes motion assets, documentation, and references ready to share.
                </p>
              </div>
              <div className="relative w-full max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search publications, talks, or teaching materials"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 py-3 pl-12 pr-4 font-ibm-sans text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-white/40 bg-white/15 text-white shadow-[0_20px_45px_rgba(56,189,248,0.35)]'
                      : 'border-white/15 bg-white/5 text-white/65 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-white/40">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </section>

        {spotlightResources.length > 0 && (
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Highlighted resources</p>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">Featured academic releases</h3>
              </div>
              <Link href="/atlas" className="hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-white md:inline-flex">
                View atlas collaborators
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {spotlightResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.5)] backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent text-white">
                        <resource.icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{resource.category}</p>
                        <h4 className="text-lg font-semibold text-white">{resource.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">{resource.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                        <Clock className="h-3.5 w-3.5" />
                        Updated {resource.lastUpdated}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-200">
                        <Tag className="h-3.5 w-3.5" />
                        {resource.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-white/60">
                      {resource.features.slice(0, 3).map((feature) => (
                        <span key={`${resource.id}-${feature}`} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                          <Bookmark className="h-3.5 w-3.5" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={resource.href}
                      className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
                    >
                      Explore resource
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/50">Academic archive</p>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Additional resources</h3>
          </div>

          {remainingResources.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {remainingResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                        <resource.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{resource.category}</p>
                        <h4 className="text-base font-semibold text-white">{resource.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-white/65">{resource.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/55">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                        <Clock className="h-3.5 w-3.5" />
                        Updated {resource.lastUpdated}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                        <Tag className="h-3.5 w-3.5" />
                        {resource.status}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={resource.href}
                    className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-white"
                  >
                    View resource
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/60">
              No other resources match this view — reset filters or explore the highlighted set above.
            </div>
          )}
        </section>

        <section className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_50px_120px_rgba(15,23,42,0.65)] backdrop-blur-3xl">
          <AssistantWidgetShell compact={false} />
        </section>
      </div>
    </div>
  );
}
