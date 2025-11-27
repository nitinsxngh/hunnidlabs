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

            {/* Cloud Graphic */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Outer Sphere (Global Network) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  className="w-full h-full max-w-md" 
                  viewBox="0 0 400 400" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer sphere circle */}
                  <motion.circle
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    cx="200"
                    cy="200"
                    r="180"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="1"
                    fill="none"
                  />
                  
                  {/* Network lines in outer sphere */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 360) / 12;
                    const x1 = 200 + Math.cos((angle * Math.PI) / 180) * 180;
                    const y1 = 200 + Math.sin((angle * Math.PI) / 180) * 180;
                    const x2 = 200 + Math.cos(((angle + 30) * Math.PI) / 180) * 180;
                    const y2 = 200 + Math.sin(((angle + 30) * Math.PI) / 180) * 180;
                    
                    return (
                      <motion.line
                        key={`outer-${i}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="rgba(255, 255, 255, 0.3)"
                        strokeWidth="0.5"
                      />
                    );
                  })}

                  {/* Outer sphere dots */}
                  {[...Array(24)].map((_, i) => {
                    const angle = (i * 360) / 24;
                    const x = 200 + Math.cos((angle * Math.PI) / 180) * 180;
                    const y = 200 + Math.sin((angle * Math.PI) / 180) * 180;
                    
                    return (
                      <motion.circle
                        key={`outer-dot-${i}`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 0.6 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.02 }}
                        cx={x}
                        cy={y}
                        r="2"
                        fill="rgba(255, 255, 255, 0.6)"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Inner Cloud Graphic */}
              <div className="relative z-10">
                <svg 
                  className="w-full h-full max-w-sm" 
                  viewBox="0 0 300 300" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Cloud shape outline */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M 80 150 Q 60 120 80 100 Q 100 80 130 90 Q 140 60 170 60 Q 200 60 220 80 Q 250 70 270 100 Q 280 120 260 140 Q 280 160 260 180 Q 240 200 210 190 Q 200 220 170 220 Q 140 220 130 190 Q 100 200 80 180 Q 60 160 80 150 Z"
                    stroke="rgba(255, 255, 255, 0.9)"
                    strokeWidth="2"
                    fill="none"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
                    }}
                  />
                  
                  {/* Network lines inside cloud */}
                  {[...Array(8)].map((_, i) => {
                    const startX = 100 + (i * 20);
                    const startY = 120 + (i % 3) * 30;
                    const endX = 200 + (i * 15);
                    const endY = 180 - (i % 2) * 20;
                    
                    return (
                      <motion.line
                        key={`cloud-line-${i}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke="rgba(255, 255, 255, 0.5)"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Dots inside cloud */}
                  {[...Array(15)].map((_, i) => {
                    const x = 100 + (i % 5) * 40 + Math.random() * 20;
                    const y = 120 + Math.floor(i / 5) * 40 + Math.random() * 20;
                    
                    return (
                      <motion.circle
                        key={`cloud-dot-${i}`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.5 + i * 0.05 }}
                        cx={x}
                        cy={y}
                        r="2.5"
                        fill="rgba(255, 255, 255, 0.8)"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* "Cloud" Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
              >
                <p 
                  className="text-white text-center"
                  style={{
                    fontFamily: 'SF Pro Display, sans-serif',
                    fontSize: '32px',
                    fontWeight: '600'
                  }}
                >
                  Cloud
                </p>
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

