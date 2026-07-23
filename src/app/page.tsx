"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star, MapPin, Phone } from "lucide-react"
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations"
import { Section, SectionHeader } from "@/components/ui/section"

const heroImages = [
  "/images/suite-presidential.jpg",
  "/images/suite-executive.jpg",
  "/images/venue-ballroom.jpg",
  "/images/dining-golden-fork.jpg",
]

const suites = [
  {
    title: "Presidential Suite",
    desc: "Panoramic views, private terrace,奢華 living space",
    image: "/images/suite-presidential.jpg",
    price: "₦850,000",
  },
  {
    title: "Executive Lodge",
    desc: "Modern elegance with forest views and premium amenities",
    image: "/images/suite-executive.jpg",
    price: "₦520,000",
  },
  {
    title: "Garden View Room",
    desc: "Serene garden outlook with handcrafted interiors",
    image: "/images/suite-garden.jpg",
    price: "₦320,000",
  },
]

const amenities = [
  {
    label: "Infinity Pool",
    desc: "Heated outdoor pool with panoramic views",
    image: "https://images.unsplash.com/photo-1575424908893-3e7a96b68e2f?w=600&q=80",
  },
  {
    label: "Fitness Center",
    desc: "State-of-the-art equipment & personal training",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    label: "Premium WiFi",
    desc: "Complimentary high-speed connectivity",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
  },
  {
    label: "Fine Dining",
    desc: "Award-winning restaurant & bar",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
]

const testimonials = [
  {
    name: "Chinwe Obi",
    role: "Wedding, Port Harcourt",
    text: "Our wedding at Kelmi was absolutely magical. The team went above and beyond every expectation. The venue was breathtaking!",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80",
  },
  {
    name: "Emeka Okafor",
    role: "Business Traveler, Warri",
    text: "The perfect blend of luxury and comfort. The event center hosted our conference flawlessly. I recommend Kelmi to everyone.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "Blessing Adeyemi",
    role: "Spa Weekend, Ughelli",
    text: "I came for a weekend and never wanted to leave. The spa treatments were world-class and the staff treated me like royalty.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&q=80",
  },
]

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [suiteIndex, setSuiteIndex] = useState(0)

  useEffect(() => {
    const hero = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    const suite = setInterval(() => {
      setSuiteIndex((prev) => (prev + 1) % suites.length)
    }, 4000)
    return () => { clearInterval(hero); clearInterval(suite) }
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[heroIndex]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
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
              className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed"
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
                href="/book"
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
      <section className="bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: Star, label: "Premium Suites", desc: "Luxury accommodations" },
            { icon: MapPin, label: "Prime Location", desc: "Ughelli South, Delta State" },
            { icon: Phone, label: "24/7 Concierge", desc: "Dedicated service" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <item.icon className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-medium text-secondary">{item.label}</p>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Suites Carousel */}
      <Section id="suites" className="overflow-hidden">
        <SectionHeader
          title="Premium Accommodations"
          subtitle="Each suite thoughtfully designed to provide the utmost comfort and elegance for an unforgettable stay."
        />
        <div className="relative h-[600px] max-w-6xl mx-auto">
          {suites.map((suite, index) => {
            const isActive = index === suiteIndex
            return (
              <div key={suite.title} className="absolute inset-0 flex items-center justify-center">
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 0.7, filter: "grayscale(0.6)" }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute w-[40%] h-[65%] rounded-2xl overflow-hidden shadow-md"
                    style={{
                      left: index < suiteIndex ? "1%" : "auto",
                      right: index > suiteIndex ? "1%" : "auto",
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${suite.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                  </motion.div>
                )}
                {isActive && (
                  <motion.div
                    key={suite.title + "-active"}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative z-10 w-full max-w-2xl h-[80%] rounded-2xl overflow-hidden shadow-xl"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${suite.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-serif text-3xl text-white">{suite.title}</h3>
                      <p className="text-neutral-300 mt-2 text-sm max-w-md">{suite.desc}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-primary text-xl font-semibold">{suite.price}<span className="text-sm text-neutral-400 font-normal">/night</span></span>
                        <Link
                          href="/suites"
                          className="inline-flex items-center gap-2 bg-primary text-secondary px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
                        >
                          View Details <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
        <div className="flex justify-center gap-3 mt-8">
          {suites.map((_, index) => (
            <button
              key={index}
              onClick={() => setSuiteIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === suiteIndex
                  ? "bg-primary w-8"
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`View ${suites[index].title}`}
            />
          ))}
        </div>
      </Section>

      {/* Amenities with Images */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="World-Class Amenities"
            subtitle="Every detail curated to elevate your experience at Kelmi Lodge."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {amenities.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-lg text-white mb-1">{item.label}</h3>
                  <p className="text-sm text-neutral-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-neutral-600 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url(${t.image})` }}
                />
                <div>
                  <p className="font-medium text-secondary">{t.name}</p>
                  <p className="text-sm text-neutral-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-neutral-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-6"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4 text-secondary leading-tight">
            Ready to Experience Kelmi?
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Book your stay, plan your event, or simply reach out. We look forward to welcoming you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-secondary/90 transition-colors"
            >
              Make a Reservation
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 border border-secondary/30 text-secondary px-8 py-4 rounded-full font-medium hover:bg-secondary/5 transition-colors"
            >
              Plan an Event
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}