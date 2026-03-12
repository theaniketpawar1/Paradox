# Design System — PARADOX Website

## Colors
- **Primary:** `#1e3a8a` (Deep blue — trustworthy, AI, premium)
- **Accent:** `#3b82f6` (Blue for interactive elements)
- **Background:** `#ffffff` (Light mode) / `#0f172a` (Dark slate — matches modern tech)
- **Surface:** `#f8fafc` / `#1e293b`
- **Surface Hover:** `#f1f5f9` / `#334155`
- **Border:** `#e2e8f0` / `#475569`
- **Text:** `#0f172a` / `#f8fafc`
- **Text Muted:** `#64748b` / `#94a3b8`
- **Success:** `#10b981`
- **Error:** `#ef4444`
- **Warning:** `#f59e0b`

*Note: Supports system dark mode via `prefers-color-scheme`.*

## Typography
- **Font Family:** Inter, system-ui, sans-serif
- **Headings Weight:** 700 (semibold/bold)
- **Body Weight:** 400 (regular)
- **Line Heights:**
  - Heading: 1.2
  - Body: 1.6
  - Caption: 1.4
- **Sizes (Tailwind scale):**
  - h1: `text-4xl` (mobile) to `text-6xl` (desktop)
  - h2: `text-3xl` (mobile) to `text-4xl` (desktop)
  - h3: `text-xl` to `text-2xl`
  - body: `text-base`
  - caption: `text-sm` or `text-xs`

## Spacing
- **Scale (rem-based):**
  - xs: 0.5rem
  - sm: 0.75rem
  - md: 1rem
  - lg: 1.5rem
  - xl: 2rem
  - 2xl: 3rem
  - 3xl: 4rem
  - 4xl: 6rem

- **Section padding:** `py-24` (desktop), `py-16` (tablet), `py-12` (mobile)

## Layout
- **Container:** max-width 1200px, centered, horizontal padding 16px (mobile) / 32px (desktop)
- **Grid:** Responsive breakpoints:
  - Mobile: 1 column
  - Tablet (`md`): 2 columns
  - Desktop (`lg`): 3 or 4 columns depending on content
- **Gap:** `gap-6` to `gap-8` depending on density

## Buttons
- **Variants:**
  - `primary`: solid primary color, white text
  - `secondary`: outlined or light surface with primary text
  - `ghost`: transparent with accent hover
- **Sizes:** `sm`, `md`, `lg`, `xl`
- **Styles:** Full width option; loading state; disabled state
- **Radius:** `rounded-lg` (0.5rem)
- **Transitions:** `transition-all duration-200 ease-out`

## Cards
- **Padding:** `p-6` (default), `p-8` (large)
- **Background:** surface or white; optional border
- **Border:** `border border-border` subtle
- **Shadow:** `shadow-md` on hover (`shadow-lg hover:shadow-xl transition-shadow`)
- **Radius:** `rounded-lg` (0.5rem)
- **Hover:** Lift effect (`-translate-y-1`) or glow

## Sections
- **Default:** Light background (white or surface)
- **Alternate:** Slightly darker surface for visual rhythm
- **Container:** Always wrapped in `<Container>` component
- **Header:** Centered title `Text h2` with optional gradient span

## Icons
- **Library:** lucide-react (consistent stroke width, modern)
- **Size:** `size-5` (default), `size-6` for emphasis
- **Color:** inherit from text or use `text-primary`

## Motion
- **Duration:** 
  - Fast: 150ms (buttons, hover states)
  - Normal: 250ms (most transitions)
  - Slow: 350ms (page transitions, complex reveals)
- **Easing:** `ease-out` (default), `cubic-bezier` for custom
- **Respects:** `prefers-reduced-motion` — reduce/disable animations
- **Scroll-triggered:** Fade in up with staggered delays using Intersection Observer

## Focus States
- `focus:outline-none` combined with `focus:ring-2 focus:ring-accent focus:border-transparent`
- Ensure visible ring with sufficient contrast

## Elevation (Z-index)
- Dropdown: 100
- Navbar: 500
- Modal: 1000
- Tooltip: 1100

## Form Elements
- Input: `w-full px-4 py-2 border rounded-lg bg-background text-text focus:ring-2 focus:ring-accent`
- Error state: `border-error`
- Label: `block text-sm font-medium mb-2`
- Textarea: `resize-y`, default rows 5

## Responsive Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
