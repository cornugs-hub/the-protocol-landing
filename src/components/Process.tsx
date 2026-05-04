const steps = [
  {
    n: "01",
    title: "Diseña tu sistema",
    body: "Configura rutinas, macros y sesiones a tu medida. El protocolo se calibra a tu rango actual y crece contigo.",
  },
  {
    n: "02",
    title: "Ejecuta sin pensar",
    body: "Una misión clara cada mañana. Registro en segundos. Audio que te guía. Cero fricción entre tú y la acción.",
  },
  {
    n: "03",
    title: "Mide la evolución",
    body: "Métricas que importan, no números vacíos. Rachas que se acumulan. Progreso que ves y sientes en el espejo.",
  },
]

export function Process() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 bg-grid" id="proceso">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <span className="font-headline font-bold text-brand-primary tracking-[0.3em] text-[10px] sm:text-xs uppercase block mb-3 sm:mb-4">
            PROCESO
          </span>
          <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.05]">
            Tres pasos. <br className="hidden sm:block" />
            Cero excusas.
          </h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Connector line desktop only */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent z-0">
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_#6C5CE7]" />
            <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_#6C5CE7]" />
          </div>
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative group bg-brand-deep/40 p-6 sm:p-8 rounded-2xl border border-white/5 primary-glow-border transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-void border-2 border-brand-primary flex items-center justify-center mb-5 sm:mb-6 relative z-10 shadow-[0_0_15px_rgba(108,92,231,0.35)]">
                <span className="font-headline font-black text-brand-primarySoft text-lg sm:text-xl">
                  {s.n}
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl sm:text-2xl text-white mb-3 sm:mb-4">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
