"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Crown, Home } from "lucide-react"
import { Section } from "@/components/ui/section"
import { staggerContainer, staggerItem } from "@/lib/animations"

const categories = [
  {
    title: "Presidential Collection",
    href: "/suites/presidential",
    icon: Crown,
    desc: "Our most prestigious accommodations featuring panoramic views, private terraces, and hand-selected furnishings. The pinnacle of luxury living.",
    image: "/images/suite-presidential.jpg",
  },
  {
    title: "Standard Rooms",
    href: "/suites/standard",
    icon: Home,
    desc: "Comfortable and inviting spaces with garden access and family-friendly layouts. Perfect for relaxing stays in style.",
    image: "/images/suite-family.jpg",
  },
]

export default function SuitesOverview() {
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
            Choose your perfect stay from our carefully curated collection of accommodations.
          </motion.p>
        </div>
      </section>

      <Section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={staggerItem}
              className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Link href={cat.href}>
                <div
                  className="relative h-72 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${cat.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <cat.icon className="w-8 h-8 text-primary mb-2" />
                    <h3 className="font-serif text-2xl text-white">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-500 leading-relaxed mb-4">{cat.desc}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Explore {cat.title} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  )
}