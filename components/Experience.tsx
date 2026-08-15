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
    <section id="experience" className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5 })}
        >
          <span className="block text-xs font-mono uppercase tracking-widest text-muted mb-3">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Professional Background
          </h2>
          <div className="w-12 h-px bg-subtle" />
        </motion.div>

        <div className="relative border-l border-border ml-1 sm:ml-3 pl-8 sm:pl-12 mt-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(reduceMotion, {
                duration: 0.5,
                delay: index * 0.15,
              })}
              className="mb-16 last:mb-0"
            >
              <div className="rounded-lg border border-border p-6 sm:p-8 box-hover" style={{ background: 'var(--card-gradient)' }}>
                <div className="mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span className="text-subtle-text font-medium">{exp.company}</span>
                    <span className="text-dim">·</span>
                    <span className="flex items-center gap-1 text-muted">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                    <span className="text-dim">·</span>
                    <span className="flex items-center gap-1 text-muted font-mono text-xs">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-subtle-text text-sm leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted"
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
    </section>
  );
}
