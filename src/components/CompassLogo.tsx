interface CompassLogoProps {
  size?: number
  glow?: boolean
  className?: string
}

export function CompassLogo({ size = 28, glow = true, className = "" }: CompassLogoProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {glow && (
        <span
          className="absolute inset-0 rounded-[28%] blur-[10px] opacity-70"
          style={{ background: "radial-gradient(circle, rgba(108,92,231,0.55), transparent 65%)" }}
        />
      )}
      <svg viewBox="0 0 100 100" width={size} height={size} className="relative">
        <circle cx="50" cy="50" r="18" fill="none" stroke="rgba(140,126,242,0.35)" strokeWidth="0.8" />
        <polygon points="50,4 56,34 50,48 44,34" fill="#FF4757" />
        <polygon points="96,50 66,56 52,50 66,44" fill="#22C5E8" />
        <polygon points="50,96 44,66 50,52 56,66" fill="#2ED573" />
        <polygon points="4,50 34,44 48,50 34,56" fill="#A06CFF" />
        <circle cx="50" cy="50" r="5" fill="#6C5CE7" />
        <circle cx="50" cy="50" r="2" fill="#B1A5F6" />
      </svg>
    </span>
  )
}
