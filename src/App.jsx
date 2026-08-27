import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import CertificatesPage from './pages/CertificatesPage.jsx'
import CompanyProfilePage from './pages/CompanyProfilePage.jsx'
import QHSEPolicyPage from './pages/QHSEPolicyPage.jsx'
import OfferingPage from './pages/OfferingPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Careers from './pages/Careers.jsx'
import ApplyPage from './pages/ApplyPage.jsx'

// Reset scroll to the top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Our Company */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/company-profile" element={<CompanyProfilePage />} />
          <Route path="/qhse-policy" element={<QHSEPolicyPage />} />
          {/* Our Offering */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/offering/:slug" element={<OfferingPage />} />
          {/* Standalone */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/apply" element={<ApplyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
