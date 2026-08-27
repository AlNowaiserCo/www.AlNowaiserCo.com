import { useState, useMemo } from 'react'
import Reveal from './Reveal.jsx'
import Modal from './Modal.jsx'
import { IconPin } from './Icons.jsx'
import { projects, PROJECT_CATEGORIES } from '../data/content.js'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null) // project opened in detail modal

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="section bg-cloud">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Work</span>
          <h2 className="text-3xl font-bold sm:text-4xl">Achieved projects</h2>
          <p className="mt-4 text-lg text-navy-light/75">
            A selection of completed projects spanning turn-key projects, maintenance, and
            infrastructure.
          </p>
        </Reveal>

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-orange text-white shadow-card'
                  : 'bg-white text-navy-light/80 hover:text-orange'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid (text-only cards) */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={`${project.name}-${project.location}`} delay={(i % 3) * 90}>
              <button
                onClick={() => setSelected(project)}
                className="group flex h-full w-full flex-col rounded-2xl border-l-4 border-orange bg-white p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              >
                <span className="w-fit rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                  {project.category}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug">{project.name}</h3>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-navy-light/70">
                  <IconPin className="h-4 w-4 shrink-0 text-orange" />
                  {project.location}
                </p>
                {project.description && (
                  <p className="mt-3 text-sm leading-relaxed text-navy-light/75">{project.description}</p>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Detail modal (text-only) */}
      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name} maxWidth="max-w-2xl">
        {selected && (
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-orange/10 px-3 py-1 font-semibold text-orange">
                {selected.category}
              </span>
              <span className="flex items-center gap-1.5 text-navy-light/70">
                <IconPin className="h-4 w-4 text-orange" />
                {selected.location}
              </span>
            </div>
            {selected.description && (
              <p className="mt-4 leading-relaxed text-navy-light/80">{selected.description}</p>
            )}
          </div>
        )}
      </Modal>
    </section>
  )
}
