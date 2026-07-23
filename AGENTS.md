# Kelmi Lodge & Event Center

## Project Overview
A premium hotel, lodge, and event center website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Stack
- **Framework:** Next.js 16 (App Router, RSC, Server Actions)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with `@theme` directive
- **Animation:** Framer Motion
- **UI Library:** Magic UI (via MCP server), Radix UI primitives
- **Icons:** Lucide React

## Design Philosophy
This is a **premium hospitality brand**. Every page must feel:
- **Luxurious** — generous whitespace, elegant typography, refined color palette
- **Immersive** — full-bleed hero images, parallax scroll, cinematic transitions
- **Warm & Inviting** — earthy tones with gold/amber accents, soft shadows, organic shapes
- **Performance-first** — optimized images, lazy loading, minimal JS where possible

## Color Palette (Premium Hospitality)
- `--color-primary`: Warm gold/amber (#C5A55A / #B8943E)
- `--color-secondary`: Deep teal or navy (#1B3A3B / #1B2838)
- `--color-accent`: Soft blush or terracotta
- `--color-neutral`: Warm gray scale
- Use dark mode sparingly; hospitality sites should feel bright and airy

## Typography
- **Headings:** Serif font (Playfair Display, Cormorant Garamond) for elegance
- **Body:** Sans-serif (Inter, Geist) for readability
- Use font weights: 300 (light), 400 (regular), 500 (medium), 700 (bold)

## Key Pages
1. **Home** — Full-bleed hero video/image carousel, featured suites, amenities preview, testimonial carousel, CTA
2. **Suites & Rooms** — Grid/list of accommodations with gallery, amenities, pricing, book-now CTA
3. **Event Center** — Gallery, capacity info, packages, virtual tour
4. **Dining** — Restaurant, bar, catering menus
5. **Amenities** — Pool, spa, gym, concierge
6. **Gallery** — Filterable photo/video gallery with lightbox
7. **About** — History, team, brand story
8. **Contact & Bookings** — Form, map, availability calendar

## Patterns to Always Use
- **Hero sections** with gradient overlays and motion animations (framer-motion `motion.div`)
- **Stagger children animations** for lists and grids
- **Smooth scroll** navigation (Intersection Observer + framer-motion `useInView`)
- **Image galleries** with blur placeholder, lazy loading, responsive srcsets
- **CTA buttons** with hover glow effect using Tailwind `group-hover`
- **Glassmorphism** cards for premium overlays
- **Magnetic buttons** and hover tilt effects for interactive elements
- **Reveal animations** on scroll (fade-up, scale-in, slide-in)

## Magic UI Components (via MCP)
Use the @magicuidesign/mcp MCP server to generate:
- Animated hero sections
- Premium navigation bars
- Testimonial carousels
- Pricing tables
- Image galleries with lightbox
- Booking widgets
- Contact forms
Use the MCP tool `magicui-generate` to create components.

## File Structure
```
src/
├── app/
│   ├── layout.tsx          — Root layout with fonts, metadata
│   ├── page.tsx            — Homepage
│   ├── globals.css         — Tailwind imports + theme
│   ├── suites/             — /suites route
│   ├── events/             — /events route
│   ├── dining/             — /dining route
│   ├── amenities/          — /amenities route
│   ├── gallery/            — /gallery route
│   ├── about/              — /about route
│   └── contact/            — /contact route
├── components/
│   ├── ui/                 — Reusable UI primitives (Button, Card, etc.)
│   ├── sections/           — Page sections (Hero, Features, etc.)
│   └── layout/             — Navbar, Footer, Sidebar
├── lib/
│   ├── utils.ts            — cn() utility
│   └── animations.ts       — Framer Motion variants
├── hooks/                  — Custom React hooks
└── types/                  — TypeScript types/interfaces
```

## SEO & Performance
- Every page must have `generateMetadata()` with rich JSON-LD schema
- Use `next/image` with WebP/AVIF, proper sizes, priority for LCP
- Use `next/font` with `display: swap` and `preload: true`
- Implement structured data for LocalBusiness, Hotel, EventVenue
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms

## Getting Started
```bash
npm run dev    # Start dev server on localhost:3000
npm run build  # Production build
npm run lint   # Lint all files
```