"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Crown } from "lucide-react"
import { Section } from "@/components/ui/section"
import { AuroraText } from "@/components/magicui/aurora-text"
import { BorderBeam } from "@/components/magicui/border-beam"
import { ShineBorder } from "@/components/magicui/shine-border"
import { staggerContainer, staggerItem } from "@/lib/animations"

const suites = [
  { title: "Royal Executive Suite (Gold)", desc: "Flagship — panoramic terrace, private living, jacuzzi, butler. Our most prestigious.", image: "/images/suite-presidential.jpg", price: "₦50,000", features: ["Panoramic Views", "Private Terrace", "Jacuzzi", "Butler Service"] },
  { title: "Royal Executive Suite (Silver)", desc: "Elevated elegance — spacious lounge, forest views, premium minibar.", image: "/images/suite-executive.jpg", price: "₦40,000", features: ["Forest Views", "Spacious Lounge", "Premium Minibar", "Rain Shower"] },
  { title: "Presidential Apartment", desc: "Apartment-style — curated art, living area, kitchenette, garden terrace.", image: "/images/suite-penthouse.jpg", price: "₦35,000", features: ["Living Area", "Kitchenette", "Garden Terrace", "Workstation"] },
]

export default function PresidentialPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,90,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full"><Crown className="w-3 h-3" /> Premium Tier</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mt-6">Royal & <AuroraText className="font-serif font-bold">Presidential</AuroraText></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">₦35,000 — ₦50,000 • Gold, Silver & Apartment — flagship hospitality.</motion.p>
        </div>
      </section>

      <Section>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-3 gap-6">
          {suites.map((suite) => (
            <motion.div key={suite.title} variants={staggerItem} className="group relative rounded-[20px] overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all">
              <BorderBeam size={220} duration={12} colorFrom="#C5A55A" colorTo="#E8D5B5" />
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${suite.image})` }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg text-secondary flex items-center gap-2 leading-tight"><Sparkles className="w-4 h-4 text-primary shrink-0" />{suite.title}</h3>
                  <span className="text-primary font-bold text-sm shrink-0 ml-2">{suite.price}<span className="text-xs text-neutral-400 font-normal">/night</span></span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">{suite.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {suite.features.map((f) => (
                    <span key={f} className="px-2.5 py-1 text-xs bg-neutral-50 border border-neutral-200 text-neutral-600 rounded-full">{f}</span>
                  ))}
                </div>
                <Link href="/book" className="inline-flex items-center justify-center w-full gap-2 mt-5 bg-secondary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors">Book this suite <ArrowRight className="w-3.5 h-3.5" /></Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="max-w-3xl mx-auto mt-12">
          <ShineBorder borderWidth={1} duration={14} shineColor={["#C5A55A","#E8D5B5"]} className="bg-neutral-50">
            <div className="p-7 text-center">
              <h3 className="font-serif text-xl text-secondary">See the full collection</h3>
              <p className="text-sm text-neutral-500 mt-1">All 6 classes from Classic ₦20k to Gold ₦50k.</p>
              <Link href="/suites" className="inline-flex items-center gap-2 mt-4 bg-white border border-neutral-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-100">View all rooms <ArrowRight className="w-3.5 h-3.5" /></Link>
            </div>
          </ShineBorder>
        </div>
      </Section>
    </>
  )
}
