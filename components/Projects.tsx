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
    subtitle: "Mobile-first social Q&A · Flutter 3.41 · Supabase · MIT",
    description:
      "CrowdAnswer is a social platform where users post short questions or situations, the community responds with advice and opinions, and votes determine the best answer — Reddit meets Twitter, built for collective decision-making. PostgreSQL via Supabase spans five domains (users, content, engagement, social, moderation) with Row Level Security on every table; OTP email runs through Resend Edge Functions; feeds, DMs, and notifications use Supabase Realtime. Glassmorphism UI (frosted glass, neon accents, animated backgrounds), hosted on Vercel for web.",
    features: [
      "Authentication & accounts: email + 6-digit OTP (Resend), Google OAuth, magic link, biometric login (local_auth), guest read-only mode, password reset, 24h account-deletion grace, public/private profiles, full username history",
      "Content & publishing: status posts with images (jpg/png/gif/webp, 5 MB), nine categories, up to five tags with trending search, polls (2–10 options, single/multi-vote), edit tracking with is_edited, 500-character limit, background image uploads",
      "Comments & votes: 200-character comments, upvote/downvote scoring (upvotes − downvotes), TOP ANSWER badge on the top comment, @mentions of mutual followers with real-time dropdown filtering",
      "Social graph: follow/unfollow, follow requests for private profiles, bidirectional block filtering (feed, comments, search, mentions), six reaction types with long-press picker, bookmarks, profile views (one per visitor per day)",
      "Messaging & realtime: 1-to-1 DMs with Supabase Realtime, message requests, unread counts, typing indicator, image attachments; followed-user posts push to feeds in realtime",
      "Notifications & admin: fifteen notification types (comments, replies, top answer, follows, mentions, moderation, etc.); admin panel with dashboard, user ban/unban and promotion, reports workflow, content hide/restore with owner notifications",
    ],
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
    caseStudyUrl: "/blog/building-ecommerce-platform",
    galleryUrl: "/gallery",
    repoPrivate: true,
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Cross-platform chat app with instant messaging and presence detection using React Native and ASP.NET Core SignalR.",
    technologies: ["React Native", "ASP.NET Core", "SignalR", "Real-time"],
    github: "https://github.com/CodeBySouhaib/realtime-chat",
  },
  {
    title: "Flutter PDF Manager",
    description:
      "Mobile application for scanning documents, converting to PDF, and managing files with cloud synchronization.",
    technologies: ["Flutter", "Dart", "Document Management", "Cross-Platform"],
    // TODO: replace with public repo URL when available
    github: "https://github.com/CodeBySouhaib",
  },
  {
    title: "Vue.js Task Manager",
    description:
      "Full-featured task management application with JWT authentication, real-time updates, and persistent storage.",
    technologies: ["Vue.js 3", "JWT Auth", "Pinia", "Task Management"],
    // TODO: replace with public repo URL when available
    github: "https://github.com/CodeBySouhaib",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 bg-background">
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
              <div className="bg-surface border border-border rounded-lg overflow-hidden box-hover">
                <div className="p-6 sm:p-8">
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
                  <p className="text-muted mb-6">
                    {featuredProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {featuredProject.features?.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="text-faint">•</span>
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
                        className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md text-sm hover:bg-accent-hover active:scale-95 transition-all duration-200 shadow-[0_0_15px_var(--accent-glow-medium)] hover:shadow-[0_0_25px_var(--accent-glow-stronger)]"
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded-md hover:border-muted hover:bg-surface hover:text-foreground active:scale-95 transition-all duration-200"
                    title="Repository"
                  >
                    <Github size={18} />
                  </a>
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
