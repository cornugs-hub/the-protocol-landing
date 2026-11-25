import { Link } from "react-router-dom"
import type { ReactNode } from "react"
import { Wordmark } from "./Wordmark"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] py-14 sm:py-16 bg-ink-deep">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
        <div className="col-span-2 md:col-span-1">
          <Wordmark />
          <p className="mt-5 text-white/50 text-sm leading-relaxed max-w-xs">
            Sube de rango en la vida real: cuerpo, combustible, espíritu y mente en un solo sistema.
          </p>
        </div>
        <FooterCol title="La app">
          <FooterAnchor href="/#como-funciona">Cómo funciona</FooterAnchor>
          <FooterAnchor href="/#pilares">Pilares</FooterAnchor>
          <FooterAnchor href="/#premium">Premium</FooterAnchor>
          <FooterAnchor href="/#descargar">Descargar</FooterAnchor>
        </FooterCol>
        <FooterCol title="Legal">
          <FooterRouterLink to="/privacy">Privacidad</FooterRouterLink>
          <FooterRouterLink to="/terms">Términos</FooterRouterLink>
          <FooterRouterLink to="/account-deletion">Borrar mi cuenta</FooterRouterLink>
          <FooterAnchor href="mailto:cornugs@gmail.com">Contacto</FooterAnchor>
        </FooterCol>
      </div>
      <div className="mt-12 pt-6 border-t border-white/[0.05] max-w-6xl mx-auto px-5 sm:px-8 text-white/40 text-[13px]">
        © 2026 Cornugs. Todos los derechos reservados.
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="font-headline font-bold text-white text-[15px] mb-4">{title}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  )
}

function FooterAnchor({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <a href={href} className="text-white/55 hover:text-white transition-colors text-[14px]">
        {children}
      </a>
    </li>
  )
}

function FooterRouterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-white/55 hover:text-white transition-colors text-[14px]">
        {children}
      </Link>
    </li>
  )
}
