import { useEffect, useRef, useState } from "react"

interface LiveCounterProps {
  start?: number
  end: number
  suffix?: string
  duration?: number
  decimals?: number
  format?: (n: number | string) => string
}

export function LiveCounter({
  start = 0,
  end,
  suffix = "",
  duration = 1600,
  decimals = 0,
  format = (n) => String(n),
}: LiveCounterProps) {
  const [val, setVal] = useState(start)
  const ref = useRef<HTMLSpanElement | null>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const t0 = performance.now()
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / duration)
              const eased = 1 - Math.pow(1 - p, 3)
              setVal(start + (end - start) * eased)
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, start, duration])

  const display = decimals ? val.toFixed(decimals) : Math.round(val)
  return (
    <span ref={ref} className="tabular">
      {format(display)}
      {suffix}
    </span>
  )
}
