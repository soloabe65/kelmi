"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CtaBanner from "@/components/ui/cta-banner"
import { PartyPopper, Trophy, Sparkles, Coffee, Car, Shield, ConciergeBell } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid"
import { AuroraText } from "@/components/magicui/aurora-text"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { IMAGES, AMENITIES_HERO } from "@/lib/images"
import { CONTACT } from "@/lib/site"

const bentoAmenities = [
  { Icon: PartyPopper, name: "Lounge & Stage", description: "Private lounge with stage — gatherings, live music, bespoke events.", href: "/contact", cta: "Enquire about the lounge", background: <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.lounge.lead})` }} />, className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2" },
  { Icon: Trophy, name: "Snooker Bar", description: "Classic snooker bar — styled lounge, drinks, friendly matches.", href: "/contact", cta: "Enquire about the bar", background: <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.snookerBar.lead})` }} />, className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2" },
  { Icon: Sparkles, name: "Reception & Check-in", description: "24-hour front desk, valet parking and 24/7 security on arrival.", href: "/contact", cta: "Plan your arrival", background: <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.frontDesk.lead})` }} />, className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3" },
  { Icon: ConciergeBell, name: "Concierge & Support", description: `Round-the-clock care — reservations, airport pickup & tailored help. Call ${CONTACT.phoneDisplay}.`, href: "/contact", cta: `Call ${CONTACT.phoneDisplay}`, background: <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.frontDesk.photos[1]})` }} />, className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3" },
]

const convenience = [
  { icon: Car, label: "Valet & Security", desc: "Complimentary valet + 24h security." },
  { icon: Coffee, label: "In-Room Service", desc: "Refreshments delivered to your suite, 24/7." },
  { icon: Shield, label: "Concierge", desc: "Reservations, transport, bespoke requests." },
  { icon: Sparkles, label: "Laundry Service", desc: "Express laundry and pressing available." },
]

export default function AmenitiesPage() {
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setHeroIndex((p) => (p + 1) % AMENITIES_HERO.length), 5200)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section className="relative pt-32 pb-24 bg-neutral-900 overflow-hidden min-h-[560px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${AMENITIES_HERO[heroIndex]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full"><Sparkles className="w-3 h-3" /> Amenities</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mt-6">Everything you <AuroraText className="font-serif font-bold">need</AuroraText></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">Every detail is designed for ease — lounge, snooker bar, and effortless service.</motion.p>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {AMENITIES_HERO.map((_, i) => (
            <button key={i} onClick={() => setHeroIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`transition-all duration-400 rounded-full ${i === heroIndex ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Gather & Play" subtitle="Lounge, stage, and snooker — curated for private gatherings and easy evenings." />
          <BentoGrid className="lg:grid-rows-2 mt-6">
            {bentoAmenities.map((f) => (
              <BentoCard key={f.name} {...f} />
            ))}
          </BentoGrid>
        </div>
      </section>

      <Section>
        <SectionHeader title="Services & Convenience" subtitle="Thoughtful touches, available without asking." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {convenience.map((item) => (
            <motion.div key={item.label} variants={staggerItem} className="rounded-2xl bg-white border border-neutral-200 p-6 hover:shadow-md transition-shadow">
              <item.icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-medium text-secondary">{item.label}</h3>
              <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      <CtaBanner />
    </>
  )
}
