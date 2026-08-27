import { useParams, Link } from 'react-router-dom'
import { services } from '../data/content.js'
import { IconArrowRight } from '../components/Icons.jsx'

// Detail page for a single offering (/offering/:slug).
export default function OfferingPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="pt-20">
        <section className="section">
          <div className="container-x text-center">
            <h1 className="text-3xl font-bold">Offering not found</h1>
            <Link to="/services" className="btn-primary mt-6">
              View all offerings
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const Icon = service.icon
  const others = services.filter((s) => s.slug !== slug)

  return (
    <div className="pt-20">
      {/* Photo hero */}
      <section className="relative flex min-h-[42vh] items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundColor: '#16243F', backgroundImage: `url('${service.image}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/70 to-navy/30" aria-hidden="true" />
        <div className="container-x relative z-10 py-12 text-white">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange text-white shadow-lg">
            <Icon className="h-7 w-7" />
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">Our Offering</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">{service.title}</h1>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2">
            <p className="text-xl leading-relaxed text-navy-light/85">{service.description}</p>
            <p className="mt-5 leading-relaxed text-navy-light/75">
              As part of Al-Nowaiser&apos;s integrated engineering and contracting capabilities, our{' '}
              {service.title.toLowerCase()} works are delivered to the highest standards of quality,
              safety, and reliability — from planning and execution through testing and handover.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                Get in Touch
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="btn-outline-navy">
                View all offerings
              </Link>
            </div>
          </div>

          {/* Sidebar: other offerings */}
          <aside>
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-navy">Other offerings</h2>
            <ul className="mt-4 space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to={`/offering/${o.slug}`}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm font-medium text-navy shadow-card transition-colors hover:text-orange"
                  >
                    {o.title}
                    <IconArrowRight className="h-4 w-4 text-orange" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  )
}
