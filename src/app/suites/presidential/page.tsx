"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardImage, CardContent } from "@/components/ui/card"
import { staggerContainer, staggerItem } from "@/lib/animations"

const suites = [
  {
    title: "Presidential Suite",
    desc: "Our crown jewel with panoramic valley views, a private terrace, and hand-selected furnishings that define luxury.",
    image: "/images/suite-presidential.jpg",
    price: "₦35,000",
    features: ["Panoramic Views", "Private Terrace", "Jacuzzi", "Butler Service"],
  },
  {
    title: "Penthouse Suite",
    desc: "Perched on the top floor with 360 views, a private rooftop terrace, outdoor shower, and personal concierge.",
    image: "/images/suite-penthouse.jpg",
    price: "₦35,000",
    features: ["Rooftop Terrace", "Outdoor Shower", "Personal Concierge", "Wine Cellar"],
  },
  {
    title: "Honeymoon Suite",
    desc: "Designed for romance with a private balcony, four-poster bed, and marble bathroom with soaking tub.",
    image: "/images/suite-honeymoon.jpg",
    price: "₦30,000",
    features: ["Private Balcony", "Four-Poster Bed", "Soaking Tub", "Champagne Service"],
  },
  {
    title: "Executive Lodge",
    desc: "Modern sophistication meets natural beauty with forest views, a workstation, and premium amenities.",
    image: "/images/suite-executive.jpg",
    price: "₦25,000",
    features: ["Forest Views", "Workstation", "Rain Shower", "Mini Bar"],
  },
]

export default function PresidentialPage() {
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
            Premium Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mt-4"
          >
            Presidential Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 mt-4 max-w-2xl mx-auto text-lg"
          >
            Our most prestigious accommodations, where every detail has been curated for
            the discerning traveler.
          </motion.p>
        </div>
      </section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {suites.map((suite) => (
            <Card key={suite.title}>
              <CardImage src={suite.image} alt={suite.title} />
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl text-secondary">{suite.title}</h3>
                  <span className="text-primary font-semibold">
                    {suite.price}
                    <span className="text-sm text-neutral-400 font-normal">/night</span>
                  </span>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">{suite.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {suite.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center w-full gap-2 bg-primary text-secondary px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  Book This Suite <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </Section>
    </>
  )
}
