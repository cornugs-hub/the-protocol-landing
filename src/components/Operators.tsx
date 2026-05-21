import { useEffect, useState } from "react"
import { Eyebrow } from "./Eyebrow"
import { PILLAR_TINTS, type PillarKey } from "./PhoneStack"

interface Entry {
  city: string
  pillar: PillarKey
  action: string
}

const RECENT: Entry[] = [
  { city: "CDMX", pillar: "body", action: "Rutina Empujón completada" },
  { city: "Monterrey", pillar: "fuel", action: "Macros del día registrados" },
  { city: "Guadalajara", pillar: "aura", action: "Meditación · 12 min" },
  { city: "Madrid", pillar: "mind", action: "Lectura diaria · 22 páginas" },
  { city: "CDMX", pillar: "body", action: "Misión Pierna ejecutada" },
  { city: "Querétaro", pillar: "fuel", action: "Comida escaneada · 540 kcal" },
  { city: "Bogotá", pillar: "aura", action: "Sesión de respiración 4-7-8" },
  { city: "Monterrey", pillar: "mind", action: "Notas de aprendizaje añadidas" },
]

export function Operators() {
  const [pulse, setPulse] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setPulse((p) => p + 1), 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="operadores" className="relative min-h-[100svh] flex items-start py-16 sm:py-20 lg:py-24 border-y border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-grid-coarse opacity-30" />
      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <Eyebrow color="primary">Beta en ejecución</Eyebrow>
          <h2 className="mt-5 font-headline font-black-x text-white tracking-brutalTight leading-[0.98] text-[32px] sm:text-[44px] md:text-[52px]">
            Esto se ejecuta{" "}
            <span className="text-gradient-primary">ahora mismo.</span>
          </h2>
          <ul className="mt-8 space-y-4 max-w-md mx-auto lg:mx-0 text-left">
            <InfoItem
              title="Misiones diarias reales"
              body="Cada usuario recibe un protocolo calibrado. Sin casillas vacías: misiones que exigen ejecución."
            />
            <InfoItem
              title="Cuatro pilares interconectados"
              body="Cuerpo, Combustible, Espíritu y Mente reportan a un solo sistema. El progreso de uno empuja a los demás."
            />
            <InfoItem
              title="Sin métricas de vanidad"
              body="No medimos likes ni rachas falsas. Medimos ejecución, cumplimiento y evolución real."
            />
          </ul>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 max-w-md mx-auto lg:mx-0">
            <Chip label="Beta activa" />
            <Chip label="Cupos limitados" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-primary/30 via-white/[0.05] to-transparent" />
          <div className="relative rounded-3xl bg-brand-void/80 border border-white/[0.06] backdrop-blur overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-fuel pulse-dot" />
                <p className="op-label !text-slate-400">ACTIVIDAD RECIENTE</p>
              </div>
              <p className="op-label">
                {new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
            <div className="divide-y divide-white/[0.04] relative">
              {RECENT.map((r, i) => {
                const t = PILLAR_TINTS[r.pillar]
                const highlighted = (pulse + i) % RECENT.length === RECENT.length - 1
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-4 px-4 sm:px-5 py-2.5 sm:py-3.5 transition-colors ${
                      highlighted ? "bg-white/[0.025]" : ""
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: t.hex, boxShadow: `0 0 8px ${t.hex}aa` }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] sm:text-[13px] text-white font-medium truncate">
                        {r.action}
                      </p>
                    </div>
                    <span className="op-label !text-slate-500 shrink-0">
                      {`+${(i * 7 + 3) % 60}s`}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 op-label !text-slate-300">
      <span className="w-1 h-1 rounded-full bg-brand-primary" />
      {label}
    </span>
  )
}

function InfoItem({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
      <div>
        <p className="text-white font-headline font-bold text-[14px] sm:text-[15px] tracking-tight">
          {title}
        </p>
        <p className="mt-1 text-slate-400 text-[13px] sm:text-[14px] leading-relaxed">
          {body}
        </p>
      </div>
    </li>
  )
}
