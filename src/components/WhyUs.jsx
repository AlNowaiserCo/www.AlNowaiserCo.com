import Reveal from './Reveal.jsx'
import { whyUs } from '../data/content.js'

// "Why Us" — key strengths, shown on the Home page.
export default function WhyUs() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Us</span>
          <h2 className="text-3xl font-bold sm:text-4xl">Why choose Al-Nowaiser</h2>
          <p className="mt-4 text-lg text-navy-light/75">
            Decades of proven delivery, deep energy-sector expertise, and an uncompromising
            commitment to quality and safety.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={(i % 4) * 90}>
                <div className="group h-full rounded-2xl border border-slate-100 bg-cloud p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-orange transition-all duration-300 group-hover:-rotate-6 group-hover:bg-orange group-hover:text-white">
                    <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-navy-light/75">{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
