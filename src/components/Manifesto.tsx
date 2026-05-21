import { useEffect, useRef, type ReactNode } from "react"
import { Eyebrow } from "./Eyebrow"

export function Manifesto() {
  return (
    <section id="manifiesto" className="relative min-h-[100svh] flex flex-col items-stretch py-16 sm:py-20 lg:py-24 border-y border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-grid-coarse opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-void via-transparent to-brand-void" />

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 flex-1 flex flex-col">
        <div className="grid grid-cols-12 gap-y-8 sm:gap-y-10">
          <div className="col-span-12 sm:col-span-3 text-center sm:text-left">
            <Eyebrow color="primary">El manifiesto</Eyebrow>
          </div>
          <div className="col-span-12 sm:col-span-9 space-y-2 text-center sm:text-left">
            <ManifestoLine>El protocolo no se descarga.</ManifestoLine>
            <ManifestoLine accent>Se ejecuta.</ManifestoLine>
            <ManifestoLine muted>
              No es motivación vacía. No es una app de hábitos. Es disciplina ejecutada.
            </ManifestoLine>
            <ManifestoLine muted>
              Diseñado para quienes no aceptan la mediocridad.
            </ManifestoLine>
          </div>
        </div>

        <div className="sm:hidden relative flex-1 min-h-[260px] mt-8 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-brand-primary/10 blur-[110px]" />
          <div className="absolute inset-0 flex justify-center manifesto-rain-mask">
            <ManifestoRain items={BANNED_ALL} />
          </div>
        </div>
      </div>
    </section>
  )
}

const BANNED_ALL = [
  "Sin halagos vacíos",
  "Sin recompensas baratas",
  "Sin rachas falsas",
  "Sin notificaciones de premio",
  "Sin dopamina barata",
  "Sin excusas",
  "Sin aplausos",
  "Sin mediocridad",
  "Sin atajos",
  "Sólo ejecución",
]

function ManifestoRain({ items }: { items: string[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const firstSetRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const track = trackRef.current
    const firstSet = firstSetRef.current
    if (!track || !firstSet) return

    let raf = 0
    let last = performance.now()
    let offset = 0
    const SPEED = 28

    const step = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      const cycleHeight = firstSet.offsetHeight
      if (cycleHeight > 0) {
        offset += SPEED * dt
        if (offset >= cycleHeight) offset -= cycleHeight
        track.style.transform = `translate3d(0, ${-offset}px, 0)`
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="relative w-full max-w-xs">
      <div
        ref={trackRef}
        className="absolute inset-x-0 top-0 flex flex-col items-center will-change-transform"
      >
        <div ref={firstSetRef} className="flex flex-col items-center w-full">
          {items.map((t, i) => (
            <div key={`a-${i}`} className="pb-3 w-full flex justify-center">
              <BannedTag text={t} />
            </div>
          ))}
        </div>
        {[0, 1, 2].map((k) => (
          <div key={`set-${k}`} className="flex flex-col items-center w-full">
            {items.map((t, i) => (
              <div key={`${k}-${i}`} className="pb-3 w-full flex justify-center">
                <BannedTag text={t} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function BannedTag({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center justify-center gap-2 self-stretch rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 line-through decoration-slate-700/70 backdrop-blur-sm whitespace-nowrap">
      {text}
    </span>
  )
}

function ManifestoLine({
  children,
  accent = false,
  muted = false,
}: {
  children: ReactNode
  accent?: boolean
  muted?: boolean
}) {
  return (
    <p
      className={`font-headline font-black-x tracking-brutalTight leading-[1.02] text-[28px] sm:text-[40px] md:text-[52px] ${
        accent ? "text-gradient-primary" : muted ? "text-slate-500" : "text-white"
      }`}
    >
      {children}
    </p>
  )
}
