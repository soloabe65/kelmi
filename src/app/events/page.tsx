"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, PartyPopper, Briefcase, Heart, Sparkles, CheckCircle2, Landmark, Home, Shield, MessageCircle, Calendar } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { AuroraText } from "@/components/magicui/aurora-text"
import { BorderBeam } from "@/components/magicui/border-beam"
import CtaBanner from "@/components/ui/cta-banner"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { IMAGES, EVENTS_HERO } from "@/lib/images"
import { ADDRESS, CONTACT, RESPONSE_TIME } from "@/lib/site"

const eventTypes = [
  { icon: Heart, title: "Weddings", desc: "Say 'I do' in breathtaking delta light.", image: IMAGES.eventHall.photos[0], capacity: "Up to 300 guests", packages: "3 packages", color: "from-rose-500/10 to-primary/10" },
  { icon: Users, title: "Conferences", desc: "Professional venues, latest tech.", image: IMAGES.eventHall.photos[1], capacity: "Up to 400 attendees", packages: "Half & full day", color: "from-emerald-500/10 to-primary/10" },
  { icon: PartyPopper, title: "Social", desc: "Birthdays, anniversaries, garden parties.", image: IMAGES.lounge.lead, capacity: "Up to 150 guests", packages: "Custom", color: "from-amber-500/10 to-primary/10" },
  { icon: Briefcase, title: "Corporate", desc: "Conferences with flawless AV & service.", image: IMAGES.eventHall.photos[2], capacity: "Up to 200 delegates", packages: "Day & multi-day", color: "from-blue-500/10 to-primary/10" },
]

// Everything below is built only from what the site already says: the hall,
// the lounge, on-site suites, valet + 24h security, the DSC Expressway
// location, direct booking perks, the 2-hour response and the 48-hour proposal.
const onProperty = [
  { icon: Landmark, title: "The Event Hall", desc: "The main hall dressed for the day — stage, lighting and immersive sound, room for up to 400 guests.", image: IMAGES.eventHall.photos[1], href: "/contact", cta: "Enquire about the hall" },
  { icon: PartyPopper, title: "Lounge & Stage", desc: "Private lounge with stage — live music and bespoke service for smaller gatherings.", image: IMAGES.lounge.photos[1], href: "/amenities", cta: "Explore the lounge" },
  { icon: Home, title: "Guest Suites", desc: "Six room classes from ₦20,000 — out-of-town guests stay over on site.", image: IMAGES.apartment.lead, href: "/suites", cta: "View suites" },
  { icon: Shield, title: "Safe Arrival", desc: `${ADDRESS.short} — complimentary valet and 24h security on arrival.`, image: IMAGES.exterior.photos[1], href: "/contact", cta: "Plan your arrival" },
]

const steps = [
  { icon: MessageCircle, title: "Say hello", desc: `Message us on WhatsApp — we reply within ${RESPONSE_TIME}.`, href: CONTACT.whatsappUrl, cta: "Chat now", external: true },
  { icon: Calendar, title: "Visit & proposal", desc: "Come for a site visit; your bespoke proposal follows within 48 hours.", href: "/contact", cta: "Book a visit", external: false },
  { icon: CheckCircle2, title: "Celebrate", desc: "Valet and 24h security on arrival. Book direct for the best rate and direct perks.", href: "/book", cta: "Book direct", external: false },
]

export default function EventsPage() {
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setHeroIndex((p) => (p + 1) % EVENTS_HERO.length), 5200)
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
            style={{ backgroundImage: `url(${EVENTS_HERO[heroIndex]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full"><Sparkles className="w-3 h-3" /> Event Hall</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mt-6">Celebrate at <AuroraText className="font-serif font-bold">Kelmi</AuroraText></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">From intimate garden vows to 400-guest galas — cinematic spaces, thoughtful planning, unforgettable flow.</motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href="/contact" className="bg-primary text-secondary px-7 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">Inquire now</Link>
            <Link href="/gallery" className="bg-white/10 backdrop-blur border border-white/20 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white/15 transition-colors">View gallery</Link>
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {EVENTS_HERO.map((_, i) => (
            <button key={i} onClick={() => setHeroIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`transition-all duration-400 rounded-full ${i === heroIndex ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`} />
          ))}
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
        <SectionHeader title="Everything for your event, on one property" subtitle="Hosts never need to leave the grounds — hall, lounge, suites and a safe arrival." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid sm:grid-cols-2 gap-6">
          {onProperty.map((c) => (
            <motion.div key={c.title} variants={staggerItem} className="group rounded-[20px] overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-lg transition-all">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${c.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <c.icon className="absolute bottom-4 left-4 w-7 h-7 text-white drop-shadow" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-secondary">{c.title}</h3>
                <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{c.desc}</p>
                <Link href={c.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4 hover:gap-2 transition-all">
                  {c.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <SectionHeader title="How your event comes together" subtitle="From first message to celebration — three steps." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} variants={staggerItem} className="relative rounded-[20px] bg-white border border-neutral-200 p-7 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <span className="absolute top-5 right-6 font-serif text-4xl text-primary/15">0{i + 1}</span>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"><s.icon className="w-6 h-6 text-primary" /></div>
              <h3 className="font-serif text-xl text-secondary">{s.title}</h3>
              <p className="text-sm text-neutral-500 mt-2 leading-relaxed">{s.desc}</p>
              {s.external ? (
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4 hover:gap-2 transition-all">
                  {s.cta} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <Link href={s.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4 hover:gap-2 transition-all">
                  {s.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <CtaBanner />
    </>
  )
}
