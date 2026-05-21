import type { ReactNode } from "react"
import { Eyebrow } from "./Eyebrow"

interface SectionHeaderProps {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  align?: "left" | "center"
}

export function SectionHeader({ eyebrow, title, lead, align = "center" }: SectionHeaderProps) {
  const alignCls =
    align === "left"
      ? "text-left items-start"
      : "text-center mx-auto items-center"
  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl gap-4 mb-8 sm:mb-12`}>
      <Eyebrow color="primary">{eyebrow}</Eyebrow>
      <h2 className="font-headline font-black-x text-[32px] sm:text-[44px] md:text-[56px] leading-[0.96] tracking-brutalTight text-white">
        {title}
      </h2>
      {lead && (
        <p className="text-slate-400 text-[14px] sm:text-[15px] md:text-base max-w-2xl leading-relaxed">
          {lead}
        </p>
      )}
    </div>
  )
}
