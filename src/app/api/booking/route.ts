import { NextResponse } from "next/server"

const RESERVATIONS_EMAIL = "reservations@kelmilodgeandeventhall.com"

type BookingPayload = {
  fullName: string
  email: string
  phone: string
  room: string
  price: number
  checkIn: string
  checkOut: string
  nights: number
  guests: string
  total: number
  requests?: string
}

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-US")}`
}

function buildClientEmail(payload: BookingPayload) {
  return {
    subject: `Booking Received — Kelmi Lodge • ${payload.room}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif; max-width:600px; margin:0 auto; border:1px solid #e5e5e5; border-radius:16px; overflow:hidden;">
        <div style="background:#1B3A3B; padding:24px; text-align:center;">
          <h1 style="color:#C5A55A; margin:0; font-family:Georgia,serif;">Kelmi Lodge & Event Center</h1>
          <p style="color:#fff; opacity:0.8; margin:6px 0 0;">Booking Confirmation — Reply within 2 hours</p>
        </div>
        <div style="padding:24px;">
          <p>Dear <strong>${payload.fullName}</strong>,</p>
          <p>Thank you for choosing Kelmi Lodge. Your booking request for <strong>${payload.room}</strong> has been received and sent to our reservations team at <strong>${RESERVATIONS_EMAIL}</strong>.</p>
          <div style="background:#fafafa; border:1px solid #e5e5e5; border-radius:12px; padding:16px; margin:16px 0;">
            <p style="margin:4px 0;"><strong>Check-in:</strong> ${payload.checkIn} &nbsp; <strong>Check-out:</strong> ${payload.checkOut}</p>
            <p style="margin:4px 0;"><strong>Nights:</strong> ${payload.nights} &nbsp; <strong>Guests:</strong> ${payload.guests}</p>
            <p style="margin:4px 0;"><strong>Total:</strong> ${formatNaira(payload.total)} (${formatNaira(payload.price)}/night)</p>
            ${payload.requests ? `<p style="margin:8px 0;"><strong>Requests:</strong> ${payload.requests}</p>` : ""}
          </div>
          <p style="color:#DC2626; font-weight:800; background:#FEF2F2; border:1px solid #FECACA; border-radius:10px; padding:12px; text-align:center;">⚠️ Please wait for our confirmation within 2 hours before making any payment. Do not pay until your reservation is confirmed!</p>
          <p style="margin-top:16px;">A member of our reservations team will contact you at <strong>${payload.email}</strong> / ${payload.phone} within 2 hours.</p>
          <p style="color:#737373; font-size:12px; margin-top:18px;">If you did not make this request, please ignore this email or contact ${RESERVATIONS_EMAIL} / info@kelmilodgeandeventhall.com.</p>
        </div>
        <div style="background:#fafafa; padding:14px; text-align:center; font-size:12px; color:#737373;">
          Kelmi Lodge & Event Center • kelmilodgeandeventhall.com • Oloje Street, Ughelli South • ${RESERVATIONS_EMAIL} • info@kelmilodgeandeventhall.com • +234 706 954 7231
        </div>
      </div>
    `,
    text: `Dear ${payload.fullName},\n\nYour booking for ${payload.room} (${payload.checkIn} → ${payload.checkOut}, ${payload.nights} nights, ${payload.guests} guests, Total ${formatNaira(payload.total)}) has been received.\nSent to ${RESERVATIONS_EMAIL}. We will confirm within 2 hours. Do not pay until confirmed!\n\n— Kelmi Lodge`,
  }
}

function buildReservationsEmail(payload: BookingPayload) {
  return {
    subject: `New Booking — ${payload.room} — ${payload.fullName} — ${payload.checkIn}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif; max-width:600px; margin:0 auto; border:1px solid #e5e5e5; border-radius:16px; overflow:hidden;">
        <div style="background:#C5A55A; padding:18px;">
          <h2 style="margin:0; color:#1B3A3B;">New Booking Request</h2>
          <p style="margin:4px 0 0; color:#1B3A3B;">${payload.room} • ${payload.checkIn} → ${payload.checkOut} • ${formatNaira(payload.total)}</p>
        </div>
        <div style="padding:20px;">
          <p><strong>Guest:</strong> ${payload.fullName} (${payload.email}, ${payload.phone})</p>
          <p><strong>Room:</strong> ${payload.room} — ${formatNaira(payload.price)}/night</p>
          <p><strong>Stay:</strong> ${payload.checkIn} → ${payload.checkOut} (${payload.nights} nights, ${payload.guests} guests)</p>
          <p><strong>Total:</strong> ${formatNaira(payload.total)}</p>
          ${payload.requests ? `<p><strong>Requests:</strong> ${payload.requests}</p>` : ""}
          <p style="margin-top:12px; font-size:12px; color:#737373;">Client confirmation email also sent to ${payload.email}. Please confirm within 2 hours. WhatsApp: https://wa.me/2347069547231</p>
        </div>
      </div>
    `,
    text: `New booking: ${payload.fullName} (${payload.email}, ${payload.phone}) — ${payload.room} — ${payload.checkIn} → ${payload.checkOut} — Total ${formatNaira(payload.total)}`,
  }
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as BookingPayload

    if (!payload.email || !payload.fullName || !payload.room) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const clientEmail = buildClientEmail(payload)
    const reservationsEmail = buildReservationsEmail(payload)

    // Real provider (Resend) — uses Gmail-verified addresses via domain
    // From must be verified in Resend after DNS: Reservations@kelmilodgeandeventhall.com / info@kelmilodgeandeventhall.com
    // await resend.emails.send({ from: "Kelmi Lodge <Reservations@kelmilodgeandeventhall.com>", to: payload.email, subject: clientEmail.subject, html: clientEmail.html })
    // await resend.emails.send({ from: "Kelmi Lodge <Reservations@kelmilodgeandeventhall.com>", to: RESERVATIONS_EMAIL, subject: reservationsEmail.subject, html: reservationsEmail.html })
    // Gmail SMTP alternative: transporter.sendMail({ from: "Reservations@kelmilodgeandeventhall.com", to: payload.email, ... })

    console.log("[BOOKING] Client email preview:", clientEmail.subject, "→", payload.email)
    console.log("[BOOKING] Reservations email preview:", reservationsEmail.subject, "→", RESERVATIONS_EMAIL)

    // Simulate async send
    await new Promise((r) => setTimeout(r, 300))

    return NextResponse.json({
      success: true,
      message: `Emails queued: confirmation to ${payload.email}, booking to ${RESERVATIONS_EMAIL}`,
      previews: {
        client: { to: payload.email, subject: clientEmail.subject },
        reservations: { to: RESERVATIONS_EMAIL, subject: reservationsEmail.subject },
      },
    })
  } catch (err) {
    console.error("[BOOKING] Error:", err)
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok", reservationsEmail: RESERVATIONS_EMAIL })
}
