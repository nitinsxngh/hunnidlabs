'use client';

import React from 'react';
import { motion } from 'framer-motion';

const InnovationSection: React.FC = () => {
  const coreValues = [
    'Commitment to Exceptional Quality',
    'Following Agile Methodologies',
    'Always Striding Towards Innovation',
    'Forging Long-term Relationships',
    'Attention to Details',
    'Follow Customer-first Approach'
  ];

  const pillars = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Our Vision',
      description: 'We envision a continuously evolving world, where businesses thrive and individuals achieve their dream with the support of our seamless digital solutions'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      title: 'Our Mission',
      description: 'We thrive with a mission to empower businesses of all sizes with excellent digital product solutions that fuel growth, optimize operations, and enhance customer experiences.'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Our Values',
      description: 'At Hunnid Labs, our values are the foundation of everything we do. They guide our mission to deliver cutting-edge digital solutions while building trust, driving innovation, and exceeding client expectations. Our core values include:',
      values: coreValues
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-24">
      {/* Background - matching other sections */}
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

        {/* Cosmic particle specks */}
        {[...Array(60)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '600',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            color: '#ffffff'
          }}
        >
          Innovation
        </motion.h2>

        {/* Three Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connecting Line */}
          <div 
            className="absolute top-24 left-0 right-0 h-px hidden lg:block"
            style={{
              background: 'linear-gradient(to right, transparent 10%, rgba(139, 92, 246, 0.5) 20%, rgba(139, 92, 246, 0.5) 80%, transparent 90%)',
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)'
            }}
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                {/* Circular Icon */}
                <div className="relative mb-6 z-10">
                  {/* Outer Glow Ring */}
                  <div 
                    className="absolute inset-0 rounded-full blur-lg opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.6) 0%, rgba(59, 130, 246, 0.6) 100%)',
                      transform: 'scale(1.3)'
                    }}
                  />
                  
                  {/* Main Circle */}
                  <div 
                    className="relative w-24 h-24 rounded-full flex items-center justify-center text-white border-2 backdrop-blur-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(30, 58, 138, 0.4) 100%)',
                      borderColor: 'rgba(139, 92, 246, 0.6)',
                      boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {/* Inner Circle */}
                    <div 
                      className="absolute inset-3 rounded-full"
                      style={{
                        background: 'rgba(139, 92, 246, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    />
                    
                    {/* Icon */}
                    <div className="relative z-10">
                      {pillar.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-white text-center mb-6"
                  style={{
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '1.2'
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Description Box */}
                <div 
                  className="w-full rounded-2xl p-6 backdrop-blur-sm"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(139, 92, 246, 0.5)',
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.05)'
                  }}
                >
                  {/* Description Text */}
                  <p 
                    className="text-white mb-4"
                    style={{
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '1.6',
                      textAlign: 'left'
                    }}
                  >
                    {pillar.description}
                  </p>

                  {/* Core Values List (only for Our Values) */}
                  {pillar.values && (
                    <div className="mt-6 space-y-3">
                      {pillar.values.map((value, valueIndex) => (
                        <div
                          key={valueIndex}
                          className="px-4 py-2 rounded-lg"
                          style={{
                            background: 'rgba(139, 92, 246, 0.1)',
                            border: '1px solid rgba(139, 92, 246, 0.4)',
                            boxShadow: '0 0 10px rgba(139, 92, 246, 0.1)'
                          }}
                        >
                          <p 
                            className="text-white text-sm"
                            style={{
                              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: '400',
                              lineHeight: '1.5'
                            }}
                          >
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationSection;

