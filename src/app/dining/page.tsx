"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, Star } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardImage, CardContent } from "@/components/ui/card"
import { staggerContainer, staggerItem } from "@/lib/animations"

const venues = [
  {
    name: "The Golden Fork",
    type: "Fine Dining Restaurant",
    desc: "Award-winning cuisine crafted by Chef Maria Rodriguez. Seasonal menus featuring locally-sourced ingredients and international techniques.",
    image: "/images/dining-golden-fork.jpg",
    hours: "6:00 PM - 10:30 PM",
    rating: 5,
  },
  {
    name: "The Terrace Bar",
    type: "Bar & Lounge",
    desc: "Handcrafted cocktails, premium spirits, and small plates with stunning sunset views over the valley.",
    image: "/images/dining-terrace.jpg",
    hours: "4:00 PM - 12:00 AM",
    rating: 4.5,
  },
  {
    name: "The Veranda Cafe",
    type: "Casual Dining",
    desc: "All-day dining in a relaxed garden setting. Fresh pastries, light lunches, and artisanal coffee.",
    image: "/images/dining-veranda.jpg",
    hours: "7:00 AM - 5:00 PM",
    rating: 4.5,
  },
]

const catering = [
  "Corporate breakfasts & luncheons",
  "Gala dinners & receptions",
  "Cocktail parties & canapés",
  "Wedding banquets",
  "Private chef experiences",
  "Dietary accommodation (vegan, gluten-free, halal)",
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
          className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4"
        >
          {catering.map((item) => (
            <motion.div
              key={item}
              variants={staggerItem}
              className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200"
            >
              <Star className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm text-neutral-500">{item}</span>
            </motion.div>
          ))}
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
