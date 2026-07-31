"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useRef } from "react";

function HighlightLine({ children, color, direction }: { children: React.ReactNode; color: string; direction: "ltr" | "rtl" }) {
  const ref = useRef<HTMLSpanElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 45%"] 
  });

  const backgroundSize = useTransform(scrollYProgress, [0, 1], ["0% 100%", "100% 100%"]);

  return (
    <motion.span 
      ref={ref} 
      style={{
        backgroundImage: `linear-gradient(to ${direction === "ltr" ? "right" : "left"}, ${color} 100%, transparent 0%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: direction === "ltr" ? "left" : "right",
        backgroundSize,
        padding: "2px 4px",
        display: "inline",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone"
      }}
    >
      {children}
    </motion.span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 lg:py-32 z-10 text-black">
      <div className="mb-10 sm:mb-16 flex items-center gap-4 sm:gap-6 border-b-4 sm:border-b-8 border-black pb-4 sm:pb-6 relative">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter">About</h2>
        <Star className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-black fill-black hidden sm:block" />
        <div className="absolute right-0 top-0 bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 border-2 sm:border-4 border-black font-black uppercase rotate-2 text-xs sm:text-sm md:text-xl shadow-neo-sm hidden sm:block">
          Profile
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-8 bg-white text-black border-4 border-black p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000] -rotate-1 relative"
        >
          {/* Decorative pins */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-neo-accent border-4 border-black rounded-full" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-neo-accent border-4 border-black rounded-full" />

          <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-6">
            Full Stack Developer with nearly 3 years of experience building{" "}
            <HighlightLine direction="ltr" color="#FFFFFF">scalable, production-grade applications</HighlightLine>{" "}
            using React.js, Next.js, Spring Boot, and MySQL.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-6">
            Specialized in developing{" "}
            <HighlightLine direction="rtl" color="#C4B5FD">end-to-end CRM systems including Lead, Employee, Inquiry, and Admission platforms.</HighlightLine>{" "}
            Experienced in micro-frontend architecture using Module Federation, enabling scalable and independent deployments.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
            Strong expertise in integrating{" "}
            <HighlightLine direction="ltr" color="#FF6B6B">secure REST APIs, authentication systems, and payment gateways</HighlightLine>{" "}
            such as Razorpay. Focused on clean architecture, performance optimization, and delivering business-driven solutions.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-4 flex flex-col gap-6"
        >
          <div className="bg-black text-white border-2 sm:border-4 border-black p-4 sm:p-6 shadow-[4px_4px_0px_0px_#fff] sm:shadow-[8px_8px_0px_0px_#fff] rotate-3 hover:rotate-0 transition-transform cursor-pointer">
            <h3 className="font-black text-xl sm:text-2xl uppercase tracking-tight mb-1 sm:mb-2">Location</h3>
            <p className="font-bold text-base sm:text-lg">Pune, India</p>
          </div>
          <div className="bg-white text-black border-2 sm:border-4 border-black p-4 sm:p-6 shadow-neo-sm sm:shadow-neo-md -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
            <h3 className="font-black text-xl sm:text-2xl uppercase tracking-tight mb-1 sm:mb-2">Education</h3>
            <p className="font-bold text-base sm:text-lg">B.Tech in Civil Engineering</p>
            <p className="font-bold text-base sm:text-lg">PG-DAC Advanced Computing</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
