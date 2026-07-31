"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useRef } from "react";
import { RevealText } from "./RevealText";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 lg:py-32 z-10 text-black">
      <div className="mb-10 sm:mb-16 border-b-4 sm:border-b-8 border-black dark:border-white pb-4 sm:pb-6 relative flex items-center justify-between">
        <RevealText 
          text="Experience" 
          className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter dark:text-white" 
        />
        <div className="absolute right-0 top-0 bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 border-2 sm:border-4 border-black font-black uppercase rotate-2 text-xs sm:text-sm md:text-xl shadow-[4px_4px_0px_#fff] hidden sm:block">
          WORK LOG
        </div>
      </div>

      <div ref={containerRef} className="relative flex flex-col gap-12 sm:gap-20 pl-6 sm:pl-16">
        
        {/* Background Track */}
        <div className="absolute left-0 top-2 bottom-2 w-2 sm:w-4 bg-gray-200 dark:bg-gray-800 border-x-2 border-black" />
        
        {/* Animated Fill Line */}
        <motion.div 
          className="absolute left-0 top-2 bottom-2 w-2 sm:w-4 bg-neo-accent origin-top border-x-2 border-black z-20"
          style={{ scaleY }}
        />

        {/* Experience 1 */}
        <div className="relative">
          <div className="absolute -left-6 sm:-left-16 top-6 sm:top-10 w-6 sm:w-16 h-2 sm:h-4 bg-black z-10" />
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full bg-neo-accent text-white border-2 sm:border-4 border-black shadow-neo-sm sm:shadow-neo-md p-5 sm:p-8 lg:p-10 hover:-translate-y-2 lg:hover:shadow-neo-lg transition-transform relative"
          >
            {/* Decorative Top Bar to look like a folder tab */}
            <div className="absolute -top-8 sm:-top-12 left-[-2px] sm:left-[-4px] bg-neo-accent text-white border-2 sm:border-4 border-black border-b-0 px-4 sm:px-6 py-1 sm:py-2 font-black uppercase tracking-widest text-sm sm:text-lg z-10 w-fit hidden sm:block">
              Present
            </div>
            <div className="absolute -top-3 sm:-top-4 right-2 sm:right-4 bg-white text-black border-2 sm:border-4 border-black px-2 sm:px-4 py-0.5 sm:py-1 font-black uppercase tracking-widest text-xs sm:text-sm z-20 rotate-3 shadow-neo-sm">
              #01
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 gap-3 sm:gap-4 border-b-2 sm:border-b-4 border-black pb-4 sm:pb-6">
              <div>
                <h3 className="font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter bg-white text-black px-2 py-1 sm:px-3 border-2 sm:border-4 border-black inline-block rotate-1 mb-2">Adeptken Consultancy LLP</h3>
                <h4 className="font-bold text-lg sm:text-xl md:text-2xl flex items-center gap-2 mt-2 sm:mt-4">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" /> Java Full Stack Developer
                </h4>
              </div>
              <p className="flex items-center gap-2 font-bold text-sm sm:text-lg bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 border-2 sm:border-4 border-black shadow-neo-sm">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" /> Apr 2026 - Present
              </p>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 font-bold text-base sm:text-lg leading-snug">
              <li className="flex gap-2 items-start bg-black/20 p-3 border-2 border-black rounded-sm"><span className="text-white text-xl">▶</span> Client: IDBI Head Office Mumbai</li>
              <li className="flex gap-2 items-start bg-black/20 p-3 border-2 border-black rounded-sm"><span className="text-white text-xl">▶</span> Full Stack Java Development</li>
              <li className="flex gap-2 items-start bg-black/20 p-3 border-2 border-black rounded-sm"><span className="text-white text-xl">▶</span> Enterprise Banking Solutions</li>
              <li className="flex gap-2 items-start bg-black/20 p-3 border-2 border-black rounded-sm"><span className="text-white text-xl">▶</span> System Architecture & Integration</li>
            </ul>
          </motion.div>
        </div>

        {/* Experience 2 */}
        <div className="relative">
          <div className="absolute -left-6 sm:-left-16 top-6 sm:top-10 w-6 sm:w-16 h-2 sm:h-4 bg-black z-10" />
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full bg-neo-secondary border-2 sm:border-4 border-black shadow-neo-sm sm:shadow-neo-md p-5 sm:p-8 lg:p-10 hover:-translate-y-2 lg:hover:shadow-neo-lg transition-transform text-black relative -rotate-1 lg:ml-4"
          >
            <div className="absolute -top-3 sm:-top-4 right-2 sm:right-4 bg-white text-black border-2 sm:border-4 border-black px-2 sm:px-4 py-0.5 sm:py-1 font-black uppercase tracking-widest text-xs sm:text-sm z-20 -rotate-3 shadow-neo-sm">
              #02
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 gap-3 sm:gap-4 border-b-2 sm:border-b-4 border-black pb-4 sm:pb-6">
              <div>
                <h3 className="font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter bg-white text-black px-2 py-1 sm:px-3 border-2 sm:border-4 border-black inline-block -rotate-1 mb-2">PJ Softtech Pvt. Ltd.</h3>
                <h4 className="font-bold text-lg sm:text-xl md:text-2xl flex items-center gap-2 mt-2 sm:mt-4">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" /> React Developer
                </h4>
              </div>
              <p className="flex items-center gap-2 font-bold text-sm sm:text-lg bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 border-2 sm:border-4 border-black shadow-neo-sm">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" /> May 2024 - Apr 2026
              </p>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 font-bold text-base sm:text-lg leading-snug">
              <li className="flex gap-2 items-start bg-white/50 p-3 border-2 border-black rounded-sm"><span className="text-neo-accent text-xl">▶</span> Built CRM systems (Lead, Employee, Inquiry, Admission)</li>
              <li className="flex gap-2 items-start bg-white/50 p-3 border-2 border-black rounded-sm"><span className="text-neo-accent text-xl">▶</span> Micro-frontends using Module Federation</li>
              <li className="flex gap-2 items-start bg-white/50 p-3 border-2 border-black rounded-sm"><span className="text-neo-accent text-xl">▶</span> Spring Boot API integration (Auth + RBAC)</li>
              <li className="flex gap-2 items-start bg-white/50 p-3 border-2 border-black rounded-sm"><span className="text-neo-accent text-xl">▶</span> Razorpay payment integration</li>
              <li className="flex gap-2 items-start bg-white/50 p-3 border-2 border-black rounded-sm"><span className="text-neo-accent text-xl">▶</span> MUI + Ant Design UI</li>
              <li className="flex gap-2 items-start bg-white/50 p-3 border-2 border-black rounded-sm"><span className="text-neo-accent text-xl">▶</span> Agile + Git workflows</li>
            </ul>
          </motion.div>
        </div>

        {/* Experience 3 */}
        <div className="relative">
          <div className="absolute -left-6 sm:-left-16 top-6 sm:top-10 w-6 sm:w-16 h-2 sm:h-4 bg-black z-10" />
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full bg-neo-muted border-2 sm:border-4 border-black shadow-neo-sm sm:shadow-neo-md p-5 sm:p-8 lg:p-10 hover:-translate-y-2 lg:hover:shadow-neo-lg transition-transform text-black relative rotate-1 lg:ml-8"
          >
            <div className="absolute -top-3 sm:-top-4 right-2 sm:right-4 bg-white text-black border-2 sm:border-4 border-black px-2 sm:px-4 py-0.5 sm:py-1 font-black uppercase tracking-widest text-xs sm:text-sm z-20 rotate-3 shadow-neo-sm">
              #03
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 gap-3 sm:gap-4 border-b-2 sm:border-b-4 border-black pb-4 sm:pb-6">
              <div>
                <h3 className="font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter bg-neo-secondary text-black px-2 py-1 sm:px-3 border-2 sm:border-4 border-black inline-block rotate-1 mb-2">Infosys Ltd.</h3>
                <h4 className="font-bold text-lg sm:text-xl md:text-2xl flex items-center gap-2 mt-2 sm:mt-4">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" /> System Engineer
                </h4>
              </div>
              <p className="flex items-center gap-2 font-bold text-sm sm:text-lg bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 border-2 sm:border-4 border-black shadow-neo-sm">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" /> Jan 2022 - Jun 2022
              </p>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 font-bold text-base sm:text-lg leading-snug">
              <li className="flex gap-2 items-start bg-white/50 p-3 border-2 border-black rounded-sm"><span className="text-neo-accent text-xl">▶</span> Java, C++ experience</li>
              <li className="flex gap-2 items-start bg-white/50 p-3 border-2 border-black rounded-sm"><span className="text-neo-accent text-xl">▶</span> Oracle PeopleSoft</li>
              <li className="flex gap-2 items-start bg-white/50 p-3 border-2 border-black rounded-sm"><span className="text-neo-accent text-xl">▶</span> Enterprise systems exposure</li>
              <li className="flex gap-2 items-start bg-white/50 p-3 border-2 border-black rounded-sm"><span className="text-neo-accent text-xl">▶</span> Built foundation in SDLC</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
