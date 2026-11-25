import type { ReactNode } from "react"
import { AppleLogo, PlayLogo } from "./icons"

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.cornugs.theprotocolapp"
export const APP_STORE_URL =
  "https://apps.apple.com/mx/app/the-protocol/id6767892029"

/** A real screenshot of the app in a phone frame. The images are the
 *  store captures (demo data, no real users), 600px WebP, ~40 KB each. */
export function Phone({
  src,
  alt,
  glow,
  eager = false,
  className = "",
}: {
  src: string
  alt: string
  glow?: string
  eager?: boolean
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      {glow ? (
        <div
          aria-hidden="true"
          className="absolute -inset-[18%] rounded-full blur-3xl opacity-40"
          style={{ background: `radial-gradient(circle, ${glow}, transparent 62%)` }}
        />
      ) : null}
      <div className="phone-frame relative">
        <img
          src={src}
          alt={alt}
          width={600}
          height={1304}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          {...(eager ? { fetchPriority: "high" as const } : {})}
          className="block w-full h-auto rounded-[2rem] sm:rounded-[2.4rem]"
        />
      </div>
    </div>
  )
}

/** The two store buttons, always together. */
export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col min-[420px]:flex-row gap-3 ${className}`}>
      <StoreButton href={APP_STORE_URL} small="Descárgala en" big="App Store" icon={<AppleLogo size={26} />} />
      <StoreButton href={PLAY_STORE_URL} small="Disponible en" big="Google Play" icon={<PlayLogo size={24} />} />
    </div>
  )
}

function StoreButton({ href, small, big, icon }: { href: string; small: string; big: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="store-btn inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-white"
    >
      {icon}
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[11px] text-white/70">{small}</span>
        <span className="font-headline font-bold text-[17px]">{big}</span>
      </span>
    </a>
  )
}

export function SectionTitle({ title, lead, center = false }: { title: ReactNode; lead?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <h2 className="font-headline font-bold text-white text-[2rem] leading-[1.08] sm:text-5xl tracking-tight">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-[17px] sm:text-lg text-white/65 leading-relaxed">{lead}</p> : null}
    </div>
  )
}
