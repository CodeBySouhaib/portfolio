"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { Globe, Download, ArrowRight, Github, Linkedin } from "lucide-react";
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
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(var(--subtle) 1px, transparent 1px), linear-gradient(90deg, var(--subtle) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)",
        }}
      />
      {/* Hero glow orb behind the terminal */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--glow-secondary),0.35) 0%, rgba(var(--glow-primary),0.25) 40%, transparent 70%)",
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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-emerald-400/25 bg-emerald-400/[0.06] backdrop-blur-sm rounded-full text-xs font-mono uppercase tracking-widest text-emerald-200/90 shadow-[0_0_20px_-6px_rgba(52,211,153,0.6)]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_2px_rgba(74,222,128,0.8)]" />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="editorial-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[0.95]"
            >
              <span className="block text-glow-gradient pb-1">Souhaib</span>
              <span className="block text-glow-soft pb-2">Harrabi</span>
            </motion.h1>

            {/* One-liner */}
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-md"
            >
              Full-stack & mobile developer. I ship complete products solo with{" "}
              <span className="text-[var(--accent-text)]">Flutter</span>,{" "}
              <span className="text-[var(--accent-text)]">ASP.NET Core</span> and{" "}
              <span className="text-[var(--accent-text)]">Vue.js</span>.
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
                className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg active:scale-95 transition-all duration-200"
              >
                View Projects
                <ArrowRight size={14} />
              </a>
              <a
                href="/Souhaib_Harrabi_CV_2026.pdf"
                download="Souhaib_Harrabi_CV_2026.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 bg-white/[0.03] backdrop-blur-sm text-sm font-medium rounded-lg hover:border-[rgba(var(--glow-primary),0.6)] hover:bg-white/[0.06] hover:shadow-[0_0_24px_-6px_rgba(var(--glow-primary),0.6)] active:scale-95 transition-all duration-200"
              >
                <Download size={14} />
                CV
              </a>
              {[
                { href: "https://github.com/CodeBySouhaib", label: "GitHub profile", Icon: Github },
                { href: "https://www.linkedin.com/in/harrabisouhaib", label: "LinkedIn profile", Icon: Linkedin },
              ].map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-muted hover:text-foreground hover:border-[rgba(var(--glow-primary),0.6)] hover:shadow-[0_0_24px_-6px_rgba(var(--glow-primary),0.7)] active:scale-95 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.4 })}
              className="flex items-center gap-2 text-muted text-sm font-mono"
            >
              <Globe size={14} />
              <span>Open to remote roles</span>
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
