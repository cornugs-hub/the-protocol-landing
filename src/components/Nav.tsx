import { useState, useEffect } from "react"

export function Nav() {
  const [open, setOpen] = useState(false)

  // Close on route hash change + lock body scroll when open.
  useEffect(() => {
    if (!open) return
    const onHashChange = () => setOpen(false)
    window.addEventListener("hashchange", onHashChange)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("hashchange", onHashChange)
      document.body.style.overflow = ""
    }
  }, [open])

  const links = [
    { href: "#pilares", label: "Pilares" },
    { href: "#proceso", label: "Proceso" },
    { href: "#codigo", label: "Código" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/90 backdrop-blur-xl">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-5 sm:px-6 h-16 sm:h-20">
        <a href="#top" className="flex items-center gap-2 group cursor-pointer shrink-0">
          <span className="text-lg sm:text-2xl font-black tracking-tighter text-white group-hover:text-brand-primarySoft font-headline transition-colors">
            THE PROTOCOL
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_#6C5CE7]" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              className="text-slate-400 hover:text-white transition-colors duration-200 font-headline font-bold text-sm lg:text-base"
              href={l.href}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#descargar"
          className="hidden sm:inline-flex bg-primary-gradient px-5 py-2 lg:px-6 lg:py-2.5 rounded-full font-headline font-bold text-white shadow-lg shadow-purple-900/40 hover:scale-105 active:scale-95 transition-all text-sm"
        >
          Descargar
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white"
        >
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-white/5 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-6 space-y-1 bg-slate-950/95 backdrop-blur-xl">
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
            className="mt-3 block bg-primary-gradient text-center py-3.5 rounded-full font-headline font-bold text-white shadow-lg shadow-purple-900/40"
          >
            Descargar
          </a>
        </div>
      </div>
    </header>
  )
}
