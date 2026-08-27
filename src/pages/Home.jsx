import Hero from '../components/Hero.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Services from '../components/Services.jsx'
import LogoWall from '../components/LogoWall.jsx'
import { partners, clients } from '../data/content.js'

// Home page: hero + Why Us + Our Offerings + Success Partners + Clients.
export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <LogoWall
        eyebrow="Our Network"
        title="Success Partners"
        subtitle="We collaborate with leading organisations to deliver on our commitments."
        items={partners}
        className="bg-white"
      />
      <LogoWall
        eyebrow="Trusted By"
        title="Our Clients"
        subtitle="Serving the Kingdom's energy and infrastructure sectors."
        items={clients}
      />
    </>
  )
}
