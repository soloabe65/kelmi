"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeUp } from "@/lib/animations"
import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  )
}

export function SectionHeader({
  title,
  subtitle,
  center = true,
}: {
  title: string
  subtitle?: string
  center?: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      className={cn("mb-16 max-w-2xl", center && "mx-auto text-center")}
    >
      <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
        Kelmi Lodge
      </span>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 leading-tight text-secondary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-neutral-500 text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}