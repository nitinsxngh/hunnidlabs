'use client';

import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Main swirling ring animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[800px] h-[600px]">
          {/* Primary glowing ring */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-sm animate-pulse-slow"
                 style={{
                   background: 'conic-gradient(from 0deg, transparent, #3b82f6, #8b5cf6, #ec4899, transparent)',
                   mask: 'radial-gradient(circle at center, transparent 30%, black 70%)',
                   WebkitMask: 'radial-gradient(circle at center, transparent 30%, black 70%)'
                 }}>
            </div>
          </div>
          
          {/* Secondary inner ring */}
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="w-3/4 h-3/4 rounded-full border border-cyan-400/40 opacity-50 blur-md animate-pulse-slow mx-auto mt-12"
                 style={{
                   background: 'conic-gradient(from 180deg, transparent, #06b6d4, #3b82f6, transparent)',
                   mask: 'radial-gradient(circle at center, transparent 40%, black 80%)',
                   WebkitMask: 'radial-gradient(circle at center, transparent 40%, black 80%)'
                 }}>
            </div>
          </div>
          
          {/* Glowing center core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-60 blur-lg animate-pulse-slow"></div>
          </div>
          
          {/* Particle effects */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1.5 + Math.random() * 2}s`,
                  opacity: 0.6 + Math.random() * 0.4
                }}
              />
            ))}
          </div>
          
          {/* Light trails */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={`trail-${i}`}
                className="absolute w-1 h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30 animate-pulse-slow"
                style={{
                  left: `${20 + (i * 10)}%`,
                  top: `${30 + (i * 5)}%`,
                  transform: `rotate(${i * 45}deg)`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Additional ambient light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-600/20 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Floating light orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm animate-pulse-slow"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground; 