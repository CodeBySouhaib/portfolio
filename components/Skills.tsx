"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "JavaScript", "TypeScript", "Dart", "PHP", "Python", "Java", "Kotlin"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "ASP.NET Core",
      "Entity Framework",
      "REST APIs",
      "JWT Auth",
      "RBAC",
      "SignalR",
      "Node.js",
      "Spring Boot",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "Vue.js 3",
      "React.js",
      "Next.js",
      "Pinia",
      "Tailwind CSS",
      "HTML5/CSS3",
    ],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "React Native", "Capacitor"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Neon", "MySQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Git/GitHub",
      "GitHub Actions",
      "Cloudinary",
      "Linux",
      "Postman",
      "Swagger",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5 })}
          className="mb-16"
        >
          <p className="editorial-label mb-3">Expertise</p>
          <h2 className="editorial-heading text-4xl sm:text-5xl text-foreground">
            Skills
          </h2>
          <div className="editorial-divider mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(reduceMotion, {
                duration: 0.5,
                delay: categoryIndex * 0.08,
              })}
              className="border border-border rounded-xl p-5 box-hover"
              style={{ background: 'var(--card-gradient)' }}
            >
              <p className="editorial-label mb-4">{category.title}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-surface border border-border rounded text-sm text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Primary Focus */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.5 })}
          className="mt-20"
        >
          <p className="editorial-label mb-4 text-center">Primary Focus</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["ASP.NET Core", "Vue.js 3", "PostgreSQL", "Docker"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-border rounded text-sm text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
