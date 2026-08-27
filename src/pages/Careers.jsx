import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { IconPin, IconArrowRight, IconMail } from '../components/Icons.jsx'
import { positions } from '../data/content.js'

export default function Careers() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 text-white">
        <div
          className="absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(45deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_24px)]"
          aria-hidden="true"
        />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-24 bottom-[-6rem] h-80 w-80 rounded-full bg-orange/10 blur-3xl" aria-hidden="true" />
        <div className="container-x relative z-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange">Careers</p>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Build your career with us</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Join a team that builds landmarks and lasting relationships. Explore our open roles and
            apply by email.
          </p>
        </div>
      </section>

      {/* Open positions */}
      <section className="section bg-cloud">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Open Positions</span>
            <h2 className="text-3xl font-bold sm:text-4xl">Current opportunities</h2>
            <p className="mt-4 text-navy-light/75">
              Click <span className="font-semibold text-navy">Apply</span> on a role to see how to
              submit your application by email.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {positions.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
                  <span className="w-fit rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                    {p.department}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-navy-light/70">
                    <IconPin className="h-4 w-4 text-orange" />
                    {p.location}
                  </p>
                  <p className="mt-1 text-sm text-navy-light/70">{p.type}</p>
                  <Link
                    to={`/careers/apply?role=${encodeURIComponent(p.title)}`}
                    className="btn-outline-navy group mt-5 w-full"
                  >
                    Apply
                    <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* General application CTA */}
          <Reveal className="mt-12">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <IconMail className="h-6 w-6" />
              </div>
              <p className="text-navy-light/80">
                Don&apos;t see a role that fits? You can still send us your CV for future openings.
              </p>
              <Link to="/careers/apply" className="btn-primary">
                How to Apply
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
