# Component Inventory — PARADOX Website

## Layout Components
- **Container** (`Container.tsx`)
  - Props: `children`, `className?`
  - Purpose: Centers content, max-width 1200px, responsive padding
  - Notes: Reusable across all pages

- **Section** (`Section.tsx`)
  - Props: `children`, `background?` (light/alternate), `padding?`, `className?`
  - Purpose: Wrapper for page sections with consistent vertical spacing
  - Notes: Adds top/bottom padding; optional alternate background

- **Grid** (`Grid.tsx`)
  - Props: `cols`, `md?`, `lg?`, `gap?`, `children`, `className?`
  - Purpose: Responsive grid layout
  - Notes: Default mobile=1, configurable at breakpoints

- **Flex** (`Flex.tsx`)
  - Props: `gap?`, `justify?`, `align?`, `children`, `className?`
  - Purpose: Flexible flex container utilities

## Content Components
- **Text** (`Text.tsx`)
  - Props: `variant` (h1, h2, h3, h4, h5, h6, body, body-lg, body-sm, caption, caption-sm), `weight?`, `color?`, `className?`, `children`
  - Purpose: Typography with consistent styling
  - Notes: Uses Tailwind classes; supports weight and color variants

- **Button** (`Button.tsx`)
  - Props: `as?`, `variant` (primary/secondary/ghost), `size` (sm/md/lg/xl), `fullWidth?`, `isLoading?`, `type?`, `children`
  - Purpose: Consistent CTA buttons
  - States: hover, focus, disabled, loading
  - Notes: Supports polymorphic `as` prop for React Router `Link`

- **Card** (`Card.tsx`)
  - Props: `padding?` (none/sm/md/lg), `hover?`, `children`, `className?`
  - Purpose: Container for content blocks
  - Notes: Optional hover lift; border and shadow default

- **Hero** (`Hero.tsx`)
  - Props: `headline`, `subhead?`, `actions?`, `media?`, `align?` (center/left), `minHeight?` (sm/md/lg), `background?` (light/dark/gradient)
  - Purpose: Page hero section
  - Notes: Uses Container internally; handles alignment and spacing

## Feature Components
- **FeatureList** (`FeatureList.tsx`)
  - Props: `features` array (icon, title, description), `cols?`
  - Purpose: Grid of feature items (icon + text)
  - Notes: Uses Grid internally; suitable for services/features

- **Testimonials** (`Testimonials.tsx`)
  - Props: `testimonials` array (quote, author, role, company)
  - Purpose: 3D carousel of testimonial cards
  - Notes: Auto-play; touch support; dots navigation

## Form Components
- **ContactForm** (`ContactForm.tsx`)
  - Props: `onSubmit`, `submitLabel?`, `successMessage?`
  - Purpose: Reusable contact form
  - Fields: name, email, company, message
  - Features: client-side validation, loading state, success view

## Navigation
- **Navbar** (`Navbar.tsx`)
  - Purpose: Site header with logo, nav links, hamburger for mobile
  - Features: scroll effect (adds background on scroll), smooth scroll
  - Notes: Needs real logo (SVG) and proper mobile a11y

- **Footer** (`Footer.tsx`)
  - Purpose: Site footer with brand, links, social icons, copyright
  - Sections: brand, quick links, services, contact, legal

## Other Components
- **Spinner** (`Spinner.tsx`) — loading indicator
- **WorkCard** (`WorkCard.tsx`) — Portfolio project card; component `WorkGrid` renders grid of these
- **ErrorBoundary** (`ErrorBoundary.tsx`) — React error boundary
- **PricingCard** (`PricingCard.tsx`) — may be unused currently

## Missing Components to Create
- **Badge/Tag** — for service tech stack labels, category labels
- **TrustLogos** — client/partner logos carousel (if needed)
- **FAQ Accordion** — for contact FAQ or separate FAQ page
- **MapEmbed** — Google Maps or OpenStreetMap embed component
- **StructuredData** — helper to inject JSON-LD

## Component Consistency Checks
- All components use same spacing scale from DESIGN_SYSTEM.md
- All buttons use Button component
- All cards use Card component
- All headings use Text component with correct variant
- All icons use lucide-react for consistency
- Color palette consistent across all components
