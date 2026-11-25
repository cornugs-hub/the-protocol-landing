import type { ReactNode } from "react"
import { Phone, SectionTitle, StoreButtons } from "./parts"
import { Book, Camera, Check, Chevron, Dumbbell, Lotus } from "./icons"

// Rank colours and names are the app's (colors.dart, app_translations.dart).
const RANKS = [
  { l: "E", name: "Novato", c: "#6B7280" },
  { l: "D", name: "Aprendiz", c: "#8B5CF6" },
  { l: "C", name: "Guerrero", c: "#3B82F6" },
  { l: "B", name: "Élite", c: "#10B981" },
  { l: "A", name: "Maestro", c: "#F59E0B" },
  { l: "S", name: "Leyenda", c: "#FFC83D" },
]

/** E → S, lit one after another once when the page opens (the only
 *  animation that runs on its own; reduced motion shows it lit). */
function RankLadder() {
  return (
    <ol className="flex items-end gap-1.5 sm:gap-2" aria-label="Rangos de E a S">
      {RANKS.map((r, i) => (
        <li
          key={r.l}
          className="rank-step flex flex-col items-center"
          style={{ ["--c" as string]: r.c, ["--d" as string]: `${0.25 + i * 0.16}s` }}
        >
          <span
            className={`rank-letter font-headline font-bold grid place-items-center rounded-xl ${
              r.l === "S" ? "rank-s w-14 h-14 sm:w-16 sm:h-16 text-3xl sm:text-4xl" : "w-10 h-10 sm:w-12 sm:h-12 text-xl sm:text-2xl"
            }`}
          >
            {r.l}
          </span>
          <span className="mt-1.5 text-[10px] sm:text-[11px] text-white/50">{r.name}</span>
        </li>
      ))}
    </ol>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div aria-hidden="true" className="hero-aura" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center">
        <div>
          <h1 className="font-headline font-bold text-white tracking-tight text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem]">
            Sube de rango en la vida real.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl">
            The Protocol convierte tu entreno, tu comida, tu mente y tu calma en misiones diarias.
            Cúmplelas, gana XP y sube de E a S.
          </p>
          <StoreButtons className="mt-8" />
          <p className="mt-3 text-sm text-white/45">Gratis en iPhone y Android.</p>
          <div className="mt-10">
            <RankLadder />
            <p className="mt-4 text-sm text-white/55 max-w-md">
              Menos del 1% llega a Leyenda: necesitas 90 días seguidos sin fallar.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Phone
            src="/shots/home.webp"
            alt="Inicio de The Protocol: rango, racha y los cuatro pilares al 100%"
            glow="rgba(123,104,240,0.55)"
            eager
            className="w-[250px] sm:w-[290px] lg:w-[320px]"
          />
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  {
    t: "Recibe tus misiones",
    d: "Cada día el sistema te da misiones de los cuatro pilares, ajustadas a tu rango.",
  },
  {
    t: "Cúmplelas y gana XP",
    d: "Entrena, registra tu comida, medita o lee. Cada misión cumplida suma XP y alarga tu racha.",
  },
  {
    t: "Sube de rango",
    d: "Tu rango sale de tu XP. Si dejas de cumplir varios días, baja. Por eso vale algo.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTitle
          title="Así funciona"
          lead="Sin listas de pendientes eternas. El sistema te dice qué hacer hoy y tú decides si cumples."
        />
        <div className="mt-14 grid lg:grid-cols-[1fr_auto] gap-14 items-center">
          <ol className="grid gap-8 sm:gap-10">
            {STEPS.map((s, i) => (
              <li key={s.t} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="step-num font-headline font-bold">{i + 1}</span>
                <div>
                  <h3 className="font-headline font-bold text-white text-2xl">{s.t}</h3>
                  <p className="mt-2 text-white/65 text-[17px] leading-relaxed max-w-lg">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex gap-4 sm:gap-6 justify-center">
            <Phone src="/shots/misiones.webp" alt="Misiones del día" className="w-[160px] sm:w-[220px]" />
            <Phone
              src="/shots/rankup.webp"
              alt="Subida a rango S, Leyenda"
              glow="rgba(255,200,61,0.45)"
              className="w-[160px] sm:w-[220px] mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const PILLARS: {
  key: string
  color: string
  icon: ReactNode
  name: string
  title: string
  body: string
  points: string[]
  shot: string
  alt: string
}[] = [
  {
    key: "cuerpo",
    color: "#FF4B4B",
    icon: <Dumbbell />,
    name: "Cuerpo",
    title: "Registra cada serie en segundos",
    body: "Más de 1,300 ejercicios con su técnica y los músculos que trabajan. Pesos, repeticiones y descansos sin libreta.",
    points: ["Rutinas propias y plantillas", "Tu historial en cada ejercicio", "Resumen de músculos al terminar"],
    shot: "/shots/entreno.webp",
    alt: "Entreno en curso: press de banca con sus series",
  },
  {
    key: "combustible",
    color: "#00FF94",
    icon: <Camera />,
    name: "Combustible",
    title: "Toma foto a tu plato y listo",
    body: "La IA reconoce cada alimento y te da calorías y macros. También puedes dictarlo, escanear el código de barras o la etiqueta.",
    points: ["Foto, voz, texto o código de barras", "Corrige lo que no cuadre", "Agua y metas del día"],
    shot: "/shots/ia.webp",
    alt: "Escaneo de comida con IA: plato con 548 kcal y sus alimentos",
  },
  {
    key: "espiritu",
    color: "#7B68F0",
    icon: <Lotus />,
    name: "Espíritu",
    title: "Respira, medita, enfócate",
    body: "Meditaciones guiadas y ejercicios de respiración para calmarte, enfocarte o recuperarte después de entrenar.",
    points: ["Audio guiado en español e inglés", "Para calmar, enfocar o fortalecer", "Cuenta para tus misiones del día"],
    shot: "/shots/respira.webp",
    alt: "Ejercicio de respiración guiada",
  },
  {
    key: "mente",
    color: "#00C2FF",
    icon: <Book />,
    name: "Mente",
    title: "Lee con intención",
    body: "Lleva tus libros a la app y léelos en un lector cómodo. Tus páginas leídas también te hacen subir.",
    points: ["Lector de EPUB y PDF", "Biblioteca y progreso por libro", "Tus páginas cuentan para tus misiones"],
    shot: "/shots/lector.webp",
    alt: "Lector de libros dentro de la app",
  },
]

export function Pillars() {
  return (
    <section id="pilares" className="py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTitle
          title="Cuatro pilares, un solo rango"
          lead="Lo que haces en cada uno suma al mismo sistema. Fallar en uno se nota en todos."
        />
        <div className="mt-16 grid gap-24 sm:gap-28">
          {PILLARS.map((p, i) => (
            <article
              key={p.key}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="flex items-center gap-3" style={{ color: p.color }}>
                  <span
                    className="grid place-items-center w-11 h-11 rounded-xl"
                    style={{ background: `${p.color}1F`, boxShadow: `inset 0 0 0 1px ${p.color}55` }}
                  >
                    {p.icon}
                  </span>
                  <span className="font-headline font-bold text-lg">{p.name}</span>
                </div>
                <h3 className="mt-5 font-headline font-bold text-white text-3xl sm:text-4xl leading-tight">{p.title}</h3>
                <p className="mt-4 text-white/65 text-[17px] leading-relaxed max-w-lg">{p.body}</p>
                <ul className="mt-6 grid gap-3">
                  {p.points.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-white/85">
                      <span className="mt-0.5" style={{ color: p.color }}>
                        <Check />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <Phone src={p.shot} alt={p.alt} glow={`${p.color}88`} className="w-[230px] sm:w-[270px]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Community() {
  return (
    <section id="comunidad" className="py-20 sm:py-28 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionTitle
            title="Tu personaje. Tu lugar en el ranking."
            lead="Elige cómo te ves dentro del sistema y compite con los demás en el ranking semanal, mensual y de siempre."
          />
          <ul className="mt-8 grid gap-3 text-white/85">
            {["Avatar al estilo manhwa, a tu medida", "Rankings de 7 días, 30 días y de siempre", "Comparte tus entrenos y logros"].map(
              (t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 text-pillar-spirit">
                    <Check />
                  </span>
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="flex gap-4 sm:gap-6 justify-center">
          <Phone src="/shots/avatar.webp" alt="Elige tu manifestación: el avatar" className="w-[160px] sm:w-[230px] mt-12" />
          <Phone
            src="/shots/ranking.webp"
            alt="Ranking de todo el tiempo"
            glow="rgba(123,104,240,0.5)"
            className="w-[160px] sm:w-[230px]"
          />
        </div>
      </div>
    </section>
  )
}

const FREE = [
  "Los cuatro pilares, misiones, rangos y ranking",
  "463 ejercicios y hasta 5 propios",
  "3 fotos de comida con IA a la semana y 1 descripción al día",
  "15 meditaciones guiadas",
  "Tus últimos 12 meses de historial",
]
const PREMIUM = [
  "Más de 1,300 ejercicios y propios ilimitados",
  "10 fotos y 20 descripciones de comida con IA al día",
  "Corrige tus comidas con IA",
  "Coach de nutrición cada domingo",
  "Todas las meditaciones, y las nuevas en cuanto salgan",
  "Historial completo",
]

export function Plans() {
  return (
    <section id="premium" className="py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <SectionTitle
          center
          title="Empieza gratis"
          lead="Todo el sistema es gratis. Premium quita los límites cuando quieras ir más lejos."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          <div className="plan-card rounded-3xl p-7 sm:p-8">
            <h3 className="font-headline font-bold text-white text-2xl">Gratis</h3>
            <p className="mt-1 text-white/55">Para siempre</p>
            <ul className="mt-7 grid gap-3.5">
              {FREE.map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/80">
                  <span className="mt-0.5 text-white/50">
                    <Check />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="plan-card plan-premium rounded-3xl p-7 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-headline font-bold text-white text-2xl">Premium</h3>
              <p className="font-headline text-white">
                <span className="text-3xl font-bold">$4.99</span>{" "}
                <span className="text-white/60 text-sm">USD al mes</span>
              </p>
            </div>
            <p className="mt-1 text-white/55">Cancela cuando quieras</p>
            <ul className="mt-7 grid gap-3.5">
              {PREMIUM.map((t) => (
                <li key={t} className="flex items-start gap-3 text-white">
                  <span className="mt-0.5 text-pillar-fuel">
                    <Check />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-white/45">
          Premium llega muy pronto dentro de la app. Los beneficios pueden cambiar; consulta los{" "}
          <a href="/terms" className="underline hover:text-white">
            términos
          </a>
          .
        </p>
      </div>
    </section>
  )
}

const FAQ = [
  {
    q: "¿Es gratis?",
    a: "Sí. Los cuatro pilares, las misiones, los rangos y el ranking son gratis. Premium suma más ejercicios, más IA de comida y todas las meditaciones.",
  },
  {
    q: "¿En qué teléfonos funciona?",
    a: "En iPhone y Android, y también en iPad, tabletas y teléfonos plegables.",
  },
  {
    q: "¿Necesito internet?",
    a: "Para lo esencial, no. Registras tu entreno y tu comida sin conexión y se sincroniza cuando vuelves a tener internet. La IA de comida sí necesita conexión.",
  },
  {
    q: "¿Qué pasa si dejo de cumplir?",
    a: "Tienes dos días de gracia. Después tu XP empieza a bajar, y con ella tu rango. Una sola misión cumplida lo detiene.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Tu información se guarda en tu cuenta. Puedes borrar tu cuenta y todos tus datos cuando quieras desde la app; los detalles están en la política de privacidad.",
  },
]

export function Faq() {
  return (
    <section id="preguntas" className="py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <SectionTitle center title="Preguntas" />
        <div className="mt-12 grid gap-3">
          {FAQ.map((f) => (
            <details key={f.q} className="faq rounded-2xl px-5 sm:px-6">
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer font-headline font-bold text-white text-lg">
                {f.q}
                <span className="faq-chevron text-white/50 shrink-0">
                  <Chevron />
                </span>
              </summary>
              <p className="pb-5 -mt-1 text-white/65 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section id="descargar" className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden">
      <div aria-hidden="true" className="final-aura" />
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <p className="font-headline font-bold text-[5rem] sm:text-[7rem] leading-none text-[#6B7280]/70">E</p>
        <h2 className="mt-2 font-headline font-bold text-white text-4xl sm:text-6xl tracking-tight leading-[1.05]">
          Todos empiezan en E.
        </h2>
        <p className="mt-5 text-lg text-white/65">Descárgala gratis y cumple tu primera misión hoy.</p>
        <StoreButtons className="mt-9 justify-center items-center" />
      </div>
    </section>
  )
}

