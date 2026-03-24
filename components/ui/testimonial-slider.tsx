"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  username: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { id: 1, quote: "Travailler avec Macsig a été un réel plaisir. Son expertise en backend et en serveurs Minecraft a permis de débloquer des situations complexes en un temps record.", name: "Hawkins Entertainment", username: "@hawkins_ent", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200" },
  { id: 2, quote: "Une application web de haute qualité livrée en avance. La communication était fluide et les solutions techniques apportées étaient exactement ce que nous cherchions.", name: "Studio Azur", username: "@studio_azur", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" },
  { id: 3, quote: "Excellent développeur. Sa capacité à comprendre les besoins métier et à les transformer en interface interactive et performante est impressionnante.", name: "Creative Builders", username: "@c_builders", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
  { id: 4, quote: "Le meilleur choix pour nos infrastructures Minecraft complexes. Sa maîtrise du Java et de l'administration système est sans égal.", name: "MC Network Pro", username: "@mc_pro", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200" },
  { id: 5, quote: "Un design épuré, du code propre (Clean Code) et une réactivité incroyable. Amethyst Studio a transformé notre vision en réalité.", name: "Pulse Digital", username: "@pulse_dig", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200" },
];

const getVisibleCount = (width: number): number => {
  if (width >= 1024) return 2;
  return 1;
};

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(() => {
      const visibleCount = getVisibleCount(windowWidth);
      const maxIndex = testimonials.length - visibleCount;
      if (currentIndex >= maxIndex) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 8000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentIndex, windowWidth]);

  const visibleCount = getVisibleCount(windowWidth);
  const maxIndex = testimonials.length - visibleCount;

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  return (
    <div className="relative py-24 bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center text-center mb-16 gap-6">
          <div className="max-w-2xl px-4">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
              A Culture of <span className="text-purple-600 dark:text-purple-400">Trust</span>.
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 font-light text-lg">
              Check out what those we've worked with have to say about our commitment to engineering excellence.
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="overflow-hidden p-4 -mx-4">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * 1.5}rem)` }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full ${
                    visibleCount === 2 ? 'md:w-[calc(50%-0.75rem)]' : 'w-full'
                  }`}
                >
                  <div className="h-full rounded-[2.5rem] bg-white/5 dark:bg-black/5 border border-black/10 dark:border-white/10 p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group backdrop-blur-[40px] shadow-2xl transition-all duration-500 hover:border-purple-500/20">
                    <div className="size-16 rounded-full overflow-hidden border-2 border-purple-500/20 shrink-0">
                      <Image
                        width={64}
                        height={64}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    
                    <div className="flex flex-col flex-1 text-center md:text-left">
                      <Quote className="text-purple-500/20 h-8 w-8 mb-2 self-center md:self-start" />
                      <p className="text-lg leading-relaxed font-light text-foreground/90 mb-6 italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="mt-auto">
                        <h4 className="font-bold text-foreground tracking-tight">{testimonial.name}</h4>
                        <p className="text-zinc-500 uppercase text-[10px] tracking-widest">{testimonial.username}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={() => goToSlide(currentIndex - 1)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 dark:bg-black/20 border border-white/20 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 hidden md:block"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6 text-black dark:text-white" />
          </button>
          <button 
            onClick={() => goToSlide(currentIndex + 1)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 dark:bg-black/20 border border-white/20 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 hidden md:block"
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="h-6 w-6 text-black dark:text-white" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 gap-2">
           {Array.from({ length: maxIndex + 1 }).map((_, i) => (
             <button
               key={i}
               onClick={() => goToSlide(i)}
               className={`h-1.5 transition-all duration-500 rounded-full ${
                 i === currentIndex ? 'w-10 bg-purple-500' : 'w-1.5 bg-zinc-300 dark:bg-zinc-800'
               }`}
             />
           ))}
        </div>
      </div>
    </div>
  );
}
