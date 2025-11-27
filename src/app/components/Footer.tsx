'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const whatWeDoLinks = [
    'Generative AI development',
    'Custom AI Data Development',
    'Custom Engineering',
    'LLM Training',
    'Multimodality',
    'LLM Validation',
    'LLM Risk Mitigation',
    'Product Design'
  ];

  const resourcesLinks = [
    { label: 'Hire Team', href: '#' },
    { label: 'Use Cases', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Tech Stack', href: '#' },
    { label: 'Blogs', href: '/blog' }
  ];

  const aboutUsLinks = [
    { label: 'Company', href: '/company' },
    { label: 'Partners', href: '#' },
    { label: 'Career', href: '#' },
    { label: 'Contact', href: '/contact' }
  ];

  const officeLocations = [
    {
      country: 'India',
      image: '/location/India.png',
      address: 'Iconic Tower, A 13, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309'
    },
    {
      country: 'UAE',
      image: '/location/uae.png',
      address: 'Iconic Tower, A 13, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309'
    },
    {
      country: 'USA',
      image: '/location/usa.png',
      address: 'Iconic Tower, A 13, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309'
    },
    {
      country: 'Australia',
      image: '/location/australia.png',
      address: 'Iconic Tower, A 13, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number] }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0f2b] to-[#000000] py-16 px-8 md:px-16">
      {/* Background cosmic texture */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Left Section - Navigation Links */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What We Do Column */}
              <motion.div variants={itemVariants}>
                <h3 className="text-blue-300 text-lg font-semibold mb-6 font-['Inter',sans-serif]">
                  What We Do
                </h3>
                <ul className="space-y-3">
                  {whatWeDoLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-white hover:text-blue-300 transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* About Us & Resources Column */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* About Us */}
                <div>
                  <h3 className="text-blue-300 text-lg font-semibold mb-6 font-['Inter',sans-serif]">
                    About Us
                  </h3>
                  <ul className="space-y-3">
                    {aboutUsLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href} 
                          className="text-white hover:text-blue-300 transition-colors duration-300 text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-blue-300 text-lg font-semibold mb-6 font-['Inter',sans-serif]">
                    Resources
                  </h3>
                  <ul className="space-y-3">
                    {resourcesLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href} 
                          className="text-white hover:text-blue-300 transition-colors duration-300 text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Section - Company Information & Call to Action */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {/* Top Right - Company Branding & Contact */}
              <motion.div variants={itemVariants} className="text-right">
                {/* Logo */}
                <div className="flex items-center justify-end mb-6">
                  <img 
                    src="/logo.svg" 
                    alt="Hunnid Labs Logo"
                    className="h-8 w-auto"
                  />
                </div>

                {/* Contact Information */}
                <div className="space-y-2">
                  <div className="flex items-center justify-end space-x-2">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-white text-sm">+918368958107</span>
                  </div>
                  <div className="flex items-center justify-end space-x-2">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-white text-sm">hello@hunnidlabs.com</span>
                  </div>
                </div>
              </motion.div>

              {/* Middle Right - Global Office Locations */}
              <motion.div variants={itemVariants}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="text-center relative">
                      <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                        <img 
                          src={office.image} 
                          alt={`${office.country} landmark`}
                          className="w-full h-full object-contain filter brightness-0 invert"
                        />
                      </div>
                      <h4 className="text-white font-semibold mb-2 text-sm">
                        {office.country}
                      </h4>
                      <p className="text-white text-xs leading-relaxed">
                        {office.address}
                      </p>
                      {index < officeLocations.length - 1 && (
                        <div className="hidden md:block absolute right-0 top-0 w-px h-full bg-white/20"></div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Right - Call to Action */}
              <motion.div variants={itemVariants} className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-end space-x-3">
                  <div>
                    <p className="text-white text-lg mb-2">
                      Where Innovation Meets Imagination
                    </p>
                    <p 
                      className="text-2xl font-bold"
                      style={{
                        background: 'linear-gradient(90deg, #03039E 0%, #42A6F6 8%, #FFFFFF 33%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Let&apos;s Build Together at Hunnid Labs
                    </p>
                  </div>
                  <div className="text-blue-300">
                    <svg 
                      className="w-8 h-8" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ transform: 'rotate(-45deg)' }}
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Legal Section - Right Aligned */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex justify-end">
            <div className="flex items-center space-x-6 text-sm text-white">
              <span>©2025-2026 Hunnidlabs. All Rights Reserved</span>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <a href="/site-map" className="hover:text-blue-300 transition-colors duration-300">
                Site Map
              </a>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <a href="/privacy-policy" className="hover:text-blue-300 transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
