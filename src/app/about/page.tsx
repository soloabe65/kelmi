"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles, ArrowRight, Award, Users, Leaf, Crown } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { AuroraText } from "@/components/magicui/aurora-text"
import { ShineBorder } from "@/components/magicui/shine-border"
import { fadeUp } from "@/lib/animations"

const values = [
  { icon: Users, title: "Exceptional Service", desc: "Anticipating needs, exceeding expectations — every turn, every guest." },
  { icon: Crown, title: "Authentic Experiences", desc: "We celebrate delta culture, cuisine, and craftsmanship in every stay." },
  { icon: Leaf, title: "Sustainable Luxury", desc: "Stewardship without compromise — thoughtful sourcing, lasting comfort." },
  { icon: Award, title: "Timeless Elegance", desc: "Tradition refined for the modern traveler — quiet, warm, precise." },
]

const stats = [
  { value: "2018", label: "Founded", sub: "UG South, Delta" },
  { value: "500+", label: "Events hosted", sub: "Weddings & corporate" },
  { value: "30+", label: "Suites", sub: "Curated collections" },
  { value: "4.9", label: "Rating", sub: "1,200+ reviews" },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,90,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full"><Sparkles className="w-3 h-3" /> Our Story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mt-6">About <AuroraText className="font-serif font-bold">Kelmi</AuroraText></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 mt-4 max-w-2xl mx-auto">Along the DSC Expressway in Otokutu — a sanctuary where modern luxury meets timeless hospitality.</motion.p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-medium">Since 2018 • RC 2660739</span>
            <h2 className="font-serif text-3xl md:text-4xl text-secondary mt-3 leading-tight">A legacy of <span className="text-primary">warmth</span> & hospitality</h2>
            <div className="mt-6 space-y-4 text-neutral-500 leading-relaxed">
              <p>Incorporated in Ughelli South, Delta State, Kelmi Lodge & Event Center was born from a vision to create a sanctuary where modern luxury meets genuine Nigerian warmth.</p>
              <p>From hand-selected art to locally-sourced plates, we believe true luxury lies in the details — and in the people who remember your name, your tea, and your sunrise preference.</p>
              <p>Welcome to Kelmi — your delta home.</p>
            </div>
            <div className="flex gap-3 mt-8">
              <Link href="/suites" className="bg-secondary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors">Explore suites</Link>
              <Link href="/contact" className="border border-neutral-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors">Visit us</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="h-[420px] rounded-[22px] overflow-hidden bg-cover bg-center border border-neutral-200 shadow-xl" style={{ backgroundImage: "url(/images/gallery-5.jpg)" }} />
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-xl hidden md:block">
              <p className="font-serif text-secondary text-lg leading-none">Otokutu Forest</p>
              <p className="text-xs text-neutral-500 mt-1">DSC Expressway • Garden & Pavilion</p>
            </div>
          </motion.div>
        </div>
      </Section>

      <section className="py-12 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="text-center">
              <p className="font-serif text-3xl text-secondary">{s.value}</p>
              <p className="text-sm font-medium text-secondary">{s.label}</p>
              <p className="text-xs text-neutral-400">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Section>
        <SectionHeader title="Our values" subtitle="Principles that guide every light, plate, and welcome." />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }} className="grid sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <motion.div key={v.title} variants={fadeUp} className="group p-7 rounded-2xl bg-white border border-neutral-200 hover:shadow-md hover:border-neutral-300 transition-all">
              <v.icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-lg text-secondary">{v.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mt-2">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-3xl mx-auto mt-12">
          <ShineBorder borderWidth={1} duration={12} shineColor={["#C5A55A","#E8D5B5"]} className="bg-white">
            <div className="p-8 text-center">
              <h3 className="font-serif text-2xl text-secondary">Meet the team</h3>
              <p className="text-sm text-neutral-500 mt-2">General Manager, Head Chef, and Events Lead — here daily, by name.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 mt-5 bg-primary text-secondary px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">Say hello <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </ShineBorder>
        </div>
      </Section>
    </>
  )
}
