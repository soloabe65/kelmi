/**
 * Single source of truth for site-wide contact details.
 * Everything user-facing that names the location, phone, or email must read from here.
 */

export const SITE = {
  name: "Kelmi Lodge & Event Hall",
  shortName: "Kelmi Lodge",
  domain: "kelmilodgeandeventhall.com",
  url: "https://kelmilodgeandeventhall.com",
} as const

/** Canonical address. Confirmed by the owner 2026-09-28. */
export const ADDRESS = {
  street: "KM 4, DSC Expressway by Karika Filling Station",
  area: "Otokutu",
  city: "Ughelli South",
  state: "Delta State",
  postalCode: "333117",
  country: "Nigeria",
  /** Single-line form for cards and footers. */
  oneLine: "KM 4, DSC Expressway by Karika Filling Station, Otokutu, Ughelli South, Delta State",
  /** Short form for tight spaces. */
  short: "KM 4, DSC Expressway, Otokutu, Delta State",
} as const

export const CONTACT = {
  /** WhatsApp-ready, no + or spaces. */
  phone: "2349014971739",
  /** Human-readable. */
  phoneDisplay: "+234 901 497 1739",
  phoneE164: "+2349014971739",
  reservationsEmail: "reservations@kelmilodgeandeventhall.com",
  infoEmail: "info@kelmilodgeandeventhall.com",
  whatsappUrl: "https://wa.me/2349014971739",
} as const

/** Verified on Google Maps. Plus Code GRWG+887. */
export const LOCATION = {
  lat: 5.5460703,
  lng: 5.8266481,
  plusCode: "GRWG+887",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=5.5460703,5.8266481",
  satelliteEmbed:
    "https://www.google.com/maps?q=5.5460703,5.8266481&z=19&t=k&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=5.5460703,5.8266481",
} as const

/** Booking and contact response promise. Shown on /book and /contact. */
export const RESPONSE_TIME = "2 hours"

/** Live Google Business Profile rating. Every rating display reads from here — never hardcode it. No review count is stated anywhere (none provided). */
export const GOOGLE_RATING = 3.8

/** Google Business Profile — every rating display links here. */
export const GOOGLE_PROFILE_URL = "https://share.google/fjmXaQl5N6F7pZ6Vn"
