import { Reveal } from "./Reveal"
import { SectionHeader } from "./SectionHeader"

interface Step {
  n: string
  title: string
  body: string
  meta: string
}

const STEPS: Step[] = [
  {
    n: "01",
    title: "Calibra el sistema",
    body: "Configura rutinas, macros y sesiones a tu medida. El protocolo se ajusta a tu rango actual y escala contigo.",
    meta: "DURACIÓN · 3 MIN",
  },
  {
    n: "02",
    title: "Ejecuta sin pensar",
    body: "Una misión clara cada mañana. Registro en segundos. Instrucciones directas. Cero fricción entre tú y la acción.",
    meta: "FRICCIÓN · CERO",
  },
  {
    n: "03",
    title: "Mide la evolución",
    body: "Métricas que importan. Rachas que se acumulan. Progreso real, medible y constante.",
    meta: "PROGRESO · DIARIO",
  },
]

export function Process() {
  return (
    <section id="proceso" className="relative min-h-[100svh] flex items-start py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-primary/10 blur-[140px] pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Proceso"
          title={
            <>
              Tres pasos. <br className="hidden sm:block" />
              <span className="text-slate-500">Cero excusas.</span>
            </>
          }
        />
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent z-0" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <ProcessCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessCard({ n, title, body, meta }: Step) {
  return (
    <div className="relative bg-brand-deep/40 border border-white/[0.06] rounded-3xl p-7 sm:p-8 backdrop-blur transition-all hover:border-brand-primary/40 group overflow-hidden">
      <div className="absolute -right-16 -top-16 w-44 h-44 bg-brand-primary/10 rounded-full blur-[60px] group-hover:bg-brand-primary/20 transition-colors" />
      <div className="relative flex items-center justify-between mb-7">
        <div className="w-14 h-14 rounded-2xl bg-brand-void border border-brand-primary/40 flex items-center justify-center glow-soft">
          <span className="font-headline font-black-x text-brand-primarySoft text-[20px] tabular">
            {n}
          </span>
        </div>
        <span className="op-label">{meta}</span>
      </div>
      <h3 className="font-headline font-bold text-white text-[22px] sm:text-[24px] tracking-tight leading-tight mb-3">
        {title}
      </h3>
      <p className="text-slate-400 text-[14px] sm:text-[15px] leading-relaxed">{body}</p>
    </div>
  )
}
