const PDF = '/company-profile.pdf'

// "Our Company → Company Profile" page — embeds the company profile PDF.
export default function CompanyProfilePage() {
  return (
    <div className="pt-20">
      <section className="section bg-cloud">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">About the Company</span>
            <h1 className="text-3xl font-bold sm:text-4xl">Company Profile</h1>
            <p className="mt-4 text-lg text-navy-light/75">
              Explore our full company profile below, or open it in a new tab / download a copy.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href={PDF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Open in new tab
              </a>
              <a href={PDF} download className="btn-outline-navy">
                Download PDF
              </a>
            </div>
          </div>

          {/* Embedded PDF viewer */}
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <iframe
              src={`${PDF}#view=FitH`}
              title="Al-Nowaiser Company Profile"
              className="h-[80vh] w-full"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
