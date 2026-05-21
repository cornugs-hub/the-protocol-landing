import { useEffect, useRef, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "section" | "li"
}

export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("is-in"), delay)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  const cls = `reveal ${className}`
  if (as === "section") {
    return <section ref={ref as React.RefObject<HTMLElement>} className={cls}>{children}</section>
  }
  if (as === "li") {
    return <li ref={ref as React.RefObject<HTMLLIElement>} className={cls}>{children}</li>
  }
  return <div ref={ref as React.RefObject<HTMLDivElement>} className={cls}>{children}</div>
}
