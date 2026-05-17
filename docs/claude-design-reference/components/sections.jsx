/* All landing sections */
const { useEffect: useSEffect, useState: useSState, useRef: useSRef } = React;

/* ============================================================ NAV */
function Nav() {
  const [open, setOpen] = useSState(false);
  const [scrolled, setScrolled] = useSState(false);
  useSEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useSEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "#sistema", label: "Sistema" },
    { href: "#proceso", label: "Proceso" },
    { href: "#codigo", label: "Código" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-void/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 shrink-0 group">
          <Wordmark />
        </a>

        <div className="hidden md:flex items-center gap-1 bg-white/[0.025] border border-white/[0.06] rounded-full p-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-slate-300 hover:text-white text-[13px] font-headline font-bold tracking-tight transition-colors rounded-full hover:bg-white/[0.04]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02]">
            <span className="relative inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-fuel pulse-dot" />
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-slate-400">
              Beta · <span className="text-white">247 cupos</span>
            </span>
          </span>
          <a
            href="#descargar"
            className="hidden sm:inline-flex btn-primary px-5 py-2 rounded-full text-[13px] font-headline font-bold text-white"
          >
            Descargar
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar" : "Menú"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] text-white"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </nav>
      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 border-t border-white/[0.06] ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-6 space-y-1 bg-brand-void/95 backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-4 rounded-xl text-slate-300 hover:bg-white/5 font-headline font-bold text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#descargar"
            onClick={() => setOpen(false)}
            className="mt-3 block btn-primary text-center py-3.5 rounded-full font-headline font-bold text-white"
          >
            Descargar
          </a>
        </div>
      </div>
    </header>
  );
}

/* ============================================================ HERO */
function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      {/* Ambient backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-fine opacity-60" />
        <div className="absolute -top-32 left-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-brand-primary/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primaryDark/15 rounded-full blur-[120px]" />
        <div className="absolute inset-x-0 top-[60vh] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center">
        {/* Copy column */}
        <div className="space-y-7 max-w-2xl">
          <Reveal>
            <Eyebrow color="primary">Beta cerrada · Acceso anticipado</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-headline font-black-x text-white tracking-brutalTight leading-[0.9] text-[64px] sm:text-[88px] md:text-[104px] lg:text-[118px]">
              Forja tu{" "}
              <span className="text-gradient-primary text-glow-primary">protocolo.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-slate-400 text-[17px] sm:text-lg md:text-xl leading-relaxed max-w-xl">
              Un sistema operativo para tu disciplina. Cuatro pilares.{" "}
              <span className="text-white">Cuerpo. Combustible. Espíritu. Mente.</span> Una sola
              misión: dejar de ser quien eras.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <PrimaryCTA href="#android-beta" icon={<AndroidIcon />}>
                Unirme a Beta Android
              </PrimaryCTA>
              <GhostCTA
                href="https://testflight.apple.com/join/8xVm9pBu"
                external
                icon={<AppleIcon />}
              >
                Unirme en TestFlight
              </GhostCTA>
            </div>
          </Reveal>

          {/* Trust strip */}
          <Reveal delay={320}>
            <div className="pt-6 border-t border-white/[0.06]">
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                <TrustItem
                  label="Operadores activos"
                  value={<LiveCounter end={1247} format={(n) => n.toLocaleString("es-MX")} />}
                />
                <TrustItem
                  label="Misiones hoy"
                  value={<LiveCounter end={8432} format={(n) => n.toLocaleString("es-MX")} />}
                />
                <TrustItem
                  label="Acceso revisado"
                  value="Manualmente"
                  small
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Phone column */}
        <Reveal delay={120} className="relative flex items-center justify-center lg:justify-end">
          <PhoneStack tilt={6} />
        </Reveal>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.05] bg-brand-void/40 backdrop-blur-sm py-3 overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap font-mono text-[10px] tracking-[0.3em] uppercase text-slate-500">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "Sin pleasantries",
              "Sin gamification barata",
              "Sin streaks vacíos",
              "Sin notificaciones de premio",
              "Sólo ejecución",
              "Sin pleasantries",
              "Sin gamification barata",
              "Sin streaks vacíos",
              "Sin notificaciones de premio",
              "Sólo ejecución",
            ].map((t, i) => (
              <span key={`${k}-${i}`} className="inline-flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-brand-primary" /> {t}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function TrustItem({ label, value, small = false }) {
  return (
    <div className="flex flex-col">
      <span className="op-label mb-0.5">{label}</span>
      <span
        className={`font-headline font-bold text-white tabular ${
          small ? "text-[14px]" : "text-[18px]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

/* ============================================================ MANIFESTO */
function Manifesto() {
  return (
    <section className="relative py-24 sm:py-32 border-y border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-grid-coarse opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-void via-transparent to-brand-void" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 sm:col-span-3">
            <Eyebrow color="primary">El manifiesto</Eyebrow>
          </div>
          <div className="col-span-12 sm:col-span-9 space-y-2">
            <ManifestoLine>El protocolo no se descarga.</ManifestoLine>
            <ManifestoLine accent>Se ejecuta.</ManifestoLine>
            <ManifestoLine muted>
              No es self-help feliz. No es una app de hábitos. Es disciplina ejecutada.
            </ManifestoLine>
            <ManifestoLine muted>
              Diseñado para quienes no aceptan la mediocridad.
            </ManifestoLine>
          </div>
        </div>
      </div>
    </section>
  );
}
function ManifestoLine({ children, accent = false, muted = false }) {
  return (
    <p
      className={`font-headline font-black-x tracking-brutalTight leading-[1.02] text-[36px] sm:text-[52px] md:text-[68px] ${
        accent ? "text-gradient-primary" : muted ? "text-slate-500" : "text-white"
      }`}
    >
      {children}
    </p>
  );
}

/* ============================================================ PILLARS */
function Pillars() {
  const pillars = [
    {
      id: "body",
      name: "Cuerpo",
      icon: "exercise",
      headline: "Tu gimnasio entero en el bolsillo.",
      body: "Rutinas calibradas a tu rango. Series, cargas y descansos sin abrir libreta.",
      bullets: ["Empujón / Tirón / Pierna", "Tracking de carga progresiva", "Movilidad y prehab"],
    },
    {
      id: "fuel",
      name: "Combustible",
      icon: "nutrition",
      headline: "Macros automáticos. Sin escribir.",
      body: "Escanea código, lee etiqueta, identifica foto. El log se llena solo.",
      bullets: ["Cámara con visión", "Códigos de barras", "Calibración a tu objetivo"],
    },
    {
      id: "aura",
      name: "Espíritu",
      icon: "self_improvement",
      headline: "Forja la mente como forjas el cuerpo.",
      body: "Respiración, meditación y enfoque. Sesiones cortas, brutalmente efectivas.",
      bullets: ["Audio guiado", "Respiración estructurada", "Sesiones de enfoque"],
    },
    {
      id: "mind",
      name: "Mente",
      icon: "menu_book",
      headline: "Conocimiento, no ruido.",
      body: "Lectura, notas y hábitos cognitivos. Aprende de fuentes que te exigen.",
      bullets: ["Lecturas diarias", "Notas y subrayados", "Aprendizaje deliberado"],
    },
  ];

  return (
    <section id="sistema" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/10 blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="El sistema"
          title={
            <>
              Cuatro pilares.{" "}
              <span className="text-gradient-primary">Un protocolo.</span>
            </>
          }
          lead="Cada pilar es un módulo independiente. Cada módulo te transforma. Juntos, te forjan en un operador completo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <PillarCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ id, name, icon, headline, body, bullets }) {
  const t = PILLAR_TINTS[id];
  return (
    <div
      className="group relative rounded-3xl overflow-hidden border border-white/[0.06] bg-gradient-to-br from-white/[0.025] to-transparent p-6 sm:p-8 transition-all hover:border-white/15"
    >
      <div
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-60 group-hover:opacity-90 transition-opacity"
        style={{ background: t.hex + "30" }}
      />
      <div className="relative grid grid-cols-[1fr_120px] sm:grid-cols-[1fr_140px] gap-5 sm:gap-7 items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: t.soft, border: `1px solid ${t.border}` }}
            >
              <Icon name={icon} className="text-[22px]" style={{ color: t.hex }} />
            </span>
            <div>
              <p className="op-label" style={{ color: t.hex, opacity: 0.85 }}>
                Pilar · {id.toUpperCase()}
              </p>
              <h3 className="font-headline font-black-x text-white text-[22px] sm:text-[24px] tracking-tight leading-tight">
                {name}
              </h3>
            </div>
          </div>
          <h4 className="font-headline font-bold text-white text-[18px] sm:text-[20px] leading-snug tracking-tight">
            {headline}
          </h4>
          <p className="text-slate-400 text-[14px] sm:text-[15px] leading-relaxed max-w-md">
            {body}
          </p>
          <ul className="space-y-1.5 pt-1">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-slate-300 text-[13px]">
                <span
                  className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                  style={{ background: t.hex }}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:block">
          <PillarMiniPhone pillar={id} />
        </div>
      </div>
    </div>
  );
}

/* ============================================================ VERSUS */
function Versus() {
  const rows = [
    { theirs: "Checkboxes vacíos", ours: "Misiones ejecutables" },
    { theirs: "Streaks de dopamina", ours: "Métricas de cumplimiento" },
    { theirs: "Notificaciones felicitándote", ours: "Audio que te ordena ejecutar" },
    { theirs: "Tracking aislado por categoría", ours: "Cuatro pilares interconectados" },
    { theirs: "Comunidad de likes", ours: "Operadores que ejecutan" },
    { theirs: "Onboarding de 60 preguntas", ours: "Protocolo activo en 3 minutos" },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-coarse opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <SectionHeader
          eyebrow="La diferencia"
          title={
            <>
              No es una app de hábitos.{" "}
              <span className="text-slate-500">Es otra liga.</span>
            </>
          }
          lead="Las apps tradicionales te recompensan por aparecer. The Protocol te exige ejecutar. Compara."
        />

        <div className="relative rounded-3xl overflow-hidden border border-white/[0.08]">
          {/* Header row */}
          <div className="grid grid-cols-2">
            <div className="bg-slate-950/60 px-5 sm:px-8 py-5 border-r border-white/[0.06]">
              <p className="op-label mb-1">La competencia</p>
              <p className="font-headline font-bold text-slate-400 text-[16px] sm:text-[18px] tracking-tight">
                Apps tradicionales
              </p>
            </div>
            <div className="bg-brand-primary/[0.08] px-5 sm:px-8 py-5 relative">
              <p className="op-label mb-1" style={{ color: "rgba(142,126,242,0.9)" }}>
                El sistema
              </p>
              <p className="font-headline font-bold text-white text-[16px] sm:text-[18px] tracking-tight">
                The Protocol
              </p>
              <span className="absolute top-3 right-3 sm:top-5 sm:right-5">
                <Eyebrow color="primary" dot={false}>OPERADOR</Eyebrow>
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/[0.05]">
            {rows.map((r, i) => (
              <div key={i} className="grid grid-cols-2">
                <div className="px-5 sm:px-8 py-4 sm:py-5 border-r border-white/[0.05] bg-slate-950/40 flex items-center gap-3">
                  <Icon name="close" className="text-slate-600 text-[18px]" />
                  <span className="text-slate-500 text-[14px] sm:text-[15px] leading-snug line-through decoration-slate-700 decoration-1">
                    {r.theirs}
                  </span>
                </div>
                <div className="px-5 sm:px-8 py-4 sm:py-5 bg-brand-primary/[0.03] flex items-center gap-3">
                  <Icon
                    name="check"
                    className="text-brand-primarySoft text-[18px] ms-fill"
                  />
                  <span className="text-white text-[14px] sm:text-[15px] leading-snug font-medium">
                    {r.ours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ PROCESS */
function Process() {
  const steps = [
    {
      n: "01",
      title: "Calibra el sistema",
      body: "Configura rutinas, macros y sesiones a tu medida. El protocolo se ajusta a tu rango actual y escala contigo.",
      meta: "DURACIÓN · 3 MIN",
    },
    {
      n: "02",
      title: "Ejecuta sin pensar",
      body: "Una misión clara cada mañana. Registro en segundos. Audio que te guía. Cero fricción entre tú y la acción.",
      meta: "FRICCIÓN · CERO",
    },
    {
      n: "03",
      title: "Mide la evolución",
      body: "Métricas que importan. Rachas que se acumulan. Progreso que ves en el espejo, no en una pantalla de mentira.",
      meta: "FEEDBACK · DIARIO",
    },
  ];
  return (
    <section id="proceso" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-primary/10 blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Proceso"
          title={
            <>
              Tres pasos. <br className="hidden sm:block" />
              <span className="text-slate-500">Cero excusas.</span>
            </>
          }
        />
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent z-0" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <ProcessCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function ProcessCard({ n, title, body, meta }) {
  return (
    <div className="relative bg-brand-deep/40 border border-white/[0.06] rounded-3xl p-7 sm:p-8 backdrop-blur transition-all hover:border-brand-primary/40 group overflow-hidden">
      <div className="absolute -right-16 -top-16 w-44 h-44 bg-brand-primary/10 rounded-full blur-[60px] group-hover:bg-brand-primary/20 transition-colors" />
      <div className="relative flex items-center justify-between mb-7">
        <div className="w-14 h-14 rounded-2xl bg-brand-void border border-brand-primary/40 flex items-center justify-center glow-soft">
          <span className="font-headline font-black-x text-brand-primarySoft text-[20px] tabular">
            {n}
          </span>
        </div>
        <span className="op-label">{meta}</span>
      </div>
      <h3 className="font-headline font-bold text-white text-[22px] sm:text-[24px] tracking-tight leading-tight mb-3">
        {title}
      </h3>
      <p className="text-slate-400 text-[14px] sm:text-[15px] leading-relaxed">{body}</p>
    </div>
  );
}

/* ============================================================ OPERATORS — live data strip */
function Operators() {
  const [pulse, setPulse] = useSState(0);
  useSEffect(() => {
    const t = setInterval(() => setPulse((p) => p + 1), 3200);
    return () => clearInterval(t);
  }, []);

  const recent = [
    { city: "CDMX", pillar: "body", action: "Empujón A · 4×8" },
    { city: "Madrid", pillar: "fuel", action: "Combustible registrado · 384kcal" },
    { city: "Monterrey", pillar: "aura", action: "Enfoque profundo · 25 min" },
    { city: "Bogotá", pillar: "mind", action: "Lectura · 22 páginas" },
    { city: "Buenos Aires", pillar: "body", action: "Pierna · 5×5" },
    { city: "Guadalajara", pillar: "fuel", action: "Hidratación · 2.4 L" },
    { city: "Lima", pillar: "aura", action: "Respiración · 4-7-8" },
    { city: "Santiago", pillar: "mind", action: "Notas · 11 entradas" },
  ];

  return (
    <section className="relative py-24 sm:py-32 border-y border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-grid-coarse opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <div>
          <Eyebrow color="primary">Operadores activos</Eyebrow>
          <h2 className="mt-5 font-headline font-black-x text-white tracking-brutalTight leading-[0.98] text-[40px] sm:text-[56px] md:text-[68px]">
            Esto se ejecuta{" "}
            <span className="text-gradient-primary">ahora mismo.</span>
          </h2>
          <p className="mt-5 text-slate-400 text-[15px] sm:text-base max-w-md leading-relaxed">
            La beta corre todos los días. Misiones reales, registradas en tiempo real, por operadores reales en habla hispana.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            <Stat3
              label="Operadores"
              value={<LiveCounter end={1247} format={(n) => n.toLocaleString("es-MX")} />}
            />
            <Stat3
              label="Misiones hoy"
              value={<LiveCounter end={8432} format={(n) => n.toLocaleString("es-MX")} />}
            />
            <Stat3
              label="Cumplimiento"
              value={<LiveCounter end={73} suffix="%" />}
            />
          </div>
        </div>

        {/* Live feed */}
        <div className="relative">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-primary/30 via-white/[0.05] to-transparent" />
          <div className="relative rounded-3xl bg-brand-void/80 border border-white/[0.06] backdrop-blur overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-fuel pulse-dot" />
                <p className="op-label !text-slate-400">FEED · EN VIVO</p>
              </div>
              <p className="op-label">{new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" })}</p>
            </div>
            <div className="divide-y divide-white/[0.04] relative">
              {recent.map((r, i) => {
                const t = PILLAR_TINTS[r.pillar];
                const highlighted = (pulse + i) % recent.length === recent.length - 1;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-4 px-5 py-3.5 transition-colors ${
                      highlighted ? "bg-white/[0.025]" : ""
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: t.hex, boxShadow: `0 0 8px ${t.hex}aa` }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] sm:text-[13px] text-white font-medium truncate">
                        {r.action}
                      </p>
                      <p className="op-label !text-slate-500">{r.city}</p>
                    </div>
                    <span className="op-label !text-slate-500 shrink-0">
                      {`+${(i * 7 + 3) % 60}s`}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="px-5 py-3 border-t border-white/[0.06] flex items-center justify-between bg-white/[0.015]">
              <span className="op-label">LATENCIA &lt; 200ms</span>
              <span className="op-label">REGIÓN · LATAM + ES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Stat3({ label, value }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
      <p className="op-label mb-1">{label}</p>
      <p className="font-headline font-black-x text-white text-[22px] sm:text-[26px] tabular leading-none">
        {value}
      </p>
    </div>
  );
}

/* ============================================================ CODE */
function CodeSection() {
  const yes = [
    "Quieres un sistema, no más motivación vacía",
    "Disciplina sobre dopamina barata",
    "Seguimiento real, no impresiones",
    "Pides exigencia, no aplausos",
  ];
  const no = [
    "Buscas una app que te haga feliz por defecto",
    "Quieres algo fácil",
    "No piensas hacer el trabajo",
    "Necesitas excusas, no resultados",
  ];
  return (
    <section
      id="codigo"
      className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <SectionHeader
          eyebrow="El código"
          title={
            <>
              No es para todos.{" "}
              <br className="hidden sm:block" />
              <span className="text-slate-500">Es para operadores.</span>
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.07] rounded-3xl overflow-hidden border border-white/[0.08]">
          <CodePanel kind="yes" items={yes} />
          <CodePanel kind="no" items={no} />
        </div>
      </div>
    </section>
  );
}
function CodePanel({ kind, items }) {
  const isYes = kind === "yes";
  return (
    <div
      className={`p-7 sm:p-12 md:p-14 ${
        isYes ? "bg-brand-void" : "bg-slate-950/60"
      } relative`}
    >
      <div className="flex items-center gap-3 mb-8 sm:mb-10">
        <span
          className={`w-8 h-px ${isYes ? "bg-brand-primary" : "bg-slate-700"}`}
        />
        <h3
          className={`font-headline font-bold text-[20px] sm:text-[22px] tracking-tight ${
            isYes ? "text-white" : "text-slate-500"
          }`}
        >
          {isYes ? "Es para ti si…" : "No es para ti si…"}
        </h3>
      </div>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3.5">
            <Icon
              name={isYes ? "check_circle" : "cancel"}
              fill={isYes}
              className={`mt-0.5 text-[22px] shrink-0 ${
                isYes ? "text-brand-primarySoft" : "text-slate-700"
              }`}
            />
            <span
              className={`text-[15px] sm:text-[17px] leading-snug ${
                isYes ? "text-slate-200 font-medium" : "text-slate-500"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================ FINAL CTA */
function FinalCta() {
  return (
    <section
      id="descargar"
      className="relative py-28 sm:py-40 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] primary-halo pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-grid-fine opacity-30 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative">
        <Eyebrow color="primary">Activar protocolo</Eyebrow>
        <h2 className="mt-6 font-headline font-black-x text-white tracking-brutalTight leading-[0.95] text-[44px] sm:text-[64px] md:text-[80px]">
          El protocolo no se descarga. <br className="hidden sm:block" />
          <span className="text-gradient-primary">Se ejecuta.</span>
        </h2>
        <p className="mt-6 op-label">
          Beta cerrada · Cupos limitados · Acceso revisado manualmente
        </p>
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
          <PrimaryCTA href="#android-beta" icon={<AndroidIcon />}>
            Unirme a Beta Android
          </PrimaryCTA>
          <GhostCTA
            href="https://testflight.apple.com/join/8xVm9pBu"
            external
            icon={<AppleIcon />}
          >
            Unirme en TestFlight
          </GhostCTA>
        </div>

        <div className="mt-14 flex items-center justify-center gap-8 flex-wrap">
          <FinalStat label="Cupos restantes" value={<LiveCounter end={247} />} />
          <span className="w-px h-8 bg-white/10 hidden sm:block" />
          <FinalStat label="Operadores activos" value={<LiveCounter end={1247} format={(n) => n.toLocaleString("es-MX")} />} />
          <span className="w-px h-8 bg-white/10 hidden sm:block" />
          <FinalStat label="Tiempo activo" value="06:14:37" mono />
        </div>
      </div>
    </section>
  );
}
function FinalStat({ label, value, mono = false }) {
  return (
    <div className="text-center">
      <p className="op-label mb-1">{label}</p>
      <p
        className={`text-white tabular ${
          mono
            ? "font-mono text-[16px] tracking-wider"
            : "font-headline font-black-x text-[22px]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

/* ============================================================ FOOTER */
function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] py-14 sm:py-16 bg-slate-950/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
        <div className="col-span-2 md:col-span-1">
          <Wordmark />
          <p className="op-label mt-5 leading-relaxed">
            Sistema operativo<br/>para tu disciplina.
          </p>
        </div>
        <FooterCol title="Producto">
          <FooterLink href="#sistema">Pilares</FooterLink>
          <FooterLink href="#proceso">Proceso</FooterLink>
          <FooterLink href="#codigo">Código</FooterLink>
          <FooterLink href="#descargar">Descargar</FooterLink>
        </FooterCol>
        <FooterCol title="Comunidad">
          <FooterLink href="#">Discord</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
          <FooterLink href="#">X</FooterLink>
        </FooterCol>
        <FooterCol title="Legal">
          <FooterLink href="/privacy">Privacidad</FooterLink>
          <FooterLink href="/terms">Términos</FooterLink>
          <FooterLink href="mailto:cornugs@gmail.com">Contacto</FooterLink>
        </FooterCol>
      </div>
      <div className="mt-12 pt-6 border-t border-white/[0.04] max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="op-label">© 2026 Cornugs · Todos los derechos reservados</p>
        <p className="op-label">activateprotocol.com</p>
      </div>
    </footer>
  );
}
function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="op-label mb-5 !text-brand-primarySoft">{title}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}
function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-slate-500 hover:text-white transition-colors text-[13px] font-medium"
      >
        {children}
      </a>
    </li>
  );
}

Object.assign(window, {
  Nav,
  Hero,
  Manifesto,
  Pillars,
  Versus,
  Process,
  Operators,
  CodeSection,
  FinalCta,
  Footer,
});
