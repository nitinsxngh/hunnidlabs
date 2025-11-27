'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProjectDetailLeftProps {
  projectName: string;
  projectNameHighlight?: string;
  description: string;
  categories: string[];
  ctaText?: string;
}

const ProjectDetailLeft: React.FC<ProjectDetailLeftProps> = ({
  projectName,
  projectNameHighlight,
  description,
  categories,
  ctaText = 'Get a Full Rundown'
}) => {
  // Split project name if highlight is specified
  const nameParts = projectNameHighlight 
    ? projectName.split(projectNameHighlight)
    : [projectName];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-24">
      {/* Background - Dark with gradient to deep blue/purple at bottom left */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom right, #000000 0%, rgba(30, 58, 138, 0.3) 50%, rgba(67, 56, 202, 0.2) 100%)'
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Small Heading */}
            <p 
              className="text-white/60"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '14px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Success story
            </p>

            {/* Main Title */}
            <h2 
              className="leading-tight"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: '700',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              {projectNameHighlight ? (
                <>
                  <span className="text-white">{nameParts[0]} </span>
                  <span 
                    style={{
                      color: '#3b82f6',
                      background: 'linear-gradient(to right, #3b82f6, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {projectNameHighlight}
                  </span>
                  {nameParts[1] && <span className="text-white"> {nameParts[1]}</span>}
                </>
              ) : (
                <span className="text-white">{projectName}</span>
              )}
            </h2>

            {/* Description */}
            <p 
              className="text-white/90 leading-relaxed"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: '400',
                lineHeight: '1.6',
                maxWidth: '600px'
              }}
            >
              {description}
            </p>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-lg text-white text-sm font-medium transition-all duration-300"
                  style={{
                    fontFamily: 'SF Pro Display, sans-serif',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full text-white font-medium transition-all duration-300"
              style={{
                fontFamily: 'SF Pro Display, sans-serif',
                fontSize: '18px',
                fontWeight: '500',
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), 0 0 40px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)'
              }}
            >
              {ctaText}
            </motion.button>
          </motion.div>

          {/* Right Section - Overlapping Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Back Rectangle */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute z-10"
              style={{
                width: '320px',
                height: '400px',
                background: 'rgba(30, 30, 30, 0.8)',
                border: '1px solid rgba(100, 100, 100, 0.3)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transform: 'translate(-20px, -20px)'
              }}
            />

            {/* Front Rectangle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-20"
              style={{
                width: '360px',
                height: '440px',
                background: 'rgba(200, 200, 200, 0.9)',
                border: '1px solid rgba(150, 150, 150, 0.4)',
                borderRadius: '16px',
                boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4)'
              }}
            >
              {/* Placeholder content - subtle pattern */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.1) 75%)`,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailLeft;

