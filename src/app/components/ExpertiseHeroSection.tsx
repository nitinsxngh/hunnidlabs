'use client';

import React from 'react';
import Image from 'next/image';
import LightRays from './LightRays';

const ExpertiseHeroSection: React.FC = () => {
  const services = ['AI/MI', 'Web Apps', 'Clouds', 'Design', 'No code development', 'Digital marketing'];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-8 pt-8">
      {/* Background - matching landing page hero but without GIF */}
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

      {/* SVG Elements - top left icons */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* Two horizontal lines at top */}
      <div className="absolute top-24 left-0 right-0 z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-2"></div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full text-center relative z-10" style={{ marginTop: '-10%' }}>
        {/* Main Title: Discover | Develop | Deploy */}
        <h1 
          className="leading-tight mb-6"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 'clamp(48px, 8vw, 80px)',
            fontWeight: '700',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}
        >
          <span 
            style={{
              color: '#6366f1', // Darker blue-purple
              textShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
            }}
          >
            Discover
          </span>
          <span className="text-white mx-4">|</span>
          <span 
            style={{
              color: '#a855f7', // Brighter purple
              textShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
            }}
          >
            Develop
          </span>
          <span className="text-white mx-4">|</span>
          <span 
            style={{
              color: '#ec4899', // Vibrant pink-purple
              textShadow: '0 0 20px rgba(236, 72, 153, 0.5)'
            }}
          >
            Deploy
          </span>
        </h1>

        {/* Slogan */}
        <p 
          className="leading-relaxed mb-12 max-w-3xl mx-auto text-white"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: '400',
            lineHeight: '1.5'
          }}
        >
          Unlock the potential of your business with our services
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <button 
            className="px-10 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '18px',
              fontWeight: '500',
              background: 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(139, 92, 246, 0.5)',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)'
            }}
          >
            Build with us now
          </button>
        </div>
      </div>

      {/* Bottom Services Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div 
          className="w-full rounded-t-3xl px-8 py-6 backdrop-blur-sm"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            borderTop: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 -4px 20px rgba(139, 92, 246, 0.2)'
          }}
        >
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {services.map((service, index) => (
              <span
                key={index}
                className="text-white"
                style={{
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400'
                }}
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseHeroSection;

