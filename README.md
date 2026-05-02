# IRON FIT CLUB Website

Premium fitness club website built with Next.js, React, Tailwind CSS, and Framer Motion. The site includes marketing pages for services, memberships, trainers, reviews, and contact information, with performance-focused routing and local image delivery for fast deployment on Vercel.

## Features

- Static App Router pages for fast first loads
- Responsive layouts for desktop, tablet, and mobile
- Smooth reveal animations powered by Framer Motion
- Local WebP image assets served from `public/images`
- Vercel-friendly image delivery with long-lived cache headers
- Navigation warmup for faster page-to-page transitions
- SEO routes for `robots.txt` and `sitemap.xml`

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```text
app/                  App Router pages, layout, global styles, SEO files
components/           Reusable UI sections and navigation behavior
lib/data.ts           Shared site content and image references
public/images/        Optimized local WebP assets
next.config.mjs       Image/cache configuration for production
tailwind.config.ts    Theme colors and design tokens
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Performance Notes

Images are stored locally as WebP files in `public/images`, so the live site does not depend on remote Unsplash image requests. Next image optimization is disabled for these already-optimized assets, allowing Vercel to serve them directly from static CDN paths.

The app also uses a navigation warmup component to prefetch route data and key page images in the background. On desktop, internal route navigation can start earlier on mouse press; on mobile, navigation waits for an intentional tap/click to avoid accidental page changes while scrolling.

## Deployment

This project is ready to deploy on Vercel.

Recommended settings:

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

Static images under `/images/*` are configured with:

```text
Cache-Control: public, max-age=31536000, immutable
```

When replacing an image, use a new filename such as `gym-class-v2.webp` so browsers and Vercel CDN do not keep serving the older cached file.
