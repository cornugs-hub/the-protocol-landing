import { Eyebrow } from "./Eyebrow"
import { PrimaryCTA, GhostCTA, AndroidIcon, AppleIcon } from "./CTA"

export function FinalCta() {
  return (
    <section id="descargar" className="relative min-h-[100svh] flex items-center py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] primary-halo pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-grid-fine opacity-30 pointer-events-none" />
      <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 text-center relative">
        <Eyebrow color="primary">Activar protocolo</Eyebrow>
        <h2 className="mt-6 font-headline font-black-x text-white tracking-brutalTight leading-[0.95] text-[36px] sm:text-[52px] md:text-[64px]">
          El protocolo no se descarga. <br className="hidden sm:block" />
          <span className="text-gradient-primary">Se ejecuta.</span>
        </h2>
        <p className="mt-6 op-label">
          Beta activa · Cupos limitados
        </p>
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
          <PrimaryCTA to="/android-beta" icon={<AndroidIcon />}>
            Unirme a Beta Android
          </PrimaryCTA>
          <GhostCTA
            href="https://testflight.apple.com/join/8xVm9pBu"
            external
            icon={<AppleIcon />}
          >
            Unirme en TestFlight
          </GhostCTA>
        </div>

      </div>
    </section>
  )
}
