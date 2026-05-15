import { useState } from "react"
import { LegalLayout } from "./LegalLayout"

type Lang = "es" | "en"

export function DataDeletion() {
  const [lang, setLang] = useState<Lang>("es")

  return (
    <LegalLayout
      title={lang === "es" ? "Eliminación de datos" : "Data Deletion"}
      lastUpdated={lang === "es" ? "14 de mayo de 2026" : "May 14, 2026"}
    >
      <LangSwitch lang={lang} onChange={setLang} />
      {lang === "es" ? <DataDeletionES /> : <DataDeletionEN />}
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

function DataDeletionES() {
  return (
    <>
      <p>
        Esta página describe cómo solicitar la eliminación de datos
        específicos sin borrar tu cuenta de{" "}
        <strong className="text-slate-300">The Protocol</strong>, desarrollada
        por <strong className="text-slate-300">Cornugs</strong>. Si prefieres
        eliminar la cuenta completa, consulta{" "}
        <a className="text-brand-primarySoft hover:underline" href="/account-deletion">
          Eliminación de cuenta
        </a>
        .
      </p>

      <H2>1. Tipos de datos que puedes solicitar eliminar</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Rutinas de ejercicio y todo el historial de entrenamientos</li>
        <li>Comidas registradas, macros y fotos de alimentos</li>
        <li>Sesiones de meditación y reflexiones escritas</li>
        <li>Misiones diarias, rachas y progreso</li>
        <li>Foto de perfil (sin eliminar la cuenta)</li>
        <li>Configuración personalizada</li>
      </ul>

      <H2>2. Cómo solicitar la eliminación</H2>

      <H3>Opción A — Desde la aplicación</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Abre la sección correspondiente en la app (Entrenamientos, Nutrición, Meditación, etc.)</li>
        <li>Selecciona el registro o categoría que deseas eliminar</li>
        <li>Usa la opción <strong className="text-slate-300">Eliminar</strong> o el ícono de papelera</li>
        <li>La eliminación se aplica de forma inmediata</li>
      </ul>

      <H3>Opción B — Por correo electrónico</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Envía un correo a{" "}
          <a className="text-brand-primarySoft hover:underline" href="mailto:cornugs@gmail.com?subject=Eliminar%20datos%20The%20Protocol">
            cornugs@gmail.com
          </a>
        </li>
        <li>Asunto: <strong className="text-slate-300">"Eliminar datos The Protocol"</strong></li>
        <li>Indica el correo asociado a tu cuenta</li>
        <li>Especifica qué tipos de datos deseas eliminar (ver lista arriba)</li>
        <li>Procesaremos la solicitud en un plazo máximo de <strong className="text-slate-300">30 días</strong></li>
      </ul>

      <H2>3. Qué se conserva tras la eliminación parcial</H2>
      <p>Tu cuenta seguirá activa con:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Perfil básico (nombre, correo, credenciales de inicio de sesión)</li>
        <li>Datos no incluidos en la solicitud</li>
        <li>Registros anonimizados (Crashlytics, Analytics): retención estándar</li>
        <li>Copias de seguridad cifradas: se sobrescriben en un máximo de 30 días</li>
      </ul>

      <H2>4. Plazo de procesamiento</H2>
      <p>
        La eliminación dentro de la app es inmediata. Las solicitudes por
        correo se procesan en un plazo máximo de{" "}
        <strong className="text-slate-300">30 días naturales</strong>.
        Recibirás una confirmación cuando se complete.
      </p>

      <H2>5. Contacto</H2>
      <p>
        Para cualquier duda, escríbenos a{" "}
        <a className="text-brand-primarySoft hover:underline" href="mailto:cornugs@gmail.com">
          cornugs@gmail.com
        </a>
        .
      </p>
      <p>Cornugs — desarrollador de The Protocol</p>
    </>
  )
}

function DataDeletionEN() {
  return (
    <>
      <p>
        This page describes how to request deletion of specific data without
        deleting your <strong className="text-slate-300">The Protocol</strong>{" "}
        account, developed by{" "}
        <strong className="text-slate-300">Cornugs</strong>. If you prefer to
        delete the entire account, see{" "}
        <a className="text-brand-primarySoft hover:underline" href="/account-deletion">
          Account Deletion
        </a>
        .
      </p>

      <H2>1. Data types you can request to delete</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Workout routines and full training history</li>
        <li>Logged meals, macros, and food photos</li>
        <li>Meditation sessions and written reflections</li>
        <li>Daily missions, streaks, and progress</li>
        <li>Profile photo (without deleting the account)</li>
        <li>Custom settings</li>
      </ul>

      <H2>2. How to request deletion</H2>

      <H3>Option A — From the app</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Open the relevant section in the app (Workouts, Nutrition, Meditation, etc.)</li>
        <li>Select the entry or category you want to remove</li>
        <li>Use the <strong className="text-slate-300">Delete</strong> option or trash icon</li>
        <li>Deletion is applied immediately</li>
      </ul>

      <H3>Option B — By email</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Send an email to{" "}
          <a className="text-brand-primarySoft hover:underline" href="mailto:cornugs@gmail.com?subject=Delete%20The%20Protocol%20data">
            cornugs@gmail.com
          </a>
        </li>
        <li>Subject: <strong className="text-slate-300">"Delete The Protocol data"</strong></li>
        <li>Provide the email associated with your account</li>
        <li>Specify which data types you want deleted (see list above)</li>
        <li>We will process the request within a maximum of <strong className="text-slate-300">30 days</strong></li>
      </ul>

      <H2>3. What is retained after partial deletion</H2>
      <p>Your account remains active with:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Basic profile (name, email, sign-in credentials)</li>
        <li>Data not included in the request</li>
        <li>Anonymized logs (Crashlytics, Analytics): standard retention</li>
        <li>Encrypted backups: overwritten within a maximum of 30 days</li>
      </ul>

      <H2>4. Processing time</H2>
      <p>
        Deletion from within the app is immediate. Email requests are
        processed within a maximum of{" "}
        <strong className="text-slate-300">30 calendar days</strong>. You will
        receive a confirmation when it's complete.
      </p>

      <H2>5. Contact</H2>
      <p>
        For any questions, email us at{" "}
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
