"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "Soukify",
    subtitle: "Multi-Vendor B2B Marketplace | PFE 2025 at Awel",
    description:
      "Full-featured B2B multi-vendor marketplace with 37 database entities, real-time SignalR chat, quote-to-invoice workflows, commission tracking, and smart product recommendations.",
    features: [
      "Multi-vendor architecture with enterprise hierarchy",
      "Real-time chat with SignalR (product-specific conversations)",
      "Quote (Devis) to Invoice (Facture) workflow with PDF generation",
      "Bank transfer approval system with admin dashboard",
      "Commission tracking per product/enterprise",
      "Smart filtering with recommendation algorithm",
    ],
    technologies: [
      "ASP.NET Core 8",
      "Vue.js 3",
      "TypeScript",
      "PostgreSQL",
      "SignalR",
      "Capacitor",
    ],
    github: "https://github.com/CodeBySouhaib",
    logo: "/soukify.png",
    featured: true,
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Cross-platform chat app with instant messaging and presence detection using React Native and ASP.NET Core SignalR.",
    technologies: ["React Native", "ASP.NET Core", "SignalR", "Real-time"],
    github: "https://github.com/CodeBySouhaib",
  },
  {
    title: "Flutter PDF Manager",
    description:
      "Mobile application for scanning documents, converting to PDF, and managing files with cloud synchronization.",
    technologies: ["Flutter", "Dart", "Document Management", "Cross-Platform"],
    github: "https://github.com/CodeBySouhaib",
  },
  {
    title: "Vue.js Task Manager",
    description:
      "Full-featured task management application with JWT authentication, real-time updates, and persistent storage.",
    technologies: ["Vue.js 3", "JWT Auth", "Pinia", "Task Management"],
    github: "https://github.com/CodeBySouhaib",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#0d0d0d]">
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
            Projects
            <span className="text-[#3B82F6] font-mono">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto rounded-full" />
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden card-hover">
              <div className="p-6 sm:p-8">
                {/* Featured badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm text-yellow-500 font-medium">
                    Featured Project
                  </span>
                </div>

                {/* Project Logo and Title */}
                <div className="flex items-center gap-4 mb-4">
                  {featuredProject.logo && (
                    <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded-xl p-2">
                      <Image
                        src={featuredProject.logo}
                        alt={`${featuredProject.title} logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-[#e5e5e5]">
                      {featuredProject.title}
                    </h3>
                    <p className="text-[#3B82F6] text-sm">
                      {featuredProject.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-[#737373] mb-6">{featuredProject.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#e5e5e5] mb-3">
                    Key Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {featuredProject.features?.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#737373]"
                      >
                        <span className="text-[#3B82F6]">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#262626] rounded-lg text-sm text-[#737373] cursor-default">
                    <Github size={16} />
                    <span>Private Repo</span>
                    <span className="text-xs text-[#525252]">• Contact for access</span>
                  </div>
                  <a
                    href="/blog/building-ecommerce-platform"
                    className="flex items-center gap-2 px-4 py-2 bg-[#3B82F6] text-white rounded-lg text-sm hover:bg-[#2563EB] transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    Read Case Study
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-[#171717] border border-[#262626] rounded-xl p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-[#e5e5e5] group-hover:text-[#3B82F6] transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#3B82F6] transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="text-[#737373] text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#0a0a0a] border border-[#262626] rounded text-xs text-[#737373]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/CodeBySouhaib?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#3B82F6] hover:underline"
          >
            View all projects on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
