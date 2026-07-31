"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";
import { NeoButton } from "./NeoButton";
import { TiltCard } from "./TiltCard";
import { RevealText } from "./RevealText";
import { useRef } from "react";

const projects = [
  {
    title: "Hirkani Global Export",
    github: "https://github.com/Rushabhshete/hirkaniglobalexport.git",
    live: "https://hirkaniglobalexport.vercel.app/",
    description: "Export business platform with data visualization and international workflow support.",
    badges: ["Next.js", "Tailwind", "i18n"],
    color: "bg-neo-secondary"
  },
  {
    title: "Lokmanya Tilak National Award",
    live: "https://www.lokmanyatilaknationalaward.org/",
    description: "Official website for the Lokmanya Tilak National Award.",
    badges: ["React", "Web", "UI"],
    color: "bg-white text-black"
  },
  {
    title: "Sanjay Developers",
    github: "https://github.com/Rushabhshete/SanjayDeveopers.git",
    live: "https://sanjay-deveopers.vercel.app/",
    description: "Web application for real estate and property development.",
    badges: ["React", "Next.js", "Tailwind"],
    color: "bg-neo-muted text-black"
  },
  {
    title: "Employee Management System",
    github: "https://github.com/Rushabhshete/employee.git",
    description: "Enterprise-level employee management system with role-based access, CRUD operations, and API integration.",
    badges: ["React", "Spring Boot", "MySQL"],
    color: "bg-white text-black"
  },
  {
    title: "Inquiry Management System",
    github: "https://github.com/Rushabhshete/LayringInquiry.git",
    description: "Dynamic inquiry handling system with lead tracking and modular architecture.",
    badges: ["React", "Next.js", "Tailwind"],
    color: "bg-neo-accent text-white"
  },
  {
    title: "Student Management System",
    github: "https://github.com/Rushabhshete/layringstudent.git",
    description: "Student lifecycle management system with academic tracking and admission flow.",
    badges: ["React", "Vite", "API"],
    color: "bg-neo-secondary"
  },
  {
    title: "MultiGenesys (Micro-Frontend Architecture)",
    github: "https://github.com/Rushabhshete/MultiGenesys.git",
    description: "Scalable micro-frontend architecture using Module Federation and Vite.",
    badges: ["React", "Module Federation", "Micro-frontend"],
    color: "bg-neo-muted"
  },
  {
    title: "StudyPoint System",
    github: "https://github.com/Rushabhshete/studypointlayring.git",
    description: "Full-stack education management system with multiple modules and dynamic UI.",
    badges: ["React", "Full Stack", "Database"],
    color: "bg-white text-black"
  },
  {
    title: "Finance Dashboard",
    github: "https://github.com/Rushabhshete/finance-dashboard.git",
    description: "Interactive dashboard with charts, analytics, and financial tracking UI.",
    badges: ["React", "Charts", "Dashboard"],
    color: "bg-neo-accent text-black"
  }
];

const getRandomRotation = (index: number) => {
  const rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2"];
  return rotations[index % rotations.length];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
};

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section ref={sectionRef} id="projects" className="relative w-full overflow-hidden z-10 py-16 sm:py-20 lg:py-32">
      
      {/* Kinetic Typography Background */}
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
        <div className="mb-10 sm:mb-16 border-b-4 sm:border-b-8 border-black dark:border-white pb-4 sm:pb-6 relative flex items-center justify-between">
          <RevealText 
            text="Featured Work" 
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter" 
          />
          <div className="bg-neo-accent text-white px-3 py-1.5 sm:px-4 sm:py-2 border-2 sm:border-4 border-black font-black uppercase -rotate-3 text-xs sm:text-sm md:text-xl shadow-neo-sm hidden sm:block">
            GIT HUB REPOS
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => {
            const rotationClass = getRandomRotation(index);
            const isDarkText = project.color.includes('text-white');

            return (
              <motion.div key={project.title} variants={cardVariants} className="h-full">
                <TiltCard className="h-full">
                  <div className={`flex flex-col border-2 sm:border-4 border-black shadow-neo-sm sm:shadow-neo-md transition-transform duration-200 h-full p-4 sm:p-6 ${project.color} ${rotationClass}`}>
                    {/* Header */}
                    <div className="mb-3 sm:mb-4">
                      <h3 className={`font-black text-xl sm:text-2xl uppercase tracking-tighter mb-3 sm:mb-4 leading-tight sm:min-h-[60px] ${isDarkText ? 'text-white' : 'text-black'}`}>
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {project.badges.map(badge => (
                          <span
                            key={badge}
                            className={`px-1.5 py-0.5 sm:px-2 sm:py-1 border-2 border-black font-bold text-[10px] sm:text-xs uppercase tracking-wider ${isDarkText ? 'bg-black text-white' : 'bg-white text-black'}`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Body */}
                    <p className={`font-bold text-base sm:text-lg leading-snug flex-grow mb-6 sm:mb-8 ${isDarkText ? 'text-gray-200' : 'text-gray-800'}`}>
                      {project.description}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-3 sm:gap-4 mt-auto relative z-20">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 pointer-events-auto">
                          <NeoButton variant={isDarkText ? "outline" : "primary"} className={`w-full justify-center h-10 sm:h-12 px-3 sm:px-4 text-xs sm:text-sm ${isDarkText ? 'bg-white text-black' : ''}`}>
                            <GitFork className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Repo
                          </NeoButton>
                        </a>
                      )}
                      {(project.live || project.github) && (
                        <a href={project.live || project.github} target="_blank" rel="noreferrer" className={`pointer-events-auto ${!project.github ? "flex-1" : ""}`}>
                          <button className={`h-10 sm:h-12 flex items-center justify-center border-2 sm:border-4 border-black shadow-neo-sm neo-click transition-all ${!project.github ? 'w-full px-4' : 'w-10 sm:w-12'} ${isDarkText ? 'bg-neo-secondary text-black' : 'bg-black text-white'}`}>
                            {!project.github && <span className="mr-2 font-bold uppercase text-xs sm:text-sm">Visit Site</span>}
                            <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
