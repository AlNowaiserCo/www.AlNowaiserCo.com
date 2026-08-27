# Al-Nowaiser Trading & Contracting Co. — Website

A modern, fully responsive corporate website built with **React + Vite + Tailwind CSS**.
Single-page app with smooth-scroll sections plus a dedicated **Careers** route.

## ✨ Features

- Sticky navbar with scroll-spy active highlighting, orange hover states, and a mobile hamburger menu
- Full-screen hero with navy overlay and dual call-to-action buttons
- About section with mission/vision/values and **animated stat counters**
- Services grid with icons and hover-lift cards
- Projects gallery with **category filter** and **lightbox modal**
- Certificates grid with clickable **lightbox** previews
- Contact section with details, **Google Map embed**, and a validated contact form
- Dedicated **Careers** page with open-position cards and a full **job application form** (incl. resume upload)
- Navy footer with quick links, contact info, and social icons
- Scroll-reveal animations, accessible semantics, keyboard-navigable forms, reduced-motion support

## 🚀 Run locally

Requires **Node.js 18+**.

```bash
npm install     # install dependencies
npm run dev     # start dev server (http://localhost:5173)
```

Other scripts:

```bash
npm run build   # production build → dist/
npm run preview # preview the production build locally
```

## 🎨 Where to customize

| What                         | Where                                                                 |
| ---------------------------- | --------------------------------------------------------------------- |
| **Logo**                     | Drop `public/logo.png` (a text logo shows until then). See `src/components/Logo.jsx`. |
| **Brand colors / fonts**     | `tailwind.config.js` (`navy`, `orange`, `cloud`) and `index.html` (font). |
| **All text & data**          | `src/data/content.js` — company info, stats, services, projects, certificates, job positions. |
| **Hero / About images**      | Inline URLs in `src/components/Hero.jsx` and `src/components/About.jsx`. |
| **Project / cert images**    | `src/data/content.js` (`image` fields). Use Unsplash URLs or local `/public` paths. |
| **Google Map coordinates**   | `src/data/content.js` → `company.mapEmbedSrc` (Google Maps → Share → *Embed a map*). |
| **Form submission endpoints**| Search for `// TODO: connect to backend/email service` in `src/components/Contact.jsx` and `src/pages/Careers.jsx`. |

### Wiring up the forms

Both forms currently log to the console and show a success message. To make them
send for real, replace the marked `// TODO` blocks. Easiest option is
[Formspree](https://formspree.io):

```js
await fetch('https://formspree.io/f/XXXXXXXX', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(form),
})
```

The careers form includes a file upload — to send the resume, POST a `FormData`
object instead of JSON (see the commented example in `src/pages/Careers.jsx`).

## 📁 Project structure

```
src/
  components/   # Navbar, Hero, About, Services, Projects, Certificates, Contact, Footer, Logo, Modal, Reveal, Icons
  pages/        # Home (assembles sections), Careers (application page)
  hooks/        # useReveal (scroll animation), useCountUp (animated stats)
  data/         # content.js — single source of editable content
  App.jsx       # routing (Home + Careers)
  main.jsx      # app entry
  index.css     # Tailwind layers + custom component classes
public/         # static assets (drop logo.png and images here)
```

## ♿ Accessibility & polish

- Semantic HTML, descriptive `alt` text, labelled form fields with inline validation
- Keyboard-focusable controls with visible focus rings; modals close on `Esc` / backdrop click and lock body scroll
- Honors `prefers-reduced-motion`
- Lazy-loaded images for performance

---

© 2026 Al-Nowaiser Trading & Contracting Co.
