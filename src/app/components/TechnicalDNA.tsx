'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TechnicalDNA = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend Programming languages');

  const categories = [
    'Frontend Programming languages',
    'Backend Programming languages',
    'Database Programming languages',
    'No code Development',
    'Design',
    'DevOps',
    'Artificial Intelligence',
    'Mobile',
    'Salesforce',
    'Cybersecurity',
    'Digital Marketing'
  ];

  const technologies = {
    'Frontend Programming languages': [
      'CSS', 'HTML', 'Javascript', 'Angular', 'React', 'Next JS', 'Vue.Js', 'Ember'
    ],
    'Backend Programming languages': [
      'Node.js', 'Python', 'Java', 'C#', 'Go', 'Ruby', 'PHP', 'Rust'
    ],
    'Database Programming languages': [
      'SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB', 'Cassandra'
    ],
    'No code Development': [
      'Webflow', 'Bubble', 'Airtable', 'Zapier', 'Notion', 'Figma', 'Canva', 'Shopify'
    ],
    'Design': [
      'Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator', 'InVision', 'Principle', 'Framer'
    ],
    'DevOps': [
      'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Jenkins', 'GitLab CI', 'Terraform'
    ],
    'Artificial Intelligence': [
      'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain', 'Pinecone', 'Weaviate', 'Anthropic'
    ],
    'Mobile': [
      'React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin', 'Cordova', 'Expo'
    ],
    'Salesforce': [
      'Apex', 'Lightning', 'LWC', 'Visualforce', 'Flow', 'Process Builder', 'Workflow', 'Validation Rules'
    ],
    'Cybersecurity': [
      'OWASP', 'Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'Nessus', 'Qualys', 'Rapid7'
    ],
    'Digital Marketing': [
      'Google Analytics', 'Facebook Ads', 'Google Ads', 'HubSpot', 'Mailchimp', 'Hootsuite', 'SEMrush', 'Ahrefs'
    ]
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2b] via-[#050814] to-[#000000]">
        {/* Cosmic texture */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.1,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        {/* Faint glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-3xl md:text-4xl font-semibold font-['Inter',sans-serif]">
            Our Technical DNA or The Engine Room
          </h2>
        </motion.div>

        {/* Main Glassmorphic Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-gray-900/20 to-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Panel - Categories */}
            <div className="space-y-4">
              <h3 className="text-white text-xl font-semibold mb-6 font-['Inter',sans-serif]">
                Technical Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    variants={itemVariants}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-6 py-4 rounded-full transition-all duration-300 relative overflow-hidden ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-[#1E1BFF]/20 to-[#9CA3FF]/20 backdrop-blur-md border border-white/20 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-105'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Glass effect overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
                    
                    {/* Active state glow */}
                    {activeCategory === category && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1E1BFF]/30 to-[#9CA3FF]/30 blur-sm"></div>
                    )}
                    
                    {/* Text */}
                    <span className="relative z-10 font-medium text-sm md:text-base">
                      {category}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right Panel - Technologies Grid */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6 font-['Inter',sans-serif]">
                Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {(technologies[activeCategory as keyof typeof technologies] || []).map((tech, index) => (
                  <motion.button
                    key={tech}
                    variants={itemVariants}
                    className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-full px-6 py-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(30, 27, 255, 0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Technology name */}
                    <span className="relative z-10 text-white font-medium text-sm md:text-base group-hover:text-blue-100 transition-colors duration-300">
                      {tech}
                    </span>
                    
                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1E1BFF]/20 to-[#9CA3FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number] }}
          viewport={{ once: true }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </section>
  );
};

export default TechnicalDNA;
