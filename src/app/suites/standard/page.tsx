"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Home, Sparkles } from "lucide-react"
import { Section } from "@/components/ui/section"
import { AuroraText } from "@/components/magicui/aurora-text"
import { BorderBeam } from "@/components/magicui/border-beam"
import { staggerContainer, staggerItem } from "@/lib/animations"

const rooms = [
  { title: "Royal Majesty Room", desc: "Regal comfort — garden outlook, handcrafted timber, tea ritual.", image: "/images/suite-honeymoon.jpg", price: "₦30,000", features: ["Garden Access", "Tea Station", "Walk-in Closet", "King Bed"] },
  { title: "Executive Room", desc: "Business-ready — bright, quiet, workstation and premium WiFi.", image: "/images/suite-garden.jpg", price: "₦25,000", features: ["Work Desk", "Mini Bar", "Rain Shower", "Two Guests"] },
  { title: "Classic Room", desc: "Essential comfort — serene, handcrafted, thoughtfully appointed.", image: "/images/suite-family.jpg", price: "₦20,000", features: ["Garden View", "Organic Linen", "Breakfast Opt.", "Tea Station"] },
]

export default function StandardRoomsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,90,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full"><Home className="w-3 h-3" /> Classic Tier</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mt-6">Classic & <AuroraText className="font-serif font-bold">Majesty</AuroraText></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">₦20,000 — ₦30,000 • Majesty, Executive & Classic — timeless value.</motion.p>
        </div>
      </section>

      <Section>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {rooms.map((room) => (
            <motion.div key={room.title} variants={staggerItem} className="group relative rounded-[20px] overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all">
              <BorderBeam size={200} duration={12} colorFrom="#C5A55A" colorTo="#E8D5B5" />
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${room.image})` }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg text-secondary flex items-center gap-2 leading-tight"><Sparkles className="w-4 h-4 text-primary shrink-0" />{room.title}</h3>
                  <span className="text-primary font-bold text-sm shrink-0 ml-2">{room.price}<span className="text-xs text-neutral-400 font-normal">/night</span></span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">{room.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {room.features.map((f) => (
                    <span key={f} className="px-2.5 py-1 text-xs bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">{f}</span>
                  ))}
                </div>
                <Link href="/book" className="inline-flex items-center justify-center w-full gap-2 mt-5 bg-secondary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors">Book this room <ArrowRight className="w-3.5 h-3.5" /></Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  )
}
