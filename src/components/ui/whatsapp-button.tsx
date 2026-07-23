"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const PHONE = "2347069547231"
const WA_URL = `https://wa.me/${PHONE}`

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  )
}