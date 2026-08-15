import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import MotionProvider from "@/components/MotionProvider";
import DevOgWarning from "@/components/DevOgWarning";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Souhaib Harrabi | Full Stack & Mobile Developer";
const description =
  "Full Stack Developer specializing in Flutter, Supabase, ASP.NET Core, and Vue.js. Building CrowdAnswer — a social Q&A mobile app. Open to roles in Tunis & remote.";

export const metadata: Metadata = {
  metadataBase: new URL("https://harrabiportfolio.vercel.app"),
  title,
  description,
  keywords: [
    "Full Stack Developer",
    "ASP.NET Core",
    "Vue.js",
    "React",
    "TypeScript",
    "Tunis",
    "Tunisia",
    "Flutter",
    "Supabase",
    "CrowdAnswer",
    "GetX",
    "PostgreSQL",
    "mobile developer",
  ],
  authors: [{ name: "Souhaib Harrabi" }],
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://harrabiportfolio.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Souhaib Harrabi \u2013 Full Stack & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <MotionProvider>
          <Navigation />
          <BackToTop />
          {children}
        </MotionProvider>
        <DevOgWarning />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
