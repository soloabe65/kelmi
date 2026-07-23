"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Section } from "@/components/ui/section"
import { fadeUp, staggerContainer } from "@/lib/animations"

const contactInfo = [
  { icon: MapPin, label: "Address", value: "KM 4, DSC Expressway by Karika Filling Station, Otokutu, Ughelli South, Delta State, Nigeria" },
  { icon: Phone, label: "Phone", value: "+234 706 954 7231" },
  { icon: Mail, label: "Email", value: "info@kelmilodge.com" },
  { icon: Clock, label: "Front Desk", value: "Open 24 hours" },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary/8)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary tracking-[0.3em] uppercase text-sm font-medium"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mt-4"
          >
            Contact & Bookings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 mt-4 max-w-2xl mx-auto text-lg"
          >
            Ready to experience Kelmi? Reach out and let us make your stay extraordinary.
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="flex gap-4">
                <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-secondary">{item.label}</p>
                  <p className="text-sm text-neutral-500 mt-0.5">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1.5">Full Name</label>
                <input id="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1.5">Email Address</label>
                <input id="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1.5">Phone Number</label>
              <input id="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors" placeholder="+234 700 000 0000" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-1.5">Subject</label>
              <select id="subject" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors">
                <option>General Inquiry</option>
                <option>Room Reservation</option>
                <option>Event Booking</option>
                <option>Dining Reservation</option>
                <option>Group Booking</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1.5">Message</label>
              <textarea id="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors resize-none" placeholder="Tell us how we can help..." />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </Section>

      <section className="h-80 bg-neutral-200" />
    </>
  )
}
