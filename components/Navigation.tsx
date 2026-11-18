"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home", isHash: true },
  { href: "#about", label: "About", isHash: true },
  { href: "#projects", label: "Projects", isHash: true },
  { href: "#experience", label: "Experience", isHash: true },
  { href: "#skills", label: "Skills", isHash: true },
  { href: "#education", label: "Education", isHash: true },
  { href: "/blog", label: "Blog", isHash: false },
  { href: "#contact", label: "Contact", isHash: true },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={reduceMotion ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={getTransition(reduceMotion, { duration: 0.35 })}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/60 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_-12px_rgba(52,211,153,0.22)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="font-mono text-lg font-bold tracking-tight">
              <span className="text-[var(--accent-text)] [text-shadow:0_0_12px_rgba(52,211,153,0.8)]">&lt;</span>
              Souhaib
              <span className="text-[var(--accent-text)] [text-shadow:0_0_12px_rgba(52,211,153,0.8)]">/&gt;</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={isHome || !item.isHash ? item.href : `/${item.href}`}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <span
                      aria-hidden
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[#34D399] to-[#22D3EE] shadow-[0_0_10px_rgba(52,211,153,0.9)]"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -20 }}
            transition={getTransition(reduceMotion, { duration: 0.2 })}
            className="fixed inset-0 z-40 md:hidden pt-16 bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-1 p-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={isHome || !item.isHash ? item.href : `/${item.href}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={getTransition(reduceMotion, { delay: index * 0.05 })}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-center px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-foreground"
                      : "text-muted hover:text-foreground hover:bg-background"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
