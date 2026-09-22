/* =================================================================
   SITE CONTENT — single source of truth for editable text & data.
   Replace the placeholder copy / images below with real content.
   Images use Unsplash placeholders; swap the URLs (or drop files in
   /public and reference them like "/projects/my-project.jpg").
   ================================================================= */

import {
  IconContracting,
  IconTrading,
  IconCivil,
  IconProject,
  IconMaintenance,
  IconMep,
  IconClock,
  IconCertificate,
} from '../components/Icons.jsx'

// ---- Company contact details (used in Contact + Footer) ----
export const company = {
  name: 'Al-Nowaiser Trading & Contracting Co.',
  phone: '+966-11-4793136',
  fax: '+966-11-4787983',
  email: 'HR.AlNowaiser@gmail.com',
  address: 'Prince Majed Bin Abdulaziz Rd, Riyadh, Kingdom of Saudi Arabia',
  hours: 'Saturday – Thursday, 8:00 AM – 5:00 PM',
  // Google Maps embed pointed at the company address (Share → Embed a map to refine)
  mapEmbedSrc: 'https://www.google.com/maps?q=24.7057200,46.7694476&z=16&output=embed',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'X', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}

// ---- About: stats row (animated counters) ----
export const stats = [
  { label: 'Years of Experience', value: 40, suffix: '+' },
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Clients Served', value: 30, suffix: '+' },
  { label: 'Team Members', value: 100, suffix: '+' },
  { label: 'Partners', value: 15, suffix: '+' },
]

export const values = [
  {
    title: 'Integrity',
    text: 'We conduct our business with the highest standards of ethics, honesty, fairness, and accountability.',
  },
  {
    title: 'Quality',
    text: 'We deliver high-standard, compliant engineering projects to ensure operational excellence and customer satisfaction.',
  },
  {
    title: 'Safety',
    text: 'We maintain a safe, healthy work environment through effective safety systems and practices across all operations.',
  },
  {
    title: 'Commitment',
    text: 'On time, on budget, and on spec — we honor our deadlines and our commitments.',
  },
]

// ---- Services grid ----
export const services = [
  {
    icon: IconMep,
    title: 'Power Transmission & Distribution',
    slug: 'power-transmission-distribution',
    image: '/services/power-transmission.jpg',
    description:
      'Overhead transmission lines and MV/LV distribution networks that move power reliably across the grid.',
  },
  {
    icon: IconContracting,
    title: 'Infrastructure Works',
    slug: 'infrastructure-works',
    image: '/services/infrastructure.jpg',
    description:
      'Water, sewerage, and power network infrastructure delivered end to end.',
  },
  {
    icon: IconCivil,
    title: 'Substations Construction',
    slug: 'substations-construction',
    image: '/services/general-contracting.jpg',
    description:
      'Turnkey construction of substations — civil, structural, and electrical works up to 132 kV.',
  },
  {
    icon: IconTrading,
    title: 'Roads & Lighting',
    slug: 'roads-lighting',
    image: '/services/roads-lighting.jpg',
    description:
      'Road construction and street and area lighting installed to national standards.',
  },
  {
    icon: IconMaintenance,
    title: 'Operation & Maintenance',
    slug: 'operation-maintenance',
    image: '/services/operation-maintenance.jpg',
    description:
      'Preventive and corrective O&M that keeps assets running safely and efficiently.',
  },
  {
    icon: IconProject,
    title: 'Fire System & HVAC Systems',
    slug: 'fire-hvac-systems',
    image: '/services/mep-works.jpg',
    description:
      'Design, supply, and installation of fire-fighting and HVAC systems.',
  },
  {
    icon: IconCertificate,
    title: 'Testing & Commissioning',
    slug: 'testing-commissioning',
    image: '/services/testing-commissioning.jpg',
    description:
      'Full testing, energisation, and commissioning to hand over ready-to-operate systems.',
  },
]

// ---- Home: "Why Us" points ----
export const whyUs = [
  {
    icon: IconClock,
    title: 'Four Decades of Experience',
    text: 'Over 40 years delivering power and infrastructure projects across the Kingdom.',
  },
  {
    icon: IconMep,
    title: 'Energy-Sector Specialists',
    text: 'Design, construction, and commissioning of power distribution and transmission networks.',
  },
  {
    icon: IconCertificate,
    title: 'Quality & Safety',
    text: 'High-standard, compliant engineering backed by rigorous safety systems and practices.',
  },
  {
    icon: IconProject,
    title: 'Trusted Delivery',
    text: 'On time, on budget, and on spec — honouring our commitments to every stakeholder.',
  },
]

// ---- Home: Success Partners ----
// To show a real logo image instead of the name, drop the file in
// /public/partners/ and add `logo: "/partners/siemens.png"` to that entry.
export const partners = [
  { name: 'Siemens Energy', logo: '/partners/siemens-energy.png' },
  { name: 'ABB', logo: '/partners/abb.png' },
  { name: 'Riyadh Cables Group', logo: '/partners/riyadh-cables.png' },
  { name: 'SEP', logo: '/partners/sep.png' },
  { name: 'GE Vernova', logo: '/partners/ge-vernova.png' },
  { name: 'Hitachi Energy', logo: '/partners/hitachi-energy.png' },
  { name: 'REDA Safe', logo: '/partners/reda-safe.png' },
  { name: 'Saudi Taihan', logo: '/partners/saudi-taihan.png' },
  { name: 'Elsewedy Electric', logo: '/partners/elsewedy.png' },
  { name: 'alfanar', logo: '/partners/alfanar.png' },
  { name: 'SKM', logo: '/partners/skm.png' },
  { name: 'GCC Electrical Testing Laboratory', logo: '/partners/gcc.png' },
  { name: 'Hyosung Heavy Industries', logo: '/partners/hyosung.png' },
  { name: 'Schneider Electric', logo: '/partners/schneider.png' },
  { name: 'SETRA', logo: '/partners/setra.png' },
]

// ---- Home: Clients (placeholder logos — replace the same way as partners) ----
export const clients = [
  { name: 'Saudi Aramco', logo: '/clients/aramco.png' },
  { name: 'Saudi Energy', logo: '/clients/saudi-energy.png' },
  { name: 'Ministry of Health', logo: '/clients/ministry-of-health.png' },
  { name: 'Ministry of Water & Electricity', logo: '/clients/mowe.png' },
  { name: 'Mobily', logo: '/clients/mobily.png' },
  { name: 'stc', logo: '/clients/stc.png' },
  { name: 'Riyadh Region Municipality', logo: '/clients/riyadh-municipality.png' },
  { name: 'Jeddah Municipality', logo: '/clients/jeddah-municipality.png' },
  { name: 'Economic Cities Authority', logo: '/clients/eca.png' },
  { name: 'Ministry of Environment Water & Agriculture', logo: '/clients/mewa.png' },
  { name: 'Ministry of Defense', logo: '/clients/ministry-of-defense.png' },
  { name: 'MODON — Saudi Industrial Property Authority', logo: '/clients/modon.png' },
]

// ---- Projects gallery (6–9 placeholders) ----
// category must match one of the PROJECT_CATEGORIES values below.
export const PROJECT_CATEGORIES = ['All', 'Turn-Key Projects', 'Maintenance', 'Infrastructure']

export const projects = [
  // ---- Turn-Key Projects (real projects; project photos to be added later) ----
  {
    name: 'Construction of new 3×20 MVA 33/13.8 kV S/S 7857 in Unizah',
    location: 'Qassim',
    category: 'Turn-Key Projects',
    contract: '4400008343',
    image: '',
  },
  {
    name: 'Reinforcement of 132/33 kV S/S 8919 & 8922 in Hail',
    location: 'Hail',
    category: 'Turn-Key Projects',
    contract: '4400013133',
    image: '',
  },
  {
    name: 'Replacement of 33 kV existing switchgear of S/S 7907 & modifying protection of two interconnector feeder panels at S/S 8904 in Hail City',
    location: 'Qassim',
    category: 'Turn-Key Projects',
    contract: '4400007250',
    image: '',
  },
  {
    name: 'Civil works for maintenance of Riyadh lines (132 kV)',
    location: 'Riyadh',
    category: 'Turn-Key Projects',
    image: '',
  },
  {
    name: 'Unified contract for distribution network up to 33 kV',
    location: 'Riyadh',
    category: 'Turn-Key Projects',
    image: '',
  },
  {
    name: 'Replacement of 33/13.8 kV, 10 MVA power transformer at S/S 7031, 7062, 7125 by 20 MVA, 33/13.8 kV, YNyn0 power transformer',
    location: 'Qassim',
    category: 'Turn-Key Projects',
    contract: '440000663',
    image: '',
  },
  {
    name: 'Replacement of 33 kV existing switchgear of S/S 7907 & modifying protection of two interconnector feeder panels at S/S 8904 in Hail City',
    location: 'Riyadh',
    category: 'Turn-Key Projects',
    contract: '4400007250',
    image: '',
  },
  {
    name: 'Connection of new Al-Aziziya S/S 9044 with 132 kV network',
    location: 'Riyadh',
    category: 'Turn-Key Projects',
    note: 'Sub-contractor for Riyadh Cable Co.',
    image: '',
  },
  {
    name: 'Provision of outside plant works including civil, jointing, ground cable & new substation, with turnover to SCECO',
    location: 'Riyadh',
    category: 'Turn-Key Projects',
    image: '',
  },

  // ---- Infrastructure (real projects; project photos to be added later) ----
  {
    name: 'Execution & installation of street poles & street lighting fixtures',
    location: 'Riyadh',
    category: 'Infrastructure',
    image: '',
  },
  {
    name: 'Execution & installation of street poles & street lighting fixtures',
    location: 'Jeddah',
    category: 'Infrastructure',
    image: '',
  },
  {
    name: 'Contract of design and implementation of Khuzam road expansion',
    location: 'Riyadh',
    category: 'Infrastructure',
    image: '',
  },

  // ---- Maintenance (real projects; project photos to be added later) ----
  {
    name: 'Emergency work contract for distribution network up to 33 kV',
    location: 'Riyadh',
    category: 'Maintenance',
    image: '',
  },
  {
    name: 'Maintenance & emergency works',
    location: 'Riyadh',
    category: 'Maintenance',
    contract: '440000377',
    image: '',
  },
  {
    name: 'Reinforcement & maintenance of LV & MV UG distribution network up to 35 kV',
    location: 'Riyadh',
    category: 'Maintenance',
    contract: '00/10541139',
    image: '',
  },
  {
    name: 'Reinforcement & maintenance of LV & MV UG distribution network',
    location: 'Riyadh',
    category: 'Maintenance',
    contract: '00/10832170',
    image: '',
  },
]

// ---- Certificates / accreditations ----
// Replace `image` with your certificate scans (drop in /public/certificates).
// ---- Gallery categories (each is a dropdown item with its own photos) ----
export const galleryCategories = [
  {
    title: 'Power Transmission & Substation Construction',
    slug: 'power-transmission-substation',
    images: [
      '/gallery/power-transmission-substation/pt-01.jpg',
      '/gallery/power-transmission-substation/pt-02.jpg',
      '/gallery/power-transmission-substation/pt-03.jpg',
      '/gallery/power-transmission-substation/pt-04.jpg',
      '/gallery/power-transmission-substation/pt-05.jpg',
      '/gallery/power-transmission-substation/pt-06.jpg',
      '/gallery/power-transmission-substation/pt-07.jpg',
      '/gallery/power-transmission-substation/pt-08.jpg',
      '/gallery/power-transmission-substation/pt-09.jpg',
      '/gallery/power-transmission-substation/pt-10.jpg',
      '/gallery/power-transmission-substation/pt-11.jpg',
      '/gallery/power-transmission-substation/pt-12.jpg',
      '/gallery/power-transmission-substation/pt-13.jpg',
      '/gallery/power-transmission-substation/pt-14.jpg',
      '/gallery/power-transmission-substation/pt-15.jpg',
      '/gallery/power-transmission-substation/pt-16.jpg',
      '/gallery/power-transmission-substation/pt-17.jpg',
      '/gallery/power-transmission-substation/pt-18.jpg',
      '/gallery/power-transmission-substation/pt-19.jpg',
      '/gallery/power-transmission-substation/pt-20.jpg',
      '/gallery/power-transmission-substation/pt-21.jpg',
      '/gallery/power-transmission-substation/pt-22.jpg',
      '/gallery/power-transmission-substation/pt-23.jpg',
      '/gallery/power-transmission-substation/pt-24.jpg',
      '/gallery/power-transmission-substation/pt-25.jpg',
      '/gallery/power-transmission-substation/pt-26.jpg',
      '/gallery/power-transmission-substation/pt-27.jpg',
      '/gallery/power-transmission-substation/pt-28.jpg',
      '/gallery/power-transmission-substation/pt-29.jpg',
      '/gallery/power-transmission-substation/pt-30.jpg',
      '/gallery/power-transmission-substation/pt-31.jpg',
      '/gallery/power-transmission-substation/pt-32.jpg',
      '/gallery/power-transmission-substation/pt-33.jpg',
      '/gallery/power-transmission-substation/pt-34.jpg',
      '/gallery/power-transmission-substation/pt-35.jpg',
      '/gallery/power-transmission-substation/pt-36.jpg',
      '/gallery/power-transmission-substation/pt-37.jpg',
      '/gallery/power-transmission-substation/pt-38.jpg',
      '/gallery/power-transmission-substation/pt-39.jpg',
      '/gallery/power-transmission-substation/pt-40.jpg',
      '/gallery/power-transmission-substation/pt-41.jpg',
    ],
  },
]

// Each certificate is a PDF (viewed in a lightbox / downloadable).
export const certificates = [
  {
    title: 'Technical Completion Certificate',
    pdf: '/certificates/certificate-13.pdf',
  },
  {
    title: 'Completion Certificate',
    pdf: '/certificates/certificate-1.pdf',
  },
  {
    title: 'Completion Certificate',
    pdf: '/certificates/certificate-2.pdf',
  },
  {
    title: 'Completion Certificate',
    pdf: '/certificates/certificate-3.pdf',
  },
  {
    title: 'Completion Certificate',
    pdf: '/certificates/certificate-4.pdf',
  },
  {
    title: 'Work Progress Certificate',
    pdf: '/certificates/certificate-5.pdf',
  },
  {
    title: 'Company Registration Certificate',
    pdf: '/certificates/certificate-6.pdf',
  },
  {
    title: 'VAT Registration Certificate',
    pdf: '/certificates/certificate-7.pdf',
  },
  {
    title: 'National Address Registration',
    pdf: '/certificates/certificate-8.pdf',
  },
  {
    title: 'Saudization Certificate',
    pdf: '/certificates/certificate-9.pdf',
  },
  {
    title: 'Membership Certificate',
    pdf: '/certificates/certificate-10.pdf',
  },
  {
    title: 'ISO 9001:2015',
    pdf: '/certificates/certificate-11.pdf',
  },
  {
    title: 'ISO 45001:2018',
    pdf: '/certificates/certificate-12.pdf',
  },
]

// ---- Careers: open positions ----
const RY = { location: 'Riyadh, KSA', type: 'Full-time' }
export const positions = [
  { title: 'Site Electrical Engineer', department: 'Engineering', ...RY },
  { title: 'Site Civil Engineer', department: 'Engineering', ...RY },
  { title: 'QA/QC Electrical Engineer', department: 'Quality', ...RY },
  { title: 'QA/QC Civil Engineer', department: 'Quality', ...RY },
  { title: 'Mechanical Engineer', department: 'Engineering', ...RY },
  { title: 'Construction Manager', department: 'Projects', ...RY },
  { title: 'HSE Engineer', department: 'HSE', ...RY },
  { title: 'Testing Engineer', department: 'Testing & Commissioning', ...RY },
  { title: 'Designing Engineer', department: 'Engineering', ...RY },
  { title: 'Civil Supervisor', department: 'Construction', ...RY },
  { title: 'Electrical Supervisor', department: 'Construction', ...RY },
  { title: 'HR Manager', department: 'Human Resources', ...RY },
  { title: 'Accountant', department: 'Finance', ...RY },
  { title: 'Financial Manager', department: 'Finance', ...RY },
  { title: 'Technical Engineer', department: 'Engineering', ...RY },
  { title: 'Tendering Engineer', department: 'Commercial', ...RY },
  { title: 'Communication Engineer', department: 'Engineering', ...RY },
  { title: 'Surveyor', department: 'Engineering', ...RY },
  { title: 'Draftsman', department: 'Engineering', ...RY },
]
