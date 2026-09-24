"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Sparkles } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Suites",
    href: "/suites",
    dropdown: [
      { label: "Royal Executive Suite (Gold)", href: "/suites/presidential", desc: "Flagship • ₦50,000" },
      { label: "Royal Executive Suite (Silver)", href: "/suites/presidential", desc: "Most booked • ₦40,000" },
      { label: "Presidential Apartment", href: "/suites/presidential", desc: "Apartment • ₦35,000" },
      { label: "Royal Majesty Room", href: "/suites/standard", desc: "Majesty • ₦30,000" },
      { label: "Executive Room", href: "/suites/standard", desc: "Executive • ₦25,000" },
      { label: "Classic Room", href: "/suites/standard", desc: "Classic • ₦20,000" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border-b border-white/40" : "bg-transparent border-transparent"
      )}
    >
      {/* top shimmer bar */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-60" />
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative font-serif text-[28px] tracking-wide text-secondary group-hover:text-primary transition-colors">
              Kelmi
              <span className="ml-[1px] inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-primary animate-pulse ml-1 align-super" />
            </span>
          </div>
          <div className="hidden sm:flex flex-col leading-none border-l border-neutral-200 pl-3">
            <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-neutral-500">Lodge & Event Center</span>
            <span className="text-[11px] text-primary flex items-center gap-1"><Sparkles className="w-3 h-3" /> Ughelli, Delta</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              {link.dropdown ? (
                <div onMouseEnter={() => setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                  <button className={cn("flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-medium rounded-full transition-all", scrolled ? "text-neutral-700 hover:text-secondary hover:bg-neutral-50" : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur")}>
                    {link.label}
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", openDropdown === link.label && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] bg-white/95 backdrop-blur-xl rounded-2xl border border-neutral-200 shadow-[0_16px_48px_rgba(0,0,0,0.12)] overflow-hidden p-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link key={item.href} href={item.href} className="flex flex-col px-4 py-3 rounded-xl hover:bg-neutral-50 group/item transition-colors">
                            <span className="text-sm font-medium text-secondary group-hover/item:text-primary">{item.label}</span>
                            <span className="text-xs text-neutral-400">{item.desc}</span>
                          </Link>
                        ))}
                        <div className="mt-2 p-3 rounded-xl bg-gradient-to-br from-primary/10 via-[#fff7ed] to-transparent border border-primary/10">
                          <p className="text-xs font-medium text-secondary">Need help choosing?</p>
                          <p className="text-xs text-neutral-500">Our concierge is 24/7.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link href={link.href} className={cn("block px-4 py-2 text-[13.5px] font-medium rounded-full transition-colors", scrolled ? "text-neutral-600 hover:text-secondary hover:bg-neutral-50" : "text-white/80 hover:text-white hover:bg-white/10")}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className={cn("text-sm font-medium px-4 hidden xl:block", scrolled ? "text-neutral-600 hover:text-secondary" : "text-white/80 hover:text-white")}>
            Concierge
          </Link>
          <Link href="/book" className="relative inline-flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-medium overflow-hidden group hover:bg-black transition-colors shadow-lg shadow-secondary/20">
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            Book Now
            <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className={cn("lg:hidden p-2 rounded-full transition-colors", scrolled ? "text-secondary bg-white border border-neutral-200" : "text-white bg-white/10 backdrop-blur border border-white/20")} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white border-t border-neutral-200 overflow-hidden">
            <ul className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.dropdown ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-4 py-3 text-sm font-medium text-secondary rounded-xl cursor-pointer hover:bg-neutral-50 list-none">
                        {link.label}
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-neutral-400" />
                      </summary>
                      <div className="ml-4 mt-1 space-y-1 border-l border-neutral-100 pl-4">
                        {link.dropdown.map((item) => (
                          <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm text-neutral-500 hover:text-primary">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link href={link.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-neutral-600 rounded-xl hover:bg-neutral-50 hover:text-secondary">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <Link href="/book" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 bg-secondary text-white py-3.5 rounded-full font-medium">Book Your Stay</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
