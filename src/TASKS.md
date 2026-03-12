# Detailed Task List

## Task 1: Prepare Tracking Files
1. Create TASKS.md (this file)
2. Create PROGRESS.md (empty for now, will populate as we work)
3. Create REVIEW.md (empty)
4. Create TEST_REPORT.md (empty)
5. Create DESIGN_SYSTEM.md
6. Create SITEMAP.md
7. Create CONTENT_STRATEGY.md
8. Create COMPONENTS.md

## Task 2: Audit Existing Codebase
1. Read package.json — verify dependencies and scripts
2. Check Vite config (vite.config.ts or vite.config.js)
3. Check TypeScript config (tsconfig.json)
4. Check tailwind.config.js for theme settings
5. List all components in `src/components/` and verify exports
6. List all pages in `src/pages/` and verify routing in App.tsx
7. Identify any broken imports or missing files
8. Note current color scheme and typography from index.css

## Task 3: Content Overhaul — Home Page
1. Rewrite Hero section headline and subhead for PARADOX AI research lab
   - Focus on: AI-driven, modern, premium, local business trust
2. Update features (4 items) to be PARADOX-specific:
   - AI-Enhanced Workflows (true)
   - Accessibility First (true)
   - Performance Obsessed (true)
   - Modern Stack + add one unique: "Local Business Focus" or "Research-Driven"
3. Replace testimonials with 3 real-sounding Indian business testimonials
   - Names: Indian names, cities: Mumbai, Bangalore, Delhi, etc.
   - Companies: Local business types (retail, restaurant, manufacturing, services)
4. Update final CTA to be more specific (e.g., "Transform your business with AI")

## Task 4: Content Overhaul — About Page
1. Update Hero subhead to reflect AI research lab + founder-led story
2. Mission paragraph: authentic, specific to PARADOX
3. Core Values: keep icons; adjust text to match AI lab credibility
4. Leadership Team:
   - Aniket Pawar: Founder & CEO (AI visionary, builder)
   - Maya Singh: Senior Manager (project delivery)
   - Bhakti Shelar: Frontend Developer (precision, a11y, performance)
   - Optional: Add CTO or Research Lead if needed for balance
5. Timeline: realistic founding story from 2022 to present with AI focus

## Task 5: Content Overhaul — Services Page
1. Review 5 services; adjust titles/descriptions to match PARADOX offerings
   - Custom Frontend Development → keep
   - Performance Optimization → keep
   - Accessibility Audits & Remediation → keep
   - AI Integration & Automation → keep (core)
   - Design Systems & Component Libraries → keep
2. Ensure tech stack mentions match actual stack (React, TypeScript, Next.js, Tailwind, Vite)
3. Benefits should speak to local businesses (cost-effective, fast delivery, quality)
4. Process section: 5 steps already generic — keep or fine-tune to PARADOX process

## Task 6: Content Overhaul — Work/Portfolio Page
1. Replace generic project showcases with 6 PARADOX AI-powered solutions relevant to local Indian businesses:
   - AI Customer Support Chatbot for a Retail Chain
   - Predictive Inventory System for a Local Manufacturer
   - Smart Booking & Scheduling for a Healthcare Clinic
   - E-commerce Platform with AI Recommendations for a Boutique
   - Real-time Analytics Dashboard for a Restaurant Chain
   - Automated Content Generator for a Marketing Agency
2. Each project: title, description, tech stack, image (use Unsplash with appropriate keywords)
3. Ensure images are credited or use placeholder with attribution
4. Add project detail page? (if time — probably out of scope for MVP)

## Task 7: Content Overhaul — Contact Page
1. Verify contact details: email, phone, location (should match real PARADOX info)
   - Current: hello@paradox.ai, +91 98765 43210, Pune, Maharashtra, India
   - Confirm with Aniket sir if these are correct; adjust if needed
2. Update FAQ to be specific to PARADOX services, AI, local market
3. Form handler: integrate real Formspree endpoint or mock for now with note
4. Map placeholder: add real Google Maps embed for Pune office (if exists) or leave placeholder with note

## Task 8: Privacy & Terms Pages
1. Review existing Privacy.tsx and Terms.tsx
2. Update with India-specific legal language (IT Act, PDPB compliance considerations)
3. Add company name, address, contact
4. Add effective date and version

## Task 9: Component Review & Polish
1. Navbar: Ensure brand logo and links; mobile menu a11y; smooth scroll to sections
2. Footer: ensure all links match sitemap; social icons (LinkedIn, Twitter/X, GitHub) link to real profiles or placeholders
3. Hero: verify gradient/secondary backgrounds; check alignment options
4. Button: verify variants (primary, secondary) and sizes
5. Card: hover states, padding consistency
6. Grid: responsive column settings
7. Testimonials carousel: ensure it works with new content
8. ContactForm: ensure validation messages are clear; error handling

## Task 10: Design System Documentation
1. Define color palette in DESIGN_SYSTEM.md (primary, accent, background, surface, border, text, etc.)
2. Define spacing scale (rem-based)
3. Typography: font families, weights, sizes, line heights
4. Button styles: variants, sizes, border-radius
5. Card styles: padding, shadows, border, hover effects
6. Section patterns: default padding, alternate background, container max-width
7. Motion rules: transition durations, easing; respect prefers-reduced-motion

## Task 11: Sitemap & Navigation Structure
1. Define final pages and hierarchy in SITEMAP.md
2. Ensure nav links in Navbar component match exactly
3. Add footer links consistent with sitemap
4. Consider adding breadcrumbs on inner pages (if needed)

## Task 12: Content Strategy
1. Document key messages in CONTENT_STRATEGY.md
   - Value propositions
   - Target audience pain points (local businesses)
   - How AI helps them (cost, speed, quality)
   - Trust-building elements (team, portfolio, testimonials)
2. CTA logic: primary vs secondary buttons; where to place "Get Started" vs "Learn More"

## Task 13: Components Inventory
1. List all reusable components in COMPONENTS.md
2. For each: purpose, props, usage examples, design notes
3. Identify any components that need to be created (e.g., Badge, TrustLogo, FAQItem)

## Task 14: Build Verification
1. Install dependencies if not already: `npm install` or `yarn`
2. Run development server: `npm run dev` — verify all pages render
3. Fix any TypeScript errors or warnings
4. Test routing between pages
5. Check console for errors
6. Verify assets load correctly

## Task 15: SEO & Structured Data
1. Add JSON-LD for Organization (type=AILab, local business)
2. Add JSON-LD for each service/product if appropriate
3. Ensure every page has unique title and meta description
4. Add Open Graph and Twitter Card tags consistently
5. Add canonical URLs
6. Create public/sitemap.xml (manually or via vite-plugin-sitemap)
7. Create public/robots.txt

## Task 16: Form Integration
1. Create a Formspree account (free) and obtain form ID
2. Update ContactForm.tsx to use real endpoint
3. Add form field mapping: name, email, company, service interest, message
4. Add honeypot field for spam protection if needed
5. Test submission end-to-end
6. Add success/error feedback to user

## Task 17: Testing
1. Set up Jest + Testing Library if not present
2. Write unit tests:
   - Button renders and click handler works
   - Form validation: required fields, email format
   - Hero component renders headline and actions
   - Grid column count at different breakpoints
3. Run coverage report — target >80%
4. Run Lighthouse in Chrome DevTools; note scores
5. Run axe DevTools; fix any issues (color contrast, ARIA)
6. Manual keyboard nav: Tab through all interactive elements
7. Screen reader quick check with VoiceOver (or NVDA if available)
8. Responsive test using DevTools device toolbar

## Task 18: Performance Optimization
1. Run build: `vite build` — check bundle size (target <200KB gzipped for initial load)
2. Use bundle analyzer if needed
3. Optimize images:
   - Convert to WebP where possible
   - Add responsive sizing (srcset)
   - Lazy load below-the-fold images
4. Check code splitting: Are routes lazy-loaded? (Yes via React.lazy)
5. Add resource hints: preconnect for Google Fonts
6. Ensure CSS is purged properly (Tailwind should handle)
7. Minify and compress (vite does by default)

## Task 19: Deployment Configuration
1. Choose platform: Vercel (recommended) or Netlify
2. Create deployment config files if needed (vercel.json or netlify.toml)
3. Set environment variables (if any)
4. Document deployment steps in README.md
5. Add preview deployment instructions for PRs

## Task 20: Final Documentation
1. Update README.md with:
   - Project description
   - Tech stack
   - Setup instructions (install, dev, build)
   - Deployment instructions
   - Testing instructions
2. Add CHANGELOG.md with version 1.0.0 release notes
3. Ensure all planning files are up-to-date
4. Write final PROGRESS.md summary

## Task 21: Final Review Against Brief
1. Re-read PROJECT_BRIEF.md
2. Confirm all success criteria met
3. If any gaps, return to relevant tasks
4. If all complete, mark project done
