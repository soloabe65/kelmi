"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { fadeUp } from "@/lib/animations"

const values = [
  {
    title: "Exceptional Service",
    desc: "Our team is dedicated to anticipating your needs and exceeding expectations at every turn.",
  },
  {
    title: "Authentic Experiences",
    desc: "We celebrate local culture, cuisine, and craftsmanship in every aspect of your stay.",
  },
  {
    title: "Sustainable Luxury",
    desc: "Committed to environmental stewardship without compromising on quality or comfort.",
  },
  {
    title: "Timeless Elegance",
    desc: "Design and hospitality rooted in tradition, refined for the modern traveler.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary/8)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary tracking-[0.3em] uppercase text-sm font-medium"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-white mt-4"
          >
            About Kelmi
          </motion.h1>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary tracking-[0.3em] uppercase text-sm font-medium">
              Since 2020
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-secondary mt-4 leading-tight">
              A Legacy of Warmth & Hospitality
            </h2>
            <div className="mt-6 space-y-4 text-neutral-500 leading-relaxed">
              <p>
                Nestled in the heart of picturesque landscapes, Kelmi Lodge & Event Center was born
                from a vision to create a sanctuary where modern luxury meets timeless hospitality.
              </p>
              <p>
                Our founders, driven by a passion for exceptional experiences, transformed this
                historic estate into a premier destination for discerning travelers and memorable
                events.
              </p>
              <p>
                Every corner of Kelmi tells a story — from the hand-selected art adorning our walls
                to the locally-sourced ingredients on your plate. We believe that true luxury lies
                in the details.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-96 rounded-2xl bg-neutral-200"
          />
        </div>
      </Section>

      <Section dark>
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="font-serif text-xl text-white mb-3">{v.title}</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  )
}