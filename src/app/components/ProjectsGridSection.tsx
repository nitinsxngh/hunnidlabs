'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCard {
  title: string;
  titleHighlight?: string;
  description: string;
}

const ProjectsGridSection: React.FC = () => {
  const projects: ProjectCard[] = [
    {
      title: 'Safe Gold',
      description: 'Safe gold is the indias largest digital platform for buying, selling and managing digital gold offering, transplant and convient solutions for modern gold investment'
    },
    {
      title: 'TechFlow',
      description: 'TechFlow revolutionizes workflow automation with AI-powered solutions that streamline business processes, enhance productivity, and drive digital transformation across enterprises.'
    },
    {
      title: 'CloudSync',
      description: 'CloudSync provides seamless cloud infrastructure management and data synchronization services, enabling businesses to scale effortlessly while maintaining optimal performance and security.'
    },
    {
      title: 'DataViz Pro',
      description: 'DataViz Pro transforms complex data into actionable insights through advanced analytics and visualization tools, empowering decision-makers with real-time business intelligence.'
    },
    {
      title: 'Safe Gold',
      description: 'Safe gold is the indias largest digital platform for buying, selling and managing digital gold offering, transplant and convient solutions for modern gold investment'
    },
    {
      title: 'TechFlow',
      description: 'TechFlow revolutionizes workflow automation with AI-powered solutions that streamline business processes, enhance productivity, and drive digital transformation across enterprises.'
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 py-24">
      {/* Background - Dark with subtle gradients */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, rgba(15, 23, 42, 0.8) 100%)'
        }}
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3"
        >
          <h2 
            className="text-white"
            style={{
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '600',
              letterSpacing: '-0.02em'
            }}
          >
            View all projects
          </h2>
          <motion.svg
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Card Container */}
              <div 
                className="relative h-full rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.1), inset 0 0 20px rgba(59, 130, 246, 0.05)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Image Placeholder */}
                <div 
                  className="w-full h-48 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-t-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(100, 100, 100, 0.3) 0%, rgba(60, 60, 60, 0.4) 100%)'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-16 h-16 rounded-lg opacity-20"
                      style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(67, 56, 202, 0.3) 100%)'
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Project Title */}
                  <h3 
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: 'SF Pro Display, sans-serif',
                      color: '#3b82f6',
                      fontWeight: '700'
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-white/80 leading-relaxed text-sm"
                    style={{
                      fontFamily: 'SF Pro Display, sans-serif',
                      lineHeight: '1.6'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 py-3 rounded-lg text-white text-sm font-medium transition-all duration-300"
                    style={{
                      fontFamily: 'SF Pro Display, sans-serif',
                      background: 'rgba(37, 99, 235, 0.2)',
                      border: '1px solid rgba(59, 130, 246, 0.5)',
                      boxShadow: '0 2px 10px rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    Read more
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGridSection;

