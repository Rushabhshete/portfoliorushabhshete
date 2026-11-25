"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Gamepad2, X } from "lucide-react";
import { NeoButton } from "./NeoButton";

type GameState = "idle" | "instructions" | "playing";

export function PlaygroundSection({
  gameState,
  setGameState,
}: {
  gameState: GameState;
  setGameState: (state: GameState) => void;
}) {
  return (
    <section
      id="playground"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-2 sm:border-4 border-black bg-white text-black p-5 sm:p-8 shadow-neo-sm">
        <div>
          <p className="font-black uppercase tracking-[0.2em] text-xs sm:text-sm text-neo-accent">
            A little side quest
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black uppercase tracking-tighter">
            Playground
          </h2>
          <p className="mt-2 font-medium text-sm sm:text-base">
            Take a break with a quick round of Snake.
          </p>
        </div>
        <NeoButton
          onClick={() => setGameState("instructions")}
          variant="outline"
          className="shrink-0"
        >
          <Gamepad2 className="mr-2 h-5 w-5" /> Play Snake
          <ArrowRight className="ml-2 h-4 w-4" />
        </NeoButton>
      </div>

      <AnimatePresence>
        {gameState === "instructions" && (
          <motion.div
            key="game-instructions"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="snake-title"
              className="flex w-full max-w-sm flex-col items-center gap-6 border-4 border-black bg-white p-6 text-black shadow-[8px_8px_0px_#000] sm:p-8"
            >
              <h3
                id="snake-title"
                className="text-3xl font-black uppercase leading-none"
              >
                Snake Game
              </h3>
              <div className="flex w-full flex-col items-center gap-3 border-2 border-black bg-neo-muted p-4 font-bold shadow-neo-sm">
                <p className="mb-2 text-center text-sm uppercase tracking-widest">
                  Use arrow keys to play
                </p>
                <div className="flex flex-col items-center gap-1" aria-hidden="true">
                  <span className="flex h-12 w-12 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#000]">↑</span>
                  <div className="flex gap-1">
                    <span className="flex h-12 w-12 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#000]">←</span>
                    <span className="flex h-12 w-12 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#000]">↓</span>
                    <span className="flex h-12 w-12 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#000]">→</span>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-4">
                <NeoButton
                  onClick={() => setGameState("idle")}
                  variant="outline"
                  className="flex-1 justify-center bg-white text-black"
                >
                  <X className="mr-2 h-5 w-5" /> Cancel
                </NeoButton>
                <NeoButton
                  onClick={() => setGameState("playing")}
                  variant="primary"
                  className="flex-1 justify-center bg-neo-accent text-white"
                >
                  <Check className="mr-2 h-5 w-5" /> Play
                </NeoButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
