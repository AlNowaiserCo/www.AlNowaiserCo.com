import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp — animates a number from 0 up to `end` the first time the
 * element enters the viewport. Returns [ref, displayValue].
 *
 * @param {number} end       Target value to count up to.
 * @param {number} duration  Animation length in milliseconds.
 */
export default function useCountUp(end, duration = 2000) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const runAnimation = () => {
      if (startedRef.current) return
      startedRef.current = true

      const startTime = performance.now()
      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        // easeOutCubic for a natural deceleration
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(eased * end))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    if (typeof IntersectionObserver === 'undefined') {
      runAnimation()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return [ref, value]
}
