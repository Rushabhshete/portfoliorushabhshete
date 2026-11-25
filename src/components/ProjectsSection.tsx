"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, ExternalLink, GitFork } from "lucide-react";
import Image from "next/image";
import { TiltCard } from "./TiltCard";
import { RevealText } from "./RevealText";

const projects = [
  {
    title: "Hirkani Global Export",
    github: "https://github.com/Rushabhshete/hirkaniglobalexport.git",
    live: "https://hirkaniglobalexport.vercel.app/",
    description: "An export business platform for international workflows and data visualization.",
    highlights: ["Export operations", "Data visualization", "International workflows"],
    badges: ["Next.js", "Tailwind", "i18n"],
    color: "bg-neo-secondary",
  },
  {
    title: "Lokmanya Tilak National Award",
    live: "https://www.lokmanyatilaknationalaward.org/",
    description: "The official website for the Lokmanya Tilak National Award.",
    badges: ["React", "Web", "UI"],
    color: "bg-white text-black",
  },
  {
    title: "Employee Management System",
    github: "https://github.com/Rushabhshete/employee.git",
    description: "An employee management system with role-based access, CRUD operations, and API integration.",
    badges: ["React", "Spring Boot", "MySQL"],
    color: "bg-white text-black",
  },
  {
    title: "Inquiry Management System",
    github: "https://github.com/Rushabhshete/LayringInquiry.git",
    description: "A system for handling inquiries, tracking leads, and organizing a modular workflow.",
    badges: ["React", "Next.js", "Tailwind"],
    color: "bg-neo-accent text-white",
  },
  {
    title: "Student Management System",
    github: "https://github.com/Rushabhshete/layringstudent.git",
    description: "A student lifecycle management system for academic tracking and admissions.",
    badges: ["React", "Vite", "API"],
    color: "bg-neo-secondary",
  },
  {
    title: "StudyPoint System",
    github: "https://github.com/Rushabhshete/studypointlayring.git",
    description: "A full-stack education management system with multiple modules and a dynamic UI.",
    badges: ["React", "Full Stack", "Database"],
    color: "bg-white text-black",
  },
  {
    title: "Finance Dashboard",
    github: "https://github.com/Rushabhshete/finance-dashboard.git",
    description: "An interactive dashboard for charts, analytics, and financial tracking.",
    badges: ["React", "Charts", "Dashboard"],
    color: "bg-neo-accent text-black",
  },
];

const getRandomRotation = (index: number) => {
  const rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2"];
  return rotations[index % rotations.length];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 48, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

function SanjayRealtyPreview() {
  return (
    <figure className="overflow-hidden border-2 sm:border-4 border-black bg-black text-white shadow-[6px_6px_0px_#000] sm:shadow-[10px_10px_0px_#000]">
      <div className="flex items-center justify-between gap-3 border-b-2 border-white/30 px-3 py-3 sm:px-5">
        <div>
          <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em]">Sanjay Realty</p>
          <p className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-white/70">Pune · Live website</p>
        </div>
        <span className="shrink-0 border border-white/60 px-2.5 py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
          Property portfolio
        </span>
      </div>
      <Image
        src="/sanjay-realty-hero.jpg"
        alt="A featured Sanjay Realty development in Pune at sunset"
        width={1024}
        height={1024}
        sizes="(max-width: 1024px) 100vw, 45vw"
        className="aspect-[4/3] w-full object-cover object-center"
      />
      <figcaption className="flex flex-wrap items-center justify-between gap-2 px-3 py-3 sm:px-5">
        <span className="text-xs sm:text-sm font-bold">Building Pune&apos;s Next Landmarks</span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/70">Featured live-site image</span>
      </figcaption>
    </figure>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section ref={sectionRef} id="projects" className="relative w-full overflow-hidden z-10 py-16 sm:py-20 lg:py-32">
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-center opacity-10 dark:opacity-20 overflow-hidden select-none">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap">
          <span className="text-[15vw] font-black uppercase stroke-text">
            PROJECTS • WORK • PROJECTS • WORK • PROJECTS • WORK •
          </span>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap -mt-10 sm:-mt-20">
          <span className="text-[15vw] font-black uppercase stroke-text">
            PORTFOLIO • SHOWCASE • PORTFOLIO • SHOWCASE •
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="mb-10 sm:mb-14 border-b-4 sm:border-b-8 border-black dark:border-white pb-4 sm:pb-6">
          <RevealText
            text="Featured Work"
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter"
          />
        </div>

        <article className="mb-14 sm:mb-20 border-2 sm:border-4 border-black bg-neo-secondary p-4 text-black sm:p-7 lg:p-10 shadow-neo-md">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="order-2 lg:order-1">
              <p className="mb-3 inline-block border-2 border-black bg-black px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
                Flagship case study
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[0.95] tracking-tighter">
                Sanjay Realty
                <span className="mt-2 block text-xl sm:text-2xl lg:text-3xl">Digital experience</span>
              </h2>
              <p className="mt-5 max-w-xl text-base sm:text-lg font-bold leading-relaxed">
                A clear digital front door for Pune property buyers, businesses, and communities exploring homes, commercial spaces, and redevelopment.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "Tailwind CSS", "Responsive UX"].map((tag) => (
                  <span key={tag} className="border-2 border-black bg-white px-2.5 py-1 text-xs font-black uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#sanjay-realty-case-study"
                  className="inline-flex min-h-12 items-center justify-center border-4 border-black bg-black px-5 py-3 text-center text-sm font-black uppercase tracking-wider text-white shadow-neo-sm transition-transform hover:-translate-y-0.5"
                >
                  Read case study <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="https://sanjayrealty.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center border-4 border-black bg-white px-5 py-3 text-center text-sm font-black uppercase tracking-wider text-black shadow-neo-sm transition-transform hover:-translate-y-0.5"
                >
                  Live site <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SanjayRealtyPreview />
            </div>
          </div>

          <div id="sanjay-realty-case-study" className="mt-10 scroll-mt-24 border-t-2 border-black pt-7 sm:mt-12 sm:border-t-4 sm:pt-9">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">The work, at a glance</h3>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border-2 border-black bg-white p-4">
                <h4 className="font-black uppercase tracking-wide">Who it serves</h4>
                <p className="mt-2 text-sm font-medium leading-relaxed">
                  Property buyers, businesses, and housing societies exploring Pune real estate and redevelopment.
                </p>
              </div>
              <div className="border-2 border-black bg-white p-4">
                <h4 className="font-black uppercase tracking-wide">My role</h4>
                <p className="mt-2 text-sm font-medium leading-relaxed">
                  Built the Next.js website experience and organized the developer&apos;s service and project content into a multi-page site.
                </p>
              </div>
              <div className="border-2 border-black bg-white p-4">
                <h4 className="font-black uppercase tracking-wide">A key decision</h4>
                <p className="mt-2 text-sm font-medium leading-relaxed">
                  Gave redevelopment, hospitality, infrastructure, and property projects distinct paths within one shared brand experience.
                </p>
              </div>
              <div className="border-2 border-black bg-white p-4">
                <h4 className="font-black uppercase tracking-wide">What shipped</h4>
                <p className="mt-2 text-sm font-medium leading-relaxed">
                  A live site with project portfolio, service pages, gallery, blog, and contact journeys.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="mb-7 max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">More projects</h3>
          <p className="mt-2 text-sm sm:text-base font-medium">
            A quick product overview first; then follow the labeled link to a live site or source.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => {
            const rotationClass = getRandomRotation(index);
            const isDarkText = project.color.includes("text-white");

            return (
              <motion.div key={project.title} variants={cardVariants} className="h-full">
                <TiltCard className="h-full">
                  <article className={`flex h-full flex-col border-2 sm:border-4 border-black p-4 sm:p-6 shadow-neo-sm sm:shadow-neo-md ${project.color} ${isDarkText ? "text-white" : "text-black"} ${rotationClass}`}>
                    <h3 className="mb-3 text-xl sm:text-2xl font-black uppercase leading-tight tracking-tighter">
                      {project.title}
                    </h3>
                    <p className={`mb-4 text-sm sm:text-base font-bold leading-relaxed ${isDarkText ? "text-gray-100" : "text-gray-800"}`}>
                      <span className="mb-1 block text-[10px] font-black uppercase tracking-[0.16em] opacity-70">
                        What it does
                      </span>
                      {project.description}
                    </p>
                    {project.highlights && (
                      <div className={`mb-5 border-2 border-black p-3 ${isDarkText ? "bg-black/20" : "bg-white/70"}`}>
                        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em]">Project at a glance</p>
                        <ol className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li key={highlight} className="flex items-center gap-2 text-xs font-bold">
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-black bg-neo-secondary text-[10px] font-black">
                                {highlightIndex + 1}
                              </span>
                              {highlight}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          className={`border-2 border-black px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${isDarkText ? "bg-black text-white" : "bg-white text-black"}`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3 border-t-2 border-black/30 pt-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 border-2 border-black bg-black px-3 py-2 text-xs font-black uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
                        >
                          Live demo <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex min-h-10 flex-1 items-center justify-center gap-2 border-2 border-black px-3 py-2 text-xs font-black uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${project.live ? "bg-white text-black" : "bg-black text-white"}`}
                        >
                          Source <GitFork className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
