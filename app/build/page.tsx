'use client';

import { DottedSurface } from '@/components/ui/dotted-surface';
import { Header } from '@/components/ui/header-2';
import FooterSection from '@/components/ui/footer';
import { motion } from 'framer-motion';
import { ContactDrawer } from '@/components/ui/contact-drawer';
import TestimonialSlider from '@/components/ui/testimonial-slider';
import Image from 'next/image';

const projects = [
  {
    title: "Celestial Hub",
    tags: ["Fantasy", "Spawn", "Organic"],
    image: "/minecraft_build_2.png",
  },
  {
    title: "Neon Metropolis",
    tags: ["Cyberpunk", "City", "Modern"],
    image: "/minecraft_build_3.png",
  },
  {
    title: "Crystal Cove",
    tags: ["Modern", "Mansion", "Glass"],
    image: "/minecraft_build_1.png",
  }
];

export default function BuildPage() {
  return (
    <div className="relative min-h-screen selection:bg-purple-500 selection:text-white">
      <DottedSurface />
      <Header />

      <main className="relative z-10 pt-24 pb-32">
        {/* Intro Section */}
        <section className="container mx-auto px-6 mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-foreground leading-tight transition-all duration-500">
              Transforming blocks into <span className="text-purple-600 dark:text-purple-400">Masterpieces</span>.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl font-light leading-relaxed">
              Professional Minecraft landscaping and level design. <br className="hidden md:block" /> Bringing architectural precision to virtual worlds.
            </p>
          </motion.div>
        </section>

        {/* Project Showcase */}
        <section className="container mx-auto px-6 mb-40 max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground transition-colors">
              Selected <span className="text-purple-600 dark:text-purple-400">Works</span>
            </h2>
            <div className="h-px flex-1 bg-border/20 mx-8 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-white/5 dark:bg-black/5 border border-black/10 dark:border-white/10 backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/30 shadow-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                    <h4 className="text-white text-2xl font-bold mb-2 tracking-tight">{project.title}</h4>
                    <div className="flex gap-2">
                       {project.tags.map(tag => (
                         <span key={tag} className="text-xs text-white/70 font-bold uppercase tracking-widest px-2 py-1 bg-white/10 rounded-full border border-white/10 backdrop-blur-md">{tag}</span>
                       ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Builder Social Proof */}
        <div className="py-20 opacity-90 transition-opacity hover:opacity-100">
           <TestimonialSlider />
        </div>

        {/* Final CTA */}
        <section className="container mx-auto px-6 mt-40 max-w-5xl text-center">
          <div className="p-12 md:p-20 rounded-[3rem] bg-card border border-border shadow-2xl dark:shadow-none overflow-hidden relative group transition-colors duration-500">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/25 transition-colors duration-1000" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-80 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/25 transition-colors duration-1000" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter transition-all group-hover:scale-[1.02] text-foreground leading-tight">
                Design. Construct. <br className="hidden md:block" /> <span className="text-purple-600 dark:text-purple-400">Elevate</span>.
              </h2>
              <p className="text-foreground/70 mb-12 text-lg md:text-xl font-light leading-relaxed">
                Ready to take your server's level design to the next level? <br className="hidden md:block" /> I'm ready to bring architectural excellence to your world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-bold">
                <ContactDrawer
                  name="Sharrk0"
                  trigger={
                    <button className="px-10 h-16 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all w-full sm:w-auto shadow-xl hover:shadow-purple-500/10 active:scale-95 text-lg">
                      Start your project
                    </button>
                  }
                />
                <button className="px-10 h-16 rounded-full bg-white dark:bg-zinc-800/50 backdrop-blur-md text-black dark:text-white border border-border hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all w-full sm:w-auto active:scale-95">
                  View Portfolios
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
