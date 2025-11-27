'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MissionSection: React.FC = () => {
  const thingsWeDo = [
    'Build world - class product',
    'Breathe creativity',
    'Obsess over details',
    'Value relationships',
    'love pets of all kind'
  ];

  const thingsWeDont = [
    'Sacrifice quality for profit',
    'Overpromise',
    'Work for free',
    'Appreciate egos',
    'like corona'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-24">
      {/* Background - matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] to-[#000000]">
        {/* Subtle glowing blue edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5"></div>
        
        {/* Geometric network pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="rgba(59, 130, 246, 0.3)" />
                <line x1="50" y1="50" x2="150" y2="50" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="50" y2="150" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="150" y2="150" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="0" y2="150" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>

        {/* Faint blue light effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/8 blur-2xl rounded-full"></div>
        </div>

        {/* Cosmic particle specks */}
        {[...Array(50)].map((_, i) => (
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
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Main Title */}
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
          On a mission to create a beautiful and prosperous work
        </motion.h2>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Things we do Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div 
              className="relative rounded-3xl p-8 backdrop-blur-md border-2"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)',
                borderColor: 'rgba(139, 92, 246, 0.5)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Glowing border effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.1)'
                }}
              />

              {/* Card Content */}
              <div className="relative z-10">
                <h3 
                  className="text-white mb-6"
                  style={{
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '1.2'
                  }}
                >
                  Things we do
                </h3>
                
                <ul className="space-y-4">
                  {thingsWeDo.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start text-white"
                      style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '1.6'
                      }}
                    >
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Things we don't Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div 
              className="relative rounded-3xl p-8 backdrop-blur-md border-2"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)',
                borderColor: 'rgba(139, 92, 246, 0.5)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Glowing border effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.1)'
                }}
              />

              {/* Card Content */}
              <div className="relative z-10">
                <h3 
                  className="text-white mb-6"
                  style={{
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '1.2'
                  }}
                >
                  Things we don&apos;t
                </h3>
                
                <ul className="space-y-4">
                  {thingsWeDont.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start text-white"
                      style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '1.6'
                      }}
                    >
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

