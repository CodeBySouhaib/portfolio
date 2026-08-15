"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      // Show when halfway down the viewport
      setIsVisible(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <motion.button
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-40 p-3 bg-surface border border-border rounded-lg text-muted hover:text-foreground hover:border-accent hover:bg-background active:scale-95 transition-all duration-200 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}
