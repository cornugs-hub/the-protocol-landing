import { Link } from "react-router-dom"

export function FinalCta() {
  return (
    <section
      id="descargar"
      className="py-20 sm:py-28 md:py-32 px-5 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] primary-halo pointer-events-none opacity-50" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-headline font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter mb-6 sm:mb-8 leading-[1.05]">
          El protocolo no se descarga. <br className="hidden sm:block" />
          Se ejecuta.
        </h2>
        <p className="font-headline font-medium text-brand-primarySoft tracking-widest text-[10px] sm:text-xs md:text-sm uppercase mb-8 sm:mb-12 px-2">
          Beta · Gratis durante el acceso anticipado
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          <Link
            to="/android-beta"
            className="inline-flex items-center justify-center gap-3 bg-primary-gradient px-8 py-4 rounded-full font-headline font-bold text-white shadow-xl shadow-purple-700/30 hover:scale-105 transition-transform text-sm sm:text-base sm:min-w-[260px]"
          >
            <CtaAndroidIcon />
            Unirme a Beta Android
          </Link>
          <a
            href="https://testflight.apple.com/join/8xVm9pBu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/5 backdrop-blur px-8 py-4 rounded-full font-headline font-bold text-white hover:border-brand-primary/50 hover:bg-white/10 transition-all text-sm sm:text-base sm:min-w-[260px]"
          >
            <CtaAppleIcon />
            Unirme en TestFlight
          </a>
        </div>
      </div>
    </section>
  )
}

function CtaAppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

function CtaAndroidIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
    </svg>
  )
}
