import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Souhaib Harrabi`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#737373] hover:text-[#3B82F6] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e5e5e5] mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-[#737373]">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div
            className="text-[#b3b3b3] leading-relaxed
              [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:text-[#e5e5e5] [&>h1]:mt-8 [&>h1]:mb-4
              [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-[#e5e5e5] [&>h2]:mt-8 [&>h2]:mb-4
              [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-[#e5e5e5] [&>h3]:mt-6 [&>h3]:mb-3
              [&>p]:mb-4
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4
              [&>li]:mb-2
              [&>pre]:bg-[#171717] [&>pre]:border [&>pre]:border-[#262626] [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:overflow-x-auto [&>pre]:mb-4
              [&>code]:bg-[#171717] [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-[#3B82F6] [&>code]:text-sm
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#3B82F6] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-[#737373]
              [&>a]:text-[#3B82F6] [&>a]:underline [&>a]:hover:no-underline
              [&>hr]:border-[#262626] [&>hr]:my-8"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </div>

        <p className="mt-10 pt-8 border-t border-[#262626] text-xs text-[#525252] text-center">
          Last edit: April 2, 2026 · Today: April 2, 2026
        </p>
      </article>
    </main>
  );
}

// Simple markdown to HTML converter for basic formatting
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    // Code blocks (support CRLF from Windows)
    .replace(/```(\w+)?\r?\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Images - match ![alt](url) format
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="rounded-lg mb-4" loading="lazy" />')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Gallery images with title (![title](path))
    .replace(/!\[([^\]]+)\]\(([^)]+)\)<!--gallery-->/g, '<div class="gallery-item"><img src="$2" alt="$1" /><p class="text-sm text-gray-500 mt-1">$1</p></div>')
    // Unordered lists
    .replace(/^\- (.*$)/gm, "<li>$1</li>")
    // Ordered lists
    .replace(/^\d+\. (.*$)/gm, "<li>$1</li>")
    // Paragraphs
    .replace(/\n\n/g, "</p><p>")
    // Wrap in paragraph
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith("<h") || match.startsWith("<pre") || match.startsWith("<li") || match.startsWith("<ul") || match.startsWith("<ol")) {
        return match;
      }
      return `<p>${match}</p>`;
    })
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, "")
    .replace(/<p><h/g, "<h")
    .replace(/<\/h(\d)><\/p>/g, "</h$1>")
    .replace(/<p><pre/g, "<pre")
    .replace(/<\/pre><\/p>/g, "</pre>")
    .replace(/<p><li/g, "<li")
    .replace(/<\/li><\/p>/g, "</li>");
}
