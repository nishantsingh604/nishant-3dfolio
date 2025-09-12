# nishant-3dfolio

> **A 3D interactive portfolio** by **Nishant Singh** — built with React, Next.js and Vite. This site explores visual experimentation, component-driven UI, embedded audio experiences, and 3D interaction using Spline. The live site is deployed on Vercel and the full source code is available on GitHub.

* **Live demo:** [https://nishant-dev.vercel.app/](https://nishant-dev.vercel.app/)
* **Repo:** [https://github.com/nishantsingh604/nishant-3dfolio](https://github.com/nishantsingh604/nishant-3dfolio)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Highlights & Features](#highlights--features)
3. [Tech Stack](#tech-stack)
4. [Design & UI Notes](#design--ui-notes)
5. [Architecture & Key Components](#architecture--key-components)
6. [3D Model and Textures (Spline & Lanyard)](#3d-model-and-textures-spline--lanyard)
7. [Spotify Embeds — How They Work & How to Change Them](#spotify-embeds---how-they-work--how-to-change-them)
8. [Running Locally](#running-locally)
9. [Build & Deployment](#build--deployment)
10. [Accessibility & Performance Considerations](#accessibility--performance-considerations)
11. [Project Structure](#project-structure)
12. [Credits & Acknowledgements](#credits--acknowledgements)
13. [Contributing](#contributing)
14. [Contact](#contact)
15. [Future Enhancements](#future-enhancements)

---

## Project Overview

`nishant-3dfolio` is a personal portfolio site that blends 3D visuals, immersive audio, and a highly componentized React UI to present creative work and provide a pleasant browsing experience. The core goal was experimentation: to see how different UI component libraries, custom components, and interactive 3D assets can be combined to create a cohesive portfolio that is both expressive and usable.

This project showcases:

* A Spline-powered 3D scene and an edited textured lanyard model.
* Two separate Spotify embed components so visitors can listen to curated playlists while browsing.
* A component-first React architecture with many small, reusable components.
* A polished navbar with direct buttons to the GitHub repo and a downloadable resume.
* Custom typography, favicon, social links (Instagram, LinkedIn, GitHub, mail), and a floating trademark of the author’s name at the end of the page.

---

## Highlights & Features

* **3D Visual Centerpiece:** Embedded Spline scene used as the hero/interactive canvas.
* **Textured Lanyard Component:** A custom Spline/3D component with edited textures and subtle hover/interaction effects.
* **Two Spotify Embeds:** An always-available mini-player and a larger playlist panel — both implemented as independent components.
* **Navbar CTAs:** Buttons linking to the GitHub repo and the resume are placed prominently in the navbar.
* **Full Social Suite:** Instagram, LinkedIn, GitHub, and mail integrated in the header/footer and a floating social bar.
* **Custom Favicon & Branding:** A custom favicon and a floating name/trademark element anchored at the end of the page.
* **Fonts & Vibe:** Multiple fonts and subtle typographic choices implemented to match the overall aesthetic.
* **Experimentation-Friendly:** Many components adapted from community UI kits and heavily edited.

---

## Tech Stack

* **React** — component-driven UI.
* **Next.js** & **Vite** — modern bundlers/dev setups.
* **Spline** — 3D scenes and models (lanyard textures & scene).
* **Spotify Embed (iframes/custom components)** — two distinct embeds.
* **UI sources:** `reactbits.dev` and `https://ui.aceternity.com/components` — adapted and heavily customized.
* **Deploy:** Vercel (production/demo).
* **Styling & Fonts:** Custom CSS + external fonts for aesthetic consistency.

---

## Design & UI Notes

* UI components borrowed from `reactbits.dev` and Aceternity were **edited and re-themed**.
* Colors, spacing, hover effects, and micro-interactions were fine-tuned.
* Goal: subtle interactions keeping 3D and music as focal points.

---

## Architecture & Key Components

* **`Navbar`** — top navigation with GitHub and Resume buttons; responsive and mobile-friendly.
* **`Hero / SplineCanvas`** — Spline-powered hero block, lazy-loaded for performance.
* **`Lanyard`** — textured 3D model with hover/click interactions.
* **`SpotifyMini` & `SpotifyFull`** — two Spotify embed components.
* **`FloatingName`** — animated floating trademark at page end.
* **`SocialBar`** — fixed social links.
* **Utility Components** — Button, Card, Icon, Modal; heavily adapted from UI kits.

---

## 3D Model and Textures (Spline & Lanyard)

* 3D content created/edited in Spline; lanyard model textures customized.
* Spline scene embedded via React integration or iframe.
* **Updating the Spline scene:** Replace the `scene` prop or iframe `src` with your new Spline scene URL.

---

## Spotify Embeds — How They Work & How to Change Them

* Two independent Spotify embeds implemented with standard Spotify embed URLs.
* Replace `PLAYLIST_ID` in the iframe src to swap playlists.
* `SpotifyMini` and `SpotifyFull` components accept props for playlist/track IDs.

---

## Running Locally

```bash
git clone https://github.com/nishantsingh604/nishant-3dfolio.git
cd nishant-3dfolio
npm install
npm run dev
```

* Next.js default: [http://localhost:3000](http://localhost:3000)
* Vite default: [http://localhost:5173](http://localhost:5173)

---

## Build & Deployment

```bash
npm run build
npm run start   # Next.js
npm run preview # Vite
```

* Deployed to Vercel, CI/CD automatically builds on `main` branch push.

---

## Accessibility & Performance Considerations

* Lazy-load heavy assets (Spline scenes, iframes).
* ARIA & semantic HTML for buttons and embeds.
* Mobile-first responsive design.
* Fonts preloaded; critical CSS kept minimal.
* SEO and Open Graph meta tags added.

---

## Project Structure

```
nishant-3dfolio/
├─ public/
│  ├─ favicon.ico
│  └─ assets/
├─ src/
│  ├─ components/
│  ├─ pages/ or app/
│  ├─ styles/
│  └─ utils/
├─ package.json
└─ README.md
```

---

## Credits & Acknowledgements

* **reactbits.dev** — UI component inspiration, heavily customized.
* **Aceternity UI** — starting point for components, reworked extensively.
* **Spline** — for interactive 3D content.
* **Spotify** — for embedding music playlists.

---

## Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Commit your changes with clear messages.
4. Submit a pull request with a description.

* Report issues with embeds, Spline loading, or deployment with detailed info.

---

## Contact

* **Repo:** [https://github.com/nishantsingh604/nishant-3dfolio](https://github.com/nishantsingh604/nishant-3dfolio)
* **Live Site:** [https://nishant-dev.vercel.app/](https://nishant-dev.vercel.app/)
* All social links integrated in the site header/footer.

---

## Future Enhancements

* Persistent audio player with cross-route continuity.
* Theme switcher (dark/light mode) with saved preferences.
* Richer social preview metadata.
* Lighter mobile-only Spline fallback for performance.
* Additional interactive 3D assets and animations.
