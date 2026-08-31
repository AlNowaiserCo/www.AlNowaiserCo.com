import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { company } from '../data/content.js'
import { IconPhone, IconMail, IconPin } from './Icons.jsx'

const quickLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Our Offering' },
  { to: '/projects', label: 'Projects' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact Us' },
]

// Minimal social glyphs (inherit currentColor)
const socialIcon = {
  LinkedIn: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4z',
  Instagram:
    'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 10.72a4.22 4.22 0 1 1 0-8.44 4.22 4.22 0 0 1 0 8.44zM18.9 5.6a1.52 1.52 0 1 0 0 3.04 1.52 1.52 0 0 0 0-3.04z',
  X: 'M17.5 3h3l-7.3 8.34L22 21h-6.4l-5-6.54L4.8 21H1.8l7.8-8.92L2 3h6.56l4.52 5.98zm-1.05 16h1.66L7.6 4.7H5.82z',
  Facebook:
    'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z',
}

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Building excellence and delivering trust across construction, infrastructure, and
            trading projects throughout the Kingdom.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-base font-bold text-white">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-orange">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/careers" className="transition-colors hover:text-orange">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-bold text-white">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <IconPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange" />
              <span>{company.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <IconPhone className="h-5 w-5 flex-shrink-0 text-orange" />
              <a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="hover:text-orange">
                Tel: {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconPhone className="h-5 w-5 flex-shrink-0 text-orange" />
              <span>Fax: {company.fax}</span>
            </li>
            <li className="flex items-center gap-3">
              <IconMail className="h-5 w-5 flex-shrink-0 text-orange" />
              <a href={`mailto:${company.email}`} className="hover:text-orange">
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-base font-bold text-white">Work With Us</h4>
          <p className="mt-5 text-sm text-white/60">
            Looking to join our team or partner on a project? We&apos;d love to hear from you.
          </p>
          <Link to="/careers/apply" className="btn-primary mt-5">
            Apply Now
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/50 sm:flex-row">
          <p>© 2026 {company.name} All rights reserved.</p>
          <p>
            Designed &amp; built with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
