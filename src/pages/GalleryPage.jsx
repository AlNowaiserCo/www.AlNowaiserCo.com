import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Modal from '../components/Modal.jsx'

// Gallery images (real Al-Nowaiser project photos). Add more by dropping files
// in /public and adding an entry here.
const IMAGES = [
  { src: '/services/power-transmission.jpg', caption: 'Power transmission & distribution' },
  { src: '/services/general-contracting.jpg', caption: '132 kV substation construction' },
  { src: '/services/infrastructure.jpg', caption: 'Underground utilities & infrastructure' },
  { src: '/services/civil-work.jpg', caption: 'Civil works' },
  { src: '/services/roads-lighting.jpg', caption: 'Roads & lighting' },
  { src: '/services/operation-maintenance.jpg', caption: 'Cable jointing & terminations' },
  { src: '/services/maintenance.jpg', caption: 'Transmission line works' },
  { src: '/services/testing-commissioning.jpg', caption: 'Testing & commissioning' },
  { src: '/services/mep-works.jpg', caption: 'Fire-fighting & HVAC systems' },
  { src: '/hero.jpg', caption: 'Power network at sunset' },
]

export default function GalleryPage() {
  const [index, setIndex] = useState(null)
  const open = index !== null
  const current = open ? IMAGES[index] : null
  const prev = (e) => {
    e?.stopPropagation()
    setIndex((i) => (i + IMAGES.length - 1) % IMAGES.length)
  }
  const next = (e) => {
    e?.stopPropagation()
    setIndex((i) => (i + 1) % IMAGES.length)
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative overflow-hidden bg-navy py-20 text-white">
        <div
          className="absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(45deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_24px)]"
          aria-hidden="true"
        />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange/20 blur-3xl" aria-hidden="true" />
        <div className="container-x relative z-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange">Gallery</p>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Our work in pictures</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            A look at Al-Nowaiser projects across power, infrastructure, and construction.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section bg-cloud">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {IMAGES.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 70}>
                <button
                  onClick={() => setIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                  aria-label={`View: ${img.caption}`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="p-4 text-left text-sm font-semibold text-white">{img.caption}</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Modal open={open} onClose={() => setIndex(null)} title={current?.caption} maxWidth="max-w-4xl">
        {current && (
          <div className="relative bg-navy-deep">
            <img src={current.src} alt={current.caption} className="mx-auto max-h-[75vh] w-auto" />
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-navy transition-colors hover:bg-orange hover:text-white"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-navy transition-colors hover:bg-orange hover:text-white"
            >
              ›
            </button>
          </div>
        )}
      </Modal>
    </div>
  )
}
