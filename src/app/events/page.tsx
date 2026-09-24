"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, PartyPopper, Briefcase, Heart, Sparkles, MapPin, CheckCircle2 } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { AuroraText } from "@/components/magicui/aurora-text"
import { BorderBeam } from "@/components/magicui/border-beam"
import { ShineBorder } from "@/components/magicui/shine-border"
import { staggerContainer, staggerItem } from "@/lib/animations"

const eventTypes = [
  { icon: Heart, title: "Weddings", desc: "Say 'I do' in breathtaking delta light.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", capacity: "Up to 300 guests", packages: "3 packages", color: "from-rose-500/10 to-primary/10" },
  { icon: Briefcase, title: "Corporate", desc: "Conferences with flawless AV & service.", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80", capacity: "Up to 200 delegates", packages: "Day & multi-day", color: "from-blue-500/10 to-primary/10" },
  { icon: PartyPopper, title: "Social", desc: "Birthdays, anniversaries, garden parties.", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80", capacity: "Up to 150 guests", packages: "Custom", color: "from-amber-500/10 to-primary/10" },
  { icon: Users, title: "Conferences", desc: "Professional venues, latest tech.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", capacity: "Up to 400 attendees", packages: "Half & full day", color: "from-emerald-500/10 to-primary/10" },
]

const venues = [
  { name: "The Grand Ballroom", capacity: "400 seated / 600 cocktail", features: ["Crystal chandeliers", "Stage & dance floor", "Immersive sound"], image: "/images/venue-ballroom.jpg" },
  { name: "Garden Pavilion", capacity: "200 seated / 300 cocktail", features: ["Open-air terrace", "Garden views", "Twilight lighting"], image: "/images/venue-pavilion.jpg" },
  { name: "Boardroom", capacity: "20 seated", features: ["Video conferencing", "Whiteboard walls", "Private catering"], image: "/images/venue-boardroom.jpg" },
]

export default function EventsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,90,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full"><Sparkles className="w-3 h-3" /> Event Center</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mt-6">Celebrate at <AuroraText className="font-serif font-bold">Kelmi</AuroraText></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">From intimate garden vows to 400-guest galas — cinematic spaces, thoughtful planning, unforgettable flow.</motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href="/contact" className="bg-primary text-secondary px-7 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">Inquire now</Link>
            <Link href="/gallery" className="bg-white/10 backdrop-blur border border-white/20 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white/15 transition-colors">View gallery</Link>
          </motion.div>
        </div>
      </section>

      <Section>
        <SectionHeader title="Every occasion, refined" subtitle="We choreograph light, sound, and service so your event feels effortless." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-2 gap-6">
          {eventTypes.map((e) => (
            <motion.div key={e.title} variants={staggerItem} className="group relative rounded-[20px] overflow-hidden bg-white border border-neutral-200 hover:shadow-lg transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${e.color} opacity-60 pointer-events-none`} />
              <BorderBeam size={180} duration={10} colorFrom="#C5A55A" colorTo="#E8D5B5" />
              <div className="relative h-48">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${e.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <e.icon className="absolute bottom-4 left-4 w-8 h-8 text-white drop-shadow" />
              </div>
              <div className="relative p-6">
                <h3 className="font-serif text-xl text-secondary">{e.title}</h3>
                <p className="text-sm text-neutral-500 mt-1">{e.desc}</p>
                <div className="flex gap-3 mt-3">
                  <span className="text-xs bg-neutral-50 border border-neutral-200 px-2.5 py-1 rounded-full text-neutral-600">{e.capacity}</span>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">{e.packages}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-neutral-50">
        <SectionHeader title="Our venues" subtitle="Three settings, one standard — warm, precise, cinematic." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-3 gap-6">
          {venues.map((v) => (
            <motion.div key={v.name} variants={staggerItem} className="rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${v.image})` }} />
              <div className="p-6">
                <h3 className="font-serif text-lg text-secondary flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />{v.name}</h3>
                <p className="text-xs text-primary font-medium mt-1">{v.capacity}</p>
                <ul className="space-y-1.5 mt-3">
                  {v.features.map((f) => (
                    <li key={f} className="text-sm text-neutral-500 flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary/60" />{f}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <ShineBorder borderWidth={1} duration={14} shineColor={["#C5A55A","#E8D5B5"]} className="bg-white shadow-sm">
          <div className="text-center p-8 md:p-10">
            <h2 className="font-serif text-3xl text-secondary">Let’s plan your event</h2>
            <p className="text-sm text-neutral-500 mt-3 max-w-xl mx-auto">Site visit, tasting, and bespoke proposal within 48 hours. Direct booking perks available.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-6 bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors">Inquire now <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </ShineBorder>
      </Section>
    </>
  )
}
