import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

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
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#737373] hover:text-[#3B82F6] transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#3B82F6] font-mono">&lt;</span>
            Blog
            <span className="text-[#3B82F6] font-mono">/&gt;</span>
          </h1>
          <p className="text-[#737373]">
            Thoughts on code, tech, and building things
          </p>
        </div>

        {/* Posts List */}
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#171717] border border-[#262626] rounded-xl p-6 hover:border-[#3B82F6]/50 transition-colors group"
              >
                <Link href={`/blog/${post.slug}`}>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#3B82F6]/10 text-[#3B82F6] rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-[#e5e5e5] mb-2 group-hover:text-[#3B82F6] transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[#737373] mb-4">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-[#737373]">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#737373]">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}
