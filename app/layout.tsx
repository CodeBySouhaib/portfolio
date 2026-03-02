import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Souhaib Harrabi | Full Stack Developer",
  description: "Full Stack Developer specializing in ASP.NET Core, Vue.js, React, and modern web technologies. Building secure, scalable applications.",
  keywords: ["Full Stack Developer", "ASP.NET Core", "Vue.js", "React", "TypeScript", "Tunisia"],
  authors: [{ name: "Souhaib Harrabi" }],
  openGraph: {
    title: "Souhaib Harrabi | Full Stack Developer",
    description: "Full Stack Developer specializing in ASP.NET Core, Vue.js, React, and modern web technologies.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#e5e5e5]`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
