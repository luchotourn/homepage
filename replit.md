# Next.js Homepage Project

## Overview
This is a Next.js 15 blog/homepage application migrated from Vercel to Replit. The project uses TypeScript, Tailwind CSS, and includes a blog with markdown-based posts.

**Current State:** Fully configured and running on Replit with proper port binding and deployment settings.

## Recent Changes

### Migration from Vercel to Replit (October 29, 2025)
- Configured Next.js to bind to port 5000 and host 0.0.0.0 for Replit compatibility
- Disabled Turbopack due to symlink incompatibility with Replit environment
- Added `allowedDevOrigins` configuration for Replit's cross-origin requests
- Set up deployment configuration using autoscale deployment target
- Installed all dependencies via npm

## Project Architecture

### Directory Structure
- `src/app/` - Next.js 15 App Router pages and layouts
  - `about/` - About page
  - `blog/` - Blog listing and dynamic post pages
- `src/lib/` - Utility functions for content processing
- `content/` - Markdown content for static pages
- `posts/` - Blog post markdown files
- `public/` - Static assets

### Key Technologies
- **Framework:** Next.js 15.5.3 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Content Processing:** Gray Matter, Remark, Remark HTML
- **Date Handling:** date-fns

### Scripts
- `npm run dev` - Development server (port 5000)
- `npm run build` - Production build
- `npm run start` - Production server (port 5000)
- `npm run lint` - ESLint checks

## Replit Configuration

### Development
The project runs on port 5000 with host binding to 0.0.0.0 to work within Replit's environment. The workflow is configured to run `npm run dev` automatically.

### Deployment
- **Target:** Autoscale (stateless web application)
- **Build:** `npm run build`
- **Run:** `npm run start`

### Important Notes
- Turbopack is disabled due to Replit's symlink structure
- Cross-origin requests are allowed from *.replit.dev domains
- No environment variables or API keys are currently required

## User Preferences
None documented yet.

## Content Management
Blog posts are stored as markdown files in the `posts/` directory. Each post includes frontmatter with metadata (title, date, excerpt) and markdown content.
