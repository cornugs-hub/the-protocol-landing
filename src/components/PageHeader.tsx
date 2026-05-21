import { Link } from "react-router-dom"
import { Wordmark } from "./Wordmark"

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 bg-brand-void/85 backdrop-blur-xl border-b border-white/[0.06]">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <Wordmark />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-[11px] sm:text-xs tracking-widest uppercase font-headline font-bold transition-colors"
        >
          ← Inicio
        </Link>
      </nav>
    </header>
  )
}
