"use client";

import { motion, useScroll } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { NeoButton } from "./NeoButton";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-neo-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <nav
        className="fixed top-1.5 w-full z-50 border-b-4 border-black/30 dark:border-white/30 transition-all duration-300"
        style={{
          background: "rgba(255, 253, 245, 0.55)",
          backdropFilter: "blur(18px) saturate(180%)",
          WebkitBackdropFilter: "blur(18px) saturate(180%)",
        }}
      >
        {/* Refractive rainbow shimmer line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neo-accent via-neo-secondary to-neo-muted opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="border-4 border-black bg-neo-secondary px-4 py-1.5 hover:rotate-2 hover:-translate-y-1 transition-transform cursor-pointer shadow-neo-sm"
          >
            <span className="font-black uppercase text-black tracking-tighter text-xl">RS</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4">
            <ul className="flex items-center gap-1 font-bold uppercase tracking-widest text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3 py-1.5 rounded-none border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="w-px h-8 bg-black/20 dark:bg-white/20 mx-2" />

            <div className="flex items-center gap-3">
              <ThemeToggle inNavbar />
              <NeoButton variant="primary" className="h-9 px-4 text-xs" onClick={() => window.open('/resume.pdf', '_blank')}>
                <Download className="mr-1.5 h-3.5 w-3.5" /> Resume
              </NeoButton>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle inNavbar />
            <button
              className="p-2 border-4 border-black bg-white/80 dark:bg-black/80 text-black dark:text-white neo-click shadow-neo-sm backdrop-blur-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-16 left-0 w-full border-b-4 border-black/30 dark:border-white/30 border-t-2 border-t-black/10 flex flex-col p-4 shadow-neo-md"
            style={{
              background: "rgba(255, 253, 245, 0.75)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            <ul className="flex flex-col gap-3 font-bold uppercase tracking-widest mb-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block px-4 py-3 border-4 border-black transition-all bg-white/90 text-black hover:bg-neo-accent hover:text-white backdrop-blur-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <NeoButton variant="primary" className="w-full justify-center" onClick={() => window.open('/Rushabh_Shete_Resume.pdf', '_blank')}>
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </NeoButton>
          </motion.div>
        )}
      </nav>

      {/* Dark mode glassmorphic override */}
      <style jsx global>{`
        html.dark nav {
          background: rgba(18, 18, 18, 0.55) !important;
        }
        html.dark nav + style ~ .lg\\:hidden,
        html.dark .lg\\:hidden motion.div {
          background: rgba(18, 18, 18, 0.75) !important;
        }
      `}</style>
    </>
  );
}
