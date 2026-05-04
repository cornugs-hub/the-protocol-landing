import { Link } from "react-router-dom"
import type { ReactNode } from "react"

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-brand-void text-slate-200">
      <header className="border-b border-white/5 px-5 py-5 sm:py-6 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 group cursor-pointer"
        >
          <span className="text-lg sm:text-xl font-headline font-black tracking-tighter text-white group-hover:text-brand-primarySoft transition-colors">
            THE PROTOCOL
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_#6C5CE7]" />
        </Link>
      </header>

      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-12 sm:py-16 md:py-20">
        <h1 className="font-headline font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-3">
          {title}
        </h1>
        <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-[0.18em] font-bold mb-10 sm:mb-12">
          Última actualización: {lastUpdated}
        </p>

        <article className="legal-content space-y-6 text-slate-400 text-sm sm:text-base leading-relaxed">
          {children}
        </article>

        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/5 text-center">
          <Link
            to="/"
            className="text-brand-primarySoft text-xs sm:text-sm tracking-widest uppercase font-headline font-bold hover:text-white transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
