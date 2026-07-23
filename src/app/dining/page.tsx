"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, Star, UtensilsCrossed, Wine, Coffee, PartyPopper, Heart, ChefHat } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardImage, CardContent } from "@/components/ui/card"
import { staggerContainer, staggerItem } from "@/lib/animations"

const venues = [
  {
    name: "The Golden Fork",
    type: "Fine Dining Restaurant",
    desc: "Award-winning cuisine crafted by our master chefs. Seasonal menus featuring locally-sourced ingredients.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    hours: "6:00 PM - 10:30 PM",
    rating: 5,
  },
  {
    name: "The Terrace Bar",
    type: "Bar & Lounge",
    desc: "Handcrafted cocktails, premium spirits, and small plates with stunning sunset views.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
    hours: "4:00 PM - 12:00 AM",
    rating: 4.5,
  },
  {
    name: "The Veranda Cafe",
    type: "Casual Dining",
    desc: "All-day dining in a relaxed garden setting. Fresh pastries, light lunches, and artisanal coffee.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    hours: "7:00 AM - 5:00 PM",
    rating: 4.5,
  },
]

const cateringServices = [
  { label: "Corporate Breakfasts & Luncheons", image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&q=80", icon: Coffee },
  { label: "Gala Dinners & Receptions", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80", icon: UtensilsCrossed },
  { label: "Cocktail Parties & Canapés", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80", icon: Wine },
  { label: "Wedding Banquets", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80", icon: PartyPopper },
  { label: "Private Chef Experiences", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80", icon: ChefHat },
  { label: "Dietary Accommodation", image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&q=80", icon: Heart },
]

export default function DiningPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary/8)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary tracking-[0.3em] uppercase text-sm font-medium"
          >
            Culinary Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mt-4"
          >
            Dining at Kelmi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 mt-4 max-w-2xl mx-auto text-lg"
          >
            A culinary journey that celebrates local flavors with global finesse.
          </motion.p>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Our Dining Venues"
          subtitle="Three distinct experiences, one extraordinary standard of excellence."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {venues.map((v) => (
            <Card key={v.name}>
              <CardImage src={v.image} alt={v.name} />
              <CardContent>
                <span className="text-xs text-primary tracking-wider uppercase font-medium">
                  {v.type}
                </span>
                <h3 className="font-serif text-xl text-secondary mt-1 mb-2">{v.name}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">{v.desc}</p>
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {v.hours}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                    {v.rating}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </Section>

      <Section>
        <SectionHeader
          title="Catering Services"
          subtitle="Exceptional cuisine for your events, crafted to impress."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cateringServices.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="relative rounded-2xl overflow-hidden h-48 cursor-pointer group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <span className="font-serif text-lg text-white">{item.label}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-secondary">Reserve a Table</h2>
          <p className="text-neutral-500 mt-3 max-w-lg mx-auto">
            Book your dining experience with us. Walk-ins welcome subject to availability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-primary text-secondary px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Make a Reservation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
