"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master's Degree in Computer Science",
    institution: "Higher Institute of Technological Studies of Sidi Bouzid",
    period: "September 2025 – June 2027",
    status: "In Progress",
    description:
      "Pursuing advanced studies with focus on software engineering, cloud technologies, and distributed systems.",
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Higher Institute of Technological Studies of Djerba",
    period: "September 2022 – September 2025",
    status: "Completed",
    description:
      "Comprehensive program in information technologies and computer science. Capstone project: full-stack e-commerce platform with ASP.NET Core, Vue.js 3, PostgreSQL, and Docker.",
  },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "French", level: "Professional" },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24">
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
            Education
            <span className="text-[#3B82F6] font-mono">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Cards */}
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#171717] border border-[#262626] rounded-xl p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#3B82F6]/10 rounded-lg shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold text-[#e5e5e5]">
                        {edu.degree}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium shrink-0 ${
                          edu.status === "In Progress"
                            ? "bg-green-500/10 text-green-400 border border-green-500/30"
                            : "bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/30"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-[#3B82F6] text-sm mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-[#737373] text-sm mb-3">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <p className="text-[#737373] text-sm">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#171717] border border-[#262626] rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-[#e5e5e5] mb-4 font-mono">
                {`// Languages`}
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-[#e5e5e5]">{lang.name}</span>
                    <span className="text-[#737373] text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#171717] border border-[#262626] rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-[#e5e5e5] mb-4 font-mono">
                {`// Hobbies`}
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-[#0a0a0a] rounded-lg border border-[#262626]">
                  <p className="text-[#e5e5e5] font-medium mb-1">Muay Thai</p>
                  <p className="text-[#737373] text-sm">
                    Training regularly to develop discipline, mental toughness, and
                    strategic mindset.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2026 Goals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[#171717] border border-[#262626] rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-[#e5e5e5] mb-4 font-mono">
                {`// 2026 Goals`}
              </h3>
              <ul className="space-y-2">
                {[
                  "Contribute to open-source",
                  "Land a software engineering role",
                  "Learn AWS/Azure",
                  "Master microservices",
                ].map((goal, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#737373] text-sm">
                    <span className="w-5 h-5 bg-[#3B82F6]/10 rounded flex items-center justify-center text-[#3B82F6] text-xs font-bold">
                      {i + 1}
                    </span>
                    {goal}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
