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
          {/* Left Section - AI Neural Network Animation */}
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

            {/* Animated Neural Network Visualization */}
            <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
              {/* Animated background grid */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="neural-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <circle cx="30" cy="30" r="1.5" fill="rgba(59, 130, 246, 0.6)" />
                      <line x1="30" y1="0" x2="30" y2="60" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                      <line x1="0" y1="30" x2="60" y2="30" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#neural-grid)" />
                </svg>
              </div>

              {/* Neural Network Visualization */}
              <div className="relative z-10 w-full h-full max-w-lg">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 500 500" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Neural Network Layers */}
                  {/* Input Layer */}
                  {[100, 200, 300, 400].map((y, i) => (
                    <g key={`input-${i}`}>
                      <motion.circle
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        cx="100"
                        cy={y}
                        r="12"
                        fill="rgba(59, 130, 246, 0.8)"
                        style={{
                          filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))'
                        }}
                      />
                      <motion.circle
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 0.4, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                        cx="100"
                        cy={y}
                        r="12"
                        fill="none"
                        stroke="rgba(59, 130, 246, 0.6)"
                        strokeWidth="2"
                      />
                    </g>
                  ))}

                  {/* Hidden Layer 1 */}
                  {[120, 200, 280, 360].map((y, i) => (
                    <g key={`hidden1-${i}`}>
                      <motion.circle
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                        cx="250"
                        cy={y}
                        r="15"
                        fill="rgba(139, 92, 246, 0.8)"
                        style={{
                          filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.8))'
                        }}
                      />
                      <motion.circle
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.8, 0.3, 0.8]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: 0.5 + i * 0.4
                        }}
                        cx="250"
                        cy={y}
                        r="15"
                        fill="none"
                        stroke="rgba(139, 92, 246, 0.6)"
                        strokeWidth="2"
                      />
                    </g>
                  ))}

                  {/* Hidden Layer 2 */}
                  {[150, 250, 350].map((y, i) => (
                    <g key={`hidden2-${i}`}>
                      <motion.circle
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                        cx="350"
                        cy={y}
                        r="18"
                        fill="rgba(236, 72, 153, 0.8)"
                        style={{
                          filter: 'drop-shadow(0 0 12px rgba(236, 72, 153, 0.8))'
                        }}
                      />
                      <motion.circle
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.8, 0.2, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 1 + i * 0.5
                        }}
                        cx="350"
                        cy={y}
                        r="18"
                        fill="none"
                        stroke="rgba(236, 72, 153, 0.6)"
                        strokeWidth="2"
                      />
                    </g>
                  ))}

                  {/* Output Layer */}
                  <g>
                    <motion.circle
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      cx="450"
                      cy="250"
                      r="25"
                      fill="rgba(34, 197, 94, 0.9)"
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.9))'
                      }}
                    />
                    <motion.circle
                      animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.9, 0.1, 0.9]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                      cx="450"
                      cy="250"
                      r="25"
                      fill="none"
                      stroke="rgba(34, 197, 94, 0.7)"
                      strokeWidth="3"
                    />
                    <motion.text
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      x="450"
                      y="258"
                      textAnchor="middle"
                      fill="white"
                      fontSize="20"
                      fontWeight="700"
                      fontFamily="SF Pro Display, sans-serif"
                    >
                      AI
                    </motion.text>
                  </g>

                  {/* Animated Connections - Input to Hidden 1 */}
                  {[100, 200, 300, 400].map((y1, i) => 
                    [120, 200, 280, 360].map((y2, j) => {
                      const delay = 0.6 + (i * 0.05) + (j * 0.05);
                      return (
                        <motion.line
                          key={`conn1-${i}-${j}`}
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.3 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay }}
                          x1="100"
                          y1={y1}
                          x2="250"
                          y2={y2}
                          stroke="rgba(59, 130, 246, 0.4)"
                          strokeWidth="1"
                        />
                      );
                    })
                  )}

                  {/* Animated Connections - Hidden 1 to Hidden 2 */}
                  {[120, 200, 280, 360].map((y1, i) => 
                    [150, 250, 350].map((y2, j) => {
                      const delay = 1 + (i * 0.05) + (j * 0.05);
                      return (
                        <motion.line
                          key={`conn2-${i}-${j}`}
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.3 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay }}
                          x1="250"
                          y1={y1}
                          x2="350"
                          y2={y2}
                          stroke="rgba(139, 92, 246, 0.4)"
                          strokeWidth="1.5"
                        />
                      );
                    })
                  )}

                  {/* Animated Connections - Hidden 2 to Output */}
                  {[150, 250, 350].map((y, i) => {
                    const delay = 1.4 + (i * 0.1);
                    return (
                      <motion.line
                        key={`conn3-${i}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay }}
                        x1="350"
                        y1={y}
                        x2="450"
                        y2="250"
                        stroke="rgba(236, 72, 153, 0.5)"
                        strokeWidth="2"
                      />
                    );
                  })}

                  {/* Data Flow Animation - Pulsing dots along connections */}
                  {[100, 200, 300, 400].slice(0, 2).map((y, i) => (
                    <motion.circle
                      key={`pulse-${i}`}
                      animate={{
                        cx: [100, 250, 350, 450],
                        cy: [y, 200, 250, 250],
                        opacity: [1, 0.8, 0.6, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1.5,
                        ease: "easeInOut"
                      }}
                      r="4"
                      fill="rgba(59, 130, 246, 1)"
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 1))'
                      }}
                    />
                  ))}
                </svg>
              </div>

              {/* Glow effect overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                  filter: 'blur(60px)'
                }}
              />
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

