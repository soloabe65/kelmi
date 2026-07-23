"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Section } from "@/components/ui/section"

const categories = ["All", "Suites", "Events", "Dining", "Amenities", "Nature"]

const galleryItems = [
  { src: "/images/gallery-1.jpg", alt: "Presidential Suite", category: "Suites" },
  { src: "/images/gallery-2.jpg", alt: "Grand Ballroom", category: "Events" },
  { src: "/images/gallery-3.jpg", alt: "Fine Dining", category: "Dining" },
  { src: "/images/gallery-4.jpg", alt: "Honeymoon Suite", category: "Suites" },
  { src: "/images/gallery-5.jpg", alt: "Front Gate", category: "Nature" },
  { src: "/images/gallery-6.jpg", alt: "Penthouse Suite", category: "Suites" },
  { src: "/images/gallery-7.jpg", alt: "Garden Pavilion", category: "Events" },
  { src: "/images/gallery-8.jpg", alt: "Terrace Bar", category: "Dining" },
  { src: "/images/gallery-9.jpg", alt: "Executive Lodge", category: "Suites" },
  { src: "/images/gallery-10.jpg", alt: "Property View", category: "Nature" },
  { src: "/images/gallery-11.jpg", alt: "Family Lodge", category: "Suites" },
  { src: "/images/gallery-12.jpg", alt: "Conference Hall", category: "Events" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory,
  )

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const navigate = (dir: "prev" | "next") => {
    if (lightboxIndex === null) return
    const total = filtered.length
    const next =
      dir === "next"
        ? (lightboxIndex + 1) % total
        : (lightboxIndex - 1 + total) % total
    setLightboxIndex(next)
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary/8)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary tracking-[0.3em] uppercase text-sm font-medium"
          >
            Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mt-4"
          >
            A Visual Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 mt-4 max-w-2xl mx-auto text-lg"
          >
            Explore Kelmi through our lens. Each image tells a story of elegance, nature, and warmth.
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-secondary"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.button
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-neutral-100"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.src})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium">{item.alt}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
              className="absolute left-6 text-white/70 hover:text-white"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[85vh] w-full mx-6 rounded-2xl overflow-hidden bg-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-[70vh] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${filtered[lightboxIndex]?.src})`,
                }}
              />
              <div className="p-4 text-center text-white">
                <p className="font-medium">{filtered[lightboxIndex]?.alt}</p>
                <p className="text-sm text-neutral-400 mt-1">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); navigate("next"); }}
              className="absolute right-6 text-white/70 hover:text-white"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}