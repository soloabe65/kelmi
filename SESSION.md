# Kelmi Lodge & Event Hall — Session Log

> **Auto-updated:** This file is updated on every edit/update to the project. Last updated: **2026-09-28 17:40** (Africa/Lagos)
> **Workspace:** `C:\Users\hp\Desktop\WEBSITE PROJECTS\Kelmi Lodge`
> **Stack:** Next.js 16.2.11 (Turbopack) - React 19.2.4 - TypeScript 5 (strict) - Tailwind CSS v4 - Framer Motion 12.42.2
> **Domain:** `kelmilodgeandeventhall.com` (purchased, live)
> **Deploy target:** Cloudflare Pages - **pure static export** (`output: "export"` -> `out/`). No server runtime, therefore **no API routes and no server actions by design.**
> **Verification (2026-09-28, post image migration):** `next build` -> 14 static routes OK | `npx tsc --noEmit` -> clean | `npx eslint src` -> **0 errors, 4 warnings** (all `no-img-element`, expected under static export) | `node scripts/check-images.cjs` -> 43 referenced images present, **23 missing (see Images)**.

## How This File Works
- Created on request: `create a session md file and update it whenever an update or edit is made`
- **Rule:** After every feature, fix, or content edit (rooms, facilities, UI, deps, MCP), append an entry to `## Change History` and update `## Current State`.
- Use `YYYY-MM-DD HH:MM - title - files - notes` format.
- **Single source of truth for the CURRENT build. Anything not verifiable in `src/` does not belong here.**

---

## Current State (Single Source of Truth)

### Images (migrated 2026-09-28)
All photography is now the hotel's **own camera photos**, converted from the original PNGs to WebP.
**142 MB of PNG -> 9.9 MB of WebP.**

- **Manifest:** `src/lib/images.ts` - **every image path in the codebase must be imported from here.** Never hardcode a path.
- **Layout:** `public/images/<slug>/<slug>-NN.webp` (1600w landscape / 1600h portrait / 1200w square, q80; logo q92)
- **Converter:** `scripts/convert-images.mjs` (dedupes by MD5 within a folder, then converts)
- **Validator:** `scripts/check-images.cjs` - run before every commit; exits non-zero on a broken path
- **Folders:** `gold` x7, `majesty` x7, `apartment` x7, `lounge` x7, `snooker-bar` x5, `front-desk` x4, `event-hall` x3, `hallway` x2, `logo` x1
- **Zero Unsplash images remain.** All stock placeholders were removed. Amenities, events, and both bento grids now use real photos; guest avatars are generated initials.
- Folder names are all **lowercase** - Cloudflare Pages builds on a case-sensitive filesystem, so `Hallway/` vs `hallway/` would 404 in production.

**Room -> image mapping (deliberate, per owner decision 2026-09-28):**
| Room | Folder | Note |
|---|---|---|
| Royal Executive Suite (Gold) | `gold/` | 7 shots |
| Royal Executive Suite (Silver) | `executive/` | The `royal executive silver` upload was **byte-identical to `royal executive gold`** (all 7 files, matching MD5s). Silver is served the `executive/` set so the N50k and N40k rooms do not look identical. |
| Executive Room | `executive/` | Shares the Silver set. If real Silver photos arrive, give Silver its own folder. |
| Royal Majesty Room | `majesty/` | 7 shots |
| Presidential Apartment | `apartment/` | From the `presidential/` upload |
| Classic Room | `classic/` | **6 shots** (one within-folder dupe dropped) - **currently missing, see below** |

**Excluded from the build (owner decisions 2026-09-28):**
- 5 x `ChatGPT Image ...` files in the `Exterior` upload were **AI renders**, not photographs. Excluded so the site never presents a render as the real property.
- 2 x pylon-sign photos. The sign lists `RESTAURANT` and `SPORT CENTRE`, which do not exist. Owner confirmed the sign is out of date, so these were dropped rather than shown.

**WARNING - 23 images are currently MISSING and the code references them.**
While cleaning up the old folders, Windows matched `Exterior`/`exterior` (and `classic`, `executive`) as the same directory, so the freshly converted WebP files for those three slugs were deleted along with the source PNGs. They were never committed to git, so they are not recoverable from history. **Re-upload required**, then re-run `node scripts/convert-images.mjs`:
- `Exterior/` x10 (real photos only - skip the 5 renders and 2 pylon shots)
- `classic/` x6
- `executive/` x7

Affected surfaces until then: the homepage hero, About hero, gallery "Exterior" category, the Classic and Executive room cards, and the Silver suite card.

### Contact Details - single source of truth
`src/lib/site.ts` exports `SITE`, `ADDRESS`, `CONTACT`, `LOCATION`, `RESPONSE_TIME`. **Every** user-facing address, phone, email, coordinate, and "2 hours" string reads from here. The three-way address drift is fixed at the root.

| Item | Value |
|---|---|
| Address (canonical) | **KM 4, DSC Expressway by Karika Filling Station, Otokutu, Ughelli South, Delta State** - owner-confirmed 2026-09-28 |
| Phone / WhatsApp | `2349014971739` / `+234 901 497 1739` |
| Reservations | `reservations@kelmilodgeandeventhall.com` (lowercase) |
| Info | `info@kelmilodgeandeventhall.com` |
| Coordinates | `5.5460703, 5.8266481` - Plus Code `GRWG+887` - postal `333117` |
| Response promise | `2 hours` |

The old "Oloje Street" footer address and the "KM 48" home-page copy are both gone.

### Routes (11) - all `"use client"`, all statically exported
| Route | File | Content |
|---|---|---|
| `/` | `src/app/page.tsx` | 100svh auto-rotating hero (4 imgs, 5200ms) - glass stat strip - Quick Book `Drawer` - trust strip - Featured Suites `Carousel` (6) - amenities `BentoGrid` x4 - satellite/coordinates section - 3 location cards - `ShineBorder` CTA |
| `/suites` | `src/app/suites/page.tsx` | 60vh rotating hero from room images (4500ms) - 6 category filters - 6 room cards with amenity chips - filtered view swaps to image-gallery grid - direct-booking CTA |
| `/suites/presidential` | `src/app/suites/presidential/page.tsx` | Premium tier - range "N35,000 - N50,000" - Gold / Silver / Apartment - `ShineBorder` CTA |
| `/suites/standard` | `src/app/suites/standard/page.tsx` | Classic tier - range "N20,000 - N30,000" - Majesty / Executive / Classic - **no CTA block** |
| `/events` | `src/app/events/page.tsx` | Event Hall hero - 4 event types (Weddings 300 / Conferences 400 / Social 150 / Corporate 200) - 3 venues (Grand Ballroom 400 seat/600 cocktail, Garden Pavilion 200/300, Boardroom 20) - `ShineBorder` CTA |
| `/amenities` | `src/app/amenities/page.tsx` | "Gather & Play" `BentoGrid` x4 - "Services & Convenience" grid x4 - book CTA |
| `/gallery` | `src/app/gallery/page.tsx` | 4 category filters (Suites / Events / Amenities / Exterior) - full lightbox (prev/next + counter) - items generated from the `GALLERY` manifest |
| `/about` | `src/app/about/page.tsx` | 60vh hero - GM welcome letter (signed "Kelmi Management") - Overview - Vision - Mission - Brand Promises - Service Philosophy - Quality Policy - 10 Core Values - 6-point Charter - 8-point Conduct - 10 Services - `ShineBorder` Commitment |
| `/contact` | `src/app/contact/page.tsx` | 4 info cards - **real embedded map** + directions link - form (Name/Email/Phone/Subject/Message) that **hands the enquiry to WhatsApp** - email fallback - CTA |
| `/book` | `src/app/book/page.tsx` | 3-step wizard + success screen (see Booking Funnel) |
| `/testimonials` | `src/app/testimonials/page.tsx` | 60vh rotating hero - "4.9 / 6 reviews" rating bar - 6 review cards (initials avatars, 2 badged "New", "via Google") - 3 dashed **video placeholders** - dark CTA |

> **All 11 pages are `"use client"`** (line 1 of each). No page is a Server Component, which is why no page can export `generateMetadata` today.

### Room Classes & Rates (6) - consistent across all 6 files
| Class | Price / night | Tier | Route |
|---|---|---|---|
| Royal Executive Suite (Gold) | N50,000 | Premium | `/suites/presidential` |
| Royal Executive Suite (Silver) | N40,000 | Premium | `/suites/presidential` |
| Presidential Apartment | N35,000 | Premium | `/suites/presidential` |
| Royal Majesty Room | N30,000 | Classic | `/suites/standard` |
| Executive Room | N25,000 | Classic | `/suites/standard` |
| Classic Room | N20,000 | Classic | `/suites/standard` |

- Source: `src/app/page.tsx`, `src/app/suites/page.tsx:25-98`, `src/app/suites/presidential/page.tsx`, `src/app/suites/standard/page.tsx`, `src/app/book/page.tsx`, `src/components/layout/navbar.tsx` (shows prices), `src/components/layout/footer.tsx` (no prices)
- Filters: `["all","classic","executive","majesty","presidential","royal"]` - `suites/page.tsx:10`
- Prices stored as `"N50,000"` strings on marketing pages, numeric (`price: 50000`) + `toLocaleString()` on `/suites` and `/book`

### Facilities (Current)
**Kept:** Lounge & Stage (`PartyPopper`) - Snooker Bar (`Trophy`) - Reception & Check-in (`Sparkles`) - Concierge & Support (`ConciergeBell`) - Valet & Security (`Car`) - In-Room Service (`Coffee`) - 24/7 Concierge (`Shield`) - Laundry Service - Event Hall (`Landmark`, on the homepage bento)

**Removed - do not reintroduce (the hotel genuinely has none of these):**
- **Infinity/Swimming Pool** - zero matches in `src/`
- **Gym / Fitness Atelier** - zero matches in `src/`
- **Dining / Restaurant** (Golden Fork, In-Room Dining) - `/dining` route deleted in `5097b96`; zero matches in `src/`. Note: the outdoor pylon sign still advertises `RESTAURANT` and `SPORT CENTRE`. Owner confirmed 2026-09-28 that the sign is out of date and there is no dining.
- **Free / Premium WiFi** - removed in `a85412c` and `7b7fba7`; zero matches in `src/`
- **Banquet Hall** - zero matches
- **Spa & Wellness** - the `/amenities` bento card and the two testimonial lines that referenced spa treatments have been rewritten. Zero matches now.
- **Nature & Concierge / Laundry (`TreePine` icon)** - replaced; `TreePine` is no longer imported anywhere.
- Orphaned leftovers deleted: `public/images/dining-*.jpg` x3, stale `out/dining/`

### Navbar (9 items) - `src/components/layout/navbar.tsx`
Home - About - **Suites** (dropdown of 6, with prices) - Events - Amenities - Gallery - Testimonials - Contact
Plus: Concierge link -> `/contact` (xl only), Book Now -> `/book`, mobile CTA "Book Your Stay"
Wordmark replaced with the uploaded gold **logo badge** (`IMAGES.logo`, 320px WebP) plus alt text.

### Footer (3 groups, no prices) - `src/components/layout/footer.tsx`
- **Stay:** All Suites & Rooms, Gold, Silver, Apartment, Majesty, Executive, Classic
- **Experience:** Events & Weddings, Amenities, Lounge & Snooker Bar, Gallery, Testimonials
- **Discover:** Home, About Kelmi, Contact, Book Now
- Logo badge + wordmark, canonical address, phone and email as `mailto:`/`wa.me` links, and a Maps link
- Bottom bar "Privacy"/"Terms" are now `mailto:` requests rather than dead links

### Booking Funnel (`/book`) - 3 steps, WhatsApp handoff
- **Steps:** 1 "Your Stay" -> 2 "Your Details" -> 3 "Review & Book"; auto-scrolls top on change
- **Step 1:** check-in (min=today), check-out, guests 1-8 (default 2), 6 room cards
- **Step 2:** full name, email, phone, special requests (optional)
- **Step 3:** read-only review + price breakdown
- **Gates:** `canProceedStep1 = checkIn && checkOut && selectedRoom && nights > 0`; `canProceedStep2 = fullName && email && phone`
- **Response SLA copy - "2 hours"** appears 3 times (subhead, Step 2 flickering red `AlertTriangle`, success screen bold flickering). All read from `RESPONSE_TIME`. **"24 hours" does not exist anywhere in `src/`.**
- **How confirmation works (`handleConfirmBooking`):** a plain sync function that `window.open`s `CONTACT.whatsappUrl` with `buildBookingMessage()` pre-filled, then sets the success screen. The old `async` + `console.log` + `toast.success` shim is gone - it sent nothing while claiming to.
- **Success screen:** tells the guest to **finish in WhatsApp**, offers `mailto:` to reservations as a fallback, shows the flickering no-pay-yet warning, and states that bank details arrive with the confirmation. The `[Bank Name]` / `[Account Number]` placeholders are gone - guests can no longer read fake account numbers.
- **Floating WhatsApp FAB** in root layout, brand green `#25D366`

### UI System
- **Magic UI (hand-written local, not MCP-generated):** `aurora-text.tsx` (used on 13 files), `border-beam.tsx`, `shine-border.tsx`, `bento-grid.tsx`, `marquee.tsx` (**dead** - the home page no longer imports it)
- **shadcn/ui:** `carousel.tsx` (embla, used `/`), `drawersheet.tsx` (vaul, used `/`), `section.tsx` (`Section`/`SectionHeader`, used on 7 pages), `button.tsx` (internal to carousel only), `card.tsx` (**fully dead - no importer**)
- **`globals.css` (109 L):** `@import "tailwindcss"` + `@import "tw-animate-css"` + `@plugin "daisyui"` + `@plugin "flowbite/plugin"` - `:root` vars `--primary #C5A55A`, `--primary-dark #B8943E`, `--secondary #1B3A3B`, `--accent #D4A574`, neutral 50-900, `--radius 0.5rem` - `@theme inline` maps all of them to Tailwind tokens - keyframes `border-beam`, `shine`, `marquee`, `marquee-vertical`, `aurora` - utilities `.glass`, `.glass-dark`, `.animate-flicker`, `.animate-flicker-fast` (**dead**)
- **Fonts (`layout.tsx`):** `Geist` -> `--font-geist-sans`, `Geist_Mono` -> `--font-geist-mono`, `Playfair_Display` -> `--font-playfair` (`display: swap`, `preload: true`)
- **MCPs (`opencode.json`):** `@magicuidesign/mcp`, `shadcn` (`@jpisnice/shadcn-ui-mcp-server`), `heroui` (`@heroui/mcp`), all local via `cmd /c npx -y`, 120s timeout

### Build & Config Reality
- `next.config.ts`: `output: "export"` - `images.unoptimized: true` - `trailingSlash: true` - `skipTrailingSlashRedirect: true` (inert under static export)
- `package.json` scripts: `dev: next dev --webpack` - `build: next build` (**no `--webpack`, inconsistent with dev**) - `start: next start` (**broken under static export**) - `lint: eslint`. No test/typecheck/format script.
- `eslint.config.mjs`: flat config, `eslint-config-next/core-web-vitals` + `/typescript`, ignores `.next`, `out`, `build`
- `tsconfig.json`: `strict: true`, `noEmit`, `moduleResolution: "bundler"`, alias `@/* -> ./src/*`
- `components.json`: shadcn default style, `baseColor: neutral`, `iconLibrary: lucide`. **Declares a `@/hooks` alias but `src/hooks/` does not exist.**
- `.npmrc`: `legacy-peer-deps=true`, `engine-strict=false`, `force=true`

---

## Known Issues / Open Defects

### Blocking
1. **23 images missing** (Exterior x10, classic x6, executive x7) - see Images. The build succeeds and the pages render, but those `<img>` requests 404.

### Content (user-visible)
2. **No real bank details anywhere.** The booking success screen now says "our team will send you verified bank transfer details" - someone must add them before launch.
3. **No email delivery.** The site is a static export, so nothing is emailed. `/book` and `/contact` both hand off to WhatsApp, and reservations has a `mailto:` fallback. This is a deliberate design, but it means a guest who never sees the WhatsApp tab has no channel. Consider a form service (Formspree/Basin) if email is required.
4. **Guest avatars are generated initials** because no real guest photos exist. Honest, but less warm than photos.
5. **The pylon sign at the property advertises `RESTAURANT` and `SPORT CENTRE`.** The site says neither exists. Worth asking the owner to update the sign so guests are not confused on arrival.
6. **No `generateMetadata()` on any page and no JSON-LD** - see SEO below.
7. `/testimonials` video placeholders point at `/public/testimonials/videos/*.mp4` - **directory does not exist.**
8. **Home page stat "500+ Events hosted"** is unverified. Confirm with the owner or soften.
9. `/suites/standard` has no CTA block while `/suites/presidential` does.

### Code
10. **`@keyframes flicker` has duplicate/overlapping stops** - `globals.css:102-107` declares `0%, 100%` and `50%`, then a second rule re-declares `0%` and `100%` alongside `18%, 22%, 25%, 53%, 57%`. It still renders, but the two rules should be merged into one clean stop list.
11. Locale mismatch in currency formatting - `book/page.tsx` uses `toLocaleString("en-US")` while `suites/page.tsx` uses `"en-NG"`.
12. `--font-mono` is never mapped in `@theme`, though the home page uses `font-mono` for the lat/lng display.
13. Booking step buttons are never `disabled`, only visually greyed - validation errors are still reachable by clicking.
14. Scroll-behavior declared twice - `globals.css:56` and `layout.tsx:56`.
15. `/amenities` bento cards all link to `/contact`. Defensible (nothing else to link to) but worth revisiting if detail pages are ever added.

### Dead Code & Dependencies
16. `src/components/ui/card.tsx` - entirely dead. `Marquee` - dead. `.animate-flicker-fast` - dead.
17. `@cloudflare/next-on-pages` (`package.json`) - **declared but not installed, not referenced by any config, no Wrangler file, no script.** Safe to remove. (Commits `67aff15`/`c300f21` explored then reverted Cloudflare; the dep was left behind.)
18. Installed but never imported: `@heroui/react`, `flowbite-react`, all 7 Radix packages, `csstype`, `hermes-parser`, `lightningcss`, `tsconfig-paths`. `@plugin "daisyui"` and `@plugin "flowbite/plugin"` are declared with no theme config and no classes used.

### SEO - 0% of the `AGENTS.md` requirement
19. **No page has `generateMetadata()`.** Only `layout.tsx` exports root `metadata`. Since no page supplies a title, the `%s | ...` template is never exercised.
20. **No JSON-LD / structured data anywhere** - no `Hotel`, `EventVenue`, or `LocalBusiness` schema, contradicting `AGENTS.md`.
21. `images.unoptimized: true` (required for static export) means no `next/image` optimization. Mitigated by pre-converting to WebP and capping widths, but there is no responsive `srcset`.
22. `README.md` is still default `create-next-app` boilerplate and still recommends Vercel.

### Windows perf
23. First cold dev run is slow (WASM `swc`/`oxide` fallback); keep `npm run dev` running for fast HMR. `next build` uses Turbopack and takes ~115s compile + 44s typecheck.

---

## Change History (Newest First)

### 2026-09-28 17:40 - Image migration, address fix, honest booking funnel
- **Files:** `scripts/convert-images.mjs` (new), `scripts/check-images.cjs` (new), `src/lib/images.ts` (new), `src/lib/site.ts` (new), all 11 pages, `navbar.tsx`, `footer.tsx`, `whatsapp-button.tsx`, `SESSION.md`
- **Detail:** Replaced every stock/placeholder image with the hotel's own photography. Wrote `src/lib/images.ts` as the single source of truth for image paths and `src/lib/site.ts` for all contact details, so neither can drift again. Converted 81 hash-named PNGs to 66 slugged WebP files, **142 MB -> 9.9 MB**, dropping 12 byte-identical duplicates. Excluded 5 AI renders and 2 pylon-sign photos per owner decision. Pointed Silver at the `executive` set because its upload was byte-identical to Gold's. Wired the uploaded gold logo badge into navbar and footer. Replaced Unsplash guest faces with generated initials. Deleted the orphaned `dining-*.jpg` files and the stale `out/dining/` artifact.
- **Also fixed:** the canonical address is now **KM 4, DSC Expressway by Karika Filling Station, Otokutu, Ughelli South, Delta State** everywhere (the "Oloje Street" footer and "KM 48" home copy are gone); the booking success screen no longer claims an email was sent and no longer shows `[Bank Name]` / `[Account Number]` placeholders; the contact form now hands the enquiry to WhatsApp instead of firing a toast that lied; the real map replaced a gradient placeholder; navbar dropdown keys no longer collide; the duplicate "Snooker Bar Experience" bento card is gone (Event Hall replaced it); the "30+ premium suites" and "1,200+ reviews" stats were corrected to 6 room classes; removed the dead `Marquee` import, the duplicate testimonials block on the home page, and 6 unused imports; typed the two `ease: [...] as any` casts as `Variants`; renamed the `Hallway/` folder to `hallway/` so Cloudflare's case-sensitive build resolves it.
- **Verified:** `next build` -> 14 static routes | `npx tsc --noEmit` -> clean | `npx eslint src` -> **0 errors, 4 warnings** (was 5 errors / 18 warnings) | `node scripts/check-images.cjs` -> 43 present, 23 missing.
- **KNOWN REGRESSION:** while deleting the old folders, Windows case-insensitively matched `Exterior`/`exterior` (and `classic`, `executive`), so the newly converted WebP files in those three folders were deleted with the source PNGs. Those PNGs were never committed, so they are not recoverable from git. 23 images need re-uploading; re-run `node scripts/convert-images.mjs` afterwards.

### 2026-09-28 15:06 - SESSION.md reconciled with actual codebase
- **Files:** `SESSION.md`
- **Detail:** Full audit of `src/` found this log had drifted badly. It was stamped 2026-05-13 but 8 commits landed through 2026-09-25 that it never recorded. **Corrected four hard errors:** (1) `src/app/api/booking/route.ts` **does not exist** - it was cited 8x across the old file; there is no `src/app/api/` directory at all, and cannot be under `output: "export"`. (2) WhatsApp number was recorded as `2347069547231`; actual is `2349014971739`. (3) The claimed `async fetch` to `/api/booking` is a bare `console.log` with zero network I/O. (4) `/dining` was listed as redesigned; the route was deleted in `5097b96`. Also corrected the facilities list (Golden Fork Restaurant, Premium WiFi, and In-Room Dining were all listed as "Kept" - none exist) and the reservations email casing.
- **Verified:** `git status --short` clean - HEAD `e79e8bd` - every claim read directly from `src/`.

### 2026-09-25 - About hero RC number removed
- **Files:** `src/app/about/page.tsx` (commit `e79e8bd`)

### 2026-09 - Event Center to Event Hall; About GM letter price removed
- **Files:** `navbar.tsx`, `footer.tsx`, `about/page.tsx`, `events/page.tsx`, `layout.tsx` (commit `31e3d49`)

### 2026-09 - All contact numbers unified to +234 901 497 1739
- **Files:** `page.tsx`, `contact/page.tsx`, `footer.tsx`, `book/page.tsx`, `whatsapp-button.tsx` (commit `a9a313a`)

### 2026-09 - Home bento: removed WiFi placeholder
- **Files:** `src/app/page.tsx` (commit `7b7fba7`)

### 2026-09 - WiFi removed; reviews moved to /testimonials; satellite view added
- **Files:** `src/app/page.tsx`, `src/app/testimonials/page.tsx` (commit `a85412c`)

### 2026-09 - Dining page and all dining traces removed
- **Files:** deleted `src/app/dining/page.tsx`; nav, footer, home bento, gallery, testimonials (commit `5097b96`)

### 2026-09 - Navbar adds Amenities + Testimonials; footer mirrors navbar
- **Files:** `src/components/layout/navbar.tsx`, `footer.tsx` (commit `ec17683`)

### 2026-09 - About + Suites rebuilt to "Beechnut pattern"; Testimonials page added
- **Files:** `src/app/about/page.tsx`, `src/app/suites/page.tsx`, `src/app/testimonials/page.tsx` (commit `c910670`)

### 2026-09 - Revert to static export for Cloudflare Pages
- **Files:** `next.config.ts`, `package.json` (commits `67aff15`, `c300f21`, `5b060c4`, `20db64b`)
- **Detail:** After trying `next-on-pages` with API routes, reverted to `output: "export"` with client-side booking. The `@cloudflare/next-on-pages` devDependency was left in `package.json` but is not installed, not referenced by any config, and has no Wrangler file. This is why no API route exists.

### 2026-05-13 17:15 - Domain: kelmilodgeandeventhall.com + emails
- **Files:** `footer.tsx`, `contact/page.tsx`, `layout.tsx`, `src/app/api/booking/route.ts` (since deleted)
- **Detail:** **Superseded** - the API route was later deleted; the live booking funnel is WhatsApp-only.

### 2026-05-13 16:30 - Booking funnel: reservation email fix + 2hr flickering warnings
- **Files:** `src/app/book/page.tsx`, `src/app/globals.css`, `src/app/api/booking/route.ts` (since deleted)
- **Detail:** **Superseded** - the API route and email templates were removed in the static-export revert; the "2 hours" copy and flicker styles survive.

### 2026-05-13 - Facilities: remove Gym/Pool, add Lounge Stage + Snooker Bar
- **Detail:** **Partly superseded** - later commits also removed Dining and WiFi.

### 2026-05-13 - Room rates: 6 discounted classes applied
- **Detail:** **Still current.** Replaced 3 placeholder rooms with 6 (Gold 50k, Silver 40k, Apartment 35k, Majesty 30k, Executive 25k, Classic 20k).

### 2026-05-13 - Full pages redesign + verify
- **Detail:** Build passed, 14 static routes. (The homepage `Marquee` from this redesign was never rendered - it is dead.)

### 2026-05-13 - Premium UI install + footer key fix
- **Detail:** Installed daisyui, flowbite-react, @heroui/react, embla, vaul, sonner, tw-animate-css; created `components.json`; created the local Magic UI components; fixed the duplicate React key in the footer. `tsc --noEmit` and build both passed.

### 2026-05-13 - Session file created
- **Files:** `SESSION.md` (this file)
- **Next:** append new entries at the top of Change History on each future edit.

---
*To update: edit `SESSION.md` Change History + Current State after each code change. Keep the `Last updated` timestamp current. Only record what is verifiable in `src/`.*
