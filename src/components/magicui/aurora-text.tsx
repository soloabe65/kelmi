"use client"
import { cn } from "@/lib/utils"

export function AuroraText({
  children,
  className,
  colors = ["#C5A55A", "#D4A574", "#B8943E", "#E8D5B5"],
  speed = 1,
}: {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: `aurora ${8 / speed}s ease-in-out infinite alternate`,
  } as React.CSSProperties

  return (
    <span className={cn("relative inline-block", className)} style={gradientStyle}>
      {children}
    </span>
  )
}
