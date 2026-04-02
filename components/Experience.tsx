"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "PFE Intern (Projet de Fin d'Études)",
    company: "Awel",
    location: "Djerba, Tunisia",
    period: "January 2025 – June 2025",
    description: [
      "Built Soukify, a multi-vendor e-commerce platform with 70% backend and 30% frontend development focus",
      "Implemented real-time features using SignalR for live notifications, chat, and inventory updates",
      "Developed comprehensive modules: product catalog, vendor management, order processing, and JWT/RBAC authentication",
      "Conducted extensive integration testing and manual QA to identify edge cases and missing features",
    ],
    technologies: ["ASP.NET Core 8", "Vue.js 3", "TypeScript", "SignalR", "PostgreSQL", "JWT", "Docker"],
  },
  {
    title: "Backend Developer Intern",
    company: "Bank Zitouna",
    location: "Tunis, Tunisia",
    period: "January 2024 – February 2024",
    description: [
      "Developed a PHP-based money transfer platform, handling secure transactions and user data management",
      "Implemented MySQL database schemas for efficient storage and retrieval of financial records",
      "Collaborated with the team to integrate backend logic, gaining exposure to real-world agile development practices",
    ],
    technologies: ["PHP", "MySQL", "REST API", "Agile"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Tunisie Télécom",
    location: "Tunis, Tunisia",
    period: "January 2023 – February 2023",
    description: [
      "Built a Vue.js application for user account creation, incorporating JWT authentication for secure session management",
      "Enhanced UI/UX elements using modern frontend practices, resulting in an intuitive interface for end-users",
      "Worked on task management features, improving workflow efficiency through practical project iterations",
    ],
    technologies: ["Vue.js", "JWT", "JavaScript", "CSS"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5 })}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#3B82F6] font-mono">&lt;</span>
            Experience
            <span className="text-[#3B82F6] font-mono">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#262626] -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={getTransition(reduceMotion, {
                  duration: 0.5,
                  delay: index * 0.2,
                })}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`hidden md:block absolute top-8 w-4 h-4 bg-[#3B82F6] rounded-full border-4 border-[#0a0a0a] ${
                    index % 2 === 0 ? "-right-2" : "-left-2"
                  }`}
                />

                <div className="bg-[#171717] border border-[#262626] rounded-xl p-6 card-hover">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#e5e5e5] mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#737373]">
                      <span className="flex items-center gap-1 text-[#3B82F6]">
                        <Building2 size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#737373] text-sm">
                        <span className="text-[#3B82F6] mt-1">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#0a0a0a] border border-[#262626] rounded text-xs text-[#737373]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
