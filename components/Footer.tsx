import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-[#262626]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-mono text-lg">
            <span className="text-[#3B82F6]">&lt;</span>
            Souhaib
            <span className="text-[#3B82F6]">/&gt;</span>
          </div>

          {/* Copyright */}
          <p className="text-[#737373] text-sm flex items-center gap-1">
            &copy; {currentYear} Souhaib Harrabi. Built with
            <Heart size={14} className="text-red-500 fill-red-500" />
            using Next.js
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/CodeBySouhaib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737373] hover:text-[#3B82F6] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/harrabisouhaib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737373] hover:text-[#3B82F6] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:harrabisouhaib@gmail.com"
              className="text-[#737373] hover:text-[#3B82F6] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
