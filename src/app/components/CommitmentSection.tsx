'use client';

import React from 'react';

const CommitmentSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8">
      {/* Background gradient with blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-purple-900/30 backdrop-blur-sm"></div>
      
      {/* Blurred background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blurred circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-600/10 blur-3xl rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 blur-2xl rounded-full"></div>
        
        {/* Additional blurred elements */}
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-blue-400/8 to-purple-500/8 blur-2xl rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-r from-purple-400/8 to-pink-500/8 blur-2xl rounded-full"></div>
      </div>
      
      {/* Grid overlay with blur */}
      <div className="absolute inset-0 opacity-10 backdrop-blur-[1px]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h2 
          className="text-white mb-8"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}
        >
          Our Commitment to You
        </h2>
        
        {/* Description */}
        <p 
          className="text-white leading-relaxed"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '1.5',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          From the first line of code to the final customer click, we&apos;re<br />
          your dedicated digital partner.
        </p>
      </div>
    </section>
  );
};

export default CommitmentSection; 