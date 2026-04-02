"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { getTransition } from "@/lib/motion";
import { useRef } from "react";
import { Send, Mail, Github, Linkedin, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
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
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={getTransition(reduceMotion, { duration: 0.5 })}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#3B82F6] font-mono">&lt;</span>
            Contact
            <span className="text-[#3B82F6] font-mono">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto rounded-full mb-4" />
          <p className="text-[#737373] max-w-md mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.2 })}
          >
            <div className="bg-[#171717] border border-[#262626] rounded-xl p-6 sm:p-8 h-full">
              <h3 className="text-xl font-bold text-[#e5e5e5] mb-6">
                Let&apos;s Work Together
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:harrabisouhaib@gmail.com"
                  className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-[#262626] hover:border-[#3B82F6] transition-colors group"
                >
                  <div className="p-3 bg-[#3B82F6]/10 rounded-lg">
                    <Mail className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#737373]">Email</p>
                    <p className="text-[#e5e5e5] group-hover:text-[#3B82F6] transition-colors">
                      harrabisouhaib@gmail.com
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/CodeBySouhaib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-[#262626] hover:border-[#3B82F6] transition-colors group"
                >
                  <div className="p-3 bg-[#3B82F6]/10 rounded-lg">
                    <Github className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#737373]">GitHub</p>
                    <p className="text-[#e5e5e5] group-hover:text-[#3B82F6] transition-colors">
                      @CodeBySouhaib
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/harrabisouhaib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-[#262626] hover:border-[#3B82F6] transition-colors group"
                >
                  <div className="p-3 bg-[#3B82F6]/10 rounded-lg">
                    <Linkedin className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#737373]">LinkedIn</p>
                    <p className="text-[#e5e5e5] group-hover:text-[#3B82F6] transition-colors">
                      Souhaib Harrabi
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-[#262626]">
                  <div className="p-3 bg-[#3B82F6]/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#737373]">Location</p>
                    <p className="text-[#e5e5e5]">Sidi Bouzid, Tunisia</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.4 })}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#171717] border border-[#262626] rounded-xl p-6 sm:p-8"
            >
              <div className="space-y-4">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#737373] mb-2"
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
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#e5e5e5] placeholder-[#737373] focus:outline-none focus:border-[#3B82F6] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#737373] mb-2"
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
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#e5e5e5] placeholder-[#737373] focus:outline-none focus:border-[#3B82F6] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#737373] mb-2"
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
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#e5e5e5] placeholder-[#737373] focus:outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#737373] mb-2"
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
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#e5e5e5] placeholder-[#737373] focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                    <AlertCircle size={20} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#3B82F6] text-white font-medium rounded-lg hover:bg-[#2563eb] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-[#525252] mt-4">
                  Or email me directly at{" "}
                  <a
                    href="mailto:harrabisouhaib@gmail.com"
                    className="text-[#737373] hover:text-[#3B82F6] transition-colors underline underline-offset-2"
                  >
                    harrabisouhaib@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
