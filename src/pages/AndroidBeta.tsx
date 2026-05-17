import { Link } from "react-router-dom"
import { useState, type FormEvent } from "react"
import { Icon } from "../components/Icon"

const JOIN_BETA_URL =
  "https://us-central1-the-protocol-stage.cloudfunctions.net/joinAndroidBeta"

type Status = "idle" | "loading" | "success" | "already" | "error"

export function AndroidBeta() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [mountedAt] = useState(() => Date.now())

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "loading") return

    const cleanNombre = nombre.trim()
    const cleanEmail = email.trim().toLowerCase()
    if (!cleanNombre || !cleanEmail) return

    setStatus("loading")
    setErrorMsg("")

    try {
      const elapsedMs = Date.now() - mountedAt
      const res = await fetch(JOIN_BETA_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: cleanNombre,
          email: cleanEmail,
          elapsedMs,
        }),
      })

      if (res.status === 429) {
        setStatus("error")
        setErrorMsg("Demasiadas solicitudes. Espera un momento e intenta de nuevo.")
        return
      }

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        setStatus("error")
        setErrorMsg(data.error ?? "No pudimos procesar tu solicitud.")
        return
      }

      const data = (await res.json()) as { status?: string }
      if (data.status === "already_registered") {
        setStatus("already")
      } else {
        setStatus("success")
      }
    } catch {
      setStatus("error")
      setErrorMsg("Error de red. Verifica tu conexión e intenta de nuevo.")
    }
  }

  return (
    <div className="h-screen bg-brand-void text-slate-200 relative overflow-hidden flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-brand-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-brand-primary/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,92,231,0.04)_1px,transparent_1px)] bg-[size:80px_80px] lg:bg-[size:100px_100px] opacity-40" />
      </div>

      <header className="relative z-10 border-b border-white/5 px-5 sm:px-8 py-4 shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 group cursor-pointer">
            <span className="text-lg sm:text-xl font-headline font-black tracking-tighter text-white group-hover:text-brand-primarySoft transition-colors">
              THE PROTOCOL
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_#6C5CE7]" />
          </Link>
          <Link
            to="/"
            className="text-slate-400 hover:text-white text-[11px] sm:text-xs tracking-widest uppercase font-headline font-bold transition-colors"
          >
            ← Inicio
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex items-center min-h-0 overflow-y-auto lg:overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 py-6 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — pitch */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-brand-primarySoft bg-brand-primary/10 px-3 py-1.5 rounded-full border border-brand-primary/30">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              Beta Cerrada · Android
            </span>
            <h1 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-[0.95]">
              Únete a la{" "}
              <span className="text-gradient-primary text-glow-primary">beta</span>.
            </h1>
            <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Plazas limitadas para los primeros testers en Android. Sé de los primeros en ejecutar el protocolo.
            </p>
            <ul className="space-y-3 max-w-md mx-auto lg:mx-0 text-left">
              <Bullet text="Acceso anticipado a todas las funciones" />
              <Bullet text="Reportes directos al equipo" />
              <Bullet text="Aprobación en menos de 24 horas" />
            </ul>
          </div>

          {/* Right — form */}
          <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
            {(status === "idle" || status === "loading" || status === "error") && (
              <form
                onSubmit={onSubmit}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur space-y-5"
              >
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    maxLength={80}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full bg-brand-void border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base placeholder-slate-600 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition disabled:opacity-50"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full bg-brand-void border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base placeholder-slate-600 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition disabled:opacity-50"
                    placeholder="tu@correo.com"
                  />
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                    Usa la misma cuenta de Google que tienes en tu Android.
                  </p>
                </div>

                {status === "error" && (
                  <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary-gradient text-white px-6 py-3.5 rounded-full font-headline font-bold text-sm sm:text-base shadow-xl shadow-purple-700/30 hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === "loading" ? (
                    <>
                      <Icon name="progress_activity" className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar acceso
                      <Icon name="arrow_forward" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                  Al enviar, aceptas nuestra{" "}
                  <Link to="/privacy" className="text-brand-primarySoft hover:text-white">
                    política de privacidad
                  </Link>
                  .
                </p>
              </form>
            )}

            {status === "success" && (
              <SuccessCard
                title="¡Solicitud recibida!"
                body="Te enviamos un correo de confirmación. En menos de 24 horas revisaremos tu acceso y te avisaremos cuando puedas descargar la app desde Google Play."
              />
            )}

            {status === "already" && (
              <SuccessCard
                title="Ya tenemos tu solicitud"
                body="Este correo ya está en la lista. Si fuiste aprobado, busca el enlace de Google Play en tu bandeja o spam."
              />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-slate-300 text-sm lg:text-base">
      <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary/15 border border-brand-primary/40 shrink-0">
        <Icon name="check" className="text-brand-primarySoft text-sm" />
      </span>
      <span>{text}</span>
    </li>
  )
}

function SuccessCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-white/[0.02] border border-brand-primary/30 rounded-2xl p-7 sm:p-8 backdrop-blur text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-primary/15 border border-brand-primary/40 mb-4">
        <Icon name="check_circle" className="text-brand-primarySoft text-3xl" />
      </div>
      <h2 className="font-headline font-black text-2xl sm:text-3xl text-white mb-3 tracking-tight">
        {title}
      </h2>
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
        {body}
      </p>
    </div>
  )
}
