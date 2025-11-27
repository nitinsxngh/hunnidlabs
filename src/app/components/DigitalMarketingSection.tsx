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

            {/* Hexagonal Grid with Hand */}
            <div className="relative w-full h-[500px]">
              <div className="relative w-full h-full">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 400 500" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Hexagonal Grid */}
                  {hexagonLabels.map((hex, index) => {
                    const size = hex.highlighted ? 60 : 45;
                    const centerX = (hex.x / 100) * 400;
                    const centerY = (hex.y / 100) * 400;
                    
                    // Calculate hexagon points
                    const points = [];
                    for (let i = 0; i < 6; i++) {
                      const angle = (Math.PI / 3) * i;
                      const x = centerX + size * Math.cos(angle);
                      const y = centerY + size * Math.sin(angle);
                      points.push(`${x},${y}`);
                    }
                    
                    return (
                      <g key={index}>
                        {/* Hexagon */}
                        <motion.polygon
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          points={points.join(' ')}
                          stroke={hex.highlighted ? 'rgba(234, 179, 8, 0.8)' : 'rgba(59, 130, 246, 0.6)'}
                          strokeWidth="2"
                          fill={hex.highlighted ? 'rgba(234, 179, 8, 0.2)' : 'rgba(59, 130, 246, 0.1)'}
                          style={{
                            filter: hex.highlighted ? 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.6))' : 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.3))'
                          }}
                        />
                        
                        {/* Label */}
                        <motion.text
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          x={centerX}
                          y={centerY - 15}
                          textAnchor="middle"
                          fill={hex.highlighted ? '#fbbf24' : '#ffffff'}
                          fontSize={hex.highlighted ? '12' : '10'}
                          fontWeight="600"
                          fontFamily="SF Pro Display, sans-serif"
                        >
                          {hex.label}
                        </motion.text>
                        
                        {/* Icon */}
                        <motion.text
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                          x={centerX}
                          y={centerY + 10}
                          textAnchor="middle"
                          fontSize="20"
                        >
                          {hex.icon}
                        </motion.text>
                      </g>
                    );
                  })}

                  {/* Connecting Lines */}
                  {[
                    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
                    [1, 3], [2, 4], [3, 5], [4, 5]
                  ].map(([from, to], index) => {
                    const fromHex = hexagonLabels[from];
                    const toHex = hexagonLabels[to];
                    const fromX = (fromHex.x / 100) * 400;
                    const fromY = (fromHex.y / 100) * 400;
                    const toX = (toHex.x / 100) * 400;
                    const toY = (toHex.y / 100) * 400;
                    
                    return (
                      <motion.line
                        key={`line-${index}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                        x1={fromX}
                        y1={fromY}
                        x2={toX}
                        y2={toY}
                        stroke="rgba(59, 130, 246, 0.4)"
                        strokeWidth="1.5"
                      />
                    );
                  })}
                </svg>

                {/* Hand Graphic */}
                <motion.div
                  initial={{ opacity: 0, x: -50, rotate: -30 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-20 left-16"
                  style={{
                    transform: 'perspective(1000px) rotateX(10deg) rotateY(-10deg)'
                  }}
                >
                  <svg 
                    className="w-32 h-32" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Hand outline */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.2 }}
                      d="M 30 20 Q 25 30 30 40 Q 35 50 40 60 Q 45 70 50 75 Q 55 80 60 75 Q 65 70 70 60 Q 75 50 80 40 Q 85 30 80 20 Q 75 15 70 20 Q 65 25 60 30 Q 55 35 50 40 Q 45 35 40 30 Q 35 25 30 20 Z"
                      stroke="rgba(59, 130, 246, 0.8)"
                      strokeWidth="2"
                      fill="rgba(59, 130, 246, 0.2)"
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))'
                      }}
                    />
                    
                    {/* Finger pointing */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      d="M 60 30 L 75 15"
                      stroke="rgba(59, 130, 246, 0.8)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      style={{
                        filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.6))'
                      }}
                    />
                  </svg>
                </motion.div>
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

