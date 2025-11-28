'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SuccessStorySection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-8 pt-8">
      {/* Background - Matching homepage hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dark background */}
        <div className="absolute inset-0 bg-black"></div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        {/* Very subtle ambient glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/6 to-purple-600/6 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/6 to-pink-600/6 blur-3xl"></div>
        </div>
      </div>

      {/* SVG Elements - Matching Homepage Hero Section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-4 top-24 md:left-16 md:top-32">
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
              <Image
                src="/element-1.svg"
                alt="Element 1"
                width={12}
                height={12}
                className="w-full h-full"
              />
            </div>
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
              <Image
                src="/element-2.svg"
                alt="Element 2"
                width={12}
                height={12}
                className="w-full h-full"
              />
            </div>
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
              <Image
                src="/element-3.svg"
                alt="Element 3"
                width={12}
                height={12}
                className="w-full h-full"
              />
            </div>
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
              <Image
                src="/element-4.svg"
                alt="Element 4"
                width={12}
                height={12}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {/* Main Title */}
            <h1 
              className="leading-tight mb-6"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: '700',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              <span className="text-white">Success </span>
              <span 
                style={{
                  color: '#3b82f6',
                  background: 'linear-gradient(to right, #3b82f6, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                story
              </span>
            </h1>

            {/* Description */}
            <p 
              className="text-white/90 leading-relaxed mb-8"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: '400',
                lineHeight: '1.6',
                maxWidth: '600px'
              }}
            >
              Accelerate application or have an idea that requires challenging tools and tactics, we have a team of vetted developers who knows what&apos;s best for your business. Our engineers keep up with the latest trends
            </p>

            {/* Statistics */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-8">
              {[
                { number: '+200', label: 'Projects Delivered' },
                { number: '+150', label: 'Happy Clients' },
                { number: '+50', label: 'Expert Team Members' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-1 relative"
                >
                  <div 
                    className="text-white mb-2"
                    style={{
                      fontFamily: 'SF Pro Display, sans-serif',
                      fontSize: 'clamp(28px, 5vw, 56px)',
                      fontWeight: '700',
                      lineHeight: '1'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="text-white/80"
                    style={{
                      fontFamily: 'SF Pro Display, sans-serif',
                      fontSize: 'clamp(12px, 2vw, 14px)',
                      fontWeight: '400'
                    }}
                  >
                    {stat.label}
                  </div>
                  {index < 2 && (
                    <div 
                      className="hidden sm:block absolute top-0 bottom-0 w-px bg-white/20"
                      style={{
                        right: '-12px'
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl text-white font-medium transition-all duration-300"
              style={{
                fontFamily: 'SF Pro Display, sans-serif',
                fontSize: '18px',
                fontWeight: '500',
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)'
              }}
            >
              Connect with us
            </motion.button>
          </motion.div>

          {/* Right Section - Hero Work Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-full h-full max-w-lg">
              <Image
                src="/components/hero-work.png"
                alt="Hunnid Labs Success Story"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;

