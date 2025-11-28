'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WebAppSection: React.FC = () => {
  const services = [
    'Custom Web Development',
    'SaaS Platforms',
    'E-commerce Solutions',
    'Progressive Web Apps (PWAs)',
    'Enterprise Web Applications'
  ];

  const technologies = [
    {
      name: 'React',
      icon: '⚛️',
      color: 'blue',
      borderColor: 'rgba(59, 130, 246, 0.6)'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      color: 'green',
      borderColor: 'rgba(34, 197, 94, 0.6)'
    },
    {
      name: 'Python',
      icon: '🐍',
      color: 'blue',
      borderColor: 'rgba(59, 130, 246, 0.6)'
    },
    {
      name: 'JavaScript',
      icon: 'JS',
      color: 'yellow',
      borderColor: 'rgba(234, 179, 8, 0.6)'
    }
  ];

  const keyPointers = [
    'Building scalable and secure web solutions.',
    'User-centric design for optimal engagement.',
    'Utilizing cutting-edge web technologies.',
    'Delivering robust and high-performing applications.'
  ];

  const appIcons = ['📘', '📷', '🐦', '💬', '💼', '👻', '📌', '➕', '▶️'];

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
          {/* Left Section - Phone Graphic */}
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
              Web Application Development: Engineered for Performance
            </h2>

            {/* Animated Web Application Visualization */}
            <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
              {/* Animated code background */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="code-pattern" x="0" y="0" width="100" height="30" patternUnits="userSpaceOnUse">
                      <text x="0" y="20" fill="rgba(59, 130, 246, 0.3)" fontSize="12" fontFamily="monospace">
                        {'<div>'}
                      </text>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#code-pattern)" />
                </svg>
              </div>

              {/* Central Device/Phone */}
              <div className="relative z-20">
                {/* Phone body with realistic design */}
                <motion.div 
                  className="relative w-64 h-[500px] rounded-[3rem] mx-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                    border: '8px solid #2a2a2a',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(59, 130, 246, 0.1)'
                  }}
                >
                  {/* Phone screen with animated web app interface */}
                  <div 
                    className="absolute inset-4 rounded-[2.5rem] overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
                      boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), inset 0 0 60px rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    {/* Web App Interface */}
                    <div className="absolute inset-0 p-4">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-white text-xs font-semibold">9:41</div>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                          ))}
                        </div>
                      </div>

                      {/* App header */}
                      <motion.div 
                        className="h-12 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg mb-3 flex items-center px-4"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className="w-8 h-8 bg-blue-500/50 rounded-lg mr-3"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-white/40 rounded w-20 mb-1"></div>
                          <div className="h-1.5 bg-white/20 rounded w-16"></div>
                        </div>
                      </motion.div>

                      {/* Content cards */}
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          className="h-20 bg-white/5 rounded-lg mb-2 p-3 border border-white/10"
                        >
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-blue-500/30 rounded-lg mr-3"></div>
                            <div className="flex-1">
                              <div className="h-2 bg-white/30 rounded w-24 mb-1"></div>
                              <div className="h-1.5 bg-white/20 rounded w-16"></div>
                            </div>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded w-full"></div>
                        </motion.div>
                      ))}

                      {/* Performance indicator */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="absolute bottom-4 left-4 right-4"
                      >
                        <div className="bg-green-500/20 rounded-lg p-2 border border-green-500/30">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-green-400 text-xs font-semibold">Performance</span>
                            <span className="text-white text-xs">98%</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '98%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 1.2 }}
                              className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
                </motion.div>

                {/* Blue glow on surface */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-20 blur-2xl z-10"
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
                  }}
                />
              </div>

              {/* Floating Code Snippets */}
              {[
                { code: 'React', color: 'rgba(97, 218, 251, 0.8)', delay: 0 },
                { code: 'Node.js', color: 'rgba(34, 197, 94, 0.8)', delay: 0.3 },
                { code: 'TypeScript', color: 'rgba(59, 130, 246, 0.8)', delay: 0.6 },
                { code: 'Next.js', color: 'rgba(0, 0, 0, 0.8)', delay: 0.9 }
              ].map((item, index) => {
                const angle = (index * 90) + 45;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    whileInView={{ opacity: 1, scale: 1, x: x, y: y }}
                    viewport={{ once: true }}
                    animate={{
                      y: [y, y - 15, y],
                      opacity: [0.7, 1, 0.7],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "easeInOut"
                    }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                    style={{
                      filter: `drop-shadow(0 0 15px ${item.color})`
                    }}
                  >
                    <div 
                      className="px-4 py-2 rounded-lg backdrop-blur-sm border"
                      style={{
                        background: `${item.color.replace('0.8', '0.15')}`,
                        borderColor: item.color,
                        boxShadow: `0 0 25px ${item.color.replace('0.8', '0.4')}`
                      }}
                    >
                      <code 
                        className="text-white text-sm font-mono font-semibold"
                        style={{ color: item.color === 'rgba(0, 0, 0, 0.8)' ? 'white' : item.color }}
                      >
                        {item.code}
                      </code>
                    </div>
                  </motion.div>
                );
              })}

              {/* Performance Metrics - Floating */}
              {[
                { label: 'Speed', value: '99%', delay: 0.2 },
                { label: 'SEO', value: '100%', delay: 0.5 },
                { label: 'Security', value: '98%', delay: 0.8 }
              ].map((metric, index) => {
                const positions = [
                  { x: -180, y: -80 },
                  { x: 180, y: -80 },
                  { x: 0, y: 200 }
                ];
                const pos = positions[index];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [pos.y, pos.y - 10, pos.y],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: metric.delay,
                      ease: "easeInOut"
                    }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                    style={{
                      x: pos.x,
                      y: pos.y
                    }}
                  >
                    <div 
                      className="px-3 py-2 rounded-lg backdrop-blur-sm"
                      style={{
                        background: 'rgba(59, 130, 246, 0.15)',
                        border: '1px solid rgba(59, 130, 246, 0.4)',
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                      }}
                    >
                      <div className="text-blue-400 text-xs font-semibold mb-0.5">{metric.label}</div>
                      <div className="text-white text-lg font-bold">{metric.value}</div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connection lines */}
              <svg 
                className="absolute inset-0 w-full h-full z-10 pointer-events-none" 
                viewBox="0 0 500 500"
                preserveAspectRatio="xMidYMid meet"
              >
                {[0, 1, 2, 3].map((i) => {
                  const angle = (i * 90) + 45;
                  const radius = 140;
                  const x = 250 + Math.cos((angle * Math.PI) / 180) * radius;
                  const y = 250 + Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.line
                      key={i}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.2 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      x1="250"
                      y1="250"
                      x2={x}
                      y2={y}
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                  );
                })}
              </svg>
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
              Your Vision, Beautifully Coded and Deployed.
            </h3>

            {/* Service Boxes */}
            <div className="space-y-4">
              {/* Top Row */}
              <div className="flex flex-wrap gap-4">
                {services.slice(0, 3).map((service, index) => (
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
                      {service}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom Row */}
              <div className="flex flex-wrap gap-4">
                {services.slice(3).map((service, index) => (
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
                      {service}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technology Boxes */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-4 py-4 rounded-xl flex items-center gap-3"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: `2px solid ${tech.borderColor}`,
                      boxShadow: `0 4px 20px ${tech.borderColor.replace('0.6', '0.2')}`
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold"
                      style={{
                        background: tech.borderColor.replace('0.6', '0.2')
                      }}
                    >
                      {tech.icon}
                    </div>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'SF Pro Display, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      {tech.name}
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
              See Our Web App Portfolio
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebAppSection;

