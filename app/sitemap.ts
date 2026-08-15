import type { MetadataRoute } from "next";

const base = "https://harrabiportfolio.vercel.app";

const paths = [
  "/",
  "/gallery",
  "/blog/building-ecommerce-platform",
  "/blog/react-vs-vue",
  "/blog/why-i-left-php",
  "/blog/crowdanswer-flutter-supabase",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
  }));
}