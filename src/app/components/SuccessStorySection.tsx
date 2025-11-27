'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SuccessStorySection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-24">
      {/* Background - Dark blue to black gradient with vertical light streaks */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(30, 58, 138, 0.4) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%)'
        }}
      >
        {/* Vertical light streaks on left */}
        <div className="absolute left-0 top-0 bottom-0 w-1/4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
              style={{
                left: `${10 + i * 15}%`,
                opacity: 0.3
              }}
            />
          ))}
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Sidebar Icons */}
            <div className="flex flex-col gap-6 mb-8">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

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
            <div className="flex gap-8 mb-8 relative">
              {[1, 2, 3].map((_, index) => (
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
                      fontSize: 'clamp(36px, 4vw, 56px)',
                      fontWeight: '700',
                      lineHeight: '1'
                    }}
                  >
                    +200
                  </div>
                  <div 
                    className="text-white/80"
                    style={{
                      fontFamily: 'SF Pro Display, sans-serif',
                      fontSize: '14px',
                      fontWeight: '400'
                    }}
                  >
                    Industry heading
                  </div>
                  {index < 2 && (
                    <div 
                      className="absolute top-0 bottom-0 w-px bg-white/20"
                      style={{
                        right: '-16px'
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

          {/* Right Section - Mobile Phone */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* Bookmark Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-20 left-8 z-20"
            >
              <div 
                className="px-4 py-3 rounded-xl flex flex-col items-center gap-2"
                style={{
                  background: 'rgba(20, 184, 166, 0.9)',
                  boxShadow: '0 8px 24px rgba(20, 184, 166, 0.4)'
                }}
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                </svg>
                <p 
                  className="text-white text-xs font-medium"
                  style={{
                    fontFamily: 'SF Pro Display, sans-serif'
                  }}
                >
                  Bookmark
                </p>
              </div>
            </motion.div>

            {/* Mobile Phone */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
              style={{
                transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)'
              }}
            >
              {/* Phone Body */}
              <div 
                className="relative w-64 h-[500px] rounded-[3rem] mx-auto"
                style={{
                  background: 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)',
                  border: '8px solid #9ca3af',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Phone Screen */}
                <div 
                  className="absolute inset-4 rounded-[2.5rem] overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(67, 56, 202, 0.9) 100%)'
                  }}
                >
                  {/* App Header */}
                  <div className="p-6">
                    {/* Profile Picture */}
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(59, 130, 246, 0.3)',
                          border: '2px solid rgba(255, 255, 255, 0.3)'
                        }}
                      >
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white text-2xl">HL</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 
                            className="text-white"
                            style={{
                              fontFamily: 'SF Pro Display, sans-serif',
                              fontSize: '18px',
                              fontWeight: '600'
                            }}
                          >
                            Hunnid Labs
                          </h3>
                          <span className="text-xl">🚀</span>
                        </div>
                        <p 
                          className="text-white/80 text-sm mb-2"
                          style={{
                            fontFamily: 'SF Pro Display, sans-serif'
                          }}
                        >
                          INDIA | USA
                        </p>
                        {/* Stars */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-sm">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Notification Bubble */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute bottom-24 left-0"
                    style={{
                      transform: 'translateX(-20px)'
                    }}
                  >
                    <div 
                      className="px-4 py-3 rounded-2xl flex items-center gap-3 min-w-[200px]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(67, 56, 202, 0.9) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p 
                          className="text-white text-sm font-semibold mb-1"
                          style={{
                            fontFamily: 'SF Pro Display, sans-serif'
                          }}
                        >
                          John Smith
                        </p>
                        <p 
                          className="text-white/80 text-xs"
                          style={{
                            fontFamily: 'SF Pro Display, sans-serif'
                          }}
                        >
                          Thx for Amazing Project...
                        </p>
                      </div>
                      <p 
                        className="text-white/60 text-xs"
                        style={{
                          fontFamily: 'SF Pro Display, sans-serif'
                        }}
                      >
                        11:11 AM
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;

