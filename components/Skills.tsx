"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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

  return (
    <section id="skills" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#3B82F6] font-mono">&lt;</span>
            Skills
            <span className="text-[#3B82F6] font-mono">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-[#171717] border border-[#262626] rounded-xl p-6 card-hover"
            >
              <h3 className="text-lg font-semibold mb-4 text-[#3B82F6] font-mono">
                {`// ${category.title}`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#0a0a0a] border border-[#262626] rounded-lg text-sm text-[#e5e5e5] hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#737373] mb-4">Primary Focus</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["ASP.NET Core", "Vue.js 3", "PostgreSQL", "Docker"].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] rounded-lg font-medium"
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
