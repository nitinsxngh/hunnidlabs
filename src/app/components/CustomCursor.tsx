'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      // Reset hover state after a short delay to allow for proper click feedback
      setTimeout(() => setIsHovering(false), 100);
    };
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Add hover listeners for interactive elements
    const handleElementMouseEnter = () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      if (!isClicking) {
        setIsHovering(true);
      }
    };
    const handleElementMouseLeave = () => {
      // Clear any existing timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      // Set a small delay before removing hover state
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovering(false);
      }, 50);
    };

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Add click listener to reset hover state
    const handleClick = () => {
      setIsHovering(false);
      // Reset clicking state after animation completes
      setTimeout(() => setIsClicking(false), 600);
    };
    document.addEventListener('click', handleClick);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], [data-cursor-hover]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleElementMouseEnter);
      element.addEventListener('mouseleave', handleElementMouseLeave);
    });

    return () => {
      // Clear any pending timeouts
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('click', handleClick);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleElementMouseEnter);
        element.removeEventListener('mouseleave', handleElementMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor - Glassmorphism Style */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div 
          className="w-3 h-3 rounded-full backdrop-blur-sm border border-white/30"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        />
      </motion.div>

      {/* Cursor Ring - Theme Colors */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full border-2 border-transparent"
          style={{
            background: isHovering 
              ? 'linear-gradient(45deg, #1E1BFF, #9CA3FF) border-box'
              : 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)) border-box',
            borderImage: isHovering 
              ? 'linear-gradient(45deg, #1E1BFF, #9CA3FF) 1'
              : 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)) 1'
          }}
          animate={{
            scale: isHovering ? 1.8 : 1,
            opacity: isHovering ? 0.9 : 0.6,
          }}
          transition={{
            duration: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
          }}
        />
      </motion.div>

      {/* Cursor Glow Effect - Cosmic Theme */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          mass: 1,
        }}
      >
        <motion.div
          className="w-16 h-16 rounded-full blur-sm"
          style={{
            background: isHovering 
              ? 'radial-gradient(circle, rgba(30, 27, 255, 0.4) 0%, rgba(156, 163, 255, 0.2) 50%, transparent 100%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)'
          }}
          animate={{
            scale: isHovering ? 1.5 : 0.8,
            opacity: isHovering ? 0.8 : 0.4,
          }}
          transition={{
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
          }}
        />
      </motion.div>

      {/* Click Ripple Effect - Theme Colors */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        initial={false}
      >
        <motion.div
          className="w-12 h-12 rounded-full border-2"
          style={{
            borderColor: isClicking ? '#1E1BFF' : 'transparent',
            background: isClicking ? 'linear-gradient(45deg, rgba(30, 27, 255, 0.1), rgba(156, 163, 255, 0.1))' : 'transparent'
          }}
          animate={{
            scale: isClicking ? [1, 2.5, 0] : 0,
            opacity: isClicking ? [1, 0.6, 0] : 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
          }}
        />
      </motion.div>

      {/* Hover Text Effect - Glassmorphism */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9995]"
        animate={{
          x: mousePosition.x + 25,
          y: mousePosition.y - 15,
        }}
        initial={false}
      >
        <motion.div
          className="px-4 py-2 rounded-full backdrop-blur-md border border-white/20"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
          animate={{
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.8,
          }}
          transition={{
            duration: 0.2,
            ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
          }}
        >
          <span 
            className="text-white text-xs font-medium"
            style={{
              background: 'linear-gradient(90deg, #1E1BFF 0%, #9CA3FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {isHovering ? 'Click me' : ''}
          </span>
        </motion.div>
      </motion.div>

      {/* Trailing Particles - Cosmic Theme */}
      <div className="fixed top-0 left-0 pointer-events-none z-[9994]">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'linear-gradient(45deg, #1E1BFF, #9CA3FF)',
              boxShadow: '0 0 6px rgba(30, 27, 255, 0.6)',
              opacity: isHovering ? 0.9 : 0.5,
            }}
            animate={{
              x: mousePosition.x - 2,
              y: mousePosition.y - 2,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              mass: 0.5,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Background Stars Effect */}
      <div className="fixed top-0 left-0 pointer-events-none z-[9993]">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            animate={{
              x: mousePosition.x + (Math.cos(i * 45 * Math.PI / 180) * 40),
              y: mousePosition.y + (Math.sin(i * 45 * Math.PI / 180) * 40),
              opacity: isHovering ? [0.3, 0.8, 0.3] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CustomCursor;
