'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2, Users, ArrowRight, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 'tech-ceo',
    name: 'Alex Petrov',
    position: 'CEO',
    company: 'TechStart',
    industry: 'IT',
    avatar: '/avatars/alexey.jpg',
    companyLogo: '/logos/techstart.png',
    rating: 5,
    text: 'TraceRemove helped us turn a reputation crisis into an opportunity for growth. Their professional approach and quick results exceeded all our expectations. I recommend them to everyone who takes their reputation seriously.',
    results: ['Traffic growth by 582%', 'Conversion increased 4 times', 'Negative mentions decreased by 73%'],
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'restaurant-director',
    name: 'Maria Ivanova',
    position: 'Marketing Director',
    company: 'FoodChain',
    industry: 'HoReCa',
    avatar: '/avatars/maria.jpg',
    companyLogo: '/logos/foodchain.png',
    rating: 5,
    text: 'Thanks to TraceRemove, we not only restored our reputation after the crisis, but became stronger. Customers trust us again, and our restaurants are thriving. The team worked around the clock to help us.',
    results: ['Google rating grew from 2.1 to 4.6', 'Attendance increased by 68%', 'Revenue grew by 53%'],
    gradient: 'from-green-600 to-blue-600'
  },
  {
    id: 'medical-doctor',
    name: 'Dr. Sergey Volkov',
    position: 'Chief Medical Officer',
    company: 'MedCenter+',
    industry: 'Medicine',
    avatar: '/avatars/sergey.jpg',
    companyLogo: '/logos/medcenter.png',
    rating: 5,
    text: 'The professional work of the TraceRemove team helped us completely clear our reputation from slanderous materials from competitors. Now patients trust us again, and our clinic is thriving.',
    results: ['23 negative pages removed', 'Appointments increased by 182%', 'Patient trust increased by 55%'],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'finance-director',
    name: 'Elena Smirnova',
    position: 'PR Director',
    company: 'FinanceGroup',
    industry: 'Finance',
    avatar: '/avatars/elena.jpg',
    companyLogo: '/logos/financegroup.png',
    rating: 5,
    text: 'TraceRemove did not just clean our reputation - they helped build a long-term strategy for managing the company image. Their expertise in the financial sector is impressive.',
    results: ['87% positive media mentions', 'Client base grew by 34%', 'Stock value increased by 28%'],
    gradient: 'from-orange-600 to-red-600'
  },
  {
    id: 'retail-owner',
    name: 'Dmitry Kozlov',
    position: 'Owner',
    company: 'RetailMax',
    industry: 'Retail',
    avatar: '/avatars/dmitry.jpg',
    companyLogo: '/logos/retailmax.png',
    rating: 5,
    text: 'When our online store faced a wave of negative reviews, TraceRemove quickly took control of the situation. Their AI tools and personal approach helped us not only recover, but become a market leader.',
    results: ['Conversion grew by 245%', 'Returns decreased by 67%', 'NPS increased to 8.7'],
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'law-partner',
    name: 'Anna Fedorova',
    position: 'Managing Partner',
    company: 'LegalPro',
    industry: 'Law',
    avatar: '/avatars/anna.jpg',
    companyLogo: '/logos/legalpro.png',
    rating: 5,
    text: 'As lawyers, we understand the importance of reputation. TraceRemove demonstrated the highest professionalism in working with our case. Their knowledge of legal aspects of reputation management is impressive.',
    results: ['New clients +156%', 'Average check increased by 89%', 'Directory rating 4.9/5'],
    gradient: 'from-indigo-600 to-purple-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const testimonialVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const TestimonialCard = ({ testimonial, index }: { testimonial: { id: string; name: string; position: string; company: string; industry: string; avatar: string; companyLogo: string; text: string; rating: number; results: string[]; gradient: string }, index: number }) => (
  <motion.div
    variants={testimonialVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group cursor-pointer"
  >
    <div className="relative h-full bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm border border-research-surface/50 rounded-3xl p-8 overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Quote Icon */}
      <div className="relative z-10 mb-6">
        <Quote className="h-8 w-8 text-accent-ai-purple/60" />
      </div>
      
      {/* Rating */}
      <div className="relative z-10 flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <blockquote className="relative z-10 text-research-text-secondary text-lg leading-relaxed mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      
      {/* Results */}
      <div className="relative z-10 mb-6">
        <h4 className="text-research-text font-semibold mb-3 flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          Key Results
        </h4>
        <ul className="space-y-2">
          {testimonial.results.map((result: string, resultIndex: number) => (
            <motion.li
              key={resultIndex}
              className="text-research-text-secondary text-sm flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) + (resultIndex * 0.1) }}
            >
              <div className="w-2 h-2 bg-accent-ai-purple rounded-full mr-3 flex-shrink-0" />
              {result}
            </motion.li>
          ))}
        </ul>
      </div>
      
      {/* Author Info */}
      <div className="relative z-10 flex items-center">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center mr-4 flex-shrink-0`}>
          <Users className="h-8 w-8 text-white" />
        </div>
        <div className="flex-grow">
          <div className="font-semibold text-research-text">{testimonial.name}</div>
          <div className="text-sm text-research-text-secondary">{testimonial.position}</div>
          <div className="text-sm text-accent-ai-purple font-medium">{testimonial.company}</div>
        </div>
        <div className="flex items-center">
          <Building2 className="h-5 w-5 text-research-text-secondary mr-1" />
          <span className="text-xs text-research-text-secondary">{testimonial.industry}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-research-bg via-research-surface to-research-bg">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent-ai-purple/20 to-accent-lab-purple/20 border border-accent-ai-purple/30 mb-8"
          >
            <Quote className="h-5 w-5 text-accent-ai-purple mr-2" />
            <span className="text-accent-ai-purple font-medium">Client Reviews</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-research-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            What Our{' '}
            <span className="bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-research-text-secondary max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Success stories from real clients who trusted us with their reputation. 
            Learn how we helped companies from different industries achieve outstanding results.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-ai-purple mb-2">500+</div>
              <div className="text-research-text-secondary">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-ai-purple mb-2">98%</div>
              <div className="text-research-text-secondary">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-ai-purple mb-2">4.9</div>
              <div className="text-research-text-secondary">Average Rating</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Grid */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Industry Coverage */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-research-text text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            We Work with Companies from All Industries
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {['IT', 'HoReCa', 'Medicine', 'Finance', 'Retail', 'Law'].map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-gradient-to-br from-research-surface/60 to-research-surface/30 backdrop-blur-sm border border-research-surface/40 rounded-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <Building2 className="h-8 w-8 text-accent-ai-purple mx-auto mb-3" />
                <div className="text-research-text font-medium">{industry}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-research-surface/80 to-research-surface/40 backdrop-blur-sm border border-research-surface/50 rounded-3xl p-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-research-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Join Our Satisfied Clients
            </motion.h2>
            <motion.p 
              className="text-xl text-research-text-secondary mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Become part of TraceRemove&apos;s success story. Let us protect and improve your brand&apos;s reputation.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.button
                className="bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </motion.button>
              <motion.button
                className="border border-accent-ai-purple text-accent-ai-purple font-semibold py-4 px-8 rounded-xl hover:bg-accent-ai-purple/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
