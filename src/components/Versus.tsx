import { Icon } from "./Icon"
import { Eyebrow } from "./Eyebrow"
import { SectionHeader } from "./SectionHeader"

const ROWS = [
  { theirs: "Casillas vacías sin propósito", ours: "Misiones que se ejecutan" },
  { theirs: "Rachas para sentirte bien", ours: "Métricas de cumplimiento real" },
  { theirs: "Categorías aisladas entre sí", ours: "Cuatro pilares interconectados" },
  { theirs: "Cuestionario eterno al inicio", ours: "Protocolo activo en 3 minutos" },
]

export function Versus() {
  return (
    <section id="versus" className="relative min-h-[100svh] flex items-start py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-coarse opacity-30 pointer-events-none" />
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 relative">
        <SectionHeader
          eyebrow="La diferencia"
          title={
            <>
              No es una app de hábitos.{" "}
              <span className="text-slate-500">Es otra liga.</span>
            </>
          }
          lead="Las apps tradicionales te recompensan por aparecer. The Protocol te exige ejecutar. Compara."
        />

        <div className="hidden md:block relative rounded-3xl overflow-hidden border border-white/[0.08]">
          <div className="grid grid-cols-2">
            <div className="bg-brand-primary/[0.08] px-3 sm:px-6 py-3 sm:py-4 relative border-r border-white/[0.06]">
              <p className="op-label mb-1" style={{ color: "rgba(142,126,242,0.9)" }}>
                El sistema
              </p>
              <p className="font-headline font-bold text-white text-[13px] sm:text-[18px] tracking-tight">
                The Protocol
              </p>
              <span className="absolute top-2 right-2 sm:top-5 sm:right-5 hidden sm:inline-flex">
                <Eyebrow color="primary" dot={false}>USUARIO</Eyebrow>
              </span>
            </div>
            <div className="bg-slate-950/60 px-3 sm:px-6 py-3 sm:py-4">
              <p className="op-label mb-1">La competencia</p>
              <p className="font-headline font-bold text-slate-400 text-[13px] sm:text-[18px] tracking-tight">
                Apps tradicionales
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/[0.05]">
            {ROWS.map((r, i) => (
              <div key={i} className="grid grid-cols-2">
                <div className="px-3 sm:px-6 py-2.5 sm:py-3.5 border-r border-white/[0.05] bg-brand-primary/[0.03] flex items-center gap-2 sm:gap-3">
                  <Icon name="check" className="text-brand-primarySoft text-[16px] sm:text-[18px] ms-fill shrink-0" />
                  <span className="text-white text-[12px] sm:text-[15px] leading-snug font-medium">
                    {r.ours}
                  </span>
                </div>
                <div className="px-3 sm:px-6 py-2.5 sm:py-3.5 bg-slate-950/40 flex items-center gap-2 sm:gap-3">
                  <Icon name="close" className="text-slate-600 text-[16px] sm:text-[18px] shrink-0" />
                  <span className="text-slate-500 text-[12px] sm:text-[15px] leading-snug line-through decoration-slate-700 decoration-1">
                    {r.theirs}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden grid grid-cols-1 gap-px bg-white/[0.07] rounded-3xl overflow-hidden border border-white/[0.08]">
          <div className="p-6 bg-brand-primary/[0.06] relative">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-primary" />
              <h3 className="font-headline font-bold text-[18px] tracking-tight text-white">
                The Protocol
              </h3>
            </div>
            <ul className="space-y-4">
              {ROWS.map((r) => (
                <li key={`y-${r.ours}`} className="flex items-start gap-3">
                  <Icon name="check_circle" fill className="mt-0.5 text-[20px] shrink-0 text-brand-primarySoft" />
                  <span className="text-[14px] leading-snug text-slate-100 font-medium">
                    {r.ours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-slate-950/60 relative">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-slate-700" />
              <h3 className="font-headline font-bold text-[18px] tracking-tight text-slate-500">
                Apps tradicionales
              </h3>
            </div>
            <ul className="space-y-4">
              {ROWS.map((r) => (
                <li key={`n-${r.theirs}`} className="flex items-start gap-3">
                  <Icon name="cancel" fill className="mt-0.5 text-[20px] shrink-0 text-slate-700" />
                  <span className="text-[14px] leading-snug text-slate-500 line-through decoration-slate-700 decoration-1">
                    {r.theirs}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
