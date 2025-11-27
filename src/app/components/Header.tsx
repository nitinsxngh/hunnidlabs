'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

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
        
        {/* CTA Button */}
        <button className="bg-black/20 backdrop-blur-sm border border-white/10 text-white px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-300 text-sm" data-cursor-hover>
          Work with us
        </button>
      </div>
    </header>
  );
};

export default Header; 