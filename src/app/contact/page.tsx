"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, Sparkles, MessageCircle, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { AuroraText } from "@/components/magicui/aurora-text"
import { ShineBorder } from "@/components/magicui/shine-border"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { toast, Toaster } from "sonner"

const contactInfo = [
  { icon: MapPin, label: "Address", value: "KM 4, DSC Expressway by Karika Filling Station, Otokutu, Ughelli South, Delta State" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+234 706 954 7231" },
  { icon: Mail, label: "Email", value: "info@kelmilodgeandeventhall.com" },
  { icon: Clock, label: "Front Desk", value: "Open 24 hours • Best reply within 2h" },
]

export default function ContactPage() {
  return (
    <>
      <Toaster richColors />
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,90,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary tracking-[0.2em] uppercase text-xs font-medium border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full"><Sparkles className="w-3 h-3" /> Get In Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mt-6">Contact & <AuroraText className="font-serif font-bold">Bookings</AuroraText></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">We reply within 2 hours — calls, WhatsApp, or the form below.</motion.p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="flex gap-4 p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-primary" /></div>
                <div>
                  <p className="font-medium text-secondary text-sm">{item.label}</p>
                  <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{item.value}</p>
                </div>
              </motion.div>
            ))}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 h-64 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <p className="relative text-sm text-neutral-500 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Map — Otokutu, Ughelli South</p>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-3" onSubmit={(e) => { e.preventDefault(); toast.success("Message sent — we’ll reply within 2 hours!") }}>
            <ShineBorder borderWidth={1} duration={14} shineColor={["#C5A55A","#E8D5B5"]} className="bg-white shadow-sm">
              <div className="p-7 md:p-8 space-y-5">
                <h3 className="font-serif text-xl text-secondary flex items-center gap-2"><MessageCircle className="w-5 h-5 text-primary" /> Send a message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1.5">Full Name</label>
                    <input required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1.5">Email</label>
                    <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1.5">Phone</label>
                  <input type="tel" placeholder="+234 700 000 0000" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1.5">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm">
                    <option>General Inquiry</option>
                    <option>Room Reservation</option>
                    <option>Event Booking</option>
                    <option>Lounge Booking</option>
                    <option>Group Booking</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1.5">Message</label>
                  <textarea rows={5} required placeholder="Tell us how we can help..." className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm resize-none" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-white py-4 rounded-full font-medium hover:bg-black transition-colors"><Send className="w-4 h-4" /> Send message</button>
                <p className="text-xs text-center text-neutral-400">Prefer WhatsApp? <a href="https://wa.me/2347069547231" target="_blank" className="text-primary underline">Chat now</a></p>
              </div>
            </ShineBorder>
          </motion.form>
        </div>
      </Section>

      <Section className="bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-2xl text-secondary">Prefer to book direct?</h3>
          <p className="text-sm text-neutral-500 mt-2">Best rate guaranteed, free cancellation, and pay-at-property on direct bookings.</p>
          <a href="/book" className="inline-flex items-center gap-2 mt-6 bg-primary text-secondary px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors">Go to booking <ArrowRight className="w-4 h-4" /></a>
        </div>
      </Section>
    </>
  )
}
