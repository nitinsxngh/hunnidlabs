'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LowCodeSection: React.FC = () => {
  const applications = [
    'Rapid Application Development',
    'Workflow Automation',
    'Citizen Development Enablement',
    'Custom Low Code Solutions',
    'Platform Integration'
  ];

  const tools = [
    {
      name: 'Webflow',
      icon: 'W',
      color: 'purple',
      borderColor: 'rgba(139, 92, 246, 0.6)'
    },
    {
      name: 'Bubble',
      icon: '.b',
      color: 'blue',
      borderColor: 'rgba(59, 130, 246, 0.8)',
      highlighted: true
    },
    {
      name: 'Zapier',
      icon: '⚡',
      color: 'orange',
      borderColor: 'rgba(249, 115, 22, 0.6)'
    },
    {
      name: 'N8N',
      icon: '🔄',
      color: 'purple',
      borderColor: 'rgba(139, 92, 246, 0.6)'
    }
  ];

  const keyPointers = [
    'Building applications with speed and agility.',
    'Empowering business users with development tools.',
    'Streamlining processes through automation.',
    'Integrating with your existing systems seamlessly.'
  ];

  const digitalIcons = [
    { type: 'folder', x: 20, y: 20 },
    { type: 'document', x: 60, y: 30 },
    { type: 'chart', x: 40, y: 50 },
    { type: 'person', x: 70, y: 40 },
    { type: 'camera', x: 30, y: 60 },
    { type: 'server', x: 50, y: 70 }
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
          {/* Left Section - Digital Icons Graphic */}
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
              Low Code Development: Rapid Solutions, Powerful Results.
            </h2>

            {/* Digital Icons Panel */}
            <div className="relative w-full h-[500px]">
              {/* Light Blue Background Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-3xl p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(147, 197, 253, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(37, 99, 235, 0.2) 100%)',
                  boxShadow: '0 20px 60px rgba(59, 130, 246, 0.2)'
                }}
              >
                {/* Digital Icons and Elements */}
                <div className="relative w-full h-full">
                  {/* Folder Icon */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute top-[10%] left-[15%]"
                  >
                    <div className="w-16 h-12 bg-blue-500 rounded-t-lg">
                      <div className="w-8 h-8 bg-blue-400 rounded-t-lg -mt-2 ml-2"></div>
                    </div>
                  </motion.div>

                  {/* Document with Checkmark */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute top-[20%] left-[40%]"
                  >
                    <div className="w-12 h-16 bg-white rounded shadow-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                  </motion.div>

                  {/* Chart/Graph */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute top-[35%] left-[25%]"
                  >
                    <div className="w-20 h-16 bg-white rounded shadow-lg p-2">
                      <div className="flex items-end gap-1 h-full">
                        <div className="w-4 bg-blue-500 rounded-t" style={{ height: '40%' }}></div>
                        <div className="w-4 bg-blue-400 rounded-t" style={{ height: '70%' }}></div>
                        <div className="w-4 bg-blue-500 rounded-t" style={{ height: '50%' }}></div>
                        <div className="w-4 bg-blue-400 rounded-t" style={{ height: '90%' }}></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Person Icon with Data */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute top-[50%] left-[55%]"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                        👤
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs text-white">
                        5
                      </div>
                    </div>
                  </motion.div>

                  {/* Security Camera */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute top-[60%] left-[20%]"
                  >
                    <div className="w-14 h-10 bg-white rounded shadow-lg flex items-center justify-center">
                      <div className="w-8 h-6 bg-blue-500 rounded"></div>
                    </div>
                  </motion.div>

                  {/* Server Rack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="absolute top-[70%] left-[45%]"
                  >
                    <div className="w-16 h-20 bg-gray-800 rounded shadow-lg">
                      <div className="p-1 space-y-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-3 bg-blue-400 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Abstract Lines and Dots */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`line-${i}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.3 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                      className="absolute"
                      style={{
                        top: `${20 + (i * 10)}%`,
                        left: `${30 + (i * 5)}%`,
                        width: `${40 + i * 5}px`,
                        height: '2px',
                        background: 'rgba(59, 130, 246, 0.5)',
                        transform: `rotate(${i * 15}deg)`
                      }}
                    />
                  ))}

                  {/* Dots */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={`dot-${i}`}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.6 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1 + i * 0.05 }}
                      className="absolute w-2 h-2 bg-blue-500 rounded-full"
                      style={{
                        top: `${15 + (i % 4) * 20}%`,
                        left: `${25 + Math.floor(i / 4) * 20}%`
                      }}
                    />
                  ))}
                </div>
              </motion.div>
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
              Accelerate Development Without Compromising Quality.
            </h3>

            {/* Application Boxes */}
            <div className="space-y-4">
              {/* First Row */}
              <div className="flex flex-wrap gap-4">
                {applications.slice(0, 3).map((app, index) => (
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
                      {app}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              {/* Second Row */}
              <div className="flex flex-wrap gap-4">
                {applications.slice(3).map((app, index) => (
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
                      {app}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tool Boxes */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-4 py-4 rounded-xl flex items-center gap-3"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: `2px solid ${tool.borderColor}`,
                      boxShadow: tool.highlighted 
                        ? `0 4px 20px ${tool.borderColor.replace('0.8', '0.4')}, 0 0 30px ${tool.borderColor.replace('0.8', '0.3')}`
                        : `0 4px 20px ${tool.borderColor.replace('0.6', '0.2')}`
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
                      style={{
                        background: tool.borderColor.replace('0.6', '0.2').replace('0.8', '0.3'),
                        color: tool.color === 'purple' ? '#a855f7' : tool.color === 'orange' ? '#f97316' : '#3b82f6'
                      }}
                    >
                      {tool.icon}
                    </div>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'SF Pro Display, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      {tool.name}
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
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(139, 92, 246, 0.5)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)'
              }}
            >
              Learn About Low Code Benefits
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LowCodeSection;

