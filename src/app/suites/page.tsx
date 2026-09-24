"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Crown, Sparkles, BedDouble, Star } from "lucide-react"
import { Section } from "@/components/ui/section"
import { AuroraText } from "@/components/magicui/aurora-text"
import { BorderBeam } from "@/components/magicui/border-beam"
import { ShineBorder } from "@/components/magicui/shine-border"
import { staggerContainer, staggerItem } from "@/lib/animations"

const rooms = [
  {
    title: "Royal Executive Suite (Gold)",
    price: "₦50,000",
    desc: "Flagship suite — panoramic terrace, private living, jacuzzi, butler service.",
    image: "/images/suite-presidential.jpg",
    badge: "Flagship • Gold",
    href: "/suites/presidential",
    features: ["Private terrace", "Butler service", "Jacuzzi"],
  },
  {
    title: "Royal Executive Suite (Silver)",
    price: "₦40,000",
    desc: "Elevated elegance — spacious lounge, forest views, premium minibar.",
    image: "/images/suite-executive.jpg",
    badge: "Most Booked",
    href: "/suites/presidential",
    features: ["Forest views", "Workstation", "Rain shower"],
  },
  {
    title: "Presidential Apartment",
    price: "₦35,000",
    desc: "Apartment-style living — curated art, soft linen, full living & dining.",
    image: "/images/suite-penthouse.jpg",
    badge: "Apartment",
    href: "/suites/presidential",
    features: ["Living & dining", "Kitchenette", "Garden views"],
  },
  {
    title: "Royal Majesty Room",
    price: "₦30,000",
    desc: "Regal comfort — garden outlook, handcrafted timber, tea ritual.",
    image: "/images/suite-honeymoon.jpg",
    badge: "Royal Choice",
    href: "/suites/standard",
    features: ["Garden access", "Tea station", "Walk-in closet"],
  },
  {
    title: "Executive Room",
    price: "₦25,000",
    desc: "Business-ready — quiet, bright, workstation and premium WiFi.",
    image: "/images/suite-garden.jpg",
    badge: "Business",
    href: "/suites/standard",
    features: ["Work desk", "Mini bar", "Two guests"],
  },
  {
    title: "Classic Room",
    price: "₦20,000",
    desc: "Essential comfort — serene, handcrafted, and thoughtfully appointed.",
    image: "/images/suite-family.jpg",
    badge: "Classic",
    href: "/suites/standard",
    features: ["Garden view", "Organic linen", "Breakfast opt."],
  },
]

const perks = [
  { icon: BedDouble, title: "Handcrafted Interiors", desc: "Teak, linen, brass — tactile luxury in every detail." },
  { icon: Star, title: "Best Rate Guarantee", desc: "New discounted prices — book direct for the best rate." },
  { icon: Sparkles, title: "Curated Service", desc: "24/7 concierge, airport pickup, late checkout on request." },
]

export default function SuitesOverview() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,90,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full">
            <Crown className="w-3 h-3" /> 6 Room Classes • New Discounted Rates
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mt-6 leading-tight">
            Suites & <AuroraText className="font-serif font-bold">Rooms</AuroraText>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            From ₦20,000 to ₦50,000 — flagship gold to classic comfort. Every rate is a new discounted price.
          </motion.p>
        </div>
      </section>

      <Section>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rooms.map((room) => (
            <motion.div key={room.title} variants={staggerItem} className="group relative rounded-[22px] overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <BorderBeam size={200} duration={12} colorFrom="#C5A55A" colorTo="#E8D5B5" />
              <Link href={room.href} className="flex flex-col flex-1">
                <div className="relative h-60 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${room.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-medium text-secondary">{room.badge}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-primary text-secondary rounded-full px-3 py-1 text-xs font-bold">{room.price}/night</div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-serif text-xl text-white leading-tight">{room.title}</h3>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">{room.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {room.features.map((f) => (
                      <span key={f} className="text-[11px] bg-neutral-50 border border-neutral-200 px-2 py-1 rounded-full text-neutral-600">{f}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mt-4 group-hover:gap-3 transition-all">
                    View & Book <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {perks.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl bg-neutral-50 border border-neutral-200 p-6">
              <p.icon className="w-6 h-6 text-primary mb-3" />
              <h4 className="font-medium text-secondary">{p.title}</h4>
              <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-14">
          <ShineBorder borderWidth={1} duration={14} shineColor={["#C5A55A", "#E8D5B5"]} className="bg-white">
            <div className="p-8 text-center">
              <h3 className="font-serif text-2xl text-secondary">Not sure which to choose?</h3>
              <p className="text-sm text-neutral-500 mt-2">Gold for grandeur, Classic for simplicity — our concierge matches you in minutes.</p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <Link href="/book" className="bg-secondary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors">Check availability</Link>
                <Link href="/contact" className="border border-neutral-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors">Talk to concierge</Link>
              </div>
            </div>
          </ShineBorder>
        </div>
      </Section>
    </>
  )
}
