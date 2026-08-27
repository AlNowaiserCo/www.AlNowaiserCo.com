import Reveal from './Reveal.jsx'
import { company } from '../data/content.js'
import { IconPhone, IconMail, IconPin, IconClock } from './Icons.jsx'

export default function Contact() {
  const telHref = (n) => `tel:${n.replace(/[^\d+]/g, '')}`
  const contactItems = [
    {
      icon: IconPhone,
      label: 'Phone',
      lines: [
        { text: `Tel: ${company.phone}`, href: telHref(company.phone) },
        { text: `Fax: ${company.fax}` },
      ],
    },
    { icon: IconMail, label: 'Email', lines: [{ text: company.email, href: `mailto:${company.email}` }] },
    { icon: IconPin, label: 'Address', lines: [{ text: company.address }] },
    { icon: IconClock, label: 'Business Hours', lines: [{ text: company.hours }] },
  ]

  return (
    <section id="contact" className="section bg-cloud">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="text-3xl font-bold sm:text-4xl">Contact &amp; location</h2>
          <p className="mt-4 text-lg text-navy-light/75">
            Have a project in mind or a supply requirement? Reach out — our team will respond promptly.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          {/* Contact details */}
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map(({ icon: Icon, label, lines }) => (
                <div key={label} className="rounded-2xl bg-white p-5 shadow-card">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-bold text-navy">{label}</div>
                  <div className="mt-1 space-y-0.5">
                    {lines.map((ln, idx) =>
                      ln.href ? (
                        <a key={idx} href={ln.href} className="block text-sm text-navy-light/75 hover:text-orange">
                          {ln.text}
                        </a>
                      ) : (
                        <p key={idx} className="text-sm text-navy-light/75">
                          {ln.text}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Google Map embed */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl shadow-card">
              <iframe
                title="Company location map"
                src={company.mapEmbedSrc}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
