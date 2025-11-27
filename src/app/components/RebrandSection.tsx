'use client';

import React from 'react';
import { motion } from 'framer-motion';

const RebrandSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-24">
      {/* Gradient Background - darker blue-purple to lighter blue-purple */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(67, 56, 202, 0.6) 50%, rgba(139, 92, 246, 0.7) 100%)'
        }}
      >
        {/* Additional depth layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/40 to-[#000000]/60"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Ambient glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
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
            className="space-y-6"
          >
            {/* Main Heading */}
            <h2 
              className="text-white"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: '700',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              Hunnid labs Rebrand
            </h2>

            {/* First Paragraph */}
            <p 
              className="text-white leading-relaxed"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: '400',
                lineHeight: '1.6'
              }}
            >
              Every design with hunnid labs is a journey. A journey to discover your DNA - what makes you different from the rest.
            </p>

            {/* Second Paragraph */}
            <p 
              className="text-white leading-relaxed"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: '400',
                lineHeight: '1.6'
              }}
            >
              Our story is about this journey helping deserving companies connect with their customers in a meaning way - all by combining the science of marketing+ the magic od design
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '18px',
                fontWeight: '500',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              Explore story
            </motion.button>
          </motion.div>

          {/* Right Section - Abstract Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
          >
            {/* Abstract W-shaped Graphic */}
            <div className="relative w-full h-full">
              {/* Main W/Arch Shapes */}
              <svg 
                className="w-full h-full" 
                viewBox="0 0 600 700" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Large overlapping rounded shapes creating W/arch pattern */}
                
                {/* Left Arch */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  d="M 100 200 Q 150 100 200 200 Q 250 300 300 200"
                  stroke="rgba(139, 92, 246, 0.5)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
                
                {/* Center Arch */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  d="M 200 200 Q 300 50 400 200 Q 450 300 500 200"
                  stroke="rgba(139, 92, 246, 0.5)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Overlapping rounded shapes */}
                <motion.ellipse
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                  cx="200"
                  cy="300"
                  rx="120"
                  ry="150"
                  fill="rgba(139, 92, 246, 0.3)"
                />

                <motion.ellipse
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.1 }}
                  cx="400"
                  cy="300"
                  rx="120"
                  ry="150"
                  fill="rgba(139, 92, 246, 0.3)"
                />

                <motion.ellipse
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.35 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.3 }}
                  cx="300"
                  cy="400"
                  rx="140"
                  ry="180"
                  fill="rgba(139, 92, 246, 0.25)"
                />

                {/* Additional connecting shapes */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 1.5 }}
                  d="M 150 350 Q 300 250 450 350"
                  stroke="rgba(139, 92, 246, 0.4)"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Smaller accent shapes */}
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  cx="180"
                  cy="250"
                  r="40"
                  fill="rgba(139, 92, 246, 0.3)"
                />

                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.9 }}
                  cx="420"
                  cy="250"
                  r="40"
                  fill="rgba(139, 92, 246, 0.3)"
                />
              </svg>

              {/* Additional blur/glow effects */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RebrandSection;

