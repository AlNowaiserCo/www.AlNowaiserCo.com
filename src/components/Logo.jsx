/**
 * Logo — the Al-Nowaiser emblem + wordmark lockup.
 * Emblem image lives at public/logo-emblem.png (the orange mark only).
 * The company name is set as text beside it.
 *   - variant="dark"  → navy text  (use on light backgrounds, e.g. the navbar)
 *   - variant="light" → white text (use on the navy footer)
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const light = variant === 'light'
  const nameColor = light ? 'text-white' : 'text-navy'
  const subColor = light ? 'text-white/70' : 'text-navy/70'

  return (
    <span className={`flex items-center gap-3 ${className}`} aria-label="Al-Nowaiser Trading & Contracting Co.">
      <img src="/logo-emblem.png" alt="Al-Nowaiser" className="h-12 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-2xl font-extrabold tracking-tight ${nameColor}`}>Al-Nowaiser</span>
        <span className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${subColor}`}>
          Trading &amp; Contracting Co.
        </span>
      </span>
    </span>
  )
}
