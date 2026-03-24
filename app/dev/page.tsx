'use client';

import { DottedSurface } from '@/components/ui/dotted-surface';
import { Header } from '@/components/ui/header-2';
import FooterSection from '@/components/ui/footer';
import { motion } from 'framer-motion';
import IntegrationHero from '@/components/ui/integration-hero';
import TestimonialSlider from '@/components/ui/testimonial-slider';
import { ContactDrawer } from '@/components/ui/contact-drawer';


export default function DevPage() {
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
              Let's build <span className="text-purple-600 dark:text-purple-400">together</span>.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl font-light leading-relaxed">
              Full stack development for web apps, native applications, <br className="hidden md:block" /> Minecraft development, and full-scale backend systems.
            </p>
          </motion.div>
        </section>

        {/* Integration Hero (Tool Stack) */}
        <IntegrationHero />

        {/* Testimonials */}
        <div className="my-20">
          <TestimonialSlider />
        </div>

        {/* Project Teaser CTA */}
        <section className="container mx-auto px-6 mt-40 max-w-5xl text-center">
          <div className="p-12 md:p-20 rounded-[3rem] bg-card border border-border shadow-2xl dark:shadow-none overflow-hidden relative group transition-colors duration-500">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/25 transition-colors duration-1000" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-80 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/25 transition-colors duration-1000" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter transition-all group-hover:scale-[1.02] text-foreground leading-tight">
                Contact me to build <br className="hidden md:block" /> <span className="text-purple-600 dark:text-purple-400">great things</span>.
              </h2>
              <p className="text-foreground/70 mb-12 text-lg md:text-xl font-light leading-relaxed">
                Whether it's a custom web platform, a native app, or a complex Minecraft ecosystem, I'm ready to bring your technical vision to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-bold">
                <ContactDrawer
                  name="Macsig"
                  trigger={
                    <button className="px-10 h-16 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all w-full sm:w-auto shadow-xl hover:shadow-purple-500/10 active:scale-95">
                      Get in touch
                    </button>
                  }
                />
                <button className="px-10 h-16 rounded-full bg-white dark:bg-zinc-800/50 backdrop-blur-md text-black dark:text-white border border-border hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all w-full sm:w-auto active:scale-95">
                  See Open Source projects
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
