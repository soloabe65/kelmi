"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"

const heroBgVariants = {
  enter: { opacity: 0, scale: 1.08 },
  center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as any } },
  exit: { opacity: 0, scale: 1.08, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any } },
}

// Same 6 reviews as Home — dedicated page
const TESTIMONIALS = [
  {
    slug: "chinwe-obi",
    name: "Chinwe Obi",
    role: "Wedding, Port Harcourt",
    date: "2 weeks ago",
    rating: 5,
    text: "Our wedding at Kelmi was absolutely magical. The team went above and beyond every expectation. The venue was breathtaking!",
    image: "https://images.unsplash.com/photo-1763328728510-064ea03a1f8a?w=150&q=80",
    source: "Google",
    isNew: true,
  },
  {
    slug: "emeka-okafor",
    name: "Emeka Okafor",
    role: "Business Traveler, Warri",
    date: "1 month ago",
    rating: 5,
    text: "The perfect blend of luxury and comfort. The event center hosted our conference flawlessly. I recommend Kelmi to everyone.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    source: "Google",
    isNew: false,
  },
  {
    slug: "blessing-adeyemi",
    name: "Blessing Adeyemi",
    role: "Spa Weekend, Ughelli",
    date: "3 weeks ago",
    rating: 5,
    text: "I came for a weekend and never wanted to leave. The spa treatments were world-class and the staff treated me like royalty.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    source: "Google",
    isNew: false,
  },
  {
    slug: "tunde-amaka",
    name: "Tunde & Amaka",
    role: "Anniversary, Lagos",
    date: "5 days ago",
    rating: 5,
    text: "Presidential Suite views at sunrise are unreal. Private terrace breakfast will be our forever memory. Thank you Kelmi!",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&q=80",
    source: "Google",
    isNew: true,
  },
  {
    slug: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Retreat, Asaba",
    date: "1 week ago",
    rating: 5,
    text: "We hosted 120 guests. Everything was seamless — from planning to last dance. Kelmi is Delta's hidden luxury gem.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    source: "Google",
    isNew: false,
  },
  {
    slug: "david-efeturi",
    name: "David Efeturi",
    role: "Chef's Table, Ughelli",
    date: "2 months ago",
    rating: 5,
    text: "The lounge & snooker bar redefined evenings for me — curated drinks, great vibe — truly metropolitan level in the heart of Delta.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    source: "Google",
    isNew: false,
  },
]

const HERO_IMAGES = [
  "/images/suite-presidential.jpg",
  "/images/venue-ballroom.jpg",
  "/images/suite-family.jpg",
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "text-primary fill-primary" : "text-neutral-300 fill-neutral-200"}`} />
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  const [slideIndex, setSlideIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setSlideIndex((i) => (i + 1) % HERO_IMAGES.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* Hero — Beechnut 60vh rotating, Kelmi premium */}
      <section className="relative h-[60vh] min-h-[420px] flex flex-col items-center justify-center text-center overflow-hidden bg-secondary" aria-label="Testimonials at Kelmi Lodge">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={slideIndex}
              src={HERO_IMAGES[slideIndex]}
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
          <span className="text-xs font-semibold tracking-[0.28em] uppercase text-primary mb-3 block">Kelmi Lodge & Event Center</span>
          <h1 className="font-serif text-[clamp(2.8rem,6vw,4.4rem)] font-bold text-white leading-tight mb-4">
            <AuroraText className="font-serif font-bold">Testimonials</AuroraText>
          </h1>
        </motion.div>
      </section>

      {/* Rating summary — Beechnut dark bar */}
      <section className="bg-secondary border-t border-white/10" aria-label="Overall rating">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className="font-serif text-5xl font-bold text-primary leading-none">4.9</span>
            <div className="flex flex-col gap-1">
              <Stars rating={5} />
              <p className="text-xs text-white/60">Overall rating from our guests</p>
            </div>
            <div className="w-px h-10 bg-white/15 hidden sm:block" />
            <p className="text-sm text-white/80">
              <span className="font-bold text-white">6 reviews</span> from weddings, business & retreats
            </p>
          </div>
        </div>
      </section>

      {/* Guest reviews — Beechnut 3-col cards, Kelmi premium */}
      <section className="py-16 lg:py-24 bg-white" aria-label="Guest reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Guest Reviews</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-secondary leading-tight mb-2">
              Stories From Our <em className="text-primary not-italic">Guests</em>
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto">Real words from real guests — same 6 reviews featured on our homepage, now in full.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article key={t.slug} className="bg-white rounded-lg border border-secondary/10 shadow-sm p-6 flex flex-col h-full relative group hover:shadow-md transition-shadow">
                {t.isNew && <span className="absolute top-4 right-4 text-[0.6rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary text-secondary">New</span>}
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.image} alt={`${t.name} — guest photo`} width="96" height="96" className="w-12 h-12 rounded-full object-cover border border-secondary/10" loading="lazy" />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-secondary truncate">{t.name}</h3>
                    <p className="text-xs text-neutral-500">{t.role} • {t.date}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <Stars rating={t.rating} />
                </div>
                <Quote className="w-5 h-5 text-primary/30 mb-2" />
                <p className="text-secondary/70 leading-relaxed mb-4 flex-1">“{t.text}”</p>
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-auto pt-3 border-t border-secondary/5">
                  <span className="w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center text-[8px] font-bold text-secondary">G</span>
                  <span>via {t.source}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video placeholders — Beechnut video grid, Kelmi */}
      <section className="py-16 lg:py-24 bg-neutral-50" aria-label="Video testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Video Testimonials</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-secondary leading-tight mb-2">
              Hear From Our <em className="text-primary not-italic">Guests</em>
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto">Watch guests share their Kelmi story — video stories coming soon.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-video rounded-lg border-2 border-dashed border-secondary/15 bg-white/60 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="w-14 h-14 rounded-full bg-secondary/5 border border-secondary/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-secondary/30 fill-current"><path d="M8 5.5v13l11-6.5-11-6.5z" /></svg>
                </span>
                <p className="text-sm font-medium text-neutral-500">Video coming soon</p>
                <p className="text-[0.7rem] text-neutral-400">Drop MP4 as /public/testimonials/videos/*.mp4</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Beechnut dark */}
      <section className="py-16 lg:py-24 bg-white" aria-label="Book your stay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-secondary to-[#0f1f1f] rounded-lg p-8 lg:p-10 text-center relative overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">Experience It Yourself</h3>
              <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-6">Words only say so much — come and create your own Kelmi story. Your comfort, our promise.</p>
              <div className="flex gap-3 flex-wrap justify-center">
                <Link href="/book" className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary text-secondary hover:bg-primary-dark transition-colors">
                  Book Now
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wider uppercase rounded-full border-2 border-primary text-white hover:bg-primary hover:text-secondary transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
