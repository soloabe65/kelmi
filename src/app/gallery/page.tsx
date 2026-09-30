"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Sparkles, Expand } from "lucide-react"
import { Section } from "@/components/ui/section"
import { AuroraText } from "@/components/magicui/aurora-text"
import { GALLERY, GALLERY_CATEGORIES, GALLERY_HERO } from "@/lib/images"
import CtaBanner from "@/components/ui/cta-banner"

const categories = ["All", ...GALLERY_CATEGORIES]

const galleryItems = GALLERY

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [heroIndex, setHeroIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  // Faster than the other heroes; paused on hover, off when reduced motion is preferred.
  useEffect(() => {
    if (reduceMotion || paused || GALLERY_HERO.length < 2) return
    const id = setInterval(() => setHeroIndex((p) => (p + 1) % GALLERY_HERO.length), 3500)
    return () => clearInterval(id)
  }, [reduceMotion, paused])

  // Preload the next slide so crossfades never flash. One Image object only —
  // the hero mounts a single slide at a time.
  useEffect(() => {
    if (GALLERY_HERO.length < 2) return
    const next = new Image()
    next.src = GALLERY_HERO[(heroIndex + 1) % GALLERY_HERO.length]
  }, [heroIndex])

  const filtered = galleryItems.filter((item) => activeCategory === "All" || item.category === activeCategory)
  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const navigate = (dir: "prev" | "next") => {
    if (lightboxIndex === null) return
    const total = filtered.length
    setLightboxIndex((prev) => prev === null ? 0 : dir === "next" ? (prev + 1) % total : (prev - 1 + total) % total)
  }

  return (
    <>
      <section
        className="relative pt-32 pb-20 bg-secondary overflow-hidden min-h-[560px] flex items-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 1.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${GALLERY_HERO[heroIndex]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium border border-primary/20 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur"><Sparkles className="w-3 h-3" /> Gallery</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mt-6">A visual <AuroraText className="font-serif font-bold">journey</AuroraText></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">Filter by mood, tap to expand — every frame is Kelmi light, texture, and warmth.</motion.p>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur px-4 py-1.5 text-xs font-medium tabular-nums text-white/90" aria-live="polite">
          {heroIndex + 1} / {GALLERY_HERO.length}
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${activeCategory === cat ? "bg-secondary text-white border-secondary shadow-lg" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"}`}>
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.button
                key={`${item.src}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className="relative group rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-200"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${item.src})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium truncate">{item.alt}</span>
                  <span className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center ml-2 shrink-0"><Expand className="w-3.5 h-3.5 text-secondary" /></span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && <p className="text-center text-neutral-500 mt-12">No images in this filter.</p>}
      </Section>

      <CtaBanner />

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6" onClick={closeLightbox}>
            <button onClick={closeLightbox} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"><X className="w-5 h-5" /></button>
            <button onClick={(e) => { e.stopPropagation(); navigate("prev") }} className="absolute left-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"><ChevronLeft className="w-6 h-6" /></button>
            <motion.div key={lightboxIndex} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} className="max-w-5xl w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10" onClick={(e) => e.stopPropagation()}>
              <div className="w-full h-[62vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${filtered[lightboxIndex]?.src})` }} />
              <div className="p-4 text-center text-white flex items-center justify-between">
                <p className="font-medium">{filtered[lightboxIndex]?.alt}</p>
                <p className="text-sm text-white/60">{lightboxIndex + 1} / {filtered.length}</p>
              </div>
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); navigate("next") }} className="absolute right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"><ChevronRight className="w-6 h-6" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
