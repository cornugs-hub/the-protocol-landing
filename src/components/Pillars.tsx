import { useEffect, useRef } from "react"
import { Icon } from "./Icon"
import { SectionHeader } from "./SectionHeader"
import { PILLAR_TINTS, PillarMiniPhone, type PillarKey } from "./PhoneStack"

interface PillarData {
  id: PillarKey
  name: string
  icon: string
  headline: string
  body: string
  bullets: string[]
}

const PILLARS: PillarData[] = [
  {
    id: "body",
    name: "Cuerpo",
    icon: "exercise",
    headline: "Tu gimnasio entero en el bolsillo.",
    body: "Rutinas calibradas a tu rango. Series, cargas y descansos sin abrir libreta.",
    bullets: ["Empujón / Tirón / Pierna", "Seguimiento de carga progresiva", "Movilidad y prevención"],
  },
  {
    id: "fuel",
    name: "Combustible",
    icon: "nutrition",
    headline: "Macros automáticos. Sin escribir.",
    body: "Escanea código, lee etiqueta, identifica foto. El registro se llena solo.",
    bullets: ["Cámara con visión", "Códigos de barras", "Calibración a tu objetivo"],
  },
  {
    id: "aura",
    name: "Espíritu",
    icon: "self_improvement",
    headline: "Forja la mente como forjas el cuerpo.",
    body: "Respiración, meditación y enfoque. Sesiones cortas, brutalmente efectivas.",
    bullets: ["Audio guiado", "Respiración estructurada", "Sesiones de enfoque"],
  },
  {
    id: "mind",
    name: "Mente",
    icon: "menu_book",
    headline: "Conocimiento, no ruido.",
    body: "Lectura, notas y hábitos cognitivos. Aprende de fuentes que te exigen.",
    bullets: ["Lecturas diarias", "Notas y subrayados", "Aprendizaje deliberado"],
  },
]

export function Pillars() {
  return (
    <section id="sistema" className="relative min-h-[100svh] flex items-start py-12 sm:py-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] md:w-[800px] md:h-[400px] bg-brand-primary/10 blur-[70px] md:blur-[140px] pointer-events-none" />
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="El sistema"
            title={
              <>
                Cuatro pilares.{" "}
                <span className="text-gradient-primary">Un protocolo.</span>
              </>
            }
            lead="Cada pilar es un módulo independiente. Cada módulo te transforma. Juntos, te forjan completo."
          />
        </div>
        <div className="md:hidden max-w-7xl mx-auto px-5 mt-8 grid grid-cols-1 gap-5">
          {PILLARS.map((p) => (
            <PillarCard key={p.id} {...p} />
          ))}
        </div>
        <div className="hidden md:block">
          <PillarsCarousel />
        </div>
      </div>
    </section>
  )
}

function PillarsCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const offsetRef = useRef(0)

  useEffect(() => {
    const el = trackRef.current
    const wrap = wrapRef.current
    if (!el || !wrap) return
    let visible = true
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => (visible = e.isIntersecting)),
      { threshold: 0.01 },
    )
    obs.observe(wrap)
    let raf = 0
    let last = performance.now()
    const SPEED = 18
    const step = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      if (visible) {
        const half = el.scrollWidth / 2
        if (half > 0) {
          offsetRef.current += SPEED * dt
          if (offsetRef.current >= half) offsetRef.current -= half
          el.style.transform = `translateX(${-offsetRef.current}px)`
        }
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(raf)
      obs.disconnect()
    }
  }, [])

  return (
    <div ref={wrapRef} className="w-full overflow-hidden pointer-events-none mt-8">
      <div ref={trackRef} className="flex gap-5 sm:gap-6 pb-2 w-max will-change-transform">
        {[...PILLARS, ...PILLARS].map((p, i) => (
          <div
            key={`${p.id}-${i}`}
            className="shrink-0 w-[88vw] sm:w-[520px] lg:w-[560px]"
            style={{ maxWidth: "560px" }}
          >
            <PillarCard {...p} />
          </div>
        ))}
      </div>
    </div>
  )
}

function PillarCard({ id, name, icon, headline, body, bullets }: PillarData) {
  const t = PILLAR_TINTS[id]
  return (
    <div className="group relative rounded-3xl overflow-hidden border border-white/[0.06] bg-gradient-to-br from-white/[0.025] to-transparent p-6 sm:p-8 transition-all hover:border-white/15">
      <div
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-60 group-hover:opacity-90 transition-opacity"
        style={{ background: t.hex + "30" }}
      />
      <div className="relative grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-5 sm:gap-7 items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: t.soft, border: `1px solid ${t.border}` }}
            >
              <Icon name={icon} className="text-[22px]" />
            </span>
            <div>
              <p className="op-label" style={{ color: t.hex, opacity: 0.85 }}>
                Pilar · {id.toUpperCase()}
              </p>
              <h3 className="font-headline font-black-x text-white text-[22px] sm:text-[24px] tracking-tight leading-tight">
                {name}
              </h3>
            </div>
          </div>
          <h4 className="font-headline font-bold text-white text-[18px] sm:text-[20px] leading-snug tracking-tight">
            {headline}
          </h4>
          <p className="text-slate-400 text-[14px] sm:text-[15px] leading-relaxed max-w-md">
            {body}
          </p>
          <ul className="space-y-1.5 pt-1">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-slate-300 text-[13px]">
                <span
                  className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                  style={{ background: t.hex }}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:block">
          <PillarMiniPhone pillar={id} />
        </div>
      </div>
    </div>
  )
}
