# PARADOX Website — Master TODO

## Phase 1: Planning & Audit
- [x] Create PROJECT_BRIEF.md
- [x] Create TODO.md (this file)
- [ ] Create TASKS.md with step-by-step breakdown
- [ ] Create PROGRESS.md for chronological log
- [ ] Create REVIEW.md for self-critique
- [ ] Create TEST_REPORT.md for test results
- [ ] Create DESIGN_SYSTEM.md for design tokens
- [ ] Create SITEMAP.md for page structure
- [ ] Create CONTENT_STRATEGY.md for messaging
- [ ] Create COMPONENTS.md for component inventory
- [ ] Audit existing codebase (components, pages, config)
- [ ] Verify build setup (package.json, dependencies)
- [ ] Check TypeScript configuration

## Phase 2: Content Overhaul (Placeholder → PARADOX)
- [ ] Update Home page: Rewrite hero, features, testimonials with authentic copy
- [ ] Update About page: Real team (Aniket sir, Maya, Bhakti), mission, timeline
- [ ] Update Services page: PARADOX-specific service offerings with local business focus
- [ ] Update Work page: Replace generic case studies with PARADOX AI product showcases relevant to Indian SMBs
- [ ] Update Contact page: Real contact info, map, FAQ tailored to local businesses
- [ ] Update Privacy & Terms pages with proper legal copy for India

## Phase 3: Component Polish & Consistency
- [ ] Review Navbar: Mobile menu, accessibility, branding
- [ ] Review Footer: Links, social, copyright, legal
- [ ] Review Hero component: Ensure flexibility for all pages
- [ ] Review Button/Card/Grid: Consistent styling, spacing, states
- [ ] Add missing components: FAQ accordion, Trust badges, Client logos
- [ ] Ensure dark/light mode works (if implemented) or commit to dark premium theme

## Phase 4: SEO & Metadata
- [ ] Add structured data (JSON-LD) for Organization, LocalBusiness
- [ ] Verify Helmet meta tags on all pages (title, description, OG, Twitter)
- [ ] Add canonical URLs
- [ ] Generate sitemap.xml
- [ ] Add robots.txt
- [ ] Optimize images (use local assets in public folder)
- [ ] Preconnect for fonts

## Phase 5: Form Integration
- [ ] Set up backend form handling (Formspree or custom endpoint)
- [ ] Add form validation with clear error messages
- [ ] Add success/error states
- [ ] Test actual submission
- [ ] Add reCAPTCHA if needed (consider Indian users)

## Phase 6: Testing & Quality Assurance
- [ ] Run TypeScript build (tsc or vite build) — fix all errors
- [ ] Run Lighthouse audit — target >90 Performance & Accessibility
- [ ] Run axe-core accessibility scan — fix violations
- [ ] Manual keyboard navigation test
- [ ] Screen reader test (NVDA/VoiceOver)
- [ ] Responsive test: Mobile (375px), Tablet (768px), Desktop (1200px+)
- [ ] Cross-browser test: Chrome, Firefox, Safari, Edge
- [ ] Network throttling test (3G) for performance

## Phase 7: Unit & Integration Tests
- [ ] Setup testing framework (Jest + Testing Library)
- [ ] Write tests for Button, Card, Form components
- [ ] Write tests for complex logic (form validation, carousel)
- [ ] Achieve >80% coverage

## Phase 8: Deployment Prep
- [ ] Create production build (`vite build`)
- [ ] Analyze bundle size (source-map-explorer or vite-bundle-analyzer)
- [ ] Optimize assets (SVG compression, image WebP conversion)
- [ ] Create deploy config (Vercel/Netlify)
- [ ] Add environment variables template
- [ ] Document deployment process

## Phase 9: Documentation
- [ ] Update README.md with setup instructions
- [ ] Document component library usage (COMPONENTS.md)
- [ ] Create changelog (CHANGELOG.md)
- [ ] Add inline code comments where needed
- [ ] Final review against PROJECT_BRIEF.md goals

## Blockers
- None yet
