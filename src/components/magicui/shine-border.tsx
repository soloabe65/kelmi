"use client"
import { cn } from "@/lib/utils"

interface ShineBorderProps {
  borderWidth?: number
  duration?: number
  shineColor?: string | string[]
  className?: string
  children: React.ReactNode
}

export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = "#C5A55A",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          "--shine-color": Array.isArray(shineColor) ? shineColor.join(",") : shineColor,
        } as React.CSSProperties
      }
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border bg-white [border-width:var(--border-width)]",
        className
      )}
    >
      <div
        style={
          {
            background: `radial-gradient(transparent, transparent, ${Array.isArray(shineColor) ? shineColor[0] : shineColor}, transparent)`,
          } as React.CSSProperties
        }
        className="absolute inset-0 h-full w-full animate-shine rounded-xl"
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}
