import { Github, Linkedin, Mail, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-sm tracking-widest uppercase font-medium">
            Souhaib Harrabi
          </div>

          <div className="flex items-center gap-8 text-sm tracking-wide">
            <span className="text-subtle">
              &copy; {currentYear} All rights reserved.
            </span>
            <a
              href="https://github.com/CodeBySouhaib/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Code size={12} />
              Source
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/CodeBySouhaib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-subtle hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harrabisouhaib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-subtle hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:harrabisouhaib@gmail.com"
              className="text-xs tracking-widest uppercase text-subtle hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
