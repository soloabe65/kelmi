"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, PartyPopper, Briefcase, Heart } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { staggerContainer, staggerItem } from "@/lib/animations"

const eventTypes = [
  {
    icon: Heart,
    title: "Weddings",
    desc: "Say 'I do' in breathtaking settings. Our dedicated wedding team ensures every detail is perfect.",
    capacity: "Up to 300 guests",
    packages: "3 curated packages",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "State-of-the-art conference facilities with full AV support, breakout rooms, and catering.",
    capacity: "Up to 200 delegates",
    packages: "Day & multi-day rates",
  },
  {
    icon: PartyPopper,
    title: "Social Gatherings",
    desc: "Birthday parties, anniversaries, and milestone celebrations in elegant private spaces.",
    capacity: "Up to 150 guests",
    packages: "Custom packages available",
  },
  {
    icon: Users,
    title: "Conferences & Seminars",
    desc: "Professional venues equipped with the latest technology for impactful presentations.",
    capacity: "Up to 400 attendees",
    packages: "Full-day & half-day",
  },
]

const venues = [
  {
    name: "The Grand Ballroom",
    capacity: "400 seated / 600 cocktail",
    features: ["Crystal chandeliers", "Stage & dance floor", "State-of-the-art sound"],
    image: "/images/venue-ballroom.jpg",
  },
  {
    name: "The Garden Pavilion",
    capacity: "200 seated / 300 cocktail",
    features: ["Open-air terrace", "Garden views", "Twilight lighting"],
    image: "/images/venue-pavilion.jpg",
  },
  {
    name: "The Boardroom",
    capacity: "20 seated",
    features: ["Video conferencing", "Whiteboard walls", "Private catering"],
    image: "/images/venue-boardroom.jpg",
  },
]

export default function EventsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary/8)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary tracking-[0.3em] uppercase text-sm font-medium"
          >
            Events
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mt-4"
          >
            Event Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 mt-4 max-w-2xl mx-auto text-lg"
          >
            From intimate gatherings to grand celebrations, our venues create unforgettable experiences.
          </motion.p>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Event Types"
          subtitle="We specialize in creating memorable events of every kind."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {eventTypes.map((event) => (
            <motion.div
              key={event.title}
              variants={staggerItem}
              className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-lg transition-shadow"
            >
              <event.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-serif text-2xl text-secondary mb-3">{event.title}</h3>
              <p className="text-neutral-500 leading-relaxed mb-4">{event.desc}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400">
                <span>Capacity: {event.capacity}</span>
                <span>{event.packages}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section dark>
        <SectionHeader
          title="Our Venues"
          subtitle="Beautifully appointed spaces for every occasion."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {venues.map((venue) => (
            <motion.div
              key={venue.name}
              variants={staggerItem}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${venue.image})` }}
              />
              <div className="p-6">
                <h3 className="font-serif text-xl text-white mb-2">{venue.name}</h3>
                <p className="text-sm text-primary mb-3">{venue.capacity}</p>
                <ul className="space-y-1.5">
                  {venue.features.map((f) => (
                    <li key={f} className="text-sm text-neutral-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
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
          <h2 className="font-serif text-3xl md:text-4xl text-secondary">
            Ready to Plan Your Event?
          </h2>
          <p className="text-neutral-500 mt-3 max-w-lg mx-auto">
            Our events team will work with you to create a bespoke experience.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-primary text-secondary px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Inquire Now <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Section>
    </>
  )
}