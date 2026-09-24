"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PartyPopper, Trophy, Sparkles, Coffee, Car, Shield, Wifi, TreePine, ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid"
import { AuroraText } from "@/components/magicui/aurora-text"
import { staggerContainer, staggerItem } from "@/lib/animations"

const bentoAmenities = [
  { Icon: PartyPopper, name: "Lounge & Stage", description: "Private lounge with stage — gatherings, live music, bespoke events.", href: "/contact", cta: "Lounge details", background: <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80)" }} />, className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2" },
  { Icon: Trophy, name: "Snooker Bar", description: "Classic snooker (pool) bar — styled lounge, drinks, friendly matches.", href: "/contact", cta: "Visit snooker bar", background: <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1515620268728-658ed88b02f3?w=800&q=80)" }} />, className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2" },
  { Icon: Sparkles, name: "Spa & Wellness", description: "Massage, facials, hydrotherapy — holistic calm.", href: "/contact", cta: "View spa", background: <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80)" }} />, className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3" },
  { Icon: TreePine, name: "Nature & Concierge", description: "Trails, valet, 24/7 concierge, premium WiFi — all included.", href: "/contact", cta: "Meet concierge", background: <div className="absolute inset-0 bg-gradient-to-br from-secondary to-black" />, className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3" },
]

const convenience = [
  { icon: Car, label: "Valet & Security", desc: "Complimentary valet + 24h security." },
  { icon: Coffee, label: "In-Room Dining", desc: "Gourmet delivery to your suite, 24/7." },
  { icon: Shield, label: "Concierge", desc: "Reservations, transport, bespoke requests." },
  { icon: Wifi, label: "Premium WiFi", desc: "High-speed, property-wide, complimentary." },
]

export default function AmenitiesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,90,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full"><Sparkles className="w-3 h-3" /> Amenities</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mt-6">Everything you <AuroraText className="font-serif font-bold">need</AuroraText></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">Every detail is designed for ease — lounge, snooker bar, dining, and effortless service.</motion.p>
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
        <div className="text-center mt-10">
          <Link href="/book" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors">Book your stay <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </Section>
    </>
  )
}
