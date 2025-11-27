'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the difference between UI and UX design?',
      answer: 'UI (User Interface) design focuses on the visual elements and aesthetics of a product, such as colors, typography, and layout. UX (User Experience) design, on the other hand, is concerned with the overall user journey, usability, and how users interact with and feel about the product. While UI is about how it looks, UX is about how it works and feels.'
    },
    {
      question: 'How involved will I be in the design process?',
      answer: 'We believe in collaborative design. You\'ll be involved at key stages including initial discovery, concept reviews, and final approvals. We provide regular updates and seek your feedback throughout the process to ensure the final product aligns with your vision and business goals.'
    },
    {
      question: 'What do I receive at the end of the design phase?',
      answer: 'At the end of the design phase, you\'ll receive comprehensive design deliverables including high-fidelity mockups, design specifications, style guides, and all source files. We also provide documentation and guidelines to help your development team implement the designs accurately.'
    },
    {
      question: 'Can you work with my existing brand guidelines?',
      answer: 'Absolutely! We can seamlessly integrate your existing brand guidelines into new designs. We\'ll ensure consistency with your brand identity while enhancing and evolving your visual language where appropriate. We can also help refine and expand your brand guidelines if needed.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-24">
      {/* Background - Dark with gradient to blue-purple on right */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #000000 0%, #000000 50%, rgba(30, 27, 75, 0.8) 100%)'
        }}
      >
        {/* Subtle additional effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500/5 blur-2xl rounded-full"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '700',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            color: '#ffffff'
          }}
        >
          Frequently asked questions ?
        </motion.h2>

        {/* FAQ Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: openIndex === index 
                    ? '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.05)'
                    : '0 0 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Question Row */}
                <div className="flex items-center justify-between">
                  <h3 
                    className="text-white flex-1 pr-4"
                    style={{
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '18px',
                      fontWeight: '500',
                      lineHeight: '1.4'
                    }}
                  >
                    {faq.question}
                  </h3>
                  
                  {/* Chevron Icon */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Answer (Collapsible) */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p 
                        className="text-white/80 mt-4 pt-4 border-t border-white/10"
                        style={{
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontSize: '16px',
                          fontWeight: '400',
                          lineHeight: '1.6'
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

