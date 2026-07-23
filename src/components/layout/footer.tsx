import Link from "next/link"

const footerLinks = {
  accommodation: {
    title: "Accommodation",
    links: [
      { label: "Premium Suites", href: "/suites" },
      { label: "Standard Rooms", href: "/suites#standard" },
      { label: "Virtual Tour", href: "/gallery" },
    ],
  },
  experiences: {
    title: "Experiences",
    links: [
      { label: "Fine Dining", href: "/dining" },
      { label: "Events & Weddings", href: "/events" },
      { label: "Spa & Wellness", href: "/amenities" },
      { label: "Concierge", href: "/amenities" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about" },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-3xl text-primary">Kelmi</span>
              <span className="block text-sm text-neutral-500 mt-1">
                Lodge & Event Center
              </span>
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Where timeless elegance meets unparalleled hospitality. Experience
              premium accommodation, world-class events, and unforgettable moments.
            </p>
          </div>
          {Object.values(footerLinks).map((group) => (
            <div key={group.title}>
              <h4 className="font-serif text-secondary text-lg mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Kelmi Lodge & Event Center. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}