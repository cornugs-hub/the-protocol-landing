import { useEffect, useRef, useState } from "react"
import { Icon } from "./Icon"

export const PILLAR_TINTS = {
  body: { hex: "#FF6B1A", soft: "rgba(255,107,26,0.10)", border: "rgba(255,107,26,0.28)", track: "rgba(255,107,26,0.18)" },
  fuel: { hex: "#2ED573", soft: "rgba(46,213,115,0.10)", border: "rgba(46,213,115,0.28)", track: "rgba(46,213,115,0.18)" },
  aura: { hex: "#6E8BFF", soft: "rgba(110,139,255,0.10)", border: "rgba(110,139,255,0.30)", track: "rgba(110,139,255,0.18)" },
  mind: { hex: "#A06CFF", soft: "rgba(160,108,255,0.10)", border: "rgba(160,108,255,0.30)", track: "rgba(160,108,255,0.18)" },
  primary: { hex: "#6C5CE7", soft: "rgba(108,92,231,0.10)", border: "rgba(108,92,231,0.30)", track: "rgba(108,92,231,0.20)" },
} as const

export type PillarKey = "body" | "fuel" | "aura" | "mind"

function StatusBar({ time = "06:14" }: { time?: string }) {
  return (
    <div className="flex justify-between items-center text-white/90 text-[11px] font-mono font-semibold tracking-wide px-1.5">
      <span>{time}</span>
      <span className="inline-flex items-center gap-1.5">
        <Icon name="signal_cellular_alt" className="ms-fill text-[14px]" />
        <Icon name="wifi" className="ms-fill text-[14px]" />
        <Icon name="battery_full" className="ms-fill text-[14px]" />
      </span>
    </div>
  )
}

function MiniPillarCard({ color, icon, label, pct }: { color: PillarKey; icon: string; label: string; pct: number }) {
  const t = PILLAR_TINTS[color]
  return (
    <div className="rounded-xl p-2.5 flex flex-col gap-2" style={{ background: t.soft, border: `1px solid ${t.border}` }}>
      <div className="flex items-center justify-between">
        <Icon name={icon} className="text-[16px]" />
        <span className="text-[8px] font-mono tabular" style={{ color: t.hex }}>{pct}%</span>
      </div>
      <p className="text-[8px] font-headline font-bold text-white tracking-wider">{label}</p>
      <div className="h-[3px] rounded-full" style={{ background: t.track }}>
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: t.hex }} />
      </div>
    </div>
  )
}

function ScreenDashboard() {
  return (
    <div className="absolute inset-0 bg-[#02030A] p-4 pt-3 flex flex-col gap-4 screen-in">
      <StatusBar />
      <div className="flex justify-between items-center mt-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 ring-1 ring-white/10" />
          <div className="leading-tight">
            <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">Usuario</p>
            <p className="text-[11px] text-white font-headline font-bold">D. CORONA</p>
          </div>
        </div>
        <Icon name="notifications" className="text-slate-500 text-[18px]" />
      </div>
      <div>
        <p className="text-[8px] text-slate-500 uppercase tracking-widest font-mono mb-0.5">Día 47 · Racha</p>
        <h3 className="text-[18px] font-headline font-black-x text-white tracking-tight leading-none">
          PROTOCOLO ACTIVO
        </h3>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="font-headline font-bold text-brand-primarySoft text-[11px] tabular">68%</span>
          <span className="text-[9px] text-slate-500 font-mono">CUMPLIMIENTO HOY</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <MiniPillarCard color="body" icon="exercise" label="CUERPO" pct={75} />
        <MiniPillarCard color="fuel" icon="nutrition" label="COMBUSTIBLE" pct={50} />
        <MiniPillarCard color="aura" icon="self_improvement" label="ESPÍRITU" pct={25} />
        <MiniPillarCard color="mind" icon="menu_book" label="MENTE" pct={100} />
      </div>
      <div className="mt-auto rounded-2xl bg-white/[0.04] border border-white/[0.08] p-3">
        <div className="flex items-center justify-between">
          <p className="text-[8px] text-slate-500 font-mono uppercase tracking-widest">Próxima misión</p>
          <span className="text-[8px] font-mono text-brand-gold">+20 ESPÍRITU</span>
        </div>
        <p className="text-[12px] font-headline font-bold text-white mt-1.5 leading-tight">
          Sesión de movilidad profunda
        </p>
        <div className="mt-2 flex items-center gap-1.5">
          <div className="h-[3px] flex-1 rounded-full bg-white/10">
            <div className="h-full w-[35%] bg-brand-primarySoft rounded-full" />
          </div>
          <span className="text-[9px] font-mono text-slate-400 tabular">12:00</span>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-1.5">
      <p className="text-[7px] font-mono uppercase tracking-widest text-slate-500">{label}</p>
      <p className="text-[13px] font-headline font-bold text-white tabular leading-tight mt-0.5">{value}</p>
    </div>
  )
}

function SetRow({ n, reps, load, status }: { n: string; reps: string; load: string; status: "done" | "active" | "pending" }) {
  const dot =
    status === "done" ? "bg-[#FF6B1A]" :
    status === "active" ? "bg-white ring-2 ring-[#FF6B1A]/40" :
    "bg-white/10"
  const text = status === "pending" ? "text-slate-600" : "text-white"
  return (
    <div className="flex items-center justify-between rounded-lg bg-white/[0.025] border border-white/[0.05] px-2.5 py-2">
      <div className="flex items-center gap-2.5">
        <span className={`w-2 h-2 rounded-full ${dot}`} />
        <span className={`text-[10px] font-mono tabular ${text}`}>SERIE {n}</span>
      </div>
      <div className={`flex items-center gap-3 text-[10px] font-mono tabular ${text}`}>
        <span>{reps} reps</span>
        <span className="text-slate-500">·</span>
        <span>{load} kg</span>
      </div>
    </div>
  )
}

function ScreenTraining() {
  const t = PILLAR_TINTS.body
  return (
    <div className="absolute inset-0 bg-[#02030A] p-4 pt-3 flex flex-col gap-3 screen-in">
      <StatusBar />
      <div className="flex justify-between items-center mt-1">
        <div className="flex items-center gap-1.5">
          <Icon name="arrow_back_ios_new" className="text-white text-[14px]" />
          <p className="text-[11px] font-headline font-bold text-white">Empujón A</p>
        </div>
        <span
          className="text-[9px] font-mono px-1.5 py-0.5 rounded-full"
          style={{ background: t.soft, color: t.hex, border: `1px solid ${t.border}` }}
        >
          CUERPO
        </span>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-[#FF6B1A]/12 to-transparent border border-[#FF6B1A]/25 p-3.5 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-[#FF6B1A]/20 blur-2xl" />
        <p className="text-[8px] font-mono uppercase tracking-widest text-[#FF6B1A]">Ejercicio 02 / 06</p>
        <h4 className="text-[16px] font-headline font-black-x text-white leading-tight mt-1">Press banca con barra</h4>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <Stat label="SERIE" value="3/4" />
          <Stat label="REPS" value="8" />
          <Stat label="CARGA" value="82.5kg" />
        </div>
      </div>
      <div className="space-y-1.5">
        <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">Series</p>
        <SetRow n="01" reps="8" load="80" status="done" />
        <SetRow n="02" reps="8" load="82.5" status="done" />
        <SetRow n="03" reps="8" load="82.5" status="active" />
        <SetRow n="04" reps="—" load="—" status="pending" />
      </div>
      <button className="mt-auto rounded-full py-3 bg-[#FF6B1A] text-black font-headline font-bold text-[13px] tracking-tight">
        Registrar serie
      </button>
    </div>
  )
}

function Macro({ label, val, pct }: { label: string; val: string; pct: number }) {
  return (
    <div>
      <p className="text-[7px] font-mono uppercase tracking-widest text-slate-500">{label}</p>
      <p className="text-[12px] font-headline font-bold text-white tabular leading-tight mt-0.5">{val}</p>
      <div className="h-[2px] rounded-full bg-white/10 mt-1">
        <div className="h-full bg-[#2ED573] rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function ScreenFuel() {
  const t = PILLAR_TINTS.fuel
  return (
    <div className="absolute inset-0 bg-[#02030A] p-4 pt-3 flex flex-col gap-3 screen-in">
      <StatusBar />
      <div className="flex justify-between items-center mt-1">
        <div className="flex items-center gap-1.5">
          <Icon name="arrow_back_ios_new" className="text-white text-[14px]" />
          <p className="text-[11px] font-headline font-bold text-white">Combustible</p>
        </div>
        <span
          className="text-[9px] font-mono px-1.5 py-0.5 rounded-full"
          style={{ background: t.soft, color: t.hex, border: `1px solid ${t.border}` }}
        >
          COMBUSTIBLE
        </span>
      </div>
      <div className="rounded-2xl overflow-hidden relative h-[110px] bg-gradient-to-br from-slate-900 to-slate-950 border border-[#2ED573]/25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,213,115,0.18),transparent_60%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border border-[#2ED573]/50 rounded-md relative">
            <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-[#2ED573]" />
            <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-[#2ED573]" />
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-[#2ED573]" />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-[#2ED573]" />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
          <p className="text-[8px] font-mono uppercase tracking-widest text-[#2ED573]">Identificando…</p>
          <p className="text-[8px] font-mono text-white/60">PECHUGA · 240G</p>
        </div>
      </div>
      <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-headline font-bold text-white">Pechuga a la plancha</p>
          <span className="text-[8px] font-mono text-[#2ED573]">+396 KCAL</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2.5">
          <Macro label="PROT" val="74g" pct={88} />
          <Macro label="CARB" val="0g" pct={0} />
          <Macro label="GRASA" val="9g" pct={22} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">Combustible diario</p>
          <p className="text-[9px] font-mono tabular text-white">1,840 / 2,600 kcal</p>
        </div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-[#2ED573] rounded-full" style={{ width: "70%" }} />
        </div>
      </div>
      <button className="mt-auto rounded-full py-3 bg-[#2ED573] text-black font-headline font-bold text-[13px] tracking-tight">
        Registrar combustible
      </button>
    </div>
  )
}

function ResultStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-2 text-center">
      <p className="text-[7px] font-mono uppercase tracking-widest text-slate-500">{label}</p>
      <p className="text-[12px] font-headline font-bold text-white tabular mt-0.5">{value}</p>
    </div>
  )
}

function ScreenComplete() {
  return (
    <div className="absolute inset-0 bg-[#02030A] p-4 pt-3 flex flex-col gap-3 screen-in">
      <StatusBar />
      <div className="flex justify-center items-center mt-1">
        <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">Misión completada</p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(108,92,231,0.35),transparent_55%)]" />
        <div className="relative w-28 h-28 mb-4">
          <div className="absolute inset-0 rounded-full bg-brand-primary/15 blur-xl" />
          <div className="absolute inset-2 rounded-full border border-brand-primary/40" />
          <div className="absolute inset-4 rounded-full border border-brand-primary/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon name="bolt" className="text-brand-primarySoft text-[44px] ms-fill" />
          </div>
        </div>
        <p className="text-[8px] font-mono uppercase tracking-[0.25em] text-brand-primarySoft mb-1">+ 20 espíritu</p>
        <h4 className="text-[20px] font-headline font-black-x text-white tracking-tight leading-tight text-center px-4">
          Movilidad ejecutada.
        </h4>
        <p className="text-[11px] text-slate-400 mt-1.5 text-center max-w-[200px]">
          Día 47. La racha no se rompe.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <ResultStat label="DURACIÓN" value="22:14" />
        <ResultStat label="RANGO" value="+8°" />
        <ResultStat label="FATIGA" value="2/5" />
      </div>
      <button className="rounded-full py-3 bg-primary-gradient text-white font-headline font-bold text-[13px] tracking-tight">
        Siguiente misión
      </button>
    </div>
  )
}

const SCREENS = [
  { id: "dashboard", label: "Protocolo", Comp: ScreenDashboard },
  { id: "training", label: "Cuerpo", Comp: ScreenTraining },
  { id: "fuel", label: "Combustible", Comp: ScreenFuel },
  { id: "complete", label: "Ejecución", Comp: ScreenComplete },
]

interface PhoneStackProps {
  tilt?: number
  autoplay?: boolean
  intervalMs?: number
}

export function PhoneStack({ tilt = 6, autoplay = true, intervalMs = 4500 }: PhoneStackProps) {
  const [idx, setIdx] = useState(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    if (!autoplay) return
    let alive = true
    const t = setInterval(() => {
      if (pausedRef.current || !alive) return
      setIdx((i) => (i + 1) % SCREENS.length)
    }, intervalMs)
    return () => {
      alive = false
      clearInterval(t)
    }
  }, [autoplay, intervalMs])

  const Current = SCREENS[idx].Comp

  return (
    <div className="relative inline-flex flex-col items-center">
      <div className="relative">
        <div className="absolute inset-[-3rem] bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div
          aria-hidden="true"
          className="absolute top-6 -left-12 w-[200px] h-[420px] rounded-[36px] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/[0.05] opacity-50 hidden lg:block"
          style={{ transform: "rotate(-10deg)" }}
        >
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-tr from-brand-primary/10 via-transparent to-transparent" />
          <div className="absolute top-1/3 inset-x-6 space-y-2">
            <div className="h-2 rounded-full bg-white/10 w-1/2" />
            <div className="h-1.5 rounded-full bg-white/5 w-3/4" />
            <div className="h-1.5 rounded-full bg-white/5 w-2/3" />
          </div>
        </div>
        <div
          className="relative phone-shell w-[200px] h-[420px] sm:w-[220px] sm:h-[460px] md:w-[220px] md:h-[460px] lg:w-[260px] lg:h-[540px] overflow-hidden p-1.5 float-y"
          style={{ transform: `rotate(${tilt}deg)` }}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-20 flex items-center justify-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-slate-700" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            </div>
            <div key={SCREENS[idx].id} className="absolute inset-0">
              <Current />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 relative z-10">
        {SCREENS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIdx(i)}
            className={`group flex items-center gap-2 px-2.5 py-1.5 rounded-full border transition-all ${
              i === idx
                ? "bg-brand-primary/15 border-brand-primary/40 text-white"
                : "border-white/[0.06] text-slate-500 hover:text-slate-300 hover:border-white/15"
            }`}
            aria-label={`Ver pantalla ${s.label}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                i === idx ? "bg-brand-primary shadow-[0_0_8px_#6C5CE7]" : "bg-white/20"
              }`}
            />
            <span className="text-[9px] font-mono uppercase tracking-widest hidden sm:inline">
              {s.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

interface MiniPhoneData {
  hex: string
  title: string
  meta: string
  h: string
  lines: { l: string; r: string; done: boolean }[]
}

const PILLAR_MINI_DATA: Record<PillarKey, MiniPhoneData> = {
  body: {
    hex: "#FF6B1A",
    title: "Empujón A",
    meta: "EJERCICIO 02 / 06",
    h: "Press banca",
    lines: [
      { l: "SERIE 01", r: "8 reps · 80 kg", done: true },
      { l: "SERIE 02", r: "8 reps · 82.5", done: true },
      { l: "SERIE 03", r: "8 reps · 82.5", done: false },
    ],
  },
  fuel: {
    hex: "#2ED573",
    title: "Combustible",
    meta: "PROTEÍNA · 74g",
    h: "Pechuga 240g",
    lines: [
      { l: "PROT", r: "74g", done: true },
      { l: "GRASA", r: "9g", done: true },
      { l: "CARBO", r: "0g", done: false },
    ],
  },
  aura: {
    hex: "#6E8BFF",
    title: "Espíritu",
    meta: "MEDITACIÓN · 12:00",
    h: "Enfoque profundo",
    lines: [
      { l: "RESPIRA", r: "4-7-8", done: true },
      { l: "AUDIO", r: "Guiado", done: true },
      { l: "RANGO", r: "12:00", done: false },
    ],
  },
  mind: {
    hex: "#A06CFF",
    title: "Mente",
    meta: "LECTURA · 30 PÁG",
    h: "Antifragile",
    lines: [
      { l: "PÁGINAS", r: "30", done: true },
      { l: "NOTAS", r: "4", done: true },
      { l: "RANGO", r: "45min", done: false },
    ],
  },
}

export function PillarMiniPhone({ pillar }: { pillar: PillarKey }) {
  const m = PILLAR_MINI_DATA[pillar]
  return (
    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#02030A] border border-white/[0.06]">
      <div
        className="absolute inset-0 opacity-90"
        style={{ background: `radial-gradient(circle at 80% 0%, ${m.hex}22, transparent 55%)` }}
      />
      <div className="relative p-4 flex flex-col gap-3 h-full">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-mono uppercase tracking-widest text-slate-500">{m.title}</p>
          <span
            className="text-[8px] font-mono tabular px-1.5 py-0.5 rounded-full"
            style={{ color: m.hex, background: `${m.hex}1a`, border: `1px solid ${m.hex}55` }}
          >
            ACTIVO
          </span>
        </div>
        <div>
          <p className="text-[8px] font-mono uppercase tracking-widest" style={{ color: m.hex }}>{m.meta}</p>
          <h4 className="text-[16px] font-headline font-black-x text-white tracking-tight leading-tight mt-1">{m.h}</h4>
        </div>
        <div className="flex flex-col gap-1.5 mt-1">
          {m.lines.map((row) => (
            <div
              key={row.l}
              className="flex items-center justify-between rounded-md bg-white/[0.03] border border-white/[0.05] px-2 py-1.5"
            >
              <span className="text-[9px] font-mono tabular text-slate-300">{row.l}</span>
              <span
                className="text-[9px] font-mono tabular"
                style={{ color: row.done ? m.hex : "rgba(148,163,184,0.5)" }}
              >
                {row.r}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-auto h-[3px] rounded-full bg-white/10 overflow-hidden">
          <div className="h-full rounded-full" style={{ width: "66%", background: m.hex }} />
        </div>
      </div>
    </div>
  )
}
