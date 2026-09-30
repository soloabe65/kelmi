"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"
import { ShineBorder } from "@/components/magicui/shine-border"
import { RESPONSE_TIME } from "@/lib/site"
import { toast } from "sonner"

/**
 * Canonical closing CTA — identical on every page.
 * Extracted from the home page banner. Do not restyle per page;
 * change it here and every page follows.
 */
export default function CtaBanner() {
  return (
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
              Book your stay, plan your event, or simply reach out. Our team replies within {RESPONSE_TIME} — best rate when you book direct.
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
  )
}
