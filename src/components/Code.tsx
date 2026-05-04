import { Icon } from "./Icon"

const yes = [
  "Quieres un sistema, no más motivación vacía",
  "Disciplina sobre dopamina barata",
  "Seguimiento real, no impresiones",
  "Comunidad de personas que ejecutan",
]

const no = [
  "Buscas una app que te haga feliz por defecto",
  "Quieres algo fácil",
  "No piensas hacer el trabajo",
  "Necesitas excusas, no resultados",
]

export function Code() {
  return (
    <section
      id="codigo"
      className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 border-y border-white/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-brand-primary/30 blur-[100px] sm:blur-[120px] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="font-headline font-bold text-brand-primary tracking-[0.3em] text-[10px] sm:text-xs uppercase block mb-3 sm:mb-4">
            EL CÓDIGO
          </span>
          <h2 className="font-headline font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.05]">
            No es para todos.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10">
          <div className="bg-brand-void p-6 sm:p-10 md:p-12 lg:p-16">
            <h3 className="font-headline font-bold text-xl sm:text-2xl text-white mb-6 sm:mb-10 flex items-center gap-3">
              <span className="w-6 sm:w-8 h-px bg-brand-primary" />
              Es para ti si...
            </h3>
            <ul className="space-y-4 sm:space-y-6">
              {yes.map((item) => (
                <li key={item} className="flex items-start gap-3 sm:gap-4">
                  <Icon
                    name="check_circle"
                    className="text-brand-primarySoft mt-0.5 sm:mt-1 shrink-0"
                    fill
                  />
                  <span className="text-slate-300 text-sm sm:text-base md:text-lg font-medium leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-950/50 p-6 sm:p-10 md:p-12 lg:p-16">
            <h3 className="font-headline font-bold text-xl sm:text-2xl text-slate-500 mb-6 sm:mb-10 flex items-center gap-3">
              <span className="w-6 sm:w-8 h-px bg-slate-700" />
              No es para ti si...
            </h3>
            <ul className="space-y-4 sm:space-y-6 opacity-70">
              {no.map((item) => (
                <li key={item} className="flex items-start gap-3 sm:gap-4">
                  <Icon name="cancel" className="text-[#5C6489] mt-0.5 sm:mt-1 shrink-0" />
                  <span className="text-slate-400 text-sm sm:text-base md:text-lg leading-snug">
                    {item}
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
