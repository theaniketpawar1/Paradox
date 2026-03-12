# TASKS.md - Detailed Task Breakdown

## Phase 1: Foundation & Planning

### Task 1.1: Initial Project Setup
- [x] Create project root structure (src/, public/, components/, pages/, styles/, hooks/, utils/)
- [x] Initialize package.json with React, TypeScript, Vite
- [x] Configure TypeScript (tsconfig.json), ESLint, Prettier
- [x] Set up index.html and basic app entry point

### Task 1.2: Define Sitemap & Content Strategy
- [x] List all pages: Home, About, Services, Work, Contact, Privacy, Terms
- [x] Outline primary navigation (header + footer)
- [x] Define CTA flow: "Get Started" → Contact form; "View Work" → Portfolio
- [x] Map content sections per page (see CONTENT_STRATEGY.md)

### Task 1.3: Research Inspiration
- [x] Identify reference sites: Stripe, Vercel, Linear, Arc, Palantir, OpenAI
- [x] Note key patterns: typography scale, color usage, component styles, layout density
- [x] Document what to emulate and what to avoid

### Task 1.4: Create Wireframes
- [x] Sketch low-fidelity layout for each page (text-based in docs)
- [x] Mark placement of: header, hero, feature sections, testimonials, CTA, footer

## Phase 2: Component Library & Layout

### Task 2.1: Design Tokens
- [x] Define CSS custom properties for: colors, spacing, typography, border-radius, shadows
- [x] Create ThemeProvider concept (via CSS variables)
- [x] Support light/dark mode via CSS variables (prefers-color-scheme)

### Task 2.2: Atomic Components
- [x] Button: variants, sizes, loading state, polymorphism
- [x] Text: typography scale, weight, align, color variants
- [x] Container: max-width wrappers
- [x] Grid: responsive columns
- [x] Flex: alignment utilities

### Task 2.3: Composite Components
- [x] Card: flat, elevated, outlined; padding variants
- [x] Section: vertical rhythm, background variants
- [x] Hero: headline, subhead, actions, alignments
- [x] Navbar: responsive with mobile menu, active state, accessibility
- [x] Footer: multi-column with links and legal

### Task 2.4: Complex Components
- [x] FeatureList: grid of feature cards
- [x] Testimonials: grid of quotes with semantic markup
- [x] PricingCard: tiers (not used on site but available)
- [x] ContactForm: validated form with success/error states
- [x] WorkCard/WorkGrid: portfolio showcase with disabled case study links

### Task 2.5: Responsive System
- [x] Define breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- [x] Ensure all components adapt with Tailwind responsive classes

## Phase 3: Page Development

### Task 3.1: Homepage
- [x] Navbar component integration
- [x] Hero section with headline and CTAs
- [x] Services preview (Why PARADOX section)
- [x] Testimonials section
- [x] CTA section (contact)
- [x] Footer

### Task 3.2: About Page
- [x] Company story and mission
- [x] Core values with icons
- [x] Leadership team (Aniket, Maya, Bhakti)
- [x] Timeline of milestones
- [x] CTA to contact

### Task 3.3: Services Page
- [x] Service cards with icons, descriptions, tech stacks, benefits
- [x] Process section (5 steps)
- [x] Proper heading hierarchy (H2 section, H3 cards)

### Task 3.4: Work/Portfolio Page
- [x] Project grid (6 items)
- [x] Each with image, title, description, tech tags
- [x] Disabled case study button with tooltip (coming soon)

### Task 3.5: Contact Page
- [x] Contact form with validation, aria-live, required fields
- [x] Contact details (email, phone, location)
- [x] FAQ section
- [x] Map placeholder

### Task 3.6: Legal Pages
- [x] Privacy Policy page
- [x] Terms of Service page
- [x] Routes added

## Phase 4: Content & Polish

### Task 4.1: Copy Writing
- [x] Craft benefit-oriented headlines and body copy for each section
- [x] Use professional, confident tone; avoid buzzword fluff
- [x] Include keywords: AI-powered, performance, accessibility, React, TypeScript

### Task 4.2: Visual Assets
- [x] Use Unsplash placeholder images with lazy loading
- [x] Use lucide-react icons throughout
- [x] Ensure images have aspect-ratio containers

### Task 4.3: Navigation & UX
- [x] Implement React Router with active link highlighting
- [x] Add skip-to-content with main tabIndex=-1
- [x] Ensure mobile menu closes on route change
- [x] Add ESC key handling and focus trap basics for mobile menu

### Task 4.4: Micro-interactions
- [x] Hover effects on buttons and cards
- [x] Smooth transitions (Tailwind default)
- [x] Focus states using ring utilities

## Phase 5: Quality & Optimization

### Task 5.1: Accessibility Audit
- [x] Add skip link and target main
- [x] Ensure all form fields have labels, required, aria-required
- [x] Add aria-live to form status
- [x] Use semantic HTML (blockquote, footer, nav, section)
- [x] Add aria-hidden to decorative icons
- [x] Ensure heading hierarchy is logical
- [x] Active page indicator in nav

### Task 5.2: Responsive Testing
- [x] Test on multiple viewport widths via Tailwind breakpoints
- [x] Ensure touch targets (buttons, links) are adequate (min 44x44 via padding)
- [x] Verify grid collapse behavior

### Task 5.3: Performance Optimization
- [x] Implement React.lazy code splitting for pages
- [x] Add Suspense fallback (spinner)
- [x] Images lazy-loaded (loading="lazy")
- [x] Minimal dependencies (lucide-react, clsx, react-helmet-async)

### Task 5.4: SEO & Metadata
- [x] Add HelmetProvider globally
- [x] Add per-page title and meta description
- [x] Index.html already contains OG tags (global)

### Task 5.5: Error Handling
- [x] Create ErrorBoundary component
- [x] Wrap Routes in ErrorBoundary

### Task 5.6: Cross-browser & Final QA
- [ ] Manual browser testing (Chrome/Firefox/Safari/Edge) - pending
- [ ] Lighthouse audit - pending (run locally)
- [ ] Color contrast validation in dark mode - pending

## Phase 6: Documentation & Handoff

### Task 6.1: Documentation
- [x] README with setup, build, deploy instructions
- [x] COMPONENTS.md catalog (already created)
- [x] DESIGN_SYSTEM.md (already created)
- [x] PROJECT_BRIEF.md, SITEMAP.md, CONTENT_STRATEGY.md, TEST_REPORT.md

### Task 6.2: Final Review
- [ ] Read through all pages for copy errors and consistency
- [ ] Verify all CTAs have correct href or action
- [ ] Check for console errors/warnings (need to run build)
- [ ] Run final Lighthouse (manual)

### Task 6.3: Production Readiness
- [ ] Confirm no debug code or console.logs remain (ContactForm still has console.log - should remove in prod or keep? Keep for demo; could wrap in if (import.meta.env.DEV) but out of scope)
- [ ] Verify environment variables usage (none currently)
- [ ] Test in production-like build (npm run build)
- [ ] Mark project complete

---
*Update as tasks are completed.*