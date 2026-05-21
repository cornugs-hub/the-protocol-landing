import type { ReactNode } from "react"

interface EyebrowProps {
  children: ReactNode
  color?: "primary" | "gold" | "fuel" | "body"
  dot?: boolean
  className?: string
}

const colorMap: Record<NonNullable<EyebrowProps["color"]>, string> = {
  primary: "text-brand-primarySoft border-brand-primary/25 bg-brand-primary/[0.06]",
  gold: "text-brand-gold border-brand-gold/30 bg-brand-gold/[0.06]",
  fuel: "text-brand-fuel border-brand-fuel/30 bg-brand-fuel/[0.06]",
  body: "text-brand-body border-brand-body/30 bg-brand-body/[0.06]",
}

const dotMap: Record<NonNullable<EyebrowProps["color"]>, string> = {
  primary: "bg-brand-primary",
  gold: "bg-brand-gold",
  fuel: "bg-brand-fuel",
  body: "bg-brand-body",
}

export function Eyebrow({ children, color = "primary", dot = true, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border ${colorMap[color]} font-mono text-[10px] tracking-[0.22em] uppercase ${className}`}
    >
      {dot && <span className={`w-1 h-1 rounded-full ${dotMap[color]}`} />}
      {children}
    </span>
  )
}
