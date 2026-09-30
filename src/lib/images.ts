/**
 * Single source of truth for every image path on the site.
 *
 * All photos live in /public/images/<slug>/<slug>-NN.webp, converted from the
 * original camera PNGs. Build with: npm run images (see scripts/convert-images.mjs)
 *
 * Rules:
 *  - Never hardcode an image path in a page. Import from here.
 *  - `lead` is the strongest shot in the set - use it for cards and heroes.
 *  - `photos` is the full set, in gallery order.
 */

export const IMAGES = {
  /** Royal Executive Suite (Gold) — flagship, ₦50,000. Also used for the Silver tier. */
  gold: {
    lead: "/images/gold/gold-01.webp",
    photos: [
      "/images/gold/gold-01.webp",
      "/images/gold/gold-02.webp",
      "/images/gold/gold-03.webp",
      "/images/gold/gold-04.webp",
      "/images/gold/gold-05.webp",
      "/images/gold/gold-06.webp",
      "/images/gold/gold-07.webp",
    ],
  },

  /** Royal Executive Suite (Silver), ₦40,000 - and the Executive Room, ₦25,000. */
  executive: {
    lead: "/images/executive/executive-01.webp",
    photos: [
      "/images/executive/executive-01.webp",
      "/images/executive/executive-02.webp",
      "/images/executive/executive-03.webp",
      "/images/executive/executive-04.webp",
      "/images/executive/executive-05.webp",
      "/images/executive/executive-06.webp",
      "/images/executive/executive-07.webp",
    ],
  },

  /** Royal Majesty Room, ₦30,000. */
  majesty: {
    lead: "/images/majesty/majesty-01.webp",
    photos: [
      "/images/majesty/majesty-01.webp",
      "/images/majesty/majesty-02.webp",
      "/images/majesty/majesty-03.webp",
      "/images/majesty/majesty-04.webp",
      "/images/majesty/majesty-05.webp",
      "/images/majesty/majesty-06.webp",
      "/images/majesty/majesty-07.webp",
    ],
  },

  /** Presidential Apartment, ₦35,000. */
  apartment: {
    lead: "/images/apartment/apartment-01.webp",
    photos: [
      "/images/apartment/apartment-01.webp",
      "/images/apartment/apartment-02.webp",
      "/images/apartment/apartment-03.webp",
      "/images/apartment/apartment-04.webp",
      "/images/apartment/apartment-05.webp",
      "/images/apartment/apartment-06.webp",
      "/images/apartment/apartment-07.webp",
    ],
  },

  /** Classic Room, ₦20,000. */
  classic: {
    lead: "/images/classic/classic-01.webp",
    photos: [
      "/images/classic/classic-01.webp",
      "/images/classic/classic-02.webp",
      "/images/classic/classic-03.webp",
      "/images/classic/classic-04.webp",
      "/images/classic/classic-05.webp",
      "/images/classic/classic-06.webp",
    ],
  },

  /** Event Hall — the ballroom. */
  eventHall: {
    lead: "/images/event-hall/event-hall-01.webp",
    photos: [
      "/images/event-hall/event-hall-01.webp",
      "/images/event-hall/event-hall-02.webp",
      "/images/event-hall/event-hall-03.webp",
    ],
  },

  /** Lounge & Stage — private gatherings, live music. */
  lounge: {
    lead: "/images/lounge/lounge-01.webp",
    photos: [
      "/images/lounge/lounge-01.webp",
      "/images/lounge/lounge-02.webp",
      "/images/lounge/lounge-03.webp",
      "/images/lounge/lounge-04.webp",
      "/images/lounge/lounge-05.webp",
      "/images/lounge/lounge-06.webp",
      "/images/lounge/lounge-07.webp",
    ],
  },

  /** Snooker Bar. */
  snookerBar: {
    lead: "/images/snooker-bar/snooker-bar-01.webp",
    photos: [
      "/images/snooker-bar/snooker-bar-01.webp",
      "/images/snooker-bar/snooker-bar-02.webp",
      "/images/snooker-bar/snooker-bar-03.webp",
      "/images/snooker-bar/snooker-bar-04.webp",
      "/images/snooker-bar/snooker-bar-05.webp",
    ],
  },

  /** Reception / front desk. */
  frontDesk: {
    lead: "/images/front-desk/front-desk-01.webp",
    photos: [
      "/images/front-desk/front-desk-01.webp",
      "/images/front-desk/front-desk-02.webp",
      "/images/front-desk/front-desk-03.webp",
      "/images/front-desk/front-desk-04.webp",
    ],
  },

  /** Guest corridors. */
  hallway: {
    lead: "/images/hallway/hallway-01.webp",
    photos: [
      "/images/hallway/hallway-01.webp",
      "/images/hallway/hallway-02.webp",
    ],
  },

  /** Building exterior — real camera photos only, no renders. */
  exterior: {
    lead: "/images/exterior/exterior-01.webp",
    photos: [
      "/images/exterior/exterior-01.webp",
      "/images/exterior/exterior-02.webp",
      "/images/exterior/exterior-03.webp",
      "/images/exterior/exterior-04.webp",
      "/images/exterior/exterior-05.webp",
      "/images/exterior/exterior-06.webp",
      "/images/exterior/exterior-07.webp",
      "/images/exterior/exterior-08.webp",
      "/images/exterior/exterior-09.webp",
      "/images/exterior/exterior-010.webp",
      "/images/exterior/exterior-011.webp",
      "/images/exterior/exterior-012.webp",
    ],
  },

  /** Gold circular "Kelmi Lodge" badge, transparent. */
  logo: "/images/logo/logo-01.webp",
} as const

/** Homepage hero — every exterior photo, in order. Nothing else. */
export const HOME_HERO = [...IMAGES.exterior.photos] as const

/** Amenities hero — every snooker-bar photo, in order. Nothing else. */
export const AMENITIES_HERO = [...IMAGES.snookerBar.photos] as const

/** Events hero — every event-hall photo, in order. Nothing else. */
export const EVENTS_HERO = [...IMAGES.eventHall.photos] as const

/** Contact hero — every front-desk photo, in order. Nothing else. */
export const CONTACT_HERO = [...IMAGES.frontDesk.photos] as const

export const TESTIMONIALS_HERO = [
  IMAGES.gold.photos[0],
  IMAGES.lounge.photos[0],
  IMAGES.majesty.photos[0],
] as const

/** Categories drive the gallery filter pills. */
export const GALLERY_CATEGORIES = [
  "Suites",
  "Events",
  "Amenities",
  "Exterior",
] as const

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]

export const GALLERY: readonly {
  src: string
  alt: string
  category: GalleryCategory
}[] = [
  ...IMAGES.gold.photos.slice(0, 2).map((src, i) => ({
    src,
    alt: `Royal Executive Suite (Gold) — view ${i + 1}`,
    category: "Suites" as const,
  })),
  ...IMAGES.executive.photos.slice(0, 2).map((src, i) => ({
    src,
    alt: `Executive Room — view ${i + 1}`,
    category: "Suites" as const,
  })),
  ...IMAGES.majesty.photos.slice(0, 2).map((src, i) => ({
    src,
    alt: `Royal Majesty Room — view ${i + 1}`,
    category: "Suites" as const,
  })),
  ...IMAGES.apartment.photos.slice(0, 2).map((src, i) => ({
    src,
    alt: `Presidential Apartment — view ${i + 1}`,
    category: "Suites" as const,
  })),
  ...IMAGES.classic.photos.slice(0, 1).map((src) => ({
    src,
    alt: "Classic Room",
    category: "Suites" as const,
  })),
  ...IMAGES.eventHall.photos.map((src, i) => ({
    src,
    alt: `Event Hall — setup ${i + 1}`,
    category: "Events" as const,
  })),
  ...IMAGES.lounge.photos.slice(0, 3).map((src, i) => ({
    src,
    alt: `Lounge & Stage — view ${i + 1}`,
    category: "Amenities" as const,
  })),
  ...IMAGES.snookerBar.photos.slice(0, 2).map((src, i) => ({
    src,
    alt: `Snooker Bar — view ${i + 1}`,
    category: "Amenities" as const,
  })),
  ...IMAGES.frontDesk.photos.slice(0, 1).map((src) => ({
    src,
    alt: "Reception & front desk",
    category: "Amenities" as const,
  })),
  ...IMAGES.exterior.photos.map((src, i) => ({
    src,
    alt: `Kelmi exterior — view ${i + 1}`,
    category: "Exterior" as const,
  })),
] as const

/** Gallery hero — every unique gallery photo in stable grid order.
 *  Deduped by src (first occurrence wins); logo and non-photo assets excluded.
 *  Derived from GALLERY so the hero updates whenever the grid does. */
export const GALLERY_HERO: string[] = (() => {
  const seen = new Set<string>()
  const out: string[] = []
  for (const item of GALLERY) {
    if (!item.src.endsWith(".webp")) continue
    if (item.src.includes("/logo/")) continue
    if (seen.has(item.src)) continue
    seen.add(item.src)
    out.push(item.src)
  }
  return out
})()
