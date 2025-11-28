'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CareerSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-24">
      {/* Background - Dark with geometric network pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] to-[#000000]">
        {/* Geometric network pattern - interconnected dots and lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="rgba(139, 92, 246, 0.6)" />
                <line x1="50" y1="50" x2="150" y2="50" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="50" y2="150" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="150" y2="150" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="0" y2="150" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="150" y2="0" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="0" y2="0" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network-pattern)" />
          </svg>
        </div>

        {/* Subtle glowing effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full"></div>
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
            {/* Main Heading */}
            <h2 
              className="text-white leading-tight"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: '700',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              Grow your career
              <br />
              with Hunnid labs!
            </h2>

            {/* Description */}
            <p 
              className="text-white/80 leading-relaxed"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: '400',
                lineHeight: '1.6',
                maxWidth: '600px'
              }}
            >
              Hunnid Labs positions itself as a dynamic and forward-thinking workplace, ideal for professionals eager to build AI-driven technology in a supportive and flexible environment, with ample opportunities for growth and real impact.
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
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(139, 92, 246, 0.5)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)'
              }}
            >
              connect now
            </motion.button>
          </motion.div>

          {/* Right Section - Hunnid Logo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-md max-h-[500px] mx-auto">
              <Image
                src="/components/hunnid-logo-transparent.png"
                alt="Hunnid Labs Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;

