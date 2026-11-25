// Inline SVG icons: they are part of the bundle, so they draw on the first
// frame. The old Material Symbols font (several MB) showed each icon as its
// name ("exercise", "check") until it finished downloading.

type P = { size?: number; className?: string }

const base = (size: number, className = "") => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  "aria-hidden": true,
})

export const Check = ({ size = 18, className }: P) => (
  <svg {...base(size, className)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const Minus = ({ size = 18, className }: P) => (
  <svg {...base(size, className)}>
    <path d="M5 12h14" />
  </svg>
)

export const Menu = ({ size = 22, className }: P) => (
  <svg {...base(size, className)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Close = ({ size = 22, className }: P) => (
  <svg {...base(size, className)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const Chevron = ({ size = 20, className }: P) => (
  <svg {...base(size, className)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const Dumbbell = ({ size = 22, className }: P) => (
  <svg {...base(size, className)}>
    <path d="M6.5 6.5v11M17.5 6.5v11M3 9.5v5M21 9.5v5M6.5 12h11" />
  </svg>
)

export const Camera = ({ size = 22, className }: P) => (
  <svg {...base(size, className)}>
    <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
)

export const Lotus = ({ size = 22, className }: P) => (
  <svg {...base(size, className)}>
    <circle cx="12" cy="5" r="2" />
    <path d="M12 9v5M7 21l5-7 5 7M5 13c2.5 1.5 4.5 1.5 7 1 2.5.5 4.5.5 7-1" />
  </svg>
)

export const Book = ({ size = 22, className }: P) => (
  <svg {...base(size, className)}>
    <path d="M12 6c-2-1.5-5-2-8-1.5V19c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V4.5C17 4 14 4.5 12 6zM12 6v14.5" />
  </svg>
)

export function AppleLogo({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

export function PlayLogo({ size = 22 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.6 2.3c-.3.3-.4.7-.4 1.2v17c0 .5.1.9.4 1.2l9.3-9.7z" fill="#00D7FE" />
      <path d="m16 15.2-3.1-3.2-9.3 9.7c.4.4 1 .4 1.6.1z" fill="#FF3A44" />
      <path d="M16 8.8 5.2 2.2c-.6-.3-1.2-.3-1.6.1l9.3 9.7z" fill="#00F076" />
      <path d="m20.3 11-4.3-2.2-3.1 3.2 3.1 3.2 4.3-2.3c.9-.5.9-1.4 0-1.9z" fill="#FFD400" />
    </svg>
  )
}
