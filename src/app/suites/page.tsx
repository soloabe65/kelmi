"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"

// Beechnut Rooms pattern — rebuilt with Kelmi premium (prices untouched: 20k-50k) — kelmilodgeandeventhall.com
const CATEGORIES = ["all", "classic", "executive", "majesty", "presidential", "royal"] as const

type Room = {
  id: string
  name: string
  type: string
  description: string
  price: number
  image: string
  images: string[]
  amenities: string[]
  badge: string
  href: string
}

const ROOMS: Room[] = [
  {
    id: "classic",
    name: "Classic Room",
    type: "classic",
    description: "Essential comfort — serene, handcrafted, thoughtfully appointed for the budget-conscious traveller.",
    price: 20000,
    image: "/images/suite-family.jpg",
    images: ["/images/suite-family.jpg", "/images/gallery-5.jpg"],
    amenities: ["Air Conditioning", "En-suite Bathroom", "Work Desk", "Daily Housekeeping"],
    badge: "Classic",
    href: "/suites/standard",
  },
  {
    id: "executive",
    name: "Executive Room",
    type: "executive",
    description: "Business-ready — quiet, bright, workstation and premium comfort, perfect for corporate stays.",
    price: 25000,
    image: "/images/suite-garden.jpg",
    images: ["/images/suite-garden.jpg", "/images/suite-executive.jpg"],
    amenities: ["Work Desk", "Air Conditioning", "Rain Shower", "Mini Bar", "Daily Housekeeping"],
    badge: "Business",
    href: "/suites/standard",
  },
  {
    id: "majesty",
    name: "Royal Majesty Room",
    type: "majesty",
    description: "Regal comfort — garden outlook, handcrafted timber, tea ritual and walk-in closet.",
    price: 30000,
    image: "/images/suite-honeymoon.jpg",
    images: ["/images/suite-honeymoon.jpg", "/images/gallery-1.jpg"],
    amenities: ["Garden Access", "Tea Station", "Walk-in Closet", "King Bed", "Daily Housekeeping"],
    badge: "Royal",
    href: "/suites/standard",
  },
  {
    id: "apartment",
    name: "Presidential Apartment",
    type: "presidential",
    description: "Apartment-style living — curated art, living area, kitchenette and garden terrace.",
    price: 35000,
    image: "/images/suite-penthouse.jpg",
    images: ["/images/suite-penthouse.jpg", "/images/venue-pavilion.jpg"],
    amenities: ["Living Area", "Kitchenette", "Garden Terrace", "Workstation", "Daily Housekeeping"],
    badge: "Apartment",
    href: "/suites/presidential",
  },
  {
    id: "silver",
    name: "Royal Executive Suite (Silver)",
    type: "royal",
    description: "Elevated elegance — spacious lounge, forest views, premium minibar and rain shower.",
    price: 40000,
    image: "/images/suite-executive.jpg",
    images: ["/images/suite-executive.jpg", "/images/gallery-9.jpg"],
    amenities: ["Forest Views", "Premium Minibar", "Rain Shower", "Work Desk", "Lounge Access"],
    badge: "Most Popular",
    href: "/suites/presidential",
  },
  {
    id: "gold",
    name: "Royal Executive Suite (Gold)",
    type: "royal",
    description: "Flagship — panoramic terrace, private living, jacuzzi, butler service and finest amenities.",
    price: 50000,
    image: "/images/suite-presidential.jpg",
    images: ["/images/suite-presidential.jpg", "/images/gallery-1.jpg"],
    amenities: ["Panoramic Views", "Butler Service", "Jacuzzi & Rain Shower", "Private Terrace", "Daily Housekeeping"],
    badge: "Flagship",
    href: "/suites/presidential",
  },
]

const heroBgVariants = {
  enter: { opacity: 0, scale: 1.08 },
  center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as any } },
  exit: { opacity: 0, scale: 1.08, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any } },
}

export default function SuitesPage() {
  const [filter, setFilter] = useState("all")
  const [slideIndex, setSlideIndex] = useState(0)
  const heroSlides = ROOMS.flatMap((r) => r.images)
  const activeRooms = filter === "all" ? null : ROOMS.filter((r) => r.type === filter)

  useEffect(() => {
    const t = setInterval(() => setSlideIndex((i) => (i + 1) % heroSlides.length), 4500)
    return () => clearInterval(t)
  }, [heroSlides.length])

  return (
    <>
      {/* Hero — Beechnut 60vh rotating, Kelmi premium */}
      <section className="relative h-[60vh] min-h-[420px] flex flex-col items-center justify-center text-center overflow-hidden bg-secondary" aria-label="Rooms and Suites at Kelmi Lodge">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={slideIndex}
              src={heroSlides[slideIndex]}
              alt=""
              width="1920"
              height="1080"
              variants={heroBgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/45 to-secondary/75" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-4">
          <span className="text-xs font-semibold tracking-[0.28em] uppercase text-primary mb-3 block">Kelmi Lodge & Event Hall • kelmilodgeandeventhall.com</span>
          <h1 className="font-serif text-[clamp(2.8rem,6vw,4.4rem)] font-bold text-white leading-tight mb-4">
            Rooms & <em className="italic text-primary not-italic"><AuroraText className="font-serif font-bold">Suites</AuroraText></em>
          </h1>
        </motion.div>
      </section>

      {/* Filter — Beechnut pill bar, Kelmi colors */}
      <section className="bg-white border-b border-secondary/10 shadow-sm" aria-label="Room categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-2 flex-wrap" role="group" aria-label="Filter rooms by category">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-pressed={filter === cat}
                className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 ${
                  filter === cat
                    ? "bg-secondary text-primary border-secondary shadow-md"
                    : "bg-transparent text-neutral-500 border-secondary/15 hover:border-primary hover:text-primary"
                }`}
              >
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Content — Beechnut grid, Kelmi 6 rates intact */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Accommodation</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-secondary leading-tight mb-2">
              Find Your Perfect <em className="text-primary not-italic">Room</em>
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto">Every room is a sanctuary — curated furnishings, premium linens, and thoughtful amenities. From ₦20,000 Classic to ₦50,000 Gold.</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filter === "all"
                ? ROOMS.map((room) => (
                    <motion.article key={room.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-secondary/5 flex flex-col group" whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
                      <div className="relative overflow-hidden aspect-[16/10]">
                        <img src={room.image} alt={room.name} width="1600" height="1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
                        {room.badge !== "Classic" && (
                          <span className={`absolute top-3 left-3 z-10 text-[0.6rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${room.badge === "Most Popular" ? "bg-primary text-secondary" : room.badge === "Flagship" ? "bg-secondary text-primary" : "bg-secondary text-white"}`}>
                            {room.badge}
                          </span>
                        )}
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">{room.type.charAt(0).toUpperCase() + room.type.slice(1)}</span>
                        <h3 className="font-serif text-xl font-semibold text-secondary mb-2">{room.name}</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-3">{room.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {room.amenities.slice(0, 5).map((a) => (
                            <span key={a} className="text-xs bg-neutral-50 border border-secondary/10 rounded-full px-2.5 py-1 text-neutral-500 font-medium">
                              {a}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-secondary/10 gap-2 flex-wrap">
                          <div>
                            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400 block">From</span>
                            <span className="font-serif text-xl font-semibold text-secondary">₦{room.price.toLocaleString("en-NG")}</span>
                            <span className="text-xs text-neutral-400"> / night</span>
                          </div>
                          <div className="flex gap-1.5">
                            <Link href={room.href} className="px-3 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all">
                              Details
                            </Link>
                            <Link href={`/book?room=${room.id}`} className="px-3 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm bg-primary text-secondary hover:bg-secondary hover:text-primary transition-all border-2 border-primary hover:border-secondary">
                              Book
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))
                : activeRooms && activeRooms.length > 0
                  ? activeRooms.flatMap((room) =>
                      room.images.map((img, i) => (
                        <motion.figure key={`${room.id}-${img}`} className="relative overflow-hidden rounded-lg aspect-[16/10] group bg-secondary" whileHover={{ y: -6 }}>
                          <img src={img} alt={`${room.name} — photo ${i + 1}`} width="1600" height="1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                            <span className="text-xs font-semibold tracking-widest uppercase text-primary">{room.name}</span>
                            <span className="text-[0.65rem] font-medium tracking-wider uppercase text-white/70 block">Photo {i + 1} of {room.images.length} • ₦{room.price.toLocaleString("en-NG")}/night</span>
                          </figcaption>
                        </motion.figure>
                      ))
                    )
                  : (
                    <p className="col-span-full text-center text-neutral-500 py-12">No images for this category yet.</p>
                  )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA — Beechnut navy, Kelmi premium */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="py-16 bg-secondary text-center relative overflow-hidden">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Direct Booking Advantage</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-3">
            Book Direct & <em className="text-primary not-italic">Save More</em>
          </h2>
          <p className="text-white/60 mb-6">Best available rates at kelmilodgeandeventhall.com — complimentary early check-in (subject to availability) and direct perks.</p>
          <Link href="/book" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary text-secondary hover:bg-primary-dark transition-colors">
            Reserve a Room <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.section>
    </>
  )
}
