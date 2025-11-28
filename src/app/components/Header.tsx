'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/expertise', label: 'Expertise' },
    { href: '/work', label: 'Work' },
    { href: '/company', label: 'Company' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' }
  ];

  const isActive = (href: string) => {
    if (href === '#blog') return false;
    return pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-44 h-22">
            <Image
              src="/logo.svg"
              alt="Hunnidlabs Logo"
              width={128}
              height={88}
              className="w-full h-full"
            />
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="bg-black/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/10">
            <ul className="flex items-center space-x-6 text-white text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-blue-400 transition-colors px-3 py-1 rounded-full ${
                      isActive(item.href)
                        ? 'bg-white/10 text-blue-400'
                        : ''
                    }`}
                    data-cursor-hover
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        
        {/* CTA Button - Desktop */}
        <button className="hidden md:block bg-black/20 backdrop-blur-sm border border-white/10 text-white px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-300 text-sm" data-cursor-hover>
          Work with us
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded-full transition-all"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white rounded-full transition-all"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded-full transition-all"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-50 md:hidden overflow-y-auto"
            >
              {/* Glassmorphism Background */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.3) 0%, rgba(67, 56, 202, 0.2) 50%, rgba(139, 92, 246, 0.3) 100%)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Additional depth layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/40 to-[#000000]/60"></div>
                
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                  }} />
                </div>

                {/* Ambient glow effects */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
                  <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
                </div>
              </div>

              {/* Menu Content */}
              <div className="relative z-10 p-8 pt-24">
                {/* Logo */}
                <div className="mb-12">
                  <Link href="/" onClick={closeMobileMenu} className="flex items-center">
                    <div className="w-36 h-20">
                      <Image
                        src="/logo.svg"
                        alt="Hunnidlabs Logo"
                        width={128}
                        height={88}
                        className="w-full h-full"
                      />
                    </div>
                  </Link>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-4 mb-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`block px-6 py-4 rounded-2xl text-white transition-all duration-300 ${
                          isActive(item.href)
                            ? 'bg-white/20 text-blue-400 shadow-lg shadow-blue-500/20'
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                        style={{
                          border: isActive(item.href) 
                            ? '1px solid rgba(96, 165, 250, 0.5)' 
                            : '1px solid rgba(255, 255, 255, 0.1)',
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontSize: '18px',
                          fontWeight: isActive(item.href) ? '600' : '400'
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Work with us Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <button
                    onClick={closeMobileMenu}
                    className="w-full px-6 py-4 rounded-2xl text-white font-medium transition-all duration-300"
                    style={{
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '18px',
                      fontWeight: '600',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    Work with us
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 