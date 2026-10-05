# Weru Dennis Portfolio

A responsive portfolio for a backend-focused full-stack developer, built with React, Vite, and plain CSS. The design uses white surfaces, soft sky-blue accents, raised controls, and inset form fields.

## Development

Requires Node.js 20 or later.

```sh
cd portfolio
npm ci
npm run dev
```

Vite prints the local URL, including the `/werudennisportfolio/` base path.

```sh
npm run lint
npm run build
npm run preview
```

## Project structure

```text
src/
  App.jsx                  Portfolio content and layout
  components/Contact.jsx  Contact form and deferred CAPTCHA
  index.css               Responsive design and styles
  main.jsx                React entry point
public/
  assets/                 Portrait, project previews, and resume
  favicon.svg
../.github/workflows/deploy.yml
```

Edit project entries and experience in `src/App.jsx`. Replace `public/assets/werudenniscv.pdf` to update the downloadable resume. The supplied resume currently predates the portfolio's updated education and volunteer details.

The contact form uses Web3Forms and loads hCaptcha only when the contact section approaches the viewport. Message delivery depends on those external services.

## Deployment

GitHub Actions installs dependencies, builds the app, and deploys `dist/` to GitHub Pages on pushes to `main`. Configure the repository's Pages source as GitHub Actions. The base path is set in `vite.config.js`; update it if the hosting path changes.

Generated dependencies and build output are ignored by Git. Only referenced public assets are included. The portrait is compressed WebP, project previews load lazily, and image dimensions reserve layout space.
