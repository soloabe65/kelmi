"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Wifi, Waves, Coffee, Wind, Tv, Snowflake } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardImage, CardContent } from "@/components/ui/card"
import { staggerContainer, staggerItem } from "@/lib/animations"

const suites = [
  {
    title: "Presidential Suite",
    desc: "Our crown jewel. A sprawling suite with panoramic valley views, a private terrace, and hand-selected furnishings that define luxury.",
    image: "/images/suite-presidential.jpg",
    price: "₦350,000",
    features: ["Panoramic Views", "Private Terrace", "Jacuzzi", "Butler Service"],
  },
  {
    title: "Executive Lodge",
    desc: "Modern sophistication meets natural beauty. Floor-to-ceiling windows frame the forest, while premium amenities ensure productivity and relaxation.",
    image: "/images/suite-executive.jpg",
    price: "₦250,000",
    features: ["Forest Views", "Workstation", "Rain Shower", "Mini Bar"],
  },
  {
    title: "Garden View Room",
    desc: "Serene and intimate, these rooms open onto lush gardens. Handcrafted interiors and organic linens create a sanctuary of calm.",
    image: "/images/suite-garden.jpg",
    price: "₦150,000",
    features: ["Garden Access", "Organic Linens", "Walk-in Closet", "Tea Station"],
  },
  {
    title: "Honeymoon Suite",
    desc: "Designed for romance. A private balcony, four-poster bed, and a marble bathroom with soaking tub make this suite unforgettable.",
    image: "/images/suite-honeymoon.jpg",
    price: "₦280,000",
    features: ["Private Balcony", "Four-Poster Bed", "Soaking Tub", "Champagne Service"],
  },
  {
    title: "Family Lodge",
    desc: "Spacious and welcoming. Two bedrooms, a living area, and kid-friendly amenities make this perfect for families seeking comfort.",
    image: "/images/suite-family.jpg",
    price: "₦180,000",
    features: ["Two Bedrooms", "Living Area", "Kitchenette", "Kids' Activities"],
  },
  {
    title: "Penthouse Suite",
    desc: "Perched on the top floor with 360 views. A private rooftop terrace, outdoor shower, and personal concierge elevate your stay.",
    image: "/images/suite-penthouse.jpg",
    price: "₦500,000",
    features: ["Rooftop Terrace", "Outdoor Shower", "Personal Concierge", "Wine Cellar"],
  },
]

const allFeatures = [
  { icon: Wifi, label: "Complimentary WiFi" },
  { icon: Waves, label: "Infinity Pool Access" },
  { icon: Coffee, label: "In-Room Dining" },
  { icon: Wind, label: "Climate Control" },
  { icon: Tv, label: "Smart Entertainment" },
  { icon: Snowflake, label: "24/7 Room Service" },
]

export default function SuitesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary/8)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary tracking-[0.3em] uppercase text-sm font-medium"
          >
            Accommodations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mt-4"
          >
            Suites & Rooms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 mt-4 max-w-2xl mx-auto text-lg"
          >
            Every stay at Kelmi is a story of comfort. Choose from our collection of
            thoughtfully designed accommodations.
          </motion.p>
        </div>
      </section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {suites.map((suite) => (
            <Card key={suite.title}>
              <CardImage src={suite.image} alt={suite.title} />
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl text-secondary">{suite.title}</h3>
                  <span className="text-primary font-semibold">{suite.price}<span className="text-sm text-neutral-400 font-normal">/night</span></span>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">{suite.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {suite.features.map((f) => (
                    <span key={f} className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full">{f}</span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full gap-2 bg-primary text-secondary px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  Book This Suite <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </Section>

      <Section>
        <SectionHeader
          title="All Inclusive Amenities"
          subtitle="Every stay includes access to our full range of premium amenities."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {allFeatures.map((feature) => (
            <motion.div
              key={feature.label}
              variants={staggerItem}
              className="flex items-center gap-4 p-5 rounded-xl bg-neutral-50 border border-neutral-200"
            >
              <feature.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-neutral-500">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  )
}
