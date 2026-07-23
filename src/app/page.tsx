"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star, MapPin, Phone, Wifi, Dumbbell, Waves, Utensils } from "lucide-react"
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations"
import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardImage, CardContent } from "@/components/ui/card"

const suites = [
  {
    title: "Presidential Suite",
    desc: "Panoramic views, private terrace,奢華 living space",
    image: "/images/suite-presidential.jpg",
    price: "$850",
  },
  {
    title: "Executive Lodge",
    desc: "Modern elegance with forest views and premium amenities",
    image: "/images/suite-executive.jpg",
    price: "$520",
  },
  {
    title: "Garden View Room",
    desc: "Serene garden outlook with handcrafted interiors",
    image: "/images/suite-garden.jpg",
    price: "$320",
  },
]

const amenities = [
  { icon: Waves, label: "Infinity Pool", desc: "Heated outdoor pool with panoramic views" },
  { icon: Dumbbell, label: "Fitness Center", desc: "State-of-the-art equipment & personal training" },
  { icon: Wifi, label: "High-Speed WiFi", desc: "Complimentary premium connectivity" },
  { icon: Utensils, label: "Fine Dining", desc: "Award-winning restaurant & bar" },
]

const testimonials = [
  {
    name: "Sarah & Michael",
    role: "Wedding, June 2026",
    text: "Our wedding at Kelmi was absolutely magical. The team went above and beyond every expectation.",
  },
  {
    name: "David Chen",
    role: "Business Traveler",
    text: "The perfect blend of luxury and comfort. The event center hosted our conference flawlessly.",
  },
  {
    name: "Emma Richardson",
    role: "Spa Weekend Guest",
    text: "I came for a weekend and never wanted to leave. The spa treatments were world-class.",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary tracking-[0.3em] uppercase text-sm font-medium"
            >
              Welcome to Luxury
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight"
            >
              Kelmi Lodge
              <span className="block text-primary">& Event Center</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-neutral-200/80 max-w-2xl mx-auto leading-relaxed"
            >
              Where timeless elegance meets unparalleled hospitality. Experience
              premium accommodation, world-class events, and unforgettable moments.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                href="/suites"
                className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Explore Suites <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Strip */}
      <section className="bg-secondary border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: Star, label: "Premium Suites", desc: "Luxury accommodations" },
            { icon: MapPin, label: "Prime Location", desc: "Scenic surroundings" },
            { icon: Phone, label: "24/7 Concierge", desc: "Dedicated service" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 text-white"
            >
              <item.icon className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-medium">{item.label}</p>
                <p className="text-sm text-neutral-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Suites */}
      <Section id="suites">
        <SectionHeader
          title="Premium Accommodations"
          subtitle="Each suite thoughtfully designed to provide the utmost comfort and elegance for an unforgettable stay."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {suites.map((suite) => (
            <Card key={suite.title}>
              <CardImage src={suite.image} alt={suite.title} />
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl text-secondary">{suite.title}</h3>
                  <span className="text-primary font-medium">{suite.price}<span className="text-sm text-neutral-400">/night</span></span>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">{suite.desc}</p>
                <Link
                  href="/suites"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  View Details <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Amenities */}
      <Section dark className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary/5)_0%,_transparent_60%)]" />
        <SectionHeader
          title="World-Class Amenities"
          subtitle="Every detail curated to elevate your experience at Kelmi Lodge."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {amenities.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg text-white mb-2">{item.label}</h3>
              <p className="text-sm text-neutral-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeader
          title="What Our Guests Say"
          subtitle="Hear from those who have experienced the Kelmi difference."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-neutral-600 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-medium text-secondary">{t.name}</p>
                <p className="text-sm text-neutral-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section dark className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4 text-white leading-tight">
            Ready to Experience Kelmi?
          </h2>
          <p className="mt-4 text-neutral-300 text-lg">
            Book your stay, plan your event, or simply reach out. We look forward to welcoming you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              Make a Reservation
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Plan an Event
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  )
}