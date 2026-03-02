<div align="center">

# Portfolio - Souhaib Harrabi

A modern, dark-themed developer portfolio built with Next.js 14, React, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

[Live Demo](https://portfolio-rho-flax-satz6z3crc.vercel.app/) · [Report Bug](https://github.com/CodeBySouhaib/portfolio/issues) · [Request Feature](https://github.com/CodeBySouhaib/portfolio/issues)

</div>

---

## Features

- **Dark Developer Theme** - Clean, modern dark UI with blue accents
- **Responsive Design** - Mobile-first approach, looks great on all devices
- **Smooth Animations** - Framer Motion powered transitions and effects
- **Blog System** - MDX-based blog with syntax highlighting
- **Contact Form** - Working email form with Resend integration
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Fast Performance** - Static generation where possible, optimized images

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Terminal-style intro with animated typing effect |
| **About** | Bio, GitHub stats, and personal info |
| **Skills** | Tech stack organized by category |
| **Experience** | Work history timeline |
| **Projects** | Featured projects with descriptions |
| **Education** | Academic background and certifications |
| **Blog** | Technical articles and tutorials |
| **Contact** | Email contact form |

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Blog**: [MDX](https://mdxjs.com/) with [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Email**: [Resend](https://resend.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodeBySouhaib/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Resend API key:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

```
portfolio/
├── app/
│   ├── api/contact/      # Contact form API route
│   ├── blog/             # Blog pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── content/blog/         # MDX blog posts
├── lib/                  # Utility functions
│   └── mdx.ts           # MDX processing
└── public/              # Static assets
```

## Customization

### Update Personal Info

Edit the content in each component file in `/components/`:
- `Hero.tsx` - Name, title, social links
- `About.tsx` - Bio and stats
- `Skills.tsx` - Tech stack
- `Experience.tsx` - Work history
- `Projects.tsx` - Portfolio projects
- `Education.tsx` - Academic info

### Add Blog Posts

Create new `.mdx` files in `/content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2026-01-15"
excerpt: "Brief description of the post"
tags: ["Tag1", "Tag2"]
---

# Your Content Here

Write your blog post using Markdown...
```

### Change Theme Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #e5e5e5;
  --accent: #3B82F6;  /* Change this for different accent color */
  /* ... */
}
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add environment variable: `RESEND_API_KEY`
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CodeBySouhaib/portfolio)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) | Optional* |

*Contact form will show an error message if not configured

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Souhaib Harrabi**

- Email: harrabisouhaib@gmail.com
- LinkedIn: [harrabisouhaib](https://www.linkedin.com/in/harrabisouhaib)
- GitHub: [@CodeBySouhaib](https://github.com/CodeBySouhaib)

---

<div align="center">

Built with ❤️ using Next.js

</div>
