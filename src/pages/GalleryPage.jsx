import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from '../components/Modal.jsx'
import { galleryCategories } from '../data/content.js'

export default function GalleryPage() {
  const { slug } = useParams()
  const category = galleryCategories.find((c) => c.slug === slug) || galleryCategories[0]
  const images = category?.images || []
  const [index, setIndex] = useState(null)
  const open = index !== null
  const prev = (e) => {
    e?.stopPropagation()
    setIndex((i) => (i + images.length - 1) % images.length)
  }
  const next = (e) => {
    e?.stopPropagation()
    setIndex((i) => (i + 1) % images.length)
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
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{category?.title || 'Gallery'}</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="section bg-cloud">
        <div className="container-x">
          {images.length === 0 ? (
            <p className="text-center text-navy-light/60">Photos coming soon.</p>
          ) : (
            <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setIndex(i)}
                  className="group mb-4 block w-full overflow-hidden rounded-2xl bg-white shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-orange sm:mb-6"
                  aria-label="View photo"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Modal open={open} onClose={() => setIndex(null)} title={category?.title} maxWidth="max-w-4xl">
        {open && (
          <div className="relative bg-navy-deep">
            <img src={images[index]} alt="" className="mx-auto max-h-[75vh] w-auto" />
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-navy transition-colors hover:bg-orange hover:text-white"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next"
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
