# PARADOX Website

Production-ready frontend for PARADOX, an AI-first service company delivering modern web applications.

## Tech Stack

- React 18 + TypeScript
- Vite (fast build tool)
- Tailwind CSS (utility-first styling)
- React Router (client-side routing)
- ESLint + Prettier (code quality)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## Project Structure

```
src/
  components/   # Reusable UI components
  lib/          # Technical libraries (indexes)
  pages/        # Route pages
  index.css     # Global styles and CSS variables
main.tsx        # App entry point with router
App.tsx         # Main layout with navbar/footer
```

## Design System

Colors, spacing, typography, and component styles are defined in `DESIGN_SYSTEM.md`. Global CSS variables are in `src/index.css`.

## Accessibility

We aim for WCAG 2.1 AA compliance. Components include proper ARIA attributes, focus management, and keyboard navigation.

## Performance

- Code splitting via React.lazy and Vite chunking
- Images lazy-loaded
- Minimal dependencies
- Optimized for Lighthouse >90

## Deployment

This site can be deployed to any static hosting:

- **Vercel**: Import repository and deploy
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `vite.config.ts` base config

Ensure `vite build` runs successfully and upload the `dist` directory.

## Credits

Built by PARADOX. Content and design created in-house.

---