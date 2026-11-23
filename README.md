# ENGR. RH HIRA — Personal Engineering Portfolio

Next.js 15 + Tailwind CSS static website for **Engr. Md. Rajibul Huq Hira**, Civil & Structural Engineer,
Co-Founder & Structural Engineer at **Dhaka Building Planner**.

Features: responsive layout · dark/light mode · English/Bengali toggle · project gallery with lightbox ·
floating WhatsApp button · CV download · SEO metadata + structured data + sitemap · no backend needed.

---

## 1. Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production check: `npm run build` creates the static site in `out/`.

---

## 2. Publish on GitHub Pages (free)

1. Create a new repository on GitHub (e.g. `portfolio`, or `<username>.github.io` for a root URL).
2. In this folder:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every push to `main` now builds and deploys automatically (see `.github/workflows/deploy.yml`).
   Your site will be at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/`).

The workflow detects the sub-path automatically, so images, links and SEO URLs work either way.
Using a custom domain later? Add it under **Settings → Pages**; no code change needed.

---

## 3. Editing content (no coding required)

| What | Where |
|---|---|
| All text, English **and** Bengali, education, experience, skills, services | `lib/content.ts` |
| Contact links, brand name, CV path, image paths | `lib/site.ts` |
| Project gallery | `lib/projects.ts` |
| Colours | `tailwind.config.ts` and the `:root` / `.dark` blocks in `app/globals.css` |

Anything written in **[square brackets]** is an editable placeholder — replace it with real information.
Nothing in the site claims experience, awards, certifications, clients or testimonials that were not provided.

### Add a project
1. Copy the image to `public/images/projects/` (WebP/JPG, ~1600 px wide, under ~400 KB).
2. Add an entry in `lib/projects.ts` with `image: "/images/projects/your-file.webp"`.
3. Commit and push — the site updates itself.

### Replace the CV
Overwrite `public/cv/Engr-RH-Hira-CV.pdf` with your real CV (keep the same file name).
The file currently there is a **placeholder** built from the information supplied.

### Photo and logo
- Portrait: `public/images/hira-portrait.webp`
- Dhaka Building Planner logo: the supplied artwork is untouched in `public/images/dbp-logo-original.png`.
  The site uses `dbp-logo-trimmed.webp/.png` — the same artwork with only the empty transparent margin
  removed and the file downsized for fast loading. Colours, design and proportions are unchanged.
- Social share image: `public/images/og-image.jpg`

---

## 4. Things to double-check
- **Company Facebook link** is used exactly as provided: `facebook.com/dhakabuidlingplanner`
  (note the spelling "buidling"). If the real page is `dhakabuildingplanner`, change it once in
  `lib/site.ts` → `companyFacebookUrl`; every link and label updates.
- Bengali text is a first draft — please have it read once and adjust wording in `lib/content.ts` (`bn` block).
- **About Me** and **Professional objectives** are drafted only from the facts supplied; edit to your own voice.
