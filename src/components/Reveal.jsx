import useReveal from '../hooks/useReveal.js'

/**
 * Reveal — wraps children in a div that fades/slides in on scroll.
 * Use `delay` (ms) to stagger sibling elements.
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
