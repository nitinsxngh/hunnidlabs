'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LabProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Integrated Learning Circle",
      subtitle: "Customized Learning for Your Unique Experience",
      description: "A multi-faceted EdTech platform engineered to connect learners with mentors and opportunities. We delivered an integrated web experience including AI tools, custom portals, and a full suite of career development resources.",
      fullTitle: "ILC – INTEGRATED LEARNING CIRCLE"
    },
    {
      id: 2,
      title: "AI-Powered Analytics",
      subtitle: "Data-Driven Insights for Modern Businesses",
      description: "An advanced analytics platform that leverages machine learning to provide real-time insights and predictive analytics. Built with cutting-edge AI technology to help businesses make informed decisions.",
      fullTitle: "AI-POWERED ANALYTICS PLATFORM"
    },
    {
      id: 3,
      title: "Cloud Infrastructure",
      subtitle: "Scalable Solutions for Growing Companies",
      description: "A comprehensive cloud infrastructure solution designed for scalability and reliability. We built a robust system that handles high traffic loads while maintaining optimal performance and security.",
      fullTitle: "CLOUD INFRASTRUCTURE SUITE"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = windowHeight * 3; // 3 projects worth of scroll
      
      if (scrollPosition > windowHeight * 2 && scrollPosition < windowHeight * 5) {
        setIsScrolling(true);
        const projectIndex = Math.floor((scrollPosition - windowHeight * 2) / (windowHeight / 2));
        setCurrentProject(Math.min(projectIndex, projects.length - 1));
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectVariants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number]
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-8 md:px-16 py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050814] to-[#000000]">
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Cosmic glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="border-t border-white/10 w-24 mx-auto mb-6"></div>
          <h2 className="text-white text-2xl md:text-2xl font-semibold font-['Inter',sans-serif] mb-6">
            Fresh from the Lab
          </h2>
          <div className="border-t border-white/10 w-24 mx-auto"></div>
        </div>

        {/* Projects Container */}
        <div className="relative h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              variants={projectVariants}
              initial="exit"
              animate="enter"
              exit="exit"
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                {/* Left Column - Project Preview Card */}
                <div className="order-2 lg:order-1">
                  <div className="relative rounded-2xl border border-white/10 p-8 h-80 bg-gradient-to-br from-gray-900/60 to-black/80">
                    {/* Grid pattern overlay */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '40px 40px'
                      }}
                    />
                    
                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                      <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                        {projects[currentProject].title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-8 max-w-sm">
                        {projects[currentProject].subtitle}
                      </p>
                      <button className="bg-white text-black rounded-full px-6 py-3 font-medium hover:scale-105 transition-transform duration-200">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Project Details */}
                <div className="order-1 lg:order-2">
                  <div className="flex items-start space-x-4">
                    {/* Decorative vertical bar */}
                    <div className="h-16 w-[2px] bg-gradient-to-b from-[#1E1BFF] to-[#9CA3FF] flex-shrink-0"></div>
                    
                    {/* Text content */}
                    <div className="flex-1">
                      <h4 className="text-white text-lg font-bold uppercase tracking-wider mb-4">
                        {projects[currentProject].fullTitle}
                      </h4>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mb-8">
                        {projects[currentProject].description}
                      </p>
                      <button className="bg-gradient-to-r from-[#1E1BFF] to-[#000428] text-white rounded-full px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-shadow duration-200">
                        View all projects
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentProject 
                  ? 'bg-white w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabProjects;
