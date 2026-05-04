import { Icon } from "./Icon"

const pillars = [
  {
    color: "body",
    icon: "exercise",
    title: "Cuerpo",
    body: "Rutinas, ejercicios y análisis de fuerza. Tu gimnasio entero en el bolsillo.",
  },
  {
    color: "fuel",
    icon: "nutrition",
    title: "Combustible",
    body: "Escanea códigos, lee etiquetas, identifica fotos. Macros automáticos sin escribir nada.",
  },
  {
    color: "aura",
    icon: "auto_awesome",
    title: "Espíritu",
    body: "Meditaciones guiadas, respiración consciente, sesiones de enfoque. Forja tu mente como tu cuerpo.",
  },
  {
    color: "mind",
    icon: "menu_book",
    title: "Mente",
    body: "Lecturas, aprendizaje y hábitos cognitivos. Forja tu mente con conocimiento, no con ruido.",
  },
] as const

const colorMap = {
  body: { glow: "bg-brand-body/10 group-hover:bg-brand-body/20", border: "hover:border-brand-body/30", text: "text-brand-body" },
  fuel: { glow: "bg-brand-fuel/10 group-hover:bg-brand-fuel/20", border: "hover:border-brand-fuel/30", text: "text-brand-fuel" },
  aura: { glow: "bg-brand-aura/10 group-hover:bg-brand-aura/20", border: "hover:border-brand-aura/30", text: "text-brand-aura" },
  mind: { glow: "bg-brand-mind/10 group-hover:bg-brand-mind/20", border: "hover:border-brand-mind/30", text: "text-brand-mind" },
}

export function Pillars() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden" id="pilares">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <span className="font-headline font-bold text-brand-primary tracking-[0.3em] text-[10px] sm:text-xs uppercase block mb-3 sm:mb-4">
            EL SISTEMA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white mb-4 tracking-tight leading-[1.05]">
            Cuatro pilares.{" "}
            <span className="text-gradient-primary">
              Un protocolo.
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto">
            Cada pilar es un módulo. Cada módulo te transforma. Juntos, te
            forjan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((p) => {
            const s = colorMap[p.color]
            return (
              <div
                key={p.title}
                className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900/50 border border-white/5 ${s.border} transition-all overflow-hidden`}
              >
                <div
                  className={`absolute -right-8 -top-8 w-32 h-32 ${s.glow} blur-3xl transition-all`}
                />
                <Icon
                  name={p.icon}
                  className={`text-4xl sm:text-5xl ${s.text} mb-4 sm:mb-6 block`}
                />
                <h3 className="text-xl sm:text-2xl font-headline font-black text-white mb-2 uppercase">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
