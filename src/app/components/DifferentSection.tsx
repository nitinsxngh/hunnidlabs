'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DifferentSection: React.FC = () => {
  const features = [
    {
      title: 'Innovative environment',
      description: 'An innovative environment, where you work on cutting-edge projects.'
    },
    {
      title: 'Career growth',
      description: 'Career growth, with continuous learning and clear progression paths.'
    },
    {
      title: 'Expert',
      description: 'Collaboration with an expert team passionate about their work.'
    },
    {
      title: 'Impactful projects',
      description: 'Impactful projects across diverse industries.'
    },
    {
      title: 'Supportive culture',
      description: 'A supportive, inclusive culture that values contributions and encourages idea-sharing.'
    },
    {
      title: 'Work-life balance',
      description: 'A healthy work-life balance, supported by flexible working arrangements.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-24">
      {/* Background - matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] to-[#000000]">
        {/* Subtle glowing blue edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Ambient glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/6 to-purple-600/6 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/6 to-pink-600/6 blur-3xl"></div>
        </div>

        {/* Cosmic particle specks */}
        {[...Array(60)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '600',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            color: '#ffffff'
          }}
        >
          Discover what makes Hunnid labs different
        </motion.h2>

        {/* Cards Grid - 2 rows x 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div 
                className="h-full rounded-2xl p-6 lg:p-8 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(30, 27, 75, 0.4) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Subtle inner glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
                    boxShadow: 'inset 0 0 30px rgba(139, 92, 246, 0.1)'
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3 
                    className="text-white mb-4"
                    style={{
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '24px',
                      fontWeight: '700',
                      lineHeight: '1.2'
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-white/80"
                    style={{
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '1.6'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Hover border glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    border: '1px solid rgba(139, 92, 246, 0.5)',
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentSection;

