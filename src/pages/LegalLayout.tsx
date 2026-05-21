import type { ReactNode } from "react"
import { PageHeader } from "../components/PageHeader"

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-brand-void text-slate-200">
      <PageHeader />

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
      </div>
    </div>
  )
}
