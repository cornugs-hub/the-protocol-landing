import { Link } from "react-router-dom"
import type { ReactNode } from "react"
import { Wordmark } from "./Wordmark"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] py-14 sm:py-16 bg-slate-950/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
        <div className="col-span-2 md:col-span-1">
          <Wordmark />
          <p className="op-label mt-5 leading-relaxed">
            Sistema operativo<br />para tu disciplina.
          </p>
        </div>
        <FooterCol title="Producto">
          <FooterAnchor href="#sistema">Pilares</FooterAnchor>
          <FooterAnchor href="#proceso">Proceso</FooterAnchor>
          <FooterAnchor href="#codigo">Código</FooterAnchor>
          <FooterAnchor href="#descargar">Descargar</FooterAnchor>
        </FooterCol>
        <FooterCol title="Legal">
          <FooterRouterLink to="/privacy">Privacidad</FooterRouterLink>
          <FooterRouterLink to="/terms">Términos</FooterRouterLink>
          <FooterAnchor href="mailto:cornugs@gmail.com">Contacto</FooterAnchor>
        </FooterCol>
      </div>
      <div className="mt-12 pt-6 border-t border-white/[0.04] max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="op-label">© 2026 Cornugs · Todos los derechos reservados</p>
        <p className="op-label">activateprotocol.com</p>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="op-label mb-5 !text-brand-primarySoft">{title}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  )
}

function FooterAnchor({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-slate-500 hover:text-white transition-colors text-[13px] font-medium"
      >
        {children}
      </a>
    </li>
  )
}

function FooterRouterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-slate-500 hover:text-white transition-colors text-[13px] font-medium"
      >
        {children}
      </Link>
    </li>
  )
}
