import { useState } from 'react'
import Reveal from './Reveal.jsx'

/**
 * LogoTile — shows a logo image if `logo` is set and loads successfully;
 * otherwise falls back to the company name as clean text.
 */
function LogoTile({ item }) {
  const [showText, setShowText] = useState(!item.logo)
  return (
    <div className="flex h-28 items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {showText ? (
        <span className="text-sm font-bold leading-snug text-navy-light/80">{item.name}</span>
      ) : (
        <img
          src={item.logo}
          alt={item.name}
          onError={() => setShowText(true)}
          className="max-h-16 w-auto object-contain"
          loading="lazy"
        />
      )}
    </div>
  )
}

/**
 * LogoWall — responsive grid of logo/name tiles. Reused for "Success Partners"
 * and "Clients" on the Home page. Each item is { name, logo? }.
 */
export default function LogoWall({ eyebrow, title, subtitle, items, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-navy-light/75">{subtitle}</p>}
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 5) * 60}>
              <LogoTile item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
