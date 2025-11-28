'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CloudSection: React.FC = () => {
  const services = [
    'Cloud Migration Services',
    'Cloud Infrastructure Management',
    'Serverless Architecture',
    'DevOps & Automation',
    'Multi-Cloud Strategies'
  ];

  const technologies = [
    {
      name: 'AWS',
      icon: '☁️',
      color: 'blue',
      borderColor: 'rgba(59, 130, 246, 0.6)'
    },
    {
      name: 'Docker',
      icon: '🐳',
      color: 'blue',
      borderColor: 'rgba(59, 130, 246, 0.6)'
    },
    {
      name: 'Salesforce',
      icon: '☁️',
      color: 'purple',
      borderColor: 'rgba(139, 92, 246, 0.6)'
    },
    {
      name: 'Azure',
      icon: 'A',
      color: 'blue',
      borderColor: 'rgba(59, 130, 246, 0.6)'
    }
  ];

  const keyPointers = [
    'Seamless migration to leading cloud platforms.',
    'Ensuring security and compliance in the cloud.',
    'Optimizing cloud costs and performance.',
    'Building highly available and scalable architectures.'
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
          {/* Left Section - Cloud Graphic */}
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
              Cloud Solutions: Scalable, Secure, and Future-Ready
            </h2>

            {/* Animated Cloud Infrastructure Visualization */}
            <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
              {/* Background grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="cloud-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="rgba(59, 130, 246, 0.4)" />
                      <line x1="20" y1="0" x2="20" y2="40" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                      <line x1="0" y1="20" x2="40" y2="20" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cloud-grid)" />
                </svg>
              </div>

              {/* Main Cloud Infrastructure SVG */}
              <div className="relative z-10 w-full h-full max-w-lg">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 500 500" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Cloud Infrastructure */}
                  <g>
                    {/* Main cloud shape - smooth and uniform curves */}
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M 140 200 
                         Q 120 180 130 150 
                         Q 120 120 150 120 
                         Q 150 100 180 100 
                         Q 200 80 230 90 
                         Q 250 70 280 75 
                         Q 310 70 330 90 
                         Q 350 100 360 120 
                         Q 380 120 370 150 
                         Q 380 180 360 200 
                         Q 360 220 340 230 
                         Q 320 240 300 235 
                         Q 280 240 260 230 
                         Q 240 220 220 220 
                         Q 200 230 180 220 
                         Q 160 220 150 200 Z"
                      stroke="rgba(59, 130, 246, 0.8)"
                      strokeWidth="3"
                      fill="rgba(59, 130, 246, 0.1)"
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))'
                      }}
                    />

                    {/* Data centers / Servers inside cloud - uniformly positioned */}
                    {[
                      { x: 210, y: 160, delay: 0.5 },
                      { x: 260, y: 180, delay: 0.7 },
                      { x: 240, y: 210, delay: 0.9 },
                      { x: 290, y: 200, delay: 1.1 }
                    ].map((server, i) => (
                      <g key={`server-${i}`}>
                        {/* Server box */}
                        <motion.rect
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: server.delay }}
                          x={server.x - 15}
                          y={server.y - 10}
                          width="30"
                          height="20"
                          rx="3"
                          fill="rgba(59, 130, 246, 0.3)"
                          stroke="rgba(59, 130, 246, 0.6)"
                          strokeWidth="1.5"
                        />
                        {/* Server indicator lights */}
                        {[0, 1, 2].map((j) => (
                          <motion.circle
                            key={`light-${j}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            animate={{
                              opacity: [0.3, 1, 0.3]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: server.delay + j * 0.2
                            }}
                            cx={server.x - 8 + j * 8}
                            cy={server.y}
                            r="2"
                            fill="rgba(34, 197, 94, 0.8)"
                          />
                        ))}
                      </g>
                    ))}

                    {/* Network connections between servers */}
                    {[
                      { from: { x: 210, y: 160 }, to: { x: 260, y: 180 } },
                      { from: { x: 260, y: 180 }, to: { x: 240, y: 210 } },
                      { from: { x: 240, y: 210 }, to: { x: 290, y: 200 } },
                      { from: { x: 210, y: 160 }, to: { x: 290, y: 200 } }
                    ].map((conn, i) => (
                      <motion.line
                        key={`conn-${i}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.2 + i * 0.1 }}
                        x1={conn.from.x}
                        y1={conn.from.y}
                        x2={conn.to.x}
                        y2={conn.to.y}
                        stroke="rgba(59, 130, 246, 0.5)"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                      />
                    ))}

                    {/* Data flow particles */}
                    {[0, 1, 2].map((i) => (
                      <motion.circle
                        key={`particle-${i}`}
                        animate={{
                          cx: [210, 260, 240, 290, 210],
                          cy: [160, 180, 210, 200, 160],
                          opacity: [0, 1, 1, 1, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 1.3,
                          ease: "easeInOut"
                        }}
                        r="3"
                        fill="rgba(59, 130, 246, 1)"
                        style={{
                          filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 1))'
                        }}
                      />
                    ))}
                  </g>

                  {/* Floating Cloud Service Badges - uniformly distributed around cloud */}
                  {[
                    { name: 'AWS', angle: 45, radius: 160, color: 'rgba(255, 153, 0, 0.8)', delay: 0.3 },
                    { name: 'Azure', angle: 135, radius: 160, color: 'rgba(0, 120, 212, 0.8)', delay: 0.5 },
                    { name: 'GCP', angle: 225, radius: 160, color: 'rgba(66, 133, 244, 0.8)', delay: 0.7 },
                    { name: 'Docker', angle: 315, radius: 160, color: 'rgba(13, 183, 255, 0.8)', delay: 0.9 }
                  ].map((service, i) => {
                    const centerX = 250;
                    const centerY = 200;
                    const x = centerX + Math.cos((service.angle * Math.PI) / 180) * service.radius;
                    const y = centerY + Math.sin((service.angle * Math.PI) / 180) * service.radius;
                    
                    return (
                      <g key={`service-${i}`}>
                        {/* Service badge background */}
                        <motion.rect
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: service.delay }}
                          x={x - 35}
                          y={y - 15}
                          width="70"
                          height="30"
                          rx="15"
                          fill={service.color.replace('0.8', '0.2')}
                          stroke={service.color}
                          strokeWidth="2"
                          style={{
                            filter: `drop-shadow(0 0 15px ${service.color.replace('0.8', '0.4')})`
                          }}
                        />
                        {/* Service name */}
                        <motion.text
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: service.delay + 0.2 }}
                          x={x}
                          y={y + 5}
                          textAnchor="middle"
                          fill="white"
                          fontSize="14"
                          fontWeight="600"
                          fontFamily="SF Pro Display, sans-serif"
                        >
                          {service.name}
                        </motion.text>
                        {/* Pulsing ring */}
                        <motion.circle
                          animate={{
                            r: [15, 25, 15],
                            opacity: [0.6, 0, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: service.delay
                          }}
                          cx={x}
                          cy={y}
                          fill="none"
                          stroke={service.color}
                          strokeWidth="1.5"
                        />
                      </g>
                    );
                  })}

                  {/* Security Shield */}
                  <g>
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                      d="M 250 80 L 280 90 L 270 120 Q 270 140 250 150 Q 230 140 230 120 L 220 90 Z"
                      stroke="rgba(34, 197, 94, 0.8)"
                      strokeWidth="2"
                      fill="rgba(34, 197, 94, 0.1)"
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
                      y="125"
                      textAnchor="middle"
                      fill="rgba(34, 197, 94, 1)"
                      fontSize="20"
                      fontWeight="700"
                      fontFamily="SF Pro Display, sans-serif"
                    >
                      ✓
                    </motion.text>
                  </g>

                  {/* Scalability indicators - expanding circles */}
                  {[0, 1, 2].map((i) => (
                    <motion.circle
                      key={`scale-${i}`}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.3 }}
                      viewport={{ once: true }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 1.5 + i * 0.5
                      }}
                      cx="250"
                      cy="200"
                      r="60"
                      fill="none"
                      stroke="rgba(59, 130, 246, 0.4)"
                      strokeWidth="2"
                    />
                  ))}

                  {/* Global network connections - uniformly distributed */}
                  {[
                    { angle: 45, radius: 160 },
                    { angle: 135, radius: 160 },
                    { angle: 225, radius: 160 },
                    { angle: 315, radius: 160 }
                  ].map((point, i) => {
                    const centerX = 250;
                    const centerY = 200;
                    const x = centerX + Math.cos((point.angle * Math.PI) / 180) * point.radius;
                    const y = centerY + Math.sin((point.angle * Math.PI) / 180) * point.radius;
                    
                    return (
                      <motion.line
                        key={`network-${i}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.8 + i * 0.1 }}
                        x1={centerX}
                        y1={centerY}
                        x2={x}
                        y2={y}
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Floating metrics */}
              {[
                { label: 'Uptime', value: '99.9%', x: -180, y: -100, delay: 0.4 },
                { label: 'Security', value: '100%', x: 180, y: -100, delay: 0.6 },
                { label: 'Scale', value: '∞', x: 0, y: 220, delay: 0.8 }
              ].map((metric, i) => (
                <motion.div
                  key={i}
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
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                  style={{
                    x: metric.x,
                    y: metric.y
                  }}
                >
                  <div 
                    className="px-3 py-2 rounded-lg backdrop-blur-sm text-center"
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
              ))}

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
              Powering Your Business with the Flexibility of the Cloud.
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
              Explore Our Cloud Expertise
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudSection;

