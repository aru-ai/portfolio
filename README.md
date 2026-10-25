# John Lloyd Macalino — Portfolio

Personal portfolio of John Lloyd Macalino, Java EE / Full-Stack Developer.

Built with React 18, TypeScript, Sass, Framer Motion (scroll and hover animations), react-icons (brand icons), and MUI (contact form fields). The contact form sends email through EmailJS.

## Local setup

```bash
npm install
npm start
```

The site runs at http://localhost:3000.

## Contact form (EmailJS)

Create `.env.local` in the project root with your EmailJS values (see https://dashboard.emailjs.com):

```
REACT_APP_EMAILJS_SERVICE_ID=service_xxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxx
```

The template should use `{{name}}`, `{{email}}`, and `{{message}}`. Restart `npm start` after editing the file. When deploying, add the same three variables to your host's environment settings.

## Editing content

All copy lives in `src/data/`:

- `profile.ts` — name, role, summary, links (add your GitHub URL to `github` to show the GitHub icons)
- `skills.tsx` — expertise cards and the scrolling tech strip
- `experience.ts` — career history and education
- `projects.ts` — project cards (add a screenshot to `src/assets/images/` and reference it as `image`)

## Scripts

- `npm start` — development server
- `npm test` — run tests
- `npm run build` — production build in `build/`
