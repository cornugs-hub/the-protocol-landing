import { useState } from "react"
import { Link } from "react-router-dom"
import { LegalLayout } from "./LegalLayout"

type Lang = "es" | "en"

export function Terms() {
  const [lang, setLang] = useState<Lang>("es")
  return (
    <LegalLayout
      title={lang === "es" ? "Términos de Servicio" : "Terms of Service"}
      lastUpdated={lang === "es" ? "3 de mayo de 2026" : "May 3, 2026"}
    >
      <LangSwitch lang={lang} onChange={setLang} />
      {lang === "es" ? <TermsES /> : <TermsEN />}
    </LegalLayout>
  )
}

function LangSwitch({
  lang,
  onChange,
}: {
  lang: Lang
  onChange: (l: Lang) => void
}) {
  const btn = (active: boolean) =>
    `px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-headline font-bold uppercase tracking-widest transition-colors ${
      active
        ? "bg-brand-primary text-white shadow-[0_0_15px_rgba(108,92,231,0.4)]"
        : "text-slate-400 hover:text-white"
    }`
  return (
    <div className="inline-flex gap-1 p-1 rounded-full bg-white/[0.04] border border-white/10 mb-8 not-prose">
      <button onClick={() => onChange("es")} className={btn(lang === "es")}>
        Español
      </button>
      <button onClick={() => onChange("en")} className={btn(lang === "en")}>
        English
      </button>
    </div>
  )
}

function TermsES() {
  return (
    <>
      <p>
        Al usar The Protocol aceptas estos términos. Si no estás de acuerdo, no
        uses la app.
      </p>

      <H2>1. Aceptación</H2>
      <p>
        The Protocol es una aplicación operada por Cornugs. Al crear cuenta o
        usar la app aceptas estos términos y la{" "}
        <Link className="text-brand-primarySoft hover:underline" to="/privacy">
          Política de Privacidad
        </Link>
        .
      </p>

      <H2>2. Cuenta</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Eres responsable de mantener tu contraseña segura</li>
        <li>Debes ser mayor de 13 años (o la edad mínima legal en tu país)</li>
        <li>Una persona, una cuenta. No compartas credenciales</li>
        <li>Información falsa puede resultar en suspensión</li>
      </ul>

      <H2>3. Uso permitido</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Puedes usar la app para fines personales no comerciales</li>
        <li>Puedes exportar tus datos en cualquier momento</li>
        <li>NO puedes copiar, modificar, distribuir o hacer reverse-engineering del código</li>
        <li>NO puedes usar la app para actividades ilegales o que dañen a otros usuarios</li>
      </ul>

      <H2>4. Contenido del usuario</H2>
      <p>
        Las reflexiones, fotos, ejercicios personalizados que registres son
        tuyos. Nos otorgas licencia limitada para almacenarlos y mostrarlos de
        vuelta a ti dentro de la app.
      </p>

      <H2>5. Disclaimer de salud y fitness</H2>
      <p>
        <strong className="text-slate-300">
          The Protocol NO es un servicio médico ni reemplaza consejo profesional.
        </strong>{" "}
        Los planes de ejercicio, nutrición y meditación son sugerencias generales
        basadas en data que tú ingresas. Consulta a tu médico antes de iniciar
        cualquier programa de ejercicio o cambio nutricional, especialmente si
        tienes condiciones preexistentes.
      </p>
      <p>
        Usas la app bajo tu propio riesgo. Cornugs no es responsable por
        lesiones, problemas de salud o cualquier daño derivado del uso de la app.
      </p>

      <H2>6. Suscripciones premium</H2>
      <p>
        Algunas funcionalidades requieren suscripción premium ($4.99 USD/mes o
        equivalente). Las suscripciones se renuevan automáticamente. Puedes
        cancelar en cualquier momento desde la configuración de tu cuenta de
        Google Play o App Store.
      </p>

      <H2>7. Disponibilidad</H2>
      <p>
        Hacemos esfuerzos razonables para mantener la app disponible 24/7, pero
        NO garantizamos cero interrupciones. Mantenimiento, bugs, problemas de
        proveedores (Firebase) pueden causar downtime.
      </p>

      <H2>8. Terminación</H2>
      <p>
        Puedes eliminar tu cuenta en cualquier momento. Podemos suspender o
        terminar cuentas que violen estos términos.
      </p>

      <H2>9. Limitación de responsabilidad</H2>
      <p>
        En la medida permitida por ley, Cornugs no es responsable por daños
        indirectos, incidentales o consecuenciales derivados del uso de la app.
        Nuestra responsabilidad total se limita a lo pagado por suscripciones en
        los últimos 12 meses, máximo USD $50.
      </p>

      <H2>10. Cambios</H2>
      <p>
        Podemos actualizar estos términos. Cambios significativos se notificarán
        vía la app o email. Uso continuado implica aceptación.
      </p>

      <H2>11. Ley aplicable</H2>
      <p>
        Estos términos se rigen por las leyes aplicables al domicilio del
        operador.
      </p>

      <H2>12. Contacto</H2>
      <p>
        <a className="text-brand-primarySoft hover:underline" href="mailto:cornugs@gmail.com">
          cornugs@gmail.com
        </a>
      </p>
    </>
  )
}

function TermsEN() {
  return (
    <>
      <p>
        By using The Protocol you accept these terms. If you do not agree, do
        not use the app.
      </p>

      <H2>1. Acceptance</H2>
      <p>
        The Protocol is operated by Cornugs. By creating an account or using
        the app you accept these terms and the{" "}
        <Link className="text-brand-primarySoft hover:underline" to="/privacy">
          Privacy Policy
        </Link>
        .
      </p>

      <H2>2. Account</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>You are responsible for keeping your password secure</li>
        <li>You must be 13+ (or the legal minimum age in your country)</li>
        <li>One person, one account. Do not share credentials</li>
        <li>False information may result in suspension</li>
      </ul>

      <H2>3. Permitted use</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>You may use the app for personal non-commercial purposes</li>
        <li>You may export your data at any time</li>
        <li>You may NOT copy, modify, distribute, or reverse-engineer the code</li>
        <li>You may NOT use the app for illegal activities or harm other users</li>
      </ul>

      <H2>4. User content</H2>
      <p>
        Reflections, photos, custom exercises you log are yours. You grant us
        limited license to store them and display them back to you within the
        app.
      </p>

      <H2>5. Health and fitness disclaimer</H2>
      <p>
        <strong className="text-slate-300">
          The Protocol is NOT a medical service and does not replace professional advice.
        </strong>{" "}
        Exercise, nutrition, and meditation plans are general suggestions based
        on data you input. Consult your doctor before starting any exercise
        program or nutritional change, especially with preexisting conditions.
      </p>
      <p>
        You use the app at your own risk. Cornugs is not responsible for
        injuries, health problems, or any damage arising from app use.
      </p>

      <H2>6. Premium subscriptions</H2>
      <p>
        Some features require premium subscription ($4.99 USD/month or
        equivalent). Subscriptions auto-renew. You can cancel anytime from your
        Google Play or App Store account settings.
      </p>

      <H2>7. Availability</H2>
      <p>
        We make reasonable efforts to keep the app available 24/7, but we do
        NOT guarantee zero interruptions. Maintenance, bugs, provider issues
        (Firebase) may cause downtime.
      </p>

      <H2>8. Termination</H2>
      <p>
        You may delete your account at any time. We may suspend or terminate
        accounts that violate these terms.
      </p>

      <H2>9. Limitation of liability</H2>
      <p>
        To the extent permitted by law, Cornugs is not liable for indirect,
        incidental, or consequential damages arising from app use. Our total
        liability is limited to subscription fees paid in the last 12 months,
        max USD $50.
      </p>

      <H2>10. Changes</H2>
      <p>
        We may update these terms. Significant changes will be notified via the
        app or email. Continued use implies acceptance.
      </p>

      <H2>11. Governing law</H2>
      <p>
        These terms are governed by the laws applicable to the operator's
        domicile.
      </p>

      <H2>12. Contact</H2>
      <p>
        <a className="text-brand-primarySoft hover:underline" href="mailto:cornugs@gmail.com">
          cornugs@gmail.com
        </a>
      </p>
    </>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-headline font-bold text-xl sm:text-2xl text-white mt-10 mb-3">
      {children}
    </h2>
  )
}
