"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Accommodation",
    href: "/suites",
    dropdown: [
      { label: "Premium Suites", href: "/suites" },
      { label: "Standard Rooms", href: "/suites#standard" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Dining", href: "/dining" },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Book Now", href: "/book" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl text-primary tracking-wide">
            Kelmi
          </span>
          <span className="hidden sm:inline text-sm text-neutral-500 border-l border-neutral-300 pl-3 leading-none">
            Lodge & Event Center
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, -1).map((link) => (
            <li key={link.href} className="relative">
              {link.dropdown ? (
                <button
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-neutral-600 hover:text-primary transition-colors rounded-full hover:bg-neutral-50"
                >
                  {link.label}
                  <ChevronDown className="w-3 h-3" />
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.ul
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-white backdrop-blur-xl rounded-xl border border-neutral-200 shadow-lg overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block px-5 py-3 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50 transition-colors"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary transition-colors rounded-full hover:bg-neutral-50"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/book"
            className="px-6 py-2.5 text-sm font-medium text-white bg-secondary rounded-full hover:bg-secondary/90 transition-colors"
          >
            Book Now
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-neutral-600 p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-200 overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.dropdown ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-4 py-3 text-sm text-neutral-600 rounded-lg cursor-pointer hover:bg-neutral-50">
                        {link.label}
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                      </summary>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block pl-8 pr-4 py-2.5 text-sm text-neutral-500 hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </details>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-sm text-neutral-600 rounded-lg hover:bg-neutral-50"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}