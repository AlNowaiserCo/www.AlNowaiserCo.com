import { useState } from 'react'
import Reveal from './Reveal.jsx'
import Modal from './Modal.jsx'
import useCountUp from '../hooks/useCountUp.js'
import { stats, values } from '../data/content.js'

// Single animated stat (counts up when scrolled into view)
function Stat({ value, suffix, label }) {
  const [ref, current] = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-extrabold text-orange sm:text-5xl">
        {current.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-white/80">{label}</div>
    </div>
  )
}

export default function About() {
  const [chartOpen, setChartOpen] = useState(false)

  return (
    <section id="about" className="section bg-cloud">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <img
                src="/about.jpg"
                alt="Al-Nowaiser leadership team in a strategic meeting"
                className="h-[28rem] w-full rounded-2xl object-cover shadow-card"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-orange px-8 py-6 text-white shadow-card sm:block">
                <div className="text-3xl font-extrabold">30+</div>
                <div className="text-sm font-medium">Years of trusted delivery</div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={120}>
            <span className="eyebrow">About the Company</span>
            <h2 className="text-3xl font-bold sm:text-4xl">
              A trusted partner in contracting and trading
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-light/80">
              Al-Nowaiser Company is a leading Saudi Arabian contractor established in the 1970s,
              specializing in the design, construction, and commissioning of power distribution and
              transmission networks. With over four decades of experience, the company also delivers
              infrastructure solutions for telecommunications, water, sanitation, street lighting,
              and building construction. Guided by strong ethical and financial principles, they
              combine a highly skilled workforce with advanced equipment to meet demanding project
              requirements and exceed stakeholder expectations.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-5 shadow-card">
                <h3 className="text-lg font-bold text-orange">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-light/75">
                  To deliver exceptional, safe, and innovative engineering and contracting services
                  that ensure customer satisfaction and long-term stakeholder value.
                </p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-card">
                <h3 className="text-lg font-bold text-orange">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-light/75">
                  To be a leading Saudi Arabian contractor recognized for delivering innovative,
                  sustainable, and reliable infrastructure solutions aligned with Vision 2030.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange/10 font-extrabold text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-light/75">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Organization chart */}
        <Reveal className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Structure</span>
            <h3 className="text-2xl font-bold sm:text-3xl">Organization Chart</h3>
            <p className="mt-3 text-navy-light/75">
              A clear chain of leadership and specialised departments that keep every project
              accountable and well-coordinated.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setChartOpen(true)}
            className="group mx-auto mt-8 block w-full max-w-6xl cursor-zoom-in overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-card transition-shadow duration-300 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-orange sm:p-6"
          >
            <img
              src="/org-chart.png"
              alt="Al-Nowaiser company organization chart"
              className="h-auto w-full rounded-lg"
              loading="lazy"
            />
            <span className="mt-3 flex items-center justify-center gap-1.5 text-sm font-semibold text-orange">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
              </svg>
              Click to enlarge
            </span>
          </button>
        </Reveal>

        {/* Organization chart lightbox */}
        <Modal open={chartOpen} onClose={() => setChartOpen(false)} title="Organization Chart" maxWidth="max-w-6xl">
          <div className="bg-white p-2 sm:p-4">
            <img
              src="/org-chart.png"
              alt="Al-Nowaiser company organization chart"
              className="w-full rounded-lg"
            />
          </div>
        </Modal>
      </div>

      {/* Stats band */}
      <div className="mt-20 bg-navy py-14">
        <div className="container-x grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
