import { useState } from 'react'
import Reveal from './Reveal.jsx'
import Modal from './Modal.jsx'
import PdfDoc from './PdfDoc.jsx'
import { certificates } from '../data/content.js'

function ZoomIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
    </svg>
  )
}

export default function Certificates() {
  const [selected, setSelected] = useState(null)
  const [zoom, setZoom] = useState(1)

  const openCert = (cert) => {
    setZoom(1)
    setSelected(cert)
  }
  const zoomIn = () => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)))
  const zoomOut = () => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))

  const ctrlBtn =
    'flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-lg font-bold text-navy transition-colors hover:border-orange hover:text-orange disabled:opacity-40'

  return (
    <section id="certificates" className="section">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Accreditations</span>
          <h2 className="text-3xl font-bold sm:text-4xl">Certificates &amp; certifications</h2>
          <p className="mt-4 text-lg text-navy-light/75">
            Our accreditations reflect a deep commitment to quality, safety, and compliance. Click a
            certificate to zoom in.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.pdf} delay={(i % 3) * 90}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
                <button
                  onClick={() => openCert(cert)}
                  className="group relative block cursor-zoom-in bg-cloud p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                  aria-label={`Zoom ${cert.title}`}
                >
                  <PdfDoc url={cert.pdf} maxPages={1} className="overflow-hidden rounded-lg" />
                  <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-navy/80 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIcon className="h-5 w-5" />
                  </span>
                </button>
                <div className="flex items-center justify-between gap-3 border-t border-slate-100 p-5">
                  <h3 className="text-sm font-bold leading-snug">{cert.title}</h3>
                  <a href={cert.pdf} download className="btn-outline-navy shrink-0 px-4 py-2 text-xs">
                    Download
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Zoom lightbox */}
      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title} maxWidth="max-w-5xl">
        {selected && (
          <div className="flex flex-col">
            {/* Zoom toolbar */}
            <div className="sticky top-0 z-10 flex items-center justify-center gap-3 border-b border-slate-100 bg-white/95 py-3 backdrop-blur">
              <button onClick={zoomOut} disabled={zoom <= 1} className={ctrlBtn} aria-label="Zoom out">
                −
              </button>
              <span className="w-14 text-center text-sm font-semibold text-navy">{Math.round(zoom * 100)}%</span>
              <button onClick={zoomIn} disabled={zoom >= 3} className={ctrlBtn} aria-label="Zoom in">
                +
              </button>
              <button
                onClick={() => setZoom(1)}
                className="ml-2 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-orange hover:text-orange"
              >
                Reset
              </button>
            </div>

            {/* Scrollable, zoomable document */}
            <div className="overflow-auto bg-cloud p-4" style={{ maxHeight: '70vh' }}>
              <div style={{ width: `${zoom * 100}%`, transition: 'width 0.2s ease' }}>
                <PdfDoc url={selected.pdf} className="rounded-lg" />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
