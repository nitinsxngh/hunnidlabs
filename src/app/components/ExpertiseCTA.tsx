'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ExpertiseCTA: React.FC = () => {
  return (
    <section className="relative py-24 px-8">
      {/* Background - gradient from dark blue to black */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(30, 58, 138, 0.3) 0%, rgba(15, 23, 42, 0.5) 50%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      >
        {/* Additional subtle effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-1/2 right-1/4 w-64 h-64 bg-purple-500/5 blur-2xl rounded-full"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Container with Glowing Blue Border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 lg:p-12"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '2px solid rgba(59, 130, 246, 0.6)',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), inset 0 0 40px rgba(59, 130, 246, 0.05)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Section - Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center"
            >
              <p 
                className="text-white leading-relaxed"
                style={{
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  textAlign: 'left'
                }}
              >
                From demanding sectors like fintech and e-commerce to healthcare, our team&apos;s proven expertise delivers complete end-to-end solutions: from engineering the code to acquiring your customer.
              </p>
            </motion.div>

            {/* Right Section - CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center md:justify-end"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-xl text-white font-medium transition-all duration-300"
                style={{
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '18px',
                  fontWeight: '500',
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(30, 58, 138, 0.6) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1)'
                }}
              >
                Talk to our experts
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseCTA;

