import { Eyebrow } from "./Eyebrow"
import { Reveal } from "./Reveal"
import { PrimaryCTA, GhostCTA, AndroidIcon, AppleIcon } from "./CTA"
import { PhoneStack } from "./PhoneStack"

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-20 pb-24 sm:pt-24 sm:pb-28 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-fine opacity-60" />
        <div className="absolute -top-32 left-1/4 -translate-x-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-brand-primary/25 rounded-full blur-[60px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-primaryDark/15 rounded-full blur-[60px] md:blur-[120px]" />
        <div className="absolute inset-x-0 top-[60vh] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 md:grid-cols-[1.1fr_1fr] lg:grid-cols-[1.05fr_1fr] gap-8 md:gap-10 lg:gap-12 items-center">
        <div className="space-y-5 sm:space-y-6 max-w-2xl text-center md:text-left">
          <Reveal>
            <Eyebrow color="primary">Beta · Acceso anticipado</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-headline font-black-x text-white tracking-brutalTight leading-[0.9] text-[40px] sm:text-[56px] md:text-[64px] lg:text-[88px]">
              Forja tu{" "}
              <span className="text-gradient-primary text-glow-primary">protocolo.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-slate-400 text-[15px] sm:text-base md:text-lg leading-relaxed max-w-xl">
              Un sistema operativo para tu disciplina. Cuatro pilares.{" "}
              <span className="text-white">Cuerpo. Combustible. Espíritu. Mente.</span>
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start">
              <PrimaryCTA to="/android-beta" icon={<AndroidIcon />}>
                Unirme a Beta Android
              </PrimaryCTA>
              <GhostCTA
                href="https://testflight.apple.com/join/8xVm9pBu"
                external
                icon={<AppleIcon />}
              >
                Unirme a Beta Apple
              </GhostCTA>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="pt-4 border-t border-white/[0.06]">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-3">
                <TrustChip label="Beta activa" />
                <TrustChip label="Cupos limitados" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative flex justify-center md:justify-end w-full">
          <PhoneStack tilt={6} />
        </Reveal>
      </div>

      <div className="hidden md:block absolute bottom-0 left-0 right-0 border-t border-white/[0.05] bg-brand-void/40 backdrop-blur-sm py-3 overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap font-mono text-[10px] tracking-[0.3em] uppercase text-slate-500">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "Sin halagos vacíos",
              "Sin recompensas baratas",
              "Sin rachas falsas",
              "Sin notificaciones de premio",
              "Sólo ejecución",
              "Sin halagos vacíos",
              "Sin recompensas baratas",
              "Sin rachas falsas",
              "Sin notificaciones de premio",
              "Sólo ejecución",
            ].map((t, i) => (
              <span key={`${k}-${i}`} className="inline-flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-brand-primary" /> {t}
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  )
}

function TrustChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 op-label !text-slate-300">
      <span className="w-1 h-1 rounded-full bg-brand-primary" />
      {label}
    </span>
  )
}
