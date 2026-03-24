"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Use motion values for better performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to avoid jitter
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('[role="button"]') ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
          .custom-cursor-container {
            display: none;
          }
        }
      `}</style>
      
      <div className="custom-cursor-container pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
        <motion.div
          ref={cursorRef}
          className="relative flex items-center justify-center"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-10%', // Offset so the sword tip is at the pointer
            translateY: '-10%',
          }}
          animate={{
            scale: isPointer ? 1.5 : 1,
            rotate: isPointer ? 10 : 0
          }}
        >
          {/* Glowing Aura */}
          <motion.div 
            className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-150"
            animate={{
               opacity: isPointer ? 0.6 : 0.2,
               scale: isPointer ? 2 : 1.5
            }}
          />
          
          {/* Custom Image Cursor */}
          <img 
            src="/Minecraft Enchanted Netherite Sword Animated--cursor--SweezyCursors.png" 
            alt="Cursor"
            className="h-10 w-10 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
          />
        </motion.div>
      </div>
    </>
  );
}
