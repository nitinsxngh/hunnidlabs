'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    website: '',
    projectOverview: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
    <section className="relative py-24 px-8 md:px-16">
      {/* Vision Pro Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2b] via-[#050814] to-[#000000]">
        {/* Subtle cosmic texture */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={`particle-${i}`}
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
        {/* Deep space glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-transparent to-purple-500/3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-semibold text-center mb-12 font-['Inter',sans-serif]"
            style={{
              background: 'linear-gradient(90deg, #6D6DFF 0%, #666666 33%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            All you need to do is say hello!
          </motion.h2>

          {/* Contact Information Bar */}
          <motion.div 
            variants={itemVariants}
            className="relative bg-gradient-to-r from-gray-900/30 to-black/50 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 mb-12 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.3) 100%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Glass reflections */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <p className="text-white/80 text-sm mb-2">Email us</p>
                <p className="text-white text-lg font-medium">hello@hunnidlabs.com</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white/80 text-sm mb-2">Contact Us</p>
                <p className="text-white text-lg font-medium">+91 6393623823</p>
              </div>
            </div>
          </motion.div>

          {/* Vision Pro Style Form Container */}
          <motion.div 
            variants={itemVariants}
            className="relative bg-gradient-to-br from-gray-900/30 to-black/60 backdrop-blur-2xl rounded-[2rem] border border-white/20 p-8 md:p-12 shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.3) 100%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Vision Pro inner reflections */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Curved glass effect */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>

            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Input Fields */}
                <div className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Full name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-3 transition-colors duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-3 transition-colors duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-3 transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Country and Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Select country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-0 border-b border-white/30 text-white focus:border-white focus:outline-none py-3 transition-colors duration-300"
                      >
                        <option value="" className="bg-gray-900 text-white">Select your country</option>
                        <option value="US" className="bg-gray-900 text-white">United States</option>
                        <option value="IN" className="bg-gray-900 text-white">India</option>
                        <option value="UK" className="bg-gray-900 text-white">United Kingdom</option>
                        <option value="CA" className="bg-gray-900 text-white">Canada</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">+91 Contact number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-3 transition-colors duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Website link</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder-white/50 focus:border-white focus:outline-none py-3 transition-colors duration-300"
                      placeholder="Enter your website URL"
                    />
                  </div>
                </div>

                {/* Right Column - Project Overview */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Brief Project overview</label>
                  <textarea
                    name="projectOverview"
                    value={formData.projectOverview}
                    onChange={handleInputChange}
                    rows={12}
                    className="w-full bg-transparent border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white focus:outline-none p-4 transition-colors duration-300 resize-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      backdropFilter: 'blur(10px)'
                    }}
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-8">
                  <motion.button
                    type="submit"
                    className="relative text-white px-10 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      background: 'linear-gradient(90deg, #6D6DFF 0%, #666666 33%)',
                      boxShadow: '0 10px 25px rgba(109, 109, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 15px 35px rgba(109, 109, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor-hover
                  >
                  <span className="relative z-10">Submit</span>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6D6DFF]/20 to-[#666666]/20 blur-sm"></div>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
