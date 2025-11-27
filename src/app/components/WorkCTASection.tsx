'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WorkCTASection: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center px-8 py-24">
      {/* Background - Blue to Purple Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.4) 0%, rgba(67, 56, 202, 0.5) 100%)'
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
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* White Border Container with Glow */}
          <div 
            className="rounded-3xl p-12 md:p-16"
            style={{
              border: '2px solid rgba(255, 255, 255, 0.9)',
              background: 'rgba(30, 58, 138, 0.6)',
              boxShadow: '0 0 40px rgba(255, 255, 255, 0.2), inset 0 0 60px rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Quote Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-center mb-10 leading-relaxed"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '400',
                lineHeight: '1.4'
              }}
            >
              From idea to execution, we deliver<br />
              technology that drives growth.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-lg text-white font-medium transition-all duration-300"
                style={{
                  fontFamily: 'SF Pro Display, sans-serif',
                  fontSize: '18px',
                  fontWeight: '500',
                  background: 'rgba(37, 99, 235, 1)',
                  boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)'
                }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkCTASection;

