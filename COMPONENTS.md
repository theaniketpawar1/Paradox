# COMPONENTS.md - Component Library Catalog

## Overview
This file tracks all components created for the PARADOX website. Components should be reusable, accessible, and consistent with the design system.

## Atomic Components

### Button
- **Purpose:** Primary action trigger
- **Variants:** primary, secondary, ghost, destructive
- **Sizes:** sm, md, lg
- **States:** default, hover, focus, active, disabled
- **Accessibility:** keyboard focus visible, aria-disabled, type attribute
- **Reuse:** Used across all pages for CTAs and navigation

### Text
- **Purpose:** Typography for headings, paragraphs, captions
- **Variants:** h1, h2, h3, h4, h5, h6, body, body-lg, caption, caption-sm
- **Properties:** as (semantic element), weight, align, color (muted, accent)
- **Responsive:** Font sizes scale at breakpoints

### Container
- **Purpose:** Constrain content width with consistent horizontal padding
- **Variants:** default, narrow, wide
- **Props:** maxWidth (in rem), centered

### Grid & Flex
- **Purpose:** Layout utilities
- **Grid:** columns (1-12), gap responsive, columnSpan props
- **Flex:** direction (row/col), justify, align, wrap, gap

---

## Composite Components

### Card
- **Purpose:** Content container for feature blocks, testimonials, pricing
- **Variants:** elevated (shadow), outlined (border), flat (no border/shadow)
- **Slots:** header, body, footer
- **Padding:** default, compact, spacious

### Section
- **Purpose:** Page section wrapper with consistent vertical rhythm
- **Props:** variant (default, alternate, dark), padding (sm, md, lg)
- **Includes:** background color, container, vertical spacing

### Hero
- **Purpose:** Full-width top section with headline and CTA
- **Slots:** headline, subhead, actions, media (image/video)
- **Layout:** centered or left-aligned; background variant (light/dark/gradient)
- **Props:** minHeight, align

### Navbar
- **Purpose:** Site navigation header
- **Features:** logo, nav links, mobile hamburger menu, CTA button
- **States:** default, scrolled (optional)
- **Accessibility:** skip link, aria-expanded on menu, focus trapping for mobile

### Footer
- **Purpose:** Multi-column footer with links and legal
- **Sections:** About, Links, Social, Newsletter signup (optional), Copyright
- **Layout:** responsive grid

---

## Complex Components

### FeatureList
- **Purpose:** Display service/feature cards in grid
- **Props:** features array (icon, title, description), columns (responsive)
- **Style:** card layout with icon, heading, text
- **Reuse:** Homepage features, Services page offerings

### Testimonials
- **Purpose:** Social proof via client quotes
- **Options:** grid or carousel (keep simple first: static grid)
- **Fields:** quote, author name, company, avatar (optional)
- **Styling:** quotation mark decoration, muted author styling

### PricingCard
- **Purpose:** Show pricing tiers
- **Variants:** highlighted (popular), default
- **Fields:** plan name, price (month/annual toggle optional), features list, CTA
- **Layout:** card with clear hierarchy

### ContactForm
- **Purpose:** Lead capture
- **Fields:** name (required), email (required, validated), company, message (textarea)
- **Validation:** required, email format; inline error messages
- **Success state:** confirmation message (no alert)
- **Props:** onSubmit handler, submit label

### TeamCard
- **Purpose:** Display team member profile
- **Fields:** photo, name, role, bio, social links (LinkedIn, Twitter, GitHub)

### WorkCard
- **Purpose:** Portfolio project preview
- **Fields:** screenshot/image, title, short description, tech stack tags, link to detail
- **Layout:** image top, content below; hover effect optional
- **Grid:** 2-3 columns responsive

---

## Pages (not components but composition)
- Home
- About
- Services
- Work (Portfolio)
- Contact

---

## Design Consistency Rules
- Use Text component for all text, never raw HTML tags
- Buttons: primary for main CTAs, secondary for secondary actions
- Card padding: use spacing tokens (md default)
- Colors: use theme tokens (primary, secondary, accent, background, surface, text)
- Images: lazy-load, use aspect-ratio containers to prevent layout shift
- Interactive: focus states must be visible; hover effects subtle (transform: translateY, box-shadow)
- Spacing: follow spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128 rem units)

---

## To Build Next
1. Design tokens (CSS variables + ThemeProvider)
2. Atomic: Button, Text, Container, Grid
3. Composite: Card, Section, Hero, Navbar, Footer
4. Complex: FeatureList, Testimonials, ContactForm, WorkCard
5. Pages composition