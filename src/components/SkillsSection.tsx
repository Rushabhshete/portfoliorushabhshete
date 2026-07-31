"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, PenTool, Star } from "lucide-react";
import { RevealText } from "./RevealText";

const skills = [
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6 sm:h-8 sm:w-8" />,
    items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "Material UI", "Ant Design", "HTML5 & CSS3"],
    color: "bg-neo-accent",
    textColor: "text-white",
    rotation: "rotate-1",
  },
  {
    title: "Backend",
    icon: <Database className="h-6 w-6 sm:h-8 sm:w-8" />,
    items: ["Java", "Spring Boot", "REST APIs", "MySQL", "Hibernate ORM"],
    color: "bg-neo-secondary",
    textColor: "text-black",
    rotation: "-rotate-2",
  },
  {
    title: "Architecture",
    icon: <Code2 className="h-6 w-6 sm:h-8 sm:w-8" />,
    items: ["Micro-Frontend", "Module Federation", "OOP", "Data Structures"],
    color: "bg-neo-muted",
    textColor: "text-black",
    rotation: "rotate-2",
  },
  {
    title: "Tools & DevOps",
    icon: <PenTool className="h-6 w-6 sm:h-8 sm:w-8" />,
    items: ["Git", "GitHub", "Vite", "Postman", "Agile Development", "CI/CD"],
    color: "bg-white",
    textColor: "text-black",
    rotation: "-rotate-1",
  },
];

export function SkillsSection() {
  // We duplicate the skills array to make the infinite loop seamless
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section id="skills" className="relative w-full py-16 sm:py-20 lg:py-32 z-10 bg-neo-muted border-y-4 sm:border-y-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative mb-10 sm:mb-16">
        <div className="border-b-4 sm:border-b-8 border-black pb-4 sm:pb-6 relative flex items-center justify-between">
          <RevealText 
            text="Toolbelt" 
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter" 
          />
          <div className="bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 border-2 sm:border-4 border-black font-black uppercase rotate-3 text-xs sm:text-sm md:text-xl shadow-[4px_4px_0px_#FFF] hidden sm:block">
            Tech Stack
          </div>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden border-y-4 border-black bg-white py-8 sm:py-12 rotate-[-2deg] shadow-neo-md w-[110%] -ml-[5%]">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap items-center gap-8 sm:gap-12 px-4 shrink-0"
        >
          {duplicatedSkills.map((skill, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 w-[300px] sm:w-[400px] border-2 sm:border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_#000] cursor-default ${skill.color} ${skill.textColor} ${skill.rotation} hover:rotate-0 hover:z-20 transition-transform`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4">
                <div className="bg-white text-black p-1.5 sm:p-2 border-2 sm:border-4 border-black transform -rotate-3 rounded-none">
                  {skill.icon}
                </div>
                <h3 className="font-black text-xl sm:text-2xl uppercase tracking-tighter">{skill.title}</h3>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 font-bold text-base sm:text-lg whitespace-normal">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start leading-snug">
                    <Star className={`h-4 w-4 sm:h-5 sm:w-5 mt-1 shrink-0 ${skill.textColor === 'text-white' ? 'fill-white' : 'fill-black'}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
