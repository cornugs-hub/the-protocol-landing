import { useEffect, useState } from "react"
import { Wordmark } from "./Wordmark"

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const links = [
    { href: "#top", label: "Inicio" },
    { href: "#manifiesto", label: "Manifiesto" },
    { href: "#sistema", label: "Sistema" },
    { href: "#versus", label: "Versus" },
    { href: "#proceso", label: "Proceso" },
    { href: "#operadores", label: "Usuarios" },
    { href: "#codigo", label: "Código" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-void/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 shrink-0 group">
          <Wordmark />
        </a>

        <div className="hidden lg:flex items-center gap-1 bg-white/[0.025] border border-white/[0.06] rounded-full p-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-slate-300 hover:text-white text-[12px] font-headline font-bold tracking-tight transition-colors rounded-full hover:bg-white/[0.04]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02]">
            <span className="relative inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-fuel pulse-dot" />
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-slate-400">
              <span className="text-white">Beta · Activa</span>
            </span>
          </span>
          <a
            href="#descargar"
            className="hidden sm:inline-flex btn-primary px-5 py-2 rounded-full text-[13px] font-headline font-bold text-white"
          >
            Descargar
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar" : "Menú"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] text-white"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden absolute inset-x-0 top-full border-t border-white/[0.06] origin-top transform-gpu will-change-[transform,opacity] transition-[transform,opacity] duration-200 ease-out ${
          open ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-5 py-6 space-y-1 bg-brand-void">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-4 rounded-xl text-slate-300 hover:bg-white/5 font-headline font-bold text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#descargar"
            onClick={() => setOpen(false)}
            className="mt-3 block btn-primary text-center py-3.5 rounded-full font-headline font-bold text-white"
          >
            Descargar
          </a>
        </div>
      </div>
    </header>
  )
}
