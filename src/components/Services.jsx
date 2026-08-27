import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { services } from '../data/content.js'

/* Overview grid of offerings. Each card links to its own detail page
   (/offering/:slug). Photos come from each service's `image` field, with a
   navy fallback colour if an image fails to load. */
export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Offering</span>
          <h2 className="text-3xl font-bold sm:text-4xl">Comprehensive engineering &amp; contracting services</h2>
          <p className="mt-4 text-lg text-navy-light/75">
            A full spectrum of capabilities delivered under one roof — so your project stays
            coordinated, accountable, and on schedule.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.slug} delay={(i % 3) * 100}>
                <Link
                  to={`/offering/${service.slug}`}
                  className="group relative block h-72 overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundColor: '#16243F', backgroundImage: `url('${service.image}')` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/40 to-navy/5" aria-hidden="true" />
                  <div className="relative flex h-full flex-col justify-end p-6 text-white">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{service.description}</p>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
