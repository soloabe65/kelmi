"use client"

import { motion } from "framer-motion"
import { Waves, Dumbbell, Sparkles, Coffee, Car, Shield, Wifi, TreePine } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { staggerContainer, staggerItem } from "@/lib/animations"

const amenityGroups = [
  {
    title: "Wellness & Recreation",
    items: [
      { icon: Waves, label: "Infinity Pool", desc: "Heated outdoor pool with panoramic valley views. Open 6 AM - 10 PM." },
      { icon: Dumbbell, label: "Fitness Center", desc: "State-of-the-art equipment, yoga studio, and personal training sessions." },
      { icon: Sparkles, label: "Spa & Wellness", desc: "Massage therapy, facials, hydrotherapy, and holistic wellness treatments." },
      { icon: TreePine, label: "Nature Trails", desc: "Guided hikes and self-guided walking trails through scenic landscapes." },
    ],
  },
  {
    title: "Services & Convenience",
    items: [
      { icon: Car, label: "Valet Parking", desc: "Complimentary valet parking with 24-hour security." },
      { icon: Coffee, label: "In-Room Dining", desc: "Gourmet meals delivered to your suite, available 24/7." },
      { icon: Shield, label: "Concierge", desc: "Dedicated concierge for reservations, transport, and special requests." },
      { icon: Wifi, label: "Premium WiFi", desc: "High-speed internet throughout the property. Complimentary for guests." },
    ],
  },
]

export default function AmenitiesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary/8)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary tracking-[0.3em] uppercase text-sm font-medium"
          >
            Amenities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mt-4"
          >
            Everything You Need
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 mt-4 max-w-2xl mx-auto text-lg"
          >
            Every detail at Kelmi Lodge is designed to enhance your comfort and enjoyment.
          </motion.p>
        </div>
      </section>

      {amenityGroups.map((group) => (
        <Section key={group.title}>
          <SectionHeader title={group.title} center={false} />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {group.items.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="flex gap-5 p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-md transition-shadow"
              >
                <item.icon className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-secondary mb-1.5">{item.label}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      ))}

      <Section dark className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Experience Kelmi Lodge
          </h2>
          <p className="text-neutral-300 mt-3 max-w-lg mx-auto">
            Every amenity is included with your stay. We believe in effortless luxury.
          </p>
        </motion.div>
      </Section>
    </>
  )
}