import type { ReactNode } from "react"
import { Eyebrow } from "./Eyebrow"

export function Manifesto() {
  return (
    <section id="manifiesto" className="relative min-h-[100svh] flex items-start py-16 sm:py-20 lg:py-24 border-y border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-grid-coarse opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-void via-transparent to-brand-void" />
      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 sm:col-span-3">
            <Eyebrow color="primary">El manifiesto</Eyebrow>
          </div>
          <div className="col-span-12 sm:col-span-9 space-y-2">
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
      </div>
    </section>
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
