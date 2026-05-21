import { CompassLogo } from "./CompassLogo"

interface WordmarkProps {
  size?: "sm" | "md" | "lg"
  withLogo?: boolean
}

export function Wordmark({ size = "md", withLogo = true }: WordmarkProps) {
  const cls =
    size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-[17px]"
  const logoSize = size === "sm" ? 22 : size === "lg" ? 36 : 26
  return (
    <span className="inline-flex items-center gap-2.5">
      {withLogo && <CompassLogo size={logoSize} />}
      <span className={`font-headline font-black-x tracking-tightest text-white ${cls}`}>
        THE&nbsp;PROTOCOL
      </span>
    </span>
  )
}
