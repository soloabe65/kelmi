import Link from "next/link"
import { MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"
import { IMAGES } from "@/lib/images"
import { ADDRESS, CONTACT } from "@/lib/site"

const footerLinks = {
  // Mirrors navbar: every navbar link appears here, no prices, all clickable
  stay: {
    title: "Stay",
    links: [
      { label: "All Suites & Rooms", href: "/suites" },
      { label: "Royal Executive Suite (Gold)", href: "/suites/presidential" },
      { label: "Royal Executive Suite (Silver)", href: "/suites/presidential" },
      { label: "Presidential Apartment", href: "/suites/presidential" },
      { label: "Royal Majesty Room", href: "/suites/standard" },
      { label: "Executive Room", href: "/suites/standard" },
      { label: "Classic Room", href: "/suites/standard" },
    ],
  },
  experiences: {
    title: "Experience",
    links: [
      { label: "Events & Weddings", href: "/events" },
      { label: "Amenities", href: "/amenities" },
      { label: "Lounge & Snooker Bar", href: "/amenities" },
      { label: "Gallery", href: "/gallery" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  discover: {
    title: "Discover",
    links: [
      { label: "Home", href: "/" },
      { label: "About Kelmi", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book Now", href: "/book" },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0f1f1f] text-white overflow-hidden">
      {/* aurora gradient top */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,165,90,0.12),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMAGES.logo} alt="Kelmi Lodge" width="44" height="44" className="w-11 h-11 object-contain" />
              <span className="font-serif text-2xl text-white group-hover:text-primary transition-colors">Kelmi</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              Where timeless elegance meets unparalleled hospitality. Premium lodge, world-class events, and unforgettable moments in Ughelli South.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {ADDRESS.oneLine}</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{CONTACT.phoneDisplay}</a></p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> <a href={`mailto:${CONTACT.infoEmail}`} className="hover:text-primary transition-colors">{CONTACT.infoEmail}</a></p>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary hover:text-secondary flex items-center justify-center transition-colors"><MessageCircle className="w-4 h-4" /></a>
              <a href={`mailto:${CONTACT.infoEmail}`} aria-label="Email" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary hover:text-secondary flex items-center justify-center transition-colors"><Mail className="w-4 h-4" /></a>
              <a href="https://www.google.com/maps/search/?api=1&query=5.5460703,5.8266481" target="_blank" rel="noopener noreferrer" aria-label="Find us on Google Maps" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary hover:text-secondary flex items-center justify-center transition-colors"><Globe className="w-4 h-4" /></a>
            </div>
          </div>

          {Object.values(footerLinks).map((group) => (
            <div key={group.title}>
              <h4 className="font-serif text-white text-[15px] mb-4 tracking-wide">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, idx) => (
                  <li key={`${group.title}-${link.label}-${link.href}-${idx}`}>
                    <Link href={link.href} className="text-sm text-white/55 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-white flex items-center gap-2"><span>Begin your</span> <AuroraText colors={["#C5A55A","#E8D5B5","#D4A574"]} className="font-serif font-bold">Kelmi story</AuroraText></p>
            <p className="text-sm text-white/50">Exclusive seasonal offers • Direct booking perks</p>
          </div>
          <Link href="/book" className="inline-flex items-center gap-2 bg-primary text-secondary px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors shadow-lg">
            Check Availability
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Kelmi Lodge &amp; Event Hall. Crafted with warmth in Delta State.</p>
          <div className="flex gap-6">
            <a href={`mailto:${CONTACT.infoEmail}?subject=Privacy%20Policy%20request`} className="hover:text-white transition-colors">Privacy</a>
            <a href={`mailto:${CONTACT.infoEmail}?subject=Terms%20request`} className="hover:text-white transition-colors">Terms</a>
            <Link href="/suites" className="hover:text-white transition-colors">Rooms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
