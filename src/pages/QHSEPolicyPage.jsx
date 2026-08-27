import Reveal from '../components/Reveal.jsx'

/* Inline pillar icons (stroke, inherit currentColor) */
const IconQuality = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="M9 13.5L7 22l5-3 5 3-2-8.5" />
  </svg>
)
const IconHealth = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20.8 8.6a5 5 0 0 0-8.8-3.2 5 5 0 0 0-8.8 3.2c0 4.5 5.6 8.4 8.8 10.9 3.2-2.5 8.8-6.4 8.8-10.9z" />
    <path d="M8 11h2l1.5-2.5L13 13l1-2h2" />
  </svg>
)
const IconSafety = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)
const IconEnvironment = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M21 3s-8-1-13 4C4 11 4 17 4 20" />
    <path d="M4 20c8 0 15-4 16-14" />
    <path d="M8 15c3 0 6-1 8-4" />
  </svg>
)

const PILLARS = [
  { icon: IconQuality, title: 'Quality', text: 'Highest standards that meet and exceed client expectations.' },
  { icon: IconHealth, title: 'Health', text: 'A safe and healthy workplace for everyone on site.' },
  { icon: IconSafety, title: 'Safety', text: 'Proactive risk management to prevent incidents and injuries.' },
  { icon: IconEnvironment, title: 'Environment', text: 'Minimising waste, pollution, and environmental impact.' },
]

const COMMITMENTS = [
  'Delivering projects that meet the highest quality standards and client expectations.',
  'Providing a safe and healthy work environment for employees, clients, contractors, and the public.',
  'Complying with all applicable legal, regulatory, and industry requirements.',
  'Preventing incidents, injuries, and occupational hazards through proactive risk management.',
  'Protecting the environment by minimizing waste, pollution, and environmental impacts.',
  'Promoting continuous improvement through training, innovation, and performance evaluation.',
]

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default function QHSEPolicyPage() {
  return (
    <div className="pt-20">
      {/* Header with QHSE emblem */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        {/* Decorative background: soft orange glows + faint diagonal texture */}
        <div
          className="absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(45deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_24px)]"
          aria-hidden="true"
        />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-24 bottom-[-6rem] h-80 w-80 rounded-full bg-orange/10 blur-3xl" aria-hidden="true" />

        <div className="container-x relative z-10 flex flex-col items-center text-center">
          {/* Emblem: shield with a check */}
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange shadow-card">
            <svg className="h-11 w-11 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5z" />
              <path d="M9 11.5l2 2 4-4" />
            </svg>
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange">Our Commitment</p>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">QHSE Policy</h1>
          <p className="mt-4 text-lg text-white/80">Quality · Health · Safety · Environment</p>
        </div>
      </section>

      {/* Four pillars */}
      <section className="section bg-cloud">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
                    {/* Themed background: faded version of the element's own icon */}
                    <Icon className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 text-navy/[0.06] transition-transform duration-500 group-hover:scale-110" />
                    <div className="relative z-10">
                      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-bold">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-light/75">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Policy statement */}
      <section className="section">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl">
            <span className="eyebrow">Policy Statement</span>
            <p className="mt-3 text-lg leading-relaxed text-navy-light/85">
              At AL-NOWAISER For Trading &amp; Contracting Co., Quality, Health, Safety, and
              Environmental (QHSE) excellence is an integral part of our business operations and
              corporate culture. We are committed to:
            </p>

            <ul className="mt-8 space-y-4">
              {COMMITMENTS.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl bg-cloud p-4">
                  <CheckIcon />
                  <span className="text-navy-light/85">{c}</span>
                </li>
              ))}
            </ul>

            {/* Management commitment */}
            <div className="mt-8 rounded-2xl border-l-4 border-orange bg-navy p-6 text-white shadow-card">
              <p className="leading-relaxed text-white/90">
                Management is committed to providing the necessary resources, leadership, and
                support to ensure the effective implementation of our QHSE objectives across all
                projects and operations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
