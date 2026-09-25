"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star, MapPin, Phone, Sparkles, PartyPopper, Trophy, Shield, Quote, Calendar, Users, Award, ChevronRight } from "lucide-react"
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations"
import { Section, SectionHeader } from "@/components/ui/section"
import { AuroraText } from "@/components/magicui/aurora-text"
import { BorderBeam } from "@/components/magicui/border-beam"
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid"
import { Marquee } from "@/components/magicui/marquee"
import { ShineBorder } from "@/components/magicui/shine-border"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader } from "@/components/ui/drawersheet"
import { Toaster, toast } from "sonner"

const heroImages = [
  "/images/suite-presidential.jpg",
  "/images/suite-executive.jpg",
  "/images/venue-ballroom.jpg",
  "/images/suite-family.jpg",
]

const suites = [
  {
    title: "Royal Executive Suite (Gold)",
    desc: "Flagship suite — panoramic terrace, private living, handcrafted teak & brass.",
    image: "/images/suite-presidential.jpg",
    price: "₦50,000",
    badge: "Flagship",
    href: "/suites/presidential",
  },
  {
    title: "Royal Executive Suite (Silver)",
    desc: "Elevated elegance — spacious lounge, forest views, premium amenities.",
    image: "/images/suite-executive.jpg",
    price: "₦40,000",
    badge: "Most Booked",
    href: "/suites/presidential",
  },
  {
    title: "Presidential Apartment",
    desc: "Sophisticated apartment-style living with curated art and soft linen.",
    image: "/images/suite-penthouse.jpg",
    price: "₦35,000",
    badge: "Apartment",
    href: "/suites/presidential",
  },
  {
    title: "Royal Majesty Room",
    desc: "Regal comfort with garden outlook and handcrafted interiors.",
    image: "/images/suite-honeymoon.jpg",
    price: "₦30,000",
    badge: "Royal Choice",
    href: "/suites/standard",
  },
  {
    title: "Executive Room",
    desc: "Modern business-ready room — workstation, rain shower, quiet luxury.",
    image: "/images/suite-garden.jpg",
    price: "₦25,000",
    badge: "Business",
    href: "/suites/standard",
  },
  {
    title: "Classic Room",
    desc: "Our essential comfort — serene, bright, and thoughtfully appointed.",
    image: "/images/suite-family.jpg",
    price: "₦20,000",
    badge: "Classic",
    href: "/suites",
  },
]

const bentoAmenities = [
  {
    Icon: PartyPopper,
    name: "Lounge & Stage",
    description: "Private lounge with stage — intimate gatherings, live music, and bespoke service.",
    href: "/amenities",
    cta: "Explore lounge",
    background: <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80)" }} />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Trophy,
    name: "Snooker Bar",
    description: "Classic snooker bar — styled lounge, curated drinks, friendly competition.",
    href: "/amenities",
    cta: "View snooker bar",
    background: <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1515620268728-658ed88b02f3?w=800&q=80)" }} />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Trophy,
    name: "Snooker Bar Experience",
    description: "Classic snooker (pool) bar — curated drinks, friendly matches, lounge vibe.",
    href: "/amenities",
    cta: "Visit bar",
    background: <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1515620268728-658ed88b02f3?w=800&q=80)" }} />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Phone,
    name: "24/7 Concierge & Support",
    description: "Round-the-clock care — reservations, airport pickup & tailored help. Call +234 901 497 1739 or chat on WhatsApp.",
    href: "/contact",
    cta: "Contact us → +234 901 497 1739",
    background: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1521791136064-7986c86c94a1?w=800&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-black/60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
]

const testimonials = [
  {
    name: "Chinwe Obi",
    role: "Wedding • Port Harcourt",
    text: "Our wedding at Kelmi was absolutely magical. The team went above and beyond every expectation. The ballroom was breathtaking!",
    image: "https://images.unsplash.com/photo-1763328728510-064ea03a1f8a?w=150&q=80",
  },
  {
    name: "Emeka Okafor",
    role: "Business • Warri",
    text: "The perfect blend of luxury and comfort. Our conference was flawless — AV, catering, hospitality all world-class.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "Blessing Adeyemi",
    role: "Spa Weekend • Ughelli",
    text: "I came for a weekend and never wanted to leave. The spa treatments were world-class and the staff treated me like royalty.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
  },
  {
    name: "Tunde & Amaka",
    role: "Anniversary • Lagos",
    text: "Presidential Suite views at sunrise are unreal. Private terrace breakfast will be our forever memory. Thank you Kelmi!",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Retreat • Asaba",
    text: "We hosted 120 guests. Everything was seamless — from planning to last dance. Kelmi is Delta's hidden luxury gem.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
  {
    name: "David Efeturi",
    role: "Chef's Table • Ughelli",
    text: "The lounge & snooker bar redefined evenings for me — curated drinks, great vibe — truly metropolitan level in the heart of Delta.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
]

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setHeroIndex((p) => (p + 1) % heroImages.length), 5200)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <Toaster richColors position="top-right" />
      {/* HERO — Cinematic + Glass + Aurora */}
      <section className="relative h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden bg-neutral-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[heroIndex]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%)]" />

        {/* floating glass stats — DaisyUI/heroUI inspired */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden lg:flex absolute top-28 right-8 z-20 flex-col gap-3"
        >
          {[
            { k: "4.9/5", v: "Guest rating" },
            { k: "500+", v: "Events hosted" },
            { k: "24/7", v: "Concierge" },
          ].map((s) => (
            <div key={s.k} className="glass-dark rounded-2xl px-5 py-3 min-w-[160px]">
              <p className="text-white font-semibold leading-none text-lg">{s.k}</p>
              <p className="text-white/60 text-xs">{s.v}</p>
            </div>
          ))}
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-7">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 text-white/90 px-4 py-2 rounded-full text-xs tracking-[0.18em] uppercase font-medium">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Welcome to Luxury • Ughelli South
              <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 pl-2 border-l border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live availability
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[84px] font-serif text-white leading-[0.9] tracking-tight">
              Kelmi Lodge
              <span className="block mt-1">
                <AuroraText colors={["#C5A55A", "#E8D5B5", "#D4A574", "#B8943E"]} className="font-serif font-bold">
                  & Event Center
                </AuroraText>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-[17px] md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Where timeless elegance meets unparalleled hospitality. Premium suites, cinematic events, and unforgettable delta moments.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center pt-2">
              <Link href="/suites" className="group relative inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-full font-medium overflow-hidden hover:bg-primary-dark transition-colors shadow-xl shadow-primary/20">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                Explore Suites <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Drawer>
                <DrawerTrigger className="inline-flex items-center gap-2 border border-white/25 bg-white/5 backdrop-blur text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
                  <Calendar className="w-4 h-4" /> Quick Book
                </DrawerTrigger>
                <DrawerContent className="max-w-xl mx-auto">
                  <DrawerHeader className="text-left">
                    <DrawerTitle className="text-2xl">Check availability</DrawerTitle>
                    <DrawerDescription>Real-time booking • Best rate guaranteed</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-6 pt-0 grid gap-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-neutral-200 p-4 bg-neutral-50">
                        <p className="text-xs text-neutral-500 uppercase tracking-wide">Check-in</p>
                        <p className="font-medium text-secondary">Select date</p>
                      </div>
                      <div className="rounded-xl border border-neutral-200 p-4 bg-neutral-50">
                        <p className="text-xs text-neutral-500 uppercase tracking-wide">Guests</p>
                        <p className="font-medium text-secondary">2 Adults</p>
                      </div>
                    </div>
                    <button onClick={() => toast.success("Availability checked — Royal Executive Suite (Gold) free this weekend!")} className="w-full bg-secondary text-white py-4 rounded-full font-medium hover:bg-black transition-colors">
                      Check availability →
                    </button>
                    <p className="text-xs text-center text-neutral-500">Or <Link href="/book" className="text-primary underline">go to full booking</Link></p>
                  </div>
                </DrawerContent>
              </Drawer>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 pt-4 text-white/60 text-xs">
              <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-primary" /> Award-winning</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-primary" /> 500+ events</span>
              <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />
              <span className="hidden sm:flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" /> Delta State</span>
            </motion.div>
          </motion.div>
        </div>

        {/* hero dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setHeroIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`transition-all duration-400 rounded-full ${i === heroIndex ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 text-white/60 text-xs">
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="w-5 h-8 border border-white/25 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* TRUST STRIP — Flowbite / DaisyUI stats */}
      <section className="bg-white border-y border-neutral-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.04] via-transparent to-primary/[0.04]" />
        <div className="relative max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Events hosted", sub: "Weddings & conferences" },
            { value: "4.9", label: "Guest rating", sub: "1,200+ reviews" },
            { value: "30+", label: "Premium suites", sub: "Curated interiors" },
            { value: "24/7", label: "Concierge", sub: "Dedicated service" },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="text-center lg:text-left">
              <p className="font-serif text-2xl text-secondary">{s.value}</p>
              <p className="text-sm font-medium text-secondary">{s.label}</p>
              <p className="text-xs text-neutral-400">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED SUITES — shadcn Carousel + Border Beam + HeroUI polish */}
      <Section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium"><span className="w-6 h-[1px] bg-primary" /> Premium Accommodations</span>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary mt-3 leading-tight">Stay in <span className="text-primary">elegance</span></h2>
            <p className="text-neutral-500 mt-3 max-w-xl">Each suite is a quiet composition of teak, linen, and light — with delta views and thoughtful details.</p>
          </div>
          <Link href="/suites" className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-secondary border border-neutral-200 px-6 py-3 rounded-full hover:bg-neutral-50 transition-colors">
            View all suites <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-6">
            {suites.map((suite) => (
              <CarouselItem key={suite.title} className="pl-6 md:basis-1/2 lg:basis-[58%]">
                <div className="group relative h-[480px] rounded-[22px] overflow-hidden bg-neutral-900 shadow-xl">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-[1.04]" style={{ backgroundImage: `url(${suite.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <BorderBeam size={260} duration={14} colorFrom="#C5A55A" colorTo="#E8D5B5" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="glass rounded-full px-3 py-1.5 text-xs font-medium text-secondary flex items-center gap-1"><Sparkles className="w-3 h-3 text-primary" /> {suite.badge}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="font-serif text-2xl text-white">{suite.title}</h3>
                    <p className="text-white/70 text-sm mt-2 max-w-md leading-relaxed">{suite.desc}</p>
                    <div className="flex items-center justify-between mt-5 gap-4">
                      <span className="text-white font-semibold text-xl">{suite.price}<span className="text-white/60 text-xs font-normal"> / night</span></span>
                      <div className="flex gap-2">
                        <Link href={suite.href} onClick={() => toast.info(`Opening ${suite.title}`)} className="inline-flex items-center gap-1.5 bg-white text-secondary px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors">
                          View <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <button onClick={() => toast.success("Added to enquiry — we’ll contact you shortly!")} className="hidden sm:inline-flex bg-primary text-secondary px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">Enquire</button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex left-2" />
          <CarouselNext className="hidden lg:flex right-2" />
        </Carousel>
      </Section>

      {/* BENTO AMENITIES — Magic UI BentoGrid */}
      <section className="py-20 md:py-28 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,90,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader title="World-Class Amenities" subtitle="Every detail curated to elevate your stay — lounge, snooker bar, and late-night concierge." />
          <BentoGrid className="lg:grid-rows-2 mt-8">
            {bentoAmenities.map((f) => (
              <BentoCard key={f.name} {...f} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* SATELLITE VIEW — replaces testimonials (moved to /testimonials) */}
      <Section className="overflow-hidden">
        <SectionHeader title="Find Us From Above" subtitle="Satellite view • GRWG+887, KM 48 DSC Expressway, Otokutu — your landmark from the sky." />
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 rounded-[22px] overflow-hidden border border-neutral-200 shadow-sm bg-white">
            <div className="relative h-[420px] w-full">
              <iframe
                title="Kelmi Lodge Satellite View"
                src="https://www.google.com/maps?q=5.5460703,5.8266481&z=19&t=k&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur rounded-full px-3 py-1.5 text-xs font-medium text-secondary shadow flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Satellite • 5.5460703, 5.8266481
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-[22px] border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl text-secondary">Kelmi Lodge & Event Center</h3>
              <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                <strong className="text-secondary">GRWG+887</strong> • KM 48, DSC Expressway<br />
                Otokutu, Delta 333117, Nigeria<br />
                <span className="inline-flex items-center gap-2 mt-2 text-xs font-medium text-primary">Accuracy ~ • Satellite verified</span>
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3">
                  <p className="text-neutral-400 uppercase tracking-wide">Latitude</p>
                  <p className="font-mono font-medium text-secondary">5.5460703</p>
                </div>
                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3">
                  <p className="text-neutral-400 uppercase tracking-wide">Longitude</p>
                  <p className="font-mono font-medium text-secondary">5.8266481</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                <a href="https://www.google.com/maps/search/?api=1&query=5.5460703,5.8266481" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors">
                  Open in Google Maps
                </a>
                <a href="https://maps.google.com/?q=GRWG%2B887%20KM%2048%20DSC%20Expressway%20Otokutu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-neutral-200 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors">
                  Plus Code: GRWG+887
                </a>
              </div>
            </div>
            <div className="rounded-[22px] bg-secondary text-white p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,90,0.12),transparent_60%)] pointer-events-none" />
              <p className="relative text-sm font-medium tracking-[0.14em] uppercase text-primary">Visit us</p>
              <p className="relative font-serif text-lg leading-tight mt-2">Easy access from Warri • Sapele • Ughelli</p>
              <p className="relative text-sm text-white/70 mt-2">KM 48 DSC Expressway — look for the Kelmi Lodge landmark. Valet & 24/7 concierge on arrival.</p>
              <Link href="/contact" className="relative inline-flex items-center gap-2 mt-4 bg-primary text-secondary px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
                Get directions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* LOCATION + PERKS — DaisyUI / Flowbite inspired */}
      <section className="py-16 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: "Prime Delta Location", desc: "Oloje Street, Ughelli South — easy access to Warri, Asaba, and the forest reserve.", cta: "Get directions", href: "/contact" },
            { icon: Phone, title: "Concierge 24/7", desc: "Airport pickup, bespoke excursions, and on-demand housekeeping.", cta: "Chat on WhatsApp", href: "/contact" },
            { icon: Calendar, title: "Events & Weddings", desc: "Ballroom for 500, garden terrace for 200, and full planning support.", cta: "Plan event", href: "/events" },
          ].map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group relative rounded-2xl border border-neutral-200 p-7 bg-white hover:shadow-lg hover:shadow-neutral-100 transition-all">
              <card.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-serif text-lg text-secondary">{card.title}</h3>
              <p className="text-sm text-neutral-500 mt-2 leading-relaxed">{card.desc}</p>
              <Link href={card.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4 hover:gap-2 transition-all">
                {card.cta} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-primary/10" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA — ShineBorder + DaisyUI + HeroUI */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          <ShineBorder borderWidth={1} duration={12} shineColor={["#C5A55A", "#D4A574", "#E8D5B5"]} className="bg-white shadow-[0_16px_48px_rgba(0,0,0,0.07)]">
            <div className="text-center p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-secondary/[0.03] pointer-events-none" />
              <span className="relative inline-flex items-center gap-2 bg-secondary text-white px-4 py-1.5 rounded-full text-xs tracking-[0.16em] uppercase font-medium">
                <Sparkles className="w-3 h-3 text-primary" /> Begin Your Journey
              </span>
              <h2 className="relative font-serif text-3xl md:text-[42px] mt-4 text-secondary leading-tight">
                Ready to experience <AuroraText className="font-serif font-bold">Kelmi</AuroraText>?
              </h2>
              <p className="relative mt-4 text-neutral-500 max-w-xl mx-auto">
                Book your stay, plan your event, or simply reach out. Our team replies within 2 hours — best rate when you book direct.
              </p>
              <div className="relative flex flex-wrap gap-3 justify-center mt-8">
                <Link href="/book" onClick={() => toast.success("Redirecting to booking...")} className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors shadow-lg">
                  Make a Reservation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/events" className="inline-flex items-center gap-2 bg-white border border-neutral-200 text-secondary px-8 py-4 rounded-full font-medium hover:bg-neutral-50 transition-colors">
                  Plan an Event
                </Link>
              </div>
              <p className="relative mt-6 text-xs text-neutral-400">No booking fees • Free cancellation on direct bookings • Pay at property</p>
            </div>
          </ShineBorder>
        </div>
      </section>
    </>
  )
}
