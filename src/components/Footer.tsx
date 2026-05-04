import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-12 sm:py-16 bg-slate-950">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 px-5 sm:px-8 max-w-7xl mx-auto text-left">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="text-lg sm:text-xl font-bold text-slate-200 font-headline">
              THE PROTOCOL
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_#6C5CE7]" />
          </div>
          <p className="text-slate-500 font-body text-[10px] sm:text-xs tracking-wider leading-relaxed mb-6 sm:mb-8">
            SISTEMA OPERATIVO PARA TU DISCIPLINA.
          </p>
        </div>

        <div>
          <h4 className="font-headline font-bold text-brand-primarySoft text-[10px] sm:text-xs tracking-widest uppercase mb-4 sm:mb-6">
            PRODUCTO
          </h4>
          <ul className="space-y-3 sm:space-y-4">
            <FooterLink href="#pilares">Pilares</FooterLink>
            <FooterLink href="#proceso">Proceso</FooterLink>
            <FooterLink href="#descargar">Descargar</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-brand-primarySoft text-[10px] sm:text-xs tracking-widest uppercase mb-4 sm:mb-6">
            COMUNIDAD
          </h4>
          <ul className="space-y-3 sm:space-y-4">
            <FooterLink href="#">Discord</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">X</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-brand-primarySoft text-[10px] sm:text-xs tracking-widest uppercase mb-4 sm:mb-6">
            LEGAL
          </h4>
          <ul className="space-y-3 sm:space-y-4">
            <li>
              <Link
                to="/privacy"
                className="text-slate-600 font-body text-[10px] sm:text-xs tracking-widest uppercase hover:text-brand-primarySoft transition-colors"
              >
                Privacidad
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-slate-600 font-body text-[10px] sm:text-xs tracking-widest uppercase hover:text-brand-primarySoft transition-colors"
              >
                Términos
              </Link>
            </li>
            <li>
              <a
                className="text-slate-400 font-body text-[10px] sm:text-xs tracking-widest uppercase hover:text-brand-primarySoft transition-colors break-words"
                href="mailto:cornugs@gmail.com"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-slate-900 px-5 sm:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="text-slate-600 font-body text-[10px] tracking-widest uppercase text-center">
          © 2026 Cornugs · Todos los derechos reservados
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        className="text-slate-600 font-body text-[10px] sm:text-xs tracking-widest uppercase hover:text-brand-primarySoft transition-colors"
        href={href}
      >
        {children}
      </a>
    </li>
  )
}
