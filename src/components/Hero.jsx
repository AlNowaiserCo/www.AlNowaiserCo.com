import { Link } from 'react-router-dom'
import { IconArrowRight } from './Icons.jsx'

/**
 * Hero — full-width banner with background image + navy overlay.
 * Swap the background image URL below (or use a local /public path).
 */
export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center">
      {/* Background image.
          Drop your photo at public/hero.jpg to use it here. A navy fallback
          colour shows if the file isn't present yet, so the hero never breaks. */}
      <div
        className="absolute inset-0 animate-kenburns bg-cover bg-center"
        style={{
          backgroundColor: '#16243F',
          backgroundImage: "url('/hero.jpg')",
        }}
        aria-hidden="true"
      />
      {/* Navy overlay — dark on the left for text contrast, fading toward the
          right so the sunset in the photo shows through. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/70 to-navy/25"
        aria-hidden="true"
      />

      <div className="container-x relative z-10 py-32 text-white">
        <div className="max-w-3xl">
          <p className="mb-4 animate-fade-in text-sm font-bold uppercase tracking-[0.25em] text-orange">
            Trading &amp; Contracting Excellence
          </p>
          <h1 className="animate-fade-up text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building Excellence,
            <br />
            <span className="text-orange">Delivering Trust</span>
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-up text-lg text-white/80 [animation-delay:120ms]">
            Al-Nowaiser delivers comprehensive engineering and contracting solutions for the energy
            sector, distinguished by superior execution, quality, safety, and innovation, ensuring
            client satisfaction and delivering sustained benefits to all stakeholders.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to="/services" className="btn-primary group">
              Our Services
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/70">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
