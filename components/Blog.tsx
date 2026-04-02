"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
}

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  // Show only latest 3 posts on homepage
  const displayedPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-[#0d0d0d]">
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
            Blog
            <span className="text-[#3B82F6] font-mono">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto rounded-full mb-4" />
          <p className="text-[#737373]">Thoughts on code, tech, and building things</p>
        </motion.div>

        {displayedPosts.length > 0 ? (
          <>
            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={getTransition(reduceMotion, {
                    duration: 0.5,
                    delay: index * 0.1,
                  })}
                  className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden card-hover group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-[#3B82F6]/10 text-[#3B82F6] rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-[#e5e5e5] mb-2 group-hover:text-[#3B82F6] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-[#737373] text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-[#737373]">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* View All Link */}
            {posts.length > 3 && (
              <motion.div
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.5 })}
                className="text-center mt-12"
              >
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#3B82F6] hover:underline"
                >
                  View all posts
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            )}
          </>
        ) : (
          /* Empty State */
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.2 })}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 mx-auto text-[#262626] mb-4" />
            <h3 className="text-xl font-bold text-[#e5e5e5] mb-2">
              Coming Soon
            </h3>
            <p className="text-[#737373]">
              I&apos;m working on some articles. Stay tuned!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
