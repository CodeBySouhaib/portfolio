"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { useRef } from "react";

// The stack I ship with, each tied to the project that proves it.
const coreStack = [
  { name: "Flutter", note: "CrowdAnswer" },
  { name: "ASP.NET Core", note: "Soukify · Pointage" },
  { name: "Vue.js 3", note: "Soukify · Pointage" },
  { name: "React + TypeScript", note: "DUO" },
  { name: "PostgreSQL", note: "Every project" },
  { name: "Supabase", note: "CrowdAnswer" },
];

const skillCategories = [
  { title: "Languages", skills: ["C#", "TypeScript", "JavaScript", "Dart", "PHP"] },
  {
    title: "Backend & APIs",
    skills: ["ASP.NET Core", "Entity Framework", "SignalR", "REST APIs", "JWT / RBAC", "Node.js"],
  },
  { title: "Frontend", skills: ["Vue.js 3", "Pinia", "React", "Next.js", "Tailwind CSS"] },
  { title: "Mobile", skills: ["Flutter", "GetX", "Capacitor"] },
  { title: "Data", skills: ["PostgreSQL", "Supabase (Realtime, RLS)", "Neon", "MySQL"] },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "GitHub Actions", "Vercel", "Cloudinary", "Git", "Postman", "Swagger"],
  },
];

const alsoWorkedWith = [
  "Kotlin (Jetpack Compose)",
  "React Native",
  "Java",
  "Spring Boot",
  "Python",
  "MongoDB",
  "Firebase",
  "Linux",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5 })}
          className="mb-14"
        >
          <p className="editorial-label mb-3">Expertise</p>
          <h2 className="editorial-heading text-4xl sm:text-5xl text-foreground">
            Skills
          </h2>
          <div className="editorial-divider mt-6" />
        </motion.div>

        {/* Core stack */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.1 })}
          className="mb-14"
        >
          <p className="text-sm text-muted mb-4">What I ship with</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {coreStack.map((s) => (
              <div
                key={s.name}
                className="box-hover rounded-xl border border-[rgba(var(--glow-primary),0.25)] p-5"
                style={{ background: "var(--card-gradient)" }}
              >
                <div className="text-lg font-bold text-foreground">{s.name}</div>
                <div className="mt-1 text-xs font-mono text-[var(--accent-text)]">{s.note}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Full toolbox */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(reduceMotion, {
                duration: 0.5,
                delay: 0.2 + categoryIndex * 0.06,
              })}
              className="border border-border rounded-xl p-5 box-hover"
              style={{ background: "var(--card-gradient)" }}
            >
              <p className="editorial-label mb-4">{category.title}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-md text-sm text-content"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Also worked with */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.6 })}
          className="mt-10 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-muted mb-3">
            Also worked with
          </p>
          <p className="text-sm text-muted">
            {alsoWorkedWith.join("  ·  ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
