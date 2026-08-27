import { Link, useSearchParams } from 'react-router-dom'
import { company } from '../data/content.js'
import { IconMail, IconArrowRight } from '../components/Icons.jsx'

const REQUIREMENTS = [
  'An updated CV / resume (PDF or Word).',
  'The position title in the email subject line.',
  'Your full name, contact number, and years of experience.',
  'A short cover letter explaining why you would be a good fit.',
  'Copies of relevant certificates or qualifications, if available.',
]

function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default function ApplyPage() {
  const [params] = useSearchParams()
  const role = params.get('role')
  const subject = role ? `Job Application — ${role}` : 'Job Application'
  const applyEmails = [...new Set([company.careersEmail, company.email].filter(Boolean))]
  const mailto = `mailto:${applyEmails.join(',')}?subject=${encodeURIComponent(subject)}`

  return (
    <div className="pt-20">
      <section className="section">
        <div className="container-x max-w-3xl">
          <div className="text-center">
            <span className="eyebrow">How to Apply</span>
            <h1 className="text-3xl font-bold sm:text-4xl">{role ? `Apply — ${role}` : 'Apply by Email'}</h1>
            <p className="mt-4 text-lg text-navy-light/75">
              We accept applications by email. Please send your application to the address below,
              including the details listed.
            </p>
          </div>

          {/* Email card */}
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-card">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange/10 text-orange">
              <IconMail className="h-7 w-7" />
            </div>
            <div>
              <div className="text-sm font-semibold text-navy">Send your application to</div>
              <div className="mt-1 space-y-0.5">
                {applyEmails.map((em) => (
                  <a
                    key={em}
                    href={`mailto:${em}?subject=${encodeURIComponent(subject)}`}
                    className="block text-lg font-bold text-orange hover:underline"
                  >
                    {em}
                  </a>
                ))}
              </div>
            </div>
            {role && (
              <p className="text-sm text-navy-light/70">
                Use the subject line: <span className="font-semibold text-navy">{subject}</span>
              </p>
            )}
            <a href={mailto} className="btn-primary group">
              Apply via Email
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Requirements */}
          <div className="mt-10">
            <h2 className="text-xl font-bold">What to include</h2>
            <ul className="mt-4 space-y-3">
              {REQUIREMENTS.map((r) => (
                <li key={r} className="flex items-start gap-3 rounded-xl bg-cloud p-4">
                  <Check />
                  <span className="text-navy-light/85">{r}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-navy-light/60">
              Only shortlisted candidates will be contacted. Thank you for your interest in Al-Nowaiser.
            </p>
            <Link to="/careers" className="btn-outline-navy mt-6">
              Back to open positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
