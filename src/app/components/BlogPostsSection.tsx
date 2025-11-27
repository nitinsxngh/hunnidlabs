'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
}

const BlogPostsSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and deploy web applications, from automated code generation to intelligent user experiences.',
      category: 'AI & Machine Learning',
      author: 'Hunnidlabs Team',
      date: 'March 15, 2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure',
      excerpt: 'A comprehensive guide to designing and implementing cloud solutions that can grow with your business, covering best practices and real-world examples.',
      category: 'Cloud Solutions',
      author: 'Hunnidlabs Team',
      date: 'March 10, 2025',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Design Systems: Creating Consistency at Scale',
      excerpt: 'How to build and maintain design systems that enable teams to create cohesive user experiences across multiple products and platforms.',
      category: 'Design',
      author: 'Hunnidlabs Team',
      date: 'March 5, 2025',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Low-Code Development: Empowering Non-Developers',
      excerpt: 'Understanding the rise of low-code platforms and how they&apos;re enabling business users to build applications without extensive programming knowledge.',
      category: 'Development',
      author: 'Hunnidlabs Team',
      date: 'February 28, 2025',
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'Digital Marketing in the Age of AI',
      excerpt: 'How artificial intelligence is transforming digital marketing strategies, from personalized content to predictive analytics and automated campaigns.',
      category: 'Digital Marketing',
      author: 'Hunnidlabs Team',
      date: 'February 20, 2025',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Web Application Security Best Practices',
      excerpt: 'Essential security measures every web application should implement to protect user data and prevent common vulnerabilities and attacks.',
      category: 'Security',
      author: 'Hunnidlabs Team',
      date: 'February 15, 2025',
      readTime: '8 min read'
    }
  ];

  return (
    <section className="relative py-24 px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#0a0f2b]">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`}>
                {/* Card Container */}
                <div 
                  className="relative h-full rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.3) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Glass reflections */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                  {/* Image Placeholder */}
                  <div 
                    className="w-full h-48 bg-gradient-to-br from-gray-700/50 to-gray-800/50 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(67, 56, 202, 0.2) 100%)'
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className="w-20 h-20 rounded-lg opacity-20"
                        style={{
                          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(67, 56, 202, 0.4) 100%)'
                        }}
                      />
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{
                          background: 'rgba(59, 130, 246, 0.3)',
                          border: '1px solid rgba(59, 130, 246, 0.5)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Title */}
                    <h3 
                      className="text-white text-xl font-semibold leading-tight group-hover:text-blue-400 transition-colors"
                      style={{
                        fontFamily: 'SF Pro Display, sans-serif',
                        fontWeight: '600'
                      }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p 
                      className="text-white/70 leading-relaxed text-sm line-clamp-3"
                      style={{
                        fontFamily: 'SF Pro Display, sans-serif',
                        fontSize: '14px',
                        lineHeight: '1.6'
                      }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-4 text-xs text-white/50">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <span className="text-xs text-white/50">{post.readTime}</span>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)'
                    }}
                  />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full text-white font-medium transition-all duration-300"
            style={{
              fontFamily: 'SF Pro Display, sans-serif',
              fontSize: '16px',
              fontWeight: '500',
              background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), 0 0 40px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)'
            }}
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPostsSection;

