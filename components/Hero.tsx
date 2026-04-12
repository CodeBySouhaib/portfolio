"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { Github, Linkedin, Mail, MapPin, Briefcase, Download } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import Terminal from "./Terminal";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 via-transparent to-transparent" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center">
          {/* Terminal-style intro */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduceMotion, { duration: 0.5 })}
            className="inline-block mb-6"
          >
            <div className="bg-[#171717] border border-[#262626] rounded-lg px-4 py-2 font-mono text-sm">
              <span className="text-[#737373]">$</span>{" "}
              <span className="text-[#3B82F6]">whoami</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.1 })}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="glitch" data-text="Souhaib">Souhaib</span>{" "}
            <span className="glitch gradient-text" data-text="Harrabi">Harrabi</span>
          </motion.h1>

          {/* Title with typing effect */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.2 })}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="text-xl sm:text-2xl text-[#737373] font-mono">
              &gt; Full Stack Developer
              <span className="animate-blink text-[#3B82F6]">_</span>
            </span>
          </motion.div>

          {/* Open to work badge */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.3 })}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Briefcase size={16} />
            Open to Work
          </motion.div>

          {/* Description */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.4 })}
            className="max-w-2xl mx-auto text-[#737373] text-lg mb-8 leading-relaxed"
          >
            Building secure, scalable web and mobile applications using Flutter, Supabase,
            ASP.NET Core, and Vue.js. Passionate about clean architecture, real-time features,
            and shipping products that work.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.5 })}
            className="flex items-center justify-center gap-2 text-[#737373] mb-8"
          >
            <MapPin size={18} />
            <span>Dubai, UAE</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.6 })}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://github.com/CodeBySouhaib"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#171717] border border-[#262626] rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/harrabisouhaib"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#171717] border border-[#262626] rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:harrabisouhaib@gmail.com"
              className="p-3 bg-[#171717] border border-[#262626] rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.7 })}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-[#3B82F6] text-white font-medium rounded-lg hover:bg-[#2563eb] transition-colors glow"
            >
              View My Work
            </a>
            <a
              href="/Souhaib_Harrabi_CV.pdf"
              download="Souhaib_Harrabi_CV.pdf"
              className="px-8 py-3 bg-[#171717] border border-[#262626] font-medium rounded-lg hover:border-[#3B82F6] transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-[#171717] border border-[#262626] font-medium rounded-lg hover:border-[#3B82F6] transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Interactive Terminal */}
          <Terminal />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={getTransition(reduceMotion, { delay: 1, duration: 0.5 })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#262626] rounded-full flex justify-center">
          <motion.div
            animate={reduceMotion ? { y: 0 } : { y: [0, 12, 0] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { repeat: Infinity, duration: 1.5 }
            }
            className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
