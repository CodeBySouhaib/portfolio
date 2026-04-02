"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { getTransition } from "@/lib/motion";
import Image from "next/image";
import { Github, ExternalLink, Star, Brain, Image as ImageIcon } from "lucide-react";

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
            "radial-gradient(circle at 50% 40%, rgba(0, 199, 255, 0.18), rgba(0, 199, 255, 0.04) 45%, transparent 70%)",
        }}
      />
      <div
        className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#00C7FF]/35 bg-white/[0.06] shadow-[0_0_20px_rgba(0,199,255,0.12)]"
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
    <section id="projects" className="py-24 bg-[#0d0d0d]">
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
            Projects
            <span className="text-[#3B82F6] font-mono">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto rounded-full" />
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-12 mb-12">
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
              <div className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden card-hover ring-1 ring-white/[0.06] shadow-[0_0_40px_-12px_rgba(59,130,246,0.35)]">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                    <span className="text-sm text-yellow-500 font-medium">
                      Featured Project
                    </span>
                    {"featuredBadge" in featuredProject &&
                      featuredProject.featuredBadge && (
                        <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-[#00C7FF]/15 text-[#5ecfff] border border-[#00C7FF]/35">
                          {featuredProject.featuredBadge}
                        </span>
                      )}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    {"logoType" in featuredProject &&
                    featuredProject.logoType === "crowdanswer" ? (
                      <CrowdAnswerLogoMark />
                    ) : (
                      featuredProject.logo && (
                        <div
                          className={`relative w-16 h-16 flex-shrink-0 rounded-xl p-2 ${
                            featuredProject.logo.endsWith(".svg")
                              ? "bg-[#0B0D1A] border border-[#00C7FF]/35"
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
                      <h3 className="text-2xl font-bold text-[#e5e5e5]">
                        {featuredProject.title}
                      </h3>
                      <p className="text-[#3B82F6] text-sm">
                        {featuredProject.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#737373] mb-6">{featuredProject.description}</p>

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

                  <div className="flex flex-wrap gap-3">
                    {"repoPrivate" in featuredProject &&
                    featuredProject.repoPrivate ? (
                      <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#262626] rounded-lg text-sm text-[#737373] cursor-default">
                        <Github size={16} />
                        <span>Private Repo</span>
                        <span className="text-xs text-[#525252]">
                          • Contact for access
                        </span>
                      </div>
                    ) : (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#262626] rounded-lg text-sm text-[#e5e5e5] hover:border-[#3B82F6]/50 hover:text-[#3B82F6] transition-colors"
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
                        className="flex items-center gap-2 px-4 py-2 bg-[#3B82F6] text-white rounded-lg text-sm hover:bg-[#2563EB] transition-colors font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {"caseStudyUrl" in featuredProject &&
                      featuredProject.caseStudyUrl && (
                        <a
                          href={featuredProject.caseStudyUrl}
                          className="flex items-center gap-2 px-4 py-2 bg-[#171717] border border-[#3B82F6]/40 text-[#3B82F6] rounded-lg text-sm hover:bg-[#3B82F6]/10 transition-colors font-medium"
                        >
                          <ExternalLink size={16} />
                          Read Case Study
                        </a>
                      )}
                    {featuredProject.galleryUrl && (
                      <a
                        href={featuredProject.galleryUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-[#171717] border border-[#262626] text-[#737373] rounded-lg text-sm hover:text-[#e5e5e5] hover:border-[#3B82F6]/50 transition-colors font-medium"
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
              className="bg-[#171717] border border-[#262626] rounded-xl p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-3 gap-2">
                <h3 className="text-lg font-bold text-[#e5e5e5] group-hover:text-[#3B82F6] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {"liveUrl" in project && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-[#3B82F6] transition-colors"
                      title="Live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-[#3B82F6] transition-colors"
                    title="Repository"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              {"subtitle" in project && project.subtitle && (
                <p className="text-xs text-[#3B82F6] mb-2 -mt-1">
                  {project.subtitle}
                </p>
              )}
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
              {"caseStudyUrl" in project && project.caseStudyUrl && (
                <a
                  href={project.caseStudyUrl}
                  className="inline-flex items-center gap-1.5 mt-4 text-sm text-[#3B82F6] hover:underline"
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
