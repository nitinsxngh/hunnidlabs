'use client';

import React from 'react';
import { motion } from 'framer-motion';

const JoinTeamSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-8 py-24">
      {/* Background - Dark blue-purple gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(67, 56, 202, 0.8) 0%, rgba(30, 27, 75, 0.9) 50%, rgba(15, 23, 42, 0.95) 100%)'
        }}
      >
        {/* Subtle concentric circular lines (ripple effect) */}
        <div className="absolute inset-0 flex items-center justify-end pr-8">
          <div className="relative">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1 + (i * 0.3),
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3 + (i * 0.5),
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute rounded-full border"
                style={{
                  width: `${200 + (i * 150)}px`,
                  height: `${200 + (i * 150)}px`,
                  borderColor: 'rgba(139, 92, 246, 0.4)',
                  borderWidth: '1px',
                  right: '0',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Additional subtle glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 blur-2xl rounded-full"></div>
        </div>

        {/* Thin light blue line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        {/* Main Question */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white mb-8"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: '700',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}
        >
          Want to join team HUNNID LABS ?
        </motion.h2>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 rounded-xl text-white font-medium transition-all duration-300"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '18px',
            fontWeight: '500',
            background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(139, 92, 246, 0.5)',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)'
          }}
        >
          connect now
        </motion.button>
      </div>
    </section>
  );
};

export default JoinTeamSection;

