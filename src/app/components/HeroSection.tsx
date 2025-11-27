'use client';

import React from 'react';
import Image from 'next/image';
import LightRays from './LightRays';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-8 pt-8">
      {/* GIF Background - only for hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Custom GIF Background - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-3/5">
          <img
            src="/background.gif"
            alt="Animated background"
            className="w-full h-full object-cover opacity-90"
            style={{
              filter: 'brightness(0.6) contrast(1.4) saturate(1.6)',
            }}
            onLoad={() => console.log('GIF loaded successfully')}
            onError={(e) => console.error('GIF failed to load:', e)}
          />
        </div>
        {/* Dark overlay for better contrast - reduced */}
        <div className="absolute inset-0 bg-black/20"></div>
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

      {/* Light Rays Effect */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* SVG Elements - only for hero section */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side elements */}
        <div className="absolute left-16 top-32">
          <div className="grid grid-cols-2 gap-4">
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

      <div className="max-w-6xl mx-auto w-full text-center relative z-10" style={{ marginTop: '-10%' }}>
        {/* Tagline */}
        <div className="mb-6">
          {/* Top horizontal line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#44A7F6] to-transparent"></div>
          
          <span 
            className="font-bold tracking-wider"
            style={{
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '48px',
              lineHeight: '1.2',
              background: 'linear-gradient(to bottom, #44A7F6 22%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Ai.Web.Design.Digital
          </span>
          
          {/* Bottom horizontal line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#44A7F6] to-transparent"></div>
        </div>

        {/* Main Headline */}
        <h1 
          className="leading-tight mb-8"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '40px',
            fontWeight: 'normal',
            color: '#ffffff',
            lineHeight: '1.2'
          }}
        >
          Great Ideas Deserve More Than Code
        </h1>

        {/* Description */}
        <p 
          className="leading-relaxed mb-12 max-w-3xl mx-auto"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '22px',
            fontWeight: '200',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.4'
          }}
        >
          We don&apos;t just launch and leave. We build clean, reliable, AI-powered software and stick around to make sure it works perfectly.
        </p>
      </div>

      {/* CTA Button - positioned at bottom center */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <button className="bg-black/40 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30">
          Build with us
        </button>
      </div>
    </section>
  );
};

export default HeroSection;