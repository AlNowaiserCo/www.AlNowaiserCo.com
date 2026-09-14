import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { services } from '../data/content.js'

/* Multi-page menu:
   Home · Our Company ▾ · Our Offering ▾ · Careers · Contact Us
   Each item links to its own route. */
const COMPANY_ITEMS = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/company-profile', label: 'Company Profile' },
  { to: '/qhse-policy', label: 'QHSE Policy' },
]
// "Our Offering" lists the services; each links to its own detail page.
const OFFERING_ITEMS = services.map((s) => ({ to: `/offering/${s.slug}`, label: s.title }))

const COMPANY_PATHS = ['/about', '/projects', '/certificates', '/company-profile', '/qhse-policy']

function Chevron({ className = '' }) {
  return (
    <svg className={`h-4 w-4 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false) // mobile menu
  const [mobileGroup, setMobileGroup] = useState(null) // 'company' | 'offering'
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
    setMobileGroup(null)
  }, [pathname])

  const companyActive = COMPANY_PATHS.includes(pathname)
  const offeringActive = pathname === '/services' || pathname.startsWith('/offering')

  const topItem = 'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-orange'
  const cls = (on) => (on ? 'text-orange' : 'text-navy')
  const underline = (on) =>
    `absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-orange transition-transform duration-300 ${
      on ? 'scale-x-100' : 'scale-x-0'
    }`

  // Solid header on inner pages; slightly translucent over the hero at the top
  const solid = !onHome || scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-2 border-orange bg-white transition-all duration-300 ${
        solid ? 'shadow-md' : ''
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        {/* Logo (left) */}
        <Link
          to="/"
          className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
          aria-label="Al-Nowaiser home"
        >
          <Logo variant="dark" />
        </Link>

        {/* Desktop menu (right) */}
        <ul className="hidden items-center gap-1 lg:flex">
          <li>
            <Link to="/" className={`${topItem} ${cls(onHome)}`}>
              Home
              <span className={underline(onHome)} />
            </Link>
          </li>

          {/* Our Company */}
          <li className="group relative">
            <button className={`${topItem} inline-flex items-center gap-1 ${cls(companyActive)}`} aria-haspopup="true">
              Our Company
              <Chevron className="transition-transform duration-300 group-hover:rotate-180" />
              <span className={underline(companyActive)} />
            </button>
            <DesktopDropdown items={COMPANY_ITEMS} />
          </li>

          {/* Our Offering */}
          <li className="group relative">
            <button className={`${topItem} inline-flex items-center gap-1 ${cls(offeringActive)}`} aria-haspopup="true">
              Our Offering
              <Chevron className="transition-transform duration-300 group-hover:rotate-180" />
              <span className={underline(offeringActive)} />
            </button>
            <DesktopDropdown items={OFFERING_ITEMS} />
          </li>

          <li>
            <Link to="/gallery" className={`${topItem} ${cls(pathname === '/gallery')}`}>
              Gallery
              <span className={underline(pathname === '/gallery')} />
            </Link>
          </li>

          <li>
            <Link to="/careers" className={`${topItem} ${cls(pathname === '/careers')}`}>
              Careers
              <span className={underline(pathname === '/careers')} />
            </Link>
          </li>

          <li>
            <Link to="/contact" className={`${topItem} ${cls(pathname === '/contact')}`}>
              Contact Us
              <span className={underline(pathname === '/contact')} />
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[40rem]' : 'max-h-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          <li>
            <Link to="/" className="block rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-cloud hover:text-orange">
              Home
            </Link>
          </li>

          <MobileGroup
            label="Our Company"
            openState={mobileGroup === 'company'}
            onToggle={() => setMobileGroup((g) => (g === 'company' ? null : 'company'))}
            items={COMPANY_ITEMS}
          />

          <MobileGroup
            label="Our Offering"
            openState={mobileGroup === 'offering'}
            onToggle={() => setMobileGroup((g) => (g === 'offering' ? null : 'offering'))}
            items={OFFERING_ITEMS}
          />

          <li>
            <Link to="/gallery" className="block rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-cloud hover:text-orange">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/careers" className="block rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-cloud hover:text-orange">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-cloud hover:text-orange">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

/* Desktop dropdown — clean white vertical list beneath the item */
function DesktopDropdown({ items }) {
  return (
    <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <ul className="min-w-[230px] overflow-hidden rounded-xl bg-white py-2 shadow-2xl ring-1 ring-black/5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className="block px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-cloud hover:text-orange"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* Mobile collapsible group */
function MobileGroup({ label, openState, onToggle, items }) {
  return (
    <li>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-navy transition-colors hover:bg-cloud hover:text-orange"
        aria-expanded={openState}
      >
        {label}
        <Chevron className={`transition-transform duration-300 ${openState ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-[max-height] duration-300 ${openState ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="ml-3 border-l border-slate-200 pl-3">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="block rounded-lg px-3 py-2.5 text-sm text-navy-light/70 transition-colors hover:bg-cloud hover:text-orange"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
