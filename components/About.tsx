"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { useRef } from "react";
import { Code2, GitPullRequest, Calendar, Languages } from "lucide-react";

const stats = [
  { icon: Code2, value: "858", label: "GitHub Contributions" },
  { icon: GitPullRequest, value: "3x", label: "Pull Shark" },
  { icon: Calendar, value: "5", label: "Years Experience" },
  { icon: Languages, value: "3", label: "Languages" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 relative">
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
            About Me
            <span className="text-[#3B82F6] font-mono">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.2 })}
          >
            <div className="bg-[#171717] border border-[#262626] rounded-xl p-6 sm:p-8">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#262626]">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-[#737373] text-sm font-mono">about.md</span>
              </div>

              <div className="space-y-4 text-[#737373] leading-relaxed">
                <p>
                  <span className="text-[#3B82F6] font-mono">## </span>
                  <span className="text-[#e5e5e5]">Hey there!</span>
                </p>
                <p>
                  I&apos;m a <span className="text-[#e5e5e5]">full-stack developer</span> passionate 
                  about building secure, scalable web and mobile applications. Recent{" "}
                  <span className="text-[#e5e5e5]">Bachelor&apos;s graduate in Computer Science</span> from 
                  ISET Djerba (2025), currently pursuing my Master&apos;s degree.
                </p>
                <p>
                  I work primarily with <span className="text-[#3B82F6]">ASP.NET Core</span>,{" "}
                  <span className="text-[#3B82F6]">Vue.js 3</span>,{" "}
                  <span className="text-[#3B82F6]">Flutter</span>, and{" "}
                  <span className="text-[#3B82F6]">PostgreSQL</span>. My capstone project was a 
                  production-ready e-commerce platform featuring JWT/RBAC authentication, 
                  real-time SignalR chat, and Docker deployment.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me kicking pads at{" "}
                  <span className="text-[#e5e5e5]">Muay Thai</span> training — been at it for 
                  almost a year now. Some people do yoga, I prefer something with a bit more... impact.
                </p>
                <p className="font-mono text-sm">
                  <span className="text-[#737373]">// </span>
                  <span className="text-green-400">Coffee enthusiast & 3am debugger</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.4 })}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={getTransition(reduceMotion, {
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                })}
                className="bg-[#171717] border border-[#262626] rounded-xl p-6 text-center card-hover"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#3B82F6]" />
                <div className="text-3xl font-bold text-[#e5e5e5] mb-1">{stat.value}</div>
                <div className="text-sm text-[#737373]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
