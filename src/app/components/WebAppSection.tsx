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

            {/* Phone with Holographic Icons */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Wooden surface effect */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-900/20 to-transparent"></div>

              {/* Phone */}
              <div className="relative z-20">
                {/* Phone body */}
                <div 
                  className="relative w-64 h-[500px] rounded-[3rem] mx-auto"
                  style={{
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                    border: '8px solid #2a2a2a',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(59, 130, 246, 0.1)'
                  }}
                >
                  {/* Phone screen with blue light */}
                  <div 
                    className="absolute inset-4 rounded-[2.5rem] overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.2) 100%)',
                      boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), inset 0 0 60px rgba(59, 130, 246, 0.4)'
                    }}
                  >
                    {/* Screen content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-blue-400">📱</div>
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
                </div>

                {/* Blue glow on surface */}
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-20 blur-2xl"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
                  }}
                />
              </div>

              {/* Floating Holographic Icons */}
              {appIcons.map((icon, index) => {
                const angle = (index * 360) / appIcons.length;
                const radius = 120 + (index % 3) * 40;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius - 50;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 0, scale: 0 }}
                    whileInView={{ opacity: 1, y: y, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [y, y - 20, y],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 2 + (index * 0.2),
                      repeat: Infinity,
                      delay: index * 0.1,
                      ease: "easeInOut"
                    }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                    style={{
                      x: x,
                      filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))'
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm"
                      style={{
                        background: 'rgba(59, 130, 246, 0.2)',
                        border: '1px solid rgba(59, 130, 246, 0.5)',
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
                      }}
                    >
                      {icon}
                    </div>
                  </motion.div>
                );
              })}
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

