"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PlaygroundSection } from "@/components/PlaygroundSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SnakeGame } from "@/components/SnakeGame";

function ZigzagDivider() {
  return <div className="zigzag-divider relative z-20" />;
}

function FloatingShape({ className }: { className: string }) {
  return (
    <div className={`absolute border-4 border-black dark:border-white ${className}`} />
  );
}

import { useState } from "react";

export default function Home() {
  const [gameState, setGameState] = useState<"idle" | "instructions" | "playing">("idle");
  return (
    <main className={`min-h-screen ${gameState === 'playing' ? 'overflow-hidden h-screen' : 'overflow-x-hidden'} selection:bg-neo-accent selection:text-white`}>
      {gameState !== 'playing' && <Navbar />}

      {/* HERO — dotted background */}
      <div className={`${gameState === 'playing' ? 'fixed inset-0 z-50 bg-white section-dotted' : 'relative section-dotted'}`}>
        <SnakeGame isPlaying={gameState === "playing"} />
        <FloatingShape className="w-12 h-12 bg-neo-accent rotate-12 top-40 left-8 hidden lg:block" />
        <FloatingShape className="w-8 h-8 bg-neo-secondary rounded-full top-120 right-56 hidden lg:block" />
        <HeroSection gameState={gameState} setGameState={setGameState} />
      </div>

      <ZigzagDivider />

      {/* ABOUT — yellow background block */}
      <div className="section-yellow relative">
        <FloatingShape className="w-10 h-10 bg-neo-muted -rotate-6 top-12 right-12 hidden lg:block" />
        <AboutSection />
      </div>

      <ZigzagDivider />

      {/* SKILLS — dotted background */}
      <div className="section-dotted relative">
        <FloatingShape className="w-14 h-14 bg-neo-accent rotate-45 bottom-20 left-6 hidden lg:block" />
        <SkillsSection />
      </div>

      <ZigzagDivider />

      {/* EXPERIENCE — accent (red/coral) background block */}
      <div className="section-accent relative">
        <ExperienceSection />
      </div>

      <ZigzagDivider />

      {/* PROJECTS — dotted background */}
      <div className="section-dotted relative">
        <FloatingShape className="w-12 h-12 bg-neo-secondary rotate-12 top-20 right-10 hidden lg:block" />
        <ProjectsSection />
      </div>

      <ZigzagDivider />

      <div className="section-yellow relative">
        <PlaygroundSection gameState={gameState} setGameState={setGameState} />
      </div>

      <ZigzagDivider />

      {/* CONTACT — violet background block */}
      <div className="section-violet relative">
        <ContactSection />
      </div>

      <ZigzagDivider />

      <Footer />
    </main>
  );
}
