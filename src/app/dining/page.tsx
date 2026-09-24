"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, Star, UtensilsCrossed, Wine, Coffee, PartyPopper, Heart, ChefHat, Sparkles } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { AuroraText } from "@/components/magicui/aurora-text"
import { BorderBeam } from "@/components/magicui/border-beam"
import { ShineBorder } from "@/components/magicui/shine-border"
import { staggerContainer, staggerItem } from "@/lib/animations"

const venues = [
  { name: "The Golden Fork", type: "Fine Dining", desc: "Award-winning tasting menus, locally-sourced, globally refined.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", hours: "6 PM - 10:30 PM", rating: 5 },
  { name: "The Terrace Bar", type: "Bar & Lounge", desc: "Handcrafted cocktails, small plates, sunset delta views.", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80", hours: "4 PM - 12 AM", rating: 4.5 },
  { name: "The Veranda Cafe", type: "Casual", desc: "All-day pastries, light lunches, artisanal coffee in the garden.", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80", hours: "7 AM - 5 PM", rating: 4.5 },
]

const cateringServices = [
  { label: "Corporate Breakfasts", image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&q=80", icon: Coffee },
  { label: "Gala Dinners", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80", icon: UtensilsCrossed },
  { label: "Cocktail & Canapés", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80", icon: Wine },
  { label: "Wedding Banquets", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80", icon: PartyPopper },
  { label: "Private Chef", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80", icon: ChefHat },
  { label: "Dietary Care", image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&q=80", icon: Heart },
]

export default function DiningPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,90,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full"><Sparkles className="w-3 h-3" /> Culinary Excellence</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mt-6">Dining at <AuroraText className="font-serif font-bold">Kelmi</AuroraText></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">Local fire, seasonal produce, and warm service — from Veranda morning to Golden Fork night.</motion.p>
        </div>
      </section>

      <Section>
        <SectionHeader title="Our venues" subtitle="Three settings, one kitchen philosophy — honest, fire-led, and deeply local." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-3 gap-6">
          {venues.map((v) => (
            <motion.div key={v.name} variants={staggerItem} className="group relative rounded-[20px] overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all">
              <BorderBeam size={200} duration={14} colorFrom="#C5A55A" colorTo="#E8D5B5" />
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${v.image})` }} />
              <div className="p-6">
                <span className="text-xs text-primary tracking-wider uppercase font-medium">{v.type}</span>
                <h3 className="font-serif text-xl text-secondary mt-1">{v.name}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mt-2">{v.desc}</p>
                <div className="flex items-center gap-4 text-xs text-neutral-500 mt-4">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{v.hours}</span>
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-primary text-primary" />{v.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-neutral-50">
        <SectionHeader title="Catering & Private Dining" subtitle="From boardroom breakfast to garden wedding — same kitchen, same care." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cateringServices.map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.label} variants={staggerItem} className="relative group rounded-2xl overflow-hidden h-48 border border-white/10 shadow-sm">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <Icon className="w-7 h-7 text-primary mb-2" />
                  <span className="font-serif text-[15px] text-white">{item.label}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section>
        <ShineBorder borderWidth={1} duration={12} shineColor={["#C5A55A","#E8D5B5"]} className="bg-white">
          <div className="text-center p-8">
            <h2 className="font-serif text-3xl text-secondary">Reserve a table</h2>
            <p className="text-sm text-neutral-500 mt-2 max-w-lg mx-auto">Walk-ins welcome, reservations preferred — especially for Golden Fork weekends.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-6 bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors">Make a reservation <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </ShineBorder>
      </Section>
    </>
  )
}
