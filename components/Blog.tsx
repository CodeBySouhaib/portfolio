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

  const displayedPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5 })}
          className="text-center mb-16"
        >
          <p className="editorial-label mb-3">Blog</p>
          <h2 className="editorial-heading text-3xl sm:text-4xl text-foreground mb-5">
            Latest Posts
          </h2>
          <div className="editorial-divider mx-auto" />
        </motion.div>

        {displayedPosts.length > 0 ? (
          <>
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
                  className="bg-surface border border-border rounded-lg overflow-hidden box-hover"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 border border-border rounded text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted">
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
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {posts.length > 3 && (
              <motion.div
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.5 })}
                className="text-center mt-12"
              >
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-foreground hover:border-muted hover:bg-surface active:scale-95 transition-all duration-200"
                >
                  View all posts
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.2 })}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 mx-auto text-dim mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Coming Soon
            </h3>
            <p className="text-muted">
              I&apos;m working on some articles. Stay tuned!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
