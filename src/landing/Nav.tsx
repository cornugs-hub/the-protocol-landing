import { useEffect, useState } from "react"
import { Wordmark } from "../components/Wordmark"
import { Close, Menu } from "./icons"

const LINKS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#pilares", label: "Pilares" },
  { href: "#premium", label: "Premium" },
  { href: "#preguntas", label: "Preguntas" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener("scroll", on, { passive: true })
    return () => window.removeEventListener("scroll", on)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-[72px] flex items-center justify-between">
        <a href="#" aria-label="The Protocol, inicio">
          <Wordmark />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[15px] text-white/70 hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#descargar"
            className="hidden sm:inline-flex items-center rounded-full bg-white text-ink font-headline font-bold text-[15px] px-5 py-2.5 hover:bg-white/90 transition-colors"
          >
            Descargar gratis
          </a>
          <button
            type="button"
            className="md:hidden grid place-items-center w-11 h-11 rounded-full text-white hover:bg-white/10"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>
      {open ? (
        <ul className="md:hidden px-5 pb-5 grid gap-1">
          {[...LINKS, { href: "#descargar", label: "Descargar gratis" }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-lg text-white/85 hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  )
}
