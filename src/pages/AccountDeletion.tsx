import { useState } from "react"
import { LegalLayout } from "./LegalLayout"

type Lang = "es" | "en"

export function AccountDeletion() {
  const [lang, setLang] = useState<Lang>("es")

  return (
    <LegalLayout
      title={lang === "es" ? "Eliminación de cuenta" : "Account Deletion"}
      lastUpdated={lang === "es" ? "14 de mayo de 2026" : "May 14, 2026"}
    >
      <LangSwitch lang={lang} onChange={setLang} />
      {lang === "es" ? <AccountDeletionES /> : <AccountDeletionEN />}
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

function AccountDeletionES() {
  return (
    <>
      <p>
        Esta página describe cómo solicitar la eliminación de tu cuenta de{" "}
        <strong className="text-slate-300">The Protocol</strong>, una aplicación
        móvil desarrollada por <strong className="text-slate-300">Cornugs</strong>,
        y qué datos se eliminan o conservan tras la solicitud.
      </p>

      <H2>1. Cómo solicitar la eliminación de tu cuenta</H2>
      <p>
        Puedes solicitar la eliminación completa de tu cuenta y los datos
        asociados de las siguientes maneras:
      </p>

      <H3>Opción A — Desde la aplicación</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Abre la app The Protocol</li>
        <li>Ve a <strong className="text-slate-300">Configuración → Cuenta → Eliminar cuenta</strong></li>
        <li>Confirma la acción</li>
        <li>La eliminación se procesa de forma automática</li>
      </ul>

      <H3>Opción B — Por correo electrónico</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Envía un correo a{" "}
          <a className="text-brand-primarySoft hover:underline" href="mailto:cornugs@gmail.com?subject=Eliminar%20cuenta%20The%20Protocol">
            cornugs@gmail.com
          </a>
        </li>
        <li>Asunto: <strong className="text-slate-300">"Eliminar cuenta The Protocol"</strong></li>
        <li>Incluye el correo electrónico asociado a tu cuenta</li>
        <li>Procesaremos la solicitud en un plazo máximo de <strong className="text-slate-300">30 días</strong></li>
      </ul>

      <H2>2. Datos que se eliminan</H2>
      <p>Al eliminar tu cuenta, borraremos de forma permanente:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Perfil (nombre, correo, foto de perfil)</li>
        <li>Credenciales de autenticación (Firebase Auth, vínculos con Google Sign-In y Sign in with Apple)</li>
        <li>Rutinas de ejercicio, sets, repeticiones, peso, RPE</li>
        <li>Comidas registradas, macros, calorías, fotos de comidas y etiquetas</li>
        <li>Sesiones de meditación y reflexiones escritas</li>
        <li>Libros descargados, progreso de lectura, marcadores, notas y subrayados</li>
        <li>Misiones diarias, rachas y progreso</li>
        <li>Configuración personalizada y preferencias</li>
        <li>Tokens de notificación push</li>
        <li>Historial de pagos y suscripciones (registros internos vinculados a tu cuenta; los recibos de Google Play / App Store los conserva la tienda según su política)</li>
      </ul>

      <H2>3. Datos que se conservan</H2>
      <p>Algunos datos pueden conservarse por motivos legales, de seguridad o técnicos:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong className="text-slate-300">Registros de fallos anonimizados</strong> (Firebase Crashlytics): hasta 90 días, sin identificadores personales</li>
        <li><strong className="text-slate-300">Eventos de uso anonimizados</strong> (Firebase Analytics): retención estándar de Google, sin vínculo con tu identidad</li>
        <li><strong className="text-slate-300">Copias de seguridad cifradas</strong>: se sobrescriben en un máximo de 30 días</li>
        <li><strong className="text-slate-300">Registros de seguridad</strong> (direcciones IP, intentos de acceso): hasta 90 días, retenidos por obligaciones de seguridad</li>
      </ul>

      <H2>4. Plazo de procesamiento</H2>
      <p>
        Las solicitudes recibidas por correo se procesan en un plazo máximo de{" "}
        <strong className="text-slate-300">30 días naturales</strong>. La
        eliminación desde la app es inmediata. Recibirás una confirmación por
        correo cuando la eliminación se haya completado.
      </p>

      <H2>5. Borrado parcial</H2>
      <p>
        Si solo deseas eliminar ciertos datos sin borrar tu cuenta, consulta{" "}
        <a className="text-brand-primarySoft hover:underline" href="/data-deletion">
          Eliminación de datos
        </a>
        .
      </p>

      <H2>6. Contacto</H2>
      <p>
        Para cualquier duda sobre este proceso, escríbenos a{" "}
        <a className="text-brand-primarySoft hover:underline" href="mailto:cornugs@gmail.com">
          cornugs@gmail.com
        </a>
        .
      </p>
      <p>Cornugs — desarrollador de The Protocol</p>
    </>
  )
}

function AccountDeletionEN() {
  return (
    <>
      <p>
        This page describes how to request deletion of your{" "}
        <strong className="text-slate-300">The Protocol</strong> account, a
        mobile application developed by{" "}
        <strong className="text-slate-300">Cornugs</strong>, and which data is
        deleted or retained after the request.
      </p>

      <H2>1. How to request account deletion</H2>
      <p>You can request full deletion of your account and associated data in the following ways:</p>

      <H3>Option A — From the app</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Open The Protocol app</li>
        <li>Go to <strong className="text-slate-300">Settings → Account → Delete account</strong></li>
        <li>Confirm the action</li>
        <li>Deletion is processed automatically</li>
      </ul>

      <H3>Option B — By email</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Send an email to{" "}
          <a className="text-brand-primarySoft hover:underline" href="mailto:cornugs@gmail.com?subject=Delete%20The%20Protocol%20account">
            cornugs@gmail.com
          </a>
        </li>
        <li>Subject: <strong className="text-slate-300">"Delete The Protocol account"</strong></li>
        <li>Include the email address associated with your account</li>
        <li>We will process the request within a maximum of <strong className="text-slate-300">30 days</strong></li>
      </ul>

      <H2>2. Data that is deleted</H2>
      <p>When you delete your account, we will permanently remove:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Profile (name, email, profile photo)</li>
        <li>Authentication credentials (Firebase Auth, Google Sign-In and Sign in with Apple links)</li>
        <li>Workout routines, sets, reps, weight, RPE</li>
        <li>Logged meals, macros, calories, meal and label photos</li>
        <li>Meditation sessions and written reflections</li>
        <li>Downloaded books, reading progress, bookmarks, notes, and highlights</li>
        <li>Daily missions, streaks, and progress</li>
        <li>Custom settings and preferences</li>
        <li>Push notification tokens</li>
        <li>Payment and subscription history (internal records linked to your account; Google Play / App Store receipts are retained by the store per their policy)</li>
      </ul>

      <H2>3. Data that is retained</H2>
      <p>Some data may be retained for legal, security, or technical reasons:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong className="text-slate-300">Anonymized crash logs</strong> (Firebase Crashlytics): up to 90 days, no personal identifiers</li>
        <li><strong className="text-slate-300">Anonymized usage events</strong> (Firebase Analytics): Google's standard retention, not linked to your identity</li>
        <li><strong className="text-slate-300">Encrypted backups</strong>: overwritten within a maximum of 30 days</li>
        <li><strong className="text-slate-300">Security logs</strong> (IP addresses, access attempts): up to 90 days, retained for security obligations</li>
      </ul>

      <H2>4. Processing time</H2>
      <p>
        Email requests are processed within a maximum of{" "}
        <strong className="text-slate-300">30 calendar days</strong>. Deletion
        from within the app is immediate. You will receive an email
        confirmation once deletion is complete.
      </p>

      <H2>5. Partial deletion</H2>
      <p>
        If you only want to delete certain data without deleting your account,
        see{" "}
        <a className="text-brand-primarySoft hover:underline" href="/data-deletion">
          Data Deletion
        </a>
        .
      </p>

      <H2>6. Contact</H2>
      <p>
        For any questions about this process, email us at{" "}
        <a className="text-brand-primarySoft hover:underline" href="mailto:cornugs@gmail.com">
          cornugs@gmail.com
        </a>
        .
      </p>
      <p>Cornugs — developer of The Protocol</p>
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-headline font-semibold text-base sm:text-lg text-white mt-6 mb-2">
      {children}
    </h3>
  )
}
