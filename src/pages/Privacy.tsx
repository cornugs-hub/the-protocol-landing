import { useState } from "react"
import { LegalLayout } from "./LegalLayout"

type Lang = "es" | "en"

export function Privacy() {
  const [lang, setLang] = useState<Lang>("es")

  return (
    <LegalLayout
      title={lang === "es" ? "Política de Privacidad" : "Privacy Policy"}
      lastUpdated={lang === "es" ? "3 de mayo de 2026" : "May 3, 2026"}
    >
      <LangSwitch lang={lang} onChange={setLang} />
      {lang === "es" ? <PrivacyES /> : <PrivacyEN />}
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

function PrivacyES() {
  return (
    <>
      <p>
        The Protocol ("nosotros", "la app", "el servicio") es una aplicación
        móvil operada por Cornugs ("la empresa"). Esta política describe qué
        datos recolectamos, cómo los usamos y qué control tienes sobre ellos.
      </p>

      <H2>1. Información que recolectamos</H2>
      <H3>Cuenta</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Nombre y dirección de correo electrónico (al registrarte vía email, Google Sign-In o Apple Sign-In)</li>
        <li>Foto de perfil (opcional)</li>
        <li>Identificador único de Firebase Authentication</li>
      </ul>

      <H3>Datos de uso de la app</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Rutinas de ejercicio, sets, repeticiones, peso, RPE</li>
        <li>Comidas registradas, macros, calorías, fotos de comidas y etiquetas (procesadas localmente y/o por nuestro proveedor de IA)</li>
        <li>Sesiones de meditación completadas y reflexiones escritas</li>
        <li>Misiones diarias, rachas, progreso</li>
        <li>Configuración personalizada y preferencias</li>
      </ul>

      <H3>Permisos del dispositivo</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong className="text-slate-300">Cámara:</strong> para escanear códigos de barras de alimentos, OCR de etiquetas nutricionales y fotos de ejercicios personalizados</li>
        <li><strong className="text-slate-300">Almacenamiento / Galería:</strong> para seleccionar imágenes</li>
        <li><strong className="text-slate-300">Mantener pantalla activa:</strong> durante sesiones de meditación</li>
      </ul>

      <H3>Datos técnicos</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Identificadores del dispositivo, modelo, sistema operativo, versión de la app</li>
        <li>Reportes de fallos vía Firebase Crashlytics (no incluyen tus datos personales)</li>
        <li>Eventos de uso anonimizados vía Firebase Analytics</li>
        <li>Direcciones IP (registradas temporalmente por seguridad)</li>
      </ul>

      <H2>2. Cómo usamos tus datos</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Proveer y mantener el servicio</li>
        <li>Sincronizar tu progreso entre dispositivos</li>
        <li>Mejorar la app con base en patrones de uso anonimizados</li>
        <li>Detectar y resolver bugs vía reportes de fallos</li>
        <li>Enviarte notificaciones relevantes (recordatorios, hitos)</li>
      </ul>

      <H2>3. Cómo NO usamos tus datos</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>No vendemos tus datos a terceros</li>
        <li>No compartimos tu información personal con anunciantes</li>
        <li>No usamos tus datos para entrenar modelos de IA externos sin consentimiento explícito</li>
      </ul>

      <H2>4. Servicios de terceros</H2>
      <p>Usamos los siguientes proveedores que pueden procesar tus datos:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong className="text-slate-300">Firebase (Google):</strong> autenticación, base de datos, almacenamiento, analytics, crashlytics, mensajería push</li>
        <li><strong className="text-slate-300">Google Sign-In:</strong> autenticación opcional</li>
        <li><strong className="text-slate-300">Sign in with Apple:</strong> autenticación opcional</li>
        <li><strong className="text-slate-300">ML Kit (Google):</strong> reconocimiento de texto en fotos (procesamiento local en tu dispositivo)</li>
      </ul>

      <H2>5. Almacenamiento y seguridad</H2>
      <p>
        Tus datos se almacenan en servidores de Google Cloud Platform (Firebase).
        Implementamos medidas de seguridad estándar: cifrado en tránsito (HTTPS),
        reglas de acceso (Firestore Security Rules), autenticación obligatoria
        para acceder a tus datos.
      </p>

      <H2>6. Tus derechos</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong className="text-slate-300">Acceso:</strong> puedes ver todos tus datos en la app</li>
        <li><strong className="text-slate-300">Eliminación:</strong> puedes eliminar tu cuenta y todos los datos asociados desde Configuración → Eliminar cuenta, o escribiéndonos</li>
        <li><strong className="text-slate-300">Exportación:</strong> puedes exportar tus datos a CSV/JSON</li>
        <li><strong className="text-slate-300">Corrección:</strong> puedes editar cualquier dato directamente en la app</li>
      </ul>

      <H2>7. Menores de edad</H2>
      <p>
        The Protocol no está dirigido a menores de 13 años. No recolectamos
        conscientemente datos de menores de 13 años. Si descubrimos que se
        recolectaron, los eliminaremos.
      </p>

      <H2>8. Cambios a esta política</H2>
      <p>
        Podemos actualizar esta política. Notificaremos cambios significativos
        vía la app o por email. La fecha de "Última actualización" siempre
        refleja la versión vigente.
      </p>

      <H2>9. Contacto</H2>
      <p>
        Para preguntas sobre privacidad, escríbenos a{" "}
        <a className="text-brand-primarySoft hover:underline" href="mailto:cornugs@gmail.com">
          cornugs@gmail.com
        </a>
      </p>
      <p>Cornugs</p>
    </>
  )
}

function PrivacyEN() {
  return (
    <>
      <p>
        The Protocol ("we", "the app", "the service") is a mobile application
        operated by Cornugs ("the company"). This policy describes what data we
        collect, how we use it, and what control you have over it.
      </p>

      <H2>1. Information we collect</H2>
      <H3>Account</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Name and email address (when you register via email, Google Sign-In, or Apple Sign-In)</li>
        <li>Profile photo (optional)</li>
        <li>Firebase Authentication unique identifier</li>
      </ul>

      <H3>App usage data</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Workout routines, sets, reps, weight, RPE</li>
        <li>Logged meals, macros, calories, food and label photos (processed locally and/or by our AI provider)</li>
        <li>Completed meditation sessions and written reflections</li>
        <li>Daily missions, streaks, progress</li>
        <li>Custom settings and preferences</li>
      </ul>

      <H3>Device permissions</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong className="text-slate-300">Camera:</strong> to scan food barcodes, perform OCR on nutrition labels, and capture custom exercise photos</li>
        <li><strong className="text-slate-300">Storage / Gallery:</strong> to select images</li>
        <li><strong className="text-slate-300">Keep screen on:</strong> during meditation sessions</li>
      </ul>

      <H3>Technical data</H3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Device identifiers, model, OS, app version</li>
        <li>Crash reports via Firebase Crashlytics (no personal data included)</li>
        <li>Anonymized usage events via Firebase Analytics</li>
        <li>IP addresses (logged temporarily for security)</li>
      </ul>

      <H2>2. How we use your data</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Provide and maintain the service</li>
        <li>Sync your progress across devices</li>
        <li>Improve the app based on anonymized usage patterns</li>
        <li>Detect and resolve bugs via crash reports</li>
        <li>Send you relevant notifications (reminders, milestones)</li>
      </ul>

      <H2>3. How we do NOT use your data</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>We do not sell your data to third parties</li>
        <li>We do not share your personal info with advertisers</li>
        <li>We do not use your data to train external AI models without explicit consent</li>
      </ul>

      <H2>4. Third-party services</H2>
      <p>We use the following providers that may process your data:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong className="text-slate-300">Firebase (Google):</strong> authentication, database, storage, analytics, crashlytics, push messaging</li>
        <li><strong className="text-slate-300">Google Sign-In:</strong> optional authentication</li>
        <li><strong className="text-slate-300">Sign in with Apple:</strong> optional authentication</li>
        <li><strong className="text-slate-300">ML Kit (Google):</strong> text recognition on photos (processed locally on your device)</li>
      </ul>

      <H2>5. Storage and security</H2>
      <p>
        Your data is stored on Google Cloud Platform servers (Firebase). We
        implement standard security measures: encryption in transit (HTTPS),
        access rules (Firestore Security Rules), mandatory authentication to
        access your data.
      </p>

      <H2>6. Your rights</H2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong className="text-slate-300">Access:</strong> you can view all your data in the app</li>
        <li><strong className="text-slate-300">Deletion:</strong> you can delete your account and all associated data from Settings → Delete account, or by writing to us</li>
        <li><strong className="text-slate-300">Export:</strong> you can export your data to CSV/JSON</li>
        <li><strong className="text-slate-300">Correction:</strong> you can edit any data directly in the app</li>
      </ul>

      <H2>7. Minors</H2>
      <p>
        The Protocol is not directed at children under 13. We do not knowingly
        collect data from children under 13. If we discover such data was
        collected, we will delete it.
      </p>

      <H2>8. Changes to this policy</H2>
      <p>
        We may update this policy. We will notify significant changes via the
        app or by email. The "Last updated" date always reflects the current
        version.
      </p>

      <H2>9. Contact</H2>
      <p>
        For privacy questions, email us at{" "}
        <a className="text-brand-primarySoft hover:underline" href="mailto:cornugs@gmail.com">
          cornugs@gmail.com
        </a>
      </p>
      <p>Cornugs</p>
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
