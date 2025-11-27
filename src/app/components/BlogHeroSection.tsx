'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BlogHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-8 pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2b] via-[#050814] to-[#000000]">
        {/* Subtle cosmic texture */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        {/* Deep space glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 mb-6"
            style={{
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '14px',
              fontWeight: '300',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            Insights & Stories
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white mb-6 leading-tight"
            style={{
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: 'clamp(48px, 8vw, 72px)',
              fontWeight: '700',
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}
          >
            Our
            <span
              style={{
                background: 'linear-gradient(to right, #3b82f6, #60a5fa, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            > Blog
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'SF Pro Display, sans-serif',
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: '400',
              lineHeight: '1.6'
            }}
          >
            Discover the latest insights, trends, and stories from the world of technology, AI, and digital innovation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHeroSection;

