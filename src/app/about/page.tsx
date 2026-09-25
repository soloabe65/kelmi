"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Award, Users, Leaf, Crown, Sparkles, ArrowRight, Heart, Shield, Check } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"
import { ShineBorder } from "@/components/magicui/shine-border"
import { BorderBeam } from "@/components/magicui/border-beam"

// Beechnut pattern — rebuilt with Kelmi premium (gold #C5A55A, secondary #1B3A3B) — prices untouched (about has no prices)
const CORE_VALUES = [
  "Excellence", "Integrity", "Hospitality", "Professionalism",
  "Respect", "Teamwork", "Innovation", "Customer Satisfaction",
  "Accountability", "Community Partnership",
]

const SERVICES = [
  "Luxury and standard guest accommodation",
  "Lounge and snooker bar services",
  "Conference and meeting facilities",
  "Banquet and event hosting",
  "Lounge & stage for private gatherings",
  "Snooker (pool) bar & recreation",
  "Laundry services",
  "Complimentary Wi-Fi",
  "Secure parking",
  "24-hour front desk and security",
]

const CHARTER_ITEMS = [
  "Welcoming every guest with warmth and courtesy.",
  "Providing clean, comfortable, and secure accommodation.",
  "Responding promptly to guest requests and complaints.",
  "Maintaining the highest standards of hygiene and safety.",
  "Respecting the privacy and dignity of every guest.",
  "Continuously improving our services through customer feedback.",
]

const CONDUCT_ITEMS = [
  "Demonstrate honesty and integrity at all times.",
  "Treat guests and colleagues with courtesy and respect.",
  "Maintain a neat and professional appearance.",
  "Protect the hotel's assets and reputation.",
  "Deliver prompt and efficient service.",
  "Uphold confidentiality regarding guest information.",
  "Comply with all hotel policies and safety procedures.",
  "Work collaboratively to achieve organizational goals.",
]

export default function AboutPage() {
  return (
    <>
      {/* Hero — Beechnut 60vh navy + gold italic, Kelmi premium */}
      <section className="relative h-[60vh] min-h-[380px] flex flex-col items-center justify-center text-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-[#1a3536] to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,90,0.08)_0%,_transparent_60%)]" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-4">
          <span className="font-body text-xs font-semibold tracking-[0.28em] uppercase text-primary mb-3 block">Kelmi Lodge & Event Center • Otokutu • RC 2660739</span>
          <h1 className="font-serif text-[clamp(2.8rem,6vw,4.4rem)] font-bold text-white leading-tight mb-4">
            Corporate <em className="italic text-primary not-italic"><AuroraText className="font-serif font-bold">Profile</AuroraText></em>
          </h1>
        </motion.div>
      </section>

      {/* GM Word — white card, circle image with gold ring, quote */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-lg p-8 lg:p-12 shadow-sm border border-neutral-200">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-center">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-lg mx-auto lg:mx-0 relative">
                <BorderBeam size={240} duration={12} colorFrom="#C5A55A" colorTo="#E8D5B5" />
                <img src="/images/gallery-5.jpg" alt="Kelmi Lodge — General Manager welcome" width="288" height="288" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary block mb-2">A Welcome Message</span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-secondary mb-3">A Word from Our General Manager</h2>
                <div className="w-12 h-0.5 bg-primary mb-6" />
                <div className="border-l-[3px] border-primary pl-6">
                  <span className="font-serif text-5xl text-primary leading-none block mb-3" aria-hidden="true">“</span>
                  <p className="font-serif text-lg lg:text-xl text-secondary/80 leading-relaxed mb-4">
                    It’s my pleasure to welcome you to a place where comfort, quality service, and genuine hospitality come together to create an exceptional guest experience.
                  </p>
                  <p className="font-serif text-lg lg:text-xl text-secondary/80 leading-relaxed mb-4">
                    At Kelmi Lodge, we’re committed to making every stay memorable — from our 6 thoughtfully priced rooms (Classic ₦20,000 to Gold ₦50,000) to our private lounge & stage and snooker bar with a dedicated team. Whether visiting for business, leisure, or a special occasion, expect warm hospitality from every department.
                  </p>
                  <p className="font-serif text-lg lg:text-xl text-secondary/80 leading-relaxed">
                    Thank you for choosing Kelmi Lodge & Event Center, Otokutu. We look forward to welcoming you.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <p className="font-serif text-xl font-bold text-secondary">Kelmi Management</p>
                  <p className="text-sm font-medium tracking-[0.14em] uppercase text-primary mt-0.5">General Manager, Kelmi Lodge & Event Center</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Hotel Overview</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-secondary mb-6">A Modern Hospitality <em className="text-primary not-italic">Destination</em></h2>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <p className="text-neutral-500 leading-relaxed text-lg mb-4">
              Kelmi Lodge & Event Center is a modern hospitality destination strategically located at KM 4, DSC Expressway, Otokutu, Ughelli South, Delta State — offering 6 discounted room classes, conference facilities, lounge & stage, and snooker bar for business and leisure travelers.
            </p>
            <p className="text-neutral-500 leading-relaxed text-lg">
              We combine contemporary standards with Niger Delta warmth to create memorable experiences. Whether business, family, conference, or wedding, we exceed expectations through professionalism and attention to detail — best rate direct at kelmilodgeandeventhall.com.
            </p>
          </motion.div>

          {/* Leadership CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-secondary to-[#0f1f1f] rounded-lg p-8 lg:p-10 mb-16 relative overflow-hidden border border-white/5">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Leadership</span>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-3">Meet the Team Behind the Welcome</h3>
                <div className="w-12 h-0.5 bg-primary lg:mx-0 mx-auto mb-4" />
                <p className="text-white/70 leading-relaxed">From kitchen to front desk, every department is led by a dedicated head — put a face to the name before you arrive.</p>
              </div>
              <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary text-secondary hover:bg-primary-dark transition-colors">
                Meet the Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Vision / Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div whileHover={{ y: -4 }} className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Crown className="w-6 h-6 text-primary" /></div>
              <h3 className="font-serif text-xl font-bold text-secondary mb-3">Vision Statement</h3>
              <div className="w-8 h-0.5 bg-primary mb-4" />
              <p className="text-neutral-500 leading-relaxed">To be the preferred hospitality destination in Delta State, delivering exceptional service, comfort, and unforgettable guest experiences.</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"><Award className="w-6 h-6 text-primary" /></div>
              <h3 className="font-serif text-xl font-bold text-secondary mb-3">Mission Statement</h3>
              <div className="w-8 h-0.5 bg-primary mb-4" />
              <p className="text-neutral-500 leading-relaxed">To provide quality accommodation across 6 classes, excellent service, and a welcoming atmosphere while creating value for guests and community.</p>
            </motion.div>
          </div>

          {/* Brand Promises */}
          <div className="bg-gradient-to-br from-secondary to-[#0f1f1f] rounded-lg p-8 lg:p-10 mb-16 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 pointer-events-none" />
            <div className="relative z-10">
              <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Our Brand Promises</span>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-6">What We Promise Every Guest</h3>
              <div className="w-12 h-0.5 bg-primary mb-6" />
              <p className="text-white/80 text-lg leading-relaxed">We promise every guest a memorable stay characterized by comfort, cleanliness, safety, professionalism, and genuine Nigerian hospitality — at our new discounted rates.</p>
            </div>
          </div>

          {/* Service Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="h-[400px] overflow-hidden rounded-lg border border-neutral-200">
              <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80" alt="Kelmi Lounge & Stage" width="1600" height="1000" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Service Philosophy</span>
              <h3 className="font-serif text-2xl font-bold text-secondary mb-3">Our Approach to Hospitality</h3>
              <div className="w-8 h-0.5 bg-primary mb-4" />
              <p className="text-neutral-500 leading-relaxed">At the heart of our operations is the belief that every guest deserves respect, prompt attention, and personalized service. We create experiences that inspire return and confident recommendations.</p>
            </div>
          </div>

          {/* Quality Policy */}
          <div className="bg-neutral-50 rounded-lg p-8 lg:p-10 mb-16 border border-neutral-200">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Quality Policy</span>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-secondary">Our Standard of Excellence</h3>
              <div className="w-12 h-0.5 bg-primary mx-auto my-4" />
            </div>
            <p className="text-neutral-500 leading-relaxed text-center max-w-4xl mx-auto">We consistently deliver high-quality hospitality through continuous staff development, effective management, regular facility maintenance, and continual improvement that meets and exceeds expectations.</p>
          </div>

          {/* Core Values */}
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Our Values</span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-secondary">Core <em className="text-primary not-italic">Values</em></h3>
            <div className="w-12 h-0.5 bg-primary mx-auto my-4" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CORE_VALUES.map((value) => (
              <span key={value} className="inline-block px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-full border border-primary/30 bg-white text-secondary shadow-sm hover:border-primary hover:shadow-md transition-all">
                {value}
              </span>
            ))}
          </div>

          {/* Charter / Conduct */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200">
              <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Customer Service Charter</span>
              <h3 className="font-serif text-xl font-bold text-secondary mb-4">Our Commitment to You</h3>
              <div className="w-8 h-0.5 bg-primary mb-4" />
              <ul className="space-y-3">
                {CHARTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-500"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-lg p-8 shadow-sm relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-primary/5 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Employee Code of Conduct</span>
                <h3 className="font-serif text-xl font-bold text-white mb-4">Our Standards</h3>
                <div className="w-8 h-0.5 bg-primary mb-4" />
                <ul className="space-y-3">
                  {CONDUCT_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold tracking-[0.24em] uppercase text-primary block mb-2">Our Services</span>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-secondary">Everything We <em className="text-primary not-italic">Offer</em></h3>
              <div className="w-12 h-0.5 bg-primary mx-auto my-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((service) => (
                <div key={service} className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 shadow-sm border border-neutral-200 hover:border-primary/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Check className="w-4 h-4 text-primary" /></div>
                  <span className="text-sm text-secondary font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment */}
          <ShineBorder borderWidth={1} duration={14} shineColor={["#C5A55A","#E8D5B5"]} className="bg-gradient-to-br from-primary to-[#B8943E] rounded-lg">
            <div className="p-8 lg:p-10 text-center">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-secondary mb-4">Our Commitment</h3>
              <div className="w-12 h-0.5 bg-secondary/30 mx-auto mb-4" />
              <p className="text-secondary/80 text-lg leading-relaxed max-w-4xl mx-auto">
                We are committed to creating lasting memories through exceptional hospitality, building long-term relationships, empowering our employees, and contributing positively to Delta State and the Niger Delta region.
              </p>
            </div>
          </ShineBorder>

          <div className="text-center mt-12">
            <Link href="/book" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-secondary text-white hover:bg-black transition-colors">
              Book Your Stay <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
