"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { getTransition } from "@/lib/motion";
import Image from "next/image";
import { Github, ExternalLink, Brain, Image as ImageIcon } from "lucide-react";

function CrowdAnswerLogoMark() {
  return (
    <div
      className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center"
      role="img"
      aria-label="CrowdAnswer logo"
    >
      <div
        className="absolute inset-0 rounded-full opacity-90"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(var(--project-accent-rgb), 0.18), rgba(var(--project-accent-rgb), 0.04) 45%, transparent 70%)",
        }}
      />
      <div
        className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-project-accent/35 bg-white/[0.06]"
        aria-hidden
      >
        <Brain className="h-9 w-9 text-white" strokeWidth={1.35} />
      </div>
    </div>
  );
}

const projects = [
  {
    title: "CrowdAnswer",
    subtitle: "Social Q&A mobile app · Built solo",
    description:
      "Post a question, the community answers, votes pick the best one. A full social platform built alone, from database to deployment.",
    metrics: ["50+ features", "215 commits", "8 sprints", "RLS on every table"],
    features: [
      "Email OTP, Google, magic link & biometric sign-in",
      "Real-time feed, DMs with read receipts, 15 notification types",
      "Vote-ranked answers, polls, reactions, @mentions",
      "Admin panel: reports, bans, content moderation",
    ],
    screenshot: "/projects/crowd.webp",
    technologies: [
      "Flutter",
      "Supabase",
      "GetX",
      "PostgreSQL",
      "Realtime",
      "Resend",
      "Vercel",
    ],
    github: "https://github.com/CodeBySouhaib",
    logoType: "crowdanswer",
    featured: true,
    featuredBadge: "Latest",
    liveUrl: "https://crowdanswer.vercel.app",
    caseStudyUrl: "/blog/crowdanswer-flutter-supabase",
    repoPrivate: true,
  },
  {
    title: "Soukify",
    subtitle: "Multi-Vendor B2B Marketplace | PFE 2025 at AWEL",
    description:
      "Full-featured B2B multi-vendor marketplace built from scratch as the only developer during my final-year internship.",
    metrics: ["33 DB entities", "3 dashboards", "Real-time SignalR", "1 developer"],
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
    caseStudyUrl: "/blog/building-ecommerce-platform",
    galleryUrl: "/gallery",
    repoPrivate: true,
  },
  {
    title: "DUO",
    subtitle: "Real-time task manager for couples",
    description:
      "Started as a Figma assignment, shipped as a production app instead.",
    metrics: ["Lighthouse 95+", "208 KB gzipped", "EN / FR / AR + RTL", "WCAG 2.1"],
    features: [
      "Create or join a duo with a 4-digit code",
      "Tasks for Me / Partner / Together, in-task comments",
      "Live presence and real-time notifications",
      "Dark/light mode synced to the system",
    ],
    technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Neon PostgreSQL", "Vercel"],
    github: "https://github.com/CodeBySouhaib/couples-task-manager",
    liveUrl: "https://duodo-fawn.vercel.app",
    screenshot: "/projects/duo.webp",
    featured: true,
  },
  {
    title: "Pointage",
    subtitle: "Smart attendance platform · Saboura internship",
    description:
      "Attendance and time-tracking platform built solo: QR/NFC check-in with duplicate-scan prevention, role-based dashboards for HR and team leads, CSV/PDF analytics and automated email summaries.",
    technologies: ["ASP.NET Core", "C#", "Entity Framework", "PostgreSQL", "Vue.js 3"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial Section Header */}
        <motion.div
          ref={ref}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5 })}
          className="text-center mb-16"
        >
          <p className="editorial-label mb-3">Projects</p>
          <h2 className="editorial-heading text-3xl sm:text-4xl text-foreground mb-5">
            Selected Work
          </h2>
          <div className="editorial-divider mx-auto" />
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((featuredProject, fi) => (
            <motion.div
              key={featuredProject.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(reduceMotion, {
                duration: 0.5,
                delay: 0.2 + fi * 0.12,
              })}
            >
              <div className="bg-surface border border-border rounded-xl overflow-hidden box-hover">
                <div
                  className={
                    "screenshot" in featuredProject && featuredProject.screenshot
                      ? "grid lg:grid-cols-[1fr_240px] gap-10 items-center p-6 sm:p-8"
                      : "p-6 sm:p-8"
                  }
                >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {"logoType" in featuredProject &&
                    featuredProject.logoType === "crowdanswer" ? (
                      <CrowdAnswerLogoMark />
                    ) : (
                      featuredProject.logo && (
                        <div
                          className={`relative w-16 h-16 flex-shrink-0 rounded-lg p-2 ${
                            featuredProject.logo.endsWith(".svg")
                              ? "bg-project-dark border border-project-accent/35"
                              : "bg-white"
                          }`}
                        >
                          <Image
                            src={featuredProject.logo}
                            alt={`${featuredProject.title} logo`}
                            fill
                            className="object-contain p-1"
                            unoptimized={featuredProject.logo.endsWith(".svg")}
                          />
                        </div>
                      )
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {featuredProject.title}
                      </h3>
                      <p className="text-muted text-sm font-mono">
                        {featuredProject.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-content text-base leading-relaxed mb-5">
                    {featuredProject.description}
                  </p>

                  {"metrics" in featuredProject && featuredProject.metrics && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.metrics.map((m) => (
                        <span
                          key={m}
                          className="px-3 py-1 rounded-full text-xs font-semibold text-[var(--accent-text)] border border-[rgba(var(--glow-primary),0.35)] bg-[rgba(var(--glow-primary),0.08)] shadow-[0_0_14px_-6px_rgba(var(--glow-primary),0.8)]"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mb-6">
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {featuredProject.features?.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent-text)] shadow-[0_0_6px_rgba(var(--glow-primary),0.9)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 border border-border rounded-md text-xs font-mono text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {"repoPrivate" in featuredProject &&
                    featuredProject.repoPrivate ? (
                      <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-muted cursor-default">
                        <Github size={16} />
                        <span>Private Repo</span>
                        <span className="text-xs text-faint">
                          • Contact for access
                        </span>
                      </div>
                    ) : (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-foreground hover:border-muted hover:bg-surface active:scale-95 transition-all duration-200"
                      >
                        <Github size={16} />
                        View on GitHub
                      </a>
                    )}
                    {"liveUrl" in featuredProject && featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold active:scale-95 transition-all duration-200"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {"caseStudyUrl" in featuredProject &&
                      featuredProject.caseStudyUrl && (
                        <a
                          href={featuredProject.caseStudyUrl}
                          className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-foreground hover:border-muted hover:bg-surface active:scale-95 transition-all duration-200"
                        >
                          <ExternalLink size={16} />
                          Read Case Study
                        </a>
                      )}
                    {featuredProject.galleryUrl && (
                      <a
                        href={featuredProject.galleryUrl}
                        className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-foreground hover:border-muted hover:bg-surface active:scale-95 transition-all duration-200"
                      >
                        <ImageIcon size={16} />
                        View Screenshots
                      </a>
                    )}
                  </div>
                </div>
                {"screenshot" in featuredProject && featuredProject.screenshot && (
                  <div className="hidden lg:flex justify-center">
                    <div className="relative w-[220px] rounded-[2.2rem] border border-white/15 bg-black p-2 shadow-[0_30px_60px_-20px_rgba(var(--glow-secondary),0.45),0_0_50px_-15px_rgba(var(--glow-primary),0.6)]">
                      <div className="relative aspect-[390/844] overflow-hidden rounded-[1.7rem]">
                        <Image
                          src={featuredProject.screenshot}
                          alt={`${featuredProject.title} app screenshot`}
                          fill
                          sizes="220px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={getTransition(reduceMotion, {
                duration: 0.5,
                delay: 0.3 + index * 0.1,
              })}
              className="bg-surface border border-border rounded-lg p-6 box-hover"
            >
              <div className="flex items-start justify-between mb-3 gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {"liveUrl" in project && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded-md hover:border-muted hover:bg-surface hover:text-foreground active:scale-95 transition-all duration-200"
                      title="Live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded-md hover:border-muted hover:bg-surface hover:text-foreground active:scale-95 transition-all duration-200"
                      title="Repository"
                    >
                      <Github size={18} />
                    </a>
                  ) : (
                    <span
                      className="px-2 py-1 border border-border rounded-md text-xs font-mono text-faint"
                      title="Private repository, ask me for a walkthrough"
                    >
                      Private repo
                    </span>
                  )}
                </div>
              </div>
              {"subtitle" in project && project.subtitle && (
                <p className="text-xs text-muted font-mono mb-2 -mt-1">
                  {project.subtitle}
                </p>
              )}
              <p className="text-muted text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 border border-border rounded-md text-xs font-mono text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {"caseStudyUrl" in project && project.caseStudyUrl && (
                <a
                  href={project.caseStudyUrl}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm text-muted hover:text-foreground transition-colors"
                >
                  Read case study
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.8 })}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/CodeBySouhaib?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
          >
            View all projects on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
