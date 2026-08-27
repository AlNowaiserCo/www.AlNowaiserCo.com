import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — adds an `is-visible` state the first time the element scrolls
 * into view. Pair the returned ref with the `.reveal` CSS class (see index.css)
 * for a fade/slide-in-on-scroll effect.
 *
 * @param {Object} options
 * @param {number} options.threshold  How much of the element must be visible (0-1).
 * @param {string} options.rootMargin Margin around the viewport for early triggering.
 */
export default function useReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // No IntersectionObserver (or reduced motion handled in CSS) -> show immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target) // reveal once, then stop watching
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible]
}
