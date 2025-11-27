'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  description?: string;
  link?: string;
}

const ContactInfoSection: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Email Us',
      value: 'hello@hunnidlabs.com',
      description: 'Send us an email anytime',
      link: 'mailto:hello@hunnidlabs.com'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08C5.16 2.08 5.4 4.04 5.88 5.92C6.04 6.48 5.96 7.08 5.6 7.56L3.88 9.28C5.64 12.36 8.64 15.36 11.72 17.12L13.44 15.4C13.92 15.04 14.52 14.96 15.08 15.12C16.96 15.6 18.92 15.84 20.92 15.84C21.52 15.84 22 16.32 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Call Us',
      value: '+91 6393623823',
      description: 'Mon-Fri from 9am to 6pm IST',
      link: 'tel:+916393623823'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Visit Us',
      value: 'India Office',
      description: 'We\'re based in India, serving clients globally'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Response Time',
      value: '< 24 Hours',
      description: 'We typically respond within 24 hours'
    }
  ];

  return (
    <section className="relative py-24 px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#0a0f2b]">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-white mb-4"
            style={{
              fontFamily: 'SF Pro Display, sans-serif',
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}
          >
            Multiple Ways to
            <span
              style={{
                background: 'linear-gradient(to right, #3b82f6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            > Reach Us
            </span>
          </h2>
          <p 
            className="text-white/60"
            style={{
              fontFamily: 'SF Pro Display, sans-serif',
              fontSize: '18px',
              fontWeight: '400'
            }}
          >
            Choose the method that works best for you
          </p>
        </motion.div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link || '#'}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative group ${info.link ? 'cursor-pointer' : 'cursor-default'}`}
            >
              {/* Card Container */}
              <div 
                className="relative h-full rounded-2xl p-8 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.3) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Glass reflections */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                {/* Icon */}
                <div 
                  className="mb-6 text-blue-400"
                  style={{
                    color: '#60a5fa'
                  }}
                >
                  {info.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 
                    className="text-white/60 mb-2 text-sm font-medium"
                    style={{
                      fontFamily: 'SF Pro Display, sans-serif',
                      fontSize: '14px',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {info.title}
                  </h3>
                  <p 
                    className="text-white mb-2 text-lg font-semibold"
                    style={{
                      fontFamily: 'SF Pro Display, sans-serif',
                      fontSize: '20px',
                      fontWeight: '600'
                    }}
                  >
                    {info.value}
                  </p>
                  {info.description && (
                    <p 
                      className="text-white/50 text-sm"
                      style={{
                        fontFamily: 'SF Pro Display, sans-serif',
                        fontSize: '14px',
                        lineHeight: '1.5'
                      }}
                    >
                      {info.description}
                    </p>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)'
                  }}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;

