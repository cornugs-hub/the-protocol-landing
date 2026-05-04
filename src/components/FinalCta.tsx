import { Icon } from "./Icon"

export function FinalCta() {
  return (
    <section
      id="descargar"
      className="py-20 sm:py-28 md:py-32 px-5 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] primary-halo pointer-events-none opacity-50" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-headline font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter mb-6 sm:mb-8 leading-[1.05]">
          El protocolo no se descarga. <br className="hidden sm:block" />
          Se ejecuta.
        </h2>
        <p className="font-headline font-medium text-brand-primarySoft tracking-widest text-[10px] sm:text-xs md:text-sm uppercase mb-8 sm:mb-12 px-2">
          v0.0.1 Beta · Gratis durante el acceso anticipado
        </p>
        <a
          href="#"
          className="relative group inline-flex items-center justify-center gap-3 sm:gap-4 bg-primary-gradient text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-headline font-black text-sm sm:text-base md:text-lg tracking-widest uppercase shadow-[0_0_40px_rgba(108,92,231,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(108,92,231,0.55)] hover:scale-105 active:scale-95"
        >
          Comenzar mi protocolo
          <Icon name="bolt" />
        </a>
      </div>
    </section>
  )
}
