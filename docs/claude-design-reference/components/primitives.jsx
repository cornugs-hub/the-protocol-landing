/* Shared visual primitives and small interactive helpers */
const { useEffect, useRef, useState, useMemo } = React;

/* Material Symbols icon */
function Icon({ name, className = "", fill = false, style }) {
  return (
    <span
      className={`material-symbols-outlined ${fill ? "ms-fill" : ""} ${className}`}
      style={style}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

/* Compass logo — 4 colored kunai/diamonds in N/E/S/W formation, purple core.
   This is the live app's icon, distilled. */
function CompassLogo({ size = 28, glow = true, className = "" }) {
  const s = size;
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: s, height: s }}
      aria-hidden="true"
    >
      {glow && (
        <span
          className="absolute inset-0 rounded-[28%] blur-[10px] opacity-70"
          style={{ background: "radial-gradient(circle, rgba(108,92,231,0.55), transparent 65%)" }}
        />
      )}
      <svg
        viewBox="0 0 100 100"
        width={s}
        height={s}
        className="relative"
      >
        {/* Faint ring around core */}
        <circle cx="50" cy="50" r="18" fill="none" stroke="rgba(140,126,242,0.35)" strokeWidth="0.8" />
        {/* North · BODY · red */}
        <polygon points="50,4 56,34 50,48 44,34" fill="#FF4757" />
        {/* East · MIND · cyan */}
        <polygon points="96,50 66,56 52,50 66,44" fill="#22C5E8" />
        {/* South · FUEL · green */}
        <polygon points="50,96 44,66 50,52 56,66" fill="#2ED573" />
        {/* West · SPIRIT · purple */}
        <polygon points="4,50 34,44 48,50 34,56" fill="#A06CFF" />
        {/* Core */}
        <circle cx="50" cy="50" r="5" fill="#6C5CE7" />
        <circle cx="50" cy="50" r="2" fill="#B1A5F6" />
      </svg>
    </span>
  );
}

/* Wordmark — compass logo + THE PROTOCOL */
function Wordmark({ size = "md", withLogo = true }) {
  const cls = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-[17px]";
  const logoSize = size === "sm" ? 22 : size === "lg" ? 36 : 26;
  return (
    <span className="inline-flex items-center gap-2.5">
      {withLogo && <CompassLogo size={logoSize} />}
      <span
        className={`font-headline font-black-x tracking-tightest text-white ${cls}`}
      >
        THE&nbsp;PROTOCOL
      </span>
    </span>
  );
}

/* Eyebrow label — small mono caps */
function Eyebrow({ children, color = "primary", dot = true, className = "" }) {
  const colorMap = {
    primary: "text-brand-primarySoft border-brand-primary/25 bg-brand-primary/[0.06]",
    gold: "text-brand-gold border-brand-gold/30 bg-brand-gold/[0.06]",
    fuel: "text-brand-fuel border-brand-fuel/30 bg-brand-fuel/[0.06]",
    body: "text-brand-body border-brand-body/30 bg-brand-body/[0.06]",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border ${colorMap[color]} font-mono text-[10px] tracking-[0.22em] uppercase ${className}`}
    >
      {dot && (
        <span
          className={`w-1 h-1 rounded-full ${
            color === "primary"
              ? "bg-brand-primary"
              : color === "gold"
              ? "bg-brand-gold"
              : color === "fuel"
              ? "bg-brand-fuel"
              : "bg-brand-body"
          }`}
        />
      )}
      {children}
    </span>
  );
}

/* CTA pill buttons */
function PrimaryCTA({ href, onClick, children, icon, className = "" }) {
  const inner = (
    <>
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span>{children}</span>
    </>
  );
  const cls = `btn-primary inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-headline font-bold text-white text-[15px] tracking-tight ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

function GhostCTA({ href, onClick, children, icon, className = "", external = false }) {
  const inner = (
    <>
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span>{children}</span>
    </>
  );
  const cls = `btn-ghost inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-headline font-bold text-white text-[15px] tracking-tight ${className}`;
  return (
    <a
      href={href || "#"}
      onClick={onClick}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  );
}

/* Vendor icons */
function AppleIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
function AndroidIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
    </svg>
  );
}

/* Live counter that ticks up subtly */
function LiveCounter({ start = 0, end, suffix = "", duration = 1600, decimals = 0, format = (n) => n }) {
  const [val, setVal] = useState(start);
  const ref = useRef(null);
  const startedRef = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const t0 = performance.now();
            const tick = (t) => {
              const p = Math.min(1, (t - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(start + (end - start) * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, start, duration]);
  return (
    <span ref={ref} className="tabular">
      {format(decimals ? val.toFixed(decimals) : Math.round(val))}
      {suffix}
    </span>
  );
}

/* Reveal-on-scroll wrapper */
function Reveal({ children, delay = 0, as: As = "div", className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("is-in"), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <As ref={ref} className={`reveal ${className}`}>
      {children}
    </As>
  );
}

/* Section header (eyebrow + headline + optional lead) */
function SectionHeader({ eyebrow, title, lead, align = "center" }) {
  const alignCls = align === "left" ? "text-left items-start" : "text-center mx-auto items-center";
  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl gap-5 mb-14 sm:mb-20`}>
      <Eyebrow color="primary">{eyebrow}</Eyebrow>
      <h2 className="font-headline font-black-x text-[40px] sm:text-[56px] md:text-[68px] leading-[0.96] tracking-brutalTight text-white">
        {title}
      </h2>
      {lead && (
        <p className="text-slate-400 text-[15px] sm:text-base md:text-lg max-w-2xl leading-relaxed">
          {lead}
        </p>
      )}
    </div>
  );
}

/* Cross-hatch corner ticks */
function CornerTicks() {
  const tick = "absolute w-2.5 h-2.5 border-white/15";
  return (
    <>
      <span className={`${tick} top-0 left-0 border-t border-l`} />
      <span className={`${tick} top-0 right-0 border-t border-r`} />
      <span className={`${tick} bottom-0 left-0 border-b border-l`} />
      <span className={`${tick} bottom-0 right-0 border-b border-r`} />
    </>
  );
}

Object.assign(window, {
  Icon,
  Wordmark,
  CompassLogo,
  Eyebrow,
  PrimaryCTA,
  GhostCTA,
  AppleIcon,
  AndroidIcon,
  LiveCounter,
  Reveal,
  SectionHeader,
  CornerTicks,
});
