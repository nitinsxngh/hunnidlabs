'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUsSection: React.FC = () => {
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
          {/* Left Section - Text Content */}
          <div className="space-y-8">

            {/* About Us Label */}
            <div 
              className="text-gray-400 text-sm uppercase tracking-wider mb-4"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.1em'
              }}
            >
              About Us
            </div>

            {/* Main Heading with Gradient */}
            <h1 
              className="leading-tight mb-6"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: '600',
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              <span className="text-white">We believe in </span>
              <span 
                style={{
                  background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                crafting
              </span>
              <span 
                style={{
                  background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                {' '}sweet experience
              </span>
            </h1>

            {/* Description */}
            <p 
              className="leading-relaxed text-gray-300"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: '400',
                lineHeight: '1.6',
                maxWidth: '600px'
              }}
            >
              By using ideas, emotions, skills, technology and a whole lot of coffee
            </p>
          </div>

          {/* Right Section - Hero Company Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-full h-full max-w-lg">
              <Image
                src="/components/hero-company.png"
                alt="Hunnid Labs Company"
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

export default AboutUsSection;

