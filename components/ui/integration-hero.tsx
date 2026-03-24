"use client";

import React from "react";

const ICONS_ROW1 = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn-icons-png.flaticon.com/512/3015/3015505.png", // Minecraft
  "https://avatars.githubusercontent.com/u/54469796?s=200&v=4", // Supabase
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
];

const ICONS_ROW2 = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
];

const repeatedIcons = (icons: string[], count: number) => {
  return Array.from({ length: count }, () => icons).flat();
};

export default function IntegrationHero() {
  return (
    <section className="relative py-16 overflow-hidden border-y border-border/5 bg-transparent transition-colors duration-500">
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-foreground transition-colors">
          Built with <span className="text-purple-600 dark:text-purple-400">Industry Tech</span>
        </h2>
        <p className="max-w-xl mx-auto text-foreground/70 text-lg font-light leading-relaxed transition-colors">
          I leverage the most powerful tools and languages to ensure your project is scalable, efficient, and modern.
        </p>

        {/* Carousel */}
        <div className="mt-12 overflow-hidden relative pb-2 group">
          {/* Row 1 */}
          <div className="flex gap-6 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 8).map((src, i) => (
              <div key={i} className="h-16 w-16 flex-shrink-0 rounded-xl bg-white/5 dark:bg-black/20 border border-black/5 dark:border-white/10 shadow-xl flex items-center justify-center backdrop-blur-2xl transition-transform duration-500 hover:scale-110 hover:border-purple-500/30">
                <img src={src} alt="icon" className="h-8 w-8 object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-6 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 8).map((src, i) => (
              <div key={i} className="h-16 w-16 flex-shrink-0 rounded-xl bg-white/5 dark:bg-black/20 border border-black/5 dark:border-white/10 shadow-xl flex items-center justify-center backdrop-blur-2xl transition-transform duration-500 hover:scale-110 hover:border-purple-500/30">
                <img src={src} alt="icon" className="h-8 w-8 object-contain" />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background via-background/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background via-background/40 to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
          will-change: transform;
        }
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
