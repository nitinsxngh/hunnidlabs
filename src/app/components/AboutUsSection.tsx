'use client';

import React from 'react';

const AboutUsSection: React.FC = () => {
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-8">
            {/* Top Left Icons */}
            <div className="flex gap-4 mb-6">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

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

          {/* Right Section - 3D UI Elements */}
          <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
            {/* Main Card Stack */}
            <div className="relative w-full max-w-md h-full">
              {/* Base Card - Workspace Card */}
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[280px] h-[360px] rounded-3xl backdrop-blur-md border border-white/20"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  transform: 'translateX(-50%) translateY(0) perspective(1000px) rotateX(5deg)'
                }}
              >
                {/* Card Content Grid */}
                <div className="p-6 h-full flex flex-col">
                  <div className="text-white text-sm font-medium mb-4" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>
                    Hunnid labs work space
                  </div>
                  <div className="grid grid-cols-3 gap-3 flex-1">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i}
                        className="bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
                        style={{ minHeight: '60px' }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Card - Behind */}
              <div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[260px] h-[340px] rounded-3xl backdrop-blur-md border border-white/15 opacity-60"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  transform: 'translateX(-50%) translateY(20px) perspective(1000px) rotateX(5deg) scale(0.95)',
                  zIndex: -1
                }}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="text-white/70 text-xs font-medium mb-4" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>
                    Hunnid l workspa
                  </div>
                </div>
              </div>

              {/* Dark Blue Card - Top Left */}
              <div 
                className="absolute top-8 left-8 w-[140px] h-[100px] rounded-2xl backdrop-blur-md border border-white/20"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                  zIndex: 2
                }}
              >
                <div className="p-4 h-full flex flex-col justify-center">
                  <div className="space-y-2">
                    <div className="h-1 bg-white/30 rounded w-full"></div>
                    <div className="h-1 bg-white/30 rounded w-3/4"></div>
                    <div className="h-1 bg-white/30 rounded w-5/6"></div>
                  </div>
                </div>
              </div>

              {/* Light Purple Clouds */}
              <div className="absolute top-12 right-12 z-3">
                <div 
                  className="w-24 h-16 rounded-full backdrop-blur-sm opacity-80"
                  style={{
                    background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.3) 0%, rgba(147, 51, 234, 0.2) 100%)',
                    boxShadow: '0 4px 20px rgba(192, 132, 252, 0.2)',
                    transform: 'perspective(1000px) rotateY(5deg)'
                  }}
                />
                <div 
                  className="w-20 h-14 rounded-full backdrop-blur-sm opacity-70 -mt-8 ml-8"
                  style={{
                    background: 'linear-gradient(135deg, rgba(192, 132, 252, 0.25) 0%, rgba(147, 51, 234, 0.15) 100%)',
                    boxShadow: '0 4px 20px rgba(192, 132, 252, 0.15)',
                    transform: 'perspective(1000px) rotateY(-5deg)'
                  }}
                />
              </div>

              {/* Light Blue Message Bubble */}
              <div 
                className="absolute top-32 right-16 w-[180px] h-[80px] rounded-2xl backdrop-blur-md border border-white/20 flex items-center gap-3 p-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.2) 100%)',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.2)',
                  transform: 'perspective(1000px) rotateY(3deg) rotateX(-3deg)',
                  zIndex: 2
                }}
              >
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xl">
                  😊
                </div>
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 bg-white/40 rounded w-full"></div>
                  <div className="h-1.5 bg-white/40 rounded w-3/4"></div>
                </div>
              </div>

              {/* Light Blue Profile/Calculator Card */}
              <div 
                className="absolute bottom-32 left-12 w-[160px] h-[200px] rounded-2xl backdrop-blur-md border border-white/20 p-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(37, 99, 235, 0.15) 100%)',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.2)',
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(3deg)',
                  zIndex: 2
                }}
              >
                <div className="h-full flex flex-col">
                  {/* Profile Icon */}
                  <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  {/* Lines */}
                  <div className="space-y-2 mb-4">
                    <div className="h-1 bg-white/30 rounded w-full"></div>
                    <div className="h-1 bg-white/30 rounded w-3/4"></div>
                    <div className="h-1 bg-white/30 rounded w-5/6"></div>
                  </div>
                  {/* Calculator Grid */}
                  <div className="grid grid-cols-3 gap-2 mt-auto">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i}
                        className="bg-white/10 rounded border border-white/10 h-8"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Light Blue Sphere */}
              <div 
                className="absolute bottom-40 left-8 w-16 h-16 rounded-full backdrop-blur-sm"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4), rgba(37, 99, 235, 0.2))',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3), inset -2px -2px 10px rgba(0, 0, 0, 0.2)',
                  transform: 'perspective(1000px) rotateY(-10deg)',
                  zIndex: 1
                }}
              />

              {/* Coral/Pink Confirmation Card */}
              <div 
                className="absolute bottom-20 right-8 w-[150px] h-[140px] rounded-2xl backdrop-blur-md border border-white/20 p-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.3) 0%, rgba(249, 115, 22, 0.2) 100%)',
                  boxShadow: '0 4px 20px rgba(251, 146, 60, 0.2)',
                  transform: 'perspective(1000px) rotateY(5deg) rotateX(-3deg)',
                  zIndex: 2
                }}
              >
                <div className="h-full flex flex-col">
                  {/* Thumbs Up Icon */}
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                    </svg>
                  </div>
                  {/* Lines */}
                  <div className="space-y-2 mb-3">
                    <div className="h-1 bg-white/30 rounded w-full"></div>
                    <div className="h-1 bg-white/30 rounded w-3/4"></div>
                  </div>
                  {/* Button */}
                  <button 
                    className="mt-auto bg-blue-500/40 text-white text-xs py-2 px-4 rounded-lg border border-white/20 backdrop-blur-sm"
                    style={{ fontFamily: 'SF Pro Display, sans-serif' }}
                  >
                    Conform
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

