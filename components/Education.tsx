"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master's Degree — IAM Ingénierie des Applications Mobiles",
    institution: "Higher Institute of Technological Studies of Sidi Bouzid",
    period: "September 2025 – June 2027",
    status: "In Progress",
    description:
      "2-year program. Completed first year with moyenne 16 — top 1 of the class. Focus: software engineering, cloud technologies, and distributed systems.",
  },
  {
    degree: "Bachelor's Degree — DSI Développement des Systèmes d'Information",
    institution: "Higher Institute of Technological Studies of Djerba",
    period: "September 2022 – September 2025",
    status: "Completed",
    description:
      "Comprehensive program in information technologies and computer science. Capstone project: full-stack e-commerce platform with ASP.NET Core, Vue.js 3, PostgreSQL, and Docker.",
  },
  {
    degree: "Baccalauréat Informatique",
    institution: "Lycée Mixte de Sidi Bouzid",
    period: "2021 – 2022",
    status: "Completed",
    description:
      "High school diploma specializing in Computer Science. Foundation in programming, algorithms, and computer systems.",
  },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Intermediate" },
  { name: "French", level: "Intermediate" },
];

const goals = [
  "Get rich or debug trying 💰",
  "Contribute to open-source",
  "Land a software engineering role",
  "Learn AWS/Azure",
  "Master microservices",
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="education" className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5 })}
          className="text-center mb-16"
        >
          <p className="editorial-label mb-3">Education</p>
          <h2 className="editorial-heading text-3xl sm:text-4xl text-foreground mb-5">
            Education
          </h2>
          <div className="editorial-divider mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={getTransition(reduceMotion, {
                    duration: 0.5,
                    delay: index * 0.2,
                  })}
                  className="border border-border rounded-lg p-5 box-hover"
                  style={{ background: 'var(--card-gradient)' }}
                >
                  <div className="flex items-start gap-4">
                    <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        <span className="px-2 py-1 border border-border text-muted text-xs font-mono shrink-0">
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-accent text-sm mt-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-muted text-sm mt-1">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                      <p className="text-muted text-sm mt-2">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                  {index < education.length - 1 && (
                    <div className="border-t border-subtle-border mt-4" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Languages */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={getTransition(reduceMotion, {
                duration: 0.5,
                delay: 0.4,
              })}
              className="border border-border rounded-lg p-5 box-hover"
              style={{ background: 'var(--card-gradient)' }}
            >
              <p className="editorial-label mb-3">{'// Languages'}</p>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between">
                    <span className="text-foreground">{lang.name}</span>
                    <span className="font-mono text-accent">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hobbies */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={getTransition(reduceMotion, {
                duration: 0.5,
                delay: 0.5,
              })}
              className="border border-border rounded-lg p-5 box-hover"
              style={{ background: 'var(--card-gradient)' }}
            >
              <p className="editorial-label mb-3">{'// Hobbies'}</p>
              <div className="space-y-2">
                <div>
                  <p className="text-foreground font-medium">Muay Thai</p>
                  <p className="text-muted text-sm">
                    Training regularly to develop discipline, mental toughness, and
                    strategic mindset.
                  </p>
                </div>
                <div>
                  <p className="text-foreground font-medium">Musculation</p>
                  <p className="text-muted text-sm">
                    Gym & weight training to build strength, endurance, and maintain
                    a healthy lifestyle.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2026 Goals */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={getTransition(reduceMotion, {
                duration: 0.5,
                delay: 0.6,
              })}
              className="border border-border rounded-lg p-5 box-hover"
              style={{ background: 'var(--card-gradient)' }}
            >
              <p className="editorial-label mb-3">{'// 2026 Goals'}</p>
              <ol className="space-y-2">
                {goals.map((goal, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-foreground"
                  >
                    <span className="font-mono text-accent">{i + 1}.</span>
                    {goal}
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
