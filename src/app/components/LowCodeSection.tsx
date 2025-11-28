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

            {/* Animated Low Code Development Visualization - Clean Layout */}
            <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
              {/* Background code pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="lowcode-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="40" height="40" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                      <circle cx="20" cy="20" r="1" fill="rgba(59, 130, 246, 0.4)" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#lowcode-grid)" />
                </svg>
              </div>

              {/* Main Low Code Visualization SVG - Cleaner Layout */}
              <div className="relative z-10 w-full h-full max-w-lg">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 500 500" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Workflow Area - Left Side */}
                  <g>
                    {/* Canvas background - Left side */}
                    <motion.rect
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      x="50"
                      y="100"
                      width="200"
                      height="300"
                      rx="15"
                      fill="rgba(15, 23, 42, 0.6)"
                      stroke="rgba(59, 130, 246, 0.4)"
                      strokeWidth="2"
                    />

                    {/* Building Blocks - Vertical Flow, Well Spaced */}
                    {[
                      { y: 130, color: 'rgba(59, 130, 246, 0.8)', label: 'Input', delay: 0.2 },
                      { y: 200, color: 'rgba(139, 92, 246, 0.8)', label: 'Process', delay: 0.4 },
                      { y: 270, color: 'rgba(236, 72, 153, 0.8)', label: 'Output', delay: 0.6 }
                    ].map((block, i) => (
                      <g key={`block-${i}`}>
                        <motion.rect
                          initial={{ opacity: 0, scale: 0, y: block.y + 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: block.y }}
                          viewport={{ once: true }}
                          animate={{
                            y: [block.y, block.y - 5, block.y],
                            opacity: [0.9, 1, 0.9]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: block.delay,
                            ease: "easeInOut"
                          }}
                          x="80"
                          y={block.y}
                          width="140"
                          height="50"
                          rx="8"
                          fill={block.color}
                          stroke="rgba(255, 255, 255, 0.3)"
                          strokeWidth="2"
                          style={{
                            filter: `drop-shadow(0 0 15px ${block.color.replace('0.8', '0.6')})`
                          }}
                        />
                        <motion.text
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: block.delay + 0.2 }}
                          x="150"
                          y={block.y + 32}
                          textAnchor="middle"
                          fill="white"
                          fontSize="16"
                          fontWeight="600"
                          fontFamily="SF Pro Display, sans-serif"
                        >
                          {block.label}
                        </motion.text>
                      </g>
                    ))}

                    {/* Connection Lines - Vertical Flow */}
                    {[
                      { from: { x: 150, y: 180 }, to: { x: 150, y: 200 } },
                      { from: { x: 150, y: 250 }, to: { x: 150, y: 270 } }
                    ].map((conn, i) => (
                      <motion.line
                        key={`conn-${i}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.5 }}
                        viewport={{ once: true }}
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                          strokeDashoffset: [0, -20, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.2 + i * 0.2
                        }}
                        x1={conn.from.x}
                        y1={conn.from.y}
                        x2={conn.to.x}
                        y2={conn.to.y}
                        stroke="rgba(59, 130, 246, 0.6)"
                        strokeWidth="3"
                        strokeDasharray="8,4"
                        markerEnd="url(#arrowhead-lowcode)"
                      />
                    ))}

                    {/* Arrow marker */}
                    <defs>
                      <marker
                        id="arrowhead-lowcode"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                      >
                        <polygon
                          points="0 0, 10 3, 0 6"
                          fill="rgba(59, 130, 246, 0.6)"
                        />
                      </marker>
                    </defs>
                  </g>

                  {/* Right Side - Integration & Metrics */}
                  <g>
                    {/* Integration Blocks - Right Side, Well Spaced */}
                    {[
                      { y: 150, color: 'rgba(34, 197, 94, 0.8)', label: 'API', delay: 0.8 },
                      { y: 230, color: 'rgba(234, 179, 8, 0.8)', label: 'Database', delay: 1.0 }
                    ].map((block, i) => (
                      <g key={`integration-${i}`}>
                        <motion.rect
                          initial={{ opacity: 0, scale: 0, x: 350 }}
                          whileInView={{ opacity: 1, scale: 1, x: 280 }}
                          viewport={{ once: true }}
                          animate={{
                            x: [280, 285, 280],
                            opacity: [0.9, 1, 0.9]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: block.delay,
                            ease: "easeInOut"
                          }}
                          x="280"
                          y={block.y}
                          width="140"
                          height="60"
                          rx="8"
                          fill={block.color}
                          stroke="rgba(255, 255, 255, 0.3)"
                          strokeWidth="2"
                          style={{
                            filter: `drop-shadow(0 0 15px ${block.color.replace('0.8', '0.6')})`
                          }}
                        />
                        <motion.text
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: block.delay + 0.2 }}
                          x="350"
                          y={block.y + 38}
                          textAnchor="middle"
                          fill="white"
                          fontSize="16"
                          fontWeight="600"
                          fontFamily="SF Pro Display, sans-serif"
                        >
                          {block.label}
                        </motion.text>
                      </g>
                    ))}

                    {/* Connection from Process to Integrations */}
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.5 }}
                      viewport={{ once: true }}
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        strokeDashoffset: [0, -20, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1.4
                      }}
                      x1="220"
                      y1="225"
                      x2="280"
                      y2="180"
                      stroke="rgba(59, 130, 246, 0.6)"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      markerEnd="url(#arrowhead-lowcode)"
                    />
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.5 }}
                      viewport={{ once: true }}
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        strokeDashoffset: [0, -20, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1.6
                      }}
                      x1="220"
                      y1="225"
                      x2="280"
                      y2="260"
                      stroke="rgba(59, 130, 246, 0.6)"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      markerEnd="url(#arrowhead-lowcode)"
                    />
                  </g>

                  {/* Bottom Section - Progress & Code Reduction */}
                  <g>
                    {/* Rapid Development Progress - Bottom Center */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <rect
                        x="100"
                        y="420"
                        width="300"
                        height="35"
                        rx="18"
                        fill="rgba(0, 0, 0, 0.4)"
                        stroke="rgba(59, 130, 246, 0.4)"
                        strokeWidth="2"
                      />
                      <motion.rect
                        initial={{ width: 0 }}
                        whileInView={{ width: 280 }}
                        viewport={{ once: true }}
                        animate={{
                          width: [0, 280, 280],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 1.2
                        }}
                        x="110"
                        y="425"
                        height="25"
                        rx="12"
                        fill="rgba(34, 197, 94, 0.8)"
                        style={{
                          filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.6))'
                        }}
                      />
                      <motion.text
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        x="250"
                        y="442"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        fontWeight="600"
                        fontFamily="SF Pro Display, sans-serif"
                      >
                        Rapid Development
                      </motion.text>
                    </motion.g>

                    {/* Code Reduction - Top Right */}
                    <motion.g
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      <motion.circle
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                        cx="400"
                        cy="120"
                        r="35"
                        fill="rgba(34, 197, 94, 0.2)"
                        stroke="rgba(34, 197, 94, 0.8)"
                        strokeWidth="3"
                        style={{
                          filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))'
                        }}
                      />
                      <motion.text
                        x="400"
                        y="115"
                        textAnchor="middle"
                        fontSize="22"
                        fontWeight="700"
                        fill="rgba(34, 197, 94, 1)"
                        fontFamily="SF Pro Display, sans-serif"
                      >
                        -80%
                      </motion.text>
                      <motion.text
                        x="400"
                        y="132"
                        textAnchor="middle"
                        fontSize="11"
                        fill="white"
                        fontFamily="SF Pro Display, sans-serif"
                      >
                        Code
                      </motion.text>
                    </motion.g>
                  </g>

                  {/* Top Section - Platform Icons */}
                  <g>
                    {[
                      { icon: '⚡', x: 50, y: 50, delay: 0.3 },
                      { icon: '🔄', x: 450, y: 50, delay: 0.5 }
                    ].map((platform, i) => (
                      <motion.text
                        key={`platform-${i}`}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        animate={{
                          y: [platform.y, platform.y - 10, platform.y],
                          rotate: [0, 10, 0],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: platform.delay,
                          ease: "easeInOut"
                        }}
                        x={platform.x}
                        y={platform.y}
                        fontSize="28"
                        style={{
                          filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))'
                        }}
                      >
                        {platform.icon}
                      </motion.text>
                    ))}
                  </g>

                  {/* Performance Metrics - Bottom Right, Well Spaced */}
                  <g>
                    {[
                      { label: 'Speed', value: '10x', y: 320, delay: 0.4 },
                      { label: 'Cost', value: '-60%', y: 360, delay: 0.6 }
                    ].map((metric, i) => (
                      <g key={`metric-${i}`}>
                        <motion.rect
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          animate={{
                            y: [metric.y, metric.y - 8, metric.y],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: metric.delay,
                            ease: "easeInOut"
                          }}
                          x="360"
                          y={metric.y - 18}
                          width="100"
                          height="36"
                          rx="10"
                          fill="rgba(59, 130, 246, 0.15)"
                          stroke="rgba(59, 130, 246, 0.4)"
                          strokeWidth="2"
                          style={{
                            filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
                          }}
                        />
                        <motion.text
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: metric.delay + 0.2 }}
                          x="410"
                          y={metric.y - 6}
                          textAnchor="middle"
                          fill="rgba(59, 130, 246, 1)"
                          fontSize="11"
                          fontWeight="600"
                          fontFamily="SF Pro Display, sans-serif"
                        >
                          {metric.label}
                        </motion.text>
                        <motion.text
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: metric.delay + 0.3 }}
                          x="410"
                          y={metric.y + 8}
                          textAnchor="middle"
                          fill="white"
                          fontSize="14"
                          fontWeight="700"
                          fontFamily="SF Pro Display, sans-serif"
                        >
                          {metric.value}
                        </motion.text>
                      </g>
                    ))}
                  </g>
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

