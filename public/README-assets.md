# Drop your assets here (the `public/` folder)

Anything in this folder is served from the site root (`/`). Replace the
placeholders referenced in the code:

| File                         | Used by                                    | Notes                                            |
| ---------------------------- | ------------------------------------------ | ------------------------------------------------ |
| `logo.png`                   | Navbar + Footer (`src/components/Logo.jsx`) | The "N" logo. Until added, a text logo shows.    |
| `projects/*.jpg`             | `src/data/content.js` → `projects[].image` | Optional — swap the Unsplash URLs for local files |
| `certificates/*.jpg`/`.pdf`  | `src/data/content.js` → `certificates[]`   | For PDFs, see note in `src/components/Certificates.jsx` |

To reference a file dropped here, use a root-relative path, e.g.
`image: '/projects/riyadh-tower.jpg'`.
