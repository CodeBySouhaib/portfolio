"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { useRef } from "react";
import {
  Send,
  Mail,
  Github,
  Linkedin,
  Globe,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harrabisouhaib@gmail.com",
    href: "mailto:harrabisouhaib@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@CodeBySouhaib",
    href: "https://github.com/CodeBySouhaib",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Souhaib Harrabi",
    href: "https://www.linkedin.com/in/harrabisouhaib",
    external: true,
  },
  {
    icon: Globe,
    label: "Availability",
    value: "Open to remote roles",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5 })}
          className="text-center mb-20"
        >
          <p className="editorial-label mb-3">Contact</p>
          <h2 className="editorial-heading text-3xl sm:text-4xl text-foreground mb-5">
            Let&apos;s Work Together
          </h2>
          <div className="editorial-divider mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={getTransition(reduceMotion, {
              duration: 0.5,
              delay: 0.2,
            })}
          >
            <div className="border border-border rounded-xl p-6 sm:p-8 box-hover" style={{ background: 'var(--card-gradient)' }}>
              <p className="text-muted text-lg mb-6">
                Have a project in mind or just want to chat? Feel free to reach
                out! I&apos;m available via email or through the form, and I
                typically respond within 24 hours.
              </p>

              <ul className="space-y-0 divide-y divide-subtle-border">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const node = (
                  <>
                    <div className="w-6 h-6 flex items-center justify-center text-accent">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted">
                        {item.label}
                      </p>
                      <p className="text-foreground mt-0.5">{item.value}</p>
                    </div>
                  </>
                );

                return (
                  <li key={item.label} className="py-5 first:pt-0">
                    <div className="flex items-center gap-4">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 group"
                        >
                          {node}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{node}</div>
                      )}
                    </div>
                  </li>
                );
              })}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={getTransition(reduceMotion, {
              duration: 0.5,
              delay: 0.4,
            })}
            className="border border-border rounded-xl p-6 sm:p-8 box-hover"
            style={{ background: 'var(--card-gradient)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-muted mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pb-2 text-foreground placeholder-subtle border-b border-border focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pb-2 text-foreground placeholder-subtle border-b border-border focus:border-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono uppercase tracking-wider text-muted mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full pb-2 text-foreground placeholder-subtle border-b border-border focus:border-accent focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full pb-2 text-foreground placeholder-subtle border-b border-border focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={getTransition(reduceMotion, { duration: 0.3 })}
                  className="flex items-center gap-2 text-success"
                >
                  <CheckCircle size={18} />
                  <span className="text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={getTransition(reduceMotion, { duration: 0.3 })}
                  className="flex items-center gap-2 text-error"
                >
                  <AlertCircle size={18} />
                  <span className="text-sm">{errorMessage}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-glow w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all duration-200 rounded-lg"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
              <p className="text-center text-sm text-faint">
                Or email me directly at{" "}
                <a
                  href="mailto:harrabisouhaib@gmail.com"
                  className="text-muted hover:text-accent transition-colors underline underline-offset-2"
                >
                  harrabisouhaib@gmail.com
                </a>
              </p>
             </form>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
