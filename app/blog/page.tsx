import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog | Souhaib Harrabi",
  description: "Technical articles about web development, ASP.NET Core, Vue.js, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted hover:text-subtle-text transition-colors mb-8 text-sm tracking-widest uppercase"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
          <span className="block text-xs tracking-[0.3em] text-faint uppercase mb-3">
            Writing
          </span>
          <h1 className="text-6xl font-light text-foreground tracking-tight">
            Blog
          </h1>
        </div>

        {/* Posts List */}
        {posts.length > 0 ? (
          <div>
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="py-8 border-b border-border last:border-b-0"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-muted border border-border px-2 py-0.5 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-2xl font-normal text-foreground mb-3 tracking-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted leading-relaxed mb-4 font-light">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-faint">
                    <span className="flex items-center gap-1.5 text-xs tracking-wide">
                      <Calendar size={13} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-dim">|</span>
                    <span className="flex items-center gap-1.5 text-xs tracking-wide">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-faint font-light">No posts yet. Check back soon.</p>
          </div>
        )}
      </div>
    </main>
  );
}
