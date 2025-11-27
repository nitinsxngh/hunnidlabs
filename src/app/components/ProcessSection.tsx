'use client';

import React from 'react';
import SpotlightCard from './SpotlightCard';

const ProcessSection: React.FC = () => {
  const processSteps = [
    { numeral: 'XX', stage: 'Discover', value: 20 },
    { numeral: 'XL', stage: 'Design', value: 40 },
    { numeral: 'LX', stage: 'Develop', value: 60 },
    { numeral: 'LXXX', stage: 'Deploy', value: 80 },
    { numeral: 'C', stage: 'Optimize', value: 100 }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-8 py-16">
      {/* Background - matching hero section */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Light streaks */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`streak-${i}`}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              transform: `rotate(${i * 15 - 60}deg)`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        {/* Main Title */}
        <h2 
          className="text-white mb-4"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}
        >
          The Hunnid Labs process
        </h2>
        
        {/* Subtitle */}
        <p 
          className="text-white/80 mb-16"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.5',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          Its the process that builds the project from 0 to 100
        </p>

        {/* Process Cards - Horizontal Layout */}
        <div className="flex justify-center items-center gap-6 lg:gap-8 max-w-6xl mx-auto overflow-x-auto">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0"
              style={{ width: '220px' }}
            >
              <SpotlightCard 
                className="custom-spotlight-card" 
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 h-40 flex flex-col justify-center">
                  {/* Internal light effects */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-px h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                        style={{
                          left: `${20 + (i * 30)}%`,
                          top: `${30 + (i * 20)}%`,
                          transform: `rotate(${i * 20 - 30}deg)`
                        }}
                      />
                    ))}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={`particle-${i}`}
                        className="absolute w-0.5 h-0.5 bg-white rounded-full"
                        style={{
                          left: `${10 + (i * 20)}%`,
                          top: `${15 + (i * 15)}%`,
                          opacity: 0.4 + Math.random() * 0.6
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Roman Numeral */}
                    <div 
                      className="text-white mb-3"
                      style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '48px',
                        fontWeight: '700',
                        lineHeight: '1'
                      }}
                    >
                      {step.numeral}
                    </div>
                    
                    {/* Stage Name */}
                    <div 
                      className="text-white/90"
                      style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '20px',
                        fontWeight: '500',
                        lineHeight: '1.2'
                      }}
                    >
                      {step.stage}
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 