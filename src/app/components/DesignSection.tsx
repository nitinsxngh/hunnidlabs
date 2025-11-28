'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DesignSection: React.FC = () => {
  const services = [
    'UI/UX Design & Strategy',
    'Workflow Automation',
    'User Research & Testing',
    'Interactive Prototyping',
    'Branding & Identity'
  ];

  const tools = [
    {
      name: 'Figma',
      icon: '🎨',
      color: 'purple',
      borderColor: 'rgba(139, 92, 246, 0.6)'
    },
    {
      name: 'Adobe XD',
      icon: '💜',
      color: 'purple',
      borderColor: 'rgba(139, 92, 246, 0.6)'
    },
    {
      name: 'Miro',
      icon: '🟡',
      color: 'yellow',
      borderColor: 'rgba(234, 179, 8, 0.6)'
    },
    {
      name: 'Sketch',
      icon: '💎',
      color: 'yellow',
      borderColor: 'rgba(234, 179, 8, 0.6)'
    }
  ];

  const keyPointers = [
    'Creating intuitive and engaging user interfaces.',
    'Focusing on seamless and enjoyable user experiences.',
    'Building strong and memorable brand identities.',
    'Validating designs through user-centered research.'
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
          {/* Left Section - Design Illustration */}
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
              Design & Ideation: Crafting Exceptional Digital Experiences.
            </h2>

            {/* Animated Design Canvas Visualization */}
            <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
              {/* Background design grid */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="design-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                      <circle cx="15" cy="15" r="0.5" fill="rgba(139, 92, 246, 0.4)" />
                      <line x1="15" y1="0" x2="15" y2="30" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.5" />
                      <line x1="0" y1="15" x2="30" y2="15" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#design-grid)" />
                </svg>
              </div>

              {/* Main Design Canvas SVG */}
              <div className="relative z-10 w-full h-full max-w-lg">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 500 500" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Design Canvas/Workspace */}
                  <g>
                    {/* Canvas background */}
                    <motion.rect
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      x="100"
                      y="100"
                      width="300"
                      height="300"
                      rx="20"
                      fill="rgba(255, 255, 255, 0.05)"
                      stroke="rgba(139, 92, 246, 0.4)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />

                    {/* Floating Design Elements - Shapes */}
                    {[
                      { type: 'circle', x: 150, y: 150, size: 40, color: 'rgba(139, 92, 246, 0.8)', delay: 0.3 },
                      { type: 'rect', x: 220, y: 140, size: 50, color: 'rgba(59, 130, 246, 0.8)', delay: 0.5 },
                      { type: 'circle', x: 300, y: 180, size: 35, color: 'rgba(236, 72, 153, 0.8)', delay: 0.7 },
                      { type: 'rect', x: 180, y: 250, size: 45, color: 'rgba(34, 197, 94, 0.8)', delay: 0.9 }
                    ].map((element, i) => (
                      <g key={`element-${i}`}>
                        {element.type === 'circle' ? (
                          <motion.circle
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            animate={{
                              y: [element.y, element.y - 10, element.y],
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: element.delay,
                              ease: "easeInOut"
                            }}
                            cx={element.x}
                            cy={element.y}
                            r={element.size / 2}
                            fill={element.color}
                            style={{
                              filter: `drop-shadow(0 0 15px ${element.color.replace('0.8', '0.6')})`
                            }}
                          />
                        ) : (
                          <motion.rect
                            initial={{ opacity: 0, scale: 0, rotate: -45 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            animate={{
                              y: [element.y, element.y - 10, element.y],
                              rotate: [0, 5, 0],
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: element.delay,
                              ease: "easeInOut"
                            }}
                            x={element.x - element.size / 2}
                            y={element.y - element.size / 2}
                            width={element.size}
                            height={element.size}
                            rx="8"
                            fill={element.color}
                            style={{
                              filter: `drop-shadow(0 0 15px ${element.color.replace('0.8', '0.6')})`
                            }}
                          />
                        )}
                      </g>
                    ))}

                    {/* Typography Elements */}
                    {[
                      { text: 'A', x: 250, y: 200, size: 48, delay: 0.4 },
                      { text: 'Aa', x: 320, y: 280, size: 32, delay: 0.6 },
                      { text: 'Type', x: 140, y: 320, size: 24, delay: 0.8 }
                    ].map((text, i) => (
                      <motion.text
                        key={`text-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        animate={{
                          y: [text.y, text.y - 8, text.y],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: text.delay,
                          ease: "easeInOut"
                        }}
                        x={text.x}
                        y={text.y}
                        fontSize={text.size}
                        fontWeight="700"
                        fill="rgba(255, 255, 255, 0.9)"
                        fontFamily="SF Pro Display, sans-serif"
                        style={{
                          filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))'
                        }}
                      >
                        {text.text}
                      </motion.text>
                    ))}

                    {/* Color Palette */}
                    {[
                      { x: 120, y: 120, color: '#8b5cf6', delay: 0.2 },
                      { x: 150, y: 120, color: '#3b82f6', delay: 0.3 },
                      { x: 180, y: 120, color: '#ec4899', delay: 0.4 },
                      { x: 210, y: 120, color: '#22c55e', delay: 0.5 }
                    ].map((swatch, i) => (
                      <motion.circle
                        key={`swatch-${i}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: swatch.delay
                        }}
                        cx={swatch.x}
                        cy={swatch.y}
                        r="12"
                        fill={swatch.color}
                        stroke="rgba(255, 255, 255, 0.3)"
                        strokeWidth="2"
                        style={{
                          filter: `drop-shadow(0 0 10px ${swatch.color})`
                        }}
                      />
                    ))}

                    {/* Design Tools Icons - Floating */}
                    {[
                      { icon: '✏️', x: 350, y: 150, delay: 0.3 },
                      { icon: '🎨', x: 360, y: 220, delay: 0.5 },
                      { icon: '📐', x: 350, y: 290, delay: 0.7 },
                      { icon: '🖌️', x: 360, y: 360, delay: 0.9 }
                    ].map((tool, i) => (
                      <motion.text
                        key={`tool-${i}`}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        animate={{
                          y: [tool.y, tool.y - 15, tool.y],
                          rotate: [0, 10, 0],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: tool.delay,
                          ease: "easeInOut"
                        }}
                        x={tool.x}
                        y={tool.y}
                        fontSize="32"
                        style={{
                          filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))'
                        }}
                      >
                        {tool.icon}
                      </motion.text>
                    ))}

                    {/* Connection Lines - Design Flow */}
                    {[
                      { from: { x: 150, y: 150 }, to: { x: 220, y: 140 } },
                      { from: { x: 220, y: 140 }, to: { x: 300, y: 180 } },
                      { from: { x: 300, y: 180 }, to: { x: 180, y: 250 } }
                    ].map((conn, i) => (
                      <motion.line
                        key={`conn-${i}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.3 }}
                        viewport={{ once: true }}
                        animate={{
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1 + i * 0.2
                        }}
                        x1={conn.from.x}
                        y1={conn.from.y}
                        x2={conn.to.x}
                        y2={conn.to.y}
                        stroke="rgba(139, 92, 246, 0.5)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    ))}

                    {/* Lightbulb - Ideation */}
                    <motion.g
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      <motion.circle
                        animate={{
                          opacity: [0.6, 1, 0.6],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                        cx="250"
                        cy="250"
                        r="30"
                        fill="rgba(234, 179, 8, 0.3)"
                        stroke="rgba(234, 179, 8, 0.8)"
                        strokeWidth="2"
                        style={{
                          filter: 'drop-shadow(0 0 20px rgba(234, 179, 8, 0.6))'
                        }}
                      />
                      <motion.text
                        x="250"
                        y="260"
                        textAnchor="middle"
                        fontSize="40"
                        style={{
                          filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.8))'
                        }}
                      >
                        💡
                      </motion.text>
                    </motion.g>

                    {/* Design Process Flow - Arrows */}
                    {[0, 1, 2].map((i) => (
                      <motion.path
                        key={`arrow-${i}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4 }}
                        viewport={{ once: true }}
                        animate={{
                          pathLength: [1, 1.2, 1],
                          opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.2 + i * 0.3
                        }}
                        d={`M ${200 + i * 30} ${350} L ${220 + i * 30} ${350}`}
                        stroke="rgba(139, 92, 246, 0.6)"
                        strokeWidth="3"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                      />
                    ))}

                    {/* Arrow marker definition */}
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                      >
                        <polygon
                          points="0 0, 10 3, 0 6"
                          fill="rgba(139, 92, 246, 0.6)"
                        />
                      </marker>
                    </defs>
                  </g>

                  {/* Floating Design Metrics */}
                  {[
                    { label: 'Creativity', value: '100%', x: 80, y: 200, delay: 0.4 },
                    { label: 'Innovation', value: '∞', x: 420, y: 200, delay: 0.6 },
                    { label: 'Quality', value: '99%', x: 250, y: 420, delay: 0.8 }
                  ].map((metric, i) => (
                    <g key={`metric-${i}`}>
                      <motion.rect
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{
                          y: [metric.y, metric.y - 10, metric.y],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: metric.delay,
                          ease: "easeInOut"
                        }}
                        x={metric.x - 40}
                        y={metric.y - 20}
                        width="80"
                        height="40"
                        rx="10"
                        fill="rgba(139, 92, 246, 0.15)"
                        stroke="rgba(139, 92, 246, 0.4)"
                        strokeWidth="2"
                        style={{
                          filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))'
                        }}
                      />
                      <motion.text
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: metric.delay + 0.2 }}
                        x={metric.x}
                        y={metric.y - 8}
                        textAnchor="middle"
                        fill="rgba(139, 92, 246, 1)"
                        fontSize="12"
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
                        x={metric.x}
                        y={metric.y + 8}
                        textAnchor="middle"
                        fill="white"
                        fontSize="16"
                        fontWeight="700"
                        fontFamily="SF Pro Display, sans-serif"
                      >
                        {metric.value}
                      </motion.text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Glow effect overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
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
              Where Creativity Meets User-Centricity.
            </h3>

            {/* Service Boxes */}
            <div className="space-y-4">
              {/* First Row */}
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
                      border: '1px solid rgba(255, 255, 255, 0.2)',
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
              
              {/* Second Row */}
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
                      border: '1px solid rgba(255, 255, 255, 0.2)',
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
                      boxShadow: `0 4px 20px ${tool.borderColor.replace('0.6', '0.2')}`
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                      style={{
                        background: tool.borderColor.replace('0.6', '0.2')
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
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.1)'
              }}
            >
              View Our Design Portfolio
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;

