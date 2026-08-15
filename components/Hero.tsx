"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { Github, Linkedin, Mail, MapPin, Briefcase, Download, ArrowRight } from "lucide-react";
import Terminal from "./Terminal";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-20"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--subtle) 1px, transparent 1px), linear-gradient(90deg, var(--subtle) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Minimal text content */}
          <div className="max-w-xl">
            {/* Role label */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(reduceMotion, { duration: 0.4 })}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-full text-xs font-mono uppercase tracking-widest text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.1 })}
              className="editorial-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[0.95]"
            >
              <span className="block text-foreground">Souhaib</span>
              <span className="block text-muted">Harrabi</span>
            </motion.h1>

            {/* One-liner */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.2 })}
              className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-md"
            >
              Full-stack developer building secure, scalable apps with Flutter, ASP.NET Core, and Vue.js.
            </motion.p>

            {/* Minimal CTAs */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.3 })}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover active:scale-95 transition-all duration-200 shadow-[0_0_15px_var(--accent-glow-soft)] hover:shadow-[0_0_25px_var(--accent-glow-strong)]"
              >
                View Projects
                <ArrowRight size={14} />
              </a>
              <a
                href="/Souhaib_Harrabi_CV.pdf"
                download="Souhaib_Harrabi_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium rounded-lg hover:border-muted hover:bg-surface active:scale-95 transition-all duration-200"
              >
                <Download size={14} />
                CV
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.4 })}
              className="flex items-center gap-2 text-muted text-sm font-mono"
            >
              <MapPin size={14} />
              <span>Tunis, Tunisia</span>
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduceMotion, { duration: 0.6, delay: 0.2 })}
            className="hidden lg:block"
          >
            <Terminal />
          </motion.div>
        </div>

        {/* Mobile Terminal */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.5 })}
          className="lg:hidden mt-12"
        >
          <Terminal />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={getTransition(reduceMotion, { delay: 1, duration: 0.5 })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-8 bg-border relative overflow-hidden">
          <motion.div
            animate={reduceMotion ? { y: 0 } : { y: [0, 16, 0] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            }
            className="absolute top-0 left-0 w-full h-3 bg-muted"
          />
        </div>
      </motion.div>
    </section>
  );
}
