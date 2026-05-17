import { useRef } from "react"
import { Link } from "react-router-dom"
import { Icon } from "./Icon"

export function Hero() {
  const mockupRef = useRef<HTMLButtonElement | null>(null)
  const triggerPulse = () => {
    const el = mockupRef.current
    if (!el) return
    // Restart the keyframe animation cleanly on every tap.
    el.classList.remove("mockup-pulse")
    void el.offsetWidth
    el.classList.add("mockup-pulse")
  }
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-lines opacity-15 sm:opacity-20" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-brand-primary/25 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,92,231,0.05)_1px,transparent_1px)] bg-[size:80px_80px] sm:bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Copy */}
        <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-[96px] font-headline font-black leading-[0.9] tracking-tight text-white">
            Forja tu{" "}
            <span className="text-gradient-primary text-glow-primary">
              protocolo.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
            Cuerpo. Combustible. Espíritu. Mente. Un sistema operativo para tu
            disciplina. Diseñado para quienes no aceptan la mediocridad.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              to="/android-beta"
              className="inline-flex items-center justify-center gap-3 bg-primary-gradient px-8 py-4 rounded-full font-headline font-bold text-white shadow-xl shadow-purple-700/30 hover:scale-105 transition-transform text-sm sm:text-base sm:min-w-[260px]"
            >
              <AndroidIcon />
              Unirme a Beta Android
            </Link>
            <a
              href="https://testflight.apple.com/join/8xVm9pBu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/5 backdrop-blur px-8 py-4 rounded-full font-headline font-bold text-white hover:border-brand-primary/50 hover:bg-white/10 transition-all text-sm sm:text-base sm:min-w-[260px]"
            >
              <AppleIcon />
              Unirme en TestFlight
            </a>
          </div>
          <div className="pt-4 sm:pt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-brand-primarySoft bg-brand-primary/10 px-3 py-1.5 rounded-full border border-brand-primary/30">
              Beta
            </span>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative flex items-center justify-center md:justify-end mt-8 md:mt-0">
          <div className="absolute inset-[-2rem] sm:inset-[-3rem] bg-brand-primary/20 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />
          <button
            ref={mockupRef}
            type="button"
            aria-label="Activar vista del mockup"
            onClick={triggerPulse}
            onAnimationEnd={(e) =>
              e.currentTarget.classList.remove("mockup-pulse")
            }
            className="relative transform transition-transform duration-700 ease-out group cursor-pointer focus:outline-none rotate-[6deg] sm:rotate-[8deg] hover:rotate-0"
          >
            <div className="w-[260px] sm:w-[280px] md:w-[280px] lg:w-[320px] md:h-[580px] lg:h-[650px] aspect-[320/650] md:aspect-auto bg-slate-900 rounded-[2.5rem] sm:rounded-[3rem] border-[6px] sm:border-8 border-slate-800 shadow-[0_0_40px_rgba(108,92,231,0.3)] sm:shadow-[0_0_50px_rgba(108,92,231,0.3)] overflow-hidden relative mx-auto">
              <div className="absolute inset-0 bg-[#02030A] p-5 sm:p-6 space-y-4 sm:space-y-6">
                <div className="flex justify-between items-center">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800" />
                  <Icon name="notifications" className="text-slate-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                    Estado actual
                  </p>
                  <h3 className="text-lg sm:text-xl font-headline font-black text-white">
                    PROTOCOLO ACTIVO
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <PillarPreview color="body" icon="fitness_center" label="CUERPO" pct={75} />
                  <PillarPreview color="fuel" icon="restaurant" label="COMBUSTIBLE" pct={50} />
                  <PillarPreview color="aura" icon="self_improvement" label="ESPÍRITU" pct={25} />
                  <PillarPreview color="mind" icon="menu_book" label="MENTE" pct={100} />
                </div>
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase mb-2">
                    Próxima misión
                  </p>
                  <p className="text-xs sm:text-sm font-headline text-white">
                    Sesión de movilidad profunda
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-brand-gold mt-1">
                    RECOMPENSA: +20 ESPÍRITU
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

function AppleIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

function AndroidIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
    </svg>
  )
}

interface PreviewProps {
  color: "body" | "fuel" | "aura" | "mind"
  icon: string
  label: string
  pct: number
}

function PillarPreview({ color, icon, label, pct }: PreviewProps) {
  const map = {
    body: { bg: "bg-brand-body/10", border: "border-brand-body/30", text: "text-brand-body", track: "bg-brand-body/20", fill: "bg-brand-body" },
    fuel: { bg: "bg-brand-fuel/10", border: "border-brand-fuel/30", text: "text-brand-fuel", track: "bg-brand-fuel/20", fill: "bg-brand-fuel" },
    aura: { bg: "bg-brand-aura/10", border: "border-brand-aura/30", text: "text-brand-aura", track: "bg-brand-aura/20", fill: "bg-brand-aura" },
    mind: { bg: "bg-brand-mind/10", border: "border-brand-mind/30", text: "text-brand-mind", track: "bg-brand-mind/20", fill: "bg-brand-mind" },
  }
  const s = map[color]
  return (
    <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${s.bg} border ${s.border} space-y-2`}>
      <Icon name={icon} className={`${s.text} text-base sm:text-lg`} />
      <p className="text-[9px] sm:text-[10px] font-bold text-white">{label}</p>
      <div className={`h-1 w-full ${s.track} rounded-full`}>
        <div
          className={`h-full ${s.fill} rounded-full`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
