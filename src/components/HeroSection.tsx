"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, Mail, X } from "lucide-react";
import { NeoButton } from "./NeoButton";

export function HeroSection({
  gameState,
  setGameState
}: {
  gameState: "idle" | "instructions" | "playing",
  setGameState: (state: "idle" | "instructions" | "playing") => void
}) {

  return (
    <section id="home" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 pt-24 sm:pt-32 lg:pt-48 pb-16 sm:pb-20 lg:pb-32 flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[90vh] z-10 overflow-hidden">

      <AnimatePresence mode="wait">
        {gameState === "idle" && (
          <motion.div
            key="hero-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="text-center relative"
          >
            <motion.h1
              initial={{ y: -800, scale: 2.5, opacity: 0, rotate: -10 }}
              animate={{ y: 0, scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, mass: 1.5 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.9] sm:leading-[0.85] text-black dark:text-white relative z-30"
            >
              RUSHABH <br /> SHETE
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl font-bold max-w-[90%] sm:max-w-2xl mx-auto leading-snug bg-white text-black border-4 border-black p-3 sm:p-4 shadow-[4px_4px_0px_0px_#000] z-20 relative -rotate-1"
            >
              React | Spring Boot | Micro-Frontend Architect
            </motion.p>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
              className="absolute -top-8 md:-top-26 -left-4 md:-left-20 z-10"
            >
              <div className="bg-neo-secondary px-3 py-1.5 sm:px-5 sm:py-2 border-2 sm:border-4 border-black font-black uppercase text-xs sm:text-base tracking-widest shadow-neo-sm text-black">
                📍 Pune, India
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.6 }}
              className="absolute -top-8 md:top-32 -right-4 md:-right-34 z-10 hidden sm:block"
            >
              <div className="bg-white text-black px-3 py-1.5 sm:px-5 sm:py-2 border-2 sm:border-4 border-black font-black uppercase text-sm sm:text-lg tracking-tight shadow-neo-sm">
                Full Stack Developer
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.8 }}
              className="absolute bottom-24 md:bottom-55 -left-4 md:-left-32 z-20 hidden sm:block"
            >
              <div className="bg-neo-muted text-black px-3 py-1.5 sm:px-5 sm:py-2 border-2 sm:border-4 border-black font-black uppercase text-xs sm:text-base tracking-widest shadow-neo-sm">
                3 YEARS EXP
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 relative z-30 w-full sm:w-auto flex-wrap"
            >
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <NeoButton variant="primary">
                  View featured work <ArrowRight className="ml-2 h-5 w-5" />
                </NeoButton>
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <span className="inline-flex items-center gap-2 font-bold uppercase tracking-wider underline decoration-2 underline-offset-4 hover:text-neo-accent">
                  <Mail className="h-4 w-4" /> Contact
                </span>
              </a>
              <a href="/Rushabh_Shete_Resume.pdf" target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-2 font-bold uppercase tracking-wider underline decoration-2 underline-offset-4 hover:text-neo-accent">
                  <Download className="h-4 w-4" /> Résumé
                </span>
              </a>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>

      <AnimatePresence>
        {gameState === "playing" && (
          <motion.div
            key="exit-button"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50"
          >
            <NeoButton onClick={() => setGameState("idle")} variant="primary" className="bg-neo-accent text-white shadow-[4px_4px_0px_#000]">
              <X className="mr-2 h-5 w-5" /> Exit Game
            </NeoButton>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
