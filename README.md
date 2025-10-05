# Personal Homepage 🏠

A minimalist personal website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3005` to see your site.

## ✏️ How to Edit Content

### 1. Personal Information (Name & Description)

Edit the file **`content/about.md`**:

```markdown
---
name: Your Name
---

Your description here. You can use [markdown links](https://example.com) and they will automatically be styled consistently.
```

**Example:**
```markdown
---
name: Luciano Tourn
---

Emprendedor de la salud. Co-fundador en [Wúru](https://www.wuru.ai/) y Director en Grupo Gamma
```

### 2. Blog Posts

Add new posts in the **`posts/`** folder as `.md` files:

```markdown
---
title: "Post Title"
date: "2024-01-25"
excerpt: "Brief description"
tags: ["tag1", "tag2"]
---

# Post Title

Your post content here...
```

### 3. Contact Links

Edit **`src/app/page.tsx`** (lines 51-72):

- Email: Line 52 → `href="mailto:your.email@example.com"`
- GitHub: Line 58 → `href="https://github.com/yourusername"`
- LinkedIn: Line 65 → `href="https://www.linkedin.com/in/yourprofile/"`

## 📁 Project Structure

```
homepage/
├── content/
│   └── about.md          # Your name and description
├── posts/
│   ├── post1.md          # Blog posts
│   └── post2.md
├── src/
│   ├── app/
│   │   └── page.tsx      # Homepage (contact links)
│   └── lib/
│       ├── about.ts      # Processes about.md
│       └── blog.ts       # Processes blog posts
└── README.md             # This file
```

## 🎨 Features

- **Minimalist Design**: Clean, typography-focused layout
- **Markdown Support**: Write content in markdown
- **Consistent Styling**: All links automatically styled the same
- **Blog System**: Built-in blog with markdown posts
- **Fast Loading**: Static site generation for optimal performance

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Replit

1. Import GitHub repository
2. Configure custom domain
3. Run deployment command

## 📝 License

MIT License - feel free to use this for your own homepage!
