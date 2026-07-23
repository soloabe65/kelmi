"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check, ChevronLeft, Home, Send, Copy, Calendar, Users } from "lucide-react"

const PHONE = "2347069547231"

const rooms = [
  {
    id: "presidential",
    title: "Presidential Suite",
    image: "/images/suite-presidential.jpg",
    price: 850000,
    amenities: ["Panoramic Views", "Private Terrace", "Jacuzzi", "Butler Service"],
  },
  {
    id: "executive",
    title: "Executive Lodge",
    image: "/images/suite-executive.jpg",
    price: 520000,
    amenities: ["Forest Views", "Workstation", "Rain Shower", "Mini Bar"],
  },
  {
    id: "garden",
    title: "Garden View Room",
    image: "/images/suite-garden.jpg",
    price: 320000,
    amenities: ["Garden Access", "Organic Linens", "Walk-in Closet", "Tea Station"],
  },
]

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-US")}`
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

function getNextDay(date: Date) {
  const next = new Date(date)
  next.setDate(next.getDate() + 1)
  return next
}

function toDateInputValue(date: Date) {
  return date.toISOString().split("T")[0]
}

const today = new Date()
const todayStr = toDateInputValue(today)
const tomorrowStr = toDateInputValue(getNextDay(today))

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("2")
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [requests, setRequests] = useState("")
  const [booked, setBooked] = useState(false)
  const [stepError, setStepError] = useState("")
  const topRef = useRef<HTMLDivElement>(null)

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0
    const ci = new Date(checkIn)
    const co = new Date(checkOut)
    const diff = Math.round((co.getTime() - ci.getTime()) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 0
  }, [checkIn, checkOut])

  const room = rooms.find((r) => r.id === selectedRoom)
  const total = nights * (room?.price ?? 0)

  const checkOutMin = checkIn ? toDateInputValue(getNextDay(new Date(checkIn))) : tomorrowStr

  const handleCheckInChange = (value: string) => {
    setCheckIn(value)
    if (checkOut && value && new Date(checkOut) <= new Date(value)) {
      setCheckOut("")
    }
  }

  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ behavior: "smooth" })
  }, [step])

  const canProceedStep1 = checkIn && checkOut && selectedRoom && nights > 0
  const canProceedStep2 = fullName.trim() && email.trim() && phone.trim()

  const handleNextStep1 = () => {
    if (!canProceedStep1) {
      setStepError("Please select check-in, check-out dates, and a room to continue.")
      return
    }
    setStepError("")
    setStep(2)
  }

  const handleNextStep2 = () => {
    if (!canProceedStep2) {
      setStepError("Please fill in your full name, email, and phone number.")
      return
    }
    setStepError("")
    setStep(3)
  }

  const buildBookingMessage = () => {
    const lines = [
      "🏨 *New Booking Request - Kelmi Lodge*",
      "",
      "📋 *Guest Details*",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "🛏 *Room Details*",
      `Room: ${room?.title}`,
      `Price: ${formatNaira(room?.price ?? 0)}/night`,
      "",
      "📅 *Stay Details*",
      `Check-in: ${formatDate(new Date(checkIn))}`,
      `Check-out: ${formatDate(new Date(checkOut))}`,
      `Nights: ${nights}`,
      `Guests: ${guests}`,
      "",
      "💰 *Pricing*",
      `Cost per night: ${formatNaira(room?.price ?? 0)}`,
      `Total: ${formatNaira(total)}`,
      "",
    ]
    if (requests.trim()) {
      lines.push("📝 *Special Requests*", requests, "")
    }
    lines.push(`🕐 *Sent:* ${new Date().toLocaleString("en-GB")}`)
    return encodeURIComponent(lines.join("\n"))
  }

  const buildReceiptMessage = () => {
    const lines = [
      "📎 *Payment Receipt - Kelmi Lodge*",
      "",
      `Guest: ${fullName}`,
      `Room: ${room?.title}`,
      `Amount Paid: ${formatNaira(total)}`,
      "",
      "Please find attached screenshot of payment receipt.",
      "",
      `🕐 *Sent:* ${new Date().toLocaleString("en-GB")}`,
    ]
    return encodeURIComponent(lines.join("\n"))
  }

  const handleConfirmBooking = () => {
    const url = `https://wa.me/${PHONE}?text=${buildBookingMessage()}`
    window.open(url, "_blank")
    setBooked(true)
  }

  const handleResendBooking = () => {
    const url = `https://wa.me/${PHONE}?text=${buildBookingMessage()}`
    window.open(url, "_blank")
  }

  const handleSendReceipt = () => {
    const url = `https://wa.me/${PHONE}?text=${buildReceiptMessage()}`
    window.open(url, "_blank")
  }

  const steps = [
    { num: 1, label: "Your Stay" },
    { num: 2, label: "Your Details" },
    { num: 3, label: "Review & Book" },
  ]

  if (booked) {
    return (
      <>
        <section className="pt-32 pb-20 bg-neutral-50 min-h-screen">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-neutral-200"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-3xl text-secondary mb-4">
                Booking Request Received
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-2">
                Thank you, <strong>{fullName}</strong>! Your booking request for the{" "}
                <strong>{room?.title}</strong> has been sent to our reservations team at{" "}
                <strong>{email}</strong>.
              </p>
              <p className="text-neutral-500 text-sm mb-8">
                Please wait for our confirmation within 24 hours before making any payment.
                Do not pay until your reservation is confirmed.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-medium text-amber-800 mb-3">Payment Details</h3>
                <p className="text-sm text-amber-700 mb-2">
                  <em>Placeholder — update with real bank details</em>
                </p>
                <div className="space-y-1 text-sm text-amber-800">
                  <p><strong>Bank:</strong> [Bank Name]</p>
                  <p><strong>Account Name:</strong> Kelmi Lodge & Event Center</p>
                  <p><strong>Account Number:</strong> [Account Number]</p>
                  <p><strong>Amount Due:</strong> {formatNaira(total)}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleSendReceipt}
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-secondary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Payment Receipt via WhatsApp
                </button>
                <button
                  onClick={handleResendBooking}
                  className="inline-flex items-center justify-center gap-2 border border-secondary/30 text-secondary px-8 py-4 rounded-full font-medium hover:bg-secondary/5 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  Resend Booking to WhatsApp
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 text-neutral-500 px-8 py-4 rounded-full font-medium hover:text-primary transition-colors mt-2"
                >
                  <Home className="w-4 h-4" />
                  Back to Homepage
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-neutral-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6" ref={topRef}>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-5xl text-secondary text-center mb-4"
          >
            Book Your Stay
          </motion.h1>
          <p className="text-neutral-500 text-center mb-12 max-w-lg mx-auto">
            Complete the steps below and we&apos;ll confirm your reservation within 24 hours.
          </p>

          {/* Progress */}
          <div className="flex items-center justify-center gap-0 mb-12">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      step > s.num
                        ? "bg-primary text-white"
                        : step === s.num
                          ? "bg-secondary text-white"
                          : "bg-neutral-200 text-neutral-500"
                    }`}
                  >
                    {step > s.num ? <Check className="w-4 h-4" /> : s.num}
                  </div>
                  <span
                    className={`text-sm hidden sm:inline ${
                      step >= s.num ? "text-secondary font-medium" : "text-neutral-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-12 sm:w-20 h-0.5 mx-2 ${
                      step > s.num ? "bg-primary" : "bg-neutral-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
                  <h2 className="font-serif text-xl text-secondary mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Your Stay
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-5 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">Check-in Date</label>
                      <input
                        type="date"
                        value={checkIn}
                        min={todayStr}
                        onChange={(e) => handleCheckInChange(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">Check-out Date</label>
                      <input
                        type="date"
                        value={checkOut}
                        min={checkOutMin}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-neutral-400" />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                        ))}
                      </select>
                    </div>
                    {nights > 0 && (
                      <span className="text-primary font-medium">
                        {nights} {nights === 1 ? "night" : "nights"}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg text-secondary mb-4">Select a Room</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {rooms.map((r) => {
                      const isSelected = selectedRoom === r.id
                      return (
                        <button
                          key={r.id}
                          onClick={() => setSelectedRoom(r.id)}
                          className={`text-left rounded-2xl overflow-hidden border-2 transition-all ${
                            isSelected
                              ? "border-primary shadow-md"
                              : "border-neutral-200 hover:border-neutral-300"
                          }`}
                        >
                          <div
                            className="h-40 bg-cover bg-center"
                            style={{ backgroundImage: `url(${r.image})` }}
                          />
                          <div className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium text-secondary">{r.title}</h4>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Available</span>
                            </div>
                            <p className="text-primary font-semibold text-sm">{formatNaira(r.price)}<span className="text-neutral-400 font-normal text-xs">/night</span></p>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {r.amenities.slice(0, 2).map((a) => (
                                <span key={a} className="text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">{a}</span>
                              ))}
                              <span className="text-xs text-neutral-400">+{r.amenities.length - 2} more</span>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {total > 0 && (
                  <div className="bg-neutral-50 rounded-xl p-5 text-center">
                    <p className="text-sm text-neutral-500">Total for {nights} {nights === 1 ? "night" : "nights"}</p>
                    <p className="text-2xl font-serif text-secondary mt-1">{formatNaira(total)}</p>
                  </div>
                )}

                {stepError && (
                  <p className="text-red-500 text-sm text-center">{stepError}</p>
                )}

                <div className="text-center">
                  <button
                    onClick={handleNextStep1}
                    className={`inline-flex items-center gap-2 px-10 py-4 rounded-full font-medium transition-colors ${
                      canProceedStep1
                        ? "bg-secondary text-white hover:bg-secondary/90"
                        : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                    }`}
                  >
                    Next Step <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
                  <h2 className="font-serif text-xl text-secondary mb-6">Your Details</h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Chinwe Obi"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="chinwe@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1.5">Special Requests (optional)</label>
                      <textarea
                        rows={3}
                        value={requests}
                        onChange={(e) => setRequests(e.target.value)}
                        placeholder="Any special requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm resize-none"
                      />
                    </div>
                  </div>
                </div>

                {stepError && (
                  <p className="text-red-500 text-sm text-center">{stepError}</p>
                )}

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => { setStep(1); setStepError("") }}
                    className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-600 px-8 py-4 rounded-full font-medium hover:bg-neutral-50 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    onClick={handleNextStep2}
                    className={`inline-flex items-center gap-2 px-10 py-4 rounded-full font-medium transition-colors ${
                      canProceedStep2
                        ? "bg-secondary text-white hover:bg-secondary/90"
                        : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                    }`}
                  >
                    Next Step <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
                  <h2 className="font-serif text-xl text-secondary mb-6">Review Your Booking</h2>

                  <div className="flex gap-4 mb-6 p-4 bg-neutral-50 rounded-xl">
                    <div
                      className="w-24 h-24 rounded-xl bg-cover bg-center shrink-0"
                      style={{ backgroundImage: `url(${room?.image})` }}
                    />
                    <div>
                      <h3 className="font-medium text-secondary">{room?.title}</h3>
                      <p className="text-primary text-sm font-semibold mt-1">{formatNaira(room?.price ?? 0)}<span className="text-neutral-400 font-normal">/night</span></p>
                      <p className="text-xs text-neutral-400 mt-1">Available</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 text-sm mb-6">
                    <div className="p-4 bg-neutral-50 rounded-xl">
                      <p className="text-neutral-400">Check-in</p>
                      <p className="font-medium text-secondary">{formatDate(new Date(checkIn))}</p>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-xl">
                      <p className="text-neutral-400">Check-out</p>
                      <p className="font-medium text-secondary">{formatDate(new Date(checkOut))}</p>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-xl">
                      <p className="text-neutral-400">Nights</p>
                      <p className="font-medium text-secondary">{nights}</p>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-xl">
                      <p className="text-neutral-400">Guests</p>
                      <p className="font-medium text-secondary">{guests}</p>
                    </div>
                  </div>

                  <div className="border-t border-neutral-200 pt-4 mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-neutral-500">{formatNaira(room?.price ?? 0)} x {nights} {nights === 1 ? "night" : "nights"}</span>
                      <span className="text-secondary font-medium">{formatNaira(total)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-serif pt-2 border-t border-neutral-200">
                      <span className="text-secondary">Total</span>
                      <span className="text-primary font-semibold">{formatNaira(total)}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-neutral-50 rounded-xl text-sm space-y-1">
                    <p><span className="text-neutral-400">Name:</span> <span className="text-secondary">{fullName}</span></p>
                    <p><span className="text-neutral-400">Email:</span> <span className="text-secondary">{email}</span></p>
                    <p><span className="text-neutral-400">Phone:</span> <span className="text-secondary">{phone}</span></p>
                    {requests && (
                      <p><span className="text-neutral-400">Requests:</span> <span className="text-secondary">{requests}</span></p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => { setStep(2); setStepError("") }}
                    className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-600 px-8 py-4 rounded-full font-medium hover:bg-neutral-50 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    onClick={handleConfirmBooking}
                    className="inline-flex items-center gap-2 bg-secondary text-white px-10 py-4 rounded-full font-medium hover:bg-secondary/90 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Confirm Booking
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}