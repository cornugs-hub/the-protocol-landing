import { Icon } from "./Icon"
import { SectionHeader } from "./SectionHeader"

const YES = [
  "Quieres un sistema, no más motivación vacía",
  "Disciplina sobre dopamina barata",
  "Seguimiento real, no impresiones",
  "Pides exigencia, no aplausos",
]

const NO = [
  "Buscas una app que te haga feliz por defecto",
  "Quieres algo fácil",
  "No piensas hacer el trabajo",
  "Necesitas excusas, no resultados",
]

export function Code() {
  return (
    <section id="codigo" className="relative min-h-[100svh] flex items-start py-16 sm:py-20 lg:py-24 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 relative">
        <SectionHeader
          eyebrow="El código"
          title={
            <>
              No es para todos.{" "}
              <br className="hidden sm:block" />
              <span className="text-slate-500">Es para usuarios.</span>
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.07] rounded-3xl overflow-hidden border border-white/[0.08]">
          <CodePanel kind="yes" items={YES} />
          <CodePanel kind="no" items={NO} />
        </div>
      </div>
    </section>
  )
}

function CodePanel({ kind, items }: { kind: "yes" | "no"; items: string[] }) {
  const isYes = kind === "yes"
  return (
    <div className={`p-7 sm:p-12 md:p-14 ${isYes ? "bg-brand-void" : "bg-slate-950/60"} relative`}>
      <div className="flex items-center gap-3 mb-8 sm:mb-10">
        <span className={`w-8 h-px ${isYes ? "bg-brand-primary" : "bg-slate-700"}`} />
        <h3
          className={`font-headline font-bold text-[20px] sm:text-[22px] tracking-tight ${
            isYes ? "text-white" : "text-slate-500"
          }`}
        >
          {isYes ? "Es para ti si…" : "No es para ti si…"}
        </h3>
      </div>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3.5">
            <Icon
              name={isYes ? "check_circle" : "cancel"}
              fill={isYes}
              className={`mt-0.5 text-[22px] shrink-0 ${
                isYes ? "text-brand-primarySoft" : "text-slate-700"
              }`}
            />
            <span
              className={`text-[15px] sm:text-[17px] leading-snug ${
                isYes ? "text-slate-200 font-medium" : "text-slate-500"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
