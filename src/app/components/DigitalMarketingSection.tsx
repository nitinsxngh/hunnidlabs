'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DigitalMarketingSection: React.FC = () => {
  const services = [
    'Performance Marketing',
    'Search Engine Optimization (SEO)',
    'Social Media Marketing',
    'Content Marketing',
    'Marketing Analytics'
  ];

  const platforms = [
    {
      name: 'Google Ads',
      icon: '🔍',
      color: 'blue',
      borderColor: 'rgba(59, 130, 246, 0.6)'
    },
    {
      name: 'Meta',
      icon: '📘',
      color: 'blue',
      borderColor: 'rgba(59, 130, 246, 0.6)'
    },
    {
      name: 'SEO',
      icon: '📊',
      color: 'purple',
      borderColor: 'rgba(139, 92, 246, 0.6)'
    },
    {
      name: 'SMM',
      icon: '📱',
      color: 'purple',
      borderColor: 'rgba(139, 92, 246, 0.6)'
    }
  ];

  const keyPointers = [
    'Achieving measurable results through data-driven strategies.',
    'Improving your online visibility and organic reach.',
    'Engaging your audience across relevant platforms.',
    'Creating valuable content that resonates with customers.'
  ];

  const hexagonLabels = [
    { label: 'DIGITAL MARKETING', icon: '🎯', x: 50, y: 50, highlighted: true },
    { label: 'ANALYS', icon: '📊', x: 20, y: 30 },
    { label: 'ADVERT', icon: '📢', x: 80, y: 30 },
    { label: 'SEO', icon: '💡', x: 15, y: 70 },
    { label: 'CONTENT', icon: '💻', x: 85, y: 70 },
    { label: 'SOCIAL', icon: '⏰', x: 50, y: 20 }
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
          {/* Left Section - Hexagonal Grid Graphic */}
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
              Digital Marketing: Driving Growth and Engagement.
            </h2>

            {/* Enhanced Digital Marketing Visualization */}
            <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
              {/* Background marketing pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="marketing-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                      <circle cx="25" cy="25" r="1.5" fill="rgba(59, 130, 246, 0.4)" />
                      <line x1="25" y1="0" x2="25" y2="50" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                      <line x1="0" y1="25" x2="50" y2="25" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#marketing-grid)" />
                </svg>
              </div>

              {/* Main Marketing Visualization SVG */}
              <div className="relative z-10 w-full h-full max-w-lg">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 500 500" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Hub - Digital Marketing Core */}
                  <g>
                    {/* Central hexagon - Main hub */}
                    <motion.polygon
                      initial={{ pathLength: 0, opacity: 0, scale: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      points="250,150 280,170 280,200 250,220 220,200 220,170"
                      stroke="rgba(234, 179, 8, 0.9)"
                      strokeWidth="3"
                      fill="rgba(234, 179, 8, 0.2)"
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(234, 179, 8, 0.7))'
                      }}
                    />
                    <motion.text
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      x="250"
                      y="180"
                      textAnchor="middle"
                      fill="#fbbf24"
                      fontSize="14"
                      fontWeight="700"
                      fontFamily="SF Pro Display, sans-serif"
                    >
                      MARKETING
                    </motion.text>
                    <motion.text
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      x="250"
                      y="195"
                      textAnchor="middle"
                      fontSize="24"
                    >
                      🎯
                    </motion.text>

                    {/* Surrounding Marketing Channels - Hexagons */}
                    {[
                      { angle: 0, label: 'SEO', icon: '📊', color: 'rgba(59, 130, 246, 0.8)', delay: 0.2 },
                      { angle: 60, label: 'ADS', icon: '📢', color: 'rgba(139, 92, 246, 0.8)', delay: 0.3 },
                      { angle: 120, label: 'SOCIAL', icon: '📱', color: 'rgba(236, 72, 153, 0.8)', delay: 0.4 },
                      { angle: 180, label: 'CONTENT', icon: '💻', color: 'rgba(34, 197, 94, 0.8)', delay: 0.5 },
                      { angle: 240, label: 'ANALYTICS', icon: '📈', color: 'rgba(234, 179, 8, 0.8)', delay: 0.6 },
                      { angle: 300, label: 'EMAIL', icon: '✉️', color: 'rgba(249, 115, 22, 0.8)', delay: 0.7 }
                    ].map((channel, i) => {
                      const radius = 120;
                      const centerX = 250;
                      const centerY = 185;
                      const x = centerX + Math.cos((channel.angle * Math.PI) / 180) * radius;
                      const y = centerY + Math.sin((channel.angle * Math.PI) / 180) * radius;
                      const hexSize = 35;
                      const points = [];
                      for (let j = 0; j < 6; j++) {
                        const angle = (Math.PI / 3) * j;
                        const px = x + hexSize * Math.cos(angle);
                        const py = y + hexSize * Math.sin(angle);
                        points.push(`${px},${py}`);
                      }
                      
                      return (
                        <g key={`channel-${i}`}>
                          {/* Hexagon */}
                          <motion.polygon
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.9, 1, 0.9]
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: channel.delay,
                              ease: "easeInOut"
                            }}
                            points={points.join(' ')}
                            stroke={channel.color}
                            strokeWidth="2.5"
                            fill={channel.color.replace('0.8', '0.15')}
                            style={{
                              filter: `drop-shadow(0 0 15px ${channel.color.replace('0.8', '0.5')})`
                            }}
                          />
                          
                          {/* Label */}
                          <motion.text
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: channel.delay + 0.2 }}
                            x={x}
                            y={y - 8}
                            textAnchor="middle"
                            fill="white"
                            fontSize="11"
                            fontWeight="600"
                            fontFamily="SF Pro Display, sans-serif"
                          >
                            {channel.label}
                          </motion.text>
                          
                          {/* Icon */}
                          <motion.text
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: channel.delay + 0.3
                            }}
                            x={x}
                            y={y + 12}
                            textAnchor="middle"
                            fontSize="18"
                          >
                            {channel.icon}
                          </motion.text>

                          {/* Connection line to center */}
                          <motion.line
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.4 }}
                            viewport={{ once: true }}
                            animate={{
                              opacity: [0.4, 0.7, 0.4],
                              strokeDashoffset: [0, -30, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: channel.delay + 0.5
                            }}
                            x1={centerX}
                            y1={centerY}
                            x2={x}
                            y2={y}
                            stroke={channel.color}
                            strokeWidth="2"
                            strokeDasharray="8,4"
                            markerEnd="url(#arrowhead-marketing)"
                          />
                        </g>
                      );
                    })}

                    {/* Arrow marker */}
                    <defs>
                      <marker
                        id="arrowhead-marketing"
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

                    {/* Data flow particles */}
                    {[0, 1, 2, 3].map((i) => {
                      const channels = [
                        { angle: 0, color: 'rgba(59, 130, 246, 1)' },
                        { angle: 120, color: 'rgba(236, 72, 153, 1)' },
                        { angle: 180, color: 'rgba(34, 197, 94, 1)' },
                        { angle: 300, color: 'rgba(249, 115, 22, 1)' }
                      ];
                      const channel = channels[i];
                      const radius = 120;
                      const startX = 250 + Math.cos((channel.angle * Math.PI) / 180) * radius;
                      const startY = 185 + Math.sin((channel.angle * Math.PI) / 180) * radius;
                      
                      return (
                        <motion.circle
                          key={`particle-${i}`}
                          animate={{
                            cx: [startX, 250, startX],
                            cy: [startY, 185, startY],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.7,
                            ease: "easeInOut"
                          }}
                          r="4"
                          fill={channel.color}
                          style={{
                            filter: `drop-shadow(0 0 8px ${channel.color})`
                          }}
                        />
                      );
                    })}
                  </g>

                  {/* Growth Metrics - Top Section */}
                  <g>
                    {[
                      { label: 'Growth', value: '+250%', x: 100, y: 80, delay: 0.4 },
                      { label: 'Engagement', value: '+180%', x: 400, y: 80, delay: 0.6 }
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
                          x={metric.x - 50}
                          y={metric.y - 25}
                          width="100"
                          height="50"
                          rx="12"
                          fill="rgba(34, 197, 94, 0.15)"
                          stroke="rgba(34, 197, 94, 0.6)"
                          strokeWidth="2"
                          style={{
                            filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.4))'
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
                          fill="rgba(34, 197, 94, 1)"
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
                          y={metric.y + 12}
                          textAnchor="middle"
                          fill="white"
                          fontSize="18"
                          fontWeight="700"
                          fontFamily="SF Pro Display, sans-serif"
                        >
                          {metric.value}
                        </motion.text>
                      </g>
                    ))}
                  </g>

                  {/* Analytics Chart - Bottom Section */}
                  <g>
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      {/* Chart background */}
                      <rect
                        x="80"
                        y="380"
                        width="340"
                        height="80"
                        rx="12"
                        fill="rgba(0, 0, 0, 0.4)"
                        stroke="rgba(59, 130, 246, 0.4)"
                        strokeWidth="2"
                      />
                      
                      {/* Chart bars */}
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <motion.rect
                          key={`bar-${i}`}
                          initial={{ height: 0 }}
                          whileInView={{ height: 30 + i * 8 }}
                          viewport={{ once: true }}
                          animate={{
                            height: [30 + i * 8, 35 + i * 8, 30 + i * 8],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1 + i * 0.1
                          }}
                          x={100 + i * 50}
                          y={440 - (30 + i * 8)}
                          width="30"
                          rx="4"
                          fill="rgba(59, 130, 246, 0.8)"
                          style={{
                            filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))'
                          }}
                        />
                      ))}
                      
                      {/* Chart label */}
                      <motion.text
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        x="250"
                        y="475"
                        textAnchor="middle"
                        fill="rgba(59, 130, 246, 1)"
                        fontSize="14"
                        fontWeight="600"
                        fontFamily="SF Pro Display, sans-serif"
                      >
                        Performance Growth
                      </motion.text>
                    </motion.g>
                  </g>

                  {/* ROI Indicator - Top Right */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
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
                      cx="420"
                      cy="250"
                      r="40"
                      fill="rgba(34, 197, 94, 0.2)"
                      stroke="rgba(34, 197, 94, 0.8)"
                      strokeWidth="3"
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))'
                      }}
                    />
                    <motion.text
                      x="420"
                      y="245"
                      textAnchor="middle"
                      fontSize="22"
                      fontWeight="700"
                      fill="rgba(34, 197, 94, 1)"
                      fontFamily="SF Pro Display, sans-serif"
                    >
                      ROI
                    </motion.text>
                    <motion.text
                      x="420"
                      y="262"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="700"
                      fill="white"
                      fontFamily="SF Pro Display, sans-serif"
                    >
                      5x
                    </motion.text>
                  </motion.g>
                </svg>
              </div>

              {/* Glow effect overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(234, 179, 8, 0.1) 0%, transparent 70%)',
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
              Connecting You with Your Audience, Effectively.
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

            {/* Platform Boxes */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-4 py-4 rounded-xl flex items-center gap-3"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: `2px solid ${platform.borderColor}`,
                      boxShadow: `0 4px 20px ${platform.borderColor.replace('0.6', '0.2')}`
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                      style={{
                        background: platform.borderColor.replace('0.6', '0.2')
                      }}
                    >
                      {platform.icon}
                    </div>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'SF Pro Display, sans-serif',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      {platform.name}
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
              Explore Our Marketing Services
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;

