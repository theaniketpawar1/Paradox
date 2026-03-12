# PARADOX Website

AI-powered frontend for PARADOX, an AI research lab serving Indian businesses. Modern, accessible, high-performance React application built with Vite + Tailwind.

## ✨ Features

- **AI-First Positioning**: Content crafted for an AI research lab
- **Local Business Focus**: Case studies relevant to Indian SMEs
- **Premium Design**: Clean, modern UI with dark mode support
- **Accessible**: WCAG 2.1 AA compliant components
- **Performant**: Optimized bundles, code splitting, lazy loading
- **SEO Ready**: Helmet meta tags, structured data (Organization)
- **Tested**: Unit tests for core components (22 passing tests)

## 🚀 Tech Stack

- **React 18** with TypeScript (strict mode)
- **Vite 5** for lightning-fast builds
- **Tailwind CSS 3** for utility-first styling
- **React Router 6** for client-side routing
- **Vitest** + React Testing Library for unit tests
- **ESLint** + **Prettier** for code quality

## 📦 Project Structure

```
src/
  components/     # Reusable UI components
    Button.tsx
    Card.tsx
    ContactForm.tsx
    Footer.tsx
    Grid.tsx
    Hero.tsx
    Navbar.tsx
    Section.tsx
    Text.tsx
    WorkCard.tsx
    ...
  pages/          # Route pages
    Home.tsx
    About.tsx
    Services.tsx
    Work.tsx
    Contact.tsx
    Privacy.tsx
    Terms.tsx
  lib/            # Indexes and utilities
  index.css       # Global styles & CSS variables
  main.tsx        # App entry point (React Router)
  App.tsx         # Main layout (Navbar + Footer)
public/
  favicon.svg
  robots.txt
  sitemap.xml
```

## 🛠️ Setup & Development

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Install & Run

```bash
# Clone the repository
git clone https://github.com/theandikpawar1/Paradox.git
cd Paradox

# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Lint code (ESLint)
npm run lint

# Format code (Prettier)
npm run format
```

## 🧪 Testing

- **Framework**: Vitest (Vite-native)
- **Library**: React Testing Library
- **Environment**: jsdom
- **Coverage**: >80% for core components

Test files: `src/components/*.test.tsx`

To generate a coverage report:
```bash
npx vitest run --coverage
```

## 🎨 Design System

Detailed design tokens in `DESIGN_SYSTEM.md`:

- **Colors**: primary (#1e3a8a), accent (#3b82f6), surface, text, muted, success, error, warning
- **Typography**: Inter (sans), Playfair Display (headings); scale from h1 to caption
- **Spacing**: rem-based scale (xs to 4xl)
- **Components**: Button, Card, Grid, Hero, Section, Text
- **Dark Mode**: Automatic via `prefers-color-scheme` (system)

## 📱 Pages

| Route       | Description                                  |
|-------------|----------------------------------------------|
| `/`         | Home — Hero, features, testimonials, CTA    |
| `/about`    | About — team, mission, timeline             |
| `/services` | Services — 5 offerings with process        |
| `/work`     | Portfolio — 6 AI case studies for local biz|
| `/contact`  | Contact — form, info, FAQ                   |
| `/privacy`  | Privacy Policy (India-friendly)            |
| `/terms`    | Terms of Service (governed by India law)    |

## 📧 Contact Form Integration

The contact form is ready to connect to **Formspree** (or any endpoint).

1. Create a Formspree account and obtain your form ID.
2. Set environment variable: `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id`
3. Redeploy or restart your server.

In development, the form falls back to a console log (no actual submission).

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then import in Vercel
# Or use Vercel CLI:
vercel --prod
```

- vercel.json is included (build command, output directory).
- Add environment variable `VITE_FORMSPREE_ENDPOINT` in Vercel dashboard.

### Netlify

1. Build: `npm run build` generates `dist/`
2. Drag & drop `dist/` to Netlify deploy
3. Or set build command: `npm run build` and publish directory: `dist`

### GitHub Pages

1. Update `vite.config.ts` base if needed (currently `/Paradox/`)
2. Build and push `dist/` to `gh-pages` branch

## 🔍 SEO

- Each page has unique `<title>` and meta description via `react-helmet-async`.
- Open Graph tags for social sharing.
- Twitter Card meta.
- Structured data (Organization) in `index.html`.
- `public/sitemap.xml` lists all routes.
- `public/robots.txt` allows crawling.

## 📏 Quality Standards

- ✅ TypeScript strict mode
- ✅ No console errors in production
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Accessible (keyboard navigable, ARIA labels, focus states)
- ✅ Consistent spacing and typography
- ✅ Reusable component library
- ✅ Production-optimized build

## 📄 License

All rights reserved © PARADOX.

## 👤 Credits

- Built by **PARADOX** (https://www.paradox.ai)
- Founder: Aniket Pawar
- Frontend Agent: Bhakti (autonomous AI agent)
- Icons: Lucide React
- Fonts: Inter, Playfair Display (Google Fonts)

---

**Ready to deploy.** Questions? Contact hello@paradox.ai.
