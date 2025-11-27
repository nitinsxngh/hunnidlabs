'use client';

import React from 'react';

const GifBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Very subtle ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/6 to-purple-600/6 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/6 to-pink-600/6 blur-3xl"></div>
      </div>
    </div>
  );
};

export default GifBackground; 