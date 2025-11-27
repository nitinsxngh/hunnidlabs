'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AIMLSection: React.FC = () => {
  const solutionCategories = [
    'Chatbot development',
    'Predictive Analytics',
    'Machine Learning Models',
    'AI-Driven Automation',
    'Intelligent Agents'
  ];

  const frameworks = [
    {
      name: 'Tensor flow',
      icon: '↑',
      color: 'orange',
      borderColor: 'rgba(249, 115, 22, 0.6)'
    },
    {
      name: 'Pytorch',
      icon: '🔥',
      color: 'orange',
      borderColor: 'rgba(249, 115, 22, 0.6)'
    },
    {
      name: 'OpenAI',
      icon: '🌀',
      color: 'purple',
      borderColor: 'rgba(139, 92, 246, 0.6)'
    },
    {
      name: 'Scikit-Learn',
      icon: 'sk',
      color: 'purple',
      borderColor: 'rgba(139, 92, 246, 0.6)'
    }
  ];

  const keyPointers = [
    'Building intelligent systems for smarter decisions.',
    'Automating tasks with advanced AI algorithms.',
    'Extracting valuable insights from your data.',
    'Developing custom AI solutions for your needs.'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-24">
      {/* Background */}
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
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - AI Head Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Title */}
            <h2 
              className="text-white leading-tight"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: '700',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              AI & Machine Learning Intelligent Solutions Engineered
            </h2>

            {/* AI Head Graphic */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Circuit board pattern background */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="rgba(59, 130, 246, 0.5)" />
                      <line x1="20" y1="0" x2="20" y2="40" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
                      <line x1="0" y1="20" x2="40" y2="20" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
                      <line x1="20" y1="20" x2="40" y2="0" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                      <line x1="20" y1="20" x2="0" y2="40" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
              </div>

              {/* Human Head Profile with AI */}
              <div className="relative z-10">
                <svg 
                  className="w-full h-full max-w-md" 
                  viewBox="0 0 400 500" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Head outline - profile view */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M 200 50 Q 250 80 280 120 Q 300 150 290 200 Q 285 230 270 260 Q 250 300 220 350 Q 200 380 180 400 Q 160 420 140 430 Q 120 440 100 445 Q 80 450 60 445 Q 40 440 30 420 Q 20 400 25 380 Q 30 360 50 340 Q 70 320 90 300 Q 110 280 120 250 Q 130 220 125 190 Q 120 160 110 130 Q 100 100 120 80 Q 140 60 170 55 Q 180 50 200 50 Z"
                    stroke="rgba(59, 130, 246, 0.8)"
                    strokeWidth="3"
                    fill="none"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))'
                    }}
                  />
                  
                  {/* Additional neural network lines inside head */}
                  {[...Array(8)].map((_, i) => (
                    <motion.path
                      key={i}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.4 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                      d={`M ${150 + i * 10} ${150 + i * 15} Q ${180 + i * 5} ${200 + i * 10} ${200 + i * 8} ${250 + i * 12}`}
                      stroke="rgba(59, 130, 246, 0.5)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  ))}

                  {/* AI Text inside head */}
                  <motion.text
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                    x="200"
                    y="280"
                    textAnchor="middle"
                    fill="rgba(59, 130, 246, 1)"
                    fontSize="80"
                    fontWeight="700"
                    fontFamily="SF Pro Display, sans-serif"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))'
                    }}
                  >
                    AI
                  </motion.text>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <h3 
              className="text-white"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: '700',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              Unlocking the Power of Intelligent Automation.
            </h3>

            {/* Solution Categories Boxes */}
            <div className="space-y-4">
              {/* Top Row */}
              <div className="flex flex-wrap gap-4">
                {solutionCategories.slice(0, 3).map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-6 py-4 rounded-xl"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      boxShadow: '0 4px 20px rgba(139, 92, 246, 0.1)'
                    }}
                  >
                    <p 
                      className="text-white text-sm"
                      style={{
                        fontFamily: 'SF Pro Display, sans-serif',
                        fontWeight: '500'
                      }}
                    >
                      {category}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom Row */}
              <div className="flex flex-wrap gap-4 pl-8">
                {solutionCategories.slice(3).map((category, index) => (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                    className="px-6 py-4 rounded-xl"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      boxShadow: '0 4px 20px rgba(139, 92, 246, 0.1)'
                    }}
                  >
                    <p 
                      className="text-white text-sm"
                      style={{
                        fontFamily: 'SF Pro Display, sans-serif',
                        fontWeight: '500'
                      }}
                    >
                      {category}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Frameworks */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {frameworks.map((framework, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-4 py-4 rounded-xl flex items-center gap-3"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: `2px solid ${framework.borderColor}`,
                      boxShadow: `0 4px 20px ${framework.borderColor.replace('0.6', '0.2')}`
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                      style={{
                        background: framework.borderColor.replace('0.6', '0.2')
                      }}
                    >
                      {framework.icon}
                    </div>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'SF Pro Display, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      {framework.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Pointers */}
            <div>
              <h4 
                className="text-white mb-4"
                style={{
                  fontFamily: 'SF Pro Display, sans-serif',
                  fontSize: '20px',
                  fontWeight: '600'
                }}
              >
                Key pointers
              </h4>
              <ul className="space-y-3">
                {keyPointers.map((pointer, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start text-white/90"
                    style={{
                      fontFamily: 'SF Pro Display, sans-serif',
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '1.6'
                    }}
                  >
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                    <span>{pointer}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 rounded-xl text-white font-medium transition-all duration-300"
              style={{
                fontFamily: 'SF Pro Display, sans-serif',
                fontSize: '18px',
                fontWeight: '500',
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(139, 92, 246, 0.5)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)'
              }}
            >
              Discover Our AI Capabilities
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIMLSection;

