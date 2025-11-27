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

            {/* Gradient Panel with Isometric Illustration */}
            <div className="relative w-full h-[500px]">
              {/* Gradient Panel Background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-3xl p-8"
                style={{
                  background: 'linear-gradient(to top, rgba(139, 92, 246, 0.8) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(147, 197, 253, 0.4) 100%)',
                  boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)'
                }}
              >
                {/* Isometric Illustration */}
                <div className="relative w-full h-full">
                  {/* Smartphone */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: 'translate(-50%, -50%) perspective(1000px) rotateX(15deg) rotateY(-15deg)'
                    }}
                  >
                    {/* Phone Body */}
                    <div 
                      className="relative w-32 h-56 rounded-2xl"
                      style={{
                        background: '#ffffff',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {/* Phone Screen Content */}
                      <div className="p-3 h-full flex flex-col">
                        {/* Search Bar */}
                        <div className="h-6 bg-gray-200 rounded mb-2"></div>
                        {/* Content Blocks */}
                        <div className="flex-1 space-y-2">
                          <div className="h-12 bg-gray-300 rounded"></div>
                          <div className="h-8 bg-gray-200 rounded"></div>
                          <div className="h-16 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Notifications */}
                      <div className="absolute top-2 right-2 flex gap-1">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">21</div>
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">15</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* UI/UX Speech Bubble */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute top-20 left-16"
                  >
                    <div 
                      className="px-4 py-2 rounded-lg bg-white"
                      style={{
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <p className="text-black text-xs font-semibold">UI/UX</p>
                    </div>
                  </motion.div>

                  {/* Characters */}
                  {/* Female Character (Left) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute bottom-24 left-8"
                  >
                    <div className="flex flex-col items-center">
                      {/* Head */}
                      <div className="w-8 h-8 bg-pink-300 rounded-full mb-1"></div>
                      {/* Body */}
                      <div className="w-10 h-12 bg-blue-500 rounded-t-lg"></div>
                      {/* Legs */}
                      <div className="w-10 h-6 bg-gray-800 rounded-b-lg"></div>
                    </div>
                  </motion.div>

                  {/* Male Character (Right) */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="absolute bottom-24 right-8"
                  >
                    <div className="flex flex-col items-center">
                      {/* Head */}
                      <div className="w-8 h-8 bg-orange-300 rounded-full mb-1"></div>
                      {/* Body */}
                      <div className="w-10 h-12 bg-yellow-400 rounded-t-lg"></div>
                      {/* Legs */}
                      <div className="w-10 h-6 bg-white rounded-b-lg"></div>
                    </div>
                  </motion.div>

                  {/* Lightbulb in Box */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="absolute bottom-12 left-12"
                  >
                    <div className="relative">
                      {/* Box */}
                      <div 
                        className="w-12 h-10 bg-amber-800 rounded"
                        style={{
                          transform: 'perspective(500px) rotateX(30deg) rotateY(-20deg)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                        }}
                      >
                        {/* Lightbulb Glow */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-2xl">💡</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Gear Icons */}
                  {[0, 1].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                      className="absolute"
                      style={{
                        bottom: '8px',
                        left: `${40 + i * 20}%`
                      }}
                    >
                      <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.4-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                        </svg>
                      </div>
                    </motion.div>
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

