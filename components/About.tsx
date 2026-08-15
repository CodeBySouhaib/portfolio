"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { useRef } from "react";
import { Code2, GitPullRequest, Calendar, Languages, Zap, Rocket } from "lucide-react";

const stats = [
  { icon: Code2, value: "1183", label: "GitHub Contributions" },
  { icon: GitPullRequest, value: "3x", label: "Pull Shark" },
  { icon: Zap, value: "3x", label: "Quickdraw" },
  { icon: Rocket, value: "3x", label: "YOLO" },
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
          <p className="editorial-label mb-3">About</p>
          <h2 className="editorial-heading text-3xl sm:text-4xl text-foreground mb-5">
            About Me
          </h2>
          <div className="editorial-divider mx-auto" />
        </motion.div>

        {/* Two-column layout: bio on the left, stats on the right */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Text */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.2 })}
            className="border border-border rounded-xl p-6 sm:p-8 box-hover"
            style={{ background: 'var(--card-gradient)' }}
          >
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              Hey there! I&apos;m a full-stack developer passionate about building
              secure, scalable web and mobile applications. Recent Bachelor&apos;s
              graduate in Computer Science from ISET Djerba (2025), currently
              pursuing my Master&apos;s degree.
            </p>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              I work primarily with{" "}
              <span className="text-accent">ASP.NET Core</span>,{" "}
              <span className="text-accent">Vue.js 3</span>,{" "}
              <span className="text-accent">Flutter</span>, and{" "}
              <span className="text-accent">PostgreSQL</span>. My capstone
              project was a production-ready e-commerce platform featuring JWT/RBAC
              authentication, real-time SignalR chat, and Docker deployment.
            </p>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me kicking pads at{" "}
              <span className="text-foreground">Muay Thai</span> training — been at
              it for almost a year now. Some people do yoga, I prefer something
              with a bit more... impact.
            </p>
            <p className="text-sm italic text-muted">
              Coffee enthusiast & 3am debugger
            </p>
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
                className="border border-border rounded-xl p-6 text-center box-hover"
                style={{ background: 'var(--card-gradient)' }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
