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
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors mb-12 tracking-wide uppercase"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted tracking-widest uppercase border-b border-border pb-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05] mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-muted tracking-wide uppercase">
            <span className="flex items-center gap-2">
              <Calendar size={12} strokeWidth={1.5} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="w-px h-3 bg-border" aria-hidden="true" />
            <span className="flex items-center gap-2">
              <Clock size={12} strokeWidth={1.5} />
              {post.readTime}
            </span>
          </div>
        </header>

        <div
          className="text-content leading-[1.8] text-[1.0625rem]
            [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-foreground [&>h1]:mt-12 [&>h1]:mb-4 [&>h1]:tracking-tight [&>h1]:leading-tight
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-3 [&>h2]:tracking-tight [&>h2]:leading-tight
            [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:tracking-tight
            [&>p]:mb-5
            [&>ul]:list-none [&>ul]:pl-0 [&>ul]:mb-5 [&>ul]:space-y-2
            [&>ol]:list-none [&>ol]:pl-0 [&>ol]:mb-5 [&>ol]:space-y-2
            [&>li]:relative [&>li]:pl-5 [&>li]:before:content-['\2013\00A0'] [&>li]:before:text-muted
            [&>ol>li]:before:content-['counter(list-item)'] [&>ol>li]:before:counter-increment-list-item [&>ol>li]:before:font-mono [&>ol>li]:before:text-xs [&>ol>li]:before:text-muted [&>ol>li]:before:w-4 [&>ol>li]:before:mr-2
            [&>pre]:bg-transparent [&>pre]:border [&>pre]:border-border [&>pre]:rounded-lg [&>pre]:p-5 [&>pre]:overflow-x-auto [&>pre]:mb-5
            [&>code]:bg-transparent [&>code]:text-foreground [&>code]:text-sm [&>pre>code]:text-content
            [&>blockquote]:border-l-2 [&>blockquote]:border-border [&>blockquote]:pl-4 [&>blockquote]:text-muted [&>blockquote]:not-italic [&>blockquote]:mb-5
            [&>a]:text-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a]:decoration-accent [&>a]:hover:decoration-foreground
            [&>hr]:border-border [&>hr]:my-10
            [&>img]:rounded-lg [&>img]:mb-5"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />
      </article>
    </main>
  );
}

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
