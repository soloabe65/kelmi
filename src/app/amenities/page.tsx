"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Waves, Dumbbell, Sparkles, Coffee, Car, Shield, Wifi, TreePine, ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { staggerContainer, staggerItem } from "@/lib/animations"

const amenityGroups = [
  {
    title: "Wellness & Recreation",
    items: [
      { icon: Waves, label: "Infinity Pool", desc: "Heated outdoor pool with panoramic valley views. Open 6 AM - 10 PM.", image: "https://images.unsplash.com/photo-1758192838598-a1de4da5dcaf?w=600&q=80" },
      { icon: Dumbbell, label: "Fitness Center", desc: "State-of-the-art equipment, yoga studio, and personal training sessions.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80" },
      { icon: Sparkles, label: "Spa & Wellness", desc: "Massage therapy, facials, hydrotherapy, and holistic wellness treatments.", image: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80" },
      { icon: TreePine, label: "Nature Trails", desc: "Guided hikes and self-guided walking trails through scenic landscapes.", image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=600&q=80" },
    ],
  },
  {
    title: "Services & Convenience",
    items: [
      { icon: Car, label: "Valet Parking", desc: "Complimentary valet parking with 24-hour security.", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80" },
      { icon: Coffee, label: "In-Room Dining", desc: "Gourmet meals delivered to your suite, available 24/7.", image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=80" },
      { icon: Shield, label: "Concierge", desc: "Dedicated concierge for reservations, transport, and special requests.", image: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600&q=80" },
      { icon: Wifi, label: "Premium WiFi", desc: "High-speed internet throughout the property. Complimentary for guests.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80" },
    ],
  },
]

export default function AmenitiesPage() {
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
                className="rounded-2xl overflow-hidden bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="h-44 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6 flex gap-4">
                  <item.icon className="w-7 h-7 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-lg text-secondary mb-1">{item.label}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      ))}

      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-secondary">
            Experience Kelmi Lodge
          </h2>
          <p className="text-neutral-500 mt-3 max-w-lg mx-auto">
            Every amenity is included with your stay.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-primary text-secondary font-medium hover:bg-primary-dark transition-colors"
          >
            Book Your Stay <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
