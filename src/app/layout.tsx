import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import WhatsAppButton from "@/components/ui/whatsapp-button"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Kelmi Lodge & Event Center | Premium Accommodation & Events",
    template: "%s | Kelmi Lodge & Event Center",
  },
  description:
    "Experience premium lodge accommodation, world-class event spaces, dining, and amenities at Kelmi Lodge & Event Center.",
  keywords: [
    "hotel",
    "lodge",
    "event center",
    "premium accommodation",
    "wedding venue",
    "conference center",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}